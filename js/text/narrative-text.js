'use strict';
// 選択肢ラベル整形・過去形変換・テンプレート差し込み

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

function injectPartnerName(str, partner) {
  if (!str) return str;
  const pName = partner?.name || '';
  let res = str;

  // テンプレート記法（{partner}, {partner_name}, {spouse}, {target} 等）をパートナー名で置き換える
  if (pName) {
    res = res.replace(/\{(?:partner(?:_?name)?|spouse(?:_?name)?|target(?:_?name)?)\}/gi, pName);
  } else {
    res = res.replace(/\{(?:partner(?:_?name)?|target(?:_?name)?)\}/gi, 'パートナー');
    res = res.replace(/\{spouse(?:_?name)?\}/gi, '配偶者');
  }

  // 記念日関連テンプレート（既婚時は結婚記念日、未婚交際時は結ばれた記念日）
  const isMarriedState = partner?.status === 'spouse' || (typeof s !== 'undefined' && (s.flags?.married || s.bonds?.some(b => b.status === 'spouse')));
  res = res.replace(/\{anniversary\}/g, isMarriedState ? '結婚記念日' : '二人が結ばれた記念日');
  res = res.replace(/\{anniversary_short\}/g, isMarriedState ? '結婚記念' : '記念');

  if (partner && partner.gender === 'female') {
    // 同性パートナー時の汎用テキスト内での身体・行為表現の自然な補正
    res = res.replace(/太い熱情/g, '熱い指先と柔肌');
    res = res.replace(/硬い熱塊|熱く硬くなった肉塊|熱い肉塊/g, '熱く濡れた指先と素肌');
    res = res.replace(/奥深く貫かれる|奥まで貫かれる/g, '奥深くまで指先で満たされる');
    res = res.replace(/乱暴なピストン|激しいピストン/g, '執拗で激しい愛撫');
    res = res.replace(/胸板/g, '柔らかな胸元');
  }
  return res;
}
