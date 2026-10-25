'use strict';
// 性的成熟・経験・性経験人数の管理

function makeSexuality(r) {
  return {
    maturity: 0,
    experience: [],
    nextExperienceId: 1,
    orientationAwareness: 0,
    sexualHistory: { firstSex: null, mostMemorable: null, latestSex: null },
    sexualPartners: []
  };
}
function normalizeSexuality(st) {
  if (!st.sexuality) st.sexuality = makeSexuality(random((st.seed ^ 0x52a5f1d3) >>> 0));
  st.sexuality.experience ??= [];
  st.sexuality.nextExperienceId ??= st.sexuality.experience.length + 1;
  st.sexuality.sexualHistory ??= { firstSex: null, mostMemorable: null, latestSex: null };
  st.sexuality.sexualPartners ??= [];
  st.bonds ??= [];
  st.nextBondId ??= 1;
  for (const b of st.bonds) normalizeBond(b, st.seed);
  return st;
}
function recordSexualHistory(data) {
  normalizeSexuality(s);
  const sh = s.sexuality.sexualHistory;
  const rec = {
    age: data.age ?? s.age,
    partnerName: data.partnerName || '相手',
    title: data.title || '身体の交わり',
    description: data.description || '',
    diary: data.diary || '',
    satisfaction: data.satisfaction ?? 70,
    intensity: data.intensity ?? (data.satisfaction ?? 70)
  };
  if (!sh.firstSex) sh.firstSex = { ...rec };
  sh.latestSex = { ...rec };
  if (!sh.mostMemorable || rec.intensity >= (sh.mostMemorable.intensity ?? 0)) {
    sh.mostMemorable = { ...rec };
  }
}
function changeSexuality(effects) {
  normalizeSexuality(s);
  for (const [key, value] of Object.entries(effects)) {
    if (typeof value !== 'number') continue;
    if (key === 'desire') {
      const tier = getLibidoTier(s);
      const mult = tier === '強' ? 1.3 : tier === '弱' ? 0.65 : 1.0;
      s.states.current_libido = clamp(s.states.current_libido + Math.round(value * 5 * mult), -100, 100);
    } else if (key === 'shyness') {
      if (s.traits.baseline_modesty) {
        s.traits.baseline_modesty.current = clamp(s.traits.baseline_modesty.current + value * 2, s.traits.baseline_modesty.min, s.traits.baseline_modesty.max);
      }
      s.states.current_embarrassment = clamp((s.states.current_embarrassment || 50) + value * 5, 0, 100);
    } else if (key === 'initiative') {
      if (s.traits.social_initiative) {
        s.traits.social_initiative.current = clamp(s.traits.social_initiative.current + value * 2, s.traits.social_initiative.min, s.traits.social_initiative.max);
      }
    } else if (key === 'curiosity') {
      if (s.traits.sexual_interest) {
        s.traits.sexual_interest.current = clamp(s.traits.sexual_interest.current + value * 2, s.traits.sexual_interest.min, s.traits.sexual_interest.max);
      }
    } else if (key === 'selfKnowledge') {
      s.abilities.knowledge = clamp((s.abilities.knowledge || 0) + value * 2, -100, 100);
      s.states.self_efficacy = clamp((s.states.self_efficacy || 0) + value * 3, -100, 100);
    } else if (key === 'selfAcceptance') {
      if (s.traits.self_worth_disposition) {
        s.traits.self_worth_disposition.current = clamp(s.traits.self_worth_disposition.current + value, s.traits.self_worth_disposition.min, s.traits.self_worth_disposition.max);
      }
      s.states.self_efficacy = clamp((s.states.self_efficacy || 0) + value * 3, -100, 100);
    } else if (key === 'boundaryVoice') {
      s.abilities.communication_skill = clamp((s.abilities.communication_skill || 0) + value * 3, -100, 100);
    } else if (key === 'intimacyNeed') {
      s.states.relationship_satisfaction = clamp((s.states.relationship_satisfaction || 0) + value * 3, -100, 100);
      s.states.current_libido = clamp((s.states.current_libido || 0) + value * 2, -100, 100);
    } else if (TRAIT_KEYS.includes(key) && s.traits[key]) {
      s.traits[key].current = clamp(s.traits[key].current + value, s.traits[key].min, s.traits[key].max);
    }
  }
  syncDisplay(s);
}
function updateSexualityForAge() {
  normalizeSexuality(s);
  const age = s.age;
  const target = age < 9 ? 0 : age < 12 ? (age - 8) * 8 : age < 18 ? 32 + (age - 12) * 10 : 100;
  s.sexuality.maturity = Math.max(s.sexuality.maturity, Math.min(100, target));
  if (age >= 12 && age <= 24) s.abilities.knowledge = clamp((s.abilities.knowledge || 0) + 1, -100, 100);

  const tier = getLibidoTier(s);
  if (age < 11) {
    // 幼少期：資質に応じた抑制
    if (tier === '強') {
      if (s.states.current_libido > -40) {
        s.states.current_libido = clamp(Math.round(s.states.current_libido * 0.5 - 25), -100, 100);
      } else {
        s.states.current_libido = clamp(Math.round(s.states.current_libido * 0.9 - 5), -100, 100);
      }
    } else if (tier === '中') {
      s.states.current_libido = clamp(Math.round(s.states.current_libido * 0.7 - 25), -100, 100);
    } else {
      s.states.current_libido = clamp(Math.round(s.states.current_libido * 0.5 - 45), -100, 100);
    }
  } else if (age < 18) {
    // 思春期：資質に応じた目覚めの速度
    const baseLib = s.traits?.baseline_libido?.current ?? 0;
    const speed = tier === '強' ? 0.6 : tier === '中' ? 0.4 : 0.2;
    const factor = ((age - 10) / 8) * speed;
    s.states.current_libido = clamp(Math.round(s.states.current_libido * (1 - factor) + baseLib * factor), -100, 100);
  } else {
    // 成人期：資質に応じたbaselineへの回帰
    const baseLib = s.traits?.baseline_libido?.current ?? 0;
    const weight = tier === '強' ? 0.65 : tier === '中' ? 0.50 : 0.35;
    s.states.current_libido = clamp(Math.round((1 - weight) * s.states.current_libido + weight * baseLib), -100, 100);
  }
  syncDisplay(s);
}

function getSexualPartnerList(st = s) {
  normalizeSexuality(st);
  st.sexuality.sexualPartners ??= [];
  return st.sexuality.sexualPartners;
}
function getSexualPartnerCount(st = s) {
  return getSexualPartnerList(st).length;
}
function addSexualPartner(partnerId, partnerName, details = {}) {
  normalizeSexuality(s);
  s.sexuality.sexualPartners ??= [];
  const list = s.sexuality.sexualPartners;
  if (partnerId && partnerId.startsWith('bond_')) {
    if (!list.some(p => p.id === partnerId)) {
      list.push({ id: partnerId, name: partnerName, type: 'bond', age: s.age });
    }
  } else {
    // Unique stranger / client / non-bond partner
    const count = details.extraCount || 1;
    for (let i = 0; i < count; i++) {
      const suffix = count > 1 ? ` ${i + 1}` : '';
      list.push({
        id: 'stranger_' + (list.length + 1),
        name: (partnerName || '見知らぬ人') + suffix,
        type: 'stranger',
        age: s.age,
        title: details.title || null
      });
    }
  }
}
function hasHadSex(st = s) { return !!(st?.flags?.firstSexualExperience || st?.sexuality?.experience?.some(x => x.kind === 'intimacy')); }
function isVirgin(st = s) { return !hasHadSex(st); }
function hasHadSexWithCurrentPartner(st = s) { const p = getPrimaryPartner(st); if (!p) return false; return !!st?.sexuality?.experience?.some(x => x.kind === 'intimacy' && x.partnerId === p.id); }
function isSexuallyAroused(st = s) { return (st?.sexuality?.desire ?? 0) >= 12 || !!st?.flags?.in_heat || !!st?.flags?.libido_spike || (st?.sexuality?.intimacyNeed ?? 0) >= 20; }
function isEligibleForUndergroundSexWork(st = s) {
  if (st.occupation === '風俗') return true;
  const highDesire = isSexuallyAroused(st) || (st.sexuality?.desire ?? 0) >= 6;
  const lowMorality = (st.morality ?? 0) <= 10;
  const lowMoney = (st.money ?? 0) <= 10;
  return highDesire && lowMorality && lowMoney;
}
function recordExperience(kind, description, partnerId = null, details = {}) {
  normalizeSexuality(s); const bond = s.bonds.find(b => b.id === partnerId); const entry = { id: 'exp_' + s.sexuality.nextExperienceId++, age: s.age, kind, description, partnerId, consent: details.consent ?? null, mutual: details.mutual ?? null, satisfaction: details.satisfaction ?? null, emotionalImpact: details.emotionalImpact ?? 0, private: details.private ?? false, relationshipStatus: bond?.status ?? null }; s.sexuality.experience.push(entry);
  if (kind === 'intimacy') {
    const partnerName = bond?.name || details.partnerName || '相手';
    let diaryText = details.diary || '';
    if (!s.flags.firstSexualExperience) {
      s.flags.firstSexualExperience = true;
      s.flags.virginLostAge = s.age;
      s.flags.virginLostPartnerId = partnerId;
      const isFemale = bond?.gender === 'female';
      if (!diaryText) {
        diaryText = isFemale
          ? '衣服を脱ぎ捨てて晒した肌に、彼女の指先と熱い舌が這った瞬間のこと。同じ女の身体なのに、触れられるたびに甘い愛液がとめどなく溢れ、頭が真っ白になるほどの痺れが下腹を貫いたあの生々しい熱気が、今も下腹の奥にこびりついている。'
          : '服を剥がされ、濡れた秘所に熱い肉塊を迎え入れた瞬間のこと。痛みと甘い痺れが混ざり合い、シーツを握りしめて声を漏らしたあの生々しい熱気が、今も下腹の奥にこびりついている。';
      }
      if (isFemale) {
        log('初めて身体を重ね、女同士の柔肌と肉芽を溶け合わせる性体験をした。', ageDiary(diaryText));
      } else {
        log('初めて身体を重ね、女としての快楽に目覚める性体験をした。', ageDiary(diaryText));
      }
    }
    const sat = details.satisfaction ?? 70;
    const intensity = sat + (details.emotionalImpact ?? 0) * 5;
    addSexualPartner(partnerId, partnerName, details);
    recordSexualHistory({
      age: s.age,
      partnerName,
      title: details.title || description,
      description,
      diary: diaryText,
      satisfaction: sat,
      intensity
    });
  }
  if (s.sexuality.experience.length > 200) s.sexuality.experience.shift();
  return entry;
}
