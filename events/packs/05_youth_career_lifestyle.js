// ============================================================================
// Pack: 05_youth_career_lifestyle — 進学・就職・仕事キャリア・趣味・旅行・暮らし (42 events)
// ============================================================================
window.defineEvent({
  "id": "local_nature",
  "title": "身近な環境との出会い",
  "age": [
    6,
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
  "locationKind": "nature",
  "text": "身近な自然や街の環境に触れる機会があった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "外に出て過ごす",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "外に出て過ごす。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
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
      "label": "家で過ごす",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "家で過ごす。",
          "effects": [
            {
              "path": "state.stress",
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
  "id": "hobby",
  "title": "新しい趣味",
  "age": [
    10,
    90
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 9,
  "text": "気になる趣味や活動に出会った。",
  "choices": [
    {
      "id": "choice_0",
      "label": "始めてみる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "始めてみる。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 7
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "club_mate",
                "status": "acquaintance",
                "metContext": "新しい趣味を通じて出会った仲間"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "今回は見送る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "今回は見送る。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 20000
            }
          ]
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "travel_family",
  "title": "家族旅行・懐かしい団らん",
  "age": [
    12,
    80
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 16,
  "text": "日常の慌ただしさを離れ、家族揃って出かけた温泉地や観光名所。懐かしい思い出話に花を咲かせ、名物の料理を囲んで笑顔を交わす。家族の変わらぬ温もりと、流れる歳月の尊さをしみじみと噛み締めるひととき。",
  "choices": [
    {
      "id": "choice_0",
      "label": "思い出話をしながら団らんを楽しむ",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "家族の笑顔を写真に収め、思い出話をしながら団らんを楽しむ。",
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
      "label": "家族みんなに喜んでもらう",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "観光名所を精力的に案内し、家族みんなに喜んでもらう。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "家族それぞれの健康と幸せを願う",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "静かな散策路を歩き、家族それぞれの健康と幸せを願う。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.morality",
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
    }
  ],
  "outcomes": [
    "shared_activity",
    "shared_activity",
    "reflection"
  ],
  "diary": [
    "久しぶりに家族みんなでゆっくり過ごした。他愛ない冗談に笑い合い、変わらない家族の温もりに心の底から癒された。",
    "旅程を調べたり食事の手配をしたりと活躍した。喜んでくれる家族の顔を見て、大人になった自分の成長を実感できた。",
    "日常では照れくさくて言えない感謝の気持ちを、旅の空気の中で素直に伝えることができた温かな一日だった。"
  ]
});

window.defineEvent({
  "id": "aesthetic_choice",
  "title": "美しさへのこだわり",
  "age": [
    12,
    95
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 12,
  "text": "身だしなみや部屋の雰囲気について、自分らしい美しさを考えた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自分の感性を磨く",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "自分の感性を磨く。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 5
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
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
      "label": "実用性を優先する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "実用性を優先する。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": -1
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": 20000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "人と違う感性を楽しむ",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "人と違う感性を楽しむ。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
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
  "id": "local_community",
  "title": "地域のつながり",
  "age": [
    12,
    95
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 10,
  "locationKind": "community",
  "text": "住んでいる地域の人たちとの交流の機会があった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "地域の活動に参加する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "地域の活動に参加する。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "neighbor",
                "status": "acquaintance",
                "metContext": "地域活動で知り合ったご近所さん"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "自分の時間を優先する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "自分の時間を優先する。",
          "effects": [
            {
              "path": "state.self_efficacy",
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
  "id": "moral_dilemma",
  "title": "正しさと人間関係",
  "age": [
    14,
    95
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 10,
  "text": "身近な人の行動について、自分の信念と相手への思いやりの間で迷った。",
  "choices": [
    {
      "id": "choice_0",
      "label": "信念を言葉にする",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "信念を言葉にする。",
          "effects": [
            {
              "path": "skill.morality",
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
      "label": "事情を聞いて考え直す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "事情を聞いて考え直す。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "関わらずに距離を取る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "関わらずに距離を取る。",
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
  "id": "outing_shopping",
  "title": "休日のショッピング・試着室の鏡",
  "age": [
    15,
    80
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 17,
  "text": "休日の賑わうファッションビル。華やかなショップのラックから気になる洋服を選び、試着室へ。カーテンを閉めた狭い空間、全身鏡の前で服を脱ぎ去り、下着姿の自分の肉体と向き合う。新しい装いに胸を高鳴らせる一方、無防備な素肌を薄布一枚で隔てられた空間に晒す微かな背徳感が胸をかすめる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "新しい自分に似合うスタイルを見つける",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "お気に入りの洋服を試着し、新しい自分に似合うスタイルを見つける。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -30000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "下腹に甘い疼きを覚えカーテンの隙間を意識する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "下着姿で試着室の鏡を見つめるうち、下腹に甘い疼きを覚えカーテンの隙間を意識する。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "rare_outing_secret_quickie",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "トレンドのコスメや小物をチェックする",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "ウィンドーショッピングを楽しみ、トレンドのコスメや小物をチェックする。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
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
  "outcomes": [
    "shared_activity",
    "reflection",
    "shared_activity"
  ],
  "diary": [
    "試着した服がぴったり似合って、思わず笑顔がこぼれた。新しい服を着て出かける未来を思い浮かべ、気分が弾んだ。",
    "試着室の密室で服を脱いだ瞬間、カーテン一枚の向こうに他人がいるスリルに息を呑んだ。鏡に映る無防備な自分の素肌に、下腹がきゅうと熱くなった。",
    "街を歩きながら可愛い雑貨やコスメを見て回った。日常のささやかな買い物が、良い気分転換になった。"
  ]
});

window.defineEvent({
  "id": "outing_art_museum",
  "title": "美術館の静けさ・美の迷宮",
  "age": [
    15,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 16,
  "text": "外の喧騒が嘘のように遮断された、静寂に包まれる美術館の館内。薄暗い照明の下、壁に掲げられた名画や彫刻の前に佇む。日常の雑音から解き放たれ、研ぎ澄まされた美の気配に五感が敏感になり、自らの内面と深く向き合う時間が流れる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "色彩と造形の奥深さに耽溺する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "一枚の絵画の前にじっくりと立ち止まり、色彩と造形の奥深さに耽溺する。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "人の少ない奥の展示室へ足を進める",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "静けさと薄暗がりが感覚を鋭く研ぎ澄まし、人の少ない奥の展示室へ足を進める。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "rare_outing_secret_quickie",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "鑑賞の余韻に浸りながらお茶を飲む",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "ミュージアムカフェで図録をめくり、鑑賞の余韻に浸りながらお茶を飲む。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
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
    }
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "diary": [
    "静かな展示室で名画と対峙した。画家の情熱と美しさに圧倒され、自分自身の美意識が深く刺激されるのを感じた。",
    "人影のまばらな薄暗い展示室の奥へ進んだ。足音すら響く静けさの中、張り詰めた空気に肌が粟立ち、不思議な背徳のざわめきを覚えた。",
    "カフェの窓から庭園を眺めながら、心穏やかな時間を過ごした。美しいものに触れて心が洗われたような一日だった。"
  ]
});

window.defineEvent({
  "id": "outing_cinema",
  "title": "映画館の暗がり・スクリーンの光",
  "age": [
    15,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 17,
  "text": "照明が落とされ、巨大なスクリーンに光が走る映画館。身体を包み込む音響と迫力ある映像に意識が吸い込まれる。暗闇のシートの中、隣に座る人の微かな息遣いや衣擦れの音が耳元を掠め、密室の中で見知らぬ他者と暗闇を共有する特有の緊張感が下腹をくすぐる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "涙と感動の時間を過ごす",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "映画の壮大なストーリーに引き込まれ、涙と感動の時間を過ごす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
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
      "label": "隣の気配と身体の奥の疼きに息を潜める",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "暗闇と大爆音のシートで、隣の気配と身体の奥の疼きに息を潜める。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "rare_outing_secret_quickie",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "映画の演出や俳優の演技に感銘を受ける",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "ポップコーンをつまみながら、映画の演出や俳優の演技に感銘を受ける。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "shared_activity"
  ],
  "diary": [
    "映画のクライマックスで涙が溢れた。暗闇の中で感情を解放し、物語の世界にどっぷり浸ることができた。",
    "シアターの暗がりの中、映画の爆音に紛れて自分の荒い息を殺した。隣の見知らぬ人の体温を意識するたび、太ももの内側が甘く熱を帯びた。",
    "劇場の大きなスクリーンで観る映画は格別だった。見終えた後の心地よい興奮を胸に抱いて映画館を後にした。"
  ]
});

window.defineEvent({
  "id": "youth_first_apartment_hunt",
  "title": "初めての一人暮らし・不動産屋と日当たりの良い部屋",
  "age": [
    18,
    24
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "not_living_alone",
    "unmarried"
  ],
  "weight": 25,
  "once": true,
  "text": "進学や就職を機に決意した初めての一人暮らし。実家を離れ、自分の生活をすべて自分の手で管理する生活への憧れと不安。並べられた間取り図を見つめながら、新しい生活の扉を開く。",
  "choices": [
    {
      "id": "choice_0",
      "label": "予算と駅からの距離を綿密に吟味し、日当たりの良いワンルームを契約する",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "independence": 4,
            "money": -5,
            "happiness": 3,
            "knowledge": 2
          },
          "narrative": "不動産屋の担当者と何軒も内見を回り、南向きの窓から光が差し込む6畳の部屋に決めた。敷金礼金の計算をし、自分の名義で契約書に捺印した時の身の引き締まる緊張感。自由と自立の第一歩を踏み出した。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "インテリアショップを巡り、お気に入りのカーテンと照明を揃える",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "happiness": 4,
            "money": -3
          },
          "narrative": "何もない部屋に運び込まれた段ボール。お気に入りのリネンカーテンを掛け、柔らかな光の間接照明を灯した。自分だけの城が完成した瞬間の誇らしさは何物にも代えがたかった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "一人暮らしスタート！ 鍵を受け取って何もない部屋に入った時、ここが私の新しい拠点なんだって胸が震えた。自炊も掃除も頑張ろう。",
    "実家を出て初めての夜。静かすぎて少し寂しかったけれど、自分の好きなように過ごせる自由を噛み締めた。"
  ]
});

window.defineEvent({
  "id": "youth_driver_license_pass",
  "title": "教習所のクランク講習と手に入れた運転免許",
  "age": [
    18,
    25
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "once": true,
  "text": "大学生や社会人になり、時間をやりくりして通った自動車教習所。標識の暗記、学科教習、ドキドキの実技講習。自らの運転で車輪を動かす大人のライセンスを手にする。",
  "choices": [
    {
      "id": "choice_0",
      "label": "仮免試験や路上教習を真剣にこなし、ゴールド免許を目指す",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 3,
            "independence": 4,
            "money": -4,
            "happiness": 3
          },
          "narrative": "脱輪に怯えたS字クランク、緊張でハンドルを握る手が汗ばんだ路上教習。指導員の厳しいアドバイスをノートに書き留め、学科試験も一発合格。交付されたプラスチックの免許証を手にした瞬間、どこへでも行ける自由を手に入れた高揚感に包まれた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "免許取得後すぐにレンタカーを借り、友達と郊外へドライブに出かける",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "communication": 3,
            "independence": 2,
            "money": -2
          },
          "narrative": "初心者マークを前後に貼り、友達を乗せて海沿いの国道へ。音楽をかけながら海風を感じて走るドライブの楽しさに、世界が一段と広がった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "運転免許証を取得！ 写真写りはちょっと微妙だったけれど、立派な身分証にもなるし、これで一人で車に乗れると思うとすごく誇らしい。",
    "教習所を無事に卒業！ 路上に出るのが最初は怖かったけれど、自分で車を運転できる自由を手に入れてワクワクしている。"
  ]
});

window.defineEvent({
  "id": "young_living_alone",
  "title": "初めての一人暮らし",
  "age": [
    18,
    30
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "not_living_alone",
    "unmarried"
  ],
  "weight": 10,
  "text": "家族と離れて暮らすことを考える機会があった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "一人暮らしを始める",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "一人暮らしを始める。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 7
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -70000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            },
            {
              "path": "history.flags.living_alone",
              "op": "record_flag",
              "value": true
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "今の住まいを続ける",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "今の住まいを続ける。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 30000
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "鍵を開けて入った自分だけの部屋。静けさの中に、自由と責任の重みが満ちていた。",
    "家族と暮らす安心感を選んだ。慣れ親しんだ食卓の温もりがありがたかった。"
  ]
});

window.defineEvent({
  "id": "youth_live_concert_fever",
  "title": "大好きなアーティストのライブ・銀テープと熱狂",
  "age": [
    18,
    30
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "once": true,
  "text": "何ヶ月も前から当選を祈っていた大好きなアーティストのドームツアー。会場を埋め尽くす同じ熱量を持った観客たち。照明と大音響が織りなす非日常の熱狂の渦へと飛び込む。",
  "choices": [
    {
      "id": "choice_0",
      "label": "ペンライトを激しく振り、アリーナ全体と一体になってコールを送る",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 5,
            "stress": -5,
            "passion": 3,
            "bond": {
              "role": "club_mate",
              "status": "acquaintance",
              "metContext": "ライブ会場で意気投合したファン仲間"
            }
          },
          "narrative": "暗転したアリーナに響く重低音、一斉に灯る数万の光の海。大好きな曲のイントロが流れた瞬間に鳥肌が立ち、全力で腕を突き上げた。天井から舞い散るキラキラ光る銀テープを掴み取り、生きている歓喜に満たされた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "グッズのタオルを首に巻き、音の波に身を委ねて感動の涙を流す",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "aesthetics": 3,
            "stress": -4
          },
          "narrative": "心に寄り添ってくれたバラード曲の生演奏。胸に直接響いてくる歌声に涙が止まらなくなった。明日からまた現実を前を向いて生きていく勇気をもらった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "ライブ最高だった！ 生の歌声の迫力がすごくて、何回も鳥肌が立った。銀テープもしっかりキャッチできて、明日からの生きるエネルギーをもらった！",
    "大好きな曲を生で聴けて涙が止まらなかった。音楽の力って本当にすごい。また絶対来よう。"
  ]
});

window.defineEvent({
  "id": "young_money",
  "title": "初めての大きな買い物",
  "age": [
    18,
    34
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 12,
  "text": "自分で稼いだお金の使い方を考えた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "将来に備えて貯める",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "将来に備えて貯める。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 50000
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
      "id": "choice_1",
      "label": "今の経験に使う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "今の経験に使う。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": -50000
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "history.flags.first_big_purchase",
              "op": "record_flag",
              "value": true
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "通帳の残高が増えていく安心感。自分の力で将来を守る基盤ができた。",
    "思い切って手に入れた経験が、私の世界を大きく広げてくれた。後悔のない選択だった。"
  ]
});

window.defineEvent({
  "id": "young_failure",
  "title": "思いどおりにいかない日",
  "age": [
    18,
    35
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 9,
  "once": true,
  "text": "努力してきたことが期待した結果につながらなかった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "原因を振り返る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "原因を振り返る。",
          "effects": [
            {
              "path": "skill.knowledge",
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
      "label": "少し休む",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "少し休む。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "悔しさに唇を噛みしめながら、敗因をノートに書き留めた。この挫折が私を強くしてくれるはずだ。",
    "温かいお風呂に入って泥のように眠った。休むことも人生の大事な知恵だと知った。"
  ]
});

window.defineEvent({
  "id": "local_work",
  "title": "地域の仕事事情",
  "age": [
    18,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 9,
  "locationKind": "work",
  "text": "住んでいる地域の雇用環境について考える機会があった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "地元で仕事を探す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "地元で仕事を探す。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 40000
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
      "label": "他の地域の求人も探す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "他の地域の求人も探す。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
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
  ]
});

window.defineEvent({
  "id": "travel_partner",
  "title": "{partner}と巡る温泉宿・二人きりの隠れ家",
  "age": [
    18,
    80
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "rel_stage_kissed"
  ],
  "weight": 18,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "{partner}と二人きりで訪れた山あいの隠れ家旅館。客室の専用露天風呂に浸かり、湯煙の中で素肌を密着させる。湯上がりの火照った身体に浴衣を羽織り、帯を解き合うと、温泉の熱気と愛欲が混ざり合い、濃密で甘美な夜が幕を開ける……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "シーツの上で貪り合うように愛し合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "湯上がりの火照った素肌を晒し、シーツの上で貪り合うように愛し合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "partner_passion_lifestyle",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "二人だけの静かな夜を語り合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "露天風呂でお酒を酌み交わし、二人だけの静かな夜を語り合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "寄り添って歩く",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "浴衣のまま夜の庭園を手を繋いで散歩し、寄り添って歩く。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "mutual_talk",
    "shared_activity"
  ],
  "diary": [
    "客室露天風呂から上がった後、浴衣を引き剥がされてベッドに押し倒された。温泉で潤った秘所を奥深くまで貫かれ、シーツを愛液で濡らしながら果てた。",
    "湯船に浸かりながら、これまでの二人の歩みと未来について静かに語り合った。素肌の温もりを通じて、互いの心がぴったり重なるのを感じた。",
    "湯上がりの夜風に吹かれながら手をつないで歩いた。浴衣越しに伝わる相手の体温に、言葉にできない幸福感が込み上げた。"
  ]
});

window.defineEvent({
  "id": "young_mentor",
  "title": "頼れる先輩",
  "age": [
    19,
    35
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "employed"
  ],
  "weight": 9,
  "once": true,
  "text": "仕事や学びの場で、助言をくれる人に出会った。",
  "choices": [
    {
      "id": "choice_0",
      "label": "積極的に学ぶ",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "積極的に学ぶ。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 6
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "mentor",
                "status": "close",
                "trust": 60,
                "metContext": "親身に導いてくれた職場の先輩"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "自分で試行錯誤する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "自分で試行錯誤する。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
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
  ],
  "diary": [
    "先輩の背中を見つめながら多くのことを吸収した。プロフェッショナルとしての誇りを学んだ。",
    "助言を受け止めつつも、自分の足で道を探した。試行錯誤の苦労が確かな自信になった。"
  ]
});

window.defineEvent({
  "id": "travel_solitary",
  "title": "気ままな一人旅・知らない街のホテル",
  "age": [
    19,
    75
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 16,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "text": "誰の気兼ねもなく、思いつきで切符を取った一人旅。見知らぬ街の路地や海辺を散策し、ご当地の美味しい料理とお酒を堪能する。ビジネスホテルの静かな部屋に戻り、一人きりのベッドに身を投げ出すと、旅先特有の孤独と甘美な解放感が素肌を撫でる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "読書や気ままな夜を満喫する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "ホテルでゆっくり手足を伸ばし、読書や気ままな夜を満喫する。",
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
      "label": "駅前の薄暗い居酒屋やバーへ繰り出す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "夜風と酒の酔いに誘われ、駅前の薄暗い居酒屋やバーへ繰り出す。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "rare_travel_stranger_or_gang",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "知らない街の夜景を窓から眺める",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "翌朝の計画を立てながら、知らない街の夜景を窓から眺める。",
          "effects": [
            {
              "path": "skill.knowledge",
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
    }
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "diary": [
    "誰にも邪魔されないホテルの一夜。広いベッドでシーツの感触を素肌に味わいながら、自由であることの贅沢を噛み締めた。",
    "ほろ酔い加減で夜のネオン街を歩いた。見知らぬ土地の空気と、通りすがる男性たちの視線に、下腹が甘く疼くような背徳の高揚感を覚えた。",
    "窓の外に広がる見知らぬ街の灯りを見つめた。日常から遠く離れた場所で、これまでの自分とこれからの人生に静かに想いを馳せた。"
  ]
});

window.defineEvent({
  "id": "youth_job_hunting_suit",
  "title": "就職活動の黒髪スーツ・合同説明会と緊張の面接",
  "age": [
    20,
    22
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "university_student"
  ],
  "weight": 26,
  "once": true,
  "text": "大学生の春から始まる就職活動。同じような黒髪とスーツに身を包んだ学生たちが街を行き交う。将来どんな社会人になりたいのか、自問自答を繰り返しながら内定を目指して奔走する日々。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自己分析と企業研究を徹底し、想いを込めて役員面接に挑む",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 4,
            "independence": 3,
            "communication": 3,
            "stress": 3,
            "bond": {
              "role": "colleague",
              "status": "acquaintance",
              "metContext": "就活の選考で出会った同期"
            }
          },
          "narrative": "黒のリクルートスーツに身を包み、パンプスで何社ものオフィスビルへ足を運んだ。エントリーシートの推敲を重ね、緊張で喉がカラカラになりながらも、面接官の目を見て自分の言葉で堂々とビジョンを語った。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "就活仲間と情報交換し、励まし合いながら壁を乗り越える",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 4,
            "happiness": 2,
            "morality": 1,
            "stress": -1,
            "bond": {
              "role": "colleague",
              "status": "close",
              "metContext": "就活を共に励まし合った仲間"
            }
          },
          "narrative": "お祈りメールに落ち込む日もあったけれど、カフェで就活仲間と模擬面接を重ね、愚痴を言い合って励まし合った。一人じゃないと思えたからこそ、前を向き続けることができた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "内定の電話をもらった瞬間、駅のホームで涙がこぼれそうになった。たくさんの不採用通知に心が折れそうだったけれど、諦めずにやり抜いて本当によかった。",
    "就活を通して、自分が何を大切に生きていきたいのかを深く見つめ直すことができた。社会に出る覚悟が決まった。"
  ]
});

window.defineEvent({
  "id": "youth_travel_solitary_station",
  "title": "気ままな一人旅・ローカル線の車窓と駅前喫茶",
  "age": [
    20,
    30
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "once": true,
  "text": "週末、ふと思い立ってリュック一つで出かけた初めての一人旅。誰とも予定を合わせず、気の向くままに知らない駅で降りる自由。見知らぬ街の空気と風景が、日々の忙しさを忘れさせてくれる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "あえて計画を立てず、ふらりと降りた無人駅の海を眺める",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "selfKnowledge": 4,
            "stress": -5,
            "happiness": 3
          },
          "narrative": "切符を握りしめ、ガタゴトと揺れるローカル列車に揺られる。海の見える静かな無人駅で途中下車し、潮風を吸い込みながら波の音に耳を傾けた。誰の顔色もうかがわず、自分だけのペースで流れる時間に心が深く洗われた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "レトロな駅前喫茶店に入り、名物のクリームソーダと読書を楽しむ",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "curiosity": 3,
            "happiness": 4,
            "stress": -4
          },
          "narrative": "ベルが鳴る昔ながらの純喫茶。マスターが淹れてくれたネルドリップ珈琲と厚切りトースト。旅先で読む文庫本の一行一行が心に染み渡り、贅沢な孤独の心地よさを知った。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "初めてのひとり旅。誰も知り合いのいない静かな街を歩いて、自分の好きなことだけに時間を使う贅沢を知った。心がすっきり軽くなった。",
    "旅先の古い喫茶店で過ごした静かな午後。一人で旅をすることの気楽さと深さにハマってしまいそう。"
  ]
});

window.defineEvent({
  "id": "career_training",
  "title": "学び直し",
  "age": [
    20,
    58
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 11,
  "text": "仕事に役立つ新しい知識を身につける機会があった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "講座に通う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "講座に通う。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 8
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -40000
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
      "label": "独学で取り組む",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "独学で取り組む。",
          "effects": [
            {
              "path": "skill.knowledge",
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
    }
  ],
  "diary": [
    "新しい知識を学ぶ高揚感。世界が広がっていくのを感じた。",
    "自分の力で理解を深めていった。地道な積み重ねが誇らしかった。"
  ]
});

window.defineEvent({
  "id": "travel_company",
  "title": "社員旅行・温泉ホテルでの大宴会",
  "age": [
    20,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "adult_drinking",
    "employed"
  ],
  "weight": 14,
  "alcohol": true,
  "actors": {
    "coworker": {
      "source": "coworker",
      "required": false
    }
  },
  "text": "職場の慰安を兼ねた一泊二日の社員旅行。温泉ホテルの大広間で開かれた大宴会では、瓶ビールが飛び交い、上司や同僚たちが浴衣姿で無礼講の酒を酌み交わす。普段のオフィスとは違う開放的な空気の中、お酒の勢いも手伝って意外な一面が見え隠れする……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "社内の親睦を深める",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "上司や同僚に愛想よくお酌をして回り、社内の親睦を深める。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "colleague",
                "status": "close",
                "metContext": "社員旅行で親睦を深めた同僚"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "宴席を抜け出して暗い非常階段へ向かう",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "お酒の熱気に息苦しさを感じ、宴席を抜け出して暗い非常階段へ向かう。",
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
                "eventId": "rare_outing_secret_quickie",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "職場の上手な愚痴を言い合って笑う",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "気の合う同僚たちと端の席で固まり、職場の上手な愚痴を言い合って笑う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "colleague",
                "status": "close",
                "metContext": "社員旅行で本音を語り合った同僚"
              }
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "shared_activity",
    "reflection",
    "shared_activity"
  ],
  "diary": [
    "職場の宴会で笑顔を振りまいて立ち回った。普段見られない上司の砕けた姿を見て、仕事上の付き合いが少し滑らかになった気がする。",
    "騒がしい宴会場をこっそり抜け出し、薄暗い廊下で夜風を浴びた。浴衣の胸元から立ち上る酒の匂いと、誰かに見つかりそうなスリルに胸がざわついた。",
    "同期や親しい同僚と浴衣姿で愚痴を言い合い、大笑いした。気兼ねない仲間と過ごす夜は、日頃のストレスを綺麗に吹き飛ばしてくれた。"
  ]
});

window.defineEvent({
  "id": "outing_sports_event",
  "title": "スタジアムでのスポーツ観戦・歓声の渦",
  "age": [
    20,
    75
  ],
  "trigger": "normal",
  "classification": "random",
  "content_rating": "general",
  "presets": [
    "adult_drinking"
  ],
  "weight": 16,
  "actors": {
    "stranger": {
      "source": "random_adult",
      "required": false
    }
  },
  "text": "満員のスタジアムを揺るがす地鳴りのような歓声とメガホンの音。グラウンドの白熱したプレーに観客席全体が一喜一憂し、隣り合う見知らぬ人とも肩をぶつけ合って興奮を分かち合う。冷たいビールを喉に流し込むたび、身体中の血が熱く沸き立つ……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "メガホンを打ち鳴らしてスタジアムの一体感に酔いしれる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "応援歌を熱唱し、メガホンを打ち鳴らしてスタジアムの一体感に酔いしれる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "混み合うコンコースのトイレへ席を立つ",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "興奮とアルコールで身体が火照り、混み合うコンコースのトイレへ席を立つ。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "rare_outing_secret_quickie",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "じっくりと試合展開を観戦する",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "冷たいビールとスタジアムグルメを堪能しながら、じっくりと試合展開を観戦する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
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
  "outcomes": [
    "shared_activity",
    "reflection",
    "shared_activity"
  ],
  "diary": [
    "何万人もの大歓声に包まれ、声を枯らして応援した。見知らぬファンともハイタッチを交わし、全身が心地よい高揚感で満たされた。",
    "コンコースの人混みの中を歩きながら、熱狂の熱気に煽られて下腹の奥がじくじくと疼いた。歓声の裏に潜むスリルに胸が高鳴った。",
    "スタジアムの風を感じながら、ビールを片手に熱戦を見届けた。日常を忘れられる迫力満点の一日だった。"
  ]
});

window.defineEvent({
  "id": "travel_friends",
  "title": "女友達との温泉旅行・湯煙と浴衣",
  "age": [
    20,
    75
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "adult_drinking"
  ],
  "weight": 16,
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
    }
  },
  "text": "気の置けない女友達と連れ立って訪れた老舗の温泉旅館。湯煙が立ち込める露天風呂で素肌を晒し合い、手足を伸ばして日頃の疲れを洗い流す。夕食後は色浴衣に着替え、地酒のグラスを傾けながら、仕事や恋愛、誰にも言えない秘密の悩みを語り合う。",
  "choices": [
    {
      "id": "choice_0",
      "label": "夜更けまで本音を語り明かす",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "温泉で温まった素肌を寄せ合い、夜更けまで本音を語り明かす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "friend",
                "status": "close",
                "gender": "female",
                "metContext": "温泉旅行で本音を語り明かした女友達"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "夜の散策を楽しむ",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "浴衣姿で温泉街の射的や土産物屋を冷やかし、夜の散策を楽しむ。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "friend",
                "status": "close",
                "gender": "female",
                "metContext": "温泉街を一緒に散策した女友達"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "露天風呂の冷たい夜風で冷ます",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "地酒と温泉の熱で火照った身体を、露天風呂の冷たい夜風で冷ます。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "shared_activity",
    "shared_activity",
    "reflection"
  ],
  "diary": [
    "湯上がりの浴衣姿で畳の上に車座になり、友達と深夜まで語り合った。素肌を晒し合って打ち明けた本音が、二人の絆を一段と深いものにしてくれた。",
    "下駄の音をカランコロンと鳴らしながら夜の温泉街を散策した。浴衣の胸元を夜風に撫でられながら、笑い転げた時間が心地よかった。",
    "深夜の露天風呂に一人浸かり、湯煙の向こうの月を見上げた。温まった身体の芯から力が抜け、深い安らぎに満たされた。"
  ]
});

window.defineEvent({
  "id": "health_warning_precursor",
  "title": "身体からの微かなシグナル",
  "age": [
    20,
    80
  ],
  "trigger": "precursor",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 0,
  "once": true,
  "precursor_for": [
    "career_burnout"
  ],
  "is_narrative": true,
  "narrative_type": "precursor",
  "text": "朝起きたときに微かなだるさが残り、鏡に映る自分の顔色もどこか冴えない。日々の忙しさに追われる中で、身体が小さな注意信号を発しているような気がした。",
  "effects": [
    {
      "path": "state.fatigue",
      "op": "add",
      "value": 5
    },
    {
      "path": "state.stress",
      "op": "add",
      "value": 2
    }
  ],
  "diary": "少し無理が重なっていたのかもしれない。身体の声を無視せず、労わってあげなくては。"
});

window.defineEvent({
  "id": "move",
  "title": "住む場所を考える",
  "age": [
    20,
    80
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 6,
  "text": "今とは違う場所で暮らす選択肢が浮かんだ。",
  "choices": [
    {
      "id": "choice_0",
      "label": "引っ越しを検討する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "引っ越しを検討する。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": -50000
            },
            {
              "path": "state.self_efficacy",
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
      "id": "choice_1",
      "label": "今の場所で暮らす",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "今の場所で暮らす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
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
  ]
});

window.defineEvent({
  "id": "youth_first_paycheck_parents",
  "title": "初任給の恩返し・両親に贈った手紙とディナー",
  "age": [
    21,
    25
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "employed"
  ],
  "weight": 24,
  "once": true,
  "text": "社会人になって初めて迎えた給料日。口座に振り込まれた給与を手に、これまで自分を育て、支えてくれた両親への感謝を形にして伝えたいという温かい思いが湧き上がる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "少し奮発したレストランを予約し、両親に食事をご馳走する",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 5,
            "morality": 3,
            "money": -3,
            "communication": 2
          },
          "narrative": "社会人として初めて受け取った初任給。普段は行かない少し高級な和食店を予約し、両親を招待した。「こんな贅沢しなくていいのに」と照れくさそうに笑いながら、嬉しそうに箸を進める二人の姿を見て、胸がいっぱいになった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "感謝の手紙を添えて、長く使える上質な日用品をプレゼントする",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "morality": 4,
            "money": -2,
            "selfKnowledge": 2
          },
          "narrative": "お母さんには上質なお財布、お父さんにはネクタイを選び、手紙を添えて手渡した。手紙を読んだ母の目に涙が浮かび、「立派になったね」と頭を撫でられた温もりを噛み締めた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "初任給で両親にご飯をご馳走した。照れくさかったけれど、『ご馳走様、美味しかったよ』って言われた時、親孝行ができて本当に嬉しかった。",
    "自分で働いたお金で両親にプレゼントを贈った。ここまで無事に育ててくれた感謝を改めて伝えることができて、社会人としての自覚が芽生えた。"
  ]
});

window.defineEvent({
  "id": "youth_overtime_convenience_bento",
  "title": "残業帰りの夜風・オフィス街とコンビニの湯気",
  "age": [
    21,
    28
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "employed"
  ],
  "weight": 22,
  "once": true,
  "text": "締め切り前の慌ただしい時期。時計の針が午後9時を回り、誰もいなくなったオフィスを最後に出る。冷たい夜風が火照った頬を撫で、街灯が照らす帰り道を歩く。",
  "choices": [
    {
      "id": "choice_0",
      "label": "コンビニで好きなデザートとお弁当を買い、温かいお風呂で自分を労う",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "money": 2,
            "happiness": 2,
            "health": 1,
            "stress": -2
          },
          "narrative": "深夜の静まり返ったオフィス街を抜け、駅前のコンビニへ。温めてもらったお弁当と、少し高級なシュークリームを自分へのご褒美に買った。湯船に浸かりながら甘いものを味わい、明日も頑張ろうと静かに息を吐いた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "夜風に吹かれながら歩き、仕事で得た手応えと成長を噛み締める",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 2,
            "independence": 3,
            "stress": 1
          },
          "narrative": "夜空にそびえ立つ高層ビルの窓明かりを見上げながら歩く。大変なプロジェクトだったけれど、確実に仕事のスキルが身についている実感があり、働く社会人としての誇らしさが胸を満たした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "今日は遅くまで残業。疲れたけれど、コンビニの肉まんと温かいスープが身体に染み渡った。一人前の社会人として戦っている実感がある。",
    "夜遅くの帰り道。静かな夜風が気持ちよかった。大変な毎日だけど、自分の足でしっかり立って生きている気がする。"
  ]
});

window.defineEvent({
  "id": "career_downsizing_rumor",
  "title": "人員整理のうわさ",
  "age": [
    22,
    62
  ],
  "trigger": "precursor",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "employed"
  ],
  "weight": 0,
  "once": true,
  "precursor_for": [
    "career_unemployment"
  ],
  "is_narrative": true,
  "narrative_type": "precursor",
  "text": "給湯室や休憩スペースで、同僚たちが声を潜めて深刻そうに話し込んでいる。『事業部の一部が統合されるらしい』『希望退職の募集があるかもしれない』。社内に不穏な噂が漂い、これからの働き方に胸騒ぎを覚えた。",
  "effects": [
    {
      "path": "state.stress",
      "op": "add",
      "value": 3
    },
    {
      "path": "state.mood",
      "op": "add",
      "value": -2
    }
  ],
  "diary": "社内に不穏な噂が広がり、同僚たちの表情もどこか硬い。何があっても対応できるように、自分の足元を見つめ直さなくては。"
});

window.defineEvent({
  "id": "career_unemployment",
  "title": "仕事を失う不安",
  "age": [
    22,
    62
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "general",
  "presets": [
    "employed"
  ],
  "weight": 5,
  "is_major": true,
  "text": "職場の事情で働き方を見直す必要が生じた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "突然のことに呆然とし、しばらく部屋で現実逃避する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "突然のことに呆然とし、しばらく部屋で現実逃避する。",
          "effects": [
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
      "label": "公的な支援制度や失業手当の手続きを冷静に調べる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "公的な支援制度や失業手当の手続きを冷静に調べる。",
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
                "eventId": "career_unemployment_followup",
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
      "label": "転職サイトや求人票をチェックし、次の仕事を探し始める",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "転職サイトや求人票をチェックし、次の仕事を探し始める。",
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
                "eventId": "career_unemployment_followup",
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
      "label": "信頼できる同僚や先輩に連絡を取り、人脈を頼って情報を集める",
      "outcomes": [
        {
          "id": "outcome_3",
          "weight": 1,
          "description": "信頼できる同僚や先輩に連絡を取り、人脈を頼って情報を集める。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "career_unemployment_followup",
                "delay": 1,
                "prob": 1
              }
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "colleague",
                "status": "close",
                "trust": 58,
                "metContext": "退職時に相談に乗ってくれた先輩・同僚"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_4",
      "label": "これを好機と捉え、大学での学び直しや独立起業の準備を始める",
      "outcomes": [
        {
          "id": "outcome_4",
          "weight": 1,
          "description": "これを好機と捉え、大学での学び直しや独立起業の準備を始める。",
          "effects": [
            {
              "path": "history.flags.aspires_higher_education",
              "op": "set",
              "value": true
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 5
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "career_unemployment_followup",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "不安で押しつぶされそうになりながらも、履歴書を書いた。私の道は一つだけではないはずだ。",
    "公的な制度を調べて相談窓口へ向かった。社会のセーフティネットに心強さを覚えた。"
  ]
});

window.defineEvent({
  "id": "career_unemployment_followup",
  "title": "見直した働き方のその後",
  "age": [
    22,
    65
  ],
  "trigger": "chain_only",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 0,
  "once": true,
  "is_narrative": true,
  "narrative_type": "followup",
  "text": "働き方を見直す決断をしてから数か月。新しい環境や生活のリズムにも少しずつ慣れ、前を向いて歩き始めている自分に気づいた。",
  "effects": [
    {
      "path": "state.self_efficacy",
      "op": "add",
      "value": 3
    },
    {
      "path": "state.stress",
      "op": "add",
      "value": -2
    },
    {
      "path": "state.mood",
      "op": "add",
      "value": 2
    }
  ],
  "diary": "あのときは不安で押しつぶされそうだったけれど、自分で選んだ道。少しずつ手応えを感じられるようになってきた。"
});

window.defineEvent({
  "id": "career_workplace_friend",
  "title": "職場の仲間",
  "age": [
    22,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "employed"
  ],
  "weight": {
    "base": 12,
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
  "text": "仕事を通じて信頼できる仲間ができた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "仕事以外でも交流する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "仕事以外でも交流する。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "colleague",
                "status": "close",
                "metContext": "仕事以外でも親しくなった職場の同僚"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "職場での関係を大切にする",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "職場での関係を大切にする。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "colleague",
                "status": "acquaintance",
                "metContext": "職場の信頼できる同僚"
              }
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "仕事帰りに飲みに行って笑い合った。苦楽を共にする仲間の存在が心強かった。",
    "適度な距離感を保ちながら、互いにプロとして尊重し合える関係を築いた。"
  ]
});

window.defineEvent({
  "id": "career_recognition",
  "title": "仕事を認められた",
  "age": [
    23,
    63
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "employed"
  ],
  "weight": 10,
  "text": "続けてきた仕事が周囲から評価された。",
  "choices": [
    {
      "id": "choice_0",
      "label": "次の役割に挑戦する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "次の役割に挑戦する。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 50000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "今の役割を深める",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "今の役割を深める。",
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
    "周囲からの賞賛の言葉に胸が熱くなった。積み重ねてきた努力は間違っていなかった。",
    "足元を固め、誠実に今の仕事を全うする決意を新たにした。静かな充実感に満たされた。"
  ]
});

window.defineEvent({
  "id": "adult_cooking_class_challenge",
  "title": "週末の料理教室・スパイスから作る手作りカレー",
  "age": [
    24,
    45
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "once": true,
  "text": "日々の食生活をもっと充実させたいと通い始めた週末のクッキングスクール。清潔なキッチンスタジオに広がる香辛料や焼き立てパンの芳醇な香り。新しいレシピを学ぶ楽しさに心が弾む。",
  "choices": [
    {
      "id": "choice_0",
      "label": "ホールスパイスの香りを引き出し、本格的なチキンカレーをマスターする",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 3,
            "happiness": 4,
            "aesthetics": 2,
            "bond": {
              "role": "club_mate",
              "status": "acquaintance",
              "metContext": "週末の料理教室の仲間"
            }
          },
          "narrative": "油でクミンやカルダモンをじっくり炒め、香りを立たせる手際を教わる。玉ねぎが飴色になるまで根気よく炒め、出来上がった奥深い味わいのカレー。自宅でも再現して友人を招いて振る舞い、「お店の味みたい！」と大絶賛された。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "基本の出汁の取り方と和食の煮物を丁寧に学び直す",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 3,
            "knowledge": 3,
            "happiness": 3
          },
          "narrative": "昆布と鰹節から取る澄んだ黄金色のお出汁。素材の味を活かした筑前煮や出汁巻き卵を丁寧に作り、毎日の食卓が格段に豊かになった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "料理教室で作った本格スパイスカレー、我ながら絶品だった！ 調味料の組み合わせでこんなに味が変わるなんて面白い。料理がもっと好きになった。",
    "丁寧に出汁を取る料理を学んだ。日々の食事を大切にすることが、自分を大切にすることに繋がっている気がする。"
  ]
});

window.defineEvent({
  "id": "adult_marathon_finish_line",
  "title": "市民マラソンへの挑戦・沿道の声援と完走の涙",
  "age": [
    24,
    55
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 20,
  "once": true,
  "text": "健康増進と自分への挑戦としてエントリーした市民マラソン大会。数ヶ月におよぶ朝夕のランニング習慣。色とりどりのウェアに身を包んだランナーたちとともに、号砲の合図でスタートラインを越える。",
  "choices": [
    {
      "id": "choice_0",
      "label": "数ヶ月のトレーニングの成果を信じ、自分のペースを守って完走する",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 5,
            "independence": 4,
            "happiness": 4,
            "stress": -3,
            "bond": {
              "role": "club_mate",
              "status": "acquaintance",
              "metContext": "市民マラソンのランナー仲間"
            }
          },
          "narrative": "毎朝コツコツと走り込みを重ねて迎えたフルマラソン当日。30キロ過ぎ、足が鉛のように重くなり挫けそうになった時、沿道からの「頑張れ！」という見知らぬ人たちの温かい声援に背中を押された。ゴールゲートをくぐり抜けた瞬間、首に完走メダルをかけられ、やり抜いた達成感で大粒の涙が溢れた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "仲間とお揃いのTシャツで走り、給水所の名産グルメを楽しみながらゴールする",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 4,
            "communication": 3,
            "happiness": 4,
            "bond": {
              "role": "club_mate",
              "status": "close",
              "metContext": "市民マラソンを共に完走した仲間"
            }
          },
          "narrative": "ランニング仲間と励まし合いながら走ったハーフマラソン。地元の人たちが振る舞ってくれるイチゴや給水に元気をもらい、笑顔でハイタッチしてゴールテープを切った。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "フルマラソン完走！ 42.195キロ、本当に長くて途中で何度も心が折れそうだったけれど、自分の足でゴールできた感動は一生忘れられない。",
    "マラソン大会を走り切った！ 筋肉痛はものすごいけれど、やり切った爽快感で心も身体も生まれ変わったような気分。"
  ]
});

window.defineEvent({
  "id": "adult_pet_adoption_shelter",
  "title": "保護猫との出会い・小さな命と始める温かい暮らし",
  "age": [
    24,
    60
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "once": true,
  "text": "休日に訪れた保護動物の譲渡会。様々な事情で保護された犬や猫たち。その中の一匹とふと目が合い、命を預かり共に暮らす決意が胸に宿る。",
  "choices": [
    {
      "id": "choice_0",
      "label": "譲渡会で目が合った保護猫を家族に迎え、大切に育てる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 6,
            "stress": -5,
            "morality": 3,
            "money": -2,
            "bond": {
              "role": "friend",
              "status": "close",
              "metContext": "保護猫の譲渡会で知り合った友人"
            }
          },
          "narrative": "動物愛護センターの譲渡会。ケージの隅からじっとこちらを見つめてきたトラ猫。家に迎えた最初の日は警戒していたけれど、数日後、膝の上に乗ってゴロゴロと喉を鳴らしてくれた瞬間、愛おしさが胸に溢れた。帰宅するたびに玄関で待ってくれる小さな温もりが、日々の生活を何倍も温かくしてくれた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ペット可の住環境を整え、キャットタワーとおもちゃを揃える",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 5,
            "independence": 2,
            "aesthetics": 2,
            "money": -3
          },
          "narrative": "部屋の安全対策を施し、陽当たりの良い窓際にキャットウォークを設置。元気に部屋中を駆け回り、窓辺で日向ぼっこする姿を眺めるだけで、日々の疲れが綺麗に溶けていくようだった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "我が家に猫ちゃんがやってきた！ 膝の上で丸くなって眠る小さな体温が愛おしくてたまらない。家の中がパッと明るくなった。",
    "ペットのいる暮らし。ただいまを言う相手がいるだけで、こんなにも毎日の幸福感が違うなんて知らなかった。"
  ]
});

window.defineEvent({
  "id": "career_burnout",
  "title": "働きすぎの兆し",
  "age": [
    24,
    62
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "employed"
  ],
  "weight": 9,
  "text": "最近、仕事の疲れが抜けにくくなった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "働き方を調整する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "働き方を調整する。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -6
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "休暇を取る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "休暇を取る。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -30000
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "無理を重ねるのをやめ、仕事のペースを落とした。心身の健やかさが何よりの資本だと痛感した。",
    "温泉に出かけて思い切り羽を伸ばした。凝り固まった肩と心がすっかり解けた。"
  ]
});

window.defineEvent({
  "id": "adult_career_promotion_responsibility",
  "title": "プロジェクトリーダー就任・後輩の指導と責任の重み",
  "age": [
    26,
    50
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "employed"
  ],
  "weight": 24,
  "once": true,
  "text": "社内での経験を重ね、後輩も増えてきた中堅社員としての節目。重要なプロジェクトの取りまとめやチーフとしての役職への抜擢。プレイヤーからマネジメントへと求められる視座が変わる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "チームの意見を丁寧に聞き、信頼されるリーダーとして舵を取る",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "leadership": 4,
            "communication": 3,
            "money": 6,
            "stress": 2,
            "bond": {
              "role": "junior",
              "status": "close",
              "trust": 58,
              "metContext": "リーダーとして指導した信頼できる後輩"
            }
          },
          "narrative": "重要な新プロジェクトのリーダーを任された。指示を出すだけでなく、悩む後輩の話に耳を傾け、チーム一丸となって納期を達成。上司からの高い評価とともに役職手当がつき、キャリアの確かな前進を実感した。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "効率的な業務フローを構築し、残業削減と成果の両立を果たす",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 4,
            "independence": 3,
            "money": 5,
            "stress": -1
          },
          "narrative": "無駄な会議を削減し、タスク管理をデジタル化。メンバーが定時で帰れる環境を作りながら業績を伸ばし、社内アワードを受賞した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "リーダーとしての大きな案件が無事に終了！ プレッシャーで胃が痛い時期もあったけれど、後輩たちから『ついてきて良かったです』って言われて涙が出た。",
    "仕事で役職がついた。責任は重くなったけれど、自分の裁量で動かせる面白さがある。もっと成長していきたい。"
  ]
});

window.defineEvent({
  "id": "adult_balcony_vegetable_garden",
  "title": "ベランダの小さな家庭菜園・朝露に光るミニトマト",
  "age": [
    26,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 20,
  "once": true,
  "text": "ベランダの小さなスペースを利用して始めた家庭菜園。ホームセンターで選んだプランターと培養土。種をまき、小さな芽が出て葉を広げていく生命の営みに触れる静かな時間。",
  "choices": [
    {
      "id": "choice_0",
      "label": "毎朝の水やりと土の手入れを欠かさず、真っ赤に実った果実を収穫する",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "health": 2,
            "stress": -4
          },
          "narrative": "プランターに土を入れ、苗を植えたミニトマトとバジル。朝起きてカーテンを開け、朝露に光る小さな黄色い花を見つけた時の喜び。夏になり、真っ赤に熟した採れたてのトマトをもぎ取って朝食のサラダに入れた。みずみずしい甘みが口いっぱいに広がり、日々の何気ない幸せを噛み締めた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ローズマリーやミントなどのハーブを育て、自家製ハーブティーを楽しむ",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "stress": -5,
            "happiness": 3
          },
          "narrative": "摘みたてのフレッシュミントにお湯を注ぐと、キッチンいっぱいに爽やかな香りが広がった。自然の恵みに癒やされる穏やかなモーニングルーティンが定着した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "ベランダのミニトマトが真っ赤に実った！ 自分で種から育てた野菜を食べるのって、こんなに美味しいんだって感動した。",
    "朝の水やりが毎日の癒やしの時間。緑がぐんぐん育っていく姿を見ていると、日々の忙しさを忘れて優しい気持ちになれる。"
  ]
});

window.defineEvent({
  "id": "adult_home_purchase_blueprint",
  "title": "夢のマイホーム計画・並べた間取り図と新しい家具",
  "age": [
    28,
    55
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "once": true,
  "text": "これからの人生を腰を据えて過ごすための拠点。マンションや一戸建ての購入計画。テーブルの上に広げられた間取り図や住宅ローンの試算表を見つめ、これからの未来に胸を膨らませる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "住宅ローンの資金計画を綿密に立て、納得のいく理想の住まいを契約する",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "independence": 5,
            "money": -10,
            "happiness": 5,
            "knowledge": 3
          },
          "narrative": "モデルルームや住宅展示場に何度も足を運び、耐震性や生活動線を徹底比較。人生最大の買い物となる住宅購入の契約書にサインした。鍵を受け取り、真新しいフローリングを踏みしめた時の誇らしさと安らぎは格別だった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "間取りや壁紙、キッチンの設備を自分好みにこだわり抜く",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 4,
            "happiness": 5,
            "money": -8
          },
          "narrative": "使い勝手の良い対面式キッチン、陽当たりの良いリビング、お気に入りのアクセントクロス。これからの長い人生を紡ぐ拠点を丁寧に創り上げた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "マイホームを手に入れた！ 自分の城を持てるなんて、大人になったんだなと実感する。ローン返済も頑張りつつ、この家でたくさんの思い出を作りたい。",
    "新しい住まいの引き渡し。新しい木の香りがするリビングで深呼吸した時、心からホッとする居場所ができたと感じた。"
  ]
});

window.defineEvent({
  "id": "adult_class_reunion_thirties",
  "title": "三十歳の節目同窓会・それぞれの道を歩む旧友たち",
  "age": [
    30,
    40
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "once": true,
  "text": "三十歳という節目の年に開催された中学校・高校の学年同窓会。案内状を手に集まったかつての仲間たち。学生時代の面影と、社会人として重ねてきた歳月の深みが交錯する会場。",
  "choices": [
    {
      "id": "choice_0",
      "label": "近況を語り合い、互いの人生の歩みを認め合って親交を温め直す",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 3,
            "happiness": 4,
            "selfKnowledge": 3,
            "bond": {
              "role": "classmate",
              "status": "close",
              "metContext": "三十歳の同窓会で再会した旧友"
            }
          },
          "narrative": "ホテルの宴会場に集まった同級生たち。結婚した人、バリバリ働いている人、子育てに奮闘する人。十代の頃の面影を残しながらも、それぞれが大人の顔つきで自分の人生を歩んでいる。飾らない昔話に花を咲かせ、旧友たちとの変わらない絆に心が温まった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "昔好きだった人や親友と静かに語り、懐かしい思い出に浸る",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "selfKnowledge": 3,
            "happiness": 3,
            "intimacyNeed": 1,
            "bond": {
              "role": "classmate",
              "status": "close",
              "romanticInterest": 72,
              "metContext": "同窓会で語り合った昔の想い人"
            }
          },
          "narrative": "二次会の落ち着いたバーで、昔の淡い恋心や部活の思い出を懐かしく語り合った。大人になった今だからこそ話せる笑い話に、青春時代のすべてが愛おしく感じられた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "三十歳の同窓会。みんなすっかり立派な大人になっていたけれど、話すと一瞬で昔の空気に戻れた。自分の人生も悪くないなって前向きになれた。",
    "懐かしい同級生たちとの再会。みんなそれぞれ悩みながら頑張っている姿に勇気をもらった。また集まろうねって約束した。"
  ]
});
