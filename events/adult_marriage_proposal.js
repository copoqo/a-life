(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_marriage_proposal",
  "title": "プロポーズ・将来への約束",
  "description": "交際を深めてきたパートナーと、これからの人生をどう歩んでいくか。互いの未来を誓い合う特別な瞬間が訪れる。",
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
          264,
          851
        ]
      }
    ]
  },
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_marriage_proposal"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "生涯を誓う",
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
          "description": "涙を浮かべて指輪を受け取り、生涯を誓う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "marriage_ceremony",
                "delay": 1,
                "prob": 0.95
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "もう少し恋人でいたいと告げる",
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
          "description": "嬉しい気持ちを伝えつつも、もう少し恋人でいたいと告げる。",
          "effects": [
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
      "label": "結婚という形には囚われたくないと静かに伝える",
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
          "description": "結婚という形には囚われたくないと静かに伝える。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 22,
  "max": 70,
  "p": 0.22,
  "text": "交際を深めてきたパートナーと、これからの人生をどう歩んでいくか。互いの未来を誓い合う特別な瞬間が訪れる。",
  "variants": [
    {
      "subTitle": "夕暮れの海辺での求婚",
      "text": "夕日に照らされる波打ち際、静かに立ち止まったパートナーから小さな小箱を差し出される。開かれた箱の中で光る指輪。「一生大切にする。僕と結婚してほしい」と真摯な眼差しで告げられ、胸が熱く震える……。",
      "choices": [
        [
          "涙を浮かべて指輪を受け取り、生涯を誓う",
          {
            "happiness": 6,
            "trust": 6,
            "morality": 2,
            "chain": {
              "eventId": "marriage_ceremony",
              "delay": 1,
              "prob": 0.95
            }
          }
        ],
        [
          "嬉しい気持ちを伝えつつも、もう少し恋人でいたいと告げる",
          {
            "trust": 3,
            "independence": 2
          }
        ],
        [
          "結婚という形には囚われたくないと静かに伝える",
          {
            "independence": 4,
            "boundaryVoice": 3
          }
        ]
      ],
      "outcomes": [
        "marry",
        "mutual_talk",
        "boundary"
      ],
      "diary": [
        "指輪を薬指にはめてもらった瞬間、温かい涙が溢れた。この人と家族になり、人生を共にする。言葉にならない幸福感に包まれた。",
        "プロポーズは本当に嬉しかった。でも、まだ二人の自由な恋人としての時間をもう少し味わいたいと伝えた。",
        "結婚という制度に対する自分の正直な気持ちを伝えた。相手を愛しているからこそ、形だけに頼らない関係を模索したい。"
      ]
    },
    {
      "subTitle": "ベッドの中での素肌の誓い",
      "text": "激しく素肌を重ね合い、互いの体温と汗に包まれた寝室。抱き寄せられた腕の中で、パートナーが首筋に優しくキスを落としながら「ずっとこの先も、君を毎晩抱きしめたい。俺の妻になってほしい」と囁きかける……。",
      "choices": [
        [
          "火照った身体を密着させ、喜んで妻になると応じる",
          {
            "happiness": 6,
            "trust": 5,
            "chain": {
              "eventId": "marriage_ceremony",
              "delay": 1,
              "prob": 0.95
            },
            "sexualEffects": {
              "intimacyNeed": 4
            }
          }
        ],
        [
          "赤面して胸元に顔を埋め、返事を少し待ってもらう",
          {
            "trust": 3,
            "shyness": 3
          }
        ],
        [
          "情欲の勢いでの言葉だと受け流し、冗談めかして微笑む",
          {
            "independence": 3,
            "boundaryVoice": 2
          }
        ]
      ],
      "outcomes": [
        "marry",
        "mutual_talk",
        "boundary"
      ],
      "diary": [
        "素肌の温もりが溶け合う中で妻になってほしいと言われ、胸がいっぱいになって頷いた。繋がったままの身体の奥から甘い震えが広がり、深く深く求め合った。",
        "あまりの気恥ずかしさに相手の胸に顔を隠してしまった。嬉しいけれど、一生の約束だからこそ、きちんと息を整えてから返事をしたい。",
        "情事の熱気に任せた言葉かもしれないと思い、優しく笑って躱した。大事な約束だからこそ、日常の中で向き合いたい。"
      ]
    },
    {
      "subTitle": "自ら切り出す将来への決断",
      "text": "長く寄り添い、二人の生活が当たり前になってきた日々。煮え切らない関係に自ら一歩を踏み出すべく、二人で囲む食卓で「私たち、そろそろ夫婦にならない？」と真剣に切り出す……。",
      "choices": [
        [
          "真剣な想いを伝え、相手と結婚の合意を結ぶ",
          {
            "happiness": 5,
            "independence": 4,
            "trust": 5,
            "chain": {
              "eventId": "marriage_ceremony",
              "delay": 1,
              "prob": 0.95
            }
          }
        ],
        [
          "相手の戸惑いを察し、焦らずに準備を進めようと微笑む",
          {
            "trust": 3
          }
        ],
        [
          "相手の覚悟のなさに失望し、関係の潮時を感じる",
          {
            "independence": 4,
            "stress": 2
          }
        ]
      ],
      "outcomes": [
        "marry",
        "mutual_talk",
        "distance"
      ],
      "diary": [
        "自分から結婚を切り出すのは少し勇気が要ったけれど、相手が驚いた後に満面の笑みで抱きしめてくれた。私たちが選んだ未来が始まる。",
        "相手の少し焦った表情を見て、急ぎすぎずにお互いのタイミングを待とうと思えた。",
        "結婚に対して踏み切れない相手の態度に、少し胸が冷えてしまった。お互いの見据える未来にズレがあるのかもしれない。"
      ]
    }
  ],
  "classification": "major",
  "is_major": true
});
