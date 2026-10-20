(window.eventDefs = window.eventDefs || []).push({
  "id": "life_menstrual_health",
  "title": "月経と体調の変化",
  "description": "月経に伴う体調の変化が、日々の過ごし方に影響した。",
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
          611
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
    "unique_key": "life_menstrual_health"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "無理せず休む",
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
          "description": "無理せず休む。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
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
          "id": "outcome_1",
          "weight": 1,
          "description": "医療機関で相談する。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 4
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
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
  "max": 50,
  "p": 0.08,
  "text": "月経に伴う体調の変化が、日々の過ごし方に影響した。",
  "classification": "daily"
});
