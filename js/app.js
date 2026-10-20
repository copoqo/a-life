    'use strict';
    window.addEventListener('error', function (err) {
      console.error('Runtime error:', err);
      const notice = document.getElementById('playNotice');
      if (notice) {
        notice.innerHTML = `<span style="color:#b91c1c;font-weight:700;">⚠️ 画面の読み込みまたは実行でエラーが発生しました: ${err.message || err}</span>`;
      }
    });

    // events/*.js の読み込み検証
    function verifyEventDefs() {
      if (!Array.isArray(window.eventDefs) || window.eventDefs.length === 0) {
        console.error('eventDefs is not loaded (events/*.js)');
        const notice = document.getElementById('playNotice');
        if (notice) {
          notice.innerHTML = '<span style="color:#b91c1c;font-weight:700;">⚠️ イベントファイル（events/）の読み込みに失敗しました。キャッシュをクリアして再読み込みしてください。</span>';
        }
        return false;
      }
      return true;
    }
    verifyEventDefs();
    // 仕様書準拠 基本数学関数・丸めルール (第2章・第3章)
    const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
    const roundHalfAwayFromZero = x => Math.sign(x) * Math.floor(Math.abs(x) + 0.5);
    const S = x => clamp(x, -100, 100);
    const D = x => clamp(roundHalfAwayFromZero(x), -50, 50);
    const N = x => clamp(x / 100, -1, 1);
    function random(seed) {
      let x = seed >>> 0;
      return {
        next() {
          x ^= x << 13;
          x ^= x >>> 17;
          x ^= x << 5;
          return (x >>> 0) / 4294967296;
        },
        state() { return x >>> 0; }
      };
    }
    function normal(mean = 0, std = 20, r) {
      const u1 = Math.max(1e-15, r.next());
      const u2 = r.next();
      const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
      return mean + z0 * std;
    }

    // 仕様書準拠 内部パラメータ辞書 (第4章)
    const TRAIT_KEYS = [
      'constitution', 'cognitive_potential', 'learning_drive', 'extraversion',
      'social_initiative', 'appearance_potential', 'self_worth_disposition',
      'baseline_libido', 'sexual_interest', 'masochistic_preference',
      'sadistic_preference', 'baseline_modesty', 'risk_tolerance'
    ];
    const ABILITY_KEYS = [
      'healthy_habits', 'knowledge', 'problem_solving',
      'communication_skill', 'grooming', 'interpersonal_charm', 'morality'
    ];
    const STATE_LOAD_KEYS = ['illness_burden', 'fatigue', 'social_anxiety', 'stress', 'current_embarrassment'];
    const STATE_SIGNED_KEYS = [
      'self_efficacy', 'social_confidence', 'success_memory',
      'life_satisfaction', 'relationship_satisfaction', 'achievement',
      'current_libido', 'mood'
    ];
    // 表示パラメータ（8つ、[-50, 50]）
    const DISPLAY_KEYS = [
      ['health', '健康'],
      ['finances', '経済力'],
      ['intellect', '知性'],
      ['sociability', '社交性'],
      ['attractiveness', '魅力'],
      ['confidence', '自信'],
      ['happiness', '幸福度'],
      ['sexual_desire', '性的欲求']
    ];

    const DISTRICT_AREA_MAP = {
      '住宅街': 'residential',
      '商業地域': 'commercial',
      '繁華街': 'entertainment',
      '農村集落': 'rural_fishing',
      '工業地域': 'residential',
      '高所得地域': 'high_income',
      '経済的困難が多い地域': 'low_income'
    };
    const DISTRICT_EXPENSE_MULTIPLIERS = {
      residential: 1.00,
      commercial: 1.10,
      entertainment: 1.15,
      rural_fishing: 0.85,
      high_income: 1.40,
      low_income: 0.80
    };
    function getDistrictExpenseMultiplier(districtOrArea) {
      const area = DISTRICT_AREA_MAP[districtOrArea] || districtOrArea || 'residential';
      return DISTRICT_EXPENSE_MULTIPLIERS[area] || 1.0;
    }

    // 仕様書準拠 8つの表示指標の厳密な計算式 (第5章)
    function getLibidoTier(st) {
      if (!st) return '中';
      if (st.libido_tier) return st.libido_tier;
      if (st.traits?.libido_tier) return st.traits.libido_tier;
      const center = st.traits?.baseline_libido?.center ?? 0;
      return center > 15 ? '強' : center < -15 ? '弱' : '中';
    }

    function setLibidoTier(st, tier) {
      if (!st || !st.traits) return;
      st.libido_tier = tier;
      let center = 0;
      let initLibido = -80;
      if (tier === '弱') {
        center = -35;
        initLibido = -90;
      } else if (tier === '強') {
        center = 35;
        initLibido = -60;
      } else {
        center = 0;
        initLibido = -80;
      }
      st.traits.baseline_libido = {
        center,
        min: center - 50,
        max: center + 50,
        current: center
      };
      if (st.age < 11) {
        st.states.current_libido = initLibido;
      } else if (st.age >= 18) {
        st.states.current_libido = center;
      }
      syncDisplay(st);
    }
    // 選択肢と結果の分離・文章整形ヘルパー
    function toPastTense(str) {
      let s = (str || '').trim().replace(/[。！!？?\s]+$/, '');
      if (!s) return '';
      if (s.endsWith('た') || s.endsWith('だ')) return s + '。';

      const godanExceptions = ['帰る', '走る', '入る', '切る', '知る', '減る', '散る', '蹴る', '跨がる', '握る', '滑る', '弄る', '捩る', 'ねじる', '遮る'];
      for (const g of godanExceptions) {
        if (s.endsWith(g)) return s.slice(0, -1) + 'った。';
      }

      const ichidan = ['ける', 'げる', 'てる', 'でる', 'ねる', 'べる', 'める', 'れる', 'せる', 'える', 'じる', 'みる', 'きる', 'ぎる', 'ちる', 'にる', 'ひる', 'びる'];
      for (const end of ichidan) {
        if (s.endsWith(end)) return s.slice(0, -1) + 'た。';
      }

      if (s.endsWith('する')) return s.slice(0, -2) + 'した。';
      if (s.endsWith('す')) return s.slice(0, -1) + 'した。';
      if (s.endsWith('く')) return s.slice(0, -1) + 'いた。';
      if (s.endsWith('ぐ')) return s.slice(0, -1) + 'いだ。';
      if (s.endsWith('む') || s.endsWith('ぬ') || s.endsWith('ぶ')) return s.slice(0, -1) + 'んだ。';
      if (s.endsWith('う') || s.endsWith('つ') || s.endsWith('る')) return s.slice(0, -1) + 'った。';
      return s + 'した。';
    }

    function cleanChoiceLabel(label) {
      return (label || '').trim().replace(/^【|】$/g, '').trim();
    }

    function parseChoice(event, index, c) {
      if (!c) return { label: '', result: '' };
      if (c.outcomes?.[0]?.description) {
        return {
          label: c.label || c[0] || '',
          result: c.outcomes[0].description
        };
      }
      const raw = typeof c === 'string' ? c : (c.label || c[0] || '');
      if (c[2]) return { label: raw, result: c[2] };
      if (c[1]?.result) return { label: raw, result: c[1].result };
      const bMatch = raw.match(/^【([^】]+)】\s*(.*)$/);
      if (bMatch) {
        const label = bMatch[1].trim();
        const desc = bMatch[2] ? bMatch[2].trim() : bMatch[1].trim();
        return { label, result: toPastTense(desc) };
      }
      return { label: raw, result: toPastTense(raw) };
    }
    function computeDisplay(person) {
      const t = person.traits || {};
      const a = person.abilities || {};
      const st = person.states || {};
      const eco = person.economy || { cash: 0, investments: 0, debt: 0, monthly_income: 0, monthly_expenses: 100000 };

      const cOf = (k) => t[k]?.current ?? 0;

      // 5.1 健康
      const health = D((2 * cOf('constitution') + (a.healthy_habits || 0)
        - 2 * (st.illness_burden || 0) - (st.fatigue || 0)) / 12);

      // 5.2 経済力
      let finances;
      const age = person.age ?? 0;
      if (age < 18 && (eco.monthly_expenses || 0) === 0 && (eco.debt || 0) === 0) {
        // 幼少期・扶養下：所持金0・生活費0が標準（親の庇護下にあるため経済不安なし＝基準点0）
        const allowanceScore = clamp(roundHalfAwayFromZero((eco.cash || 0) / 1000), 0, 15);
        finances = D(allowanceScore);
      } else {
        const mult = getDistrictExpenseMultiplier(person.location?.district || person.location?.area_type || 'residential');
        const effMonthlyExpenses = roundHalfAwayFromZero((eco.monthly_expenses || 0) * mult);
        const monthlyCost = Math.max(effMonthlyExpenses, 100000);
        const monthlySurplus = (eco.monthly_income || 0) - effMonthlyExpenses;
        const netWorth = (eco.cash || 0) + (eco.investments || 0) + (eco.other_assets || 0) - (eco.debt || 0);

        const liquidMonths = ((eco.cash || 0) + (eco.investments || 0) * 0.8) / monthlyCost;
        const reserveScore = clamp(20 * Math.log2((liquidMonths + 1) / 4), -100, 100);
        const cashflowScore = clamp(100 * (monthlySurplus / monthlyCost), -100, 100);
        const wealthScore = clamp(15 * Math.log2(Math.max(0, netWorth) / (12 * monthlyCost) + 1), 0, 100);
        finances = D((2 * reserveScore + 2 * cashflowScore + wealthScore) / 10);
      }

      // 5.3 知性
      const intellect = D((2 * cOf('cognitive_potential') + cOf('learning_drive')
        + 2 * (a.knowledge || 0) + (a.problem_solving || 0)) / 12);

      // 5.4 社交性
      const sociability = D((2 * cOf('extraversion') + cOf('social_initiative')
        + (a.communication_skill || 0) - (st.social_anxiety || 0)) / 10);

      // 5.5 魅力 (health表示値を使用)
      const attractiveness = D((2 * cOf('appearance_potential') + (a.grooming || 0)
        + 2 * (a.interpersonal_charm || 0) + 2 * health) / 12);

      // 5.6 自信
      const confidence = D((cOf('self_worth_disposition') + 2 * (st.self_efficacy || 0)
        + (st.social_confidence || 0) + (st.success_memory || 0)) / 10);

      // 5.7 幸福度 (health表示値を使用)
      const happiness = D((2 * (st.life_satisfaction || 0) + 2 * (st.relationship_satisfaction || 0)
        - 2 * (st.stress || 0) + (st.achievement || 0) + 2 * health) / 16);

      // 5.8 性的欲求（基本資質：弱・中・強による発達・発現パターン）
      let sexual_desire;
      const tier = getLibidoTier(person);
      if (age < 11) {
        // 幼少期（思春期前）
        if (tier === '強') {
          // 強：稀に好奇心や刺激体験で例外的に発現可能
          const isExceptionalSprout = (st.current_libido > 25 && cOf('sexual_interest') > 25);
          sexual_desire = isExceptionalSprout ? D((st.current_libido - 10) / 4) : D(-45 + (age * 1.5));
        } else if (tier === '中') {
          // 中：ほぼ完全に眠っている状態
          const isRareSprout = (st.current_libido > 35 && cOf('sexual_interest') > 35);
          sexual_desire = isRareSprout ? D((st.current_libido - 20) / 5) : D(-48 + (age * 1.0));
        } else {
          // 弱：完全に眠っており欲求なし
          sexual_desire = D(-50);
        }
      } else if (age < 16) {
        // 11〜15歳（思春期・第二次性徴）
        const progress = (age - 10) / 6; // 0.16 〜 0.83
        if (tier === '強') {
          // 強：身体の成熟とともに急速に疼きや快感に目覚めていく
          const adultRaw = (2 * cOf('baseline_libido') + 2 * (st.current_libido || 0) + cOf('sexual_interest') - (st.stress || 0)) / 12;
          const baselineSuppression = -30 * (1 - progress);
          sexual_desire = D(baselineSuppression + adultRaw * progress);
        } else if (tier === '中') {
          // 中：標準的なペースで穏やかに目覚める（15歳で0付近）
          const adultRaw = (2 * cOf('baseline_libido') + 2 * (st.current_libido || 0) + cOf('sexual_interest') - (st.stress || 0)) / 13;
          const baselineSuppression = -40 * (1 - progress);
          sexual_desire = D(baselineSuppression + adultRaw * progress);
        } else {
          // 弱：目覚めは極めて遅く控えめ（15歳でも-20前後）
          const adultRaw = (2 * cOf('baseline_libido') + 2 * (st.current_libido || 0) + cOf('sexual_interest') - (st.stress || 0)) / 15;
          const baselineSuppression = -48 * (1 - progress);
          sexual_desire = D(baselineSuppression + adultRaw * progress - 10);
        }
      } else {
        // 16歳以降・成人期：本来の計算式
        const adultRaw = (2 * cOf('baseline_libido') + 2 * (st.current_libido || 0) + cOf('sexual_interest') - (st.stress || 0)) / 12;
        sexual_desire = D(adultRaw);
      }

      return {
        health,
        finances,
        intellect,
        sociability,
        attractiveness,
        confidence,
        happiness,
        sexual_desire
      };
    }

    function computeCurrentEmbarrassment(person, context = {}) {
      const baseMod = person.traits?.baseline_modesty?.current ?? 0;
      const pubMod = context.public_exposure_modifier ?? 0;
      const trustMod = context.trust_modifier ?? 0;
      return clamp(roundHalfAwayFromZero(50 + 0.5 * baseMod + pubMod - trustMod), 0, 100);
    }

    function syncDisplay(st) {
      if (!st) return;
      st.display = computeDisplay(st);
      // 既存コードや条件判定（s.health < 30 等）との完全互換性を維持
      st.health = st.display.health;
      st.finances = st.display.finances;
      st.intellect = st.display.intellect;
      st.sociability = st.display.sociability;
      st.attractiveness = st.display.attractiveness;
      st.confidence = st.display.confidence;
      st.happiness = st.display.happiness;
      st.sexual_desire = st.display.sexual_desire;
      // 旧来のキーも同期
      st.knowledge = st.abilities?.knowledge ?? 0;
      st.stress = st.states?.stress ?? 0;
      st.social = st.display.sociability;
      st.money = st.display.finances;
      st.independence = st.states?.self_efficacy ?? 0;
      st.selfUnderstanding = st.abilities?.knowledge ?? 0;
      st.aesthetics = st.abilities?.interpersonal_charm ?? 0;
      st.morality = st.abilities?.morality ?? 0;
      if (st.sexuality) {
        st.sexuality.desire = st.states?.current_libido ?? 0;
        st.sexuality.shyness = st.states?.current_embarrassment ?? 50;
      }
    }

    function bounded(k, x) {
      if (TRAIT_KEYS.includes(k)) {
        const tr = s?.traits?.[k];
        return clamp(Math.round(x), tr?.min ?? -50, tr?.max ?? 50);
      }
      if (STATE_LOAD_KEYS.includes(k)) return clamp(Math.round(x), 0, 100);
      return clamp(Math.round(x), -100, 100);
    }
    function initialValue(r) { return clamp(roundHalfAwayFromZero(normal(0, 20, r)), -50, 50); }
    const FEMALE_NAMES = [
      '葵', '美咲', '結衣', '陽菜', 'さくら', '凛', '彩花', '遥', '真央', '紬',
      '春香', '理沙', '美月', '千尋', '香織', '優', '七海', '沙織', '楓', '玲奈',
      '明日香', '彩乃', '瑞希', 'ひかり', '由佳', '茜', '真由', '琴音',
      '咲', '栞', '澪', '杏', '萌', '花', '芽', '結', '陽', '鈴', '桜', '渚',
      '咲良', '美優', '莉子', '結菜', '陽葵', '芽依', '心春', '詩織', '愛理', '花音',
      '日菜', '美緒', '優奈', '結愛', '小春', '千夏', '真帆', '綾乃', '美羽', '菜々子',
      '莉央', '沙月', '美穂', '奈々', '佳純', '麻衣', '友梨', '里奈', '結月', '実桜',
      '優香', '綾香', '千聖', '詩乃', '涼香', '穂香', '日向', '奈緒', '朱音', '柚葉',
      '真尋', '若菜', '明莉', '琴美', '里香', '恵茉', '佳奈', '紗英', '有咲', '真理',
      '紬希', '結香', '愛美', '夏帆', '沙希', '梨乃', '千鶴', '美鈴', '瑠璃', '果歩',
      '菜穂', '優月', '和奏', '日和', '静香', '美波', '未羽', '花梨', '美琴', '愛梨',
      '初音', '鈴香', '百花', '乃愛', '澄香', '朱里', '千歳', '千春', '帆波', '真白'
      , '楓', '詩', '華', '澪', '玲'
      , 'まな', 'さほ', 'えま', 'みう', 'みゆ', 'もね', 'ゆあ', 'りお', 'りあ', 'まお'
      , '朋音', '結菜', '瑠夏', '結衣'
      , 'みな美', 'なつ実', 'はる香', 'のぞみ', 'ひなの', 'わかな', 'ひより', 'なぎさ', 'まひる'
      , '彩加里', '彩葉'
    ];
    const names = FEMALE_NAMES;
    const OCCUPATIONS = ['学生', '一般職', '専門職・クリエイター', '自営業', 'パート・アルバイト', '専業主婦', '風俗', '無職'];
    function isStudent(st = s) { return st?.occupation === '学生'; }
    function isPartnerEvent(e) {
      if (!e) return false;
      if (needsPartner(e)) return true;
      if (e.id.startsWith('student_partner_') || e.id.startsWith('partner_') || e.id.startsWith('positive_date_') || e.id.startsWith('positive_flirting') || e.id.startsWith('positive_anniversary') || e.id === 'positive_intimacy_humor' || e.id.startsWith('first_kiss_milestone') || e.id.startsWith('first_intimacy_milestone') || e.id.startsWith('partner_intimacy_') || e.id === 'adult_shared_intimacy' || e.id === 'marital_intimacy_crisis') return true;
      if (e.requires) {
        const reqStr = e.requires.toString();
        if (reqStr.includes('hasPartner') || reqStr.includes('hasFemalePartner') || reqStr.includes('hasMalePartner')) return true;
      }
      return false;
    }
    function injectPartnerName(str, partner) {
      if (!str || !partner || !partner.name) return str;
      const pName = partner.name;
      let res = str;
      res = res.replace(/パートナー/g, pName);
      res = res.replace(/交際相手/g, pName);
      res = res.replace(/配偶者/g, pName);
      res = res.replace(/相手(?=[のとをにはへがから])|相手(?=自身|特有)/g, pName);
      if (partner.gender === 'female') {
        res = res.replace(/彼女(?=[のとをにはへがから])/g, pName);
      }
      return res;
    }
    function isGenderAllowed(e, st = s) {
      if (e.targetGender === 'male' && !hasMalePartner(st)) return false;
      if (e.targetGender === 'female' && !hasFemalePartner(st) && !prefersWomen(st)) return false;
      return true;
    }
    // 居住地は「地形・環境」「街区特性」の独立した2軸で管理する。
    const TERRAINS = ['都市部', '郊外', '平野部', '山間部', '海辺', '離島'];
    const DISTRICTS = ['住宅街', '繁華街', '商業地域', '農村集落', '工業地域', '高所得地域', '経済的困難が多い地域'];
    const terrainWeights = [35, 27, 17, 12, 8, 1];
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
    // イベントデータは events/*.js から読み込まれます (window.eventDefs)


    let s, rng;

    // 性・親密さ関連定数
    const SEXUAL_KEYS = [['desire', '性的欲求'], ['initiative', '積極性'], ['shyness', '羞恥度'], ['curiosity', '好奇心'], ['selfKnowledge', '自己理解'], ['selfAcceptance', '自己肯定感'], ['boundaryVoice', '意思表明力'], ['intimacyNeed', '親密さ欲求']];

    // =========================================================================
    // イベント設計・判定エンジン (life_simulator_event_design_spec.md v1.0 準拠)
    // =========================================================================

    const REGISTERED_PATHS = {
      'person.age_months': { type: 'integer', readonly: false },
      'person.alive': { type: 'boolean', readonly: false },
      'person.identity.gender': { type: 'enum', readonly: true },
      'person.identity.sexual_orientation': { type: 'enum', readonly: false },
      'person.experience.has_sexual_experience': { type: 'boolean', readonly: false },
      'person.career.employment_status': { type: 'enum', readonly: false },
      'person.career.occupation_id': { type: 'string', readonly: false },
      'person.family.partner_id': { type: 'string', readonly: false },
      'person.family.relationship_status': { type: 'enum', readonly: false },
      'person.family.marital_status': { type: 'enum', readonly: false },
      'person.family.children_ids': { type: 'array', readonly: false },
      'person.economy.cash': { type: 'integer', readonly: false },
      'person.economy.monthly_income': { type: 'integer', readonly: false },
      'person.residence.district_id': { type: 'string', readonly: false },
      'derived.residence.area_type': { type: 'enum', readonly: true },
      'derived.libido_tier': { type: 'string', readonly: true },
      'derived.age_years': { type: 'integer', readonly: true },
      'derived.has_partner': { type: 'boolean', readonly: true },
      'derived.has_children': { type: 'boolean', readonly: true },
      'derived.partner_gender_relation': { type: 'enum', readonly: true },
      'derived.friend_count': { type: 'integer', readonly: true },
      'derived.net_worth': { type: 'integer', readonly: true },
      'display.health': { type: 'integer', readonly: true },
      'display.finances': { type: 'integer', readonly: true },
      'display.intellect': { type: 'integer', readonly: true },
      'display.sociability': { type: 'integer', readonly: true },
      'display.attractiveness': { type: 'integer', readonly: true },
      'display.confidence': { type: 'integer', readonly: true },
      'display.happiness': { type: 'integer', readonly: true },
      'display.sexual_desire': { type: 'integer', readonly: true }
    };

    const REGISTERED_TRAITS = new Set([
      'constitution', 'cognitive_potential', 'learning_drive', 'extraversion',
      'social_initiative', 'appearance_potential', 'self_worth_disposition',
      'baseline_libido', 'sexual_interest', 'masochistic_preference',
      'sadistic_preference', 'baseline_modesty', 'risk_tolerance'
    ]);

    const REGISTERED_SKILLS = new Set([
      'healthy_habits', 'knowledge', 'problem_solving',
      'communication_skill', 'grooming', 'interpersonal_charm',
      'morality'
    ]);

    const REGISTERED_STATES = new Set([
      'illness_burden', 'fatigue', 'social_anxiety', 'stress', 'current_embarrassment',
      'self_efficacy', 'social_confidence', 'success_memory',
      'life_satisfaction', 'relationship_satisfaction', 'achievement',
      'current_libido', 'mood'
    ]);

    function validatePath(path, isEffect = false) {
      if (REGISTERED_PATHS[path]) {
        if (isEffect && REGISTERED_PATHS[path].readonly) {
          throw new Error('Write not permitted to read-only path: ' + path);
        }
        return true;
      }
      if (path.startsWith('trait.')) {
        const traitId = path.split('.')[1];
        const sub = path.split('.')[2];
        if (!REGISTERED_TRAITS.has(traitId)) {
          throw new Error('Unregistered trait: ' + traitId);
        }
        if (isEffect && sub && sub !== 'current') {
          throw new Error('Write to trait center/min/max not permitted: ' + path);
        }
        return true;
      }
      if (path.startsWith('skill.')) {
        const skillId = path.split('.')[1];
        if (!REGISTERED_SKILLS.has(skillId)) {
          throw new Error('Unregistered skill: ' + skillId);
        }
        return true;
      }
      if (path.startsWith('state.')) {
        const stateId = path.split('.')[1];
        if (!REGISTERED_STATES.has(stateId)) {
          throw new Error('Unregistered state: ' + stateId);
        }
        return true;
      }
      if (path.startsWith('history.event_counts.') || path.startsWith('history.choice_counts.') || path.startsWith('history.flags.')) {
        return true;
      }
      if (path.startsWith('context.')) {
        return true;
      }
      if (path === 'chain') return true;
      throw new Error('Unknown path: ' + path);
    }

    function makeSnapshot(st = s) {
      const p = getPrimaryPartner(st);
      const hasPartnerVal = !!p;
      let partnerGenderRelation = 'none';
      if (p) {
        partnerGenderRelation = p.gender === 'female' ? 'same' : (p.gender === 'male' ? 'different' : 'other');
      }

      const hasSex = hasHadSex(st);

      const districtAreaMap = {
        '繁華街': 'entertainment',
        '住宅街': 'residential',
        '商業地域': 'commercial',
        '農村集落': 'rural',
        '工業地域': 'industrial',
        '高所得地域': 'wealthy',
        '経済的困難が多い地域': 'deprived'
      };

      const employmentStatus = (st.age ?? 0) < 6 ? 'preschool' :
        (st.occupation === '学生' ? 'student' :
          (st.occupation === '無職' ? ((st.age ?? 0) >= 65 ? 'retired' : 'unemployed') :
            (st.occupation === '専業主婦' ? 'homemaker' :
              (st.occupation === '自営業' ? 'self_employed' : 'employed'))));

      return {
        version: st.version || 1,
        person: {
          age_months: (st.age ?? 0) * 12,
          alive: !st.finished,
          identity: {
            gender: 'female',
            sexual_orientation: prefersWomen(st) ? 'homosexual' : 'heterosexual'
          },
          experience: {
            has_sexual_experience: hasSex
          },
          career: {
            employment_status: employmentStatus,
            occupation_id: st.occupation || '学生'
          },
          family: {
            partner_id: p?.id ?? null,
            relationship_status: hasPartnerVal ? (st.flags?.married ? 'partnered' : 'dating') : 'single',
            marital_status: st.flags?.married ? 'married' : (st.flags?.divorced ? 'divorced' : (st.flags?.widowed ? 'widowed' : 'never_married')),
            children_ids: st.flags?.hasChildren ? ['child_1'] : []
          },
          economy: {
            cash: st.economy?.cash ?? 0,
            monthly_income: st.economy?.monthly_income ?? 0
          },
          residence: {
            district_id: st.location?.district ?? null
          }
        },
        derived: {
          residence: {
            area_type: districtAreaMap[st.location?.district] || 'other'
          },
          libido_tier: getLibidoTier(st),
          age_years: st.age ?? 0,
          has_partner: hasPartnerVal,
          has_children: !!st.flags?.hasChildren,
          partner_gender_relation: partnerGenderRelation,
          friend_count: (st.bonds || []).filter(b => b.status === 'close' || b.status === 'acquaintance').length,
          net_worth: (st.economy?.cash || 0) + (st.economy?.investments || 0) - (st.economy?.debt || 0)
        },
        display: { ...(st.display || {}) },
        traits: st.traits || {},
        skills: st.abilities || {},
        states: st.states || {},
        history: {
          event_counts: { ...(st.seen || {}) },
          choice_counts: {},
          flags: { ...(st.flags || {}) }
        },
        bonds: st.bonds || []
      };
    }

    function resolvePath(path, snapshot, bindings = {}) {
      if (!path) return undefined;
      if (path.startsWith('trait.')) {
        const traitId = path.split('.')[1];
        return snapshot.traits?.[traitId]?.current ?? 0;
      }
      if (path.startsWith('skill.')) {
        const skillId = path.split('.')[1];
        return snapshot.skills?.[skillId] ?? 0;
      }
      if (path.startsWith('state.')) {
        const stateId = path.split('.')[1];
        return snapshot.states?.[stateId] ?? 0;
      }
      if (path.startsWith('history.event_counts.')) {
        const eid = path.split('.')[2];
        return snapshot.history?.event_counts?.[eid] ?? 0;
      }
      if (path.startsWith('history.flags.')) {
        const fid = path.split('.')[2];
        return !!snapshot.history?.flags?.[fid];
      }
      if (path.startsWith('context.')) {
        const parts = path.split('.');
        const role = parts[1];
        const field = parts[2];
        return bindings[role]?.[field];
      }

      const parts = path.split('.');
      let curr = snapshot;
      for (const p of parts) {
        if (curr == null) return undefined;
        curr = curr[p];
      }
      return curr;
    }

    function evaluateCondition(cond, snapshot, bindings = {}) {
      if (!cond) return true;
      if (cond.all) {
        return cond.all.every(c => evaluateCondition(c, snapshot, bindings));
      }
      if (cond.any) {
        return cond.any.length > 0 && cond.any.some(c => evaluateCondition(c, snapshot, bindings));
      }
      if (cond.not) {
        return !evaluateCondition(cond.not, snapshot, bindings);
      }
      if (!cond.path) return true;

      const actual = resolvePath(cond.path, snapshot, bindings);
      const op = cond.op;
      const val = cond.value;

      switch (op) {
        case 'eq': return actual === val;
        case 'ne': return actual !== val;
        case 'gt': return typeof actual === 'number' && actual > val;
        case 'gte': return typeof actual === 'number' && actual >= val;
        case 'lt': return typeof actual === 'number' && actual < val;
        case 'lte': return typeof actual === 'number' && actual <= val;
        case 'between': return Array.isArray(val) && actual >= val[0] && actual <= val[1];
        case 'in': return Array.isArray(val) && val.includes(actual);
        case 'not_in': return Array.isArray(val) && !val.includes(actual);
        case 'exists': return actual !== null && actual !== undefined;
        case 'not_exists': return actual === null || actual === undefined;
        case 'contains': return Array.isArray(actual) && actual.includes(val);
        case 'count_gte': return Array.isArray(actual) && actual.length >= val;
        case 'count_lte': return Array.isArray(actual) && actual.length <= val;
        default: return false;
      }
    }

    function resolveActors(event, snapshot, r = rng) {
      const bindings = {};
      if (!event.actors) return bindings;

      for (const [role, actorDef] of Object.entries(event.actors)) {
        let candidate = null;
        if (actorDef.source === 'current_partner') {
          candidate = snapshot.bonds?.find(b => b.status === 'spouse') || snapshot.bonds?.find(b => b.status === 'partner') || null;
        } else if (actorDef.source === 'friend') {
          const friends = snapshot.bonds?.filter(b => b.status === 'close' || b.status === 'acquaintance') || [];
          if (friends.length) candidate = friends[0];
        } else if (actorDef.source === 'coworker') {
          candidate = snapshot.bonds?.find(b => b.role === 'colleague') || null;
        } else if (actorDef.source === 'random_adult') {
          candidate = snapshot.bonds?.find(b => b.role === 'stranger') || null;
        }

        if (actorDef.required && !candidate) {
          return null;
        }
        bindings[role] = candidate;
      }
      return bindings;
    }

    function computeEventWeight(event, snapshot, bindings, config = {}) {
      const base = event.weight?.base ?? Math.round((event.p || 0.2) * 100);
      if (base <= 0) return 0;

      let addSum = 0;
      for (const term of (event.weight?.additive || [])) {
        const val = resolvePath(term.path, snapshot, bindings);
        if (typeof val === 'number') addSum += term.coefficient * val;
      }
      const addFactor = Math.max(0, 1 + addSum);
      if (addFactor <= 0) return 0;

      let mult = 1.0;
      for (const m of (event.weight?.multipliers || [])) {
        if (evaluateCondition(m.when, snapshot, bindings)) {
          mult *= (m.factor ?? 1.0);
        }
      }
      return Math.max(0, base * addFactor * mult);
    }

    function listAvailableChoices(event, snapshot, bindings) {
      const choices = event.choices || [];
      return choices.filter(c => {
        if (!c.requirements) return true;
        return evaluateCondition(c.requirements, snapshot, bindings);
      });
    }

    function selectChoiceAuto(choices, snapshot, temperature = 1.0, r = rng) {
      if (!choices || choices.length === 0) return null;
      if (choices.length === 1) return choices[0];

      const utilities = choices.map(c => {
        let u = c.utility?.base ?? 0;
        for (const term of (c.utility?.terms || [])) {
          const v = resolvePath(term.path, snapshot);
          if (typeof v === 'number') u += term.coefficient * v;
        }
        for (const ct of (c.utility?.conditional_terms || [])) {
          if (evaluateCondition(ct.when, snapshot)) {
            u += (ct.bonus ?? 0);
          }
        }
        return u;
      });

      const uMax = Math.max(...utilities);
      const expWeights = utilities.map(u => Math.exp((u - uMax) / Math.max(0.01, temperature)));
      const sumExp = expWeights.reduce((a, b) => a + b, 0);

      const roll = (r ? r.next() : Math.random()) * sumExp;
      let cum = 0;
      for (let i = 0; i < choices.length; i++) {
        cum += expWeights[i];
        if (roll <= cum) return choices[i];
      }
      return choices[choices.length - 1];
    }

    function selectOutcome(choice, snapshot, r = rng) {
      const eligible = (choice.outcomes || []).filter(o => {
        if (!o.conditions) return true;
        return evaluateCondition(o.conditions, snapshot);
      });
      if (eligible.length === 0) return choice.outcomes?.[0] || null;
      if (eligible.length === 1) return eligible[0];

      const totalWeight = eligible.reduce((sum, o) => sum + (o.weight ?? 1), 0);
      const roll = (r ? r.next() : Math.random()) * totalWeight;
      let cum = 0;
      for (const o of eligible) {
        cum += (o.weight ?? 1);
        if (roll <= cum) return o;
      }
      return eligible[eligible.length - 1];
    }

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

    // 仕様書 3章・4章・9章準拠の出生時生成
    function generateOriginFamily(r, loc) {
      const structureRoll = r.next();
      let father = null;
      let mother = null;
      let siblings = [];
      let grandparents = false;

      const fatherJobs = ['会社員（大手メーカー勤務）', '公務員（市役所勤務）', '高校の国語教師', '地元の工務店の職人', '自営業（小さな飲食店主）', '商社勤務', '銀行員', '運送会社ドライバー', 'ITエンジニア'];
      const motherJobs = ['専業主婦', 'パート勤務（近所のスーパー）', '総合病院の看護師', '自宅でピアノ講師', '保育士', '一般企業の事務職', '図書館司書', 'WEBデザイナー'];
      const fJob = fatherJobs[Math.floor(r.next() * fatherJobs.length)];
      const mJob = motherJobs[Math.floor(r.next() * motherJobs.length)];

      if (structureRoll < 0.65) {
        father = { name: '父親', job: fJob };
        mother = { name: '母親', job: mJob };
        grandparents = r.next() < 0.15;
      } else if (structureRoll < 0.85) {
        mother = { name: '母親', job: mJob };
        grandparents = r.next() < 0.25;
      } else if (structureRoll < 0.93) {
        father = { name: '父親', job: fJob };
        grandparents = r.next() < 0.30;
      } else {
        father = { name: '父親', job: fJob };
        mother = { name: '母親', job: mJob };
        grandparents = true;
      }

      const sibRoll = r.next();
      if (sibRoll < 0.40) {
        siblings = [];
      } else if (sibRoll < 0.65) {
        siblings.push(r.next() < 0.5 ? '兄（2歳年上）' : '姉（3歳年上）');
      } else if (sibRoll < 0.85) {
        siblings.push(r.next() < 0.5 ? '兄（4歳年上）' : '妹（後に誕生）');
      } else {
        siblings.push('兄（3歳年上）', '弟（後に誕生）');
      }

      let membersList = [];
      if (father) membersList.push(`父（${father.job}）`);
      if (mother) membersList.push(`母（${mother.job}）`);
      if (grandparents) membersList.push('祖父母と同居');
      if (siblings.length) membersList.push(siblings.join('・'));
      else membersList.push('一人っ子');

      let structureName = '';
      if (father && mother) structureName = grandparents ? '三世代同居家庭' : (siblings.length ? '両親と兄弟のいる家庭' : '両親と一人娘の家庭');
      else if (mother) structureName = grandparents ? '母と祖父母の家庭' : '母子家庭';
      else structureName = grandparents ? '父と祖父母の家庭' : '父子家庭';

      const houseTypes = [
        '日当たりの良い庭付きの木造二階建て一軒家',
        '見晴らしの良い分譲マンションの一室',
        '商店街の一角にある店舗兼住宅',
        '閑静な住宅街に佇むアパートの一室',
        '緑に囲まれた風情ある平屋の日本家屋',
        '築年数のある温かみのある団地の一室'
      ];
      const houseType = houseTypes[Math.floor(r.next() * houseTypes.length)];

      const environments = [
        '穏やかで教育熱心、本や音楽に囲まれた家庭環境',
        '少し慎ましくも毎晩の笑顔と温かい会話が絶えない家庭',
        '両親ともに共働きで忙しくも、深い愛情で見守られる環境',
        '下町の活気に満ち、近所付き合いや来客の多い賑やかな環境',
        '自然豊かで穏やかな時間が流れ、のびのびと育つ環境',
        '自営業の背中を身近に見ながら、早くから家族の絆を感じる環境'
      ];
      const environment = environments[Math.floor(r.next() * environments.length)];

      return {
        structure: structureName,
        membersDescription: membersList.join('、'),
        houseType,
        environment,
        father,
        mother,
        siblings,
        grandparents
      };
    }
    function makeState(seed) {
      const r = random(seed);
      const name = names[Math.floor(r.next() * names.length)];

      // 13個の先天特性（出生時に固定する中心値と幅100の上下限）
      const traits = {};
      for (const k of TRAIT_KEYS) {
        const center = clamp(roundHalfAwayFromZero(normal(0, 20, r)), -50, 50);
        traits[k] = {
          center,
          min: center - 50,
          max: center + 50,
          current: center
        };
      }

      // 7個の後天的能力・習慣 ([-100, 100])
      const abilities = {};
      for (const k of ABILITY_KEYS) abilities[k] = 0;
      abilities.morality = clamp(10 + roundHalfAwayFromZero(normal(0, 5, r)), 0, 30);

      // 13個の状態・欲求 (負荷は[0, 100]、その他は[-100, 100])
      const states = {};
      for (const k of STATE_LOAD_KEYS) states[k] = 0;
      for (const k of STATE_SIGNED_KEYS) states[k] = 0;
      // 性欲の基本資質を決定（弱 30%, 中 45%, 強 25%）
      const tierRoll = r.next();
      const libidoTier = tierRoll < 0.30 ? '弱' : tierRoll < 0.75 ? '中' : '強';

      // 資質に基づく baseline_libido の再調整（弱: center -35, 中: 0, 強: +35）
      const baseCenter = libidoTier === '弱' ? -35 : libidoTier === '強' ? 35 : 0;
      traits.baseline_libido = {
        center: baseCenter,
        min: baseCenter - 50,
        max: baseCenter + 50,
        current: baseCenter
      };

      // 幼少期は性的欲求は未分化・眠っている状態
      states.current_libido = libidoTier === '強' && r.next() < 0.03 ? -20 : libidoTier === '弱' ? -90 : -80;
      states.current_embarrassment = computeCurrentEmbarrassment({ traits });

      // 金銭属性（円単位：幼少期は所持金0、生活費0）
      const economy = {
        cash: 0,
        investments: 0,
        other_assets: 0,
        debt: 0,
        monthly_income: 0,
        monthly_expenses: 0
      };

      const orientationType = r.next() < 0.78 ? 'heterosexual' : r.next() < 0.6 ? 'bisexual' : 'homosexual';
      const loc = newLocation(r);
      const originFamily = generateOriginFamily(r, loc);
      const birthMonth = 1 + Math.floor(r.next() * 12);

      const st = {
        version: 18,
        seed,
        rngState: 0,
        age: 0,
        age_months: 0,
        alive: true,
        name,
        morality: abilities.morality,
        libido_tier: libidoTier,
        identity: { name, sexual_orientation: orientationType },
        traits,
        abilities,
        states,
        economy,
        location: loc,
        career: { employment_status: 'preschool', occupation_id: null },
        family: { relationship_status: 'single', partner_id: null, marital_status: 'never_married', spouse_id: null, children_ids: [] },
        originFamily,
        birth_month: birthMonth,
        current_month: birthMonth,
        experience: { has_sexual_experience: false },
        occupation: '未就学',
        relationships: 0,
        orientation: {
          men: orientationType === 'heterosexual' ? 0.9 : orientationType === 'bisexual' ? 0.6 : 0.1,
          women: orientationType === 'homosexual' ? 0.9 : orientationType === 'bisexual' ? 0.6 : 0.1,
          other: 0.1
        },
        sexuality: makeSexuality(r),
        bonds: [],
        nextBondId: 1,
        flags: { menarcheAge: 11 + Math.floor(r.next() * 6), menopauseAge: 46 + Math.floor(r.next() * 10) },
        seen: {},
        pending: null,
        history: [],
        yearEvents: [],
        chains: [],
        showImpactInHistory: false,
        finished: false
      };

      syncDisplay(st);
      st.rngState = r.state();
      return st;
    }

    function log(message, diary = null, impact = null, meta = null) {
      const m = s.current_month || (s.age === 0 ? 1 : 4);
      const dateText = `${s.age}歳 ${m}月（${getSeasonName(m)}）`;
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
      if (after.bonds?.length > before.bonds?.length) changes.push(`新しい出会い ${after.bonds.length - before.bonds.length}人`);
      const statuses = after.bonds?.filter(b => before.bonds?.some(a => a.id === b.id && a.status !== b.status)).map(b => `${b.name}：${({ partner: '交際開始', former: '交際終了', close: '親しい人になった' })[b.status] || '関係が変化'}`) || [];
      return [...changes, ...statuses].join(' / ') || '目立った数値の変化はなかった';
    }
    function snapshot() {
      return {
        occupation: s.occupation,
        display: { ...(s.display || {}) },
        economy: { ...(s.economy || {}) },
        health: s.health, happiness: s.happiness, knowledge: s.knowledge, social: s.social, stress: s.stress, money: s.money,
        bonds: s.bonds.map(b => ({ id: b.id, name: b.name, status: b.status }))
      };
    }

    function getChoiceLabel(c) {
      if (!c) return '';
      if (typeof c === 'string') return c;
      return c.label || c[0] || '';
    }
    function getChoiceEffect(c) {
      if (!c) return {};
      if (c[1] && typeof c[1] === 'object') return c[1];
      if (c.effects && typeof c.effects === 'object' && !Array.isArray(c.effects)) return c.effects;
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
        e.choices = e.femaleVariant.choices || e.choices;
        e.diary = e.femaleVariant.diary || e.diary;
        e.variantDiary = e.femaleVariant.diary || e.variantDiary;
        if (e.femaleVariant.sexualEffects) e.sexualEffects = e.femaleVariant.sexualEffects;
      } else if (!isFemale && e.maleVariant) {
        e.title = e.maleVariant.title || e.title;
        e.text = e.maleVariant.text || e.text;
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
        if (e.choices) {
          e.choices = e.choices.map(c => Array.isArray(c) ? [injectPartnerName(c[0], partner), c[1]] : { ...c, label: injectPartnerName(c.label || '', partner) });
        }
        if (e.diary) {
          e.diary = e.diary.map(d => injectPartnerName(d, partner));
        }
        if (e.variantDiary) {
          e.variantDiary = e.variantDiary.map(d => injectPartnerName(d, partner));
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
    function recordMilestone(key, text, diary = null, month = null) {
      if (s.flags['milestone_' + key]) return;
      s.flags['milestone_' + key] = true;
      const prevM = s.current_month;
      if (month != null) s.current_month = month;
      log(text, ageDiary(diary));
      if (month != null) s.current_month = prevM;
    }
    function lifeMilestones() {
      const a = s.age;
      // 3歳：幼稚園・保育園（4月）
      if (a === 3) recordMilestone('preschool', '幼稚園・保育園などに通う年頃になった。', null, 4);

      // 6歳：小学校入学（4月）
      if (a === 6) {
        s.occupation = '学生';
        recordMilestone('elementary', '小学校に入学した。ピカピカのランドセルを背負い、桜舞う通学路を歩いた。', '新しい教室、新しい友達。少し緊張したけれど、楽しみでもある。', 4);
      }

      // 12歳：小学校卒業（3月）と 中学校入学（4月）
      if (a === 12) {
        recordMilestone('elem_grad', '小学校を卒業した。慣れ親しんだ校舎と友達に別れを告げ、ランドセルを下ろした。', '6年間通った小学校とお別れ。友達とアルバムにメッセージを書き合って別れを惜しんだ。', 3);
        recordMilestone('middle_entry', '中学校に入学した。少し大きめの新しい制服に袖を通し、門をくぐった。', '制服を着ると、急にお姉さんになった気分。これからどんな毎日になるのだろう。', 4);
      }

      // 15歳：中学校卒業（3月）と 高校入学（4月）
      if (a === 15) {
        recordMilestone('middle_grad', '中学校を卒業した。義務教育を終え、それぞれ別の道へ進む仲間たちと記念写真を撮った。', 'あっという間の3年間だった。仲良くなったみんなと離れるのは寂しい。', 3);
        recordMilestone('high_entry', '高校に入学した。憧れの高校生活が始まり、新しい出会いに胸を高鳴らせた。', '少し大人に近づいた気がする。自分の好きなことを見つけたい。', 4);
      }

      // 18歳：高校卒業（3月）と 進学／就職／浪人（4月）
      if (a === 18) {
        recordMilestone('high_grad', '高校を卒業した。制服を着る日々が終わり、かけがえのない青春に別れを告げた。', '制服を着る日々が終わった。まだ実感はないけれど、人生の節目だと思う。', 3);
        if (s.occupation === '学生' && !s.flags.university && !s.flags.employed) {
          const know = s.abilities?.knowledge ?? s.knowledge ?? 0;
          const cash = s.money ?? 0;
          // 現役合格・大学入学（学力40以上かつ経済的困窮なし）
          if (know >= 40 && cash >= -2 && !s.flags.prevent_university) {
            s.flags.university = true;
            s.flags.university_entry_age = 18;
            s.occupation = '学生';
            recordMilestone('university_entry', '大学に入学した。キャンパスに桜が舞い、自由で刺激的な学問と学生生活が始まった。', '知らないことばかりで刺激的。自分の世界が広がりそう。', 4);
          } else if (know >= 32 && !s.flags.prevent_university && rng.next() < 0.65) {
            // もう少しで届きそうな場合：浪人して再挑戦を選択
            s.flags.ronin = true;
            s.occupation = '浪人生';
            recordMilestone('ronin_entry', '志望大学合格を目指し、浪人生活に入った。予備校に通いながら机に向かう日々が始まる。', '悔しさをバネに、もう一年頑張ることを決めた。来年の春こそは。', 4);
          } else if ((s.social ?? 0) >= 25 || (s.independence ?? 0) >= 25) {
            s.flags.employed = true;
            s.occupation = '一般職';
            recordMilestone('firstjob_entry', '社会人として入社式を迎えた。スーツに身を包み、自立への第一歩を踏み出した。', '初めての仕事は緊張する。自分の力で暮らしていけるだろうか。', 4);
          } else {
            s.occupation = '無職';
          }
        }
      }

      // 19歳〜24歳：浪人・再受験・準備期間からの大学入学判定（4月）
      if (a >= 19 && a <= 24 && !s.flags.university && !s.flags.university_graduated) {
        const know = s.abilities?.knowledge ?? s.knowledge ?? 0;
        const cash = s.money ?? 0;
        // 浪人中、または学力があり学びを志した場合
        if (s.flags.ronin || (know >= 40 && cash >= -3 && (s.occupation === '無職' || s.occupation === 'パート・アルバイト' || rng.next() < 0.35))) {
          const passChance = s.flags.ronin ? (know >= 38 ? 0.85 : 0.60) : 0.45;
          if (rng.next() < passChance) {
            s.flags.university = true;
            s.flags.university_entry_age = a;
            s.flags.ronin = false;
            s.occupation = '学生';
            const roninYears = a - 18;
            const roninText = roninYears === 1 ? '一浪を経て' : `${roninYears}年の浪人・準備期間を経て`;
            recordMilestone('university_entry_' + a, `${roninText}、大学に合格し入学した。努力が実を結び、満開の桜の下でキャンパスライフが始まった。`, '机に向かい続けた日々が報われた。苦労した分、大学での学びを大切にしたい。', 4);
          } else if (s.flags.ronin && a >= 20) {
            // 浪人に区切りをつける
            s.flags.ronin = false;
            if ((s.social ?? 0) >= 20 || (s.independence ?? 0) >= 20) {
              s.flags.employed = true;
              s.occupation = '一般職';
              recordMilestone('ronin_giveup_job', '浪人生活に区切りをつけ、就職して社会人としての道を歩み始めた。', '思い描いた通りにはならなかったけれど、ここから新しい一歩を踏み出そう。', 4);
            } else {
              s.occupation = 'パート・アルバイト';
            }
          }
        }
      }

      // 25歳〜64歳：社会人大学・リカレント教育・学び直しでの大学入学（4月）
      if (a >= 25 && a <= 64 && !s.flags.university && !s.flags.university_graduated && s.occupation !== '学生') {
        const know = s.abilities?.knowledge ?? s.knowledge ?? 0;
        const indep = s.states?.self_efficacy ?? s.independence ?? 0;
        if (know >= 50 && indep >= 15 && (s.flags.aspires_higher_education || rng.next() < 0.08)) {
          s.flags.university = true;
          s.flags.university_entry_age = a;
          s.flags.aspires_higher_education = false;
          s.flags.prev_occupation = s.occupation;
          s.occupation = '学生';
          recordMilestone('university_entry_adult_' + a, `${a}歳にして大学（社会人枠・夜間学部）に入学した。これまでの経験を深めるため、再び学問の門をくぐった。`, '大人になってからの学びは、学生時代とは全く違う新鮮さがある。仕事や生活の合間を縫って、学びを深めたい。', 4);
        }
      }

      // 大学卒業（3月）と 就職・復職（4月）：入学から4年目の春に卒業！
      const entryAge = s.flags.university_entry_age || 18;
      if (s.flags.university && a === entryAge + 4) {
        s.flags.university = false;
        s.flags.university_graduated = true;
        const isAdultStudent = entryAge >= 25;
        const gradText = isAdultStudent
          ? '社会人学生としての4年間の学びを修め、大学を卒業した。'
          : (entryAge > 18 ? `${entryAge - 18}年遅れで掴んだ大学生活を駆け抜け、袴を身にまとい誇らしく卒業した。` : '大学を卒業した。袴を身にまとい、学生生活にピリオドを打った。');
        const diaryText = isAdultStudent
          ? '仕事や生活と両立しながらやり遂げた。この経験と知識は一生の財産になると思う。'
          : '学んだことも、出会った人も、これからの私を支えてくれると思う。';
        recordMilestone('unigrad_' + a, gradText, diaryText, 3);

        if (s.occupation === '学生') {
          if (s.flags.prev_occupation && isAdultStudent) {
            s.occupation = s.flags.prev_occupation;
            recordMilestone('graduate_returnjob', '大学での学びを携え、仕事の現場へと復帰した。', '得た知見をこれからの働き方に活かしていきたい。', 4);
          } else {
            s.occupation = '一般職';
            s.flags.employed = true;
            recordMilestone('graduatejob', '学びを終え、本格的に社会人として働き始めた。', 'ここからは新しい生活。少しずつ自分の居場所を作りたい。', 4);
          }
        }
      }

      // 65歳：シニア期節目
      if (a === 65) {
        recordMilestone('senior', '65歳を迎え、これからの暮らし方を考える節目になった。', '振り返れば長い道のりだった。まだやりたいことはある。');
        if (s.occupation === '一般職') s.occupation = '無職';
      }
      if (a === s.flags.menarcheAge) recordMilestone('menarche', '初経を迎え、身体の変化を実感した。', '驚いたし、少し戸惑った。自分の身体について、これから知っていきたい。');
      if (a === s.flags.menopauseAge) recordMilestone('menopause', '月経の終わりに向かう身体の変化を感じるようになった。', '身体の変化に戸惑う日もある。これまでの私も、これからの私も大切にしたい。');
    }

    function balancedChoiceEffect(event, effect) {
      return { ...effect };
    }
    function annualEventLimit(age) {
      let base = age < 6 ? 1 : age < 12 ? 2 : 3;
      return Math.min(3, base);
    }

    function applyCashDelta(person, delta) {
      person.economy ??= { cash: 0, investments: 0, other_assets: 0, debt: 0, monthly_income: 0, monthly_expenses: 100000 };
      person.economy.cash += delta;
      if (person.economy.cash < 0) {
        person.economy.debt += -person.economy.cash;
        person.economy.cash = 0;
      }
    }

    // 仕様書 7.4準拠 効果の型別安全適用と内部パラメータマッピング
    function apply(effect) {
      if (!effect) return;
      for (const [key, value] of Object.entries(effect)) {
        if (key === 'flag') {
          s.flags[value] = true;
        } else if (key === 'relationship') {
          s.relationships = Math.max(0, s.relationships + value);
        } else if (TRAIT_KEYS.includes(key) && s.traits[key]) {
          s.traits[key].current = clamp(s.traits[key].current + value, s.traits[key].min, s.traits[key].max);
        } else if (ABILITY_KEYS.includes(key)) {
          s.abilities[key] = clamp((s.abilities[key] || 0) + value, -100, 100);
          if (key === 'morality') {
            s.morality = s.abilities.morality;
            if (s.traits.risk_tolerance) s.traits.risk_tolerance.current = clamp(s.traits.risk_tolerance.current - value * 2, s.traits.risk_tolerance.min, s.traits.risk_tolerance.max);
          }
        } else if (STATE_LOAD_KEYS.includes(key)) {
          s.states[key] = clamp((s.states[key] || 0) + value, 0, 100);
        } else if (STATE_SIGNED_KEYS.includes(key)) {
          s.states[key] = clamp((s.states[key] || 0) + value, -100, 100);
        } else if (key === 'cash') {
          applyCashDelta(s, value);
        } else if (key === 'debt') {
          s.economy.debt = Math.max(0, (s.economy.debt || 0) + value);
        } else if (key === 'monthly_income') {
          s.economy.monthly_income = Math.max(0, (s.economy.monthly_income || 0) + value);
        } else if (key === 'monthly_expenses') {
          s.economy.monthly_expenses = Math.max(0, (s.economy.monthly_expenses || 0) + value);
        }
        // 既存イベントの旧キーから新内部パラメータへの精密マッピング
        else if (key === 'health') {
          if (value >= 0) s.abilities.healthy_habits = clamp((s.abilities.healthy_habits || 0) + value * 4, -100, 100);
          else {
            s.states.fatigue = clamp((s.states.fatigue || 0) + (-value) * 4, 0, 100);
            s.states.illness_burden = clamp((s.states.illness_burden || 0) + (-value) * 2, 0, 100);
          }
        } else if (key === 'knowledge') {
          s.abilities.knowledge = clamp((s.abilities.knowledge || 0) + value * 5, -100, 100);
          s.abilities.problem_solving = clamp((s.abilities.problem_solving || 0) + value * 2, -100, 100);
        } else if (key === 'stress') {
          s.states.stress = clamp((s.states.stress || 0) + value * 5, 0, 100);
        } else if (key === 'happiness') {
          s.states.life_satisfaction = clamp((s.states.life_satisfaction || 0) + value * 5, -100, 100);
          s.states.achievement = clamp((s.states.achievement || 0) + value * 2, -100, 100);
        } else if (key === 'social') {
          s.abilities.communication_skill = clamp((s.abilities.communication_skill || 0) + value * 4, -100, 100);
          s.states.social_confidence = clamp((s.states.social_confidence || 0) + value * 3, -100, 100);
          s.states.social_anxiety = clamp((s.states.social_anxiety || 0) - value * 2, 0, 100);
        } else if (key === 'money') {
          applyCashDelta(s, value * 35000);
          if (s.flags?.employed && s.economy) {
            s.economy.monthly_income = Math.max(0, (s.economy.monthly_income || 0) + value * 2000);
          }
        } else if (key === 'independence') {
          s.states.self_efficacy = clamp((s.states.self_efficacy || 0) + value * 4, -100, 100);
          if (s.traits.risk_tolerance) s.traits.risk_tolerance.current = clamp(s.traits.risk_tolerance.current + value * 2, s.traits.risk_tolerance.min, s.traits.risk_tolerance.max);
        } else if (key === 'selfUnderstanding') {
          s.states.self_efficacy = clamp((s.states.self_efficacy || 0) + value * 3, -100, 100);
          if (s.traits.cognitive_potential) s.traits.cognitive_potential.current = clamp(s.traits.cognitive_potential.current + value, s.traits.cognitive_potential.min, s.traits.cognitive_potential.max);
        } else if (key === 'aesthetics') {
          s.abilities.grooming = clamp((s.abilities.grooming || 0) + value * 4, -100, 100);
          s.abilities.interpersonal_charm = clamp((s.abilities.interpersonal_charm || 0) + value * 3, -100, 100);
        } else if (key === 'morality') {
          s.abilities.morality = clamp((s.abilities.morality || 0) + value * 4, -100, 100);
          s.morality = s.abilities.morality;
          if (s.traits.risk_tolerance) s.traits.risk_tolerance.current = clamp(s.traits.risk_tolerance.current - value * 2, s.traits.risk_tolerance.min, s.traits.risk_tolerance.max);
        } else if (key === 'trust') {
          s.states.relationship_satisfaction = clamp((s.states.relationship_satisfaction || 0) + value * 4, -100, 100);
          s.states.social_confidence = clamp((s.states.social_confidence || 0) + value * 2, -100, 100);
        } else if (key === 'secrecy') {
          s.states.social_anxiety = clamp((s.states.social_anxiety || 0) + value * 3, 0, 100);
          s.states.stress = clamp((s.states.stress || 0) + value * 2, 0, 100);
        }
      }
      syncDisplay(s);
    }

    // ユーザー要望：すべてのイベントの選択肢データ(4〜6個)から、その時点のパラメータや状態を踏まえた2〜3の選択肢を動的に抽出して表示
    function getDynamicChoices(event, st = s) {
      if (!event || !event.choices || event.choices.length === 0) return [];
      const choices = event.choices;
      if (choices.length <= 3) {
        return choices.map((c, i) => ({ choice: c, originalIndex: i }));
      }

      const snap = makeSnapshot(st);
      const bindings = resolveActors(event, snap, rng) || {};

      // 1. requirements の評価（満たさないものは除外）
      const eligible = [];
      choices.forEach((c, idx) => {
        if (!c.requirements || evaluateCondition(c.requirements, snap, bindings)) {
          eligible.push({ choice: c, originalIndex: idx });
        }
      });

      if (eligible.length <= 3) {
        return eligible.length >= 2 ? eligible : choices.slice(0, 3).map((c, i) => ({ choice: c, originalIndex: i }));
      }

      // 2. 主人公のパラメータ・状態・性格に応じた親和性スコアリング
      const scored = eligible.map(item => {
        const c = item.choice;
        const eff = getChoiceEffect(c);
        const label = getChoiceLabel(c);
        let score = 5.0;

        // 知識・分析志向
        const know = st.abilities?.knowledge ?? st.knowledge ?? 0;
        if (eff.knowledge && eff.knowledge > 0) score += (know > 20 ? 3.5 : 1.0);
        if (/勉強|知識|調べる|分析|資格|書籍|観察/.test(label)) score += (know > 15 ? 3.0 : 0);

        // 社交・相談志向
        const soc = st.abilities?.communication_skill ?? st.social ?? 0;
        if (eff.social && eff.social > 0) score += (soc > 20 ? 3.5 : 1.0);
        if (/相談|仲間|友達|先輩|打ち明ける|分かち合|甘えて/.test(label)) score += (soc > 10 ? 3.0 : -1.0);

        // 自立・挑戦・独立心
        const indep = st.states?.self_efficacy ?? st.independence ?? 0;
        if (eff.independence && eff.independence > 0) score += (indep > 20 ? 3.5 : 1.0);
        if (/独立|自分の力|挑戦|切り開く|腹をくくる|直感を信じて/.test(label)) score += (indep > 15 ? 3.0 : 0);

        // ストレス・疲労時の休息・回避志向
        const stress = st.states?.stress ?? st.stress ?? 0;
        const fatigue = st.states?.fatigue ?? 0;
        if (stress > 20 || fatigue > 25) {
          if (eff.stress && eff.stress < 0) score += 4.5;
          if (/休む|無理をせず|ペースを守る|一歩引く|自然体|時期を待つ/.test(label)) score += 4.0;
          if (eff.stress && eff.stress > 2) score -= 3.5;
        }

        // 性欲・背徳・快楽
        const libido = (st.traits?.baseline_libido?.current || 0) + (st.states?.current_libido || 0);
        const morality = st.abilities?.morality ?? st.morality ?? 0;
        if (eff.desire && eff.desire > 0) score += (libido > 30 ? 4.5 : 1.0);
        if (/快感|身を委ねる|疼き|熱|抱かれ|交わ|秘密の熱/.test(label)) {
          if (libido > 35) score += 5.0;
          if (morality < 0) score += 3.5;
        }
        if (/理性|自制|断る|境界線|冷静/.test(label)) {
          if (morality > 15) score += 4.0;
          if (libido > 60) score -= 2.5;
        }

        // 経済状況
        const cash = st.economy?.cash ?? st.money ?? 0;
        if (eff.money && eff.money < 0 && cash < 0) score -= 3.5;
        if (eff.money && eff.money > 0 && cash < 10) score += 3.0;

        // 微かなゆらぎ
        score += (rng.next() - 0.5) * 2.2;

        return { ...item, score, label, eff };
      });

      scored.sort((a, b) => b.score - a.score);

      // 3. 多様性の確保（2〜3個選出）
      const selected = [scored[0]];
      const remaining = scored.slice(1);
      let secondPick = remaining[0];
      for (const cand of remaining) {
        const candIsRest = (cand.eff.stress < 0 || /休む|引く|自然体|断る|自制/.test(cand.label));
        const firstIsRest = (selected[0].eff.stress < 0 || /休む|引く|自然体|断る|自制/.test(selected[0].label));
        if (candIsRest !== firstIsRest) {
          secondPick = cand;
          break;
        }
      }
      selected.push(secondPick);

      // 3番手を加える（約75%で3個、25%で2個表示）
      if (remaining.length > 1 && rng.next() < 0.75) {
        const thirdCandidates = remaining.filter(c => c !== secondPick);
        if (thirdCandidates.length > 0) {
          selected.push(thirdCandidates[0]);
        }
      }

      selected.sort((a, b) => a.originalIndex - b.originalIndex);
      return selected;
    }

    // 仕様書 7.3 Softmax 効用モデルによる自動選択アルゴリズム
    function pickAutomaticChoice(event, person, T = 1.0) {
      const choices = event.choices;
      if (!choices || choices.length === 0) return 0;
      if (choices.length === 1) return 0;

      // 4〜6個ある場合は、まずキャラクター状態を踏まえた2〜3個の候補を抽出
      const dyn = getDynamicChoices(event, person);
      const candidateIndices = dyn.length > 0 ? dyn.map(d => d.originalIndex) : choices.map((_, i) => i);
      if (candidateIndices.length === 1) return candidateIndices[0];

      const snap = makeSnapshot(person);
      const utilities = candidateIndices.map(origIdx => {
        const c = choices[origIdx];
        const uDef = c.utility || c[1]?.utility;
        if (uDef) {
          let u = uDef.base ?? 0;
          for (const term of (uDef.terms || [])) {
            const val = resolvePath(term.path, snap) || 0;
            u += (term.coefficient || 0) * val;
          }
          for (const ct of (uDef.conditional_terms || [])) {
            if (evaluateCondition(ct.when, snap)) {
              u += (ct.bonus ?? 0);
            }
          }
          return u;
        }

        const eff = c.effects || (Array.isArray(c) ? c[1] : {}) || {};
        let u = 0.5;
        const t = person.traits || {};
        const st = person.states || {};

        if (eff.happiness) u += eff.happiness * 0.15;
        if (eff.stress) u -= eff.stress * 0.12;
        if (eff.knowledge) u += eff.knowledge * (0.05 + (t.learning_drive?.current || 0) * 0.002);
        if (eff.social) u += eff.social * (0.05 + (t.extraversion?.current || 0) * 0.003 - (st.social_anxiety || 0) * 0.002);
        if (eff.money) u += eff.money * 0.08;

        const sexEff = { ...(event.sexualEffects?.[origIdx] || {}), ...(eff.sexualEffects || {}) };
        if (sexEff.desire) {
          const libido = (t.baseline_libido?.current || 0) + (st.current_libido || 0);
          u += sexEff.desire * (0.01 + libido * 0.002);
        }
        if (eff.morality && eff.morality < 0) {
          u += (t.risk_tolerance?.current || 0) * 0.003;
        }
        return u;
      });

      const uMax = Math.max(...utilities);
      const expValues = utilities.map(u => Math.exp((u - uMax) / T));
      const sumExp = expValues.reduce((a, b) => a + b, 0);
      let rVal = rng.next() * sumExp;
      for (let i = 0; i < expValues.length; i++) {
        rVal -= expValues[i];
        if (rVal <= 0) return candidateIndices[i];
      }
      return candidateIndices[0];
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
    function isEventPhaseAllowed(event, st = s) {
      if (!event.phase || event.phase === 'any') return true;
      if (event.phase === 'virgin' && hasHadSex(st)) return false;
      if (event.phase === 'awakening' && !hasHadSex(st)) return false;
      if (event.phase === 'active' && !hasHadSex(st)) return false;
      return true;
    }
    function encounterEvent(event) {
      return event.context === 'meeting' || /meeting|encounter|confessed_to|street_approach|date|出会い|告白/.test(event.id)
        && !needsPartner(event);
    }
    function isEventEligible(e, st = s) {
      if (!e || e.enabled === false) return false;
      const snap = makeSnapshot(st);

      // 仕様書 10章：成人向けイベント(adult)は関係者全員18歳以上(age_months >= 216)
      if (e.content_rating === 'adult' && snap.person.age_months < 216) {
        return false;
      }

      // 仕様書 7.3章：再発制御 (once_per_life, max_occurrences, cooldown_months)
      if (e.availability) {
        if (e.availability.once_per_life && (snap.history.event_counts[e.id] || 0) >= 1) return false;
        if (e.availability.max_occurrences && (snap.history.event_counts[e.id] || 0) >= e.availability.max_occurrences) return false;
      } else if (e.once && st.seen[e.id]) {
        return false;
      }

      // 仕様書 6章：登場人物の束縛（必須ロールが不在なら不適格）
      const bindings = resolveActors(e, snap, rng);
      if (bindings === null) return false;

      // 仕様書 5章：条件DSL判定 (conditions)
      if (e.conditions && !evaluateCondition(e.conditions, snap, bindings)) return false;

      // 仕様書 8章：選択肢が0個なら不適格（ナラティブイベントは例外として適格）
      if (!e.is_narrative) {
        const available = listAvailableChoices(e, snap, bindings);
        if (available.length === 0) return false;
      }

      // 既存プロパティ・ルールとの後方互換・一貫性保持
      if (st.age < e.min || st.age > e.max) return false;
      if (!isEventPhaseAllowed(e, st)) return false;
      if (!isGenderAllowed(e, st)) return false;
      if (e.requires && !e.requires(st)) return false;

      // 複数交際制限（交際相手・配偶者が2人以上いない場合は絶対に発生しない）
      if (needsMultiplePartners(e) && !hasMultiplePartners(st)) return false;

      // 既婚・配偶者制限（配偶者がいない場合は絶対に発生しない）
      if (needsSpouse(e) && !hasSpouse(st)) return false;

      // パートナー制限（パートナー・配偶者がいない場合は絶対に発生しない）
      if (needsPartner(e) && !hasPartner(st)) return false;

      // パートナー性別の制限
      if (e.id === 'partner_intimacy_female' && !st.bonds?.some(b => (b.status === 'partner' || b.status === 'spouse') && b.gender === 'female')) return false;
      if (e.id === 'partner_intimacy_male' && !st.bonds?.some(b => (b.status === 'partner' || b.status === 'spouse') && b.gender === 'male')) return false;

      // 既婚・未婚の整合性チェック（結婚後に恋人時代の初夜やプロポーズが発生するのを完全防止）
      if (hasSpouse(st)) {
        if (/初夜|初めて身体を重ねる|初めて唇を重ねる|まだ肌を許して|プロポーズ|婚約|告白|合コン|マッチングアプリ/.test((e.title || '') + ' ' + (e.id || '')) &&
          !/ウェディング|結婚式|新婚|wedding|夫婦|marital/.test((e.title || '') + ' ' + (e.id || ''))) {
          return false;
        }
        if (e.id === 'adult_marriage_proposal' || e.id === 'partner_first_intimacy_experienced' || e.id === 'first_intimacy_milestone' || e.id === 'first_kiss_milestone' || e.id === 'partner_intimacy_hesitation') {
          return false;
        }
      }

      // 初夜・初めて身体を重ねるイベントの厳格制御（既婚者・経験済み・対象パートナーと性交済みの場合は除外）
      if (e.id === 'partner_first_intimacy_experienced' || e.id === 'first_intimacy_milestone' || (/初夜|初めて身体を重ねる/.test(e.title || '') && !/ウェディング|結婚式|新婚|wedding/.test(e.title || ''))) {
        if (hasSpouse(st)) return false;
        if (st.flags?.had_first_intimacy_with_partner) return false;
        if (hasHadSexWithCurrentPartner(st)) return false;
        if (e.id === 'first_intimacy_milestone' && hasHadSex(st)) return false;
        if (e.id === 'partner_first_intimacy_experienced' && !hasHadSex(st)) return false;
      }

      // 初キスイベントの厳格制御
      if (e.id === 'first_kiss_milestone') {
        if (hasSpouse(st)) return false;
        if (st.flags?.firstKiss || st.flags?.had_first_kiss_with_partner) return false;
      }

      // 学生時代の秘め事イベントは学生身分（isStudent）でなければ発生しない
      if (e.id.startsWith('student_partner_') && !isStudent(st)) return false;

      // 重大イベントの前提フラグチェック（前段イベントを経由していない場合は発生しない）
      if (e.requires_flag && !st.flags?.[e.requires_flag]) return false;

      // 飲酒制限（未成年禁止、allowUnderageのみ例外）
      if (e.alcohol && st.age < 20 && !e.allowUnderage) return false;

      // 公衆性的行為制限（モラル <= 0 のみ発生）
      if (e.publicSex) {
        const currentMorality = st.abilities?.morality ?? st.morality ?? 0;
        if (currentMorality > 0) return false;
      }

      return true;
    }

    // === 季節と月（年の途中の時間経過）ユーティリティ ===
    function getSeasonName(month) {
      if (month >= 3 && month <= 5) return '春';
      if (month >= 6 && month <= 8) return '夏';
      if (month >= 9 && month <= 11) return '秋';
      return '冬';
    }

    function assignEventMonth(e, index = 0, total = 1) {
      if (!e) return Math.min(12, Math.max(1, 1 + Math.floor(rng.next() * 12)));
      const t = (e.title || '') + ' ' + (e.text || '') + ' ' + (e.id || '');

      // 季節キーワードの判定
      if (/正月|初詣|元旦|成人式|新年/.test(t)) return 1;
      if (/節分|バレンタイン|チョコ|寒波|雪/.test(t)) return 2;
      if (/卒業|ひな祭り|春休み|早春/.test(t)) return 3;
      if (/入学|新学期|桜|身体測定|花見|春/.test(t)) return 4;
      if (/五月|ゴールデンウィーク|新緑|母の日|初夏/.test(t)) return 5;
      if (/梅雨|プール|雨|水着|父の日/.test(t)) return 6;
      if (/七夕|夏休み|海|キャンプ|盛夏|日焼け/.test(t)) return 7;
      if (/お盆|花火|夏祭り|猛暑|宿題|晩夏/.test(t)) return 8;
      if (/初秋|秋雨|月見|台風/.test(t)) return 9;
      if (/文化祭|運動会|ハロウィン|読書|秋|紅葉/.test(t)) return 10;
      if (/七五三|晩秋|木枯らし|勤労感謝/.test(t)) return 11;
      if (/クリスマス|年末|大掃除|冬休み|初冬|忘年会/.test(t)) return 12;

      // キーワードがない場合：年間を通してバランスよく分散
      if (total <= 1) {
        return 4 + Math.floor(rng.next() * 6); // 4〜9月の中頃
      }
      const span = Math.floor(10 / total);
      const base = 2 + index * span;
      const jitter = Math.floor(rng.next() * 2);
      return Math.min(12, Math.max(1, base + jitter));
    }
    function pickYearEvents() {
      s.chains ??= [];
      const triggered = [];
      const remainingChains = [];
      for (const c of s.chains) {
        if (c.targetAge <= s.age) {
          const e = eventDefs.find(x => x.id === c.eventId);
          if (e && isEventEligible(e, s)) {
            if (chance(c.prob ?? 1.0)) triggered.push(c.eventId);
          }
        } else {
          remainingChains.push(c);
        }
      }
      s.chains = remainingChains;
      // 固定マイルストーンイベント（is_fixed: true かつ適格な場合、確実に発生）
      const fixedEvents = eventDefs.filter(e => e.is_fixed && isEventEligible(e, s));
      for (const fe of fixedEvents) {
        if (!triggered.includes(fe.id)) triggered.push(fe.id);
      }
      // 一年に複数の出来事が起こり得る。抽選は年初に一度だけ行う。
      // 【ユーザー要望】重大イベント(major)は日常イベントからのチェーン・前段を経由してのみ発生するため、通常抽選候補からは除外！
      const candidates = eventDefs.filter(e => !e.is_fixed && e.classification !== 'major' && !e.is_major && isEventEligible(e, s) &&
        !triggered.includes(e.id) &&
        rng.next() < eventProbability(e) * (s.age < 6 ? .30 : s.age < 10 ? .58 : s.age < 15 ? .82 : s.age <= 35 ? 1.35 : s.age <= 49 ? 1.05 : s.age <= 64 ? .85 : s.age <= 79 ? .7 : .55));
      // 候補をシャッフル
      for (let i = candidates.length - 1; i > 0; i--) {
        const j = Math.floor(rng.next() * (i + 1));
        [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
      }
      const limit = Math.max(annualEventLimit(s.age), triggered.length);
      const combined = [...triggered, ...candidates.map(e => e.id)];
      const selectedIds = combined.slice(0, limit);

      const mappedEvents = selectedIds.map((id, idx) => {
        const evObj = eventDefs.find(x => x.id === id);
        const month = assignEventMonth(evObj, idx, selectedIds.length);
        return { id, month };
      });

      // 月の昇順（春→夏→秋→冬）にソート
      mappedEvents.sort((a, b) => a.month - b.month);

      // 先行伏線イベントの自動挿入（ストーリーの連続性）
      // 例: 職場の事情で働き方を見直す必要(career_unemployment)の数か月前に人員整理のうわさ(career_downsizing_rumor)
      const unempIdx = mappedEvents.findIndex(m => m.id === 'career_unemployment');
      if (unempIdx !== -1 && !s.seen['career_downsizing_rumor']) {
        const targetM = mappedEvents[unempIdx].month;
        const rumorMonth = Math.max(1, targetM - 3);
        mappedEvents.push({ id: 'career_downsizing_rumor', month: rumorMonth });
      }

      // 月の昇順（春→夏→秋→冬）に再ソート
      mappedEvents.sort((a, b) => a.month - b.month);

      // ストーリー連鎖ナラティブの自動挿入
      // 1. パートナーとの情熱的な逢瀬が連続している場合（親密さの深まり・絆）
      if (s.flags?.partner_intimacy_streak >= 3 && !s.seen['story_partner_deep_bond_aftermath']) {
        mappedEvents.push({ id: 'story_partner_deep_bond_aftermath', month: Math.min(12, (s.current_month || 6) + 2) });
      }
      // 2. 焦らし・寸止めが続き、相手の欲求や背徳感が高まっている場合
      if (s.flags?.partner_frustrated >= 2 && !s.seen['story_partner_frustration_tease_aftermath']) {
        mappedEvents.push({ id: 'story_partner_frustration_tease_aftermath', month: Math.min(12, (s.current_month || 6) + 1) });
      }
      // 3. 拒絶・すれ違いが続いた場合の心の揺れ
      if (s.flags?.partner_distance >= 2 && !s.seen['story_partner_distance_reconcile_hint']) {
        mappedEvents.push({ id: 'story_partner_distance_reconcile_hint', month: Math.min(12, (s.current_month || 6) + 2) });
      }

      // 月の昇順（春→夏→秋→冬）に再ソート
      mappedEvents.sort((a, b) => a.month - b.month);

      // 同月なら少しずらす
      for (let i = 1; i < mappedEvents.length; i++) {
        if (mappedEvents[i].month <= mappedEvents[i - 1].month && mappedEvents[i - 1].month < 12) {
          mappedEvents[i].month = mappedEvents[i - 1].month + 1;
        }
      }

      return mappedEvents;
    }
    function processYearEvents() {
      while (s.yearEvents.length && !s.pending && !s.finished) {
        const item = s.yearEvents.shift();
        const id = typeof item === 'object' ? item.id : item;
        const month = typeof item === 'object' ? item.month : (4 + Math.floor(rng.next() * 6));
        const e = eventDefs.find(x => x.id === id);
        if (!e || !isEventEligible(e, s)) continue;

        s.pending = e.id;
        s.current_month = month;
        s.age_months = s.age * 12 + (month - 1);
        s.activeVariantIndex = Math.floor(rng.next() * 20);

        const isNarrative = e.is_narrative || !e.choices || e.choices.length === 0;
        if (document.getElementById('mode').value === 'auto') {
          if (isNarrative) {
            settleNarrative(e, false);
            continue;
          } else {
            const cur = getEventCurrent(e);
            settle(e, pickAutomaticChoice(cur, s), false);
          }
        } else break;
      }
      s.rngState = rng.state();
      return !s.pending;
    }
    function chance(p) { return rng.next() < Math.max(0, Math.min(1, p)) }
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
    const PARTNER_NAMES = { female: FEMALE_NAMES, male: ['直樹', '陽介', '大輔', '健太', '翔太', '拓海', '悠斗', '蓮', '航平', '颯太', '雄大', '和也', '誠', '亮介', '智也', '陸', '駿', '圭介', '修平', '祐樹'] };
    const BOND_ROLES = ['friend', 'colleague', 'teacher', 'neighbor', 'stranger', 'friends_sibling', 'partner_sibling', 'parent_friend', 'childs_teacher', 'bar_encounter'];
    const BOND_ROLE_LABELS = { friend: '友人', classmate: '同級生・クラスメイト', childhood_friend: '幼馴染', club_mate: '部活・趣味の仲間', cram_school_friend: '塾の勉強仲間', senior: '先輩', junior: '後輩', mentor: '恩師・講師', colleague: '同僚', teacher: '学校の先生', neighbor: '隣人', stranger: '街で出会った人', friends_sibling: '友達のきょうだい', partner_sibling: 'パートナーのきょうだい', parent_friend: '子供の友達の親', childs_teacher: '子供の担任の先生', bar_encounter: 'お店で居合わせた人' };
    function getPrimaryPartner(st = s) { return st?.bonds?.find(b => b.status === 'spouse') || st?.bonds?.find(b => b.status === 'partner') || null; }
    function hasFemalePartner(st = s) { const p = getPrimaryPartner(st); return !!(p && p.gender === 'female'); }
    function hasMalePartner(st = s) { const p = getPrimaryPartner(st); return !!(p && p.gender === 'male'); }
    function prefersWomen(st = s) { const w = st?.orientation?.women ?? 0; const m = st?.orientation?.men ?? 0; return w >= 0.45 || w >= m; }
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
          r = ['friend', 'classmate', 'childhood_friend', 'cram_school_friend', 'teacher'][Math.floor(rng.next() * 5)];
        } else if (s.age < 18) {
          r = ['friend', 'classmate', 'club_mate', 'senior', 'junior', 'teacher', 'stranger'][Math.floor(rng.next() * 7)];
        } else if (s.flags.hasChildren || (s.age >= 30 && rng.next() < 0.4)) {
          r = ['parent_friend', 'childs_teacher', 'colleague', 'neighbor', 'bar_encounter'][Math.floor(rng.next() * 5)];
        } else {
          r = ['colleague', 'friend', 'bar_encounter', 'neighbor', 'club_mate', 'stranger'][Math.floor(rng.next() * 6)];
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
        ...customProps
      };
      if (!b.name) assignBondName(b, s);
      normalizeBond(b, s.seed);
      return b;
    }
    function startRelationship(b) { b.status = 'partner'; b.consent = true; recordExperience('relationship', b.name + 'と互いの意思を確認し交際を始めた', b.id); log(b.name + 'との交際が始まった。', 'この人と一緒に過ごすことを選んだ。これからどんな関係になるのだろう。') }
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
          old.status = 'former'; old.consent = false;
          if (old.status === 'spouse') s.flags.married = false;
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
      if (s.age < 18) return; normalizeSexuality(s); const x = s.sexuality; const active = s.bonds.filter(b => b.status !== 'former' && b.status !== 'widowed'); if (active.length < 7 && chance(.12 + (s.social / 900))) { const b = createBond(); s.bonds.push(b); recordExperience('meeting', b.name + 'と知り合った', b.id); log('新たな出会いがあった。'); }
      for (const b of active) {
        if (s.pending) break; if (b.lastProgressAge === s.age) continue; b.lastProgressAge = s.age; if (b.status === 'acquaintance' && chance(.36)) { b.affection = clamp(b.affection + 4 + rng.next() * 11); b.trust = clamp(b.trust + 3); if (b.affection >= 44) { b.status = 'close'; recordExperience('friendship', b.name + 'と親しくなった', b.id); log(b.name + 'との交流が深まった。') } } else if (b.status === 'close' && chance(.20 + x.initiative / 500)) { if (chance(approachProbability(b))) { b.affection = clamp(b.affection + 12); if (b.affection >= 56 && chance(b.romanticInterest / 115)) { proposeRelationship(b) } } else { b.trust = clamp(b.trust - 2) } } else if (b.status === 'partner') {
          b.trust = clamp(b.trust + (chance(.65) ? 2 : -3)); b.affection = clamp(b.affection + (chance(.58) ? 2 : -3));
          if (chance(.16)) { recordExperience('communication', b.name + 'と関係への希望を話し合った', b.id, { mutual: true }); }
          if (!isVirgin(s) && chance(.11 + x.intimacyNeed / 1200)) { resolveSharedIntimacy(b) }
          if (b.trust < 18 || b.affection < 18 || chance(.018)) { b.status = 'former'; b.consent = false; recordExperience('breakup', b.name + 'との交際が終わった', b.id); log(b.name + 'との関係に区切りをつけた。') }
        } else if (b.status === 'spouse') {
          b.trust = clamp(b.trust + (chance(.62) ? 2 : -2)); b.affection = clamp(b.affection + (chance(.58) ? 2 : -2));
          if (chance(.15)) { recordExperience('communication', b.name + 'と夫婦のこれからの生活を話し合った', b.id, { mutual: true }); }
          if (!isVirgin(s) && chance(.10 + x.intimacyNeed / 1300)) { resolveSharedIntimacy(b) }
          if (b.trust < 15 && b.affection < 15 && chance(.04)) {
            b.status = 'former'; b.consent = false; s.flags.married = false; s.flags.divorced = true;
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
    function handleSocialOutcome(e, index, choiceEff = {}, choice = null) {
      // 選択肢効果 (choiceEff) や choice に指定された明示的な人間関係定義
      const bondDef = choiceEff.bond || choiceEff.relationship;
      const meetingDef = choiceEff.meeting;
      let outcome = e.outcomes?.[index];
      if (!outcome && typeof choice?.outcome === 'string') outcome = choice.outcome;
      if (typeof outcome !== 'string') outcome = null;

      if (bondDef || meetingDef) {
        if (s.bonds.length >= 30) return;
        const role = typeof bondDef === 'object' ? bondDef.role : (typeof meetingDef === 'string' ? meetingDef : null);
        const gender = typeof bondDef === 'object' ? bondDef.gender : null;
        const status = typeof bondDef === 'object' ? (bondDef.status || 'acquaintance') : 'acquaintance';
        const b = createBond(role, gender, { status, ...(typeof bondDef === 'object' ? bondDef : {}) });
        s.bonds.push(b);
        s.relationships = s.bonds.length;
        const roleLabel = BOND_ROLE_LABELS[b.role] || '知人';
        recordExperience('meeting', b.name + '（' + roleLabel + '）と知り合った', b.id);
        log(`${b.name}（${roleLabel}）との新たな出会いがあり、人間関係に加わった。`);
        return;
      }

      if (!outcome || outcome === 'none') return;
      const x = s.sexuality;
      let bond = s.bonds.find(b => b.status === 'spouse') || s.bonds.find(b => b.status === 'partner') || s.bonds.find(b => b.status === 'close') || s.bonds.find(b => b.status === 'acquaintance');
      if (outcome.startsWith('meeting')) {
        if (s.bonds.length >= 30) return;
        const role = outcome.startsWith('meeting_') ? outcome.replace('meeting_', '') : null;
        const b = createBond(role);
        s.bonds.push(b);
        s.relationships = s.bonds.length;
        const roleLabel = BOND_ROLE_LABELS[b.role] || '知人';
        recordExperience('meeting', b.name + '（' + roleLabel + '）と知り合った', b.id);
        log(`${b.name}（${roleLabel}）との新たな出会いがあり、人間関係に加わった。`);
        if (index === 0 && e.id.startsWith('encounter_')) {
          const encounterIntimacyDescs = {
            encounter_stranger_adult: b.name + '（知らない大人）の車内で、手慣れた指と肉欲に翻弄され素肌を奪われた',
            encounter_friends_sibling: '友達の家の隣室で、' + b.name + 'に口を塞がれ下着の中に手を差し入れられた',
            encounter_teacher: '施錠された準備室の教卓で、' + b.name + '（先生）にスカートを捲り上げられ肉体を貫かれた',
            encounter_colleague: '深夜のオフィス休憩室で、' + b.name + '（同僚）に抱きすくめられ激しく身体を重ねた',
            encounter_partner_sibling: 'パートナーの留守中、' + b.name + '（パートナーのきょうだい）と背徳の情交に溺れた',
            encounter_parent_friend: '子供の行事の後、' + b.name + 'と二人きりで車内で身体を重ねてしまった',
            encounter_childs_teacher: '面談後の教室で、' + b.name + '（担任教師）と秘密の交わりを持った',
            encounter_bar_stranger: 'バーの奥の個室で、居合わせた' + b.name + 'と肌を密着させて一晩を共にした',
            encounter_neighbor: '深夜のベランダや部屋で、隣人の' + b.name + 'と衝動的に身体を重ねた'
          };
          if (encounterIntimacyDescs[e.id]) {
            recordExperience('intimacy', encounterIntimacyDescs[e.id], b.id, { consent: true, mutual: true, satisfaction: 65, private: true });
          }
        }
        return;
      }
      if (outcome === 'marry') {
        const p = s.bonds.find(b => b.status === 'partner') || bond;
        if (p) {
          p.status = 'spouse'; p.trust = clamp(p.trust + 10); p.affection = clamp(p.affection + 10); s.flags.married = true;
          recordExperience('relationship', p.name + 'と生涯を誓い合い、婚姻関係を結んだ', p.id, { mutual: true });
          log(p.name + 'と結婚した。新しい家庭を築き、夫婦としての人生が始まる。', ageDiary(p.name + 'と婚姻の誓いを交わした。左手の薬指に輝く指輪の重みと温もりに、生涯を共にする実感が胸に満ちた。'));
        }
        return;
      }
      if (outcome === 'infidelity') {
        let target = s.bonds.find(b => b.status === 'close' || (b.status === 'partner' && b.private));
        if (!target) { target = createBond(); s.bonds.push(target); }
        target.status = 'partner'; target.private = true; target.affection = clamp(target.affection + 15); target.trust = clamp(target.trust + 5);
        s.secrecy = clamp(s.secrecy + 15); s.stress = bounded('stress', s.stress + 5);
        recordExperience('secret_relationship', target.name + 'と配偶者に隠れて禁断の不倫関係を結んだ', target.id, { private: true });
        log(target.name + 'との秘密の不倫関係が始まった。背徳と罪悪感が交錯する。');
        return;
      }
      if (outcome === 'divorce') {
        const sp = s.bonds.find(b => b.status === 'spouse') || bond;
        if (sp) {
          sp.status = 'former'; sp.consent = false; s.flags.married = false; s.flags.divorced = true;
          recordExperience('breakup', sp.name + 'と離婚届を提出し、婚姻関係を解消した', sp.id);
          log(sp.name + 'と離婚した。夫婦としての生活に終止符を打った。');
        }
        return;
      }
      if (outcome === 'bereavement') {
        const sp = s.bonds.find(b => b.status === 'spouse') || bond;
        if (sp) {
          sp.status = 'widowed'; sp.consent = false; s.flags.married = false; s.flags.widowed = true;
          recordExperience('bereavement', '最愛の伴侶 ' + sp.name + ' と永遠の死別を迎えた', sp.id);
          log(sp.name + 'が静かに息を引き取った。最愛の伴侶を見送り、深い悲しみに暮れた。');
        }
        return;
      }
      if (!bond) return;
      if (outcome === 'reunion') { const old = s.bonds.find(b => b.status === 'former'); if (old) { old.trust = clamp(old.trust + 3); recordExperience('reunion', old.name + 'と近況を話した', old.id) } return } if (outcome === 'shared_activity') { bond.affection = clamp(bond.affection + 5); recordExperience('communication', bond.name + 'と新しい時間の過ごし方を試した', bond.id); return } if (outcome === 'approach' || outcome === 'closer') { const willingness = approachProbability(bond); if (chance(willingness)) { bond.affection = clamp(bond.affection + 15); bond.trust = clamp(bond.trust + 7); if (bond.affection >= 52 && chance(Math.max(.05, Math.min(.9, bond.romanticInterest / 125)))) { proposeRelationship(bond) } else { bond.status = 'close'; log('交流が深まり、少し親しくなった。') } } else { recordExperience('rejection', '相手の希望を尊重した', bond.id); log('相手は今の距離感を望んでいた。気持ちを尊重した。') } return }
      if (e.id === 'first_date_milestone' && index === 0 && !s.flags.firstDate) { s.flags.firstDate = true; recordExperience('first_date', '初めて二人でデートした', bond.id); log('初めてのデートに出かけた。', ageDiary('二人で出かけた時間が心に残った。')) }
      if (outcome === 'first_kiss') {
        let p = bond;
        if (!p || (p.status !== 'partner' && p.status !== 'spouse' && p.status !== 'close')) {
          p = s.bonds.find(b => b.status === 'partner' || b.status === 'spouse' || b.status === 'close');
        }
        if (!p) return;
        if (p.status === 'close') p.status = 'partner';
        s.flags.firstKiss = true;
        recordExperience('first_kiss', p.name + 'と互いに唇を奪い合い、熱い舌を絡ませる濃厚な初キスを交わした', p.id, { consent: true, mutual: true });
        p.trust = clamp(p.trust + 5);
        p.affection = clamp(p.affection + 10);
        log(p.name + 'と息を荒げながら初めてのキスを交わした。恋人としての関係が深まった。', ageDiary('重なり合う唇から相手の唾液の味が広がって、身体の芯まで痺れるように熱くなった。吐息が混ざり合い、胸の奥が激しく疼いた。'));
        return;
      }
      if (outcome === 'shared_intimacy') {
        let p = bond;
        if (!p || (p.status !== 'partner' && p.status !== 'spouse')) {
          p = s.bonds.find(b => b.status === 'partner' || b.status === 'spouse') || s.bonds.find(b => b.status === 'close');
        }
        if (p) {
          if (p.status === 'close') p.status = 'partner';
          resolveSharedIntimacy(p);
        }
        return;
      } if (outcome === 'disclose_relationship' || outcome === 'private_relationship') { const disclose = outcome === 'disclose_relationship'; bond.private = !disclose; recordExperience('disclosure', disclose ? '二人の合意で関係を周囲に伝えた' : '二人の合意で関係を非公開にした', bond.id, { mutual: true, private: !disclose }); log(disclose ? '二人で話し合い、関係を周囲に伝えた。' : '二人で話し合い、関係は非公開にすると決めた。'); return } if (outcome === 'mutual_talk') { bond.trust = clamp(bond.trust + 4); recordExperience('communication', '希望や境界線について対話した', bond.id); log('互いの希望を話し合い、理解が少し深まった。'); return } if (outcome === 'boundary') { recordExperience('boundary', '望まないことを伝えた', bond.id); log('自分の境界線を伝えた。'); return } if (outcome === 'distance') { bond.affection = clamp(bond.affection - 8); log('相手との距離を少し置いた。'); return } if (outcome === 'breakup') { bond.status = 'former'; bond.consent = false; recordExperience('breakup', '関係を終える選択をした', bond.id); log('話し合いの末、交際関係を終えた。'); return } if (outcome === 'reflection' || outcome === 'privacy') recordExperience(outcome, '自分の価値観について考えた')
    }
    function eventProbability(e) {
      const snap = makeSnapshot(s);
      const bindings = resolveActors(e, snap, rng) || {};
      let p = e.weight ? (computeEventWeight(e, snap, bindings) / 100) : (e.p ?? 0.2);
      if (s.age >= 15 && s.age <= 49 && !hasPartner(s) && encounterEvent(e)) p *= s.age <= 35 ? 2.1 : 1.6;
      if (e.locationKind === 'community' && s.location.district === '農村集落') p *= 1.5;
      if (e.locationKind === 'work' && s.location.terrain === '都市部') p *= 1.5;
      const x = s.sexuality || {};
      if (['rare_funeral_cousin_taboo', 'rare_travel_stranger_or_gang', 'rare_outing_secret_quickie'].includes(e.id)) { if (isSexuallyAroused(s)) p *= 2.5; if (s.flags.in_heat) p *= 2.0; }
      const districtMap = { residential: '住宅街', downtown: '繁華街', commercial: '商業地域', rural: '農村集落', industrial: '工業地域', wealthy: '高所得地域', deprived: '経済的困難が多い地域' };
      const key = Object.keys(districtMap).find(k => e.id.includes(k));
      const targetDistrict = districtMap[key];
      if (s.location.district === targetDistrict) {
        p *= 3.5;
        if (isSexuallyAroused(s)) p *= 1.5;
        if (key === 'downtown' && ((s.morality ?? 0) <= -5 || (s.social ?? 0) >= 15)) p *= 1.4;
        if (key === 'commercial' && s.flags.employed) p *= 1.4;
        if (key === 'wealthy' && ((s.money ?? 0) >= 15 || (s.aesthetics ?? 0) >= 15)) p *= 1.4;
        if (key === 'deprived' && ((s.money ?? 0) <= 0 || (s.stress ?? 0) >= 15)) p *= 1.4;
        if (key === 'rural' && s.location.terrain === '山間部') p *= 1.4;
        if (key === 'industrial' && (s.independence ?? 0) >= 10) p *= 1.3;
        if (key === 'residential' && s.location.sinceAge <= s.age - 2) p *= 1.3;
      } else {
        // 他街区に住んでいても、親和性の高い地域や状況（外出・出張・夜遊び・来訪）で一定確率で発生
        let visitProb = 0.4;
        if (key === 'downtown' && s.location.terrain === '都市部') visitProb = 0.8;
        if (key === 'commercial' && (s.location.terrain === '都市部' || s.flags.employed)) visitProb = 0.8;
        if (key === 'rural' && ['山間部', '平野部'].includes(s.location.terrain)) visitProb = 0.7;
        if (key === 'wealthy' && (s.money ?? 0) >= 20) visitProb = 0.7;
        if (key === 'deprived' && (s.money ?? 0) <= 0) visitProb = 0.8;
        p *= visitProb;
      }
      if (e.id.startsWith('underground_')) {
        if (!isEligibleForUndergroundSexWork(s)) return 0;
        if (s.occupation === '風俗') p *= 1.5;
        else p *= 0.5;
      }
      // パートナーがいる場合、突発的な他人との行きずり性行為は大幅抑制
      const isPartnered = hasPartner(s);
      if (isPartnered && (e.id.startsWith('rare_') || e.id.startsWith('district_') || e.id.startsWith('underground_'))) {
        p *= 0.15;
      }
      // パートナーとのラブラブセックス・親密イベントはパートナーがいる時に大幅ブースト
      if (isPartnered && (e.id.startsWith('partner_sex_') || e.id.startsWith('partner_loving_') || e.id.startsWith('partner_anniversary_') || e.id.startsWith('partner_weekend_') || e.id.startsWith('partner_cohabitation_') || e.id.startsWith('partner_intimacy_') || e.id === 'partner_morning_passion' || e.id === 'partner_bath_passion')) {
        p *= 2.2;
      } if (e.id === 'first_date_memory' && s.flags.firstDate) p *= 2.5; if (e.id === 'first_kiss_afterthought' && s.flags.firstKiss) p *= 2.5; if (e.id === 'intimacy_afterthought' && s.flags.firstSexualExperience) p *= 2.5; if (e.id === 'intimacy_awakening' && s.flags.firstSexualExperience) p *= 3.5; if (e.id === 'sexual_satisfaction' && s.flags.firstSexualExperience) p *= 2.0; if (e.id === 'sexual_first_conversation' && s.flags.firstSexualExperience) p *= 2.0; if (e.id === 'first_kiss_milestone' && s.flags.firstDate) p *= 2.5; if (e.id === 'first_intimacy_milestone' && s.flags.firstKiss) p *= 3.0; if (e.id === 'young_campus_life' && s.flags.university) p *= 3.0; if (e.id === 'young_drifting' && s.flags.exploring) p *= 3.0; if (e.id === 'youth_hangover_regret' && s.flags.choice_underage_drinking_2) p *= 4.0; if (e.id === 'trauma_healing' && (s.flags.choice_bullying_1 || s.flags.choice_bullying_0)) p *= 2.5; if (e.id === 'adult_trust_test' && (s.flags.choice_bullying_1 || s.bonds?.some(b => b.status === 'former'))) p *= 2.2; if (e.id === 'adult_meeting') p *= .6 + x.curiosity / 150 + x.initiative / 250; if (e.id === 'adult_feelings') p *= .5 + x.initiative / 125 - x.shyness / 350; if (e.id === 'adult_intimacy') p *= .65 + x.boundaryVoice / 220 + x.intimacyNeed / 300; if (e.id === 'adult_private_values') p *= .7 + x.selfKnowledge / 250 + x.curiosity / 400; if (e.id === 'adult_relationship_conflict') p *= .8 + (100 - x.boundaryVoice) / 450; if (e.id === 'adult_new_chapter') p *= .7 + x.intimacyNeed / 250; if (e.id === 'adult_shared_intimacy') p *= .7 + x.desire / 180 + x.intimacyNeed / 240; if (e.id === 'adult_mismatched_desire') p *= .6 + Math.abs(x.desire - (s.bonds.find(b => b.status === 'partner')?.desire ?? x.desire)) / 70; return Math.max(0, Math.min(1, p))
    }
    function settle(event, index, continueYear = true) {
      const active = getEventCurrent(event);
      const choice = active.choices[index]; if (!choice) return;
      const choiceEff = getChoiceEffect(choice);
      const before = snapshot();
      s.flags['choice_' + event.id + '_' + index] = true;
      if (event.id === 'fixed_milestone_sex_education') {
        s.flags.sex_education_done = true;
        s.flags.sexually_aware = true;
      }
      if (event.id === 'fixed_milestone_coming_of_age_18') {
        s.flags.coming_of_age_18_done = true;
      }
      if (event.id === 'fixed_milestone_age_20_birthday') {
        s.flags.age_20_birthday_done = true;
        s.flags.can_drink_alcohol = true;
        s.flags.can_smoke = true;
      }
      if (event.id === 'first_kiss_milestone') {
        s.flags.firstKiss = true;
        s.flags.had_first_kiss_with_partner = true;
      }
      if (event.id === 'first_intimacy_milestone' || event.id === 'partner_first_intimacy_experienced') {
        s.flags.firstSexualExperience = true;
        s.flags.had_first_intimacy_with_partner = true;
      }
      if (event.id === 'adult_marriage_ceremony' || event.id === 'adult_marriage_proposal' || event.id === 'fixed_milestone_marriage') {
        s.flags.had_first_intimacy_with_partner = true;
        s.flags.had_first_kiss_with_partner = true;
      }
      if (choiceEff.occupation) { s.occupation = choiceEff.occupation; if (choiceEff.occupation === '一般職') s.flags.employed = true; if (choiceEff.occupation === '学生') s.flags.university = s.age >= 18; }
      if (choiceEff.chain) { s.chains ??= []; s.chains.push({ eventId: choiceEff.chain.eventId, targetAge: s.age + (choiceEff.chain.delay || 1), prob: choiceEff.chain.prob ?? 1 }); }
      apply(balancedChoiceEffect(active, choiceEff));
      const choiceSexEff = choiceEff.sexualEffects || {};
      const directSexEff = {};
      for (const [k] of SEXUAL_KEYS) {
        if (typeof choiceEff[k] === 'number') directSexEff[k] = choiceEff[k];
      }
      const eventSexEff = active.sexualEffects?.[index] || {};
      const mergedSexEff = { ...eventSexEff, ...choiceSexEff, ...directSexEff };
      if (Object.keys(mergedSexEff).length > 0) {
        changeSexuality(mergedSexEff);
      }
      if (active.locationKind) apply(locationEffect(active.locationKind));
      handleSocialOutcome(active, index, choiceEff, choice); s.relationships = s.bonds.length;
      if (['same_sex_tribadism', 'same_sex_toy_play', 'same_sex_mature_passion', 'partner_intimacy_female', 'partner_intimacy_male', 'partner_morning_passion', 'partner_bath_passion', 'rare_funeral_cousin_taboo', 'rare_travel_stranger_or_gang', 'rare_outing_secret_quickie'].includes(event.id) || event.id.startsWith('student_partner_') || event.id.startsWith('underground_') || event.id.startsWith('district_') || event.id.startsWith('partner_sex_') || event.id.startsWith('partner_loving_') || event.id.startsWith('partner_anniversary_') || event.id.startsWith('partner_weekend_') || event.id.startsWith('partner_cohabitation_')) {
        const isPartner = isPartnerEvent(event);
        const partner = isPartner ? (getPrimaryPartner(s) || s.bonds.find(b => b.gender === 'female') || null) : null;
        const diarySnippet = diaryForEvent(active, index) || '';
        const pName = isPartner ? (partner?.name || 'パートナー') : (event.id.includes('stranger') ? '見知らぬ男' : event.id.includes('cousin') ? 'いとこ' : event.id.includes('video') ? 'AV男優' : event.id.includes('sexwork') ? '指名客' : event.id.includes('street') ? '街の客' : event.id.includes('sugar') ? 'パパ（愛人相手）' : event.id.includes('trainer') ? 'パーソナルトレーナー' : event.id.includes('chauffeur') ? 'お抱え運転手' : event.id.includes('truck') ? 'トラック運転手' : event.id.includes('neighbor') ? '近所の男' : '見知らぬ相手');
        const extraCount = event.id.includes('gang') ? 3 : 1;
        recordExperience('intimacy', active.title + '：' + getChoiceLabel(choice), partner?.id ?? null, {
          consent: true,
          mutual: true,
          satisfaction: 85,
          private: true,
          title: active.title,
          diary: diarySnippet,
          partnerName: pName,
          extraCount
        });
      }
      if (event.id === 'move' && index === 0) { const next = newLocation(rng); setLocation(next, '引っ越し') }
      s.seen[event.id] = (s.seen[event.id] || 0) + 1;

      // 新アーキテクチャ: バリエーション outcomes マトリクス処理
      let varOutcome = null;
      let finalChoiceResult = null;
      let finalDiary = null;
      if (active.currentVariation && active.currentVariation.outcomes) {
        const stance = choice.stance || choice.id;
        varOutcome = active.currentVariation.outcomes[stance] || active.currentVariation.outcomes[index];
        if (varOutcome) {
          finalChoiceResult = varOutcome.text || varOutcome.description;
          finalDiary = varOutcome.diary;
          if (varOutcome.effects) apply(varOutcome.effects);
          if (varOutcome.sexualEffects) changeSexuality(varOutcome.sexualEffects);

          // ストーリー連鎖フラグの更新
          s.stanceHistory ??= [];
          s.stanceHistory.push({ eventId: event.id, stance, age: s.age, month: s.current_month });
          if (stance === 'passionate' || stance === 'choice_passionate') {
            s.flags.partner_intimacy_streak = (s.flags.partner_intimacy_streak || 0) + 1;
            s.flags.partner_frustrated = 0;
            s.flags.partner_distance = 0;
          } else if (stance === 'tease' || stance === 'choice_tease') {
            s.flags.partner_frustrated = (s.flags.partner_frustrated || 0) + 1;
          } else if (stance === 'refuse' || stance === 'choice_refuse') {
            s.flags.partner_distance = (s.flags.partner_distance || 0) + 1;
            s.flags.partner_intimacy_streak = 0;
          }
          if (varOutcome.next_chain) {
            s.flags[varOutcome.next_chain] = true;
          }
        }
      }

      const { label: choiceLabel, result: parsedResult } = parseChoice(active, index, choice);
      const displayResult = finalChoiceResult || parsedResult;
      const displayDiary = finalDiary ? ageDiary(injectPartnerName(finalDiary, getPrimaryPartner(s))) : ageDiary(diaryForEvent(active, index));

      log(active.title, displayDiary, changeSummary(before, snapshot()), {
        choice: choiceLabel,
        result: displayResult,
        classification: active.classification || 'daily'
      });
      s.activeVariationSubId = null;
      if (s.pending !== 'multiple_relationship') s.pending = null;
      if (continueYear && !s.pending) processYearEvents();
      s.rngState = rng.state(); render();
      if (!s.pending && !s.finished && isAutoPlaying) scheduleNextAutoStep(800);
    }
    function settleNarrative(rawEvent, continueYear = true) {
      if (!rawEvent) return;
      const before = snapshot();
      s.seen[rawEvent.id] = (s.seen[rawEvent.id] || 0) + 1;

      // 効果の適用
      if (rawEvent.effects) {
        if (Array.isArray(rawEvent.effects)) {
          for (const eff of rawEvent.effects) {
            if (eff.path === 'chain') {
              s.chains ??= [];
              s.chains.push({ eventId: eff.value.eventId, targetAge: s.age + (eff.value.delay || 1), prob: eff.value.prob ?? 1.0 });
            } else if (eff.path?.startsWith('history.flags.')) {
              s.flags[eff.path.replace('history.flags.', '')] = eff.value;
            } else if (eff.path === 'state.mood') {
              s.happiness = bounded('happiness', (s.happiness || 0) + eff.value);
            } else if (eff.path === 'state.stress') {
              s.stress = bounded('stress', (s.stress || 0) + eff.value);
            } else if (eff.path === 'skill.knowledge') {
              s.knowledge = bounded('knowledge', (s.knowledge || 0) + eff.value);
            } else if (eff.path === 'skill.communication_skill') {
              s.social = bounded('social', (s.social || 0) + eff.value);
            } else if (eff.path === 'state.self_efficacy') {
              s.independence = bounded('independence', (s.independence || 0) + eff.value);
            } else if (eff.path === 'trait.constitution.current') {
              s.health = bounded('health', (s.health || 0) + eff.value);
            } else if (eff.path === 'state.current_libido') {
              if (s.sexuality) s.sexuality.desire = bounded('desire', (s.sexuality.desire || 0) + Math.round(eff.value / 10));
            }
          }
        } else if (typeof rawEvent.effects === 'object') {
          apply(rawEvent.effects);
        }
      }

      const diaryText = rawEvent.diary || ageDiary(diaryForEvent(rawEvent, 0));
      const badgeLabel = rawEvent.narrative_type === 'precursor' ? 'きっかけ' :
        rawEvent.narrative_type === 'followup' ? '後日談' : '出来事';

      log(rawEvent.title, diaryText, changeSummary(before, snapshot()), {
        narrative: true,
        narrativeType: rawEvent.narrative_type || 'story',
        badgeLabel
      });

      if (s.pending === rawEvent.id) s.pending = null;
      if (continueYear && !s.pending) processYearEvents();
      s.rngState = rng.state();
      render();
      if (!s.pending && !s.finished && isAutoPlaying) scheduleNextAutoStep(800);
    }
    function applyAnnualLocationEffects() {
      const d = s.location?.district;
      const t = s.location?.terrain;
      if (!d) return;
      if (d === '住宅街') {
        if (rng.next() < 0.35) s.stress = bounded('stress', s.stress - 1);
        if (rng.next() < 0.25) s.morality = bounded('morality', s.morality + 1);
      } else if (d === '繁華街') {
        if (rng.next() < 0.45) s.money = bounded('money', s.money - 1);
        if (rng.next() < 0.35) s.stress = bounded('stress', s.stress + 1);
        if (rng.next() < 0.35) s.social = bounded('social', s.social + 1);
        if (s.sexuality && rng.next() < 0.30) s.sexuality.desire = bounded('desire', s.sexuality.desire + 1);
        if (rng.next() < 0.25) s.morality = bounded('morality', s.morality - 1);
      } else if (d === '商業地域') {
        if (s.flags.employed && rng.next() < 0.35) s.money = bounded('money', s.money + 1);
        if (rng.next() < 0.30) s.stress = bounded('stress', s.stress + 1);
        if (rng.next() < 0.25) s.aesthetics = bounded('aesthetics', s.aesthetics + 1);
      } else if (d === '農村集落') {
        if (rng.next() < 0.40) s.health = bounded('health', s.health + 1);
        if (rng.next() < 0.35) s.stress = bounded('stress', s.stress - 1);
        if (rng.next() < 0.30) s.social = bounded('social', s.social + 1);
        if (rng.next() < 0.25) s.secrecy = bounded('secrecy', s.secrecy - 1);
      } else if (d === '工業地域') {
        if (rng.next() < 0.30) s.money = bounded('money', s.money + 1);
        if (rng.next() < 0.25) s.health = bounded('health', s.health - 1);
        if (rng.next() < 0.30) s.independence = bounded('independence', s.independence + 1);
      } else if (d === '高所得地域') {
        if (rng.next() < 0.45) s.money = bounded('money', s.money - 2);
        if (rng.next() < 0.40) s.aesthetics = bounded('aesthetics', s.aesthetics + 1);
        if (rng.next() < 0.30) s.happiness = bounded('happiness', s.happiness + 1);
      } else if (d === '経済的困難が多い地域') {
        if (rng.next() < 0.35) s.money = bounded('money', s.money - 1);
        if (rng.next() < 0.35) s.stress = bounded('stress', s.stress + 1);
        if (rng.next() < 0.35) s.independence = bounded('independence', s.independence + 1);
        if (rng.next() < 0.25) s.morality = bounded('morality', s.morality - 1);
      }
      if (t === '山間部' || t === '海辺' || t === '離島') {
        if (rng.next() < 0.25) s.health = bounded('health', s.health + 1);
        if (rng.next() < 0.25) s.stress = bounded('stress', s.stress - 1);
      } else if (t === '都市部') {
        if (rng.next() < 0.25) s.knowledge = bounded('knowledge', s.knowledge + 1);
      }
    }
    function step() {
      if (s.finished || s.pending) return false;
      // 同じ年の未処理イベントがあれば、年齢を増やさず続きから再開。
      if (s.yearEvents?.length) return processYearEvents();
      s.age++; updateSexualityForAge();
      s.current_month = s.birth_month || 1;
      s.age_months = s.age * 12 + (s.current_month - 1);
      lifeMilestones();
      // 仕様書 8章 経時回復・欲求回帰
      s.states.fatigue = clamp(Math.round(s.states.fatigue * 0.45), 0, 100);
      s.states.stress = clamp(Math.round(s.states.stress * 0.55), 0, 100);
      s.states.mood = clamp(Math.round(s.states.mood * 0.40), -100, 100);
      const baseLib = s.traits.baseline_libido.current;
      s.states.current_libido = clamp(Math.round(0.35 * s.states.current_libido + 0.65 * baseLib), -100, 100);

      if (s.age < 18) {
        s.abilities.knowledge = clamp((s.abilities.knowledge || 0) + 3, -100, 100);
        s.states.self_efficacy = clamp((s.states.self_efficacy || 0) + 2, -100, 100);
        // 幼少期・就学期は生活費0を維持
        s.economy.monthly_expenses = 0;
        s.economy.monthly_income = (s.occupation === '学生' && s.age >= 15 && s.flags.employed_part_time) ? 30000 : 0;
      } else {
        // 仕様書 6.4 & 8章 経済収支の年次反映
        const mult = getDistrictExpenseMultiplier(s.location?.district);
        let monthlyInc = 0;
        let monthlyExp = roundHalfAwayFromZero(160000 * mult);
        switch (s.occupation) {
          case '学生': monthlyInc = 50000; monthlyExp = roundHalfAwayFromZero(90000 * mult); break;
          case '一般職': monthlyInc = s.age < 30 ? 220000 : s.age < 50 ? 300000 : 360000; break;
          case '専門職・クリエイター': monthlyInc = s.age < 30 ? 250000 : 380000; monthlyExp = roundHalfAwayFromZero(190000 * mult); break;
          case '自営業': monthlyInc = 280000 + Math.round((rng.next() - 0.5) * 80000); monthlyExp = roundHalfAwayFromZero(210000 * mult); break;
          case 'パート・アルバイト': monthlyInc = 130000; monthlyExp = roundHalfAwayFromZero(120000 * mult); break;
          case '風俗': monthlyInc = s.age < 26 ? 650000 : s.age < 35 ? 500000 : 350000; monthlyExp = roundHalfAwayFromZero(280000 * mult); break;
          case '専業主婦': monthlyInc = 0; monthlyExp = roundHalfAwayFromZero(150000 * mult); break;
          case '無職': monthlyInc = s.age >= 65 ? 120000 : 0; monthlyExp = roundHalfAwayFromZero(120000 * mult); break;
        }
        s.economy.monthly_income = monthlyInc;
        s.economy.monthly_expenses = monthlyExp;
        const annualSurplus = (monthlyInc - monthlyExp) * 12;
        applyCashDelta(s, annualSurplus);
        applyAnnualLocationEffects();
      }
      syncDisplay(s);
      if (s.age > 45) s.health = bounded('health', s.health - (rng.next() < .65 ? 1 : 0));
      if (s.age > 70) s.health = bounded('health', s.health - 1);
      const deathChance = s.age < 60 ? .0002 : s.age < 80 ? .002 + (s.age - 60) * .001 : s.age < 100 ? .025 + (s.age - 80) * .012 : .35;
      if (s.age >= 120 || rng.next() < deathChance * (s.health < 30 ? 2 : 1)) {
        s.finished = true; log(`人生を終えた。${s.age}年間を生きた。`, 'たくさんの出来事があった。どれも私が生きた時間だった。');
        s.rngState = rng.state(); return false;
      }
      advanceBonds();
      // 人間関係の重要な選択が先に発生しても、その年の通常イベントを失わない。
      s.yearEvents = pickYearEvents();
      if (s.pending) {
        if (document.getElementById('mode').value === 'auto') {
          settleMultiple(chance(.14) ? 2 : chance(.30) ? 1 : 0, false);
        } else { s.rngState = rng.state(); return false }
      }
      if (!s.yearEvents.length && s.age % 5 === 0) log('日々の暮らしを重ねた。');
      return processYearEvents();
    }
    const actions = [{ patterns: /セックス|エッチ|身体を重ね|交わり|抱かれたい|肉体関係/, label: '相手と素肌を重ね、身体の奥深くまで交わった', effects: { happiness: 3, stress: -3 }, sexualEffects: { desire: 4, intimacyNeed: 3, selfKnowledge: 2 }, partnerOnly: true, adultOnly: true }, { patterns: /自慰|オナニー|一人で慰め|秘所を弄|身体を慰め/, label: '一人きりの夜、指先で濡れた秘所を弄り身体を慰めた', effects: { stress: -3, happiness: 2 }, sexualEffects: { desire: -2, selfKnowledge: 3, shyness: 2 }, adultOnly: true }, { patterns: /性について話|性的な希望を伝|境界線を伝|嫌なことを断/, label: '親密さに関する希望や境界線を言葉にした', effects: { selfUnderstanding: 2 }, sexualEffects: { boundaryVoice: 5, selfAcceptance: 2, shyness: -1 }, adultOnly: true }, { patterns: /自分の性的指向|性的指向を考|自分の好みを知/, label: '自分の指向や希望を振り返った', effects: { selfUnderstanding: 3 }, sexualEffects: { selfKnowledge: 5, selfAcceptance: 2 }, adultOnly: false }, { patterns: /親密な関係を求め|親密さについて相談/, label: '親密さについて考え、相手との対話を試みた', effects: { stress: -1 }, sexualEffects: { initiative: 2, boundaryVoice: 3 }, adultOnly: true }, { patterns: /勉強|学習|資格|受験/, label: '学習を始めた', effects: { knowledge: 6, stress: 2 } }, { patterns: /就職|一般職|会社員|正社員/, label: '会社員（一般職）として就職した', effects: { money: 4, stress: 3 }, occupation: '一般職' }, { patterns: /専門職|クリエイター|作家|デザイナー/, label: '専門職・クリエイターとして活動を始めた', effects: { knowledge: 4, independence: 4 }, occupation: '専門職・クリエイター' }, { patterns: /自営業|起業|開業|店を開|カフェ/, label: '自営業として開業・独立した', effects: { money: -3, independence: 5 }, occupation: '自営業' }, { patterns: /パート|アルバイト/, label: 'パート・アルバイトとして働き始めた', effects: { money: 2, stress: 1 }, occupation: 'パート・アルバイト' }, { patterns: /風俗|ソープ|デリヘル/, label: '風俗の仕事に就いた', effects: { money: 12, morality: -4 }, occupation: '風俗' }, { patterns: /主婦|専業主婦/, label: '家庭に入り専業主婦となった', effects: { stress: -2, happiness: 2 }, occupation: '専業主婦' }, { patterns: /転職|仕事を探|働き/, label: '仕事について行動した', effects: { money: 4, stress: 4 } }, { patterns: /退職|仕事を辞め|会社を辞め/, label: '仕事を辞める決断をした', effects: { money: -9, independence: 5, stress: -4 } }, { patterns: /貯金|貯蓄|節約/, label: '貯蓄を心がけた', effects: { money: 6, happiness: -1 } }, { patterns: /旅行|旅に出/, label: '旅に出た', effects: { money: -6, happiness: 7 } }, { patterns: /引っ越|移住/, label: '住む場所を変える準備をした', effects: { money: -5, independence: 5 }, relocate: true }, { patterns: /起業|開業|店を開|カフェ/, label: '開業に向けて準備を始めた', effects: { money: -4, knowledge: 3, stress: 3 } }, { patterns: /恋人|交際|付き合|告白|デート/, label: '誰かとの親密な関係を模索した', effects: { social: 4, stress: 2 } }, { patterns: /女性が好き|女性と交際|同性/, label: '自分の惹かれ方について考え、出会いを探した', effects: { selfUnderstanding: 5, social: 2 } }, { patterns: /秘密を打ち明け|告白する|正直に話/, label: '大切なことを打ち明けた', effects: { secrecy: -5, trust: 4, stress: -3 } }, { patterns: /秘密にする|隠す/, label: '秘密を抱えることにした', effects: { secrecy: 6, stress: 3 } }, { patterns: /不倫|浮気/, label: '現在の関係と新たな気持ちの間で行動を考えた', effects: { stress: 6, secrecy: 4, trust: -3 } }, { patterns: /運動|散歩|筋トレ/, label: '身体を動かした', effects: { health: 5, stress: -3 } }, { patterns: /休む|休養|眠る/, label: '休息をとった', effects: { health: 3, stress: -6 } }, { patterns: /友達|友人|相談/, label: '誰かと交流した', effects: { social: 4, stress: -3 } }];
    function act(text) { const matches = actions.filter(a => a.patterns.test(text)); if (!matches.length) return '解釈できませんでした。例：勉強する、貯金する、旅行する、恋人を探す、身体を重ねる'; if (matches.length > 1) return `複数の意図を認識しました（${matches.map(x => x.label).join('／')}）。まず一つの行動に分けて入力してください。`; if (matches[0].adultOnly && s.age < 18) return '成人後に利用できる行動です。'; if (matches[0].partnerOnly && !hasPartner(s)) return '現在交際・婚姻中のパートナーがいません。'; if (s.age < 12 && /恋人|交際|不倫|浮気/.test(text)) return 'この年齢では、この行動は実行できません。'; if (/セックス|エッチ|身体を重ね|交わり|抱かれたい|肉体関係/.test(text) && hasPartner(s)) { const partner = s.bonds.find(b => b.status === 'spouse') || s.bonds.find(b => b.status === 'partner'); resolveSharedIntimacy(partner); return `実行：${partner.name}と身体を重ね、濃密な情交を交わした` } if (/自慰|オナニー|一人で慰め|秘所を弄|身体を慰め/.test(text)) { recordExperience('masturbation', '夜の静寂の中、指先で愛液に濡れた秘所を解し、震える絶頂を迎えた', null, { satisfaction: 70, private: true }); log('静かな夜、一人で身体の疼きを慰め、甘い痺れに息を漏らした。', ageDiary('シーツの中で指先を這わせ、濡れた奥を弄るたびに漏れる湿った水音。恥ずかしさに顔を埋めながらも、下腹から突き上げる快感に身体が震えて止まらなかった。')); apply(matches[0].effects); if (matches[0].sexualEffects) changeSexuality(matches[0].sexualEffects); return '実行：自慰により身体の疼きを慰めた' } apply(matches[0].effects); if (matches[0].sexualEffects) changeSexuality(matches[0].sexualEffects); if (matches[0].relocate) { const destTerrain = TERRAINS.find(x => text.includes(x)); const destDistrict = DISTRICTS.find(x => text.includes(x)); const next = newLocation(rng); if (destTerrain) next.terrain = destTerrain; if (destDistrict) next.district = destDistrict; setLocation(next, '自由介入による転居') } log(`介入：${matches[0].label}。`); return `実行：${matches[0].label}` }
    function escapeBond(v) { return String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])) }
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
          itemsHtml = `<div class="partner-item"><strong>配偶者</strong>：${escapeBond(spouse.name)}（親愛 ${spouse.affection} / 信頼 ${spouse.trust}）</div><div class="partner-item" style="color:#6d28d9;"><strong>不倫相手</strong>：${escapeBond(affair.name)}（親愛 ${affair.affection} / 秘密）</div>`;
        } else {
          statusType = 'married'; statusLabel = '結婚中';
          itemsHtml = `<div class="partner-item"><strong>配偶者</strong>：${escapeBond(spouse.name)}（親愛 ${spouse.affection} / 信頼 ${spouse.trust}）</div>`;
        }
      } else if (partners.length > 0) {
        if (partners.length > 1 || secretPartners.length > 0) {
          statusType = 'cheating'; statusLabel = '浮気中';
          itemsHtml = partners.map((p, idx) => `<div class="partner-item">${idx === 0 ? '<strong>本命</strong>' : '<strong>交際相手</strong>'}：${escapeBond(p.name)}（親愛 ${p.affection} / 信頼 ${p.trust}${p.private ? ' / 秘密' : ''}）</div>`).join('');
        } else {
          statusType = 'dating'; statusLabel = '交際中';
          const p = partners[0];
          itemsHtml = `<div class="partner-item"><strong>交際相手</strong>：${escapeBond(p.name)}（親愛 ${p.affection} / 信頼 ${p.trust}）</div>`;
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
    function render() {
      normalizeSexuality(s); const locWasOpen = !!document.getElementById('locDetails')?.open; const jobWasOpen = !!document.getElementById('jobDetails')?.open; const experienceWasOpen = !!document.getElementById('experienceDetails')?.open; const bondsWasOpen = !!document.getElementById('bondDetails')?.open; const libidoTierWasOpen = !!document.getElementById('libidoTierDetails')?.open; const moralityWasOpen = !!document.getElementById('moralityDetails')?.open; const historyDebugWasOpen = !!document.getElementById('historyDebugDetails')?.open;
      const escapeHtml = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
      const sh = s.sexuality?.sexualHistory || {};
      const formatSexCard = (rec, label, cls) => {
        if (!rec) return `<div class="sexual-record-card ${cls}"><div class="sexual-record-label">${label}</div><div class="muted">まだ記録はありません</div></div>`;
        return `<div class="sexual-record-card ${cls}"><div class="sexual-record-label">${label}：${escapeHtml(rec.age)}歳（相手：${escapeHtml(rec.partnerName)}）</div><div class="sexual-record-meta"><strong>${escapeHtml(rec.title)}</strong>${rec.satisfaction != null ? ` / 満足度 ${escapeHtml(rec.satisfaction)}` : ''}</div><div style="margin-top:2px;">${escapeHtml(rec.description)}</div>${rec.diary ? `<div class="sexual-record-diary">「${escapeHtml(rec.diary)}」</div>` : ''}</div>`;
      };
      const sexHistoryHtml = `<div class="sexual-records-box"><h4>心に刻まれた性行為の記憶</h4>${formatSexCard(sh.firstSex, '🌸 初めての性行為（初体験）', 'first')}${formatSexCard(sh.mostMemorable, '🔥 最も心に残った性行為', 'memorable')}${formatSexCard(sh.latestSex, s.finished ? '🌙 人生最後の性行為' : '🌙 最も直近の性行為', 'latest')}</div>`;
      // Sexual records integrated into experiencePanel
      const internalParamsWasOpen = !!document.getElementById('internalParamsDetails')?.open;
      document.getElementById('internalParams').innerHTML = getInternalParamsHtml(s);
      if (document.getElementById('internalParamsDetails')) document.getElementById('internalParamsDetails').open = internalParamsWasOpen; document.getElementById('bonds').innerHTML = `<div class="bonds-box"><details id="bondDetails" open><summary>人間関係：知人 ${s.bonds.filter(b => b.status === 'acquaintance').length} / 親しい友人 ${s.bonds.filter(b => b.status === 'close').length} / 交際中 ${s.bonds.filter(b => b.status === 'partner').length} / 配偶者 ${s.bonds.filter(b => b.status === 'spouse').length} / 合計 ${s.bonds.length}人</summary><div style="padding:6px 0;margin-bottom:8px;border-bottom:1px solid #e2e8f0;font-size:0.9em;"><strong>性経験人数</strong>：${getSexualPartnerCount(s)}人（交際・婚姻関係：${getSexualPartnerList(s).filter(p => p.type === 'bond').length}人 / 逢瀬・風俗・見知らぬ人等：${getSexualPartnerList(s).filter(p => p.type !== 'bond').length}人）</div><div class="exp-list" style="display:flex;flex-direction:column;gap:6px;">${s.bonds.map(b => `<div style="padding:7px 10px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;display:flex;justify-content:space-between;align-items:center;"><div><strong style="color:#1e293b;font-size:0.95em;">${escapeBond(b.name)}</strong><span style="color:#64748b;font-size:0.85em;margin-left:6px;">（${b.gender === 'female' ? '女性' : '男性'}・${BOND_ROLE_LABELS[b.role] || '知人'}）</span>${b.metAge != null ? `<span style="color:#94a3b8;font-size:0.8em;margin-left:5px;">${b.metAge}歳で出会い</span>` : ''}</div><div><span class="badge" style="background:${b.status === 'spouse' ? '#fdf2f8;color:#be185d;border:1px solid #fbcfe8' : b.status === 'partner' ? '#fef2f2;color:#b91c1c;border:1px solid #fecaca' : b.status === 'close' ? '#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe' : '#f1f5f9;color:#475569;border:1px solid #e2e8f0'};padding:2px 8px;border-radius:10px;font-size:0.8em;font-weight:600;">${({ acquaintance: '知人', close: '親しい友人', partner: '交際中', spouse: '配偶者', former: '元交際', widowed: '死別' })[b.status] || b.status}</span></div></div>`).join('') || '<p class="muted" style="padding:6px 0;">まだ出会いはありません。</p>'}</div></details></div>`;
      const exp = s.sexuality.experience;
      const expLabels = { multiple_relationship: '合意のある複数交際', secret_relationship: '秘密の交際', friendship: '親交', rejection: '意思の尊重', reunion: '再会', reflection: '振り返り', privacy: '非公開', intimacy: '身体的な親密さ', masturbation: '自慰', relationship: '交際・婚姻', boundary: '境界線', communication: '対話', meeting: '出会い', disclosure: '公開・秘密', breakup: '別れ・破局', bereavement: '死別' };
      const expCounts = {}; for (const e of exp) { const label = expLabels[e.kind] || 'その他'; expCounts[label] = (expCounts[label] || 0) + 1; }
      const sexualRecordsWasOpen = document.getElementById('sexualRecordsDetails') ? document.getElementById('sexualRecordsDetails').open : true;
      const sexualRecordsHtml = `<details class="sexual-records-box" id="sexualRecordsDetails" ${sexualRecordsWasOpen ? 'open' : ''} style="margin:7px 0 9px;background:#faf4f8;border:1px solid #ebdbe5;border-radius:8px;padding:8px;"><summary style="cursor:pointer;font-size:11.5px;font-weight:700;color:#6a4a70;outline:none;">心に刻まれた性行為の記憶 ▾</summary><div style="margin-top:6px;">${formatSexCard(sh.firstSex, '🌸 初めての性行為（初体験）', 'first')}${formatSexCard(sh.mostMemorable, '🔥 最も心に残った性行為', 'memorable')}${formatSexCard(sh.latestSex, s.finished ? '🌙 人生最後の性行為' : '🌙 最も直近の性行為', 'latest')}</div></details>`;
      document.getElementById('experiencePanel').innerHTML = `<div class="experience-panel"><details id="experienceDetails"><summary>性的・親密な経験　${exp.length}件 ▾</summary>${sexualRecordsHtml}<div class="exp-counts">${Object.entries(expCounts).map(([k, v]) => `${escapeHtml(k)} ${v}件`).join(' / ') || '記録なし'}</div><div class="exp-list">${exp.length ? exp.slice().reverse().map(e => `<div class="exp-entry"><div class="exp-meta">${escapeHtml(e.age)}歳 ・ ${escapeHtml(expLabels[e.kind] || 'その他')}${e.private ? ' ・ 非公開' : ''}</div><div>${escapeHtml(e.description)}</div>${e.partnerId ? `<div class="exp-meta">相手：${escapeHtml(s.bonds.find(b => b.id === e.partnerId)?.name || '不明')}（${escapeHtml(e.partnerId)}）</div>` : ''}${e.satisfaction != null ? `<div class="exp-meta">満足感 ${escapeHtml(e.satisfaction)}</div>` : ''}</div>`).join('') : '<div class="exp-empty">まだ経験の記録はありません。出会い・交際・親密さに関する出来事が起きると、ここに追加されます。</div>'}</div></details></div>`;
      document.getElementById('experienceDetails').open = experienceWasOpen;
      document.getElementById('identity').innerHTML = `<h2>${s.name} · ${s.age}歳 ${s.finished ? '（終了）' : ''} <span class="badge" style="background:#e0e7ff;color:#3730a3;padding:2px 10px;border-radius:12px;font-size:0.65em;font-weight:600;vertical-align:middle;">職業：${escapeHtml(s.occupation || '学生')}</span></h2><div style="margin:4px 0 6px;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:4px;height:5px;overflow:hidden;width:100%;" title="${s.age}歳 / 人生の歩み（目安85歳）"><div style="width:${Math.min(100, Math.round((s.age / 85) * 100))}%;height:100%;background:linear-gradient(90deg, #3b82f6, #ec4899);border-radius:4px;transition:width 0.3s ease;"></div></div><p class="muted">${s.age < 6 ? '幼少期' : s.age < 18 ? '学生時代' : s.age < 65 ? '成人期' : 'シニア期'} / 人間関係 ${s.relationships}件</p>`;
      document.getElementById('partnerStatus').innerHTML = getPartnerSummary(s);
      document.getElementById('location').innerHTML = `<div class="location-box"><strong>居住地</strong>：${s.location.terrain} / ${s.location.district}<div class="muted">${s.location.sinceAge}歳から居住・転居 ${s.location.history.length}回</div></div>`; document.getElementById('locApply').onclick = () => { if (s.pending || s.finished) { alert('選択待ち・人生終了時は変更できません'); return } const next = { terrain: document.getElementById('locTerrain').value, district: document.getElementById('locDistrict').value }; if (setLocation(next, '居住地変更')) { apply({ money: -5, stress: 2 }); s.rngState = rng.state() } render() }; document.getElementById('jobApply').onclick = () => { if (s.pending || s.finished) { alert('選択待ち・人生終了時は変更できません'); return } const nextJob = document.getElementById('jobSelect').value; if (nextJob && nextJob !== s.occupation) { const old = s.occupation; s.occupation = nextJob; if (nextJob === '学生') s.flags.university = s.age >= 18; if (nextJob === '一般職') s.flags.employed = true; log(`職業を「${old}」から「${nextJob}」に変更した。`); s.rngState = rng.state(); render() } };
      const libidoApplyBtn = document.getElementById('libidoTierApply');
      if (libidoApplyBtn) {
        libidoApplyBtn.onclick = () => {
          if (s.pending || s.finished) { alert('選択待ち・人生終了時は変更できません'); return; }
          const nextTier = document.getElementById('libidoTierSelect').value;
          const oldTier = getLibidoTier(s);
          if (nextTier !== oldTier) {
            setLibidoTier(s, nextTier);
            log(`[デバッグ] 性欲の基本資質を「${oldTier}」から「${nextTier}」に変更した。`);
            s.rngState = rng.state();
            render();
          }
        };
      }
      const moralityApplyBtn = document.getElementById('moralityApply');
      if (moralityApplyBtn) {
        moralityApplyBtn.onclick = () => {
          if (s.pending || s.finished) { alert('選択待ち・人生終了時は変更できません'); return; }
          const nextVal = Number(document.getElementById('moralitySelect').value);
          const oldVal = s.abilities?.morality ?? s.morality ?? 0;
          if (nextVal !== oldVal) {
            s.abilities.morality = nextVal;
            s.morality = nextVal;
            log(`[デバッグ] モラルを「${oldVal}」から「${nextVal}」に変更した。`);
            s.rngState = rng.state();
            render();
          }
        };
      }
      const showImpactCheckbox = document.getElementById('showImpactToggle');
      if (showImpactCheckbox) {
        showImpactCheckbox.onchange = (e) => {
          s.showImpactInHistory = e.target.checked;
          render();
        };
      }
      document.getElementById('stats').innerHTML = DISPLAY_KEYS.map(([k, label]) => {
        const val = s.display[k];
        const color = val > 0 ? '#1e7b85' : val < 0 ? '#b91c1c' : '#475569';
        return `<div class="stat"><span class="muted">${label}</span><b style="color:${color}">${val > 0 ? '+' : ''}${val}</b></div>`;
      }).join(''); const rawEvent = eventDefs.find(x => x.id === s.pending);
      const e = getEventCurrent(rawEvent);
      const eventContainer = document.getElementById('event');
      if (s.pending === 'multiple_relationship') {
        eventContainer.style.display = 'block';
        eventContainer.innerHTML = `<div class="pending-event-card">
          <div class="pending-header"><span class="pending-badge">⚠️ 重要な選択</span><span class="pending-age">${s.age}歳 ${s.current_month || 6}月（${getSeasonName(s.current_month || 6)}）</span></div>
          <div class="pending-title">新しい交際をどうする？</div>
          <div class="pending-desc">現在の交際相手がいるなかで、${escapeHtml(s.bonds.find(b => b.id === s.pendingBondId)?.name || '新しい相手')}との交際を考えている。関係者の意思をどう扱う？</div>
          <div class="pending-choices">
            ${[
            '今の関係を優先する',
            '現在の交際を終えて新しい交際を始める',
            '全員に相談し合意を得られた場合のみ複数交際する',
            '秘密にして新しい交際を始める'
          ].map((t, i) => `<button class="choice" data-multiple="${i}">${t}</button>`).join('')}
          </div>
        </div>`;
      } else if (e) {
        const isNarrative = e.is_narrative || !e.choices || e.choices.length === 0;
        eventContainer.style.display = 'block';

        if (isNarrative) {
          const badgeText = e.narrative_type === 'precursor' ? '🌱 予兆・きっかけ' :
            e.narrative_type === 'followup' ? '🍃 あの時の出来事の後日談' : '📖 人生の出来事';
          const badgeClass = e.narrative_type === 'precursor' ? 'badge-precursor' :
            e.narrative_type === 'followup' ? 'badge-followup' : 'badge-narrative';
          eventContainer.innerHTML = `<div class="pending-event-card narrative-card">
            <div class="pending-header">
              <span class="pending-badge ${badgeClass}">${badgeText}</span>
              <span class="pending-age">${s.age}歳 ${s.current_month || 6}月（${getSeasonName(s.current_month || 6)}）</span>
            </div>
            <div class="pending-title">${escapeHtml(e.title)}</div>
            <div class="pending-desc">${escapeHtml(e.text || e.description)}</div>
            <div class="pending-choices">
              <button class="choice choice-narrative" data-narrative="1">心に留めて進む ▾</button>
            </div>
          </div>`;
        } else {
          // 動的選択肢抽出（4〜6個からパラメータ・状態に応じた2〜3個を抽出）
          const dynChoices = getDynamicChoices(e, s);
          const classBadge = e.classification === 'major'
            ? '<span class="pending-badge badge-major" style="margin-right:6px;">🔥 重大</span>'
            : (e.classification === 'random' ? '<span class="pending-badge badge-random" style="margin-right:6px;">🎲 突発</span>' : '<span class="pending-badge badge-daily" style="margin-right:6px;">☕ 日常</span>');
          eventContainer.innerHTML = `<div class="pending-event-card">
            <div class="pending-header"><div>${classBadge}<span class="pending-badge">⚠️ 選択が必要です</span></div><span class="pending-age">${s.age}歳 ${s.current_month || 6}月（${getSeasonName(s.current_month || 6)}）</span></div>
            <div class="pending-title">${escapeHtml(e.title)}</div>
            <div class="pending-desc">${escapeHtml(e.text || e.description)}</div>
            <div class="pending-choices">
              ${dynChoices.map(item => {
            const { label } = parseChoice(e, item.originalIndex, item.choice);
            const tip = choiceTooltip(item.choice, item.originalIndex, e);
            return `<button class="choice" data-choice="${item.originalIndex}" ${tip ? `title="【効果】${escapeHtml(tip)}"` : ''}>${escapeHtml(label)}</button>`;
          }).join('')}
            </div>
          </div>`;
        }
      } else {
        eventContainer.style.display = s.finished ? 'block' : 'none';
        eventContainer.innerHTML = s.finished ? '<div class="note"><p>この人生は終わりました。新しい人生を始められます。</p></div>' : '';
      }

      const playNotice = document.getElementById('playNotice');
      if (playNotice) {
        if (s.pending) {
          const pendingEv = eventDefs.find(x => x.id === s.pending);
          if (pendingEv && (pendingEv.is_narrative || !pendingEv.choices?.length)) {
            playNotice.innerHTML = '<span style="color:#166534;font-weight:600;">📖 出来事の発生：「心に留めて進む」を押して進行してください</span>';
          } else {
            playNotice.innerHTML = '<span style="color:#b91c1c;font-weight:600;">⚠️ 選択待ち：「人生の記録」で選択肢を選んでください</span>';
          }
        } else if (s.finished) {
          playNotice.innerHTML = '<span style="color:#64748b;">人生終了。右上の「新しい人生」から始められます</span>';
        } else {
          playNotice.innerHTML = '重要なイベントでは進行が停止します。選択・結果は「人生の記録」に表示されます。';
        }
      }

      document.querySelectorAll('[data-choice]').forEach(b => b.onclick = () => settle(rawEvent, Number(b.dataset.choice)));
      document.querySelectorAll('[data-multiple]').forEach(b => b.onclick = () => settleMultiple(Number(b.dataset.multiple)));
      document.querySelectorAll('[data-narrative]').forEach(b => b.onclick = () => settleNarrative(rawEvent));

      const openDiaries = new Set([...document.querySelectorAll('#history details[open]')].map(d => d.dataset.diaryId));
      document.getElementById('history').innerHTML = s.history.filter(h => !h.text.endsWith('：選択を待っています。')).slice().reverse().map((h, i) => {
        const histClassBadge = h.classification === 'major'
          ? '<span class="history-tag tag-major" style="margin-right:4px;">重大</span>'
          : (h.classification === 'random' ? '<span class="history-tag tag-random" style="margin-right:4px;">突発</span>' : (h.classification === 'daily' ? '<span class="history-tag tag-daily" style="margin-right:4px;">日常</span>' : ''));
        return `<div class="history-entry ${h.choice ? 'choice-entry' : ''} ${h.narrative ? 'narrative-entry' : ''}">
          <p><strong>${h.dateText || (h.age + '歳')}</strong>　${histClassBadge}${escapeHtml(h.text)}</p>
          ${h.badgeLabel ? `<div class="history-narrative-line"><span class="history-tag tag-${h.narrativeType || 'story'}">${escapeHtml(h.badgeLabel)}</span></div>` : ''}
          ${h.choice ? `<div class="history-choice-line"><span class="history-tag tag-choice">選択</span><span class="history-choice-text">${escapeHtml(h.choice)}</span></div>` : ''}
          ${h.result ? `<div class="history-result-line"><span class="history-tag tag-result">結果</span><span class="history-result-text">${escapeHtml(h.result)}</span></div>` : ''}
          ${(s.showImpactInHistory && h.impact) ? `<div class="history-impact-line"><span class="history-tag tag-impact">変化</span><span class="history-impact-text">${escapeHtml(h.impact)}</span></div>` : ''}
          ${h.diary ? `<details class="diary" data-diary-id="${escapeHtml(h.age + '-' + h.text)}" ${openDiaries.has(h.age + '-' + h.text) ? 'open' : ''}><summary>日記を見る</summary><div class="diary-body">${escapeHtml(h.diary)}</div></details>` : ''}
        </div>`;
      }).join('') || '<p class="muted">これから人生が始まります。</p>';
      if (document.getElementById('locDetails')) document.getElementById('locDetails').open = locWasOpen;
      if (document.getElementById('jobDetails')) document.getElementById('jobDetails').open = jobWasOpen;
      if (document.getElementById('libidoTierDetails')) document.getElementById('libidoTierDetails').open = libidoTierWasOpen;
      if (document.getElementById('moralityDetails')) document.getElementById('moralityDetails').open = moralityWasOpen;
      if (document.getElementById('historyDebugDetails')) document.getElementById('historyDebugDetails').open = historyDebugWasOpen;
      if (document.getElementById('bondDetails')) document.getElementById('bondDetails').open = bondsWasOpen;
      if (document.getElementById('next')) { document.getElementById('next').disabled = s.finished || !!s.pending; document.getElementById('next').title = s.pending ? '先にイベントの選択肢を選んでください' : ''; }
      if (document.getElementById('ten')) { document.getElementById('ten').disabled = s.finished || !!s.pending; document.getElementById('ten').title = s.pending ? '先にイベントの選択肢を選んでください' : ''; }
      if (document.getElementById('act')) document.getElementById('act').disabled = s.finished || !!s.pending;
      updateAutoPlayUI();
    }
    // === 自動進行エンジン (Auto-Play) ===
    let autoPlayTimer = null;
    let autoPlaySpeed = 1200;
    let isAutoPlaying = true;

    function updateAutoPlayUI() {
      const btn = document.getElementById('autoToggle');
      const icon = document.getElementById('autoToggleIcon');
      const text = document.getElementById('autoToggleText');
      const bar = document.getElementById('timeProgressBar');
      const label = document.getElementById('timeProgressLabel');
      const ageLabel = document.getElementById('timeProgressAge');

      const curM = s?.current_month || 1;
      const seasonName = getSeasonName(curM);

      if (ageLabel && s) {
        if (s.finished) {
          ageLabel.textContent = `${s.age}歳（生涯完走）`;
        } else if (s.pending) {
          ageLabel.textContent = `${s.age}歳 ${curM}月（${seasonName}）`;
        } else {
          ageLabel.textContent = `${s.age}歳 ${curM}月 → ${s.age + 1}歳`;
        }
      }
      if (!btn) return;
      if (s.finished) {
        btn.disabled = true;
        btn.style.opacity = '0.5';
        if (text) text.textContent = '人生終了';
        if (icon) icon.textContent = '⏹';
        if (label) { label.textContent = '⏹ 人生の完走'; label.style.color = '#64748b'; }
        if (bar) { bar.style.transition = 'none'; bar.style.width = '100%'; bar.style.background = '#94a3b8'; }
      } else if (s.pending) {
        btn.disabled = true;
        btn.style.opacity = '0.7';
        if (text) text.textContent = '選択待ち';
        if (icon) icon.textContent = '⏳';
        if (label) {
          label.textContent = `⏸ ${curM}月（${seasonName}）の出来事で停止中`;
          label.style.color = '#a87182';
        }
        if (bar) {
          bar.style.transition = 'none';
          // 年の途中の月に対応する幅で停止（例: 6月なら50%）
          bar.style.width = Math.min(95, Math.max(15, Math.round((curM / 12) * 100))) + '%';
          bar.style.background = '#a87182';
        }
      } else if (isAutoPlaying) {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.className = 'primary';
        if (text) text.textContent = '一時停止';
        if (icon) icon.textContent = '⏸';
        if (label) {
          label.textContent = `⏳ 時間の経過：${s.age}歳 ${seasonName}（${curM}月）へ`;
          label.style.color = '#4338ca';
        }
        if (bar) { bar.style.background = 'linear-gradient(90deg, #6366f1, #a855f7)'; }
      } else {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.className = 'secondary';
        if (text) text.textContent = '自動進行';
        if (icon) icon.textContent = '▶';
        if (label) { label.textContent = '⏸ 一時停止中'; label.style.color = '#64748b'; }
        if (bar) { bar.style.transition = 'none'; bar.style.width = '0%'; bar.style.background = '#cbd5e1'; }
      }
    }

    function scheduleNextAutoStep(delay = null) {
      if (typeof clearTimeout !== "undefined") clearTimeout(autoPlayTimer);
      if (!isAutoPlaying || !s || s.finished || s.pending) {
        updateAutoPlayUI();
        return;
      }
      const duration = delay ?? autoPlaySpeed;
      updateAutoPlayUI();

      // プログレスバーのチャージアニメーション
      const bar = document.getElementById('timeProgressBar');
      if (bar) {
        bar.style.transition = 'none';
        bar.style.width = '0%';
        bar.style.background = 'linear-gradient(90deg, #6366f1, #a855f7)';
        if (typeof requestAnimationFrame !== 'undefined') {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (isAutoPlaying && !s.pending && !s.finished) {
                bar.style.transition = `width ${duration}ms linear`;
                bar.style.width = '100%';
              }
            });
          });
        }
      }

      autoPlayTimer = (typeof setTimeout !== "undefined" ? setTimeout : () => 1)(() => {
        if (!isAutoPlaying || !s || s.finished || s.pending) {
          updateAutoPlayUI();
          return;
        }
        step();
        render();
        if (s.pending || s.finished) {
          updateAutoPlayUI();
        } else {
          scheduleNextAutoStep();
        }
      }, duration);
    }

    function startAutoPlay(delay = null) {
      if (!s || s.finished || s.pending) return;
      isAutoPlaying = true;
      updateAutoPlayUI();
      scheduleNextAutoStep(delay);
    }

    function stopAutoPlay() {
      isAutoPlaying = false;
      if (typeof clearTimeout !== "undefined") clearTimeout(autoPlayTimer);
      updateAutoPlayUI();
    }

    function toggleAutoPlay() {
      if (s.finished || s.pending) return;
      if (isAutoPlaying) {
        stopAutoPlay();
      } else {
        startAutoPlay();
      }
    }

    function start(seed = (Date.now() >>> 0)) {
      if (typeof clearTimeout !== "undefined") clearTimeout(autoPlayTimer);
      s = makeState(seed);
      rng = random(s.rngState);

      // 本人の誕生月から人生が始まる
      const bm = s.birth_month || 4;
      s.current_month = bm;
      s.age_months = bm - 1;

      const f = s.originFamily;
      const bSeason = getSeasonName(bm);
      const birthDiary = `【出生の記録】\n` +
        `・生家：${s.location.terrain}・${s.location.district}の${f.houseType}\n` +
        `・家族構成：${f.structure}（${f.membersDescription}）\n` +
        `・家庭環境：${f.environment}\n` +
        `【日記】${bSeason}の穏やかな風が吹く${bm}月、産声とともに始まった命。両親や家族の愛おしそうな眼差しに包まれ、${s.name}の長い人生の物語が静かに幕を開けた。`;
      log(`【誕生】${s.name}がこの世に生を受けた。`, birthDiary);
      isAutoPlaying = true;
      render();
      updateAutoPlayUI();
      // 生まれた直後は最初の記録を読めるよう、1.5秒待ってから自動進行を開始
      scheduleNextAutoStep(1500);
    }

    // イベントリスナー設定
    document.getElementById('restart').onclick = () => { if (confirm('新しい人生を始めますか？')) start() };
    document.getElementById('autoToggle').onclick = () => { toggleAutoPlay(); };
    document.getElementById('autoSpeedSelect').onchange = (e) => {
      autoPlaySpeed = Number(e.target.value);
      if (isAutoPlaying && !s.pending && !s.finished) scheduleNextAutoStep(autoPlaySpeed);
    };
    if (document.getElementById('next')) {
      document.getElementById('next').onclick = () => { stopAutoPlay(); step(); render(); };
    }
    if (document.getElementById('ten')) {
      document.getElementById('ten').onclick = () => { stopAutoPlay(); for (let i = 0; i < 10; i++) { if (s.pending || s.finished || !step()) break; } render(); };
    }
    document.getElementById('act').onclick = () => {
      const input = document.getElementById('command');
      document.getElementById('feedback').textContent = act(input.value.trim());
      s.rngState = rng.state();
      render();
    };
    document.getElementById('mode').onchange = e => {
      document.getElementById('intervene').style.display = e.target.value === 'free' ? 'block' : 'none';
      render();
    };
    document.getElementById('save').onclick = () => {
      try {
        localStorage.setItem('life-simulator-v18', JSON.stringify({ ...s, rngState: rng.state() }));
        alert('保存しました');
      } catch (e) {
        alert('保存できませんでした（プライベートブラウズまたは制限モードの可能性があります）: ' + e.message);
      }
    };
    document.getElementById('load').onclick = () => {
      try {
        const saved = JSON.parse(localStorage.getItem('life-simulator-v18'));
        if (!saved || saved.version !== 18) throw Error('対応する保存データがありません');
        s = normalizeSexuality(normalizeLocation(saved));
        s.yearEvents ??= [];
        s.chains ??= [];
        rng = random(s.rngState);
        render();
        updateAutoPlayUI();
      } catch (e) {
        alert(e.message);
      }
    };
    try {
      if (typeof localStorage !== 'undefined') {
        for (const k of Object.keys(localStorage)) {
          if (k.startsWith('life-simulator-') && k !== 'life-simulator-v18') localStorage.removeItem(k);
        }
      }
    } catch (e) {
      console.warn('localStorage is restricted or unavailable:', e);
    }
    start();
    document.getElementById('intervene').style.display = 'none';
