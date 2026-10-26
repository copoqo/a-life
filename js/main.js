'use strict';
// エントリポイント（人生の開始・イベントリスナー登録・初期化）

function start(seed = (Date.now() >>> 0)) {
  if (typeof clearTimeout !== "undefined") clearTimeout(autoPlayTimer);
  s = makeState(seed);
  rng = random(s.rngState);
  s.photo = pickRandomAdultPhoto(rng);
  const infancyRand = (rng && typeof rng.next === 'function') ? rng.next() : Math.random();
  s.infancyPhoto = INFANCY_PHOTOS[Math.floor(infancyRand * INFANCY_PHOTOS.length)];

  // 本人の誕生月から人生が始まる（0歳0ヶ月）
  const bm = s.birth_month || 4;
  s.current_month = bm;
  s.age_months = 0;

  const f = s.originFamily;
  const bSeason = getSeasonName(bm);
  const birthDiary = `【出生の記録】\n` +
    `・生家：${s.location.terrain}・${s.location.district}の${f.houseType}\n` +
    `・家族構成：${f.structure}（${f.membersDescription}）\n` +
    `・家庭環境：${f.environment}\n` +
    `【日記】${bSeason}の穏やかな風が吹く${bm}月、産声とともに始まった命。両親や家族の愛おしそうな眼差しに包まれ、${s.name}の長い人生の物語が静かに幕を開けた。`;
  log(`【誕生】${s.name}がこの世に生を受けた。`, birthDiary);
  isAutoPlaying = true;
  render();
  updateAutoPlayUI();
  // 生まれた直後は最初の記録を読めるよう、1.5秒待ってから自動進行を開始
  scheduleNextAutoStep(1500);
}

// イベントリスナー設定
document.getElementById('restart').onclick = () => { if (confirm('新しい人生を始めますか？')) start() };
document.getElementById('autoToggle').onclick = () => { toggleAutoPlay(); };
document.getElementById('autoSpeedSelect').onchange = (e) => {
  autoPlaySpeed = Number(e.target.value);
  if (isAutoPlaying && !s.pending && !s.finished) scheduleNextAutoStep(autoPlaySpeed);
};
if (document.getElementById('next')) {
  document.getElementById('next').onclick = () => { stopAutoPlay(); step(); render(); };
}
if (document.getElementById('ten')) {
  document.getElementById('ten').onclick = () => { stopAutoPlay(); for (let i = 0; i < 10; i++) { if (s.pending || s.finished || !step()) break; } render(); };
}
document.getElementById('act').onclick = () => {
  const input = document.getElementById('command');
  document.getElementById('feedback').textContent = act(input.value.trim());
  s.rngState = rng.state();
  render();
};
document.getElementById('mode').onchange = e => {
  document.getElementById('intervene').style.display = e.target.value === 'free' ? 'block' : 'none';
  render();
};

try {
  if (typeof localStorage !== 'undefined') {
    for (const k of Object.keys(localStorage)) {
      if (k.startsWith('life-simulator-') && k !== 'life-simulator-v18') localStorage.removeItem(k);
    }
  }
} catch (e) {
  console.warn('localStorage is restricted or unavailable:', e);
}
start();
document.getElementById('intervene').style.display = 'none';

if (window.ResizeObserver) {
  const summaryEl = document.querySelector('.profile-summary');
  if (summaryEl) {
    new ResizeObserver(() => syncProfileSummaryHeight()).observe(summaryEl);
  }
}
window.addEventListener('resize', syncProfileSummaryHeight);
syncProfileSummaryHeight();

const bondsMql = window.matchMedia('(max-width: 600px)');
if (bondsMql.addEventListener) {
  bondsMql.addEventListener('change', updateBondsPanelPosition);
} else if (bondsMql.addListener) {
  bondsMql.addListener(updateBondsPanelPosition);
}
window.addEventListener('resize', updateBondsPanelPosition);
updateBondsPanelPosition();
