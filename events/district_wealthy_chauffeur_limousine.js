(window.eventDefs = window.eventDefs || []).push({
  "id": "district_wealthy_chauffeur_limousine",
  "title": "タワーマンションの地下・お抱え運転手と後部座席のカーテン",
  "description": "富裕層が暮らす高級タワーマンション。パートナーが出張中の静かな午後、地下の車寄せに待機する専用車。スモークガラスと遮光カーテンで外の世界を閉ざした後部座席。無口で忠実なお抱え運転手との禁断の距離。革シートの上でドレスの裾を捲り上げさせ、命令するように身体を委ねる……。",
  "content_rating": "general",
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
          288,
          791
        ]
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 20,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "wealthy"
        },
        "factor": 3.5
      }
    ]
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "district_wealthy_chauffeur_limousine"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "主従を逆転させて奥深くまで貪らせる",
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
          "description": "革シートの上で運転手の首に腕を絡ませ、主従を逆転させて奥深くまで貪らせる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -9
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": 30000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "従順な指先で愛液を掻き回させる",
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
          "description": "後部座席で静かにドレスをはだけさせ、従順な指先で愛液を掻き回させる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -6
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "咳払いをして発車を命じる",
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
          "description": "車内のミラー越しに目が合った瞬間に我に返り、咳払いをして発車を命じる。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 24,
  "max": 65,
  "p": 0.04,
  "text": "富裕層が暮らす高級タワーマンション。パートナーが出張中の静かな午後、地下の車寄せに待機する専用車。スモークガラスと遮光カーテンで外の世界を閉ざした後部座席。無口で忠実なお抱え運転手との禁断の距離。革シートの上でドレスの裾を捲り上げさせ、命令するように身体を委ねる……。",
  "diary": [
    "高級車の後部座席の革シートの上で、お抱え運転手に身体を預けた。忠実な男の逞しい肉棒を奥深くまで飲み込み、地下駐車場の静寂の中で密やかに啼き乱れた。",
    "カーテンを閉め切った車内でドレスを捲り上げられ、運転手の指で愛撫された。主従の境界線を越える背徳の快感に、シーツならぬ高級レザーに爪を立てて絶頂した。",
    "バックミラー越しの視線にハッと我に返り、身だしなみを整えた。優雅なマダムの仮面を被り直しながら、濡れた下着の感触に胸を締めつけられた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "once": true,
  "classification": "daily"
});
