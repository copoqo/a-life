'use strict';
// 人物状態の判定ヘルパー（就学・就業・交際・婚姻）

function isStudent(st = s) { return st?.occupation === '学生'; }
function isEmployed(st = s) {
  if (!st) return false;
  if (['一般職', '専門職・クリエイター', '自営業'].includes(st.occupation)) return true;
  if (['学生', '未就学', '浪人生', '専業主婦', '無職', '風俗'].includes(st.occupation)) return false;
  return !!st.flags?.employed;
}

function hasPartner(state) {
  return !!state.bonds?.some(b => b.status === 'partner' || b.status === 'spouse');
}
function hasMultiplePartners(state) {
  const partners = state.bonds?.filter(b => b.status === 'partner' || b.status === 'spouse') || [];
  return partners.length >= 2 || !!state.flags?.multiple_relationship;
}
function hasSpouse(state) {
  return !!state.bonds?.some(b => b.status === 'spouse');
}
