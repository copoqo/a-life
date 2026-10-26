'use strict';
// 人生の記録（ログ・日記・変化サマリ）

function log(message, diary = null, impact = null, meta = null) {
  const m = s.current_month || (s.age === 0 ? 1 : 4);
  const dateText = `${s.age}歳`;
  const entry = { age: s.age, month: m, dateText, text: message, diary, impact };
  if (meta) {
    if (meta.choice) entry.choice = meta.choice;
    if (meta.result) entry.result = meta.result;
  }
  s.history.push(entry);
  if (s.history.length > 400) s.history.shift();
}
function ageDiary(text, age = s.age) {
  if (!text) return null;
  const prefix = age < 12 ? 'きょうは、' : age < 18 ? '今日は、' : age < 30 ? '今日は、' : age < 50 ? '今日、改めて思った。' : age < 70 ? 'この歳になって思う。' : '長く生きてきて思う。';
  const ending = age < 12 ? ' まだよくわからないけど、覚えておきたい。' : age < 18 ? ' これからの私にとって、大事な一日かもしれない。' : age < 30 ? ' 少しずつ、自分の答えを探していきたい。' : age < 50 ? ' 自分で選んだことの意味を、これから確かめたい。' : age < 70 ? ' これまでの経験も踏まえて、今の気持ちを大切にしたい。' : ' 振り返れば、こうした一日一日が私の人生だった。';
  return prefix + text + ending;
}
function changeSummary(before, after) {
  const keys = DISPLAY_KEYS;
  const changes = keys.map(([k, label]) => [label, (after.display?.[k] ?? 0) - (before.display?.[k] ?? 0)]).filter(x => x[1] !== 0).map(([label, v]) => `${label}${v > 0 ? '+' : ''}${v}`);
  if (before.economy && after.economy) {
    const dCash = (after.economy.cash || 0) - (before.economy.cash || 0);
    if (Math.abs(dCash) >= 10000) changes.push(`所持金${dCash > 0 ? '+' : ''}${Math.round(dCash / 10000)}万円`);
  }
  if (before.occupation && after.occupation && before.occupation !== after.occupation) changes.push(`${after.occupation}`);
  const newBonds = (after.bonds || []).filter(b => !(before.bonds || []).some(a => a.id === b.id));
  if (newBonds.length > 0) {
    newBonds.forEach(b => {
      const rLabel = BOND_ROLE_LABELS[b.role] || '知人';
      const sLabel = BOND_STATUS_LABELS[b.status] || b.status;
      changes.push(`人間関係＋${b.name}（${rLabel}・${sLabel}）`);
    });
  }
  const statusChanges = (after.bonds || []).filter(b => (before.bonds || []).some(a => a.id === b.id && a.status !== b.status)).map(b => `${b.name}：${({ spouse: '結婚（配偶者）', partner: '交際開始', former: '関係解消', widowed: '死別', close: '親しい友人になった', acquaintance: '知人になった' })[b.status] || '関係が変化'}`);
  const bondDeepened = (after.bonds || []).filter(b => {
    const prev = (before.bonds || []).find(a => a.id === b.id);
    if (!prev || prev.status !== b.status) return false;
    return ((b.affection || 0) - (prev.affection || 0) >= 4) || ((b.trust || 0) - (prev.trust || 0) >= 4) || (!prev.kissed && b.kissed) || (!prev.intimate && b.intimate);
  }).map(b => `${b.name}との絆が深まった`);
  const bondDistanced = (after.bonds || []).filter(b => {
    const prev = (before.bonds || []).find(a => a.id === b.id);
    if (!prev || prev.status !== b.status) return false;
    return ((b.affection || 0) - (prev.affection || 0) <= -5) || ((b.trust || 0) - (prev.trust || 0) <= -5);
  }).map(b => `${b.name}と距離が生まれた`);
  return [...changes, ...statusChanges, ...bondDeepened, ...bondDistanced].join(' / ') || '目立った数値の変化はなかった';
}
function snapshot() {
  return {
    occupation: s.occupation,
    display: { ...(s.display || {}) },
    economy: { ...(s.economy || {}) },
    health: s.health, happiness: s.happiness, knowledge: s.knowledge, social: s.social, stress: s.stress, money: s.money,
    bonds: s.bonds.map(b => ({ id: b.id, name: b.name, role: b.role, status: b.status, affection: b.affection, trust: b.trust, kissed: b.kissed, intimate: b.intimate }))
  };
}
