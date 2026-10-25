'use strict';
// 画面描画

function updateIdentity(s, currentPhoto, escapeHtml) {
  const el = document.getElementById('identity');
  if (!el) return;
  const img = el.querySelector('.identity-avatar');
  const h2 = el.querySelector('h2');
  const p = el.querySelector('p.muted');
  const newH2 = `${escapeHtml(s.name)} · ${s.age}歳 ${s.finished ? '（終了）' : ''} <span class="badge" style="background:#e0e7ff;color:#3730a3;padding:2px 10px;border-radius:12px;font-size:0.65em;font-weight:600;vertical-align:middle;">${escapeHtml(s.occupation || '学生')}</span>`;
  const newP = `${s.age < 6 ? '幼少期' : s.age < 18 ? '学生時代' : s.age < 65 ? '成人期' : 'シニア期'} / 人間関係 ${s.relationships}件`;

  if (!img || !h2 || !p) {
    el.innerHTML = `<div class="identity-wrapper"><img src="${currentPhoto}" class="identity-avatar" alt="${escapeHtml(s.name)}" title="タップして拡大" onerror="if (!this.dataset.fallback) { this.dataset.fallback='child'; this.src='photo/child01.png'; } else if (this.dataset.fallback==='child') { this.dataset.fallback='default'; this.src='photo/0001.png'; }" onclick="window.openPhotoModal(this.src)"><div class="identity-text"><h2>${newH2}</h2><p class="muted" style="margin:2px 0 0;">${newP}</p></div></div>`;
    return;
  }
  if (img.getAttribute('src') !== currentPhoto) {
    img.setAttribute('src', currentPhoto);
  }
  if (img.getAttribute('alt') !== s.name) {
    img.setAttribute('alt', s.name);
  }
  if (h2.innerHTML !== newH2) h2.innerHTML = newH2;
  if (p.innerHTML !== newP) p.innerHTML = newP;
}

function updateStats(s) {
  const statsEl = document.getElementById('stats');
  if (!statsEl) return;
  const statNodes = statsEl.querySelectorAll('.stat');
  if (statNodes.length === DISPLAY_KEYS.length) {
    DISPLAY_KEYS.forEach(([k, label], i) => {
      const val = s.display[k];
      const color = val > 0 ? '#1e7b85' : val < 0 ? '#b91c1c' : '#475569';
      const b = statNodes[i].querySelector('b');
      const text = (val > 0 ? '+' : '') + val;
      if (b) {
        if (b.textContent !== text) b.textContent = text;
        if (b.style.color !== color) b.style.color = color;
      }
    });
  } else {
    statsEl.innerHTML = DISPLAY_KEYS.map(([k, label]) => {
      const val = s.display[k];
      const color = val > 0 ? '#1e7b85' : val < 0 ? '#b91c1c' : '#475569';
      return `<div class="stat"><span class="muted">${label}</span><b style="color:${color}">${val > 0 ? '+' : ''}${val}</b></div>`;
    }).join('');
  }
}

function bindInternalParamHandlers() {
  const libidoApplyBtn = document.getElementById('libidoTierApply');
  if (libidoApplyBtn) {
    libidoApplyBtn.onclick = () => {
      if (s.pending || s.finished) { alert('選択待ち・人生終了時は変更できません'); return; }
      const nextTier = document.getElementById('libidoTierSelect').value;
      const oldTier = getLibidoTier(s);
      if (nextTier !== oldTier) {
        setLibidoTier(s, nextTier);
        log(`[デバッグ] 性欲の基本資質を「${oldTier}」から「${nextTier}」に変更した。`);
        s.rngState = rng.state();
        render();
      }
    };
  }
  const moralityApplyBtn = document.getElementById('moralityApply');
  if (moralityApplyBtn) {
    moralityApplyBtn.onclick = () => {
      if (s.pending || s.finished) { alert('選択待ち・人生終了時は変更できません'); return; }
      const nextVal = Number(document.getElementById('moralitySelect').value);
      const oldVal = s.abilities?.morality ?? s.morality ?? 0;
      if (nextVal !== oldVal) {
        s.abilities.morality = nextVal;
        s.morality = nextVal;
        log(`[デバッグ] モラルを「${oldVal}」から「${nextVal}」に変更した。`);
        s.rngState = rng.state();
        render();
      }
    };
  }
  const showImpactCheckbox = document.getElementById('showImpactToggle');
  if (showImpactCheckbox) {
    showImpactCheckbox.onchange = (e) => {
      s.showImpactInHistory = e.target.checked;
      render();
    };
  }
}

function render() {
  normalizeSexuality(s);
  const locWasOpen = !!document.getElementById('locDetails')?.open;
  const jobWasOpen = !!document.getElementById('jobDetails')?.open;
  const historyDebugWasOpen = !!document.getElementById('historyDebugDetails')?.open;
  const bondsWasOpen = !!document.getElementById('bondDetails')?.open;
  const libidoTierWasOpen = !!document.getElementById('libidoTierDetails')?.open;
  const moralityWasOpen = !!document.getElementById('moralityDetails')?.open;
  const experienceWasOpen = !!document.getElementById('experienceDetails')?.open;
  const internalParamsWasOpen = !!document.getElementById('internalParamsDetails')?.open;
  const escapeHtml = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const sh = s.sexuality?.sexualHistory || {};
  const formatSexCard = (rec, label, cls) => {
    if (!rec) return `<div class="sexual-record-card ${cls}"><div class="sexual-record-label">${label}</div><div class="muted">まだ記録はありません</div></div>`;
    return `<div class="sexual-record-card ${cls}"><div class="sexual-record-label">${label}：${escapeHtml(rec.age)}歳（相手：${escapeHtml(rec.partnerName)}）</div><div class="sexual-record-meta"><strong>${escapeHtml(rec.title)}</strong>${rec.satisfaction != null ? ` / 満足度 ${escapeHtml(rec.satisfaction)}` : ''}</div><div style="margin-top:2px;">${escapeHtml(rec.description)}</div>${rec.diary ? `<div class="sexual-record-diary">「${escapeHtml(rec.diary)}」</div>` : ''}</div>`;
  };

  // 左ステータス領域のスクロール位置を退避
  const profilePanel = document.querySelector('.profile-panel');
  const prevProfileScroll = profilePanel ? profilePanel.scrollTop : 0;

  // 内部パラメータ表示
  const internalParamsEl = document.getElementById('internalParams');
  if (internalParamsEl) {
    const newInternalHtml = getInternalParamsHtml(s);
    if (internalParamsEl.innerHTML !== newInternalHtml) {
      internalParamsEl.innerHTML = newInternalHtml;
      const ipd = document.getElementById('internalParamsDetails');
      if (ipd) ipd.open = internalParamsWasOpen;
      const ltd = document.getElementById('libidoTierDetails');
      if (ltd) ltd.open = libidoTierWasOpen;
      const md = document.getElementById('moralityDetails');
      if (md) md.open = moralityWasOpen;
      bindInternalParamHandlers();
    }
  }

  // デスクトップ／スマホに応じた人間関係パネルの配置を同期
  updateBondsPanelPosition();

  // 人間関係
  const bondsEl = document.getElementById('bonds');
  if (bondsEl) {
    const bondsWasOpen = !!document.getElementById('bondDetails')?.open;
    const newBondsHtml = `<div class="bonds-box"><details id="bondDetails" ${bondsWasOpen ? 'open' : ''}><summary>人間関係：知人 ${s.bonds.filter(b => b.status === 'acquaintance').length} / 親しい友人 ${s.bonds.filter(b => b.status === 'close').length} / 交際中 ${s.bonds.filter(b => b.status === 'partner').length} / 配偶者 ${s.bonds.filter(b => b.status === 'spouse').length} / 合計 ${s.bonds.length}人</summary><div style="padding:6px 0;margin-bottom:8px;border-bottom:1px solid #e2e8f0;font-size:0.9em;"><strong>性経験人数</strong>：${getSexualPartnerCount(s)}人（交際・婚姻関係：${getSexualPartnerList(s).filter(p => p.type === 'bond').length}人 / 逢瀬・風俗・見知らぬ人等：${getSexualPartnerList(s).filter(p => p.type !== 'bond').length}人）</div><div class="exp-list" style="display:flex;flex-direction:column;gap:6px;">${s.bonds.map(b => `<div style="padding:7px 10px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;display:flex;justify-content:space-between;align-items:center;gap:6px;"><div style="min-width:0;"><strong style="color:${b.gender === 'female' ? '#e11d48' : '#1e293b'};font-size:0.95em;">${escapeBond(b.name)}</strong>${getSexualPartnerList(s).some(p => p.id === b.id) || b.intimate ? '<span title="肉体関係あり" style="color:#e11d48;margin-left:4px;">❤</span>' : (b.kissed ? '<span title="キス済み" style="color:#ec4899;margin-left:4px;font-size:0.85em;">💋</span>' : '')}<span style="color:#64748b;font-size:0.85em;margin-left:6px;">（${b.gender === 'female' ? '<span style="color:#e11d48;font-weight:600;">女性</span>' : '男性'}・${BOND_ROLE_LABELS[b.role] || '知人'}）</span>${b.metAge != null ? `<span style="color:#94a3b8;font-size:0.8em;margin-left:5px;">${b.metAge}歳で出会い</span>` : ''}${b.metContext ? `<div style="color:#475569;font-size:0.78em;margin-top:2px;">きっかけ・関係：${escapeHtml(b.metContext)}${b.private ? ' <span style="color:#7c3aed;font-weight:600;">[秘密]</span>' : ''}</div>` : ''}</div><div style="flex-shrink:0;"><span class="badge" style="background:${b.status === 'spouse' ? '#fdf2f8;color:#be185d;border:1px solid #fbcfe8' : b.status === 'partner' ? '#fef2f2;color:#b91c1c;border:1px solid #fecaca' : b.status === 'close' ? '#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe' : '#f1f5f9;color:#475569;border:1px solid #e2e8f0'};padding:2px 8px;border-radius:10px;font-size:0.8em;font-weight:600;">${({ acquaintance: '知人', close: '親しい友人', partner: '交際中', spouse: '配偶者', former: '元交際', widowed: '死別' })[b.status] || b.status}</span></div></div>`).join('') || '<p class="muted" style="padding:6px 0;">まだ出会いはありません。</p>'}</div></details></div>`;
    if (bondsEl.innerHTML !== newBondsHtml) {
      bondsEl.innerHTML = newBondsHtml;
    }
  }

  // 性的・親密な経験パネル
  const exp = s.sexuality.experience;
  const expLabels = { multiple_relationship: '合意のある複数交際', secret_relationship: '秘密の交際', friendship: '親交', rejection: '意思の尊重', reunion: '再会', reflection: '振り返り', privacy: '非公開', intimacy: '身体的な親密さ', masturbation: '自慰', relationship: '交際・婚姻', boundary: '境界線', communication: '対話', meeting: '出会い', disclosure: '公開・秘密', breakup: '別れ・破局', bereavement: '死別' };
  const expCounts = {}; for (const e of exp) { const label = expLabels[e.kind] || 'その他'; expCounts[label] = (expCounts[label] || 0) + 1; }
  const expPanel = document.getElementById('experiencePanel');
  if (expPanel) {
    const experienceWasOpen = !!document.getElementById('experienceDetails')?.open;
    const sexualRecordsWasOpen = document.getElementById('sexualRecordsDetails') ? document.getElementById('sexualRecordsDetails').open : true;
    const sexualRecordsHtml = `<details class="sexual-records-box" id="sexualRecordsDetails" ${sexualRecordsWasOpen ? 'open' : ''} style="margin:7px 0 9px;background:#faf4f8;border:1px solid #ebdbe5;border-radius:8px;padding:8px;"><summary style="cursor:pointer;font-size:11.5px;font-weight:700;color:#6a4a70;outline:none;">心に刻まれた性行為の記憶 ▾</summary><div style="margin-top:6px;">${formatSexCard(sh.firstSex, '🌸 初めての性行為（初体験）', 'first')}${formatSexCard(sh.mostMemorable, '🔥 最も心に残った性行為', 'memorable')}${formatSexCard(sh.latestSex, s.finished ? '🌙 人生最後の性行為' : '🌙 最も直近の性行為', 'latest')}</div></details>`;
    const newExpHtml = `<div class="experience-panel"><details id="experienceDetails" ${experienceWasOpen ? 'open' : ''}><summary>性的・親密な経験　${exp.length}件 ▾</summary>${sexualRecordsHtml}<div class="exp-counts">${Object.entries(expCounts).map(([k, v]) => `${escapeHtml(k)} ${v}件`).join(' / ') || '記録なし'}</div><div class="exp-list">${exp.length ? exp.slice().reverse().map(e => `<div class="exp-entry"><div class="exp-meta">${escapeHtml(e.age)}歳 ・ ${escapeHtml(expLabels[e.kind] || 'その他')}${e.private ? ' ・ 非公開' : ''}</div><div>${escapeHtml(e.description)}</div>${e.partnerId ? `<div class="exp-meta">相手：${escapeHtml(s.bonds.find(b => b.id === e.partnerId)?.name || '不明')}（${escapeHtml(e.partnerId)}）</div>` : ''}${e.satisfaction != null ? `<div class="exp-meta">満足感 ${escapeHtml(e.satisfaction)}</div>` : ''}</div>`).join('') : '<div class="exp-empty">まだ経験の記録はありません。出会い・交際・親密さに関する出来事が起きると、ここに追加されます。</div>'}</div></details></div>`;
    if (expPanel.innerHTML !== newExpHtml) {
      expPanel.innerHTML = newExpHtml;
    }
  }

  // アバター選択バリデーション
  if (!s.photo || !AVAILABLE_ADULT_PHOTOS.includes(s.photo)) {
    s.photo = pickRandomAdultPhoto(rng);
  }
  const infancyList = ['photo/infancy01.png', 'photo/infancy02.png', 'photo/infancy03.png'];
  if (!s.infancyPhoto || !infancyList.includes(s.infancyPhoto)) {
    const randVal = (rng && typeof rng.next === 'function') ? rng.next() : Math.random();
    s.infancyPhoto = infancyList[Math.floor(randVal * infancyList.length)];
  }
  const knownDedicatedChilds = ['photo/0001-1.png', 'photo/0002-1.png', 'photo/0003-1.png'];
  let currentPhoto = s.photo;
  if (s.age <= 3) {
    currentPhoto = s.infancyPhoto || 'photo/infancy01.png';
  } else if (s.age <= 11) {
    const dedicated = s.photo ? s.photo.replace(/\.png$/, '-1.png') : null;
    currentPhoto = (dedicated && knownDedicatedChilds.includes(dedicated)) ? dedicated : 'photo/child01.png';
  }

  // アバター・名前のインプレース更新（画像再読み込み点滅を防止）
  updateIdentity(s, currentPhoto, escapeHtml);

  // 性格・パートナー
  const persEl = document.getElementById('personalityInterest');
  if (persEl) {
    const newPersHtml = getPersonalityAndInterestsHtml(s);
    if (persEl.innerHTML !== newPersHtml) persEl.innerHTML = newPersHtml;
  }
  const partnerEl = document.getElementById('partnerStatus');
  if (partnerEl) {
    const newPartnerHtml = getPartnerSummary(s);
    if (partnerEl.innerHTML !== newPartnerHtml) partnerEl.innerHTML = newPartnerHtml;
  }

  const locEl = document.getElementById('location');
  if (locEl && !locEl.innerHTML) locEl.innerHTML = `<div class="location-box" style="display:none;"></div>`;
  if (document.getElementById('locApply') && !document.getElementById('locApply').dataset.bound) {
    document.getElementById('locApply').dataset.bound = '1';
    document.getElementById('locApply').onclick = () => { if (s.pending || s.finished) { alert('選択待ち・人生終了時は変更できません'); return } const next = { terrain: document.getElementById('locTerrain').value, district: document.getElementById('locDistrict').value }; if (setLocation(next, '居住地変更')) { apply({ money: -5, stress: 2 }); s.rngState = rng.state() } render() };
  }
  if (document.getElementById('jobApply') && !document.getElementById('jobApply').dataset.bound) {
    document.getElementById('jobApply').dataset.bound = '1';
    document.getElementById('jobApply').onclick = () => { if (s.pending || s.finished) { alert('選択待ち・人生終了時は変更できません'); return } const nextJob = document.getElementById('jobSelect').value; if (nextJob && nextJob !== s.occupation) { const old = s.occupation; s.occupation = nextJob; if (nextJob === '学生') s.flags.university = s.age >= 18; if (nextJob === '一般職') s.flags.employed = true; log(`職業を「${old}」から「${nextJob}」に変更した。`); s.rngState = rng.state(); render() } };
  }

  // ステータス表示のインプレース更新（点滅を防止）
  updateStats(s);

  // 左パネルのスクロール位置を復元
  if (profilePanel && profilePanel.scrollTop !== prevProfileScroll) {
    profilePanel.scrollTop = prevProfileScroll;
  }

  const rawEvent = eventDefs.find(x => x.id === s.pending);
  const e = getEventCurrent(rawEvent);
  const eventContainer = document.getElementById('event');
  if (s.pending === 'multiple_relationship') {
    eventContainer.style.display = 'block';
    eventContainer.innerHTML = `<div class="pending-event-card">
          <div class="pending-header"><span class="pending-badge">⚠️ 重要な選択</span><span class="pending-age">${s.age}歳</span></div>
          <div class="pending-title">新しい交際をどうする？</div>
          <div class="pending-desc">現在の交際相手がいるなかで、${escapeHtml(s.bonds.find(b => b.id === s.pendingBondId)?.name || '新しい相手')}との交際を考えている。関係者の意思をどう扱う？</div>
          <div class="pending-choices">
            ${[
        '今の関係を優先する',
        '現在の交際を終えて新しい交際を始める',
        '全員に相談し合意を得られた場合のみ複数交際する',
        '秘密にして新しい交際を始める'
      ].map((t, i) => `<button class="choice" data-multiple="${i}">${t}</button>`).join('')}
          </div>
        </div>`;
  } else if (e) {
    const isNarrative = e.is_narrative || !e.choices || e.choices.length === 0;
    eventContainer.style.display = 'block';

    if (isNarrative) {
      const badgeText = e.narrative_type === 'precursor' ? '🌱 予兆・きっかけ' :
        e.narrative_type === 'followup' ? '🍃 あの時の出来事の後日談' : '📖 人生の出来事';
      const badgeClass = e.narrative_type === 'precursor' ? 'badge-precursor' :
        e.narrative_type === 'followup' ? 'badge-followup' : 'badge-narrative';
      eventContainer.innerHTML = `<div class="pending-event-card narrative-card">
            <div class="pending-header">
              <span class="pending-badge ${badgeClass}">${badgeText}</span>
              <span class="pending-age">${s.age}歳</span>
            </div>
            <div class="pending-title">${escapeHtml(e.title)}</div>
            <div class="pending-desc">${escapeHtml(e.text || e.description)}</div>
            <div class="pending-choices">
              <button class="choice choice-narrative" data-narrative="1">心に留めて進む ▾</button>
            </div>
          </div>`;
    } else {
      // 動的選択肢抽出（4〜6個からパラメータ・状態に応じた2〜3個を抽出）
      const dynChoices = getDynamicChoices(e, s);
      const classBadge = e.classification === 'major'
        ? '<span class="pending-badge badge-major" style="margin-right:6px;">🔥 重大</span>'
        : (e.classification === 'random' ? '<span class="pending-badge badge-random" style="margin-right:6px;">🎲 突発</span>' : '<span class="pending-badge badge-daily" style="margin-right:6px;">☕ 日常</span>');
      eventContainer.innerHTML = `<div class="pending-event-card">
            <div class="pending-header"><div>${classBadge}<span class="pending-badge">⚠️ 選択が必要です</span></div><span class="pending-age">${s.age}歳</span></div>
            <div class="pending-title">${escapeHtml(e.title)}</div>
            <div class="pending-desc">${escapeHtml(e.text || e.description)}</div>
            <div class="pending-choices">
              ${dynChoices.map(item => {
        const { label } = parseChoice(e, item.originalIndex, item.choice);
        const tip = choiceTooltip(item.choice, item.originalIndex, e);
        return `<button class="choice" data-choice="${item.originalIndex}" ${tip ? `title="【効果】${escapeHtml(tip)}"` : ''}>${escapeHtml(label)}</button>`;
      }).join('')}
            </div>
          </div>`;
    }
  } else {
    eventContainer.style.display = s.finished ? 'block' : 'none';
    eventContainer.innerHTML = s.finished ? '<div class="note"><p>この人生は終わりました。新しい人生を始められます。</p></div>' : '';
  }

  const playNotice = document.getElementById('playNotice');
  if (playNotice) {
    if (s.pending) {
      const pendingEv = eventDefs.find(x => x.id === s.pending);
      if (pendingEv && (pendingEv.is_narrative || !pendingEv.choices?.length)) {
        playNotice.innerHTML = '<span style="color:#166534;font-weight:600;">📖 出来事の発生：「心に留めて進む」を押して進行してください</span>';
      } else {
        playNotice.innerHTML = '<span style="color:#b91c1c;font-weight:600;">⚠️ 選択待ち：「人生の記録」で選択肢を選んでください</span>';
      }
    } else if (s.finished) {
      playNotice.innerHTML = '<span style="color:#64748b;">人生終了。右上の「新しい人生」から始められます</span>';
    } else {
      playNotice.innerHTML = '重要なイベントでは進行が停止します。選択・結果は「人生の記録」に表示されます。';
    }
  }

  document.querySelectorAll('[data-choice]').forEach(b => b.onclick = () => settle(rawEvent, Number(b.dataset.choice)));
  document.querySelectorAll('[data-multiple]').forEach(b => b.onclick = () => settleMultiple(Number(b.dataset.multiple)));
  document.querySelectorAll('[data-narrative]').forEach(b => b.onclick = () => settleNarrative(rawEvent));

  const openDiaries = new Set([...document.querySelectorAll('#history details[open]')].map(d => d.dataset.diaryId));
  document.getElementById('history').innerHTML = s.history.filter(h => !h.text.endsWith('：選択を待っています。')).slice().reverse().map((h, i) => {
    const histClassBadge = h.classification === 'major'
      ? '<span class="history-tag tag-major" style="margin-right:4px;">重大</span>'
      : (h.classification === 'random' ? '<span class="history-tag tag-random" style="margin-right:4px;">突発</span>' : (h.classification === 'daily' ? '<span class="history-tag tag-daily" style="margin-right:4px;">日常</span>' : ''));
    return `<div class="history-entry ${h.choice ? 'choice-entry' : ''} ${h.narrative ? 'narrative-entry' : ''}">
          <p><strong>${h.dateText || (h.age + '歳')}</strong>　${histClassBadge}${escapeHtml(h.text)}</p>
          ${h.badgeLabel ? `<div class="history-narrative-line"><span class="history-tag tag-${h.narrativeType || 'story'}">${escapeHtml(h.badgeLabel)}</span></div>` : ''}
          ${h.choice ? `<div class="history-choice-line"><span class="history-tag tag-choice">選択</span><span class="history-choice-text">${escapeHtml(h.choice)}</span></div>` : ''}
          ${h.result ? `<div class="history-result-line"><span class="history-tag tag-result">結果</span><span class="history-result-text">${escapeHtml(h.result)}</span></div>` : ''}
          ${(s.showImpactInHistory && h.impact) ? `<div class="history-impact-line"><span class="history-tag tag-impact">変化</span><span class="history-impact-text">${escapeHtml(h.impact)}</span></div>` : ''}
          ${h.diary ? `<details class="diary" data-diary-id="${escapeHtml(h.age + '-' + h.text)}" ${openDiaries.has(h.age + '-' + h.text) ? 'open' : ''}><summary>日記を見る</summary><div class="diary-body">${escapeHtml(h.diary)}</div></details>` : ''}
        </div>`;
  }).join('') || '<p class="muted">これから人生が始まります。</p>';
  if (document.getElementById('locDetails')) document.getElementById('locDetails').open = locWasOpen;
  if (document.getElementById('jobDetails')) document.getElementById('jobDetails').open = jobWasOpen;
  if (document.getElementById('libidoTierDetails')) document.getElementById('libidoTierDetails').open = libidoTierWasOpen;
  if (document.getElementById('moralityDetails')) document.getElementById('moralityDetails').open = moralityWasOpen;
  if (document.getElementById('historyDebugDetails')) document.getElementById('historyDebugDetails').open = historyDebugWasOpen;
  if (document.getElementById('bondDetails')) document.getElementById('bondDetails').open = bondsWasOpen;
  if (document.getElementById('next')) { document.getElementById('next').disabled = s.finished || !!s.pending; document.getElementById('next').title = s.pending ? '先にイベントの選択肢を選んでください' : ''; }
  if (document.getElementById('ten')) { document.getElementById('ten').disabled = s.finished || !!s.pending; document.getElementById('ten').title = s.pending ? '先にイベントの選択肢を選んでください' : ''; }
  if (document.getElementById('act')) document.getElementById('act').disabled = s.finished || !!s.pending;
  updateAutoPlayUI();
  syncProfileSummaryHeight();
}
