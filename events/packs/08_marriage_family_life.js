// ============================================================================
// Pack: 08_marriage_family_life — プロポーズ・結婚・夫婦生活・育児・介護・家族の転機 (20 events)
// ============================================================================
window.defineEvent({
  "id": "life_relative_funeral",
  "title": "親族の不幸・通夜と葬儀",
  "age": [
    16,
    65
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
          "description": "信頼できる{partner}と素肌を重ね、対等な愛の快楽を分かち合う。",
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
    65
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
  "weight": 18,
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
          "diary": "夕飯を食べながら{partner}とたくさん話した。何気ない日常の団らんが、一番心が安らぐ。"
        },
        "calm": {
          "text": "向かい合って穏やかに微笑み、相手の愚痴に優しく相槌を打ちながら静かに夜を過ごした。",
          "diary": "食卓で穏やかに{partner}の話を聞いた。夫婦の落ち着いた絆を実感する。"
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
    },
    {
      "sub_id": "weekend_morning_in_bed",
      "title": "休日の朝、シーツの温もりと二度寝の誘惑",
      "description": "カーテンの隙間から柔らかな朝陽が差し込む休日の朝。目覚まし時計の鳴らない静かな部屋で、{partner}の逞しい胸元に顔を埋め、温かい掛け布団の中でまどろむ至福のひととき……。",
      "outcomes": {
        "sweet": {
          "text": "「もう少しこのままでいよう」と{partner}の首元に甘えて腕を回し、素肌の温もりを確かめながら二度寝に落ちた。",
          "diary": "休日の朝、{partner}の胸の中で抱きしめられながらうとうと過ごした。肌の温もりが何よりも愛おしい。"
        },
        "calm": {
          "text": "起こさないよう静かに寝顔を見つめ、そっと頬に指先を触れて穏やかな朝の安らぎを感じた。",
          "diary": "朝陽の中で眠る{partner}の穏やかな寝顔を見ていた。何気ない朝の光景に、結婚して良かったと心から思える。"
        },
        "tease": {
          "text": "「起きて、朝ご飯どうする？」と鼻先を指でちょんと突いていたずらっぽく微笑んだ。",
          "diary": "なかなか起きない{partner}の頬をつついてからかった。寝ぼけ眼で抱き寄せられて、思わず笑ってしまった。"
        },
        "tired": {
          "text": "二人とも平日の疲れが残っていたため、互いに背中を丸めて静かに昼前まで眠り続けた。",
          "diary": "日頃の疲れを癒やすように、二人でたっぷり眠った。気兼ねなく泥のように眠れるのが夫婦のありがたさだ。"
        }
      }
    },
    {
      "sub_id": "grocery_shopping_afternoon",
      "title": "休日午後のスーパー、並んで歩く買い出し",
      "description": "休日の午後、二人でエコバッグを手に近所のスーパーへ。今夜の夕食の献立を相談しながら、カートを仲良く押して陳列棚の間を歩く……。",
      "outcomes": {
        "sweet": {
          "text": "「あなたの好きなハンバーグにしようか」と笑顔でひき肉をカゴに入れ、袖口をきゅっと掴んで歩いた。",
          "diary": "{partner}と一緒にスーパーで買い出しをした。相手の好きなものを一緒に選ぶ時間が、小さな幸せに満ちている。"
        },
        "calm": {
          "text": "旬の野菜を品定めしながら、今週の予定をのんびり話し合い、過不足なく手際よく買い物を済ませた。",
          "diary": "スーパーで並んで買い出しをした。生活の息がぴったり合ってきているのを感じる。"
        },
        "tease": {
          "text": "「お菓子は一個だけね」とお母さんのような口調で言って、二人で目を見合わせて吹き出した。",
          "diary": "買い物カゴにこっそりおやつを入れようとした{partner}を注意して笑い合った。他愛ないやり取りが楽しい。"
        },
        "tired": {
          "text": "混み合う店内を手早く回り、必要な食材だけを素早く選んで早めに帰路についた。",
          "diary": "さっと買い出しを済ませて家に戻った。二人で重い荷物を片方ずつ持って歩く道が心地よかった。"
        }
      }
    },
    {
      "sub_id": "after_bath_relaxing",
      "title": "湯上がりのリビング、髪を乾かし合う時間",
      "description": "お風呂から上がって火照った素肌。シャンプーの甘い香りが漂うリビングで、タオルを肩に掛けながら、ドライヤーの温風と相手の手の感触に心地よく身を委ねる……。",
      "outcomes": {
        "sweet": {
          "text": "背後に回った{partner}に丁寧に髪を乾かされ、首筋に触れる優しい指先の感触にうっとりと目を細めた。",
          "diary": "お風呂上がりに{partner}がドライヤーで髪を乾かしてくれた。大きな手が優しく髪をすいてくれて、胸が温かくなった。"
        },
        "calm": {
          "text": "冷たい麦茶を二人で飲みながら、湯上がりの火照った肌を涼しい風に晒して穏やかに談笑した。",
          "diary": "お風呂上がりに二人で静かにお茶を飲んだ。一日の終わりにほっと息を抜ける、大好きな時間。"
        },
        "tease": {
          "text": "「はい、次はあなたの番」とドライヤーを手渡し、少し濡れた相手の短髪をわしゃわしゃと乾かして笑い合った。",
          "diary": "お互いの髪を乾かし合ってふざけた。くすぐったそうにする{partner}の顔が可笑しくて、幸せだった。"
        },
        "tired": {
          "text": "ほかほかと温まった身体のまま、ソファーに腰掛けて静かにパックをしながら夜の静寂を楽しんだ。",
          "diary": "お風呂で疲れを洗い流し、静かな夜を過ごした。身体の芯まで温まって、今夜はぐっすり眠れそうだ。"
        }
      }
    },
    {
      "sub_id": "rainy_day_coffee_conversation",
      "title": "雨の休日の午後、淹れたてのコーヒーと読書",
      "description": "窓の外を静かに濡らす雨。外出を諦めた休日の午後、リビングには淹れたてのドリップコーヒーの香ばしい匂いが立ち込め、二人で同じブランケットに足を滑り込ませる……。",
      "outcomes": {
        "sweet": {
          "text": "「いい匂いね」とカップを両手で包み、{partner}の腕に身体を預けて雨音を聴きながら温もりを分かち合った。",
          "diary": "雨の午後、{partner}と二人でコーヒーを飲んだ。外の冷たい雨音と、部屋の中の温かい体温の対比が心地いい。"
        },
        "calm": {
          "text": "それぞれ本や雑誌を開きながら、時折ふと目を合わせて微笑む、静かで豊かな時間を過ごした。",
          "diary": "静かな雨の日、同じ部屋で思い思いに過ごした。会話がなくても通じ合える安心感がある。"
        },
        "tease": {
          "text": "ブランケットの端を引っ張り合ってじゃれ合い、「寒がりなんだから」と二人でくっついて笑った。",
          "diary": "一枚のブランケットを取り合って{partner}と笑った。結局くっついて座ることになって、照れくさかった。"
        },
        "tired": {
          "text": "温かいコーヒーを飲み終えると、心地よい雨音に誘われるように二人で静かに昼寝を楽しんだ。",
          "diary": "雨音を聞きながらうとうと昼寝をした。贅沢で穏やかな休日の過ごし方だった。"
        }
      }
    },
    {
      "sub_id": "partner_cold_care",
      "title": "風邪を引いた日の看病、額に触れる手のひら",
      "description": "季節の変わり目、ふと体調を崩して熱を出してしまった日。薄暗い寝室で横たわる枕元に、心配そうな表情で冷たいタオルと温かい飲み物を運んでくれる相手の姿があった……。",
      "outcomes": {
        "sweet": {
          "text": "「いつも頑張りすぎなんだよ」と額にそっと触れられ、献身的な看病の温もりに涙がこぼれそうになった。",
          "diary": "熱を出した私を{partner}が甲斐甲斐しく看病してくれた。冷たいタオルを額に乗せてくれた手の優しさが忘れられない。"
        },
        "calm": {
          "text": "作ってくれた優しい味のお粥をゆっくり口に運び、相手の心遣いに感謝しながら静かに身体を休めた。",
          "diary": "{partner}が作ってくれたお粥を食べた。不器用ながら一生懸命作ってくれた味が、身体に染み渡った。"
        },
        "tease": {
          "text": "「うつしちゃうかもよ」と弱々しく笑うと、「うつってもいいから」と頭を優しく撫でられた。",
          "diary": "風邪がうつるのを心配したら、{partner}に真剣な顔で撫でられた。少し照れくさくて、すごく安心した。"
        },
        "tired": {
          "text": "枕元に薬と水を置いてもらい、相手に部屋の空気を入れ替えてもらって深く眠りに落ちた。",
          "diary": "一日中寝込んでいたけれど、{partner}がいてくれたおかげで心細くならずに済んだ。家族のありがたさを痛感する。"
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
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "friend",
                "status": "close",
                "metContext": "結婚式で幸せを分かち合った親友"
              }
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
  "text": "交際を深めてきた{partner}と、これからの人生をどう歩んでいくか。互いの未来を誓い合う特別な瞬間が訪れる。",
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
  "outcomes": [
    "marry",
    "mutual_talk",
    "mutual_talk"
  ],
  "variants": [
    {
      "subTitle": "夕暮れの海辺での求婚",
      "text": "夕日に照らされる波打ち際、静かに立ち止まった{partner}から小さな小箱を差し出される。開かれた箱の中で光る指輪。「一生大切にする。僕と結婚してほしい」と真摯な眼差しで告げられ、胸が熱く震える……。",
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
      "text": "激しく素肌を重ね合い、互いの体温と汗に包まれた寝室。抱き寄せられた腕の中で、{partner}が首筋に優しくキスを落としながら「ずっとこの先も、君を毎晩抱きしめたい。俺の妻になってほしい」と囁きかける……。",
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
  "classification": "major",
  "content_rating": "general",
  "presets": [
    "partnered"
  ],
  "weight": 35,
  "is_major": true,
  "once": true,
  "text": "夫婦となった二人の門出。誓いの儀式や新しい家庭のスタートが、人生に鮮やかな節目を刻む。",
  "choices": [
    {
      "id": "choice_0",
      "label": "{partner}となった相手に激しく身を委ねる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "純白のベールを脱ぎ捨て、{partner}となった相手に激しく身を委ねる。",
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
  "outcomes": [
    "marry",
    "marry"
  ],
  "variants": [
    {
      "subTitle": "純白のウェディングドレスと初夜",
      "text": "祝福の拍手と華やかな花びらに包まれ、純白のドレスで歩くバージンロード。披露宴を終えたホテルのスイートルームで、{partner}の手でドレスのファスナーをゆっくりと下ろされ、夫婦となって初めての熱い素肌を重ねる……。",
      "choices": [
        [
          "純白のベールを脱ぎ捨て、{partner}となった相手に激しく身を委ねる",
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
        "ドレスを脱がされ、素肌を晒したときの恥じらいと高揚感。{partner}となった人の逞しい腕に抱かれ、奥深くまで貫かれた瞬間の痺れるような快感は、生涯忘れられない夜になった。",
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
  "text": "静かな朝の光の中で、一人で立つ台所、あるいは隣でまだ温かい寝息を立てる{partner}の存在。誰かと肌を寄せ合って生きる安心感と、一人きりの自由な空間の間で、これからの暮らしに想いを馳せる。",
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
          "description": "{partner}のパジャマに手を滑り込ませ、背中から抱きついて誘う。",
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
      "text": "仕事の疲れからか、隣で先に寝息を立てる{partner}の広い背中。触れ合いたいのに言い出せず、下着越しに擦れる秘所の熱さと疼きを持て余し、暗闇の中で天井を見つめる……。",
      "choices": [
        [
          "{partner}のパジャマに手を滑り込ませ、背中から抱きついて誘う",
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
        "{partner}の肌に触れて小さく甘えると、振り返って優しく抱きしめてくれた。奥を満たされる温もりに、抱えていた不安が溶けていった。",
        "{partner}を起こさないよう、息を潜めて一人で下腹を弄った。ぐちゅぐちゅと鳴る水音の切なさと、奥底から突き上げる快感に、涙がシーツに零れた。",
        "求めたい気持ちを飲み込んで背を向けた。夫婦だからこそ、素直に甘えられない夜の寂しさが身に染みた。"
      ]
    },
    {
      "subTitle": "倦怠期を打ち破る大胆な試み",
      "text": "マンネリを打破すべく、普段は決して着ないような透け感のある大胆なランジェリーを新調する。寝室に入ってきた{partner}の息を呑む気配に、胸が早鐘を打つ……。",
      "choices": [
        [
          "恥じらいながらも素肌を見せつけ、{partner}をベッドへ誘い込む",
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
        "透けたレース越しに露わになった胸と秘所を見つめられ、{partner}の目が野生の色を帯びた。乱暴に押し倒されて奥深くまで貪り尽くされ、新婚の頃以上の激しい情交に狂乱した。",
        "お互いの気恥ずかしさを笑い合いながら、久しぶりにじっくりと愛撫を交わした。夫婦の絆が再び熱を帯びた気がする。",
        "やっぱり恥ずかしくてカーディガンを羽織ってしまった。でも{partner}は優しく笑って頭を撫でてくれた。"
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
  "outcomes": [
    "infidelity",
    "boundary",
    "infidelity"
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
        "{partner}を裏切る罪悪感に震えながら、資料室の机に手をついて背後から貫かれた。激しい背信の快感に愛液が溢れ出し、声を押し殺しながら狂おしい絶頂に堕ちていった。",
        "「私には{partner}がいる」ときっぱり告げて手を振り払った。家庭を守る誇りと、一瞬揺らいでしまった自分への戒めを胸に刻んだ。",
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
          "笑顔で手を解き、{partner}が待つ我が家へと帰宅する",
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
        "誘いを断り、我が家へ戻って{partner}の寝顔を見たとき、安堵の涙が零れた。守るべき大切な日常を裏切らなくて本当によかった。",
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
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "friend",
                "status": "close",
                "metContext": "久しぶりに連絡を取り合って絆が戻った友人"
              }
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

window.defineEvent({
  "id": "marital_cooking_together",
  "title": "夫婦の台所・並んで作る手料理",
  "title_template": "夫婦の台所 〜{variation_title}〜",
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
  "weight": 16,
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
      "label": "「味見してみて」と甘えてスプーンを差し出す",
      "effects": {
        "intimacyNeed": 4,
        "mood": 4,
        "stress": -2
      }
    },
    {
      "id": "choice_calm",
      "stance": "calm",
      "label": "息の合った連携で手際よく皿を並べる",
      "effects": {
        "mood": 3,
        "stress": -2,
        "knowledge": 2
      }
    },
    {
      "id": "choice_tease",
      "stance": "tease",
      "label": "エプロン姿をからかって笑い合う",
      "effects": {
        "social": 3,
        "mood": 3
      }
    },
    {
      "id": "choice_tired",
      "stance": "tired",
      "label": "簡単な一品だけで済ませて肩の力を抜く",
      "effects": {
        "stress": -3
      }
    }
  ],
  "variations": [
    {
      "sub_id": "weekend_stew_cooking",
      "title": "コトコト煮込むシチューとエプロン姿",
      "description": "休日の夕暮れ、狭いキッチンに二人で並び立つ。鍋から立ち上る湯気とブイヨンの香りに包まれながら、{partner}の腕が時折こちらの腰に触れ、何気ない共同作業に胸がじんわりと温まる……。",
      "outcomes": {
        "sweet": {
          "text": "「おいしくできたよ」とスプーンを口元へ運ぶと、{partner}はふうふうと息を吹きかけてから味わい、満足そうに目を細めて私の頭を撫でてくれた。",
          "diary": "休日に二人でシチューを作った。キッチンで肩を寄せ合いながら味見をさせ合った時間が、たまらなく甘やかだった。"
        },
        "calm": {
          "text": "{partner}が野菜を刻み、私が味を調える。言葉を交わさずとも阿吽の呼吸で料理が仕上がり、温かい湯気を囲む準備が整った。",
          "diary": "台所で二人並んで料理をした。夫婦になって重なった暮らしのリズムが心地よく、穏やかな週末を実感した。"
        },
        "tease": {
          "text": "慣れない手つきでエプロンを結ぶ{partner}の背中を「似合ってるよ、旦那様」とからかうと、{partner}は照れくさそうに笑いながら腰をくすぐってきた。",
          "diary": "台所で{partner}のエプロン姿をからかってふざけ合った。笑い声の絶えない日常がとても愛おしい。"
        },
        "tired": {
          "text": "手間をかけずシンプルな具材でコトコト煮込み、出来上がるまでの時間を二人でキッチンの椅子に腰掛けてのんびり過ごした。",
          "diary": "無理せず簡単な料理を作って二人で食べた。気負わない暮らしの気楽さにホッとする。"
        }
      }
    },
    {
      "sub_id": "tasting_spoon_intimacy",
      "title": "味見のスプーンと触れ合う吐息",
      "description": "煮物のだし加減を確かめるため、小皿と箸を持って{partner}を呼ぶ。振り返った{partner}の顔がすぐ間近に迫り、立ち上る出汁の香りと{partner}のシャンプーの匂いが混ざり合って、思わず頬が熱くなる……。",
      "outcomes": {
        "sweet": {
          "text": "箸先を{partner}の唇にそっと触れさせると、私の指先ごと包み込むように味わわれ、熱い眼差しで見つめ合って息を呑んだ。",
          "diary": "台所でだしの味見をしてもらった。至近距離で見つめられた瞬間、胸の奥が甘く疼いてしまった。"
        },
        "calm": {
          "text": "「ちょうどいい味付けだよ」と{partner}が頷き、ほっと胸を撫で下ろして食卓へ運ぶ皿を二人で用意した。",
          "diary": "味見をしてもらい、お互いの好みがすっかり重なっていることに夫婦としての年月の積み重ねを感じた。"
        },
        "tease": {
          "text": "「ちょっと薄いかな？」と首を傾げる{partner}に「私の愛情が足りないってこと？」と軽口を返して笑い合った。",
          "diary": "味見をしながら他愛ない軽口を叩き合った。何でもない会話で笑える台所が大好きだ。"
        },
        "tired": {
          "text": "手早く味付けを決めて盛り付けを終え、二人でビールを一口飲んで肩の力を抜いた。",
          "diary": "仕事帰りの夕飯作り。二人で味見しながら手早く済ませ、ホッと一息ついた。"
        }
      }
    },
    {
      "sub_id": "washing_dishes_together",
      "title": "食後の後片付けと並んで洗う食器",
      "description": "夕食を終えた後のシンク。{partner}がスポンジで泡立てた皿を、私が水で流して拭き上げる。蛇口から流れる温水の温もりと、時折触れ合う泡まみれの指先に、静かな満ち足りを感じる……。",
      "outcomes": {
        "sweet": {
          "text": "水滴を拭き取りながらふと顔を上げると、{partner}が濡れた手を拭いてそっと背中から抱きしめてくれ、心地よい重みと温もりに身を委ねた。",
          "diary": "食後の皿洗いを手伝ってくれた{partner}に後ろから抱きしめられた。日常のふとした瞬間の温もりに胸が満たされた。"
        },
        "calm": {
          "text": "規則的な水音の中、二人で淡々と皿を拭き終えてキッチンをピカピカに磨き上げ、気持ちのいい達成感を分かち合った。",
          "diary": "食後の片付けを二人で手際よく終えた。家事を当たり前に分担し合える生活の安心感が嬉しい。"
        },
        "tease": {
          "text": "泡のついた指先で{partner}の頬にちょんと泡を乗せると、「お返しだ」と鼻先を指で突かれて二人で大笑いした。",
          "diary": "皿洗いの最中に泡をつけてふざけ合った。子どもみたいにはしゃぐ{partner}の笑顔が可愛らしかった。"
        },
        "tired": {
          "text": "「残りは明日でいいよ」とお互いに言い合い、最低限の器だけすすいで早めにリビングのソファへ倒れ込んだ。",
          "diary": "今夜は無理せず片付けを切り上げて二人で休んだ。お互いを気遣い合える関係に感謝したい。"
        }
      }
    }
  ]
});

window.defineEvent({
  "id": "marital_living_room_cuddle",
  "title": "夫婦の夕べ・リビングでのスキンシップ",
  "title_template": "夫婦の夕べ 〜{variation_title}〜",
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
  "weight": 16,
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
      "label": "胸元に身体を預けて甘える",
      "effects": {
        "intimacyNeed": 4,
        "mood": 4,
        "stress": -3
      }
    },
    {
      "id": "choice_calm",
      "stance": "calm",
      "label": "静かに隣に座り、穏やかな時間を共有する",
      "effects": {
        "mood": 3,
        "stress": -2
      }
    },
    {
      "id": "choice_tease",
      "stance": "tease",
      "label": "ちょっかいを出してじゃれ合う",
      "effects": {
        "social": 3,
        "mood": 3
      }
    },
    {
      "id": "choice_tired",
      "stance": "tired",
      "label": "肩を寄せ合ってうとうと休む",
      "effects": {
        "stress": -3
      }
    }
  ],
  "variations": [
    {
      "sub_id": "sofa_movie_cuddle",
      "title": "薄暗いリビングのソファ、肩を寄せる映画鑑賞",
      "description": "照明を落とした夜のリビング。一枚のブランケットを二人で膝に掛け、テレビに映る映画を眺める。{partner}の逞しい肩に頭を預けると、大きな手のひらがそっと私の手を包み込んできて……。",
      "outcomes": {
        "sweet": {
          "text": "{partner}の胸元にすり寄ると、優しく髪を梳くように撫でられ、落ち着く匂いと体温に包まれながら映画を最後まで見届けた。",
          "diary": "ソファで映画を見ながら{partner}の腕に抱きしめられていた。言葉のない穏やかな触れ合いが一番贅沢に感じる。"
        },
        "calm": {
          "text": "お互いに感想をぽつりぽつりと呟き合いながら、静かに寄り添って一本の物語を分かち合った。",
          "diary": "夜のリビングで{partner}と並んで映画を見た。同じものを見て同じところで笑い合える静かな幸福を噛み締めた。"
        },
        "tease": {
          "text": "切ないラブシーンが流れると「昔はあんなに熱烈だったのにね」とからかい、{partner}にぎゅっと抱きすくめられて笑い声を零した。",
          "diary": "映画のロマンチックな場面をネタに{partner}をからかって戯れた。照れくさそうにする{partner}の顔が懐かしかった。"
        },
        "tired": {
          "text": "映画の途中でいつの間にか{partner}の肩にもたれて寝息を立ててしまい、エンドロールの音と優しい毛布の感触で目を覚ました。",
          "diary": "映画を見ながら{partner}の肩でぐっすり眠ってしまった。起こさずにブランケットをかけ直してくれた優しさが染みた。"
        }
      }
    },
    {
      "sub_id": "ear_cleaning_lap_pillow",
      "title": "太ももの上の安心感、耳かきと膝枕",
      "description": "風呂上がりの静かなひととき。{partner}が「耳かきして」と甘えてきて、私の太ももに頭を預けてくる。膝の上に伝わる{partner}の頭の重みと温もりに、母性のような愛おしさが胸を満たす……。",
      "outcomes": {
        "sweet": {
          "text": "{partner}の耳元に優しく息を吹きかけながら丁寧に耳かきをしてあげると、{partner}は心地よさそうに目を細め、私の腰をそっと抱き寄せてきた。",
          "diary": "お風呂上がりに{partner}に膝枕をして耳かきをしてあげた。無防備に甘えてくる{partner}が愛おしくてたまらなかった。"
        },
        "calm": {
          "text": "「痛くない？」と確かめながら静かに手を動かし、日頃の疲れをほぐすように穏やかな夜の時間を紡いだ。",
          "diary": "{partner}に膝枕をしてあげた。日頃家族のために頑張ってくれている{partner}の頭を撫でながら、優しい時間を過ごせた。"
        },
        "tease": {
          "text": "「じっとしてないと痛いよ」と頭を軽くペチッと叩いて笑い、くすぐったがる{partner}とじゃれ合いながら仕上げた。",
          "diary": "耳かきをしながらくすぐったがる{partner}をからかった。夫婦の他愛ないスキンシップに心が和んだ。"
        },
        "tired": {
          "text": "耳かきを終える頃には{partner}は膝の上ですっかり寝息を立てており、重みを感じながらしばらくその温もりに浸っていた。",
          "diary": "膝の上で眠ってしまった{partner}の寝顔を見つめていた。起こすのがもったいないくらい静かな夜だった。"
        }
      }
    },
    {
      "sub_id": "shoulder_massage_after_work",
      "title": "仕事終わりのリビング、互いの肩を揉みほぐす手",
      "description": "一週間の仕事の疲れが溜まった週末前夜。リビングの絨毯の上で座る{partner}の背後から肩に手を置き、凝り固まった肩甲骨を指圧する。互いの身体を労り合う手のひらから、じんわりと温もりが染み渡る……。",
      "outcomes": {
        "sweet": {
          "text": "「いつもありがとうね」と肩を揉みほぐすと、{partner}は交代で私の肩を引き寄せ、首筋に優しいキスを落としてから丹念に解してくれた。",
          "diary": "お互いの肩を揉み合いながら労い合った。首筋に触れる{partner}の手と唇の温かさに、日々の疲れが溶けていった。"
        },
        "calm": {
          "text": "「そこそこ、効くよ」と声を掛け合い、日常の労苦を労い合いながら、夫婦の確かな支え合いを実感した。",
          "diary": "{partner}と肩を揉み合ってリフレッシュした。お互いの身体を気遣える関係の大切さを改めて感じた。"
        },
        "tease": {
          "text": "「すごいゴリゴリ鳴ってるよ、おじいちゃん」と笑いながら少し強めに揉むと、「うわ、容赦ないな」と{partner}が悲鳴を上げて笑いを誘った。",
          "diary": "{partner}の肩の凝り具合をからかいながら揉んであげた。大声を上げて笑う{partner}を見て、こちらの疲れも吹き飛んだ。"
        },
        "tired": {
          "text": "軽く肩をさすり合った後、二人で絨毯の上に寝転がり、天井を仰ぎながら脱力した時間を過ごした。",
          "diary": "二人でゴロゴロと絨毯の上で伸びをした。何もしない贅沢な夜が一番の回復になる。"
        }
      }
    }
  ]
});

window.defineEvent({
  "id": "marital_bedtime_whisper",
  "title": "就寝前の寝室・暗がりでの囁き合い",
  "title_template": "就寝前の寝室 〜{variation_title}〜",
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
  "weight": 15,
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
      "label": "布団の中で素肌を密着させて囁く",
      "effects": {
        "intimacyNeed": 4,
        "mood": 4,
        "stress": -2
      }
    },
    {
      "id": "choice_calm",
      "stance": "calm",
      "label": "静かに手を重ねて今日の一日を振り返る",
      "effects": {
        "mood": 3,
        "stress": -2
      }
    },
    {
      "id": "choice_tease",
      "stance": "tease",
      "label": "冷たい足先を{partner}のすねにくっつけて驚かせる",
      "effects": {
        "social": 3,
        "mood": 2
      }
    },
    {
      "id": "choice_tired",
      "stance": "tired",
      "label": "「おやすみ」と小さく告げて背中を預けて眠る",
      "effects": {
        "stress": -3
      }
    }
  ],
  "variations": [
    {
      "sub_id": "darkness_pillow_talk",
      "title": "消灯後の暗がり、布団の中で重なる足先と囁き",
      "description": "パチリと部屋の明かりを消し、暗闇の中に目が慣れていく時間。厚い掛け布団の中で、冷えた私の足先が{partner}の温かい足に触れる。至近距離から聞こえる低い声の囁きに、耳の奥が甘く震える……。",
      "outcomes": {
        "sweet": {
          "text": "「足、冷たいね」と{partner}の両足で包み込まれ、そのまま身体ごと引き寄せられて腕の中で甘い吐息を重ね合った。",
          "diary": "暗がりの中で{partner}の温かい足と腕に包まれた。布団の中で肌を触れ合わせながら眠りに落ちる時間が一番幸せ。"
        },
        "calm": {
          "text": "暗闇の中で他愛ない今日の出来事を小声で話し、相槌を打ちながら互いの呼吸が落ち着いていくのを感じた。",
          "diary": "寝室の暗がりで{partner}と静かに語り合った。隣に信頼できる人がいることの絶対的な安心感を噛み締めた。"
        },
        "tease": {
          "text": "わざと氷のように冷たい足先を{partner}の太ももにピトッと当てると、「うわっ冷た！」と飛び起きそうになる{partner}を抱きしめて笑った。",
          "diary": "冷たい足を{partner}にくっつけて悪戯した。文句を言いながらも温めてくれる{partner}の優しさに頬が緩んだ。"
        },
        "tired": {
          "text": "暗闇の中でそっと手を繋ぎ、「今日も一日お疲れ様」と短く言葉を交わして深い眠りに沈んでいった。",
          "diary": "疲れ切った夜、布団の中で手を繋いだだけで安心できた。言葉以上の絆を感じる。"
        }
      }
    },
    {
      "sub_id": "holding_hands_to_sleep",
      "title": "眠りに落ちるまで、離さずに握り合う指先",
      "description": "枕を並べた寝室。仰向けに寝転んだ二人の間、シーツの上に投げ出された互いの手が自然と触れ合う。絡み合う指先の温もりと、左手薬指のリングが小さくカチリと音を立てる……。",
      "outcomes": {
        "sweet": {
          "text": "指をきつく絡め直すと、{partner}が手を引き寄せて甲に優しく口づけを落としてくれ、胸の奥がきゅんと甘く締め付けられた。",
          "diary": "ベッドの中で{partner}が私の指先にキスをしてくれた。何年経っても恋人のような甘やかさを忘れないでいてくれる。"
        },
        "calm": {
          "text": "指先の温もりを感じながら呼吸のリズムを合わせ、静かな夜の深まりの中に穏やかに沈んでいった。",
          "diary": "手を繋いだまま静かに眠りについた。触れ合っている手のひらの温もりが、何よりの子守唄になった。"
        },
        "tease": {
          "text": "指相撲のように親指でちょっかいを出すと、{partner}も応戦してきてベッドの中で小さな攻防を繰り広げて笑い合った。",
          "diary": "布団の中で{partner}と指相撲をして遊んだ。大人になってもこんな風にくだらないことで笑い合えるのが嬉しい。"
        },
        "tired": {
          "text": "繋いだ手のぬくもりを感じながら、いつの間にかどちらからともなく深い寝息へと移り変わっていった。",
          "diary": "手を握った安心感に包まれてぐっすり眠れた。朝まで途切れなかった手の温もりが愛おしい。"
        }
      }
    }
  ]
});

window.defineEvent({
  "id": "marital_holiday_stroll",
  "title": "夫婦の休日・並木道と買い物の散歩",
  "title_template": "休日の散歩道 〜{variation_title}〜",
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
  "weight": 15,
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
      "label": "腕にぎゅっとしがみついて甘える",
      "effects": {
        "intimacyNeed": 4,
        "mood": 4,
        "stress": -2
      }
    },
    {
      "id": "choice_calm",
      "stance": "calm",
      "label": "歩調を合わせて並木道の景色を楽しむ",
      "effects": {
        "mood": 3,
        "stress": -3
      }
    },
    {
      "id": "choice_tease",
      "stance": "tease",
      "label": "ショーウィンドウを見ながら冗談を言い合う",
      "effects": {
        "social": 3,
        "mood": 3
      }
    },
    {
      "id": "choice_tired",
      "stance": "tired",
      "label": "ベンチで少し休みながら風を感じる",
      "effects": {
        "stress": -3
      }
    }
  ],
  "variations": [
    {
      "sub_id": "avenue_holding_hands",
      "title": "木漏れ日の並木道、結婚指輪が触れ合う手のひら",
      "description": "爽やかな風が吹き抜ける休日の午後。二人で並んで歩くケヤキの並木道。ポケットから出された{partner}の手が、私の手を自然に恋人繋ぎで包み込む。互いの薬指の金属がカチリと小さく触れ合い……。",
      "outcomes": {
        "sweet": {
          "text": "「恋人同士に見えるかな」と{partner}の腕に身体を寄せると、{partner}は少し照れながらも嬉しそうに私の手をぎゅっと握り返してくれた。",
          "diary": "休日の散歩道で{partner}と手を繋いで歩いた。指輪が触れ合うたびに、夫婦になれた実感が胸に満ちて幸せだった。"
        },
        "calm": {
          "text": "青葉の揺れる音に耳を傾けながら、のんびりと二人の歩調を合わせて並木道を歩き、穏やかな休日を慈しんだ。",
          "diary": "{partner}と並木道をゆっくり散歩した。急ぐことのない二人の時間の中に、確かな心の結びつきを感じた。"
        },
        "tease": {
          "text": "「手汗かいてない？」とからかうと、「お前が緊張させてるんだろ」と返され、顔を見合わせて吹き出した。",
          "diary": "手を繋ぎながら{partner}を冷やかして笑い合った。付き合いたてのような初々しさを時々思い出せるのが楽しい。"
        },
        "tired": {
          "text": "日当たりの良い公園のベンチを見つけて腰を下ろし、通り抜ける風を浴びながらのんびりと二人で目を細めた。",
          "diary": "散歩の途中でベンチに座ってぼーっと過ごした。ただ隣にいるだけで心が満たされる。"
        }
      }
    },
    {
      "sub_id": "local_bakery_morning",
      "title": "休日の朝、焼きたてパンを買いに行く寄り道",
      "description": "休日の朝、少し遅めの時間に家を出て近所のお気に入りのベーカリーへ。小麦とバターの香ばしい匂いが漂う店内で、トレーとトングを持って「どれにする？」と顔を見合わせる……。",
      "outcomes": {
        "sweet": {
          "text": "「半分ずつ食べようね」と好きなパンを選び合い、帰り道に紙袋の温もりを抱きながら{partner}と肩を並べて歩いた。",
          "diary": "朝のパン屋さんに二人で出かけた。二人で分け合って食べるパンを選ぶだけの時間が、何よりも贅沢に思える。"
        },
        "calm": {
          "text": "焼きたてのクロワッサンとコーヒーをテラス席で静かに味わい、心地よい朝日を浴びながら休日の計画を立てた。",
          "diary": "朝のテラスで{partner}とコーヒーを飲んだ。慌ただしい平日を忘れられる、とても豊かな朝の時間だった。"
        },
        "tease": {
          "text": "「またそんな甘そうなの選んで」とトレーを覗き込む{partner}に、「一口あげるから許して」とウィンクして笑い合った。",
          "diary": "パン屋さんで{partner}に甘いパンを笑われた。何気ない買い物でも、二人で行くと特別なイベントになる。"
        },
        "tired": {
          "text": "買ってきたパンを家へ持ち帰り、パジャマのままリビングでゆっくりと噛み締め、のんびりとした朝を堪能した。",
          "diary": "焼きたてパンを買って家でのんびり食べた。気取らない休日の朝の贅沢を味わった。"
        }
      }
    }
  ]
});

window.defineEvent({
  "id": "marital_affection_skinship",
  "title": "夫婦の情愛・素肌で確かめ合う愛",
  "title_template": "愛を確かめる時間 〜{variation_title}〜",
  "age": [
    20,
    80
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "married"
  ],
  "weight": 16,
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
      "label": "火照った身体をすり寄せて甘え、愛を求める",
      "effects": {
        "intimacyNeed": 5,
        "mood": 5,
        "stress": -3,
        "sexualEffects": {
          "desire": 4,
          "arousal": 4
        }
      }
    },
    {
      "id": "choice_passionate",
      "stance": "passionate",
      "label": "首筋に腕を回し、激しく貪るように応える",
      "effects": {
        "intimacyNeed": 6,
        "mood": 5,
        "stress": -2,
        "sexualEffects": {
          "desire": 6,
          "arousal": 6,
          "initiative": 3
        }
      }
    },
    {
      "id": "choice_shame_melting",
      "stance": "shame_melting",
      "label": "恥じらいに身を震わせながら、淫らな愛撫に蕩かされる",
      "effects": {
        "mood": 4,
        "shyness": 3,
        "sexualEffects": {
          "arousal": 5,
          "desire": 3
        }
      }
    },
    {
      "id": "choice_gentle_embrace",
      "stance": "gentle_embrace",
      "label": "静かに呼吸を合わせ、鼓動と温もりを慈しむ",
      "effects": {
        "mood": 4,
        "stress": -4,
        "intimacyNeed": 3
      }
    }
  ],
  "variations": [
    {
      "sub_id": "morning_naked_warmth",
      "title": "朝のベッド、素肌同士を重ねて確かめる体温",
      "description": "休日の柔らかな朝光がレースカーテンを透かして差し込む寝室。めくられた薄手のパジャマの下から、{partner}の逞しい素肌が吸い付くように密着してくる。太ももの間に滑り込んでくる{partner}の硬く熱い感触と、首筋や耳たぶをじっくりと甘噛みする熱い吐息に、下腹の奥がきゅうんと疼いて愛液がじんわりと滲み出す……。",
      "outcomes": {
        "sweet": {
          "text": "「朝から、そんなに触られたら……」と甘い鼻声を漏らしながら{partner}の広い背中に素足を絡めると、{partner}は愛おしそうに目を細めて私の唇を塞ぎ、濡れ始めた秘所の粘膜へと逞しい指を滑り込ませてきた。互いの汗と体温が混ざり合う濃厚な朝のひとときに、心まで蕩けていく。",
          "diary": "朝のベッドで{partner}と素肌を重ね合った。{partner}の熱い手のひらが身体の隅々を撫で回すたび、結婚して年月が経っても変わらない愛の深さを実感して胸が震えた。"
        },
        "passionate": {
          "text": "{partner}の首筋に両腕を回して引き寄せ、互いの胸板と乳房を押し潰すように強く密着させた。熱い舌を絡め合いながら激しく求め合うと、{partner}の手がパジャマを乱暴に脱がし、目覚めたばかりの身体を剥き出しにして貪るように素肌をまさぐってきた。",
          "diary": "朝から互いの情欲を隠さずに求め合った。{partner}の激しい抱擁と熱い指先に身体の奥を乱暴に掻き回され、声を殺して何度も絶頂に震えた。"
        },
        "shame_melting": {
          "text": "「まだ朝なのに、恥ずかしい……」と顔を手で覆うと、{partner}はその手首を優しくシーツに縫い止め、赤く染まった首筋から乳首、下腹へと執拗に舌を這わせてきた。淫らな水音と敏感な粘膜への刺激に耐えきれず、蜜を滴らせながら身悶えて{partner}の腕の中で果ててしまった。",
          "diary": "明るい朝の光の中で{partner}に全身を愛撫された。恥ずかしさで顔から火が出そうだったけれど、{partner}の巧みな指先に身体が勝手に蕩けてしまい、愛されている歓喜に包まれた。"
        },
        "gentle_embrace": {
          "text": "互いの胸元にそっと耳を当て、トクトクと力強く脈打つ心音を聞きながら静かに肌を触れ合わせた。言葉はなくとも、包み込む{partner}の大きな手のひらの温もりだけで、何ものにも代えがたい絶対的な絆と安心感が満ちていった。",
          "diary": "ベッドの中で{partner}の鼓動を聞きながら抱きしめ合っていた。素肌が触れ合っているだけで、生きて寄り添えている奇跡に涙が出そうになった。"
        }
      }
    },
    {
      "sub_id": "after_bath_cream_touch",
      "title": "湯上がりのリビング、ボディクリームと淫らな手つき",
      "description": "湯上がりの湯気を纏い、薄手のキャミソール一枚でリビングの絨毯に座る。後ろから座り直した{partner}が、甘い花の香りがするボディクリームを手のひらで温め、私の剥き出しの肩や鎖骨、背筋へとゆっくりと滑らせてくる。滑らかな油分越しに伝わる{partner}の指先の熱と、徐々に太ももの付け根へと這い寄る手つきに、息が熱く乱れていく……。",
      "outcomes": {
        "sweet": {
          "text": "「そこ、くすぐったい……でも、気持ちいい」と後ろの{partner}の胸に頭を預けると、クリームに濡れた指先がキャミソールの裾をめくり上げ、露わになった乳房の尖りを執拗に転がしてきた。甘い刺激に下腹がじんわりと疼き、{partner}の指先にすべてを委ねた。",
          "diary": "お風呂上がりに{partner}にクリームを塗ってもらった。優しい手つきが次第に熱を帯び、敏感になった素肌を甘く刺激されて身体の芯までトロトロに溶かされた。"
        },
        "passionate": {
          "text": "背後から伸びる{partner}の手首を自ら掴み、キャミソールの胸元へと導いて豊かな膨らみを直接揉ませた。息を呑んだ{partner}の逞しい手が乱暴に揉みしだき、耳元に荒い息を吹きかけながら「君の肌、最高に綺麗だ」と熱烈に囁かれて下半身が熱く濡れそぼった。",
          "diary": "湯上がりの火照った身体で{partner}を誘惑してしまった。{partner}の貪欲な視線と激しい手つきに煽られ、リビングの絨毯の上で濡れた身体を密着させて愛を確かめ合った。"
        },
        "shame_melting": {
          "text": "太ももの内側を撫で上げる{partner}の指先が、湿ったショーツの縁をそっと割り込ませて秘所の割れ目に触れると、「待って、ここはクリーム塗る場所じゃないでしょ……」と抗議の声をあげた。しかし濡れそぼった粘膜をぬちぬちと擦り合わされ、恥辱と快楽に下唇を噛んで腰を跳ねさせた。",
          "diary": "クリームを塗る口実で、{partner}にショーツの中まで弄ばれてしまった。ぬるぬると鳴る淫らな音を聞かれながら、なすすべもなく感じてしまう自分がたまらなく恥ずかしく、愛おしかった。"
        },
        "gentle_embrace": {
          "text": "肩から背中にかけて丹念にクリームを塗り広げてくれる{partner}の手のひらの温かさに、日々の疲れがすうっと抜けていった。塗り終えた{partner}にそのまま包み込むように抱きしめられ、清潔な石鹸とクリームの香りに包まれて穏やかな夜を過ごした。",
          "diary": "{partner}が優しく背中にクリームを塗ってくれた。肌に触れる丁寧な手つきの一つひとつに{partner}の深い愛情が宿っていて、心から安らぐことができた。"
        }
      }
    },
    {
      "sub_id": "sofa_deep_kiss_embrace",
      "title": "夕暮れのソファ、絡み合う舌と愛を確かめる抱擁",
      "description": "茜色の夕陽が沈みゆく静かなリビング。ソファに腰掛ける{partner}の膝の上へと引き寄せられ、向かい合って跨がる体勢で抱きすくめられる。至近距離で見つめ合う{partner}の瞳が熱く濁り、互いの息が唇をかすめ合う。重なり合った唇から、どちらからともなく舌が滑り込み、じゅぷりと濃厚な水音を立てて絡み合い始める……。",
      "outcomes": {
        "sweet": {
          "text": "{partner}の首筋にすがりつきながら舌先を甘く絡ませると、{partner}の大きな手のひらが私の腰をぐっと引き寄せ、薄い衣服越しに{partner}の硬く猛った存在が秘所の割れ目に強く押し当てられた。互いの唾液を飲み干し合う濃厚な口づけに、下腹の奥が熱く疼いて止まらない。",
          "diary": "ソファの上で{partner}と何度も何度も深く口づけを交わした。舌を絡め合うたびに湿った水音が部屋に響き、{partner}の逞しい温もりに抱かれながら愛されている幸福に溺れた。"
        },
        "passionate": {
          "text": "{partner}の後頭部に指を絡めてさらに深く貪るように舌を吸い上げ、唾液を垂らしながら激しく求め合った。{partner}の荒い息遣いと逞しい手が背中からお尻を強く掴み、衣服をまさぐる焦燥感に煽られながら、ソファの上で理性をかなぐり捨てて抱き合い続けた。",
          "diary": "激しいディープキスで{partner}と求め合った。互いの息が途切れるほど熱烈に唇と舌を吸い合い、夫婦になっても色褪せない燃えるような情欲を全身で味わった。"
        },
        "shame_melting": {
          "text": "「んむ、ちゅ……っ」と零れる淫らな水音と、下着越しに擦り合わされる互いの熱さに顔を真っ赤に染めながらも、離れようとする唇を{partner}が許してくれず、舌を奥深くまで捩じ込まれて翻弄された。口内を満たす{partner}の唾液の味と強引な愛撫に、意識が白濁しそうになるほど感じ入った。",
          "diary": "{partner}の激しいキスに抗えず、舌を絡め取られて頭が真っ白になった。淫らな音を立てて唾液を分かち合う行為に背徳的な興奮を覚え、身体の奥がじんじんと疼いた。"
        },
        "gentle_embrace": {
          "text": "深く柔らかな口づけを幾度も啄むように交わし、額を寄せ合ってふうと息を吐き出した。抱きしめ合う胸と胸の間で互いの鼓動が一つに重なり合うのを感じながら、薄暗くなる部屋の中でいつまでも静かに温もりを確かめ合った。",
          "diary": "夕暮れのソファで{partner}と静かにキスを交わし、額を合わせて微笑み合った。何年寄り添っても、こうして愛を確かめ合える{partner}が私の隣にいてくれることが誇らしい。"
        }
      }
    },
    {
      "sub_id": "kitchen_back_hug_caress",
      "title": "台所での背後からの抱擁、エプロン越しに弄ばれる身体",
      "description": "夕餉の仕込みをしている最中、背後から音もなく忍び寄った{partner}の逞しい腕がエプロンの紐の下をくぐり、私の腰をぐっと引き寄せる。背中に伝わる{partner}の硬い胸板の感触と、耳元に吹きかけられる湿った熱い吐息。エプロンの薄い布地越しに、大きな手のひらが柔らかな下腹から豊かな乳房へと這い上がってきて……。",
      "outcomes": {
        "sweet": {
          "text": "「ご飯作ってる途中なのに……っ」と包丁を置いて後ろを振り返ると、{partner}は悪戯っぽく微笑みながら私の唇を甘く塞ぎ、エプロンの隙間から直接素肌へと手を滑り込ませてきた。吸い付くような{partner}の愛撫に腰の力が抜け、台所のシンクに手をついて甘い喘ぎ声を零した。",
          "diary": "台所で料理中に{partner}に後ろから抱きしめられた。首筋にキスされながら素肌をまさぐられ、夕飯の支度どころではなくなるほど甘く痺れる時間を過ごした。"
        },
        "passionate": {
          "text": "背中をぴったりと{partner}の身体に擦り付け、お尻の割れ目に{partner}の猛りを押し当てながら「ご飯より、私を食べたいの？」と振り返って艶然と微笑んだ。{partner}の瞳に獣のような炎が宿り、エプロンを乱暴に剥ぎ取られて台所のカウンターに押し倒され、激しく貪り尽くされた。",
          "diary": "台所で{partner}を挑発してしまった。火がついた{partner}にそのままカウンターの上で激しく愛撫され、夕暮れのキッチンで声も抑えずに乱れた情交に溺れた。"
        },
        "shame_melting": {
          "text": "エプロンの下で下着のゴムに指を掛けられ、濡れ始めた下腹の割れ目を布越しにぐっと押し込まれると、「やだ、こんな場所で……誰か来たらどうするの」と顔を覆った。しかし{partner}の指先が敏感な突起をぐにぐにと捏ね回すたび、恥ずかしさとは裏腹に愛液が溢れ出して太ももを濡らした。",
          "diary": "台所でエプロン姿のまま、{partner}に下半身をまさぐられてしまった。日常の生活空間でこんな卑猥な愛撫を受ける恥ずかしさに、身体の奥がかつてないほど敏感に反応してしまった。"
        },
        "gentle_embrace": {
          "text": "「いつも美味しいご飯をありがとう」と耳元で囁かれ、首筋に優しいキスを落とされながらぎゅっと抱きしめられた。背中に伝わる{partner}の大きな温もりに包まれながら、ふふっと微笑んで「もう少しでできるから待っててね」と幸せを噛み締めた。",
          "diary": "料理中に{partner}が後ろから優しく抱きしめて労ってくれた。{partner}の腕の中にある温かい安心感が、毎日の暮らしを何よりも明るく照らしてくれている。"
        }
      }
    }
  ]
});

window.defineEvent({
  "id": "marital_double_couples_talk",
  "title": "他家夫婦との集いと赤裸々な語らい",
  "title_template": "夫婦の社交 〜{variation_title}〜",
  "age": [
    22,
    75
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "r15",
  "presets": [
    "partnered",
    "married"
  ],
  "weight": 18,
  "actors": {
    "spouse": {
      "source": "current_partner",
      "required": true
    }
  },
  "choices": [
    {
      "id": "choice_open_share",
      "stance": "open_share",
      "label": "照れつつも赤裸々に打ち明け、二人の絆や夫婦事情を素直に語る",
      "effects": {
        "intimacyNeed": 3,
        "mood": 3,
        "social": 3
      }
    },
    {
      "id": "choice_discreet_smile",
      "stance": "discreet_smile",
      "label": "恥じらって言葉を濁しつつも、相手夫婦の生々しい話に思わず下腹が疼く",
      "effects": {
        "intimacyNeed": 4,
        "mood": 2,
        "stress": -1
      }
    },
    {
      "id": "choice_tease_spouse",
      "stance": "tease_spouse",
      "label": "「うちの人は実は…」と隣の{partner}をからかって恥ずかしがらせ、場を盛り上げる",
      "effects": {
        "social": 4,
        "mood": 3,
        "stress": -1
      }
    },
    {
      "id": "choice_bedroom_curiosity",
      "stance": "bedroom_curiosity",
      "label": "他所の夫婦のスキンシップやレス対策、ベッドの工{partner}に興味津々で聞き入る",
      "effects": {
        "intimacyNeed": 4,
        "social": 3,
        "intelligence": 1
      }
    }
  ],
  "variations": [
    {
      "sub_id": "double_date_home_drinking",
      "title": "友人夫婦との宅飲み、お酒が進んで始まる「夜の営み」談義",
      "description": "仲の良い友人夫婦を自宅に招いてのささやかな家飲み。お酒が程よく回り、テーブルの上に空き缶やワイングラスが並ぶ頃、友人の奥さんがふと「ねえ、ぶっちゃけ二人は普段どれくらいスキンシップしてるの？ うち最近レス気味でさ……」と頬を染めながら赤裸々な夜の悩みを切り出してきて……。",
      "outcomes": {
        "open_share": {
          "text": "「うちは……そうね、週に何回か、{partner}が求めてくれたり……」と顔を赤らめながらも正直に打ち明けた。隣で照れくさそうに頭を掻く{partner}と視線が絡み合い、友人夫婦から「うわ、めっちゃラブラブじゃん！」と羨ましがられて胸が高鳴った。",
          "diary": "友人夫婦との宅飲みで、夫婦の夜の営みについて赤裸々に語り合った。人前でうちの仲良しぶりを話すのは恥ずかしかったけれど、隣の{partner}が愛おしくてたまらなくなった。"
        },
        "discreet_smile": {
          "text": "「そ、そんなの秘密ですよ……」とお酒を口に含んで誤魔化したが、友人夫婦の生々しいベッド事情や誘い方の生々しい話を聞くうちに、太ももの内側がじんわりと熱くなって{partner}の横顔を意識してしまった。",
          "diary": "他家夫婦の生々しい夜の事情を聞いて、こっちまでドキドキしてしまった。会話を聞きながら隣に座る{partner}の太ももに触れてしまい、夜が待ち遠しくなった。"
        },
        "tease_spouse": {
          "text": "「うちの人は普段クールぶってるのに、夜ベッドに入ると急に甘えん坊になるんですよ」と暴露すると、{partner}が「おい、やめろよ！」と耳まで真っ赤にして抗議し、友人夫婦は大爆笑。二人の飾らない関係性を微笑ましく見守られた。",
          "diary": "お酒の勢いで{partner}の夜の甘えん坊ぶりを友人夫婦に暴露してしまった。真っ赤になって照れる{partner}が可愛くて、場も大いに盛り上がった。"
        },
        "bedroom_curiosity": {
          "text": "「えっ、レスの時はどんな風に誘い直したんですか？」と興味津々で前のめりに質問。下着の工夫や寝室の明かりの演出など、大人のリアルなノウハウに感心しながら、今夜{partner}と試してみようと密かに決意した。",
          "diary": "友人夫婦から夜のマンネリ解消や誘い方の秘訣を熱心に教えてもらった。他所の夫婦の工{partner}を聞くのは刺激的で、すごく参考になった。"
        }
      }
    },
    {
      "sub_id": "bbq_camp_night_fireside",
      "title": "キャンプの夜、焚き火を囲んで明かされる夫婦の夜の癖",
      "description": "夫婦仲間とのキャンプ場、パチパチと薪が爆ぜる焚き火のそば。心地よい夜風とアルコールに包まれる中、誰からともなく「相手のどんな仕草に一番そそられるか」「夜のベッドで言われて一番興奮した言葉」というディープで猥雑な本音トークが始まってしまい……。",
      "outcomes": {
        "open_share": {
          "text": "「お風呂上がりに、濡れた髪のまま抱きしめられると……断れなくなっちゃう」と焚き火の明かりに照らされながら囁くように打ち明けた。{partner}が息を呑んでこちらを見つめ、大人の色気漂う空気に他所の夫婦も「ご馳走様！」と囃し立てた。",
          "diary": "焚き火の前で、{partner}のどんなところにグッとくるか赤裸々に話してしまった。{partner}の熱い視線が肌に突き刺さるようで、夜風の中でも身体中が火照って仕方なかった。"
        },
        "discreet_smile": {
          "text": "他の旦那さんが「うちの妻の下着姿がさ……」と語る赤裸々なフェチズムに下唇を噛んで耐えながら、ブランケットの下でこっそり{partner}の手を握りしめた。{partner}も強く握り返してきて、夫婦二人だけの秘密の熱気が指先から伝わってきた。",
          "diary": "他の夫婦の大胆なベッドトークに当てられて、{partner}と手を繋ぎながらドキドキしていた。大人同士の赤裸々な会話は刺激が強すぎて、下腹が疼いてしまった。"
        },
        "tease_spouse": {
          "text": "「うちの旦那さんは首筋に弱いんですよ」と{partner}の襟首を後ろから指先で軽く撫で上げると、{partner}がゾクッと肩を跳ねさせて「人前でやるなよ……」と身悶えし、焚き火を囲む全員が楽しげに歓声をあげた。",
          "diary": "焚き火のそばで{partner}の弱点を暴露していじめてしまった。弱り切った{partner}の表情が色っぽくて、早く二人きりのテントに戻りたくなった。"
        },
        "bedroom_curiosity": {
          "text": "「どんな言葉を囁かれると興奮するの？」と他家夫婦の生々しいやり取りを真剣に取材するように聞き耳を立てた。耳年増のように聞き入る私を見て、{partner}が苦笑いしながら頭をぽんと撫でてくれた。",
          "diary": "他の夫婦の夜の言葉責めや興奮ポイントを熱心に聞いてしまった。夫婦それぞれに色んな愛の形があるのだと知って、なんだか妙に感心した。"
        }
      }
    },
    {
      "sub_id": "izakaya_married_dinner_secrets",
      "title": "個室居酒屋での四人飲み、下着事情とマンネリ防止の工夫",
      "description": "仕事終わりに夫婦二人で、気心の知れた同僚夫婦と合流して駅前の個室居酒屋へ。掘りごたつで足を崩して料理をつまむうち、話題は自然と「普段どんな下着をつけているか」「夫婦でどれくらいスキンシップの頻度を維持できているか」という生々しい大人の実態調査へと発展し……。",
      "outcomes": {
        "open_share": {
          "text": "「特別な日には勝負下着をつけるようにしてます……やっぱり喜んでほしいから」と照れ笑いを浮かべると、同僚の奥さんが「偉い！ うちなんて完全にお手上げだよ」と絶賛し、{partner}は誇らしげに目を細めてお酒をおかわりしていた。",
          "diary": "居酒屋で下着やスキンシップのこだわりを話した。{partner}のために綺麗でいようとする気持ちを褒められて嬉しかったし、{partner}も自慢げにしてくれて誇らしかった。"
        },
        "discreet_smile": {
          "text": "「私からは恥ずかしくて言えません……」と俯いて顔を真っ赤にしていると、{partner}が私の肩を抱いて「こいつは恥ずかしがり屋だから」と優しく庇ってくれた。その逞しい腕の温もりに守られながら、深い愛情を感じて胸が熱くなった。",
          "diary": "赤裸々な下着の話題に耐えきれず照れていたら、{partner}がそっと肩を抱いて庇ってくれた。{partner}の優しさと男らしさに惚れ直した夜だった。"
        },
        "tease_spouse": {
          "text": "「たまには新しい下着買ってくれたら、もっとサービスしてあげるのにね？」と{partner}の横腹をつつくと、「わかった、今度買いに行こうな」と{partner}が苦笑しながら約束してくれ、個室中が温かい笑いに包まれた。",
          "diary": "居酒屋で{partner}に下着のおねだりをしてからかった。冗談半分だったのに、真面目に買ってくれると言われて思わず胸がキュンとした。"
        },
        "bedroom_curiosity": {
          "text": "「マンネリ防止に旅行先で雰囲気を変えたりするの、すごく良さそう！」と同僚夫婦の体験談に目を輝かせてメモを取る勢いで聞き入った。「近いうちに私たちも温泉旅行行こうね」と{partner}と約束を交わした。",
          "diary": "他の夫婦からマンネリ解消のための旅行デートの勧めを聞いた。夫婦生活をいつまでも新鮮に保つための知恵をたくさん貰えて、とても有意義な飲み会になった。"
        }
      }
    },
    {
      "sub_id": "bedroom_after_couples_talk",
      "title": "ダブルデートからの帰宅後、寝室で確かめ合う夫婦の熱",
      "description": "他家夫婦との刺激的で赤裸々な食事会を終え、二人きりの我が家へ帰宅した夜。玄関の鍵を閉めた瞬間、さっきまでの他人の前での緊張と赤裸々な会話の余韻が解け、寝室へ向かう{partner}の足取りと視線が明らかに普段よりも重く、熱を孕んでいて……。",
      "outcomes": {
        "open_share": {
          "text": "「さっき、人前で恥ずかしいことたくさん言わせたくせに……」とベッドに腰掛けて上目遣いで{partner}を見つめると、{partner}は無言で覆いかぶさり、奪うような熱烈なキスで私の唇を塞いだ。他人の視線から解放された寝室で、互いの肌を貪るように激しく愛し合った。",
          "diary": "夫婦の集まりから帰宅した後、{partner}とベッドで激しく愛し合った。他所と比べても、やっぱり私はこの人の腕の中が世界で一番好きだと確信した。"
        },
        "discreet_smile": {
          "text": "相手夫婦の生々しい話に刺激されていたのは{partner}も同じだったようで、パジャマを脱がされる手つきがいつもより焦っていた。「君が一番可愛いよ」と耳元で囁かれながら優しく抱かれ、甘い痺れに全身を震わせた。",
          "diary": "飲み会の余韻で興奮していた{partner}に、甘く激しく求められた。他人の話を聞いた後だからこそ、自分たちだけの確かな愛の深さが身に染みた。"
        },
        "tease_spouse": {
          "text": "「ねえ、さっき言ってた『夜の甘えん坊』、今夜も見せてくれるの？」とベッドの上で両手を広げて煽ると、{partner}は「後悔するなよ」と獰猛に笑い、朝が来るまで一晩中私を離してくれなかった。",
          "diary": "飲み会でのからかいを寝室でも続けたら、{partner}に火がついてしまって大変だった。徹底的に愛されて、心地よい疲労感とともに眠りについた。"
        },
        "bedroom_curiosity": {
          "text": "「さっき聞いたやつ、ちょっと試してみてもいい……？」とおずおずと{partner}の耳元に唇を寄せて囁くと、{partner}は息を呑んで瞳を潤ませ、いつもとは少し違う刺激的な夜の探求を二人で楽しんだ。",
          "diary": "他家夫婦から教わった新しいスキンシップを寝室で試してみた。互いにドキドキしながら新しい扉を開いたようで、夫婦の絆が一段と深まった気がする。"
        }
      }
    }
  ]
});

window.defineEvent({
  "id": "marital_private_pillow_talk",
  "title": "夜の寝室、夫婦ふたりきりの赤裸々な語らい",
  "title_template": "夫婦の秘め事 〜{variation_title}〜",
  "age": [
    20,
    80
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "r18",
  "presets": [
    "partnered",
    "married"
  ],
  "weight": 20,
  "actors": {
    "spouse": {
      "source": "current_partner",
      "required": true
    }
  },
  "choices": [
    {
      "id": "choice_honest_desire",
      "stance": "honest_desire",
      "label": "「もっとこうしてほしい…」と感じやすい場所や秘密の願望を赤裸々に打ち明ける",
      "effects": {
        "intimacyNeed": 5,
        "mood": 4,
        "stress": -2
      }
    },
    {
      "id": "choice_shameful_blush",
      "stance": "shameful_blush",
      "label": "恥ずかしさに身を縮めながらも、{partner}の愛撫と問いかけに素直な吐息を漏らす",
      "effects": {
        "intimacyNeed": 4,
        "mood": 3,
        "stress": -1
      }
    },
    {
      "id": "choice_tease_seduce",
      "stance": "tease_seduce",
      "label": "「私のどこが一番興奮するの？」と{partner}の耳元に吐息を吹きかけて小悪魔に誘惑する",
      "effects": {
        "social": 3,
        "intimacyNeed": 5,
        "mood": 4
      }
    },
    {
      "id": "choice_deep_reassurance",
      "stance": "deep_reassurance",
      "label": "ふたりの身体の相性や愛の深さを優しく確かめ合い、相手のすべてを受け入れる",
      "effects": {
        "intimacyNeed": 4,
        "mood": 5,
        "stress": -3
      }
    }
  ],
  "variations": [
    {
      "sub_id": "midnight_bed_sensitive_spots",
      "title": "消灯後のベッド、互いの感じやすい場所を教え合う夜",
      "description": "薄暗い寝室の中、掛け布団の下で重なり合う素肌の熱。{partner}の大きな手のひらが滑り込んできて、私の背筋や太ももを慈しむように撫でながら「君はここを触られるのが一番弱いよね……他にはどこが好き？」と耳元で低く囁いてきて……。",
      "outcomes": {
        "honest_desire": {
          "text": "「耳の後ろと……太ももの内側を、じらしながら触られるのが好き……」と赤面しながら囁くと、{partner}の唇が耳元を甘噛みし、太ももの付け根へと指先が這い寄った。下腹の奥がじんわりと疼き、愛液が溢れ出してシーツを濡らすのを感じながら素直に身を委ねた。",
          "diary": "消灯後のベッドで、自分の感じやすい場所を{partner}に正直に教えた。言葉にする恥ずかしさに悶えたけれど、教えた通りに優しく弄ばれて身体の奥までとろけてしまった。"
        },
        "shameful_blush": {
          "text": "「言えない……恥ずかしすぎるもん……」と掛け布団に顔を埋めたが、{partner}は意地悪そうに微笑みながら下着のゴムに指を掛け、「じゃあ身体に聞いてみる」と秘所を直接探ってきた。濡れそぼった粘膜を刺激され、恥辱と快楽に下唇を噛んで喘いだ。",
          "diary": "{partner}に弱点を白状させられそうになって布団を被った。執拗に探られて結局声が出てしまい、言葉以上に素直な身体の反応を見られてしまった。"
        },
        "tease_seduce": {
          "text": "「私のことばかり聞いてないで、あなたの弱点も全部白状して？」と{partner}の胸元に指を這わせ、逞しい首筋に甘く息を吹きかけた。{partner}がゴクリと喉を鳴らして瞳を熱く濁らせ、お互いの急所を攻め合う甘い我慢比べが始まった。",
          "diary": "ベッドの中で{partner}の弱点を攻めてからかった。意地を張る{partner}の耳元に囁きかけたら、あっという間に形勢逆転されて激しく抱きしめられた。"
        },
        "deep_reassurance": {
          "text": "「あなたの手なら、どこを触られても気持ちいいよ……」と{partner}の手の甲に自らの手を重ね、穏やかに微笑みかけた。{partner}の瞳に深い愛おしさが灯り、包み込むような温かい愛撫で全身を満たされ、心から満ち足りた幸福感に浸った。",
          "diary": "{partner}に素直な愛情と感謝を伝えた。激しい快感だけでなく、皮膚一枚を通して心が溶け合うような至福の時間を過ごした。"
        }
      }
    },
    {
      "sub_id": "drinking_confession_hidden_kink",
      "title": "晩酌のほろ酔い、ずっと言えなかった秘密の性癖と願望",
      "description": "リビングの絨毯の上、二人でワインを空けた深夜。少し饒舌になった{partner}が私の膝を抱き寄せ、「実はずっと試してみたいと思ってたことがあるんだけど……引かないで聞いてくれる？」と熱を帯びた瞳で打ち明けてきて……。",
      "outcomes": {
        "honest_desire": {
          "text": "「実は私も……もっと激しく乱暴にされたり、言葉で意地悪言われたいって思ったことがあって……」とお酒の勢いで胸の奥の願望を吐露した。{partner}の呼吸が荒くなり、驚きと興奮に染まった瞳で見つめ返され、互いの秘めた欲望が完全に重なり合った。",
          "diary": "晩酌の席で、ずっと隠していた秘密の願望を{partner}に打ち明けた。引かれるどころか{partner}も強く共感してくれて、二人だけの新しい扉が開いた気がする。"
        },
        "shameful_blush": {
          "text": "{partner}が口にした生々しくもマニアックな願望に「そんなの……恥ずかしくてできないよ……」と両手で赤く染まった顔を覆った。しかし想像しただけで下着のクロッチがじわりと湿り、拒みきれない背徳的な興奮に身体が微熱を帯びていった。",
          "diary": "{partner}の意外なフェチと願望を聞かされて、顔から火が出るほど恥ずかしかった。でもそんな姿を想像して興奮している自分が一番淫らなのかもしれない。"
        },
        "tease_seduce": {
          "text": "「へえ、そんなこと考えてたんだ？ 変態さんだね」とグラスのワインを揺らしながら艶然と微笑み、{partner}の太ももを足の指先で撫で上げた。「いいよ、今夜だけなら叶えてあげてもいい」と小悪魔のように囁いて寝室へと手招きした。",
          "diary": "{partner}の告白を少しからかいながらも、受け入れてあげた。嬉しそうに目を輝かせてついてくる{partner}が可愛くて、今夜は特別に尽くしてあげようと思った。"
        },
        "deep_reassurance": {
          "text": "「夫婦なんだから、恥ずかしいことなんて何もないよ。何でも話してくれて嬉しい」と{partner}の頬を優しく包み込んだ。自分のすべてを受け入れてもらえた安堵に{partner}は涙ぐみ、固い信頼と絆で結ばれた夜となった。",
          "diary": "{partner}の秘密の願望を優しく受け止めた。夫婦だからこそ、誰にも言えない一面を分かち合える尊さを改めて実感した。"
        }
      }
    },
    {
      "sub_id": "morning_pillow_talk_frequency_love",
      "title": "休日の朝のピロートーク、夜のスキンシップの頻度と素直な甘え",
      "description": "昨夜の情交の温もりがシーツに残る休日の朝。乱れた髪のまま{partner}の胸元に寄り添っていると、{partner}が私の腰に手を回しながら「最近忙しくてあんまり出来てなかったけど……寂しくなかった？ 普段はどれくらいしたいと思ってる？」と気遣うように尋ねてきて……。",
      "outcomes": {
        "honest_desire": {
          "text": "「本当は……もっと触れてほしい。週に何回でも、あなたになら抱かれたいって思ってるよ」と{partner}の胸板に顔を擦り付けて本音を漏らした。{partner}は嬉しそうに私の顎を持ち上げ、朝陽の中で何度も唇を重ねながら熱いアンコールに応えてくれた。",
          "diary": "朝のベッドで、もっと抱いてほしいと甘えた。{partner}が愛おしそうに微笑んでぎゅっと抱きしめ直してくれて、寂しかった心が満ち足りた。"
        },
        "shameful_blush": {
          "text": "「そんなの自分から言わせないでよ……察してよ……」とシーツを胸元まで引き上げて唇を尖らせた。察しの悪い{partner}を睨みつけつつも、求めてほしい気持ちが駄々漏れになっているのを見透かされ、頭を優しく撫でられて照れ笑いした。",
          "diary": "スキンシップの頻度について聞かれ、恥ずかしくて素直になれなかった。でも{partner}には私の気持ちが全部お見通しのようで、なんだか温かい気持ちになった。"
        },
        "tease_seduce": {
          "text": "「寂しかった分、今から利子をつけてたっぷり払ってもらおうかな」と{partner}の腰に足を絡ませ、薄い掛け布団の中で素肌を擦り付けた。寝起きで敏感な{partner}の息遣いがたちまち荒くなり、朝の寝室で甘く濃厚な逢瀬が再開した。",
          "diary": "朝から{partner}をからかって誘惑してしまった。慌てる{partner}の反応が楽しくて、結局そのまま午前中ずっとベッドの中で愛し合って過ごした。"
        },
        "deep_reassurance": {
          "text": "「回数よりも、こうして抱きしめ合って言葉を交わせるだけで充分満たされてるよ」と{partner}の首元に腕を回した。{partner}は安堵の息を漏らし、心身ともに深い充足感に包まれて穏やかな休日の始まりを迎えた。",
          "diary": "{partner}の優しい気遣いに感謝を伝えた。身体だけでなく、心を通わせ合えることこそが一番の愛の証なのだと感じる。"
        }
      }
    },
    {
      "sub_id": "bath_steam_body_changes_candid",
      "title": "湯煙の立ち込める湯船、ふたりの身体の変化と変わらぬ性欲",
      "description": "久しぶりに一緒に入ったお風呂の湯船。湯煙に包まれ、温かいお湯の中で互いの素肌を密着させる。背後から抱きしめてくる{partner}の大きな手が私のお腹や胸の膨らみに触れ、「昔と少し変わったかもしれないけど、今の君の身体が一番好きだし興奮する」と耳元で囁かれて……。",
      "outcomes": {
        "honest_desire": {
          "text": "「私も……年を重ねても、あなたに触られると昔より敏感になっちゃうの」とお湯の中で{partner}の手を自分の秘所へと導いた。指先が濡れた粘膜に触れた瞬間、吐息が熱く乱れ、湯船の中で甘い水音を立てながら求め合った。",
          "diary": "お風呂の中で、{partner}の前では今でも身体が疼いてしまうことを告白した。湯気の向こうで見つめ合う{partner}の目が熱く、湯船の中で身体の芯まで溶かされた。"
        },
        "shameful_blush": {
          "text": "「もう、体型とか見ないでよ……恥ずかしい」とお湯の中に身体を沈めたが、{partner}は優しく引き寄せて肩や鎖骨に唇を落としてくれた。「どこも変わらず綺麗だよ」と甘く囁かれ、嬉しさと恥ずかしさで胸が詰まった。",
          "diary": "お風呂で自分の身体の変化を気にして照れていたら、{partner}が全身にキスをして褒めてくれた。{partner}の変わらぬ愛情に包まれて幸せでたまらなかった。"
        },
        "tease_seduce": {
          "text": "「あなたの方こそ、ちょっとお腹出てきたんじゃない？」とお腹をつついて笑った後、「でも、逞しい腕と夜の元氣さは全然変わらないね」と耳たぶを甘噛みした。{partner}が苦笑しながらも熱い視線を返してきて、風呂場が淫らな熱気で満たされた。",
          "diary": "お風呂で互いの体型の変化を笑い合いながら、夜の衰え知らずな元気を褒めてあげた。ふたりで笑い合える気兼ねなさと色気が混ざり合って、最高の時間だった。"
        },
        "deep_reassurance": {
          "text": "「これからもふたりで歳をとって、ずっとこうしてお風呂に入ろうね」と{partner}の胸に背中を預けて温もりに浸った。お湯の中で重なるふたりの鼓動が、人生を共に歩んできた深い絆を静かに語りかけていた。",
          "diary": "{partner}と湯船に浸かりながら将来の約束をした。年を重ねるごとに愛おしさが増していく、かけがえのない人生の{partner}だと再確認した。"
        }
      }
    }
  ]
});

// ============================================================================
// 結婚分岐ストーリー：ずるずると長引く同棲・浮気発覚・揺れる心・授かり婚
// ============================================================================

window.defineEvent({
  "id": "story_cohabitation_routine_rut",
  "title": "長引く同棲・すれ違う結婚のタイミング",
  "age": [
    22,
    42
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "presets": [
    "partnered"
  ],
  "requires": function (s) {
    const p = getPrimaryPartner(s);
    return !!(p && p.cohabiting && !s.flags?.married && !isScenarioActive('cohabitation_limbo', null, s));
  },
  "text": "休日の昼下がり。同棲を始めてから数年が経ち、同じベッドで目覚めて朝食を並んで食べる暮らしは、すっかり当たり前の日常になっていた。ソファに寝転がってスマートフォンを眺める{partner}の横顔。生活のリズムや家事の分担は完璧で、居心地の良さは何ものにも代えがたい。けれど、同年代の友人たちが次々と結婚し、SNSに並ぶ結婚式の写真を見るたび、私の胸の奥に冷たい焦りが差し込む。「結婚」という二文字を出そうとするたび、{partner}は「まだお金も貯まってないし」「今のままで十分幸せじゃん」とはぐらかす。家族のようになってしまった気楽さと、このままずるずると若さを浪費してしまうのではないかという底知れない不安が、重なり合って私を苛んでいた……。",
  "choices": [
    {
      "id": "choice_ask_future",
      "label": "「ねえ、私たちってこれからどうするの？」と結婚について真面目に切り出す",
      "effects": {
        "mood": -2,
        "stress": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「ねえ、私たち……いつ結婚するの？」とお茶を淹れながら静かに問いかけると、{partner}は一瞬気まずそうに視線を泳がせ、「いや、もちろん考えてるよ。でももう少し仕事が落ち着いてから……」といつもの言い訳を口にした。その曖昧な言葉に、胸の奥が冷え切っていくのを感じた。",
          "diary": "同棲中の{partner}に結婚の意志を尋ねたけれど、またはぐらかされてしまった。居心地の良さに甘えて、二人で未来から目を背けているのかもしれない。"
        }
      ]
    },
    {
      "id": "choice_comfort_silence",
      "label": "重い空気を避け、笑って美味しい夕飯の支度を始める",
      "effects": {
        "happiness": 2,
        "stress": 1
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "問い詰めたい言葉を喉の奥に飲み込み、「今日の夜ご飯、何食べたい？」と明るく声をかけた。{partner}はほっとしたように笑顔を向け、私の頭を優しく撫でてくれた。この穏やかな日常を壊すのが怖くて、私はまた一歩、決断を先延ばしにしてしまった。",
          "diary": "結婚の話を切り出せず、何事もなかったように笑って過ごした。今の幸せが壊れるのが怖くて、現実を直視できない自分が情けない。"
        }
      ]
    },
    {
      "id": "choice_skinship_distraction",
      "label": "{partner}の胸元に跨がり、言葉の代わりに熱い情欲で寂しさを埋め合わせる",
      "effects": {
        "intimacyNeed": 4,
        "mood": 3,
        "sexualEffects": {
          "desire": 4,
          "intimacy": 3
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "言葉で問い詰める代わりに、ソファに横たわる{partner}の腰に跨がり、部屋着の胸元をはだけさせて豊満な乳房を相手の胸板に押し当てた。驚く{partner}の唇を深いキスで塞ぎ、下着越しに硬く反り返るモノを秘肉に擦り付ける。言葉にならない焦りと情欲をぶつけ合うように、休日のリビングで激しく求め合った。",
          "diary": "将来の不安を誤魔化すように、{partner}と昼間から激しく肌を重ねた。身体が満たされても、心のどこかに拭えない空虚さが残っている。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_cohabitation_ultimatum",
  "title": "同棲の膠着・決断の最後通告",
  "age": [
    23,
    44
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "presets": [
    "partnered"
  ],
  "requires": function (s) {
    return isScenarioActive('cohabitation_limbo', null, s) && !s.flags?.married;
  },
  "text": "ずるずると引き延ばされてきた同棲生活。時計の針が深夜一時を回り、静まり返ったリビングで二人、冷めかけたコーヒーを前に向かい合う。親からの催促の電話、実家からの心配する声。これ以上、恋人以上・夫婦未満の曖昧な関係に留まることはできない。「私、もう待てないよ」——私の震える声に、{partner}が息を呑んで視線を上げる。この部屋を出て別れるか、それとも一生を誓い合って結婚するか。二人の関係が、ついに逃げ場のない分岐点へと追い詰められていた……。",
  "choices": [
    {
      "id": "choice_ultimatum_deadline",
      "label": "「今年中に結婚しないなら、私この部屋を出ていく」と毅然と期限を切る",
      "effects": {
        "independence": 4,
        "stress": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "私の真剣な瞳と覚悟を悟った{partner}は、しばらく黙り込んだ後、強く私の両手を握りしめてきた。「……分かった。ずっと甘えてて本当に悪かった。俺と結婚してください」。涙ぐむ相手の胸に飛び込み、長かった同棲の迷路を抜け出せた喜びに泣き崩れた。",
          "diary": "同棲の行方に最後通告を突きつけた。真剣に向き合ってくれた{partner}からついにプロポーズされ、婚約を交わすことができた。"
        }
      ]
    },
    {
      "id": "choice_breakup_end_rut",
      "label": "「もう疲れた……お互いのために、終わりにしよう」と別れを告げる",
      "effects": {
        "stress": 5,
        "independence": 5,
        "mood": -4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "優柔不断な相手の言い訳を聞くのも限界だった。「今までありがとう」と涙を拭って立ち上がり、スーツケースに自分の荷物を詰め始めた。すがりついて引き止める{partner}の腕を冷たく振りほどき、長年暮らした部屋のドアを固く閉ざした。",
          "diary": "ずるずると続いていた同棲にピリオドを打った。愛していたけれど、自分の人生を大切にするために別れを選んだ。胸が引き裂かれるように痛い。"
        }
      ]
    },
    {
      "id": "choice_accept_partnership_status_quo",
      "label": "結婚という形にこだわらず、この人との今の絆を受け入れて同棲を続ける",
      "effects": {
        "happiness": 3,
        "stress": -2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「形式なんてどうでもいい。ただ、あなたが隣にいてくれればいいよ」と微笑んで{partner}の手を握ると、相手は救われたように私の肩を抱き寄せ、何度も唇に熱いキスを落とした。法律上の夫婦という枠にとらわれず、自分たちだけの強い絆で歩む道を選んだ。",
          "diary": "結婚という形に固執するのをやめ、{partner}との同棲生活を受け入れた。形式よりも、今ここにある愛のぬくもりを信じることに決めた。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_partner_infidelity_suspicion",
  "title": "不穏な香りと深夜の通知・パートナーへの疑念",
  "age": [
    20,
    48
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "presets": [
    "partnered"
  ],
  "requires": function (s) {
    const p = getPrimaryPartner(s);
    return !!(p && !s.flags?.married && !isScenarioActive('infidelity_crisis', null, s));
  },
  "text": "最近、{partner}の帰りが遅い日が増えていた。「残業が長引いて」と疲れた顔で帰宅するものの、脱ぎ捨てられたジャケットから微かに漂う、私がつけていない甘い香水の匂い。深夜、お風呂に入っている{partner}のスマートフォンがテーブルの上で短く震える。画面に表示された見知らぬ名前と、「今日は楽しかったね♡ また会いたいな」というポップアップの通知。ドクン、と心臓が跳ね、手足の先から血の気が引いていく。ただの同僚の冗談か、それとも私の知らない誰かと肌を重ねているのか。疑心暗鬼の冷たい汗が、背筋を伝い落ちていった……。",
  "choices": [
    {
      "id": "choice_check_evidence",
      "label": "震える手でスマホを手に取り、決定的な浮気の証拠を確かめる",
      "effects": {
        "stress": 4,
        "morality": -1
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "震える指先で画面をスワイプし、メッセージのやり取りを開いた。そこには親密な写真と、昨夜の逢瀬を匂わせる生々しい言葉の数々が並んでいた。信じていたパートナーの裏切りに、呼吸が止まりそうなほどの激痛が胸を貫いた。",
          "diary": "{partner}のスマホを見てしまい、浮気の決定的な証拠を見つけてしまった。身体中が震えて、涙が止まらない。"
        }
      ]
    },
    {
      "id": "choice_pretend_caress",
      "label": "何食わぬ顔で湯上がりの相手を抱き寄せ、匂いと肌の熱を確かめる",
      "effects": {
        "intimacyNeed": 4,
        "stress": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "スマホを伏せ、湯上がりの{partner}を玄関で迎え入れて首筋に抱きついた。微かに残る他人の匂いに胸が張り裂けそうになりながら、相手の耳元に唇を寄せ「誰にも渡さないから……」と強く爪を立てて抱きしめた。",
          "diary": "{partner}への疑念が膨らむ中、強く抱きしめて匂いを確かめた。裏切られているかもしれない恐怖で、身体の奥が悲痛な疼きを訴えている。"
        }
      ]
    },
    {
      "id": "choice_confront_directly_start",
      "label": "「この通知、誰から？」とその場でスマホを突きつけて問い詰める",
      "effects": {
        "stress": 5,
        "independence": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "お風呂から上がってきた{partner}の目の前に、光る画面をそのまま突きつけた。相手の顔から一瞬で血の気が失せ、リビングが凍りつくような沈黙に包まれた。",
          "diary": "{partner}の目の前に怪しいスマホの通知を突きつけた。青ざめる相手の表情を見て、疑いが真実だと確信した。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_partner_infidelity_confrontation",
  "title": "深夜の修羅場・暴かれた裏切りと涙の告白",
  "age": [
    20,
    48
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "presets": [
    "partnered"
  ],
  "requires": function (s) {
    return isScenarioActive('infidelity_crisis', null, s);
  },
  "text": "深夜のリビング。暴かれた数々の証拠を前に、{partner}は床に膝をつき、額を擦りつけるようにして土下座していた。「魔が差したんだ……本当に一度だけなんだ！ 君を失いたくない、お願いだから許してほしい……！」必死にすがりつき、私の足首を掴んで泣きじゃくる{partner}。裏切られた怒りと悲しみ、悔しさ、そしてそれ以上に、他の身体を抱いていたこの手や唇への拭えない執着。愛憎の渦が胸の中で激しく渦巻き、私の身体は激しい怒りと背徳的な興奮に微熱を帯びて震えていた……。",
  "choices": [
    {
      "id": "choice_forgive_demand_marriage",
      "label": "「二度と裏切らないと誓うなら、結婚して一生責任を取って」と涙で迫る",
      "effects": {
        "happiness": 2,
        "stress": 3,
        "morality": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「口先だけの謝罪なんていらない。本当に後悔してるなら、結婚して一生私に尽くして」と涙を拭って見下ろすと、{partner}は涙で顔を濡らしながら「もちろん喜んで結婚する、命をかけて大切にする」と誓った。苦難と裏切りを乗り越え、二人は婚約へと歩みを進めた。",
          "diary": "{partner}の浮気を激しく糾弾した末、結婚による一生の責任を取らせる約束を取り付けた。歪な形かもしれないけれど、私たちは婚約した。"
        }
      ]
    },
    {
      "id": "choice_cut_betrayal_clean",
      "label": "「汚らわしい……二度と私の前に現れないで」と平手打ちを食らわせて破局する",
      "effects": {
        "stress": 4,
        "independence": 6,
        "happiness": -2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "すがりつく相手の頬を思い切り叩きつけた。乾いた破裂音がリビングに響く。「私の信頼を踏みにじった人を、愛し続けることなんてできない」。冷たく言い放ち、荷物をまとめて夜明けの街へと足を踏み出した。",
          "diary": "浮気をした{partner}に平手打ちを食らわせて関係を終わらせた。裏切られた傷は深いけれど、自分を安売りしない道を選べた自分を誇りたい。"
        }
      ]
    },
    {
      "id": "choice_furious_hate_passion",
      "label": "怒りと情欲を抑えきれず、相手を床に押し倒して激しい愛憎の情交に溺れる",
      "effects": {
        "intimacyNeed": 6,
        "sexualEffects": {
          "libido": 20,
          "passion": 15
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「浮気したその手で、私を満足させてみなさいよ！」と相手を床に押し倒し、涙を流しながら衣服を引き裂いた。罪悪感に喘ぐ{partner}に貪るように乱暴に貫かれ、愛液と涙を床に撒き散らしながら、朝が来るまで理性を焼き切るような愛憎の交わりを続けた。",
          "diary": "浮気の修羅場の最中、狂ったような情交に溺れてしまった。怒りと憎しみ、快楽がぐちゃぐちゃに混ざり合って、離れられない泥沼の絆を刻んでしまった。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_wavering_heart_temptation",
  "title": "夜の帰り道、引き止められる手・本人の揺れる心",
  "age": [
    22,
    42
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "presets": [
    "partnered"
  ],
  "requires": function (s) {
    const p = getPrimaryPartner(s);
    return !!(p && !s.flags?.married && !isScenarioActive('wavering_heart', null, s));
  },
  "text": "歓送迎会の帰り道、夜風が火照った頬を撫でる。他の同僚たちがタクシーに乗り込んで解散する中、残った魅力的な知人に「少し夜風に当たって歩きませんか？」と呼び止められた。街灯の明かりが遠のく路地裏の並木道。ふと立ち止まった相手が、私の手首をそっと引き寄せる。「もうすぐ{partner}と結婚するって聞いたよ。……でも、僕はずっと君のことが好きだった」至近距離で見つめ合う瞳。至近距離から伝わる大人の色気と、強引に抱きすくめられそうな緊張感。{partner}の顔が脳裏に浮かびながらも、禁断のときめきに私の下腹は甘く疼き、息が熱く詰まっていた……。",
  "choices": [
    {
      "id": "choice_resist_run_home",
      "label": "「私には{partner}がいるから」と手を振りほどき、足早に家へ帰る",
      "effects": {
        "morality": 3,
        "independence": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "相手の胸を押しのけて強く手を振りほどいた。「嬉しいけど、私には生涯を共にしたい人がいるの」。きっぱりと告げて背を向け、我が家で待つ{partner}の元へと走った。玄関を開けた時、迎えてくれた{partner}の笑顔を見て、自分の選択が正しかったと胸を撫で下ろした。",
          "diary": "他の人から告白されて心が揺れかけたけれど、きっぱりと断って{partner}の元へ帰った。誘惑を乗り越えて、{partner}への愛の深さを再認識した。"
        }
      ]
    },
    {
      "id": "choice_stolen_kiss_waver",
      "label": "拒みきれず壁際に追い詰められ、暗がりの中で激しく唇を奪われてしまう",
      "effects": {
        "stress": 3,
        "morality": -2,
        "sexualEffects": {
          "desire": 5
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "路地裏の壁に押しつけられ、奪うような熱烈な口づけに抗えなかった。絡み合う舌の生々しい湿り気と、衣服越しに撫でられる腰の熱さ。下着のクロッチがじわりと愛液で濡れていく屈辱と背徳の快感に、罪悪感を抱きながらも腰の力を抜いてしまった。",
          "diary": "路地裏で他の男性に強引にキスを奪われ、身体が感じて濡れてしまった。{partner}に申し訳ないと思いながらも、激しい背徳の興奮に胸が疼いて止まらない。"
        }
      ]
    },
    {
      "id": "choice_go_to_bar_hotel",
      "label": "酔った勢いで相手の手を握り返し、二人きりの隠れ家バーへと消える",
      "effects": {
        "morality": -3,
        "sexualEffects": {
          "libido": 15,
          "passion": 12
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "理性の糸がぷつりと切れ、相手の手を強く握り返した。薄暗いバーの個室で身体を寄せ合い、禁断の蜜月へと足を踏み入れた。",
          "diary": "結婚前の最後の自由だと自分に言い訳をして、魅力的な相手と二人きりの夜を過ごしてしまった。甘い罪の蜜に溺れていく自分が怖い。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_wavering_heart_resolution",
  "title": "罪悪感の夜と決意・本当に愛しているのは誰か",
  "age": [
    22,
    42
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "presets": [
    "partnered"
  ],
  "requires": function (s) {
    return isScenarioActive('wavering_heart', null, s);
  },
  "text": "秘密の誘惑と罪悪感の熱に苛まれた日々。夜、鍵を開けて帰宅すると、キッチンからは美味しそうな湯気と、{partner}の鼻歌が聞こえていた。「おかえり！ 今日寒かったでしょ、温かいシチュー作ったよ」エプロン姿で駆け寄ってきて、冷えた私の手を両手で包み込んで温めてくれる{partner}の純粋な眼差し。その無垢な愛情に触れた瞬間、私の中にあった邪な迷いは跡形もなく吹き飛び、目頭が熱く潤んだ。私が本当に生涯を共にしたい人は、誰なのか。答えは最初から決まっていた……。",
  "choices": [
    {
      "id": "choice_recommit_embrace",
      "label": "{partner}を強く抱きしめ、涙を流しながら「ずっと一緒にいて」と誓う",
      "effects": {
        "happiness": 5,
        "morality": 3,
        "stress": -4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "シチューの匂いに包まれる台所で、{partner}の胸に顔を埋めて声を上げて泣いた。「私、あなたとずっと一緒に生きていきたい。結婚しよう」。驚きながらも優しく抱きしめ返してくれた{partner}の温もりに包まれ、迷いを断ち切って確かな婚約を結んだ。",
          "diary": "{partner}の純粋な温もりに触れ、浮ついた迷いを完全に清算した。この人こそが私の運命の相手だと確信し、涙ながらに婚約を誓い合った。"
        }
      ]
    },
    {
      "id": "choice_confess_guilt",
      "label": "心が揺れてしまった罪悪感を正直に告白し、二人の関係を最初から築き直す",
      "effects": {
        "stress": 4,
        "morality": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "他の人に誘われて心が揺れかけたことを、包み隠さず涙ながらに打ち明けた。{partner}はショックに唇を噛みしめながらも、「正直に話してくれてありがとう。俺ももっと君を大切にするよ」と受け止めてくれた。雨降って地固まるように、二人の絆はより強固になった。",
          "diary": "迷いがあったことを{partner}に正直に告白した。痛みを分かち合い、許し合えたことで、以前よりもずっと深い信頼関係を築くことができた。"
        }
      ]
    },
    {
      "id": "choice_choose_new_partner",
      "label": "{partner}への申し訳なさに耐えかね、別れを切り出して新しい恋へ踏み出す",
      "effects": {
        "independence": 5,
        "stress": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「ごめんなさい、私……あなたの愛に相応しくない」と頭を下げて別れを切り出した。優しい{partner}をこれ以上裏切り続けないための、苦渋の決断だった。",
          "diary": "{partner}の優しさに耐えきれず、別れを選んだ。新しい道を選ぶ罪深さを背負いながら、これからの人生を進んでいく。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_premarital_pregnancy_test",
  "title": "遅れる生理と微熱・トイレの中の2本線",
  "age": [
    20,
    38
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "presets": [
    "partnered"
  ],
  "requires": function (s) {
    return s.gender === 'female' && hasMalePartner(s) && !s.flags?.married && !isScenarioActive('premarital_pregnancy', null, s) && !s.flags?.pregnant;
  },
  "text": "予定日を十日過ぎても、毎月訪れるはずの生理が来ない。身体は微熱を帯びたように火照り、朝起きると胃の奥から込み上げるような微かな吐き気。胸の乳頭が下着に擦れるだけでツンと痛む。ドラッグストアで買い求めた小さな箱。震える手でトイレの個室に閉じこもり、尿をかけたスティックを握りしめて待った三分間。判定窓にじんわりと浮かび上がってきたのは、疑いようのない鮮やかな紅い二本線。「……本当に、できちゃったんだ」まだ結婚も決まっていない中、私のお腹の奥深くに小さな新しい命が宿ったという事実に、目眩がするほどの動揺と、言いようのない愛おしさが全身を貫いた……。",
  "choices": [
    {
      "id": "choice_hold_belly_tears",
      "label": "お腹にそっと手のひらを当て、芽生えた命の温もりに涙をこぼす",
      "effects": {
        "happiness": 4,
        "stress": 2,
        "morality": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "トイレの冷たい便座の上で、下腹にそっと両手を重ねた。まだ形もわからない小さな命の鼓動が、手のひらを通して伝わってくるようだった。「私が、この子のお母さんになるんだ……」。恐怖と歓びの涙が、検査薬の上にポタポタと零れ落ちた。",
          "diary": "生理が遅れていたので検査薬を試したら、くっきりと陽性が出た。結婚前の予期せぬ妊娠に震えたけれど、お腹の命がたまらなく愛おしい。"
        }
      ]
    },
    {
      "id": "choice_worry_partner_reaction",
      "label": "{partner}が喜んでくれるか、激しい不安に駆られながら検査薬を握りしめる",
      "effects": {
        "stress": 4,
        "mood": -2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「なんて言われるだろう……困らせてしまうんじゃないか」。彼が逃げ出したらどうしようという暗い妄想が頭を駆け巡り、激しい動悸に胸が苦しくなった。けれど、どんな未来になってもこの子は守り抜くと、お腹を抱きしめた。",
          "diary": "妊娠が判明した。嬉しい気持ちと同じくらい、{partner}にどう打ち明けるべきか不安で押し潰されそうになる。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_premarital_pregnancy_announcement",
  "title": "ふたりきりの告白・「俺たち、結婚しよう！」",
  "age": [
    20,
    39
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "presets": [
    "partnered"
  ],
  "requires": function (s) {
    return isScenarioActive('premarital_pregnancy', null, s) && !s.flags?.married;
  },
  "text": "夕食の後片付けを終えた静かな夜。二人並んで座るリビングのローテーブルに、私は意を決して小さな布のポーチから検査薬を取り出し、そっと差し出した。「……実はね、赤ちゃんができたみたい」息を呑むような沈黙。判定窓の二本線を見つめる{partner}の瞳が大きく見開かれ、時間が止まったかのような数秒間が流れる。不安に押し潰されそうになり、私が唇を噛みしめて俯いた、その瞬間——。強い力で引き寄せられ、{partner}の逞しい腕の中にきつくきつく抱きしめられた。「ありがとう……！ 本当に嬉しい！ 俺たち、今すぐ結婚しよう。絶対に二人を幸せにするから！」耳元で震える{partner}の声と、私の肩を濡らす温かい涙。すべての迷いと不安が、歓喜の光の中に溶け去っていった……！",
  "choices": [
    {
      "id": "choice_shotgun_wedding_embrace",
      "label": "涙を流して抱きしめ返し、「ふたりで良いお父さんとお母さんになろうね」と誓う",
      "effects": {
        "happiness": 8,
        "stress": -5,
        "morality": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "{partner}の胸の中で声を上げて泣きじゃくった。「うん、一緒に育てようね……！」。曖昧だった将来の迷いは一瞬で吹き飛び、授かり婚としての入籍と両家への挨拶に向けて、二人の足取りは希望に満ちて動き出した。",
          "diary": "{partner}に妊娠を打ち明けると、涙を流して喜んでプロポーズしてくれた。赤ちゃんと三人で新しい家族になる。世界で一番幸せな瞬間だった。"
        }
      ]
    },
    {
      "id": "choice_passionate_reassurance_night",
      "label": "喜びを分かち合い、新しい命を宿した身体を慈しむように優しく抱きしめ合って愛を確かめる",
      "effects": {
        "happiness": 7,
        "intimacyNeed": 6,
        "sexualEffects": {
          "intimacy": 15,
          "libido": 10
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "ベッドの中で、{partner}の温かい手のひらがお腹の上へと滑り込んできた。いつもより何倍も優しく、壊れ物を扱うように全身に愛撫を施され、溢れ出る愛液と母性の喜びに身を震わせながら、深く深く愛を確かめ合った。",
          "diary": "婚約の夜、{partner}にお腹を優しく撫でられながら抱かれた。父と母になる自覚と深い愛情に包まれ、至福の眠りについた。"
        }
      ]
    }
  ]
});



