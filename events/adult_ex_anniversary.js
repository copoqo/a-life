(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_ex_anniversary",
  "title": "過去の恋を思い出す",
  "description": "ふとしたきっかけで、かつての交際を思い出した。",
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
          264,
          1031
        ]
      }
    ]
  },
  "weight": {
    "base": 7,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_ex_anniversary"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "今の自分の変化を考える",
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
          "description": "今の自分の変化を考える。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "思い出を大切にする",
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
          "description": "思い出を大切にする。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 22,
  "max": 85,
  "p": 0.07,
  "text": "ふとしたきっかけで、かつての交際を思い出した。",
  "outcomes": [
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
