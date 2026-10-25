'use strict';
// イベント適格判定（条件プリセット・関係ステージ・イベント定義の正規化）

function isPartnerEvent(e) {
  if (!e) return false;
  if (needsPartner(e)) return true;
  if (e.id.startsWith('student_partner_') || e.id.startsWith('partner_') || e.id.startsWith('positive_date_') || e.id.startsWith('positive_flirting') || e.id.startsWith('positive_anniversary') || e.id === 'positive_intimacy_humor' || e.id.startsWith('first_kiss_milestone') || e.id.startsWith('first_intimacy_milestone') || e.id.startsWith('partner_intimacy_') || e.id === 'adult_shared_intimacy' || e.id === 'marital_intimacy_crisis' || e.id === 'marital_life_intimacy') return true;
  if (e.requires) {
    const reqStr = e.requires.toString();
    if (reqStr.includes('hasPartner') || reqStr.includes('hasFemalePartner') || reqStr.includes('hasMalePartner')) return true;
  }
  return false;
}

function isGenderAllowed(e, st = s) {
  if (e.targetGender === 'male' && !hasMalePartner(st)) return false;
  if (e.targetGender === 'female' && !hasFemalePartner(st) && !prefersWomen(st)) return false;
  return true;
}

function needsMultiplePartners(event) {
  if (!event) return false;
  if (event.requires_multiple_partners) return true;
  const t = (event.title || '') + ' ' + (event.description || '') + ' ' + (event.id || '');
  return /複数交際|ポリアモリー|二股|三角関係|multiple_relationship|sexual_multiple/.test(t);
}
function needsSpouse(event) {
  if (!event) return false;
  const t = (event.title || '') + ' ' + (event.description || '') + ' ' + (event.id || '');
  return /夫婦|配偶者|結婚生活|離婚|marital_|marriage_ceremony/.test(t) && !/プロポーズ|婚約/.test(t);
}
function needsPartner(event) {
  if (!event) return false;
  if (event.context === 'partner' || event.context === 'multiple_partner') return true;
  const t = (event.title || '') + ' ' + (event.description || '') + ' ' + (event.id || '');
  if (/partner_|交際相手|パートナーと|恋人と|二人の記念日|初夜|長い交際|蜜月|ベッドの中で貪り合う|湯船の中の密やか/.test(t)) return true;
  return event.choices?.some(c => {
    const lbl = typeof c === 'string' ? c : (c.label || c[0] || '');
    return /パートナーと|交際相手と|恋人と|二人で|相手と相談|相手に相談|相手と話し合|パートナーに/.test(lbl);
  }) || false;
}
function isEventPhaseAllowed(event, st = s) {
  if (!event.phase || event.phase === 'any') return true;
  if (event.phase === 'virgin' && hasHadSex(st)) return false;
  if (event.phase === 'awakening' && !hasHadSex(st)) return false;
  if (event.phase === 'active' && !hasHadSex(st)) return false;
  return true;
}
function encounterEvent(event) {
  return event.context === 'meeting' || /meeting|encounter|confessed_to|street_approach|date|出会い|告白/.test(event.id)
    && !needsPartner(event);
}
// =========================================================================
// 宣言的イベント条件プリセット (CONDITION_PRESETS) と関係ステージ・エスカレーション管理
// =========================================================================
function getPartnerStage(st = s) {
  const p = getPrimaryPartner(st);
  if (!p) return 0;
  if (p.status === 'spouse' || st.flags?.married) return 5;
  const hasIntimacy = !!(p.intimate || st.flags?.had_first_intimacy_with_partner || hasHadSexWithCurrentPartner(st));
  const hasKiss = !!(hasIntimacy || p.kissed || st.flags?.had_first_kiss_with_partner);
  if (hasIntimacy) {
    const intimateYears = p.intimateSinceAge != null ? Math.max(0, (st.age ?? 0) - p.intimateSinceAge) : (p.partnerYears || 0);
    if (intimateYears >= 1 || p.cohabiting || st.flags?.cohabiting || (st.flags?.partner_intimacy_streak || 0) >= 2) {
      return 4;
    }
    return 3;
  }
  if (hasKiss) return 2;
  return 1;
}

function isTabooAwakened(st = s) {
  if (!st) return false;
  if (st.flags?.taboo_awakened || hasHadSex(st) || isSexuallyAroused(st)) return true;
  const desire = st.sexuality?.desire ?? st.states?.current_libido ?? 0;
  const mod = st.abilities?.morality ?? st.morality ?? 0;
  return !!(st.flags?.sexually_aware && (desire >= 6 || mod <= -5));
}

const CONDITION_PRESETS = {
  partnered: (st) => hasPartner(st),
  single: (st) => !hasPartner(st),
  unmarried: (st) => !hasSpouse(st),
  married: (st) => hasSpouse(st),
  multi_partner: (st) => hasMultiplePartners(st),
  female_partner: (st) => hasFemalePartner(st),
  male_partner: (st) => hasMalePartner(st),
  has_children: (st) => !!(st.flags?.hasChildren || st.family?.children_ids?.length > 0),
  student: (st) => isStudent(st),
  school_student: (st) => isStudent(st) && (st.age ?? 0) <= 18 && !st.flags?.university,
  university_student: (st) => isStudent(st) && ((st.age ?? 0) >= 18 && !!st.flags?.university),
  employed: (st) => isEmployed(st),
  unemployed_or_precarious: (st) => ['無職', 'パート・アルバイト'].includes(st.occupation),
  not_living_alone: (st) => !st.flags?.living_alone && !hasSpouse(st) && !st.flags?.cohabiting,
  cohabiting: (st) => !!(st.flags?.cohabiting || hasSpouse(st) || getPrimaryPartner(st)?.cohabiting),
  has_ex_partner: (st) => !!(st.bonds?.some(b => b.status === 'former')),
  hetero_or_bi: (st) => (st.orientation?.men ?? 0.5) >= 0.25 && !hasFemalePartner(st),
  same_sex_open: (st) => prefersWomen(st) || hasFemalePartner(st) || !!st.flags?.same_sex_awakened,
  virgin: (st) => !hasHadSex(st),
  sex_experienced: (st) => hasHadSex(st),
  first_sex_with_partner: (st) => !getPrimaryPartner(st)?.intimate && !st.flags?.had_first_intimacy_with_partner && !hasHadSexWithCurrentPartner(st),
  first_kiss_unexperienced: (st) => !getPrimaryPartner(st)?.kissed && !st.flags?.had_first_kiss_with_partner,
  first_kiss_experienced: (st) => !!(getPrimaryPartner(st)?.kissed || st.flags?.had_first_kiss_with_partner || st.flags?.firstKiss),
  first_date_experienced: (st) => !!(st.flags?.firstDate || st.flags?.had_first_date_with_partner),
  rel_stage_early: (st) => hasPartner(st) && getPartnerStage(st) === 1,
  rel_stage_kissed: (st) => hasPartner(st) && getPartnerStage(st) >= 2,
  rel_stage_intimate: (st) => hasPartner(st) && getPartnerStage(st) >= 3,
  rel_stage_established: (st) => hasPartner(st) && getPartnerStage(st) >= 4,
  taboo_awakened: (st) => isTabooAwakened(st),
  low_morality: (st) => (st.abilities?.morality ?? st.morality ?? 0) <= 0,
  underground_eligible: (st) => isEligibleForUndergroundSexWork(st),
  adult_drinking: (st) => (st.age ?? 0) >= 20,
  underage_drinking_allowed: (st) => (st.age ?? 0) >= 15 && (st.age ?? 0) < 20
};

function normalizeEventDef(raw) {
  if (!raw || raw._normalized) return raw;
  if (Array.isArray(raw.age) && raw.age.length === 2) {
    raw.min = raw.age[0];
    raw.max = raw.age[1];
  } else if (raw.min !== undefined && raw.max !== undefined) {
    raw.age = [raw.min, raw.max];
  }
  if (raw.text && !raw.description) raw.description = raw.text;
  if (raw.description && !raw.text) raw.text = raw.description;
  if (raw.weights && !raw.weight) {
    raw.weight = raw.weights;
    delete raw.weights;
  }
  if (typeof raw.weight === 'number') {
    raw.p = raw.p ?? (raw.weight / 100);
    raw.weight = { base: raw.weight, additive: [], multipliers: [] };
  }
  raw.presets = Array.isArray(raw.presets) ? raw.presets : [];
  raw.trigger = raw.trigger || (raw.is_fixed ? 'fixed' : 'normal');
  raw._normalized = true;
  return raw;
}

window.defineEvent = function (def) {
  const normalized = normalizeEventDef(def);
  (window.eventDefs = window.eventDefs || []).push(normalized);
  return normalized;
};
if (Array.isArray(window.eventDefs)) {
  window.eventDefs.forEach(normalizeEventDef);
}

function evaluatePresets(event, st = s) {
  if (!Array.isArray(event.presets) || event.presets.length === 0) return true;
  for (const presetName of event.presets) {
    const checkFn = CONDITION_PRESETS[presetName];
    if (checkFn && !checkFn(st)) return false;
  }
  return true;
}

function isEventEligible(e, st = s) {
  if (!e || e.enabled === false) return false;
  normalizeEventDef(e);

  // 1. 高速フィルタ：年齢・成人制限・再発制御・プリセット・前提フラグをスナップショット生成前に判定
  if (e.min !== undefined && st.age < e.min) return false;
  if (e.max !== undefined && st.age > e.max) return false;
  if (e.content_rating === 'adult' && (st.age ?? 0) < 18) return false;
  if (e.once && st.seen?.[e.id]) return false;
  if (e.availability) {
    const count = st.seen?.[e.id] || 0;
    if (e.availability.once_per_life && count >= 1) return false;
    if (e.availability.max_occurrences && count >= e.availability.max_occurrences) return false;
  }
  if (!evaluatePresets(e, st)) return false;
  if (e.requires_flag && !st.flags?.[e.requires_flag]) return false;
  if (!isEventPhaseAllowed(e, st)) return false;
  if (!isGenderAllowed(e, st)) return false;
  if (e.requires && !e.requires(st)) return false;

  // 2. スナップショット生成・登場人物束縛・DSL詳細条件判定
  const snap = makeSnapshot(st);
  const bindings = resolveActors(e, snap, rng);
  if (bindings === null) return false;

  if (e.conditions && !evaluateCondition(e.conditions, snap, bindings)) return false;

  // 3. 選択肢が0個なら不適格（ナラティブイベントは例外として適格）
  if (!e.is_narrative) {
    const available = listAvailableChoices(e, snap, bindings);
    if (available.length === 0) return false;
  }

  // フォールバック安全網（プリセット未指定の外部追加イベント向け）
  if (!e.presets || e.presets.length === 0) {
    if (needsMultiplePartners(e) && !hasMultiplePartners(st)) return false;
    if (needsSpouse(e) && !hasSpouse(st)) return false;
    if (needsPartner(e) && !hasPartner(st)) return false;
    if (e.alcohol && st.age < 20 && !e.allowUnderage) return false;
    if (e.publicSex && (st.abilities?.morality ?? st.morality ?? 0) > 0) return false;
  }

  return true;
}
