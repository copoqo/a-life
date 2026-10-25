// ============================================================================
// Pack: 10_district_taboo_underground — 街区イベント・背徳の逢瀬・公衆スリル・アングラ連鎖 (38 events)
// ============================================================================
window.defineEvent({
  "id": "encounter_friends_sibling",
  "title": "友達の家の隣室、息を殺した背徳の密会",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "school_student",
    "hetero_or_bi"
  ],
  "weight": {
    "base": 15,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "is_encounter": true,
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
    }
  },
  "text": "友人の家に遊びに行った放課後。友人がおやつを取りに部屋を出た隙に、隣の部屋から友人のきょうだいが声をかけてきた。扉の陰に引き込まれ、壁に押し付けられた瞬間、すぐ隣に友人がいる背徳感で下腹が甘く痙攣する……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "スカートの中に手を滑り込ませるのを許す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "友達に聞こえないよう唇を塞がれ、スカートの中に手を滑り込ませるのを許す。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "encounter_colleague",
                "delay": 1,
                "prob": 0.75
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "胸の鼓動を抑えながら友達の部屋へ戻る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "秘密の目配せを交わし、胸の鼓動を抑えながら友達の部屋へ戻る。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "meeting_friends_sibling",
    "meeting_friends_sibling"
  ],
  "diary": [
    "友達がすぐ隣の廊下にいるのに、部屋の隅で口を塞がれ、下着をずらされて濡れた秘所を指で弄られた。見つかる恐怖と快感で頭がおかしくなりそうだった。",
    "友達のきょうだいと交わした秘密の視線。禁断の扉に手をかけたような高揚感に、太ももが熱く火照った。"
  ]
});

window.defineEvent({
  "id": "encounter_teacher",
  "title": "放課後の個別指導、施錠された準備室の熱気",
  "age": [
    16,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "school_student",
    "hetero_or_bi"
  ],
  "weight": {
    "base": 14,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "is_encounter": true,
  "text": "放課後、質問をしに訪れた教官室や準備室。先生と二人きりで机を並べて指導を受けるうち、偶然を装って肩や太ももが触れ合う。先生の眼鏡の奥の熱い視線と、教壇の上の権威ある大人が見せる異性としての顔に、下着の奥が湿り気を帯びていく。",
  "choices": [
    {
      "id": "choice_0",
      "label": "質問を終えてすぐに礼を言い、教室へ戻る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "質問を終えてすぐに礼を言い、教室へ戻る。",
          "effects": [
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
      "label": "先生と適切な距離を保ちながら熱心に指導を受ける",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "先生と適切な距離を保ちながら熱心に指導を受ける。",
          "effects": [
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
      "id": "choice_2",
      "label": "教卓の下で触れ合う太ももの熱に息を呑み、指導を受け続ける",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "教卓の下で触れ合う太ももの熱に息を呑み、指導を受け続ける。",
          "effects": [
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 10
            },
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 25
            }
          ]
        }
      ]
    },
    {
      "id": "choice_3",
      "label": "先生の眼鏡の奥の熱い視線を見つめ返し、そっと身体を寄せる",
      "outcomes": [
        {
          "id": "outcome_3",
          "weight": 1,
          "description": "先生の眼鏡の奥の熱い視線を見つめ返し、そっと身体を寄せる。",
          "effects": [
            {
              "path": "history.flags.teacher_classroom_affair",
              "op": "set",
              "value": true
            },
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 35
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "encounter_teacher_deep_bond",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_4",
      "label": "施錠された準備室の扉に背を預け、先生の熱い吐息を受け入れる",
      "outcomes": [
        {
          "id": "outcome_4",
          "weight": 1,
          "description": "施錠された準備室の扉に背を預け、先生の熱い吐息を受け入れる。",
          "effects": [
            {
              "path": "history.flags.teacher_classroom_affair",
              "op": "set",
              "value": true
            },
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 50
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "encounter_teacher_deep_bond",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "meeting_teacher",
    "meeting_teacher",
    "meeting_teacher",
    "meeting_teacher",
    "meeting_teacher"
  ],
  "diary": [
    "施錠された準備室。先生の大きな手にブラウスを捲られ、教卓の上で犯されるような愛撫を受けた。先生を独占している背徳感に、愛液がとめどなく溢れた。",
    "先生の指が太ももを撫でた瞬間の背筋の凍るような快感。許されない関係への憧れを押し殺して部屋を出た。"
  ]
});

window.defineEvent({
  "id": "encounter_teacher_deep_bond",
  "title": "放課後の理科準備室、標本棚の陰での密通",
  "age": [
    16,
    18
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "general",
  "presets": [
    "school_student",
    "hetero_or_bi"
  ],
  "weight": {
    "base": 15,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "requires_flag": "teacher_classroom_affair",
  "is_encounter": true,
  "is_major": true,
  "conditions": {
    "all": [
      {
        "path": "history.flags.teacher_classroom_affair",
        "op": "eq",
        "value": true
      }
    ]
  },
  "text": "教卓でのあの日以来、授業中に教壇の先生と視線が絡むたび、下腹が疼いて下着が湿るようになってしまった。放課後、人目を盗んで訪れた施錠された理科準備室。薬品の匂いが漂う薄暗がりの中、白衣の先生に後ろから強く抱きしめられ、耳元に「もうお前なしじゃいられない」と熱い息を吹きかけられる。スカートをめくられ、机に突っ伏した姿勢で秘唇をまさぐられ……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "先生の太い肉塊に奥深くまで貫かれ腰を激しく絡ませる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "白衣の胸にしがみつき、先生の太い肉塊に奥深くまで貫かれ腰を激しく絡ませる。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
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
      "label": "与えられる快楽に啼き悶える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "生徒と教師の一線を越えた背徳感に涙を流しながら、与えられる快楽に啼き悶える。",
          "effects": [
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
      "id": "choice_2",
      "label": "抱きしめ合うだけで身を引く",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "これ以上深入りすれば先生を破滅させると自制し、抱きしめ合うだけで身を引く。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
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
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "mutual_talk"
  ],
  "diary": [
    "施錠された準備室の机の上で、先生の激しいピストンに揺さぶられた。白衣を乱した先生の荒い息遣いと、肉がぶつかり合う湿った水音が部屋に響き、背徳の喜びに頭が真っ白になった。",
    "大人である先生に無慈悲なほど奥深くまで突き上げられ、涙と愛液でシーツ代わりの白衣を汚した。許されない関係だからこそ、身体の芯を貫く快楽は狂おしいほど甘美だった。",
    "先生の熱い体温を感じながらも、最後の一線で踏みとどまった。互いの立場を思い、唇を重ねるだけで準備室を後にした帰り道、夜風が火照った頬に冷たかった。"
  ]
});

window.defineEvent({
  "id": "encounter_stranger_adult",
  "title": "夜の路地裏、知らない大人の甘い誘い",
  "age": [
    16,
    24
  ],
  "trigger": "normal",
  "classification": "random",
  "content_rating": "general",
  "presets": [
    "hetero_or_bi"
  ],
  "weight": {
    "base": 15,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "is_encounter": true,
  "actors": {
    "stranger": {
      "source": "random_adult",
      "required": false
    }
  },
  "text": "夜の街を歩く帰り道、洗練された身なりの見知らぬ大人に声をかけられた。普段関わることのない年上の落ち着いた雰囲気と大人の香水の匂いに、危険だと知りながらも心臓が早鐘を打ち、下腹の奥がじわりと熱くなる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "夜の車内で大人の手ほどきを受ける",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "誘われるまま車に乗り、夜の車内で大人の手ほどきを受ける。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "sexual_taboo_solitude",
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
      "label": "秘密のときめきを胸に抱いて立ち去る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "連絡先だけを交換し、秘密のときめきを胸に抱いて立ち去る。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "足早にその場を離れる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "危険を察してきっぱりと断り、足早にその場を離れる。",
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
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "meeting_stranger",
    "meeting_stranger",
    "none"
  ],
  "diary": [
    "名前も知らない大人の車内、暗がりで下着の中に手を差し入れられた。同年代にはない強引で手慣れた愛撫に、声も出せず太ももを濡らしてしまった。",
    "見知らぬ大人との出会いに胸が高鳴った。大人の世界への憧れと、下腹の疼きを覚えた夜だった。",
    "危ない誘惑を断ち切った。でも、あの人の低い声と香水の匂いが、しばらく頭から離れなかった。"
  ]
});

window.defineEvent({
  "id": "encounter_colleague",
  "title": "バイト上がりの深夜、薄暗い休憩室の逢瀬",
  "age": [
    18,
    30
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "general",
  "presets": [
    "employed",
    "hetero_or_bi"
  ],
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
  "is_encounter": true,
  "is_major": true,
  "actors": {
    "coworker": {
      "source": "coworker",
      "required": false
    }
  },
  "text": "深夜のシフトが終わり、閉店後の静まり返った店内。着替えのために一人でいた休憩室に、職場の同僚が入ってきた。ロッカーの扉を閉めた瞬間、背後から抱きすくめられ、首筋に熱い吐息を吹きかけられる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "制服を崩したまま下腹をまさぐり合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "ロッカーに身体を押し付けられ、制服を崩したまま下腹をまさぐり合う。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "encounter_colleague_after_hours",
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
      "label": "休憩室を出て夜風で火照りを冷ます",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "冗談めかして身体をすり抜け、休憩室を出て夜風で火照りを冷ます。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
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
  "outcomes": [
    "meeting_colleague",
    "meeting_colleague"
  ],
  "diary": [
    "深夜のスタッフルームで制服をめくられ、壁に押し付けられたまま指を奥深くまでねじ込まれた。仕事場という日常の中での淫らな行為に、激しく興奮してしまった。",
    "同僚のたくましい腕に抱きしめられた瞬間の胸の高鳴り。危うく流されそうになった身体の熱さを、夜風で冷ましながら帰路についた。"
  ]
});

window.defineEvent({
  "id": "encounter_colleague_after_hours",
  "title": "深夜のタイムカード、狭いアパートの朝帰り",
  "age": [
    18,
    32
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "employed",
    "hetero_or_bi"
  ],
  "weight": 16,
  "is_encounter": true,
  "actors": {
    "coworker": {
      "source": "coworker",
      "required": false
    }
  },
  "text": "休憩室での密会を経て、深夜シフトで一緒になるたび、目配せ一つで身体を求め合う関係になっていた。閉店作業を終えてタイムカードを押した深夜3時。どちらからともなく腕を引き合い、近くにある相手の狭いワンルームアパートへ雪崩れ込む。玄関のドアが閉まるなり衣服を脱ぎ捨て、狭い万年床の上で、もつれ合うように素肌を重ねる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "汗だくになりながら朝まで激しく求め合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "同僚のたくましい腰つきに合わせ、汗だくになりながら朝まで激しく求め合う。",
          "effects": [
            {
              "path": "state.mood",
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
      "label": "本当の恋人同士になりたいと耳元で甘く囁く",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "身体の相性だけでなく、本当の恋人同士になりたいと耳元で甘く囁く。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "割り切った関係のまま静かに部屋を出る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "夜が明ける前にそっとベッドを抜け出し、割り切った関係のまま静かに部屋を出る。",
          "effects": [
            {
              "path": "state.self_efficacy",
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
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "mutual_talk",
    "reflection"
  ],
  "diary": [
    "薄い敷布団の上で、同僚の硬い肉棒に何度も子宮口をノックされた。汗と愛液が混ざり合い、ぬちぬちと激しい水音を立てながら、夜が明けるまで貪り合うように腰を振った。",
    "身体を重ねた後の温もりに包まれながら、胸元に顔を埋めて気持ちを伝えた。相手のたくましい腕が優しく抱きしめ返してくれて、身体の奥まで幸福感で満たされた。",
    "寝息を立てる同僚の隣で服を着直し、朝焼けの街へ出た。下腹に残る重だるい痺れと愛液の匂いが、秘密の逢瀬の生々しさを刻みつけていた。"
  ]
});

window.defineEvent({
  "id": "underground_adult_video_debut",
  "title": "照明の下で晒される素肌・アダルトビデオの初撮影",
  "age": [
    18,
    40
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "underground_eligible",
    "hetero_or_bi"
  ],
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
  "once": true,
  "unfaithful_penalty_when_partnered": true,
  "is_major": true,
  "text": "雑居ビルの無機質なスタジオ。強烈な照明が照らす中、何台ものカメラと大勢の男性スタッフの前で服を脱ぎ去り、一糸まとわぬ姿になる。現れたプロの男優の逞しい肉体。監督の指示のもと、指先で濡れそぼる秘唇をアップで撮影され、逞しい肉棒を奥深くまでねじ込まれる。レンズの向こうの無数の他者の視線を意識した瞬間、異常な露出快感が背筋を駆け抜け、愛液が音を立てて噴き出す……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "奥を突き上げられる歓喜を晒す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【カメラ目線で喘ぎ声をあげ絶頂する】レンズに向かって潮を吹き、奥を突き上げられる歓喜を晒す。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 200000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "underground_adult_video_gang",
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
      "label": "中出しされて震える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【台本通りに必死で男優のピストンを受け止める】スタッフの視線に晒されながら、中出しされて震える。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 180000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -6
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "ギャラの一部だけを受け取る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【羞恥のあまり途中で撮影を中断させる】レンズの視線に耐えかねて泣き崩れ、ギャラの一部だけを受け取る。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 60000
            },
            {
              "path": "state.stress",
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "カメラのレンズの前で、プロの男優に激しく肉穴を突き上げられた。「もっと中を見せて」と監督に指示され、愛液を飛び散らせながら絶頂の嬌声を張り上げた。大勢のスタッフに見つめられながら果てる倒錯の快感に、脳が焼き切れるかと思った。",
    "無機質なスタジオのベッドで男優に貫かれ、撮影台本通りに最後まで交わった。膣内に注がれる熱い感触をカメラに撮られながら、これが世界中に配信されるのだと実感して下腹が甘く痺れた。",
    "カメラの前で素肌を晒す恐怖に耐えきれず、途中で毛布を被って泣いてしまった。スタッフの舌打ちと申し訳なさを抱え、重い足取りでスタジオを出た。"
  ]
});

window.defineEvent({
  "id": "underground_sexwork_trial",
  "title": "切迫する生活苦と淫らな衝動・高級ソープへの体験入店",
  "age": [
    18,
    45
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "underground_eligible",
    "hetero_or_bi"
  ],
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
  "once": true,
  "unfaithful_penalty_when_partnered": true,
  "is_major": true,
  "text": "借金の返済や生活費の底がつき、家賃の督促状が机に積まれた月末。ネットの「即日日払い・未経験歓迎」の広告にすがるように、歓楽街の路地裏にあるソープランドの面接へ。簡単な講習の後、通された豪華な浴槽付きの個室。バスタオル一枚を巻いて待つ中、現れた裕福そうな中年の客。豊かな泡とオイルにまみれて滑り合う素肌、そして金のために他人の肉棒を口と肉穴で受け入れる背徳の快感に、罪悪感を吹き飛ばすほど下腹が淫らに疼き出す……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "札束のために奥深くまで太い肉塊を飲み込む",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【本番の快楽に屈服する】全身泡まみれで跨がり、札束のために奥深くまで太い肉塊を飲み込む。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 120000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "風俗"
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "underground_sexwork_fulltime",
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
      "label": "ゴムなしで子宮口まで注がせる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【裏オプの生中出しを受け入れる】追加のチップに目が眩み、ゴムなしで子宮口まで注がせる。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 180000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "風俗"
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "underground_raw_creampie_addict",
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
      "label": "濡れた身体の震えを抱えて夜の街へ出る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【体験だけで逃げるように帰る】日払いの封筒を握りしめ、濡れた身体の震えを抱えて夜の街へ出る。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 60000
            },
            {
              "path": "state.stress",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "泡まみれのマットの上で客の太い肉棒に跨がった。生活費の札束のためだと自分に言い聞かせながらも、ぐちゃぐちゃと肉穴を掻き回される熱い快感に我を忘れ、みっともないほど声をあげて絶頂した。",
    "追加のチップを渡され、避妊具をつけない生の本番を受け入れた。子宮口に直撃する熱い精液の感触に頭が真っ白になり、お金と快感の毒に身体が侵されていくのを感じた。",
    "体験入店の日払い封筒をバッグにしまい、夜の歓楽街を逃げるように歩いた。他人の体温とオイルの匂いが肌に残っていて、下腹が冷たく痙攣していた。"
  ]
});

window.defineEvent({
  "id": "underground_street_standing",
  "title": "夜の大久保公園・街角に立つ女と冷たい札束",
  "age": [
    18,
    45
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "low_morality",
    "underground_eligible",
    "hetero_or_bi"
  ],
  "weight": {
    "base": 22,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
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
  "once": true,
  "unfaithful_penalty_when_partnered": true,
  "is_major": true,
  "publicSex": true,
  "text": "ネオンが毒々しく瞬く歌舞伎町の外れ、大久保公園の鉄柵沿い。露出度の高いミニスカートと網タイツを身にまとい、スマホをいじるふりをして立ち止まる。品定めするように行き交う男たちの視線。声をかけてきた男と値段を交渉し、薄暗い路地裏の雑居ホテルへ。名前も知らない相手にベッドに押し倒され、剥き出しの肉欲で荒々しく貫かれる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "乱暴なピストンに声を殺してイく",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【値上げを条件に激しい交わりを許す】見知らぬ男の体重を受け止め、乱暴なピストンに声を殺してイく。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 100000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -7
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "underground_adult_video_debut",
                "delay": 1,
                "prob": 0.8
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "冷たい札束を懐に詰め込む",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【複数の客を立て続けに相手にする】一晩で何人もの男たちに肉体を差し出し、冷たい札束を懐に詰め込む。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 180000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -9
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "自室へ逃げ帰る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【パトカーのサイレンに肝を冷やして逃げる】警察の摘発の気配に路地を駆け抜け、自室へ逃げ帰る。",
          "effects": [
            {
              "path": "state.stress",
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
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "路上で声をかけてきた見知らぬ男と連れ込みホテルへ入った。名前も知らない相手に四つん這いにさせられ、後ろから乱暴に肉穴を突かれた。お金を握りしめながら、下品な快楽に身体を震わせて絶頂した。",
    "一晩の間に三人の男を部屋に招き入れた。ゴムが擦れる異様な匂いと体液にまみれ、最後には愛液すら涸れ果てた肉穴を突き上げられて、虚ろな頭で天井の染みを見つめていた。",
    "パトカーの赤色灯が見えて、ヒールを脱ぎ捨てて路地裏を全力で走った。暗がりで息を切らしながら、自分の生き方の危うさに震えが止まらなかった。"
  ]
});

window.defineEvent({
  "id": "underground_raw_creampie_addict",
  "title": "裏オプと生中出し・避妊具なしの肉壁に注がれる精液の熱",
  "age": [
    18,
    48
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "general",
  "presets": [
    "underground_eligible",
    "hetero_or_bi"
  ],
  "weight": 24,
  "once": true,
  "unfaithful_penalty_when_partnered": true,
  "is_major": true,
  "text": "本来は禁止されているはずの避妊具なしの本番行為。客からの追加チップの誘惑と、素肌同士が密着する快感に抗えず、一度許してしまった生中出し。ゴム越しとは比べ物にならない熱い肉塊の感触、そして膣の最奥、子宮口に直撃するドクドクと脈打つ白濁した精液の熱さに、身体が完全に依存してしまった……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "【ゴムなしの熱いピストンに腰を突き出す】子宮口に何度も熱い精液を注がれる快感に身悶える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【ゴムなしの熱いピストンに腰を突き出す】子宮口に何度も熱い精液を注がれる快感に身悶える。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 220000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -10
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "愛液と精液を垂れ流して果てる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【妊娠の恐怖と快楽の狭間で啼き叫ぶ】危険なスリルに下腹を痙攣させ、愛液と精液を垂れ流して果てる。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 200000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -9
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
      "label": "急いで避妊薬を求めて夜の街を駆ける",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【アフターピルを買いに薬局へ走る】正気に戻り、急いで避妊薬を求めて夜の街を駆ける。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": -30000
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "避妊具なしの生の肉棒を子宮口まで突き入れられた。肉と肉が直接擦れ合うぬちぬちとした摩擦と、奥深くに勢いよくドクドクと注ぎ込まれる精液の熱さに我を忘れ、シーツを噛みちぎりながら激しく中出し絶頂を繰り返した。",
    "妊娠してしまうかもしれない恐怖が、かえって下腹の感度を異常なまでに跳ね上げた。男の腰を両足で固く抱きしめ、「もっと中に出して」と泣き叫びながら果てていた。",
    "客が去った後、我に返って震える手で服を着た。深夜のドラッグストアでアフターピルを買い求め、水を飲み下しながら自分の愚かさに涙がこぼれた。"
  ]
});

window.defineEvent({
  "id": "underground_sexwork_fulltime",
  "title": "風俗嬢としての本職・湯煙の個室と指名客の太い肉棒",
  "age": [
    18,
    48
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "underground_eligible",
    "hetero_or_bi"
  ],
  "weight": {
    "base": 24,
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
  "once": true,
  "unfaithful_penalty_when_partnered": true,
  "is_major": true,
  "text": "昼の仕事に見切りをつけ、風俗店に本指名をもらう看板嬢として本格的に身を投じた。毎日のように見知らぬ男たちの欲望を全身で受け止め、マットの上で泡にまみれて腰を振り、ベッドで啼き乱れる日々。手元に入ってくる大量の万札と、他人の肉塊で執拗に掻き回される肉腔の痺れ。いつしか罪悪感は麻痺し、客の荒い鼻息と肉のぶつかる水音だけが日常を満たしていく……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "愛液を飛び散らせながら絶頂を貪る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【指名客の熱い求めに腰を跳ねさせる】客の太い肉棒に跨がり、愛液を飛び散らせながら絶頂を貪る。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 150000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "風俗"
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "underground_sugar_daddy",
                "delay": 1,
                "prob": 0.8
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "個人営業の立ちんぼを考える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【もっと効率よく稼ぐため路上へ目を向ける】店のバックマージンに不満を抱き、個人営業の立ちんぼを考える。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 100000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -6
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "underground_street_standing",
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
      "label": "貯金を増やすことだけに集中する",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【客に情が移る前に割り切ってこなす】淡々と仕事をこなし、貯金を増やすことだけに集中する。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 160000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "風俗"
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "shared_intimacy"
  ],
  "diary": [
    "本指名客との濃厚なプレイ。泡まみれの身体を密着させ、客の太いモノを奥深くまで飲み込んで狂ったように腰を振った。肉と肉がぶつかる湿ったぬちぬちとした音の中で、客と一緒に果てた。",
    "店に引かれるマージンを計算し、自分で直接客を取る立ちんぼの噂に惹かれた。肉体を売ることへの躊躇いは、もう完全に消え去っていた。",
    "笑顔で客を見送り、熱いシャワーで男たちの体液を洗い流した。通帳の数字だけが、今の自分の唯一の支えだった。"
  ]
});

window.defineEvent({
  "id": "underground_sugar_daddy",
  "title": "パパ活と愛人契約・タワマンの夜景と富裕層の飼い犬",
  "age": [
    18,
    48
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "underground_eligible",
    "hetero_or_bi"
  ],
  "weight": 22,
  "once": true,
  "unfaithful_penalty_when_partnered": true,
  "text": "高級ホテルのラウンジで出会った富裕層の男。生活費やブランド品を全て面倒見てもらう代わりに、月に何度もタワーマンションの最上階へ呼び出される愛人関係。夜景を見下ろすキングサイズベッドで、高価なランジェリーを引き裂かれ、金主の太い欲望を受け止める。飼い慣らされた贅沢と、肉体をお金で買い叩かれる屈辱が混ざり合い、下腹が甘く疼く……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "愛人としての悦びに溺れる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【男の言いなりになって夜通し奉仕する】夜景の窓ガラスに手をつかされ、愛人としての悦びに溺れる。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 200000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -7
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "より過激なプレイを受け入れる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【お手当の増額を交渉して肉体を差し出す】したたかに計算しながら、より過激なプレイを受け入れる。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 250000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "買い与えられたバッグを売って手切れ金にする",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【男の執着に恐怖を覚え関係を清算する】鍵を返却し、買い与えられたバッグを売って手切れ金にする。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 100000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "タワマンのガラス窓に額を押し当てられ、きらめく夜景を見下ろしながら後ろから貫かれた。愛人としての屈辱と、贅沢な部屋で飼われている優越感が混ざり合い、熱い愛液を垂れ流して果てた。",
    "お手当の札束と引き換えに、男の異常な性癖に付き合った。お金さえ手に入れば身体などどうでもいいと冷酷に割り切る自分が、どこか恐ろしかった。",
    "男の歪んだ執着から逃れるため、マンションの合鍵を置いて逃げ出した。売却した貴金属の現金を手にして、ようやく息を吹き返した。"
  ]
});

window.defineEvent({
  "id": "daily_morning_trash_gaze",
  "title": "朝のゴミ出しと気になる視線",
  "age": [
    18,
    55
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 20,
  "once": true,
  "text": "まだ人通りのまばらな早朝、部屋着のままゴミ集積所へ向かった。カラス除けネットを直していると、向かいの道を行く出勤前の男性から、薄着の胸元をじっと見つめられるような、熱っぽい視線を感じた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "気にせず普段通りゴミを出してさっと戻る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "気にせず普段通りゴミを出してさっと戻る。",
          "effects": [
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "誰かに相談したり、防犯への警戒を強める",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "家族や友人に相談し、防犯の意識を高める。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "history.flags.trash_gaze_reported",
              "op": "set",
              "value": true
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "次からはきちんと上着を着て身だしなみを整える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "無防備だったことを反省し、上着を羽織るようにする。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_3",
      "label": "見られている視線を意識して、少し胸を張って足早に立ち去る",
      "outcomes": [
        {
          "id": "outcome_3",
          "weight": 1,
          "description": "見られている視線に微かな刺激を覚え、胸を張って立ち去る。",
          "effects": [
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 25
            },
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 15
            },
            {
              "path": "history.flags.trash_gaze_ignored_or_thrill",
              "op": "set",
              "value": true
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "district_residential_morning_trash",
                "delay": 1,
                "prob": 0.95
              }
            }
          ]
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "district_deprived_rooftop_drying",
  "title": "老朽アパートの共用屋上・物干しシーツの陰の逢瀬",
  "age": [
    18,
    55
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "low_morality",
    "hetero_or_bi",
    "taboo_awakened"
  ],
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "deprived"
        },
        "factor": 3.5
      },
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
  "once": true,
  "district": "deprived",
  "unfaithful_penalty_when_partnered": true,
  "is_major": true,
  "publicSex": true,
  "text": "錆びた鉄骨と雑多な洗濯物がはためく古いアパートの共用屋上。風に揺れる湿ったシーツの迷路の奥。近所の男に背後から抱きすくめられ、ノーパンの薄いワンピースをたくし上げられる。見下ろせば雑多な下町の路地。白昼の風に素肌を晒しながら、逃げ場のない快楽に身体を預ける……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "風にシーツを揺らされながら立ちバックで貫かれる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "物干し竿に手をつき、風にシーツを揺らされながら立ちバックで貫かれる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
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
      "label": "指先で愛液を掻き回されて膝を震わせる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "干されたシーツの陰に座り込み、指先で愛液を掻き回されて膝を震わせる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
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
      "label": "大急ぎでワンピースの裾を下ろす",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "下の階段から誰かのサンダルの音が響き、大急ぎでワンピースの裾を下ろす。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "共同屋上の物干し竿に手をつかされ、シーツが風に揺れる陰で後ろから貫かれた。白昼の青空の下で剥き出しの臀部に激しく腰を打ち付けられ、下町を見下ろしながら声を殺して絶頂した。",
    "干されたシーツの隙間に座り込み、ノーパンのワンピースをまくられてまさぐられた。風が素肌を撫でる開放感と淫靡さに、下腹から熱い蜜がとめどなく溢れた。",
    "サンダルのペタペタという音が階段から聞こえて、慌ててワンピースを整えた。日常の雑踏のすぐ上で抱き合っていた心臓の早鐘が、いつまでも止まらなかった。"
  ]
});

window.defineEvent({
  "id": "district_residential_morning_trash",
  "title": "朝の住宅街・ノーブラのゴミ出しと路地裏の衝動",
  "age": [
    18,
    55
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "low_morality",
    "hetero_or_bi",
    "taboo_awakened"
  ],
  "weight": {
    "base": 22,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "residential"
        },
        "factor": 3.5
      },
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
  "once": true,
  "requires_flag": "trash_gaze_ignored_or_thrill",
  "district": "residential",
  "unfaithful_penalty_when_partnered": true,
  "is_major": true,
  "publicSex": true,
  "conditions": {
    "all": [
      {
        "path": "history.flags.trash_gaze_ignored_or_thrill",
        "op": "eq",
        "value": true
      }
    ]
  },
  "text": "まだ人気のまばらな早朝の住宅街。パジャマの上に薄手のカーディガンを羽織り、ノーブラのままゴミ集積所へ。カラス除けネットを直した瞬間、出勤前の近所の男に腕を掴まれ、人通りのない路地裏の電柱の影へ。カーディガンの胸元をはだけさせられ、早朝の澄んだ空気の中で尖った乳頭とショーツの中をまさぐられる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "立ったままショーツをずらして奥まで受け入れる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "電柱に背中を押し当てられ、立ったままショーツをずらして奥まで受け入れる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
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
      "label": "濡れた秘唇を指で転がされて声を殺す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "朝の冷気に素肌を晒しながら、濡れた秘唇を指で転がされて声を殺す。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
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
      "label": "ゴミ袋を置いて逃げ帰る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "「誰かに見られます！」と小声で拒絶し、ゴミ袋を置いて逃げ帰る。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "冷たい電柱に背中を押しつけられ、朝の住宅街で下着をずらされて激しく貫かれた。出勤する人の靴音が遠くに聞こえる中、声を出せない極限の羞恥に愛液が溢れ、太ももを痙攣させて絶頂した。",
    "カーディガンの隙間から冷たい朝風が吹き込む中、露わになった胸と下腹をまさぐられた。朝露の匂いと男の熱い吐息に包まれ、路地の物陰で息を詰まらせて果てた。",
    "近所の視線が怖くて必死で男の手を払い、足早に自宅へ駆け戻った。玄関で息を切らしながら、自分の無防備さを恥じた。"
  ]
});

window.defineEvent({
  "id": "district_deprived_thin_walls",
  "title": "生活臭漂う公営団地・薄い壁越しに聞かせる嬌声",
  "age": [
    18,
    60
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "hetero_or_bi",
    "taboo_awakened",
    "low_morality"
  ],
  "weight": {
    "base": 24,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "deprived"
        },
        "factor": 3.5
      }
    ]
  },
  "once": true,
  "district": "deprived",
  "unfaithful_penalty_when_partnered": true,
  "text": "コンクリートの剥がれかけた公営団地や安アパート。隣の部屋のテレビの音や咳払いまで筒抜けの薄い壁。生活苦の重苦しさを吹き飛ばすように、湿った万年床の上で激しく求め合う。声を立てれば即座に隣人にバレてしまう極限の羞恥の中、肉と肉がぶつかり合う「ぬちぬち」とした生々しい水音だけが部屋に響き渡る……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "壁を揺らす激しいピストンに啼き果てる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "枕に顔を埋めて声を殺しながら、壁を揺らす激しいピストンに啼き果てる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -7
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -10000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "濡れそぼる肉穴に指を奥深くまでねじ込まれる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "隣の部屋の物音を聞きながら、濡れそぼる肉穴に指を奥深くまでねじ込まれる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -4
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
      "label": "慌てて身体を離して息を殺す",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "壁をドンドンと叩く音が響き、慌てて身体を離して息を殺す。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "古い団地の薄い壁のすぐそばで、万年床の上で激しく突かれた。壁の向こうに隣人の気配を感じながら、声を押し殺して枕を噛み、ぬちぬちと鳴る水音の中で狂ったように絶頂した。",
    "隣の部屋のテレビの音が聞こえる中、布団の上で愛撫された。指先が奥深くまで入るたび、恥ずかしさで下腹がきゅうきゅうと締めつけられ、愛液を吹き出して果てた。",
    "壁を叩く音に肝を冷やしてピストンを止めた。布団の中で二人で固まりながら、みじめさと可笑しさが混ざり合って小さく笑い合った。"
  ]
});

window.defineEvent({
  "id": "rare_funeral_cousin_taboo",
  "title": "親戚の通夜でいとこと・線香の匂いと喪服の裏",
  "age": [
    18,
    60
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "low_morality",
    "hetero_or_bi",
    "taboo_awakened"
  ],
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
  "once": true,
  "unfaithful_penalty_when_partnered": true,
  "is_major": true,
  "publicSex": true,
  "text": "親戚の通夜。線香の煙が白く漂う中、親族が寝静まった深夜の古い日本家屋。喪服の黒サテンと黒ストッキングに身を包んだまま、奥の物置部屋で幼い頃から知るいとこの男と二人きりになる。「お前、昔と違って……すげえ女の身体になったな」と低い掠れ声で囁かれ、背後から抱きすくめられる。喪服のスカートの上からふくよかな臀部と秘唇を力強くまさぐられ、死の陰で生々しく昂ぶる男の硬い肉塊が押し付けられる。不謹慎極まりない背徳感に下腹がきゅうと甘く疼き、ショーツがじっとりと愛液を滲ませる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "ストッキングを破かれて奥まで貫かれるのを許す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【一線を越える】喪服のスカートを捲られ、ストッキングを破かれて奥まで貫かれるのを許す。",
          "effects": [
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
      "label": "濡れた秘唇を指先で掻き回される快感に耐える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【手前で留まる】口を塞がれたまま、濡れた秘唇を指先で掻き回される快感に耐える。",
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
      "id": "choice_2",
      "label": "いとこの手を強く払いのけて広間へ戻る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【毅然と拒絶する】故人の前での過ちを恥じ、いとこの手を強く払いのけて広間へ戻る。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
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
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "reflection",
    "boundary"
  ],
  "diary": [
    "線香の灰の匂いの中、喪服のスカートをたくし上げられ、黒ストッキングの股布を引き裂かれた。濡れそぼる肉穴に、いとこの太い肉棒を一気に子宮口まで突き入れられ、口を塞がれながら声を殺して啼き狂った。死の気配の隣で繰り広げられた乱暴なピストンに、頭が真っ白になるほど絶頂を重ねた。",
    "挿入だけは拒んだものの、口を塞がれて畳の上に押し倒され、ショーツの中に手を差し入れられた。ぐちゅぐちゅと音を立てるクリトリスといびつな秘唇を弄り倒され、親戚の寝息が聞こえる中で太ももを痙攣させて果ててしまった。",
    "故人の前でこんな背徳に流されてはならないと心に強く念じ、いとこの腕を振りほどいた。涙を拭って線香のあがる広間へ戻ったとき、自分の身体の危うい疼きに震えた。"
  ]
});

window.defineEvent({
  "id": "district_rural_barn_straw",
  "title": "夜陰に沈む農村集落・古びた納屋の藁の上の背徳",
  "age": [
    18,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "low_morality",
    "hetero_or_bi",
    "taboo_awakened"
  ],
  "weight": {
    "base": 24,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "rural"
        },
        "factor": 3.5
      },
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
  "once": true,
  "district": "rural",
  "unfaithful_penalty_when_partnered": true,
  "publicSex": true,
  "text": "街灯もまばらな農村集落の夜。カエルの大合唱と生温かい夜風が吹き抜ける中、人目を忍んで潜り込んだ集落の外れの納屋。干し草と古い農機具の匂いが漂う暗がりで、集落の男に引き倒される。閉鎖的な村社会で誰にも言えない秘密の交わり。藁の上に広げられた柔肌を、土と汗に汚れた逞しい男の手がまさぐる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "集落の掟を破る激しいピストンに声を殺して啼き乱れる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "干し草の上に倒れ込み、集落の掟を破る激しいピストンに声を殺して啼き乱れる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 2
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
      "label": "藁の擦れる音に紛れて愛液を散らす",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "作業着の隙間から指をねじ込まれ、藁の擦れる音に紛れて愛液を散らす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 1
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
      "label": "慌てて納屋の裏口から闇へ逃げる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "軽トラのヘッドライトがあぜ道を照らし、慌てて納屋の裏口から闇へ逃げる。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "集落の外れの古い納屋で、藁の上に押し倒された。土の匂いに包まれながら逞しい男に奥深くを突き上げられ、閉鎖的な村社会のタブーを破る背徳感に啼き狂った。",
    "干し草の山に身を沈め、作業着の隙間から秘所をまさぐられた。ぐちゃぐちゃと鳴る愛液の音と夜風の音が混ざり合い、腰を浮かせて絶頂に達した。",
    "軽トラックの音が近づいてきて慌てて裏口から抜け出した。あぜ道の暗闇を駆けながら、太ももの間を伝う熱い汗を拭った。"
  ]
});

window.defineEvent({
  "id": "rare_outing_secret_quickie",
  "title": "外出中の衝動・見知らぬ男と密通し何食わぬ顔で戻る",
  "age": [
    18,
    65
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "low_morality",
    "hetero_or_bi",
    "taboo_awakened"
  ],
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
  "once": true,
  "unfaithful_penalty_when_partnered": true,
  "is_major": true,
  "publicSex": true,
  "text": "日常のレジャーの最中、抑えきれない性欲の疼きに衝動を狂わされ、人目を忍んで見知らぬ男と交わり、何事もなかったかのように日常へ戻る背徳の情事。",
  "choices": [
    {
      "id": "choice_0",
      "label": "背後から乱暴に突き上げられる快楽に声を殺して啼き乱れる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "壁に手をつき、背後から乱暴に突き上げられる快楽に声を殺して啼き乱れる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "涼しい顔で席へ戻る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "中出しされた熱い精液を股間に挟んだまま、涼しい顔で席へ戻る。",
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
    }
  ],
  "diary": [
    "トイレの個室の壁に手をつかされ、歓声を背景に知らない男に激しく犯された。肉と肉がぶつかるぬちぬちとした音を隠すように腰を打ち付け、熱い中出しを受け止めて絶頂した。",
    "股間に精液と愛液が混ざり合って垂れ落ちる感触を抱えながら、何食わぬ顔で席に戻った。下腹の奥がいつまでもジンジンと熱く痺れていた。"
  ],
  "variants": [
    {
      "subTitle": "スタジアムの身障者トイレ・歓声の裏の中出し",
      "text": "大歓声とメガホンの音が地鳴りのように響くスタジアム。ビールを買いに席を立った暗がりで、隣席にいた見知らぬ男に手首を掴まれ、身障者用トイレの個室へ引きずり込まれる。パンティを横にずらされ、立ったまま壁に手をつかされて、背後から荒々しく奥深くまで貫かれる。歓声に紛れて荒い喘ぎ声をあげ、膣内に熱い精液を注ぎ込まれた後、下着を直して何食わぬ顔で仲間の待つスタンド席へ戻る……。",
      "choices": [
        [
          "壁に手をつき、背後から乱暴に突き上げられる快楽に声を殺して啼き乱れる",
          {
            "happiness": 5,
            "secrecy": 8,
            "sexualEffects": {
              "desire": 8,
              "shyness": 7
            }
          }
        ],
        [
          "中出しされた熱い精液を股間に挟んだまま、涼しい顔でビールを持って席へ戻る",
          {
            "happiness": 4,
            "secrecy": 9,
            "independence": 3,
            "sexualEffects": {
              "desire": 7,
              "boundaryVoice": 4
            }
          }
        ]
      ],
      "diary": [
        "トイレの個室の壁に手をつかされ、スタジアムの歓声を背景に知らない男に激しく犯された。肉と肉がぶつかるぬちぬちとした音を隠すように腰を打ち付け、熱い中出しを受け止めて絶頂した。",
        "股間に精液と愛液が混ざり合って垂れ落ちる感触を抱えながら、ビールを買って何食わぬ顔で席に戻った。「遅かったね」と笑う友達の隣で、下腹の奥がいつまでもジンジンと痺れていた。"
      ]
    },
    {
      "subTitle": "静寂の美術館・仕切り壁の裏の沈黙セックス",
      "text": "足音すら響く美術館の静寂。死角となる展示パネルの裏で、隣にいた見知らぬ鑑賞者の男に壁に押し付けられ、スカートの中に冷たい手をねじ込まれる。立ったまま濡れそぼる肉穴に太い肉棒を根元まで沈められ、声を上げれば即座に見つかる極限の恐怖の中、口を塞がれて激しいピストンに啼き悶える。何事もなかったかのように身だしなみを整え、次の絵画の前へ戻る……。",
      "choices": [
        [
          "声を漏らさぬよう男の胸板に噛みつき、音のない激しいピストンに腰を震わせる",
          {
            "happiness": 5,
            "secrecy": 9,
            "sexualEffects": {
              "desire": 8,
              "shyness": 8
            }
          }
        ],
        [
          "絶頂の痺れを押し殺し、乱れたスカートを直して静かに展示室へ戻る",
          {
            "aesthetics": 3,
            "secrecy": 8,
            "independence": 3,
            "sexualEffects": {
              "selfKnowledge": 5
            }
          }
        ]
      ],
      "diary": [
        "展示パネル一枚隔てた向こうに学芸員がいる中、スカートをたくし上げられて音もなく奥深くまで貫かれた。声を上げられない恐怖と快感で涙が溢れ、愛液で男の太ももを濡らしながらイッた。",
        "乱暴に突き入れられた後の熱い余韻を噛み締めながら、何食わぬ顔で名画の前に戻った。絵画を見つめる私の下着が愛液でぐっしょりと濡れていることなど、誰も知らない。"
      ]
    },
    {
      "subTitle": "試着室のカーテンの向こう・四つん這いの逢瀬",
      "text": "混雑するアパレル店のフィッティングルーム。カーテン一枚隔てた通路を店員や客が行き交う中、試着室に滑り込んできた見知らぬ男に口を塞がれ、鏡の前で四つん這いにさせられる。スカートをめくられ、愛液でぐちゅぐちゅに濡れた穴を背後から激しく突き上げられる。カーテンが揺れる恐怖に下腹を痙攣させ、愛液で汚れた服を買い取り、涼しい顔でレジへ向かう……。",
      "choices": [
        [
          "鏡に映る自分の痴態を見つめながら、カーテンの揺れに怯えて激しく絶頂する",
          {
            "happiness": 5,
            "secrecy": 9,
            "sexualEffects": {
              "desire": 9,
              "shyness": 8
            }
          }
        ],
        [
          "中出しされた後、乱れた髪と服を整えて平然とレジで会計を済ませる",
          {
            "happiness": 4,
            "secrecy": 8,
            "money": -3,
            "sexualEffects": {
              "desire": 7,
              "boundaryVoice": 4
            }
          }
        ]
      ],
      "diary": [
        "試着室の狭い個室で、カーテン越しに店員の声を聞きながら、見知らぬ男に後ろから奥深くまで突き上げられた。鏡に映る乱れた自分の顔と濡れそぼる肉穴の淫靡さに、声も出せず絶頂した。",
        "愛液と精液で汚れてしまった試着用のスカートをそのまま買い取った。レジで店員に笑顔を向けながら、下腹の奥底に溜まった男の熱い精液の重みを噛み締めた。"
      ]
    },
    {
      "subTitle": "映画館の暗闇・スクリーンの爆音と跨がる肉体",
      "text": "照明が落ちた映画館の最後列シート。アクション映画の爆音と地鳴りのような重低音に紛れ、隣の見知らぬ男が太ももをまさぐり、ショーツをずらす。怒張した肉棒の上に跨がらされ、スクリーンを見つめたまま、音を立てずに腰を上下させて子宮口まで飲み干す。中出しされた重い熱を抱えたまま、何食わぬ顔でエンドロールを眺める……。",
      "choices": [
        [
          "スクリーンの爆音に合わせて腰を激しく打ち付け、暗闇の中で男の首にしがみつく",
          {
            "happiness": 5,
            "secrecy": 8,
            "sexualEffects": {
              "desire": 8,
              "intimacyNeed": 6
            }
          }
        ],
        [
          "射精された熱い精液を膣内に満たしたまま、何事もなかったように席に座り直す",
          {
            "happiness": 4,
            "secrecy": 9,
            "selfUnderstanding": 3,
            "sexualEffects": {
              "desire": 7,
              "selfKnowledge": 4
            }
          }
        ]
      ],
      "diary": [
        "映画の爆音にかき消されながら、暗闇の座席で見知らぬ男の上に跨がって腰を振った。誰にも見えない暗がりで、奥深くを太い肉棒で掻き回される背徳感に身悶え、激しく果てた。",
        "エンドロールの明かりが灯る中、膣内に注ぎ込まれた熱い精液が下着へと染み出すのを感じた。隣の男と視線も交わさず立ち上がり、何食わぬ顔で劇場を後にした。"
      ]
    },
    {
      "subTitle": "宴会の喧騒を離れ・旅館の非常階段で乱れる浴衣",
      "text": "旅館の大宴会、または修学旅行の消灯後。トイレへ行くふりをして抜け出した薄暗い非常階段の踊り場で、待ち伏せていた同僚（または見知らぬ宿泊客）に抱きすくめられる。浴衣の帯を解かれ、壁に押し付けられて立ったまま激しく貫かれる。愛液と汗にまみれた下着をポケットに突っ込み、浴衣の裾を正して何食わぬ顔で仲間たちの待つ部屋へ戻る……。",
      "choices": [
        [
          "浴衣をはだけさせ、冷たい壁に押し付けられたまま太ももを開いて奥まで受け入れる",
          {
            "happiness": 5,
            "secrecy": 8,
            "sexualEffects": {
              "desire": 8,
              "shyness": 7
            }
          }
        ],
        [
          "ノーパンのまま浴衣の帯を締め直し、何食わぬ顔で宴席の仲間たちの元へ戻る",
          {
            "happiness": 4,
            "secrecy": 9,
            "social": 2,
            "sexualEffects": {
              "desire": 7,
              "boundaryVoice": 5
            }
          }
        ]
      ],
      "diary": [
        "宴会場から漏れる笑い声を聞きながら、非常階段の暗がりで浴衣をめくられて犯された。冷たいコンクリートの壁と男の熱いピストンの対比に、頭が真っ白になるほど啼き乱れた。",
        "愛液で濡れたショーツをポケットに隠し、ノーパンの浴衣姿で平然と宴席に戻った。「どこ行ってたの？」と聞かれ、作り笑いで誤魔化しながら、下腹の奥の疼きに耐えていた。"
      ]
    }
  ]
});

window.defineEvent({
  "id": "underground_adult_video_gang",
  "title": "レンズの前での狂乱・複数男優による肉体調教",
  "age": [
    19,
    42
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "underground_eligible",
    "hetero_or_bi"
  ],
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
  "once": true,
  "unfaithful_penalty_when_partnered": true,
  "is_major": true,
  "text": "高額な出演料を提示され承諾したハード企画。薄暗いスタジオのマットの上に手足を広げられ、屈強な複数人の男優たちに取り囲まれる。口、秘所、指先……あらゆる粘膜を同時に貪られ、前後から休みなく肉棒を突き込まれる。肉と肉がぶつかり合う凄まじい轟音の中、自我が快楽で蕩け、何発もの精液を全身と肉穴の奥に注ぎ込まれて痙攣する……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "快楽の獣に堕ちる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【何本もの肉棒を貪欲に飲み干す】入れ替わり立ち替わりのピストンに啼き狂い、快楽の獣に堕ちる。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 250000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -10
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "膣内に注がれた白濁液を晒して絶頂の余韻に浸る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【精液まみれの身体でカメラに笑顔を向ける】顔や胸元、膣内に注がれた白濁液を晒して絶頂の余韻に浸る。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 220000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -9
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy"
  ],
  "diary": [
    "複数の男優に全身の穴という穴を同時に貫かれた。息つく暇もなく肉棒が入れ替わり立ち替わり肉腔を掻き回し、濁流のような精液を子宮口に叩き込まれて、白目を剥いて狂ったように絶頂を繰り返した。",
    "全身を白濁した精液でベトベトに汚されたまま、カメラに向かってピースサインを作らされた。人間としての尊厳を脱ぎ捨てた圧倒的な快感に、頭がぼんやりと痺れていた。"
  ]
});

window.defineEvent({
  "id": "district_industrial_container_shadow",
  "title": "コンビナートの夜景・資材置き場のコンテナの死角",
  "age": [
    19,
    55
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "low_morality",
    "hetero_or_bi",
    "taboo_awakened"
  ],
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "industrial"
        },
        "factor": 3.5
      },
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
  "once": true,
  "district": "industrial",
  "unfaithful_penalty_when_partnered": true,
  "publicSex": true,
  "text": "海沿いに広がるコンビナートのプラント群。パイプが幾重にも交錯し、蒸気が白く吹き出す夜。積み上げられた巨大な錆びたコンテナの死角で、夜勤明けの作業着姿の男に抱きすくめられる。作業着のジッパーを下ろされ、油と鉄粉の匂いの中で剥き出しの素肌がぶつかり合う……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "背後から無慈悲なピストンを受け止める",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "冷たい鉄のコンテナに手をつき、背後から無慈悲なピストンを受け止める。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -7
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
      "label": "立ったまま足を開かされる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "ヘルメットを脱ぎ捨てた男に荒々しく唇を奪われ、立ったまま足を開かされる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
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
      "label": "作業服を整えて作業通路へ駆け出す",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "フォークリフトの警告音が近づき、作業服を整えて作業通路へ駆け出す。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "冷たい鉄のコンテナの壁に額を押しつけられ、立ったまま後ろから突かれた。機械油と汗の匂いが混ざり合う中、激しい水音を響かせて貫かれ、頭が真っ白になるほど絶頂した。",
    "作業服を脱ぎ散らかし、コンテナの影で身体を重ねた。夜勤明けの男の獰猛な欲望を受け止め、蒸気の吹き出す音に紛れて啼き悶えた。",
    "フォークリフトのライトが見えて慌てて身を離した。乱れた髪を直しながら、工場の騒音の中へと足早に戻った。"
  ]
});

window.defineEvent({
  "id": "district_industrial_truck_cabin",
  "title": "重油の匂い漂う工業地域・大型トラックの寝台カーテン",
  "age": [
    19,
    55
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "low_morality",
    "hetero_or_bi",
    "taboo_awakened"
  ],
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "industrial"
        },
        "factor": 3.5
      },
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
  "once": true,
  "district": "industrial",
  "unfaithful_penalty_when_partnered": true,
  "is_major": true,
  "publicSex": true,
  "text": "巨大な煙突から炎が吹き上がる工業地域の深夜。道路脇に並ぶ長距離大型トラック。運転席のステップを登り、キャビン奥のカーテンで仕切られた薄暗い寝台へ。エンジンの重低音と振動が身体の奥へと伝わる中、筋骨隆々なドライバーの男に押し倒される。工業地帯の荒々しい男の臭気と太い肉棒に、下腹が抗いようもなく濡れそぼる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "狭い寝台で荒々しく子宮口まで突き上げられる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "エンジンの振動に身を任せ、狭い寝台で荒々しく子宮口まで突き上げられる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
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
      "id": "choice_1",
      "label": "指先でぐちゃぐちゃに掻き回される",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "カーテン一枚隔てた夜景を見下ろしながら、指先でぐちゃぐちゃに掻き回される。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
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
      "label": "男と肩を叩き合ってキャビンを降りる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "無線の声がスピーカーから鳴り響き、男と肩を叩き合ってキャビンを降りる。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "トラックのキャビンの寝台で、アイドリングの振動に揺られながら激しく犯された。逞しい男の腕に組み敷かれ、太い肉棒で子宮口を何度も叩かれて、シーツを噛んで啼き狂った。",
    "窓のカーテンの隙間からコンビナートの炎を見つめながら、狭い寝台で弄られた。重油の匂いと男の汗にまみれ、身体の芯から痺れるような快感に溺れた。",
    "無線機のノイズに我に返り、服を整えてステップを降りた。工業地帯の重たい潮風を浴びながら、下腹の疼きに息を漏らした。"
  ]
});

window.defineEvent({
  "id": "district_downtown_back_alley_hookup",
  "title": "雑居ビルの隙間・飲食街の非常階段での情事",
  "age": [
    20,
    50
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "low_morality",
    "adult_drinking",
    "hetero_or_bi",
    "taboo_awakened"
  ],
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "entertainment"
        },
        "factor": 3.5
      },
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
  "once": true,
  "district": "downtown",
  "unfaithful_penalty_when_partnered": true,
  "is_major": true,
  "alcohol": true,
  "publicSex": true,
  "text": "焼き鳥や中華の煙が漂う飲食街の裏路地。雑居ビルの隙間にある薄暗い非常階段の踊り場。酒気を帯びた男に壁際へ追い詰められ、スカートの中に冷たい夜風と熱い指先が侵入する。下を行き交う酔客たちの笑い声が聞こえるすぐ上で、声を殺しての逢瀬……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "雑踏の喧騒の裏で奥深くまで貫かれる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "手すりを掴んで前屈みになり、雑踏の喧騒の裏で奥深くまで貫かれる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -9
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
      "label": "濡れそぼる秘唇を弄り倒されて膝を震わせる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "口を手で塞がれながら、濡れそぼる秘唇を弄り倒されて膝を震わせる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -6
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
      "label": "男の腕をすり抜ける",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "ゴミ回収のトラックが路地に入ってきて我に返り、男の腕をすり抜ける。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            },
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "飲食街の裏の非常階段で手すりを掴まされ、背後から突き入れられた。すぐ下を歩く人々の声が聞こえる中、口を塞がれて激しく突かれ、頭が真っ白になるほどの背徳の絶頂に身悶えた。",
    "階段の踊り場の暗がりでスカートをまくり上げられ、指先でぐちゃぐちゃに弄られた。夜風の冷たさと粘膜の熱さの対比に、声にならない嬌声を漏らして果てた。",
    "路地裏のライトの光に驚き、身をかわして逃げ出した。夜のネオン街の人混みに紛れながら、胸の高鳴りがいつまでも止まらなかった。"
  ]
});

window.defineEvent({
  "id": "district_downtown_last_train_hotel",
  "title": "ネオン煌めく繁華街・終電後の雑踏と朝までの密室",
  "age": [
    20,
    55
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "adult_drinking",
    "hetero_or_bi",
    "taboo_awakened",
    "low_morality"
  ],
  "weight": {
    "base": 24,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "entertainment"
        },
        "factor": 3.5
      }
    ]
  },
  "once": true,
  "district": "downtown",
  "unfaithful_penalty_when_partnered": true,
  "alcohol": true,
  "text": "終電が去った後もギラギラとしたネオンと重低音が響き渡る繁華街。酒の熱気で火照った身体を持て余し、雑踏の中を行き交う。バーで意気投合した男、あるいは声をかけてきた男に手を引かれ、雑居ビルの個室ホテルへ。深夜の街の狂乱に背中を押されるように、シーツの上で貪り合う……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "朝陽がネオンを消すまで狂ったように腰を振る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "名前も聞かぬまま跨がり、朝陽がネオンを消すまで狂ったように腰を振る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "熱い湯気の中で激しく突かれ啼き乱れる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "シャワー室で壁に手をつかされ、熱い湯気の中で激しく突かれ啼き乱れる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -6
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -10000
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
      "id": "choice_2",
      "label": "タクシー代をもらって部屋を出る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "部屋に入った途端に酔いが冷め、タクシー代をもらって部屋を出る。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 40000
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
            },
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "繁華街の匿名性の闇の中で、名前も知らない男と一晩中貪り合った。窓の外のネオンサインが点滅する部屋で、奥深くを突き上げられる激しい水音に酔い痴れて、何度も愛液を散らして果てた。",
    "ホテルの浴室の壁に手をつかされ、立ちバックで乱暴に突かれた。シャワーの水音と肉がぶつかる音が混ざり合い、熱い中出しを受け止めて腰を砕かれ啼き狂った。",
    "ホテルのドアが閉まった瞬間に我に返り、相手を宥めて部屋を出た。明け方の繁華街の冷たい空気が、火照った肌を心地よく冷ましてくれた。"
  ]
});

window.defineEvent({
  "id": "district_commercial_underground_parking",
  "title": "商業ビルの地下駐車場・スモークガラス越しの密会",
  "age": [
    20,
    60
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "low_morality",
    "employed",
    "hetero_or_bi",
    "taboo_awakened"
  ],
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "commercial"
        },
        "factor": 3.5
      },
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
  "once": true,
  "district": "commercial",
  "unfaithful_penalty_when_partnered": true,
  "is_major": true,
  "publicSex": true,
  "text": "大型商業施設の巨大な地下駐車場。タイヤの軋む音と薄暗い蛍光灯の下、待ち合わせた車内へ滑り込む。スモークガラスで遮断された密室空間で、リクライニングシートを倒される。買い物客がすぐ外を歩く気配を感じながら、服をはだけさせられて激しいピストンを受け止める……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "天井に頭をぶつけそうになりながら貪り合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "車のシートの上で跨がり、天井に頭をぶつけそうになりながら貪り合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -6
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
      "label": "車の揺れを外に悟られぬよう必死で声を殺す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "助手席で太ももを広げられ、車の揺れを外に悟られぬよう必死で声を殺す。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
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
      "label": "大急ぎでシートを起こして身だしなみを直す",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "警備員の巡回ライトが車内をかすめ、大急ぎでシートを起こして身だしなみを直す。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "地下駐車場の車内でシートを倒し、男の上に跨がった。車のサスペンションがきしむ音に怯えながら、奥深くまで硬いモノを飲み込み、愛液でシートを汚しながら絶頂した。",
    "スモークガラス一枚隔てた外を歩く買い物客の足音を聞きながら、助手席で貫かれた。声を出せないもどかしさと背徳のスリルに、爪先を丸めて何度もイッた。",
    "警備員が近づいてくる気配に大急ぎで服を着直した。何事もなかったかのように車を出したものの、下腹の奥はいつまでもジンジンと痺れていた。"
  ]
});

window.defineEvent({
  "id": "district_rural_shrine_festival",
  "title": "農村の鎮守の森・秋祭りの太鼓と木立の奥の情事",
  "age": [
    20,
    60
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "low_morality",
    "adult_drinking",
    "hetero_or_bi",
    "taboo_awakened"
  ],
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "rural"
        },
        "factor": 3.5
      },
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
  "once": true,
  "district": "rural",
  "unfaithful_penalty_when_partnered": true,
  "alcohol": true,
  "publicSex": true,
  "text": "年に一度の村の秋祭り。神社の境内に響き渡る神楽の太鼓とお囃子、提灯の赤い光。酒を酌み交わす大人たちの輪をこっそり抜け出し、社務所の裏の深い杉木立へ。祭りの高揚感で充血した男に浴衣の帯を解かれ、冷たい大木の幹に手をつかされる。太鼓の地鳴りのような響きにかき消されながら、濡れそぼる肉穴に太い熱塊を突き込まれる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "太鼓の爆音に合わせて奥深くまで中出しされる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "大木の幹に額を擦りつけ、太鼓の爆音に合わせて奥深くまで中出しされる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -7
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -5
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "男の熱い舌で秘唇を貪り尽くされる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "浴衣をはだけさせて木陰に座り込み、男の熱い舌で秘唇を貪り尽くされる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
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
      "id": "choice_2",
      "label": "涼しい顔で境内の屋台へ戻る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "子供たちの駆けてくる足音に帯を締め直し、涼しい顔で境内の屋台へ戻る。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
            },
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "鎮守の森の神木の幹に手をつかされ、太鼓の地鳴りのような音に合わせて後ろから激しく突かれた。熱い精液を子宮口に注ぎ込まれ、祭りの熱狂の中で自我が溶け落ちた。",
    "社務所の裏の暗がりで浴衣の襟元を緩められ、熱い舌で貪られた。杉の葉の匂いと男の汗の匂いに包まれ、声を殺しながら太ももを痙攣させて果てた。",
    "提灯を持った子供たちの声が聞こえ、慌てて帯を結び直した。何食わぬ顔で祭りの輪に戻ったものの、下腹の奥はいつまでも熱く脈打っていた。"
  ]
});

window.defineEvent({
  "id": "district_residential_garden_neighbor",
  "title": "閑静な住宅街・生垣の死角と隣家の主",
  "age": [
    20,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "hetero_or_bi",
    "taboo_awakened",
    "low_morality"
  ],
  "weight": {
    "base": 22,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "residential"
        },
        "factor": 3.5
      }
    ]
  },
  "once": true,
  "district": "residential",
  "unfaithful_penalty_when_partnered": true,
  "text": "閑静な住宅街の昼下がり。庭先やベランダで洗濯物を干していると、薄手の部屋着越しに透ける胸元や腰つきに、生垣の向こうから熱い視線を感じる。隣家の妻子ある男性。回覧板を口実に敷地の隅、物置と生垣に挟まれた死角に引き込まれ、家庭的な昼の日常の裏で、スカートをたくし上げられて激しく求められる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "背後から音もなく奥深くまで貫かれる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "生垣に手をつき、背後から音もなく奥深くまで貫かれる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
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
      "label": "指先で愛液を掻き回される快感に耐える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "洗濯物の影で口を塞がれ、指先で愛液を掻き回される快感に耐える。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
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
      "label": "手を払って家の中へ駆け込む",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "近所の人の足音にハッと我に返り、手を払って家の中へ駆け込む。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "生垣の青葉の匂いの中、隣の旦那さんにスカートをめくられ、立ったまま後ろから貫かれた。誰かが通りかかるかもしれない恐怖に震えながら、音もなく奥深くを掻き回される熱い快感に、声を殺して絶頂した。",
    "風に揺れるシーツの陰で抱きすくめられ、下着の中に手を差し入れられた。隣人の指先に濡れた肉芽を擦り上げられ、昼下がりの住宅街で膝をガクガクと震わせて果ててしまった。",
    "ご近所さんの足音に我に返り、慌てて腕を振りほどいた。家に入って鍵を閉めた後も、下腹の奥が熱く疼いて収まらなかった。"
  ]
});

window.defineEvent({
  "id": "encounter_bar_stranger",
  "title": "薄暗いバーのカウンター、触れ合う膝と深夜のホテル",
  "age": [
    20,
    65
  ],
  "trigger": "normal",
  "classification": "random",
  "content_rating": "general",
  "presets": [
    "adult_drinking",
    "hetero_or_bi"
  ],
  "weight": 15,
  "is_encounter": true,
  "alcohol": true,
  "actors": {
    "stranger": {
      "source": "random_adult",
      "required": false
    }
  },
  "text": "仕事帰りや休日の夜、ふらりと入った薄暗い隠れ家バー。隣の席に居合わせた人とカクテルを傾けながら会話が弾む。アルコールで火照った身体に、カウンターの下で触れ合う相手の膝の感触。目が合うたびに、今夜限りの情熱を求める視線が突き刺さる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "朝まで貪るように愛し合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "バーを出てそのまま夜のホテルへとなだれ込み、朝まで貪るように愛し合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "sexual_desire_fluctuation",
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
      "label": "笑顔で手を振って一人タクシーに乗る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "グラスを空けて大人の余韻を楽しみ、笑顔で手を振って一人タクシーに乗る。",
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
    "meeting_bar_encounter",
    "meeting_bar_encounter"
  ],
  "diary": [
    "見知らぬ相手とホテルのベッドへ倒れ込み、名前も素性も知らぬまま肌を貪り合った。しがらみのない純粋な肉欲に溺れ、奥まで激しく貫かれて何度も果てた。",
    "バーでの行きずりの出会い。触れ合った膝の温もりと、大人の甘い駆け引きに胸をときめかせた心地よい夜だった。"
  ]
});

window.defineEvent({
  "id": "rare_travel_stranger_or_gang",
  "title": "旅先の一夜・見知らぬ男たちとの狂乱",
  "age": [
    20,
    65
  ],
  "trigger": "normal",
  "classification": "random",
  "content_rating": "general",
  "presets": [
    "adult_drinking",
    "hetero_or_bi",
    "taboo_awakened",
    "low_morality"
  ],
  "weight": {
    "base": 18,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "once": true,
  "unfaithful_penalty_when_partnered": true,
  "alcohol": true,
  "actors": {
    "stranger": {
      "source": "random_adult",
      "required": false
    }
  },
  "text": "旅先の温泉街。地酒の酔いと旅の解放感、そして下腹の奥で疼く激しい情欲。浴衣の襟元を緩めて夜風を浴びていたところ、声をかけてきた旅の男たち。普段の自分なら絶対に断る下品で獰猛な眼差しに、なぜか秘唇が熱く濡れそぼり、抗えない衝動に流されるままホテルの別室へと足を踏み入れてしまった……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "朝まで狂ったように腰を振る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【二人きりで貪り合う】名前も知らぬ男の太い肉棒に跨がり、朝まで狂ったように腰を振る。",
          "effects": [
            {
              "path": "state.mood",
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
      "label": "犯される快楽に堕ちる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【複数人の男たちに身体を差し出す】入れ替わり立ち替わり前後を貫かれ、犯される快楽に堕ちる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
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
      "label": "ドアを開けて自室へ駆け戻る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【寸前で逃げ出す】男たちの異様な熱気に恐怖を覚え、ドアを開けて自室へ駆け戻る。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "旅先という匿名の闇の中で、名前も知らない男と獣のように交わった。ベッドの上で跨がり、濡れそぼる肉穴で硬い肉塊を根元まで飲み込んで腰を打ち付けた。奥深くに注ぎ込まれる熱い精液の感触に狂乱し、シーツを愛液で汚しながら朝を迎えた。",
    "複数の男たちに手足を広げられ、浴衣を裂かれて無慈悲に犯され尽くした。一人の肉棒を口で咥えさせられながら、後ろから別の男に肉穴を乱暴に突かれ、ぐちゃぐちゃと肉がぶつかる水音の中で自我が吹き飛ぶほど激しく中出しされた。",
    "男たちの獲物を見るような獰猛な眼差しに我に返り、必死で部屋のドアを蹴破るようにして逃げ出した。自室の鍵を閉めて布団に潜り込んだ後も、下腹が冷たく痙攣していた。"
  ]
});

window.defineEvent({
  "id": "encounter_neighbor",
  "title": "薄い壁の向こう、深夜の訪問と隣人の熱い体温",
  "age": [
    20,
    70
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "hetero_or_bi"
  ],
  "weight": {
    "base": 15,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "is_encounter": true,
  "text": "マンションの自室で過ごす夜。インターホンが鳴り、ドアを開けると少し酒気を帯びた隣人が立っていた。引越しの挨拶や生活音の相談から始まったはずの会話。玄関先で不意に距離が縮まり、生活感の漂う空間に濃密な淫靡さが立ち込める。",
  "choices": [
    {
      "id": "choice_0",
      "label": "薄い壁に声を押し殺しながら汗だくになって交わる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "隣人を部屋へ招き入れ、薄い壁に声を押し殺しながら汗だくになって交わる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "sexual_desire_fluctuation",
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
      "label": "名残惜しさを感じつつも鍵を閉める",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "玄関先で用件だけを聞き終え、名残惜しさを感じつつも鍵を閉める。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
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
  "outcomes": [
    "meeting_neighbor",
    "none"
  ],
  "diary": [
    "隣の部屋の人を招き入れ、床の上に倒れ込んで身体を重ねた。壁一枚向こうはいつもの日常なのに、部屋の中では獣のように求め合い、愛液を散らして絶頂した。",
    "隣人との境界線が揺らぎかけた夜。ドアを閉めた後も、相手の体温と息遣いが玄関に残っているようで下腹が疼いた。"
  ]
});

window.defineEvent({
  "id": "encounter_partner_sibling",
  "title": "{partner}の留守中、義理のきょうだいとの背信の火遊び",
  "age": [
    22,
    50
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "hetero_or_bi"
  ],
  "weight": 12,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "{partner}が仕事や出張で家を空けている夜。忘れ物を届けに訪ねてきた{partner}のきょうだい。リビングでお茶を飲むうち、{partner}によく似た面影と声に不意に胸がざわめく。肩が触れ合い、気まずい沈黙の中で見つめ合ってしまう。",
  "choices": [
    {
      "id": "choice_0",
      "label": "{partner}のベッドの上で身体を重ねる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "罪悪感に震えながらも誘惑に屈し、{partner}のベッドの上で身体を重ねる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 4
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "encounter_partner_sibling_dinner_risk",
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
      "label": "お茶を濁して早々に玄関で見送る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "家庭を壊す恐怖から強く自制し、お茶を濁して早々に玄関で見送る。",
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
    }
  ],
  "outcomes": [
    "meeting_partner_sibling",
    "none"
  ],
  "diary": [
    "{partner}のベッドの上で、そのきょうだいに抱かれた。{partner}と同じ匂いがするのに違う激しい愛撫に、狂おしいほどの背徳の快楽を貪ってしまった。",
    "一線を越えそうになった危うい夜。{partner}への罪悪感と、身体の疼きに苛まれながら一人で夜を明かした。"
  ]
});

window.defineEvent({
  "id": "encounter_partner_sibling_dinner_risk",
  "title": "家族団らんの食卓、テーブルの下の秘密",
  "age": [
    22,
    52
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "hetero_or_bi"
  ],
  "weight": 13,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "親族が集まる食事会。目の前には笑顔で料理を運ぶ愛する{partner}がいる。しかし、垂れ下がったテーブルクロスの下、隣に座る義理のきょうだいの素足が、こちらのタイツの隙間から太ももへと這い上がってくる。指先が内腿を優しくなぞり、濡れそぼる秘唇の真上を足指でぐにゅりと押し当てられた瞬間、心臓が早鐘のように鳴り、下腹から蜜が溢れ出す……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "テーブルの下で秘唇を足指に擦りつけ啼き声を呑む",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "{partner}と会話を交わしながら、テーブルの下で秘唇を足指に擦りつけ啼き声を呑む。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "洗面所に駆け込んで下着の湿り気を確かめる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "恐怖と罪悪感に耐えかねて席を立ち、洗面所に駆け込んで下着の湿り気を確かめる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "毅然と睨みつけて関係を拒絶する",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "テーブルの下できょうだいの足を強く踏みつけ、毅然と睨みつけて関係を拒絶する。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
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
    }
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "boundary"
  ],
  "diary": [
    "{partner}の目の前で、そのきょうだいの足指に秘所をまさぐられた。バレる恐怖で全身が粟立つ中、下腹がきゅうきゅうと痙攣して愛液が止まらなくなり、下唇を血が出るほど噛んで耐えた。",
    "耐えきれずトイレに逃げ込み、ショーツを下ろすと、すでに愛液でびっしょりと濡れていた。家族を裏切る背徳の甘さに、震える指で胸を押さえるしかなかった。",
    "これ以上の背信は破滅を招くと心に決め、きょうだいの誘惑を厳しく拒絶した。食事会を終えて{partner}と帰る道、安堵の涙が静かに溢れた。"
  ]
});

window.defineEvent({
  "id": "district_commercial_office_stairwell",
  "title": "整然とした商業地域・オフィスビルの非常階段とスーツの裏",
  "age": [
    22,
    58
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "low_morality",
    "employed",
    "hetero_or_bi",
    "taboo_awakened"
  ],
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "commercial"
        },
        "factor": 3.5
      },
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
  "once": true,
  "district": "commercial",
  "unfaithful_penalty_when_partnered": true,
  "publicSex": true,
  "actors": {
    "coworker": {
      "source": "coworker",
      "required": false
    }
  },
  "text": "高層オフィスビルが立ち並ぶ商業地域。昼休みの喧騒や残業時間、誰も使わない重い防火扉の奥の非常階段。職場の同僚や取引先の男に引きずり込まれ、タイトスカートをまくり上げられる。黒ストッキングを引き裂かれ、コンクリートの冷たさと男の逞しい肉塊の熱情に挟まれて喘ぎ悶える……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "スーツの乱れも構わず奥深くまで貫かれる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "コンクリートの壁に手をつき、スーツの乱れも構わず奥深くまで貫かれる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -7
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ストッキングの上から濡れた割れ目をまさぐられる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "踊り場の段差に座らされ、ストッキングの上から濡れた割れ目をまさぐられる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "服を直して非常扉からフロアへ戻る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "誰かが階段を降りてくる靴音に息を呑み、服を直して非常扉からフロアへ戻る。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
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
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "オフィスビルの非常階段で、破かれたストッキングの隙間から太い肉棒を一気に突き入れられた。ビジネス街の整然とした日常の裏で繰り広げられた乱暴なピストンに、声を殺して絶頂を重ねた。",
    "階段のステップに腰掛けさせられ、スーツのスカートの下をまさぐられた。濡れた愛液がストッキングに染み出す恥ずかしさに耐えながら、腰を浮かせて果てた。",
    "上階の扉が開く音に心臓が凍りつき、急いで乱れた髪と服を整えた。何食わぬ顔でデスクに戻った後も、太ももの内側が甘く熱を帯びていた。"
  ]
});

window.defineEvent({
  "id": "district_wealthy_private_trainer",
  "title": "優雅な高所得地域・プライベートジムの完全個室",
  "age": [
    22,
    62
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "hetero_or_bi",
    "taboo_awakened",
    "low_morality"
  ],
  "weight": {
    "base": 22,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "wealthy"
        },
        "factor": 3.5
      }
    ]
  },
  "once": true,
  "district": "wealthy",
  "unfaithful_penalty_when_partnered": true,
  "text": "緑豊かで閑静な高級住宅街。完全会員制のパーソナルトレーニングジムの防音個室。裕福な暮らしの裏で満たされない欲求を抱える中、若く精悍な専属トレーナーと二人きりになる。ストレッチの補助という名目で、汗ばんだウェア越しに太ももの付け根を密着させられ、耳元に荒い息を吹きかけられる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "鍛え上げられた逞しい肉体で貫かれる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "ストレッチマットの上に押し倒され、鍛え上げられた逞しい肉体で貫かれる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.grooming",
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
    },
    {
      "id": "choice_1",
      "label": "鏡張りの壁の前で濡れた秘所をまさぐられる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "トレーニングウェアを脱がされ、鏡張りの壁の前で濡れた秘所をまさぐられる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 2
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
      "label": "冷たいミネラルウォーターを飲む",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "「今日はここまでにしましょう」と息を整え、冷たいミネラルウォーターを飲む。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "個室ジムのマットの上で、若いトレーナーの逞しい肉体に組み敷かれた。鍛え上げられた太い肉棒で奥深くまで突き上げられ、鏡に映る乱れた自分の姿を見つめながら狂ったように果てた。",
    "鏡張りの壁に手をつかされ、ウェアをめくられて秘所をまさぐられた。指先が奥へと沈むたび、ガラス越しに赤く染まった自分の顔が見えて、恥ずかしさで腰が砕けた。",
    "トレーナーの熱い視線を受け流し、優雅にセッションを終えた。高級住宅街の並木道を歩きながら、下腹の奥の疼きを冷ますように深呼吸した。"
  ]
});

window.defineEvent({
  "id": "district_wealthy_chauffeur_limousine",
  "title": "タワーマンションの地下・お抱え運転手と後部座席のカーテン",
  "age": [
    24,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "hetero_or_bi",
    "taboo_awakened",
    "low_morality"
  ],
  "weight": {
    "base": 20,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "wealthy"
        },
        "factor": 3.5
      }
    ]
  },
  "once": true,
  "district": "wealthy",
  "unfaithful_penalty_when_partnered": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "富裕層が暮らす高級タワーマンション。{partner}が出張中の静かな午後、地下の車寄せに待機する専用車。スモークガラスと遮光カーテンで外の世界を閉ざした後部座席。無口で忠実なお抱え運転手との禁断の距離。革シートの上でドレスの裾を捲り上げさせ、命令するように身体を委ねる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "主従を逆転させて奥深くまで貪らせる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "革シートの上で運転手の首に腕を絡ませ、主従を逆転させて奥深くまで貪らせる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -9
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": 30000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "従順な指先で愛液を掻き回させる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "後部座席で静かにドレスをはだけさせ、従順な指先で愛液を掻き回させる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -6
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "咳払いをして発車を命じる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "車内のミラー越しに目が合った瞬間に我に返り、咳払いをして発車を命じる。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "高級車の後部座席の革シートの上で、お抱え運転手に身体を預けた。忠実な男の逞しい肉棒を奥深くまで飲み込み、地下駐車場の静寂の中で密やかに啼き乱れた。",
    "カーテンを閉め切った車内でドレスを捲り上げられ、運転手の指で愛撫された。主従の境界線を越える背徳の快感に、シーツならぬ高級レザーに爪を立てて絶頂した。",
    "バックミラー越しの視線にハッと我に返り、身だしなみを整えた。優雅なマダムの仮面を被り直しながら、濡れた下着の感触に胸を締めつけられた。"
  ]
});

window.defineEvent({
  "id": "encounter_parent_friend",
  "title": "送迎の帰り道、コインパーキングの車内で",
  "age": [
    28,
    55
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "has_children",
    "hetero_or_bi"
  ],
  "weight": {
    "base": 13,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "is_encounter": true,
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
    }
  },
  "text": "子供の習い事や学校行事の帰り道。子供の友達の親（パパ友・ママ友）と偶然二人になり、車で送ってもらうことに。人目のつかないコインパーキングに車が停まった瞬間、家庭の悩みを聞いてくれていた相手の手が、そっとこちらの太ももに重なった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "服を乱して貪り合うように肌を重ねる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "スモークガラスの車内でシートを倒し、服を乱して貪り合うように肌を重ねる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "encounter_parent_friend_secret_hotel",
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
      "label": "優しく手を払って車を降りる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "親としての分別を保ち、優しく手を払って車を降りる。",
          "effects": [
            {
              "path": "skill.morality",
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
  ],
  "outcomes": [
    "meeting_parent_friend",
    "none"
  ],
  "diary": [
    "子供たちの親同士という立場を忘れ、車内で夢中になって求め合った。狭い座席で下着をずらされ、奥深く突き上げられた快感は、家庭の日常を吹き飛ばすほど強烈だった。",
    "あやうく道を踏み外しかけた瞬間。家庭を持つ身としての重みと、女として求められた甘美な誘惑に胸が激しく乱れた。"
  ]
});

window.defineEvent({
  "id": "encounter_parent_friend_secret_hotel",
  "title": "学校行事の合間、隣町のラブホテルでの逢瀬",
  "age": [
    28,
    55
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "general",
  "presets": [
    "has_children",
    "hetero_or_bi"
  ],
  "weight": {
    "base": 13,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "is_encounter": true,
  "is_major": true,
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
    }
  },
  "text": "子供の学校行事が終わった昼下がり。「少しだけ話せませんか」と誘われ、隣町の目立たないホテル街へ。部屋のドアがロックされた瞬間、お互いの家庭の重圧から解き放たれるように唇を貪り合う。母親・父親という仮面を脱ぎ捨て、濡れそぼる秘唇に相手の逞しい熱塊を根元まで迎え入れた時、日常の全てが吹き飛ぶほどの狂乱の悦楽が腰を突き抜ける……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "親であることを忘れて獣のように激しく突き上げられる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "シーツを握りしめ、親であることを忘れて獣のように激しく突き上げられる。",
          "effects": [
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
      "label": "甘い愛撫に屈して腰を浮かす",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "子供の顔が脳裏をよぎる罪悪感に苛まれながらも、甘い愛撫に屈して腰を浮かす。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "最後の熱い交わりを交わす",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "この一度きりで終わりにしようと涙ながらに約束し、最後の熱い交わりを交わす。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "shared_intimacy"
  ],
  "diary": [
    "学校の近くでは見せられないような痴態を晒し、ベッドの上で激しく犯された。子供の友達の親という禁断の相手に奥深くまで満たされる背徳感に、声も枯れるほど啼き果てた。",
    "罪悪感で胸が押しつぶされそうなのに、肉体は飢えたように相手の腰を締めつけていた。家庭の平穏とは引き換えの熱い蜜の味に、抜け出せない泥沼を感じた。",
    "これが最後だと互いに言い聞かせながら、互いの肌を貪り合った。シャワーで汗を流し、何食わぬ顔で家庭へ戻る道中、下腹の奥に重たい熱が残り続けた。"
  ]
});

window.defineEvent({
  "id": "encounter_childs_teacher",
  "title": "夕暮れの面談後、誰もいない教室での誘惑",
  "age": [
    30,
    52
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "has_children",
    "hetero_or_bi"
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
  "is_encounter": true,
  "text": "三者面談が終わり、保護者たちが帰り静まり返った夕暮れの教室。子供の担任の先生と二人きりで話しているうち、話題は母親である自分自身の話へと変わっていく。「お母さん、とても綺麗ですね」という低い囁きに、背筋が甘く震える。",
  "choices": [
    {
      "id": "choice_0",
      "label": "母親の顔を忘れ激しく抱き締められる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "夕陽に染まる教壇の陰に引き寄せられ、母親の顔を忘れ激しく抱き締められる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 4
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "encounter_parent_friend_secret_hotel",
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
      "label": "保護者としての礼節を保って教室を後にする",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "礼を言って立ち上がり、保護者としての礼節を保って教室を後にする。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "meeting_childs_teacher",
    "none"
  ],
  "diary": [
    "子供の担任の先生に、教壇の陰でスカートをたくし上げられ、秘所を熱くまさぐられた。母ではなく一人の女として求められた歓喜に、愛液で下着をぐっしょりと濡らしてしまった。",
    "先生からの熱い視線に心臓が跳ね上がった。母親である自分への戒めと、久しぶりに女として見られた喜びが胸に渦巻いた。"
  ]
});
