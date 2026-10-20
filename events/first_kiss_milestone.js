(window.eventDefs = window.eventDefs || []).push({
  "id": "first_kiss_milestone",
  "title": "初めて唇を重ねる夜",
  "description": "静まり返る部屋、互いの体温と吐息が間近に迫る。触れ合いそうな唇を意識し、胸が早鐘のように高鳴る……。",
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
        "path": "person.experience.has_sexual_experience",
        "op": "eq",
        "value": false
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      },
      {
        "path": "history.flags.firstKiss",
        "op": "eq",
        "value": true
      },
      {
        "path": "history.flags.firstKiss",
        "op": "eq",
        "value": false
      }
    ]
  },
  "weight": {
    "base": 25,
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
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "first_kiss_milestone"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "熱い吐息と唇を受け入れる",
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
          "description": "目を閉じて、熱い吐息と唇を受け入れる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "first_intimacy_milestone",
                "delay": 1,
                "prob": 0.95
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "互いの想いを確かめ合う",
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
          "description": "逸る気持ちを抑えて、互いの想いを確かめ合う。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "first_kiss_afterthought",
                "delay": 1,
                "prob": 0.9
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "まだ唇を重ねる覚悟ができないと告げる",
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
          "description": "まだ唇を重ねる覚悟ができないと告げる。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 85,
  "p": 0.4,
  "once": true,
  "text": "静まり返る部屋、互いの体温と吐息が間近に迫る。触れ合いそうな唇を意識し、胸が早鐘のように高鳴る……。",
  "phase": "virgin",
  "outcomes": [
    "first_kiss",
    "mutual_talk",
    "boundary"
  ],
  "classification": "daily"
});
