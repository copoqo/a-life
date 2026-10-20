(window.eventDefs = window.eventDefs || []).push({
  "id": "sexual_longterm",
  "title": "長い交際と親密さ",
  "description": "長く一緒にいることで、親密さの形が変わってきた。",
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
          276,
          1091
        ]
      }
    ]
  },
  "weight": {
    "base": 14,
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
    "unique_key": "sexual_longterm"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "新しい時間の過ごし方を探す",
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
          "description": "新しい時間の過ごし方を探す。",
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
      "label": "気持ちを確かめる",
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
          "description": "気持ちを確かめる。",
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
      "label": "今の距離を尊重する",
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
          "description": "今の距離を尊重する。",
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
  "min": 23,
  "max": 90,
  "p": 0.14,
  "text": "長く一緒にいることで、親密さの形が変わってきた。",
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
    "shared_activity",
    "mutual_talk",
    "boundary"
  ],
  "classification": "daily"
});
