(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_rainy_day_classroom",
  "title": "外は土砂降りの雨と教室のトランプ大会",
  "description": "校庭が使えない雨の昼休み。机を四つくっつけて、友達とトランプの「大富豪」や「スピード」で大盛り上がりする。",
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
          84,
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
    "unique_key": "elem_rainy_day_classroom"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "「スピード」で白熱し、机をバシバシ叩いて大笑いする",
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
          "description": "「スピード」で白熱し、机をバシバシ叩いて大笑いする",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "自由帳にオリジナル漫画や可愛いイラストを描き合って見せ合う",
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
          "description": "自由帳にオリジナル漫画や可愛いイラストを描き合って見せ合う",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 7,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "校庭が使えない雨の昼休み。机を四つくっつけて、友達とトランプの「大富豪」や「スピード」で大盛り上がりする。",
  "diary": [
    "雨で外に出られなかったから教室でトランプした。「スピード」で手がぶつかりそうになりながら大騒ぎして、お腹が痛くなるくらい笑った。",
    "〇〇ちゃんと自由帳にイラストを描き合っこした。ドレスのデザインを描いたら「すっごく上手！」って褒めてもらえて嬉しかった。将来デザイナーになろうかな。"
  ],
  "classification": "daily"
});
