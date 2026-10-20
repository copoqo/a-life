(window.eventDefs = window.eventDefs || []).push({
  "id": "partner_intimacy_hesitation",
  "title": "まだ肌を許していないもどかしさ",
  "description": "交際を続けながらも、まだ身体の奥までは許していない二人。触れ合う手の温もりや抱擁のたびに、パートナーの瞳に宿る熱い欲情と、自分自身の身体の疼きが胸を締めつける……。",
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
        "path": "person.experience.has_sexual_experience",
        "op": "eq",
        "value": false
      }
    ]
  },
  "weight": {
    "base": 18,
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
    "unique_key": "partner_intimacy_hesitation"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "愛液で濡れた身体の奥まで受け入れる",
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
          "description": "今夜こそ素肌を晒し、愛液で濡れた身体の奥まで受け入れる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "intimacy_awakening",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "焦らず二人の信頼を育む時間を大切にしたいと伝える",
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
          "description": "焦らず二人の信頼を育む時間を大切にしたいと伝える。",
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
  "min": 18,
  "max": 85,
  "p": 0.18,
  "text": "交際を続けながらも、まだ身体の奥までは許していない二人。触れ合う手の温もりや抱擁のたびに、パートナーの瞳に宿る熱い欲情と、自分自身の身体の疼きが胸を締めつける……。",
  "phase": "virgin",
  "outcomes": [
    "shared_intimacy",
    "mutual_talk"
  ],
  "classification": "daily"
});
