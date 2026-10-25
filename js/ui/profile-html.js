'use strict';
// プロフィール系 HTML 生成（性格・興味・パートナー・内部パラメータ）

function escapeBond(v) { return String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])) }
function getPersonality(st) {
  if (!st) return 'おだやか';
  const age = st.age ?? 0;
  const traits = st.traits || {};
  const abilities = st.abilities || {};
  const display = st.display || {};
  const states = st.states || {};
  const sexuality = st.sexuality || {};

  // 年齢ごとの基本制御（幼年期）
  if (age < 6) {
    const ext = (traits.extraversion?.current ?? 0) + (display.sociability ?? 0);
    if (ext >= 12) return '天真爛漫・活発';
    if (ext <= -12) return '内気でおとなしい';
    return '無邪気で愛らしい';
  }

  // 学童期（6〜11歳：思春期の萌芽・身体のむず痒さ）
  if (age < 12) {
    const precocious = (states.current_libido ?? 0) >= 15 || (sexuality.curiosity ?? 0) >= 50;
    if (precocious) {
      const modesty = traits.baseline_modesty?.current ?? 0;
      if (modesty >= 10) return 'お股のむず痒さに戸惑う早熟';
      return '秘所の疼きに手が伸びるおませ';
    }
    const ext = (traits.extraversion?.current ?? 0) + (display.sociability ?? 0);
    if (ext >= 15) return '明るく元気いっぱい';
    if (ext <= -15) return '内気で恥ずかしがり屋';
    return '素直でおだやか';
  }

  // 思春期前半（12〜14歳：疼きへの戸惑いと目覚め）
  if (age < 15) {
    const libido = (states.current_libido ?? 0) + (traits.baseline_libido?.current ?? 0) + (sexuality.desire ?? 0) * 0.4;
    const modesty = traits.baseline_modesty?.current ?? 0;
    const maso = traits.masochistic_preference?.current ?? 0;
    if (libido >= 25) {
      if (maso >= 12) return 'いじめられて奥を濡らす被虐の芽生え';
      if (modesty >= 12) return '下腹の疼きを恥じて耐える純情生娘';
      return '愛液でショーツを濡らす早熟な肉穴';
    }
    if (libido >= 12) {
      if (modesty >= 10) return '恥じらいつつも身体の火照りに戸惑う娘';
      return '秘所の疼きに指を沈めて息を荒げる早熟';
    }
    const ext = (traits.extraversion?.current ?? 0) + (display.sociability ?? 0);
    if (ext >= 15) return '多感で活発な少女';
    if (ext <= -15) return '物静かで夢見がちな少女';
    return '多感でおだやか';
  }

  // 15歳以上（青年期・成人：下品・猥雑・赤裸々な性的欲望の描写）
  const morality = abilities.morality ?? st.morality ?? 10;
  const libido = (states.current_libido ?? 0) + (traits.baseline_libido?.current ?? 0) + (sexuality.desire ?? 0) * 0.5 + (display.sexual_desire ?? 0) * 0.4;
  const modesty = traits.baseline_modesty?.current ?? 0;
  const risk = traits.risk_tolerance?.current ?? 0;
  const maso = traits.masochistic_preference?.current ?? 0;
  const sado = traits.sadistic_preference?.current ?? 0;
  const ext = (traits.extraversion?.current ?? 0) + (display.sociability ?? 0);
  const initiative = sexuality.initiative ?? 0;
  const intellect = (traits.learning_drive?.current ?? 0) + (display.intellect ?? 0);
  const conf = display.confidence ?? 0;

  // 性的欲望・性癖の候補
  const carnalList = [];

  // 1. 被虐・ドM（乱暴に突き上げられたい、犯されて歓喜）
  if (maso >= 10) {
    carnalList.push({
      text: maso >= 20 ? '乱暴にされたいM体質' : '辱められたい被虐気質',
      score: maso * 2.2 + libido * 0.6
    });
  }

  // 2. 加虐・淫虐サド（男を支配・搾り取る）
  if (sado >= 10) {
    carnalList.push({
      text: sado >= 20 ? '男を支配して弄ぶ淫虐女王' : '男を貪る肉食系',
      score: sado * 2.2 + libido * 0.6
    });
  }

  // 3. 低モラル×高性欲（肉便器・淫売・男喰い・見境なし）
  if (morality <= 8 && libido >= 15) {
    let t = '誰にでも股を開く';
    if (morality <= 5 && libido >= 30) t = '見境なく咥え込む発情期';
    else if (morality <= 6) t = '男の精液を欲しがる淫売体質';
    else t = '貞操観念ゼロの淫乱';
    carnalList.push({ text: t, score: (14 - morality) * 3.5 + libido * 1.2 });
  }

  // 4. 高恥じらい×高性欲（下唇を噛んで耐える・むっつりスケベ・奥をヒクつかせる）
  if (modesty >= 8 && libido >= 15) {
    let t = '疼きに耐える女体';
    if (modesty >= 18 && libido >= 35) t = '羞恥に震えながら期待する';
    else if (modesty >= 15) t = '拒みながらも悦ぶ敏感体質';
    else t = '恥じらいつつも欲しがる';
    carnalList.push({ text: t, score: modesty * 2.2 + libido * 1.0 });
  }

  // 5. 超高リビドー・絶え間ない発情（男の肉棒に飢えた発情牝・淫乱肉穴）
  if (libido >= 30) {
    if (libido >= 50) {
      carnalList.push({ text: '常に快楽を求める淫乱', score: libido * 1.5 });
      carnalList.push({ text: '快楽に飢えた発情期', score: libido * 1.35 });
    } else if (libido >= 40) {
      carnalList.push({ text: '女体の疼きに従順な淫乱', score: libido * 1.5 });
      carnalList.push({ text: '快楽に飢えた発情期', score: libido * 1.35 });
    } else {
      carnalList.push({ text: '快楽に飢えた発情期', score: libido * 1.4 });
      carnalList.push({ text: '女体の歓びに目覚めた', score: libido * 1.25 });
    }
  }

  // 6. 積極的・痴女・露出・変態的好奇心
  if (initiative >= 12 || risk >= 16 || modesty <= -12) {
    let t = '自ら男を誘惑する痴女気質';
    if (risk >= 18 && modesty <= -10) t = '人目につく場所で濡れる露出気質';
    else if (initiative >= 15) t = '未知の快楽に疼く好奇心';
    carnalList.push({ text: t, score: (initiative + risk - modesty) * 1.2 });
  }

  // 7. 中〜通常のリビドー
  if (libido >= 12 && libido < 35) {
    carnalList.push({ text: '男の温もりに反応する身体', score: libido * 0.9 });
  } else if (libido < 12) {
    // 低リビドー・処女
    if (modesty >= 10) carnalList.push({ text: '男の影を恐れつつも微かに疼く体', score: 14 });
    else carnalList.push({ text: '男を知らない未開の処女', score: 12 });
  }

  carnalList.sort((a, b) => b.score - a.score);
  const bestCarnal = carnalList[0]?.text;

  // 表向きの性格・社会的気質
  const surfaceList = [];
  if (morality >= 16) surfaceList.push({ text: '清純ぶった優等生', score: morality });
  else if (morality <= 5) surfaceList.push({ text: '奔放で無防備', score: 10 - morality });

  if (ext >= 16) surfaceList.push({ text: '陽気な愛嬌者', score: ext });
  else if (ext <= -16) surfaceList.push({ text: '物静かで控えめ', score: -ext });

  if (modesty >= 16) surfaceList.push({ text: '純情で奥手', score: modesty });
  else if (modesty <= -16) surfaceList.push({ text: '羞恥知らずの大胆', score: -modesty });

  if (conf >= 18) surfaceList.push({ text: '気位の高い高慢肌', score: conf });
  else if (conf <= -16) surfaceList.push({ text: '気弱で押しに弱い', score: -conf });

  if (intellect >= 18) surfaceList.push({ text: '澄ました知性派', score: intellect });

  surfaceList.sort((a, b) => b.score - a.score);
  const bestSurface = surfaceList[0]?.text;

  // 組み合わせ
  if (bestSurface && bestCarnal) {
    return `${bestSurface}・${bestCarnal}`;
  }
  if (bestCarnal) {
    if (carnalList.length >= 2 && carnalList[1].score >= 20) {
      return `${bestCarnal}・${carnalList[1].text}`;
    }
    return bestCarnal;
  }
  return 'おだやかで自然体';
}

function getInterests(st) {
  if (!st) return '身の回りのこと';
  const history = st.history || [];
  const recentHist = history.slice(-6).reverse();

  for (const h of recentHist) {
    const text = `${h.text || ''} ${h.choice || ''} ${h.diary || ''}`;
    if (/恋|告白|付き合|交際|彼氏|彼女|デート|キス|唇|逢瀬|身体|抱か|愛液|絶頂|エッチ|不倫|浮気/.test(text) && st.age >= 11) {
      if (st.age >= 15) return '濃密な情交・肉体の交わり・快楽の享受';
      return '恋心・逢瀬への憧れ';
    }
    if (/自慰|オナニー|秘所|身体を慰め|疼き|秘密/.test(text) && st.age >= 6) {
      if (st.age >= 15) return '秘所の疼き・愛液まみれの自慰';
      return '身体の探求・秘密の一人遊び';
    }
    if (/勉強|学習|学校|試験|テスト|読書|本|授業|受験|大学|知識|学問/.test(text)) {
      return '学業・自己研鑽';
    }
    if (/友達|友人|クラス|仲間|放課後|おしゃべり|遊ん|幼馴染/.test(text)) {
      return '友人との交流';
    }
    if (/服|ファッション|買い物|街|カフェ|散歩|旅行|旅|遊び|外食/.test(text)) {
      return '街歩き・買い物';
    }
    if (/運動|部活|スポーツ|走|筋トレ|汗|試合/.test(text)) {
      return '身体づくり・運動';
    }
    if (/仕事|アルバイト|バイト|就職|働く|給料|出世|キャリア/.test(text)) {
      return '仕事・自立';
    }
    if (/風俗|ソープ|デリヘル/.test(text)) {
      return '夜の街・パパ活';
    }
    if (/家族|母|父|親|兄弟|姉|妹|弟|実家|団らん/.test(text)) {
      return '家族との時間';
    }
  }

  if (st.age < 6) return '周囲の探索・遊び';
  if (st.age < 12) return '学校生活・友達';
  if (st.age < 18) return '友達・日々の関心事';
  return 'これからの人生設計';
}

function getPersonalityAndInterestsHtml(st) {
  const personality = getPersonality(st);
  const interest = getInterests(st);
  return `<div class="personality-box"><div class="personality-header"><span>🌱</span><span>性格と興味</span></div><div class="personality-val" title="性格：${personality}">${personality}</div><div class="interest-val" title="興味：${interest}">興味：${interest}</div></div>`;
}

function getPartnerSummary(st) {
  if (!st.bonds) return '';
  const spouse = st.bonds.find(b => b.status === 'spouse');
  const partners = st.bonds.filter(b => b.status === 'partner');
  const secretPartners = st.bonds.filter(b => b.private && (b.status === 'partner' || b.status === 'close'));
  const widowed = st.bonds.find(b => b.status === 'widowed');
  const formers = st.bonds.filter(b => b.status === 'former');
  let statusType = 'none';
  let statusLabel = 'なし';
  let itemsHtml = '';
  if (spouse) {
    if (partners.length > 0 || secretPartners.length > 0) {
      statusType = 'infidelity'; statusLabel = '不倫中';
      const affair = partners[0] || secretPartners[0];
      itemsHtml = `<div class="partner-item"><strong>配偶者</strong>：${escapeBond(spouse.name)}</div><div class="partner-item" style="color:#6d28d9;"><strong>不倫相手</strong>：${escapeBond(affair.name)} <span class="partner-subtext">（秘密）</span></div>`;
    } else {
      statusType = 'married'; statusLabel = '結婚中';
      itemsHtml = `<div class="partner-item"><strong>配偶者</strong>：${escapeBond(spouse.name)}</div>`;
    }
  } else if (partners.length > 0) {
    if (partners.length > 1 || secretPartners.length > 0) {
      statusType = 'cheating'; statusLabel = '浮気中';
      itemsHtml = partners.map((p, idx) => `<div class="partner-item">${idx === 0 ? '<strong>本命</strong>' : '<strong>交際相手</strong>'}：${escapeBond(p.name)}${p.private ? ' <span class="partner-subtext">（秘密）</span>' : ''}</div>`).join('');
    } else {
      statusType = 'dating'; statusLabel = '交際中';
      const p = partners[0];
      itemsHtml = `<div class="partner-item"><strong>交際相手</strong>：${escapeBond(p.name)}</div>`;
    }
  } else if (widowed || st.flags?.widowed) {
    statusType = 'widowed'; statusLabel = '死別';
    const name = widowed?.name || '最愛の伴侶';
    itemsHtml = `<div class="partner-item"><strong>故人</strong>：${escapeBond(name)} <span class="partner-subtext">（心に残る思い出）</span></div>`;
  } else {
    statusType = 'none'; statusLabel = 'なし';
    const past = formers.length ? `（過去の交際歴 ${formers.length}人）` : '（パートナーなし）';
    itemsHtml = `<div class="partner-subtext">${past}</div>`;
  }
  return `<div class="partner-box"><div class="partner-header"><strong>パートナー状態</strong><span class="partner-badge ${statusType}">${statusLabel}</span></div><div class="partner-info">${itemsHtml}</div></div>`;
}
function choiceTooltip(c, i, e) {
  if (!c || !c[1]) return '';
  const eff = c[1];
  const sexEff = { ...(e.sexualEffects?.[i] || {}), ...(eff.sexualEffects || {}) };
  for (const [k] of SEXUAL_KEYS) {
    if (typeof eff[k] === 'number') sexEff[k] = eff[k];
  }
  const parts = [];
  const labels = {
    health: '健康要因', happiness: '幸福要因', knowledge: '知識・教養', social: '社交性', stress: 'ストレス',
    money: '金銭', independence: '自己効力感', selfUnderstanding: '自己理解', trust: '関係満足', secrecy: '不安',
    aesthetics: '身だしなみ・魅力', morality: '慎重さ', cash: '現金(円)', monthly_income: '月収(円)'
  };
  for (const [k, v] of Object.entries(eff)) {
    if (labels[k] && typeof v === 'number' && v !== 0) {
      const formatted = k === 'cash' || k === 'monthly_income' ? `${v > 0 ? '+' : ''}${v.toLocaleString()}円` : `${v > 0 ? '+' : ''}${v}`;
      parts.push(`${labels[k]}${formatted}`);
    }
  }
  const sexLabels = { desire: '性的欲求', initiative: '積極性', shyness: '羞恥', curiosity: '性への関心', selfKnowledge: '性的自己理解', selfAcceptance: '自己肯定感', boundaryVoice: '意思表明力', intimacyNeed: '親密さ欲求' };
  for (const [k, v] of Object.entries(sexEff)) {
    if (sexLabels[k] && typeof v === 'number' && v !== 0) parts.push(`${sexLabels[k]}${v > 0 ? '+' : ''}${v}`);
  }
  return parts.join(' / ');
}

function getInternalParamsHtml(st) {
  const t = st.traits || {};
  const a = st.abilities || {};
  const s = st.states || {};
  const eco = st.economy || {};

  const traitLabels = {
    constitution: '基礎体力', cognitive_potential: '認知能力', learning_drive: '学習意欲', extraversion: '外向性',
    social_initiative: '対人積極性', appearance_potential: '容姿素質', self_worth_disposition: '自己肯定素質',
    baseline_libido: '基礎性欲', sexual_interest: '性への関心', masochistic_preference: '被虐志向',
    sadistic_preference: '嗜虐志向', baseline_modesty: '基礎羞恥心', risk_tolerance: 'リスク許容'
  };

  const abilityLabels = {
    healthy_habits: '生活習慣', knowledge: '知識・教養', problem_solving: '問題解決経験',
    communication_skill: '会話能力', grooming: '身だしなみ', interpersonal_charm: '対人魅力',
    morality: 'モラル'
  };

  const stateLabels = {
    illness_burden: '疾病負荷', fatigue: '疲労', social_anxiety: '対人不安', stress: 'ストレス', current_embarrassment: '羞恥度',
    self_efficacy: '自己効力感', social_confidence: '対人自信', success_memory: '成功体験蓄積',
    life_satisfaction: '生活満足度', relationship_satisfaction: '人間関係満足', achievement: '達成感',
    current_libido: '現在の性的欲求', mood: '気分'
  };

  const currentTier = getLibidoTier(st);
  const traitsHtml = Object.entries(traitLabels).map(([k, label]) => {
    const tr = t[k] || { min: -50, max: 50, current: 0 };
    const tierBadge = k === 'baseline_libido' ? ` <span class="badge" style="background:#fce7f3;color:#9d174d;padding:0 5px;border-radius:6px;font-size:0.8em;font-weight:600;">${currentTier}</span>` : '';
    return `<div style="display:flex;justify-content:space-between;padding:2px 0;"><span>${label}${tierBadge}</span><span style="font-family:monospace;font-weight:600;">${tr.current} <small style="color:#64748b;font-weight:normal;">[${tr.min}〜${tr.max}]</small></span></div>`;
  }).join('');

  const abilitiesHtml = Object.entries(abilityLabels).map(([k, label]) => {
    return `<div style="display:flex;justify-content:space-between;padding:2px 0;"><span>${label}</span><span style="font-family:monospace;font-weight:600;">${a[k] ?? 0}</span></div>`;
  }).join('');

  const statesHtml = Object.entries(stateLabels).map(([k, label]) => {
    return `<div style="display:flex;justify-content:space-between;padding:2px 0;"><span>${label}</span><span style="font-family:monospace;font-weight:600;">${s[k] ?? 0}</span></div>`;
  }).join('');

  const ecoHtml = `
        <div style="display:flex;justify-content:space-between;padding:2px 0;"><span>所持現金</span><span style="font-family:monospace;font-weight:600;">${(eco.cash || 0).toLocaleString()} 円</span></div>
        <div style="display:flex;justify-content:space-between;padding:2px 0;"><span>負債残高</span><span style="font-family:monospace;color:#b91c1c;font-weight:600;">${(eco.debt || 0).toLocaleString()} 円</span></div>
        <div style="display:flex;justify-content:space-between;padding:2px 0;"><span>月収</span><span style="font-family:monospace;font-weight:600;">${(eco.monthly_income || 0).toLocaleString()} 円/月</span></div>
        <div style="display:flex;justify-content:space-between;padding:2px 0;"><span>生活費</span><span style="font-family:monospace;font-weight:600;">${(eco.monthly_expenses || 0).toLocaleString()} 円/月</span></div>
      `;

  const debugControlsHtml = `
        <div style="background:#f8fafc;padding:8px;border-radius:6px;border:1px solid #e2e8f0;grid-column:1/-1;">
          <h4 style="margin:0 0 6px;color:#1e293b;border-bottom:1px solid #cbd5e1;padding-bottom:3px;font-size:0.95em;">🛠️ デバッグ操作（居住地・職業の変更）</h4>
          <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:flex-start;">
            <details id="locDetails" style="flex:1;min-width:200px;"><summary style="cursor:pointer;font-weight:600;font-size:11px;color:#355d68;">居住地を変更</summary>
              <div class="location-edit" id="locEdit" style="margin-top:6px;display:flex;flex-direction:column;gap:4px;">
                <label style="font-size:11px;">地域<select id="locTerrain" style="padding:2px;font-size:11px;">${options(TERRAINS, st.location?.terrain)}</select></label>
                <label style="font-size:11px;">種別<select id="locDistrict" style="padding:2px;font-size:11px;">${options(DISTRICTS, st.location?.district)}</select></label>
                <button id="locApply" style="margin-top:4px;padding:3px 8px;font-size:11px;">転居を確定</button>
              </div>
            </details>
            <details id="jobDetails" style="flex:1;min-width:200px;"><summary style="cursor:pointer;font-weight:600;font-size:11px;color:#355d68;">職業を変更・確認</summary>
              <div class="location-edit" id="jobEdit" style="margin-top:6px;display:flex;flex-direction:column;gap:4px;">
                <label style="font-size:11px;">職業<select id="jobSelect" style="padding:2px;font-size:11px;">${options(OCCUPATIONS, st.occupation || '学生')}</select></label>
                <button id="jobApply" style="margin-top:4px;padding:3px 8px;font-size:11px;">職業を確定</button>
              </div>
            </details>
            <details id="libidoTierDetails" style="flex:1;min-width:200px;"><summary style="cursor:pointer;font-weight:600;font-size:11px;color:#355d68;">性欲の基本資質を変更</summary>
              <div class="location-edit" id="libidoEdit" style="margin-top:6px;display:flex;flex-direction:column;gap:4px;">
                <label style="font-size:11px;">資質<select id="libidoTierSelect" style="padding:2px;font-size:11px;">
                  <option value="弱" ${getLibidoTier(st) === '弱' ? 'selected' : ''}>弱（低活動・平穏型）</option>
                  <option value="中" ${getLibidoTier(st) === '中' ? 'selected' : ''}>中（自然・標準型）</option>
                  <option value="強" ${getLibidoTier(st) === '強' ? 'selected' : ''}>強（高反応・情熱型）</option>
                </select></label>
                <button id="libidoTierApply" style="margin-top:4px;padding:3px 8px;font-size:11px;">資質を変更</button>
              </div>
            </details>
            <details id="moralityDetails" style="flex:1;min-width:200px;"><summary style="cursor:pointer;font-weight:600;font-size:11px;color:#355d68;">モラル値を変更</summary>
              <div class="location-edit" id="moralityEdit" style="margin-top:6px;display:flex;flex-direction:column;gap:4px;">
                <label style="font-size:11px;">モラル<select id="moralitySelect" style="padding:2px;font-size:11px;">
                  <option value="30" ${(st.abilities?.morality ?? 0) >= 25 ? 'selected' : ''}>高潔 (+30)</option>
                  <option value="10" ${(st.abilities?.morality ?? 0) > 0 && (st.abilities?.morality ?? 0) < 25 ? 'selected' : ''}>標準 (+10)</option>
                  <option value="0" ${(st.abilities?.morality ?? 0) === 0 ? 'selected' : ''}>境界 (0: 公衆性行為解禁)</option>
                  <option value="-20" ${(st.abilities?.morality ?? 0) < 0 && (st.abilities?.morality ?? 0) >= -35 ? 'selected' : ''}>低モラル・背徳 (-20)</option>
                  <option value="-50" ${(st.abilities?.morality ?? 0) < -35 ? 'selected' : ''}>快楽優先・背徳 (-50)</option>
                </select></label>
                <button id="moralityApply" style="margin-top:4px;padding:3px 8px;font-size:11px;">モラルを変更</button>
              </div>
            </details>
            <details id="historyDebugDetails" style="flex:1;min-width:200px;"><summary style="cursor:pointer;font-weight:600;font-size:11px;color:#355d68;">履歴の表示設定</summary>
              <div style="margin-top:6px;display:flex;flex-direction:column;gap:4px;">
                <label style="font-size:11px;display:flex;align-items:center;gap:6px;cursor:pointer;">
                  <input type="checkbox" id="showImpactToggle" ${st.showImpactInHistory ? 'checked' : ''}>
                  パラメータ変化を履歴に表示
                </label>
              </div>
            </details>
          </div>
        </div>
      `;

  return `
        <details class="internal-params-box" id="internalParamsDetails">
          <summary>内部パラメータ詳細（仕様書 32項目・可動域・経済データ） ▾</summary>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(210px, 1fr));gap:10px;margin-top:8px;font-size:0.85em;">
            <div style="background:#f8fafc;padding:8px;border-radius:6px;border:1px solid #e2e8f0;">
              <h4 style="margin:0 0 6px;color:#1e293b;border-bottom:1px solid #cbd5e1;padding-bottom:3px;font-size:0.95em;">先天特性（幅100不変）</h4>
              ${traitsHtml}
            </div>
            <div style="background:#f8fafc;padding:8px;border-radius:6px;border:1px solid #e2e8f0;">
              <h4 style="margin:0 0 6px;color:#1e293b;border-bottom:1px solid #cbd5e1;padding-bottom:3px;font-size:0.95em;">後天的能力・習慣</h4>
              ${abilitiesHtml}
              <h4 style="margin:10px 0 6px;color:#1e293b;border-bottom:1px solid #cbd5e1;padding-bottom:3px;font-size:0.95em;">家計・経済状況</h4>
              ${ecoHtml}
            </div>
            <div style="background:#f8fafc;padding:8px;border-radius:6px;border:1px solid #e2e8f0;">
              <h4 style="margin:0 0 6px;color:#1e293b;border-bottom:1px solid #cbd5e1;padding-bottom:3px;font-size:0.95em;">心理状態・欲求・負荷</h4>
              ${statesHtml}
            </div>
            ${debugControlsHtml}
          </div>
        </details>
      `;
}
