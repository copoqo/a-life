'use strict';
// 人物状態の判定ヘルパー（就学・就業・交際・婚姻）

function isStudent(st = s) { return st?.occupation === '学生'; }
function isEmployed(st = s) {
  if (!st) return false;
  if (['一般職', '専門職・クリエイター', '自営業'].includes(st.occupation)) return true;
  if (['学生', '未就学', '浪人生', '専業主婦', '無職', '風俗'].includes(st.occupation)) return false;
  return !!st.flags?.employed;
}

function getPrimaryPartner(st = s) {
  return st?.bonds?.find(b => b.status === 'spouse') || st?.bonds?.find(b => b.status === 'partner') || null;
}
function getSpouse(st = s) {
  return st?.bonds?.find(b => b.status === 'spouse') || null;
}

function hasPartner(state) {
  return !!state?.bonds?.some(b => b.status === 'partner' || b.status === 'spouse');
}
function hasMultiplePartners(state) {
  const partners = state.bonds?.filter(b => b.status === 'partner' || b.status === 'spouse') || [];
  return partners.length >= 2 || !!state.flags?.multiple_relationship;
}
function hasSpouse(state) {
  return !!state.bonds?.some(b => b.status === 'spouse');
}
function needsMultiplePartners(event) {
  if (!event) return false;
  if (event.requires_multiple_partners) return true;
  const t = (event.title || '') + ' ' + (event.description || '') + ' ' + (event.id || '');
  return /複数交際|ポリアモリー|二股|三角関係|multiple_relationship|sexual_multiple/.test(t);
}
function needsSpouse(event) {
  if (!event) return false;
  const t = (event.title || '') + ' ' + (event.description || '') + ' ' + (event.id || '');
  return /夫婦|配偶者|結婚生活|離婚|marital_|marriage_ceremony/.test(t) && !/プロポーズ|婚約/.test(t);
}
function needsPartner(event) {
  if (!event) return false;
  if (event.context === 'partner' || event.context === 'multiple_partner') return true;
  const t = (event.title || '') + ' ' + (event.description || '') + ' ' + (event.id || '');
  if (/partner_|交際相手|パートナーと|恋人と|二人の記念日|初夜|長い交際|蜜月|ベッドの中で貪り合う|湯船の中の密やか/.test(t)) return true;
  return event.choices?.some(c => {
    const lbl = typeof c === 'string' ? c : (c.label || c[0] || '');
    return /パートナーと|交際相手と|恋人と|二人で|相手と相談|相手に相談|相手と話し合|パートナーに/.test(lbl);
  }) || false;
}
