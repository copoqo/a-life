(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_bicycle_scraped_knee",
  "title": "補助輪の外れた自転車と擦りむいた膝",
  "description": "初めて補助輪を外して練習した日。ふらついて何度も倒れ、膝を擦りむいて赤い血がにじんだ。",
  "content_rating": "general",
  "enabled": true,
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
          72,
          119
        ]
      }
    ]
  },
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "elem_bicycle_scraped_knee"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "痛みに耐えかねて泣きじゃくり、自転車を置いて家に帰る",
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
          "description": "痛みに耐えかねて泣きじゃくり、自転車を置いて家に帰る。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "友達に可愛い絆創膏を貼ってもらい、励まされて一緒に練習する",
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
          "description": "友達に可愛い絆創膏を貼ってもらい、励まされて一緒に練習する。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "elem_bicycle_excursion",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "涙を手の甲でぬぐい、「もう一回！」とペダルを踏み込む",
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
          "description": "涙を手の甲でぬぐい、「もう一回！」とペダルを踏み込む。",
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
                "eventId": "elem_bicycle_excursion",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_3",
      "label": "少し休憩して、友達の走る姿をじっと観察してコツを掴む",
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
          "description": "少し休憩して、友達の走る姿をじっと観察してコツを掴む。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "elem_bicycle_excursion",
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
      "label": "悔しさを胸に夕暮れの街灯が灯るまで一人でペダルを漕ぎ続ける",
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
          "description": "悔しさを胸に夕暮れの街灯が灯るまで一人でペダルを漕ぎ続ける。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "elem_bicycle_excursion",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    }
  ],
  "min": 6,
  "max": 9,
  "p": 0.7,
  "once": true,
  "text": "初めて補助輪を外して練習した日。ふらついて何度も倒れ、膝を擦りむいて赤い血がにじんだ。",
  "diary": [
    "膝を擦りむいて痛くて泣きそうだったけど、諦めずにペダルを踏んだら、突然自転車がスーッと進んだ！ お父さんが「乗れた！」って拍手してくれて、空まで飛べそうだった。",
    "転んで泣きべそかいてたら、近所の子が可愛いキャラクターの絆創膏を貼ってくれた。「大丈夫、後ろ見ててあげる」って言われて乗れるようになった。友達の力ってすごい。"
  ],
  "classification": "daily"
});
