'use strict';
// 効果適用・所持金増減・年間イベント上限

function balancedChoiceEffect(event, effect) {
  return { ...effect };
}
function annualEventLimit(age) {
  let base = age < 6 ? 1 : age < 12 ? 2 : 3;
  return Math.min(3, base);
}

function applyCashDelta(person, delta) {
  person.economy ??= { cash: 0, investments: 0, other_assets: 0, debt: 0, monthly_income: 0, monthly_expenses: 100000 };
  person.economy.cash += delta;
  if (person.economy.cash < 0) {
    person.economy.debt += -person.economy.cash;
    person.economy.cash = 0;
  }
}

// 仕様書 7.4準拠 効果の型別安全適用と内部パラメータマッピング
function apply(effect) {
  if (!effect) return;
  for (const [key, value] of Object.entries(effect)) {
    if (key === 'flag') {
      s.flags[value] = true;
    } else if (key === 'relationship') {
      s.relationships = Math.max(0, s.relationships + value);
    } else if (TRAIT_KEYS.includes(key) && s.traits[key]) {
      s.traits[key].current = clamp(s.traits[key].current + value, s.traits[key].min, s.traits[key].max);
    } else if (ABILITY_KEYS.includes(key)) {
      s.abilities[key] = clamp((s.abilities[key] || 0) + value, -100, 100);
      if (key === 'morality') {
        s.morality = s.abilities.morality;
        if (s.traits.risk_tolerance) s.traits.risk_tolerance.current = clamp(s.traits.risk_tolerance.current - value * 2, s.traits.risk_tolerance.min, s.traits.risk_tolerance.max);
      }
    } else if (STATE_LOAD_KEYS.includes(key)) {
      s.states[key] = clamp((s.states[key] || 0) + value, 0, 100);
    } else if (STATE_SIGNED_KEYS.includes(key)) {
      s.states[key] = clamp((s.states[key] || 0) + value, -100, 100);
    } else if (key === 'cash') {
      applyCashDelta(s, value);
    } else if (key === 'debt') {
      s.economy.debt = Math.max(0, (s.economy.debt || 0) + value);
    } else if (key === 'monthly_income') {
      s.economy.monthly_income = Math.max(0, (s.economy.monthly_income || 0) + value);
    } else if (key === 'monthly_expenses') {
      s.economy.monthly_expenses = Math.max(0, (s.economy.monthly_expenses || 0) + value);
    }
    // 既存イベントの旧キーから新内部パラメータへの精密マッピング
    else if (key === 'health') {
      if (value >= 0) s.abilities.healthy_habits = clamp((s.abilities.healthy_habits || 0) + value * 4, -100, 100);
      else {
        s.states.fatigue = clamp((s.states.fatigue || 0) + (-value) * 4, 0, 100);
        s.states.illness_burden = clamp((s.states.illness_burden || 0) + (-value) * 2, 0, 100);
      }
    } else if (key === 'knowledge') {
      s.abilities.knowledge = clamp((s.abilities.knowledge || 0) + value * 5, -100, 100);
      s.abilities.problem_solving = clamp((s.abilities.problem_solving || 0) + value * 2, -100, 100);
    } else if (key === 'stress') {
      s.states.stress = clamp((s.states.stress || 0) + value * 5, 0, 100);
    } else if (key === 'happiness') {
      s.states.life_satisfaction = clamp((s.states.life_satisfaction || 0) + value * 5, -100, 100);
      s.states.achievement = clamp((s.states.achievement || 0) + value * 2, -100, 100);
    } else if (key === 'social') {
      s.abilities.communication_skill = clamp((s.abilities.communication_skill || 0) + value * 4, -100, 100);
      s.states.social_confidence = clamp((s.states.social_confidence || 0) + value * 3, -100, 100);
      s.states.social_anxiety = clamp((s.states.social_anxiety || 0) - value * 2, 0, 100);
    } else if (key === 'money') {
      applyCashDelta(s, value * 35000);
      if (s.flags?.employed && s.economy) {
        s.economy.monthly_income = Math.max(0, (s.economy.monthly_income || 0) + value * 2000);
      }
    } else if (key === 'independence') {
      s.states.self_efficacy = clamp((s.states.self_efficacy || 0) + value * 4, -100, 100);
      if (s.traits.risk_tolerance) s.traits.risk_tolerance.current = clamp(s.traits.risk_tolerance.current + value * 2, s.traits.risk_tolerance.min, s.traits.risk_tolerance.max);
    } else if (key === 'selfUnderstanding') {
      s.states.self_efficacy = clamp((s.states.self_efficacy || 0) + value * 3, -100, 100);
      if (s.traits.cognitive_potential) s.traits.cognitive_potential.current = clamp(s.traits.cognitive_potential.current + value, s.traits.cognitive_potential.min, s.traits.cognitive_potential.max);
    } else if (key === 'aesthetics') {
      s.abilities.grooming = clamp((s.abilities.grooming || 0) + value * 4, -100, 100);
      s.abilities.interpersonal_charm = clamp((s.abilities.interpersonal_charm || 0) + value * 3, -100, 100);
    } else if (key === 'morality') {
      s.abilities.morality = clamp((s.abilities.morality || 0) + value * 4, -100, 100);
      s.morality = s.abilities.morality;
      if (s.traits.risk_tolerance) s.traits.risk_tolerance.current = clamp(s.traits.risk_tolerance.current - value * 2, s.traits.risk_tolerance.min, s.traits.risk_tolerance.max);
    } else if (key === 'trust') {
      s.states.relationship_satisfaction = clamp((s.states.relationship_satisfaction || 0) + value * 4, -100, 100);
      s.states.social_confidence = clamp((s.states.social_confidence || 0) + value * 2, -100, 100);
    } else if (key === 'secrecy') {
      s.states.social_anxiety = clamp((s.states.social_anxiety || 0) + value * 3, 0, 100);
      s.states.stress = clamp((s.states.stress || 0) + value * 2, 0, 100);
    }
  }
  syncDisplay(s);
}
