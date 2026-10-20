(window.eventDefs = window.eventDefs || []).push({
  "id": "same_sex_tribadism",
  "title": "重なり合う柔肌、互いの蜜を擦り合わせる夜",
  "description": "シーツの上で向かい合い、互いの腰を引き寄せて素肌を完全に密着させる。ふっくらとした乳房を押しつけ合い、愛液でびしょ濡れになった秘唇と秘唇を直に重ね合わせて腰を前後に揺らす。ぬちり、ぬちりと湿った水音が響くたび、甘美な絶頂の波が押し寄せる。",
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
          491
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
    "unique_key": "same_sex_tribadism"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "狂おしく腰を押しつけ合って同時に果てる",
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
          "description": "彼女の首筋に噛みつきながら、狂おしく腰を押しつけ合って同時に果てる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "same_sex_toy_play",
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
      "label": "指も奥深くに沈めて激しく貪り合う",
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
          "description": "互いのクリトリスを擦り合わせながら、指も奥深くに沈めて激しく貪り合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 40,
  "p": 0.15,
  "text": "シーツの上で向かい合い、互いの腰を引き寄せて素肌を完全に密着させる。ふっくらとした乳房を押しつけ合い、愛液でびしょ濡れになった秘唇と秘唇を直に重ね合わせて腰を前後に揺らす。ぬちり、ぬちりと湿った水音が響くたび、甘美な絶頂の波が押し寄せる。",
  "diary": [
    "女同士の身体の重なり。お互いの敏感な肉芽が直接擦れ合うたび、頭が真っ白になるほどの激しい快感が駆け抜け、シーツを愛液でびしょ濡れにして何度も痙攣した。",
    "男の人にはない、柔らかくしなやかな肌の摩擦。互いの蜜が泡立つほど腰を揺らし合い、愛しさと快楽に胸が張り裂けそうだった。"
  ],
  "classification": "major",
  "is_major": true
});
