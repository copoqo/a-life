#!/usr/bin/env node
'use strict';

/**
 * イベント定義 静的検証・到達性診断ツール (Step 1 & 2)
 * 使い方: node tools/validate-events.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const EVENTS_DIR = path.join(ROOT, 'events');

global.window = { eventDefs: [] };
global.window.defineEvent = function (def) {
  if (Array.isArray(def.age) && def.age.length === 2) {
    def.min = def.age[0];
    def.max = def.age[1];
  }
  global.window.eventDefs.push(def);
  return def;
};

require(path.join(EVENTS_DIR, 'manifest.js'));
for (const rel of (global.window.eventFiles || [])) {
  require(path.join(EVENTS_DIR, rel));
}

const events = window.eventDefs;
const eventById = new Map(events.map(e => [e.id, e]));

const VALID_PRESETS = new Set([
  'partnered', 'single', 'unmarried', 'married', 'multi_partner',
  'female_partner', 'male_partner', 'has_children', 'student',
  'virgin', 'sex_experienced', 'first_sex_with_partner',
  'first_kiss_unexperienced', 'first_kiss_experienced', 'first_date_experienced',
  'low_morality', 'underground_eligible', 'adult_drinking', 'underage_drinking_allowed'
]);

const VALID_TRIGGERS = new Set(['normal', 'chain_only', 'fixed', 'precursor', 'state_narrative']);

const VALID_SNAPSHOT_PATHS = new Set([
  'person.age_months',
  'person.alive',
  'person.identity.gender',
  'person.identity.sexual_orientation',
  'person.experience.has_sexual_experience',
  'person.career.employment_status',
  'person.career.occupation_id',
  'person.family.partner_id',
  'person.family.relationship_status',
  'person.family.marital_status',
  'person.family.children_ids',
  'person.economy.cash',
  'person.economy.monthly_income',
  'person.residence.district_id',
  'derived.residence.area_type',
  'derived.libido_tier',
  'derived.age_years',
  'derived.has_partner',
  'derived.has_spouse',
  'derived.has_children',
  'derived.partner_gender_relation',
  'derived.friend_count',
  'derived.net_worth',
  'display.health',
  'display.finances',
  'display.intellect',
  'display.sociability',
  'display.attractiveness',
  'display.confidence',
  'display.happiness',
  'display.sexual_desire'
]);

function isValidPath(p) {
  if (VALID_SNAPSHOT_PATHS.has(p)) return true;
  return ['trait.', 'skill.', 'state.', 'history.flags.', 'history.event_counts.', 'context.'].some(prefix => p.startsWith(prefix));
}

function collectConditionLeaves(cond, out = []) {
  if (!cond) return out;
  if (cond.all) cond.all.forEach(c => collectConditionLeaves(c, out));
  else if (cond.any) cond.any.forEach(c => collectConditionLeaves(c, out));
  else if (cond.not) collectConditionLeaves(cond.not, out);
  else if (cond.path) out.push(cond);
  return out;
}

const errors = [];
const warnings = [];
const chainedFrom = new Map();

for (const e of events) {
  const str = JSON.stringify(e);
  for (const m of str.matchAll(/"eventId"\s*:\s*"([^"]+)"/g)) {
    const targetId = m[1];
    if (!eventById.has(targetId)) {
      errors.push(`[BrokenChain] ${e.id} -> 存在しないイベント "${targetId}" をチェーン指定しています`);
    }
    if (!chainedFrom.has(targetId)) chainedFrom.set(targetId, []);
    if (!chainedFrom.get(targetId).includes(e.id)) chainedFrom.get(targetId).push(e.id);
  }
}

for (const e of events) {
  // 1. 必須フィールドと年齢境界の検証
  if (typeof e.min !== 'number' || typeof e.max !== 'number' || e.min > e.max) {
    errors.push(`[AgeBounds] ${e.id}: 不正な min/max (${e.min}〜${e.max})`);
  }
  if (e.content_rating === 'adult' && e.max < 18) {
    errors.push(`[AdultAgeConflict] ${e.id}: content_rating="adult" なのに max=${e.max} (<18) のため到達不能`);
  }
  if (e.weights) {
    warnings.push(`[KeyTypo] ${e.id}: "weights" が残っています（"weight" に統一推奨）`);
  }

  // 2. プリセットとトリガーの検証
  if (!Array.isArray(e.presets)) {
    warnings.push(`[MissingPresets] ${e.id}: presets 配列が未定義です`);
  } else {
    for (const p of e.presets) {
      if (!VALID_PRESETS.has(p)) {
        errors.push(`[UnknownPreset] ${e.id}: 未登録のプリセット "${p}"`);
      }
    }
  }
  if (!VALID_TRIGGERS.has(e.trigger)) {
    errors.push(`[UnknownTrigger] ${e.id}: 未登録の trigger "${e.trigger}"`);
  }

  // 3. トリガー種別ごとの到達可能性検証
  if (e.trigger === 'chain_only' && !(chainedFrom.get(e.id)?.length > 0)) {
    errors.push(`[UnreachableChainOnly] ${e.id}: trigger="chain_only" ですが、どのイベントからもチェーンされていません`);
  }
  if (e.trigger === 'precursor') {
    if (!Array.isArray(e.precursor_for) || e.precursor_for.length === 0) {
      errors.push(`[InvalidPrecursor] ${e.id}: trigger="precursor" ですが precursor_for が空です`);
    } else {
      for (const tid of e.precursor_for) {
        if (!eventById.has(tid)) {
          errors.push(`[InvalidPrecursorTarget] ${e.id}: precursor_for "${tid}" が存在しません`);
        }
      }
    }
  }
  if (e.trigger === 'state_narrative' && !e.auto_trigger?.flag) {
    errors.push(`[InvalidStateNarrative] ${e.id}: trigger="state_narrative" ですが auto_trigger.flag が未定義です`);
  }

  // 4. 条件DSLのパス検証・矛盾検証
  const leaves = collectConditionLeaves(e.conditions);
  const eqValuesByPath = {};
  for (const l of leaves) {
    if (!isValidPath(l.path)) {
      errors.push(`[InvalidConditionPath] ${e.id}: 未登録の条件パス "${l.path}"`);
    }
    if (l.op === 'eq') {
      eqValuesByPath[l.path] = eqValuesByPath[l.path] || new Set();
      eqValuesByPath[l.path].add(JSON.stringify(l.value));
    }
  }
  for (const [p, set] of Object.entries(eqValuesByPath)) {
    if (set.size > 1) {
      errors.push(`[ContradictoryCondition] ${e.id}: "${p}" に対して矛盾する複数の eq 条件 (${[...set].join(', ')}) が設定されています`);
    }
  }
}

console.log('====================================================');
console.log(` イベント静的検証レポート (対象: ${events.length} イベント)`);
console.log('====================================================');
console.log(`エラー数  : ${errors.length}`);
console.log(`警告数    : ${warnings.length}`);

if (errors.length > 0) {
  console.error('\n❌ エラー詳細:');
  errors.forEach(err => console.error('  -', err));
}
if (warnings.length > 0) {
  console.warn('\n⚠️ 警告詳細:');
  warnings.forEach(w => console.warn('  -', w));
}

// トリガー・プリセット集計サマリ
const byTrigger = {};
const byPreset = {};
for (const e of events) {
  byTrigger[e.trigger] = (byTrigger[e.trigger] || 0) + 1;
  const key = (e.presets && e.presets.length) ? e.presets.join(' + ') : '年齢条件のみ (基本条件)';
  byPreset[key] = (byPreset[key] || 0) + 1;
}

console.log('\n📊 トリガー種別内訳:');
for (const [k, v] of Object.entries(byTrigger)) {
  console.log(`  - ${k.padEnd(18)}: ${v} 件`);
}

console.log(`\n📊 プリセット組み合わせ内訳 (全 ${Object.keys(byPreset).length} パターン):`);
Object.entries(byPreset)
  .sort((a, b) => b[1] - a[1])
  .forEach(([k, v]) => {
    console.log(`  - [${String(v).padStart(3)}件] ${k}`);
  });

if (errors.length > 0) process.exit(1);
console.log('\n✅ 全イベントの整合性・到達性チェックをパスしました。');
