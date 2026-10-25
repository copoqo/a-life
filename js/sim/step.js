'use strict';
// 月次ステップ（時間経過・経済・寿命・イベント抽選）

function applyAnnualLocationEffects() {
  const d = s.location?.district;
  const t = s.location?.terrain;
  if (!d) return;
  if (d === '住宅街') {
    if (rng.next() < 0.35) s.stress = bounded('stress', s.stress - 1);
    if (rng.next() < 0.25) s.morality = bounded('morality', s.morality + 1);
  } else if (d === '繁華街') {
    if (rng.next() < 0.45) s.money = bounded('money', s.money - 1);
    if (rng.next() < 0.35) s.stress = bounded('stress', s.stress + 1);
    if (rng.next() < 0.35) s.social = bounded('social', s.social + 1);
    if (s.sexuality && rng.next() < 0.30) s.sexuality.desire = bounded('desire', s.sexuality.desire + 1);
    if (rng.next() < 0.25) s.morality = bounded('morality', s.morality - 1);
  } else if (d === '商業地域') {
    if (s.flags.employed && rng.next() < 0.35) s.money = bounded('money', s.money + 1);
    if (rng.next() < 0.30) s.stress = bounded('stress', s.stress + 1);
    if (rng.next() < 0.25) s.aesthetics = bounded('aesthetics', s.aesthetics + 1);
  } else if (d === '農村集落') {
    if (rng.next() < 0.40) s.health = bounded('health', s.health + 1);
    if (rng.next() < 0.35) s.stress = bounded('stress', s.stress - 1);
    if (rng.next() < 0.30) s.social = bounded('social', s.social + 1);
    if (rng.next() < 0.25) s.secrecy = bounded('secrecy', s.secrecy - 1);
  } else if (d === '工業地域') {
    if (rng.next() < 0.30) s.money = bounded('money', s.money + 1);
    if (rng.next() < 0.25) s.health = bounded('health', s.health - 1);
    if (rng.next() < 0.30) s.independence = bounded('independence', s.independence + 1);
  } else if (d === '高所得地域') {
    if (rng.next() < 0.45) s.money = bounded('money', s.money - 2);
    if (rng.next() < 0.40) s.aesthetics = bounded('aesthetics', s.aesthetics + 1);
    if (rng.next() < 0.30) s.happiness = bounded('happiness', s.happiness + 1);
  } else if (d === '経済的困難が多い地域') {
    if (rng.next() < 0.35) s.money = bounded('money', s.money - 1);
    if (rng.next() < 0.35) s.stress = bounded('stress', s.stress + 1);
    if (rng.next() < 0.35) s.independence = bounded('independence', s.independence + 1);
    if (rng.next() < 0.25) s.morality = bounded('morality', s.morality - 1);
  }
  if (t === '山間部' || t === '海辺' || t === '離島') {
    if (rng.next() < 0.25) s.health = bounded('health', s.health + 1);
    if (rng.next() < 0.25) s.stress = bounded('stress', s.stress - 1);
  } else if (t === '都市部') {
    if (rng.next() < 0.25) s.knowledge = bounded('knowledge', s.knowledge + 1);
  }
}
function step() {
  if (s.finished || s.pending) return false;
  // 同じ月の未処理イベントがあれば、月を進めず続きから再開
  if (s.monthEvents?.length || s.yearEvents?.length) return processMonthEvents();

  // 内部時間を1ヶ月進める
  const bm = s.birth_month || 4;
  s.current_month = ((s.current_month || bm) % 12) + 1;
  s.age_months = (s.age_months || 0) + 1;

  // 誕生月に達したときのみ年齢を +1 し、年次カウンタをリセット
  const isBirthMonth = s.current_month === bm;
  if (isBirthMonth) {
    s.age++;
    s.eventsThisYear = 0;
    s.sweetThisYear = false;
    s.crisisThisYear = false;
    s.tabooCountThisYear = 0;
    updateSexualityForAge();
  }

  // 月次・誕生月・3月（卒業）・4月（入学・進学・就職）のライフマイルストーン判定
  lifeMilestones(isBirthMonth);

  // 仕様書 8章 経時回復・欲求回帰（月次減衰：12ヶ月で年次減衰率と同等になるよう調整）
  s.states.fatigue = clamp(Math.round(s.states.fatigue * 0.935), 0, 100);
  if (s.states.fatigue > 0 && rng.next() < 0.25) s.states.fatigue = Math.max(0, s.states.fatigue - 1);
  s.states.stress = clamp(Math.round(s.states.stress * 0.95), 0, 100);
  if (s.states.stress > 0 && rng.next() < 0.25) s.states.stress = Math.max(0, s.states.stress - 1);
  s.states.mood = clamp(Math.round(s.states.mood * 0.925), -100, 100);
  const baseLib = s.traits.baseline_libido.current;
  s.states.current_libido = clamp(Math.round(0.916 * s.states.current_libido + 0.084 * baseLib), -100, 100);

  if (s.age < 18) {
    if (isBirthMonth) {
      s.abilities.knowledge = clamp((s.abilities.knowledge || 0) + 3, -100, 100);
      s.states.self_efficacy = clamp((s.states.self_efficacy || 0) + 2, -100, 100);
    }
    // 幼少期・就学期は生活費0を維持、高校生バイト中は月収を加算
    s.economy.monthly_expenses = 0;
    s.economy.monthly_income = (s.occupation === '学生' && s.age >= 15 && s.flags.employed_part_time) ? 30000 : 0;
    if (s.economy.monthly_income > 0) applyCashDelta(s, s.economy.monthly_income);
  } else {
    // 仕様書 6.4 & 8章 経済収支の月次反映（毎月1ヶ月分の収支を反映）
    const mult = getDistrictExpenseMultiplier(s.location?.district);
    let monthlyInc = 0;
    let monthlyExp = roundHalfAwayFromZero(160000 * mult);
    switch (s.occupation) {
      case '学生': monthlyInc = 50000; monthlyExp = roundHalfAwayFromZero(90000 * mult); break;
      case '一般職': monthlyInc = s.age < 30 ? 220000 : s.age < 50 ? 300000 : 360000; break;
      case '専門職・クリエイター': monthlyInc = s.age < 30 ? 250000 : 380000; monthlyExp = roundHalfAwayFromZero(190000 * mult); break;
      case '自営業': monthlyInc = 280000 + Math.round((rng.next() - 0.5) * 80000); monthlyExp = roundHalfAwayFromZero(210000 * mult); break;
      case 'パート・アルバイト': monthlyInc = 130000; monthlyExp = roundHalfAwayFromZero(120000 * mult); break;
      case '風俗': monthlyInc = s.age < 26 ? 650000 : s.age < 35 ? 500000 : 350000; monthlyExp = roundHalfAwayFromZero(280000 * mult); break;
      case '専業主婦': monthlyInc = 0; monthlyExp = roundHalfAwayFromZero(150000 * mult); break;
      case '無職': monthlyInc = s.age >= 65 ? 120000 : 0; monthlyExp = roundHalfAwayFromZero(120000 * mult); break;
    }
    s.economy.monthly_income = monthlyInc;
    s.economy.monthly_expenses = monthlyExp;
    const monthlySurplus = monthlyInc - monthlyExp;
    applyCashDelta(s, monthlySurplus);
    if (isBirthMonth) applyAnnualLocationEffects();
  }
  syncDisplay(s);
  if (isBirthMonth) {
    if (s.age > 45) s.health = bounded('health', s.health - (rng.next() < .65 ? 1 : 0));
    if (s.age > 70) s.health = bounded('health', s.health - 1);
  }
  const annualDeathChance = s.age < 60 ? .0002 : s.age < 80 ? .002 + (s.age - 60) * .001 : s.age < 100 ? .025 + (s.age - 80) * .012 : .35;
  const monthlyDeathChance = (annualDeathChance / 12) * (s.health < 30 ? 2 : 1);
  if ((isBirthMonth && s.age >= 120) || rng.next() < monthlyDeathChance) {
    s.finished = true; log(`人生を終えた。${s.age}年間を生きた。`, 'たくさんの出来事があった。どれも私が生きた時間だった。');
    s.rngState = rng.state(); return false;
  }
  advanceBonds();
  // 月ごとのイベント抽選
  s.monthEvents = pickMonthEvents();
  s.yearEvents = s.monthEvents;
  if (s.pending) {
    if (document.getElementById('mode').value === 'auto') {
      settleMultiple(chance(.14) ? 2 : chance(.30) ? 1 : 0, false);
    } else { s.rngState = rng.state(); return false }
  }
  if (!s.monthEvents.length && isBirthMonth && s.age > 0 && s.age % 5 === 0) log('日々の暮らしを重ねた。');
  return processMonthEvents();
}
