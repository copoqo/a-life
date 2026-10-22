// ============================================================================
// Pack: 04_student_partner_romance — 学生カップルの放課後・青春の秘め事 (42 events)
// ============================================================================
window.defineEvent({
  "id": "student_partner_afterschool_classroom",
  "title": "学生時代の秘め事・放課後の黄昏教室",
  "age": [
    14,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_kissed"
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "夕日が橙色に差し込む放課後の教室。生徒たちのざわめきが校門へと遠ざかる中、パートナーと二人きりで鍵をかけた。教卓の前、カーテンを閉め切った薄暗がりで抱き寄せられる。制服のプリーツスカートをたくし上げられ、太ももを撫で上げられる手のひらの熱さに、息が苦しいほど乱れる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "ショーツをずらされて奥深くまで貪られる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【教卓に手をついて背後から】スカートを捲られ、ショーツをずらされて奥深くまで貪られる。",
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
      "label": "素肌の温もりを貪り合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【重なる机の上で抱き合う】制服のシャツの胸元をはだけさせ、素肌の温もりを貪り合う。",
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
      "label": "互いの唇を塞いで静まり返る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【見回り足音に息を潜める】廊下の巡回に身体を強張らせ、互いの唇を塞いで静まり返る。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "夕暮れの教室で教卓に手をつかされ、制服のスカートをまくり上げられた。誰かが来るかもしれない恐怖に震えながら、濡れそぼる肉穴を奥深くまで突き上げられ、黒板に額を擦りつけて声を殺してイッてしまった。",
    "放課後の誰もいない教室で、机の上に押し倒された。制服のボタンを外し、互いの火照った素肌をぴったりと重ね合わせて、愛液で汚れるのも構わずに求め合った。",
    "巡回の先生の靴音が廊下に響き、息を止めて相手の胸板にしがみついた。心臓が破裂しそうな緊張感の中、太ももの内側が甘く熱を帯びていた。"
  ],
  "femaleVariant": {
    "text": "夕日が橙色に差し込む放課後の教室。生徒たちのざわめきが校門へと遠ざかる中、彼女と二人きりで鍵をかけた。教卓の前、カーテンを閉め切った薄暗がりで抱き寄せられる。同じ女子生徒である彼女の細い指先が制服のプリーツスカートをたくし上げ、温かい手のひらが太ももの内側を撫で這う。甘酸っぱい吐息が耳元にかかり、息が苦しいほど乱れる……。",
    "choices": [
      [
        "【教卓に手をついて背後からまさぐられる】スカートを捲られ、ショーツをずらされて濡れた割れ目を執拗に指先で解される",
        {
          "happiness": 5,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 9,
            "shyness": 7,
            "intimacyNeed": 6
          }
        }
      ],
      [
        "【重なる机の上で抱き合う】制服のシャツの胸元をはだけさせ、ふくよかな素胸と蜜唇を擦り合わせる",
        {
          "happiness": 4,
          "secrecy": 7,
          "sexualEffects": {
            "desire": 7,
            "intimacyNeed": 7
          }
        }
      ],
      [
        "【見回り足音に息を潜める】廊下の巡回に身体を強張らせ、互いの唇を塞いで静まり返る",
        {
          "secrecy": 9,
          "independence": 3,
          "sexualEffects": {
            "shyness": 8,
            "boundaryVoice": 4
          }
        }
      ]
    ],
    "diary": [
      "夕暮れの教室で教卓に手をつかされ、彼女に制服のスカートをまくり上げられた。誰かが来るかもしれない恐怖に震えながら、ぐちゅぐちゅと音を立てる秘所を指先で奥深くまで弄られ、黒板に額を擦りつけて声を押し殺してイッてしまった。",
      "放課後の誰もいない教室で、机の上に押し倒された。制服のボタンを外し、同じ女同士の火照った柔肌と秘唇をぴったりと重ね合わせて、愛液で汚れるのも構わずに求め合った。",
      "巡回の先生の靴音が廊下に響き、息を止めて彼女の華奢な胸にしがみついた。心臓が破裂しそうな緊張感の中、太ももの内側が甘く熱を帯びていた。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_club_room",
  "title": "学生時代の秘め事・部室の熱気と畳の上の逢瀬",
  "age": [
    14,
    18
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_kissed"
  ],
  "weight": 26,
  "is_major": true,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "全員が帰宅した後の文化部・運動部の部室。パイプ椅子と埃、使い古された道具の匂いがこもる狭い空間。パートナーと二人きりで鍵を閉めた瞬間、荒い息遣いとともにロッカーへ押し付けられる。部活後の汗ばんだ肌とユニフォームを脱ぎ散らかし、畳の上へと倒れ込む……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "部室中に湿った水音を響かせる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【狭い部室の畳の上で乱れ合う】火照った身体をぶつけ合い、部室中に湿った水音を響かせる。",
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
      "label": "ロッカーをガタガタと鳴らす",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【ロッカーに手をついて立ったまま】背後から荒々しく貫かれ、ロッカーをガタガタと鳴らす。",
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
      "label": "慌ててユニフォームを着直す",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【鍵のガチャつく音に我に返る】外の足音に驚き、慌ててユニフォームを着直す。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "部室の古びた畳の上で、汗の匂いに包まれながら貪り合った。部活の疲れも忘れて腰を打ちつけ合い、ぬちぬちと鳴り響く愛液の音に煽られて、何度も狂ったように絶頂した。",
    "ロッカーに手をつかされ、後ろから激しく突かれた。ロッカーがガタガタと音を立てるたびに恐怖と快感で腰が砕け、中に注ぎ込まれる熱さに喘ぎ叫んだ。",
    "誰かが部室のドアノブを回す音に心臓が止まりそうになった。息を殺して去るのを待ち、汗を拭いながら二人で笑い合った。"
  ],
  "femaleVariant": {
    "text": "全員が帰宅した後の部室。埃と道具の匂いがこもる狭い空間。彼女と二人きりで鍵を閉めた瞬間、荒い息遣いとともにロッカーへ押し付けられる。部活後の汗ばんだ肌と制服を脱ぎ散らかし、畳の上へと倒れ込む……。",
    "choices": [
      [
        "【狭い部室の畳の上で乱れ合う】火照った身体をぶつけ合い、互いの蜜壺を擦り合わせ湿った水音を響かせる",
        {
          "happiness": 5,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 9,
            "shyness": 8
          }
        }
      ],
      [
        "【ロッカーに手をついて立ったまま】背後から太ももを開かれ、指先で奥の天井を執拗に擦り上げられる",
        {
          "happiness": 4,
          "secrecy": 9,
          "sexualEffects": {
            "desire": 8,
            "shyness": 8
          }
        }
      ],
      [
        "【鍵のガチャつく音に我に返る】外の足音に驚き、慌てて服を着直す",
        {
          "secrecy": 8,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "部室の古びた畳の上で、汗の匂いに包まれながら貪り合った。互いの秘唇を強く押し当てて腰を打ちつけ合い、ぬちぬちと鳴り響く愛液の音に煽られて、何度も狂ったように絶頂した。",
      "ロッカーに手をつかされ、後ろから彼女の指で激しく弄られた。ロッカーがガタガタと音を立てるたびに恐怖と快感で腰が砕け、愛液を吹き出しながら喘ぎ啼いた。",
      "誰かが部室のドアノブを回す音に心臓が止まりそうになった。息を殺して去るのを待ち、汗を拭いながら二人で笑い合った。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_cultural_festival_prep",
  "title": "学生時代の秘め事・文化祭前夜の準備室",
  "age": [
    14,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_kissed"
  ],
  "weight": 26,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "文化祭の前日、薄暗くなった校舎の居残り準備。段ボールや木材が積み上げられた準備室の奥で、パートナーと二人きりになった。祭りの前の異様な高揚感と疲れ。ペンキの匂いが漂う中、相手の逞しい腕に引き寄せられ、制服越しに心臓の鼓動が重なり合う……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "息を殺して奥まで深く貫かれる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【段ボールの山に隠れて】作業着のまま求め合い、息を殺して奥まで深く貫かれる。",
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
      "label": "指先で愛液を掻き回されてイく",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【薄暗がりで乱れる制服】スカートをたくし上げられ、指先で愛液を掻き回されてイく。",
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
      "label": "慌ててペンキを手に取る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【他の生徒の声に慌てて離れる】廊下を歩くクラスメイトの声に、慌ててペンキを手に取る。",
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "段ボールの陰に隠れ、文化祭の準備作業の合間に身体を重ねた。誰かに見つかるかもしれないスリルと文化祭の熱気に背中を押され、乱暴なピストンに声を押し殺して絶頂した。",
    "薄暗い準備室で制服を乱され、指先でぐちゃぐちゃになるまで愛撫された。太ももを伝う愛液を拭き取りながら、明日からの文化祭が特別なものに思えた。",
    "友達の呼ぶ声が聞こえて慌てて身体を離した。火照った頬を両手で冷ましながら、教室へ戻る足取りがふわふわと軽かった。"
  ],
  "femaleVariant": {
    "text": "文化祭の前日、薄暗くなった校舎の居残り準備。段ボールや木材が積み上げられた準備室の奥で、彼女と二人きりになった。祭りの前の異様な高揚感と疲れ。ペンキの匂いが漂う中、引き寄せられた制服越しに彼女の柔らかな胸と心臓の鼓動が重なり合う……。",
    "choices": [
      [
        "【段ボールの山に隠れて】作業着のまま求め合い、息を殺して互いの秘唇を強く擦り合わせる",
        {
          "happiness": 5,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 9,
            "shyness": 7
          }
        }
      ],
      [
        "【薄暗がりで乱れる制服】スカートをたくし上げられ、繊細な指先で愛液を掻き回されてイく",
        {
          "happiness": 4,
          "secrecy": 7,
          "sexualEffects": {
            "desire": 7,
            "shyness": 7
          }
        }
      ],
      [
        "【他の生徒の声に慌てて離れる】廊下を歩くクラスメイトの声に、慌ててペンキを手に取る",
        {
          "social": 3,
          "secrecy": 5,
          "sexualEffects": {
            "boundaryVoice": 4
          }
        }
      ]
    ],
    "diary": [
      "段ボールの陰に隠れ、文化祭の準備作業の合間に身体を重ねた。誰かに見つかるかもしれないスリルの中、女同士の濡れた蜜を押し付け合い、声を押し殺して絶頂した。",
      "薄暗い準備室で制服を乱され、彼女の指先でぐちゃぐちゃになるまで愛撫された。太ももを伝う愛液を拭き取りながら、明日からの文化祭が特別なものに思えた。",
      "友達の呼ぶ声が聞こえて慌てて身体を離した。火照った頬を両手で冷ましながら、教室へ戻る足取りがふわふわと軽かった。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_gym_storehouse",
  "title": "学生時代の秘め事・体育館の用具倉庫",
  "age": [
    14,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_kissed"
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "埃と汗、古いウレタンマットの匂いが立ち込める体育倉庫の奥。放課後の部活の掛け声が遠く聞こえる中、パートナーの手を引いて暗がりへ滑り込む。積み上げられた跳び箱とマットの山に押し倒され、体操服の裾から滑り込んできた熱い手が、汗ばんだ柔肌と秘唇をまさぐり始める……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "肉棒を奥底まで迎え入れる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【マットの上に倒れ込んで】汗まみれの身体を重ね合わせ、肉棒を奥底まで迎え入れる。",
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
      "label": "指先で濡れた割れ目をぐちゃぐちゃに掻き回される",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【跳び箱に寄りかかって】体操着を乱し、指先で濡れた割れ目をぐちゃぐちゃに掻き回される。",
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
      "label": "服を直して息を殺す",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【部員の気配に慌てる】倉庫の扉がガタリと鳴り、服を直して息を殺す。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "体育倉庫の埃っぽいマットの上に倒れ込み、汗で張り付いた下着を脱がされた。部活の掛け声が聞こえるすぐそばで、激しく肉穴を突き上げられる水音が倉庫に反響して、恥ずかしさで頭がおかしくなりそうだった。",
    "跳び箱に背中を押し当てられ、体操服の胸元から指をねじ込まれた。汗の匂いと愛液の淫臭が混ざり合い、息を殺しながら何度も太ももを痙攣させて絶頂した。",
    "誰かが倉庫の外を通る気配に、二人で固まって息を潜めた。相手の熱い吐息が耳元にかかるたび、下腹がきゅうと甘く疼いて困った。"
  ],
  "femaleVariant": {
    "text": "埃と汗、古いウレタンマットの匂いが立ち込める体育倉庫の奥。放課後の部活の掛け声が遠く聞こえる中、彼女の手を引いて暗がりへ滑り込む。積み上げられた跳び箱とマットの山に押し倒され、体操服の裾から滑り込んできた彼女の熱い手が、汗ばんだ柔肌と秘唇をまさぐり始める……。",
    "choices": [
      [
        "【マットの上に倒れ込んで】汗まみれの身体を密着させ、互いの濡れた秘唇を狂おしく擦り合わせる",
        {
          "happiness": 5,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 9,
            "shyness": 8
          }
        }
      ],
      [
        "【跳び箱に寄りかかって】体操着を乱し、繊細な指先で濡れた割れ目をぐちゃぐちゃに掻き回される",
        {
          "happiness": 4,
          "secrecy": 7,
          "sexualEffects": {
            "desire": 7,
            "shyness": 7
          }
        }
      ],
      [
        "【部員の気配に慌てる】倉庫の扉がガタリと鳴り、服を直して息を殺す",
        {
          "secrecy": 8,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "体育倉庫の埃っぽいマットの上に倒れ込み、汗で張り付いた下着を脱がされた。部活の掛け声が聞こえるすぐそばで、女同士の濡れた蜜壺をぬちぬちと激しく擦り合わせる水音が反響して、恥ずかしさで頭がおかしくなりそうだった。",
      "跳び箱に背中を押し当てられ、体操服の胸元から指をねじ込まれた。汗の匂いと愛液の淫臭が混ざり合い、彼女の指先が奥の天井を擦り上げるたびに何度も絶頂した。",
      "誰かが倉庫の外を通る気配に、二人で固まって息を潜めた。彼女の甘い吐息が耳元にかかるたび、下腹がきゅうと甘く疼いて困った。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_infirmary_bed",
  "title": "学生時代の秘め事・保健室の白いカーテン",
  "age": [
    14,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_kissed"
  ],
  "weight": 26,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "消毒液の匂いが漂う保健室。養護教諭が職員室へ席を外したわずかな隙に、パートナーがベッドのカーテンを開けて潜り込んできた。狭いパイプベッドに二人で横たわり、白いシーツの中で服の隙間から手が這う。先生がいつ戻るかわからない極限のスリルに、下腹の奥が熱く疼く……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "熱い結合に啼き乱れる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【毛布を被って音を殺し交わる】カーテンの向こうを気にしながら、熱い結合に啼き乱れる。",
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
      "label": "指先で愛液を掻き回される快感に耐える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【シーツの中で愛撫に溺れる】下着をずらされ、指先で愛液を掻き回される快感に耐える。",
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
      "label": "慌てて相手をベッドから押し出す",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【足音に怯えて身を起こす】保健室の引き戸が開く気配に、慌てて相手をベッドから押し出す。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "保健室の白い毛布にくるまり、声を押し殺しながら身体を重ねた。先生が戻ってくるかもしれない恐怖の中で貫かれる肉棒の熱さは格別で、シーツを噛み締めながら熱い中出しを受け止めた。",
    "カーテンの隙間からの光に怯えながら、シーツの中で秘唇をまさぐられた。ぐちゅぐちゅと音を立てる愛液を指先で擦り上げられ、毛布に顔を埋めて絶頂した。",
    "先生の足音が聞こえて心臓が止まるかと思った。何食わぬ顔で熱を測るふりをしたけれど、身体の奥の火照りは夕方まで治まらなかった。"
  ],
  "femaleVariant": {
    "text": "消毒液の匂いが漂う保健室。養護教諭が職員室へ席を外したわずかな隙に、彼女がベッドのカーテンを開けて潜り込んできた。狭いパイプベッドに制服のまま二人で横たわり、白いシーツの中で互いのスカートの下に手を滑り込ませる。先生がいつ戻るかわからない極限のスリルに、下腹の奥が熱く疼く……。",
    "choices": [
      [
        "【毛布を被って音を殺し交わる】カーテンの向こうを気にしながら、舌と指で敏感な突起を吸い上げられる",
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
        "【シーツの中で互いの蜜を擦り合う】下着をずらし、絡み合う太ももで秘唇を強く押し当てて愛液を交わす",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 7,
            "shyness": 7
          }
        }
      ],
      [
        "【足音に怯えて身を起こす】保健室の引き戸が開く気配に、慌てて彼女をベッドから押し出す",
        {
          "secrecy": 7,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "保健室の白い毛布にくるまり、声を押し殺しながら肌を重ねた。先生が戻ってくるかもしれない恐怖の中、彼女の熱い舌先で敏感な豆を吸い転がされ、シーツを噛み締めながら激しい絶頂に震えた。",
      "カーテンの隙間からの光に怯えながら、シーツの中で互いの濡れた秘所を擦り合わせた。ぬちぬちと音を立てる愛液が混ざり合い、毛布に顔を埋めて同時に果てた。",
      "先生の足音が聞こえて心臓が止まるかと思った。何食わぬ顔で熱を測るふりをしたけれど、身体の奥の火照りは夕方まで治まらなかった。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_library_stacks",
  "title": "学生時代の秘め事・放課後の図書室の奥",
  "age": [
    14,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_kissed"
  ],
  "weight": 26,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "古い紙と埃の匂いが静まり返る図書室。誰も来ない開架書架の最奥、背の高い本棚に挟まれた薄暗い死角に連れ込まれる。本棚に背中を押し付けられ、パートナーの熱い吐息が首筋にかかる。制服のボタンを器用に外され、静寂の中に衣擦れの擦れる音が淫らに響く……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "静寂を破る激しいピストンに声を殺す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【本棚に手をついて立ったまま】スカートを捲られ、静寂を破る激しいピストンに声を殺す。",
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
      "label": "【書架の陰で唇を奪われ指を入れられる】静けさの中でぬちぬちと愛液を掻き回される",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【書架の陰で唇を奪われ指を入れられる】静けさの中でぬちぬちと愛液を掻き回される。",
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
      "label": "乱れた制服を大急ぎで整える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【利用者の足音に我に返る】図書委員の歩く足音に、乱れた制服を大急ぎで整える。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "誰もいない本棚の死角で、壁に押し付けられるようにして貫かれた。足音ひとつ立てられない静寂の中、肉と肉がぶつかるぬちぬちとした湿った音だけが響き、恥ずかしさで狂いそうだった。",
    "背表紙の並ぶ暗がりで口を塞がれ、スカートの中に手を差し入れられた。敏感な突起を指で擦られるたび、声を上げられない苦しさと快感で涙が溢れた。",
    "本の貸し出しカウンターの方から物音がして、慌ててブラウスのボタンを留めた。相手と離れた後も、太ももの間がじっとりと濡れていた。"
  ],
  "femaleVariant": {
    "text": "古い紙と埃の匂いが静まり返る図書室。誰も来ない開架書架の最奥、背の高い本棚に挟まれた薄暗い死角に連れ込まれる。本棚に背中を押し付けられ、彼女の甘い吐息が首筋にかかる。制服のボタンを器用に外され、静寂の中に衣擦れの音が淫らに響く……。",
    "choices": [
      [
        "【本棚に手をついて立ったまま】スカートを捲られ、後ろから濡れた割れ目に指を深く沈められて声を殺す",
        {
          "happiness": 5,
          "secrecy": 9,
          "sexualEffects": {
            "desire": 9,
            "shyness": 9
          }
        }
      ],
      [
        "【書架の陰で唇を奪われ胸を吸われる】静けさの中で制服を肌蹴け、柔らかな胸の先を転がされる",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 7,
            "shyness": 8
          }
        }
      ],
      [
        "【利用者の足音に我に返る】図書委員の歩く足音に、乱れた制服を大急ぎで整える",
        {
          "secrecy": 8,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "誰もいない本棚の死角で、壁に押し付けられるようにして愛撫された。足音ひとつ立てられない静寂の中、彼女の指が奥を掻き回すぬちぬちとした湿った水音だけが響き、恥ずかしさで狂いそうだった。",
      "背表紙の並ぶ暗がりで口を塞がれ、ブラウスの中に手を差し入れられた。尖った胸の先を舌で転がされるたび、声を上げられない苦しさと快感で涙が溢れた。",
      "本の貸し出しカウンターの方から物音がして、慌ててブラウスのボタンを留めた。彼女と離れた後も、太ももの間がじっとりと濡れていた。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_rain_umbrella",
  "title": "学生時代の秘め事・濡れ透ける制服と相手の部屋",
  "age": [
    14,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "school_student"
  ],
  "weight": 28,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "土砂降りの雨の下校路。相合傘でも防ぎきれず、制服のブラウスもスカートもびしょ濡れになって相手の自室へ駆け込んだ。透けた下着と白く浮き出る素肌。タオルで拭き合ううちに互いの体温が触れ合い、雨音に包まれた密室で抗えない熱情が爆発する……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "畳の上で果てしなく絶頂する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【濡れた制服を脱ぎ捨てて】雨音に紛れて激しく求め合い、畳の上で果てしなく絶頂する。",
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
      "label": "優しい愛撫に身体を溶かす",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【冷えた肌を温め合うように】タオルにくるまりながら、優しい愛撫に身体を溶かす。",
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
      "label": "まずは温かいお茶で身体を温める",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【着替えを借りてお茶を飲む】高鳴る胸を抑え、まずは温かいお茶で身体を温める。",
          "effects": [
            {
              "path": "trait.constitution.current",
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
    "reflection"
  ],
  "diary": [
    "雨で透けた制服を脱がされ、濡れた素肌を直に重ね合わせた。外の激しい雨音に紛れるように荒い息を吐き出し、奥深くまで何度も突き上げられて、畳を爪で掻きむしりながら絶頂した。",
    "冷え切った身体を温めるように、首筋から太ももまでゆっくりと舌と指で這われた。温かな体温と愛液が混ざり合い、身体の芯からとろけるような快感に包まれた。",
    "相手のジャージを借りて温かいお茶を飲んだ。雨音を聞きながら肩を寄せ合う時間が、切ないほど愛おしかった。"
  ],
  "femaleVariant": {
    "text": "土砂降りの雨の下校路。相合傘でも防ぎきれず、制服のブラウスもスカートもびしょ濡れになって彼女の自室へ駆け込んだ。透けた下着と白く浮き出る素肌。バスタオルで互いの濡れた身体を拭き合ううちに、触れ合う指先の熱と雨音に包まれた密室で抗えない熱情が爆発する……。",
    "choices": [
      [
        "【濡れた制服を脱ぎ捨てて】雨音に紛れて素肌を重ね合い、畳の上でお互いの蜜を激しく擦り合わせる",
        {
          "happiness": 5,
          "secrecy": 6,
          "sexualEffects": {
            "desire": 9,
            "intimacyNeed": 8
          }
        }
      ],
      [
        "【冷えた肌を温め合うように】タオルにくるまりながら、優しい指先と舌の愛撫に身体を溶かす",
        {
          "happiness": 4,
          "secrecy": 5,
          "sexualEffects": {
            "desire": 7,
            "intimacyNeed": 7
          }
        }
      ],
      [
        "【着替えを借りてお茶を飲む】高鳴る胸を抑え、まずは温かいお茶で身体を温める",
        {
          "health": 3,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 4
          }
        }
      ]
    ],
    "diary": [
      "雨で透けた制服を脱ぎ合い、濡れた柔肌を直に重ね合わせた。外の激しい雨音に紛れるように荒い息を吐き出し、互いの蜜壺を強く擦り合わせながら、畳を爪で掻きむしって絶頂した。",
      "冷え切った身体を温めるように、首筋から太ももまでゆっくりと彼女の舌と指で這われた。温かな体温と愛液が混ざり合い、身体の芯からとろけるような快感に包まれた。",
      "彼女の部屋着を借りて温かいお茶を飲んだ。雨音を聞きながら肩を寄せ合う時間が、切ないほど愛おしかった。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_rooftop_secret",
  "title": "学生時代の秘め事・屋上の踊り場と青空の下",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_kissed"
  ],
  "weight": 26,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "普段は鍵がかけられている屋上への踊り場。こっそり持ち出した合鍵で重い扉を開けると、一面の青空と吹き抜ける風が迎えてくれた。フェンスに囲まれた屋上の片隅、誰の視線も届かない死角で抱き合わされ、風にプリーツスカートを捲り上げられる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "背後から激しく突き上げられる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【フェンスに手をついて立ちバック】青空を仰ぎながら、背後から激しく突き上げられる。",
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
      "label": "下着を外して素肌を重ねる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【踊り場のコンクリートに座り込んで】風の音に声を隠し、下着を外して素肌を重ねる。",
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
      "label": "街の景色を見下ろす",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【風の冷たさに抱き合って過ごす】風に吹かれながら手をつなぎ、街の景色を見下ろす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.grooming",
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
    "shared_intimacy",
    "shared_intimacy",
    "reflection"
  ],
  "diary": [
    "屋上のフェンスに手をつかされ、青空の下で背後から突き入れられた。風がスカートを吹き上げ、校庭の生徒たちの声が遠く聞こえる中で中出しされ、天に昇るような開放感と背徳に震えた。",
    "屋上の踊り場の冷たい床に座り、制服を崩して交わった。風の音に紛れて吐息を漏らし、二人きりの秘密の世界に溺れた。",
    "屋上の柵に寄りかかって二人で街を見下ろした。吹き抜ける風が心地よく、青春の眩しさを胸に刻んだ。"
  ],
  "femaleVariant": {
    "text": "普段は鍵がかけられている屋上への踊り場。こっそり持ち出した合鍵で重い扉を開けると、一面の青空と吹き抜ける風が迎えてくれた。フェンスに囲まれた屋上の片隅、誰の視線も届かない死角で抱き合わされ、風にプリーツスカートを捲り上げられる……。",
    "choices": [
      [
        "【フェンスに手をついて背後から】青空を仰ぎながら、下着をずらされて濡れた奥を指先で執拗に弄られる",
        {
          "happiness": 5,
          "secrecy": 9,
          "sexualEffects": {
            "desire": 9,
            "shyness": 9
          }
        }
      ],
      [
        "【踊り場のコンクリートに座り込んで】風の音に声を隠し、下着を外して互いの蜜壺を擦り合わせる",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 8,
            "shyness": 7
          }
        }
      ],
      [
        "【風の冷たさに抱き合って過ごす】風に吹かれながら手をつなぎ、街の景色を見下ろす",
        {
          "happiness": 4,
          "aesthetics": 3,
          "stress": -2
        }
      ]
    ],
    "diary": [
      "屋上のフェンスに手をつかされ、青空の下で背後から愛撫された。風がスカートを吹き上げ、校庭の生徒たちの声が遠く聞こえる中で彼女の指に奥を弄られ、天に昇るような開放感と背徳に震えてイッた。",
      "屋上の踊り場の冷たい床に座り、制服を崩して交わった。女同士の蜜をぬちぬちと擦り合わせ、風の音に紛れて吐息を漏らし、二人きりの秘密の世界に溺れた。",
      "屋上の柵に寄りかかって二人で街を見下ろした。吹き抜ける風が心地よく、青春の眩しさを胸に刻んだ。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_study_session",
  "title": "学生時代の秘め事・テスト勉強と散らばる教科書",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "school_student"
  ],
  "weight": 28,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "定期試験直前、「一緒に勉強しよう」という名目で訪れた相手の部屋。机に向かってノートを開いていたはずが、不意にペンを取り上げられ、膝の上に抱き上げられる。耳元に囁かれる甘い吐息と、スカートの裾から忍び寄る指先。勉強どころではなくなった頭が、快感で白く痺れていく……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "シーツの上で貪欲に身体を重ねる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【教科書を払いのけてベッドへ】勉強を投げ出し、シーツの上で貪欲に身体を重ねる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ノートを愛液で濡らしながら貫かれる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【勉強机の上でそのまま】机に両手をつかされ、ノートを愛液で濡らしながら貫かれる。",
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
      "label": "問題集へ視線を戻す",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【「試験が終わるまで我慢」と制す】熱いキスだけで我慢させ、問題集へ視線を戻す。",
          "effects": [
            {
              "path": "skill.knowledge",
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
    "テスト勉強のノートを放り出してベッドに倒れ込んだ。若さゆえの抑えきれない情欲で何度も奥を突かれ、汗だくになってシーツを濡らしながら朝まで抱き合った。",
    "勉強机の上でスカートを捲られ、ノートの上に愛液を散らしながら後ろから貫かれた。真面目な教科書の隣で繰り広げられる下品なピストンに、頭が痺れるほど興奮した。",
    "「今は勉強しなきゃダメ」と相手の胸を押し返した。名残惜しそうに唇を尖らせる相手を見て、愛おしさと少しの優越感を覚えた。"
  ],
  "femaleVariant": {
    "text": "定期試験直前、「一緒に勉強しよう」という名目で訪れた彼女の部屋。机に向かってノートを開いていたはずが、不意にペンを取り上げられ、背後から抱きすくめられる。首筋に落ちる甘い吐息と、スカートの裾から忍び寄る細い指先。勉強どころではなくなった頭が、快感で白く痺れていく……。",
    "choices": [
      [
        "【教科書を払いのけてベッドへ】勉強を投げ出し、シーツの上で貪欲に素肌と蜜を重ね合う",
        {
          "happiness": 5,
          "knowledge": -2,
          "sexualEffects": {
            "desire": 9,
            "shyness": 6
          }
        }
      ],
      [
        "【勉強机の上でそのまま愛撫される】机に両手をつかされ、ノートを愛液で濡らしながら指で奥を掻き回される",
        {
          "happiness": 4,
          "secrecy": 7,
          "sexualEffects": {
            "desire": 8,
            "shyness": 8
          }
        }
      ],
      [
        "【「試験が終わるまで我慢」と制す】熱いキスだけで我慢させ、問題集へ視線を戻す",
        {
          "knowledge": 4,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 6
          }
        }
      ]
    ],
    "diary": [
      "テスト勉強のノートを放り出してベッドに倒れ込んだ。若さゆえの抑えきれない情欲で互いの秘所を擦り合わせ、汗だくになってシーツを濡らしながら朝まで抱き合った。",
      "勉強机の上でスカートを捲られ、ノートの上に愛液を散らしながら後ろから奥を指で解された。真面目な教科書の隣で繰り広げられる淫らな水音に、頭が痺れるほど興奮した。",
      "「今は勉強しなきゃダメ」と彼女の肩を押し返した。名残惜しそうに唇を尖らせる彼女を見て、愛おしさと少しの優越感を覚えた。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_first_sleepover",
  "title": "学生時代の秘め事・初めてのお泊まりの夜",
  "age": [
    16,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "school_student",
    "rel_stage_kissed"
  ],
  "weight": 28,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "相手の両親が不在の夜、初めて許されたお泊まり。門限も視線も気にしなくていい二人きりの空間。お風呂上がりの湯気と石鹸の匂い、薄手の部屋着から透ける素肌。ベッドに並んで横たわると、互いの指先が自然と絡み合い、長い夜が静かに幕を開ける……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "愛液に溺れて果てる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【朝陽が昇るまで何度も愛し合う】夜通し何度も肉棒を迎え入れ、愛液に溺れて果てる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "互いの鼓動を聞きながら眠る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【素肌を寄せ合って抱き枕のように眠る】身体を重ねた余韻の中、互いの鼓動を聞きながら眠る。",
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
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "距離を保つ",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【緊張でぎこちなくテレビを見る】お泊まりの特別さに気恥ずかしさを覚え、距離を保つ。",
          "effects": [
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 5
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "reflection"
  ],
  "diary": [
    "朝が来るまで、壊れたみたいに何度も身体を重ねた。結合したままシーツの上を転がり、奥深くまで精液を注ぎ込まれるたびに啼き叫んで、愛液でぐしゃぐしゃになったベッドで朝陽を迎えた。",
    "激しく愛し合ったあと、相手の腕の中にすっぽり収まって眠った。素肌越しに伝わる一定の心音と温もりが、この上なく幸せだった。",
    "同じ部屋に泊まるというだけで胸が苦しいほど高鳴った。恥ずかしさに耐えながら手を握り合った夜の記憶が甘い。"
  ],
  "femaleVariant": {
    "text": "彼女の両親が不在の夜、初めて許されたお泊まり。門限も視線も気にしなくていい二人きりの空間。お風呂上がりの湯気と石鹸の匂い、薄手の部屋着から透ける素肌。ベッドに並んで横たわると、互いの指先が自然と絡み合い、長い夜が静かに幕を開ける……。",
    "choices": [
      [
        "【朝陽が昇るまで何度も愛し合う】互いの柔肌を密着させて蜜壺を擦り合わせ、夜通し愛液に溺れて果てる",
        {
          "happiness": 6,
          "secrecy": 6,
          "sexualEffects": {
            "desire": 10,
            "intimacyNeed": 9
          }
        }
      ],
      [
        "【素肌を寄せ合って抱き枕のように眠る】身体を重ねた余韻の中、互いの鼓動を聞きながら眠る",
        {
          "happiness": 5,
          "stress": -4,
          "sexualEffects": {
            "intimacyNeed": 8
          }
        }
      ],
      [
        "【緊張でぎこちなくテレビを見る】お泊まりの特別さに気恥ずかしさを覚え、距離を保つ",
        {
          "shyness": 5,
          "happiness": 3
        }
      ]
    ],
    "diary": [
      "朝が来るまで、壊れたみたいに何度も身体を重ねた。重なり合う乳房と絡み合う太もも、互いの濡れそぼった蜜芽を狂おしく擦り合わせて、愛液でぐしゃぐしゃになったベッドで朝陽を迎えた。",
      "激しく愛し合ったあと、彼女の腕の中にすっぽり収まって眠った。素肌越しに伝わる一定の心音と温もりが、この上なく幸せだった。",
      "同じ部屋に泊まるというだけで胸が苦しいほど高鳴った。恥ずかしさに耐えながら手を握り合った夜の記憶が甘い。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_graduation_memory",
  "title": "学生時代の秘め事・卒業の日の最後の制服",
  "age": [
    18,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "school_student",
    "rel_stage_kissed"
  ],
  "weight": 28,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "卒業証書を手にした卒業式の午後。もう二度と着ることのない制服姿のまま、二人の思い出の場所へ。これから始まるそれぞれの進路への不安と、学生時代が終わってしまう喪失感。お互いの存在を肉体に刻みつけるように、制服のボタンを一つずつ外していく……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "生涯の記憶を刻み込む",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【制服を愛液と精液で汚しながら】最後の制服姿で激しく交わり、生涯の記憶を刻み込む。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "粘膜の温もりで包み込む",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【涙を流しながら静かに身体を重ねる】別れと旅立ちの切なさを、粘膜の温もりで包み込む。",
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
      "id": "choice_2",
      "label": "夕暮れの教室で固く誓いを交わす",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【制服の第二ボタンを握りしめて抱き合う】身体は重ねず、夕暮れの教室で固く誓いを交わす。",
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
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "reflection"
  ],
  "diary": [
    "卒業証書を床に投げ出し、最後の制服のスカートを捲り上げられて激しく交わった。涙と汗と愛液が混ざり合い、奥深くまで何度も突き上げられながら、この熱さだけは一生忘れないと胸に誓った。",
    "学生生活の終わりを惜しむように、静かに身体を重ね合った。肌が触れ合うたびに愛おしさが胸に溢れ、温かな結合の中で静かに涙を流した。",
    "制服のボタンを握りしめ、夕焼けの中で抱き合った。身体を重ねる以上の絆を感じ、これからの未来へ前を向くことができた。"
  ],
  "femaleVariant": {
    "text": "卒業証書を手にした卒業式の午後。もう二度と着ることのない制服姿のまま、二人の思い出の場所へ。これから始まるそれぞれの進路への不安と、学生時代が終わってしまう喪失感。お互いの存在を肉体に刻みつけるように、制服のボタンを一つずつ外していく……。",
    "choices": [
      [
        "【制服を互いの愛液で汚しながら】最後の制服姿で激しく蜜を擦り合わせ、生涯の記憶を刻み込む",
        {
          "happiness": 6,
          "secrecy": 7,
          "sexualEffects": {
            "desire": 10,
            "intimacyNeed": 10
          }
        }
      ],
      [
        "【涙を流しながら静かに身体を重ねる】別れと旅立ちの切なさを、粘膜の温もりで包み込む",
        {
          "happiness": 5,
          "stress": -2,
          "sexualEffects": {
            "intimacyNeed": 9
          }
        }
      ],
      [
        "【夕暮れの教室で固く誓いを交わす】身体は重ねず、夕暮れの教室で抱き合って想いを誓う",
        {
          "morality": 4,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "卒業証書を床に投げ出し、最後の制服のスカートを捲り上げて激しく交わった。涙と汗と愛液が混ざり合い、女同士の熱い蜜壺を何度も擦り合わせながら、この熱さだけは一生忘れないと胸に誓った。",
      "学生生活の終わりを惜しむように、静かに身体を重ね合った。肌が触れ合うたびに愛おしさが胸に溢れ、温かな結合の中で静かに涙を流した。",
      "夕焼けの中で固く抱き合った。身体を重ねる以上の絆を感じ、これからの未来へ前を向くことができた。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_campus_lawn_night",
  "title": "学生時代の秘め事・夜のキャンパスと芝生の暗がり",
  "age": [
    20,
    22
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "low_morality",
    "adult_drinking",
    "university_student",
    "rel_stage_intimate"
  ],
  "weight": {
    "base": 28,
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
  "alcohol": true,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "講義が終わり、街灯の光だけが点々と灯る深夜の大学キャンパス。サークルの飲み会を抜け出し、二人きりで迷い込んだ木立の奥の芝生広場。夜風が火照った肌を冷まし、遠くの街の喧騒が聞こえる中、芝生の上にジャケットを広げて倒れ込む……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "夜空を見上げながら腰を打ちつける",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【夜風の下で素肌を晒して交わる】芝生の上に跨がり、夜空を見上げながら腰を打ちつける。",
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
      "label": "静かな夜の愛撫に蕩ける",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【ジャケットに隠れて唇と秘唇を重ねる】草の匂いに包まれ、静かな夜の愛撫に蕩ける。",
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
      "label": "夜のキャンパスを疾走する",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【警備員のライトに慌てて駆け出す】巡回のライトの光に手をつなぎ、夜のキャンパスを疾走する。",
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
    "shared_intimacy",
    "shared_activity"
  ],
  "diary": [
    "夜のキャンパスの芝生の上で、夜風を素肌に浴びながら相手の上に跨がった。暗闇の中で太い肉棒を根元まで飲み込み、星空を見上げながら腰を振り乱して絶頂した。",
    "芝生の上に広げたジャケットの上で抱き合った。夜風の冷たさと相手の肉体の熱さのコントラストが心地よく、草の匂いの中で愛液を交わし合った。",
    "警備員の懐中電灯の光が見えて、二人で大笑いしながら夜の大学を走り抜けた。若さの奔放さに胸が躍った。"
  ],
  "femaleVariant": {
    "text": "講義が終わり、街灯の光だけが点々と灯る深夜の大学キャンパス。飲み会を抜け出し、二人きりで迷い込んだ木立の奥の芝生広場。夜風が火照った肌を冷まし、遠くの街の喧騒が聞こえる中、芝生の上にジャケットを広げて倒れ込む……。",
    "choices": [
      [
        "【夜風の下で素肌を晒して交わる】芝生の上で絡み合い、夜空を見上げながら互いの蜜唇を激しく擦り合う",
        {
          "happiness": 5,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 9,
            "shyness": 8
          }
        }
      ],
      [
        "【ジャケットに隠れて唇と秘唇を重ねる】草の匂いに包まれ、静かな夜の愛撫に蕩ける",
        {
          "happiness": 4,
          "secrecy": 7,
          "sexualEffects": {
            "desire": 7,
            "intimacyNeed": 7
          }
        }
      ],
      [
        "【警備員のライトに慌てて駆け出す】巡回のライトの光に手をつなぎ、夜のキャンパスを疾走する",
        {
          "happiness": 4,
          "independence": 3,
          "stress": -3
        }
      ]
    ],
    "diary": [
      "夜のキャンパスの芝生の上で、夜風を素肌に浴びながら彼女と重なり合った。暗闇の中で互いの濡れそぼった秘所を押し当てて激しく腰を振り乱し、星空を見上げながら同時に絶頂した。",
      "芝生の上に広げたジャケットの上で抱き合った。夜風の冷たさと彼女の肉体の熱さのコントラストが心地よく、草の匂いの中で愛液を交わし合った。",
      "警備員の懐中電灯の光が見えて、二人で大笑いしながら夜の大学を走り抜けた。若さの奔放さに胸が躍った。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_poolside_twilight",
  "title": "学生時代の秘め事・黄昏のプールサイドと更衣室",
  "age": [
    14,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_kissed"
  ],
  "weight": 26,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "水泳部の居残り練習が終わり、静まり返った夕暮れのプールサイド。茜色に染まる水面と、漂う塩素のツンとした匂い。シャワーを浴び終えた薄暗い更衣室で、パートナーに背後からロッカーへ押し付けられる。湿り気を含んだ温かい空気の中、生乾きの肌と制服の隙間から滑り込んできた手が、敏感な秘唇をねっとりとまさぐり始める……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "冷たい床に手をつかされ奥深くまで突き上げられる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【濡れたタイルの上で激しく貫かれる】冷たい床に手をつかされ、奥深くまで荒々しく突き上げられる。",
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
      "label": "濡れた下着をずらされ指先で掻き回される",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【ロッカーに寄りかかり愛撫に震える】濡れた下着をずらされ、指先で愛液をぐちゃぐちゃに掻き回される。",
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
      "label": "波音に慌てて身支度を整える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【プールの水音に我に返る】誰かがプールに入ってきたような波音に、慌てて身支度を整える。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "プールサイドの更衣室のロッカーに手をつかされ、冷たい床の上で背後から激しく貫かれた。塩素の匂いと立ち上る愛液の淫臭に包まれ、濡れたタイルに額を押し当てて声を殺してイッてしまった。",
    "薄暗い更衣室で濡れた下着をずらされ、指先でぐちゅぐちゅと音を立てるまで秘所を弄られた。ロッカーの金属の冷たさと体温の熱さの落差に、息も絶え絶えになって絶頂した。",
    "プールの水面が揺れる音がして、心臓が跳ね上がって飛び退いた。濡れた髪を拭きながら、互いの赤くなった顔を見合わせて照れ笑いした。"
  ],
  "femaleVariant": {
    "text": "水泳部の練習が終わり、静まり返った夕暮れのプールサイド。茜色に染まる水面と、漂う塩素のツンとした匂い。シャワーを浴び終えた薄暗い女子更衣室で、彼女に背後からロッカーへ押し付けられる。湿り気を含んだ温かい空気の中、生乾きの柔肌と制服の隙間から滑り込んできた彼女の細い指が、敏感な秘唇をねっとりとまさぐり始める……。",
    "choices": [
      [
        "【濡れたタイルの上で互いの蜜を擦り合う】冷たい床に座り込み、女同士の濡れた蜜壺を激しく押し当てて貪る",
        {
          "happiness": 5,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 9,
            "shyness": 8
          }
        }
      ],
      [
        "【ロッカーに寄りかかり愛撫に震える】濡れた下着をずらされ、繊細な指先で愛液をぐちゃぐちゃに掻き回される",
        {
          "happiness": 4,
          "secrecy": 7,
          "sexualEffects": {
            "desire": 8,
            "shyness": 7
          }
        }
      ],
      [
        "【プールの水音に我に返る】誰かがプールに入ってきたような波音に、慌てて身支度を整える",
        {
          "secrecy": 8,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "プール更衣室の冷たいタイルの上で、彼女と濡れた秘唇を激しく擦り合わせた。塩素の匂いと混ざり合う女の淫臭の中、ぬちぬちと泡立つ愛液の音に煽られ、二人で抱き合って絶頂した。",
      "薄暗い更衣室で濡れた下着をずらされ、彼女の指先でぐちゅぐちゅと音を立てるまで秘所を弄られた。ロッカーの金属の冷たさと体温の熱さの落差に、息も絶え絶えになって絶頂した。",
      "プールの水面が揺れる音がして、心臓が跳ね上がって飛び退いた。濡れた髪を拭きながら、互いの赤くなった顔を見合わせて照れ笑いした。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_music_room_piano",
  "title": "学生時代の秘め事・放課後の音楽室とピアノの陰",
  "age": [
    14,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_kissed"
  ],
  "weight": 26,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "特別教室棟の最上階、重い防音扉に閉ざされた放課後の音楽室。西日に照らされる歴代音楽家の肖像画と、中央に鎮座する黒漆のグランドピアノ。鍵をかけた薄暗がりの中、ピアノの影に引きずり込まれる。鍵盤に手をつかされ、制服のプリーツスカートをたくし上げられると、不意に肘が鍵盤に触れて低音の不協和音が室内に響き渡る……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "鍵盤を鳴らしそうになるのを必死に耐えて穿たれる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【ピアノに手をついて背後から突かれる】鍵盤を鳴らしそうになるのを必死に耐え、奥深くを穿たれる。",
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
      "label": "黒漆の天板に背中を預け愛液を溢れさせる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【ピアノの蓋の上で抱き合って弄られる】黒い光沢の天板に背中を預け、愛液を溢れさせながら啼く。",
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
      "label": "音が廊下に響いていないか怯えて静まる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【不意のピアノの音に息を止める】音が廊下に響いていないか怯え、制服を直して静まる。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "音楽室のグランドピアノに手をつかされ、背後から無我夢中で突き上げられた。腰がぶつかるたびに鍵盤が不気味に鳴り響き、見つかるかもしれない恐怖と激しいピストンの快感で頭が真っ白になって果てた。",
    "冷たいピアノの天板の上に抱き上げられ、スカートを捲られて指先で奥の天井を擦り上げられた。ぬちぬちと鳴る水音が防音室に反響し、黒漆の木目を爪で引っ掻きながら絶頂した。",
    "不意に鳴ってしまったピアノの音に、二人で青ざめて動きを止めた。誰かが階段を上がってくる気配はなく、胸をなで下ろしながら顔を見合わせて微笑んだ。"
  ],
  "femaleVariant": {
    "text": "特別教室棟の最上階、重い防音扉に閉ざされた放課後の音楽室。西日に照らされる歴代音楽家の肖像画と、中央に鎮座する黒漆のグランドピアノ。鍵をかけた薄暗がりの中、彼女の手を引いてピアノの影へ。鍵盤に手をつかされ、同じ制服のスカートをたくし上げられると、不意に肘が触れて低音の不協和音が室内に響き渡る……。",
    "choices": [
      [
        "【ピアノに手をついて背後から弄られる】鍵盤に触れそうな手を震わせ、後ろから奥深くまで指で抉られる",
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
        "【ピアノの天板の上で素肌を重ねる】黒い木目に身体を預け、互いの蜜唇を激しく擦り合わせる",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 8,
            "shyness": 7
          }
        }
      ],
      [
        "【不意のピアノの音に息を止める】音が廊下に響いていないか怯え、制服を直して静まる",
        {
          "secrecy": 8,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "音楽室のグランドピアノに手をつかされ、彼女の指で奥深くを激しく掻き回された。腰が揺れるたびに鍵盤がかすかに鳴り、見つかるかもしれない恐怖と甘い快感で声を押し殺して絶頂した。",
      "ピアノの天板の上でスカートをたくし上げ、女同士の濡れそぼる秘所を強く押し当てて擦り合った。防音室に響く湿った水音と愛液の淫臭に酔いしれながら、二人で同時に果てた。",
      "不意に鳴ってしまったピアノの音に、二人で青ざめて動きを止めた。誰かが階段を上がってくる気配はなく、胸をなで下ろしながら顔を見合わせて微笑んだ。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_emergency_stairs",
  "title": "学生時代の秘め事・非常階段の踊り場と木枯らし",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_kissed"
  ],
  "weight": 26,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "校舎の裏手、非常時以外は誰も近寄らない鉄骨の非常階段。踊り場のコンクリートの壁と冷たい手すりに囲まれた、外からは見えない死角。木枯らしが吹き抜け、プリーツスカートが激しく揺れる中、パートナーに壁際へ押し付けられる。冷気に晒された太ももの内側に、相手の熱く滾る手のひらが滑り込んでくる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "冷たい風の中で背後から奥底まで貫かれる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【手すりにすがりついて立位で交わる】冷たい風の中で背後から奥底まで貫かれ、声をもらす。",
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
      "label": "スカートの陰で愛液をまさぐられ熱い吐息を交わす",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【壁に寄りかかって下着をずらされる】スカートの陰で愛液をまさぐられ、熱い吐息を交わす。",
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
      "label": "階段の真下を通る巡回に息を潜める",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【下を通る教師の声に凍りつく】階段の真下を通る巡回に息を潜め、冷たい手すりを握りしめる。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "非常階段の冷たい鉄の手すりにしがみつき、吹き抜ける寒風の中で背後から突き入れられた。下校する生徒たちの声が遠く風に乗って聞こえる中、剥き出しの太ももを震わせて奥深くまで中出しされ、背徳の快感に泣き叫んだ。",
    "コンクリートの冷たい壁に押し当てられ、スカートの中に潜り込んできた指先にぐちゅぐちゅと奥を弄られた。外の冷気と秘所の熱さの対比に、下腹が狂おしく疼いてたまらなかった。",
    "階段の下を先生が歩いていく足音がして、相手の胸板に顔を埋めて息を止めた。風の音に紛れて聞こえる自分の心音の激しさに、胸が締めつけられた。"
  ],
  "femaleVariant": {
    "text": "校舎の裏手、非常時以外は誰も近寄らない鉄骨の非常階段。踊り場の壁と冷たい手すりに囲まれた死角。木枯らしが吹き抜け、制服のプリーツスカートが激しく揺れる中、彼女に壁際へ引き寄せられる。冷気に晒された太ももの内側に、彼女の温かい手のひらが滑り込んでくる……。",
    "choices": [
      [
        "【手すりにすがりついて立位で愛撫される】冷たい風の中で背後から濡れた割れ目を深く抉られ、声を押し殺す",
        {
          "happiness": 5,
          "secrecy": 9,
          "sexualEffects": {
            "desire": 9,
            "shyness": 9
          }
        }
      ],
      [
        "【壁に寄りかかって互いの蜜唇を擦り合う】スカートの陰で下着をずらし、冷えた太ももを絡めて温め合う",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 8,
            "shyness": 7
          }
        }
      ],
      [
        "【下を通る教師の声に凍りつく】階段の真下を通る巡回に息を潜め、冷たい手すりを握りしめる",
        {
          "secrecy": 8,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "非常階段の冷たい鉄の手すりにしがみつき、寒風の中で彼女の指に奥深くまで掻き回された。下校する生徒たちの声が聞こえるスリルの中、濡れそぼる秘所を激しく解され、声を殺して絶頂した。",
      "コンクリートの壁に背中を押し当て、スカートをたくし上げて互いの蜜所を擦り合わせた。外の寒さと女同士の粘膜の熱さが混ざり合い、ぬちぬちと音を立てながら同時に果てた。",
      "階段の下を先生が歩いていく足音がして、彼女の華奢な肩を抱きしめて息を止めた。風の音に紛れて聞こえる互いの心音の激しさに、胸が締めつけられた。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_training_camp_night",
  "title": "学生時代の秘め事・部活合宿の夜と消灯後の宿舎",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_intimate"
  ],
  "weight": 26,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "山間の古い旅館を貸し切った部活動の夏季強化合宿。消灯時間を過ぎ、大部屋の仲間たちが寝息を立てる深夜。抜き足差し足で部屋を抜け出し、指定された薄暗い用具部屋・渡り廊下の陰へ。日焼けした肌と筋肉痛の疼き、湯上がりの浴衣の隙間から漂う石鹸の匂い。暗がりで抱きすくめられ、帯に手をかけられる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "寝静まる宿舎の片隅で声を押し殺して奥底まで貫かれる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【浴衣をはだけて畳の上で乱れる】寝静まる宿舎の片隅で、声を押し殺して奥底まで貫かれる。",
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
      "label": "めくられた浴衣の裾から指先を沈められ愛液を滴らせる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【夜風の当たる縁側で密やかに弄られる】めくられた浴衣の裾から指先を沈められ、愛液を滴らせる。",
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
      "label": "廊下を歩く顧問の足音に息を詰め相手にしがみつく",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【見回りの顧問の足音に物陰へ隠れる】廊下を歩く顧問の足音に息を詰め、相手にしがみつく。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "合宿所の薄暗い小部屋で浴衣をはだけさせられ、畳の上で激しく交わった。隣の部屋に仲間たちが寝ている極限のスリルの中、奥深くまで太い肉棒で突き上げられ、枕に顔を押し当てて声を殺して絶頂した。",
    "渡り廊下の薄暗がりで帯を緩められ、浴衣の下の素肌をまさぐられた。合宿の疲労で敏感になった身体に指を沈められ、ぬちぬちと溢れ出る愛液で畳を汚しながら果てた。",
    "顧問の先生が見回りに来る気配に、押し入れの隙間に滑り込んで息を殺した。至近距離で見つめ合う相手の瞳の熱さに、心臓が痛いほど高鳴った。"
  ],
  "femaleVariant": {
    "text": "山間の古い旅館を貸し切った部活動の合宿。消灯時間を過ぎ、大部屋の仲間たちが寝息を立てる深夜。部屋を抜け出し、指定された薄暗い渡り廊下の物陰へ。日焼けした素肌と湯上がりの浴衣、石鹸の匂い。待ち構えていた彼女に抱きすくめられ、細い指先が浴衣の帯に触れる……。",
    "choices": [
      [
        "【浴衣をはだけて畳の上で蜜を擦り合う】寝静まる宿舎の片隅で、互いの柔肌と蜜壺を狂おしく押し当てて果てる",
        {
          "happiness": 5,
          "secrecy": 9,
          "sexualEffects": {
            "desire": 10,
            "shyness": 8
          }
        }
      ],
      [
        "【夜風の当たる縁側で密やかに弄られる】めくられた浴衣の裾から繊細な指を沈められ、愛液を滴らせる",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 8,
            "shyness": 7
          }
        }
      ],
      [
        "【見回りの顧問の足音に物陰へ隠れる】廊下を歩く顧問の足音に息を詰め、彼女の胸にしがみつく",
        {
          "secrecy": 8,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "合宿所の薄暗い小部屋で浴衣をはだけさせ、畳の上で彼女と激しく身体を重ねた。すぐそばに仲間がいるスリルの中、女同士の濡れた蜜唇を狂おしく擦り合わせ、声を押し殺して絶頂した。",
      "渡り廊下の陰で浴衣の裾を捲り上げられ、彼女の指先で奥の天井を擦り上げられた。合宿の疲れで敏感になった粘膜を弄られ、ぬちぬちと愛液をこぼしながら震えてイッた。",
      "顧問の先生が見回りに来る気配に、物陰に滑り込んで息を殺した。至近距離で見つめ合う彼女の吐息の甘さに、心臓が痛いほど高鳴った。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_science_lab",
  "title": "学生時代の秘め事・理科準備室と薬品棚の陰",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_kissed"
  ],
  "weight": 26,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "ホルマリンやアルコールの微かな匂いが漂う放課後の理科準備室。遮光カーテンが引かれた薄暗がりの中、標本格納棚と実験台の間の狭い通路。パートナーに実験台へと腰掛けさせられ、膝を強引に割り開かれる。冷たい黒板とガラス器具の静寂の中、制服のブラウスをはだけさせられる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "冷たい実験台に背中を預け激しい突き上げに翻弄される",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【実験台の上で脚を開かされて貫かれる】冷たい実験台に背中を預け、激しい突き上げに翻弄される。",
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
      "label": "薬品棚に押し付けられ指先で掻き回されて蕩ける",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【白衣の下の素肌を隅々までまさぐられる】薬品棚に押し付けられ、指先で愛液を掻き回されて蕩ける。",
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
      "label": "ビーカーの触れ合う金属音に驚き慌てて服を正す",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【ガラス器具の触れ合う音にハッとする】ビーカーの触れ合う金属音に驚き、慌てて服を正す。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "冷たい実験台の上に押し倒され、スカートを捲り上げられて奥深くまで貫かれた。ビーカーがカタカタと揺れる音と、湿ったピストンの水音が準備室に反響し、背徳の快感に声を殺して啼いた。",
    "薬品棚の陰でブラウスを脱がされ、白衣を羽織ったまま秘唇をまさぐられた。ツンとした薬品の匂いと愛液の淫臭が混ざり合い、指先で奥を突かれるたびに腰を浮かせてイッた。",
    "体が実験器具に触れてガラスの触れ合う音が鳴り、慌てて身体を離した。冷や汗を流しながら、二人で道具を棚に戻して息を整えた。"
  ],
  "femaleVariant": {
    "text": "アルコールの微かな匂いが漂う放課後の理科準備室。遮光カーテンが引かれた薄暗がりの中、標本格納棚と実験台の間の狭い通路。彼女に実験台へと腰掛けさせられ、膝を割るように抱き寄せられる。冷たいガラス器具の静寂の中、制服のブラウスのボタンを器用に外されていく……。",
    "choices": [
      [
        "【実験台の上で互いの蜜壺を擦り合わせる】冷たい台に背中を預け、女同士の濡れた割れ目を激しく押し当てて乱れる",
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
        "【白衣の下の素肌を隅々までまさぐられる】薬品棚に押し付けられ、繊細な指先で愛液を掻き回されて蕩ける",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 8,
            "shyness": 7
          }
        }
      ],
      [
        "【ガラス器具の触れ合う音にハッとする】ビーカーの触れ合う音に驚き、慌てて服を正す",
        {
          "secrecy": 8,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "実験台の上に押し倒され、彼女と激しく蜜を擦り合わせた。ビーカーがカタカタと揺れる音と、ぬちぬちとした愛液の水音が反響し、背徳の快感に声を殺して啼いた。",
      "薬品棚の陰で制服を乱され、白衣を羽織ったまま秘唇をまさぐられた。薬品の匂いと女の淫臭が混ざり合い、彼女の指先で奥を突かれるたびに腰を浮かせてイッた。",
      "体が実験器具に触れてガラスの音が鳴り、慌てて身体を離した。冷や汗を流しながら、二人で道具を棚に戻して息を整えた。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_bicycle_shed_shadow",
  "title": "学生時代の秘め事・夕暮れの駐輪場と錆びたフェンス",
  "age": [
    14,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_kissed"
  ],
  "weight": 26,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "生徒たちの下校の波が引き、薄暮に包まれた校門脇の駐輪場。奥に並ぶ放置自転車と生い茂る植え込みに隠れた、フェンス際の暗がり。マフラーを巻いた首筋にパートナーの熱い吐息がかかり、金網に背中を押し当てられる。自転車の金属臭と冷たい外気の中、スカートの奥へ滑り込んできた手が下着をずらす……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "金属の冷たさと体温の熱さに翻弄され奥底まで突き入れられる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【自転車のサドルに腰掛けて貫かれる】金属の冷たさと体温の熱さに翻弄されながら、奥底まで突き入れられる。",
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
      "label": "通りかかる足音に怯えながら指でぐちゅぐちゅに掻き回される",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【フェンスに寄りかかり指先で愛液を弄られる】通りかかる生徒の足音に怯えながら、指でぐちゅぐちゅに掻き回される。",
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
      "label": "自転車のライトに驚きマフラーを整えて身を引く",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【ライトの光に慌ててマフラーを直す】校門を出て行く自転車のライトに驚き、マフラーを整えて身を引く。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "駐輪場の奥で自転車のサドルに手をつかされ、背後から一気に貫かれた。下校する生徒たちの笑い声がすぐ近くの通りから聞こえる中、冷たいサドルを握りしめながら奥深くまで突かれ、声を押し殺して絶頂した。",
    "金網フェンスに背中を押し当てられ、スカートの中に冷たい指先を滑り込ませられた。指先が濡れた割れ目をかき分けるぬちぬちとした音に、羞恥で涙を浮かべながらイッてしまった。",
    "自転車のライトがフェンス越しに差し込み、二人で慌てて離れた。冷たい風に火照った頬を撫でられながら、手をつないで帰路についた。"
  ],
  "femaleVariant": {
    "text": "生徒たちの下校の波が引き、薄暮に包まれた校門脇の駐輪場。奥に並ぶ放置自転車と生い茂る植え込みに隠れた暗がり。マフラーを巻いた首筋に彼女の甘い吐息がかかり、フェンスに背中を押し当てられる。冷たい夕暮れの中、スカートの奥へ滑り込んできた彼女の手が下着をずらす……。",
    "choices": [
      [
        "【サドルに手をついて背後から弄られる】金属の冷たさに耐えながら、後ろから奥の天井を指で擦り上げられる",
        {
          "happiness": 5,
          "secrecy": 9,
          "sexualEffects": {
            "desire": 9,
            "shyness": 9
          }
        }
      ],
      [
        "【フェンスに寄りかかり互いの蜜唇を擦り合う】通りかかる足音に怯えながら、スカートを捲って素肌を重ねる",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 8,
            "shyness": 8
          }
        }
      ],
      [
        "【ライトの光に慌ててマフラーを直す】校門を出て行く自転車のライトに驚き、マフラーを整えて身を引く",
        {
          "secrecy": 8,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "駐輪場の奥で自転車のサドルに手をつかされ、彼女の細い指で背後から奥深くを抉られた。下校する生徒たちの笑い声が聞こえるスリルの中、声を押し殺して絶頂した。",
      "金網フェンスに背中を押し当て、女同士の濡れそぼる秘所を強く押し当てて擦り合わせた。冷たい夕風と粘膜の熱さの落差に、息を殺しながら同時に果てた。",
      "自転車のライトがフェンス越しに差し込み、二人で慌てて離れた。冷たい風に火照った頬を撫でられながら、手をつないで帰路についた。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_shrine_summer_festival",
  "title": "学生時代の秘め事・夏祭りの夜と鎮守の杜の木陰",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_intimate"
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "遠くから届く祭囃子の太鼓と笛の音、夜店の明かりが木立の向こうで揺れる神社の境内。人混みを抜け出し、石段を登った先の鎮守の杜の奥、鬱蒼と茂る大木の陰。夜風に揺れる浴衣の裾、鼻腔をくすぐる蚊取り線香と汗の匂い。パートナーの手が帯にかけられ、ほどかれた浴衣から素肌が露わになる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "夜風を浴びながら背後から深く貫かれ祭りの音に声を紛らせる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【大木の幹に手をついて立ったまま交わる】夜風を浴びながら背後から深く貫かれ、祭りの音に声を紛らせる。",
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
      "label": "浴衣の裾をめくられ指先で溢れる愛液を掻き回される",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【石段の隅で下着をずらされ愛撫に溺れる】浴衣の裾をめくられ、指先で溢れる愛液を掻き回される。",
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
      "label": "ドーンと響く花火の音に身体を離し二人で夜空を仰ぐ",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【遠くの花火の音に夜空を見上げる】ドーンと響く花火の音に身体を離し、二人で夜空を仰ぐ。",
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "reflection"
  ],
  "diary": [
    "神社の裏山の大木に手をつかされ、浴衣をめくられて背後から貫かれた。遠くで響く太鼓の音と歓声に紛れて激しく腰を打ちつけられ、玉砂利に足指を食い込ませながら絶頂した。",
    "石段の影で浴衣の帯をほどかれ、下着の中に指を差し入れられた。夏の夜風が素肌を撫でる中、指先でぐちゃぐちゃになるまで弄られ、相手の肩に噛みついて声を殺してイッた。",
    "打ち上げ花火の轟音が響き、二人で空を見上げた。木々の隙間から覗く鮮やかな大輪の光の下、手をつなぎ合って微笑んだ。"
  ],
  "femaleVariant": {
    "text": "遠くから届く祭囃子の太鼓と笛の音、夜店の明かりが木立の向こうで揺れる神社の境内。人混みを抜け出し、石段を登った先の鎮守の杜の奥。夜風に揺れる浴衣の裾、蚊取り線香と汗の匂い。彼女の細い指が浴衣の帯にかけられ、結び目が解かれて白い素肌が露わになる……。",
    "choices": [
      [
        "【大木の幹に寄り添い互いの蜜壺を擦り合う】夜風を浴びながら浴衣を乱し、女同士の濡れた割れ目を激しく押し当てて交わる",
        {
          "happiness": 5,
          "secrecy": 9,
          "sexualEffects": {
            "desire": 10,
            "shyness": 8
          }
        }
      ],
      [
        "【石段の隅で下着をずらされ愛撫に溺れる】浴衣の裾をめくられ、繊細な指先で溢れる愛液を掻き回される",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 8,
            "shyness": 7
          }
        }
      ],
      [
        "【遠くの花火の音に夜空を見上げる】ドーンと響く花火の音に身体を離し、二人で夜空を仰ぐ",
        {
          "happiness": 4,
          "stress": -2
        }
      ]
    ],
    "diary": [
      "神社の裏山の大木の陰で浴衣をはだけさせ、彼女と濡れた蜜唇を激しく擦り合わせた。遠くの太鼓の音に紛れて女同士の湿った水音が響き、玉砂利を踏み締めながら同時に果てた。",
      "石段の影で浴衣の帯をほどかれ、彼女の指先で奥の天井を擦り上げられた。夏の夜風が素肌を撫でる中、ぐちゅぐちゅと溢れる愛液で浴衣を汚しながら絶頂した。",
      "打ち上げ花火の轟音が響き、二人で空を見上げた。木々の隙間から覗く鮮やかな大輪の光の下、手をつなぎ合って微笑んだ。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_winter_kotatsu",
  "title": "学生時代の秘め事・留守番のこたつと重なる足先",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "school_student",
    "rel_stage_intimate"
  ],
  "weight": 28,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "外はしんしんと雪が降る冬休みの午後。家族が出払った静かな居間、二人で潜り込んだ暖かいこたつ。みかんの甘酸っぱい香りとテレビの微かな音。こたつ布団の中でパートナーの素足がすり寄ってきて、ふくらはぎから太ももの内側を撫で上げられる。布団の温もりに包まれた密室で、甘い熱が下腹に満ちていく……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "布団に潜り込み温かな密室で密着して奥深くまで貫かれる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【こたつ布団の中で下着を脱ぎ捨てて重なる】布団に潜り込み、温かな密室で密着して奥深くまで貫かれる。",
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
      "label": "スカートの下へ忍び込んできた手に愛液をあふれさせ蕩ける",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【布団の中で指先を奥底まで這わせる】スカートの下へ忍び込んできた手に、愛液をあふれさせながら蕩ける。",
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
      "label": "高鳴る胸を落ち着かせ肩を寄せ合ってお茶をすする",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【温かいお茶を飲んで寄り添う】高鳴る胸を落ち着かせ、肩を寄せ合ってお茶をすする。",
          "effects": [
            {
              "path": "state.mood",
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
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "reflection"
  ],
  "diary": [
    "こたつの中に二人で潜り込み、布団の中で下着を脱ぎ捨てて身体を重ねた。こたつの熱気と互いの体温が混ざり合い、汗だくになりながら奥深くまで突かれ、声を布団で押し殺して何度も絶頂した。",
    "こたつ布団の暗がりでスカートをめくられ、指先で濡れた割れ目を解された。外の雪の静けさの中、ぬちぬちと鳴る水音に羞恥で顔を真っ赤にしながらイッてしまった。",
    "こたつで肩を寄せ合い、温かい緑茶を飲んだ。外の寒さを忘れるような穏やかな時間の中で、互いの体温の愛おしさを噛み締めた。"
  ],
  "femaleVariant": {
    "text": "外はしんしんと雪が降る冬休みの午後。家族が出払った静かな居間、二人で潜り込んだ暖かいこたつ。みかんの香りと静かな時間。こたつ布団の中で彼女の素足がすり寄ってきて、ふくらはぎから太ももの内側を撫で這う。布団の温もりに包まれた密室で、甘い熱が下腹に満ちていく……。",
    "choices": [
      [
        "【こたつ布団の中で下着を脱ぎ捨てて重なる】布団に潜り込み、温かな密室で互いの蜜壺を狂おしく擦り合わせる",
        {
          "happiness": 5,
          "secrecy": 6,
          "sexualEffects": {
            "desire": 9,
            "intimacyNeed": 9
          }
        }
      ],
      [
        "【布団の中で指先を奥底まで這わせる】スカートの下へ忍び込んできた彼女の指に、愛液をあふれさせながら蕩ける",
        {
          "happiness": 4,
          "secrecy": 5,
          "sexualEffects": {
            "desire": 8,
            "intimacyNeed": 7
          }
        }
      ],
      [
        "【温かいお茶を飲んで寄り添う】高鳴る胸を落ち着かせ、肩を寄せ合ってお茶をすする",
        {
          "happiness": 4,
          "stress": -3
        }
      ]
    ],
    "diary": [
      "こたつの中に二人で潜り込み、布団の中で下着を脱ぎ捨てて身体を重ねた。こたつの熱気と互いの体温が混ざり合い、汗だくになりながら女同士の蜜を押し付け合い、何度も絶頂した。",
      "こたつ布団の暗がりでスカートをめくられ、彼女の繊細な指先で奥の天井を擦り上げられた。外の雪の静けさの中、ぬちぬちと鳴る水音に羞恥で顔を真っ赤にしながらイッてしまった。",
      "こたつで肩を寄せ合い、温かい緑茶を飲んだ。外の寒さを忘れるような穏やかな時間の中で、互いの体温の愛おしさを噛み締めた。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_morning_quickie",
  "title": "学生時代の秘め事・登校前5分の玄関先での駆け込み情事",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_intimate"
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "朝の登校前、迎えに来てくれたパートナーを誰もいない玄関先に招き入れたわずかな時間。靴を脱ぐ間さえ惜しむように壁へと押し付けられ、激しいキスとともに制服のスカートをたくし上げられる。あと数分で家を出なければ遅刻するという焦燥感が、やりたい盛りの二人の欲望を狂おしく煽り立てる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "立ったまま壁に手をついて背後から一気に貫かれる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【玄関のたたきで立ったまま】ショーツを足首まで下ろされ、時間のない焦りの中で奥深くまで激しく突かれる。",
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
      "label": "下着越しに愛液をまさぐられ玄関先で喘ぎを漏らす",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【靴箱に寄りかかって】服の上から激しくまさぐられ、朝の玄関でぐちゅぐちゅに濡らされてイく。",
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
      "label": "時計の針を見て慌てて制服を整える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【遅刻ギリギリで我に返る】時計のアラームに飛び退き、乱れた髪とスカートを直して駆け出す。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "登校前の玄関先で、靴を履いたままスカートを捲られて後ろから貫かれた。遅刻しそうなスリルの中、乱暴なピストンに声を押さえ込んで絶頂し、足腰がガクガクのまま登校した。",
    "朝の玄関で相手に抱きすくめられ、下着の中に指を突っ込まれた。朝から愛液で下着を濡らしながら、学校へ行く道中ずっと下腹が疼いて困った。",
    "時計の音で我に返って慌てて身体を離した。二人で走って登校しながら、顔を見合わせて吹き出してしまった。"
  ],
  "femaleVariant": {
    "text": "朝の登校前、迎えに来てくれた彼女を誰もいない玄関先に招き入れたわずかな時間。靴を脱ぐ間さえ惜しむように壁へと押し付けられ、甘いキスとともに制服のスカートをたくし上げられる。あと数分で家を出なければ遅刻するという焦燥感が、やりたい盛りの二人の欲望を狂おしく煽り立てる……。",
    "choices": [
      [
        "【玄関のたたきで立ったまま】ショーツをずらし、女同士の濡れた割れ目を強く擦り合わせて声を殺す",
        {
          "happiness": 5,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 9,
            "shyness": 8
          }
        }
      ],
      [
        "【靴箱に寄りかかって】制服の中に指を滑り込ませられ、朝の玄関先で愛液を掻き回されて絶頂する",
        {
          "happiness": 4,
          "secrecy": 7,
          "sexualEffects": {
            "desire": 8,
            "shyness": 7
          }
        }
      ],
      [
        "【遅刻ギリギリで我に返る】時計のアラームに飛び退き、乱れた髪とスカートを直して駆け出す",
        {
          "secrecy": 7,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "登校前の玄関先で、靴を履いたまま彼女とスカートを捲り合って蜜を擦り合わせた。遅刻しそうなスリルの中、声を押さえ込んで絶頂し、足腰がガクガクのまま登校した。",
      "朝の玄関で彼女に抱きすくめられ、下着の中に細い指を突っ込まれた。朝から愛液で下着を濡らしながら、学校へ行く道中ずっと下腹が疼いて困った。",
      "時計の音で我に返って慌てて身体を離した。二人で走って登校しながら、顔を見合わせて吹き出してしまった。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_restroom_stall_secret",
  "title": "学生時代の秘め事・10分休みのトイレ個室での密会",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_intimate"
  ],
  "weight": 26,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "授業と授業の間のわずか10分の休み時間。校舎の隅にある使われていない多目的トイレに、二人で滑り込んで内鍵をかけた。狭い個室に満ちる二人の荒い息遣い。チャイムが鳴るまでの短い時間に、飢えたように制服を乱し合い、便座の蓋の上に腰掛けさせられる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "便座の上で抱き合って素早く奥深くまで貫かれる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【個室の便座の上で】チャイムの予鈴に怯えながら、立ったままの相手に奥底まで突かれる。",
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
      "label": "口元を塞がれながら指先で激しく掻き回される",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【壁に押し付けられて】外を歩く生徒の足音に怯え、口を塞がれながら指で絶頂させられる。",
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
      "label": "ノックの音に息を止めて慌てて服を正す",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【外のノック音に凍りつく】ドアをコンコンと叩かれ、息を殺して服を直し一人ずつ出る。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "10分休みにトイレの個室に連れ込まれ、便座の上でスカートを捲られて貫かれた。外を生徒が歩く足音が聞こえる中、声を出さないよう相手の首筋に噛みついて絶頂した。",
    "狭い個室で口を塞がれながら指で激しく愛撫された。チャイムが鳴り響く中、太ももを伝う愛液をトイレットペーパーで慌てて拭き取って教室へ走った。",
    "ドアをノックされて心臓が止まるかと思った。何食わぬ顔で時間差で出て行ったけれど、教室に戻っても身体の火照りが収まらなかった。"
  ],
  "femaleVariant": {
    "text": "授業と授業の間のわずか10分の休み時間。校舎の隅にある使われていない多目的トイレに、彼女と二人で滑り込んで内鍵をかけた。狭い個室に満ちる二人の荒い息遣い。チャイムが鳴るまでの短い時間に、飢えたように制服を乱し合い、便座の蓋の上に腰掛けさせられる……。",
    "choices": [
      [
        "【個室の便座の上で】チャイムの予鈴に怯えながら、互いの濡れた秘唇を狂おしく擦り合わせる",
        {
          "happiness": 5,
          "secrecy": 9,
          "sexualEffects": {
            "desire": 9,
            "shyness": 9
          }
        }
      ],
      [
        "【壁に押し付けられて】外を歩く生徒の足音に怯え、口を塞がれながら彼女の指先で絶頂させられる",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 8,
            "shyness": 8
          }
        }
      ],
      [
        "【外のノック音に凍りつく】ドアをコンコンと叩かれ、息を殺して服を直し一人ずつ出る",
        {
          "secrecy": 8,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "10分休みにトイレの個室に連れ込まれ、便座の上で彼女と激しく蜜を擦り合わせた。外の足音に怯えながら声を押さえ込んで絶頂し、震える足で教室へ戻った。",
      "狭い個室で口を塞がれながら彼女の指で激しく愛撫された。チャイムが鳴り響く中、溢れる愛液を拭き取って教室へ駆け込んだ。",
      "ドアをノックされて心臓が止まるかと思った。何食わぬ顔で時間差で出て行ったけれど、教室に戻っても身体の火照りが収まらなかった。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_skip_class_sickbay",
  "title": "学生時代の秘め事・二人でサボった午後の保健室",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_intimate"
  ],
  "weight": 26,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "退屈な午後の授業を仮病で抜け出し、保健室の奥のベッドで合流した二人。先生が出張で不在の静まり返った部屋。カーテンを閉め切ったベッドの中で、制服のボタンを外し合う。外からは校庭の体育の掛け声が聞こえる中、昼下がりの背徳的な快楽に身体を沈めていく……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "白いシーツの上で貪るように腰を打ちつけ合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【保健室のパイプベッドで】午後の日差しを浴びながら、愛液でシーツを濡らして果てる。",
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
      "label": "カーテンの隙間からの光に怯えながら指で解される",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【毛布にくるまりながら】誰かが入ってくるかもしれない恐怖の中で、指先で奥を突かれて啼く。",
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
      "label": "他の生徒が保健室を訪れる気配に息を潜める",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【ガラガラと引き戸が開く音に】具合の悪い生徒が入ってきて、布団を被って息を殺す。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "授業をサボって保健室のベッドで二人きりで身体を重ねた。校庭のざわめきが聞こえる中、白いシーツを掴んで激しく突かれ、何度も狂ったように絶頂した。",
    "午後の保健室でカーテンを閉め切って愛撫された。外の明るさに恥ずかしさを覚えながら、濡れそぼる秘所を指で弄られ、毛布に顔を埋めて喘いだ。",
    "ガラガラと保健室のドアが開いて心臓が跳ね上がった。布団の中で密着したまま息を潜め、相手の心音の激しさを肌で感じた。"
  ],
  "femaleVariant": {
    "text": "退屈な午後の授業を仮病で抜け出し、保健室の奥のベッドで合流した二人。先生が出張で不在の静まり返った部屋。カーテンを閉め切ったベッドの中で、制服のボタンを外し合う。外からは校庭の体育の掛け声が聞こえる中、昼下がりの背徳的な快楽に身体を沈めていく……。",
    "choices": [
      [
        "【保健室のパイプベッドで】互いの柔肌を密着させ、女同士の濡れた蜜壺を狂おしく擦り合わせる",
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
        "【毛布にくるまりながら】カーテンの隙間からの光に怯え、彼女の繊細な指先で奥を掻き回される",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 8,
            "shyness": 7
          }
        }
      ],
      [
        "【ガラガラと引き戸が開く音に】具合の悪い生徒が入ってきて、布団を被って息を殺す",
        {
          "secrecy": 8,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "授業をサボって保健室のベッドで彼女と身体を重ねた。校庭のざわめきが聞こえる中、白いシーツを掴んで女同士の蜜を激しく擦り合わせ、何度も絶頂した。",
      "午後の保健室でカーテンを閉め切って彼女に愛撫された。外の明るさに恥ずかしさを覚えながら、奥を指で弄られ、毛布に顔を埋めて喘いだ。",
      "ガラガラと保健室のドアが開いて心臓が跳ね上がった。布団の中で密着したまま息を潜め、彼女の心音の激しさを肌で感じた。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_desk_underneath_mischief",
  "title": "学生時代の秘め事・勉強机の下に潜り込んでの淫らな悪戯",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "school_student",
    "rel_stage_intimate"
  ],
  "weight": 28,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "期末試験の勉強中、相手の自室の勉強机。真面目にノートを取っていたはずが、相手が机の下へと潜り込んできた。制服のプリーツスカートの中に頭を突っ込まれ、太ももの内側を這い上がる熱い舌。机の上でペンを握りしめながら、机の下で繰り広げられる過激な愛撫に頭が痺れていく……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "机に突っ伏しながら口内で貪り尽くされて果てる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【机の下で舌を使われて】ノートの上に突っ伏し、ショーツをずらされて敏感な突起を吸い尽くされる。",
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
      "label": "机から引きずり出してベッドへ押し倒す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【我慢できなくなって】勉強を放り出し、相手を机の下から引き出して激しく重なり合う。",
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
      "id": "choice_2",
      "label": "頭を軽く叩いて勉強に戻らせる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【「ダメ、集中できない！」と怒る】赤面しながらスカートを押さえ、問題集へと視線を戻す。",
          "effects": [
            {
              "path": "skill.knowledge",
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
    "机に向かって勉強している最中、机の下に潜り込まれてスカートの中を直接舐められた。ノートにペン先を突き立てて声を殺しながら、全身を震わせて机の上でイッてしまった。",
    "机の下からの執拗な悪戯に我慢できなくなり、ノートを放り出してベッドへ倒れ込んだ。やりたい盛りの情熱のまま、朝まで身体を重ね合った。",
    "「勉強するって約束したでしょ！」と相手の頭を小突いた。名残惜しそうに出てくる相手の顔を見ながら、太ももの間がじっとりと濡れていた。"
  ],
  "femaleVariant": {
    "text": "期末試験の勉強中、彼女の自室の勉強机。真面目にノートを取っていたはずが、彼女が机の下へと潜り込んできた。制服のプリーツスカートの中に頭を突っ込まれ、太ももの内側を這い上がる温かい舌先。机の上でペンを握りしめながら、机の下で繰り広げられる過激な愛撫に頭が痺れていく……。",
    "choices": [
      [
        "【机の下で舌を使われて】ノートの上に突っ伏し、ショーツをずらされて敏感な突起を吸い尽くされる",
        {
          "happiness": 5,
          "secrecy": 7,
          "sexualEffects": {
            "desire": 9,
            "shyness": 8
          }
        }
      ],
      [
        "【我慢できなくなって】勉強を放り出し、彼女を机の下から引き出してベッドで激しく重なり合う",
        {
          "happiness": 5,
          "secrecy": 6,
          "sexualEffects": {
            "desire": 9,
            "intimacyNeed": 8
          }
        }
      ],
      [
        "【「ダメ、集中できない！」と怒る】赤面しながらスカートを押さえ、問題集へと視線を戻す",
        {
          "knowledge": 3,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "机に向かって勉強している最中、彼女に机の下に潜り込まれてスカートの中を舐められた。ノートにペン先を突き立てて声を殺しながら、全身を震わせて机の上でイッてしまった。",
      "机の下からの執拗な悪戯に我慢できなくなり、ノートを放り出してベッドへ倒れ込んだ。女同士の濡れた蜜をぶつけ合い、朝まで身体を重ね合った。",
      "「勉強するって約束したでしょ！」と彼女の肩を小突いた。名残惜しそうに出てくる彼女の顔を見ながら、太ももの間がじっとりと濡れていた。"
    ]
  }
});

window.defineEvent({
  "id": "student_partner_bus_backseat_tryst",
  "title": "学生時代の秘め事・雨の終バス最後列での制服まさぐり",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
    "rel_stage_intimate"
  ],
  "weight": 26,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "雨の降る平日の最終バス。他に乗客がほとんどいない薄暗い車内、一番奥の最後列シートに二人で深く沈み込む。外の雨音とエンジンの低い唸りが周囲を遮断する中、相手の手がスクールバッグの陰から伸びてくる。コートで隠しながらスカートをめくられ、タイツの股間をまさぐられる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "座席の揺れに合わせて指を沈められ息を殺して果てる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【最後列のシートで】エンジンの振動に煽られながら、濡れた下着越しに指先で奥まで弄られる。",
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
      "label": "相手の首筋にしがみついて耳元で甘い喘ぎを漏らす",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【コートの中で抱き合って】運転手のバックミラーに怯えながら、耳元で吐息を交わし合う。",
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
      "label": "降車ボタンのチャイムに慌てて服を整える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【停留所のアナウンスで我に返る】ピンポーンと鳴る音に驚き、慌ててスカートを下ろす。",
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
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "diary": [
    "雨の終バスの最後列で、スクールバッグに隠れながらスカートの中に手を入れられた。バスの揺れとエンジンの振動に合わせて指で奥を掻き回され、声を押し殺して絶頂した。",
    "誰もいない終バスでコートを被りながらいちゃついた。運転手に見られるかもしれないスリルの中、耳元で甘い息を吐き合って身体中が熱くなった。",
    "降車ボタンの音に心臓が止まりそうになった。慌ててスカートを直して降りたけれど、雨の夜道を手をつないで歩く足取りがふわふわと浮いていた。"
  ],
  "femaleVariant": {
    "text": "雨の降る平日の最終バス。他に乗客がほとんどいない薄暗い車内、一番奥の最後列シートに彼女と二人で深く沈み込む。外の雨音とエンジンの低い唸りが周囲を遮断する中、彼女の手がスクールバッグの陰から伸びてくる。コートで隠しながらスカートをめくられ、タイツの股間をまさぐられる……。",
    "choices": [
      [
        "【最後列のシートで】エンジンの振動に煽られながら、彼女の指先で濡れた割れ目を深く弄られる",
        {
          "happiness": 5,
          "secrecy": 9,
          "sexualEffects": {
            "desire": 9,
            "shyness": 9
          }
        }
      ],
      [
        "【コートの中で抱き合って】運転手のバックミラーに怯えながら、耳元で甘い吐息を交わし合う",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 8,
            "shyness": 7
          }
        }
      ],
      [
        "【停留所のアナウンスで我に返る】ピンポーンと鳴る音に驚き、慌ててスカートを下ろす",
        {
          "secrecy": 8,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "雨の終バスの最後列で、バッグに隠れながら彼女にスカートの中に手を入れられた。バスの揺れに合わせて指で奥を掻き回され、声を押し殺して絶頂した。",
      "誰もいない終バスでコートを被りながらいちゃついた。運転手に見られるかもしれないスリルの中、耳元で甘い息を吐き合って身体中が熱くなった。",
      "降車ボタンの音に心臓が止まりそうになった。慌ててスカートを直して降りたけれど、雨の夜道を手をつないで歩く足取りがふわふわと浮いていた。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 26. 昼休みの屋上フェンス陰・早弁代わりの青空情事 */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_roof_towel_hide",
  "title": "昼休みの屋上フェンス陰・早弁代わりの青空情事",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
  ],
  "weight": 27,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "四時間目のチャイムが鳴り響くと同時、お弁当箱を抱えて立ち上がった{partner}と目配せを交わし、教室を抜け出した。向かったのは立ち入り禁止の屋上へと続く重い鉄扉の先。フェンスの陰、貯水タンクの死角に敷いた一枚のビニールシートが、二人の秘密の逢瀬の場所だった。\n\n「ご飯より先……我慢できないんだけど」\n吹き抜ける五月の風がスカートの裾を揺らす中、{partner}は包みを開くどころか、焦れた吐息とともに私のブレザーの胸元へ手を滑り込ませてきた。昼休みはわずか四十分。下界のグラウンドからは運動部の賑やかな声やクラスメイトの笑い声が風に乗って届いてくるのに、私のブラウスのボタンは次々と外され、陽光の下に剥き出しになった白皙の胸元を熱い唇で貪られる。\n\n「っ、んぁ……誰か、上がってきたらどうするの……っ」\n「誰も来ないよ。……ほら、ここ、風が当たって寒いはずなのに、もうこんなに熱くて濡れてる」\n背中を冷たいコンクリートの壁に押しつけられ、たくし上げられた制服のプリーツスカートの奥、ショーツを横にずらされて指先が蜜壷の入口をぬちりと割った。晴天の青空の下、クラスメイトたちがパンをかじっている時間に、私は愛液で指を濡らしながら声を殺して身体をくねらせている。その背徳的な開放感に下腹が疼いて仕方がなかった。",
  "choices": [
    {
      "label": "フェンスに手をついて声を押し殺しながら貪り合う",
      "outcome": "フェンスの網目に指を絡めて立ち尽くす姿勢のまま、背後からたくし上げられたスカート越しに貫かれた。コンクリートを蹴るスニーカーの軋みと、青空に吸い込まれる湿った水音。階下のざわめきに怯えながら、何度も子宮口を突き上げられて頭が真っ白になるほど絶頂した。",
      "effects": {
        "relationship": 8,
        "stress": -10,
        "libido": 10,
        "morality": -4
      }
    },
    {
      "label": "「お昼ご飯も食べさせてよ」とお弁当を広げつつ悪戯される",
      "outcome": "広げたお弁当のおかずを口移しで食べさせられながら、スカートの奥では指先でクリトリスを執拗に転がされた。甘い卵焼きの味と、下半身から立ち上る淫らな愛液の匂いが混ざり合い、味覚も触覚も蕩けるような快楽に溺れた。",
      "effects": {
        "relationship": 7,
        "stress": -8,
        "libido": 7,
        "charm": 2
      }
    },
    {
      "label": "予鈴が鳴るギリギリまで互いの制服を乱してイチャつく",
      "outcome": "午後の五時間目の予鈴が遠く鳴り響くまで、互いの唇を貪り、汗と愛液で制服のシャツを湿らせ合って抱き締め合った。急いでボタンを留め直し、赤く上気した頬と濡れた下着の重みを隠しながら、二階の教室へと小走りで駆け下りた。",
      "effects": {
        "relationship": 6,
        "stress": -6,
        "libido": 8,
        "morality": -3
      }
    }
  ],
  "diary": [
    "昼休みの屋上のフェンス陰で、グラウンドのざわめきを聞きながら{partner}と繋がった。青空の下でスカートをめくられる恥ずかしさとスリルで、信じられないくらい濡れてしまった。",
    "お弁当を食べる暇もないくらい、屋上の貯水タンクの裏で抱き合ってキスをした。下着がぐっしょり濡れたまま五時間目の授業を受けることになって、ずっと下腹が疼いていた。",
    "「ご飯よりお前がいい」って耳元で囁かれて、フェンスに押し倒されるようにして愛撫された。制服のボタンを留め直す指が震えて、予鈴ギリギリに教室に滑り込んだ。"
  ],
  "femaleVariant": {
    "text": "四時間目のチャイムが鳴ると同時、お弁当箱を抱えた{partner}と視線を交わし、教室の喧噪を背に屋上へと駆け上がった。錆びた鉄扉の先、立ち入り禁止の看板を越えた貯水タンクの死角。冷たいコンクリートの上にビニールシートを敷く間ももどかしく、{partner}の細い指先が私のセーラーの胸当てを引っ張った。\n\n「ねえ……お弁当より先に、もっと美味しいところ食べさせてよ」\n風が吹き抜ける屋上。下界のグラウンドからは体育の号令や友だちの笑い声が聞こえてくるのに、彼女の唇は私の鎖骨から胸元へと吸い付き、濡れた音を立てて赤い痕を刻みつけていく。青空の下で剥き出しにされる恥じらいと、いつ誰が屋上への扉を開けるかわからない恐怖。\n\n「んっ、ぁ……声、響いちゃうよ……っ」\n「じゃあ、私の肩に噛みついて我慢して……」\nたくし上げたスカートの奥、薄いレースのショーツに彼女の掌が滑り込むと、熱く蒸れた割れ目からぬるりと愛液が溢れ出した。風に吹かれて冷える太ももと、指先で執拗に弄られる秘唇の熱い摩擦。女同士のただれた秘密の時間が、昼休みの澄んだ青空を背徳の熱気で染め替えていった。",
    "choices": [
      [
        "フェンスに額を押しあてて彼女の指を受け入れる",
        {
          "stats": {
            "relationship": 8,
            "stress": -10,
            "intimacy": 10,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "お弁当のおかずを口移しで分け合いながら弄ばれる",
        {
          "stats": {
            "relationship": 7,
            "stress": -8,
            "intimacy": 8,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "予鈴が鳴るまで抱き合い、乱れた髪と制服を直し合う",
        {
          "stats": {
            "relationship": 6,
            "stress": -6,
            "intimacy": 7,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "屋上のフェンスの陰で、グラウンドの声を聞きながら{partner}に指で奥を掻き回された。青空の下で下着をずらされる恥ずかしさに、身体が熱くなって声を抑えきれなかった。",
      "「お弁当よりこっちが甘い」って笑いながら、スカートの奥を弄られた。濡れたショーツの感触を引きずったまま五時間目の授業に出て、座っているだけで下腹が疼いた。",
      "予鈴が鳴るまで互いの制服を乱し合ってキスをした。唇に残った彼女のリップの味と、乱れた息を整えながら二人で小走りに教室へ戻った。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 27. 部活終わり・更衣室シャワー室の鍵を閉めての密着情交 */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_club_shower_sneak",
  "title": "部活終わり・更衣室シャワー室の鍵を閉めての密着情交",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "部活の居残り練習が終わり、グラウンドも体育館もすっかり静まり返った夕暮れ時。他の部員たちが帰り支度を終えて部室棟を出ていくのを見届けてから、私は更衣室の奥にある狭いシャワールームへと忍び込んだ。カチリと内側から鍵を掛けた直後、湿った個室の扉が外からノックされ、待っていた{partner}が滑り込んできた。\n\n「誰もいなくなったね……早く、一緒に汗流そ」\n狭いタイルのブース。蛇口をひねると、勢いよく吹き出したぬるいお湯が二人の汗ばんだ肌を一気に濡らしていった。濡れそぼって肌に張り付く体操着のTシャツと短パン。透けた薄い生地越しに胸の突起や腰のくびれが露わになり、{partner}の瞳が欲望に濁るのが分かった。\n\n「っ、ちょ……服のまま、抱きつかないで……っ」\n「濡れて透けてるお前、めちゃくちゃエロいよ……」\n熱いシャワーの飛沫が降り注ぐ中、濡れたTシャツをまくり上げられ、背中を冷たいタイルの壁に押しつけられる。シャンプーと石鹸の匂い、そして水滴に混ざり合う汗と性欲の熱気。タイルの冷たさと{partner}の肌の熱さの対比に、下腹の奥がきゅんと収縮して湿った水音を立て始めた。",
  "choices": [
    {
      "label": "濡れたタイルの壁に手をついて立ったまま絡み合う",
      "outcome": "降り注ぐシャワーの音にかき消されるのをいいことに、壁に手をついた体勢で激しく突き上げられた。タイルの冷たさと身体の芯から湧き上がる熱湯のような快感に、声を押し殺しながら腰を震わせて何度も達した。",
      "effects": {
        "relationship": 8,
        "stress": -10,
        "libido": 10,
        "morality": -4
      }
    },
    {
      "label": "互いの身体に石鹸の泡を塗り広げて滑らせ合う",
      "outcome": "石鹸の白い泡をたっぷり泡立て、互いの胸や太ももを滑り合わせるように撫でさすった。ヌルヌルとした肌の摩擦と、秘唇を泡越しに滑る指先の刺激に、息を切らしながらとろけそうな快感に浸った。",
      "effects": {
        "relationship": 7,
        "stress": -9,
        "libido": 8,
        "charm": 2
      }
    },
    {
      "label": "見回りの先生の足音に怯えながらシャワーを止めて息を潜める",
      "outcome": "部室棟の廊下を歩く顧問の見回りの足音が聞こえ、慌ててシャワーを止めて裸のまま固く抱き合って息を止めた。扉一枚隔てた距離の緊張感に、濡れた肌が擦れ合って心臓が跳ね上がるようなスリルを味わった。",
      "effects": {
        "relationship": 6,
        "stress": -5,
        "libido": 7,
        "morality": -3
      }
    }
  ],
  "diary": [
    "放課後の誰もいない更衣室のシャワー室で、鍵を掛けて{partner}と二人で汗を流した。タイルの壁に押しつけられて、シャワーの音に紛れて声を上げながら抱き合った。",
    "濡れた体操着のままシャワー室に入って、透けた身体を貪り合った。石鹸の泡で滑る身体を擦り合わせる感触が忘れられない。",
    "見回りの先生の足音が廊下に響いて、裸のまま二人で抱き合って息を殺した。バレたら退学かもしれないスリルで、信じられないくらい下腹が濡れていた。"
  ],
  "femaleVariant": {
    "text": "部活の片付けが終わり、薄暗くなった部室棟。最後の部員が「お先ー」と玄関を出ていく靴音を確認してから、私は更衣室の一番奥にあるシャワー室に足を踏み入れた。背後から音もなくついてきた{partner}が、小さな鍵をカチリと回して密室を完成させる。\n\n「ふふ、やっと二人きりになれたね……」\n狭いタイルの空間。ひねったシャワーヘッドから温かい湯が降り注ぎ、二人の汗ばんだ髪と部活用のプラクティスシャツを一瞬でびしょ濡れにしていく。濡れた白シャツが肌に透け、淡い色のブラジャーとピンク色の乳首が浮き彫りになるのを、彼女は熱っぽい瞳で見つめていた。\n\n「っ、やだ……透けてるの、じっと見ないでよ……っ」\n「見てるだけじゃ足りないよ……」\n濡れて重くなったシャツの裾を両手で持ち上げられ、温かいシャワーの下で胸の先端を舌先で転がされる。タイルのひんやりとした感触と、彼女の口内の熱さ。更衣室に立ち込める湯気と石鹸の香りの中、お互いの濡れそぼった太ももが擦れ合い、水音とは違うねっとりとした分泌液が溢れ出していった。",
    "choices": [
      [
        "シャワーを浴びながら壁際で指を奥まで受け入れる",
        {
          "stats": {
            "relationship": 8,
            "stress": -10,
            "intimacy": 10,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "石鹸の泡を互いの肌に塗りたくってヌルヌルと擦り合う",
        {
          "stats": {
            "relationship": 7,
            "stress": -9,
            "intimacy": 8,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "顧問の巡回に怯えてシャワーを止め、裸で固く抱き合う",
        {
          "stats": {
            "relationship": 6,
            "stress": -5,
            "intimacy": 7,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "誰もいない更衣室のシャワー室で、鍵を閉めて{partner}と汗を流した。温かいお湯に打たれながら指で中を掻き回されて、タイルの壁に額をつけて喘いでしまった。",
      "濡れたシャツが透けて肌に張り付くのが恥ずかしくて、でも彼女に石鹸で身体中を撫で回されて腰がくだけた。湯気の中に甘い匂いが立ち込めていた。",
      "見回りの先生が部室の鍵を閉める音が聞こえて、シャワーを止めて二人で裸のまま息を殺した。心臓の音が重なるような距離で、背徳感に震えていた。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 28. 放課後のゲームセンター・薄暗いペアシートでの下着まさぐり */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_game_center_booth",
  "title": "放課後のゲームセンター・薄暗いペアシートでの下着まさぐり",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
  ],
  "weight": 27,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "放課後の駅前、ネオンが明滅する雑居ビルの地下にある薄暗いゲームセンター。コインの落ちる甲高い音や派手な電子音が轟くフロアの最奥、カップル向けの対戦レースゲームの筐体には、周囲の視線を遮るように高い背もたれのペアシートが備え付けられていた。\n\n「ほら、隣座って。画面見てれば誰からも見えないから」\n{partner}に手首を引かれてシートの奥へ滑り込むと、二人の肩がぴったりと密着した。コインを投入してゲームをスタートさせ、ハンドルを握る私の太ももへ、膝掛け代わりに広げたスクールバッグの下から{partner}の右手が這い上がってきた。\n\n「っ、ちょ……ゲーム、集中できないよ……っ」\n「集中しなくていいよ。……ほら、クラクション鳴ってる」\nプリーツスカートの裾が捲られ、タイツの上から股間を弄る指先。周囲では学生たちが格闘ゲームに熱狂している爆音の中、私の下着にはじわりと熱い染みが広がり、薄い布越しに直接クリトリスを擦り上げられるたび、ビクンと腰が浮いてハンドルを持つ手が激しく狂った。",
  "choices": [
    {
      "label": "ゲームのハンドルを握りしめながら指先の愛撫に耐える",
      "outcome": "画面の中のマシンが壁に激突するのも構わず、下腹をまさぐる指の刺激に必死で耐えた。ゲームオーバーのファンファーレが鳴り響く瞬間、ショーツの中に潜り込んできた指に奥を突かれ、嬌声を喉の奥で押し殺して絶頂した。",
      "effects": {
        "relationship": 7,
        "stress": -8,
        "libido": 9,
        "morality": -3
      }
    },
    {
      "label": "バッグを盾にしてこちらも相手の股間に手を伸ばす",
      "outcome": "制服のバッグで手元を隠しながら、隣の{partner}のズボンのファスナーに手を伸ばした。膨らみきった熱い熱を握りしめると、{partner}も息を詰まらせて耳元を真っ赤にし、二人で電子音の渦の中で互いを貪り合った。",
      "effects": {
        "relationship": 8,
        "stress": -9,
        "libido": 10,
        "morality": -4
      }
    },
    {
      "label": "店員の巡回に慌てて体勢を戻し、何食わぬ顔でリトライする",
      "outcome": "「お客様、店内での迷惑行為は……」と巡回の店員が近づいてくる気配に、慌てて手を引き抜いて背筋を伸ばした。すれ違いざまの緊迫感に心臓が早鐘を打ち、濡れ切ったスカートの感触を噛み締めながらリトライボタンを押した。",
      "effects": {
        "relationship": 6,
        "stress": -5,
        "libido": 6,
        "morality": -2
      }
    }
  ],
  "diary": [
    "放課後、ゲーセンの奥のペアシートでゲームの爆音に紛れてスカートの中に手を入れられた。周りに人がいるのに、バッグの下で指をぐちゃぐちゃに濡らされて頭がおかしくなりそうだった。",
    "レースゲームの筐体で、画面を見ながら互いの股間をまさぐり合った。派手なBGMのせいで吐息も聞こえなくて、それがかえってエスカレートしてしまった。",
    "店員さんが回ってきたとき、慌ててスカートを直したけれど、太ももの内側が自分の蜜でぬるぬるになっていて歩くのが大変だった。"
  ],
  "femaleVariant": {
    "text": "駅前の薄暗いゲームセンター、重低音がフロアを揺らす音楽ゲームコーナーの裏手。仕切りの高いソファ席が並ぶレトロゲームのブースに、{partner}と二人で身を寄せ合って座った。周囲にはヘッドホンをつけて画面に見入る客ばかりで、こちらを気にする者はいない。\n\n「ここ、暗くて落ち着くね……制服、脱がせちゃいたい」\n{partner}はそう囁きながら、膝の上に広げた大きなスポーツバッグで手元を隠し、私のチェックのスカートの中に迷いなく細い手を潜り込ませてきた。冷たい指先が太ももの内側を撫で上げ、黒タイツのクロッチ部分に触れる。\n\n「あっ……だめ、音が途切れたら、声が出ちゃう……っ」\n「大丈夫、あっちの太鼓の音がすっごくうるさいから……ほら、もう濡れてる」\nタイツの縫い目を押し広げ、指先が湿ったショーツを横にずらして熱い割れ目を直になぞる。電子音のビートに合わせて執拗にクリトリスを弾かれ、私は画面のレバーを握りしめたまま、周囲にバレてはいけないという極限の興奮に下腹を甘く疼かせていた。",
    "choices": [
      [
        "大音量のBGMに紛れて指先で絶頂まで掻き回される",
        {
          "stats": {
            "relationship": 8,
            "stress": -9,
            "intimacy": 10,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "バッグの下で彼女のスカートの中にも手を滑り込ませる",
        {
          "stats": {
            "relationship": 8,
            "stress": -9,
            "intimacy": 9,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "他の客が横を通るたびに息を止め、平気な顔を装う",
        {
          "stats": {
            "relationship": 6,
            "stress": -5,
            "intimacy": 7,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "ゲーセンの薄暗いブースで、バッグに隠しながら{partner}にスカートの中をまさぐられた。爆音の中で指を出し入れされて、声を押し殺しながら何度も震えてしまった。",
      "隣に座る彼女のスカートにも手を伸ばして、二人で下着を濡らし合いながらゲームのレバーを握った。街中のこんな場所で何をしてるんだろうと背徳感でいっぱいになった。",
      "他のお客さんが近くを通るたび、ビクッと身体を強張らせながら平静を装った。タイツの奥がじっとり重くて、家に帰る電車の中でもずっと熱を持っていた。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 29. 下校路の雷雨・無人社務所の縁側での制服脱ぎ捨て情事 */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_rain_shelter_shrine",
  "title": "下校路の雷雨・無人社務所の縁側での制服脱ぎ捨て情事",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "下校時刻を襲った激しい夕立。バケツをひっくり返したような豪雨と時折光る稲妻に追われ、私たちは通学路の脇道にある古びた神社の境内へ駆け込んだ。普段から神主もいない無人の社務所。深い軒下に飛び込んで雨を避けたものの、二人とも制服のシャツから靴下までぐっしょりと雨に濡れていた。\n\n「冷たっ……風邪引いちゃうな、これ。脱いだ方がいいよ」\n{partner}は濡れそぼって肌に張り付くシャツを脱ぎ捨て、濡れた私のブレザーのボタンにも迷わず指をかけた。鬱蒼とした杉木立を叩く雨音と、遠くでゴロゴロと鳴り響く雷鳴。周囲を隔絶された暗い境内の縁側で、濡れた布地を剥がされるたび、冷気と肌の温もりが激しく交錯する。\n\n「っ、こんなところで……神様に見られちゃうよ……っ」\n「神様だって、こんな雨の中誰も来ないって知ってるよ……お前、寒さで震えてるのか、興奮して震えてるのか分かんないね」\n湿った木の匂いと、雨に洗われた草いきれ。濡れた制服を板敷きの上に脱ぎ散らかし、下着だけになった私の身体を、{partner}の熱い掌と唇が温めるように這い回る。雨音に包まれた完全な二人きりの世界で、冷え切った皮膚の下から狂おしいほどの情熱が沸き立っていった。",
  "choices": [
    {
      "label": "激しい雨音にかき消されながら縁側で無我夢中で求め合う",
      "outcome": "土砂降りの雨がすぐ目の前の地面を叩きつける中、板敷きに押し倒されて無我夢中で身体を重ねた。冷たい雨飛沫が素肌にかかるたび、互いの肉体の熱さが際立ち、雷鳴の轟きに合わせて狂ったように腰を打ち付け合って絶頂した。",
      "effects": {
        "relationship": 8,
        "stress": -11,
        "libido": 10,
        "morality": -4
      }
    },
    {
      "label": "脱ぎ捨てた制服を乾かしながら、抱き合って身体を温め合う",
      "outcome": "縁側の奥に身を寄せ合い、互いの体温を分け合うように抱き締め合った。雨で濡れた素肌を擦り合わせ、首筋や耳元に甘い口づけを落とされるたび、温かな愛液が溢れて寒さなど完全に忘れてしまった。",
      "effects": {
        "relationship": 7,
        "stress": -9,
        "libido": 7,
        "health": 2
      }
    },
    {
      "label": "雨宿りに誰か入ってこないかビクビクしながら手淫を促す",
      "outcome": "鳥居の向こうを気にしながら、板敷きの上に座り込んで相手の熱いモノを両手と口で愛撫した。雨の帳に隠された神社の境内で、背徳感に震える私の口内に熱い欲望が満たされ、喉を鳴らして飲み干した。",
      "effects": {
        "relationship": 8,
        "stress": -8,
        "libido": 9,
        "morality": -3
      }
    }
  ],
  "diary": [
    "夕立に降られて逃げ込んだ無人の神社の縁側で、濡れた制服を脱ぎ捨てて{partner}と抱き合った。すぐ目の前で激しい雨が降っているのに、身体の中は焼けるように熱かった。",
    "雷鳴が響く暗い社務所の軒下で、寒さを紛らわせるみたいに肌を重ねた。雨音のせいでいくら声を出しても誰にも聞こえないのが、かえって淫らな気持ちを煽った。",
    "雨が上がるまでの間、脱いだ服の上で何度も愛撫された。制服が半乾きのまま神社を出たけれど、身体の芯はずっとぽかぽかと疼いていた。"
  ],
  "femaleVariant": {
    "text": "下校途中に突然空が暗転し、叩きつけるような雷雨が降り注いだ。私たちは悲鳴を上げながら、坂道の途中にある無人の神社の境内へと駆け込み、社務所の深い雨宿りの縁側へ転がり込んだ。雨と汗で制服は肌にべったりと張り付き、冷えた雫が首筋を伝って落ちる。\n\n「冷たぁ……シャツ、絞らないと風邪引くよ。脱いじゃお」\n{partner}は息を弾ませながら、濡れて重くなったブラウスのボタンを手早く外し、透けた下着と白い素肌を惜しげもなく露わにした。鬱蒼とした木々に遮られた薄暗い境内。土砂降りの雨音が周囲のあらゆる音を遮断し、二人だけの隔離された空間を作り出している。\n\n「ちょっと……神社の縁側だよ？ 誰か雨宿りに来たら……」\n「こんな土砂降りにここまで上がってくる人なんていないよ。……それより、寒いでしょ？ 温めてあげる」\n彼女は私の濡れたセーラー服の襟に指を掛け、ためらいなく脱がせていく。冷たい雨風が素肌を撫でる寒気と、彼女の柔らかな胸と温かい手のひらが肌を擦る熱気。脱ぎ捨てた制服を敷いた古びた板敷きの上で、二人の女の身体が雨音に溶け合うように密着していった。",
    "choices": [
      [
        "土砂降りの雨を見つめながら彼女の舌と指に溺れる",
        {
          "stats": {
            "relationship": 8,
            "stress": -11,
            "intimacy": 10,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "互いの濡れた素肌を擦り合わせて体温を分け合う",
        {
          "stats": {
            "relationship": 7,
            "stress": -9,
            "intimacy": 8,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "誰か来るかもしれないスリルに怯えながら口づけを交わす",
        {
          "stats": {
            "relationship": 6,
            "stress": -7,
            "intimacy": 7,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "下校中の夕立で逃げ込んだ神社の縁側で、{partner}とびしょ濡れの制服を脱ぎ捨てて抱き合った。雨のカーテンに包まれながら指で愛撫されて、寒さも忘れて蕩けてしまった。",
      "社務所の板敷きの上で、濡れた素肌を密着させて温め合った。雨音と雷の音にかき消されるのをいいことに、彼女の名前を何度も呼びながら絶頂した。",
      "雨が小降りになるまで、二人で下着姿のまま抱き合ってキスを繰り返した。濡れた制服を着直すときのひんやりした感触まで、甘い思い出になった。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 30. テスト前夜・勉強をやめて朝まで何度も身体を貪り合う堕落 */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_exam_night_fever",
  "title": "テスト前夜・勉強をやめて朝まで何度も身体を貪り合う堕落",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
  ],
  "weight": 28,
  "publicSex": false,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "期末テスト前夜。「二人で勉強合宿しよう」という名目で、親が不在の私の部屋に泊まりに来ていた{partner}。最初は真面目にノートを開き、赤シートで単語を隠しながら問題を出し合っていたはずだった。だが、深夜二時を回り、静まり返った部屋の中でふと視線が絡み合った瞬間、積み上げられた教科書は脇へと押しやられた。\n\n「もう無理……勉強なんて頭に入らない。お前の匂いばっかり気になって……」\n{partner}に組み敷かれ、ベッドの上に倒れ込む。机のスタンドライトの明かりだけが、散乱したプリントと、脱ぎ捨てられた部屋着のキャミソールを照らし出す。明日の朝には大事なテストが控えているという焦燥感が、かえって二人の背徳的な欲望に油を注いでいた。\n\n「テスト……赤点取っちゃうよ……っ」\n「赤点でもいいよ。今夜はお前の身体で満点取るから……」\n熱い吐息とともに首筋から太ももへと舌が這い下り、秘部へ指先が沈み込む。ぬちりと鳴った淫らな水音が静かな部屋に響き渡り、勉強どころではない快楽の痺れが脳髄を駆け抜けた。一度始まった情事は留まることを知らず、テストへの罪悪感を塗りつぶすように、私たちは夜が明けるまで何度も身体を貪り合った。",
  "choices": [
    {
      "label": "テストのことは完全に諦めて朝まで何度も貪り合う",
      "outcome": "勉強机からベッドへと場所を変え、夜明けの光がカーテンを白ませるまで何度も何度も重なり合った。汗と愛液でシーツをぐちゃぐちゃに濡らし、テスト勉強の記憶は全て快楽の熱の中に溶け去っていった。",
      "effects": {
        "relationship": 9,
        "stress": -12,
        "libido": 12,
        "intellect": -4,
        "morality": -5
      }
    },
    {
      "label": "一回だけと約束して激しく愛し合い、その後少しだけ勉強する",
      "outcome": "「一回だけ」という約束で貪るように身体を繋げ、極上の快感に達した。その後、火照った身体のまま机に向かったものの、互いの身体の匂いと余韻の疼きでペンを握る手はずっと震えていた。",
      "effects": {
        "relationship": 7,
        "stress": -8,
        "libido": 7,
        "intellect": -1
      }
    },
    {
      "label": "暗記カードをめくりながら身体を弄ばれる淫らな勉強法",
      "outcome": "英単語を一つ間違えるたびに服を一枚脱がされ、指先で敏感な箇所を弄られる罰ゲームのような勉強に。快感に耐えかねて途中で暗記カードを取り落とし、結局ベッドへと引きずり込まれて朝を迎えた。",
      "effects": {
        "relationship": 8,
        "stress": -9,
        "libido": 10,
        "intellect": -2,
        "morality": -3
      }
    }
  ],
  "diary": [
    "テスト前夜、勉強合宿のはずだったのに{partner}と朝まで何度も身体を重ねてしまった。教科書が散らばる部屋でシーツを愛液で汚して、赤点確定だけど幸せだった。",
    "「勉強が手につかない」って押し倒されて、深夜二時からノンストップで愛し合った。徹夜明けの重い身体と濡れた余韻のままテスト会場に向かった。",
    "暗記カードをめくりながら悪戯されて、結局我慢できなくなって抱き合った。ペンを握る指先にも相手の匂いが染み付いていて、テスト中ずっとボーッとしていた。"
  ],
  "femaleVariant": {
    "text": "定期テスト前夜。親が旅行で留守にしている私の部屋に、{partner}が重いスクールバッグを抱えてお泊まりにやってきた。「今夜こそ徹夜で世界史の年代暗記終わらせようね」なんて言っていたのは最初の一時間だけ。深夜一時を過ぎ、机の蛍光灯の下で肩を寄せ合っているうち、ふとした弾みで触れ合った太ももの温もりがすべての理性を焼き切った。\n\n「ねえ……もう教科書見るのやめない？ 私、あなたの声が聞きたいな」\n{partner}は開いたままのノートの上にそっと手を伸ばし、私の手首を掴んでベッドへと引き倒した。乱れた部屋着の襟元から覗く胸元。テストの焦燥感と、親のいない真夜中の部屋という完全な自由。二つの感情が混ざり合い、異常なまでの興奮が背筋を駆け上がる。\n\n「だめだよ……明日、一番最初の時間がテストなのに……っ」\n「いいじゃん、二人で一緒に補習受ければ……ほら、力抜いて」\n彼女の指がショートパンツのゴムを潜り、薄い下着の上から熱く湿った割れ目を押し撫でる。ぬるりとした分泌液が布越しに指を濡らし、甘い吐息が私の耳朶を甘噛みする。朝が来れば現実が待っていると分かっていながら、私たちはテストのことなど忘れ去り、夜が白むまで互いの身体を貪り尽くす堕落へと沈んでいった。",
    "choices": [
      [
        "教科書を放り出して夜明けまで何度も身体を重ね合う",
        {
          "stats": {
            "relationship": 9,
            "stress": -12,
            "intimacy": 12,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "一度激しく達したあと、火照った身体のまま机に向かう",
        {
          "stats": {
            "relationship": 7,
            "stress": -8,
            "intimacy": 8,
            "boundaryVoice": 3
          }
        }
      ],
      [
        "単語テストで間違えるたびに愛撫される淫らな勉強をする",
        {
          "stats": {
            "relationship": 8,
            "stress": -9,
            "intimacy": 10,
            "boundaryVoice": 4
          }
        }
      ]
    ],
    "diary": [
      "テスト前夜の勉強合宿のはずが、{partner}と朝までベッドで乱れ合ってしまった。ノートが開いたままの部屋で何度も果てて、テストはボロボロだったけれど最高の一夜だった。",
      "「一緒に赤点取ろ？」って耳元で囁かれながら指で奥を掻き回された。徹夜で愛し合っただるさと、下半身の疼きを引きずったまま登校した。",
      "勉強の合間の気晴らしのはずが止まらなくなって、二人でベッドの上で汗まみれになった。テスト中、机の下で組んだ足の内側から彼女の匂いが立ち上っていた。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 31. 満員電車の密着・吊り革を掴んだまま周囲の視線を気にせずまさぐり合う */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_crowded_train_audacity",
  "title": "満員電車の密着・周囲の視線も構わず吊り革を掴んだままの情事",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "朝の通勤ラッシュ。すし詰めの満員電車に押し込まれ、ドア付近のガラス窓に背中を押し当てられた私の身体に、{partner}が覆いかぶさるように密着していた。周囲はサラリーマンや同じ学校の生徒たちでぎっしり埋まり、身動き一つ取れないはずなのに、{partner}の瞳は周りの乗客などまるで気にしていないかのように昏く濡れていた。\n\n「ねえ……こんなにぎゅうぎゅうなのに、お前の身体、柔らかくてすっごく興奮する」\n耳元に吹きかけられる熱い吐息。吊り革を片手で掴んだまま、{partner}のもう片方の手が制服のダッフルコートの裾を割り、プリーツスカートの中へと無遠慮に潜り込んできた。他人の肩や背中がすぐ数十センチ先で擦れ合っているというのに、指先は躊躇なくショーツのクロッチを横へ引きずり下ろす。\n\n「っ、やだ……バカ、誰かに見られちゃう……っ！」\n「見えないよ。俺の身体で隠してるから……ほら、おまんこ、もう指が入るくらいぐちゅぐちゅだよ」\n耳元で下品な言葉を囁かれながら、電車の揺れに合わせて剥き出しの蜜裂に太い指がぬるりと突き入れられた。ガタゴトと響く線路の軋み音に紛れ、肉壁を掻き分けられる湿った水音が立ち上る。他人の目と鼻の先で犯されているという極限の背徳感に、私の秘唇はギュウギュウと指を締め上げ、溢れ出した愛液が太ももの内側を伝い落ちていった。",
  "choices": [
    {
      "label": "吊り革を握りしめ、揺れる車内で声を殺して絶頂する",
      "outcome": "急ブレーキの揺れに合わせて指を根元までねじ込まれ、子宮口を激しく擦り上げられた。サラリーマンの背中に顔を押し当てたまま、声の代わりに熱い吐息を漏らし、車内で誰にも気づかれないままガクガクと腰を震わせて達してしまった。",
      "effects": {
        "relationship": 8,
        "stress": -10,
        "libido": 12,
        "morality": -5
      }
    },
    {
      "label": "コートの陰で相手のズボンの前開きに手を伸ばす",
      "outcome": "他人の目などどうでもよくなり、コートの裾の死角から{partner}の股間へ手を伸ばした。制服のスラックス越しにカチカチに反り返った熱いモノを握りしめて擦り上げると、{partner}も低く喉を鳴らして熱い息を漏らし、二人で痴態に溺れ合った。",
      "effects": {
        "relationship": 8,
        "stress": -9,
        "libido": 11,
        "morality": -5
      }
    },
    {
      "label": "駅に停車して乗客が動くたびにビクビクと身をすくませる",
      "outcome": "駅に着くたびに乗客が押し寄せて身体が圧迫され、そのたびにスカートの中の指が奥深くまで突き刺さった。バレる恐怖と快感で頭が狂いそうになりながら、終点に着く頃には下着が愛液で完全に使い物にならなくなっていた。",
      "effects": {
        "relationship": 7,
        "stress": -6,
        "libido": 9,
        "morality": -3
      }
    }
  ],
  "diary": [
    "朝の満員電車で、ドアのガラスに押しつけられながら{partner}にスカートの中に手を入れられた。周りに大人がたくさんいるのに、指でおまんこを掻き回されて声が出そうだった。",
    "吊り革を掴んで必死に堪えていたけれど、電車の揺れに合わせて奥を突かれて絶頂してしまった。太ももを伝う愛液の感触を引きずったまま学校へ向かった。",
    "他人の目がすぐ目の前にあるのに、コートの陰で互いの股間をまさぐり合った。バレたら人生が終わるようなスリルに、身体の奥が疼いて止まらなかった。"
  ],
  "femaleVariant": {
    "text": "朝の満員電車。押し寄せる人の波に揉まれ、ドア脇の隅のスペースに二人で押し込められた。私のすぐ正面には{partner}が立っており、互いの胸と太ももが隙間なく密着している。車内には通勤客や他校の生徒の視線が渦巻いているというのに、彼女は上目遣いに私を見つめ、唇を舐めた。\n\n「ねえ……こんなにくっついてるのに、触らないなんて無理だよ」\n彼女の細い指先が、抱き合っているように見せかけた体勢のまま、私のコートの下、制服スカートの裾へと滑り込んだ。薄いストッキング越しに太ももの内側をなぞられ、クロッチの割れ目へと爪先が食い込む。\n\n「っ、ん……だめ、周りに人、いっぱいいるのに……っ」\n「誰も見てないよ。みんなスマホ見てるもん……ほら、ここ、すっごく熱いよ」\n薄い布を押し広げ、生暖かい指先が直接濡れた秘唇を押し割った。電車の激しい揺れに合わせて指先がクリトリスを擦り上げ、じゅぷりと湿った淫らな音が立ち上る。他人のすぐ横で女同士の下着をまさぐられているという異様な倒錯感に、私の下腹は甘く痺れ、蜜がとめどなく溢れ出していった。",
    "choices": [
      [
        "吊り革にしがみつきながら密着したまま絶頂を迎える",
        {
          "stats": {
            "relationship": 8,
            "stress": -10,
            "intimacy": 12,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "コートの死角で彼女のスカートの中にも手を這わせる",
        {
          "stats": {
            "relationship": 8,
            "stress": -9,
            "intimacy": 11,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "乗客の出入りに怯えながら耳元で甘い吐息を噛み殺す",
        {
          "stats": {
            "relationship": 7,
            "stress": -6,
            "intimacy": 8,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "満員電車の隅で、{partner}にコートの下からスカートの中をまさぐられた。周囲の人たちが気づかない距離で指を奥まで挿れられ、吊り革を握りしめてイッてしまった。",
      "「みんなスマホ見てるから平気だよ」って囁かれて、車内で愛液を垂れ流すまで弄ばれた。登校中ずっと下着が冷たくて、恥ずかしさと快感が消えなかった。",
      "他人の目も気にせず、コートの陰で彼女のスカートの中も弄り合ってしまった。朝から頭の中がドロドロに溶けて、授業どころじゃなかった。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 32. 昼休みの教室・談笑するクラスメイトの目の前で教卓の陰に潜り込む */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_classroom_lunch_dais",
  "title": "昼休みの教室・談笑するクラスメイトの目の前で教卓の陰に潜り込む",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "昼休みの教室。クラスメイトたちが机を寄せてお弁当を広げ、大声で笑い合っている賑やかな空間。日直の仕事で黒板を消していた私は、教卓の陰にしゃがみ込んだ{partner}に手首を引かれ、狭い教卓の足元へと引きずり込まれた。\n\n「ちょっ……何してるの、みんなそこにいるんだよ……！？」\n「大丈夫、教卓の板があるから誰も見えないって。……お前が可愛すぎて、放課後まで待てない」\n木製の教卓の背板が一枚あるだけで、すぐ数メートル先では友人たちが好きなアイドルの話で盛り上がっている。そんな状況だというのに、{partner}は私のプリーツスカートをたくし上げ、教卓の木の床に敷いたジャージの上に私を座らせた。荒い吐息とともに、温かい手のひらが太ももを割ってショーツの上から直接股間を撫で回してくる。\n\n「っ、んん……っ！ 声、出ちゃう……っ！」\n「声出したら、あいつらにバレちゃうよ？ 我慢して……ほら、こんなにビショビショ」\n教卓の木の匂いとチョークの粉の匂い、そして自分の身体から立ち上る甘い淫臭。友人の笑い声が頭上で響く中、ずらされた下着の奥の肉穴に{partner}の指がぐちゅりと埋まった。見つかれば一発で教室中の噂になるという恐怖が、かえって秘部を狂ったように濡らし、締めつけを強めていた。",
  "choices": [
    {
      "label": "教卓の天板を掴んで声を殺し、クラスメイトの目の前で達する",
      "outcome": "すぐ向こうでお弁当を食べているクラスメイトの会話を聞きながら、教卓の陰で奥を激しく掻き回された。天板に爪を立て、唇を噛みちぎるほど強く結んで声を押し殺し、背徳の快楽に身悶えしながら絶頂した。",
      "effects": {
        "relationship": 8,
        "stress": -11,
        "libido": 11,
        "morality": -5
      }
    },
    {
      "label": "教卓の下で相手のズボンを脱がせ、フェラチオを奉仕する",
      "outcome": "膝立ちになって{partner}の制服のズボンを降ろし、教卓の下の狭い闇の中で熱く太い欲望を口に含んだ。黒板を見上げる角度で喉を突かれ、教室内という極限の状況下で熱い精液を口いっぱいに受け止めた。",
      "effects": {
        "relationship": 9,
        "stress": -10,
        "libido": 12,
        "morality": -6
      }
    },
    {
      "label": "誰かが教卓に近づいてくる気配に怯え、服を整えて飛び出す",
      "outcome": "「日直ー、チョーク取ってー」と友達が教卓へ歩いてくる足音が聞こえ、慌てて指を引き抜いてスカートを直し、教卓の陰から立ち上がった。上気した顔と震える足をごまかしながらチョークを手渡し、心臓が爆発しそうなスリルを味わった。",
      "effects": {
        "relationship": 6,
        "stress": -5,
        "libido": 7,
        "morality": -2
      }
    }
  ],
  "diary": [
    "昼休みの教室で、みんながお弁当を食べているすぐ横の教卓の陰に隠れて{partner}におまんこを弄られた。声を出したら即バレる状況で絶頂して、頭がおかしくなりそうだった。",
    "教卓の下の狭い隙間に潜り込んで、しゃがんだまま愛撫された。友達の笑い声を聞きながら愛液で教卓の下を濡らす背徳感は、一生忘れられない。",
    "友達が「チョークちょうだい」って近づいてきた時、スカートを直して何食わぬ顔で対応したけれど、下着はびしょ濡れで太ももが震えていた。"
  ],
  "femaleVariant": {
    "text": "昼休みの喧噪に包まれた教室。窓際ではグループが机を囲んでお弁当を広げ、廊下からは生徒たちの走り回る足音が聞こえている。私は日直の日誌を書くふりをして教卓の前に立っていたが、後ろから回り込んできた{partner}にスカートの裾を掴まれ、そのまま教卓の足元の死角へと引き倒された。\n\n「あっ……ちょっと、みんな教室にいるのに……！」\n「平気だよ、みんなおしゃべりに夢中だから。……ねえ、もう我慢できないの」\n教卓の背板が教室側の視線を遮っているとはいえ、すぐ数メートル先にはクラスメイトがいる。それなのに{partner}は私の両足を左右に押し開き、下着のレースの隙間にためらいなく指を差し込んできた。\n\n「んっ、ぁ……っ！ 声、響いちゃうよ……っ」\n「じゃあ、私の手首を噛んでて……」\n友だちが「あのドラマ見た？」と楽しそうに話している声が教卓越しに明瞭に聞こえてくる。その真下で、{partner}の指先が私のクリトリスをねっとりと捏ね回し、蜜壷の奥へと二本の指をぬちりと沈めた。友人の気配がすぐそこにあるのに、肉体が快楽に屈服していく屈辱と悦びに、私は涙目で彼女の手首を甘噛みしていた。",
    "choices": [
      [
        "彼女の手首を噛みながら教卓の陰で絶頂に耐える",
        {
          "stats": {
            "relationship": 8,
            "stress": -11,
            "intimacy": 11,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "教卓の下で彼女のスカートの中にも手を伸ばして弄り合う",
        {
          "stats": {
            "relationship": 8,
            "stress": -9,
            "intimacy": 10,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "友達が近づいてくる前に慌てて立ち上がり平静を装う",
        {
          "stats": {
            "relationship": 6,
            "stress": -5,
            "intimacy": 7,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "昼休みの教室、教卓の陰に隠れて{partner}に指で奥を掻き回された。友達がお弁当を食べている声を聞きながら声を押し殺してイッてしまって、背徳感で身体が痺れた。",
      "教卓の狭い足元で、二人でスカートを捲り上げて弄り合った。誰かがこっちを見たら一発でバレるのに、淫らな快感に負けて止められなかった。",
      "「日誌書き終わった？」って友達に声をかけられた時、教卓から立ち上がった私のスカートの奥は愛液でぐしょぐしょだった。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 33. 放課後のファミレス・客や店員が行き交うボックス席のテーブル下でのまさぐり合い */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_family_restaurant_booth",
  "title": "放課後のファミレス・客や店員が行き交うボックス席のテーブル下でのまさぐり合い",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
  ],
  "weight": 27,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "学校帰りに立ち寄った駅前のファミリーレストラン。ドリンクバーの機械から流れる氷の音や、近くの席の主婦たちのおしゃべり、店員が料理を運ぶカートの車輪の音が忙しなく響いている。高い背もたれで仕切られたボックス席で、向かい合って座っていたはずの{partner}が、当然のような顔をして私の隣のソファへと滑り込んできた。\n\n「ほら、これ膝に乗せて」\n{partner}は自分の大きなスクールバッグを私の膝の上に置き、通路からの視線を完全に遮断した。テーブルの上にはメロンソーダとポテトフライ。だが、そのテーブルの天板の下では、{partner}のたくましい手が迷わず私のチェックのプリーツスカートの中へと潜り込んでいた。\n\n「ちょ……ここ、ファミレスだよ！？ 店員さん来ちゃう……っ」\n「注文したポテトはもう届いたから、しばらく誰も来ないよ。……それに、お前ここに来る前からずっと濡らしてたでしょ？」\n制服の薄いストッキング越しに、肉厚な掌で股間をぎゅっと包み込まれる。指先が割れ目の筋をなぞるたび、摩擦熱でジュワッと愛液が滲み出すのが自分でも分かった。周囲の客が平然とパフェを食べている同じ店内で、私の身体は下着を剥ぎ取られそうな快楽の渦へと巻き込まれていった。",
  "choices": [
    {
      "label": "ストローをくわえて声を殺し、テーブル下で指の愛撫を受け止める",
      "outcome": "ドリンクのストローを噛み締めながら、テーブルの下で下着をずらされ、指先でクリトリスと膣口を容赦なく掻き回された。背もたれに頭を預けて瞳を潤ませ、店内のBGMにかき消されるように吐息を漏らして絶頂した。",
      "effects": {
        "relationship": 8,
        "stress": -9,
        "libido": 10,
        "morality": -4
      }
    },
    {
      "label": "テーブルクロスで隠しながら相手の股間をまさぐり返す",
      "outcome": "やられっぱなしが悔しくて、バッグの陰から{partner}のスラックスの前開きに手を伸ばした。カチカチに張った熱い熱を指先で扱き上げると、{partner}もソーダのグラスを握りしめたまま息を乱し、公衆の面前で二人だけの秘密の熱情に溺れた。",
      "effects": {
        "relationship": 8,
        "stress": -9,
        "libido": 11,
        "morality": -5
      }
    },
    {
      "label": "店員がお冷を注ぎに来た瞬間に平静を装い、太ももを締め上げる",
      "outcome": "「お冷のお代わりよろしいですか？」と店員が近づいてきた瞬間、スカートの中の指を止めて太ももを固く閉じた。店員が立ち去るまで二人で笑顔で頷き合い、その極度のスリルに秘部からじゅわりと蜜が吹き零れた。",
      "effects": {
        "relationship": 7,
        "stress": -6,
        "libido": 8,
        "morality": -3
      }
    }
  ],
  "diary": [
    "ファミレスのボックス席で、バッグで隠しながらテーブルの下でスカートの中に手を入れられた。周りにお客さんがたくさんいるのに、指でおまんこを弄られて頭が真っ白になった。",
    "店員さんがお冷を持ってくる足音がするたびに、心臓が跳ね上がった。でもその恐怖のせいで、普段の何倍も濡れてしまって止められなかった。",
    "ドリンクバーを往復するふりをして、二人でソファに並んで下着をまさぐり合った。ファミレスの椅子を愛液で汚してしまうんじゃないかと焦った。"
  ],
  "femaleVariant": {
    "text": "放課後のファミレス。テスト勉強を口実にドリンクバーを頼み、奥まったボックス席に陣取っていた。周囲では近所の主婦や高校生のグループがおしゃべりに花を咲かせている。向かい側に座っていた{partner}がお代わりの紅茶を持って戻ってきたかと思うと、私の隣の席へと腰を下ろし、肩を寄せてきた。\n\n「ねえ、教科書広げてるふりして……ちょっとくっついていい？」\n{partner}はテーブルの上に分厚い参考書を立てて通路からの視線を塞ぐと、空いた手を迷うことなく私の太ももへと滑らせてきた。短めのスカートを捲り上げ、黒いオーバーニーソックスとショーツの間の無防備な絶対領域を指先が撫で上げる。\n\n「あっ……だめ、店員さんが来たら見えちゃうよ……っ」\n「見てないよ。ほら、身体の力抜いて……」\n彼女の細い指がレースのショーツを横へと引っ張り、むき出しになった割れ目に直接触れる。指先が愛液で滑らかに濡れた秘唇を弄ぶたび、テーブルの下でぬちり、と小さな水音が立った。店内の賑やかなBGMが流れる中、私は参考書に目を落としながら、指先で奥を突かれる快感に腰を震わせていた。",
    "choices": [
      [
        "参考書に視線を固定したまま彼女の指先で達する",
        {
          "stats": {
            "relationship": 8,
            "stress": -9,
            "intimacy": 10,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "テーブルの下で彼女のスカートの中にも手を這わせる",
        {
          "stats": {
            "relationship": 8,
            "stress": -9,
            "intimacy": 11,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "追加注文の店員が来るたびに太ももを閉じて耐える",
        {
          "stats": {
            "relationship": 7,
            "stress": -6,
            "intimacy": 8,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "ファミレスの席で参考書を盾にしながら、テーブルの下で{partner}にスカートの中をまさぐられた。周りにお客さんがいるのに、指で奥を掻き回されて息が止まりそうだった。",
      "ドリンクバーの行き帰りにすれ違う店員さんの気配に怯えながら、二人で下着を濡らし合った。店を出たあと、太ももの内側がべたついて歩くのが恥ずかしかった。",
      "「勉強なんて頭に入らないね」って耳元で囁かれて、ソファの上で身体を密着させた。ファミレスのボックス席が二人の秘密の部屋みたいだった。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 34. 満席の映画館最後列・上映中の暗闇に乗じてポップコーン片手に下着を脱がせる */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_movie_theater_back_row",
  "title": "満席の映画館最後列・上映中の暗闇に乗じてポップコーン片手に下着を脱がせる",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "休日のレイトショー。話題のアクション映画の封切りとあって、シネコンの劇場内はほぼ満席で埋まっていた。私たちは一番後ろの隅のペアシートを確保していたが、すぐ前の列には観客がぎっしりと座っている。上映が始まり、大音量のサラウンドスピーカーから爆発音や音楽が轟いて場内が暗転した瞬間、隣の{partner}が肘掛けを持ち上げて私の腰を抱き寄せてきた。\n\n「映画、面白い？ 俺は……お前の方が見たいんだけど」\n膝の上に置かれた大きなポップコーンのバケツ。その陰に隠れるようにして、{partner}の手が私の制服スカートの中へと潜り込んできた。スクリーンの明滅が時折二人の顔をぼんやりと照らし出す。前の席の客の頭がすぐ目と鼻の先にあるというのに、{partner}は私のショーツのゴムに指を掛け、足首に向けてゆっくりと引きずり下ろし始めた。\n\n「っ、ちょ……脱がさないで……誰かに見られたら……っ」\n「大音量だから声出しても聞こえないよ。……ほら、パンツ脱げた」\n足首に引っかかったショーツの感触。下半身が完全に剥き出しになった私の秘裂へ、温かい指先が沈み込み、ぐちゅりと濡れた粘膜をかき分けた。スクリーン上の激しい銃撃戦の重低音に合わせて、膣奥を容赦なく突かれる。周囲の観客全員が映画に熱中している真後ろで、私だけが下着を剥ぎ取られて快楽の炎に焼かれていた。",
  "choices": [
    {
      "label": "爆音のシーンに合わせて声を漏らしながら絶頂する",
      "outcome": "クライマックスの巨大な爆発音と劇伴の轟音にかき消されるのをいいことに、奥深くまで指を突き入れられて激しく達した。前の席の客が身じろぎするたびに心臓を跳ねさせながら、濡れ切った座席の上で甘い痺れに浸った。",
      "effects": {
        "relationship": 8,
        "stress": -10,
        "libido": 11,
        "morality": -4
      }
    },
    {
      "label": "ポップコーンを相手に食べさせながら膝の上で跨がる",
      "outcome": "コートを膝の上に広げて周囲の視界を遮り、暗闇に乗じて{partner}の膝の上にそっと跨がった。ズボンの上からカチカチの熱いモノを擦りつけ合い、映画が終わるまで二人で息を殺して腰を揺らし続けた。",
      "effects": {
        "relationship": 9,
        "stress": -11,
        "libido": 12,
        "morality": -5
      }
    },
    {
      "label": "スタッフの見回りにビクビクしながらスカートの裾を押さえる",
      "outcome": "通路をペンライトを持った劇場スタッフが巡回してくる光が見え、慌ててスカートの裾を押さえ込んで息を止めた。光が通り過ぎるまでの極度の緊張感が、かえって秘部の疼きを限界まで跳ね上げた。",
      "effects": {
        "relationship": 7,
        "stress": -6,
        "libido": 8,
        "morality": -3
      }
    }
  ],
  "diary": [
    "満席の映画館の一番後ろの席で、映画の爆音に紛れてパンツを完全に脱がされた。前の席に人がいるのに指でおまんこを掻き回されて、絶頂の瞬間息が止まるかと思った。",
    "スクリーンの光が明滅するたびに、スカートを捲り上げられた自分の姿が見えて恥ずかしくて死にそうだった。でもその恥ずかしさで愛液が溢れて止まらなかった。",
    "映画が終わって場内の明かりがついた時、慌てて座席の下でパンツを履き直した。座席のシートに染みを作っていないか心配でたまらなかった。"
  ],
  "femaleVariant": {
    "text": "休日の映画館。話題の恋愛映画の上映フロアは満席で、私たちのすぐ前の列にもカップルや友だち連れがびっしりと座っていた。最後列の端の席。劇場が暗転し、予告編から本編へと切り替わって大きな劇伴が鳴り響いた瞬間、隣の{partner}が肘掛けを跳ね上げて私の膝に頭を預けてきた。\n\n「ねえ……暗くて誰も見てないよ。制服のまま、触っていい？」\n彼女は膝掛け用のブランケットを二人の腰回りにすっぽりと被せると、その暗闇の中で私のプリーツスカートを捲り上げた。薄いショーツの上から熱い手のひらで割れ目を押し包み、指先でクリトリスを転がす。\n\n「んっ……ぁ、前の人に当たっちゃう……っ」\n「当たらないよ、じっとしてて……ほら、もう濡れてブランケットに染みそう」\n彼女の指がショーツの脇から侵入し、とろとろに溶けた秘唇を割って奥へと沈んでいく。劇場のサラウンドスピーカーから流れる美しい音楽の裏で、ブランケットの中からはぬちぬちとした卑猥な水音が零れ出していた。満員の劇場の暗闇で、私は前の座席の背もたれを強く握りしめ、女同士の淫らな愛撫に喘ぎ声を押し殺していた。",
    "choices": [
      [
        "ブランケットの下で彼女の指を受け入れ劇伴に合わせて達する",
        {
          "stats": {
            "relationship": 8,
            "stress": -10,
            "intimacy": 11,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "暗闇の中で彼女の胸元に手を伸ばして互いに弄り合う",
        {
          "stats": {
            "relationship": 8,
            "stress": -10,
            "intimacy": 11,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "場内スタッフの巡回に怯えてブランケットをぎゅっと抱き込む",
        {
          "stats": {
            "relationship": 7,
            "stress": -6,
            "intimacy": 8,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "満席の映画館の最後列で、ブランケットに隠れながら{partner}に指で奥を掻き回された。前の席の人にバレないように唇を噛みしめて、暗闇の中で激しく達してしまった。",
      "映画のロマンチックな音楽を聞きながら、下半身は彼女の指でぐちゃぐちゃに濡らされていた。ストーリーなんて一つも頭に入らなかった。",
      "明かりがついた瞬間、ブランケットを畳む手が震えていた。彼女と目配せし合って、濡れた下着の重みを感じながら劇場をあとにした。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 35. 白昼の公園ベンチ・散歩の人が通り過ぎる真横で膝の上に跨がっての上着隠し情事 */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_park_bench_daylight",
  "title": "白昼の公園ベンチ・散歩の人が通り過ぎる真横で膝の上に跨がっての上着隠し情事",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "日曜日の真っ昼間。陽光が降り注ぐ駅前の緑道公園は、犬の散歩をする老人やベビーカーを押す母親など、のどかな人々が行き交っていた。木陰の木製ベンチに腰掛けていた私たちは、周囲の平和な空気などまるで意に介さず、二人だけの狂ったような発情に身を任せていた。\n\n「ほら、おいで。コート羽織れば誰にも見えないから」\n{partner}に手招きされ、私はベンチに座る彼の膝の上に正面から跨がった。大きなトレンチコートを上からすっぽりと被せられ、外見上はただ仲良く抱き合っているようにしか見えない。だが、コートの裾の薄暗がりの中、私の制服スカートは完全に腰までたくし上げられ、ショーツは引き裂かれるように太ももの横へずらされていた。\n\n「っ、ちょ……すぐそこ、犬の散歩してる人が歩いてるよ……っ！」\n「気にすんなよ。……お前が腰下ろすだけでいいんだから」\nファスナーの開いたスラックスから突き出た熱く硬い先端が、愛液でとろとろに濡れた私の秘裂に当てがわれる。ずぶり、と重力に従って身体が沈み込んだ瞬間、灼熱の熱塊が膣奥深くまで飲み込まれた。通行人の足音と話し声がすぐ数歩先ですれ違う中、私はコートの中で激しい結合の熱に貫かれ、悲鳴のような喘ぎを{partner}の首筋に押し当てて噛み殺していた。",
  "choices": [
    {
      "label": "散歩の人の足音を聞きながらコートの中で無我夢中で腰を振る",
      "outcome": "通行人が通り過ぎる気配を感じるたびに下腹を締めつけ、コートの中で静かに腰を上下させ続けた。白昼堂々の青空の下で男を貪り喰らっているという異常な興奮に、子宮口を突き上げられて一気に潮を吹き上げて絶頂した。",
      "effects": {
        "relationship": 9,
        "stress": -12,
        "libido": 12,
        "morality": -6
      }
    },
    {
      "label": "「もう無理……抜いて」と懇願しながらも快感に腰を押しつける",
      "outcome": "バレる恐怖に涙を浮かべて「もうやめよ」と囁きながらも、身体は快楽に抗えず自ら腰を擦りつけてしまった。{partner}に腰をがっしり掴まれて奥深くまで突き上げられ、白昼の公園で頭が真っ白になるまで達した。",
      "effects": {
        "relationship": 8,
        "stress": -10,
        "libido": 11,
        "morality": -5
      }
    },
    {
      "label": "子どもがベンチの方へ走ってくる気配に大慌てで息を止める",
      "outcome": "ボールを追いかけた子どもがベンチの近くまで走ってきて、二人はコートの中で結合したまま微動だにせず息を止めた。子どもが母親に呼ばれて去るまでの永遠のような数秒間、極度の緊迫感で膣肉が激しく痙攣した。",
      "effects": {
        "relationship": 7,
        "stress": -5,
        "libido": 9,
        "morality": -3
      }
    }
  ],
  "diary": [
    "昼下がりの公園のベンチで、散歩の人が行き交う中、コートで隠しながら{partner}の膝の上に跨がって繋がった。すぐ横を人が歩いているのに結合している背徳感で、頭がおかしくなりそうだった。",
    "コートの下で制服をめくられ、おまんこの奥深くまで貫かれた。通行人の話し声が聞こえるたびにギュウギュウに締めつけてしまって、白昼堂々絶頂した。",
    "子どもが近くに走ってきた時、コートの中で繋がったまま固まって息を殺した。心臓が飛び出るかと思うほどのスリルだったけれど、そのせいで普段よりずっと濡れてしまった。"
  ],
  "femaleVariant": {
    "text": "休日の明るい午後。日差しが木々の間から差し込む公園の遊歩道。すぐ横をウォーキングの老夫婦や自転車に乗った買い物客が通り過ぎていく。そんな木陰のベンチで、私と{partner}は周囲の視線などまるで存在しないかのように、互いの身体を貪り合っていた。\n\n「ねえ……膝の上乗って。コートで隠しちゃえば誰も気づかないよ」\n{partner}は私を自分の膝の上へ引き寄せ、上から羽織った厚手のマフラーとウールコートで二人の腰回りを覆った。外から見ればただの親密な女友達のスキンシップ。だが、コートの暗闇の中、私のプリーツスカートは高く捲られ、ショーツの隙間から彼女の長い指が滑り込んできていた。\n\n「あっ、ん……だめ、すぐそこ、人が通ったよ……っ」\n「誰もこっち見てないよ。……ほら、足開いて……」\n彼女は濡れて熱を帯びた私の秘唇を左右に押し広げ、二本の指をぬちりと膣内へ沈め込んだ。すぐ近くの砂利を踏む通行人の足音。青空と陽光の下、他人の目と鼻の先で指を出し入れされる異様な倒錯に、私の膣肉は勝手に痙攣し、コートの裏地に愛液が染みるほど蜜を垂れ流してしまった。",
    "choices": [
      [
        "通行人の気配を感じながらコートの中で激しく絶頂する",
        {
          "stats": {
            "relationship": 9,
            "stress": -12,
            "intimacy": 12,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "コートの中で彼女の胸元にも手を伸ばして弄り合う",
        {
          "stats": {
            "relationship": 8,
            "stress": -10,
            "intimacy": 11,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "散歩の犬が吠える声にビクッと身体を震わせて耐える",
        {
          "stats": {
            "relationship": 7,
            "stress": -6,
            "intimacy": 8,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "白昼の公園のベンチで、コートに隠れながら{partner}の膝の上で指で奥を掻き回された。すぐ横を人が歩いているのに、声を押し殺しながら愛液を垂らしてイッてしまった。",
      "「誰も見てないよ」って笑いながら、青空の下でスカートの中を弄ばれた。他人の目が届く場所での淫らな快感に、完全に頭が蕩けてしまっていた。",
      "ベンチから立ち上がった時、コートの下のスカートがぐっしょり濡れていて、歩くたびに太ももに擦れて恥ずかしかった。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 36. 衣料品店の試着室・カーテン一枚隔てて店員や客がいるのに二人で押し入って喘ぎ合う */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_fitting_room_double",
  "title": "衣料品店の試着室・カーテン一枚隔てて店員や客がいるのに二人で押し入って喘ぎ合う",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "放課後のショッピングモール、賑わうファストファッションの大型店舗。服を試着するふりをして試着室エリアに入った私に続き、{partner}が周囲の客の目を盗んで同じフィッティングルームのカーテンの中へと強引に滑り込んできた。\n\n「二人で入っちゃダメだよ……！ すぐ外に店員さん立ってるんだから！」\n「サイズ見てあげるって言えばいいよ。……それより、早く脱いで」\n鏡張りのわずか一畳ほどの空間。カーテン一枚隔てたすぐ外では、ハンガーがカチャカチャと擦れる音や、「いらっしゃいませー」という店員の声、試着待ちの客の足音が響いている。そんな極限の密室で、{partner}は私の制服のブラウスを乱暴に捲り上げ、鏡に私の背中を押し当てた。\n\n「っ、ひゃ……鏡、冷たっ……んぁ……っ！」\n「声出したら店員が開けに来るよ。……我慢して、ほら」\nたくし上げられたスカートの下、ショーツを引き下ろされると、鏡越しに自分の淫らに染まった顔と剥き出しの下半身が映し出された。背後から押し当てられた熱い肉棒が、カーテンの隙間からの光に照らされながら、愛液で濡れそぼった割れ目へと音もなく沈み込んでいく。鏡の中の自分が犯されていく光景と、カーテンの外の人々の気配。二重の刺激に下腹が狂おしく疼いた。",
  "choices": [
    {
      "label": "カーテンを握りしめ、鏡に映る自分の淫らな姿を見ながら絶頂する",
      "outcome": "鏡に両手をついて四つん這いになり、背後からカーテンの音を立てないように激しく突き上げられた。鏡に映る自分の乱れた表情と、カーテンの外の気配に狂わされ、声を殺して何度も腰を震わせて達した。",
      "effects": {
        "relationship": 8,
        "stress": -11,
        "libido": 12,
        "morality": -5
      }
    },
    {
      "label": "店員の「サイズいかがですか？」の声に震える声で返事する",
      "outcome": "カーテンの外から「お客様、サイズはいかがですか？」と店員に声をかけられ、貫かれたまま「だ、大丈夫です……！」と上気した声で答えた。バレる寸前の異常なスリルに膣腔が強く締めつけ、相手を絶頂へ導いた。",
      "effects": {
        "relationship": 9,
        "stress": -10,
        "libido": 11,
        "morality": -5
      }
    },
    {
      "label": "他の客が隣のカーテンを開ける音に怯えて服を急いで直す",
      "outcome": "隣の試着室のカーテンが勢いよく開く音に怯え、大慌てで身体を離してスカートを直した。乱れた息と汗を拭い、何食わぬ顔で試着室を出たものの、濡れた下着の感触に歩行がふらついた。",
      "effects": {
        "relationship": 6,
        "stress": -5,
        "libido": 8,
        "morality": -3
      }
    }
  ],
  "diary": [
    "服屋の試着室に二人で押し入って、カーテン一枚隔てた外に店員さんがいるのに立ったまま繋がった。鏡に映る自分の乱れた姿を見ながら突かれて、頭がおかしくなりそうだった。",
    "店員さんに「サイズ合いましたか？」ってカーテン越しに声をかけられた時、ちょうど奥まで突かれていて、声を震わせながら返事した。あのスリルは一生忘れられない。",
    "試着室の狭い空間で、制服を脱ぎ散らかして貪り合った。外にお客さんが待っているのに、愛液で太ももを汚すまで止められなかった。"
  ],
  "femaleVariant": {
    "text": "放課後のファッションビル。試着待ちの列ができるほど混雑したアパレルショップで、私は何着かのスカートを抱えて試着室に入った。だが、カーテンを引いた直後、すっと隙間から{partner}が身を滑り込ませてきた。\n\n「ちょっと……！ 二人一緒に入ったら怒られちゃうよ……！」\n「大丈夫、お互いの服見るだけって言えばいいよ。……ねえ、これ脱いでみて」\nカーテン一枚の外側では、店員の元気な声やハンガーのぶつかる音がすぐ耳元で聞こえている。だが{partner}は私の制服のセーラー服を迷わず脱がせ、試着用のキャミソールに着替えさせるふりをして、その細い指先を私のショーツの奥へと潜り込ませた。\n\n「んっ、ぁ……！ 鏡に、映っちゃってるよ……っ」\n「見て、あなたの顔、もうこんなに真っ赤で可愛い……」\n全身鏡に映し出される、制服を乱されて頬を紅潮させた私の姿。彼女の指が濡れそぼった秘唇を広げ、クリトリスを爪先で弾くたび、カーテンの裾が微かに揺れた。すぐ外に客や店員が立っているという極限の状況で、私は鏡の中の彼女の熱い視線に射抜かれながら、甘い痺れに全身を震わせていた。",
    "choices": [
      [
        "鏡に手をついてカーテン越しに外の気配を感じながら達する",
        {
          "stats": {
            "relationship": 8,
            "stress": -11,
            "intimacy": 12,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "試着室の壁際で彼女のスカートの中にも手を這わせる",
        {
          "stats": {
            "relationship": 8,
            "stress": -9,
            "intimacy": 11,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "店員がカーテンの外を通り過ぎる足音に息を殺す",
        {
          "stats": {
            "relationship": 6,
            "stress": -5,
            "intimacy": 8,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "混雑した服屋の試着室に二人で入って、カーテンのすぐ外に人がいるのに{partner}に指で奥を掻き回された。鏡に映る自分の淫らな顔を見て、恥ずかしさで狂いそうだった。",
      "店員さんの足音がカーテンの前で止まるたび、心臓が止まりそうになった。でもその恐怖のせいで愛液がとめどなく溢れて、試着室の床を汚しそうだった。",
      "カーテンを開けて店を出る時、すれ違った店員さんにバレていないかドキドキした。太ももの内側が自分の蜜でぬるぬるになっていた。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 37. 休み時間の渡り廊下の角・人が行き交う気配を気にせず壁に押し当てて下着をずらし指を挿れる */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_school_hallway_recess",
  "title": "休み時間の渡り廊下の角・人が行き交う気配を気にせず壁に押し当てて下着をずらし指を挿れる",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "本館と特別棟を繋ぐ二階の渡り廊下。十人の生徒や教師がひっきりなしに行き交う休み時間、階段脇の窪んだ防火シャッターの陰に、私は{partner}によって強引に引っ張り込まれた。\n\n「待って、次の時間、移動教室なんだよ……！ すぐそこ、みんな歩いてる！」\n「十分あるから大丈夫。……お前の顔見てたら、どうしても触りたくなった」\n曲がり角の先からは、ノートを抱えた生徒たちの話し声やすり足の音がひっきりなしに響いてくる。誰かが角を曲がってくれば一瞬で見つかるような死角。それなのに{partner}は私の身体を壁に押しつけ、制服のプリーツスカートの裾を大胆に捲り上げた。黒タイツの股部分に指を引っ掛け、無遠慮に爪を立てて引き下げる。\n\n「っ、ひゃ……っ！ やだ、誰か来たら……っ！」\n「声出さなきゃ平気だよ……ほら、お前もうこんなにぐちゅぐちゅに濡れてるじゃん」\n耳元で猥褻な言葉を吹き込まれながら、露出した熱い割れ目に{partner}の太い指が容赦なくねじ込まれた。角の向こうを歩くクラスメイトの足音。壁一枚隔てただけの白日の下で、指先が膣壁をぐちゃりと掻き回すたび、私の身体はビクンと跳ね、声にならない熱い吐息を彼の胸板に押し殺して埋めた。",
  "choices": [
    {
      "label": "生徒たちの足音を聞きながら壁に押しつけられて絶頂する",
      "outcome": "角の向こうを行き交う生徒たちのざわめきを聞きながら、壁に背中を押し当てられたまま奥を激しく突かれた。見つかる恐怖と快楽の波に耐えきれず、爪を彼の肩に立てながら声を殺して達してしまった。",
      "effects": {
        "relationship": 8,
        "stress": -10,
        "libido": 11,
        "morality": -5
      }
    },
    {
      "label": "「やめて」と言いながら相手のブレザーの胸元を強く掴む",
      "outcome": "抵抗するふりをしながら、快楽に蕩けた手で彼のブレザーをぎゅっと握りしめて身体を委ねた。執拗にクリトリスを転がされ、次の授業の予鈴が鳴る寸前まで蜜を絞り取られた。",
      "effects": {
        "relationship": 8,
        "stress": -9,
        "libido": 10,
        "morality": -4
      }
    },
    {
      "label": "先生の「こら、廊下を走るな」の声に慌てて指を抜いて離れる",
      "outcome": "すぐ近くで響いた生活指導の先生の怒声に、大慌てで指を引き抜いてスカートを払った。角から出てきた先生とすれ違う際、心臓が爆発しそうな緊張の中、挨拶をしてやり過ごした。",
      "effects": {
        "relationship": 6,
        "stress": -5,
        "libido": 7,
        "morality": -2
      }
    }
  ],
  "diary": [
    "休み時間の渡り廊下の陰で、生徒がすぐそこを行き交っているのに壁に押しつけられてスカートの中に手を突っ込まれた。指でおまんこを掻き回されて、絶頂の瞬間息が止まった。",
    "角を曲がればすぐ人がいる場所で、タイツをずらされて愛撫された。制服のまま濡れそぼった感触を引きずりながら、次の授業の教室へ小走りで向かった。",
    "先生の足音が近づいてきた時、慌てて離れて何食わぬ顔をしたけれど、下腹は熱くて脈打っていた。他人の目も気にしない自分たちの異常さにゾクゾクした。"
  ],
  "femaleVariant": {
    "text": "本館から体育館へ続く渡り廊下の踊り場。休み時間のチャイムが鳴り響き、大勢の生徒たちが足早に行き交う賑やかな空間。その柱の陰、防火扉の窪みに、私は{partner}に手首を引かれて引きずり込まれた。\n\n「ちょっと……！ ここ、みんな通る場所だよ……！？」\n「大丈夫、この柱の陰なら誰も気づかないよ。……ねえ、ちょっとだけ触らせて」\nすぐ目の前を運動部の生徒たちが大声で笑いながら通り過ぎていく。一歩でも踏み込まれれば即座に露見するような場所で、{partner}は私のセーラー服のスカートを躊躇なく持ち上げた。ハイソックスの上の太ももを撫で、ショーツを横へと引っ張る。\n\n「んっ、ぁ……！ 音、立てちゃだめ……っ！」\n「あなたのここが、ぬちぬち音立ててるんだよ……」\n彼女の細い指が、愛液で濡れそぼった割れ目を割って奥へと侵入してくる。通り過ぎる生徒たちの足音と、彼女の指が粘膜を擦る淫らな水音。いつ誰が角から現れるか分からない極度のスリルに、私の膣肉は彼女の指をぎゅうぎゅうと締めつけ、甘い蜜を溢れさせていた。",
    "choices": [
      [
        "生徒たちの声を聞きながら柱の陰で彼女の指に屈服する",
        {
          "stats": {
            "relationship": 8,
            "stress": -10,
            "intimacy": 11,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "柱の陰で彼女のスカートの中にも手を滑り込ませて弄り合う",
        {
          "stats": {
            "relationship": 8,
            "stress": -9,
            "intimacy": 10,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "予鈴が鳴り響いた瞬間に慌てて身だしなみを整える",
        {
          "stats": {
            "relationship": 6,
            "stress": -5,
            "intimacy": 7,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "渡り廊下の柱の陰で、生徒たちが行き交うすぐ真横で{partner}にスカートの中をまさぐられた。指で中を掻き回されて、声を殺しながら柱に爪を立ててイッてしまった。",
      "「みんな通り過ぎるだけだから平気」って耳元で囁かれて、休み時間のわずか数分でぐしょぐしょに濡らされた。授業中ずっと下着が冷たくて疼いていた。",
      "予鈴が鳴って慌てて教室へ戻ったけれど、彼女とすれ違うときに交わした視線が熱くて、胸が破裂しそうだった。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 38. カラオケのガラス窓付き個室・店員がいつ入ってくるかも気にせずソファで制服を脱ぎ散らかして貪り合う */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_karaoke_glass_door",
  "title": "カラオケのガラス窓付き個室・店員がいつ入ってくるかも気にせずソファで制服を脱ぎ散らかして貪り合う",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student",
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "放課後、繁華街のカラオケボックス。ドアには廊下から中が丸見えになる大きな透明ガラス窓が嵌め込まれており、店員や他の客がひっきりなしに前を通り過ぎる構造になっている。それなのに、デンモクで適当な曲を入れただけの{partner}は、マイクを握るどころか、私をソファの上に押し倒した。\n\n「ちょっと……ドアのガラス窓、見てよ！ 廊下から全部見えちゃうよ！」\n「見たい奴には見せとけばいいよ。……お前がエロすぎるのが悪いんだ」\n大音量で流れるアニメソングのイントロの中、{partner}は制服のブレザーを脱ぎ捨て、私のリボンを解いてブラウスのボタンを一気に引きちぎるように外した。廊下の照明がガラス越しに差し込み、露わになった私の下着姿を照らし出す。店員がフライドポテトを運んでくるかもしれないというのに、{partner}は私のスカートを剥ぎ取り、濡れ切ったショーツを足首まで引きずり下ろした。\n\n「っ、んぁ……！ ドアの前に、誰か……誰か通った……っ！」\n「知るかよ。……ほら、おまんこ、もうガバガバに欲しがってんぞ」\nソファの革の軋み音とともに、{partner}の逞しい肉棒が私の愛液まみれの肉穴を容赦なく貫いた。ガラス窓のすぐ向こうを店員がトレイを持って通り過ぎていく。見られるかもしれない極限の羞恥と恐怖が、子宮の奥をキュンキュンと疼かせ、狂ったような快感の波となって脳髄を焼き尽くしていった。",
  "choices": [
    {
      "label": "ガラス窓を正面に見据えながらソファの上で激しく突き上げられる",
      "outcome": "廊下のガラス窓に視線を向けた体勢のまま、激しいストロークで子宮口を突き上げられた。通り過ぎる人影に怯えながらも、快楽の絶頂に達してガラスに向かって淫らな悲鳴を響かせてしまった。",
      "effects": {
        "relationship": 9,
        "stress": -12,
        "libido": 12,
        "morality": -6
      }
    },
    {
      "label": "マイクのスイッチを入れて喘ぎ声をスピーカーに響かせる",
      "outcome": "乱暴に握らされたマイクから、二人の濡れた水音と生々しい喘ぎ声が大音量で部屋中に反響した。狂気じみた興奮に包まれながら、制服を脱ぎ散らかしたソファの上で互いを貪り尽くした。",
      "effects": {
        "relationship": 8,
        "stress": -11,
        "libido": 12,
        "morality": -5
      }
    },
    {
      "label": "内線電話が鳴り響く音にビクッと飛び起きて服を急いで着る",
      "outcome": "「終了10分前のお電話です」という内線コールのベルがけたたましく鳴り響き、二人は慌てて身体を離して乱れた制服をかき集めた。火照った身体と濡れた下半身を無理やり制服に押し込み、会計へと向かった。",
      "effects": {
        "relationship": 7,
        "stress": -6,
        "libido": 8,
        "morality": -3
      }
    }
  ],
  "diary": [
    "カラオケのドアのガラス窓から廊下が見える部屋で、店員が通るのも気にせずソファで制服を剥ぎ取られて繋がった。見られる恐怖で狂いそうだったのに、信じられないくらい濡れて達した。",
    "大音量で曲を流しながら、ソファの上で汗と愛液まみれになって抱き合った。廊下の人影が見えるたびに子宮がキュウッと締まって、背徳の快楽に溺れた。",
    "内線電話が鳴るまでノンストップで貪り合って、ソファを愛液で濡らしてしまった。制服のボタンを留め直す手が震えて止まらなかった。"
  ],
  "femaleVariant": {
    "text": "放課後のカラオケ店。受付で通された部屋は、廊下に面したドアの中央に大きなガラス窓がついた個室だった。通りを歩く店員や他のお客さんの姿が視界をよぎる。それなのに、曲が始まって照明が落ちた瞬間、{partner}はデンモクを放り出し、私を長いソファの上に押し倒した。\n\n「ちょ……ガラス窓から中が見えちゃうよ……！？」\n「暗いから向こうからは見えにくいよ。……それに、見られてもいいよ、あなたの全部奪っちゃいたいもん」\n彼女は私の制服のセーラー服の裾をめくり上げ、ブラジャーのホックを外して豊かな胸を露わにした。廊下の薄明かりに照らし出される私の白い肌を、彼女の熱い唇が貪り、キスマークを刻んでいく。いつ店員が注文を取りに入ってくるかも分からない恐怖の中、彼女の手は私のショーツを引き裂くように押し下げ、熱く湿った秘裂へと二本の指をずぶりと沈めた。\n\n「っ、あぁ……！ 人が、廊下を歩いてる……っ！」\n「私のことだけ見て……ほら、中がすっごくキュウキュウ締まってくる……」\nカラオケの重低音にかき消されながら、ソファの上で二人の素肌が激しく擦れ合い、愛液の飛沫が革張りのシートを濡らしていく。他人の視線に晒される極限の背徳感が、女同士の淫らな愛撫をどこまでも濃密に加速させていった。",
    "choices": [
      [
        "ガラス窓に背を向けてソファの上で彼女の指に乱れ狂う",
        {
          "stats": {
            "relationship": 9,
            "stress": -12,
            "intimacy": 12,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "ソファの上で互いの服を脱ぎ散らかして貝合わせのように擦り合う",
        {
          "stats": {
            "relationship": 8,
            "stress": -11,
            "intimacy": 12,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "内線ベルの音に驚いて慌ててセーラー服の乱れを整える",
        {
          "stats": {
            "relationship": 7,
            "stress": -6,
            "intimacy": 8,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "カラオケのガラス窓から廊下が見える部屋で、{partner}と制服を脱ぎ散らかしてソファの上で愛し合った。店員さんが前を通るたびに息を殺して、でも快感に負けて何度も果ててしまった。",
      "大音量の音楽の中で、ソファの上に愛液を散らしながら二人で乱れ合った。ガラス窓の向こうの視線すら興奮の材料になってしまう自分が怖かった。",
      "終了10分前の電話が鳴って慌てて服を着直したけれど、彼女のキスマークが首元に残っていて、マフラーで隠しながら帰宅した。"
    ]
  }
});




/* ------------------------------------------------------------------ */
/* 39. 放課後の図書室・開架書架の隙間で本棚に手をついて声を押し殺す逢瀬 */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_library_bookshelf_hide",
  "title": "放課後の図書室・開架書架の隙間で本棚に手をついて声を押し殺す逢瀬",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student"
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "放課後の図書室。静まり返った館内には、換気扇の低い唸りと、たまにページをめくる乾いた紙の音だけが微かに響いていた。一番奥まった日本文学全集の開架書架の細い通路。誰かが本を探しに来れば一目で鉢合わせするような死角で、私は{partner}に背後から本棚へと押しつけられていた。\n\n「ちょ……ここ、図書室だよ……司書さんすぐそこに座ってるのに……っ」\n「声出さなきゃバレないよ。……お前の制服姿、ずっと後ろから見てたら我慢できなくなっちゃった」\n木と古紙の乾いた匂いが満ちる中、{partner}の熱い掌が私の制服スカートを乱暴にたくし上げ、硬い背表紙が並ぶ棚に両手をつかされる。静寂の空間に、ショーツのクロッチが引きずり下ろされる布擦れの音がやけに生々しく耳を打つ。\n\n「っ、ひゃ……っ！ 布の音、響いちゃう……っ」\n「じゃあ、この音は？ ……ほら、もうこんなにぐちゅぐちゅに濡れてる」\n背後から無遠慮に差し込まれた逞しい指が、愛液でとろとろに解けた私の蜜裂をぬちりと割った。すぐ隣の通路で誰かが本棚から一冊を抜き取るカチャリという音が聞こえる。息を吸うことすら憚られる静けさの中で、奥深くまで指を抉り込まれ、私は本棚に額を押し当てて激しい快感の痺れに歯を食いしばっていた。",
  "choices": [
    {
      "label": "本棚に爪を立てて静寂の中で声を殺して絶頂する",
      "outcome": "本棚の木の角に爪を食い込ませ、息を殺しながら背後から激しく指で子宮口を擦り上げられた。すぐ隣の通路を歩く生徒の足音に怯えながら、声の代わりに熱い吐息を古書に吹きかけ、激しく身悶えて絶頂した。",
      "effects": {
        "relationship": 8,
        "stress": -10,
        "libido": 11,
        "morality": -5
      }
    },
    {
      "label": "静けさに耐えかねて相手の唇を自分の唇で塞ぎながら乱れ合う",
      "outcome": "喘ぎ声を漏らさないよう振り返って相手の首に抱きつき、貪るような口づけで互いの吐息を塞ぎ合った。唾液を絡め合わせる生々しい音を立てながら、下半身を擦りつけ合って濃密な快楽を貪り合った。",
      "effects": {
        "relationship": 9,
        "stress": -11,
        "libido": 12,
        "morality": -5
      }
    },
    {
      "label": "司書の見回り足音に心臓を縮み上がらせて身体を固める",
      "outcome": "司書の見回りの靴音が近づいてきて、二人は本棚の隙間で密着したまま息を止めた。本棚の隙間から司書の姿がチラリと見えた極限のスリルに、下腹がきつく締めつけられて愛液が溢れ出した。",
      "effects": {
        "relationship": 6,
        "stress": -5,
        "libido": 8,
        "morality": -3
      }
    }
  ],
  "diary": [
    "放課後の静まり返った図書室で、本棚の隙間に手をつかされてスカートの中を弄られた。誰かが本を探している音がすぐ横で聞こえる中、声を殺して絶頂した。",
    "静寂の図書室で、本棚に額を擦りつけながら奥を掻き回された。古本の匂いの中に自分の愛液の淫臭が混ざり合って、背徳感で頭が狂いそうだった。",
    "司書さんの足音が近づいてきた時、本棚に押しつけられたまま固まって息を殺した。バレたら学校にいられなくなる恐怖が、快感を何倍にも跳ね上げていた。"
  ],
  "femaleVariant": {
    "text": "放課後の図書室。勉強熱心な生徒たちが自習机でペンを走らせる静寂の中、私たちは奥まった大型本・全集の並ぶ開架書架の隙間へと滑り込んだ。四方を背の高い本棚に囲まれた細長い空間。誰かが足を踏み入れればすぐに視界に入る場所で、{partner}は私の肩を掴んで本棚の側面に押し当てた。\n\n「ちょっと……！ 図書室だよ、声出したら即バレちゃうよ……」\n「声出さなきゃいいんでしょ？ ……ねえ、スカート捲らせて」\n彼女の細い指が私の制服スカートをたくし上げ、タイツのウエストゴムを無理やり引き下げてくる。古紙と革表紙の匂いが漂う静寂の中、衣類が擦れ合う微かな衣擦れ音すら爆音のように鼓膜を叩く。\n\n「んっ……ぁ、やだ、指……っ！」\n「ほら、静かに……。こんなに奥まで濡らして、声我慢できる？」\n彼女の指先が、愛液でぐしょぐしょに濡れそぼった割れ目へと滑り込み、二本の指をぬちりと膣奥へ沈めた。すぐ向こうの書架で本を探す足音が聞こえる中、密やかに繰り出される指のストロークに、私は本棚に顔を埋めて息を詰まらせていた。",
    "choices": [
      [
        "本棚に額を押し当てて彼女の指先で達する",
        {
          "stats": {
            "relationship": 8,
            "stress": -10,
            "intimacy": 11,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "声が出ないように彼女の手首を噛みながら愛撫を受け止める",
        {
          "stats": {
            "relationship": 8,
            "stress": -9,
            "intimacy": 11,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "司書が通り過ぎるまで息を止めて身体を密着させる",
        {
          "stats": {
            "relationship": 6,
            "stress": -5,
            "intimacy": 8,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "放課後の静まり返った図書室で、本棚の陰で{partner}に指で奥を掻き回された。隣の棚に人がいるのに声を押し殺してイッてしまって、背徳感で腰が砕けた。",
      "古本が並ぶ棚に手をついて、スカートをめくられたまま愛撫された。誰かが角を曲がってきたら終わりというスリルが、快楽を何倍にも濃密にしていた。",
      "図書室を出る時、貸出カウンターの司書さんと目が合って心臓が跳ね上がった。下着が濡れて重くて、まともに歩けなかった。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 40. 放課後の体育館裏・部活生の掛け声がすぐそこで響く中での壁際情事 */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_gym_rear_wall",
  "title": "放課後の体育館裏・部活生の掛け声がすぐそこで響く中での壁際情事",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student"
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "放課後のグラウンド。夕日が赤く染める空の下、サッカー部や陸上部の部活生たちの威勢のいい掛け声やホイッスルの音が風に乗って響き渡っている。そのすぐ脇、体育館のコンクリート壁と用具倉庫に挟まれた幅一メートルにも満たない薄暗い隙間。私は{partner}に強引に腕を引かれ、埃っぽいコンクリートの壁に背中を押し当てられていた。\n\n「ちょっ……すぐそこ、サッカー部が走ってるんだよ！？ ボールが飛んできたら見えちゃう……っ」\n「飛んでこないって。……お前の汗ばんだうなじ見てたら、もう限界なんだよ」\n部活帰りの火照った体温。{partner}の熱い鼻息が首筋に吹き付けられ、制服のブラウスの裾を強引に引き出される。体育館の壁はひんやりと冷たいのに、重なる{partner}の身体は焼けるように熱い。プリーツスカートを腰までたくし上げられ、ショーツのクロッチを横に乱暴に引っ張られた。\n\n「っ、んぁ……！ ボールの音、すぐそこでしてる……っ！」\n「あいつらに聞こえないように、俺に抱きついてろよ」\n壁に手をつかされ、たくし上げたスカートの奥、愛液でぐちゅぐちゅに濡れそぼった割れ目に、{partner}の熱く反り返った肉棒がずぶりと音を立ててめり込んだ。部活生たちの「ナイスシュート！」という大声がすぐ数メートル先から届く中、私の身体は激しいピストンでコンクリート壁に打ちつけられ、声を押し殺しながら快楽の奈落へと突き落とされていった。",
  "choices": [
    {
      "label": "体育館の壁に背中を擦りつけながら激しい突き上げに耐える",
      "outcome": "ひんやりしたコンクリート壁に背中を押し当てたまま、容赦ないピストンで子宮口をガンガンと突き上げられた。部活生たちの足音と掛け声を聞きながら、声の代わりに彼の肩口に歯を立てて激しく絶頂した。",
      "effects": {
        "relationship": 9,
        "stress": -12,
        "libido": 12,
        "morality": -6
      }
    },
    {
      "label": "ボールが壁に当たって跳ね返る音に悲鳴を飲み込む",
      "outcome": "すぐ裏の壁に「ドスッ」とサッカーボールが直撃し、二人はビクンと身体を跳ねさせながら強く結合した。部活生がボールを取りに来る気配に怯えながら、奥深くまで注ぎ込まれる熱さに痙攣して達した。",
      "effects": {
        "relationship": 8,
        "stress": -10,
        "libido": 11,
        "morality": -5
      }
    },
    {
      "label": "部活の顧問のホイッスルが鳴り響く音に慌てて服を整える",
      "outcome": "顧問の鋭い笛の音と「集合！」の声が響き、二人は急いで身体を離してスカートを払い落とした。砂埃と愛液で汚れた制服をごまかしながら、何食わぬ顔で校門へと足早に抜け出した。",
      "effects": {
        "relationship": 7,
        "stress": -6,
        "libido": 8,
        "morality": -3
      }
    }
  ],
  "diary": [
    "部活生たちが大声で練習している体育館のすぐ裏の隙間で、壁に手をつかされてスカートをまくられた。ボールの音が響く真横で貫かれて、声が出そうだった。",
    "コンクリートの壁に背中を押しつけられ、おまんこの奥まで突き上げられた。グラウンドの視線がすぐそこにある極限の背徳感に、頭が真っ白になった。",
    "ボールが壁にぶつかるたびに心臓が止まりそうになったけれど、その緊張のせいで愛液が溢れて止まらなかった。"
  ],
  "femaleVariant": {
    "text": "夕暮れの放課後。グラウンドからは陸上部の走る足音と掛け声がグラウンド越しに反響している。体育館の側面、用具倉庫との間にできた狭いコンクリートの通路に、私は{partner}に手を引かれて滑り込んだ。部活終わりの汗の匂いと、夕焼けの生ぬるい風。\n\n「ちょっと……誰か倉庫に用具取りに来たらどうするの！？」\n「大丈夫、練習終わるまで誰も来ないよ。……ねえ、もう待てない」\n{partner}は私のセーラー服のスカーフを引き寄せ、そのまま荒々しく唇を奪ってきた。体育館の外壁に背中を押しつけられ、冷たいコンクリートの感触と、彼女の火照った身体の熱さが重なる。短めのスカートを捲り上げられ、指先がショーツの布地を湿らせていく。\n\n「んっ、ぁ……！ 掛け声、すぐそこで聞こえる……っ」\n「もっと濡らして……ほら、指がこんなに吸い込まれちゃう」\n彼女の指が濡れた割れ目へと沈み込み、ぐちゃぐちゃと肉壁を掻き分け始めた。グラウンドの笛の音が響くたび、私の膣肉はビクビクと収縮し、夕暮れの薄暗がりの中で声にならない甘い喘ぎを彼女の首筋に零していた。",
    "choices": [
      [
        "体育館の外壁に手をついて彼女の指に腰を揺らす",
        {
          "stats": {
            "relationship": 9,
            "stress": -11,
            "intimacy": 12,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "倉庫の陰で互いのスカートを捲り上げてまさぐり合う",
        {
          "stats": {
            "relationship": 8,
            "stress": -10,
            "intimacy": 11,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "部活生の足音が近づく気配に慌てて離れて息を殺す",
        {
          "stats": {
            "relationship": 6,
            "stress": -5,
            "intimacy": 8,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "放課後の体育館裏で、部活生の声が響く中、壁に押しつけられて{partner}に指で奥を掻き回された。誰かが角を曲がってきたら終わりの状況で絶頂した。",
      "グラウンドからのホイッスルを聞きながら、制服のスカートをめくられて愛撫された。他人の目が届くスリルで、信じられないくらい濡れてしまった。",
      "倉庫の鍵が開く音がして慌ててスカートを直した。心臓がバクバクしながら、二人で手を繋いで逃げるように校門を出た。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 41. 通学路の暗がり・最終バス待ちの屋根付きバス停ベンチでの上着隠し情事 */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_bus_stop_night_bench",
  "title": "通学路の暗がり・最終バス待ちの屋根付きバス停ベンチでの上着隠し情事",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student"
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "夜の八時過ぎ。街灯がまばらに灯る郊外の通学路、錆びついた屋根がついた木製のバス停ベンチ。最終バスが来るまであと十五分。たまに通り過ぎる自動車のヘッドライトが、二人の足元を白く照らし出しては夜の闇へと走り去っていく。そんな公道の真ん中で、私たちはバスを待つわずかな時間すら我慢できず、狂ったように発情していた。\n\n「寒いでしょ？ これ、一緒に入ろ」\n{partner}は自分のダッフルコートの前を大きく広げ、ベンチに座る私の身体を包み込むようにして膝の上に引き上げた。外見上は、寒空の下で暖を取り合っている恋人同士。だが、コートの厚いウール生地の裏側では、私の制服スカートは完全に捲り上げられ、冷気に晒された太ももの内側を{partner}の手のひらが激しく撫で擦っていた。\n\n「っ、ダメだよ……車、時々通るのに……ライトで照らされたら……っ！」\n「見えないよ、コートで前塞いでるから。……ほら、お前もうこんなにぐしょぐしょだよ」\nファスナーの開いたスラックスから突き出た硬く熱い先端が、濡れ切ったショーツを横に押しのけ、冷えた私の蜜唇を割り入った。通り過ぎる車のロードノイズが耳元を掠める中、ずぶりと沈み込む圧倒的な質量感。真冬の夜風が頬を刺す寒さの中で、下半身だけが灼熱の欲望に貫かれ、私はコートの中で悲鳴を噛み殺しながら{partner}の首にしがみついていた。",
  "choices": [
    {
      "label": "通り過ぎる車のライトに怯えながらコートの中で腰を揺らす",
      "outcome": "ヘッドライトの光がベンチを横切るたびに心臓を跳ねさせながら、コートの中で静かに腰を沈め続けた。公道で車に見られるかもしれない恐怖と快楽の極致に達し、声の代わりに熱い吐息をコートの中に閉じ込めて達した。",
      "effects": {
        "relationship": 9,
        "stress": -12,
        "libido": 12,
        "morality": -6
      }
    },
    {
      "label": "「バス来ちゃうよ」と震えながらも相手を強く締めつける",
      "outcome": "遠くに見えるバスのライトに焦りながらも、肉壁は相手の熱さを離すまいと強く締めつけた。ギリギリまで結合の快感を貪り、バスが停留所に止まる寸前に身を震わせて絶頂した。",
      "effects": {
        "relationship": 8,
        "stress": -10,
        "libido": 11,
        "morality": -5
      }
    },
    {
      "label": "近づいてくるバスのブレーキ音に大慌てで身体を離す",
      "outcome": "バスのプシューというブレーキ音に驚いて跳ね起き、乱れた制服とコートを大慌てで整えた。火照った顔と愛液で重くなった下着のままバスに乗り込み、運転手に定期券を見せる手が震えていた。",
      "effects": {
        "relationship": 7,
        "stress": -6,
        "libido": 8,
        "morality": -3
      }
    }
  ],
  "diary": [
    "夜のバス停のベンチで、車が通り過ぎる中、ダッフルコートで隠しながら{partner}の膝の上で繋がった。ヘッドライトで照らされるたびに背徳感で狂いそうだった。",
    "最終バスを待つわずかな時間も我慢できず、コートの中で制服のまま貫かれた。真冬の寒さの中で、下半身だけが熱くてドロドロに溶けていた。",
    "バスが近づいてくる音を聞きながら絶頂して、慌てて服を直して乗り込んだ。車内の暖房で自分の愛液の匂いが立ち上ってくるようで恥ずかしかった。"
  ],
  "femaleVariant": {
    "text": "夜の停留所。街灯の光が届かない屋根付きのベンチ。最終バスまでの待ち時間、冷たい夜風が制服のスカートを冷やしていく。向かい合って座っていた{partner}が、寒そうに息を吐きながら私の隣へ腰を移し、自分の長いウールコートを広げて私ごと包み込んできた。\n\n「寒いね……こうしてれば誰も気づかないよ」\nコートの内側の暗闇。彼女の温かい手が私の太ももを撫で上げ、タイツの股部分に指を潜り込ませてきた。時折、街道を猛スピードで通り過ぎるトラックのヘッドライトが、ベンチの屋根を一瞬だけ白く染め抜く。\n\n「っ、ちょ……道沿いだよ、車から見えちゃう……っ！」\n「見てないよ。みんな前見て運転してるから……ほら、もうこんなに熱い」\n彼女の細く長い指先が、愛液でぐっしょりと濡れそぼった割れ目を割って滑り込んできた。寒風が吹き抜ける公道のベンチで、コートの中だけが蒸れた甘い淫臭で満たされていく。車が走り去る風圧を感じながら、奥深くまで抉り込まれる指の快感に、私は彼女のマフラーに顔を埋めて喘ぎ声を飲み込んでいた。",
    "choices": [
      [
        "車のロードノイズに紛れてコートの中で激しく達する",
        {
          "stats": {
            "relationship": 9,
            "stress": -11,
            "intimacy": 12,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "コートの中で彼女の胸元にも手を伸ばして抱き締め合う",
        {
          "stats": {
            "relationship": 8,
            "stress": -10,
            "intimacy": 11,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "遠くに見えたバスのヘッドライトに慌てて体勢を直す",
        {
          "stats": {
            "relationship": 7,
            "stress": -6,
            "intimacy": 8,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "夜のバス停で、車が通り過ぎる真横でコートに隠れながら{partner}に指で奥を掻き回された。ヘッドライトに照らされる恐怖で息が止まりそうだった。",
      "寒空のベンチで、コートの内側で下着を濡らし合って愛撫された。バスが来るまでの数分間で激しくイッてしまって、足がガクガク震えた。",
      "バスに乗り込んだ後も、コートの下のスカートが濡れていて、座席に座るのが恥ずかしくてずっと立っていた。"
    ]
  }
});

/* ------------------------------------------------------------------ */
/* 42. 文化祭前夜の準備・教室の隅に積まれた段ボールの陰での生々しい熱情 */
/* ------------------------------------------------------------------ */
window.defineEvent({
  "id": "student_partner_school_festival_prep_cardboard",
  "title": "文化祭前夜の準備・教室の隅に積まれた段ボールの陰での生々しい熱情",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "low_morality",
    "school_student"
  ],
  "weight": 28,
  "publicSex": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "文化祭前夜。下校時刻が延長された校内は、模擬店の看板作りやお化け屋敷の暗幕張りに追われる生徒たちで熱気と騒音に包まれていた。廊下をペンキや段ボールを抱えたクラスメイトたちが足早に行き交う中、教室の最奥、天井近くまで積まれた大きな段ボール箱の山と暗幕が作り出すわずかな死角に、私は{partner}に引きずり込まれた。\n\n「みんな外で看板塗ってるのに……何する気……！？」\n「何って……一日中お前のジャージ姿見てたら、ムラムラして爆発しそうだったんだよ」\n段ボールの埃っぽい匂いと絵の具の溶剤の匂い。{partner}の逞しい腕に抱きすくめられ、着古した体操着のジャージのズボンと下着を一気に膝まで引きずり降ろされた。すぐ数メートル先では「おい、ガムテープどこー？」と友だちが大声で呼び合っている。\n\n「やだ、誰か入ってくる……！ 段ボール押されたら丸見えになっちゃう……っ！」\n「大丈夫、誰も入ってこないって。……ほら、力抜いてよ」\n床に敷かれたブルーシートの上で四つん這いにされ、剥き出しになった腰を掴まれる。濡れててらてらと光る私の秘肉へ、{partner}の反り立つ肉棒がぬちりと音を立ててめり込んだ。クラスメイトの笑い声と資材を運ぶ音が壁一枚隔てたすぐそこで響く中、段ボールを微かにガサガサと揺らしながら、荒々しい結合の快感が背骨を貫いて脳を麻痺させていった。",
  "choices": [
    {
      "label": "段ボールに爪を立てて友人の声を聞きながら絶頂する",
      "outcome": "クラスメイトたちの賑やかな会話をすぐ背後に聞きながら、四つん這いの姿勢で子宮口を激しく突き上げられた。段ボールの壁に爪を食い込ませ、声を押し殺しながら狂ったように腰を震わせて達した。",
      "effects": {
        "relationship": 9,
        "stress": -12,
        "libido": 12,
        "morality": -6
      }
    },
    {
      "label": "「早く出して」と懇願しながら腰を激しく振って応じる",
      "outcome": "誰かが資材を取りに来る恐怖に急かされ、自ら腰を激しく振って相手を求めた。二人の汗と愛液が混ざり合い、ブルーシートの上で息を乱しながら同時に激しく絶頂した。",
      "effects": {
        "relationship": 8,
        "stress": -10,
        "libido": 12,
        "morality": -5
      }
    },
    {
      "label": "「おーい、段ボールまだある？」と近づく声に大慌てで止める",
      "outcome": "「段ボール持ってくねー」と友達が山に手をかけた瞬間、二人は息を止めて固まった。山が崩れそうになるスリルをやり過ごした後、大慌てでジャージを履き直して何食わぬ顔で作業に戻った。",
      "effects": {
        "relationship": 7,
        "stress": -5,
        "libido": 8,
        "morality": -3
      }
    }
  ],
  "diary": [
    "文化祭準備の夜、教室の隅の段ボールの山の陰で、友達がすぐそこで作業しているのにジャージを脱がされて貫かれた。声を殺して絶頂した背徳感は一生忘れられない。",
    "絵の具の匂いが立ち込める教室で、ブルーシートの上に愛液を散らしながら貪り合った。見つかったら即噂になる極限のスリルに、身体の奥が疼いて止まらなかった。",
    "「段ボール取ってー」って友達が近づいてきた時、繋がったまま息を殺した。バレる恐怖で膣肉がきつく締まって、相手も私も一気に達してしまった。"
  ],
  "femaleVariant": {
    "text": "文化祭前日の放課後。教室はお化け屋敷の準備で黒い暗幕が張り巡らされ、薄暗い迷路のようになっていた。外の廊下からは買い出し組の賑やかな笑い声や金づちを叩く音が響いている。その暗幕のカーテンの裏、教室の隅に積まれた段ボールの死角に、私は{partner}に連れ込まれた。\n\n「ちょっと……みんな作業してるんだよ？ 誰か暗幕めくったらどうするの……っ」\n「みんな外の看板に夢中だよ。……それより、体操着のあなた、すごく可愛い」\n{partner}は私の体操着の短パンのゴムに指を掛け、ショーツごと太ももまで引きずり下ろした。ブルーシートの冷たい感触。すぐ目の前をクラスメイトが「ペンキ持ってきたよー」と通り過ぎていく気配がする。\n\n「んっ、ぁ……！ 音、立てないで……っ！」\n「じゃあ、声我慢してね……」\n彼女の指先が、愛液でぐしょぐしょに濡れそぼった割れ目へと滑り込み、二本の指をぬちりと膣奥へ沈めた。段ボールの山に手を突いた姿勢のまま、激しく肉壁を抉られる。友だちの気配がすぐそこにある極限の背徳感に、私の下腹は熱く痙攣し、暗幕に顔を押し当てて激しい快感に身悶えていた。",
    "choices": [
      [
        "暗幕をぎゅっと握りしめて彼女の指に乱れ狂う",
        {
          "stats": {
            "relationship": 9,
            "stress": -11,
            "intimacy": 12,
            "boundaryVoice": 5
          }
        }
      ],
      [
        "ブルーシートの上で互いの体操着を捲り上げて弄り合う",
        {
          "stats": {
            "relationship": 8,
            "stress": -10,
            "intimacy": 11,
            "boundaryVoice": 4
          }
        }
      ],
      [
        "友達が暗幕に触れた瞬間に慌てて体操着を直す",
        {
          "stats": {
            "relationship": 7,
            "stress": -5,
            "intimacy": 8,
            "boundaryVoice": 3
          }
        }
      ]
    ],
    "diary": [
      "文化祭前夜の暗幕の裏で、段ボールに隠れながら{partner}に指で奥を掻き回された。すぐ横を友達が歩いているのに、声を押し殺してイッてしまった。",
      "作業の合間に二人で死角に潜り込んで体操着を乱し合った。段ボールに爪を立てて絶頂した瞬間、頭の中が真っ白になった。",
      "暗幕から出て作業に戻ったけれど、下着がぐしょぐしょに濡れていて、歩くたびに太ももが擦れて恥ずかしかった。"
    ]
  }
});