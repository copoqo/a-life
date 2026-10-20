(window.eventDefs = window.eventDefs || []).push({
  "id": "encounter_teacher",
  "title": "放課後の個別指導、施錠された準備室の熱気",
  "description": "放課後、質問をしに訪れた教官室や準備室。先生と二人きりで机を並べて指導を受けるうち、偶然を装って肩や太ももが触れ合う。先生の眼鏡の奥の熱い視線と、教壇の上の権威ある大人が見せる異性としての顔に、下着の奥が湿り気を帯びていく。",
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
    "base": 14,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "encounter_teacher"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "質問を終えてすぐに礼を言い、教室へ戻る",
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
          "description": "質問を終えてすぐに礼を言い、教室へ戻る。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "先生と適切な距離を保ちながら熱心に指導を受ける",
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
          "description": "先生と適切な距離を保ちながら熱心に指導を受ける。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "教卓の下で触れ合う太ももの熱に息を呑み、指導を受け続ける",
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
          "description": "教卓の下で触れ合う太ももの熱に息を呑み、指導を受け続ける。",
          "effects": [
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 10
            },
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 25
            }
          ]
        }
      ]
    },
    {
      "id": "choice_3",
      "label": "先生の眼鏡の奥の熱い視線を見つめ返し、そっと身体を寄せる",
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
          "id": "outcome_3",
          "weight": 1,
          "description": "先生の眼鏡の奥の熱い視線を見つめ返し、そっと身体を寄せる。",
          "effects": [
            {
              "path": "history.flags.teacher_classroom_affair",
              "op": "set",
              "value": true
            },
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 35
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "encounter_teacher_deep_bond",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_4",
      "label": "施錠された準備室の扉に背を預け、先生の熱い吐息を受け入れる",
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
          "id": "outcome_4",
          "weight": 1,
          "description": "施錠された準備室の扉に背を預け、先生の熱い吐息を受け入れる。",
          "effects": [
            {
              "path": "history.flags.teacher_classroom_affair",
              "op": "set",
              "value": true
            },
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 50
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "encounter_teacher_deep_bond",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    }
  ],
  "min": 16,
  "max": 25,
  "p": 0.14,
  "text": "放課後、質問をしに訪れた教官室や準備室。先生と二人きりで机を並べて指導を受けるうち、偶然を装って肩や太ももが触れ合う。先生の眼鏡の奥の熱い視線と、教壇の上の権威ある大人が見せる異性としての顔に、下着の奥が湿り気を帯びていく。",
  "diary": [
    "施錠された準備室。先生の大きな手にブラウスを捲られ、教卓の上で犯されるような愛撫を受けた。先生を独占している背徳感に、愛液がとめどなく溢れた。",
    "先生の指が太ももを撫でた瞬間の背筋の凍るような快感。許されない関係への憧れを押し殺して部屋を出た。"
  ],
  "outcomes": [
    "meeting_teacher",
    "meeting_teacher"
  ],
  "classification": "daily"
});
