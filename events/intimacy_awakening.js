(window.eventDefs = window.eventDefs || []).push({
  "id": "intimacy_awakening",
  "title": "女としての肉体の目覚め",
  "description": "初めて素肌を重ね、身体の奥深くまで貫かれたあの日から、何気ない日常の中でも下腹の奥がじわりと熱く疼くようになった。下着越しに擦れる秘所の湿り気や、首筋に残る息の熱を自覚し、自分の身体が快楽を覚えたことを知る……。",
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
          1031
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
    "base": 35,
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
    "unique_key": "intimacy_awakening"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "身体の奥底から湧き上がる疼きと快感を素直に受け止める",
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
          "description": "身体の奥底から湧き上がる疼きと快感を素直に受け止める。",
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
                "eventId": "intimacy_afterthought",
                "delay": 1,
                "prob": 0.9
              }
            },
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 40
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "気を引き締める",
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
          "description": "急な身体の火照りと淫らな衝動に戸惑い、気を引き締める。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "sexual_first_conversation",
                "delay": 1,
                "prob": 0.85
              }
            },
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.knowledge",
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
  "p": 0.35,
  "once": true,
  "text": "初めて素肌を重ね、身体の奥深くまで貫かれたあの日から、何気ない日常の中でも下腹の奥がじわりと熱く疼くようになった。下着越しに擦れる秘所の湿り気や、首筋に残る息の熱を自覚し、自分の身体が快楽を覚えたことを知る……。",
  "phase": "awakening",
  "sexualEffects": [
    {
      "desire": 8,
      "selfAcceptance": 5
    },
    {
      "shyness": 5,
      "selfKnowledge": 3
    }
  ],
  "classification": "daily"
});
