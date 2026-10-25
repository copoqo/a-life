'use strict';
// 静的データ定義（写真・パラメータキー・地域・名前・職業・人間関係ロール）

// 仕様書準拠 内部パラメータ辞書 (第4章)
// 利用可能な大人アバター画像（0001〜0077から削除済みの0013を除外）
const EXCLUDED_ADULT_PHOTOS = new Set(['photo/0013.png']);
const AVAILABLE_ADULT_PHOTOS = Array.from({ length: 77 }, (_, i) => {
  const num = String(i + 1).padStart(4, '0');
  return `photo/${num}.png`;
}).filter(p => !EXCLUDED_ADULT_PHOTOS.has(p));

function pickRandomAdultPhoto(rngObj) {
  const randVal = (rngObj && typeof rngObj.next === 'function') ? rngObj.next() : Math.random();
  const idx = Math.floor(randVal * AVAILABLE_ADULT_PHOTOS.length);
  return AVAILABLE_ADULT_PHOTOS[idx] || 'photo/0001.png';
}
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

// 居住地は「地形・環境」「街区特性」の独立した2軸で管理する。
const TERRAINS = ['都市部', '郊外', '平野部', '山間部', '海辺', '離島'];
const DISTRICTS = ['住宅街', '繁華街', '商業地域', '農村集落', '工業地域', '高所得地域', '経済的困難が多い地域'];
const terrainWeights = [35, 27, 17, 12, 8, 1];

// 性・親密さ関連定数
const SEXUAL_KEYS = [['desire', '性的欲求'], ['initiative', '積極性'], ['shyness', '羞恥度'], ['curiosity', '好奇心'], ['selfKnowledge', '自己理解'], ['selfAcceptance', '自己肯定感'], ['boundaryVoice', '意思表明力'], ['intimacyNeed', '親密さ欲求']];

const PARTNER_NAMES = { female: FEMALE_NAMES, male: ['直樹', '陽介', '大輔', '健太', '翔太', '拓海', '悠斗', '蓮', '航平', '颯太', '雄大', '和也', '誠', '亮介', '智也', '陸', '駿', '圭介', '修平', '祐樹'] };
const BOND_ROLES = ['friend', 'colleague', 'teacher', 'neighbor', 'stranger', 'friends_sibling', 'partner_sibling', 'parent_friend', 'childs_teacher', 'bar_encounter'];
const BOND_ROLE_LABELS = { friend: '友人', classmate: '同級生・クラスメイト', childhood_friend: '幼馴染', club_mate: '部活・趣味の仲間', cram_school_friend: '塾の勉強仲間', senior: '先輩', junior: '後輩', mentor: '恩師・講師', colleague: '同僚', teacher: '学校の先生', neighbor: '隣人', stranger: '街で出会った人', friends_sibling: '友達のきょうだい', partner_sibling: 'パートナーのきょうだい', parent_friend: '子供の友達の親', childs_teacher: '子供の担任の先生', bar_encounter: 'お店で居合わせた人' };
