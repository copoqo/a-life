'use strict';
// 居住地（地形・街区）の生成と効果

function weightedPick(values, weights, r) { let total = weights.reduce((a, b) => a + b, 0), v = r.next() * total; for (let i = 0; i < values.length; i++) { v -= weights[i]; if (v < 0) return values[i] } return values[values.length - 1] }
function newLocation(r) { const terrain = weightedPick(TERRAINS, terrainWeights, r); const district = weightedPick(DISTRICTS, terrain === '山間部' ? [8, 1, 5, 50, 4, 6, 26] : terrain === '都市部' ? [35, 17, 24, 1, 7, 8, 8] : [46, 5, 12, 17, 8, 4, 8], r); return { terrain, district, sinceAge: 0, history: [] } }
function normalizeLocation(st) { if (!st.location) st.location = newLocation(random((st.seed ^ 0x6a09e667) >>> 0)); if (st.location.region) delete st.location.region; st.location.history ??= []; st.location.sinceAge ??= 0; st.occupation ??= (st.age < 6 ? '未就学' : st.age <= 18 ? '学生' : st.flags?.employed ? '一般職' : '無職'); return st }
function locationDistrictEffect(district) {
  switch (district) {
    case '住宅街': return { stress: -2, morality: 2, happiness: 1 };
    case '繁華街': return { social: 3, stress: 2, morality: -2, money: -2, sexualEffects: { desire: 3 } };
    case '商業地域': return { money: 3, stress: 2, aesthetics: 2, knowledge: 1 };
    case '農村集落': return { health: 3, stress: -3, social: 2, secrecy: -2 };
    case '工業地域': return { money: 2, health: -2, independence: 3, stress: 1 };
    case '高所得地域': return { aesthetics: 4, happiness: 2, money: -4, stress: -1 };
    case '経済的困難が多い地域': return { money: -3, stress: 3, independence: 3, morality: -2 };
    default: return {};
  }
}
function setLocation(next, reason = '転居') {
  const prev = s.location;
  const changed = ['terrain', 'district'].some(k => prev[k] !== next[k]);
  if (!changed) return false;
  prev.history.push({ age: s.age, terrain: prev.terrain, district: prev.district });
  s.location = { ...next, sinceAge: s.age, history: prev.history };
  const eff = locationDistrictEffect(next.district);
  apply(eff);
  if (eff.sexualEffects) changeSexuality(eff.sexualEffects);
  log(`${reason}：${next.terrain}・${next.district}で暮らし始めた。`);
  return true;
}
function options(arr, current) { return arr.map(x => `<option value="${x}" ${x === current ? 'selected' : ''}>${x}</option>`).join('') }
function locationEffect(kind) {
  const l = s.location;
  switch (kind) {
    case 'community': return l.terrain === '山間部' || l.district === '農村集落' ? { social: 5, happiness: 3, trust: 3 } : l.district === '住宅街' ? { social: 3, happiness: 2 } : { social: 2, happiness: 1 };
    case 'work': return l.terrain === '都市部' || l.district === '商業地域' ? { money: 7, stress: 4, knowledge: 2 } : l.district === '工業地域' ? { money: 5, independence: 3, health: -1 } : { money: 3, stress: 2 };
    case 'study': return l.terrain === '山間部' || l.terrain === '離島' ? { knowledge: 5, stress: 2 } : l.district === '高所得地域' ? { knowledge: 7, aesthetics: 3 } : { knowledge: 6, stress: 1 };
    case 'nature': return ['山間部', '海辺', '離島'].includes(l.terrain) || l.district === '農村集落' ? { health: 6, happiness: 5, stress: -4 } : { health: 2, happiness: 2, stress: -1 };
    case 'nightlife': return l.district === '繁華街' ? { happiness: 4, social: 4, stress: -3, morality: -2, sexualEffects: { desire: 4 } } : { happiness: 2, social: 2 };
    case 'luxury': return l.district === '高所得地域' ? { aesthetics: 5, happiness: 4, money: -3 } : { aesthetics: 2, happiness: 1 };
    case 'struggle': return l.district === '経済的困難が多い地域' ? { independence: 4, stress: 3, morality: -2 } : { independence: 2, stress: 1 };
    default: return {};
  }
}
