(window.eventDefs = window.eventDefs || []).push({
  "id": "partner_intimacy_female",
  "title": "女性パートナーとの親密な夜 〜指と舌が溶け合う蜜月〜",
  "description": "寝室の明かりを落とし、女性パートナーと素肌を重ねる。ふんわりと柔らかい乳房が押し当たり、互いの太ももが絡み合う。彼女の温かい舌先が首筋から下腹へと滑り落ち、充血した秘唇をそっと吸い上げると、下腹の奥から激しい愛液が溢れ出してシーツを濡らす。",
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
          851
        ]
      }
    ]
  },
  "weight": {
    "base": 16,
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
    "unique_key": "partner_intimacy_female"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "奥深くまで舌を入れて蜜を吸い尽くしてもらう",
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
          "description": "彼女の髪に指を絡め、奥深くまで舌を入れて蜜を吸い尽くしてもらう。",
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
                "eventId": "partner_bath_passion",
                "delay": 1,
                "prob": 0.8
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "濡れそぼった秘所同士を激しく擦り合わせながら同時に果てる",
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
          "description": "体勢を入れ替え、濡れそぼった秘所同士を激しく擦り合わせながら同時に果てる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "指先で互いの身体を愛撫しながら静かに絶頂を迎える",
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
          "description": "優しく抱き締め合い、指先で互いの身体を愛撫しながら静かに絶頂を迎える。",
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
  "min": 18,
  "max": 70,
  "p": 0.16,
  "text": "寝室の明かりを落とし、女性パートナーと素肌を重ねる。ふんわりと柔らかい乳房が押し当たり、互いの太ももが絡み合う。彼女の温かい舌先が首筋から下腹へと滑り落ち、充血した秘唇をそっと吸い上げると、下腹の奥から激しい愛液が溢れ出してシーツを濡らす。",
  "diary": [
    "彼女の柔らかい唇と舌が秘所を這い回るたび、腰が勝手に跳ねてしまった。女同士だからこそ分かる繊細な愛撫に、身体中が愛液で満たされた。",
    "重なり合う白い柔肌、ぬちぬちと擦れ合う蜜唇の水音。互いに腰を押しつけ合って同時に絶頂を迎えた瞬間、胸が愛しさで張り裂けそうだった。",
    "激しい行為だけでなく、互いの肌の温もりを慈しむような愛撫。彼女の腕の中で眠りに落ちる幸せに包まれた。"
  ],
  "classification": "daily"
});
