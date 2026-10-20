(window.eventDefs = window.eventDefs || []).push({
  "id": "move",
  "title": "住む場所を考える",
  "description": "今とは違う場所で暮らす選択肢が浮かんだ。",
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
          240,
          971
        ]
      }
    ]
  },
  "weight": {
    "base": 6,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "move"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "引っ越しを検討する",
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
          "description": "引っ越しを検討する。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": -50000
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "今の場所で暮らす",
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
          "description": "今の場所で暮らす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
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
  "min": 20,
  "max": 80,
  "p": 0.055,
  "text": "今とは違う場所で暮らす選択肢が浮かんだ。",
  "classification": "daily"
});
