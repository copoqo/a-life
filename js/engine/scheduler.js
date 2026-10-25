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
    if ((p?.affection ?? 0) >= 62 && (p?.trust ?? 0) >= 52) {
      if (['adult_future_together', 'adult_marriage_proposal', 'partner_anniversary_deep_love', 'positive_anniversary', 'partner_sex_mastered_pleasure', 'same_sex_society_bond'].includes(e.id)) {
        boost *= 2.8;
      }
    } else if ((p?.affection ?? 50) < 42 || (st.flags?.partner_distance || 0) >= 1) {
      if (CRISIS_ROMANCE_IDS.has(e.id)) boost *= 2.5;
    }
  } else if (stage === 5) {
    if (e.id === 'marriage_ceremony' && !st.seen?.marriage_ceremony) boost *= 5.0;
    else if (['marital_life_intimacy', 'life_household', 'life_parenthood_question'].includes(e.id)) boost *= 2.2;
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

  // 4. 通常抽選イベント（月ごとの抽選・季節親和性・年間上限管理）
  const maxPerYear = annualEventLimit(s.age);
  const usedThisYear = s.eventsThisYear || 0;
  if (usedThisYear < maxPerYear && triggered.length === 0) {
    const ageMultiplier = s.age < 6 ? .30 : s.age < 10 ? .58 : s.age < 15 ? .82 : s.age <= 35 ? 1.35 : s.age <= 49 ? 1.05 : s.age <= 64 ? .85 : s.age <= 79 ? .7 : .55;
    const candidatePool = [];
    for (const e of eventDefs) {
      const trig = e.trigger || (e.is_fixed ? 'fixed' : 'normal');
      if (trig !== 'normal') continue;
      if (triggered.includes(e.id)) continue;
      if (!isEventMonthCompatible(e, curM)) continue;
      if (!isEventEligible(e, s)) continue;

      const prefMonths = getPreferredMonths(e);
      // 季節限定イベントはその該当月・季節で本来の確率を発揮し、通年イベントは月次（約1/10.5）に分散
      const monthScale = prefMonths ? (1 / Math.max(1, prefMonths.length * 0.85)) : (1 / 10.5);
      const arcBoost = getStoryArcBoost(e, s);
      const prob = Math.min(0.85, eventProbability(e) * ageMultiplier * arcBoost * monthScale);
      if (rng.next() < prob) {
        const seasonBonus = prefMonths ? 0.6 : 0;
        candidatePool.push({ e, priority: arcBoost + seasonBonus + rng.next() * 0.8 });
      }
    }

    candidatePool.sort((a, b) => b.priority - a.priority);
    const maxTabooPerYear = s.occupation === '風俗' ? 2 : 1;

    for (const { e } of candidatePool) {
      const grp = getEventNarrativeConflictGroup(e);
      if (grp === 'sweet_romance' && s.crisisThisYear) continue;
      if (grp === 'crisis_romance' && s.sweetThisYear) continue;
      if (grp === 'stranger_taboo' && (s.tabooCountThisYear || 0) >= maxTabooPerYear) continue;

      // 先行伏線イベント (trigger === 'precursor') が適格かつ未発生なら、今月は伏線を発生させ本編を2ヶ月後に予約
      const precursor = eventDefs.find(pre => pre.trigger === 'precursor' && Array.isArray(pre.precursor_for) && pre.precursor_for.includes(e.id) && isEventEligible(pre, s));
      if (precursor && !s.chains.some(c => c.eventId === e.id)) {
        triggered.push(precursor.id);
        s.chains.push({ eventId: e.id, targetAgeMonths: (s.age_months || 0) + 2, targetAge: s.age, prob: 1.0 });
      } else {
        triggered.push(e.id);
      }

      s.eventsThisYear = (s.eventsThisYear || 0) + 1;
      if (grp === 'sweet_romance') s.sweetThisYear = true;
      if (grp === 'crisis_romance') s.crisisThisYear = true;
      if (grp === 'stranger_taboo') s.tabooCountThisYear = (s.tabooCountThisYear || 0) + 1;
      break; // 1ヶ月に発生する通常イベントは最大1件
    }
  }

  // 段階順序のあるマイルストーンが同月に重なった場合は段階順に整列
  triggered.sort((a, b) => (MILESTONE_STAGE_ORDER[a] ?? 50) - (MILESTONE_STAGE_ORDER[b] ?? 50));

  return triggered.map(id => ({ id, month: curM }));
}
const pickYearEvents = pickMonthEvents;

function processMonthEvents() {
  const queue = s.monthEvents?.length ? s.monthEvents : (s.yearEvents || []);
  while (queue.length && !s.pending && !s.finished) {
    const item = queue.shift();
    const id = typeof item === 'object' ? item.id : item;
    const e = eventDefs.find(x => x.id === id);
    if (!e || !isEventEligible(e, s)) continue;

    s.pending = e.id;
    s.activeVariantIndex = Math.floor(rng.next() * 20);

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
