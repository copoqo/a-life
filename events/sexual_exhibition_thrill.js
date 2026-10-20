(window.eventDefs = window.eventDefs || []).push({
  "id": "sexual_exhibition_thrill",
  "title": "露出と背徳のスリル",
  "description": "密室を飛び出し、いつ他人の視線に晒されるか分からない危険な場所での情事。捕まる恐怖と背徳感が、性的な興奮を異常なまでに跳ね上げる。",
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
          264,
          611
        ]
      }
    ]
  },
  "weight": {
    "base": 18,
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
    "unique_key": "sexual_exhibition_thrill"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "声を押し殺して車内で奥まで貫かれる",
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
          "description": "外のライトに怯えながら、声を押し殺して車内で奥まで貫かれる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
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
      "label": "曇るガラス越しに激しく乱れる",
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
          "description": "窓ガラスに素肌を押しつけ、曇るガラス越しに激しく乱れる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "服を整えてやめるよう頼む",
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
          "description": "車が近づく気配にパニックになり、服を整えてやめるよう頼む。",
          "effects": [
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "min": 22,
  "max": 50,
  "p": 0.18,
  "text": "密室を飛び出し、いつ他人の視線に晒されるか分からない危険な場所での情事。捕まる恐怖と背徳感が、性的な興奮を異常なまでに跳ね上げる。",
  "variants": [
    {
      "subTitle": "深夜の密閉車内・窓の外の気配",
      "text": "深夜の海岸沿いの駐車場、エンジンを切り、暗闇に紛れた車内。リクライニングを倒した助手席でスカートをまくり上げられ、窓の外を別の車が通り過ぎるライトが、乱れた素肌を一瞬だけ白く照らし出す……。",
      "choices": [
        [
          "外のライトに怯えながら、声を押し殺して車内で奥まで貫かれる",
          {
            "happiness": 4,
            "stress": 2,
            "trust": 2
          }
        ],
        [
          "窓ガラスに素肌を押しつけ、曇るガラス越しに激しく乱れる",
          {
            "happiness": 5,
            "stress": 3,
            "trust": 1
          }
        ],
        [
          "車が近づく気配にパニックになり、服を整えてやめるよう頼む",
          {
            "boundaryVoice": 4,
            "stress": -1
          }
        ]
      ],
      "diary": [
        "ガラス一枚隔てたすぐ外を別の車が通り過ぎる中、座席の上で激しく突かれた。ライトの光が車内をかすめるたび、心臓が跳ね上がると同時に下腹が猛烈に熱くなり、みっともないほど愛液を吹き出して果てた。",
        "曇ったサイドガラスに汗ばんだ胸を押しつけ、後ろから突き上げられた。見られるかもしれない恐怖がそのまま甘い快楽に化け、声を噛み殺して震え続けた。",
        "通りかかる車の音にどうしても恐怖が勝り、相手にお願いして服を着た。スリルよりも安心感の大切さを実感した。"
      ],
      "sexualEffects": [
        {
          "desire": 7,
          "shyness": 7,
          "selfKnowledge": 4
        },
        {
          "desire": 8,
          "shyness": 8,
          "selfKnowledge": 5
        },
        {
          "boundaryVoice": 4,
          "morality": 2
        }
      ]
    },
    {
      "subTitle": "夜のベランダ・薄布一枚の逢瀬",
      "text": "静まり返った深夜、マンションのベランダ。薄いカーテン一枚を隔てた向こうには街の夜景が広がる。ノーパンの薄いネグリジェ姿で手すりに手をつかされ、背後から夜風とともに熱い肉塊をねじ込まれる……。",
      "choices": [
        [
          "手すりを掴んで夜風を受けながら、静かに奥まで注ぎ込まれる",
          {
            "happiness": 4,
            "stress": 2,
            "secrecy": 4
          }
        ],
        [
          "向かいのマンションの明かりを見つめながら、腰を浮かせて乱れる",
          {
            "happiness": 5,
            "stress": 3,
            "secrecy": 5
          }
        ],
        [
          "下の道路を歩く人の足音に怯え、相手の手を引いて部屋へ戻る",
          {
            "stress": -1,
            "independence": 2
          }
        ]
      ],
      "diary": [
        "夜風が冷たいベランダで、手すりに額を押し当てて後ろから貫かれた。遠くの車の走行音を聞きながら、身体の奥深くを掻き回される熱い摩擦に、声を殺して何度も絶頂した。",
        "向かいの部屋の明かりが点いているのを見つめながら、背後からのピストンを受け止めた。誰かに見られているかもしれない淫靡な妄想に下腹が疼き、爪先を丸めて啼き乱れた。",
        "夜風に我に返り、相手の腕を引いて部屋のベッドへと引き戻した。やはり二人だけの密室の方が、心から快感に浸れると思えた。"
      ],
      "sexualEffects": [
        {
          "desire": 7,
          "shyness": 8,
          "secrecy": 4
        },
        {
          "desire": 9,
          "shyness": 9,
          "secrecy": 5
        },
        {
          "boundaryVoice": 3,
          "trust": 2
        }
      ]
    }
  ],
  "classification": "daily"
});
