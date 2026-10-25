'use strict';
// ビルド版数表示・グローバルエラーハンドラ・イベント定義の読込検証

const BUILD_VERSION = 'v1.22.0 (b20261021-3)';
(function initBuildVersion() {
  const verEl = document.getElementById('buildVersion');
  if (verEl) verEl.textContent = BUILD_VERSION;
})();

window.addEventListener('error', function (err) {
  console.error('Runtime error:', err);
  const notice = document.getElementById('playNotice');
  if (notice) {
    notice.innerHTML = `<span style="color:#b91c1c;font-weight:700;">⚠️ 画面の読み込みまたは実行でエラーが発生しました: ${err.message || err}</span>`;
  }
});

// events/*.js の読み込み検証
function verifyEventDefs() {
  if (!Array.isArray(window.eventDefs) || window.eventDefs.length === 0) {
    console.error('eventDefs is not loaded (events/*.js)');
    const notice = document.getElementById('playNotice');
    if (notice) {
      notice.innerHTML = '<span style="color:#b91c1c;font-weight:700;">⚠️ イベントファイル（events/）の読み込みに失敗しました。キャッシュをクリアして再読み込みしてください。</span>';
    }
    return false;
  }
  return true;
}
verifyEventDefs();
