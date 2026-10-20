(window.eventDefs = window.eventDefs || []).push({
  "id": "same_sex_secret_fingers",
  "title": "夜のお泊まり会、布団の中の指先",
  "description": "消灯した薄暗い部屋、並べた布団の中で二人。他愛ないおしゃべりの合間、掛け布団の下でそっと手が触れ合う。熱を帯びた指先がパジャマの裾から滑り込み、滑らかな太ももの内側を撫で上げ、下着のレースの奥へと這っていく……。",
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
          192,
          311
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
    "unique_key": "same_sex_secret_fingers"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "濡れそぼった秘唇へと彼女の指を招き入れる",
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
          "description": "声を殺して腰を浮かせ、濡れそぼった秘唇へと彼女の指を招き入れる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "same_sex_intimate_bath",
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
      "label": "彼女の柔らかな胸に手を滑り込ませる",
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
          "description": "恥ずかしさに息を呑みながらも、彼女の柔らかな胸に手を滑り込ませる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "min": 16,
  "max": 25,
  "p": 0.16,
  "text": "消灯した薄暗い部屋、並べた布団の中で二人。他愛ないおしゃべりの合間、掛け布団の下でそっと手が触れ合う。熱を帯びた指先がパジャマの裾から滑り込み、滑らかな太ももの内側を撫で上げ、下着のレースの奥へと這っていく……。",
  "diary": [
    "布団の中で衣擦れの音を立てながら、濡れた秘所に指先を深く沈められた。水音を立てるたび、彼女の指がキュウキュウと締めつけられ、声を殺して何度も絶頂した。",
    "同じ女同士だからこそ分かる、一番感じやすい場所。丁寧に愛撫されながら、シーツを握りしめて甘い痺れに溺れていった。"
  ],
  "classification": "daily"
});
