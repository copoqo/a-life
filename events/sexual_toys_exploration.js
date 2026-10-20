(window.eventDefs = window.eventDefs || []).push({
  "id": "sexual_toys_exploration",
  "title": "玩具と人工的な快感",
  "description": "生身の指や肉体では決して味わえない、機械仕掛けの執拗で無慈悲な刺激。大人の玩具を手に入れ、未知の快楽への扉を恐る恐る押し開く。",
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
          240,
          731
        ]
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
    "unique_key": "sexual_toys_exploration"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "全身を痙攣させて潮を吹く",
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
          "description": "最大出力の振動を突起に押しつけ、全身を痙攣させて潮を吹く。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
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
      "label": "内壁を震わせて悶え狂う",
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
          "description": "先端を濡れた奥深くまで挿入し、内壁を震わせて悶え狂う。",
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
      "label": "すぐにスイッチを切る",
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
          "description": "あまりの強烈な痺れに恐怖を感じ、すぐにスイッチを切る。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 20,
  "max": 60,
  "p": 0.2,
  "text": "生身の指や肉体では決して味わえない、機械仕掛けの執拗で無慈悲な刺激。大人の玩具を手に入れ、未知の快楽への扉を恐る恐る押し開く。",
  "variants": [
    {
      "subTitle": "激震ローターと溢れる蜜潮",
      "text": "手のひらに収まる強力な振動ローター。スイッチを入れると甲高いモーター音とともに激しく震え出す。それを愛液で湿ったクリトリスへと直接押し当てた瞬間、人の手には真似できない執拗な振動が神経を直撃する……。",
      "choices": [
        [
          "最大出力の振動を突起に押しつけ、全身を痙攣させて潮を吹く",
          {
            "happiness": 5,
            "stress": -3,
            "selfUnderstanding": 3
          }
        ],
        [
          "先端を濡れた奥深くまで挿入し、内壁を震わせて悶え狂う",
          {
            "happiness": 4,
            "stress": -2,
            "selfUnderstanding": 4
          }
        ],
        [
          "あまりの強烈な痺れに恐怖を感じ、すぐにスイッチを切る",
          {
            "stress": 1,
            "independence": 2
          }
        ]
      ],
      "diary": [
        "モーターの超高速の振動をクリトリスに押し当てると、わずか十数秒で身体が弓なりになった。甲高い嬌声を上げながら、自分でも信じられない量の蜜潮がぴゅっとシーツを濡らし、腰がガクガクと震えて止まらなかった。",
        "振動する機械を濡れそぼる肉穴の奥へと沈めると、内壁全体が蜂の巣をつついたように痺れて脈打った。下腹の奥底を執拗に掻き回され、涙を流しながら一人きりの快楽に溺れきった。",
        "機械の無慈悲な刺激に頭が狂いそうになり、慌てて電源を切った。鼓動が激しく打ち鳴り、股間の奥がいつまでもジーンと痺れていた。"
      ],
      "sexualEffects": [
        {
          "desire": 6,
          "shyness": 5,
          "selfKnowledge": 5
        },
        {
          "desire": 7,
          "shyness": 6,
          "selfKnowledge": 5
        },
        {
          "boundaryVoice": 2,
          "selfKnowledge": 2
        }
      ]
    },
    {
      "subTitle": "太型バイブによる拡張と圧迫",
      "text": "生身の男性のものよりも遥かに太くリアルな質感を持つバイブ。ローションをたっぷりと塗りたくり、細い入り口にあてがう。ゆっくりと押し広げられながら、肉壁を無理やり押し広げて奥深くまで沈み込んでゆく……。",
      "choices": [
        [
          "太い肉棒状の玩具を根元まで呑み込み、子宮口を激しく小突く",
          {
            "happiness": 4,
            "stress": -2,
            "selfUnderstanding": 3
          }
        ],
        [
          "パートナーに玩具を握らせ、太い異物で奥を抉ってもらう",
          {
            "happiness": 5,
            "trust": 3,
            "selfUnderstanding": 3
          }
        ],
        [
          "裂けそうな痛みに耐えかねて、途中で引き抜いて諦める",
          {
            "stress": 1,
            "boundaryVoice": 3
          }
        ]
      ],
      "diary": [
        "太い異物がみちみちと音を立てて秘所を押し広げ、奥底の子宮口にゴツンと突き当たった。息が詰まるほどの圧迫感と、奥を小突かれる重い快感に、下腹からとろりとした愛液がとめどなく溢れ出た。",
        "パートナーの手にバイブを委ね、太い玩具で奥を激しく掻き回された。自分以外の存在に機械で犯される背徳の光景に、シーツを掻きむしりながら何度も腰を跳ねさせて絶頂した。",
        "太すぎてどうしても根元まで入らず、痛みに顔をしかめて抜いた。無理をせず、自分の身体のサイズに合ったものを探そうと思った。"
      ],
      "sexualEffects": [
        {
          "desire": 6,
          "shyness": 5,
          "selfKnowledge": 4
        },
        {
          "desire": 8,
          "trust": 2,
          "selfKnowledge": 5
        },
        {
          "boundaryVoice": 4,
          "health": 1
        }
      ]
    },
    {
      "subTitle": "遠隔ローターを忍ばせた外出実験",
      "text": "下着のクロッチ部分に小型の無線ローターを固定し、その上から普段通りのスカートを履く。手元にはリモコン。人通りのある街中やカフェへ出かけ、平静な顔のままスイッチを押すという危険な好奇心が抑えきれない……。",
      "choices": [
        [
          "人混みの中でリモコンを弱に押し、平気な顔を取り繕いながら濡れる",
          {
            "happiness": 4,
            "stress": 3,
            "secrecy": 5
          }
        ],
        [
          "パートナーにリモコンを預け、歩行中に不意打ちで震わせてもらう",
          {
            "happiness": 5,
            "stress": 3,
            "trust": 2
          }
        ],
        [
          "街に出た瞬間、罪悪感と恐怖に耐えかねてトイレで外す",
          {
            "morality": 3,
            "stress": -2
          }
        ]
      ],
      "diary": [
        "雑踏を行き交う人々の中、コートのポケットの中でボタンを押した。下着の奥でブブブと震える感触に、膝がガクンと折れそうになりながら、すれ違う誰にも知られずに太ももを愛液で濡らしていた。",
        "パートナーにリモコンを渡し、いつ振動するか分からない恐怖に怯えながら買い物をした。レジの前で突然強振動させられた瞬間、声を呑んで息を止め、下腹が激しく収縮する快感に涙目になった。",
        "公衆の面前でこんなことをしている自分に急に恐ろしさを感じ、商業施設のトイレへ駆け込んでローターを外した。冷や汗とともに、異常なスリルから解放された安堵を噛み締めた。"
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
          "trust": 2
        },
        {
          "morality": 3,
          "boundaryVoice": 3
        }
      ]
    }
  ],
  "classification": "daily"
});
