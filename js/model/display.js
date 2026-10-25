'use strict';
// 性欲資質・表示パラメータ計算・値域制限

// 仕様書準拠 8つの表示指標の厳密な計算式 (第5章)
function getLibidoTier(st) {
  if (!st) return '中';
  if (st.libido_tier) return st.libido_tier;
  if (st.traits?.libido_tier) return st.traits.libido_tier;
  const center = st.traits?.baseline_libido?.center ?? 0;
  return center > 15 ? '強' : center < -15 ? '弱' : '中';
}

function setLibidoTier(st, tier) {
  if (!st || !st.traits) return;
  st.libido_tier = tier;
  let center = 0;
  let initLibido = -80;
  if (tier === '弱') {
    center = -35;
    initLibido = -90;
  } else if (tier === '強') {
    center = 35;
    initLibido = -60;
  } else {
    center = 0;
    initLibido = -80;
  }
  st.traits.baseline_libido = {
    center,
    min: center - 50,
    max: center + 50,
    current: center
  };
  if (st.age < 11) {
    st.states.current_libido = initLibido;
  } else if (st.age >= 18) {
    st.states.current_libido = center;
  }
  syncDisplay(st);
}

function computeDisplay(person) {
  const t = person.traits || {};
  const a = person.abilities || {};
  const st = person.states || {};
  const eco = person.economy || { cash: 0, investments: 0, debt: 0, monthly_income: 0, monthly_expenses: 100000 };

  const cOf = (k) => t[k]?.current ?? 0;

  // 5.1 健康
  const health = D((2 * cOf('constitution') + (a.healthy_habits || 0)
    - 2 * (st.illness_burden || 0) - (st.fatigue || 0)) / 12);

  // 5.2 経済力
  let finances;
  const age = person.age ?? 0;
  if (age < 18 && (eco.monthly_expenses || 0) === 0 && (eco.debt || 0) === 0) {
    // 幼少期・扶養下：所持金0・生活費0が標準（親の庇護下にあるため経済不安なし＝基準点0）
    const allowanceScore = clamp(roundHalfAwayFromZero((eco.cash || 0) / 1000), 0, 15);
    finances = D(allowanceScore);
  } else {
    const mult = getDistrictExpenseMultiplier(person.location?.district || person.location?.area_type || 'residential');
    const effMonthlyExpenses = roundHalfAwayFromZero((eco.monthly_expenses || 0) * mult);
    const monthlyCost = Math.max(effMonthlyExpenses, 100000);
    const monthlySurplus = (eco.monthly_income || 0) - effMonthlyExpenses;
    const netWorth = (eco.cash || 0) + (eco.investments || 0) + (eco.other_assets || 0) - (eco.debt || 0);

    const liquidMonths = ((eco.cash || 0) + (eco.investments || 0) * 0.8) / monthlyCost;
    const reserveScore = clamp(20 * Math.log2((liquidMonths + 1) / 4), -100, 100);
    const cashflowScore = clamp(100 * (monthlySurplus / monthlyCost), -100, 100);
    const wealthScore = clamp(15 * Math.log2(Math.max(0, netWorth) / (12 * monthlyCost) + 1), 0, 100);
    finances = D((2 * reserveScore + 2 * cashflowScore + wealthScore) / 10);
  }

  // 5.3 知性
  const intellect = D((2 * cOf('cognitive_potential') + cOf('learning_drive')
    + 2 * (a.knowledge || 0) + (a.problem_solving || 0)) / 12);

  // 5.4 社交性
  const sociability = D((2 * cOf('extraversion') + cOf('social_initiative')
    + (a.communication_skill || 0) - (st.social_anxiety || 0)) / 10);

  // 5.5 魅力 (health表示値を使用)
  const attractiveness = D((2 * cOf('appearance_potential') + (a.grooming || 0)
    + 2 * (a.interpersonal_charm || 0) + 2 * health) / 12);

  // 5.6 自信
  const confidence = D((cOf('self_worth_disposition') + 2 * (st.self_efficacy || 0)
    + (st.social_confidence || 0) + (st.success_memory || 0)) / 10);

  // 5.7 幸福度 (health表示値を使用)
  const happiness = D((2 * (st.life_satisfaction || 0) + 2 * (st.relationship_satisfaction || 0)
    - 2 * (st.stress || 0) + (st.achievement || 0) + 2 * health) / 16);

  // 5.8 性的欲求（基本資質：弱・中・強による発達・発現パターン）
  let sexual_desire;
  const tier = getLibidoTier(person);
  if (age < 11) {
    // 幼少期（思春期前）
    if (tier === '強') {
      // 強：稀に好奇心や刺激体験で例外的に発現可能
      const isExceptionalSprout = (st.current_libido > 25 && cOf('sexual_interest') > 25);
      sexual_desire = isExceptionalSprout ? D((st.current_libido - 10) / 4) : D(-45 + (age * 1.5));
    } else if (tier === '中') {
      // 中：ほぼ完全に眠っている状態
      const isRareSprout = (st.current_libido > 35 && cOf('sexual_interest') > 35);
      sexual_desire = isRareSprout ? D((st.current_libido - 20) / 5) : D(-48 + (age * 1.0));
    } else {
      // 弱：完全に眠っており欲求なし
      sexual_desire = D(-50);
    }
  } else if (age < 16) {
    // 11〜15歳（思春期・第二次性徴）
    const progress = (age - 10) / 6; // 0.16 〜 0.83
    if (tier === '強') {
      // 強：身体の成熟とともに急速に疼きや快感に目覚めていく
      const adultRaw = (2 * cOf('baseline_libido') + 2 * (st.current_libido || 0) + cOf('sexual_interest') - (st.stress || 0)) / 12;
      const baselineSuppression = -30 * (1 - progress);
      sexual_desire = D(baselineSuppression + adultRaw * progress);
    } else if (tier === '中') {
      // 中：標準的なペースで穏やかに目覚める（15歳で0付近）
      const adultRaw = (2 * cOf('baseline_libido') + 2 * (st.current_libido || 0) + cOf('sexual_interest') - (st.stress || 0)) / 13;
      const baselineSuppression = -40 * (1 - progress);
      sexual_desire = D(baselineSuppression + adultRaw * progress);
    } else {
      // 弱：目覚めは極めて遅く控えめ（15歳でも-20前後）
      const adultRaw = (2 * cOf('baseline_libido') + 2 * (st.current_libido || 0) + cOf('sexual_interest') - (st.stress || 0)) / 15;
      const baselineSuppression = -48 * (1 - progress);
      sexual_desire = D(baselineSuppression + adultRaw * progress - 10);
    }
  } else {
    // 16歳以降・成人期：本来の計算式
    const adultRaw = (2 * cOf('baseline_libido') + 2 * (st.current_libido || 0) + cOf('sexual_interest') - (st.stress || 0)) / 12;
    sexual_desire = D(adultRaw);
  }

  return {
    health,
    finances,
    intellect,
    sociability,
    attractiveness,
    confidence,
    happiness,
    sexual_desire
  };
}

function computeCurrentEmbarrassment(person, context = {}) {
  const baseMod = person.traits?.baseline_modesty?.current ?? 0;
  const pubMod = context.public_exposure_modifier ?? 0;
  const trustMod = context.trust_modifier ?? 0;
  return clamp(roundHalfAwayFromZero(50 + 0.5 * baseMod + pubMod - trustMod), 0, 100);
}

function syncDisplay(st) {
  if (!st) return;
  st.display = computeDisplay(st);
  // 既存コードや条件判定（s.health < 30 等）との完全互換性を維持
  st.health = st.display.health;
  st.finances = st.display.finances;
  st.intellect = st.display.intellect;
  st.sociability = st.display.sociability;
  st.attractiveness = st.display.attractiveness;
  st.confidence = st.display.confidence;
  st.happiness = st.display.happiness;
  st.sexual_desire = st.display.sexual_desire;
  // 旧来のキーも同期
  st.knowledge = st.abilities?.knowledge ?? 0;
  st.stress = st.states?.stress ?? 0;
  st.social = st.display.sociability;
  st.money = st.display.finances;
  st.independence = st.states?.self_efficacy ?? 0;
  st.selfUnderstanding = st.abilities?.knowledge ?? 0;
  st.aesthetics = st.abilities?.interpersonal_charm ?? 0;
  st.morality = st.abilities?.morality ?? 0;
  if (st.sexuality) {
    st.sexuality.desire = st.states?.current_libido ?? 0;
    st.sexuality.shyness = st.states?.current_embarrassment ?? 50;
    st.sexuality.initiative = clamp(50 + (st.traits?.social_initiative?.current ?? 0), 0, 100);
    st.sexuality.curiosity = clamp(50 + (st.traits?.sexual_interest?.current ?? 0), 0, 100);
    st.sexuality.selfKnowledge = clamp(50 + Math.round(((st.abilities?.knowledge ?? 0) + (st.states?.self_efficacy ?? 0)) / 2), 0, 100);
    st.sexuality.selfAcceptance = clamp(50 + (st.traits?.self_worth_disposition?.current ?? 0), 0, 100);
    st.sexuality.boundaryVoice = clamp(50 + Math.round((st.abilities?.communication_skill ?? 0) / 2), 0, 100);
    st.sexuality.intimacyNeed = clamp(50 + Math.round(((st.states?.relationship_satisfaction ?? 0) + (st.states?.current_libido ?? 0)) / 3), 0, 100);
  }
}

function bounded(k, x) {
  if (TRAIT_KEYS.includes(k)) {
    const tr = s?.traits?.[k];
    return clamp(Math.round(x), tr?.min ?? -50, tr?.max ?? 50);
  }
  if (STATE_LOAD_KEYS.includes(k)) return clamp(Math.round(x), 0, 100);
  return clamp(Math.round(x), -100, 100);
}
function initialValue(r) { return clamp(roundHalfAwayFromZero(normal(0, 20, r)), -50, 50); }
