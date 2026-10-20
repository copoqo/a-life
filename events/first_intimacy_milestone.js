(window.eventDefs = window.eventDefs || []).push({
  "id": "first_intimacy_milestone",
  "title": "初めて身体を重ねる夜",
  "description": "二人きりの寝室、衣擦れの音と荒くなる息遣い。触れ合う素肌の熱さと下腹の疼きに戸惑いながら、互いに衣服を脱ぎ去り、身体の奥まで重なり合うかどうかの緊迫した空気が満ちてゆく……。",
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
      },
      {
        "path": "derived.has_spouse",
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
    "unique_key": "first_intimacy_milestone"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "身体の奥まで受け入れる",
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
          "description": "恥じらいながらも素肌を晒し、身体の奥まで受け入れる。",
          "effects": [
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
      "label": "まずは言葉で確かめ合う",
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
          "description": "熱くなった身体を寄せ合い、まずは言葉で確かめ合う。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "今はまだ奥まで許せないと躊躇い伝える",
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
          "description": "今はまだ奥まで許せないと躊躇い伝える。",
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
  "max": 30,
  "p": 0.4,
  "once": true,
  "text": "二人きりの寝室、衣擦れの音と荒くなる息遣い。触れ合う素肌の熱さと下腹の疼きに戸惑いながら、互いに衣服を脱ぎ去り、身体の奥まで重なり合うかどうかの緊迫した空気が満ちてゆく……。",
  "phase": "virgin",
  "targetGender": "both",
  "femaleVariant": {
    "text": "二人きりの寝室、衣擦れの音と荒くなる息遣い。触れ合う素肌の熱さと下腹の疼きに戸惑いながら、互いに衣服を脱ぎ去り、女同士の秘所を重ね合うかどうかの緊迫した空気が満ちてゆく……。",
    "choices": [
      [
        "恥じらいながらも素肌を晒し、彼女の指先と濡れた蜜唇を受け入れる",
        {
          "selfUnderstanding": 2,
          "chain": {
            "eventId": "intimacy_awakening",
            "delay": 1,
            "prob": 1
          }
        }
      ],
      [
        "熱くなった身体を寄せ合い、まずは言葉で確かめ合う",
        {
          "selfUnderstanding": 3
        }
      ],
      [
        "今はまだ肌を重ねる覚悟ができないと躊躇い伝える",
        {
          "independence": 3
        }
      ]
    ],
    "diary": [
      "衣服を脱ぎ捨てて晒した肌に、彼女の細い指先と柔らかい唇が這った。同じ女同士なのに、触れられるたびに背筋が弓なりになって、蜜唇の間から甘い愛液がとめどなく溢れ出た。",
      "触れ合いたいのに胸が苦しくて、言葉で確かめ合った。焦らされるような時間も、肌が熱くなる。",
      "身体を許すのはまだ先だと言えた。でも、彼女の手が触れた肌の熱さは、服を着直した後もずっと消えなかった。"
    ]
  },
  "outcomes": [
    "shared_intimacy",
    "mutual_talk",
    "boundary"
  ],
  "classification": "daily"
});
