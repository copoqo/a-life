(window.eventDefs = window.eventDefs || []).push({
  "id": "life_community_help",
  "title": "近所の助け合い",
  "description": "近所で困っている人を見かけた。",
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
    "base": 10,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "life_community_help"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "できる範囲で手伝う",
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
          "description": "できる範囲で手伝う。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "支援先を案内する",
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
          "description": "支援先を案内する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 25,
  "max": 90,
  "p": 0.1,
  "text": "近所で困っている人を見かけた。",
  "locationKind": "community",
  "classification": "daily"
});
