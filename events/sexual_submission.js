(window.eventDefs = window.eventDefs || []).push({
  "id": "sexual_submission",
  "title": "屈辱と被虐への目覚め",
  "description": "パートナーとの寝室、ただ愛されるだけでは満たされない倒錯した欲望が頭をもたげる。支配され、辱められ、無力な雌として扱われることに、肉体が抗いがたい快感を覚え始める。",
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
          240,
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
    "base": 20,
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
    "unique_key": "sexual_submission"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "自分が淫らな身体であることを口で認める",
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
          "description": "涙目で恥じらいながら、自分が淫らな身体であることを口で認める。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "お尻を突き出して懇願する",
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
          "description": "もっと汚い言葉で罵ってほしいと、お尻を突き出して懇願する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
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
      "id": "choice_2",
      "label": "言葉責めをやめてほしいと懇願する",
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
          "description": "屈辱のあまり顔を伏せ、言葉責めをやめてほしいと懇願する。",
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
  "min": 20,
  "max": 55,
  "p": 0.2,
  "text": "パートナーとの寝室、ただ愛されるだけでは満たされない倒錯した欲望が頭をもたげる。支配され、辱められ、無力な雌として扱われることに、肉体が抗いがたい快感を覚え始める。",
  "variants": [
    {
      "subTitle": "言葉責めと屈辱の歓び",
      "text": "ベッドの上で四つん這いにさせられ、背後から無遠慮な視線を浴びせられる。「こんなに濡らして、ただの淫乱なメスだな」と耳元で下品な言葉を浴びせられるたび、否定したい心とは裏腹に、秘所がきゅうきゅうと愛液を滴らせて収縮する……。",
      "choices": [
        [
          "涙目で恥じらいながら、自分が淫らな身体であることを口で認める",
          {
            "happiness": 3,
            "stress": 1,
            "trust": 2
          }
        ],
        [
          "もっと汚い言葉で罵ってほしいと、お尻を突き出して懇願する",
          {
            "happiness": 5,
            "stress": 2,
            "trust": 1
          }
        ],
        [
          "屈辱のあまり顔を伏せ、言葉責めをやめてほしいと懇願する",
          {
            "boundaryVoice": 4,
            "stress": -1
          }
        ]
      ],
      "diary": [
        "汚い言葉でなじられるたび、悔しいはずなのに身体の奥がじんじんと熱くなって蜜が溢れ出た。「私は淫乱です」と復唱させられた瞬間、下腹が激しく痙攣して屈辱の中で絶頂に達してしまった。",
        "もっと蔑まれたくて、潤んだ瞳で相手を見上げながら腰を振ってねだった。無慈悲な言葉とともに奥深くを小突かれた瞬間、自分が完全に相手の玩具になった快楽に溺れ狂った。",
        "言葉の暴力に耐えきれず、首を振ってやめてほしいと伝えた。相手が抱きしめて優しくキスしてくれたとき、安心と少しの物足りなさが胸に渦巻いた。"
      ],
      "sexualEffects": [
        {
          "desire": 6,
          "shyness": 5,
          "selfKnowledge": 4
        },
        {
          "desire": 8,
          "shyness": 8,
          "selfKnowledge": 5
        },
        {
          "boundaryVoice": 5,
          "selfAcceptance": 3
        }
      ]
    },
    {
      "subTitle": "ネクタイによる拘束と無防備な肉体",
      "text": "ベッドの柱や背中に、ネクタイで両手首をきつく縛り上げられる。身動きが一切取れない状態で、服を少しずつ剥ぎ取られ、無防備な素肌を冷気に晒される。抵抗できない恐怖と期待に、全身の毛穴が開く……。",
      "choices": [
        [
          "拘束されたまま、されるがままに全身を弄ばれる",
          {
            "happiness": 4,
            "stress": 1,
            "trust": 3
          }
        ],
        [
          "解いてほしいと懇願しながら、もがいて身体を擦りつける",
          {
            "happiness": 5,
            "stress": 2,
            "trust": 2
          }
        ],
        [
          "身体の痛みに恐怖を感じ、すぐにほどくよう強く要求する",
          {
            "boundaryVoice": 5,
            "stress": -2
          }
        ]
      ],
      "diary": [
        "両手を縛られて自由を奪われると、肌に触れる指先の温度が何倍にも生々しく感じられた。逃げられない体勢で奥深くまで肉塊を突き刺されたとき、支配される歓びに全身が痺れて意識が飛びそうになった。",
        "「ほどいて」と泣きつく声が、相手をさらに昂らせて激しいピストンを招いた。もがけばもがくほど奥深くまで抉り込まれ、シーツを握ることすらできずに腰を跳ねさせ続けた。",
        "手首に食い込む痛みに耐えかねて解いてもらった。縛られることへの興味と、恐怖の境界線を肌で知った夜だった。"
      ],
      "sexualEffects": [
        {
          "desire": 7,
          "shyness": 6,
          "selfKnowledge": 4
        },
        {
          "desire": 9,
          "shyness": 7,
          "selfKnowledge": 5
        },
        {
          "boundaryVoice": 6,
          "selfKnowledge": 3
        }
      ]
    },
    {
      "subTitle": "開帳命令と淫らな視線",
      "text": "仰向けに寝かされ、自分の両手で秘所の左右を押し広げて見せるよう命じられる。恥ずかしさで真っ赤になりながらも、指先で濡れた粘膜を左右に開くと、湿った内部が空気に触れて湯気を立て、滴る蜜が相手の視線に晒される……。",
      "choices": [
        [
          "言われた通りに奥まで押し広げ、じっくりと見つめられる",
          {
            "happiness": 3,
            "stress": 2,
            "shyness": 5
          }
        ],
        [
          "指でクリトリスを擦りながら、見られている前で自慰を見せつける",
          {
            "happiness": 5,
            "stress": 2,
            "shyness": 6
          }
        ],
        [
          "耐えきれない羞恥に太ももを閉じ、手で顔を覆い隠す",
          {
            "shyness": 4,
            "independence": 2
          }
        ]
      ],
      "diary": [
        "自分の指で秘所を大きく押し広げ、ひくひくと蠢く赤い粘膜を凝視された。穴の奥まで覗き込まれる恥ずかしさに耐えかねていると、そのまま顔を埋められて激しく舌で吸い上げられ、狂乱の声を上げてしまった。",
        "見つめられながら自ら突起を指で擦り上げると、相手の荒い息遣いが太ももにかかった。目の前で愛液をぴゅっと飛ばして果てる姿を見せつけた瞬間、頭の芯が痺れるような背徳の悦びに包まれた。",
        "あまりの恥ずかしさに脚を閉じて拒んでしまった。それでも相手の熱い視線が焼き付いて、服を着直した後も股間がずっと火照っていた。"
      ],
      "sexualEffects": [
        {
          "desire": 6,
          "shyness": 7,
          "selfKnowledge": 4
        },
        {
          "desire": 8,
          "shyness": 9,
          "selfKnowledge": 6
        },
        {
          "boundaryVoice": 3,
          "shyness": 4
        }
      ]
    }
  ],
  "classification": "daily"
});
