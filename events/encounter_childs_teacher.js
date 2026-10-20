(window.eventDefs = window.eventDefs || []).push({
  "id": "encounter_childs_teacher",
  "title": "夕暮れの面談後、誰もいない教室での誘惑",
  "description": "三者面談が終わり、保護者たちが帰り静まり返った夕暮れの教室。子供の担任の先生と二人きりで話しているうち、話題は母親である自分自身の話へと変わっていく。「お母さん、とても綺麗ですね」という低い囁きに、背筋が甘く震える。",
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
          360,
          635
        ]
      },
      {
        "path": "derived.has_children",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 12,
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
    "unique_key": "encounter_childs_teacher"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "母親の顔を忘れ激しく抱き締められる",
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
          "description": "夕陽に染まる教壇の陰に引き寄せられ、母親の顔を忘れ激しく抱き締められる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 4
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "encounter_parent_friend_secret_hotel",
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
      "label": "保護者としての礼節を保って教室を後にする",
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
          "description": "礼を言って立ち上がり、保護者としての礼節を保って教室を後にする。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "min": 30,
  "max": 52,
  "p": 0.12,
  "text": "三者面談が終わり、保護者たちが帰り静まり返った夕暮れの教室。子供の担任の先生と二人きりで話しているうち、話題は母親である自分自身の話へと変わっていく。「お母さん、とても綺麗ですね」という低い囁きに、背筋が甘く震える。",
  "diary": [
    "子供の担任の先生に、教壇の陰でスカートをたくし上げられ、秘所を熱くまさぐられた。母ではなく一人の女として求められた歓喜に、愛液で下着をぐっしょりと濡らしてしまった。",
    "先生からの熱い視線に心臓が跳ね上がった。母親である自分への戒めと、久しぶりに女として見られた喜びが胸に渦巻いた。"
  ],
  "outcomes": [
    "meeting_childs_teacher",
    "none"
  ],
  "classification": "daily"
});
