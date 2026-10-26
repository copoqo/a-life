'use strict';
// 季節・ストーリーディレクター・月次イベント抽選と処理

// === 季節と月（年の途中の時間経過）ユーティリティ ===
function getSeasonName(month) {
  if (month >= 3 && month <= 5) return '春';
  if (month >= 6 && month <= 8) return '夏';
  if (month >= 9 && month <= 11) return '秋';
  return '冬';
}

function getPreferredMonths(e) {
  if (!e) return null;
  if (typeof e.seasonMonth === 'number') return [clamp(e.seasonMonth, 1, 12)];
  const t = (e.title || '') + ' ' + (e.text || '') + ' ' + (e.id || '');
  if (/正月|初詣|元旦|成人式|新年/.test(t)) return [1];
  if (/節分|バレンタイン|チョコ/.test(t)) return [2];
  if (/卒業|ひな祭り|春休み|早春/.test(t)) return [3];
  if (/入学|新学期|桜|身体測定|花見/.test(t)) return [4];
  if (/五月|ゴールデンウィーク|新緑|母の日|初夏/.test(t)) return [5];
  if (/梅雨|プール|水着|父の日/.test(t)) return [6, 7];
  if (/七夕|夏休み|海|キャンプ|盛夏|日焼け/.test(t)) return [7, 8];
  if (/お盆|花火|夏祭り|猛暑|宿題|晩夏/.test(t)) return [8];
  if (/初秋|秋雨|月見|台風/.test(t)) return [9];
  if (/文化祭|運動会|ハロウィン|紅葉/.test(t)) return [10, 11];
  if (/七五三|晩秋|木枯らし|勤労感謝/.test(t)) return [11];
  if (/クリスマス|年末|大掃除|冬休み|忘年会/.test(t)) return [12];
  if (/春/.test(t)) return [3, 4, 5];
  if (/夏/.test(t)) return [6, 7, 8];
  if (/秋/.test(t)) return [9, 10, 11];
  if (/冬|雪|寒波|こたつ/.test(t)) return [12, 1, 2];
  return null;
}

function isEventMonthCompatible(e, month) {
  const pref = getPreferredMonths(e);
  if (!pref) return true;
  return pref.includes(month);
}

function assignEventMonth(e, index = 0, total = 1) {
  const pref = getPreferredMonths(e);
  if (pref && pref.length) return pref[Math.floor(rng.next() * pref.length)];
  return s?.current_month || (1 + Math.floor(rng.next() * 12));
}
// === ストーリーディレクター：文脈アーク重みづけ・同一年内の矛盾排他・時系列順序 ===
const SWEET_ROMANCE_IDS = new Set([
  'partner_loving_passion_after_date', 'partner_anniversary_deep_love', 'positive_anniversary',
  'adult_marriage_proposal', 'marriage_ceremony', 'adult_future_together',
  'partner_sex_mastered_pleasure', 'partner_sex_mature_comfortable_bond', 'adult_relationship_growth'
]);
const CRISIS_ROMANCE_IDS = new Set([
  'adult_relationship_conflict', 'adult_relationship_distance', 'adult_mismatched_desire',
  'partner_sex_tired_reluctance', 'partner_sex_fertility_timing', 'marital_intimacy_crisis',
  'marital_divorce', 'partner_sex_reconciliation_makeup'
]);
const MILESTONE_STAGE_ORDER = {
  first_romance_holding_hands: 10,
  first_date_milestone: 12,
  adult_first_date: 12,
  positive_date_idea: 14,
  positive_flirting: 15,
  first_kiss_milestone: 20,
  same_sex_first_kiss: 20,
  first_kiss_afterthought: 25,
  partner_intimacy_hesitation: 28,
  first_intimacy_milestone: 30,
  partner_first_intimacy_experienced: 30,
  same_sex_intimate_bath: 32,
  intimacy_awakening: 35,
  intimacy_afterthought: 38,
  adult_future_together: 45,
  adult_marriage_proposal: 50,
  marriage_ceremony: 55
};

function getEventNarrativeConflictGroup(e) {
  if (!e) return null;
  if (SWEET_ROMANCE_IDS.has(e.id)) return 'sweet_romance';
  if (CRISIS_ROMANCE_IDS.has(e.id)) return 'crisis_romance';
  if (e.id.startsWith('district_') || e.id.startsWith('rare_') || e.id.startsWith('underground_') || (e.id.startsWith('encounter_') && !['encounter_neighbor', 'encounter_bar_stranger'].includes(e.id))) {
    return 'stranger_taboo';
  }
  return null;
}

function isStoryEvent(e) {
  if (!e) return false;
  if (e.is_major || e.classification === 'major') return true;
  if (['adult_marriage_proposal', 'marriage_ceremony', 'adult_future_together', 'youth_first_apartment_hunt', 'young_living_alone', 'confessed_to', 'first_kiss_milestone', 'same_sex_first_kiss', 'first_intimacy_milestone', 'partner_first_intimacy_experienced', 'first_date_milestone', 'adult_first_date', 'youth_job_hunting_suit', 'youth_first_paycheck_parents', 'story_cohabitation_routine_rut', 'story_cohabitation_ultimatum', 'story_partner_infidelity_suspicion', 'story_partner_infidelity_confrontation', 'story_wavering_heart_temptation', 'story_wavering_heart_resolution', 'story_premarital_pregnancy_test', 'story_premarital_pregnancy_announcement', 'story_marriage_third_anniversary', 'story_pregnancy_discovery', 'story_childbirth_miracle', 'story_parenting_tender_days'].includes(e.id)) return true;
  return false;
}

function getStoryArcBoost(e, st = s) {
  if (!e || !st) return 1.0;
  let boost = 1.0;
  const stage = getPartnerStage(st);
  const p = getPrimaryPartner(st);

  // 1. 関係性ステージに応じた自然なストーリーアーク優先ブースト
  if (stage === 1) {
    if (['first_date_milestone', 'adult_first_date', 'first_romance_holding_hands', 'positive_date_idea', 'positive_flirting', 'first_kiss_milestone', 'same_sex_first_kiss', 'student_partner_rain_umbrella', 'student_partner_study_session'].includes(e.id)) {
      boost *= 3.5;
    }
  } else if (stage === 2) {
    if (['first_kiss_afterthought', 'partner_intimacy_hesitation', 'first_intimacy_milestone', 'partner_first_intimacy_experienced', 'same_sex_secret_fingers', 'same_sex_intimate_bath', 'student_partner_first_sleepover'].includes(e.id)) {
      boost *= 3.8;
    }
  } else if (stage === 3) {
    if (['intimacy_awakening', 'intimacy_afterthought', 'partner_loving_passion_after_date', 'adult_shared_intimacy', 'partner_intimacy_male', 'partner_intimacy_female', 'partner_passion_lifestyle', 'sexual_first_conversation', 'sexual_satisfaction', 'same_sex_tribadism'].includes(e.id)) {
      boost *= 2.6;
    }
  } else if (stage === 4) {
    const partnerYears = p?.intimateSinceAge != null ? Math.max(0, (st.age ?? 0) - p.intimateSinceAge) : (p?.partnerYears || 0);
    const maturityBonus = Math.min(3.5, 1.0 + partnerYears * 0.6);

    // 進行中シナリオの次ステップへの優先ブースト
    if (isScenarioActive('cohabitation_limbo', null, st) && e.id === 'story_cohabitation_ultimatum') boost *= 6.0;
    if (isScenarioActive('infidelity_crisis', null, st) && e.id === 'story_partner_infidelity_confrontation') boost *= 6.0;
    if (isScenarioActive('wavering_heart', null, st) && e.id === 'story_wavering_heart_resolution') boost *= 6.0;
    if (isScenarioActive('premarital_pregnancy', null, st) && e.id === 'story_premarital_pregnancy_announcement') boost *= 7.0;

    // 同棲中・長引く関係でのストーリー分岐トリガー
    if (p?.cohabiting && !st.flags?.married) {
      if (e.id === 'story_cohabitation_routine_rut' && !st.seen?.[e.id]) boost *= (3.5 * maturityBonus);
      if (e.id === 'story_wavering_heart_temptation' && !st.seen?.[e.id]) boost *= 2.4;
      if (e.id === 'story_partner_infidelity_suspicion' && !st.seen?.[e.id]) boost *= 2.4;
    }
    // 妊娠発覚ストーリー（適齢期・肉体関係あり・未婚）
    if (st.gender === 'female' && p?.intimate && !st.flags?.married && st.age >= 20 && st.age <= 38 && !st.seen?.story_premarital_pregnancy_test) {
      if (e.id === 'story_premarital_pregnancy_test') boost *= 2.8;
    }

    if ((p?.affection ?? 50) >= 42 && (p?.trust ?? 45) >= 38) {
      if (['adult_future_together', 'adult_marriage_proposal', 'partner_anniversary_deep_love', 'positive_anniversary', 'partner_sex_mastered_pleasure', 'same_sex_society_bond'].includes(e.id)) {
        boost *= (3.2 * maturityBonus);
      }
    } else if ((p?.affection ?? 50) < 38 || (st.flags?.partner_distance || 0) >= 1) {
      if (CRISIS_ROMANCE_IDS.has(e.id)) boost *= 2.5;
    }
  } else if (stage === 5) {
    if (e.id === 'marriage_ceremony' && !st.seen?.marriage_ceremony) boost *= 5.0;
    else if (st.flags?.pregnant && e.id === 'story_childbirth_miracle') boost *= 8.0;
    else if (st.flags?.hasChildren && e.id === 'story_parenting_tender_days' && !st.seen?.story_parenting_tender_days) boost *= 5.0;
    else if (!st.flags?.hasChildren && !st.flags?.pregnant && e.id === 'story_pregnancy_discovery' && !st.seen?.story_pregnancy_discovery) {
      boost *= st.flags?.trying_for_baby ? 4.5 : 2.8;
    }
    else if (e.id === 'story_marriage_third_anniversary' && !st.seen?.story_marriage_third_anniversary) boost *= 4.0;
    else if (['marital_life_intimacy', 'marital_cooking_together', 'marital_living_room_cuddle', 'marital_bedtime_whisper', 'marital_holiday_stroll', 'marital_affection_skinship', 'life_household', 'life_parenthood_question'].includes(e.id)) boost *= 2.2;
  }

  // 2. ライフステージ転換期（進学・新社会人・就活・失業）の文脈ブースト
  if (st.flags?.university && st.age === (st.flags.university_entry_age || 18)) {
    if (['youth_first_apartment_hunt', 'young_living_alone', 'youth_driver_license_pass'].includes(e.id)) boost *= 2.5;
  }
  if (st.flags?.university && st.age >= 20 && st.age <= 22 && e.id === 'youth_job_hunting_suit') {
    boost *= 3.2;
  }
  if (isEmployed(st) && st.age >= 18 && st.age <= 24) {
    if (['youth_first_paycheck_parents', 'youth_overtime_convenience_bento', 'young_mentor', 'career_workplace_friend'].includes(e.id)) {
      boost *= 2.4;
    }
  }
  return boost;
}

function pickMonthEvents() {
  const curM = s.current_month || 4;
  const isBirthMonth = curM === (s.birth_month || 4);
  s.chains ??= [];
  const triggered = [];
  const remainingChains = [];

  // 1. 予約チェーンイベントの月次判定
  for (const c of s.chains) {
    const e = eventDefs.find(x => x.id === c.eventId);
    if (!e) continue;
    if (e.max !== undefined && s.age > e.max) continue; // 年齢上限を過ぎたチェーンは破棄
    const dueByMonths = c.targetAgeMonths != null ? (s.age_months || 0) >= c.targetAgeMonths : s.age >= (c.targetAge ?? s.age);
    if (dueByMonths && isEventEligible(e, s) && isEventMonthCompatible(e, curM)) {
      if (chance(c.prob ?? 1.0)) triggered.push(c.eventId);
    } else {
      remainingChains.push(c);
    }
  }
  s.chains = remainingChains;

  // 2. 固定マイルストーンイベント（誕生月または該当月・適格時に発生）
  const fixedEvents = eventDefs.filter(e => (e.trigger === 'fixed' || e.is_fixed) && isEventEligible(e, s));
  for (const fe of fixedEvents) {
    if (triggered.includes(fe.id)) continue;
    if (fe.id === 'fixed_milestone_sex_education') {
      // 11歳の6月（授業）または誕生月直前に確実に発生
      const nextM = (curM % 12) + 1;
      if (curM === 6 || nextM === (s.birth_month || 4)) triggered.push(fe.id);
    } else {
      // 18歳・20歳の節目は誕生月に発生（未発生のままなら翌月以降も救済）
      if (isBirthMonth || !s.seen?.[fe.id]) triggered.push(fe.id);
    }
  }

  // 3. 状態連鎖ナラティブ (trigger === 'state_narrative') の月次判定
  const stateNarratives = eventDefs.filter(e => e.trigger === 'state_narrative' && e.auto_trigger);
  for (const sn of stateNarratives) {
    if (triggered.includes(sn.id)) continue;
    if (!isEventEligible(sn, s)) continue;
    const { flag, minVal = 1 } = sn.auto_trigger;
    if ((s.flags?.[flag] || 0) >= minVal) {
      triggered.push(sn.id);
      break;
    }
  }

  // 4. イベント抽選（v2仕様準拠: ストーリーイベント枠と日常・突発枠の独立2系統抽選）
  const maxStoryPerYear = annualStoryEventLimit(s.age);
  const maxDailyPerYear = annualDailyEventLimit(s.age);
  const maxTotalPerYear = annualEventLimit(s.age);
  const usedStory = s.storyEventsThisYear || 0;
  const usedDaily = s.dailyEventsThisYear || 0;
  const usedTotal = s.eventsThisYear || 0;

  const canDrawStory = (usedTotal < maxTotalPerYear) && (usedStory < maxStoryPerYear) && triggered.length === 0;
  const canDrawDaily = (usedTotal < maxTotalPerYear) && (usedDaily < maxDailyPerYear) && triggered.length === 0;

  if (canDrawStory || canDrawDaily) {
    const ageMultiplier = s.age < 6 ? .20 : s.age < 12 ? .40 : s.age < 18 ? .55 : s.age <= 35 ? 0.70 : s.age <= 49 ? 0.60 : s.age <= 64 ? .50 : .35;

    // A. ストーリー枠の選定（進行中シナリオの次ステップや重大な転機を日常イベントと競合させずに選定）
    if (canDrawStory) {
      const storyCandidates = [];
      for (const e of eventDefs) {
        const trig = e.trigger || (e.is_fixed ? 'fixed' : 'normal');
        if (trig !== 'normal') continue;
        if (triggered.includes(e.id)) continue;
        if (s.seenThisYear?.includes(e.id)) continue;
        if (!isStoryEvent(e)) continue;
        if (!isEventMonthCompatible(e, curM)) continue;
        if (!isEventEligible(e, s)) continue;

        const arcBoost = getStoryArcBoost(e, s);
        // ストーリー枠の月次確率を適正化（年間最大1件、重要シナリオはブーストで着実に発生）
        const prob = Math.min(0.40, eventProbability(e) * ageMultiplier * arcBoost * 0.20);
        if (rng.next() < prob) {
          storyCandidates.push({ e, priority: arcBoost * 2.0 + rng.next() });
        }
      }
      storyCandidates.sort((a, b) => b.priority - a.priority);

      for (const { e } of storyCandidates) {
        const grp = getEventNarrativeConflictGroup(e);
        if (grp === 'sweet_romance' && s.crisisThisYear) continue;
        if (grp === 'crisis_romance' && s.sweetThisYear) continue;

        const precursor = eventDefs.find(pre => pre.trigger === 'precursor' && Array.isArray(pre.precursor_for) && pre.precursor_for.includes(e.id) && isEventEligible(pre, s));
        if (precursor && !s.chains.some(c => c.eventId === e.id)) {
          triggered.push(precursor.id);
          s.chains.push({ eventId: e.id, targetAgeMonths: (s.age_months || 0) + 2, targetAge: s.age, prob: 1.0 });
        } else {
          triggered.push(e.id);
        }

        s.storyEventsThisYear = (s.storyEventsThisYear || 0) + 1;
        s.eventsThisYear = (s.eventsThisYear || 0) + 1;
        if (grp === 'sweet_romance') s.sweetThisYear = true;
        if (grp === 'crisis_romance') s.crisisThisYear = true;
        break; // 1ヶ月に発生するストーリー枠は最大1件
      }
    }

    // B. 日常・突発枠の選定（ストーリー枠が発生しなかった月に生活感を描写）
    if (canDrawDaily && triggered.length === 0) {
      const dailyCandidates = [];
      for (const e of eventDefs) {
        const trig = e.trigger || (e.is_fixed ? 'fixed' : 'normal');
        if (trig !== 'normal') continue;
        if (triggered.includes(e.id)) continue;
        if (s.seenThisYear?.includes(e.id)) continue; // 同一年内重複防止
        if (s.lastSeenAge?.[e.id] != null && (s.age - s.lastSeenAge[e.id]) <= 1) continue; // 日常クールダウン
        if (isStoryEvent(e)) continue; // ストーリーイベントは除外
        if (!isEventMonthCompatible(e, curM)) continue;
        if (!isEventEligible(e, s)) continue;

        const prefMonths = getPreferredMonths(e);
        const monthScale = prefMonths ? (1 / Math.max(1, prefMonths.length * 0.85)) : (1 / 10.5);
        const arcBoost = getStoryArcBoost(e, s);
        // 日常枠の月次確率を適正化（年間最大1件）
        const prob = Math.min(0.30, eventProbability(e) * ageMultiplier * arcBoost * monthScale * 0.65);
        if (rng.next() < prob) {
          const seasonBonus = prefMonths ? 0.6 : 0;
          dailyCandidates.push({ e, priority: arcBoost + seasonBonus + rng.next() * 0.8 });
        }
      }
      dailyCandidates.sort((a, b) => b.priority - a.priority);

      const maxTabooPerYear = s.occupation === '風俗' ? 2 : 1;
      for (const { e } of dailyCandidates) {
        const grp = getEventNarrativeConflictGroup(e);
        if (grp === 'sweet_romance' && s.crisisThisYear) continue;
        if (grp === 'crisis_romance' && s.sweetThisYear) continue;
        if (grp === 'stranger_taboo' && (s.tabooCountThisYear || 0) >= maxTabooPerYear) continue;

        triggered.push(e.id);
        s.dailyEventsThisYear = (s.dailyEventsThisYear || 0) + 1;
        s.eventsThisYear = (s.eventsThisYear || 0) + 1;
        if (grp === 'stranger_taboo') s.tabooCountThisYear = (s.tabooCountThisYear || 0) + 1;
        break;
      }
    }
  }

  // 段階順序のあるマイルストーンが同月に重なった場合は段階順に整列
  triggered.sort((a, b) => (MILESTONE_STAGE_ORDER[a] ?? 50) - (MILESTONE_STAGE_ORDER[b] ?? 50));

  return triggered.map(id => ({ id, month: curM }));
}
const pickYearEvents = pickMonthEvents;

function setPendingEvent(eventId) {
  s.pending = eventId;
  s.activeVariantIndex = Math.floor(rng.next() * 20);
}

function processMonthEvents() {
  const queue = s.monthEvents?.length ? s.monthEvents : (s.yearEvents || []);
  while (queue.length && !s.pending && !s.finished) {
    const item = queue.shift();
    const id = typeof item === 'object' ? item.id : item;
    const e = eventDefs.find(x => x.id === id);
    if (!e || !isEventEligible(e, s)) continue;

    setPendingEvent(e.id);

    const isNarrative = e.is_narrative || !e.choices || e.choices.length === 0;
    if (document.getElementById('mode').value === 'auto') {
      if (isNarrative) {
        settleNarrative(e, false);
        continue;
      } else {
        const cur = getEventCurrent(e);
        settle(e, pickAutomaticChoice(cur, s), false);
      }
    } else break;
  }
  s.rngState = rng.state();
  return !s.pending;
}
const processYearEvents = processMonthEvents;
