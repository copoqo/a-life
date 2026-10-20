(window.eventDefs = window.eventDefs || []).push({
  "id": "same_sex_first_kiss",
  "title": "放課後の図書室、唇に触れた柔らかな熱",
  "description": "夕暮れ時の図書室の奥、本棚に挟まれた静かな死角。二人きりで寄り添い言葉を交わすうち、吐息が重なり合うほどの近さに。不意に見つめ合い、どちらからともなく吸い寄せられるように女同士の柔らかな唇を重ね合わせた。",
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
          180,
          275
        ]
      }
    ]
  },
  "weight": {
    "base": 16,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "same_sex_first_kiss"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "甘く濡れた舌先をそっと絡め合う",
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
          "description": "吐息を飲み込みながら、甘く濡れた舌先をそっと絡め合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "same_sex_secret_fingers",
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
      "label": "胸の奥の疼きを噛みしめる",
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
          "description": "触れ合った唇の熱さに息を呑み、胸の奥の疼きを噛みしめる。",
          "effects": []
        }
      ]
    }
  ],
  "min": 15,
  "max": 22,
  "p": 0.16,
  "text": "夕暮れ時の図書室の奥、本棚に挟まれた静かな死角。二人きりで寄り添い言葉を交わすうち、吐息が重なり合うほどの近さに。不意に見つめ合い、どちらからともなく吸い寄せられるように女同士の柔らかな唇を重ね合わせた。",
  "diary": [
    "男の子の唇とは違う、柔らかく湿った彼女の唇の感触。触れ合った瞬間、身体中に電流が走り、舌が絡み合うたびに下腹の奥が蜜で満たされていくのが分かった。",
    "唇が触れた瞬間の甘い痺れ。静かな図書室で響く互いの呼吸音に、身体中が熱く蕩けてしまいそうだった。"
  ],
  "classification": "daily"
});
