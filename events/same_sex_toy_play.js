(window.eventDefs = window.eventDefs || []).push({
  "id": "same_sex_toy_play",
  "title": "二人で選んだ玩具、愛液に塗れる玩具と指",
  "description": "二人で選んだ大人のおもちゃ。ベッドの上に並べた妖艶なアイテムを手に取り、どちらからともなく服を脱ぎ捨てる。艶やかなシリコンが秘所へと押し当てられ、激しい振動が充血した肉芽を震わせると、二人の口から交互に艶めかしい嬌声が漏れ出た。",
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
          240,
          551
        ]
      }
    ]
  },
  "weight": {
    "base": 14,
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
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "same_sex_toy_play"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "彼女の奥へ自分の指を深く沈めて掻き回す",
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
          "description": "バイブを押し当てられながら、彼女の奥へ自分の指を深く沈めて掻き回す。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "same_sex_society_bond",
                "delay": 1,
                "prob": 0.8
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "激しいバイブレーションの果てに潮を吹いて絶頂する",
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
          "description": "互いの秘所に玩具を沈め合い、激しいバイブレーションの果てに潮を吹いて絶頂する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            }
          ]
        }
      ]
    }
  ],
  "min": 20,
  "max": 45,
  "p": 0.14,
  "text": "二人で選んだ大人のおもちゃ。ベッドの上に並べた妖艶なアイテムを手に取り、どちらからともなく服を脱ぎ捨てる。艶やかなシリコンが秘所へと押し当てられ、激しい振動が充血した肉芽を震わせると、二人の口から交互に艶めかしい嬌声が漏れ出た。",
  "diary": [
    "玩具の唸るような振動が秘所の奥まで届き、愛液がとめどなく噴き出した。彼女に抱きしめられながら腰を跳ねさせ、快感に溺れ切った夜だった。",
    "道具を使いながらお互いを貪り合う背徳的な快楽。女同士だからこそ分かり合える刺激に、身体の芯まで痺れ切ってしまった。"
  ],
  "classification": "major",
  "is_major": true
});
