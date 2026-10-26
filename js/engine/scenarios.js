'use strict';
// シナリオ（並行ストーリー）管理とストーリー間の調停

// === シナリオ管理エンジン (v2仕様準拠: 複数並行ストーリー・フェーズ進行) ===
function getScenario(id, st = s) {
  return st?.scenarios?.find(x => x.id === id && x.status === 'active') || null;
}
function startScenario(id, phase = 'initial', context = {}, st = s) {
  st.scenarios ??= [];
  let existing = st.scenarios.find(x => x.id === id && x.status === 'active');
  if (existing) {
    existing.phase = phase;
    existing.context = { ...existing.context, ...context };
    return existing;
  }
  const inst = {
    id,
    status: 'active',
    phase,
    startedAge: st.age ?? 0,
    startedMonth: st.age_months ?? 0,
    lastEventAgeMonths: st.age_months ?? 0,
    context
  };
  st.scenarios.push(inst);
  return inst;
}
function advanceScenario(id, nextPhase, context = {}, st = s) {
  st.scenarios ??= [];
  const sc = getScenario(id, st);
  if (!sc) return startScenario(id, nextPhase, context, st);
  sc.phase = nextPhase;
  sc.lastEventAgeMonths = st.age_months ?? 0;
  if (context) sc.context = { ...sc.context, ...context };
  return sc;
}
function completeScenario(id, st = s) {
  const sc = getScenario(id, st);
  if (sc) {
    sc.status = 'completed';
    sc.completedAge = st.age ?? 0;
  }
  return sc;
}
function failScenario(id, reason = 'broken', st = s) {
  const sc = getScenario(id, st);
  if (sc) {
    sc.status = 'broken';
    sc.breakReason = reason;
    sc.brokenAge = st.age ?? 0;
  }
  return sc;
}
function isScenarioActive(id, phase = null, st = s) {
  const sc = getScenario(id, st);
  if (!sc) return false;
  if (phase && sc.phase !== phase) return false;
  return true;
}

// === ストーリー調停エンジン (ストーリー同士の影響・暗黙終了・整合性管理) ===
function harmonizeScenarios(st = s) {
  if (!st || !st.scenarios) return;

  const spouse = st.bonds?.find(b => b.status === 'spouse');
  const partner = st.bonds?.find(b => b.status === 'partner' && !b.private) || spouse;
  const isCohabiting = !!st.flags?.cohabiting || !!spouse?.cohabiting || !!partner?.cohabiting;
  const isMarried = !!spouse || !!st.flags?.married;

  // 1. 「一人暮らし（independence）」の暗黙終了
  // 同棲中または結婚している場合、一人暮らしストーリーは暗黙に完了する
  if (isCohabiting || isMarried) {
    if (isScenarioActive('independence', null, st)) {
      completeScenario('independence', st);
    }
    st.flags.living_alone = false;
  }

  // 2. 結婚（isMarried）成立時の相互ストーリー調停
  if (isMarried) {
    // 恋愛ストーリーは既婚へ進んで完了
    if (isScenarioActive('romance', null, st)) {
      advanceScenario('romance', 'married', {}, st);
      completeScenario('romance', st);
    }
    // 同棲の行方（膠着・マンネリ）は結婚成立により解消・完了
    if (isScenarioActive('cohabitation_limbo', null, st)) {
      completeScenario('cohabitation_limbo', st);
    }
    // 授かり婚ストーリーも婚姻成立により完了
    if (isScenarioActive('premarital_pregnancy', null, st)) {
      completeScenario('premarital_pregnancy', st);
    }
    // 浮気疑惑・揺れる心も、結婚に踏み切ったことで乗り越えた・決着したとして完了
    if (isScenarioActive('infidelity_crisis', null, st)) {
      completeScenario('infidelity_crisis', st);
    }
    if (isScenarioActive('wavering_heart', null, st)) {
      completeScenario('wavering_heart', st);
    }
    // 夫婦生活ストーリーがまだなければ開始
    let mlSc = getScenario('marriage_life', st);
    if (!mlSc && spouse) {
      mlSc = startScenario('marriage_life', 'newlywed', { partnerId: spouse.id, partnerName: spouse.name }, st);
    }
    // 「新婚（newlywed）」は長くても3年で次のストーリーへ遷移。妊娠・出産・子育て期との連動
    if (mlSc && mlSc.status === 'active') {
      const marriedAge = spouse?.marriedAge ?? mlSc.startedAge ?? st.age;
      const marriedYears = Math.max(0, (st.age ?? 0) - marriedAge);
      const isPregnant = !!st.flags?.pregnant;
      const hasChildren = !!(st.flags?.hasChildren && st.flags?.child_born);
      const childAge = st.flags?.childBirthAge ? Math.max(0, (st.age ?? 0) - st.flags.childBirthAge) : 0;

      if (isPregnant) {
        if (mlSc.phase !== 'pregnant') advanceScenario('marriage_life', 'pregnant', {}, st);
      } else if (hasChildren) {
        if (childAge < 18) {
          if (mlSc.phase !== 'parenting') advanceScenario('marriage_life', 'parenting', {}, st);
        } else if (st.age >= 65) {
          if (mlSc.phase !== 'silver') advanceScenario('marriage_life', 'silver', {}, st);
        } else {
          if (mlSc.phase !== 'mature') advanceScenario('marriage_life', 'mature', {}, st);
        }
      } else {
        if (mlSc.phase === 'newlywed' || mlSc.phase === 'pregnant') {
          if (marriedYears >= 3) {
            advanceScenario('marriage_life', 'settled', {}, st);
          } else if (mlSc.phase === 'pregnant' && !isPregnant) {
            advanceScenario('marriage_life', 'newlywed', {}, st);
          }
        } else if (mlSc.phase === 'settled') {
          if (st.age >= 65) {
            advanceScenario('marriage_life', 'silver', {}, st);
          } else if (marriedYears >= 10) {
            advanceScenario('marriage_life', 'mature', {}, st);
          }
        } else if (mlSc.phase === 'mature') {
          if (st.age >= 65) {
            advanceScenario('marriage_life', 'silver', {}, st);
          }
        }
      }
    }
  }

  // 3. パートナー不在（破局・元恋人化・未交際）時のストーリー整合
  if (!partner && !spouse) {
    if (isScenarioActive('romance', null, st)) failScenario('romance', 'broken', st);
    if (isScenarioActive('cohabitation_limbo', null, st)) failScenario('cohabitation_limbo', 'broken', st);
    if (isScenarioActive('infidelity_crisis', null, st)) failScenario('infidelity_crisis', 'broken', st);
    if (isScenarioActive('wavering_heart', null, st)) failScenario('wavering_heart', 'broken', st);
    if (isScenarioActive('premarital_pregnancy', null, st)) failScenario('premarital_pregnancy', 'broken', st);
    if (isScenarioActive('marriage_life', null, st)) failScenario('marriage_life', 'broken', st);
    st.flags.cohabiting = false;
    st.flags.engaged = false;
  }

  // 4. 同棲していない場合の「同棲の行方」シナリオの整合
  if (!isCohabiting && !isMarried && isScenarioActive('cohabitation_limbo', null, st)) {
    failScenario('cohabitation_limbo', 'not_cohabiting', st);
  }

  // 5. 就職活動（career: job_hunting）と 就職（employed）の整合
  if (st.flags?.employed && isScenarioActive('career', 'job_hunting', st)) {
    advanceScenario('career', 'employed', {}, st);
  }
}
