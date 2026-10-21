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

function cleanEventSchema(e) {
  const minAge = e.age ? e.age[0] : e.min;
  const maxAge = e.age ? e.age[1] : e.max;

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

  // Construct ordered clean object
  const out = {
    id: e.id,
    title: e.title,
  };
  if (e.title_template) out.title_template = e.title_template;
  out.age = [minAge, maxAge];
  out.trigger = e.trigger || (e.is_fixed ? 'fixed' : 'normal');
  out.classification = e.classification || 'daily';
  out.content_rating = e.content_rating || 'general';
  out.presets = Array.isArray(e.presets) ? e.presets : [];
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
  if (e.outcomes) out.outcomes = e.outcomes;
  if (e.sexualEffects) out.sexualEffects = e.sexualEffects;
  if (e.diary) out.diary = e.diary;
  if (e.femaleVariant) out.femaleVariant = e.femaleVariant;
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
