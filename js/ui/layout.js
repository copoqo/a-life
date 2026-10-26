'use strict';
// レイアウト調整（プロフィール高さ同期・人間関係パネル配置・写真モーダル）

function syncProfileSummaryHeight() {
  const summary = document.querySelector('.profile-summary');
  if (summary) {
    const h = Math.ceil(summary.getBoundingClientRect().height);
    if (h > 0) {
      const currentVal = document.documentElement.style.getPropertyValue('--profile-summary-height');
      if (currentVal !== `${h}px`) {
        document.documentElement.style.setProperty('--profile-summary-height', `${h}px`);
      }
    }
  }
}

// 写真拡大モーダル処理
window.openPhotoModal = function (src) {
  let modal = document.getElementById('photoModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'photoModal';
    modal.className = 'photo-modal';
    modal.innerHTML = `
      <div class="photo-modal-content" onclick="event.stopPropagation()">
        <button class="photo-modal-close" onclick="document.getElementById('photoModal').classList.remove('active')" aria-label="閉じる">✕</button>
        <img id="photoModalImg" src="" alt="写真拡大" onclick="document.getElementById('photoModal').classList.remove('active')">
      </div>
    `;
    modal.onclick = () => modal.classList.remove('active');
    document.body.appendChild(modal);
  }
  const img = document.getElementById('photoModalImg');
  if (img) img.src = src;
  modal.classList.add('active');
};

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('photoModal');
    if (modal) modal.classList.remove('active');
  }
});

// デスクトップ／スマホに応じた「人間関係パネル」の動的配置切り替え
// デスクトップ：左カラムのパラメータ（#stats）直下（性的・親密な経験パネルの上）
// スマホ：操作パネル（.play-panel）の上（.workspace直下）
function updateBondsPanelPosition() {
  const bondsPanel = document.querySelector('.bonds-panel');
  if (!bondsPanel) return;
  const isMobile = window.matchMedia('(max-width: 600px)').matches;
  if (isMobile) {
    const playPanel = document.querySelector('.play-panel');
    const workspace = document.querySelector('.workspace');
    if (playPanel && workspace && bondsPanel.nextElementSibling !== playPanel) {
      workspace.insertBefore(bondsPanel, playPanel);
    }
  } else {
    const stats = document.getElementById('stats');
    const profilePanel = document.querySelector('.profile-panel');
    if (stats && profilePanel && stats.nextElementSibling !== bondsPanel) {
      stats.insertAdjacentElement('afterend', bondsPanel);
    }
  }
}
