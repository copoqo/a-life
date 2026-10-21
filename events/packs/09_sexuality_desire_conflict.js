// ============================================================================
// Pack: 09_sexuality_desire_conflict — 性的自己探求・渇望・コンプレックス・満員電車連鎖 (43 events)
// ============================================================================
window.defineEvent({
  "id": "yearning_unknown_pleasure",
  "title": "未知の快楽への焦燥と下腹の熱",
  "age": [
    15,
    22
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "virgin"
  ],
  "weight": 22,
  "phase": "virgin",
  "text": "同世代の噂話やネットの体験談を目にするたび、まだ誰にも貫かれたことのない身体の奥がじんわりと疼く。男の人に触れられるとはどういう感覚なのか、なぜあんなにも甘く乱れた声が出てしまうのか。薄いショーツの上から秘所をぎゅっと押し当てると、下腹に経験したことのない重だるい熱が広がり、言い知れぬ焦燥と憧れに息が乱れる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "未知の快楽を夢想しながら秘唇をまさぐる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "ショーツの中に指を忍ばせ、未知の快楽を夢想しながら秘唇をまさぐる。",
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
                "eventId": "yearning_solitary_awakening",
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
      "label": "全てを奪われる日を夢見て胸を焦がす",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "いつか熱く愛され、全てを奪われる日を夢見て胸を焦がす。",
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
      "label": "冷たい水で顔を洗って気を鎮める",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "淫らな妄想に火照る頬を押さえ、冷たい水で顔を洗って気を鎮める。",
          "effects": [
            {
              "path": "skill.morality",
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
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "diary": [
    "薄暗い部屋で一人、湿り始めた秘唇に恐る恐る指先を触れさせた。自分のものでありながら知らない女の熱がそこにあり、いつか誰かに激しく暴かれたいという背徳的な憧れに身悶えた。",
    "誰かに激しく求められ、奥深くまで貫かれる自分を想像して下腹がきゅうと収縮した。まだ見ぬ相手の体温と吐息を想うだけで、シーツを太ももで強く挟み込んでしまった。",
    "頭に浮かんだ破廉恥な妄想を必死に振り払った。けれど、冷水で冷やした首筋とは裏腹に、下腹の奥底に灯った小さな火種は消えそうになかった。"
  ]
});

window.defineEvent({
  "id": "yearning_solitary_awakening",
  "title": "夜の帳と、秘密の指先の味",
  "age": [
    15,
    24
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 15,
  "text": "あの夜以来、一人きりの自室の静けさが下腹を甘く疼かせる。薄暗い常夜灯の下、ショーツを脱ぎ捨ててベッドに横たわり、恐る恐る自らの指先を秘唇へと這わせる。そっと触れただけで、粘膜からとろりとした透明な愛液が溢れ出し、ツンと甘酸っぱい雌の匂いが立ち上る。指先に濡れたクリトリスを挟み込み、小さな肉芽を転がすたび、背筋を鋭い痺れが駆け抜けて嬌声が漏れそうになる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "未知の熱い快感に身悶える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "濡れた指先を膣口の奥へと押し込み、未知の熱い快感に身悶える。",
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
                "eventId": "yearning_daydream_distraction",
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
      "label": "自らの身体が女である生々しさに息を呑む",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "指についた蜜の匂いを嗅ぎ、自らの身体が女である生々しさに息を呑む。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "慌てて指を抜いてシーツで拭う",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "こんな淫らな行為に溺れる自分を恥じ、慌てて指を抜いてシーツで拭う。",
          "effects": [
            {
              "path": "skill.morality",
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
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "diary": [
    "ぬちぬちと卑猥な水音を立てながら、自分の指を奥深くまで出し入れした。膣壁が指をきゅうきゅうと吸い付き、身体の芯から突き上げる甘い痙攣とともに、腰を跳ねさせて激しく絶頂した。",
    "指先に絡みつく生暖かい愛液。胸元に近づけると、ほんのり蒸れた甘酸っぱい匂いがして、自分が紛れもない女であることを嫌というほど自覚させられた。",
    "指を引き抜いた後も、下腹の奥で脈打つ熱い疼きは収まらなかった。汚してしまったシーツの染みを見つめ、罪悪感と快感の余韻で胸が苦しかった。"
  ]
});

window.defineEvent({
  "id": "yearning_daydream_distraction",
  "title": "日常に侵食する甘い痺れと、濡れる下着",
  "age": [
    16,
    26
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 14,
  "text": "昼下がりの授業中、あるいはオフィスのデスク。何気ない日常の最中に、ふと昨夜の自慰の感覚が脳裏をよぎる。指先で掻き回された肉腔の熱さ、クリトリスを弾かれた時の快感がフラッシュバックした瞬間、下腹がきゅうと収縮し、ショーツの中にじわりと愛液が滲み出す。椅子に座っているだけで濡れたクロッチが秘唇に擦れ、太ももを固く閉じずにはいられなくなる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "ショーツをずらして火照った秘所を息を殺して愛撫する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "トイレの個室に駆け込み、ショーツをずらして火照った秘所を息を殺して愛撫する。",
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
      "id": "choice_1",
      "label": "周囲に隠れて甘い痺れを噛み締める",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "座席の上で密かに太ももを擦り合わせ、周囲に隠れて甘い痺れを噛み締める。",
          "effects": [
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
      "label": "必死に目の前の作業に集中する",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "下腹の疼きを冷たいお茶で流し込み、必死に目の前の作業に集中する。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.morality",
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
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "diary": [
    "個室の鍵を閉め、乱れた息を整えながらスカートを捲り上げた。じっとりと湿ったショーツをずらし、指先で充血したクリトリスを擦ると、一瞬で頭が痺れるような絶頂が訪れた。",
    "誰にも気付かれないよう、デスクの下で足を組み替え、太ももの内側をぎゅっと擦り合わせた。下着を濡らす生暖かい愛液の感触に、恥ずかしさで首筋まで真っ赤になった。",
    "頭の中を埋め尽くす淫らな衝動を必死で追い払った。それでも、立ち上がった瞬間に太ももの間を滑り落ちた愛液の重みが、生々しく皮膚に残っていた。"
  ]
});

window.defineEvent({
  "id": "yearning_erotic_cinema",
  "title": "官能の情景と、息を呑む指先",
  "age": [
    16,
    32
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 19,
  "text": "画面の中で絡み合う二つの肉体。滴る汗、互いの唾液を吸い合う濡れた水音、快楽に歪む女の顔と狂おしい喘ぎ声――。映画の濃厚な濡れ場を見つめるうち、心臓が早鐘のように高鳴り、喉が渇いてゆく。ただの映像だと割り切ろうとしても、画面から匂い立つような生々しい情欲の熱気が肌を撫で、知らず知らずのうちに太ももを固く擦り合わせていた……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自らの手で濡れた秘部をまさぐり快感を追体験する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "映像の熱気に身を委ね、自らの手で濡れた秘部をまさぐり快感を追体験する。",
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
                "eventId": "conflict_excessive_desire",
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
      "label": "こんな風に理性を失うほど貪欲に求め合ってみたいと激しく焦がれる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "こんな風に理性を失うほど貪欲に求め合ってみたいと激しく焦がれる。",
          "effects": [
            {
              "path": "state.mood",
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
    },
    {
      "id": "choice_2",
      "label": "胸元のボタンを固く留め直す",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "あまりの生々しさに視線を伏せ、胸元のボタンを固く留め直す。",
          "effects": [
            {
              "path": "skill.morality",
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
    "reflection",
    "reflection",
    "reflection"
  ],
  "diary": [
    "画面から漏れる激しい水音に煽られるように、ショーツ越しにクリトリスを擦り上げた。奥から溢れ出る蜜が指をぬらりと滑らせ、画面の女と同じように口元を押さえて熱い絶頂へと上り詰めた。",
    "激しく抱き合って果てる男女の姿が瞼に焼き付いて離れなかった。あんな風に全てを曝け出して快楽に溺れられたなら、どんなに幸せだろうと胸が狂おしく締めつけられた。",
    "刺激が強すぎる場面に耐えかねて目を逸らした。けれど、耳に届く湿った息遣いと肉のぶつかる音は容赦なく下腹の奥を震わせ、しばらく動悸が収まらなかった。"
  ]
});

window.defineEvent({
  "id": "conflict_excessive_desire",
  "title": "強すぎる淫らな衝動と、拭えぬ罪悪感",
  "age": [
    16,
    35
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 18,
  "text": "仕事中や勉強中、何気ない日常のふとした隙間に、下腹の奥がじくじくと疼き出して止まらなくなる。下着を濡らすほどの愛液が分泌され、誰かに乱暴に抱かれたい、指先で奥深くまで掻き回されたいという淫靡な飢えが頭を支配する。人並み以上に性欲が強すぎるのではないか、自分はどこか異常なのではないかという恐れと自己嫌悪に苛まれる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自慰で身体の奥の熱を鎮める",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "誰にも言えない欲求不満を認めて、自慰で身体の奥の熱を鎮める。",
          "effects": [
            {
              "path": "state.mood",
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
      "id": "choice_1",
      "label": "激しい運動や作業で気を紛らわせる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "異常な性欲を恥じて厳しく自制し、激しい運動や作業で気を紛らわせる。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
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
      "label": "肯定しようと努める",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "この抗いがたい情欲も自分の一部だと受け入れ、肯定しようと努める。",
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
    "reflection",
    "reflection",
    "reflection"
  ],
  "diary": [
    "鍵をかけた部屋で、溢れる愛液でぬちぬちと音を立てながらクリトリスと膣口を激しく擦り上げた。何度果てても芯に残る渇きに怯えつつも、痺れるような快感に身を投げ出した。",
    "頭をもたげる淫らな妄想を振り払うため、無我夢中で身体を動かした。疲労で筋肉は強張ったけれど、下腹の奥底で燻る熱い疼きは完全には消えてくれなかった。",
    "「性の衝動が強いのは生きるエネルギーが強い証拠だ」と自分に言い聞かせた。下着を汚す愛液の熱さを責めるのをやめると、すっと胸のつかえが下りた。"
  ]
});

window.defineEvent({
  "id": "conflict_body_complex",
  "title": "身体のコンプレックスと、晒す恐怖",
  "age": [
    17,
    32
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 17,
  "text": "お風呂上がりの脱衣所、全身鏡に映る自分の裸体。胸の形、太ももの太さ、秘唇の黒ずみや形、そして身体から立ち上る特有の匂い……。誰かと肌を重ねたいという憧れを抱きながらも、この不完全な身体を白日の下に晒したとき、相手に幻滅され、汚いと拒絶されるのではないかという生々しい恐怖が足元をすくう……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "少しずつ自分の身体を愛せるよう努める",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "素肌の手入れや保湿を念入りに行い、少しずつ自分の身体を愛せるよう努める。",
          "effects": [
            {
              "path": "skill.grooming",
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
                "eventId": "body_complex_cherished",
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
      "label": "親密になることへ臆病になる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "暗がりの中でしか肌を合わせられないと、親密になることへ臆病になる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "愛してくれる相手ならありのままを受け止めてくれるはずだと信じる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "愛してくれる相手ならありのままを受け止めてくれるはずだと信じる。",
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
                "eventId": "body_complex_cherished",
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
    "香りのよいオイルを手に取り、胸元から太もも、下腹へと丁寧に塗り込んだ。指先に触れる柔らかな肉の感触を慈しみながら、いつかこの肌を愛してくれる誰かを待とうと思った。",
    "電気を消した暗闇でなければ裸を見せられない……そんな頑なな思い込みが心を縛った。他人の美しい肌と比べては落ち込み、深い溜息をついた。",
    "完璧な身体なんてどこにもないのだと自分を励ました。いつか互いの不完全さも含めて抱きしめ合えるような、温かな関係を築きたいと強く願った。"
  ]
});

window.defineEvent({
  "id": "conflict_virginity_anxiety",
  "title": "処女性への執着と、取り残される焦り",
  "age": [
    18,
    26
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "virgin"
  ],
  "weight": {
    "base": 20,
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
  "phase": "virgin",
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
    }
  },
  "text": "周囲の友人たちが当たり前のように初体験を済ませ、大人の女の顔をしていく中で、まだ一度も男を知らない自分。純潔を守ってきた誇りと、「まだ処女なのか」と揶揄されることへの屈辱と焦燥が心の中で激しく衝突する。誰でもいいからこの狭い肉穴を貫いて処女膜を破ってほしいという投げやりな衝動と、本当に愛する人に捧げたいという純情の間で引き裂かれそうになる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "心から信頼できる相手に出会うまで処女を守り抜くと誓う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "焦って安売りせず、心から信頼できる相手に出会うまで処女を守り抜くと誓う。",
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
    },
    {
      "id": "choice_1",
      "label": "行きずりの関係で処女を捨てようかと思い詰める",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "取り残された孤独と疼きに耐えかね、行きずりの関係で処女を捨てようかと思い詰める。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": -1
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "first_date_milestone",
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
      "label": "自分の人生の歩幅を大切にしようと心を整える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "処女であるかどうかに囚われず、自分の人生の歩幅を大切にしようと心を整える。",
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
    "reflection",
    "reflection",
    "reflection"
  ],
  "diary": [
    "周りの話に流されて焦る必要はないと心に言い聞かせた。初めての痛みと快楽を分かち合う瞬間は、たった一度きりの大切なものだからこそ、自分の信じる相手に捧げたい。",
    "「処女を捨ててしまえば楽になれるのか」という自暴自棄な思いが胸をよぎった。夜の街を歩きながら、見知らぬ誰かに連れ去られる想像をして、下腹が冷たく震えた。",
    "他人の進度と自分を比べるのをやめた。私の身体は私のもの。いつ誰と境界線を越えるかは、自分が本当に望んだ時に決めればいいのだと胸を張った。"
  ]
});

window.defineEvent({
  "id": "yearning_lingerie_fantasies",
  "title": "艶やかな下着と、剥ぎ取られる日の夢",
  "age": [
    18,
    28
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
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
  "text": "ランジェリーショップの華やかなショーウインドウ。繊細な黒レースや透け感のある紅のランジェリーに視線が釘付けになる。この薄布で柔らかな胸を包み、湿りやすい秘部を覆ったとき、愛する人にどんな瞳で見つめられ、どんな荒々しい手つきで剥ぎ取られるのだろう。鏡に映る自分の無防備な身体を思い浮かべ、下腹が甘く痺れる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "夜に一人で身につけてみる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "思い切って大胆で扇情的なレースの下着を購入し、夜に一人で身につけてみる。",
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
              "value": -30000
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "conflict_virginity_anxiety",
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
      "label": "大切な相手に見せる日のシチュエーションを想像して密かに胸を高鳴らせる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "大切な相手に見せる日のシチュエーションを想像して密かに胸を高鳴らせる。",
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
      "label": "普段通りの清楚な綿の下着を選ぶ",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "自分にはまだ不相応だと感じ、普段通りの清楚な綿の下着を選ぶ。",
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
    "買い求めたレースのショーツに足を通すと、薄い生地越しに秘唇の熱と湿り気が直に伝わってきた。鏡の前で指を滑らせると、いつか男の手に脱がされる光景が脳裏をよぎり、愛液が溢れそうになった。",
    "ベッドの上で乱暴に押し倒され、この下着をまさぐられる瞬間を妄想した。露わになる素肌の恥ずかしさと、貪るように見つめられる快感の予感に、息が熱く乱れてしまった。",
    "派手なレースを棚に戻し、大人しいデザインを手にとった。それでも、あの透けるような布地が肌に触れたときの官能的な感触が、しばらく指先に残り続けた。"
  ]
});

window.defineEvent({
  "id": "body_complex_cherished",
  "title": "愛おしまれる秘所、劣等感の融解",
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
  "text": "明かりを落とした寝室。ずっとコンプレックスだった秘唇の黒ずみや形、肌の匂い。パートナーは恥じらって太ももを閉じようとするこちらの膝を優しく割り、熱い吐息とともに秘所へと顔を埋める。舌先で尖ったクリトリスを包み込み、奥から溢れる愛液を丁寧に掬い取りながら、「こんなに愛しくて綺麗だ」と囁く。劣等感が甘い悦びへと溶け崩れてゆく……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "優しく舐めしゃぶられる快感に腰を浮かせて啼く",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "羞恥に顔を覆いながらも、優しく舐めしゃぶられる快感に腰を浮かせて啼く。",
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
      "label": "相手の頭を抱き寄せて涙を流す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "ありのままの自分を受け止めてくれた喜びに、相手の頭を抱き寄せて涙を流す。",
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
    },
    {
      "id": "choice_2",
      "label": "奥まで貫かれる歓びをねだる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "照れくささに耐えかねて相手の肩を叩きつつ、奥まで貫かれる歓びをねだる。",
          "effects": [
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
    "shared_intimacy"
  ],
  "diary": [
    "一番見られたくなかった場所を、あんなにも熱く丁寧に舐め清められるなんて。溢れ出る蜜をすべて吸い尽くされ、恥ずかしさの涙がやがて激しい絶頂の悦びへと変わっていった。",
    "「恥ずかしがらなくていい」と抱きしめられ、自分の身体を初めて心から愛せると感じた。コンプレックスの呪縛が解け、素肌がじんわりと温かい安心感に包まれた。",
    "相手の腕の中で、ありのままの裸を晒して交わった。受け入れてもらえた自信が、女としての快感を何倍にも深くしてくれた。"
  ]
});

window.defineEvent({
  "id": "conflict_intimacy_fear",
  "title": "抱かれたいのに受け入れられない、肉体の拒絶",
  "age": [
    18,
    35
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "partnered"
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
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "相手への愛情はあるのに、いざ衣服を脱がされ、肉棒が秘唇に宛がわれると、身体が恐怖でカチカチに強張ってしまう。乾いた粘膜が悲鳴を上げ、奥へと押し入ろうとする硬い熱塊を頑なに拒絶して締め出してしまう。「痛い、入らない……」と涙をこぼし、相手を失望させてしまった申し訳なさと、女としての機能不全のような惨めさに打ちのめされる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "愛撫やスキンシップでゆっくり身体をほぐす時間を求める",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "無理に挿入せず、愛撫やスキンシップでゆっくり身体をほぐす時間を求める。",
          "effects": [
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
      "label": "心をすり減らす",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "痛みを我慢して相手のために受け入れようと無理をして、心をすり減らす。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 4
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "二人でじっくり向き合おうと提案する",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "性交痛や挿入障害について調べ、二人でじっくり向き合おうと提案する。",
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
    "mutual_talk",
    "shared_intimacy",
    "mutual_talk"
  ],
  "diary": [
    "「痛いから、もっと優しくしてほしい」と泣きながら伝えた。相手は焦らずに胸を愛撫し、秘唇を舌でゆっくりと解してくれた。潤いを取り戻したことで、恐怖が少しずつ和らいだ。",
    "痛みに耐えて奥まで受け入れたものの、引き裂かれるような苦痛に声も出なかった。相手の快感の陰でシーツを握りしめ、自分を犠牲にした悲しさに涙が溢れた。",
    "身体が強張ってしまう理由を二人で真剣に話し合った。挿入だけが愛し合う形ではないとお互いに確認でき、張り詰めていた心の緊張がほどけていった。"
  ]
});

window.defineEvent({
  "id": "sexual_taboo_solitude",
  "title": "一人きりの倒錯と秘め事",
  "age": [
    18,
    35
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "adult",
  "presets": [],
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
  "is_major": true,
  "text": "静かな夜、一人きりの空間で身体の奥が激しく疼き出す。誰にも言えない淫らな刺激を求め、指先が勝手に秘所へと伸びていく。",
  "choices": [
    {
      "id": "choice_0",
      "label": "激しい水流に腰を押しつけて果てる",
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
  ]
});

window.defineEvent({
  "id": "yearning_crowded_train_heat",
  "title": "満員電車の密着と、背徳的な昂ぶり",
  "age": [
    18,
    35
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "low_morality"
  ],
  "weight": {
    "base": 17,
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
  "publicSex": true,
  "text": "身動きの取れない満員電車の車内。揺れるたびに、背後に立つ見知らぬ男性の硬い体躯や体温が薄い衣服越しに臀部へと押し付けられる。男性特有の熱気と微かな汗の匂いが首筋にかかり、恐怖や不快感を覚えるべきはずなのに、身体の奥が不意にぎゅっと縮こまり、下腹が甘く疼いてしまう。こんな状況に反応してしまう自分の淫らさに、羞恥と背徳の熱い汗が噴き出す……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "秘唇がじわりと愛液を滲ませる感覚に耐える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "密着の熱気に身を固くしながら、秘唇がじわりと愛液を滲ませる感覚に耐える。",
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
                "eventId": "crowded_train_escalation",
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
      "label": "危険な昂ぶりを必死に振り払う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "少し身体をよじって距離を取り、危険な昂ぶりを必死に振り払う。",
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
    },
    {
      "id": "choice_2",
      "label": "息を潜める",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "見知らぬ誰かに力尽くで組み伏せられる淫靡な妄想に囚われ、息を潜める。",
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
                "eventId": "crowded_train_escalation",
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
    "逃げ場のない密着の中、背後からの熱を感じるたびにショーツが湿っていくのが分かって死ぬほど恥ずかしかった。理性に反して牝として反応してしまう自分の身体の生々しさに慄いた。",
    "揺れに合わせて少しずつ位置を変え、背後の男から離れた。外に出て冷たい外気を吸い込むと、火照っていた首筋が急速に冷えて安堵のため息が出た。",
    "もしこのまま誰の手にも届かない場所へ連れ去られたら……そんな下劣で危険な妄想が脳裏を駆け巡り、駅に着くまで下唇を噛み締めて太ももを震わせていた。"
  ]
});

window.defineEvent({
  "id": "crowded_train_escalation",
  "title": "いつもの通勤快速、忍び寄る指先",
  "age": [
    18,
    36
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "low_morality"
  ],
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
  "publicSex": true,
  "text": "朝のラッシュ時、すし詰めの満員電車。背後から密着してくるのは、以前も背後にいたあの男だ。揺れに紛れて、男の逞しい手が静かにスカートの裾を捲り上げてくる。薄いストッキング越しに臀部を揉みしだかれ、やがて指先が股間の合わせ目へと沈み込んでゆく。周囲には無数の乗客がいるのに、下腹が甘く痺れて拒絶の声が出ず、秘唇から蜜が溢れ出してストッキングを湿らせていく……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "ストッキング越しに秘部をまさぐられる痴態に屈する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "声も出せず身を硬くしたまま、ストッキング越しに秘部をまさぐられる痴態に屈する。",
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
                "eventId": "crowded_train_culmination",
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
      "label": "次の停車駅で弾かれたようにドアから逃げ出す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "肘で相手の腹を強く突き飛ばし、次の停車駅で弾かれたようにドアから逃げ出す。",
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
    },
    {
      "id": "choice_2",
      "label": "涙目で睨みつけてこれ以上の暴挙を止める",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "震える手で男の手首を必死に掴み、涙目で睨みつけてこれ以上の暴挙を止める。",
          "effects": [
            {
              "path": "state.self_efficacy",
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
    }
  ],
  "outcomes": [
    "reflection",
    "boundary",
    "boundary"
  ],
  "diary": [
    "大勢の人がすぐ隣にいる中で、股間を執拗にまさぐられた。ストッキングをぐっしょりと濡らすほど愛液を垂らし、見知らぬ男の指先でクリトリスを擦られて、声を殺して絶頂に達してしまった。",
    "恐怖と羞恥に突き動かされ、男を突き飛ばして電車を飛び降りた。ホームの冷たい風に吹かれながら、まだ下腹の奥が熱く疼いていることに涙が零れた。",
    "男の手首を掴んで押し留めた。相手は舌打ちして人混みに消えていったけれど、服の下に残された指の熱気と屈辱感に、しばらく足の震えが止まらなかった。"
  ]
});

window.defineEvent({
  "id": "crowded_train_culmination",
  "title": "終点のホーム、誰もいない踊り場での逢瀬",
  "age": [
    18,
    37
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "low_morality"
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
  "is_major": true,
  "publicSex": true,
  "text": "電車を降りた人波の中、腕を強く引かれて駅の非常階段の薄暗い踊り場へと引きずり込まれる。拒むはずの唇を荒々しく塞がれ、壁に押し付けられたままスカートを捲り上げられる。「電車の中で、あんなに濡らしてただろ……」と囁かれ、下着を引き裂くようにずらされた秘唇に、硬く充血した熱い肉塊が直にあてがわれる。逃げ場のない密室で、下腹が狂おしく疼く……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "壁に手をついて奥深くまで突き上げられる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "名前も知らない男の熱い腰を受け入れ、壁に手をついて奥深くまで突き上げられる。",
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
      "label": "声を押し殺しながら何度も絶頂を迎える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "狂ったような背徳の逢瀬に身を震わせ、声を押し殺しながら何度も絶頂を迎える。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
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
      "label": "相手のすねを蹴り上げて外の明かりへ逃げ延びる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "寸前のところで正気を取り戻し、相手のすねを蹴り上げて外の明かりへ逃げ延びる。",
          "effects": [
            {
              "path": "state.self_efficacy",
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
    "reflection",
    "reflection",
    "boundary"
  ],
  "diary": [
    "薄暗い踊り場で壁に押し付けられ、見知らぬ男に奥深くまで乱暴に貫かれた。コンクリートの冷たさと肉腔の焼けるような熱さ、ぐちゃぐちゃと響く卑猥な水音に、理性が完全に崩壊して啼き狂った。",
    "電車で身体を弄ってきた男の肉塊を、貪るように受け入れた。名も知らぬ相手にただ雌として犯される快楽に腰が勝手に動き、下腹から突き上げる激痛のような快感に何度も果てた。",
    "間一髪で相手を突き放し、人通りのある改札へ逃げ込んだ。破れかけた下着と股間に残る生暖かい体温に、死ぬほどの恐怖と背徳の昂ぶりを感じて身震いした。"
  ]
});

window.defineEvent({
  "id": "sexual_first_conversation",
  "title": "身体の相性や性的な願望を打ち明ける",
  "age": [
    18,
    42
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "sex_experienced"
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
  "boosts": [
    {
      "whenFlag": "firstSexualExperience",
      "factor": 2
    }
  ],
  "phase": "awakening",
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "夜の寝室、二人きりで肌を寄せ合いながら、どんな愛撫が心地いいか、どこを触れられると濡れてしまうのか、互いの淫らな好みを言葉にする機会が訪れた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "恥ずかしい身体の性感帯や望みを赤裸々に話す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "恥ずかしい身体の性感帯や望みを赤裸々に話す。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "adult_shared_intimacy",
                "delay": 1,
                "prob": 0.85
              }
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "赤面しながら少しずつ触れてほしい場所を伝える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "赤面しながら少しずつ触れてほしい場所を伝える。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "言葉を濁して胸元に顔を埋める",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "恥ずかしさに耐えきれず、言葉を濁して胸元に顔を埋める。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "mutual_talk",
    "mutual_talk",
    "boundary"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_contraception",
  "title": "避妊と妊娠への考え",
  "age": [
    18,
    52
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "sex_experienced"
  ],
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
  "phase": "active",
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "生々しく肌を密着させる行為だからこそ、避妊や身体の安全について相手との認識を確かめる必要を感じた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "具体的に避妊の方法や責任を話し合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "具体的に避妊の方法や責任を話し合う。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "医療機関で避妊について相談する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "医療機関で避妊について相談する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "避妊が不十分な間は身体の接触を見送る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "避妊が不十分な間は身体の接触を見送る。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "mutual_talk",
    "reflection",
    "boundary"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_health",
  "title": "性感染症と健康",
  "age": [
    18,
    78
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
  "text": "性的な健康について、検査や予防の情報に触れた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "検査や相談を検討する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "検査や相談を検討する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "パートナーと話す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "パートナーと話す。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "情報を整理する",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "情報を整理する。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "reflection",
    "mutual_talk",
    "reflection"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_body_confidence",
  "title": "身体への自信",
  "age": [
    18,
    80
  ],
  "trigger": "normal",
  "classification": "daily",
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
  "text": "自分の身体をどう感じるか、ふと考えることがあった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自分をいたわる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "自分をいたわる。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "body_complex_cherished",
                "delay": 1,
                "prob": 0.85
              }
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手と気持ちを共有する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "相手と気持ちを共有する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "他人との比較をやめる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "他人との比較をやめる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "reflection",
    "mutual_talk",
    "reflection"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_long_distance",
  "title": "離れて暮らす二人",
  "age": [
    18,
    80
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered"
  ],
  "weight": {
    "base": 11,
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
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "生活の事情で、交際相手と会う機会が減っている。",
  "choices": [
    {
      "id": "choice_0",
      "label": "会う時間を調整する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "会う時間を調整する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "気持ちを伝える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "気持ちを伝える。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "距離を受け入れる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "距離を受け入れる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "shared_activity",
    "mutual_talk",
    "distance"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_romance_difference",
  "title": "恋愛感情と性的欲求の違い",
  "age": [
    18,
    80
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
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
  "text": "恋愛感情と身体的な欲求が、必ずしも一致しないことに気づいた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自分の感覚を整理する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "自分の感覚を整理する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手に説明する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "相手に説明する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "答えを急がない",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "答えを急がない。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "reflection",
    "mutual_talk",
    "reflection"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_social_norms",
  "title": "世間の『普通』への違和感",
  "age": [
    18,
    80
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
  "weight": {
    "base": 12,
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
  "text": "周囲が当然と思う恋愛や性のあり方に、違和感を覚えた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自分の価値観を確かめる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "自分の価値観を確かめる。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "信頼できる人と話す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "信頼できる人と話す。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "今は胸にしまう",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "今は胸にしまう。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "reflection",
    "reflection",
    "privacy"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_after_breakup",
  "title": "別れた後の親密さ",
  "age": [
    18,
    85
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
  "text": "別れた相手との距離感について、改めて考えることがあった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "連絡を控える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "連絡を控える。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "近況だけ伝える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "近況だけ伝える。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "気持ちを整理する",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "気持ちを整理する。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "boundary",
    "reunion",
    "reflection"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_desire_fluctuation",
  "title": "疼く下腹と、抑えきれない性欲の波",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
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
  "text": "ふとした瞬間に身体の奥がじんわりと熱くなり、無性に肌の重なりや指先の愛撫が恋しくなる夜がある。自分の身体が求める淫らな衝動の強まりに戸惑う。",
  "choices": [
    {
      "id": "choice_0",
      "label": "身体の疼きを受け入れて素直に向き合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "身体の疼きを受け入れて素直に向き合う。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "sexual_taboo_solitude",
                "delay": 1,
                "prob": 0.85
              }
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手に求めて身体を寄せ合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "相手に求めて身体を寄せ合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
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
                "eventId": "partner_passion_lifestyle",
                "delay": 1,
                "prob": 0.85
              }
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
      "label": "一人で息を整えて鎮まるのを待つ",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "一人で息を整えて鎮まるのを待つ。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "reflection",
    "mutual_talk",
    "reflection"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_exclusivity",
  "title": "独占的な関係を望むか",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
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
  "text": "交際を一対一に限定したいか、互いの希望を話す機会があった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "希望を伝える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "希望を伝える。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手の考えを聞く",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "相手の考えを聞く。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "すぐに結論を出さない",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "すぐに結論を出さない。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "mutual_talk",
    "mutual_talk",
    "reflection"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_jealousy",
  "title": "嫉妬の気持ち",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered"
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
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "交際相手の他の人との親しさに、複雑な気持ちになった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "不安を話す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "不安を話す。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "自分の気持ちを整理する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "自分の気持ちを整理する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "距離を取る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "距離を取る。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "mutual_talk",
    "reflection",
    "distance"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_multiple_agreement",
  "title": "複数交際の合意を見直す",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "multi_partner"
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
  "is_major": true,
  "context": "multiple_partner",
  "requires_multiple_partners": true,
  "text": "複数の交際関係を続けるうえで、約束を見直す必要が生まれた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "全員と話し合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "全員と話し合う。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "関係を整理する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "関係を整理する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "一人で考える時間を取る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "一人で考える時間を取る。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "mutual_talk",
    "reflection",
    "reflection"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_pace",
  "title": "求め合う身体のペース",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "sex_experienced"
  ],
  "weight": {
    "base": 17,
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
  "phase": "active",
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "互いに身体を重ねたい頻度や、寝室での激しさに少し違いがあるように感じた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "寝室での希望やペースを話し合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "寝室での希望やペースを話し合う。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "焦らず相手のぬくもりに合わせる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "焦らず相手のぬくもりに合わせる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "少し身体の距離を置いて落ち着く",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "少し身体の距離を置いて落ち着く。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "mutual_talk",
    "boundary",
    "distance"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_privacy",
  "title": "二人だけの秘密",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered"
  ],
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
  "text": "親密な関係のどこまでを周囲に話すか、迷いが生まれた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "二人で公開範囲を決める",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "二人で公開範囲を決める。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "非公開にする",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "非公開にする。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "時間をかけて考える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "時間をかけて考える。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "disclose_relationship",
    "private_relationship",
    "reflection"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_reconnection",
  "title": "すれ違いの後の再接近",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
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
  "text": "しばらく距離があった相手と、改めて向き合う機会ができた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "話し合ってみる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "話し合ってみる。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "急がず交流する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "急がず交流する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "距離を保つ",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "距離を保つ。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "mutual_talk",
    "shared_activity",
    "distance"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_satisfaction",
  "title": "情交の余韻・肌に残る匂いと快感",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "sex_experienced"
  ],
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
  "boosts": [
    {
      "whenFlag": "firstSexualExperience",
      "factor": 2
    }
  ],
  "phase": "active",
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "汗と愛液でシーツを湿らせ、もつれ合っていた手足を解く。激しいピストンで痺れた下腹の疼きや、奥に注ぎ込まれた熱の感触を噛み締めながら、今の交わりについて言葉を交わす。",
  "choices": [
    {
      "id": "choice_0",
      "label": "どれほど気持ちよく奥まで達したかを素直に伝える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "どれほど気持ちよく奥まで達したかを素直に伝える。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "partner_passion_lifestyle",
                "delay": 1,
                "prob": 0.85
              }
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "または優しく触れてほしかったと耳元で囁く",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "もっと激しく、または優しく触れてほしかったと耳元で囁く。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
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
                "eventId": "sexual_desire_fluctuation",
                "delay": 1,
                "prob": 0.85
              }
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
      "label": "一人で太ももを擦り合わせて噛み締める",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "余韻の痺れに浸りながら、一人で太ももを擦り合わせて噛み締める。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "mutual_talk",
    "mutual_talk",
    "reflection"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_secret_burden",
  "title": "秘密の交際の負担",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "adult",
  "presets": [],
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
  "is_major": true,
  "text": "交際を隠し続けることに、心の負担を感じた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "誠実に話す準備をする",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "誠実に話す準備をする。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "関係を見直す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "関係を見直す。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "秘密を抱え続ける",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "秘密を抱え続ける。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "mutual_talk",
    "reflection",
    "privacy"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_boundaries_changed",
  "title": "以前の同意と今の気持ち",
  "age": [
    18,
    90
  ],
  "trigger": "normal",
  "classification": "daily",
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
  "text": "以前は望んでいたことを、今は望まないと気づいた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "変化を伝える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "変化を伝える。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "一緒に考える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "一緒に考える。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "いったん見送る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "いったん見送る。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "boundary",
    "mutual_talk",
    "boundary"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_no_desire",
  "title": "性的な関係を望まない選択",
  "age": [
    18,
    90
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
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
  "text": "身体的な親密さを望まない時期があってもよいのか考えた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "希望を伝える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "希望を伝える。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "自分の感覚を整理する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "自分の感覚を整理する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "相手の考えも聞く",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "相手の考えも聞く。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "boundary",
    "reflection",
    "mutual_talk"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "conflict_dark_urges",
  "title": "愛のない性欲と、誰かに乱暴に犯されたい衝動",
  "age": [
    20,
    40
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
  "text": "穏やかで優しい愛撫では満たされない、心の底に澱のように沈む暗い渇望。髪を乱暴に引っ張られ、力尽くで組み伏せられて、抵抗も虚しく奥深くまで容赦なく突き上げられたい――。そんな被虐的で倒錯した欲望を抱えていることに戦慄しながらも、想像するだけで秘部からは愛液がだらしなく滴り、クリトリスが猛烈に熱く疼いてしまう……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "指先で奥を激しく掻き回して果てる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "倒錯した被虐妄想に身を浸しながら、指先で奥を激しく掻き回して果てる。",
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
                "eventId": "dark_urges_liberation",
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
      "label": "健全な日常に留まるよう強く自制する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "危険な嗜好に惹かれる自分を恐れ、健全な日常に留まるよう強く自制する。",
          "effects": [
            {
              "path": "skill.morality",
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
      "id": "choice_2",
      "label": "少し強引で支配的なプレイを恐る恐る提案してみる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "信頼できるパートナーに、少し強引で支配的なプレイを恐る恐る提案してみる。",
          "effects": [
            {
              "path": "state.mood",
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
                "eventId": "dark_urges_liberation",
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
    "mutual_talk"
  ],
  "diary": [
    "首を絞められ、力尽くで犯される光景を思い浮かべながら、指を濡れた奥深くまで突き入れた。背徳の快楽に喉を詰まらせ、涙と愛液でシーツを濡らしながら狂乱の絶頂に達した。",
    "自分の中に潜む歪んだ性癖にぞっとした。一歩間違えれば取り返しのつかない傷を負う危険な欲求を、心の檻の中に固く閉じ込め、深呼吸を繰り返した。",
    "寝室で恥じらいながら「少し乱暴に扱ってほしい」と耳元で囁いた。驚きつつも受け止めてくれた相手のいつもと違う力強い手つきに、息が止まるほどの快感を覚えた。"
  ]
});

window.defineEvent({
  "id": "dark_urges_liberation",
  "title": "両手首の戒めと、抗えない快楽への屈服",
  "age": [
    20,
    42
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "general",
  "presets": [],
  "weight": 14,
  "is_major": true,
  "text": "寝室のベッドの上。柔らかなネクタイで両手首をヘッドボードに括り付けられ、目隠しで視界を奪われる。完全に自由を奪われた状態で、敏感になった乳房や太ももを荒々しくまさぐられる。見えない恐怖と抗えない快感に息を呑む中、容赦なく濡れた肉穴へと熱い肉塊が深々とねじ込まれる。下腹の奥深くまで突き崩されるたび、子宮がキュウと締めつけられ、狂乱の快楽に喉が引き裂かれそうになる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "愛液と涎を垂らしながら果てしなく絶頂を貪る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "支配される無力感に身を委ね、愛液と涎を垂らしながら果てしなく絶頂を貪る。",
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
      "id": "choice_1",
      "label": "乱暴に突き上げられる背徳の喜びに啼き狂う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "縛られた手首を擦り合わせながら、乱暴に突き上げられる背徳の喜びに啼き狂う。",
          "effects": [
            {
              "path": "state.mood",
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
    },
    {
      "id": "choice_2",
      "label": "抱きしめられながら極度の快感と安心感に涙をこぼす",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "縄を解かれた後、抱きしめられながら極度の快感と安心感に涙をこぼす。",
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
    "shared_intimacy",
    "shared_intimacy",
    "shared_intimacy"
  ],
  "diary": [
    "目隠しをされ、両手を縛られたまま奥深くまで貫かれた。視覚を奪われたことで肌の摩擦や水音が異様なほど生々しく響き、獣のように啼きながら何度も絶頂の波に溺れた。",
    "力尽くで組み伏せられ、好き放題に犯される被虐の快楽。自分の中にあった歪んだ願望がすべて満たされ、頭が真っ白になるほどの悦楽に身を震わせた。",
    "激しい行為の後、優しく拘束を解かれて抱きしめられた。激しさと温もりの落差に胸がいっぱいになり、相手の胸の中で子供のように泣きじゃくった。"
  ]
});

window.defineEvent({
  "id": "sexual_submission",
  "title": "屈辱と被虐への目覚め",
  "age": [
    20,
    55
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered"
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
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "パートナーとの寝室、ただ愛されるだけでは満たされない倒錯した欲望が頭をもたげる。支配され、辱められ、無力な雌として扱われることに、肉体が抗いがたい快感を覚え始める。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自分が淫らな身体であることを口で認める",
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
  ]
});

window.defineEvent({
  "id": "sexual_toys_exploration",
  "title": "玩具と人工的な快感",
  "age": [
    20,
    60
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
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
  "text": "生身の指や肉体では決して味わえない、機械仕掛けの執拗で無慈悲な刺激。大人の玩具を手に入れ、未知の快楽への扉を恐る恐る押し開く。",
  "choices": [
    {
      "id": "choice_0",
      "label": "全身を痙攣させて潮を吹く",
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
  ]
});

window.defineEvent({
  "id": "sexual_ex_memory",
  "title": "以前の親密な関係の記憶",
  "age": [
    20,
    90
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
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
  "text": "過去の交際の記憶が、今の自分の気持ちに影響していると感じた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "よかった経験を思い返す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "よかった経験を思い返す。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "つらさを整理する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "つらさを整理する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "今の関係に目を向ける",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "今の関係に目を向ける。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "reflection",
    "reflection",
    "reflection"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_exhibition_thrill",
  "title": "露出と背徳のスリル",
  "age": [
    22,
    50
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
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
  "text": "密室を飛び出し、いつ他人の視線に晒されるか分からない危険な場所での情事。捕まる恐怖と背徳感が、性的な興奮を異常なまでに跳ね上げる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "声を押し殺して車内で奥まで貫かれる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "外のライトに怯えながら、声を押し殺して車内で奥まで貫かれる。",
          "effects": [
            {
              "path": "state.mood",
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
      "label": "曇るガラス越しに激しく乱れる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "窓ガラスに素肌を押しつけ、曇るガラス越しに激しく乱れる。",
          "effects": [
            {
              "path": "state.mood",
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
      "id": "choice_2",
      "label": "服を整えてやめるよう頼む",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "車が近づく気配にパニックになり、服を整えてやめるよう頼む。",
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
  "variants": [
    {
      "subTitle": "深夜の密閉車内・窓の外の気配",
      "text": "深夜の海岸沿いの駐車場、エンジンを切り、暗闇に紛れた車内。リクライニングを倒した助手席でスカートをまくり上げられ、窓の外を別の車が通り過ぎるライトが、乱れた素肌を一瞬だけ白く照らし出す……。",
      "choices": [
        [
          "外のライトに怯えながら、声を押し殺して車内で奥まで貫かれる",
          {
            "happiness": 4,
            "stress": 2,
            "trust": 2
          }
        ],
        [
          "窓ガラスに素肌を押しつけ、曇るガラス越しに激しく乱れる",
          {
            "happiness": 5,
            "stress": 3,
            "trust": 1
          }
        ],
        [
          "車が近づく気配にパニックになり、服を整えてやめるよう頼む",
          {
            "boundaryVoice": 4,
            "stress": -1
          }
        ]
      ],
      "diary": [
        "ガラス一枚隔てたすぐ外を別の車が通り過ぎる中、座席の上で激しく突かれた。ライトの光が車内をかすめるたび、心臓が跳ね上がると同時に下腹が猛烈に熱くなり、みっともないほど愛液を吹き出して果てた。",
        "曇ったサイドガラスに汗ばんだ胸を押しつけ、後ろから突き上げられた。見られるかもしれない恐怖がそのまま甘い快楽に化け、声を噛み殺して震え続けた。",
        "通りかかる車の音にどうしても恐怖が勝り、相手にお願いして服を着た。スリルよりも安心感の大切さを実感した。"
      ],
      "sexualEffects": [
        {
          "desire": 7,
          "shyness": 7,
          "selfKnowledge": 4
        },
        {
          "desire": 8,
          "shyness": 8,
          "selfKnowledge": 5
        },
        {
          "boundaryVoice": 4,
          "morality": 2
        }
      ]
    },
    {
      "subTitle": "夜のベランダ・薄布一枚の逢瀬",
      "text": "静まり返った深夜、マンションのベランダ。薄いカーテン一枚を隔てた向こうには街の夜景が広がる。ノーパンの薄いネグリジェ姿で手すりに手をつかされ、背後から夜風とともに熱い肉塊をねじ込まれる……。",
      "choices": [
        [
          "手すりを掴んで夜風を受けながら、静かに奥まで注ぎ込まれる",
          {
            "happiness": 4,
            "stress": 2,
            "secrecy": 4
          }
        ],
        [
          "向かいのマンションの明かりを見つめながら、腰を浮かせて乱れる",
          {
            "happiness": 5,
            "stress": 3,
            "secrecy": 5
          }
        ],
        [
          "下の道路を歩く人の足音に怯え、相手の手を引いて部屋へ戻る",
          {
            "stress": -1,
            "independence": 2
          }
        ]
      ],
      "diary": [
        "夜風が冷たいベランダで、手すりに額を押し当てて後ろから貫かれた。遠くの車の走行音を聞きながら、身体の奥深くを掻き回される熱い摩擦に、声を殺して何度も絶頂した。",
        "向かいの部屋の明かりが点いているのを見つめながら、背後からのピストンを受け止めた。誰かに見られているかもしれない淫靡な妄想に下腹が疼き、爪先を丸めて啼き乱れた。",
        "夜風に我に返り、相手の腕を引いて部屋のベッドへと引き戻した。やはり二人だけの密室の方が、心から快感に浸れると思えた。"
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
          "secrecy": 5
        },
        {
          "boundaryVoice": 3,
          "trust": 2
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "sexual_domination",
  "title": "加虐と支配への衝動",
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
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "普段は従順に抱かれている寝室で、ふと相手の肉体を意のままに支配し、苦悶と快楽で歪む顔を見下ろしたいという底知れぬ加虐心が芽生える。",
  "choices": [
    {
      "id": "choice_0",
      "label": "泣きつくように懇願するまで入れさせない",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "「欲しい？」と囁き、泣きつくように懇願するまで入れさせない。",
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
    },
    {
      "id": "choice_1",
      "label": "懇願された瞬間に一気に奥深くまで呑み干す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "限界まで焦らし、懇願された瞬間に一気に奥深くまで呑み干す。",
          "effects": [
            {
              "path": "state.mood",
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
    },
    {
      "id": "choice_2",
      "label": "すぐに優しく抱きしめる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "相手の苦しそうな表情に罪悪感を覚え、すぐに優しく抱きしめる。",
          "effects": [
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
  "variants": [
    {
      "subTitle": "焦らしと懇願の支配",
      "text": "相手を仰向けに組み敷き、腰に跨がる。硬くなった相手の先端を自分の濡れそぼった秘所の入り口に擦りつけるだけで、決して中には入れさせない。相手が腰を浮かせて欲しがるたび、平手で胸を押さえつけて焦らし続ける……。",
      "choices": [
        [
          "「欲しい？」と囁き、泣きつくように懇願するまで入れさせない",
          {
            "happiness": 4,
            "trust": 2,
            "independence": 3
          }
        ],
        [
          "限界まで焦らし、懇願された瞬間に一気に奥深くまで呑み干す",
          {
            "happiness": 5,
            "trust": 3,
            "independence": 2
          }
        ],
        [
          "相手の苦しそうな表情に罪悪感を覚え、すぐに優しく抱きしめる",
          {
            "trust": 3,
            "morality": 2
          }
        ]
      ],
      "diary": [
        "相手の硬い熱を入口で擦りながら、奥に入れないでおくと、相手は息を乱して「入れてくれ」と何度も懇願してきた。男の理性を奪い、自らの身体で支配している絶対的な優越感に、下腹がきゅんと甘く疼いた。",
        "相手が泣きそうな声で乞うてきた瞬間、一気に腰を落として熱い肉塊を根元まで呑み込んだ。奥を激しく満たされた衝撃と、相手の腰が歓喜に震える感触に、私自身も狂おしい絶頂に達した。",
        "焦らしすぎて相手が本当に困ったような顔をしたので、慌てて腰を下ろして繋がった。相手をいたわる気持ちと、支配したい衝動が心の中でせめぎ合っていた。"
      ],
      "sexualEffects": [
        {
          "desire": 6,
          "initiative": 5,
          "selfKnowledge": 4
        },
        {
          "desire": 8,
          "initiative": 6,
          "selfKnowledge": 5
        },
        {
          "boundaryVoice": 3,
          "intimacyNeed": 3
        }
      ]
    },
    {
      "subTitle": "背中に刻む爪痕と荒い息",
      "text": "情交の最中、激しく腰を打ちつけてくる相手の背中に両手を回し、爪を深く食い込ませる。相手の皮膚に自らの爪痕を刻みつけ、痛みに小さく呻く声を聞きながら、さらに激しく腰を突き上げる……。",
      "choices": [
        [
          "背中に深く爪を立て、自分のものだという印を刻みつける",
          {
            "happiness": 4,
            "stress": 1,
            "trust": 2
          }
        ],
        [
          "首筋に噛みつき、痛みに喘ぐ相手を腰のうねりで締め上げる",
          {
            "happiness": 5,
            "stress": 2,
            "trust": 1
          }
        ],
        [
          "傷つけてしまうことを恐れて、そっと背中を撫でる手に変える",
          {
            "morality": 3,
            "trust": 3
          }
        ]
      ],
      "diary": [
        "激しく重なる腰の動きに合わせて、相手の逞しい背中に爪を立てた。痛みに息を呑む相手の喉仏を見つめながら、自らの熱い肉壁で締めつけ、激しい絶頂に引きずり込んだ。",
        "首筋に歯を立てて噛み痕を残すと、相手は低く唸って奥深くまで肉棒を突き刺してきた。支配し支配される狂乱の中で、汗まみれになって果てた。",
        "ふと我に返り、相手の背中についた赤い筋を優しく指でなぞった。激しい愛欲の後の静けさが心地よかった。"
      ],
      "sexualEffects": [
        {
          "desire": 6,
          "initiative": 6,
          "selfKnowledge": 4
        },
        {
          "desire": 8,
          "initiative": 7,
          "selfKnowledge": 5
        },
        {
          "boundaryVoice": 2,
          "trust": 3
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "sexual_longterm",
  "title": "長い交際と親密さ",
  "age": [
    23,
    90
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered"
  ],
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
  "text": "長く一緒にいることで、親密さの形が変わってきた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "新しい時間の過ごし方を探す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "新しい時間の過ごし方を探す。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "気持ちを確かめる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "気持ちを確かめる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "今の距離を尊重する",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "今の距離を尊重する。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
    "shared_activity",
    "mutual_talk",
    "boundary"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_taboo_fantasy",
  "title": "背徳の妄想と背信の熱情",
  "age": [
    25,
    75
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "partnered"
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
  "is_major": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "目の前のパートナーと身体を重ねていながら、頭の中には決して口にできない別の淫らな情景が浮かび上がる。背徳の妄想に後押しされ、肉体はかつてない激しさで収縮する。",
  "choices": [
    {
      "id": "choice_0",
      "label": "パートナーの背中に爪を立てて激しく絶頂する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "粗野な男に犯される妄想に溺れ、パートナーの背中に爪を立てて激しく絶頂する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "いつもより下品で激しい腰使いを求める",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "妄想に駆り立てられるまま、いつもより下品で激しい腰使いを求める。",
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
      "label": "首を振って妄想を振り払う",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "パートナーへの罪悪感に苛まれ、首を振って妄想を振り払う。",
          "effects": [
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
  "variants": [
    {
      "subTitle": "見知らぬ粗野な男に犯される妄想",
      "text": "優しいパートナーの愛撫を受けながら、ふと昼間に工事現場ですれ違った汗臭く粗野な男の逞しい腕を思い出す。あんな男に乱暴に衣服を破かれ、言葉もなく力づくで貫かれたらどうなるのか……そんな淫らな妄想に下腹が熱く疼く……。",
      "choices": [
        [
          "粗野な男に犯される妄想に溺れ、パートナーの背中に爪を立てて激しく絶頂する",
          {
            "happiness": 5,
            "secrecy": 4,
            "morality": -2
          }
        ],
        [
          "妄想に駆り立てられるまま、いつもより下品で激しい腰使いを求める",
          {
            "happiness": 4,
            "secrecy": 3,
            "sexualEffects": {
              "desire": 6,
              "initiative": 4
            }
          }
        ],
        [
          "パートナーへの罪悪感に苛まれ、首を振って妄想を振り払う",
          {
            "morality": 3,
            "trust": 3
          }
        ]
      ],
      "diary": [
        "パートナーと愛し合いながら、頭の中では見知らぬ男に乱暴に組み敷かれる光景を描いていた。罪悪感と異常な興奮で膣内がきゅうきゅうと激しく収縮し、狂ったように腰を跳ねさせてイッてしまった。",
        "妄想の熱に浮かされて、パートナーに「もっと強く突いて」とねだった。相手が喜んで激しく腰を動かすたび、心の中で別の男の顔を重ねて快感に溺れていた。",
        "優しく愛してくれるパートナーの顔を見て、自分の淫らな裏切りに強い罪悪感を覚えた。妄想をかき消すように相手の首にしがみつき、精一杯の愛情を注ぎ返した。"
      ],
      "sexualEffects": [
        {
          "desire": 7,
          "secrecy": 5,
          "selfKnowledge": 4
        },
        {
          "desire": 8,
          "initiative": 5,
          "secrecy": 4
        },
        {
          "morality": 4,
          "trust": 3
        }
      ]
    },
    {
      "subTitle": "かつての恋人の記憶と重なる素肌",
      "text": "今のパートナーとの穏やかな情交の最中、ふと肌の奥深くに蘇るかつての恋人の匂いと激しいタッチ。比較してはいけないと知りながらも、忘れられないあの強烈な快楽の記憶が、今の身体をより深く濡らしてしまう……。",
      "choices": [
        [
          "過去の記憶を情熱に変え、目の前の相手を狂おしく求め尽くす",
          {
            "happiness": 4,
            "secrecy": 4,
            "trust": 2
          }
        ],
        [
          "昔の快感を思い出しながら、密かに腰の奥底で締め上げる",
          {
            "happiness": 5,
            "secrecy": 5,
            "sexualEffects": {
              "desire": 6,
              "shyness": 4
            }
          }
        ],
        [
          "昔の影を重ねてしまった自分を恥じ、一度行為を止めて深呼吸する",
          {
            "morality": 3,
            "selfUnderstanding": 3
          }
        ]
      ],
      "diary": [
        "昔の恋人の感触を思い出しながら、今の相手に抱かれた。罪深い妄想のせいで皮肉にも身体はこれ以上ないほど濡れそぼり、激しい愛液の水音とともに果ててしまった。",
        "相手の耳元で甘い声を上げながら、心の中では過去の男の指先をなぞっていた。秘密を抱えたまま達するオーガズムの甘い毒に、身体の芯が痺れきっていた。",
        "過去の影を重ねてしまった自分に耐えられなくなり、優しく相手を抱きとめて動きを止めた。今のパートナーと真摯に向き合う大切さを噛み締めた。"
      ],
      "sexualEffects": [
        {
          "desire": 6,
          "secrecy": 4,
          "trust": 2
        },
        {
          "desire": 7,
          "secrecy": 5,
          "selfKnowledge": 4
        },
        {
          "morality": 4,
          "selfUnderstanding": 3
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "sexual_mature_decadence",
  "title": "熟れた肉体の濃密な愛欲",
  "age": [
    40,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
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
  "text": "年齢を重ね、若さという張りを失いつつも、より深く、熟成された雌としての匂いと情念を帯びる身体。枯れゆく手前の肉体が放つ、濃厚で底なしの愛欲に沈んでゆく。",
  "choices": [
    {
      "id": "choice_0",
      "label": "骨の髄まで溶けるような深い交わりをする",
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
  ]
});
