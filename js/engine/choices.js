'use strict';
// 動的選択肢抽出と自動選択

// ユーザー要望：すべてのイベントの選択肢データ(4〜6個)から、その時点のパラメータや状態を踏まえた2〜3の選択肢を動的に抽出して表示
function getDynamicChoices(event, st = s) {
  if (!event || !event.choices || event.choices.length === 0) return [];
  const choices = event.choices;
  if (choices.length <= 3) {
    return choices.map((c, i) => ({ choice: c, originalIndex: i }));
  }

  const snap = makeSnapshot(st);
  const bindings = resolveActors(event, snap, rng) || {};

  // 1. requirements の評価（満たさないものは除外）
  const eligible = [];
  choices.forEach((c, idx) => {
    if (!c.requirements || evaluateCondition(c.requirements, snap, bindings)) {
      eligible.push({ choice: c, originalIndex: idx });
    }
  });

  if (eligible.length <= 3) {
    return eligible.length >= 2 ? eligible : choices.slice(0, 3).map((c, i) => ({ choice: c, originalIndex: i }));
  }

  // 2. 主人公のパラメータ・状態・性格に応じた親和性スコアリング
  const scored = eligible.map(item => {
    const c = item.choice;
    const eff = getChoiceEffect(c);
    const label = getChoiceLabel(c);
    let score = 5.0;

    // 知識・分析志向
    const know = st.abilities?.knowledge ?? st.knowledge ?? 0;
    if (eff.knowledge && eff.knowledge > 0) score += (know > 20 ? 3.5 : 1.0);
    if (/勉強|知識|調べる|分析|資格|書籍|観察/.test(label)) score += (know > 15 ? 3.0 : 0);

    // 社交・相談志向
    const soc = st.abilities?.communication_skill ?? st.social ?? 0;
    if (eff.social && eff.social > 0) score += (soc > 20 ? 3.5 : 1.0);
    if (/相談|仲間|友達|先輩|打ち明ける|分かち合|甘えて/.test(label)) score += (soc > 10 ? 3.0 : -1.0);

    // 自立・挑戦・独立心
    const indep = st.states?.self_efficacy ?? st.independence ?? 0;
    if (eff.independence && eff.independence > 0) score += (indep > 20 ? 3.5 : 1.0);
    if (/独立|自分の力|挑戦|切り開く|腹をくくる|直感を信じて/.test(label)) score += (indep > 15 ? 3.0 : 0);

    // ストレス・疲労時の休息・回避志向
    const stress = st.states?.stress ?? st.stress ?? 0;
    const fatigue = st.states?.fatigue ?? 0;
    if (stress > 20 || fatigue > 25) {
      if (eff.stress && eff.stress < 0) score += 4.5;
      if (/休む|無理をせず|ペースを守る|一歩引く|自然体|時期を待つ/.test(label)) score += 4.0;
      if (eff.stress && eff.stress > 2) score -= 3.5;
    }

    // 性欲・背徳・快楽
    const libido = (st.traits?.baseline_libido?.current || 0) + (st.states?.current_libido || 0);
    const morality = st.abilities?.morality ?? st.morality ?? 0;
    if (eff.desire && eff.desire > 0) score += (libido > 30 ? 4.5 : 1.0);
    if (/快感|身を委ねる|疼き|熱|抱かれ|交わ|秘密の熱/.test(label)) {
      if (libido > 35) score += 5.0;
      if (morality < 0) score += 3.5;
    }
    if (/理性|自制|断る|境界線|冷静/.test(label)) {
      if (morality > 15) score += 4.0;
      if (libido > 60) score -= 2.5;
    }

    // 経済状況
    const cash = st.economy?.cash ?? st.money ?? 0;
    if (eff.money && eff.money < 0 && cash < 0) score -= 3.5;
    if (eff.money && eff.money > 0 && cash < 10) score += 3.0;

    // 微かなゆらぎ
    score += (rng.next() - 0.5) * 2.2;

    return { ...item, score, label, eff };
  });

  scored.sort((a, b) => b.score - a.score);

  // 3. 多様性の確保（2〜3個選出）
  const selected = [scored[0]];
  const remaining = scored.slice(1);
  let secondPick = remaining[0];
  for (const cand of remaining) {
    const candIsRest = (cand.eff.stress < 0 || /休む|引く|自然体|断る|自制/.test(cand.label));
    const firstIsRest = (selected[0].eff.stress < 0 || /休む|引く|自然体|断る|自制/.test(selected[0].label));
    if (candIsRest !== firstIsRest) {
      secondPick = cand;
      break;
    }
  }
  selected.push(secondPick);

  // 3番手を加える（約75%で3個、25%で2個表示）
  if (remaining.length > 1 && rng.next() < 0.75) {
    const thirdCandidates = remaining.filter(c => c !== secondPick);
    if (thirdCandidates.length > 0) {
      selected.push(thirdCandidates[0]);
    }
  }

  selected.sort((a, b) => a.originalIndex - b.originalIndex);
  return selected;
}

// 仕様書 7.3 Softmax 効用モデルによる自動選択アルゴリズム
function pickAutomaticChoice(event, person, T = 1.0) {
  const choices = event.choices;
  if (!choices || choices.length === 0) return 0;
  if (choices.length === 1) return 0;

  // 4〜6個ある場合は、まずキャラクター状態を踏まえた2〜3個の候補を抽出
  const dyn = getDynamicChoices(event, person);
  const candidateIndices = dyn.length > 0 ? dyn.map(d => d.originalIndex) : choices.map((_, i) => i);
  if (candidateIndices.length === 1) return candidateIndices[0];

  const snap = makeSnapshot(person);
  const utilities = candidateIndices.map(origIdx => {
    const c = choices[origIdx];
    const uDef = c.utility || c[1]?.utility;
    if (uDef) {
      let u = uDef.base ?? 0;
      for (const term of (uDef.terms || [])) {
        const val = resolvePath(term.path, snap) || 0;
        u += (term.coefficient || 0) * val;
      }
      for (const ct of (uDef.conditional_terms || [])) {
        if (evaluateCondition(ct.when, snap)) {
          u += (ct.bonus ?? 0);
        }
      }
      return u;
    }

    const eff = c.effects || (Array.isArray(c) ? c[1] : {}) || {};
    let u = 0.5;
    const t = person.traits || {};
    const st = person.states || {};

    if (eff.happiness) u += eff.happiness * 0.15;
    if (eff.stress) u -= eff.stress * 0.12;
    if (eff.knowledge) u += eff.knowledge * (0.05 + (t.learning_drive?.current || 0) * 0.002);
    if (eff.social) u += eff.social * (0.05 + (t.extraversion?.current || 0) * 0.003 - (st.social_anxiety || 0) * 0.002);
    if (eff.money) u += eff.money * 0.08;

    const sexEff = { ...(event.sexualEffects?.[origIdx] || {}), ...(eff.sexualEffects || {}) };
    if (sexEff.desire) {
      const libido = (t.baseline_libido?.current || 0) + (st.current_libido || 0);
      u += sexEff.desire * (0.01 + libido * 0.002);
    }
    if (eff.morality && eff.morality < 0) {
      u += (t.risk_tolerance?.current || 0) * 0.003;
    }
    return u;
  });

  const uMax = Math.max(...utilities);
  const expValues = utilities.map(u => Math.exp((u - uMax) / T));
  const sumExp = expValues.reduce((a, b) => a + b, 0);
  let rVal = rng.next() * sumExp;
  for (let i = 0; i < expValues.length; i++) {
    rVal -= expValues[i];
    if (rVal <= 0) return candidateIndices[i];
  }
  return candidateIndices[0];
}
