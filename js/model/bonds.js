'use strict';
// 人間関係（出会い・交際・親密さ）

function getPrimaryPartner(st = s) { return st?.bonds?.find(b => b.status === 'spouse') || st?.bonds?.find(b => b.status === 'partner') || null; }
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
  // 新しいパートナーとの交際開始時は「現在の相手との段階フラグ」をリセットし、Stage 1（交際初期）から始める
  s.flags.had_first_kiss_with_partner = !!b.kissed;
  s.flags.had_first_intimacy_with_partner = !!b.intimate;
  s.flags.had_first_date_with_partner = false;
  s.flags.cohabiting = !!b.cohabiting;
  s.flags.partner_intimacy_streak = 0;
  s.flags.partner_frustrated = 0;
  s.flags.partner_distance = 0;
  recordExperience('relationship', b.name + 'と互いの意思を確認し交際を始めた', b.id);
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
function getIntimacyNarrative(bond, satisfaction, isFirst) {
  const isFemale = bond.gender === 'female';
  if (isFirst) {
    if (isFemale) {
      return {
        desc: bond.name + 'と互いに衣服を解き、女性同士の滑らかな柔肌と濡れた秘所を重ね合う初めての性体験をした',
        log: bond.name + 'と震える吐息を交わし、女同士の柔らかく熱い身体を重ね合って初めての快楽を知った。',
        diary: '衣服を脱ぎ捨てて晒した白く艶めく肌に、彼女の細い指先と柔らかい唇が這う。同じ女の身体なのに、触れられるたびに背筋が弓なりになって、秘唇の間から甘い愛液がとめどなく溢れ出た。舌先で尖った突起を吸い上げられ、指を奥深く沈められた瞬間、頭が真っ白になるほどの痺れが下腹を貫いた。'
      };
    } else {
      return {
        desc: bond.name + 'と初めて肌を重ね、濡れそぼる秘所の奥まで熱い肉塊で貫かれる生々しい交わりを経験した',
        log: bond.name + 'と息を乱して素肌を重ね合い、男性の逞しい熱情を受け止めて初めての肉体関係を結んだ。',
        diary: '衣服を脱ぎ捨てて晒した熱い肌に、相手の筋張った指と唇が這う。恥ずかしさで震える太ももを左右に開かれ、愛液で濡れた奥深くまで硬い熱塊を根元まで押し入られたとき、痛みを突き抜けるような甘い痺れに息が止まりそうになった。擦れ合う水音と汗の匂いが部屋中に満ちていた。'
      };
    }
  }
  if (satisfaction >= 75) {
    if (isFemale) {
      const pool = [
        {
          desc: bond.name + 'と互いの濡れそぼった秘唇を狂おしく擦り合わせ、溢れる愛液でシーツを濡らしながら同時に果てた',
          log: bond.name + 'と女同士の柔肌を密着させ、互いの蜜を激しく擦り合わせる濃厚な情交に溺れた。',
          diary: '重なり合うふくよかな乳房、絡み合う白い太もも。互いのびしょ濡れになった肉芽を押しつけ合い、腰を擦り合わせるたびに「ぬちぬち」と淫らな水音が部屋に響いた。彼女の熱い吐息と甘い匂いに包まれて、下腹の奥から激しい痙攣が突き上げ、何度も同時に絶頂を迎えた。'
        },
        {
          desc: bond.name + 'に敏感な突起を吸い転がされ、奥深くまで指先で執拗に掻き回されて何度も腰を跳ねさせて絶頂した',
          log: bond.name + 'の繊細で執拗な指と舌に翻弄され、愛液を吹き出しながら激しく乱れて絶頂に達した。',
          diary: '太ももを大きく広げられ、顔を埋めた彼女の熱い舌で、敏感な突起を執拗に転がされた。耐えきれずに腰を浮かせると、濡れた指が奥深くまで滑り込み、一番敏感な天井をぐちゅぐちゅと擦り上げられた。快感の波に溺れて声を嗄らし、爪をシーツに食い込ませて震え続けた。'
        }
      ];
      return pool[Math.floor(rng.next() * pool.length)];
    } else {
      const pool = [
        {
          desc: bond.name + 'と激しく求め合い、奥を突き上げられる快感に腰を跳ねさせながら愛液を散らして果てた',
          log: bond.name + 'と汗と愛液に濡れながら、身体の奥深くまで貪り合うような激しい情交を交わした。',
          diary: '奥を突かれるたびに頭が真っ白になって、みっともないほど声をあげてシーツを掴んでいた。肌と肌が激しくぶつかる湿った音、肉腔を掻き回される熱い感触……下腹から突き上げる激しい絶頂に身体が痙攣して、愛液がとめどなく溢れ出た。'
        },
        {
          desc: bond.name + 'に敏感な場所をねっとりと愛撫され、太い熱情で子宮口を激しくノックされながら何度も絶頂を迎えた',
          log: bond.name + 'の逞しいピストンと熱い吐息に翻弄され、身体中を蜜と汗で濡らしながら絶頂に達した。',
          diary: '耳元で荒い吐息を吹きかけられながら、硬く充血した肉塊を奥深くまでねじ込まれた。肉壁を押し広げて出入りする激しい水音が恥ずかしいのに、腰が勝手に相手の腹へと押しつけられてしまう。根元まで突き入れられた瞬間、熱い痺れが爪先まで駆け抜けた。'
        }
      ];
      return pool[Math.floor(rng.next() * pool.length)];
    }
  } else if (satisfaction >= 45) {
    if (isFemale) {
      return {
        desc: bond.name + 'と互いの柔らかな身体を抱き締め合い、愛撫の温もりと静かな快感を分かち合った',
        log: bond.name + 'と静かに抱き合い、女同士のしなやかな肌の温もりを確かめるように愛し合った。',
        diary: '彼女の柔らかな胸に顔を埋め、ゆっくりと指先で肌をなぞり合う。濡れた指が秘所に触れるたび、甘い疼きがじわりと広がっていく。刺激を急がず、互いの体温と肌の滑らかさに包まれる安心感が、胸をいっぱいに満たしていた。'
      };
    } else {
      return {
        desc: bond.name + 'と互いの素肌を擦り合わせ、濡れた肉腔で受け止めて温もりと快感を分かち合った',
        log: bond.name + 'と静かに抱き合い、互いの体温と濡れた肌の摩擦を確かめるように身体を重ねた。',
        diary: '相手の重みを感じながら、ゆっくりと身体の奥を満たされていく感触。滑らかな愛液が皮膚の間で擦れるぬちりとした音に耳が火照る。切ないような甘い重みが下腹に広がり、相手の背中に爪を立てながら静かに吐息を漏らした。'
      };
    }
  } else {
    return {
      desc: bond.name + 'とぎこちなく身体を重ねるも、緊張や迷いで充分に濡れきれず、もどかしい交わりとなった',
      log: bond.name + 'と身体を重ねたが、緊張や硬さから思うように快感に浸ることができなかった。',
      diary: '身体が強張ってしまって、触れられる感触に戸惑いを感じてしまった。相手も気遣ってくれたけれど、肌の擦れる生々しい感触ばかりが際立って、胸が苦しかった。濡れきらないまま終わった後の、下腹の鈍い疼きが切ない。'
    };
  }
}
function resolveSharedIntimacy(bond) { if (s.age < 18) return; const x = s.sexuality; const ownWillingness = Math.max(.05, Math.min(.95, .20 + x.desire / 320 + x.intimacyNeed / 400 + x.initiative / 650 - x.shyness / 850)); const otherWillingness = Math.max(.02, Math.min(.92, .08 + bond.desire / 360 + bond.intimacyNeed / 420 + bond.trust / 500 - bond.shyness / 550)); if (!chance(ownWillingness)) { recordExperience('boundary', '相手の熱い求めに身体を熱くさせつつも、下腹の躊躇いから今は身体を重ねないと伝えた', bond.id, { consent: false, mutual: false, emotionalImpact: 1 }); log('相手の荒い吐息と素肌の熱を感じながらも、今は身体を許さないと伝えて身を引いた。'); return } if (!chance(otherWillingness)) { recordExperience('boundary', '互いに服を乱しながらも、相手の戸惑いや躊躇いを感じ取り、素肌を離した', bond.id, { consent: false, mutual: false, emotionalImpact: 0 }); log('抱き合い火照った身体を感じつつも、相手の躊躇いを察して肌を離し、行為を見送った。'); return } const isFirst = !s.flags.firstSexualExperience; const satisfaction = clamp(35 + bond.trust / 3 + x.selfKnowledge / 5 + (rng.next() - .5) * 40); const impact = Math.round((satisfaction - 50) / 12); bond.trust = clamp(bond.trust + 3); changeSexuality({ selfKnowledge: 2, selfAcceptance: impact > 0 ? 2 : 0, desire: impact > 0 ? 2 : 0 }); apply({ happiness: impact, stress: impact < 0 ? 2 : -1 }); const narrative = getIntimacyNarrative(bond, satisfaction, isFirst); recordExperience('intimacy', narrative.desc, bond.id, { consent: true, mutual: true, satisfaction, emotionalImpact: impact, private: true, diary: narrative.diary, title: bond.name + 'との情交' }); log(narrative.log, ageDiary(narrative.diary)); }
function isIntimacyChoiceSelected(e, index, choice, outcome = null) {
  if (!choice) return false;
  if (outcome === 'boundary' || outcome === 'none' || outcome === 'distance' || outcome === 'breakup' || outcome === 'mutual_talk' || outcome === 'reflection' || outcome === 'shared_activity') return false;
  const stance = choice.stance || choice.id;
  if (stance === 'refuse' || stance === 'tease' || stance === 'choice_refuse' || stance === 'choice_tease') return false;
  const lbl = (typeof choice === 'string' ? choice : (choice.label || choice[0] || '')) + ' ' + (choice.outcomes?.[0]?.description || '');
  if (/逃げ帰る|拒絶|断る|身を引く|立ち去る|鍵を閉める|見送る|車を降りる|後にする|キャビンを降りる|発車を命じる|教室へ戻る|部屋へ戻る|離れる|押しとどめる|まだ先だ|まだ怖いと|覚悟ができない|抱きしめ合うだけ|眠りたいと伝える|静まり返る|やり過ごす|冷ます|タクシーに乗る|適切な距離/.test(lbl)) {
    return false;
  }
  return true;
}

function isHandledBySettleIntimacy(eventId) {
  if (!eventId) return false;
  return ['same_sex_tribadism', 'same_sex_toy_play', 'same_sex_mature_passion', 'partner_intimacy_female', 'partner_intimacy_male', 'partner_passion_lifestyle', 'partner_morning_passion', 'partner_bath_passion', 'rare_funeral_cousin_taboo', 'rare_travel_stranger_or_gang', 'rare_outing_secret_quickie'].includes(eventId) ||
    eventId.startsWith('student_partner_') || eventId.startsWith('underground_') || eventId.startsWith('district_') ||
    eventId.startsWith('partner_sex_') || eventId.startsWith('partner_loving_') || eventId.startsWith('partner_anniversary_') ||
    eventId.startsWith('partner_weekend_') || eventId.startsWith('partner_cohabitation_');
}

function upsertEventBond(spec = {}, event = null) {
  const role = spec.role || null;
  const gender = spec.gender || null;
  const targetStatus = spec.status || 'acquaintance';
  const metContext = spec.metContext || (event?.title ? event.title : null);
  const mode = spec.mode || 'upsert';

  // 既存の同種・同属性の知人/友人がいるか探す（createモード以外）
  if (mode !== 'create') {
    const existing = s.bonds.find(b =>
      (b.status === 'acquaintance' || b.status === 'close') &&
      (!role || b.role === role) &&
      (!gender || b.gender === gender)
    );
    if (existing) {
      const wasAcq = existing.status === 'acquaintance';
      if (targetStatus === 'close' && wasAcq) {
        existing.status = 'close';
      }
      existing.affection = clamp((existing.affection || 35) + (spec.affectionDelta ?? (targetStatus === 'close' ? 12 : 7)));
      existing.trust = clamp((existing.trust || 35) + (spec.trustDelta ?? (targetStatus === 'close' ? 8 : 5)));
      if (spec.romanticInterest != null) existing.romanticInterest = Math.max(existing.romanticInterest || 0, spec.romanticInterest);
      if (metContext) existing.metContext = metContext;
      const roleLabel = BOND_ROLE_LABELS[existing.role] || '知人';
      if (wasAcq && existing.status === 'close') {
        recordExperience('friendship', `${existing.name}（${roleLabel}）と親しくなった${metContext ? `（${metContext}）` : ''}`, existing.id);
        log(`${existing.name}（${roleLabel}）との絆が深まり、「親しい友人」になった。`);
      } else {
        recordExperience('friendship', `${existing.name}（${roleLabel}）との親交を深めた${metContext ? `（${metContext}）` : ''}`, existing.id);
      }
      s.relationships = s.bonds.length;
      return existing;
    }
  }

  if (s.bonds.length >= 30) return null;
  const custom = { ...spec, status: targetStatus };
  if (metContext) custom.metContext = metContext;
  const b = createBond(role, gender, custom);
  if (spec.affection != null) b.affection = clamp(spec.affection);
  else if (targetStatus === 'close') b.affection = Math.max(b.affection || 45, 52);
  if (spec.trust != null) b.trust = clamp(spec.trust);
  else if (targetStatus === 'close') b.trust = Math.max(b.trust || 40, 45);
  if (spec.romanticInterest != null) b.romanticInterest = clamp(spec.romanticInterest);
  s.bonds.push(b);
  s.relationships = s.bonds.length;
  const roleLabel = BOND_ROLE_LABELS[b.role] || '知人';
  if (targetStatus === 'close') {
    recordExperience('friendship', `${b.name}（${roleLabel}）と出会い、親しい友人になった${metContext ? `（${metContext}）` : ''}`, b.id);
    log(`${b.name}（${roleLabel}）と親しくなり、人間関係に「親しい友人」として記録された。`);
  } else {
    recordExperience('meeting', `${b.name}（${roleLabel}）と知り合った${metContext ? `（${metContext}）` : ''}`, b.id);
    log(`${b.name}（${roleLabel}）との新たな出会いがあり、人間関係に記録された。`);
  }
  return b;
}

function resolveRoleSpecificBond(eventId) {
  if (!eventId) return null;
  if (eventId.startsWith('encounter_teacher')) {
    let b = s.bonds.find(x => x.role === 'teacher');
    if (!b && s.bonds.length < 30) {
      b = createBond('teacher', 'male', { status: 'close', private: true, metContext: '放課後の個別指導の先生' });
      s.bonds.push(b);
      s.relationships = s.bonds.length;
    }
    return b;
  }
  if (eventId.startsWith('encounter_colleague')) {
    let b = s.bonds.find(x => x.role === 'colleague');
    if (!b && s.bonds.length < 30) {
      b = createBond('colleague', 'male', { status: 'close', private: true, metContext: '深夜残業の職場の同僚' });
      s.bonds.push(b);
      s.relationships = s.bonds.length;
    }
    return b;
  }
  if (eventId.startsWith('encounter_parent_friend')) {
    let b = s.bonds.find(x => x.role === 'parent_friend');
    if (!b && s.bonds.length < 30) {
      b = createBond('parent_friend', 'male', { status: 'close', private: true, metContext: '送迎で知り合った子供の友達の親' });
      s.bonds.push(b);
      s.relationships = s.bonds.length;
    }
    return b;
  }
  if (eventId.startsWith('encounter_partner_sibling')) {
    let b = s.bonds.find(x => x.role === 'partner_sibling');
    if (!b && s.bonds.length < 30) {
      b = createBond('partner_sibling', 'male', { status: 'close', private: true, metContext: 'パートナーのきょうだい' });
      s.bonds.push(b);
      s.relationships = s.bonds.length;
    }
    return b;
  }
  return null;
}
