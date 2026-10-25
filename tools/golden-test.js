#!/usr/bin/env node
/*
 * ゴールデンマスターテスト（リファクタリング時の挙動不変チェック）
 *
 * index.html の <script> を記述順にそのまま疑似 DOM 上で実行し、
 * 固定シードで一生分を自動進行させて、最終状態 `s` と各ステップの描画 HTML をハッシュ化する。
 *
 *   node tools/golden-test.js            # 基準値と比較（不一致なら exit 1）
 *   node tools/golden-test.js --update   # 基準値を再生成
 *
 * 基準値: tools/golden-baseline.json
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const BASELINE = path.join(__dirname, 'golden-baseline.json');
const SEEDS = [1, 42, 20261025, 987654321];
const MODES = ['auto', 'choice'];
const MAX_STEPS = 2000;

// ---------------------------------------------------------------------------
// 疑似 DOM
// ---------------------------------------------------------------------------
function makeStyle() {
  const props = {};
  return new Proxy(props, {
    get(t, k) {
      if (k === 'setProperty') return (n, v) => { t[n] = String(v); };
      if (k === 'getPropertyValue') return n => t[n] ?? '';
      if (k === 'removeProperty') return n => { delete t[n]; };
      return t[k] ?? '';
    },
    set(t, k, v) { t[k] = v; return true; }
  });
}

class FakeElement {
  constructor(id = null, value = '') {
    this.id = id;
    this.innerHTML = '';
    this.textContent = '';
    this.value = value;
    this.style = makeStyle();
    this.dataset = {};
    this.attributes = {};
    this.open = false;
    this.disabled = false;
    this.checked = false;
    this.scrollTop = 0;
    this.className = '';
    this.title = '';
    this.nextElementSibling = null;
    const classes = new Set();
    this.classList = {
      add: c => classes.add(c),
      remove: c => classes.delete(c),
      contains: c => classes.has(c),
      toggle: c => (classes.has(c) ? (classes.delete(c), false) : (classes.add(c), true))
    };
  }
  querySelector() { return null; }
  querySelectorAll() { return []; }
  getBoundingClientRect() { return { width: 0, height: 0, top: 0, left: 0 }; }
  getAttribute(n) { return this.attributes[n] ?? null; }
  setAttribute(n, v) { this.attributes[n] = String(v); }
  addEventListener() { }
  removeEventListener() { }
  appendChild(c) { return c; }
  insertBefore(c) { return c; }
  insertAdjacentElement(_, c) { return c; }
}

function collectIds(html) {
  const ids = new Map();
  const re = /<(\w+)[^>]*\sid="([^"]+)"[^>]*>/g;
  let m;
  while ((m = re.exec(html))) {
    let value = '';
    if (m[1] === 'select') {
      const tail = html.slice(m.index);
      const sel = tail.match(/<option value="([^"]*)"[^>]*selected/) || tail.match(/<option value="([^"]*)"/);
      value = sel ? sel[1] : '';
    }
    ids.set(m[2], value);
  }
  return ids;
}

function collectScripts(html) {
  const out = [];
  const re = /<script(?:\s+src="([^"]+)")?\s*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) {
    if (m[1]) out.push({ src: m[1].split('?')[0] });
    else out.push({ code: m[2] });
  }
  return out;
}

// ---------------------------------------------------------------------------
// 1 ライフ実行
// ---------------------------------------------------------------------------
function runLife(seed, mode, { onProgress = null, maxSteps = MAX_STEPS } = {}) {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const ids = collectIds(html);
  const elements = new Map();
  for (const [id, value] of ids) elements.set(id, new FakeElement(id, value));
  elements.get('mode').value = mode;

  const htmlHash = crypto.createHash('sha256');
  const errors = [];
  let ctx;

  const runFile = (rel) => {
    const file = path.join(ROOT, rel);
    vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file });
  };

  const document = {
    getElementById: id => elements.get(id) || null,
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: () => new FakeElement(),
    body: new FakeElement('body'),
    documentElement: new FakeElement('html'),
    write(str) {
      const re = /<script src="([^"]+)"/g;
      let m;
      while ((m = re.exec(str))) runFile(m[1].split('?')[0]);
    }
  };

  const sandbox = {
    document,
    console: { log() { }, warn() { }, error: (...a) => errors.push(a.map(String).join(' ')) },
    setTimeout: () => 0,
    clearTimeout: () => { },
    requestAnimationFrame: () => 0,
    confirm: () => true,
    alert: () => { },
    matchMedia: () => ({ matches: false, addEventListener() { } }),
    addEventListener() { },
    localStorage: { removeItem() { } }
  };
  sandbox.window = sandbox;
  ctx = vm.createContext(sandbox);
  // 非決定要素を固定
  vm.runInContext(`(() => { let x = 123456789; Math.random = () => { x ^= x << 13; x ^= x >>> 17; x ^= x << 5; return (x >>> 0) / 4294967296; }; Date.now = () => 1700000000000; })();`, ctx);

  for (const sc of collectScripts(html)) {
    if (sc.src) runFile(sc.src);
    else vm.runInContext(sc.code, ctx);
  }

  const snapshotDom = () => {
    for (const [id, el] of elements) htmlHash.update(id + '\u0000' + el.innerHTML + '\u0000' + el.textContent + '\u0001');
  };

  const api = vm.runInContext(`({
    start: (seed) => start(seed),
    step: () => step(),
    render: () => render(),
    state: () => s,
    resolvePending: () => {
      if (!s.pending) return;
      if (s.pending === 'multiple_relationship') { settleMultiple(0); return; }
      const raw = eventDefs.find(x => x.id === s.pending);
      const cur = getEventCurrent(raw);
      if (!raw || raw.is_narrative || !cur.choices || !cur.choices.length) { settleNarrative(raw); return; }
      const dyn = getDynamicChoices(cur, s);
      settle(raw, dyn.length ? dyn[dyn.length - 1].originalIndex : 0);
    }
  })`, ctx);

  api.start(seed);
  snapshotDom();
  let steps = 0;
  while (!api.state().finished && steps < maxSteps) {
    if (api.state().pending) api.resolvePending();
    else api.step();
    api.render();
    snapshotDom();
    steps++;
    if (onProgress && steps % 100 === 0) onProgress(steps, api.state());
  }
  const st = api.state();
  const stateJson = JSON.stringify(st);
  return {
    steps,
    age: st.age,
    historyLen: st.history.length,
    bonds: st.bonds.length,
    stateHash: crypto.createHash('sha256').update(stateJson).digest('hex').slice(0, 16),
    htmlHash: htmlHash.digest('hex').slice(0, 16),
    errors: errors.length
  };
}

// ---------------------------------------------------------------------------
function runChild(key) {
  const { spawn } = require('child_process');
  return new Promise((resolve, reject) => {
    const cp = spawn(process.execPath, [__filename, '--one', key], { stdio: ['ignore', 'pipe', 'inherit'] });
    let out = '';
    cp.stdout.on('data', d => { out += d; });
    cp.on('close', code => (code === 0 ? resolve(JSON.parse(out)) : reject(new Error(`${key} exited ${code}`))));
  });
}

async function main() {
  const oneIdx = process.argv.indexOf('--one');
  if (oneIdx >= 0) {
    const [mode, seed] = process.argv[oneIdx + 1].split(':');
    process.stdout.write(JSON.stringify(runLife(Number(seed), mode)));
    return;
  }

  const update = process.argv.includes('--update');
  const t0 = Date.now();
  const keys = MODES.flatMap(mode => SEEDS.map(seed => `${mode}:${seed}`));
  const values = await Promise.all(keys.map(runChild));
  const results = {};
  keys.forEach((key, i) => {
    results[key] = values[i];
    console.log(key.padEnd(18), JSON.stringify(values[i]));
  });
  console.log(`(${((Date.now() - t0) / 1000).toFixed(1)}s)`);

  if (update || !fs.existsSync(BASELINE)) {
    fs.writeFileSync(BASELINE, JSON.stringify(results, null, 2) + '\n');
    console.log('baseline written:', path.relative(ROOT, BASELINE));
    return;
  }
  const base = JSON.parse(fs.readFileSync(BASELINE, 'utf8'));
  let ok = true;
  for (const key of Object.keys(base)) {
    const a = JSON.stringify(base[key]);
    const b = JSON.stringify(results[key]);
    if (a !== b) {
      ok = false;
      console.log(`MISMATCH ${key}\n  expected ${a}\n  actual   ${b}`);
    }
  }
  console.log(ok ? 'GOLDEN OK' : 'GOLDEN FAILED');
  process.exit(ok ? 0 : 1);
}

if (require.main === module) main().catch(e => { console.error(e); process.exit(1); });
module.exports = { runLife };
