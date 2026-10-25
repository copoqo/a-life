'use strict';
// イベント本文・選択肢効果・日記テキストの解決

function getChoiceLabel(c) {
  if (!c) return '';
  if (typeof c === 'string') return c;
  return c.label || c[0] || '';
}
function getChoiceEffect(c) {
  if (!c) return {};
  if (c[1] && typeof c[1] === 'object') return c[1];
  if (c.effects && typeof c.effects === 'object' && !Array.isArray(c.effects)) return c.effects;
  if (c.stat_effects && typeof c.stat_effects === 'object') return c.stat_effects;
  const eff = {};
  for (const o of (c.outcomes || [])) {
    if (o.effects && typeof o.effects === 'object' && !Array.isArray(o.effects)) {
      Object.assign(eff, o.effects);
    } else if (Array.isArray(o.effects)) {
      for (const e of o.effects) {
        if (e.path === 'state.stress') eff.stress = e.value;
        else if (e.path === 'skill.morality') eff.morality = e.value;
        else if (e.path === 'economy.cash') eff.money = Math.round(e.value / 10000);
        else if (e.path === 'state.mood') eff.happiness = e.value;
        else if (e.path === 'trait.constitution.current') eff.health = e.value;
        else if (e.path === 'skill.knowledge') eff.knowledge = e.value;
        else if (e.path === 'skill.communication_skill') eff.social = e.value;
        else if (e.path === 'state.self_efficacy') eff.independence = e.value;
        else if (e.path === 'skill.grooming') eff.aesthetics = e.value;
        else if (e.path === 'state.current_libido') eff.desire = Math.round(e.value / 5);
        else if (e.path === 'state.current_embarrassment') eff.shyness = e.value;
        else if (e.path === 'person.career.employment_status') eff.occupation = e.value;
        else if (e.path === 'chain') eff.chain = e.value;
        else if (e.path === 'bond') eff.bond = e.value;
        else if (e.path === 'meeting') eff.meeting = e.value;
        else if (e.path === 'relationship') eff.relationship = e.value;
        else if (e.path.startsWith('history.flags.')) eff.flag = e.path.replace('history.flags.', '');
      }
    }
  }
  return eff;
}

function getEventCurrent(rawEvent) {
  if (!rawEvent) return null;
  let e = { ...rawEvent };
  const partner = getPrimaryPartner(s);
  const isFemale = partner ? partner.gender === 'female' : prefersWomen(s);

  if (isFemale && e.femaleVariant) {
    e.title = e.femaleVariant.title || e.title;
    e.text = e.femaleVariant.text || e.text;
    e.description = e.text;
    e.choices = e.femaleVariant.choices || e.choices;
    e.diary = e.femaleVariant.diary || e.diary;
    e.variantDiary = e.femaleVariant.diary || e.variantDiary;
    if (e.femaleVariant.sexualEffects) e.sexualEffects = e.femaleVariant.sexualEffects;
  } else if (!isFemale && e.maleVariant) {
    e.title = e.maleVariant.title || e.title;
    e.text = e.maleVariant.text || e.text;
    e.description = e.text;
    e.choices = e.maleVariant.choices || e.choices;
    e.diary = e.maleVariant.diary || e.diary;
    e.variantDiary = e.maleVariant.diary || e.variantDiary;
    if (e.maleVariant.sexualEffects) e.sexualEffects = e.maleVariant.sexualEffects;
  }

  // === 新アーキテクチャ: variations (シチュエーション集約・バリエーション展開) ===
  if (rawEvent.variations && rawEvent.variations.length > 0) {
    let vList = rawEvent.variations;
    // ストーリーフラグに応じた優先シチュエーション
    if (s.flags?.partner_frustrated && s.flags.partner_frustrated > 0) {
      const thrill = vList.filter(v => v.tags?.includes('thrill') || v.tags?.includes('outdoor') || /ベランダ|車内|温泉/.test(v.title || ''));
      if (thrill.length && rng.next() < 0.6) vList = thrill;
    }

    let varObj = null;
    if (s.activeVariationSubId) {
      varObj = rawEvent.variations.find(v => v.sub_id === s.activeVariationSubId);
    }
    if (!varObj) {
      const vIdx = Math.floor(rng.next() * vList.length);
      varObj = vList[vIdx];
      s.activeVariationSubId = varObj.sub_id;
    }

    const titleText = rawEvent.title_template ? rawEvent.title_template.replace('{variation_title}', varObj.title) : varObj.title;
    e.title = titleText;
    e.text = varObj.description || varObj.text || e.text || e.description;
    e.description = e.text;
    e.currentVariation = varObj;
    e.choices = rawEvent.choices || e.choices;
  }

  if (e.variants && e.variants.length) {
    const idx = s.activeVariantIndex ?? 0;
    const v = e.variants[idx % e.variants.length];
    e = {
      ...e,
      title: v.subTitle ? `${e.title} 〜${v.subTitle}〜` : (v.title || e.title),
      text: (isFemale && v.femaleText) ? v.femaleText : (v.text || e.text),
      choices: (isFemale && v.femaleChoices) ? v.femaleChoices : (v.choices || e.choices),
      variantDiary: (isFemale && v.femaleDiary) ? v.femaleDiary : (v.diary || null),
      sexualEffects: v.sexualEffects || e.sexualEffects,
      outcomes: v.outcomes || e.outcomes,
      locationKind: v.locationKind || e.locationKind
    };
  }

  if (partner && isPartnerEvent(rawEvent)) {
    e.title = injectPartnerName(e.title, partner);
    e.text = injectPartnerName(e.text, partner);
    e.description = injectPartnerName(e.description || e.text, partner);
    if (e.choices) {
      e.choices = e.choices.map(c => Array.isArray(c) ? [injectPartnerName(c[0], partner), c[1]] : { ...c, label: injectPartnerName(c.label || '', partner) });
    }
    if (Array.isArray(e.diary)) {
      e.diary = e.diary.map(d => injectPartnerName(d, partner));
    } else if (typeof e.diary === 'string') {
      e.diary = injectPartnerName(e.diary, partner);
    }
    if (Array.isArray(e.variantDiary)) {
      e.variantDiary = e.variantDiary.map(d => injectPartnerName(d, partner));
    } else if (typeof e.variantDiary === 'string') {
      e.variantDiary = injectPartnerName(e.variantDiary, partner);
    }
  }
  return e;
}
function diaryForEvent(e, index) {
  const cur = getEventCurrent(e);
  if (cur.variantDiary && cur.variantDiary[index]) return cur.variantDiary[index];
  if (cur.diary && cur.diary[index]) return cur.diary[index];
  const chosen = e.choices[index][0]; const lines = { education: ['これからの道を自分で選ぶのは、少し怖い。でも、私の人生が始まる気がする。', '早く自分の力で暮らしたい。期待と不安が入り混じっている。', 'まだ答えは出ない。焦らずに、自分の道を探したい。'], orientation: ['自分の気持ちを決めつけなくてもいい。少しずつ知っていきたい。', '誰かに話すのは勇気がいる。でも、ひとりで抱えなくていいのかもしれない。'], romance: ['伝える前は胸がいっぱいだった。結果より、向き合えたことを覚えていたい。', '一緒に過ごす時間を、急がずに大切にしたい。', '今の私には、この距離が心地いい。'], loss: ['寂しさは簡単には消えない。誰かと分かち合えたらいい。', '言葉にできない気持ちがある。今日は静かに過ごそう。'], retirement: ['これからは、自分の好きな時間を少しずつ増やしたい。', '忙しかった日々を思い出す。これからの暮らしも楽しみたい。'] }; if (lines[e.id]) return lines[e.id][index] || null; const additional = { child_first_friend: 'この人と笑い合った時間を、ずっと覚えていたい。', child_body_image: '周りと違っても、私の身体は私のもの。焦らず向き合いたい。', child_exam: '未来のことはまだわからない。でも、今日できることをやろう。', teen_friend_fallout: '大切な友達だからこそ、すれ違いが悲しかった。', teen_first_love: 'こんな気持ちになるなんて、自分でも少し驚いている。', young_living_alone: '新しい部屋の静けさに、自由と寂しさの両方を感じた。', young_failure: '悔しかった。いつか今日のことも、自分の一部になるのだろうか。', career_recognition: '続けてきたことを見てくれた人がいた。それがうれしい。', career_unemployment: '明日が少し怖い。それでも道は一つではないはず。', life_parenthood_question: '誰かの正解が、私の正解とは限らない。', life_caregiving: '支えることと、自分の生活を守ること。その両方を考えたい。', life_grief: '当たり前だと思っていた時間が、もう戻らない。', life_menstrual_health: '無理をしない選択も、自分を大切にすることだと思う。', life_menopause_care: '身体が変わっても、私自身が消えるわけではない。', adult_first_date: '今日は少し緊張した。相手の笑顔が心に残っている。', adult_trust_test: '信じたい気持ちと、傷ついた気持ちが同時にある。', adult_future_together: '一緒にいる未来を考えると、楽しみと不安が混ざる。', adult_ex_anniversary: 'あの頃の私がいたから、今の私がいる。', adult_consent_revisit: '前に望んだことを、今も望むとは限らない。話せてよかった。', adult_social_pressure: '私の人生の形は、私自身が選んでいい。', older_life_review: '昔の私が、今の私を見たら何と言うだろう。', older_support_network: '頼ることも、誰かと生きることの一つなのだと思う。' }; if (additional[e.id]) return additional[e.id]; if (e.id === 'first_date_milestone') return ['一緒に出かけることを選んだ。少し緊張した。', '誘う勇気が必要だった。', 'まだ気持ちが追いつかない。'][index];
  if (e.id === 'first_kiss_milestone') return ['唇が触れ合った瞬間、身体中に電流が走った。熱い吐息と柔らかな湿り気……相手の匂いが胸いっぱいに広がって、頭が真っ白になった。', '触れ合いたいのに胸が苦しくて、唇を噛みしめながら気持ちを伝えた。焦らされるような時間も、肌が熱くなる。', 'まだ唇を重ねる勇気が出なかった。でも、吐息が触れ合うほどの近さに、身体の奥が小さく震えていた。'][index];
  if (e.id === 'first_intimacy_milestone') return ['服を脱がされ、素肌を晒したときの恥ずかしさと熱さ。濡れた秘所にゆっくりと入ってきたときの、裂けるような痛みと痺れるような快感……肌が擦れ合う湿った音と相手の荒い息遣いが、今も耳に残っている。', '身体が熱くなって愛液が溢れそうだったけれど、まだ怖くて踏みとどまった。抱きしめられる腕の力強さに胸が締めつけられた。', '身体を許すのはまだ先だと言えた。でも、相手の手が触れた肌の熱さは、服を着直した後もずっと消えなかった。'][index];
  if (e.id === 'first_date_memory') return 'あの出来事を経て、少し自分のことがわかった気がする。';
  if (e.id === 'first_kiss_afterthought') return 'ふとした時に唇をなぞると、あの時の舌の熱さと唾液の味が蘇る。胸がぎゅっと疼いて、息が苦しくなる。';
  if (e.id === 'intimacy_afterthought') return '奥まで貫かれた時のあの重たい痺れと、内側から溢れ出た熱い蜜の感触……自分の中にこんな淫らな感覚が眠っていたなんて、思い出すだけで下腹が熱くなる。';
  if (e.id === 'adult_shared_intimacy') {
    if (hasFemalePartner(s)) {
      return ['重なり合うふくよかな乳房、ぬちぬちと擦れ合う蜜唇の水音。彼女の熱い吐息と甘い匂いに包まれて、下腹の奥から突き上げる絶頂に二人で同時に果てた。', 'じっくりと指先や舌で肌を這われ、身体の芯まで愛液で濡らされた。奥深くまで指で掻き回される快感に、何度も背筋が弓なりになった。', '身体を重ねるだけが答えじゃない。それでも、触れ合いたいと疼く肉体の欲求を抑えるのは少し苦しかった。'][index];
    }
    return ['シーツをぐしゃぐしゃに掴んで、何度も名前を呼びながら腰を浮かせた。肌と肌が激しくぶつかる音、奥まで突き上げられるたびに零れる嬌声……すべてを晒して溺れ合えた。', 'じっくりと指先や舌で肌を這われ、身体の芯まで愛液で濡らされた。焦らされる快感に、何度も背筋が弓なりになった。', '身体を重ねるだけが答えじゃない。それでも、触れ合いたいと疼く肉体の欲求を抑えるのは少し苦しかった。'][index];
  }
  if (e.id === 'adult_intimacy_reflection') return '奥を激しく突かれた時の狂おしい絶頂や、絡み合った肌の匂いを思い出す。女として身体の奥底から快感に目覚めた感覚は、決して忘れられない。';
  if (e.id === 'intimacy_awakening') return ['歩いているだけで下腹の奥がきゅっと疼いて、あの夜の感触が蘇る。女としての身体の熱さに、自分でも胸が苦しくなる。', '不意に襲ってくる肉体の火照りに戸惑った。あの人に触れられた感覚が、まだ肌に熱く残っている。'][index];
  if (e.id === 'youth_hangover_regret') return ['流されて後悔したあの日があったからこそ、自分を守る覚悟ができた。二度と同じ過ちは犯さない。', '苦い記憶を思い出すと今も胸が痛む。慎重に、自分のペースで歩んでいきたい。'][index];
  if (e.id === 'young_campus_life') return ['知的な刺激に満ちた講義や友人たちとの議論。自分の世界が大きく広がっているのを感じる。', 'サークルで笑い合える仲間ができた。何気ない日常の時間がとても愛おしい。', '気になる人と言葉を交わすたびに胸が高鳴る。キャンパスの風がどこか甘く感じられた。'][index];
  if (e.id === 'young_drifting') return ['焦燥感に押しつぶされそうな日々の中で、やっと自分の進みたい方向の光が見えた気がする。', '立ち止まる時間は無駄じゃなかった。焦らず自分の足元を固めていこう。'][index];
  if (e.id === 'trauma_healing') return ['傷つけられた過去の痛みが、相手の温もりの中でほどけていく。もう一度人を信じてみようと思えた。', '胸の奥に閉じ込めていた痛みを、ようやく静かに許してあげられた気がする。'][index];
  if (['friends_story', 'confessed_to', 'street_approach', 'underage_drinking'].includes(e.id) || e.id.startsWith('positive_')) return ['今日の出来事で、自分の気持ちを少し知れた気がする。', '人との関わりには、嬉しさも迷いもある。', '自分で決めたことを、これからも大切にしたい。'][index % 3];
  if (e.id === 'sexual_first_intimacy') return ['相手の重みを受け止め、身体の奥深くを貫かれた。初めて知る痛みに似た激しい痺れと、肌の擦れる水音が頭から離れない。', '指先で触れられるだけで秘所が熱く濡れてしまった。焦らされるもどかしさに、息が荒くなる。', 'まだ身体を預ける勇気が出なかった。でも、肌に触れられた場所がずっと熱を帯びている。'][index];
  if (e.id === 'sexual_satisfaction') return ['相手の体温と自分の愛液が混ざり合った匂いに包まれながら、奥まで満たされた幸福感を伝えた。肌がまだじんじんと熱い。', 'もっと激しく奥を突いてほしかった……そんな淫らな欲求を耳元で囁くなんて、自分でも驚くほど身体が火照っていた。', '一人になってからも、下腹の奥がじわじわと疼いて、余韻の痺れが爪先まで残っていた。'][index];
  if (e.id === 'sexual_desire_fluctuation') return ['下腹の奥が疼いて、誰かに激しく抱かれたいという欲求が身体を満たしている。女としての身体の衝動を受け止めたい。', '求めた身体を受け入れてもらえた。肌が密着する熱さに、息が止まりそうになった。', '一人で布団にくるまり、火照る肌と下腹の熱が静まるのをじっと待った。'][index];
  if (e.id.startsWith('sexual_')) {
    const diaryLines = [
      '身体の奥底にある淫らな望みや境界線を言葉にするのは恥ずかしい。でも、相手と素直に向き合えた気がする。',
      '肌の触れ合い方や求めていることを伝えられた。相手の熱い吐息を感じて、胸が締めつけられた。',
      'すぐには言葉にできないけれど、身体の疼きや快感について真剣に考えた一日だった。']; return diaryLines[index % 3];
  }
  if (['adult_relationship_conflict', 'adult_feelings', 'adult_private_relationship', 'adult_new_chapter'].includes(e.id)) return ['自分の気持ちも、相手の気持ちも大切にしたい。急がずに考えてみよう。', 'あの人との時間が、私の中で少しずつ意味を変えている。', 'これでよかったのか、まだ答えは出ない。それでも自分で選んだ。'][index % 3]; return null
}
