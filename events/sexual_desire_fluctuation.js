(window.eventDefs = window.eventDefs || []).push({
  "id": "sexual_desire_fluctuation",
  "title": "疼く下腹と、抑えきれない性欲の波",
  "description": "ふとした瞬間に身体の奥がじんわりと熱くなり、無性に肌の重なりや指先の愛撫が恋しくなる夜がある。自分の身体が求める淫らな衝動の強まりに戸惑う。",
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
          216,
          1031
        ]
      }
    ]
  },
  "weight": {
    "base": 16,
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
    "unique_key": "sexual_desire_fluctuation"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "身体の疼きを受け入れて素直に向き合う",
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
          "description": "身体の疼きを受け入れて素直に向き合う。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "sexual_taboo_solitude",
                "delay": 1,
                "prob": 0.85
              }
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手に求めて身体を寄せ合う",
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
          "description": "相手に求めて身体を寄せ合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "partner_morning_passion",
                "delay": 1,
                "prob": 0.85
              }
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "一人で息を整えて鎮まるのを待つ",
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
          "id": "outcome_2",
          "weight": 1,
          "description": "一人で息を整えて鎮まるのを待つ。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
  "min": 18,
  "max": 85,
  "p": 0.16,
  "text": "ふとした瞬間に身体の奥がじんわりと熱くなり、無性に肌の重なりや指先の愛撫が恋しくなる夜がある。自分の身体が求める淫らな衝動の強まりに戸惑う。",
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ],
  "outcomes": [
    "reflection",
    "mutual_talk",
    "reflection"
  ],
  "classification": "daily"
});
