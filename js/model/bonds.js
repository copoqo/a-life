'use strict';
// 人間関係（出会い・交際・関係の進展）

const PARTNER_NAMES = { female: FEMALE_NAMES, male: ['直樹', '陽介', '大輔', '健太', '翔太', '拓海', '悠斗', '蓮', '航平', '颯太', '雄大', '和也', '誠', '亮介', '智也', '陸', '駿', '圭介', '修平', '祐樹'] };
const BOND_ROLES = ['friend', 'colleague', 'teacher', 'neighbor', 'stranger', 'friends_sibling', 'partner_sibling', 'parent_friend', 'childs_teacher', 'bar_encounter'];
const BOND_ROLE_LABELS = { friend: '友人', classmate: '同級生・クラスメイト', childhood_friend: '幼馴染', club_mate: '部活・趣味の仲間', cram_school_friend: '塾の勉強仲間', senior: '先輩', junior: '後輩', mentor: '恩師・講師', colleague: '同僚', teacher: '学校の先生', neighbor: '隣人', stranger: '街で出会った人', friends_sibling: '友達のきょうだい', partner_sibling: 'パートナーのきょうだい', parent_friend: '子供の友達の親', childs_teacher: '子供の担任の先生', bar_encounter: 'お店で居合わせた人' };
function hasFemalePartner(st = s) { const p = getPrimaryPartner(st); return !!(p && p.gender === 'female'); }
function hasMalePartner(st = s) { const p = getPrimaryPartner(st); return !!(p && p.gender === 'male'); }
function prefersWomen(st = s) { const w = st?.orientation?.women ?? 0; const m = st?.orientation?.men ?? 0; return w >= 0.45 || w >= m; }
function isRomanticallyCompatible(b, st = s) {
  if (!b) return false;
  if (b.gender === 'female') return prefersWomen(st) || !!st?.flags?.same_sex_awakened;
  if (b.gender === 'male') return (st?.orientation?.men ?? 0.5) >= 0.25;
  return true;
}
function getRomanticTargetGender(st = s) {
  const m = st?.orientation?.men ?? 0.8;
  const w = (st?.orientation?.women ?? 0.2) + (st?.flags?.same_sex_awakened ? 0.35 : 0);
  if (m >= 0.7 && w < 0.35) return 'male';
  if (w >= 0.7 && m < 0.35) return 'female';
  return rng.next() < (w / (m + w)) ? 'female' : 'male';
}
function assignBondName(b, st) { const candidates = PARTNER_NAMES[b.gender] || PARTNER_NAMES.female; const used = new Set(st.bonds.filter(x => x.id !== b.id).map(x => x.name)); const start = Math.floor(rng.next() * candidates.length); for (let i = 0; i < candidates.length; i++) { const candidate = candidates[(start + i) % candidates.length]; if (!used.has(candidate)) { b.name = candidate; return } } b.name = candidates[start] + '（' + b.id + '）' }
function normalizeBond(b, seed) { const h = [...String(b.id)].reduce((n, c) => (Math.imul(n, 31) + c.charCodeAt(0)) >>> 0, seed >>> 0); const r = random(h || 1); b.gender ??= (r.next() < .52 ? 'female' : 'male'); b.role ??= 'friend'; const list = PARTNER_NAMES[b.gender] || PARTNER_NAMES.female; b.name ??= list[Math.floor(r.next() * list.length)]; b.ageGap ??= Math.floor(r.next() * 13) - 6; b.romanticInterest ??= clamp(20 + r.next() * 75); b.desire ??= clamp(15 + r.next() * 80); b.initiative ??= clamp(10 + r.next() * 85); b.shyness ??= clamp(10 + r.next() * 85); b.intimacyNeed ??= clamp(15 + r.next() * 80); b.boundaryVoice ??= clamp(20 + r.next() * 70); b.affection ??= 30; b.trust ??= 35; b.openness ??= 50; b.lastProgressAge ??= -1; b.private ??= false; return b }
function createBond(role = null, gender = null, customProps = {}) {
  const id = 'bond_' + s.nextBondId++;
  let g = gender || customProps.gender;
  if (!g) {
    if (s.orientation && (s.orientation.women || s.orientation.men)) {
      const wProb = (s.orientation.women || 0.5) / ((s.orientation.women || 0.5) + (s.orientation.men || 0.5));
      g = rng.next() < wProb ? 'female' : 'male';
    } else {
      g = rng.next() < .52 ? 'female' : 'male';
    }
  }
  let r = role || customProps.role;
  if (!r) {
    if (s.age < 12) {
      r = ['friend', 'classmate', 'childhood_friend', 'cram_school_friend'][Math.floor(rng.next() * 4)];
    } else if (s.age < 18 || isStudent(s)) {
      r = ['friend', 'classmate', 'club_mate', 'senior', 'junior'][Math.floor(rng.next() * 5)];
    } else {
      const pool = ['friend', 'neighbor', 'club_mate', 'stranger'];
      if (isEmployed(s)) pool.push('colleague', 'colleague');
      if (s.age >= 20) pool.push('bar_encounter');
      if (s.flags?.hasChildren) pool.push('parent_friend', 'childs_teacher');
      r = pool[Math.floor(rng.next() * pool.length)];
    }
  }
  const status = customProps.status || 'acquaintance';
  const b = {
    id,
    status,
    initialStatus: customProps.initialStatus || status,
    gender: g,
    role: r,
    affection: 25 + Math.floor(rng.next() * 30),
    trust: 35,
    openness: 30 + Math.floor(rng.next() * 60),
    consent: false,
    metAge: s.age,
    partnerYears: 0,
    kissed: false,
    intimate: false,
    cohabiting: false,
    ...customProps
  };
  if (!b.initialStatus) b.initialStatus = b.status;
  if (!b.name) assignBondName(b, s);
  normalizeBond(b, s.seed);
  return b;
}
function startRelationship(b) {
  b.status = 'partner';
  b.consent = true;
  b.partnerSinceAge = s.age;
  b.partnerYears = 0;
  b.kissed ??= false;
  b.intimate ??= false;
  b.cohabiting ??= false;
  if (!b.relationContext || b.relationContext === b.metContext) {
    b.relationContext = b.private ? '秘密の交際相手' : '交際中';
  }
  // 新しいパートナーとの交際開始時は「現在の相手との段階フラグ」をリセットし、Stage 1（交際初期）から始める
  s.flags.had_first_kiss_with_partner = !!b.kissed;
  s.flags.had_first_intimacy_with_partner = !!b.intimate;
  s.flags.had_first_date_with_partner = false;
  s.flags.cohabiting = !!b.cohabiting;
  s.flags.partner_intimacy_streak = 0;
  s.flags.partner_frustrated = 0;
  s.flags.partner_distance = 0;
  recordExperience('relationship', b.name + 'と互いの意思を確認し交際を始めた', b.id);
  startScenario('romance', 'dating', { partnerId: b.id, partnerName: b.name });
  log(b.name + 'との交際が始まった。', 'この人と一緒に過ごすことを選んだ。これからどんな関係になるのだろう。');
}
function proposeRelationship(b) { if (b.status === 'partner' || b.status === 'spouse') return; const partners = s.bonds.filter(x => x.status === 'partner' || x.status === 'spouse'); if (!partners.length) { startRelationship(b); return } if (s.pending) return; s.pendingBondId = b.id; s.pending = 'multiple_relationship'; log(b.name + 'との新しい交際の可能性が生まれた。現在の関係について考える必要がある。', '気になる人がいる。でも、今の相手との関係をなかったことにはできない。どう向き合うべきだろう。') }
function settleMultiple(index, continueYear = true) {
  const b = s.bonds.find(x => x.id === s.pendingBondId);
  const partners = s.bonds.filter(x => x.status === 'partner' || x.status === 'spouse');
  if (!b) { s.pending = null; s.pendingBondId = null; render(); return; }
  if (index === 0) {
    b.status = 'close';
    log('重要な選択：複数交際の可能性', '気持ちが動いたことは本当。でも、今の関係を大切にしたい。', null, {
      choice: '現在の関係を優先する',
      result: '現在の関係を優先し、新しい交際は始めなかった。'
    });
  } else if (index === 1) {
    for (const old of partners) {
      const wasSpouse = old.status === 'spouse';
      old.status = 'former'; old.consent = false;
      if (wasSpouse) s.flags.married = false;
      recordExperience('breakup', old.name + 'との関係が終わった', old.id);
    }
    startRelationship(b);
    log('重要な選択：複数交際の可能性', '誰も傷つかない選択ではなかった。自分の決断に向き合っていきたい。', null, {
      choice: '新しい交際を始める',
      result: 'これまでの関係に区切りをつけ、新しい関係を選んだ。'
    });
  } else if (index === 2) {
    const agreement = partners.every(old => chance(Math.max(.03, Math.min(.65, old.openness / 180 + old.trust / 400 - .25)))) && chance(Math.max(.08, Math.min(.75, b.openness / 140)));
    if (agreement) {
      startRelationship(b);
      recordExperience('multiple_relationship', '全員で話し合い、合意のうえで複数交際を始めた', b.id, { mutual: true, private: false });
      log('重要な選択：複数交際の可能性', 'それぞれの気持ちを聞いた。これからも対話が必要だと思う。', null, {
        choice: '全員で相談し合意を求める',
        result: '関係者全員の合意を得て、合意のもとで複数交際を始めた。'
      });
    } else {
      b.status = 'close';
      log('重要な選択：複数交際の可能性', '私の希望だけで決められることではない。相手の気持ちも大切にしたい。', null, {
        choice: '全員で相談し合意を求める',
        result: '複数交際について話し合ったが、全員の合意は得られなかった。'
      });
    }
  } else {
    startRelationship(b);
    b.private = true;
    recordExperience('secret_relationship', b.name + 'との交際を既存の相手に伏せて始めた', b.id, { private: true });
    s.secrecy = clamp(s.secrecy + 12);
    s.stress = bounded('stress', s.stress + 8);
    log('重要な選択：複数交際の可能性', '秘密を抱えたまま関係を続けている。いつか向き合う必要がある。', null, {
      choice: '秘密にして交際を始める',
      result: '現在の相手に知らせず、新たな相手との交際を秘密裏に始めた。'
    });
  }
  s.pending = null;
  s.pendingBondId = null;
  if (continueYear) processYearEvents();
  s.rngState = rng.state();
  render();
}
function approachProbability(b) { const x = s.sexuality; return Math.max(.03, Math.min(.88, .10 + x.initiative / 500 + b.affection / 450 + b.romanticInterest / 500 - x.shyness / 900 - b.shyness / 1200)) }
function advanceBonds() {
  if (s.age < 14) return;
  normalizeSexuality(s);
  const x = s.sexuality;
  const active = s.bonds.filter(b => b.status !== 'former' && b.status !== 'widowed');
  // 月次出会い判定（年率 .12 + s.social/900 を12ヶ月に分散）
  if (active.length < 7 && chance((.12 + (s.social / 900)) / 12)) {
    const b = createBond();
    s.bonds.push(b);
    recordExperience('meeting', b.name + 'と知り合った', b.id);
    log('新たな出会いがあった。');
  }
  const curAgeMonths = s.age_months || (s.age * 12 + (s.current_month || 1));
  for (const b of active) {
    if (s.pending) break;
    if (b.lastProgressAgeMonths === curAgeMonths) continue;
    b.lastProgressAgeMonths = curAgeMonths;
    if (b.status === 'acquaintance' && chance(.36 / 12)) {
      b.affection = clamp(b.affection + 4 + rng.next() * 11);
      b.trust = clamp(b.trust + 3);
      if (b.affection >= 44) {
        b.status = 'close';
        recordExperience('friendship', b.name + 'と親しくなった', b.id);
        log(b.name + 'との交流が深まった。');
      }
    } else if (b.status === 'close' && chance((.20 + x.initiative / 500) / 12)) {
      if (isRomanticallyCompatible(b, s)) {
        if (chance(approachProbability(b))) {
          b.affection = clamp(b.affection + 12);
          if (b.affection >= 56 && chance(b.romanticInterest / 115)) {
            proposeRelationship(b);
          }
        } else {
          b.trust = clamp(b.trust - 2);
        }
      } else {
        // 恋愛対象外の親しい友人とは友情・信頼を深める
        b.affection = clamp(b.affection + 4);
        b.trust = clamp(b.trust + 4);
      }
    } else if (b.status === 'partner') {
      b.partnerMonths = (b.partnerMonths || 0) + 1;
      if (b.partnerMonths % 12 === 0) b.partnerYears = (b.partnerYears || 0) + 1;
      if (chance(1 / 12)) {
        b.trust = clamp(b.trust + (chance(.65) ? 2 : -3));
        b.affection = clamp(b.affection + (chance(.58) ? 2 : -3));
      }
      // 2人目以降のパートナー（既に初キスイベント消化済み）または交際2年経過時はキス段階へ自然進行
      if (!b.kissed && (b.partnerYears >= 1 || (b.partnerMonths || 0) >= 12) && (s.seen?.first_kiss_milestone || s.flags?.firstKiss || (b.partnerYears || 0) >= 2)) {
        b.kissed = true;
        s.flags.had_first_kiss_with_partner = true;
      }
      // 2人目以降のパートナーで成人後・既に性経験あり・キス済み・交際2年以上の場合は初体験段階へ自然進行可能
      if (s.age >= 18 && b.kissed && !b.intimate && (b.partnerYears || 0) >= 2 && hasHadSex(s)) {
        b.intimate = true;
        b.intimateSinceAge ??= s.age;
        s.flags.had_first_intimacy_with_partner = true;
      }
      if (chance(.16 / 12)) {
        recordExperience('communication', b.name + 'と関係への希望を話し合った', b.id, { mutual: true });
      }
      // 初体験イベントを飛び越さないよう、そのパートナーと既に肉体関係がある（b.intimate）場合のみ日常の営みを発生させる
      if (s.age >= 18 && b.intimate && chance((.11 + x.intimacyNeed / 1200) / 12)) {
        resolveSharedIntimacy(b);
      }
      if ((b.trust < 18 || b.affection < 18) ? chance(1 / 6) : chance(.018 / 12)) {
        b.status = 'former';
        b.consent = false;
        s.flags.cohabiting = false;
        recordExperience('breakup', b.name + 'との交際が終わった', b.id);
        log(b.name + 'との関係に区切りをつけた。');
      }
    } else if (b.status === 'spouse') {
      b.partnerMonths = (b.partnerMonths || 0) + 1;
      if (b.partnerMonths % 12 === 0) b.partnerYears = (b.partnerYears || 0) + 1;
      b.kissed = true;
      b.intimate = true;
      b.cohabiting = true;
      if (chance(1 / 12)) {
        b.trust = clamp(b.trust + (chance(.62) ? 2 : -2));
        b.affection = clamp(b.affection + (chance(.58) ? 2 : -2));
      }
      if (chance(.15 / 12)) {
        recordExperience('communication', b.name + 'と夫婦のこれからの生活を話し合った', b.id, { mutual: true });
      }
      if (s.age >= 18 && !isVirgin(s) && chance((.10 + x.intimacyNeed / 1300) / 12)) {
        resolveSharedIntimacy(b);
      }
      if (b.trust < 15 && b.affection < 15 && chance(.04 / 12)) {
        b.status = 'former';
        b.consent = false;
        s.flags.married = false;
        s.flags.divorced = true;
        s.flags.cohabiting = false;
        recordExperience('breakup', b.name + 'との婚姻関係が破綻し、離婚した', b.id);
        log(b.name + 'との夫婦関係に終止符を打ち、離婚届を提出した。');
      }
    }
  }
}
