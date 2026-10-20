(window.eventDefs = window.eventDefs || []).push({
  "id": "life_grief",
  "title": "大切な存在との別れ",
  "description": "親しかった人や大切にしていた存在を失い、寂しさを感じた。",
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
          336,
          1091
        ]
      }
    ]
  },
  "weight": {
    "base": 5,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "life_grief"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "誰かに話を聞いてもらう",
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
          "description": "誰かに話を聞いてもらう。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": -3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "思い出を静かに振り返る",
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
          "description": "思い出を静かに振り返る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    }
  ],
  "min": 28,
  "max": 90,
  "p": 0.045,
  "text": "親しかった人や大切にしていた存在を失い、寂しさを感じた。",
  "classification": "daily"
});
