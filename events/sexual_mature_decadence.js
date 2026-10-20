(window.eventDefs = window.eventDefs || []).push({
  "id": "sexual_mature_decadence",
  "title": "熟れた肉体の濃密な愛欲",
  "description": "年齢を重ね、若さという張りを失いつつも、より深く、熟成された雌としての匂いと情念を帯びる身体。枯れゆく手前の肉体が放つ、濃厚で底なしの愛欲に沈んでゆく。",
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
          480,
          1031
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
    "unique_key": "sexual_mature_decadence"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "骨の髄まで溶けるような深い交わりをする",
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
          "description": "年齢の重みを噛み締めながら、骨の髄まで溶けるような深い交わりをする。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "まだ女であることを誇る",
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
          "description": "濡れそぼる秘所を相手の手で確かめさせ、まだ女であることを誇る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "薄暗い部屋で静かに抱き合う",
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
          "description": "老いていく肉体を晒すのが気恥ずかしく、薄暗い部屋で静かに抱き合う。",
          "effects": [
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 3
            },
            {
              "path": "trait.sexual_interest.current",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 40,
  "max": 85,
  "p": 0.2,
  "text": "年齢を重ね、若さという張りを失いつつも、より深く、熟成された雌としての匂いと情念を帯びる身体。枯れゆく手前の肉体が放つ、濃厚で底なしの愛欲に沈んでゆく。",
  "variants": [
    {
      "subTitle": "枯れゆく肉体の激しい疼きと蜜",
      "text": "更年期を迎え、あるいは白髪が混じり始めた身体。もう女として終わりゆくのかという焦燥の裏で、下腹の奥は若い頃よりもねっとりと濃密な愛液を滴らせ、肌の摩擦と奥深くの重い圧迫を渇望している……。",
      "choices": [
        [
          "年齢の重みを噛み締めながら、骨の髄まで溶けるような深い交わりをする",
          {
            "happiness": 5,
            "health": 2,
            "selfUnderstanding": 4
          }
        ],
        [
          "濡れそぼる秘所を相手の手で確かめさせ、まだ女であることを誇る",
          {
            "happiness": 4,
            "trust": 3,
            "selfAcceptance": 4
          }
        ],
        [
          "老いていく肉体を晒すのが気恥ずかしく、薄暗い部屋で静かに抱き合う",
          {
            "shyness": 3,
            "intimacyNeed": 3
          }
        ]
      ],
      "diary": [
        "衰え始めた身体だからこそ、肌と肌が触れ合う温もりが芯まで染み渡った。ゆっくりと奥深くまで満たされるたび、濃い愛液が粘りつくような水音を立て、熟れた肉体の悦楽を噛み締めながら静かに果てた。",
        "「まだこんなに濡れている」と相手の指先で秘部をなぞられたとき、女としての誇りと安堵が胸を満たした。重ねた年月がもたらす濃密な快感に、声を押し殺してシーツを掴んだ。",
        "明かりを落とした薄暗がりの中、互いの皺やたるみを慈しむように撫で合った。若い頃のような激しさはないけれど、深く満ち足りた交わりだった。"
      ],
      "sexualEffects": [
        {
          "desire": 5,
          "selfAcceptance": 5,
          "selfKnowledge": 4
        },
        {
          "desire": 6,
          "selfAcceptance": 6,
          "trust": 3
        },
        {
          "boundaryVoice": 2,
          "intimacyNeed": 4
        }
      ]
    },
    {
      "subTitle": "若く逞しい肌への飢餓感と貪欲",
      "text": "ふとした瞬間に目にする、若い男性の張り詰めた筋肉や生命力に溢れる肉体。枯れゆく我が身との対比に胸を焦がし、あの瑞々しい肉塊に奥深くまで乱暴に突き上げられたいという、底知れぬ飢餓感と狂おしい欲情に襲われる……。",
      "choices": [
        [
          "若さへの狂おしい性欲を認め、一人きりで激しく自慰に耽る",
          {
            "happiness": 4,
            "stress": -1,
            "selfKnowledge": 4
          }
        ],
        [
          "年下の相手との火遊びのような逢瀬に身を投じ、若さを貪り吸う",
          {
            "happiness": 5,
            "stress": 3,
            "secrecy": 5
          }
        ],
        [
          "不相応な妄想だと自らを戒め、冷たい水で顔を洗って落ち着く",
          {
            "morality": 3,
            "stress": 1
          }
        ]
      ],
      "diary": [
        "若い男の汗ばんだ肌と力強い腰つきを思い浮かべながら、シーツの中で指先を濡れた奥へ押し込んだ。自らの衰えを忘れようとするかのように激しく掻き回し、情念の籠もった熱い絶頂に身悶えた。",
        "若く硬い肉体を受け入れ、奥深くまで貪るように腰を絡ませた。張り裂けんばかりの生命力を身体の奥底に注ぎ込まれ、若さを吸い尽くす鬼女になったような狂乱の悦びに浸った。",
        "年甲斐もない情欲に駆られた自分を恥じ、冷水で熱を持った首筋を冷やした。しかし、一度火がついた身体の奥の疼きは容易には消えてくれなかった。"
      ],
      "sexualEffects": [
        {
          "desire": 7,
          "shyness": 5,
          "selfKnowledge": 5
        },
        {
          "desire": 9,
          "secrecy": 6,
          "shyness": 6
        },
        {
          "morality": 3,
          "boundaryVoice": 3
        }
      ]
    },
    {
      "subTitle": "黄昏の静寂に溶け合う温もりの交わり",
      "text": "老境を迎え、夜の静けさの中で長年連れ添った伴侶、あるいは晩年のパートナーと素肌を重ねる。互いの枯れた手を握り合い、衰えた身体の隙間を埋めるように、穏やかで途方もなく濃密な時間が流れる……。",
      "choices": [
        [
          "互いの温もりと呼吸を確かめ合いながら、ゆっくりと身体を繋ぐ",
          {
            "happiness": 5,
            "health": 3,
            "trust": 4
          }
        ],
        [
          "言葉もなく抱きしめ合い、肌を擦り合わせるだけの交わりに満たされる",
          {
            "happiness": 4,
            "trust": 4,
            "stress": -3
          }
        ],
        [
          "穏やかな会話を交わしながら、互いの手を握って眠りに落ちる",
          {
            "trust": 4,
            "stress": -4,
            "intimacyNeed": 3
          }
        ]
      ],
      "diary": [
        "皺の刻まれた身体をゆっくりと合わせ、長年の愛を確かめるように奥まで繋がり合った。激しい絶頂ではなくても、魂が溶け合うような至福の温もりに包まれて、涙が静かに頬を伝った。",
        "ただ素肌を密着させて互いの体温を感じているだけで、身体の奥がじんわりと潤んだ。生きてきた全ての年月がこのぬくもりの中に凝縮されているような、尊い夜だった。",
        "手を繋ぎ、これまでの人生を語り合いながら寄り添って眠った。性愛を超えた深い絆が、老いた身体を優しく包み込んでくれた。"
      ],
      "sexualEffects": [
        {
          "intimacyNeed": 4,
          "selfAcceptance": 4
        },
        {
          "trust": 4,
          "intimacyNeed": 3
        },
        {
          "trust": 3,
          "stress": -3
        }
      ]
    }
  ],
  "classification": "daily"
});
