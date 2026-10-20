(window.eventDefs = window.eventDefs || []).push({
  "id": "life_menopause_care",
  "title": "更年期の体調",
  "description": "睡眠や気分、身体の調子に変化を感じた。",
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
          504,
          791
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
    "unique_key": "life_menopause_care"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "医療機関で相談する",
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
          "description": "医療機関で相談する。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "生活リズムを整える",
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
          "description": "生活リズムを整える。",
          "effects": [
            {
              "path": "trait.constitution.current",
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
  "min": 42,
  "max": 65,
  "p": 0.1,
  "text": "睡眠や気分、身体の調子に変化を感じた。",
  "classification": "daily"
});
