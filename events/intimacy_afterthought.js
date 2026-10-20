(window.eventDefs = window.eventDefs || []).push({
  "id": "intimacy_afterthought",
  "title": "初めて知った肉体の奥の疼き",
  "description": "初めて肌を重ね、内側を貫かれたあの夜の感触。濡れた肌の摩擦、締めつける肉腔の熱さ、腰の奥に残る重だるい痺れが頭から離れない。",
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
          1091
        ]
      },
      {
        "path": "person.experience.has_sexual_experience",
        "op": "eq",
        "value": true
      },
      {
        "path": "person.experience.has_sexual_experience",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 15,
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
    "unique_key": "intimacy_afterthought"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "身体が知った快楽の意味を整理する",
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
          "description": "身体が知った快楽の意味を整理する。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "sexual_satisfaction",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手とあの夜の感覚を語り合う",
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
          "description": "相手とあの夜の感覚を語り合う。",
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
      "label": "自分の身体のペースを大切にする",
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
          "description": "自分の身体のペースを大切にする。",
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
  "max": 90,
  "p": 0.15,
  "text": "初めて肌を重ね、内側を貫かれたあの夜の感触。濡れた肌の摩擦、締めつける肉腔の熱さ、腰の奥に残る重だるい痺れが頭から離れない。",
  "phase": "awakening",
  "outcomes": [
    "reflection",
    "mutual_talk",
    "boundary"
  ],
  "classification": "daily"
});
