(window.eventDefs = window.eventDefs || []).push({
  "id": "first_date_memory",
  "title": "初デートの記憶",
  "description": "初めて二人で出かけた日のことを思い出した。",
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
          228,
          1031
        ]
      },
      {
        "path": "history.flags.firstDate",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 14,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "first_date_memory"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "今の関係に生かす",
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
          "description": "今の関係に生かす。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手と思い出を話す",
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
          "description": "相手と思い出を話す。",
          "effects": [
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
      "id": "choice_2",
      "label": "心の中にしまう",
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
          "description": "心の中にしまう。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "min": 19,
  "max": 85,
  "p": 0.14,
  "text": "初めて二人で出かけた日のことを思い出した。",
  "outcomes": [
    "reflection",
    "mutual_talk",
    "reflection"
  ],
  "classification": "daily"
});
