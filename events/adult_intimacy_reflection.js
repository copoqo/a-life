(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_intimacy_reflection",
  "title": "肉体に刻まれた快楽の記憶",
  "description": "これまでに交わしてきた幾重もの肌の重なり、シーツを濡らした愛液、奥を激しく突かれた時の狂おしい絶頂。自らの肉体が知った性の悦びと悦楽の記憶を静かに思い返す。",
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
          1091
        ]
      }
    ]
  },
  "weight": {
    "base": 9,
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
    "unique_key": "adult_intimacy_reflection"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "身体の奥を突き抜けた激しい快感を反芻する",
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
          "description": "身体の奥を突き抜けた激しい快感を反芻する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "adult_relationship_growth",
                "delay": 1,
                "prob": 0.85
              }
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "望まない姿勢や痛みがあったことも冷静に振り返る",
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
          "description": "望まない姿勢や痛みがあったことも冷静に振り返る。",
          "effects": [
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "今の自分の身体が求める欲求を素直に受け止める",
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
          "description": "今の自分の身体が求める欲求を素直に受け止める。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 90,
  "p": 0.09,
  "text": "これまでに交わしてきた幾重もの肌の重なり、シーツを濡らした愛液、奥を激しく突かれた時の狂おしい絶頂。自らの肉体が知った性の悦びと悦楽の記憶を静かに思い返す。",
  "sexualEffects": [
    {
      "selfKnowledge": 4,
      "selfAcceptance": 2
    },
    {
      "boundaryVoice": 4
    },
    {
      "selfAcceptance": 3
    }
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "major",
  "is_major": true
});
