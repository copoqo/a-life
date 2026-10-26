'use strict';
// 親密な交わりの描写と判定

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
