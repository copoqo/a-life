'use strict';
// イベント結果に応じた人間関係・経験の処理

function updateBondRelation(target, relationText) {
  if (!target) return;
  target.relationContext = relationText;
  if (!target.metContext) target.metContext = relationText;
}

function upsertEventBond(spec = {}, event = null) {
  const role = spec.role || null;
  const gender = spec.gender || null;
  const targetStatus = spec.status || 'acquaintance';
  const metContext = spec.metContext || (event?.title ? event.title : null);
  const mode = spec.mode || 'upsert';

  // 既存の同種・同属性の知人/友人がいるか探す（createモード以外）
  if (mode !== 'create') {
    const existing = s.bonds.find(b =>
      (b.status === 'acquaintance' || b.status === 'close') &&
      (!role || b.role === role) &&
      (!gender || b.gender === gender)
    );
    if (existing) {
      const wasAcq = existing.status === 'acquaintance';
      if (targetStatus === 'close' && wasAcq) {
        existing.status = 'close';
      }
      existing.affection = clamp((existing.affection || 35) + (spec.affectionDelta ?? (targetStatus === 'close' ? 12 : 7)));
      existing.trust = clamp((existing.trust || 35) + (spec.trustDelta ?? (targetStatus === 'close' ? 8 : 5)));
      if (spec.romanticInterest != null) existing.romanticInterest = Math.max(existing.romanticInterest || 0, spec.romanticInterest);
      if (metContext) {
        if (!existing.metContext) existing.metContext = metContext;
        existing.relationContext = spec.relationContext || metContext;
      }
      const roleLabel = BOND_ROLE_LABELS[existing.role] || '知人';
      if (wasAcq && existing.status === 'close') {
        recordExperience('friendship', `${existing.name}（${roleLabel}）と親しくなった${metContext ? `（${metContext}）` : ''}`, existing.id);
        log(`${existing.name}（${roleLabel}）との絆が深まり、「親しい友人」になった。`);
      } else {
        recordExperience('friendship', `${existing.name}（${roleLabel}）との親交を深めた${metContext ? `（${metContext}）` : ''}`, existing.id);
      }
      s.relationships = s.bonds.length;
      return existing;
    }
  }

  if (s.bonds.length >= 30) return null;
  const custom = { ...spec, status: targetStatus, initialStatus: targetStatus };
  if (metContext) {
    custom.metContext = metContext;
    if (spec.relationContext && spec.relationContext !== metContext) {
      custom.relationContext = spec.relationContext;
    }
  }
  const b = createBond(role, gender, custom);
  if (spec.affection != null) b.affection = clamp(spec.affection);
  else if (targetStatus === 'close') b.affection = Math.max(b.affection || 45, 52);
  if (spec.trust != null) b.trust = clamp(spec.trust);
  else if (targetStatus === 'close') b.trust = Math.max(b.trust || 40, 45);
  if (spec.romanticInterest != null) b.romanticInterest = clamp(spec.romanticInterest);
  s.bonds.push(b);
  s.relationships = s.bonds.length;
  const roleLabel = BOND_ROLE_LABELS[b.role] || '知人';
  if (targetStatus === 'close') {
    recordExperience('friendship', `${b.name}（${roleLabel}）と出会い、親しい友人になった${metContext ? `（${metContext}）` : ''}`, b.id);
    log(`${b.name}（${roleLabel}）と親しくなり、人間関係に「親しい友人」として記録された。`);
  } else {
    recordExperience('meeting', `${b.name}（${roleLabel}）と知り合った${metContext ? `（${metContext}）` : ''}`, b.id);
    log(`${b.name}（${roleLabel}）との新たな出会いがあり、人間関係に記録された。`);
  }
  return b;
}

function resolveRoleSpecificBond(eventId) {
  if (!eventId) return null;
  if (eventId.startsWith('encounter_teacher')) {
    let b = s.bonds.find(x => x.role === 'teacher');
    if (!b && s.bonds.length < 30) {
      b = createBond('teacher', 'male', { status: 'close', private: true, metContext: '放課後の個別指導の先生' });
      s.bonds.push(b);
      s.relationships = s.bonds.length;
    }
    return b;
  }
  if (eventId.startsWith('encounter_colleague')) {
    let b = s.bonds.find(x => x.role === 'colleague');
    if (!b && s.bonds.length < 30) {
      b = createBond('colleague', 'male', { status: 'close', private: true, metContext: '深夜残業の職場の同僚' });
      s.bonds.push(b);
      s.relationships = s.bonds.length;
    }
    return b;
  }
  if (eventId.startsWith('encounter_parent_friend')) {
    let b = s.bonds.find(x => x.role === 'parent_friend');
    if (!b && s.bonds.length < 30) {
      b = createBond('parent_friend', 'male', { status: 'close', private: true, metContext: '送迎で知り合った子供の友達の親' });
      s.bonds.push(b);
      s.relationships = s.bonds.length;
    }
    return b;
  }
  if (eventId.startsWith('encounter_partner_sibling')) {
    let b = s.bonds.find(x => x.role === 'partner_sibling');
    if (!b && s.bonds.length < 30) {
      b = createBond('partner_sibling', 'male', { status: 'close', private: true, metContext: 'パートナーのきょうだい' });
      s.bonds.push(b);
      s.relationships = s.bonds.length;
    }
    return b;
  }
  return null;
}

function handleSocialOutcome(e, index, choiceEff = {}, choice = null) {
  // 選択肢効果 (choiceEff) や choice に指定された明示的な人間関係定義
  const bondDef = choiceEff.bond || choiceEff.relationship;
  const meetingDef = choiceEff.meeting;
  let outcome = e.outcomes?.[index];
  if (!outcome && typeof choice?.outcome === 'string') outcome = choice.outcome;
  if (typeof outcome !== 'string') outcome = null;

  if (bondDef || meetingDef) {
    const spec = typeof bondDef === 'object' ? bondDef : { role: typeof meetingDef === 'string' ? meetingDef : null, status: 'acquaintance' };
    upsertEventBond(spec, e);
    return;
  }

  let bond = s.bonds.find(b => b.status === 'spouse')
    || s.bonds.find(b => b.status === 'partner')
    || s.bonds.find(b => b.status === 'close' && isRomanticallyCompatible(b, s))
    || s.bonds.find(b => b.status === 'acquaintance' && isRomanticallyCompatible(b, s))
    || s.bonds.find(b => b.status === 'close')
    || s.bonds.find(b => b.status === 'acquaintance');
  if ((e.id === 'first_date_milestone' || e.id === 'adult_first_date') && (index === 0 || index === 1)) {
    s.flags.firstDate = true;
    s.flags.had_first_date_with_partner = true;
    const p = getPrimaryPartner(s) || bond;
    if (p) {
      p.affection = clamp((p.affection || 40) + 8);
      p.trust = clamp((p.trust || 40) + 5);
      recordExperience('first_date', p.name + 'と初めて二人でデートした', p.id);
    }
  }

  // 告白されるイベント (confessed_to)：断る／友達として／保留／交際承諾／交際＋初キス
  if (e.id === 'confessed_to') {
    const defaultRole = isStudent(s) ? 'classmate' : (isEmployed(s) ? 'colleague' : 'friend');
    const targetGender = getRomanticTargetGender(s);
    if (index === 0) {
      recordExperience('rejection', '思いがけない相手からの告白を丁寧に断った');
      return;
    }
    if (index === 1) {
      // 「まずは友達として仲良くしよう」 -> 必ず親しい友人 (close) として人間関係に記録
      let confessor = s.bonds.find(b => b.status === 'acquaintance' && isRomanticallyCompatible(b, s) && (b.romanticInterest || 0) >= 65);
      if (confessor) {
        confessor.status = 'close';
        confessor.affection = clamp(Math.max(confessor.affection || 50, 58));
        confessor.trust = clamp(Math.max(confessor.trust || 40, 48));
        confessor.romanticInterest = clamp(Math.max(confessor.romanticInterest || 75, 78));
        updateBondRelation(confessor, '告白を機に友人へ');
      } else if (s.bonds.length < 30) {
        confessor = createBond(defaultRole, targetGender, {
          status: 'close',
          affection: 58,
          trust: 48,
          romanticInterest: 78,
          metContext: '告白を機に友人へ',
          relationContext: '告白を機に友人へ'
        });
        s.bonds.push(confessor);
      }
      s.relationships = s.bonds.length;
      if (confessor) {
        const roleLabel = BOND_ROLE_LABELS[confessor.role] || '友人';
        recordExperience('friendship', `${confessor.name}（${roleLabel}）の告白に「まずは友達として」と答え、親しい友人になった`, confessor.id);
        log(`${confessor.name}（${roleLabel}）とまずは友達として仲良くすることになり、人間関係に記録された。`);
      }
      return;
    }
    if (index === 2) {
      // 「少し考える時間をちょうだい」 -> 気になる知人 (acquaintance, 高好感度・高恋愛関心) として人間関係に記録
      let confessor = s.bonds.find(b => b.status === 'acquaintance' && isRomanticallyCompatible(b, s) && (b.romanticInterest || 0) >= 65);
      if (confessor) {
        confessor.affection = clamp(Math.max(confessor.affection || 45, 52));
        confessor.romanticInterest = clamp(Math.max(confessor.romanticInterest || 75, 82));
        updateBondRelation(confessor, '告白の返事を保留中');
      } else if (s.bonds.length < 30) {
        confessor = createBond(defaultRole, targetGender, {
          status: 'acquaintance',
          affection: 52,
          trust: 42,
          romanticInterest: 82,
          metContext: '告白の返事を保留中',
          relationContext: '告白の返事を保留中'
        });
        s.bonds.push(confessor);
      }
      s.relationships = s.bonds.length;
      if (confessor) {
        const roleLabel = BOND_ROLE_LABELS[confessor.role] || '知人';
        recordExperience('meeting', `${confessor.name}（${roleLabel}）から告白され、返事を保留した`, confessor.id);
        log(`${confessor.name}（${roleLabel}）からの告白に考える時間をもらい、人間関係に記録された。`);
      }
      return;
    }
    if (index === 3 || index === 4) {
      let target = s.bonds.find(b => (b.status === 'close' || b.status === 'acquaintance') && isRomanticallyCompatible(b, s) && (b.romanticInterest || 0) >= 60)
        || s.bonds.find(b => (b.status === 'close' || b.status === 'acquaintance') && isRomanticallyCompatible(b, s));
      if (!target) {
        target = createBond(defaultRole, targetGender, {
          status: 'close',
          affection: 62,
          trust: 50,
          romanticInterest: 85,
          metContext: '告白を受けて交際',
          relationContext: '告白を受けて交際'
        });
        s.bonds.push(target);
        s.relationships = s.bonds.length;
      } else {
        updateBondRelation(target, '告白を受けて交際');
        target.affection = clamp(Math.max(target.affection || 50, 62));
      }
      if (!hasPartner(s)) {
        startRelationship(target);
      } else {
        proposeRelationship(target);
      }
      if (index === 4) {
        target.kissed = true;
        s.flags.firstKiss = true;
        if (target.status === 'partner' || target.status === 'spouse') {
          s.flags.had_first_kiss_with_partner = true;
        }
        recordExperience('first_kiss', target.name + 'と告白の直後に唇を重ねた', target.id, { consent: true, mutual: true });
      }
      return;
    }
  }

  if (e.id === 'adult_romantic_encounter' && index === 0) {
    const b = createBond(null, getRomanticTargetGender(s), {
      status: 'close',
      affection: 58,
      trust: 45,
      romanticInterest: 82,
      metContext: '街角の偶然の出会い'
    });
    if (s.bonds.length < 30) {
      s.bonds.push(b);
      s.relationships = s.bonds.length;
      proposeRelationship(b);
    }
    return;
  }

  if (e.id === 'same_sex_awakening' && index === 0) {
    s.flags.same_sex_awakened = true;
    upsertEventBond({
      role: 'classmate',
      gender: 'female',
      status: 'close',
      affection: 56,
      trust: 48,
      romanticInterest: 78,
      metContext: '放課後の更衣室で意識した同級生'
    }, e);
    return;
  }

  if (e.id === 'same_sex_first_kiss' && index === 0) {
    let fPartner = s.bonds.find(b => (b.status === 'partner' || b.status === 'spouse') && b.gender === 'female')
      || s.bonds.find(b => b.gender === 'female' && (b.status === 'close' || b.status === 'acquaintance'));
    if (!fPartner) {
      fPartner = createBond('classmate', 'female', { status: 'close', affection: 62, trust: 52, romanticInterest: 85, metContext: '放課後の図書室で初キスを交わした相手', relationContext: '放課後の図書室で初キスを交わした相手' });
      s.bonds.push(fPartner);
      s.relationships = s.bonds.length;
    } else {
      updateBondRelation(fPartner, '放課後の図書室で初キスを交わした相手');
    }
    if (!hasPartner(s)) startRelationship(fPartner);
    else if (fPartner.status !== 'partner' && fPartner.status !== 'spouse') proposeRelationship(fPartner);
    fPartner.kissed = true;
    s.flags.firstKiss = true;
    s.flags.had_first_kiss_with_partner = true;
    s.flags.same_sex_awakened = true;
    recordExperience('first_kiss', fPartner.name + 'と放課後の図書室で初めてのキスを交わした', fPartner.id, { consent: true, mutual: true });
    return;
  }

  if (e.id === 'same_sex_society_bond' && index === 0) {
    const fp = s.bonds.find(b => (b.status === 'partner' || b.status === 'spouse') && b.gender === 'female') || getPrimaryPartner(s);
    if (fp) {
      fp.cohabiting = true;
      fp.trust = clamp((fp.trust || 50) + 12);
      fp.affection = clamp((fp.affection || 50) + 12);
      updateBondRelation(fp, 'パートナーシップを誓い合った伴侶');
      s.flags.cohabiting = true;
      recordExperience('relationship', fp.name + 'とパートナーシップの誓いを交わした', fp.id, { mutual: true });
    }
    return;
  }

  if (!outcome || outcome === 'none') return;

  if (outcome === 'reconcile_friend') {
    let friendBond = s.bonds.find(b => b.status === 'close' || b.status === 'acquaintance');
    if (!friendBond && s.bonds.length < 30) {
      friendBond = createBond('classmate', null, { status: 'close', affection: 60, trust: 58, metContext: '本音で話し合い仲直りした親友', relationContext: '本音で話し合い仲直りした親友' });
      s.bonds.push(friendBond);
      s.relationships = s.bonds.length;
    } else if (friendBond) {
      friendBond.status = 'close';
      friendBond.affection = clamp((friendBond.affection || 45) + 12);
      friendBond.trust = clamp((friendBond.trust || 45) + 12);
      updateBondRelation(friendBond, '本音で話し合い仲直りした親友');
    }
    if (friendBond) {
      recordExperience('friendship', friendBond.name + 'と本音で向き合い、友情を取り戻した', friendBond.id);
      log(`${friendBond.name}と本音で話し合って仲直りし、以前よりも絆が深まった。`);
    }
    return;
  }

  if (outcome.startsWith('closer_')) {
    const role = outcome.replace('closer_', '');
    const closerContextMap = {
      teen_encounter_library_glance: '放課後の図書室で勉強を教えてもらった先輩',
      teen_encounter_rainy_bus_stop_umbrella: '雨のバス停で相合傘を差し出してくれた他校生',
      teen_encounter_cram_school_break: '塾の非常階段で缶ココアを分け合った相手',
      teen_encounter_sports_festival_sweat: '用具倉庫で倒れそうになったところを抱きとめてくれた相手',
      teen_encounter_cultural_festival_costume: '買い出しの人混みで恋人繋ぎをしてくれた同級生',
      teen_encounter_infirmary_afternoon: '午後の保健室で秘密の囁きを交わした同級生',
      teen_romance_adjacent_desks_doodle: '授業中に机の下で膝を触れ合わせた隣の席の同級生',
      teen_romance_cleaning_duty_dustpan: '放課後の教室で二人きりで掃除当番をした同級生',
      teen_romance_sharing_earphones_bicycle_parking: '駐輪場で有線イヤホンを分け合って肩を寄せた同級生',
      teen_romance_print_handout_backward_glance: 'プリントを回すたびに密かに指先を重ねた同級生',
      teen_romance_convenience_store_famichiki_bench: '学校帰りのコンビニで肉まんを半分こした同級生',
      teen_romance_study_group_family_restaurant: 'テスト前のファミレスで夜まで二人で残った同級生'
    };
    upsertEventBond({
      role: role,
      status: 'close',
      mode: 'create',
      affection: 56,
      trust: 44,
      romanticInterest: 78,
      metContext: closerContextMap[e.id] || (role === 'stranger' ? '街角で声をかけられカフェで意気投合' : '学生時代の印象的な出会い')
    }, e);
    return;
  }

  if (outcome === 'intimate_stranger') {
    const b = upsertEventBond({
      role: 'stranger',
      status: 'close',
      mode: 'create',
      affection: 48,
      trust: 35,
      intimate: true,
      private: true,
      metContext: '街角で誘われホテルで一夜を共にした相手'
    }, e);
    s.flags.firstSexualExperience = true;
    s.flags.taboo_awakened = true;
    if (b) {
      b.intimate = true;
      b.intimateSinceAge ??= s.age;
      recordExperience('intimacy', `${b.name}（街で出会った人）に誘われるままホテルへ入り、一夜を共にした`, b.id, {
        consent: true,
        mutual: true,
        satisfaction: 72,
        private: true,
        title: e.title,
        partnerName: b.name
      });
    }
    return;
  }

  if (outcome.startsWith('meeting')) {
    if (s.bonds.length >= 30) return;
    const role = outcome.startsWith('meeting_') ? outcome.replace('meeting_', '') : null;
    const isIntimateEncounter = e.id.startsWith('encounter_') && (e.id !== 'encounter_teacher' || index >= 2) && isIntimacyChoiceSelected(e, index, choice, outcome);
    const contextMap = {
      adult_meeting: index === 0 ? '自分から声をかけた出会い' : '視線が交差した出会い',
      street_encounter_allure: '街角での立ち話',
      encounter_teacher: index >= 2 ? '準備室で秘密を共有した先生' : '放課後の個別指導の先生',
      encounter_stranger_adult: '夜の路地裏で出会った大人',
      encounter_friends_sibling: '友達の家で出会ったきょうだい',
      encounter_colleague: '深夜の休憩室で急接近した同僚',
      encounter_partner_sibling: '留守中に接近したパートナーのきょうだい',
      encounter_parent_friend: '送迎の車内で接近した子供の友達の親',
      encounter_childs_teacher: '夕暮れの面談室で接近した担任教師',
      encounter_bar_stranger: 'バーのカウンターで隣り合った人',
      encounter_neighbor: '深夜に訪れた隣人',
      teen_encounter_library_glance: '図書室で本棚越しに出会った先輩',
      teen_encounter_rainy_bus_stop_umbrella: '夕立のバス停で居合わせた他校生',
      teen_encounter_cram_school_break: '塾の自習室の合間に話した勉強仲間',
      teen_encounter_sports_festival_sweat: '体育祭の準備で倉庫を手伝ってくれた仲間',
      teen_encounter_cultural_festival_costume: '文化祭の買い出しに一緒に行った同級生',
      teen_encounter_infirmary_afternoon: '午後の保健室で居合わせた同級生',
      teen_romance_adjacent_desks_doodle: '授業中にメモを回し合った隣の席の同級生',
      teen_romance_cleaning_duty_dustpan: '放課後の掃除当番で居合わせた同級生',
      teen_romance_sharing_earphones_bicycle_parking: '駐輪場で音楽を聴いていた同級生',
      teen_romance_print_handout_backward_glance: '前後の席でプリントを回し合う同級生',
      teen_romance_convenience_store_famichiki_bench: '学校帰りにコンビニに寄り道した同級生',
      teen_romance_study_group_family_restaurant: '放課後にファミレスで勉強した同級生'
    };
    let b = role ? s.bonds.find(x => x.role === role && (x.status === 'acquaintance' || x.status === 'close')) : null;
    if (!b || !e.id.startsWith('encounter_')) {
      b = createBond(role, null, {
        status: isIntimateEncounter ? 'close' : 'acquaintance',
        affection: e.id === 'adult_meeting' && index === 0 ? 46 : (isIntimateEncounter ? 52 : 35),
        romanticInterest: e.id === 'adult_meeting' ? 72 : undefined,
        private: isIntimateEncounter,
        intimate: isIntimateEncounter && e.id !== 'encounter_teacher',
        metContext: contextMap[e.id] || e.title
      });
      s.bonds.push(b);
      s.relationships = s.bonds.length;
      const roleLabel = BOND_ROLE_LABELS[b.role] || '知人';
      recordExperience('meeting', b.name + '（' + roleLabel + '）と知り合った', b.id);
      log(`${b.name}（${roleLabel}）との新たな出会いがあり、人間関係に加わった。`);
    } else {
      if (isIntimateEncounter) {
        b.status = 'close';
        b.private = true;
      }
      if (contextMap[e.id]) updateBondRelation(b, contextMap[e.id]);
    }
    if (isIntimateEncounter) {
      const encounterIntimacyDescs = {
        encounter_teacher: '施錠された準備室で、' + b.name + '（先生）の熱い吐息と愛撫を受け入れた',
        encounter_stranger_adult: b.name + '（知らない大人）の車内で、手慣れた指と肉欲に翻弄され素肌を奪われた',
        encounter_friends_sibling: '友達の家の隣室で、' + b.name + 'に口を塞がれ下着の中に手を差し入れられた',
        encounter_colleague: '深夜のオフィス休憩室で、' + b.name + '（同僚）に抱きすくめられ激しく身体を重ねた',
        encounter_partner_sibling: 'パートナーの留守中、' + b.name + '（パートナーのきょうだい）と背徳の情交に溺れた',
        encounter_parent_friend: '子供の行事の後、' + b.name + 'と二人きりで車内で身体を重ねてしまった',
        encounter_childs_teacher: '面談後の教室で、' + b.name + '（担任教師）と秘密の交わりを持った',
        encounter_bar_stranger: 'バーの奥の個室で、居合わせた' + b.name + 'と肌を密着させて一晩を共にした',
        encounter_neighbor: '深夜のベランダや部屋で、隣人の' + b.name + 'と衝動的に身体を重ねた'
      };
      if (encounterIntimacyDescs[e.id]) {
        s.flags.taboo_awakened = true;
        b.intimate = true;
        b.intimateSinceAge ??= s.age;
        if (e.id !== 'encounter_teacher' || index === 4) {
          s.flags.firstSexualExperience = true;
        }
        recordExperience('intimacy', encounterIntimacyDescs[e.id], b.id, {
          consent: true,
          mutual: true,
          satisfaction: 68,
          private: true,
          title: e.title,
          partnerName: b.name
        });
      }
    }
    return;
  }
  if (outcome === 'marry') {
    const p = s.bonds.find(b => b.status === 'partner') || s.bonds.find(b => b.status === 'spouse');
    if (p) {
      const alreadySpouse = p.status === 'spouse';
      p.status = 'spouse';
      p.kissed = true;
      p.intimate = true;
      p.cohabiting = true;
      p.trust = clamp(p.trust + 10);
      p.affection = clamp(p.affection + 10);
      updateBondRelation(p, '生涯を誓い合った配偶者');
      s.flags.engaged = false;
      s.flags.married = true;
      s.flags.cohabiting = true;
      s.flags.living_alone = false;
      s.flags.had_first_kiss_with_partner = true;
      s.flags.had_first_intimacy_with_partner = true;
      advanceScenario('romance', 'married');
      completeScenario('romance');
      completeScenario('independence');
      completeScenario('cohabitation_limbo');
      completeScenario('premarital_pregnancy');
      completeScenario('infidelity_crisis');
      completeScenario('wavering_heart');
      startScenario('marriage_life', 'newlywed', { partnerId: p.id, partnerName: p.name });
      harmonizeScenarios(s);
      if (!alreadySpouse) {
        recordExperience('relationship', p.name + 'と生涯を誓い合い、婚姻関係を結んだ', p.id, { mutual: true });
        log(p.name + 'と結婚した。新しい家庭を築き、夫婦としての人生が始まる。', ageDiary(p.name + 'と婚姻の誓いを交わした。左手の薬指に輝く指輪の重みと温もりに、生涯を共にする実感が胸に満ちた。'));
      }
    }
    return;
  }
  if (outcome === 'infidelity') {
    let target = s.bonds.find(b => (b.status === 'close' || (b.status === 'partner' && b.private)) && b.status !== 'spouse' && isRomanticallyCompatible(b, s));
    if (!target) {
      target = createBond(null, 'male', { status: 'partner', private: true, intimate: true, metContext: '配偶者に隠れた秘密の不倫相手', relationContext: '配偶者に隠れた秘密の不倫相手' });
      s.bonds.push(target);
      s.relationships = s.bonds.length;
    }
    target.status = 'partner';
    target.private = true;
    target.intimate = true;
    target.intimateSinceAge ??= s.age;
    updateBondRelation(target, '配偶者に隠れた秘密の不倫相手');
    target.affection = clamp(target.affection + 15);
    target.trust = clamp(target.trust + 5);
    s.secrecy = clamp(s.secrecy + 15);
    s.stress = bounded('stress', s.stress + 5);
    s.flags.taboo_awakened = true;
    s.flags.firstSexualExperience = true;
    recordExperience('secret_relationship', target.name + 'と配偶者に隠れて禁断の不倫関係を結んだ', target.id, { private: true });
    recordExperience('intimacy', target.name + 'と密室で禁断の不倫の情交に溺れた', target.id, { consent: true, mutual: true, satisfaction: 78, private: true, title: e.title, partnerName: target.name });
    log(target.name + 'との秘密の不倫関係が始まった。背徳と罪悪感が交錯する。');
    return;
  }
  if (outcome === 'divorce') {
    const sp = s.bonds.find(b => b.status === 'spouse');
    if (sp) {
      sp.status = 'former'; sp.consent = false; updateBondRelation(sp, '離婚した元配偶者');
      s.flags.married = false; s.flags.divorced = true; s.flags.cohabiting = false;
      s.flags.living_alone = true;
      failScenario('romance', 'divorce');
      failScenario('marriage_life', 'divorce');
      failScenario('cohabitation_limbo', 'divorce');
      failScenario('infidelity_crisis', 'divorce');
      failScenario('wavering_heart', 'divorce');
      startScenario('independence', 'living_alone');
      harmonizeScenarios(s);
      recordExperience('breakup', sp.name + 'と離婚届を提出し、婚姻関係を解消した', sp.id);
      log(sp.name + 'と離婚した。夫婦としての生活に終止符を打った。');
    }
    return;
  }
  if (outcome === 'bereavement') {
    const sp = s.bonds.find(b => b.status === 'spouse') || s.bonds.find(b => b.status === 'partner');
    if (sp) {
      sp.status = 'widowed'; sp.consent = false; updateBondRelation(sp, '死別した最愛の伴侶');
      s.flags.married = false; s.flags.widowed = true; s.flags.cohabiting = false;
      s.flags.living_alone = true;
      failScenario('romance', 'bereavement');
      failScenario('marriage_life', 'bereavement');
      failScenario('cohabitation_limbo', 'bereavement');
      failScenario('infidelity_crisis', 'bereavement');
      failScenario('wavering_heart', 'bereavement');
      startScenario('independence', 'living_alone');
      harmonizeScenarios(s);
      recordExperience('bereavement', '最愛の伴侶 ' + sp.name + ' と永遠の死別を迎えた', sp.id);
      log(sp.name + 'が静かに息を引き取った。最愛の伴侶を見送り、深い悲しみに暮れた。');
    }
    return;
  }
  if (outcome === 'reunion') {
    const old = s.bonds.find(b => b.status === 'former');
    if (old) {
      old.trust = clamp(old.trust + 6);
      old.affection = clamp(old.affection + 8);
      updateBondRelation(old, '再会して言葉を交わした元恋人');
      recordExperience('reunion', old.name + 'と再会し、懐かしい時間を分かち合った', old.id);
      log(`${old.name}（元恋人）と再会し、穏やかに近況を語り合った。`);
    }
    return;
  }
  if (outcome === 'approach' || outcome === 'closer') {
    let target = s.bonds.find(b => (b.status === 'close' || b.status === 'acquaintance') && isRomanticallyCompatible(b, s));
    if (!target && s.bonds.length < 30) {
      target = createBond(null, getRomanticTargetGender(s), { status: 'close', affection: 52, trust: 45, romanticInterest: 78, metContext: '想いを寄せた相手', relationContext: '想いを寄せた相手' });
      s.bonds.push(target);
      s.relationships = s.bonds.length;
    }
    if (!target) return;
    if (outcome === 'closer') {
      target.status = 'close';
      target.affection = clamp((target.affection || 40) + 15);
      target.trust = clamp((target.trust || 35) + 8);
      target.romanticInterest = clamp(Math.max(target.romanticInterest || 60, 72));
      updateBondRelation(target, '距離を縮めた大切な人');
      recordExperience('friendship', target.name + 'との距離が縮まり、親しい関係になった', target.id);
      log(`${target.name}との距離が少しずつ縮まり、人間関係が「親しい友人」へ深まった。`);
      return;
    }
    // outcome === 'approach' (熱い想いを打ち明ける)
    target.affection = clamp((target.affection || 45) + 18);
    target.trust = clamp((target.trust || 40) + 10);
    const willingness = Math.max(0.55, approachProbability(target));
    if (chance(willingness)) {
      updateBondRelation(target, '自分から想いを伝えて結ばれた相手');
      proposeRelationship(target);
    } else {
      target.status = 'close';
      updateBondRelation(target, '想いを伝えた大切な友人');
      recordExperience('rejection', target.name + 'に想いを伝えたが、まずは友人として関係を続けることになった', target.id);
      log(`${target.name}に想いを伝えた。すぐには交際に至らなかったが、大切な友人として関係を続けることになった。`);
    }
    return;
  }

  // 特定ロールの遭遇イベント (encounter_teacher_deep_bond, encounter_colleague_after_hours, encounter_parent_friend_secret_hotel) のターゲット解決
  const roleSpecificBond = resolveRoleSpecificBond(e.id);
  if (roleSpecificBond) bond = roleSpecificBond;

  if (!bond) return;

  if (e.id === 'encounter_colleague_after_hours' && index === 1) {
    // 「本当の恋人同士になりたいと耳元で甘く囁く」
    bond.affection = clamp((bond.affection || 50) + 15);
    bond.trust = clamp((bond.trust || 45) + 10);
    updateBondRelation(bond, '深夜残業から恋人へと進んだ同僚');
    proposeRelationship(bond);
    return;
  }

  if (outcome === 'shared_activity') { bond.affection = clamp(bond.affection + 5); recordExperience('communication', bond.name + 'と新しい時間の過ごし方を試した', bond.id); return }
  if (outcome === 'first_kiss') {
    let p = s.bonds.find(b => b.status === 'partner' || b.status === 'spouse')
      || s.bonds.find(b => b.status === 'close' && isRomanticallyCompatible(b, s));
    if (!p) return;
    if (p.status === 'close' && !hasPartner(s) && isRomanticallyCompatible(p, s)) startRelationship(p);
    p.kissed = true;
    s.flags.firstKiss = true;
    s.flags.had_first_kiss_with_partner = true;
    recordExperience('first_kiss', p.name + 'と互いに唇を奪い合い、熱い舌を絡ませる濃厚な初キスを交わした', p.id, { consent: true, mutual: true });
    p.trust = clamp(p.trust + 5);
    p.affection = clamp(p.affection + 10);
    return;
  }
  if (outcome === 'shared_intimacy') {
    if (!isIntimacyChoiceSelected(e, index, choice, null)) return;
    let p = roleSpecificBond
      || s.bonds.find(b => b.status === 'partner' || b.status === 'spouse')
      || s.bonds.find(b => b.status === 'close' && isRomanticallyCompatible(b, s));
    if (p) {
      if (!roleSpecificBond && p.status === 'close' && !hasPartner(s) && isRomanticallyCompatible(p, s)) {
        startRelationship(p);
      } else if (roleSpecificBond) {
        p.status = p.status === 'acquaintance' ? 'close' : p.status;
        p.private = true;
        s.flags.taboo_awakened = true;
      }
      p.kissed = true;
      p.intimate = true;
      p.intimateSinceAge ??= s.age;
      p.trust = clamp(p.trust + 4);
      p.affection = clamp(p.affection + 5);
      s.flags.firstKiss = true;
      s.flags.firstSexualExperience = true;
      if (!roleSpecificBond) {
        s.flags.had_first_kiss_with_partner = true;
        s.flags.had_first_intimacy_with_partner = true;
      }
      // settle() 側で個別記録されないイベント（first_intimacy_milestone, adult_shared_intimacy, encounter_*_deep_bond 等）のみここで記録
      if (!isHandledBySettleIntimacy(e.id)) {
        const diarySnippet = diaryForEvent(e, index) || '';
        recordExperience('intimacy', e.title + '：' + getChoiceLabel(choice), p.id, {
          consent: true,
          mutual: true,
          satisfaction: 82,
          private: true,
          title: e.title,
          diary: diarySnippet,
          partnerName: p.name
        });
      }
    }
    return;
  }
  if (outcome === 'disclose_relationship' || outcome === 'private_relationship') { const disclose = outcome === 'disclose_relationship'; bond.private = !disclose; recordExperience('disclosure', disclose ? '二人の合意で関係を周囲に伝えた' : '二人の合意で関係を非公開にした', bond.id, { mutual: true, private: !disclose }); log(disclose ? '二人で話し合い、関係を周囲に伝えた。' : '二人で話し合い、関係は非公開にすると決めた。'); return }
  if (outcome === 'mutual_talk') { bond.trust = clamp(bond.trust + 4); bond.affection = clamp((bond.affection || 35) + 3); recordExperience('communication', bond.name + 'と希望や境界線について対話した', bond.id); log('互いの希望を話し合い、理解が少し深まった。'); return }
  if (outcome === 'boundary') { recordExperience('boundary', '望まないことを伝えた', bond.id); log('自分の境界線を伝えた。'); return }
  if (outcome === 'distance') { bond.affection = clamp(bond.affection - 8); log(bond.name + 'との距離を少し置いた。'); return }
  if (outcome === 'breakup') {
    bond.status = 'former';
    bond.consent = false;
    updateBondRelation(bond, '話し合いで別れた元恋人');
    s.flags.cohabiting = false;
    s.flags.engaged = false;
    s.flags.living_alone = true;
    failScenario('romance', 'breakup');
    failScenario('cohabitation_limbo', 'breakup');
    failScenario('infidelity_crisis', 'breakup');
    failScenario('wavering_heart', 'breakup');
    startScenario('independence', 'living_alone');
    harmonizeScenarios(s);
    recordExperience('breakup', bond.name + 'との関係を終える選択をした', bond.id);
    log(bond.name + 'と話し合いの末、交際関係を終えた。');
    return;
  }
  if (outcome === 'reflection' || outcome === 'privacy') recordExperience(outcome, '自分の価値観について考えた');
}
