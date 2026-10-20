(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_consent_revisit",
  "title": "気持ちは変わるもの",
  "description": "交際相手と、以前の約束や親密さへの希望が今も同じか確かめる機会があった。",
  "content_rating": "adult",
  "enabled": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
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
          1031
        ]
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 9,
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
    "unique_key": "adult_consent_revisit"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "改めて互いの意思を確かめる",
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
          "description": "改めて互いの意思を確かめる。",
          "effects": [
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "今は距離を置くと伝える",
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
          "description": "今は距離を置くと伝える。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 85,
  "p": 0.085,
  "text": "交際相手と、以前の約束や親密さへの希望が今も同じか確かめる機会があった。",
  "sexualEffects": [
    {
      "boundaryVoice": 4
    },
    {
      "boundaryVoice": 4
    }
  ],
  "outcomes": [
    "mutual_talk",
    "boundary"
  ],
  "classification": "daily"
});
