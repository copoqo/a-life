(window.eventDefs = window.eventDefs || []).push({
  "id": "life_nature_change",
  "title": "街の変化",
  "description": "長く住む街の風景が少しずつ変わっていると感じた。",
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
          300,
          1091
        ]
      }
    ]
  },
  "weight": {
    "base": 9,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "life_nature_change"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "地域の歴史を調べる",
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
          "description": "地域の歴史を調べる。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
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
      "label": "新しい場所を歩く",
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
          "description": "新しい場所を歩く。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 25,
  "max": 90,
  "p": 0.09,
  "text": "長く住む街の風景が少しずつ変わっていると感じた。",
  "locationKind": "community",
  "classification": "daily"
});
