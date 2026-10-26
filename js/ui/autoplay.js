'use strict';
// 自動進行エンジン（月次ステップのタイマーと進行リング）

// === 自動進行エンジン (Auto-Play：月次ステップ) ===
let autoPlayTimer = null;
let autoPlaySpeed = 280;
let isAutoPlaying = true;

function setRingProgress(pct, duration = 0, color = null) {
  const bar = document.getElementById('timeProgressBar');
  if (!bar) return;
  const clampedPct = Math.max(0, Math.min(100, pct));
  const circumference = 81.68;
  const offset = circumference * (1 - clampedPct / 100);
  if (duration > 0) {
    bar.style.transition = `stroke-dashoffset ${duration}ms linear, stroke 0.25s ease`;
  } else {
    bar.style.transition = 'none';
  }
  bar.style.strokeDashoffset = offset.toFixed(2);
  if (color) {
    bar.style.stroke = color;
  }
}

function getBirthYearProgress(st = s) {
  const bm = st?.birth_month || 4;
  const curM = st?.current_month || bm;
  const monthsSinceBirthday = (curM - bm + 12) % 12;
  const startPct = Math.round((monthsSinceBirthday / 12) * 100);
  const endPct = Math.round(((monthsSinceBirthday + 1) / 12) * 100);
  return { bm, curM, monthsSinceBirthday, startPct, endPct };
}

function updateAutoPlayUI() {
  const btn = document.getElementById('autoToggle');
  const icon = document.getElementById('autoToggleIcon');
  const text = document.getElementById('autoToggleText');
  const bar = document.getElementById('timeProgressBar');
  const label = document.getElementById('timeProgressLabel');
  const ageLabel = document.getElementById('timeProgressAge');

  const { curM, monthsSinceBirthday, endPct: curYearPct } = getBirthYearProgress(s);
  const seasonName = getSeasonName(curM);
  const monthsUntilBirthday = 12 - monthsSinceBirthday;

  if (ageLabel && s) {
    if (s.finished) {
      ageLabel.textContent = `${s.age}歳（生涯完走）`;
    } else if (s.pending) {
      ageLabel.textContent = `${s.age}歳（選択待ち）`;
    } else {
      ageLabel.textContent = `${s.age}歳 → ${s.age + 1}歳`;
    }
  }
  if (!btn) return;
  if (s.finished) {
    btn.disabled = true;
    btn.style.opacity = '0.5';
    if (text) text.textContent = '人生終了';
    if (icon) icon.textContent = '⏹';
    if (label) { label.textContent = '⏹ 人生の完走'; label.style.color = '#64748b'; }
    setRingProgress(100, 0, '#94a3b8');
  } else if (s.pending) {
    btn.disabled = true;
    btn.style.opacity = '0.7';
    if (text) text.textContent = '選択待ち';
    if (icon) icon.textContent = '⏳';
    if (label) {
      label.textContent = `⏸ 選択待ち`;
      label.style.color = '#e11d48';
    }
    setRingProgress(Math.min(98, Math.max(8, curYearPct)), 0, '#e11d48');
  } else if (isAutoPlaying) {
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.className = 'primary';
    if (text) text.textContent = '一時停止';
    if (icon) icon.textContent = '⏸';
    if (label) {
      label.textContent = `⏳ 自動進行中`;
      label.style.color = '#4338ca';
    }
    setRingProgress(curYearPct, 0, '#6366f1');
  } else {
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.className = 'secondary';
    if (text) text.textContent = '自動進行';
    if (icon) icon.textContent = '▶';
    if (label) { label.textContent = `⏸ 一時停止中`; label.style.color = '#64748b'; }
    setRingProgress(curYearPct, 0, '#94a3b8');
  }
}

function scheduleNextAutoStep(delay = null) {
  if (typeof clearTimeout !== "undefined") clearTimeout(autoPlayTimer);
  if (!isAutoPlaying || !s || s.finished || s.pending) {
    updateAutoPlayUI();
    return;
  }
  const duration = delay ?? autoPlaySpeed;
  updateAutoPlayUI();

  // 誕生月から次の誕生月までの12ステップ円形リング表示
  const bar = document.getElementById('timeProgressBar');
  if (bar && s) {
    const { startPct, endPct } = getBirthYearProgress(s);
    setRingProgress(startPct, 0, '#6366f1');
    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (isAutoPlaying && !s.pending && !s.finished) {
            setRingProgress(endPct, duration, '#6366f1');
          }
        });
      });
    }
  }

  autoPlayTimer = (typeof setTimeout !== "undefined" ? setTimeout : () => 1)(() => {
    if (!isAutoPlaying || !s || s.finished || s.pending) {
      updateAutoPlayUI();
      return;
    }
    step();
    render();
    if (s.pending || s.finished) {
      updateAutoPlayUI();
    } else {
      scheduleNextAutoStep();
    }
  }, duration);
}

function startAutoPlay(delay = null) {
  if (!s || s.finished || s.pending) return;
  isAutoPlaying = true;
  updateAutoPlayUI();
  scheduleNextAutoStep(delay);
}

function stopAutoPlay() {
  isAutoPlaying = false;
  if (typeof clearTimeout !== "undefined") clearTimeout(autoPlayTimer);
  updateAutoPlayUI();
}

function toggleAutoPlay() {
  if (s.finished || s.pending) return;
  if (isAutoPlaying) {
    stopAutoPlay();
  } else {
    startAutoPlay();
  }
}
