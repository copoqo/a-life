(window.eventDefs = window.eventDefs || []).push({
  "id": "loss",
  "title": "大切な人との別れ",
  "description": "身近な人との別れを経験し、人生について考えた。",
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
          540,
          1211
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
    "unique_key": "loss"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "人と気持ちを分かち合う",
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
          "description": "人と気持ちを分かち合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": -4
            },
            {
              "path": "skill.communication_skill",
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
    },
    {
      "id": "choice_1",
      "label": "一人で静かに過ごす",
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
          "description": "一人で静かに過ごす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": -5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 45,
  "max": 100,
  "p": 0.05,
  "text": "身近な人との別れを経験し、人生について考えた。",
  "classification": "daily"
});
