(window.eventDefs = window.eventDefs || []).push({
  "id": "sexual_health",
  "title": "性感染症と健康",
  "description": "性的な健康について、検査や予防の情報に触れた。",
  "content_rating": "adult",
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
          947
        ]
      }
    ]
  },
  "weight": {
    "base": 12,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "state.current_libido",
          "op": "gte",
          "value": 30
        },
        "factor": 1.5
      }
    ]
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "sexual_health"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "検査や相談を検討する",
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
          "description": "検査や相談を検討する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "パートナーと話す",
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
          "description": "パートナーと話す。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "情報を整理する",
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
          "description": "情報を整理する。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
  "max": 78,
  "p": 0.12,
  "text": "性的な健康について、検査や予防の情報に触れた。",
  "phase": "any",
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ],
  "outcomes": [
    "reflection",
    "mutual_talk",
    "reflection"
  ],
  "classification": "daily"
});
