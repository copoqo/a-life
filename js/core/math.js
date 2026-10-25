'use strict';
// 仕様書準拠の基本数学関数・丸めルール・乱数生成器

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
