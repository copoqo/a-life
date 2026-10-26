'use strict';
// 出生時の家庭・人物状態の生成

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
    lastSeenAge: {},
    seenThisYear: [],
    lastVariationSubId: {},
    pending: null,
    history: [],
    yearEvents: [],
    monthEvents: [],
    eventsThisYear: 0,
    dailyEventsThisYear: 0,
    storyEventsThisYear: 0,
    sweetThisYear: false,
    crisisThisYear: false,
    tabooCountThisYear: 0,
    chains: [],
    scenarios: [],
    showImpactInHistory: false,
    finished: false
  };

  syncDisplay(st);
  st.rngState = r.state();
  return st;
}
