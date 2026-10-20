(window.eventDefs = window.eventDefs || []).push({
  "id": "sexual_domination",
  "title": "加虐と支配への衝動",
  "description": "普段は従順に抱かれている寝室で、ふと相手の肉体を意のままに支配し、苦悶と快楽で歪む顔を見下ろしたいという底知れぬ加虐心が芽生える。",
  "content_rating": "adult",
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
          264,
          671
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
    "unique_key": "sexual_domination"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "泣きつくように懇願するまで入れさせない",
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
          "description": "「欲しい？」と囁き、泣きつくように懇願するまで入れさせない。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "懇願された瞬間に一気に奥深くまで呑み干す",
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
          "description": "限界まで焦らし、懇願された瞬間に一気に奥深くまで呑み干す。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "すぐに優しく抱きしめる",
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
          "description": "相手の苦しそうな表情に罪悪感を覚え、すぐに優しく抱きしめる。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 22,
  "max": 55,
  "p": 0.18,
  "text": "普段は従順に抱かれている寝室で、ふと相手の肉体を意のままに支配し、苦悶と快楽で歪む顔を見下ろしたいという底知れぬ加虐心が芽生える。",
  "variants": [
    {
      "subTitle": "焦らしと懇願の支配",
      "text": "相手を仰向けに組み敷き、腰に跨がる。硬くなった相手の先端を自分の濡れそぼった秘所の入り口に擦りつけるだけで、決して中には入れさせない。相手が腰を浮かせて欲しがるたび、平手で胸を押さえつけて焦らし続ける……。",
      "choices": [
        [
          "「欲しい？」と囁き、泣きつくように懇願するまで入れさせない",
          {
            "happiness": 4,
            "trust": 2,
            "independence": 3
          }
        ],
        [
          "限界まで焦らし、懇願された瞬間に一気に奥深くまで呑み干す",
          {
            "happiness": 5,
            "trust": 3,
            "independence": 2
          }
        ],
        [
          "相手の苦しそうな表情に罪悪感を覚え、すぐに優しく抱きしめる",
          {
            "trust": 3,
            "morality": 2
          }
        ]
      ],
      "diary": [
        "相手の硬い熱を入口で擦りながら、奥に入れないでおくと、相手は息を乱して「入れてくれ」と何度も懇願してきた。男の理性を奪い、自らの身体で支配している絶対的な優越感に、下腹がきゅんと甘く疼いた。",
        "相手が泣きそうな声で乞うてきた瞬間、一気に腰を落として熱い肉塊を根元まで呑み込んだ。奥を激しく満たされた衝撃と、相手の腰が歓喜に震える感触に、私自身も狂おしい絶頂に達した。",
        "焦らしすぎて相手が本当に困ったような顔をしたので、慌てて腰を下ろして繋がった。相手をいたわる気持ちと、支配したい衝動が心の中でせめぎ合っていた。"
      ],
      "sexualEffects": [
        {
          "desire": 6,
          "initiative": 5,
          "selfKnowledge": 4
        },
        {
          "desire": 8,
          "initiative": 6,
          "selfKnowledge": 5
        },
        {
          "boundaryVoice": 3,
          "intimacyNeed": 3
        }
      ]
    },
    {
      "subTitle": "背中に刻む爪痕と荒い息",
      "text": "情交の最中、激しく腰を打ちつけてくる相手の背中に両手を回し、爪を深く食い込ませる。相手の皮膚に自らの爪痕を刻みつけ、痛みに小さく呻く声を聞きながら、さらに激しく腰を突き上げる……。",
      "choices": [
        [
          "背中に深く爪を立て、自分のものだという印を刻みつける",
          {
            "happiness": 4,
            "stress": 1,
            "trust": 2
          }
        ],
        [
          "首筋に噛みつき、痛みに喘ぐ相手を腰のうねりで締め上げる",
          {
            "happiness": 5,
            "stress": 2,
            "trust": 1
          }
        ],
        [
          "傷つけてしまうことを恐れて、そっと背中を撫でる手に変える",
          {
            "morality": 3,
            "trust": 3
          }
        ]
      ],
      "diary": [
        "激しく重なる腰の動きに合わせて、相手の逞しい背中に爪を立てた。痛みに息を呑む相手の喉仏を見つめながら、自らの熱い肉壁で締めつけ、激しい絶頂に引きずり込んだ。",
        "首筋に歯を立てて噛み痕を残すと、相手は低く唸って奥深くまで肉棒を突き刺してきた。支配し支配される狂乱の中で、汗まみれになって果てた。",
        "ふと我に返り、相手の背中についた赤い筋を優しく指でなぞった。激しい愛欲の後の静けさが心地よかった。"
      ],
      "sexualEffects": [
        {
          "desire": 6,
          "initiative": 6,
          "selfKnowledge": 4
        },
        {
          "desire": 8,
          "initiative": 7,
          "selfKnowledge": 5
        },
        {
          "boundaryVoice": 2,
          "trust": 3
        }
      ]
    }
  ],
  "classification": "daily"
});
