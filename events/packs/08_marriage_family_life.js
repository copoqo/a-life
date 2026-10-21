// ============================================================================
// Pack: 08_marriage_family_life — プロポーズ・結婚・夫婦生活・育児・介護・家族の転機 (20 events)
// ============================================================================
window.defineEvent({
  "id": "life_relative_funeral",
  "title": "親族の不幸・通夜と葬儀",
  "age": [
    16,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 14,
  "text": "突然届いた親族の訃報。黒い喪服に身を包み、黒ストッキングを履いて親戚が集まる斎場へ。線香と菊の重苦しい匂いが漂う中、親族の悲しみに触れ、命の儚さと生きている肉体の重みを静かに意識させられる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "気丈に振る舞う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "遺族の手伝いや受付に奔走し、気丈に振る舞う。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
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
      "label": "線香の前で静かに涙を流す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "故人との思い出を振り返り、線香の前で静かに涙を流す。",
          "effects": [
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
      "id": "choice_2",
      "label": "一人離れで外の空気を吸う",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "喪服の締め付けと線香の匂いに息が詰まり、一人離れで外の空気を吸う。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "rare_funeral_cousin_taboo",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "diary": [
    "親族の受付や弔問客への対応に追われた。悲しみの中でも自分の役割を果たすことで、少しずつ気持ちを落ち着かせることができた。",
    "遺影に手を合わせ、生前の温かな笑顔を思い出した。別れの悲しみが胸を締めつけ、涙が止まらなかった。",
    "喪服の黒ストッキングに包まれた太ももを擦り合わせながら、暗い夜風を浴びた。死の重苦しさに反比例するように、下腹の奥で生々しい体温が疼くのを感じて戸惑った。"
  ]
});

window.defineEvent({
  "id": "life_body_autonomy",
  "title": "この肉体と快楽の主は私自身であること",
  "age": [
    18,
    75
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
  "weight": {
    "base": 9,
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
  "text": "誰かの都合や視線に支配されるのではなく、この柔らかな乳房も、湿り気を帯びる秘所も、すべて自分自身の誇りであり領分なのだと強く自覚する。自らの手で身体を愛し、尊厳を守る決意を抱く。",
  "choices": [
    {
      "id": "choice_0",
      "label": "身体の主権を宣言する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "自らの欲望と境界線を堂々と言葉にし、身体の主権を宣言する。",
          "effects": [
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
      "id": "choice_1",
      "label": "対等な愛の快楽を分かち合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "信頼できるパートナーと素肌を重ね、対等な愛の快楽を分かち合う。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "私の身体は私だけのもの。誰かの慰みものでも、所有物でもない。自らの意志で快楽を選び取り、生きる誇りが下腹の奥を満たした。",
    "対等に互いを慈しみ合える人と肌を合わせた。支配でも従属でもない、真の素肌の交わりがもたらす至福に涙が零れた。"
  ]
});

window.defineEvent({
  "id": "life_disaster_preparation",
  "title": "災害への備え",
  "age": [
    18,
    90
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 9,
  "text": "地域の防災情報を見て、日頃の備えを考えた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "備蓄を整える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "備蓄を整える。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": -30000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "避難場所を確認する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "避難場所を確認する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "marital_life_intimacy",
  "title": "夫婦の日常と語らい",
  "title_template": "夫婦の日常 〜{variation_title}〜",
  "age": [
    20,
    80
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "married"
  ],
  "weight": 80,
  "actors": {
    "spouse": {
      "source": "current_partner",
      "required": true
    }
  },
  "choices": [
    {
      "id": "choice_sweet",
      "stance": "sweet",
      "label": "愛情を込めて素直に甘え、相手を労う",
      "effects": {
        "intimacyNeed": 4,
        "mood": 4,
        "stress": -2
      }
    },
    {
      "id": "choice_calm",
      "stance": "calm",
      "label": "落ち着いた笑顔で受け止め、穏やかに寄り添う",
      "effects": {
        "mood": 3,
        "stress": -1
      }
    },
    {
      "id": "choice_tease",
      "stance": "tease",
      "label": "少し照れ隠しに軽口を叩いて茶化す",
      "effects": {
        "social": 3,
        "mood": 2
      }
    },
    {
      "id": "choice_tired",
      "stance": "tired",
      "label": "疲れているからと静かに一人で過ごす",
      "effects": {
        "stress": -2
      }
    }
  ],
  "variations": [
    {
      "sub_id": "dinner_table_evening",
      "title": "夕餉の食卓、温かい料理と語らい",
      "description": "湯気の立つ夕餉の食卓。二人で並んで箸を動かしながら、今日あった仕事の出来事や他愛ない話題に花が咲く……。",
      "outcomes": {
        "sweet": {
          "text": "「今日もお疲れ様」と笑顔でおかずを取り分け、そっと肩を寄せ合って温かい時間を噛み締めた。",
          "diary": "夕飯を食べながら夫とたくさん話した。何気ない日常の団らんが、一番心が安らぐ。"
        },
        "calm": {
          "text": "向かい合って穏やかに微笑み、相手の愚痴に優しく相槌を打ちながら静かに夜を過ごした。",
          "diary": "食卓で穏やかに夫の話を聞いた。夫婦の落ち着いた絆を実感する。"
        },
        "tease": {
          "text": "「またそんなこと言って」と笑いながら軽く肩をつつき、食後のデザートを二人で半分こした。",
          "diary": "食卓で他愛ない冗談を言い合って笑った。気兼ねなく笑い合える関係が心地いい。"
        },
        "tired": {
          "text": "お互いに疲れていたので、多くを語らずとも静かにご飯を平らげ、早めに後片付けを済ませた。",
          "diary": "今夜は二人とも疲れていたので静かに夕飯を食べた。言葉がなくても落ち着けるのが夫婦の良さだ。"
        }
      }
    }
  ]
});

window.defineEvent({
  "id": "life_friend_marriage",
  "title": "友人の薬指の指輪と揺れる胸中",
  "age": [
    22,
    48
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 8,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
    }
  },
  "text": "久しぶりに会った友人の左手薬指に輝く指輪。幸せそうに笑う横顔を祝福しながらも、自分の選んできた人生やこれからの愛の形を思い、胸の奥に淡いざわめきを覚える。",
  "choices": [
    {
      "id": "choice_0",
      "label": "共に喜びの涙を流す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "友人の門出を心から祝福し、共に喜びの涙を流す。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 5
            },
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
      "id": "choice_1",
      "label": "静かに思いを巡らせる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "自分の人生の選択肢について、静かに思いを巡らせる。",
          "effects": [
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
  "diary": [
    "「おめでとう」と抱きしめ合った。友人の輝く笑顔を見て、心から幸せを願った。",
    "帰り道、夜風に吹かれながら自分の歩んできた道を振り返った。私には私の生きるリズムがあるのだと、深く息を吸い込んだ。"
  ]
});

window.defineEvent({
  "id": "life_parenthood_question",
  "title": "自らの子宮の重みと未来へのまなざし",
  "age": [
    22,
    48
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "general",
  "presets": [
    "partnered",
    "male_partner",
    "rel_stage_established"
  ],
  "weight": 8,
  "is_major": true,
  "text": "下腹にそっと手を当て、奥深くに眠る子宮の温もりを意識する。自らの身体で新しい命を宿し育むことの神秘と恐れ、あるいは一人の女として生き切ることの選択肢。内臓の奥がずっしりと重く脈打つのを感じる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "未来の家族像を考える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "自らの身体と心の声に耳を澄まし、未来の家族像を考える。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "目の前にある自分の人生を精一杯生きる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "今は結論を急がず、目の前にある自分の人生を精一杯生きる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "下腹の温もりに手を当てながら、母となること、あるいは母とならない自分の未来を想像した。どんな選択であれ、私の身体の尊厳は揺るがない。",
    "周囲の期待やプレッシャーに流されず、自分の人生を生きようと心に決めた。胸の奥がすっきりと晴れ渡った。"
  ]
});

window.defineEvent({
  "id": "adult_marriage_proposal",
  "title": "プロポーズ・将来への約束",
  "age": [
    22,
    70
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "general",
  "presets": [
    "partnered",
    "unmarried",
    "rel_stage_established"
  ],
  "weight": 22,
  "is_major": true,
  "text": "交際を深めてきたパートナーと、これからの人生をどう歩んでいくか。互いの未来を誓い合う特別な瞬間が訪れる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "生涯を誓う",
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
  ]
});

window.defineEvent({
  "id": "marriage_ceremony",
  "title": "結婚の儀と新しい暮らし",
  "age": [
    22,
    72
  ],
  "trigger": "chain_only",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "married"
  ],
  "weight": 35,
  "once": true,
  "text": "夫婦となった二人の門出。誓いの儀式や新しい家庭のスタートが、人生に鮮やかな節目を刻む。",
  "choices": [
    {
      "id": "choice_0",
      "label": "夫となった相手に激しく身を委ねる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "純白のベールを脱ぎ捨て、夫となった相手に激しく身を委ねる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "history.flags.ceremony_done",
              "op": "record_flag",
              "value": true
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "温もりを分かち合って眠る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "式を無事に終えた安堵の中で、温もりを分かち合って眠る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            },
            {
              "path": "history.flags.ceremony_done",
              "op": "record_flag",
              "value": true
            }
          ]
        }
      ]
    }
  ],
  "variants": [
    {
      "subTitle": "純白のウェディングドレスと初夜",
      "text": "祝福の拍手と華やかな花びらに包まれ、純白のドレスで歩くバージンロード。披露宴を終えたホテルのスイートルームで、夫の手でドレスのファスナーをゆっくりと下ろされ、夫婦となって初めての熱い素肌を重ねる……。",
      "choices": [
        [
          "純白のベールを脱ぎ捨て、夫となった相手に激しく身を委ねる",
          {
            "happiness": 6,
            "trust": 4,
            "flag": "ceremony_done"
          }
        ],
        [
          "式を無事に終えた安堵の中で、温もりを分かち合って眠る",
          {
            "happiness": 5,
            "stress": -4,
            "flag": "ceremony_done"
          }
        ]
      ],
      "diary": [
        "ドレスを脱がされ、素肌を晒したときの恥じらいと高揚感。夫となった人の逞しい腕に抱かれ、奥深くまで貫かれた瞬間の痺れるような快感は、生涯忘れられない夜になった。",
        "たくさんの人に祝福された一日が終わった。疲れた身体を寄せ合い、同じ苗字になった実感に包まれながら穏やかに眠りについた。"
      ]
    },
    {
      "subTitle": "二人きりの婚姻届と乾杯",
      "text": "派手な式は挙げず、夜間の役所窓口へ二人で婚姻届を提出する。受理された小さな控えを手に、夜風に吹かれながら帰宅し、部屋でささやかなシャンパンを開けて夫婦の誓いを交わす……。",
      "choices": [
        [
          "グラスを合わせた後、夫婦になった実感を確かめるように濃密に交わる",
          {
            "happiness": 5,
            "trust": 5,
            "money": 4,
            "flag": "ceremony_done"
          }
        ],
        [
          "これからの家計や生活の計画を二人で語り合う",
          {
            "knowledge": 4,
            "money": 6,
            "flag": "ceremony_done"
          }
        ]
      ],
      "diary": [
        "紙切れ一枚で夫婦になる不思議さと重み。部屋に戻って二人で乾杯し、シーツの上で貪るように身体を重ねた。飾らない私たちのスタートが誇らしかった。",
        "浮いた結婚式の費用をこれからの生活資金に回し、堅実な暮らしを始めた。地に足のついた安心感が心地いい。"
      ]
    }
  ]
});

window.defineEvent({
  "id": "life_household",
  "title": "夜明けの台所と二人の生活の気配",
  "age": [
    25,
    60
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 8,
  "text": "静かな朝の光の中で、一人で立つ台所、あるいは隣でまだ温かい寝息を立てるパートナーの存在。誰かと肌を寄せ合って生きる安心感と、一人きりの自由な空間の間で、これからの暮らしに想いを馳せる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "より心地よい空間を整える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "住まいの希望を整理し、より心地よい空間を整える。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "日々の食卓を充実させる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "今の温かな暮らしを慈しみ、日々の食卓を充実させる。",
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
    }
  ],
  "diary": [
    "カーテンを開けて朝の光を浴びた。自分が選んだ生活の輪郭が、少しずつ形作られていく手応えがあった。",
    "湯気を立てるお味噌汁を囲みながら、他愛ない会話を交わした。この何気ない暮らしこそが宝物なのだと思えた。"
  ]
});

window.defineEvent({
  "id": "marital_intimacy_crisis",
  "title": "夫婦の寝室・倦怠と夜の渇き",
  "age": [
    25,
    75
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "married"
  ],
  "weight": {
    "base": 16,
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
  "is_major": true,
  "text": "結婚生活が長くなるにつれ、かつての激しい情熱が落ち着き、夜の営みに微妙な変化やすれ違いが訪れる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "背中から抱きついて誘う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "夫のパジャマに手を滑り込ませ、背中から抱きついて誘う。",
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
      "id": "choice_1",
      "label": "濡れた秘所に指を沈めて慰める",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "音を殺してシーツの中で一人、濡れた秘所に指を沈めて慰める。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "marital_infidelity_temptation",
                "delay": 1,
                "prob": 0.8
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "背中を向けて静かに目を閉じる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "寂しさを胸にしまい、背中を向けて静かに目を閉じる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "trait.sexual_interest.current",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "marital_divorce",
                "delay": 1,
                "prob": 0.75
              }
            }
          ]
        }
      ]
    }
  ],
  "variants": [
    {
      "subTitle": "冷たい背中と渇いた下腹",
      "text": "仕事の疲れからか、隣で先に寝息を立てる夫の広い背中。触れ合いたいのに言い出せず、下着越しに擦れる秘所の熱さと疼きを持て余し、暗闇の中で天井を見つめる……。",
      "choices": [
        [
          "夫のパジャマに手を滑り込ませ、背中から抱きついて誘う",
          {
            "happiness": 4,
            "trust": 2,
            "sexualEffects": {
              "initiative": 4,
              "desire": 4
            }
          }
        ],
        [
          "音を殺してシーツの中で一人、濡れた秘所に指を沈めて慰める",
          {
            "happiness": 3,
            "stress": -1,
            "sexualEffects": {
              "desire": -2,
              "selfKnowledge": 3
            }
          }
        ],
        [
          "寂しさを胸にしまい、背中を向けて静かに目を閉じる",
          {
            "stress": 2,
            "intimacyNeed": 2
          }
        ]
      ],
      "diary": [
        "夫の肌に触れて小さく甘えると、振り返って優しく抱きしめてくれた。奥を満たされる温もりに、抱えていた不安が溶けていった。",
        "夫を起こさないよう、息を潜めて一人で下腹を弄った。ぐちゅぐちゅと鳴る水音の切なさと、奥底から突き上げる快感に、涙がシーツに零れた。",
        "求めたい気持ちを飲み込んで背を向けた。夫婦だからこそ、素直に甘えられない夜の寂しさが身に染みた。"
      ]
    },
    {
      "subTitle": "倦怠期を打ち破る大胆な試み",
      "text": "マンネリを打破すべく、普段は決して着ないような透け感のある大胆なランジェリーを新調する。寝室に入ってきた夫の息を呑む気配に、胸が早鐘を打つ……。",
      "choices": [
        [
          "恥じらいながらも素肌を見せつけ、夫をベッドへ誘い込む",
          {
            "happiness": 5,
            "trust": 3,
            "aesthetics": 3,
            "sexualEffects": {
              "desire": 6,
              "initiative": 4
            }
          }
        ],
        [
          "照れ隠しに笑い合いながら、いつもと違う濃密な情交を楽しむ",
          {
            "happiness": 5,
            "trust": 4,
            "stress": -2
          }
        ],
        [
          "いざとなると気恥ずかしくなり、上着を羽織ってごまかす",
          {
            "shyness": 4,
            "happiness": 1
          }
        ]
      ],
      "diary": [
        "透けたレース越しに露わになった胸と秘所を見つめられ、夫の目が野生の色を帯びた。乱暴に押し倒されて奥深くまで貪り尽くされ、新婚の頃以上の激しい情交に狂乱した。",
        "お互いの気恥ずかしさを笑い合いながら、久しぶりにじっくりと愛撫を交わした。夫婦の絆が再び熱を帯びた気がする。",
        "やっぱり恥ずかしくてカーディガンを羽織ってしまった。でも夫は優しく笑って頭を撫でてくれた。"
      ]
    }
  ]
});

window.defineEvent({
  "id": "marital_divorce",
  "title": "夫婦の破綻・離婚届",
  "age": [
    25,
    80
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "general",
  "presets": [
    "partnered",
    "married"
  ],
  "weight": 8,
  "is_major": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "重なり合ったすれ違いや信頼の喪失。かつて誓い合った配偶者との関係に、終止符を打つ決断を迫られる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "それぞれの道を歩む",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "離婚届に判を押し、それぞれの道を歩む。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 6
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "夫婦で徹底的に話し合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "もう一度やり直すため、夫婦で徹底的に話し合う。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "divorce",
    "mutual_talk"
  ],
  "diary": [
    "離婚届に署名と捺印をした。左手から指輪を外した瞬間、寂しさと同時に、どこか肩の荷が下りたような風が吹き抜けた。",
    "壊れかけた関係を修復するため、お互いの本音を涙ながらにぶつけ合った。ここからまた少しずつ歩み寄りたい。"
  ]
});

window.defineEvent({
  "id": "life_health_check",
  "title": "健康診断",
  "age": [
    25,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 12,
  "text": "健康診断の結果をきっかけに暮らしを見直した。",
  "choices": [
    {
      "id": "choice_0",
      "label": "生活習慣を整える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "生活習慣を整える。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 5
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
      "id": "choice_1",
      "label": "詳しく相談する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "詳しく相談する。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "life_community_help",
  "title": "近所の助け合い",
  "age": [
    25,
    90
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 10,
  "locationKind": "community",
  "text": "近所で困っている人を見かけた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "できる範囲で手伝う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "できる範囲で手伝う。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "支援先を案内する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "支援先を案内する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "life_nature_change",
  "title": "街の変化",
  "age": [
    25,
    90
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 9,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "locationKind": "community",
  "text": "長く住む街の風景が少しずつ変わっていると感じた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "地域の歴史を調べる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "地域の歴史を調べる。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "新しい場所を歩く",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "新しい場所を歩く。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "marital_infidelity_temptation",
  "title": "既婚者の背徳・不倫の誘い",
  "age": [
    26,
    72
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "general",
  "presets": [
    "married",
    "male_partner"
  ],
  "weight": 14,
  "is_major": true,
  "text": "左手の薬指に指輪をはめているにもかかわらず、家庭の外から危険で甘美な誘惑が忍び寄る。禁断の扉の前に立ち、心が激しく揺れる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "密室で身体を許して不倫関係に堕ちる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "理性の糸が切れ、密室で身体を許して不倫関係に堕ちる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
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
      "id": "choice_1",
      "label": "相手の手を強く払いのけて拒絶する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "既婚者であることを告げ、相手の手を強く払いのけて拒絶する。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 5
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
      "id": "choice_2",
      "label": "触れられた肌の熱さに息を乱して身悶える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "罪悪感に怯えながらも、触れられた肌の熱さに息を乱して身悶える。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "variants": [
    {
      "subTitle": "職場の年下男性からの熱い吐息",
      "text": "誰もいなくなった残業後のオフィス。既婚者であることを知っているはずの同僚男性から、資料室で背後から抱きすくめられる。「旦那さんより、僕の方があなたを満たせます」と首筋に唇を這わされ、下腹がきゅんと熱く濡れてしまう……。",
      "choices": [
        [
          "理性の糸が切れ、密室で身体を許して不倫関係に堕ちる",
          {
            "happiness": 4,
            "stress": 3,
            "secrecy": 8,
            "sexualEffects": {
              "desire": 8,
              "shyness": 5
            }
          }
        ],
        [
          "既婚者であることを告げ、相手の手を強く払いのけて拒絶する",
          {
            "morality": 5,
            "trust": 3,
            "independence": 3
          }
        ],
        [
          "罪悪感に怯えながらも、触れられた肌の熱さに息を乱して身悶える",
          {
            "stress": 3,
            "secrecy": 4,
            "sexualEffects": {
              "desire": 5
            }
          }
        ]
      ],
      "outcomes": [
        "infidelity",
        "boundary",
        "reflection"
      ],
      "diary": [
        "夫を裏切る罪悪感に震えながら、資料室の机に手をついて背後から貫かれた。激しい背信の快感に愛液が溢れ出し、声を押し殺しながら狂おしい絶頂に堕ちていった。",
        "「私には夫がいる」ときっぱり告げて手を振り払った。家庭を守る誇りと、一瞬揺らいでしまった自分への戒めを胸に刻んだ。",
        "その場では拒んだけれど、首筋に残る熱い吐息の感触が頭から離れなかった。平穏な日常の底に潜む淫らな衝動に戦慄した。"
      ]
    },
    {
      "subTitle": "同窓会での元恋人との再燃",
      "text": "久しぶりの同窓会で再会したかつての恋人。お互いに大人になり、酒が進むにつれて当時の生々しい肌の感触が蘇る。「少しだけ、二人で抜け出さないか」と人混みの中で手を握られ、耳元に熱い息を吹きかけられる……。",
      "choices": [
        [
          "手を握り返し、ホテル街へと二人で姿を消す",
          {
            "happiness": 4,
            "stress": 4,
            "secrecy": 8,
            "sexualEffects": {
              "desire": 7
            }
          }
        ],
        [
          "笑顔で手を解き、夫が待つ我が家へと帰宅する",
          {
            "morality": 5,
            "trust": 4,
            "stress": -2
          }
        ],
        [
          "思い出話だけにとどめ、終電で一人静かに帰る",
          {
            "selfUnderstanding": 3,
            "happiness": 2
          }
        ]
      ],
      "outcomes": [
        "infidelity",
        "boundary",
        "reflection"
      ],
      "diary": [
        "ホテルの部屋に入った瞬間、貪るように唇を奪われた。昔と変わらない激しい腰使いで奥を抉られ、人妻になった肉体を晒して何度も果てた。",
        "誘いを断り、我が家へ戻って夫の寝顔を見たとき、安堵の涙が零れた。守るべき大切な日常を裏切らなくて本当によかった。",
        "懐かしい思い出を語り合えただけで充分だった。過去は過去のまま、胸の奥にそっとしまっておこう。"
      ]
    }
  ]
});

window.defineEvent({
  "id": "life_friend_distance",
  "title": "友人との距離",
  "age": [
    28,
    78
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 10,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
    }
  },
  "text": "昔の友達と会う機会が少なくなっていた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "久しぶりに連絡する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "久しぶりに連絡する。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "今の関係を大切にする",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "今の関係を大切にする。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
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
  ]
});

window.defineEvent({
  "id": "life_grief",
  "title": "大切な存在との別れ",
  "age": [
    28,
    90
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 5,
  "text": "親しかった人や大切にしていた存在を失い、寂しさを感じた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "誰かに話を聞いてもらう",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "誰かに話を聞いてもらう。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": -3
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
      "id": "choice_1",
      "label": "思い出を静かに振り返る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "思い出を静かに振り返る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "life_caregiving",
  "title": "老いゆく家族の手と命のぬくもり",
  "age": [
    38,
    78
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 7,
  "text": "かつて大きく頼もしかった家族の、小さく皺の刻まれた手を握り締める。命を支え、介護に向き合う日々の重みの中で、自らの人生とのバランスに深く悩む。",
  "choices": [
    {
      "id": "choice_0",
      "label": "負担を分担する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "公的な支援や介護サービスを積極的に調べ、負担を分担する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 5
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
      "id": "choice_1",
      "label": "支え合いの役割を決める",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "家族で集まって本音を話し合い、支え合いの役割を決める。",
          "effects": [
            {
              "path": "skill.communication_skill",
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
    }
  ],
  "diary": [
    "一人で抱え込まず、外部の専門家に相談した。適切な支援を受けることで、穏やかな気持ちで家族の手を握り返せた。",
    "家族で涙を流しながら話し合った。弱さを認め合うことで、家族の絆がもう一度結び直された気がした。"
  ]
});

window.defineEvent({
  "id": "mature_child_leaving_nest",
  "title": "子供の独立・段ボールが片付いた後の少し広いリビング",
  "age": [
    44,
    62
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "weight": 22,
  "once": true,
  "is_major": true,
  "text": "進学や就職、あるいは結婚を機に、子供が家を出ていく日。積み込まれた引っ越し荷物、すっきりと片付いた部屋。親としての大きな務めを一段落終えた寂しさと誇り。",
  "choices": [
    {
      "id": "choice_0",
      "label": "笑顔で送り出し、空いた部屋を自分の趣味の部屋に模様替えする",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "independence": 4,
            "happiness": 4,
            "selfKnowledge": 3,
            "stress": -2
          },
          "narrative": "引っ越しトラックを見送り、少し広くなったリビングに戻る。寂しさはもちろんあるけれど、無事に育て上げた大きな安堵と達成感。空いた子供部屋に本棚や絵画を置き、これからは自分の人生の時間を満喫しようと前を向いた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "思い出のアルバムを見返しながら、子供のこれからの幸せを静かに祈る",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "morality": 3,
            "happiness": 3,
            "intimacyNeed": 2
          },
          "narrative": "小さなランドセルを背負っていた頃の写真を見つめ、あっという間だった子育ての年月を慈しんだ。いつでも帰ってこられる温かい実家であり続けようと優しく微笑んだ。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "子供が巣立っていった。寂しくないと言えば嘘になるけれど、元気に自分の道を歩み出した姿を見送れて、親として胸がいっぱい。これからは自分の人生も楽しまなきゃ。",
    "静かになった家。子育ての日々は大変だったけれど、かけがえのない宝物だった。いつでも帰っておいでね。"
  ]
});

window.defineEvent({
  "id": "loss",
  "title": "大切な人との別れ",
  "age": [
    45,
    100
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 5,
  "text": "身近な人との別れを経験し、人生について考えた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "人と気持ちを分かち合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "人と気持ちを分かち合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": -4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
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
      "id": "choice_1",
      "label": "一人で静かに過ごす",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "一人で静かに過ごす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": -5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ]
});
