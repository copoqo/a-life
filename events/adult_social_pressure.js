(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_social_pressure",
  "title": "周囲からの期待",
  "description": "恋愛や結婚について、周囲から自分の希望とは違う期待を向けられた。",
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
          791
        ]
      }
    ]
  },
  "weight": {
    "base": 8,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_social_pressure"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "自分の考えを伝える",
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
          "description": "自分の考えを伝える。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "話題を変えて距離を取る",
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
          "description": "話題を変えて距離を取る。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    }
  ],
  "min": 20,
  "max": 65,
  "p": 0.08,
  "text": "恋愛や結婚について、周囲から自分の希望とは違う期待を向けられた。",
  "classification": "daily"
});
