(window.eventDefs = window.eventDefs || []).push({
  "id": "sexual_taboo_fantasy",
  "title": "背徳の妄想と背信の熱情",
  "description": "目の前のパートナーと身体を重ねていながら、頭の中には決して口にできない別の淫らな情景が浮かび上がる。背徳の妄想に後押しされ、肉体はかつてない激しさで収縮する。",
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
          300,
          911
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
    "unique_key": "sexual_taboo_fantasy"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "パートナーの背中に爪を立てて激しく絶頂する",
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
          "description": "粗野な男に犯される妄想に溺れ、パートナーの背中に爪を立てて激しく絶頂する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "いつもより下品で激しい腰使いを求める",
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
          "description": "妄想に駆り立てられるまま、いつもより下品で激しい腰使いを求める。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "首を振って妄想を振り払う",
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
          "description": "パートナーへの罪悪感に苛まれ、首を振って妄想を振り払う。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 25,
  "max": 75,
  "p": 0.18,
  "text": "目の前のパートナーと身体を重ねていながら、頭の中には決して口にできない別の淫らな情景が浮かび上がる。背徳の妄想に後押しされ、肉体はかつてない激しさで収縮する。",
  "variants": [
    {
      "subTitle": "見知らぬ粗野な男に犯される妄想",
      "text": "優しいパートナーの愛撫を受けながら、ふと昼間に工事現場ですれ違った汗臭く粗野な男の逞しい腕を思い出す。あんな男に乱暴に衣服を破かれ、言葉もなく力づくで貫かれたらどうなるのか……そんな淫らな妄想に下腹が熱く疼く……。",
      "choices": [
        [
          "粗野な男に犯される妄想に溺れ、パートナーの背中に爪を立てて激しく絶頂する",
          {
            "happiness": 5,
            "secrecy": 4,
            "morality": -2
          }
        ],
        [
          "妄想に駆り立てられるまま、いつもより下品で激しい腰使いを求める",
          {
            "happiness": 4,
            "secrecy": 3,
            "sexualEffects": {
              "desire": 6,
              "initiative": 4
            }
          }
        ],
        [
          "パートナーへの罪悪感に苛まれ、首を振って妄想を振り払う",
          {
            "morality": 3,
            "trust": 3
          }
        ]
      ],
      "diary": [
        "パートナーと愛し合いながら、頭の中では見知らぬ男に乱暴に組み敷かれる光景を描いていた。罪悪感と異常な興奮で膣内がきゅうきゅうと激しく収縮し、狂ったように腰を跳ねさせてイッてしまった。",
        "妄想の熱に浮かされて、パートナーに「もっと強く突いて」とねだった。相手が喜んで激しく腰を動かすたび、心の中で別の男の顔を重ねて快感に溺れていた。",
        "優しく愛してくれるパートナーの顔を見て、自分の淫らな裏切りに強い罪悪感を覚えた。妄想をかき消すように相手の首にしがみつき、精一杯の愛情を注ぎ返した。"
      ],
      "sexualEffects": [
        {
          "desire": 7,
          "secrecy": 5,
          "selfKnowledge": 4
        },
        {
          "desire": 8,
          "initiative": 5,
          "secrecy": 4
        },
        {
          "morality": 4,
          "trust": 3
        }
      ]
    },
    {
      "subTitle": "かつての恋人の記憶と重なる素肌",
      "text": "今のパートナーとの穏やかな情交の最中、ふと肌の奥深くに蘇るかつての恋人の匂いと激しいタッチ。比較してはいけないと知りながらも、忘れられないあの強烈な快楽の記憶が、今の身体をより深く濡らしてしまう……。",
      "choices": [
        [
          "過去の記憶を情熱に変え、目の前の相手を狂おしく求め尽くす",
          {
            "happiness": 4,
            "secrecy": 4,
            "trust": 2
          }
        ],
        [
          "昔の快感を思い出しながら、密かに腰の奥底で締め上げる",
          {
            "happiness": 5,
            "secrecy": 5,
            "sexualEffects": {
              "desire": 6,
              "shyness": 4
            }
          }
        ],
        [
          "昔の影を重ねてしまった自分を恥じ、一度行為を止めて深呼吸する",
          {
            "morality": 3,
            "selfUnderstanding": 3
          }
        ]
      ],
      "diary": [
        "昔の恋人の感触を思い出しながら、今の相手に抱かれた。罪深い妄想のせいで皮肉にも身体はこれ以上ないほど濡れそぼり、激しい愛液の水音とともに果ててしまった。",
        "相手の耳元で甘い声を上げながら、心の中では過去の男の指先をなぞっていた。秘密を抱えたまま達するオーガズムの甘い毒に、身体の芯が痺れきっていた。",
        "過去の影を重ねてしまった自分に耐えられなくなり、優しく相手を抱きとめて動きを止めた。今のパートナーと真摯に向き合う大切さを噛み締めた。"
      ],
      "sexualEffects": [
        {
          "desire": 6,
          "secrecy": 4,
          "trust": 2
        },
        {
          "desire": 7,
          "secrecy": 5,
          "selfKnowledge": 4
        },
        {
          "morality": 4,
          "selfUnderstanding": 3
        }
      ]
    }
  ],
  "classification": "major",
  "is_major": true
});
