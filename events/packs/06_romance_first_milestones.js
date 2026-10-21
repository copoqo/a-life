// ============================================================================
// Pack: 06_romance_first_milestones — 出会い・告白・初デート・初キス・初体験・同性愛アーク (24 events)
// ============================================================================
window.defineEvent({
  "id": "first_romance_holding_hands",
  "title": "夕暮れの帰り道と温もり",
  "age": [
    12,
    35
  ],
  "trigger": "chain_only",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 0,
  "once": true,
  "is_narrative": true,
  "narrative_type": "followup",
  "text": "想いが通じ合ってから数か月。夕暮れの帰り道、どちらからともなく指先が触れ合い、ぎゅっと手をつないだ。手のひらから伝わる確かな温もりに、胸の鼓動が高鳴った。",
  "effects": [
    {
      "path": "state.mood",
      "op": "add",
      "value": 4
    },
    {
      "path": "state.current_libido",
      "op": "add",
      "value": 15
    }
  ],
  "diary": "ただ手をつないで歩くだけなのに、胸が締めつけられるようにドキドキした。相手のぬくもりがずっと残っている。"
});

window.defineEvent({
  "id": "same_sex_awakening",
  "title": "放課後の更衣室、白い素肌と甘い汗の匂い",
  "age": [
    14,
    19
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
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
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
    }
  },
  "text": "部活動の後の更衣室。西日が差し込む密室で、親しい友人が汗ばんだ制服を脱ぎ捨て、薄いキャミソール一枚になった。火照った白い肩口や華奢な鎖骨、微かに浮き出た胸の膨らみに目が釘付けになり、下腹がきゅんと甘く疼き出す……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "熱くなった彼女の背中にそっと手を伸ばす",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "動悸を抑えきれず、熱くなった彼女の背中にそっと手を伸ばす。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "same_sex_first_kiss",
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
      "label": "太ももを固く合わせる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "恥ずかしさに顔を真っ赤にして俯き、太ももを固く合わせる。",
          "effects": []
        }
      ]
    }
  ],
  "diary": [
    "同じ女の子の身体なのに、あんなに胸が締めつけられて下腹が熱くなるなんて。汗の匂いと透ける肌の白さが頭から離れず、夜になっても秘所がじっとりと濡れていた。",
    "女友達に欲情してしまう自分への戸惑い。恥ずかしさで身体中が火照り、太ももを擦り合わせながら胸の鼓動を鎮めるしかなかった。"
  ]
});

window.defineEvent({
  "id": "same_sex_first_kiss",
  "title": "放課後の図書室、唇に触れた柔らかな熱",
  "age": [
    15,
    22
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 16,
  "text": "夕暮れ時の図書室の奥、本棚に挟まれた静かな死角。二人きりで寄り添い言葉を交わすうち、吐息が重なり合うほどの近さに。不意に見つめ合い、どちらからともなく吸い寄せられるように女同士の柔らかな唇を重ね合わせた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "甘く濡れた舌先をそっと絡め合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "吐息を飲み込みながら、甘く濡れた舌先をそっと絡め合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "same_sex_secret_fingers",
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
      "label": "胸の奥の疼きを噛みしめる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "触れ合った唇の熱さに息を呑み、胸の奥の疼きを噛みしめる。",
          "effects": []
        }
      ]
    }
  ],
  "diary": [
    "男の子の唇とは違う、柔らかく湿った彼女の唇の感触。触れ合った瞬間、身体中に電流が走り、舌が絡み合うたびに下腹の奥が蜜で満たされていくのが分かった。",
    "唇が触れた瞬間の甘い痺れ。静かな図書室で響く互いの呼吸音に、身体中が熱く蕩けてしまいそうだった。"
  ]
});

window.defineEvent({
  "id": "confessed_to",
  "title": "告白される",
  "age": [
    15,
    35
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "unmarried"
  ],
  "weight": {
    "base": 24,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "is_encounter": true,
  "text": "知り合いから好意を伝えられた。自分の気持ちはどうだろう。",
  "choices": [
    {
      "id": "choice_0",
      "label": "「ごめんなさい」と丁寧に断り、その場を離れる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "「ごめんなさい」と丁寧に断り、その場を離れる。",
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
      "id": "choice_1",
      "label": "「まずは友達として仲良くしよう」と答える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "「まずは友達として仲良くしよう」と答える。",
          "effects": [
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
      "label": "驚きつつも「少し考える時間をちょうだい」と伝える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "驚きつつも「少し考える時間をちょうだい」と伝える。",
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
      "id": "choice_3",
      "label": "照れながらも嬉しそうに頷き、交際を承諾する",
      "outcomes": [
        {
          "id": "outcome_3",
          "weight": 1,
          "description": "照れながらも嬉しそうに頷き、交際を承諾する。",
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
                "eventId": "first_romance_holding_hands",
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
      "label": "その場で手を取り、二人きりの場所へ移動して唇を重ねる",
      "outcomes": [
        {
          "id": "outcome_4",
          "weight": 1,
          "description": "その場で手を取り、二人きりの場所へ移動して唇を重ねる。",
          "effects": [
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 40
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "first_romance_holding_hands",
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
    "meeting",
    "none",
    "none"
  ]
});

window.defineEvent({
  "id": "same_sex_secret_fingers",
  "title": "夜のお泊まり会、布団の中の指先",
  "age": [
    16,
    25
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 16,
  "text": "消灯した薄暗い部屋、並べた布団の中で二人。他愛ないおしゃべりの合間、掛け布団の下でそっと手が触れ合う。熱を帯びた指先がパジャマの裾から滑り込み、滑らかな太ももの内側を撫で上げ、下着のレースの奥へと這っていく……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "濡れそぼった秘唇へと彼女の指を招き入れる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "声を殺して腰を浮かせ、濡れそぼった秘唇へと彼女の指を招き入れる。",
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
                "eventId": "same_sex_intimate_bath",
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
      "label": "彼女の柔らかな胸に手を滑り込ませる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "恥ずかしさに息を呑みながらも、彼女の柔らかな胸に手を滑り込ませる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "布団の中で衣擦れの音を立てながら、濡れた秘所に指先を深く沈められた。水音を立てるたび、彼女の指がキュウキュウと締めつけられ、声を殺して何度も絶頂した。",
    "同じ女同士だからこそ分かる、一番感じやすい場所。丁寧に愛撫されながら、シーツを握りしめて甘い痺れに溺れていった。"
  ]
});

window.defineEvent({
  "id": "first_intimacy_milestone",
  "title": "初めて身体を重ねる夜",
  "age": [
    18,
    30
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "unmarried",
    "virgin",
    "first_sex_with_partner"
  ],
  "weight": {
    "base": 25,
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
  "boosts": [
    {
      "whenFlag": "firstKiss",
      "factor": 3
    }
  ],
  "phase": "virgin",
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "二人きりの寝室、衣擦れの音と荒くなる息遣い。触れ合う素肌の熱さと下腹の疼きに戸惑いながら、互いに衣服を脱ぎ去り、身体の奥まで重なり合うかどうかの緊迫した空気が満ちてゆく……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "身体の奥まで受け入れる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "恥じらいながらも素肌を晒し、身体の奥まで受け入れる。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "intimacy_awakening",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "まずは言葉で確かめ合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "熱くなった身体を寄せ合い、まずは言葉で確かめ合う。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "今はまだ奥まで許せないと躊躇い伝える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "今はまだ奥まで許せないと躊躇い伝える。",
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
    "mutual_talk",
    "boundary"
  ],
  "femaleVariant": {
    "text": "二人きりの寝室、衣擦れの音と荒くなる息遣い。触れ合う素肌の熱さと下腹の疼きに戸惑いながら、互いに衣服を脱ぎ去り、女同士の秘所を重ね合うかどうかの緊迫した空気が満ちてゆく……。",
    "choices": [
      [
        "恥じらいながらも素肌を晒し、彼女の指先と濡れた蜜唇を受け入れる",
        {
          "selfUnderstanding": 2,
          "chain": {
            "eventId": "intimacy_awakening",
            "delay": 1,
            "prob": 1
          }
        }
      ],
      [
        "熱くなった身体を寄せ合い、まずは言葉で確かめ合う",
        {
          "selfUnderstanding": 3
        }
      ],
      [
        "今はまだ肌を重ねる覚悟ができないと躊躇い伝える",
        {
          "independence": 3
        }
      ]
    ],
    "diary": [
      "衣服を脱ぎ捨てて晒した肌に、彼女の細い指先と柔らかい唇が這った。同じ女同士なのに、触れられるたびに背筋が弓なりになって、蜜唇の間から甘い愛液がとめどなく溢れ出た。",
      "触れ合いたいのに胸が苦しくて、言葉で確かめ合った。焦らされるような時間も、肌が熱くなる。",
      "身体を許すのはまだ先だと言えた。でも、彼女の手が触れた肌の熱さは、服を着直した後もずっと消えなかった。"
    ]
  }
});

window.defineEvent({
  "id": "partner_first_intimacy_experienced",
  "title": "過去の経験を秘めた、パートナーとの初夜",
  "age": [
    18,
    35
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "unmarried",
    "sex_experienced",
    "first_sex_with_partner"
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
  "is_major": true,
  "phase": "active",
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "薄暗い明かりの下、パートナーの熱い手が衣服の下に滑り込み、火照った素肌をまさぐる。過去の経験で身体は既に快楽を知っており、少し触れられただけで秘唇から蜜が溢れて下着を濡らしてしまう。「もうこんなに濡れてる……」と囁かれ、経験者だと悟られる羞恥と、パートナーの熱情に身を任せたい背徳感で下腹がきゅうと疼く……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "過去を忘れて奥まで受け入れる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "濡れそぼる秘所を広げ、過去を忘れて奥まで受け入れる。",
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
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "言葉少なに激しく求め合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "恥ずかしさに顔を覆い、言葉少なに激しく求め合う。",
          "effects": [
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
      "id": "choice_2",
      "label": "息を整えて抱きしめ合うだけにする",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "胸に去来する過去の記憶に戸惑い、息を整えて抱きしめ合うだけにする。",
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
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "mutual_talk"
  ],
  "diary": [
    "過去に身体を許した経験があるからこそ、少し愛撫されただけで愛液が止まらなくなってしまった。経験を悟られる羞恥心に震えながらも、奥深くまで貫かれた熱い喜びに声を殺して啼いた。",
    "過去の記憶と目の前のパートナーの熱情が混ざり合い、頭が真っ白になるほど激しく身体を重ねた。濡れた肌が擦れ合うぬちりとした音が、夜の部屋にいつまでも響いていた。",
    "過去の経験が脳裏をよぎり、身体を強張らせてしまった。相手は優しく抱きしめてくれたけれど、秘所の奥の疼きが切なかった。"
  ]
});

window.defineEvent({
  "id": "same_sex_intimate_bath",
  "title": "湯気に煙る浴室、二人きりの洗いっこ",
  "age": [
    18,
    35
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
  "weight": {
    "base": 15,
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
  "text": "白く煙る浴室。女同士だからこそ許される密やかな空間で、泡立てたタオルを手に取り互いの身体を洗い合う。濡れて艶めくふくよかな乳房、泡にまみれたくびれや滑らかな太もも。指先が秘唇の割れ目を優しく掠めるたび、熱い吐息が零れ落ちる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "濡れた身体のまま抱き合って舌を這わせる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "泡を洗い流し、濡れた身体のまま抱き合って舌を這わせる。",
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
                "eventId": "same_sex_tribadism",
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
      "label": "湯水に紛れて指を奥深くまで沈め合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "湯船の中で密着し、湯水に紛れて指を奥深くまで沈め合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "温かいシャワーの下で抱き締め合い、濡れた肌と肌を密着させた。愛液と湯水が混ざり合いながら、彼女の指に掻き回される感触に、声を上げて震えた。",
    "湯船の中で絡み合う脚。お互いの身体を隅々まで知り尽くすように触れ合い、身体の芯まで蕩けるような快楽に満たされた。"
  ]
});

window.defineEvent({
  "id": "street_encounter_allure",
  "title_template": "街での出会い 〜{variation_title}〜",
  "age": [
    18,
    35
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "unmarried"
  ],
  "weight": 60,
  "is_encounter": true,
  "choices": [
    {
      "id": "choice_leave",
      "stance": "leave",
      "label": "関わらず立ち去る",
      "effects": {
        "boundaryVoice": 4,
        "stress": -1
      }
    },
    {
      "id": "choice_greet",
      "stance": "greet",
      "label": "挨拶だけして離れる",
      "effects": {
        "social": 2,
        "boundaryVoice": 2
      }
    },
    {
      "id": "choice_safe_talk",
      "stance": "safe_talk",
      "label": "安全な場所で少し会話する",
      "effects": {
        "social": 3,
        "mood": 2
      }
    },
    {
      "id": "choice_cafe",
      "stance": "cafe",
      "label": "近くのカフェに入って話し込む",
      "effects": {
        "social": 4,
        "mood": 3,
        "desire": 2
      }
    },
    {
      "id": "choice_hotel",
      "stance": "hotel",
      "label": "ホテルや二人きりになれる場所に行く",
      "effects": {
        "desire": 8,
        "morality": -5,
        "secrecy": 5
      }
    }
  ],
  "variations": [
    {
      "sub_id": "night_station_front",
      "title": "夜の駅前、人混みの途切れ目で声を掛けられる",
      "description": "週末の夜、改札を出て足早に歩いていると、身なりの整った落ち着いた男性に「すみません、すごく綺麗で思わず声をかけちゃいました」と呼び止められた……。",
      "outcomes": {
        "leave": {
          "text": "「急いでいますので」と冷たく告げ、一度も振り返らずに足早に夜の街へと消えた。",
          "diary": "駅前で声をかけられたけれど、関わらずに立ち去った。夜道は用心するに越したことはない。"
        },
        "greet": {
          "text": "「ありがとうございます、でも予定があるので」と軽く会釈だけしてその場を離れた。",
          "diary": "褒め言葉に軽くお礼だけ言って立ち去った。少し気分は悪くなかった。"
        },
        "safe_talk": {
          "text": "明るい街灯の下で数分だけ他愛ない雑談を交わし、「気をつけて帰ってくださいね」と爽やかに別れた。",
          "diary": "駅前の明るい場所で少しだけお話しした。物腰の柔らかい人で、ちょっとした息抜きになった。"
        },
        "cafe": {
          "text": "駅前のカフェに入り、温かい紅茶を飲みながら趣味や仕事の話で1時間ほど話し込んだ。連絡先を交換して別れた。",
          "diary": "カフェで少し話し込んでしまった。思いがけず話が弾んで、楽しい夜になった。"
        },
        "hotel": {
          "text": "熱い視線に気圧され、押し切られるようにタクシーに乗って二人きりのホテルへ向かった。薄暗い部屋のベッドに押し倒され、見知らぬ熱情に身体を預けた。",
          "diary": "自分でも信じられないけれど、声をかけられた人とホテルに行ってしまった。肌に残る熱が罪深い。",
          "sexualEffects": {
            "desire": 8,
            "secrecy": 6
          }
        }
      }
    }
  ]
});

window.defineEvent({
  "id": "same_sex_tribadism",
  "title": "重なり合う柔肌、互いの蜜を擦り合わせる夜",
  "age": [
    18,
    40
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "adult",
  "presets": [],
  "weight": {
    "base": 15,
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
  "text": "シーツの上で向かい合い、互いの腰を引き寄せて素肌を完全に密着させる。ふっくらとした乳房を押しつけ合い、愛液でびしょ濡れになった秘唇と秘唇を直に重ね合わせて腰を前後に揺らす。ぬちり、ぬちりと湿った水音が響くたび、甘美な絶頂の波が押し寄せる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "狂おしく腰を押しつけ合って同時に果てる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "彼女の首筋に噛みつきながら、狂おしく腰を押しつけ合って同時に果てる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "same_sex_toy_play",
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
      "label": "指も奥深くに沈めて激しく貪り合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "互いのクリトリスを擦り合わせながら、指も奥深くに沈めて激しく貪り合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
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
    "女同士の身体の重なり。お互いの敏感な肉芽が直接擦れ合うたび、頭が真っ白になるほどの激しい快感が駆け抜け、シーツを愛液でびしょ濡れにして何度も痙攣した。",
    "男の人にはない、柔らかくしなやかな肌の摩擦。互いの蜜が泡立つほど腰を揺らし合い、愛しさと快楽に胸が張り裂けそうだった。"
  ]
});

window.defineEvent({
  "id": "adult_romantic_encounter",
  "title": "街角の偶然と芽生える好意・予感の交差点",
  "age": [
    18,
    50
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "single"
  ],
  "weight": 15,
  "availability": {
    "once_per_life": false,
    "cooldown_months": 24,
    "max_occurrences": 5,
    "unique_key": "adult_romantic_encounter"
  },
  "is_encounter": true,
  "text": "街中のカフェ、あるいは通勤途中の駅のホーム。偶然の落とし物をきっかけに言葉を交わした素敵な相手。ふと重なった視線の中に、どこか惹かれ合うような温かい熱を感じて、胸の鼓動が早くなる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "照れながらも連絡先を交換し、次の週末に会う約束をする",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "communication": 2,
            "curiosity": 2,
            "chain": {
              "eventId": "first_date_milestone",
              "delay": 1,
              "prob": 0.85
            }
          },
          "narrative": "休日のカフェの席、あるいは落とした定期券を拾ってくれた優しい手。目が合った瞬間に胸の奥がトクンと鳴った。「よかったら、今度ゆっくりお話ししませんか」と渡された連絡先。少し震える指で返信を打ちながら、新しい恋の始まりに頬が染まった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "礼儀正しくお礼を伝え、爽やかな余韻を残してその場を後にする",
      "utility": 0.8,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "morality": 1,
            "selfKnowledge": 1,
            "happiness": 1
          },
          "narrative": "「どうもありがとうございます」と丁寧に微笑んで頭を下げた。相手は少し名残惜しそうにしていたけれど、日常の中に灯った小さなときめきを胸に、心地よい足取りで歩き出した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "今日、素敵な人と出会った。落とし物を拾ってくれた時の優しい笑顔が頭から離れない。思い切って連絡先を交換したから、今度の週末が待ちきれない！",
    "ちょっとした偶然の出会い。連絡先までは聞かなかったけれど、なんだか映画のワンシーンみたいで、一日中ほんのり幸せな気分で過ごせた。"
  ]
});

window.defineEvent({
  "id": "adult_first_date",
  "title": "二人で出かける約束",
  "age": [
    18,
    75
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 11,
  "is_encounter": true,
  "text": "親しい相手と、二人で時間を過ごすことになった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "気持ちを伝えながら楽しむ",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "気持ちを伝えながら楽しむ。",
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
      "label": "気負わず会話を楽しむ",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "気負わず会話を楽しむ。",
          "effects": [
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
    }
  ],
  "outcomes": [
    "shared_activity",
    "mutual_talk"
  ]
});

window.defineEvent({
  "id": "first_date_milestone",
  "title": "初めてのデート",
  "age": [
    18,
    75
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 30,
  "once": true,
  "is_encounter": true,
  "text": "気になる人と二人で出かける機会が訪れた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "相手の希望も聞いて出かける",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "相手の希望も聞いて出かける。",
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
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "first_kiss_milestone",
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
      "label": "緊張するけれど誘ってみる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "緊張するけれど誘ってみる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
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
      "label": "今回は見送る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "今回は見送る。",
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
  ],
  "outcomes": [
    "shared_activity",
    "approach",
    "reflection"
  ]
});

window.defineEvent({
  "id": "adult_meeting",
  "title": "気になる人との視線の交差",
  "age": [
    18,
    78
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
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
  "text": "大人の社交の場、あるいは街のカフェ。ふと目が合った瞬間に走る微かな緊張と、相手の瞳に宿る男としての生々しい関心の光。心臓が跳ね、首筋がほんのりと火照るのを感じる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自分から自然に声をかけてみる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "艶やかな笑みを浮かべ、自分から自然に声をかけてみる。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "adult_feelings",
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
      "label": "相手からのアプローチを待つ",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "伏し目がちに視線を逸らし、相手からのアプローチを待つ。",
          "effects": [
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
      "id": "choice_2",
      "label": "何気ない顔でその場を立ち去る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "危険な予感を察して、何気ない顔でその場を立ち去る。",
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
    "meeting",
    "meeting",
    "none"
  ],
  "diary": [
    "視線が絡み合った瞬間、身体の奥が粟立つような予感を覚えた。会話を交わすうちに、相手の低い声が耳の奥を心地よくくすぐった。",
    "見つめられた瞳の強さに気圧され、恥ずかしさから胸の前でバッグを抱きしめた。大人の女として見られている実感が嬉しかった。",
    "本能が何か危ういものを察知し、そっと席を立った。日常の平穏を守るための選択だったと自分に言い聞かせた。"
  ]
});

window.defineEvent({
  "id": "adult_feelings",
  "title": "素肌の距離と告白への葛藤",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "unmarried"
  ],
  "weight": 11,
  "text": "肩が触れ合うほどの距離で並んで歩く夜道。相手の体温と香水の匂いが肌を撫で、手をつなぎたい、もっと奥深くまで触れ合いたいという衝動が喉まで出かかる。相手の気持ちはまだ見えない。",
  "choices": [
    {
      "id": "choice_0",
      "label": "熱い想いを打ち明ける",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "勇気を出して相手の袖を掴み、熱い想いを打ち明ける。",
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
                "eventId": "first_date_milestone",
                "delay": 1,
                "prob": 0.9
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "少しずつ距離を縮めていく",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "焦らずに二人で夜風に吹かれ、少しずつ距離を縮めていく。",
          "effects": [
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
      "id": "choice_2",
      "label": "言葉を飲み込む",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "今の居心地のいい関係を壊したくなくて、言葉を飲み込む。",
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
  ],
  "outcomes": [
    "approach",
    "closer",
    "none"
  ],
  "diary": [
    "「好きです」と口にした瞬間、心臓が口から飛び出そうだった。相手の驚いた表情と、その後に見せてくれた優しい瞳が夜闇の中で輝いていた。",
    "並んで歩きながら他愛ない話をした。触れ合いそうな指先の熱さに息を詰めながら、二人だけの夜を慈しんだ。",
    "言えなかった言葉を胸の奥にしまい込んだ。これでよかったのだと言い聞かせながら、冷えた手をポケットに深く差し入れた。"
  ]
});

window.defineEvent({
  "id": "first_kiss_afterthought",
  "title": "唇に残る熱い余韻",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "first_kiss_experienced"
  ],
  "weight": {
    "base": 15,
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
  "boosts": [
    {
      "whenFlag": "firstKiss",
      "factor": 2.5
    }
  ],
  "text": "唇に触れた湿り気と、微かに残る相手の唾液の味や息の匂い。ふとした瞬間に唇をなぞり、あの痺れるような感覚を思い出す。",
  "choices": [
    {
      "id": "choice_0",
      "label": "込み上げる熱い感情を言葉にする",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "込み上げる熱い感情を言葉にする。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "first_intimacy_milestone",
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
      "label": "相手の気持ちも確かめる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "相手の気持ちも確かめる。",
          "effects": [
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
      "label": "静かに痺れる余韻を反芻する",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "静かに痺れる余韻を反芻する。",
          "effects": [
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
    "reflection",
    "mutual_talk",
    "reflection"
  ]
});

window.defineEvent({
  "id": "first_kiss_milestone",
  "title": "初めて唇を重ねる夜",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "unmarried",
    "virgin",
    "first_kiss_unexperienced"
  ],
  "weight": {
    "base": 25,
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
  "boosts": [
    {
      "whenFlag": "firstDate",
      "factor": 2.5
    }
  ],
  "phase": "virgin",
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "静まり返る部屋、互いの体温と吐息が間近に迫る。触れ合いそうな唇を意識し、胸が早鐘のように高鳴る……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "熱い吐息と唇を受け入れる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "目を閉じて、熱い吐息と唇を受け入れる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "first_intimacy_milestone",
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
      "label": "互いの想いを確かめ合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "逸る気持ちを抑えて、互いの想いを確かめ合う。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "first_kiss_afterthought",
                "delay": 1,
                "prob": 0.9
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "まだ唇を重ねる覚悟ができないと告げる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "まだ唇を重ねる覚悟ができないと告げる。",
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
    "first_kiss",
    "mutual_talk",
    "boundary"
  ]
});

window.defineEvent({
  "id": "intimacy_awakening",
  "title": "女としての肉体の目覚め",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "sex_experienced"
  ],
  "weight": {
    "base": 35,
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
  "boosts": [
    {
      "whenFlag": "firstSexualExperience",
      "factor": 3.5
    }
  ],
  "phase": "awakening",
  "text": "初めて素肌を重ね、身体の奥深くまで貫かれたあの日から、何気ない日常の中でも下腹の奥がじわりと熱く疼くようになった。下着越しに擦れる秘所の湿り気や、首筋に残る息の熱を自覚し、自分の身体が快楽を覚えたことを知る……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "身体の奥底から湧き上がる疼きと快感を素直に受け止める",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "身体の奥底から湧き上がる疼きと快感を素直に受け止める。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "intimacy_afterthought",
                "delay": 1,
                "prob": 0.9
              }
            },
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 40
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "気を引き締める",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "急な身体の火照りと淫らな衝動に戸惑い、気を引き締める。",
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
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "sexual_first_conversation",
                "delay": 1,
                "prob": 0.85
              }
            },
            {
              "path": "state.current_embarrassment",
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
    }
  ],
  "sexualEffects": [
    {
      "desire": 8,
      "selfAcceptance": 5
    },
    {
      "shyness": 5,
      "selfKnowledge": 3
    }
  ]
});

window.defineEvent({
  "id": "partner_intimacy_hesitation",
  "title": "まだ肌を許していないもどかしさ",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "unmarried",
    "virgin"
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
  "partner_intimacy_boost": true,
  "phase": "virgin",
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "交際を続けながらも、まだ身体の奥までは許していない二人。触れ合う手の温もりや抱擁のたびに、パートナーの瞳に宿る熱い欲情と、自分自身の身体の疼きが胸を締めつける……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "愛液で濡れた身体の奥まで受け入れる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "今夜こそ素肌を晒し、愛液で濡れた身体の奥まで受け入れる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "intimacy_awakening",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "焦らず二人の信頼を育む時間を大切にしたいと伝える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "焦らず二人の信頼を育む時間を大切にしたいと伝える。",
          "effects": [
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
    "mutual_talk"
  ]
});

window.defineEvent({
  "id": "intimacy_afterthought",
  "title": "初めて知った肉体の奥の疼き",
  "age": [
    18,
    90
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "sex_experienced"
  ],
  "weight": {
    "base": 15,
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
  "boosts": [
    {
      "whenFlag": "firstSexualExperience",
      "factor": 2.5
    }
  ],
  "phase": "awakening",
  "text": "初めて肌を重ね、内側を貫かれたあの夜の感触。濡れた肌の摩擦、締めつける肉腔の熱さ、腰の奥に残る重だるい痺れが頭から離れない。",
  "choices": [
    {
      "id": "choice_0",
      "label": "身体が知った快楽の意味を整理する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "身体が知った快楽の意味を整理する。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "sexual_satisfaction",
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
      "label": "相手とあの夜の感覚を語り合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "相手とあの夜の感覚を語り合う。",
          "effects": [
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
      "label": "自分の身体のペースを大切にする",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "自分の身体のペースを大切にする。",
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
    "reflection",
    "mutual_talk",
    "boundary"
  ]
});

window.defineEvent({
  "id": "first_date_memory",
  "title": "初デートの記憶",
  "age": [
    19,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "first_date_experienced"
  ],
  "weight": 14,
  "is_encounter": true,
  "boosts": [
    {
      "whenFlag": "firstDate",
      "factor": 2.5
    }
  ],
  "text": "初めて二人で出かけた日のことを思い出した。",
  "choices": [
    {
      "id": "choice_0",
      "label": "今の関係に生かす",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "今の関係に生かす。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手と思い出を話す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "相手と思い出を話す。",
          "effects": [
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
      "label": "心の中にしまう",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "心の中にしまう。",
          "effects": [
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
    "reflection",
    "mutual_talk",
    "reflection"
  ]
});

window.defineEvent({
  "id": "same_sex_toy_play",
  "title": "二人で選んだ玩具、愛液に塗れる玩具と指",
  "age": [
    20,
    45
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "adult",
  "presets": [],
  "weight": {
    "base": 14,
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
  "text": "二人で選んだ大人のおもちゃ。ベッドの上に並べた妖艶なアイテムを手に取り、どちらからともなく服を脱ぎ捨てる。艶やかなシリコンが秘所へと押し当てられ、激しい振動が充血した肉芽を震わせると、二人の口から交互に艶めかしい嬌声が漏れ出た。",
  "choices": [
    {
      "id": "choice_0",
      "label": "彼女の奥へ自分の指を深く沈めて掻き回す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "バイブを押し当てられながら、彼女の奥へ自分の指を深く沈めて掻き回す。",
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
                "eventId": "same_sex_society_bond",
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
      "label": "激しいバイブレーションの果てに潮を吹いて絶頂する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "互いの秘所に玩具を沈め合い、激しいバイブレーションの果てに潮を吹いて絶頂する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "玩具の唸るような振動が秘所の奥まで届き、愛液がとめどなく噴き出した。彼女に抱きしめられながら腰を跳ねさせ、快感に溺れ切った夜だった。",
    "道具を使いながらお互いを貪り合う背徳的な快楽。女同士だからこそ分かり合える刺激に、身体の芯まで痺れ切ってしまった。"
  ]
});

window.defineEvent({
  "id": "same_sex_society_bond",
  "title": "世間の視線と、二人だけの誓い",
  "age": [
    22,
    55
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered"
  ],
  "weight": {
    "base": 12,
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
  "text": "現代の日本において、同性同士で寄り添い生きることへの周囲の視線や制度の壁。それでも、手を取り合い、誰よりも互いの心と身体を深く愛し抜くことを誓い合う。二人だけの小さな部屋で、薬指に揃いの指輪を通し、静かに素肌を重ね合わせた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "パートナーシップ制度や公正証書を結んで二人で歩む",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "世間に胸を張り、パートナーシップ制度や公正証書を結んで二人で歩む。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
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
      "id": "choice_1",
      "label": "二人だけの深い絆と蜜月を永遠に慈しみ合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "世間には秘密のまま、二人だけの深い絆と蜜月を永遠に慈しみ合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "誰に認められなくとも、この愛は本物。指輪を交わし、彼女の温かい身体を抱きしめた夜、涙が止まらなかった。",
    "世間の常識に囚われず、私たちだけの愛の形を選んだ。抱き合って互いの肌の温もりを確かめる時間が、何よりも尊い。"
  ]
});

window.defineEvent({
  "id": "same_sex_mature_passion",
  "title": "円熟した身体、貪り合う女同士の蜜夜",
  "age": [
    35,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
  "weight": {
    "base": 13,
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
  "text": "年齢を重ね、若さという張りを越えて豊潤に熟れた大人の女の身体。どこを愛撫すれば一番敏感に濡れそぼるかを互いに知り尽くした関係で、熟成したワインのように濃厚な愛撫を交わす。しっとりと汗ばむ素肌に顔を埋め、淫らな匂いに包まれながら夜が更けていく。",
  "choices": [
    {
      "id": "choice_0",
      "label": "奥の奥まで舌を差し入れて愛液を啜る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "熟れた秘唇を丹念に舌先で舐めほぐし、奥の奥まで舌を差し入れて愛液を啜る。",
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
      "label": "じっくりと時間をかけて深い絶頂を重ね合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "互いのふくよかな腰を抱き寄せ、じっくりと時間をかけて深い絶頂を重ね合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "若い頃よりもずっと深く、濃密に身体が疼く。彼女の熟れた肌の匂いと温もりに包まれて、一晩中何度も果てた。",
    "大人の女同士だからこそ辿り着ける極上の快楽。お互いの身体を慈しみ合う時間に、心も肉体も満ち足りた。"
  ]
});
