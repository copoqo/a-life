(window.eventDefs = window.eventDefs || []).push({
  "id": "sexual_taboo_solitude",
  "title": "一人きりの倒錯と秘め事",
  "description": "静かな夜、一人きりの空間で身体の奥が激しく疼き出す。誰にも言えない淫らな刺激を求め、指先が勝手に秘所へと伸びていく。",
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
          431
        ]
      }
    ]
  },
  "weight": {
    "base": 22,
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
    "unique_key": "sexual_taboo_solitude"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "激しい水流に腰を押しつけて果てる",
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
          "description": "水圧の強さを上げ、激しい水流に腰を押しつけて果てる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ぐちゅぐちゅと掻き回す",
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
          "description": "水音に紛れて指も奥へと沈め、ぐちゅぐちゅと掻き回す。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "息を荒げながら蛇口を閉める",
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
          "description": "刺激の強さに怯え、息を荒げながら蛇口を閉める。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 35,
  "p": 0.22,
  "text": "静かな夜、一人きりの空間で身体の奥が激しく疼き出す。誰にも言えない淫らな刺激を求め、指先が勝手に秘所へと伸びていく。",
  "variants": [
    {
      "subTitle": "浴室の熱気と水圧の刺激",
      "text": "湯気で白く煙る浴室の床に腰を下ろし、シャワーヘッドを手に取る。勢いよく噴き出す温水の束を、充血して尖ったクリトリスへと直接押し当てた。水流が肉芽を激しく叩くたび、鋭い痺れが腰から背筋を駆け抜け、声にならない嬌声が口から漏れそうになる……。",
      "choices": [
        [
          "水圧の強さを上げ、激しい水流に腰を押しつけて果てる",
          {
            "happiness": 3,
            "stress": -3,
            "selfUnderstanding": 2
          }
        ],
        [
          "水音に紛れて指も奥へと沈め、ぐちゅぐちゅと掻き回す",
          {
            "happiness": 4,
            "stress": -2,
            "selfUnderstanding": 3
          }
        ],
        [
          "刺激の強さに怯え、息を荒げながら蛇口を閉める",
          {
            "independence": 2,
            "stress": 1
          }
        ]
      ],
      "diary": [
        "シャワーの強い水流を敏感な突起に押し当てると、頭の中が真っ白になるほどの快感が突き抜けた。声を押さえながら腰を浮かせ、激しく痙攣して愛液と温水が混ざり合って排水口へと流れていった。",
        "水圧でふやけた秘唇の隙間から、二本の指を奥深くまでねじ込んだ。水音と混ざり合う湿った肉の音が浴室に反響して、恥ずかしさで内壁がきゅうきゅうと指を締めつけて離さなかった。",
        "水圧の快感に溺れそうになりながらも、急に怖くなってシャワーを止めた。水滴が滴る太ももの間が、いつまでも熱く脈打っていた。"
      ],
      "sexualEffects": [
        {
          "desire": 5,
          "shyness": 3,
          "selfKnowledge": 4
        },
        {
          "desire": 6,
          "shyness": 5,
          "selfKnowledge": 5
        },
        {
          "boundaryVoice": 3,
          "shyness": 2
        }
      ]
    },
    {
      "subTitle": "隣室の気配とシーツの中",
      "text": "壁一枚隔てた隣の部屋から、同居人や家族の微かな物音が聞こえる。見つかるかもしれない恐怖に息を殺しながら、布団を頭まで被り、濡れそぼったショーツの中に指を滑り込ませた。ぐちゅりと微かな水音が布団の中にこもり、心臓が破裂しそうなほど早鐘を打つ……。",
      "choices": [
        [
          "口元を手で塞ぎ、音を殺しながら指を激しく出し入れする",
          {
            "happiness": 3,
            "stress": 2,
            "secrecy": 4
          }
        ],
        [
          "下着を足首まで引き下げ、溢れる愛液をシーツに擦りつける",
          {
            "happiness": 4,
            "stress": 1,
            "secrecy": 5
          }
        ],
        [
          "足音のような気配に息を呑み、指を抜いて身を潜める",
          {
            "stress": 2,
            "independence": 2
          }
        ]
      ],
      "diary": [
        "すぐ隣に人がいるというのに、指先で濡れた肉穴を掻き回す手が止まらなかった。声を漏らせばバレてしまう恐怖が、かえって下腹の奥を狂おしいほど熱くさせ、枕を噛みながら声なき絶頂を迎えた。",
        "ショーツを脱ぎ捨て、濡れきった秘所を冷たいシーツに擦りつけた。擦れるたびにじわりと染み出す愛液の淫らな匂いが布団の中に満ちて、背徳感で足の指先まで丸まった。",
        "隣で物音がした瞬間、凍りついたように指を止めた。暗闇の中で自分の荒い息遣いと、濡れた下着のじっとりした冷たさだけがいつまでも残っていた。"
      ],
      "sexualEffects": [
        {
          "desire": 6,
          "shyness": 6,
          "selfKnowledge": 4
        },
        {
          "desire": 8,
          "shyness": 7,
          "selfKnowledge": 5
        },
        {
          "boundaryVoice": 3,
          "stress": 2
        }
      ]
    },
    {
      "subTitle": "窓辺の夜風と月光の指先",
      "text": "深夜、レースのカーテンだけを閉めた窓辺に佇み、涼しい夜風を火照った素肌に受ける。外の闇から誰かに見られているかもしれないという倒錯した想像が脳裏をよぎり、下腹の奥が切ないほど疼き出す……。",
      "choices": [
        [
          "カーテンの隙間から外を見下ろしながら、指先で秘所を弄る",
          {
            "happiness": 3,
            "stress": 1,
            "aesthetics": 2
          }
        ],
        [
          "夜風に胸と下腹を晒し、全身を震わせて自慰に溺れる",
          {
            "happiness": 4,
            "stress": 2,
            "aesthetics": 3
          }
        ],
        [
          "カーテンを固く閉め直し、自分の異常な衝動に赤面する",
          {
            "shyness": 4,
            "selfUnderstanding": 2
          }
        ]
      ],
      "diary": [
        "窓の外をたまに通り過ぎる車のライトや遠い街灯を見つめながら、指先を湿った粘膜に這わせた。誰の目にも触れてはならない姿を晒している興奮が、奥底から熱い蜜を噴き出させた。",
        "夜風で冷えた乳首を摘み上げながら、もう片方の手で濡れた秘部をぐちゃぐちゃに解し続けた。冷たい風と熱い粘膜の摩擦が異常なほど鋭く、夜の静寂の中で小さく喘ぎ声を漏らして果てた。",
        "カーテンをきつく閉めた後も、身体の震えが止まらなかった。誰かに見られたいと望んでしまった自分のみだらな本性に、顔から火が出るほど羞恥が込み上げた。"
      ],
      "sexualEffects": [
        {
          "desire": 5,
          "shyness": 4,
          "selfKnowledge": 3
        },
        {
          "desire": 7,
          "shyness": 6,
          "selfKnowledge": 4
        },
        {
          "boundaryVoice": 3,
          "shyness": 5
        }
      ]
    }
  ],
  "classification": "major",
  "is_major": true
});
