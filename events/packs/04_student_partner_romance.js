// ============================================================================
// Pack: 04_student_partner_romance — 学生カップルの放課後・青春の秘め事 (12 events)
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
