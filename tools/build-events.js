#!/usr/bin/env node
'use strict';

/**
 * イベント定義 スキーマ統一・ストーリーパック集約ビルドツール (Step 3)
 * 使い方: node tools/build-events.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const EVENTS_DIR = path.join(ROOT, 'events');
const PACKS_DIR = path.join(EVENTS_DIR, 'packs');

global.window = { eventDefs: [] };
global.window.defineEvent = function (def) {
  global.window.eventDefs.push(def);
  return def;
};

// 既存イベントの読み込み（packs/ があれば packs/ から、なければ直下の個別ファイルから）
const existingManifest = path.join(EVENTS_DIR, 'manifest.js');
if (fs.existsSync(existingManifest)) {
  require(existingManifest);
  for (const rel of (global.window.eventFiles || [])) {
    const fp = path.join(EVENTS_DIR, rel);
    if (fs.existsSync(fp)) require(fp);
  }
} else {
  const files = fs.readdirSync(EVENTS_DIR)
    .filter(f => f.endsWith('.js') && f !== 'loader.js' && f !== 'manifest.js')
    .sort();
  for (const f of files) {
    require(path.join(EVENTS_DIR, f));
  }
}

const rawEvents = global.window.eventDefs;
console.log(`Loaded ${rawEvents.length} events for pack consolidation.`);

const PACK_META = {
  '01_milestones_physiology': '固定マイルストーン・初経・更年期・身体的節目',
  '02_childhood_elementary': '幼少期・小学生の日常・遊び・友達・身体の不思議',
  '03_teen_school_puberty': '中高生の学園生活・部活・受験・思春期の芽生え・背伸び',
  '04_student_partner_romance': '学生カップルの放課後・青春の秘め事',
  '05_youth_career_lifestyle': '進学・就職・仕事キャリア・趣味・旅行・暮らし',
  '06_romance_first_milestones': '出会い・告白・初デート・初キス・初体験・同性愛アーク',
  '07_partner_relationship_intimacy': '交際パートナーとの日常・対話・情交・関係の変化',
  '08_marriage_family_life': 'プロポーズ・結婚・夫婦生活・育児・介護・家族の転機',
  '09_sexuality_desire_conflict': '性的自己探求・渇望・コンプレックス・満員電車連鎖',
  '10_district_taboo_underground': '街区イベント・背徳の逢瀬・公衆スリル・アングラ連鎖',
  '11_mature_senior_life': '円熟期・中高年・シニア期・老後の振り返り'
};

function assignPack(e) {
  const id = e.id;
  const minAge = e.age ? e.age[0] : e.min;
  const maxAge = e.age ? e.age[1] : e.max;

  if (id.startsWith('fixed_milestone_') || id === 'life_menstrual_health' || id === 'life_menopause_care' || id === 'sexual_menopause' || id === 'sexual_aging') {
    return '01_milestones_physiology';
  }
  if (id.startsWith('child_') || id.startsWith('childhood_') || id.startsWith('elem_') || (maxAge <= 13 && !id.startsWith('mild_sexuality_'))) {
    return '02_childhood_elementary';
  }
  if (
    id.startsWith('teen_') ||
    id.startsWith('mild_sexuality_') ||
    id.startsWith('stretched_') ||
    id === 'puberty_awakening' ||
    id === 'exam_atmosphere_precursor' ||
    id === 'career_path_after_highschool' ||
    id === 'friends_story' ||
    id === 'underage_drinking' ||
    id === 'youth_hangover_regret' ||
    id === 'travel_school_trip'
  ) {
    return '03_teen_school_puberty';
  }
  if (id.startsWith('student_partner_')) {
    return '04_student_partner_romance';
  }
  if (
    id.startsWith('youth_') ||
    id.startsWith('young_') ||
    id.startsWith('career_') ||
    id.startsWith('outing_') ||
    id.startsWith('travel_') ||
    id.startsWith('local_') ||
    id === 'hobby' ||
    id === 'move' ||
    id === 'aesthetic_choice' ||
    id === 'moral_dilemma' ||
    id === 'health_warning_precursor' ||
    id === 'adult_balcony_vegetable_garden' ||
    id === 'adult_cooking_class_challenge' ||
    id === 'adult_marathon_finish_line' ||
    id === 'adult_pet_adoption_shelter' ||
    id === 'adult_class_reunion_thirties' ||
    id === 'adult_career_promotion_responsibility' ||
    id === 'adult_home_purchase_blueprint'
  ) {
    return '05_youth_career_lifestyle';
  }
  if (
    id.startsWith('first_') ||
    id === 'confessed_to' ||
    id === 'street_approach' ||
    id === 'street_encounter_allure' ||
    id === 'adult_meeting' ||
    id === 'adult_first_date' ||
    id === 'adult_romantic_encounter' ||
    id === 'adult_feelings' ||
    id === 'partner_intimacy_hesitation' ||
    id === 'partner_first_intimacy_experienced' ||
    id === 'intimacy_awakening' ||
    id === 'intimacy_afterthought' ||
    id.startsWith('same_sex_')
  ) {
    return '06_romance_first_milestones';
  }
  if (
    id.startsWith('partner_') ||
    id.startsWith('story_partner_') ||
    id.startsWith('positive_') ||
    id === 'sweet_lingering_passion' ||
    id === 'adult_future_together' ||
    id === 'adult_trust_test' ||
    id === 'adult_boundaries' ||
    id === 'adult_consent_revisit' ||
    id === 'adult_desire' ||
    id === 'adult_ex_anniversary' ||
    id === 'adult_intimacy' ||
    id === 'adult_intimacy_reflection' ||
    id === 'adult_mismatched_desire' ||
    id === 'adult_new_chapter' ||
    id === 'adult_private_relationship' ||
    id === 'adult_private_values' ||
    id === 'adult_relationship_conflict' ||
    id === 'adult_relationship_distance' ||
    id === 'adult_relationship_growth' ||
    id === 'adult_relationship_privacy' ||
    id === 'adult_reunion' ||
    id === 'adult_self_discovery' ||
    id === 'adult_shared_intimacy' ||
    id === 'adult_social_pressure'
  ) {
    return '07_partner_relationship_intimacy';
  }
  if (
    id === 'adult_marriage_proposal' ||
    id === 'marriage_ceremony' ||
    id.startsWith('marital_') ||
    id.startsWith('life_') ||
    id === 'loss' ||
    id === 'mature_child_leaving_nest'
  ) {
    return '08_marriage_family_life';
  }
  if (
    id.startsWith('sexual_') ||
    id.startsWith('yearning_') ||
    id.startsWith('conflict_') ||
    id.startsWith('crowded_train_') ||
    id === 'body_complex_cherished' ||
    id === 'dark_urges_liberation'
  ) {
    return '09_sexuality_desire_conflict';
  }
  if (
    id.startsWith('district_') ||
    id.startsWith('encounter_') ||
    id.startsWith('rare_') ||
    id.startsWith('underground_') ||
    id === 'daily_morning_trash_gaze'
  ) {
    return '10_district_taboo_underground';
  }
  return '11_mature_senior_life';
}

const COVERED_CONDITION_PATHS = new Set([
  'person.alive',
  'person.age_months',
  'derived.has_partner',
  'derived.has_spouse',
  'person.family.marital_status',
  'derived.has_children',
  'person.experience.has_sexual_experience',
  'person.career.employment_status',
  'skill.morality',
  'derived.partner_gender_relation',
  'history.flags.firstKiss',
  'history.flags.firstDate'
]);

function isDummyUtility(u) {
  if (u === 1) return true;
  if (!u || typeof u !== 'object') return false;
  if ((u.base ?? 0) !== 0) return false;
  if (u.conditional_terms && u.conditional_terms.length > 0) return false;
  const terms = u.terms || [];
  if (terms.length === 0) return true;
  if (terms.length === 1 && terms[0].path === 'display.confidence' && terms[0].coefficient === 0.01) return true;
  return false;
}

const FEMALE_VARIANTS_ADDITIONS = {
  adult_shared_intimacy: {
    text: '閉じられた寝室、互いに剥き出しの柔肌を擦り合わせ、熱い吐息を絡ませる。愛液に濡れそぼった秘唇と秘唇、そしてしなやかな指先が触れ合い、身体の奥深くまで溶け合いたい欲望が臨界に達する。',
    choices: [
      {
        id: 'choice_0',
        label: '互いの濡れた秘所を押しつけ合い、奥深くまで指で満たしてほしいとねだる',
        outcomes: [{ id: 'outcome_0', weight: 1, description: '互いの濡れた秘所を押しつけ合い、奥深くまで指で満たしてほしいとねだる。', effects: [{ path: 'state.mood', op: 'add', value: 4 }] }]
      },
      {
        id: 'choice_1',
        label: '敏感な肌を這う舌と指先の感触を焦らしながら楽しむ',
        outcomes: [{ id: 'outcome_1', weight: 1, description: '敏感な肌を這う舌と指先の感触を焦らしながら楽しむ。', effects: [{ path: 'state.mood', op: 'add', value: 3 }] }]
      },
      {
        id: 'choice_2',
        label: 'ただ抱き締め合って眠りたいと伝える',
        outcomes: [{ id: 'outcome_2', weight: 1, description: 'ただ抱き締め合って眠りたいと伝える。', effects: [{ path: 'state.stress', op: 'add', value: -2 }] }]
      }
    ],
    diary: [
      '重なり合うふくよかな乳房、ぬちぬちと擦れ合う蜜唇の水音。彼女の熱い吐息と甘い匂いに包まれて、下腹の奥から突き上げる絶頂に二人で同時に果てた。',
      'じっくりと指先や舌で肌を這われ、身体の芯まで愛液で濡らされた。奥深くまで指で掻き回される快感に、何度も背筋が弓なりになった。',
      '身体を重ねるだけが答えじゃない。それでも、触れ合いたいと疼く肉体の欲求を抑えるのは少し苦しかった。'
    ]
  },
  partner_loving_passion_after_date: {
    text: '夜景の見えるレストランでのロマンチックなデートの帰り道。二人の部屋のドアが閉まり、静寂に包まれた瞬間、抑えきれない熱情とともに彼女に抱き寄せられる。柔らかな唇を重ねるごとに理性が溶け出し、愛し合う女同士の身体が貪り合うようにシーツの上へと倒れ込んだ。',
    choices: [
      {
        id: 'choice_0',
        label: '彼女の首に腕を回して抱きつき、熱い口づけを受け入れながら身体を預ける',
        outcomes: [{ id: 'outcome_0', weight: 1, description: '彼女の首に腕を回して抱きつき、熱い口づけを受け入れながら身体を預ける。', effects: [{ path: 'state.mood', op: 'add', value: 6 }] }]
      },
      {
        id: 'choice_1',
        label: '恥ずかしがりながらも彼女のブラウスのボタンを外し、自ら求めて柔肌を重ねる',
        outcomes: [{ id: 'outcome_1', weight: 1, description: '恥ずかしがりながらも彼女のブラウスのボタンを外し、自ら求めて柔肌を重ねる。', effects: [{ path: 'state.mood', op: 'add', value: 6 }] }]
      }
    ],
    diary: [
      'デートの余韻のままベッドに倒れ込み、彼女の柔らかな唇と指先に全身を愛撫された。甘い香りと濡れた水音に包まれて、幸せな絶頂に何度も震えた。',
      '自分から彼女の服を脱がせ、熱い素肌を密着させた。互いの蜜で濡れた肌を擦り合わせ、朝まで愛を囁き合った。'
    ]
  },
  partner_sex_reconciliation_makeup: {
    text: '生活の些細な食い違いから起きた口論。冷え切った空気のまま迎えた夜。言葉では素直に謝れない彼女が、不意に寝室で強引に身体を引き寄せてくる。怒りと悔しさが残る心とは裏腹に、熱を帯びた指先の愛撫と吐息に身体の芯が抗えず疼き始める。',
    choices: [
      {
        id: 'choice_0',
        label: '怒りで肩を押し返しながらも、執拗な指と舌の愛撫に抗えず身体を濡らして屈服する',
        outcomes: [{ id: 'outcome_0', weight: 1, description: '怒りで肩を押し返しながらも、執拗な指と舌の愛撫に抗えず身体を濡らして屈服する。', effects: [{ path: 'state.mood', op: 'add', value: 3 }] }]
      },
      {
        id: 'choice_1',
        label: '「もう怒ってないから…」と彼女の背中にしがみつき、仲直りのぬくもりを受け入れる',
        outcomes: [{ id: 'outcome_1', weight: 1, description: '「もう怒ってないから…」と彼女の背中にしがみつき、仲直りのぬくもりを受け入れる。', effects: [{ path: 'state.mood', op: 'add', value: 5 }] }]
      }
    ],
    diary: [
      '喧嘩したままだったのに、強引に抱きすくめられて敏感な場所を責められると、悔しいほどすぐに濡れてしまった。最後は涙目で彼女にしがみついて果てた。',
      '意地を張っていた心が、彼女の熱い体温に触れた瞬間にほどけた。言葉の代わりに何度も唇と肌を重ねて仲直りした。'
    ]
  },
  partner_anniversary_deep_love: {
    text: '二人が結ばれた記念日。特別なディナーを終え、二人きりの甘い夜が始まる。キャンドルの灯りに照らされたベッドの上で、互いへの尽きない愛情を確かめ合うように、優しく、そして濃厚に女同士の滑らかな肌と肌を重ね合わせる。',
    choices: [
      {
        id: 'choice_0',
        label: '灯りを落としたベッドで、互いの愛を囁きながらゆっくりと柔肌の密着を味わう',
        outcomes: [{ id: 'outcome_0', weight: 1, description: '灯りを落としたベッドで、互いの愛を囁きながらゆっくりと柔肌の密着を味わう。', effects: [{ path: 'state.mood', op: 'add', value: 7 }] }]
      },
      {
        id: 'choice_1',
        label: 'いつもより情熱的に太ももを絡ませ、溢れ出る愛液を散らして果てまで乱れる',
        outcomes: [{ id: 'outcome_1', weight: 1, description: 'いつもより情熱的に太ももを絡ませ、溢れ出る愛液を散らして果てまで乱れる。', effects: [{ path: 'state.mood', op: 'add', value: 7 }] }]
      }
    ],
    diary: [
      '記念日の夜、キャンドルの灯りの中で彼女と時間をかけて愛し合った。指先が触れるたびに愛しさが込み上げ、胸がいっぱいになった。',
      '特別な夜の高揚感に任せて、互いの秘所を熱く擦り合わせて何度も絶頂を迎えた。これからもずっと彼女と歩いていきたい。'
    ]
  },
  sexual_satisfaction: {
    text: '汗と愛液でシーツを湿らせ、もつれ合っていた手足を解く。執拗な愛撫で痺れた下腹の疼きや、柔らかな肌に残る彼女の甘い匂いを噛み締めながら、今の交わりについて言葉を交わす。',
    choices: [
      {
        id: 'choice_0',
        label: 'どれほど気持ちよく満たされたかを素直に伝える',
        outcomes: [{ id: 'outcome_0', weight: 1, description: 'どれほど気持ちよく満たされたかを素直に伝える。', effects: [{ path: 'state.mood', op: 'add', value: 4 }] }]
      },
      {
        id: 'choice_1',
        label: 'もっと優しく触れてほしかったと耳元で囁く',
        outcomes: [{ id: 'outcome_1', weight: 1, description: 'もっと優しく触れてほしかったと耳元で囁く。', effects: [{ path: 'skill.communication_skill', op: 'add', value: 3 }] }]
      },
      {
        id: 'choice_2',
        label: '一人で太ももを擦り合わせて余韻を噛み締める',
        outcomes: [{ id: 'outcome_2', weight: 1, description: '一人で太ももを擦り合わせて余韻を噛み締める。', effects: [{ path: 'state.current_libido', op: 'add', value: 15 }] }]
      }
    ],
    diary: [
      '彼女の体温と自分の愛液が混ざり合った匂いに包まれながら、満たされた幸福感を伝えた。肌がまだじんじんと熱い。',
      'もっと激しく掻き回してほしかった……そんな淫らな欲求を耳元で囁くなんて、自分でも驚くほど身体が火照っていた。',
      '行為の後も下腹の奥がじわじわと疼いて、甘い余韻の痺れが爪先まで残っていた。'
    ]
  }
};

function applyStateAndStageRules(id, minAge, maxAge, presets, choices) {
  const pSet = new Set(presets);

  // 1. 学生区分（中高生 school_student vs 大学生 university_student）の厳密化
  if (id.startsWith('student_partner_') && id !== 'student_partner_campus_lawn_night') {
    pSet.delete('student');
    pSet.add('school_student');
    if (id === 'student_partner_graduation_memory') {
      minAge = 18; maxAge = 18;
      pSet.add('rel_stage_kissed');
    } else if (id === 'student_partner_first_sleepover') {
      minAge = 16; maxAge = 18;
      pSet.add('rel_stage_kissed');
    } else if (id === 'student_partner_rain_umbrella' || id === 'student_partner_study_session') {
      maxAge = 18;
    } else {
      maxAge = 18;
      pSet.add('rel_stage_kissed');
    }
  }
  if (id === 'student_partner_campus_lawn_night') {
    pSet.delete('student');
    pSet.add('university_student');
    pSet.add('rel_stage_intimate');
    minAge = 20; maxAge = 22;
  }
  if (['teen_friend_fallout', 'teen_first_love', 'teen_first_part_time_job', 'same_sex_awakening', 'same_sex_first_kiss', 'encounter_friends_sibling', 'encounter_teacher', 'encounter_teacher_deep_bond'].includes(id)) {
    pSet.add('school_student');
    if (maxAge > 18) maxAge = 18;
  }
  if (id === 'youth_job_hunting_suit') {
    pSet.add('university_student');
    minAge = 20; maxAge = 22;
  }

  // 2. 就労・職場条件 (employed) の厳密化
  if ([
    'travel_company', 'youth_first_paycheck_parents', 'youth_overtime_convenience_bento',
    'young_mentor', 'career_downsizing_rumor', 'career_unemployment', 'career_workplace_friend',
    'career_recognition', 'career_burnout', 'adult_career_promotion_responsibility',
    'encounter_colleague', 'encounter_colleague_after_hours',
    'district_commercial_office_stairwell', 'district_commercial_underground_parking'
  ].includes(id)) {
    pSet.add('employed');
    if (minAge < 18) minAge = 18;
  }

  // 3. 一人暮らし・子供・元恋人・飲酒年齢の整合性
  if (id === 'youth_first_apartment_hunt' || id === 'young_living_alone') {
    pSet.add('not_living_alone');
    pSet.add('unmarried');
  }
  if (id === 'mature_child_leaving_nest' || id === 'senior_grandchild_summer_visit') {
    pSet.add('has_children');
  }
  if (['adult_reunion', 'adult_ex_anniversary', 'sexual_after_breakup', 'sexual_ex_memory'].includes(id)) {
    pSet.add('has_ex_partner');
  }
  if (id === 'outing_sports_event' || id === 'travel_friends') {
    if (minAge < 20) minAge = 20;
    pSet.add('adult_drinking');
  }

  // 4. パートナー性別・性的指向の整合性
  if (id === 'same_sex_awakening') {
    pSet.add('same_sex_open');
  }
  if (id === 'partner_bereavement') {
    pSet.add('partnered');
  }
  if (id === 'same_sex_first_kiss') {
    pSet.add('same_sex_open');
    pSet.add('first_kiss_unexperienced');
  }
  if (id === 'same_sex_secret_fingers') {
    pSet.add('partnered');
    pSet.add('female_partner');
  }
  if (id === 'same_sex_intimate_bath') {
    pSet.add('partnered');
    pSet.add('female_partner');
    pSet.add('rel_stage_kissed');
  }
  if (id === 'same_sex_tribadism' || id === 'same_sex_toy_play') {
    pSet.add('partnered');
    pSet.add('female_partner');
    pSet.add('rel_stage_intimate');
  }
  if (id === 'same_sex_society_bond' || id === 'same_sex_mature_passion') {
    pSet.add('partnered');
    pSet.add('female_partner');
    pSet.add('rel_stage_established');
  }
  if (['partner_sex_fertility_timing', 'sexual_contraception', 'conflict_intimacy_fear', 'sexual_submission', 'sexual_domination', 'life_parenthood_question'].includes(id)) {
    pSet.add('partnered');
    pSet.add('male_partner');
  }
  if (
    id.startsWith('underground_') || id.startsWith('rare_') || id.startsWith('district_') ||
    ['encounter_stranger_adult', 'encounter_friends_sibling', 'encounter_teacher', 'encounter_teacher_deep_bond', 'encounter_colleague', 'encounter_colleague_after_hours', 'encounter_bar_stranger', 'encounter_neighbor', 'encounter_partner_sibling', 'encounter_partner_sibling_dinner_risk', 'encounter_parent_friend', 'encounter_parent_friend_secret_hotel', 'encounter_childs_teacher'].includes(id)
  ) {
    pSet.add('hetero_or_bi');
  }
  if (id.startsWith('district_') || id.startsWith('rare_') || id === 'sexual_exhibition_thrill') {
    pSet.add('taboo_awakened');
    pSet.add('low_morality');
  }

  // 5. 関係性ステージ (Stage 1 -> 2 -> 3 -> 4) の順序整合性
  if (id === 'first_date_milestone' || id === 'adult_first_date') {
    pSet.add('partnered');
    pSet.add('unmarried');
  }
  if (id === 'first_kiss_afterthought') {
    pSet.add('partnered');
    pSet.add('first_kiss_experienced');
  }
  if (id === 'partner_intimacy_hesitation' || id === 'first_intimacy_milestone' || id === 'partner_first_intimacy_experienced') {
    pSet.add('rel_stage_kissed');
  }
  if ([
    'partner_intimacy_male', 'partner_intimacy_female', 'partner_loving_passion_after_date',
    'partner_passion_lifestyle', 'adult_shared_intimacy', 'adult_intimacy',
    'adult_consent_revisit', 'positive_intimacy_humor', 'sexual_first_conversation',
    'sexual_pace', 'sexual_satisfaction', 'sexual_contraception', 'sexual_health',
    'sexual_privacy', 'sexual_jealousy', 'sexual_submission', 'sexual_domination',
    'story_partner_frustration_tease_aftermath'
  ].includes(id)) {
    pSet.add('partnered');
    pSet.add('rel_stage_intimate');
  }
  if (id === 'travel_partner') {
    pSet.add('partnered');
    pSet.add('rel_stage_kissed');
  }
  if ([
    'partner_anniversary_deep_love', 'positive_anniversary', 'partner_sex_mastered_pleasure',
    'partner_sex_mature_comfortable_bond', 'partner_sex_reconciliation_makeup',
    'partner_sex_tired_reluctance', 'partner_sex_fertility_timing',
    'adult_relationship_conflict', 'adult_relationship_distance', 'adult_mismatched_desire',
    'adult_relationship_growth', 'adult_new_chapter', 'adult_future_together',
    'adult_marriage_proposal', 'sexual_longterm', 'sexual_taboo_fantasy',
    'story_partner_deep_bond_aftermath', 'story_partner_distance_reconcile_hint',
    'life_parenthood_question'
  ].includes(id)) {
    pSet.add('partnered');
    pSet.add('rel_stage_established');
  }

  // 6. daily_morning_trash_gaze の通常選択肢(choice_0)から不自然なチェーン・フラグ設定を除去
  if (id === 'daily_morning_trash_gaze' && Array.isArray(choices) && choices[0]?.outcomes?.[0]?.effects) {
    choices[0].outcomes[0].effects = choices[0].outcomes[0].effects.filter(
      eff => eff.path !== 'chain' && eff.path !== 'history.flags.trash_gaze_ignored_or_thrill'
    );
  }

  if (['first_date_milestone', 'first_kiss_milestone', 'first_kiss_afterthought'].includes(id)) {
    minAge = 14;
  }

  // 7. 選択肢ごとの人間関係 (bond) 効果の付与
  const bondMap = CHOICE_BOND_EFFECTS[id];
  if (bondMap && Array.isArray(choices)) {
    choices.forEach((c, idx) => {
      const bondSpec = bondMap[idx];
      if (bondSpec && c && Array.isArray(c.outcomes) && c.outcomes[0]) {
        const effs = c.outcomes[0].effects;
        if (Array.isArray(effs)) {
          c.outcomes[0].effects = effs.filter(eff => eff.path !== 'bond');
          c.outcomes[0].effects.push({
            path: 'bond',
            op: 'set',
            value: bondSpec
          });
        } else if (effs && typeof effs === 'object') {
          effs.bond = bondSpec;
        } else {
          c.outcomes[0].effects = [{
            path: 'bond',
            op: 'set',
            value: bondSpec
          }];
        }
      }
    });
  }

  return { minAge, maxAge, presets: Array.from(pSet) };
}

const EVENT_OUTCOMES_ADDITIONS = {
  confessed_to: ['rejection', 'friend_accept', 'friend_consider', 'accept_partner', 'accept_partner_kiss'],
  street_encounter_allure: ['none', 'none', 'meeting_stranger', 'closer_stranger', 'intimate_stranger'],
  adult_romantic_encounter: ['romantic_encounter', 'none'],
  adult_marriage_proposal: ['marry', 'mutual_talk', 'mutual_talk'],
  marriage_ceremony: ['marry', 'marry'],
  marital_infidelity_temptation: ['infidelity', 'boundary', 'infidelity'],
  encounter_teacher: ['meeting_teacher', 'meeting_teacher', 'meeting_teacher', 'meeting_teacher', 'meeting_teacher'],
  same_sex_awakening: ['same_sex_awakening', 'reflection'],
  same_sex_first_kiss: ['same_sex_first_kiss', 'reflection'],
  same_sex_secret_fingers: ['shared_intimacy', 'shared_intimacy'],
  same_sex_intimate_bath: ['shared_intimacy', 'shared_intimacy'],
  same_sex_society_bond: ['mutual_talk', 'mutual_talk'],
  teen_friend_fallout: ['reconcile_friend', 'distance']
};

const CHOICE_BOND_EFFECTS = {
  fixed_milestone_sex_education: {
    2: { role: 'classmate', status: 'close', gender: 'female', metContext: '保健の授業後に語り合った友達' }
  },
  fixed_milestone_coming_of_age_18: {
    1: { role: 'classmate', status: 'close', metContext: '成人式で再会した同級生' }
  },
  fixed_milestone_age_20_birthday: {
    0: { role: 'friend', status: 'close', metContext: '20歳の誕生日に乾杯した大切な人' },
    1: { role: 'bar_encounter', status: 'acquaintance', metContext: '20歳の夜にバーで出会った人' }
  },
  childhood_daily_play: {
    0: { role: 'childhood_friend', status: 'acquaintance', metContext: '砂場遊びの友達' },
    1: { role: 'childhood_friend', status: 'acquaintance', metContext: '一緒に泥団子を作った友達' }
  },
  elem_bicycle_scraped_knee: {
    1: { role: 'childhood_friend', status: 'close', metContext: '自転車練習で励ましてくれた友達' }
  },
  elem_park_stranger_swings: {
    1: { role: 'friend', status: 'acquaintance', metContext: '夕暮れ公園のブランコで出会った子' }
  },
  child_first_friend: {
    0: { role: 'childhood_friend', status: 'close', gender: 'female', affection: 65, trust: 60, metContext: '放課後の秘密を分け合った親友' },
    1: { role: 'classmate', status: 'acquaintance', gender: 'female', metContext: '放課後に話したクラスメイト' }
  },
  elem_cram_school_first_day: {
    1: { role: 'cram_school_friend', status: 'acquaintance', gender: 'female', metContext: '進学塾で隣の席になった他校の子' }
  },
  elem_cram_school_steamed_bun: {
    0: { role: 'cram_school_friend', status: 'close', gender: 'female', metContext: '塾帰りに肉まんを分け合った親友' },
    1: { role: 'cram_school_friend', status: 'close', gender: 'female', metContext: '模試のクラスアップを誓った塾仲間' }
  },
  elem_sleepover_pajama_party: {
    0: { role: 'friend', status: 'close', gender: 'female', metContext: 'お泊まり会で夜更かしした友達' },
    1: { role: 'friend', status: 'close', gender: 'female', metContext: 'お泊まり会で本音を話した親友' }
  },
  elem_secret_base_shrine: {
    0: { role: 'childhood_friend', status: 'close', metContext: '秘密基地の仲間' },
    1: { role: 'childhood_friend', status: 'close', metContext: '秘密基地の掟を交わした仲間' }
  },
  elem_dodgeball_rivalry: {
    0: { role: 'classmate', status: 'acquaintance', gender: 'male', metContext: 'ドッジボールで競い合った男子' },
    1: { role: 'classmate', status: 'acquaintance', gender: 'male', metContext: 'ドッジボールのライバル男子' }
  },
  elem_graduation_autograph_tears: {
    0: { role: 'classmate', status: 'close', gender: 'male', romanticInterest: 65, metContext: '卒業式で寄せ書きをくれた男子' },
    1: { role: 'childhood_friend', status: 'close', gender: 'female', affection: 70, metContext: '小学校卒業時に誓い合った親友' }
  },
  child_club: {
    0: { role: 'club_mate', status: 'close', metContext: '部活で共に汗を流した仲間' },
    1: { role: 'club_mate', status: 'acquaintance', metContext: '部活の仲間' }
  },
  teen_club_activity_tournament: {
    0: { role: 'club_mate', status: 'close', metContext: '最後の地区総体を共に戦った部活仲間' },
    1: { role: 'club_mate', status: 'close', metContext: '部活の大会で支え合った仲間' }
  },
  teen_first_smartphone_group: {
    0: { role: 'classmate', status: 'close', metContext: '深夜のグループ通話の仲間' }
  },
  teen_cultural_festival_haunted: {
    0: { role: 'classmate', status: 'close', metContext: '文化祭を一緒に盛り上げた同級生' },
    1: { role: 'classmate', status: 'acquaintance', metContext: '文化祭のクラスメイト' }
  },
  teen_school_trip_night: {
    0: { role: 'friend', status: 'close', gender: 'female', metContext: '修学旅行の夜に恋バナした友達' }
  },
  teen_karaoke_afterschool: {
    0: { role: 'friend', status: 'close', metContext: '放課後カラオケで盛り上がった友達' },
    1: { role: 'friend', status: 'acquaintance', metContext: '放課後カラオケの友達' }
  },
  teen_first_love: {
    0: { role: 'classmate', status: 'acquaintance', romanticInterest: 78, affection: 48, metContext: '密かに初恋を寄せた同級生' },
    1: { role: 'classmate', status: 'close', romanticInterest: 78, affection: 55, metContext: '初恋の相手' }
  },
  teen_first_part_time_job: {
    0: { role: 'colleague', status: 'close', metContext: '初バイト先の仲間' },
    1: { role: 'colleague', status: 'acquaintance', metContext: '初バイト先の同僚' }
  },
  friends_story: {
    2: { role: 'friend', status: 'close', gender: 'female', metContext: '恋や経験談を話してくれた友達' },
    3: { role: 'friend', status: 'close', gender: 'female', metContext: '秘密の関心を打ち明け合った親友' },
    4: { role: 'friend', status: 'close', gender: 'female', metContext: '深い経験談を語り合った友達' }
  },
  mild_sexuality_first_period_panic: {
    0: { role: 'friend', status: 'close', gender: 'female', metContext: '初めての生理で助けてくれた友達' }
  },
  mild_sexuality_accidental_brush: {
    0: { role: 'classmate', status: 'acquaintance', gender: 'male', romanticInterest: 68, metContext: '理科室で隣り合った男子' }
  },
  mild_sexuality_whisper_earlobe: {
    0: { role: 'senior', status: 'close', gender: 'male', romanticInterest: 72, metContext: '図書室で声をかけてきた先輩' }
  },
  stretched_secret_piercing: {
    0: { role: 'friend', status: 'close', gender: 'female', metContext: 'お揃いのピアスを開けた親友' }
  },
  stretched_night_drive_view: {
    0: { role: 'senior', status: 'close', gender: 'male', romanticInterest: 70, metContext: '夜のドライブに誘ってくれた先輩' }
  },
  stretched_bar_counter_solo: {
    0: { role: 'bar_encounter', status: 'acquaintance', gender: 'male', metContext: 'バーのカウンターで出会った人' }
  },
  stretched_night_club_bass: {
    0: { role: 'friend', status: 'acquaintance', metContext: 'ナイトクラブで意気投合した仲間' }
  },
  hobby: {
    0: { role: 'club_mate', status: 'acquaintance', metContext: '新しい趣味を通じて出会った仲間' }
  },
  local_community: {
    0: { role: 'neighbor', status: 'acquaintance', metContext: '地域活動で知り合ったご近所さん' }
  },
  young_mentor: {
    0: { role: 'mentor', status: 'close', trust: 60, metContext: '親身に導いてくれた職場の先輩' }
  },
  youth_job_hunting_suit: {
    0: { role: 'colleague', status: 'acquaintance', metContext: '就活の選考で出会った同期' },
    1: { role: 'colleague', status: 'close', metContext: '就活を共に励まし合った仲間' }
  },
  youth_live_concert_fever: {
    0: { role: 'club_mate', status: 'acquaintance', metContext: 'ライブ会場で意気投合したファン仲間' }
  },
  career_workplace_friend: {
    0: { role: 'colleague', status: 'close', metContext: '仕事以外でも親しくなった職場の同僚' },
    1: { role: 'colleague', status: 'acquaintance', metContext: '職場の信頼できる同僚' }
  },
  career_unemployment: {
    3: { role: 'colleague', status: 'close', trust: 58, metContext: '退職時に相談に乗ってくれた先輩・同僚' }
  },
  travel_company: {
    0: { role: 'colleague', status: 'close', metContext: '社員旅行で親睦を深めた同僚' },
    2: { role: 'colleague', status: 'close', metContext: '社員旅行で本音を語り合った同僚' }
  },
  travel_friends: {
    0: { role: 'friend', status: 'close', gender: 'female', metContext: '温泉旅行で本音を語り明かした女友達' },
    1: { role: 'friend', status: 'close', gender: 'female', metContext: '温泉街を一緒に散策した女友達' }
  },
  adult_cooking_class_challenge: {
    0: { role: 'club_mate', status: 'acquaintance', metContext: '週末の料理教室の仲間' }
  },
  adult_pet_adoption_shelter: {
    0: { role: 'friend', status: 'close', metContext: '保護猫の譲渡会で知り合った友人' }
  },
  adult_marathon_finish_line: {
    0: { role: 'club_mate', status: 'acquaintance', metContext: '市民マラソンのランナー仲間' },
    1: { role: 'club_mate', status: 'close', metContext: '市民マラソンを共に完走した仲間' }
  },
  adult_career_promotion_responsibility: {
    0: { role: 'junior', status: 'close', trust: 58, metContext: 'リーダーとして指導した信頼できる後輩' }
  },
  adult_class_reunion_thirties: {
    0: { role: 'classmate', status: 'close', metContext: '三十歳の同窓会で再会した旧友' },
    1: { role: 'classmate', status: 'close', romanticInterest: 72, metContext: '同窓会で語り合った昔の想い人' }
  },
  life_friend_marriage: {
    0: { role: 'friend', status: 'close', metContext: '結婚式で幸せを分かち合った親友' }
  },
  life_friend_distance: {
    0: { role: 'friend', status: 'close', metContext: '久しぶりに連絡を取り合って絆が戻った友人' }
  },
  mature_pottery_wheel_focus: {
    0: { role: 'mentor', status: 'acquaintance', metContext: '陶芸教室の先生・仲間' }
  },
  older_new_hobby: {
    1: { role: 'club_mate', status: 'close', metContext: 'シニア期の学びを通じて出会った仲間' }
  },
  retirement: {
    0: { role: 'neighbor', status: 'close', metContext: '退職後の地域・趣味活動の仲間' }
  },
  older_support_network: {
    0: { role: 'neighbor', status: 'close', metContext: '老後に支え合う地域の友人' }
  }
};

function cleanEventSchema(e) {
  let minAge = e.age ? e.age[0] : e.min;
  let maxAge = e.age ? e.age[1] : e.max;

  // Check if conditions has any leaf not already represented by age, presets, or requires_flag
  let reqFlag = e.requires_flag;
  const remainingConds = [];
  for (const c of (e.conditions?.all || [])) {
    if (COVERED_CONDITION_PATHS.has(c.path)) continue;
    if (c.path && c.path.startsWith('history.flags.') && c.op === 'eq' && c.value === true && !reqFlag) {
      reqFlag = c.path.replace('history.flags.', '');
      continue;
    }
    remainingConds.push(c);
  }

  // Weight simplification
  let cleanWeight = e.weight;
  if (cleanWeight && typeof cleanWeight === 'object') {
    const hasAdd = Array.isArray(cleanWeight.additive) && cleanWeight.additive.length > 0;
    const hasMult = Array.isArray(cleanWeight.multipliers) && cleanWeight.multipliers.length > 0;
    if (!hasAdd && !hasMult) {
      cleanWeight = cleanWeight.base ?? Math.round((e.p ?? 0.2) * 100);
    }
  } else if (typeof cleanWeight !== 'number') {
    cleanWeight = Math.round((e.p ?? 0.2) * 100);
  }

  // Clean choices
  const cleanChoices = (e.choices || []).map(c => {
    if (Array.isArray(c) || typeof c !== 'object') return c;
    const copy = { ...c };
    if (copy.stat_effects) {
      copy.effects = copy.effects || copy.stat_effects;
      delete copy.stat_effects;
    }
    if (copy.requirements && Array.isArray(copy.requirements.all) && copy.requirements.all.length === 0 && Object.keys(copy.requirements).length === 1) {
      delete copy.requirements;
    }
    if (isDummyUtility(copy.utility)) {
      delete copy.utility;
    }
    return copy;
  });

  const adjusted = applyStateAndStageRules(e.id, minAge, maxAge, Array.isArray(e.presets) ? e.presets : [], cleanChoices);
  minAge = adjusted.minAge;
  maxAge = adjusted.maxAge;

  const defaultTitle = e.title || (e.id === 'partner_passion_lifestyle' ? 'パートナーとの親密な時間' : e.id === 'marital_life_intimacy' ? '夫婦の日常と語らい' : e.id);

  // Construct ordered clean object
  const out = {
    id: e.id,
    title: defaultTitle,
  };
  if (e.title_template) out.title_template = e.title_template;
  out.age = [minAge, maxAge];
  out.trigger = e.trigger || (e.is_fixed ? 'fixed' : 'normal');
  out.classification = e.classification || 'daily';
  out.content_rating = ['first_date_milestone', 'first_kiss_milestone', 'first_kiss_afterthought'].includes(e.id) ? 'general' : (e.content_rating || 'general');
  out.presets = adjusted.presets;
  out.weight = cleanWeight;

  const isOnce = !!(e.once || e.availability?.once_per_life);
  if (isOnce) out.once = true;
  if (e.availability?.max_occurrences && e.availability.max_occurrences !== 1 && e.availability.max_occurrences !== 99) {
    out.availability = e.availability;
  }

  if (reqFlag) out.requires_flag = reqFlag;
  if (e.precursor_for) out.precursor_for = e.precursor_for;
  if (e.auto_trigger) out.auto_trigger = e.auto_trigger;
  if (e.district) out.district = e.district;
  if (e.is_encounter) out.is_encounter = true;
  if (e.partner_intimacy_boost) out.partner_intimacy_boost = true;
  if (e.unfaithful_penalty_when_partnered) out.unfaithful_penalty_when_partnered = true;
  if (e.boosts && e.boosts.length > 0) out.boosts = e.boosts;
  if (e.locationKind) out.locationKind = e.locationKind;
  if (e.is_fixed) out.is_fixed = true;
  if (e.is_major) out.is_major = true;
  if (e.is_narrative) out.is_narrative = true;
  if (e.narrative_type) out.narrative_type = e.narrative_type;
  if (e.alcohol) out.alcohol = true;
  if (e.allowUnderage) out.allowUnderage = true;
  if (e.publicSex) out.publicSex = true;
  if (e.phase && e.phase !== 'any') out.phase = e.phase;
  if (e.context) out.context = e.context;
  if (e.requires_multiple_partners) out.requires_multiple_partners = true;
  if (e.actors && Object.keys(e.actors).length > 0) out.actors = e.actors;
  if (remainingConds.length > 0) out.conditions = { all: remainingConds };

  const mainText = e.text || e.description;
  if (mainText) out.text = mainText;
  if (e.description && e.description !== mainText) out.description = e.description;

  if (cleanChoices.length > 0) out.choices = cleanChoices;
  if (e.effects) out.effects = e.effects;
  const outList = EVENT_OUTCOMES_ADDITIONS[e.id] || e.outcomes;
  if (outList) out.outcomes = outList;
  if (e.sexualEffects) out.sexualEffects = e.sexualEffects;
  if (e.diary) out.diary = e.diary;
  const femVar = e.femaleVariant || FEMALE_VARIANTS_ADDITIONS[e.id];
  if (femVar) out.femaleVariant = femVar;
  if (e.maleVariant) out.maleVariant = e.maleVariant;
  if (e.variants) out.variants = e.variants;
  if (e.variations) out.variations = e.variations;

  return out;
}

const packs = {};
for (const k of Object.keys(PACK_META)) packs[k] = [];

for (const raw of rawEvents) {
  const cleaned = cleanEventSchema(raw);
  const packName = assignPack(cleaned);
  packs[packName].push(cleaned);
}

fs.mkdirSync(PACKS_DIR, { recursive: true });

const manifestFiles = [];
for (const [packKey, list] of Object.entries(packs)) {
  // Sort by min age, then id
  list.sort((a, b) => (a.age[0] - b.age[0]) || (a.age[1] - b.age[1]) || a.id.localeCompare(b.id));
  const relPath = `packs/${packKey}.js`;
  manifestFiles.push(relPath);

  const header = [
    `// ============================================================================`,
    `// Pack: ${packKey} — ${PACK_META[packKey]} (${list.length} events)`,
    `// ============================================================================`,
    ``
  ].join('\n');

  const body = list.map(ev => `window.defineEvent(${JSON.stringify(ev, null, 2)});`).join('\n\n') + '\n';
  fs.writeFileSync(path.join(EVENTS_DIR, relPath), header + body, 'utf8');
  console.log(`  Wrote ${relPath.padEnd(40)} (${list.length} events)`);
}

// Write updated manifest.js
const manifestCode = `// 自動生成: node tools/build-events.js\nwindow.eventFiles = ${JSON.stringify(manifestFiles, null, 2)};\n`;
fs.writeFileSync(path.join(EVENTS_DIR, 'manifest.js'), manifestCode, 'utf8');

// Remove legacy flat event files in events/
const oldFlatFiles = fs.readdirSync(EVENTS_DIR)
  .filter(f => f.endsWith('.js') && f !== 'loader.js' && f !== 'manifest.js');
for (const f of oldFlatFiles) {
  fs.unlinkSync(path.join(EVENTS_DIR, f));
}
if (oldFlatFiles.length > 0) {
  console.log(`Removed ${oldFlatFiles.length} legacy flat files from events/.`);
}
console.log(`Successfully built ${manifestFiles.length} event packs (${rawEvents.length} total events).`);
