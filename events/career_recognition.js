(window.eventDefs = window.eventDefs || []).push({
  "id": "career_recognition",
  "title": "仕事を認められた",
  "description": "続けてきた仕事が周囲から評価された。",
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
          276,
          767
        ]
      }
    ]
  },
  "weight": {
    "base": 10,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "career_recognition"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "次の役割に挑戦する",
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
          "description": "次の役割に挑戦する。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 50000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "今の役割を深める",
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
          "description": "今の役割を深める。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
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
  "min": 23,
  "max": 63,
  "p": 0.1,
  "text": "続けてきた仕事が周囲から評価された。",
  "diary": [
    "周囲からの賞賛の言葉に胸が熱くなった。積み重ねてきた努力は間違っていなかった。",
    "足元を固め、誠実に今の仕事を全うする決意を新たにした。静かな充実感に満たされた。"
  ],
  "classification": "daily"
});
