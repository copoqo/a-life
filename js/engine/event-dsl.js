'use strict';
// イベント設計仕様 DSL（パス検証・スナップショット・条件評価・重み・選択）

// =========================================================================
// イベント設計・判定エンジン (life_simulator_event_design_spec.md v1.0 準拠)
// =========================================================================

const REGISTERED_PATHS = {
  'person.age_months': { type: 'integer', readonly: false },
  'person.alive': { type: 'boolean', readonly: false },
  'person.identity.gender': { type: 'enum', readonly: true },
  'person.identity.sexual_orientation': { type: 'enum', readonly: false },
  'person.experience.has_sexual_experience': { type: 'boolean', readonly: false },
  'person.career.employment_status': { type: 'enum', readonly: false },
  'person.career.occupation_id': { type: 'string', readonly: false },
  'person.family.partner_id': { type: 'string', readonly: false },
  'person.family.relationship_status': { type: 'enum', readonly: false },
  'person.family.marital_status': { type: 'enum', readonly: false },
  'person.family.children_ids': { type: 'array', readonly: false },
  'person.economy.cash': { type: 'integer', readonly: false },
  'person.economy.monthly_income': { type: 'integer', readonly: false },
  'person.residence.district_id': { type: 'string', readonly: false },
  'derived.residence.area_type': { type: 'enum', readonly: true },
  'derived.libido_tier': { type: 'string', readonly: true },
  'derived.age_years': { type: 'integer', readonly: true },
  'derived.has_partner': { type: 'boolean', readonly: true },
  'derived.has_spouse': { type: 'boolean', readonly: true },
  'derived.has_children': { type: 'boolean', readonly: true },
  'derived.partner_gender_relation': { type: 'enum', readonly: true },
  'derived.partner_stage': { type: 'integer', readonly: true },
  'derived.is_employed': { type: 'boolean', readonly: true },
  'derived.has_ex_partner': { type: 'boolean', readonly: true },
  'derived.friend_count': { type: 'integer', readonly: true },
  'derived.net_worth': { type: 'integer', readonly: true },
  'display.health': { type: 'integer', readonly: true },
  'display.finances': { type: 'integer', readonly: true },
  'display.intellect': { type: 'integer', readonly: true },
  'display.sociability': { type: 'integer', readonly: true },
  'display.attractiveness': { type: 'integer', readonly: true },
  'display.confidence': { type: 'integer', readonly: true },
  'display.happiness': { type: 'integer', readonly: true },
  'display.sexual_desire': { type: 'integer', readonly: true }
};

const REGISTERED_TRAITS = new Set([
  'constitution', 'cognitive_potential', 'learning_drive', 'extraversion',
  'social_initiative', 'appearance_potential', 'self_worth_disposition',
  'baseline_libido', 'sexual_interest', 'masochistic_preference',
  'sadistic_preference', 'baseline_modesty', 'risk_tolerance'
]);

const REGISTERED_SKILLS = new Set([
  'healthy_habits', 'knowledge', 'problem_solving',
  'communication_skill', 'grooming', 'interpersonal_charm',
  'morality'
]);

const REGISTERED_STATES = new Set([
  'illness_burden', 'fatigue', 'social_anxiety', 'stress', 'current_embarrassment',
  'self_efficacy', 'social_confidence', 'success_memory',
  'life_satisfaction', 'relationship_satisfaction', 'achievement',
  'current_libido', 'mood'
]);

function validatePath(path, isEffect = false) {
  if (REGISTERED_PATHS[path]) {
    if (isEffect && REGISTERED_PATHS[path].readonly) {
      throw new Error('Write not permitted to read-only path: ' + path);
    }
    return true;
  }
  if (path.startsWith('trait.')) {
    const traitId = path.split('.')[1];
    const sub = path.split('.')[2];
    if (!REGISTERED_TRAITS.has(traitId)) {
      throw new Error('Unregistered trait: ' + traitId);
    }
    if (isEffect && sub && sub !== 'current') {
      throw new Error('Write to trait center/min/max not permitted: ' + path);
    }
    return true;
  }
  if (path.startsWith('skill.')) {
    const skillId = path.split('.')[1];
    if (!REGISTERED_SKILLS.has(skillId)) {
      throw new Error('Unregistered skill: ' + skillId);
    }
    return true;
  }
  if (path.startsWith('state.')) {
    const stateId = path.split('.')[1];
    if (!REGISTERED_STATES.has(stateId)) {
      throw new Error('Unregistered state: ' + stateId);
    }
    return true;
  }
  if (path.startsWith('history.event_counts.') || path.startsWith('history.choice_counts.') || path.startsWith('history.flags.')) {
    return true;
  }
  if (path.startsWith('context.')) {
    return true;
  }
  if (path === 'chain') return true;
  throw new Error('Unknown path: ' + path);
}

function makeSnapshot(st = s) {
  const p = getPrimaryPartner(st);
  const hasPartnerVal = !!p;
  let partnerGenderRelation = 'none';
  if (p) {
    partnerGenderRelation = p.gender === 'female' ? 'same' : (p.gender === 'male' ? 'different' : 'other');
  }

  const hasSex = hasHadSex(st);

  const districtAreaMap = {
    '繁華街': 'entertainment',
    '住宅街': 'residential',
    '商業地域': 'commercial',
    '農村集落': 'rural',
    '工業地域': 'industrial',
    '高所得地域': 'wealthy',
    '経済的困難が多い地域': 'deprived'
  };

  const employmentStatus = (st.age ?? 0) < 6 ? 'preschool' :
    (st.occupation === '学生' ? 'student' :
      (st.occupation === '無職' ? ((st.age ?? 0) >= 65 ? 'retired' : 'unemployed') :
        (st.occupation === '専業主婦' ? 'homemaker' :
          (st.occupation === '自営業' ? 'self_employed' : 'employed'))));

  return {
    version: st.version || 1,
    person: {
      age_months: (st.age ?? 0) * 12,
      alive: !st.finished,
      identity: {
        gender: 'female',
        sexual_orientation: prefersWomen(st) ? 'homosexual' : 'heterosexual'
      },
      experience: {
        has_sexual_experience: hasSex
      },
      career: {
        employment_status: employmentStatus,
        occupation_id: st.occupation || '学生'
      },
      family: {
        partner_id: p?.id ?? null,
        relationship_status: hasPartnerVal ? (st.flags?.married ? 'partnered' : 'dating') : 'single',
        marital_status: st.flags?.married ? 'married' : (st.flags?.divorced ? 'divorced' : (st.flags?.widowed ? 'widowed' : 'never_married')),
        children_ids: st.flags?.hasChildren ? ['child_1'] : []
      },
      economy: {
        cash: st.economy?.cash ?? 0,
        monthly_income: st.economy?.monthly_income ?? 0
      },
      residence: {
        district_id: st.location?.district ?? null
      }
    },
    derived: {
      residence: {
        area_type: districtAreaMap[st.location?.district] || 'other'
      },
      libido_tier: getLibidoTier(st),
      age_years: st.age ?? 0,
      has_partner: hasPartnerVal,
      has_spouse: hasSpouse(st),
      has_children: !!st.flags?.hasChildren,
      partner_gender_relation: partnerGenderRelation,
      partner_stage: getPartnerStage(st),
      is_employed: isEmployed(st),
      has_ex_partner: !!(st.bonds || []).some(b => b.status === 'former'),
      friend_count: (st.bonds || []).filter(b => b.status === 'close' || b.status === 'acquaintance').length,
      net_worth: (st.economy?.cash || 0) + (st.economy?.investments || 0) - (st.economy?.debt || 0)
    },
    display: { ...(st.display || {}) },
    traits: st.traits || {},
    skills: st.abilities || {},
    states: st.states || {},
    history: {
      event_counts: { ...(st.seen || {}) },
      choice_counts: {},
      flags: { ...(st.flags || {}) }
    },
    bonds: st.bonds || []
  };
}

function resolvePath(path, snapshot, bindings = {}) {
  if (!path) return undefined;
  if (path.startsWith('trait.')) {
    const traitId = path.split('.')[1];
    return snapshot.traits?.[traitId]?.current ?? 0;
  }
  if (path.startsWith('skill.')) {
    const skillId = path.split('.')[1];
    return snapshot.skills?.[skillId] ?? 0;
  }
  if (path.startsWith('state.')) {
    const stateId = path.split('.')[1];
    return snapshot.states?.[stateId] ?? 0;
  }
  if (path.startsWith('history.event_counts.')) {
    const eid = path.split('.')[2];
    return snapshot.history?.event_counts?.[eid] ?? 0;
  }
  if (path.startsWith('history.flags.')) {
    const fid = path.split('.')[2];
    return !!snapshot.history?.flags?.[fid];
  }
  if (path.startsWith('context.')) {
    const parts = path.split('.');
    const role = parts[1];
    const field = parts[2];
    return bindings[role]?.[field];
  }

  const parts = path.split('.');
  let curr = snapshot;
  for (const p of parts) {
    if (curr == null) return undefined;
    curr = curr[p];
  }
  return curr;
}

function evaluateCondition(cond, snapshot, bindings = {}) {
  if (!cond) return true;
  if (cond.all) {
    return cond.all.every(c => evaluateCondition(c, snapshot, bindings));
  }
  if (cond.any) {
    return cond.any.length > 0 && cond.any.some(c => evaluateCondition(c, snapshot, bindings));
  }
  if (cond.not) {
    return !evaluateCondition(cond.not, snapshot, bindings);
  }
  if (!cond.path) return true;

  const actual = resolvePath(cond.path, snapshot, bindings);
  const op = cond.op;
  const val = cond.value;

  switch (op) {
    case 'eq': return actual === val;
    case 'ne': return actual !== val;
    case 'gt': return typeof actual === 'number' && actual > val;
    case 'gte': return typeof actual === 'number' && actual >= val;
    case 'lt': return typeof actual === 'number' && actual < val;
    case 'lte': return typeof actual === 'number' && actual <= val;
    case 'between': return Array.isArray(val) && actual >= val[0] && actual <= val[1];
    case 'in': return Array.isArray(val) && val.includes(actual);
    case 'not_in': return Array.isArray(val) && !val.includes(actual);
    case 'exists': return actual !== null && actual !== undefined;
    case 'not_exists': return actual === null || actual === undefined;
    case 'contains': return Array.isArray(actual) && actual.includes(val);
    case 'count_gte': return Array.isArray(actual) && actual.length >= val;
    case 'count_lte': return Array.isArray(actual) && actual.length <= val;
    default: return false;
  }
}

function resolveActors(event, snapshot, r = rng) {
  const bindings = {};
  if (!event.actors) return bindings;

  for (const [role, actorDef] of Object.entries(event.actors)) {
    let candidate = null;
    if (actorDef.source === 'current_partner') {
      candidate = snapshot.bonds?.find(b => b.status === 'spouse') || snapshot.bonds?.find(b => b.status === 'partner') || null;
    } else if (actorDef.source === 'friend') {
      const friends = snapshot.bonds?.filter(b => b.status === 'close' || b.status === 'acquaintance') || [];
      if (friends.length) candidate = friends[0];
    } else if (actorDef.source === 'coworker') {
      candidate = snapshot.bonds?.find(b => b.role === 'colleague') || null;
    } else if (actorDef.source === 'random_adult') {
      candidate = snapshot.bonds?.find(b => b.role === 'stranger') || null;
    }

    if (actorDef.required && !candidate) {
      return null;
    }
    bindings[role] = candidate;
  }
  return bindings;
}

function computeEventWeight(event, snapshot, bindings, config = {}) {
  const base = event.weight?.base ?? Math.round((event.p || 0.2) * 100);
  if (base <= 0) return 0;

  let addSum = 0;
  for (const term of (event.weight?.additive || [])) {
    const val = resolvePath(term.path, snapshot, bindings);
    if (typeof val === 'number') addSum += term.coefficient * val;
  }
  const addFactor = Math.max(0, 1 + addSum);
  if (addFactor <= 0) return 0;

  let mult = 1.0;
  for (const m of (event.weight?.multipliers || [])) {
    if (evaluateCondition(m.when, snapshot, bindings)) {
      mult *= (m.factor ?? 1.0);
    }
  }
  return Math.max(0, base * addFactor * mult);
}

function listAvailableChoices(event, snapshot, bindings) {
  const choices = event.choices || [];
  return choices.filter(c => {
    if (!c.requirements) return true;
    return evaluateCondition(c.requirements, snapshot, bindings);
  });
}

function selectChoiceAuto(choices, snapshot, temperature = 1.0, r = rng) {
  if (!choices || choices.length === 0) return null;
  if (choices.length === 1) return choices[0];

  const utilities = choices.map(c => {
    let u = c.utility?.base ?? 0;
    for (const term of (c.utility?.terms || [])) {
      const v = resolvePath(term.path, snapshot);
      if (typeof v === 'number') u += term.coefficient * v;
    }
    for (const ct of (c.utility?.conditional_terms || [])) {
      if (evaluateCondition(ct.when, snapshot)) {
        u += (ct.bonus ?? 0);
      }
    }
    return u;
  });

  const uMax = Math.max(...utilities);
  const expWeights = utilities.map(u => Math.exp((u - uMax) / Math.max(0.01, temperature)));
  const sumExp = expWeights.reduce((a, b) => a + b, 0);

  const roll = (r ? r.next() : Math.random()) * sumExp;
  let cum = 0;
  for (let i = 0; i < choices.length; i++) {
    cum += expWeights[i];
    if (roll <= cum) return choices[i];
  }
  return choices[choices.length - 1];
}

function selectOutcome(choice, snapshot, r = rng) {
  const eligible = (choice.outcomes || []).filter(o => {
    if (!o.conditions) return true;
    return evaluateCondition(o.conditions, snapshot);
  });
  if (eligible.length === 0) return choice.outcomes?.[0] || null;
  if (eligible.length === 1) return eligible[0];

  const totalWeight = eligible.reduce((sum, o) => sum + (o.weight ?? 1), 0);
  const roll = (r ? r.next() : Math.random()) * totalWeight;
  let cum = 0;
  for (const o of eligible) {
    cum += (o.weight ?? 1);
    if (roll <= cum) return o;
  }
  return eligible[eligible.length - 1];
}
