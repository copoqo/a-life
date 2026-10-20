(window.eventDefs = window.eventDefs || []).push({
  "id": "hobby",
  "title": "新しい趣味",
  "description": "気になる趣味や活動に出会った。",
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
          120,
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
    "unique_key": "hobby"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "始めてみる",
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
          "description": "始めてみる。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 7
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "今回は見送る",
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
          "description": "今回は見送る。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 20000
            }
          ]
        }
      ]
    }
  ],
  "min": 10,
  "max": 90,
  "p": 0.085,
  "text": "気になる趣味や活動に出会った。",
  "classification": "daily"
});
