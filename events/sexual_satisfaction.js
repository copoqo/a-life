(window.eventDefs = window.eventDefs || []).push({
  "id": "sexual_satisfaction",
  "title": "情交の余韻・肌に残る匂いと快感",
  "description": "汗と愛液でシーツを湿らせ、もつれ合っていた手足を解く。激しいピストンで痺れた下腹の疼きや、奥に注ぎ込まれた熱の感触を噛み締めながら、今の交わりについて言葉を交わす。",
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
        "value": true
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 13,
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
    "unique_key": "sexual_satisfaction"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "どれほど気持ちよく奥まで達したかを素直に伝える",
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
          "description": "どれほど気持ちよく奥まで達したかを素直に伝える。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "partner_morning_passion",
                "delay": 1,
                "prob": 0.85
              }
            },
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
      "label": "または優しく触れてほしかったと耳元で囁く",
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
          "description": "もっと激しく、または優しく触れてほしかったと耳元で囁く。",
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
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "sexual_desire_fluctuation",
                "delay": 1,
                "prob": 0.85
              }
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
      "label": "一人で太ももを擦り合わせて噛み締める",
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
          "description": "余韻の痺れに浸りながら、一人で太ももを擦り合わせて噛み締める。",
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
  "max": 85,
  "p": 0.13,
  "text": "汗と愛液でシーツを湿らせ、もつれ合っていた手足を解く。激しいピストンで痺れた下腹の疼きや、奥に注ぎ込まれた熱の感触を噛み締めながら、今の交わりについて言葉を交わす。",
  "phase": "active",
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
    "mutual_talk",
    "mutual_talk",
    "reflection"
  ],
  "classification": "daily"
});
