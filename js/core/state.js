'use strict';
// グローバル状態（現在の人生 s と乱数 rng）

// イベントデータは events/*.js から読み込まれます (window.eventDefs)


let s, rng;

function chance(p) { return rng.next() < Math.max(0, Math.min(1, p)) }
