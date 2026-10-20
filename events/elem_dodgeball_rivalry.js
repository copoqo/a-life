(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_dodgeball_rivalry",
  "title": "昼休みの白熱ドッジボールと男子のエース",
  "description": "昼休みの校庭。クラス対抗のドッジボールで、男子のエースが豪速球を構えている。逃げ惑う女子の中で、最後まで内野に残った。",
  "content_rating": "general",
  "enabled": true,
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
          96,
          155
        ]
      }
    ]
  },
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "elem_dodgeball_rivalry"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "逃げずに真正面から胸元で豪速球をキャッチする",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "逃げずに真正面から胸元で豪速球をキャッチする",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.healthy_habits",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "身軽にかわしてフェイントをかけ、男子を翻弄する",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "身軽にかわしてフェイントをかけ、男子を翻弄する",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "min": 8,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "昼休みの校庭。クラス対抗のドッジボールで、男子のエースが豪速球を構えている。逃げ惑う女子の中で、最後まで内野に残った。",
  "diary": [
    "男子のエースが投げてきた強いボール、逃げずに胸の前でバシッと止めた！ 腕がじんじん痛かったけど、男子が目を丸くして驚いていて、すっごくスカッとした！",
    "何本飛んできてもギリギリでかわしてやった。相手がムキになって息を切らしているのを見て思わずニヤリ。すばしっこさなら負けない。"
  ],
  "classification": "daily"
});
