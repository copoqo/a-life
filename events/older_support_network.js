(window.eventDefs = window.eventDefs || []).push({
  "id": "older_support_network",
  "title": "頼れる人とのつながり",
  "description": "困ったときに頼れる人や制度を整理した。",
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
          780,
          1331
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
    "unique_key": "older_support_network"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "周囲とのつながりを深める",
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
          "description": "周囲とのつながりを深める。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 5
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
      "label": "公的な支援を調べる",
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
          "description": "公的な支援を調べる。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    }
  ],
  "min": 65,
  "max": 110,
  "p": 0.1,
  "text": "困ったときに頼れる人や制度を整理した。",
  "classification": "daily"
});
