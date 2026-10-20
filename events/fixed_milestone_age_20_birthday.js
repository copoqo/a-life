(window.eventDefs = window.eventDefs || []).push({
  "id": "fixed_milestone_age_20_birthday",
  "is_fixed": true,
  "title": "二十歳の誕生日・大人の嗜みと解禁された夜",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 240
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 251
      }
    ]
  },
  "weights": {
    "base": 100
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "fixed_milestone_age_20_birthday"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "大切な人とグラスを合わせ、初めてのお酒の味にほんのり頬を染める",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 3,
            "intimacyNeed": 2,
            "communication": 2
          },
          "narrative": "「20歳のお誕生日おめでとう」と掲げられたグラス。カチンと鳴る澄んだ音とともに、甘いカクテルをひと口含む。喉を滑り落ちる心地よい熱と、じんわりと温まる身体。大人たちの仲間入りをした実感が嬉しかった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "少し背伸びしてバーのカウンターに座り、大人の夜の雰囲気を味わう",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "curiosity": 2,
            "initiative": 2,
            "selfKnowledge": 2
          },
          "narrative": "間接照明が灯る落ち着いたバー。マスターに勧められたお酒をゆっくり味わう。タバコの煙の香りや静かなジャズ、グラスを傾ける大人たちの世界に足を踏み入れたスリルに胸が躍った。",
          "id": "outcome_1"
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "お酒や嗜好品に流されず、健康で自立した20代を過ごす誓いを立てる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 3,
            "morality": 2,
            "boundaryVoice": 2
          },
          "narrative": "20歳になって何でもできる自由を手に入れたからこそ、自制心と健康を大切にしたい。乾杯の一杯を上品に味わった後は、これからの将来に向けた計画をじっくりと考え直した。",
          "id": "outcome_2"
        }
      ]
    }
  ],
  "min": 20,
  "max": 20,
  "p": 1,
  "once": true,
  "text": "二十歳の誕生日。日付が変わると同時に、法律上のお酒とタバコが正式に解禁される。グラスに注がれた琥珀色の液体。ほんのひと口喉を潤すと、熱い刺激とほろ苦さが胸に染み渡り、法律的にも社会通念的にも『完全な大人』となった自分を実感する。",
  "diary": [
    "今日で20歳！ 初めて飲んだカクテルは、少し苦くて甘くて、喉の奥がぽかぽかした。乾杯してくれた人の笑顔が嬉しくて、忘れられない誕生日になった。",
    "20歳解禁！ バーで頼んだお酒、ちょっと大人になった気分でドキドキした。お酒の席の大人の会話って、学生の頃とは全然違う世界に見える。",
    "二十歳。お酒もタバコも自分の判断で選べる年齢になった。自由には責任が伴うからこそ、自分の身体も心も大事にして、素敵な女性になりたい。"
  ],
  "classification": "daily"
});
