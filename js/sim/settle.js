'use strict';
// イベント発生確率と選択結果の確定

function eventProbability(e) {
  normalizeEventDef(e);
  const snap = makeSnapshot(s);
  const bindings = resolveActors(e, snap, rng) || {};
  let p = e.weight ? (computeEventWeight(e, snap, bindings) / 100) : (e.p ?? 0.2);

  // 1. 独身期の出会いイベント増幅 (15〜49歳)
  const isEncounter = e.is_encounter ?? encounterEvent(e);
  if (s.age >= 15 && s.age <= 49 && !hasPartner(s) && isEncounter) {
    p *= s.age <= 35 ? 2.1 : 1.6;
  }

  // 2. 地域・街区親和性補正
  if (e.locationKind === 'community' && s.location.district === '農村集落') p *= 1.5;
  if (e.locationKind === 'work' && s.location.terrain === '都市部') p *= 1.5;

  const districtMap = { residential: '住宅街', downtown: '繁華街', commercial: '商業地域', rural: '農村集落', industrial: '工業地域', wealthy: '高所得地域', deprived: '経済的困難が多い地域' };
  const key = e.district || Object.keys(districtMap).find(k => e.id.includes(k));
  const targetDistrict = key ? districtMap[key] : null;
  if (targetDistrict) {
    if (s.location.district === targetDistrict) {
      p *= 3.5;
      if (isSexuallyAroused(s)) p *= 1.5;
      if (key === 'downtown' && ((s.morality ?? 0) <= -5 || (s.social ?? 0) >= 15)) p *= 1.4;
      if (key === 'commercial' && s.flags.employed) p *= 1.4;
      if (key === 'wealthy' && ((s.money ?? 0) >= 15 || (s.aesthetics ?? 0) >= 15)) p *= 1.4;
      if (key === 'deprived' && ((s.money ?? 0) <= 0 || (s.stress ?? 0) >= 15)) p *= 1.4;
      if (key === 'rural' && s.location.terrain === '山間部') p *= 1.4;
      if (key === 'industrial' && (s.independence ?? 0) >= 10) p *= 1.3;
      if (key === 'residential' && s.location.sinceAge <= s.age - 2) p *= 1.3;
    } else {
      let visitProb = 0.4;
      if (key === 'downtown' && s.location.terrain === '都市部') visitProb = 0.8;
      if (key === 'commercial' && (s.location.terrain === '都市部' || s.flags.employed)) visitProb = 0.8;
      if (key === 'rural' && ['山間部', '平野部'].includes(s.location.terrain)) visitProb = 0.7;
      if (key === 'wealthy' && (s.money ?? 0) >= 20) visitProb = 0.7;
      if (key === 'deprived' && (s.money ?? 0) <= 0) visitProb = 0.8;
      p *= visitProb;
    }
  }

  // 3. アングラ適格・職業補正
  if (e.presets?.includes('underground_eligible') || e.id.startsWith('underground_')) {
    if (!isEligibleForUndergroundSexWork(s)) return 0;
    p *= s.occupation === '風俗' ? 1.5 : 0.5;
  }

  // 4. パートナー有無による背徳抑制／親密ブースト
  const isPartnered = hasPartner(s);
  if (isPartnered && e.unfaithful_penalty_when_partnered) {
    p *= 0.15;
  }
  if (isPartnered && e.partner_intimacy_boost) {
    p *= 2.2;
  }

  // 5. イベント定義側の宣言的ブースト (e.boosts)
  if (Array.isArray(e.boosts)) {
    for (const b of e.boosts) {
      if (b.whenFlag && s.flags?.[b.whenFlag]) p *= (b.factor ?? 1.0);
      else if (Array.isArray(b.whenAnyFlag) && b.whenAnyFlag.some(f => s.flags?.[f])) p *= (b.factor ?? 1.0);
    }
  }

  // 6. 性的興奮・微細パラメータ補正
  const x = s.sexuality || {};
  if (['rare_funeral_cousin_taboo', 'rare_travel_stranger_or_gang', 'rare_outing_secret_quickie'].includes(e.id)) {
    if (isSexuallyAroused(s)) p *= 2.5;
    if (s.flags.in_heat) p *= 2.0;
  }
  if (e.id === 'adult_trust_test' && (s.flags.choice_bullying_1 || s.bonds?.some(b => b.status === 'former'))) p *= 2.2;
  if (e.id === 'adult_meeting') p *= .6 + x.curiosity / 150 + x.initiative / 250;
  if (e.id === 'adult_feelings') p *= .5 + x.initiative / 125 - x.shyness / 350;
  if (e.id === 'adult_intimacy') p *= .65 + x.boundaryVoice / 220 + x.intimacyNeed / 300;
  if (e.id === 'adult_private_values') p *= .7 + x.selfKnowledge / 250 + x.curiosity / 400;
  if (e.id === 'adult_relationship_conflict') p *= .8 + (100 - x.boundaryVoice) / 450;
  if (e.id === 'adult_new_chapter') p *= .7 + x.intimacyNeed / 250;
  if (e.id === 'adult_shared_intimacy') p *= .7 + x.desire / 180 + x.intimacyNeed / 240;
  if (e.id === 'adult_mismatched_desire') p *= .6 + Math.abs(x.desire - (s.bonds.find(b => b.status === 'partner')?.desire ?? x.desire)) / 70;

  return Math.max(0, Math.min(1, p));
}
function settle(event, index, continueYear = true) {
  const active = getEventCurrent(event);
  const choice = active.choices[index]; if (!choice) return;
  const choiceEff = getChoiceEffect(choice);
  const before = snapshot();
  const curPartner = getPrimaryPartner(s);
  const isIntimateChoice = isIntimacyChoiceSelected(active, index, choice, active.outcomes?.[index]);
  let skipSeenMark = false;

  s.flags['choice_' + event.id + '_' + index] = true;
  if (event.id === 'fixed_milestone_sex_education') {
    s.flags.sex_education_done = true;
    s.flags.sexually_aware = true;
  }
  if (event.id === 'fixed_milestone_coming_of_age_18') {
    s.flags.coming_of_age_18_done = true;
  }
  if (event.id === 'fixed_milestone_age_20_birthday') {
    s.flags.age_20_birthday_done = true;
    s.flags.can_drink_alcohol = true;
    s.flags.can_smoke = true;
  }
  if (event.id === 'first_kiss_milestone' || event.id === 'same_sex_first_kiss') {
    if (index === 0) {
      s.flags.firstKiss = true;
      s.flags.had_first_kiss_with_partner = true;
      if (curPartner) curPartner.kissed = true;
      advanceScenario('romance', 'kissed');
    } else {
      skipSeenMark = true;
    }
  }
  if (event.id === 'first_intimacy_milestone' || event.id === 'partner_first_intimacy_experienced' || event.id === 'partner_intimacy_hesitation') {
    if (isIntimateChoice) {
      s.flags.firstSexualExperience = true;
      s.flags.had_first_intimacy_with_partner = true;
      s.flags.had_first_kiss_with_partner = true;
      if (curPartner) {
        curPartner.kissed = true;
        curPartner.intimate = true;
        curPartner.intimateSinceAge ??= s.age;
      }
      advanceScenario('romance', 'intimate');
    } else {
      skipSeenMark = true;
    }
  }
  if (event.id === 'adult_marriage_proposal') {
    if (index === 0) {
      s.flags.engaged = true;
      s.flags.had_first_intimacy_with_partner = true;
      s.flags.had_first_kiss_with_partner = true;
      s.flags.cohabiting = true;
      if (curPartner) {
        curPartner.kissed = true;
        curPartner.intimate = true;
        curPartner.cohabiting = true;
      }
      advanceScenario('romance', 'engaged');
      s.chains ??= [];
      if (!s.chains.some(c => c.eventId === 'marriage_ceremony')) {
        s.chains.push({
          eventId: 'marriage_ceremony',
          targetAge: s.age,
          targetAgeMonths: (s.age_months || 0) + (3 + Math.floor(rng.next() * 3)),
          prob: 1.0
        });
      }
    }
  }
  if (event.id === 'marriage_ceremony' || event.id === 'adult_marriage_ceremony' || event.id === 'fixed_milestone_marriage') {
    s.flags.engaged = false;
    s.flags.married = true;
    s.flags.cohabiting = true;
    s.flags.living_alone = false;
    s.flags.had_first_intimacy_with_partner = true;
    s.flags.had_first_kiss_with_partner = true;
    if (curPartner) {
      curPartner.status = 'spouse';
      curPartner.kissed = true;
      curPartner.intimate = true;
      curPartner.cohabiting = true;
      curPartner.marriedAge = s.age;
      updateBondRelation(curPartner, '生涯を誓い合った配偶者');
    }
    advanceScenario('romance', 'married');
    completeScenario('romance');
    completeScenario('independence');
    completeScenario('cohabitation_limbo');
    completeScenario('premarital_pregnancy');
    completeScenario('infidelity_crisis');
    completeScenario('wavering_heart');
    if (curPartner) {
      startScenario('marriage_life', 'newlywed', { partnerId: curPartner.id, partnerName: curPartner.name });
    }
    harmonizeScenarios(s);
    if (s.flags.pregnant || s.flags.shotgun_wedding) {
      s.chains ??= [];
      if (!s.chains.some(c => c.eventId === 'story_childbirth_miracle')) {
        s.chains.push({
          eventId: 'story_childbirth_miracle',
          targetAge: s.age,
          targetAgeMonths: (s.age_months || 0) + 6,
          prob: 1.0
        });
      }
    }
  }
  if ((event.id === 'youth_first_apartment_hunt' || event.id === 'young_living_alone') && index === 0) {
    s.flags.living_alone = true;
    startScenario('independence', 'living_alone');
  }
  if (event.id === 'youth_job_hunting_suit') {
    startScenario('career', 'job_hunting');
  }
  if (event.id === 'adult_future_together' && index === 0) {
    s.flags.cohabiting = true;
    s.flags.living_alone = false;
    if (curPartner) curPartner.cohabiting = true;
    advanceScenario('romance', 'cohabiting');
    completeScenario('independence');
    harmonizeScenarios(s);
  }

  // === 結婚分岐ストーリー群の進行・解決処理 ===
  if (event.id === 'story_cohabitation_routine_rut') {
    if (index === 0) advanceScenario('cohabitation_limbo', 'marriage_avoidance');
    else if (index === 1) startScenario('cohabitation_limbo', 'comfortable_rut');
    else if (index === 2) {
      startScenario('cohabitation_limbo', 'comfortable_rut');
      if (curPartner) curPartner.intimate = true;
    }
  }
  if (event.id === 'story_cohabitation_ultimatum') {
    if (index === 0) {
      completeScenario('cohabitation_limbo');
      advanceScenario('romance', 'engaged');
      s.flags.engaged = true;
      if (curPartner) updateBondRelation(curPartner, '婚約中');
      s.chains ??= [];
      s.chains.push({ eventId: 'marriage_ceremony', targetAge: s.age, targetAgeMonths: (s.age_months || 0) + (3 + Math.floor(rng.next() * 3)), prob: 1.0 });
    } else if (index === 1) {
      failScenario('cohabitation_limbo', 'broken');
      completeScenario('romance');
      if (curPartner) {
        curPartner.status = 'former';
        curPartner.cohabiting = false;
        updateBondRelation(curPartner, '同棲解消・元恋人');
      }
      s.flags.cohabiting = false;
      s.flags.engaged = false;
      s.flags.living_alone = true;
      startScenario('independence', 'living_alone');
      harmonizeScenarios(s);
    } else if (index === 2) {
      completeScenario('cohabitation_limbo');
      s.flags.cohabitation_accepted = true;
      if (curPartner) updateBondRelation(curPartner, '同棲パートナー');
    }
  }
  if (event.id === 'story_partner_infidelity_suspicion') {
    if (index === 0) {
      startScenario('infidelity_crisis', 'suspicion');
      s.flags.found_infidelity_evidence = true;
    } else if (index === 1) {
      startScenario('infidelity_crisis', 'suspicion');
    } else if (index === 2) {
      startScenario('infidelity_crisis', 'confrontation');
    }
  }
  if (event.id === 'story_partner_infidelity_confrontation') {
    if (index === 0) {
      completeScenario('infidelity_crisis');
      advanceScenario('romance', 'engaged');
      s.flags.engaged = true;
      if (curPartner) updateBondRelation(curPartner, '婚約中');
      s.chains ??= [];
      s.chains.push({ eventId: 'marriage_ceremony', targetAge: s.age, targetAgeMonths: (s.age_months || 0) + (4 + Math.floor(rng.next() * 3)), prob: 1.0 });
    } else if (index === 1) {
      failScenario('infidelity_crisis', 'broken');
      completeScenario('romance');
      completeScenario('cohabitation_limbo');
      if (curPartner) {
        curPartner.status = 'former';
        curPartner.cohabiting = false;
        updateBondRelation(curPartner, '浮気され破局した元恋人');
      }
      s.flags.cohabiting = false;
      s.flags.engaged = false;
      s.flags.living_alone = true;
      startScenario('independence', 'living_alone');
      harmonizeScenarios(s);
    } else if (index === 2) {
      completeScenario('infidelity_crisis');
      if (curPartner) curPartner.intimate = true;
    }
  }
  if (event.id === 'story_wavering_heart_temptation') {
    if (index === 0) {
      completeScenario('wavering_heart');
    } else if (index === 1) {
      startScenario('wavering_heart', 'secret_hesitation');
      s.flags.wavering_stolen_kiss = true;
    } else if (index === 2) {
      startScenario('wavering_heart', 'temptation');
      s.flags.secret_affair_started = true;
    }
  }
  if (event.id === 'story_wavering_heart_resolution') {
    if (index === 0) {
      completeScenario('wavering_heart');
      advanceScenario('romance', 'engaged');
      s.flags.engaged = true;
      if (curPartner) updateBondRelation(curPartner, '婚約中');
      s.chains ??= [];
      s.chains.push({ eventId: 'marriage_ceremony', targetAge: s.age, targetAgeMonths: (s.age_months || 0) + (3 + Math.floor(rng.next() * 3)), prob: 1.0 });
    } else if (index === 1) {
      completeScenario('wavering_heart');
    } else if (index === 2) {
      failScenario('wavering_heart', 'switch');
      completeScenario('romance');
      completeScenario('cohabitation_limbo');
      if (curPartner) {
        curPartner.status = 'former';
        curPartner.cohabiting = false;
        updateBondRelation(curPartner, '心変わりにより別れた元恋人');
      }
      s.flags.cohabiting = false;
      s.flags.engaged = false;
      s.flags.living_alone = true;
      startScenario('independence', 'living_alone');
      harmonizeScenarios(s);
    }
  }
  if (event.id === 'story_premarital_pregnancy_test') {
    startScenario('premarital_pregnancy', 'positive_test');
    s.flags.pregnant = true;
    s.flags.premarital_pregnant = true;
  }
  if (event.id === 'story_premarital_pregnancy_announcement') {
    completeScenario('premarital_pregnancy');
    completeScenario('cohabitation_limbo');
    completeScenario('wavering_heart');
    advanceScenario('romance', 'engaged');
    s.flags.engaged = true;
    s.flags.shotgun_wedding = true;
    if (curPartner) updateBondRelation(curPartner, '婚約中（授かり婚）');
    s.chains ??= [];
    s.chains.push({ eventId: 'marriage_ceremony', targetAge: s.age, targetAgeMonths: (s.age_months || 0) + 2, prob: 1.0 });
    harmonizeScenarios(s);
  }
  if (event.id === 'story_marriage_third_anniversary') {
    s.flags.marriage_3rd_anniversary_done = true;
    advanceScenario('marriage_life', 'settled');
    harmonizeScenarios(s);
  }
  if (event.id === 'story_pregnancy_discovery') {
    s.flags.pregnant = true;
    s.flags.pregnancyAge = s.age;
    advanceScenario('marriage_life', 'pregnant');
    s.chains ??= [];
    if (!s.chains.some(c => c.eventId === 'story_childbirth_miracle')) {
      s.chains.push({
        eventId: 'story_childbirth_miracle',
        targetAge: s.age,
        targetAgeMonths: (s.age_months || 0) + 10,
        prob: 1.0
      });
    }
    harmonizeScenarios(s);
  }
  if (event.id === 'story_childbirth_miracle') {
    s.flags.pregnant = false;
    s.flags.hasChildren = true;
    s.flags.child_born = true;
    s.flags.childBirthAge = s.age;
    s.family ??= {};
    s.family.children_ids = ['child_1'];
    s.children ??= [];
    if (!s.children.length) {
      s.children.push({ id: 'child_1', birthAge: s.age, name: '我が子' });
    }
    advanceScenario('marriage_life', 'parenting');
    s.chains ??= [];
    if (!s.chains.some(c => c.eventId === 'story_parenting_tender_days')) {
      s.chains.push({
        eventId: 'story_parenting_tender_days',
        targetAge: s.age + 1,
        targetAgeMonths: (s.age_months || 0) + 14,
        prob: 1.0
      });
    }
    harmonizeScenarios(s);
  }
  if (event.id === 'story_parenting_tender_days') {
    s.flags.seen_parenting_story = true;
    advanceScenario('marriage_life', 'parenting');
    harmonizeScenarios(s);
  }
  if (event.id === 'life_parenthood_question') {
    if (index === 0) s.flags.trying_for_baby = true;
    else if (index === 1) s.flags.childfree_chosen = true;
  }
  if (event.id === 'partner_sex_fertility_timing' && isIntimateChoice) {
    s.flags.trying_for_baby = true;
  }
  if (event.id === 'same_sex_awakening' && index === 0) {
    s.flags.same_sex_awakened = true;
  }
  if ((event.id === 'crowded_train_escalation' && index === 0) || (event.id === 'daily_morning_trash_gaze' && index === 3)) {
    s.flags.taboo_awakened = true;
  }

  if (choiceEff.occupation) {
    s.occupation = choiceEff.occupation;
    if (['一般職', '専門職・クリエイター', '自営業'].includes(choiceEff.occupation)) s.flags.employed = true;
    else if (['学生', '無職', '専業主婦', '風俗'].includes(choiceEff.occupation)) s.flags.employed = false;
    if (choiceEff.occupation === '学生') s.flags.university = s.age >= 18;
  }
  if (choiceEff.chain) {
    s.chains ??= [];
    const delayYears = choiceEff.chain.delay || 1;
    const delayMonths = choiceEff.chain.delayMonths ?? (delayYears <= 1 ? (3 + Math.floor(rng.next() * 4)) : delayYears * 12);
    s.chains.push({
      eventId: choiceEff.chain.eventId,
      targetAge: s.age + (delayYears > 1 ? delayYears : 0),
      targetAgeMonths: (s.age_months || 0) + delayMonths,
      prob: choiceEff.chain.prob ?? 1
    });
  }
  apply(balancedChoiceEffect(active, choiceEff));
  const choiceSexEff = choiceEff.sexualEffects || {};
  const directSexEff = {};
  for (const [k] of SEXUAL_KEYS) {
    if (typeof choiceEff[k] === 'number') directSexEff[k] = choiceEff[k];
  }
  const eventSexEff = active.sexualEffects?.[index] || {};
  const mergedSexEff = { ...eventSexEff, ...choiceSexEff, ...directSexEff };
  if (Object.keys(mergedSexEff).length > 0) {
    changeSexuality(mergedSexEff);
  }
  if (active.locationKind) apply(locationEffect(active.locationKind));
  handleSocialOutcome(active, index, choiceEff, choice); s.relationships = s.bonds.length;
  if (isHandledBySettleIntimacy(event.id) && isIntimateChoice) {
    const isPartner = isPartnerEvent(event);
    const partner = isPartner ? (getPrimaryPartner(s) || s.bonds.find(b => b.gender === 'female') || null) : null;
    if (isPartner && partner) {
      partner.kissed = true;
      partner.intimate = true;
      partner.intimateSinceAge ??= s.age;
      s.flags.had_first_kiss_with_partner = true;
      s.flags.had_first_intimacy_with_partner = true;
    }
    if (!isPartner) {
      s.flags.taboo_awakened = true;
    }
    const diarySnippet = diaryForEvent(active, index) || '';
    const pName = isPartner ? (partner?.name || 'パートナー') : (event.id.includes('stranger') ? '見知らぬ男' : event.id.includes('cousin') ? 'いとこ' : event.id.includes('video') ? 'AV男優' : event.id.includes('sexwork') ? '指名客' : event.id.includes('street') ? '街の客' : event.id.includes('sugar') ? 'パパ（愛人相手）' : event.id.includes('trainer') ? 'パーソナルトレーナー' : event.id.includes('chauffeur') ? 'お抱え運転手' : event.id.includes('truck') ? 'トラック運転手' : event.id.includes('neighbor') ? '近所の男' : '見知らぬ相手');
    const extraCount = event.id.includes('gang') ? 3 : 1;
    recordExperience('intimacy', active.title + '：' + getChoiceLabel(choice), partner?.id ?? null, {
      consent: true,
      mutual: true,
      satisfaction: 85,
      private: true,
      title: active.title,
      diary: diarySnippet,
      partnerName: pName,
      extraCount
    });
  }
  if (event.id === 'move' && index === 0) { const next = newLocation(rng); setLocation(next, '引っ越し') }
  if (!skipSeenMark) {
    s.seen[event.id] = (s.seen[event.id] || 0) + 1;
    s.lastSeenAge ??= {};
    s.lastSeenAge[event.id] = s.age;
    s.seenThisYear ??= [];
    if (!s.seenThisYear.includes(event.id)) s.seenThisYear.push(event.id);
  }

  // 新アーキテクチャ: バリエーション outcomes マトリクス処理
  let varOutcome = null;
  let finalChoiceResult = null;
  let finalDiary = null;
  if (active.currentVariation && active.currentVariation.outcomes) {
    const stance = choice.stance || choice.id;
    varOutcome = active.currentVariation.outcomes[stance] || active.currentVariation.outcomes[index];
    if (varOutcome) {
      finalChoiceResult = varOutcome.text || varOutcome.description;
      finalDiary = varOutcome.diary;
      if (varOutcome.effects) apply(varOutcome.effects);
      if (varOutcome.sexualEffects) changeSexuality(varOutcome.sexualEffects);

      // ストーリー連鎖フラグの更新
      s.stanceHistory ??= [];
      s.stanceHistory.push({ eventId: event.id, stance, age: s.age, month: s.current_month });
      if (stance === 'passionate' || stance === 'choice_passionate') {
        s.flags.partner_intimacy_streak = (s.flags.partner_intimacy_streak || 0) + 1;
        s.flags.partner_frustrated = 0;
        s.flags.partner_distance = 0;
      } else if (stance === 'tease' || stance === 'choice_tease') {
        s.flags.partner_frustrated = (s.flags.partner_frustrated || 0) + 1;
      } else if (stance === 'refuse' || stance === 'choice_refuse') {
        s.flags.partner_distance = (s.flags.partner_distance || 0) + 1;
        s.flags.partner_intimacy_streak = 0;
      }
      if (varOutcome.next_chain) {
        s.flags[varOutcome.next_chain] = true;
      }
    }
  }

  const { label: choiceLabel, result: parsedResult } = parseChoice(active, index, choice);
  const rawResult = finalChoiceResult || parsedResult;
  const p = getPrimaryPartner(s);
  const displayResult = injectPartnerName(rawResult, p);
  const displayDiary = finalDiary ? ageDiary(injectPartnerName(finalDiary, p)) : ageDiary(injectPartnerName(diaryForEvent(active, index), p));

  log(active.title, displayDiary, changeSummary(before, snapshot()), {
    choice: choiceLabel,
    result: displayResult,
    classification: active.classification || 'daily'
  });
  s.lastVariationSubId ??= {};
  if (active.currentVariation?.sub_id) {
    s.lastVariationSubId[event.id] = active.currentVariation.sub_id;
  }
  s.activeVariationSubId = null;
  if (s.pending !== 'multiple_relationship') s.pending = null;
  if (continueYear && !s.pending) processYearEvents();
  harmonizeScenarios(s);
  s.rngState = rng.state(); render();
  if (!s.pending && !s.finished && isAutoPlaying) scheduleNextAutoStep(800);
}
function settleNarrative(rawEvent, continueYear = true) {
  if (!rawEvent) return;
  const before = snapshot();
  s.seen[rawEvent.id] = (s.seen[rawEvent.id] || 0) + 1;
  s.lastSeenAge ??= {};
  s.lastSeenAge[rawEvent.id] = s.age;
  s.seenThisYear ??= [];
  if (!s.seenThisYear.includes(rawEvent.id)) s.seenThisYear.push(rawEvent.id);

  // 効果の適用
  if (rawEvent.effects) {
    if (Array.isArray(rawEvent.effects)) {
      for (const eff of rawEvent.effects) {
        if (eff.path === 'chain') {
          s.chains ??= [];
          const delayYears = eff.value.delay || 1;
          const delayMonths = eff.value.delayMonths ?? (delayYears <= 1 ? (3 + Math.floor(rng.next() * 4)) : delayYears * 12);
          s.chains.push({
            eventId: eff.value.eventId,
            targetAge: s.age + (delayYears > 1 ? delayYears : 0),
            targetAgeMonths: (s.age_months || 0) + delayMonths,
            prob: eff.value.prob ?? 1.0
          });
        } else if (eff.path?.startsWith('history.flags.')) {
          s.flags[eff.path.replace('history.flags.', '')] = eff.value;
        } else if (eff.path === 'state.mood') {
          s.happiness = bounded('happiness', (s.happiness || 0) + eff.value);
        } else if (eff.path === 'state.stress') {
          s.stress = bounded('stress', (s.stress || 0) + eff.value);
        } else if (eff.path === 'skill.knowledge') {
          s.knowledge = bounded('knowledge', (s.knowledge || 0) + eff.value);
        } else if (eff.path === 'skill.communication_skill') {
          s.social = bounded('social', (s.social || 0) + eff.value);
        } else if (eff.path === 'state.self_efficacy') {
          s.independence = bounded('independence', (s.independence || 0) + eff.value);
        } else if (eff.path === 'trait.constitution.current') {
          s.health = bounded('health', (s.health || 0) + eff.value);
        } else if (eff.path === 'state.current_libido') {
          if (s.sexuality) s.sexuality.desire = bounded('desire', (s.sexuality.desire || 0) + Math.round(eff.value / 10));
        }
      }
    } else if (typeof rawEvent.effects === 'object') {
      apply(rawEvent.effects);
    }
  }

  const active = getEventCurrent(rawEvent);
  const p = getPrimaryPartner(s);
  const diaryText = active.diary || ageDiary(injectPartnerName(diaryForEvent(active, 0), p));
  const badgeLabel = active.narrative_type === 'precursor' ? 'きっかけ' :
    active.narrative_type === 'followup' ? '後日談' : '出来事';

  log(active.title, diaryText, changeSummary(before, snapshot()), {
    narrative: true,
    narrativeType: active.narrative_type || 'story',
    badgeLabel
  });

  if (s.pending === rawEvent.id) s.pending = null;
  if (continueYear && !s.pending) processYearEvents();
  harmonizeScenarios(s);
  s.rngState = rng.state();
  render();
  if (!s.pending && !s.finished && isAutoPlaying) scheduleNextAutoStep(800);
}
