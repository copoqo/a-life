(window.eventDefs = window.eventDefs || []).push({
  "id": "child_fine_hair_sprout",
  "title": "柔らかな皮膚に芽生えた大人の印",
  "description": "お風呂上がりに自室で服を着る前、下腹の柔らかな皮膚に薄っすらと生え始めた数本の細い毛に気づく。子供の肌から大人の女の身体へと変貌していく生々しい証に、胸がどきどきと波打つ……。",
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
          132,
          179
        ]
      }
    ]
  },
  "weight": {
    "base": 20,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "child_fine_hair_sprout"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "大人の身体に近づいている秘密の悦びに浸る",
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
          "description": "指先でそっと触れ、大人の身体に近づいている秘密の悦びに浸る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "恥ずかしさから毛抜きで抜いてしまおうかと迷う",
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
          "description": "恥ずかしさから毛抜きで抜いてしまおうかと迷う。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "急いで新しいショーツを履き込む",
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
          "description": "誰にも見られないよう、急いで新しいショーツを履き込む。",
          "effects": []
        }
      ]
    }
  ],
  "min": 11,
  "max": 14,
  "p": 0.2,
  "text": "お風呂上がりに自室で服を着る前、下腹の柔らかな皮膚に薄っすらと生え始めた数本の細い毛に気づく。子供の肌から大人の女の身体へと変貌していく生々しい証に、胸がどきどきと波打つ……。",
  "diary": [
    "下腹の柔らかな皮膚に生えた数本の毛を、指先でそっと撫でた。子供の時代が終わり、私が女になっていくのだという実感が胸に迫った。",
    "見慣れない毛が気恥ずかしくて、鏡の前でため息をついた。身体の自然な変化だと頭では分かっていても、戸惑いは隠せなかった。",
    "急いでショーツを履き、制服のスカートを下ろした。家族にも言えない大人の階段を、一人きりで登り始めた気がした。"
  ],
  "classification": "daily"
});
