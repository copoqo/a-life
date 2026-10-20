(window.eventDefs = window.eventDefs || []).push({
  "id": "aesthetic_choice",
  "title": "美しさへのこだわり",
  "description": "身だしなみや部屋の雰囲気について、自分らしい美しさを考えた。",
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
          144,
          1151
        ]
      }
    ]
  },
  "weight": {
    "base": 12,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "aesthetic_choice"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "自分の感性を磨く",
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
          "description": "自分の感性を磨く。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 5
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "実用性を優先する",
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
          "description": "実用性を優先する。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": -1
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": 20000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "人と違う感性を楽しむ",
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
          "description": "人と違う感性を楽しむ。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 12,
  "max": 95,
  "p": 0.12,
  "text": "身だしなみや部屋の雰囲気について、自分らしい美しさを考えた。",
  "classification": "daily"
});
