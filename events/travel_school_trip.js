(window.eventDefs = window.eventDefs || []).push({
  "id": "travel_school_trip",
  "title": "修学旅行・旅館の夜",
  "description": "学生時代の大きな思い出となる修学旅行。昼間の観光地巡りを終え、旅館の大広間で友達と浴衣姿で夕食を囲む。消灯時間を過ぎた後も、敷き詰められた布団の中で恋バナや将来の夢をひそひそと囁き合い、興奮で胸が高鳴る……。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
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
          180,
          227
        ]
      }
    ]
  },
  "weight": {
    "base": 35,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "travel_school_trip"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "夜遅くまで秘密の恋バナで盛り上がる",
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
          "description": "友達と布団を並べ、夜遅くまで秘密の恋バナで盛り上がる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "胸の火照りに耐えかねてこっそり部屋を抜け出してみる",
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
          "description": "消灯後、胸の火照りに耐えかねてこっそり部屋を抜け出してみる。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "rare_outing_secret_quickie",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "心地よい疲れの中で早めに眠りにつく",
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
          "description": "明日の観光に備えて、心地よい疲れの中で早めに眠りにつく。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    }
  ],
  "min": 15,
  "max": 18,
  "p": 0.35,
  "once": true,
  "text": "学生時代の大きな思い出となる修学旅行。昼間の観光地巡りを終え、旅館の大広間で友達と浴衣姿で夕食を囲む。消灯時間を過ぎた後も、敷き詰められた布団の中で恋バナや将来の夢をひそひそと囁き合い、興奮で胸が高鳴る……。",
  "diary": [
    "薄暗い部屋で友達と掛け布団を被り、好きな人の話やキスの噂話で盛り上がった。みんなの熱っぽい息遣いに、胸が甘く締めつけられた。",
    "寝静まった旅館の薄暗い廊下へ足を踏み出した。浴衣の裾が擦れる微かな音と、誰かに見つかるかもしれない背徳感に、下腹が小さく震えた。",
    "旅館の柔らかい布団に潜り込み、友達の寝息を聞きながら眠りに落ちた。修学旅行の楽しい思い出が心に刻まれた。"
  ],
  "outcomes": [
    "shared_activity",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
