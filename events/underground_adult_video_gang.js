(window.eventDefs = window.eventDefs || []).push({
  "id": "underground_adult_video_gang",
  "title": "レンズの前での狂乱・複数男優による肉体調教",
  "description": "高額な出演料を提示され承諾したハード企画。薄暗いスタジオのマットの上に手足を広げられ、屈強な複数人の男優たちに取り囲まれる。口、秘所、指先……あらゆる粘膜を同時に貪られ、前後から休みなく肉棒を突き込まれる。肉と肉がぶつかり合う凄まじい轟音の中、自我が快楽で蕩け、何発もの精液を全身と肉穴の奥に注ぎ込まれて痙攣する……。",
  "content_rating": "adult",
  "enabled": true,
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.alive",
        "op": "eq",
        "value": true
      },
      {
        "path": "person.age_months",
        "op": "between",
        "value": [
          228,
          515
        ]
      }
    ]
  },
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "state.current_libido",
          "op": "gte",
          "value": 30
        },
        "factor": 1.5
      }
    ]
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "underground_adult_video_gang"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "快楽の獣に堕ちる",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": [
          {
            "path": "display.confidence",
            "coefficient": 0.01
          }
        ]
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【何本もの肉棒を貪欲に飲み干す】入れ替わり立ち替わりのピストンに啼き狂い、快楽の獣に堕ちる。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 250000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -10
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "膣内に注がれた白濁液を晒して絶頂の余韻に浸る",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": [
          {
            "path": "display.confidence",
            "coefficient": 0.01
          }
        ]
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【精液まみれの身体でカメラに笑顔を向ける】顔や胸元、膣内に注がれた白濁液を晒して絶頂の余韻に浸る。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 220000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -9
            }
          ]
        }
      ]
    }
  ],
  "min": 19,
  "max": 42,
  "p": 0.04,
  "text": "高額な出演料を提示され承諾したハード企画。薄暗いスタジオのマットの上に手足を広げられ、屈強な複数人の男優たちに取り囲まれる。口、秘所、指先……あらゆる粘膜を同時に貪られ、前後から休みなく肉棒を突き込まれる。肉と肉がぶつかり合う凄まじい轟音の中、自我が快楽で蕩け、何発もの精液を全身と肉穴の奥に注ぎ込まれて痙攣する……。",
  "diary": [
    "複数の男優に全身の穴という穴を同時に貫かれた。息つく暇もなく肉棒が入れ替わり立ち替わり肉腔を掻き回し、濁流のような精液を子宮口に叩き込まれて、白目を剥いて狂ったように絶頂を繰り返した。",
    "全身を白濁した精液でベトベトに汚されたまま、カメラに向かってピースサインを作らされた。人間としての尊厳を脱ぎ捨てた圧倒的な快感に、頭がぼんやりと痺れていた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy"
  ],
  "once": true,
  "classification": "major",
  "is_major": true
});
