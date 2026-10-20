(window.eventDefs = window.eventDefs || []).push({
  "id": "child_exam",
  "title": "夜更けの机と冷えた足先の温もり",
  "description": "静まり返った真夜中の勉強机。参考書を照らすスタンドの光の下、迫る将来への重圧に押しつぶされそうになる。冷え切った素足を重ね合わせながら、温かい誰かの腕に抱きしめられたい切なさが募る。",
  "content_rating": "general",
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
          168,
          227
        ]
      }
    ]
  },
  "weight": {
    "base": 14,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "child_exam"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "計画的に勉強する",
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
          "description": "不安を振り払うようにペンを走らせ、計画的に勉強する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 7
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "心を落ち着ける",
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
          "description": "家族や信頼できる友人に不安を打ち明け、心を落ち着ける。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    }
  ],
  "min": 14,
  "max": 18,
  "p": 0.14,
  "text": "静まり返った真夜中の勉強机。参考書を照らすスタンドの光の下、迫る将来への重圧に押しつぶされそうになる。冷え切った素足を重ね合わせながら、温かい誰かの腕に抱きしめられたい切なさが募る。",
  "diary": [
    "真夜中の静寂の中で机に向かい続けた。冷えた爪先を擦り合わせながら、いつかこの努力が実を結ぶ日を夢見た。",
    "不安で涙がこぼれそうになり、温かいお茶を入れてもらって話を聞いてもらった。誰かが支えてくれている安心感に救われた。"
  ],
  "classification": "daily"
});
