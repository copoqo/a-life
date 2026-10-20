(window.eventDefs = window.eventDefs || []).push({
  "id": "same_sex_intimate_bath",
  "title": "湯気に煙る浴室、二人きりの洗いっこ",
  "description": "白く煙る浴室。女同士だからこそ許される密やかな空間で、泡立てたタオルを手に取り互いの身体を洗い合う。濡れて艶めくふくよかな乳房、泡にまみれたくびれや滑らかな太もも。指先が秘唇の割れ目を優しく掠めるたび、熱い吐息が零れ落ちる。",
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
          431
        ]
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
    "unique_key": "same_sex_intimate_bath"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "濡れた身体のまま抱き合って舌を這わせる",
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
          "description": "泡を洗い流し、濡れた身体のまま抱き合って舌を這わせる。",
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
                "eventId": "same_sex_tribadism",
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
      "label": "湯水に紛れて指を奥深くまで沈め合う",
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
          "description": "湯船の中で密着し、湯水に紛れて指を奥深くまで沈め合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 35,
  "p": 0.15,
  "text": "白く煙る浴室。女同士だからこそ許される密やかな空間で、泡立てたタオルを手に取り互いの身体を洗い合う。濡れて艶めくふくよかな乳房、泡にまみれたくびれや滑らかな太もも。指先が秘唇の割れ目を優しく掠めるたび、熱い吐息が零れ落ちる。",
  "diary": [
    "温かいシャワーの下で抱き締め合い、濡れた肌と肌を密着させた。愛液と湯水が混ざり合いながら、彼女の指に掻き回される感触に、声を上げて震えた。",
    "湯船の中で絡み合う脚。お互いの身体を隅々まで知り尽くすように触れ合い、身体の芯まで蕩けるような快楽に満たされた。"
  ],
  "classification": "daily"
});
