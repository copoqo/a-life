(window.eventDefs = window.eventDefs || []).push({
  "id": "life_disaster_preparation",
  "title": "災害への備え",
  "description": "地域の防災情報を見て、日頃の備えを考えた。",
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
          216,
          1091
        ]
      }
    ]
  },
  "weight": {
    "base": 9,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "life_disaster_preparation"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "備蓄を整える",
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
          "description": "備蓄を整える。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": -30000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "避難場所を確認する",
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
          "description": "避難場所を確認する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 90,
  "p": 0.085,
  "text": "地域の防災情報を見て、日頃の備えを考えた。",
  "classification": "daily"
});
