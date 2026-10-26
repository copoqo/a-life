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
  "text": "下腹にそっと手を当て、奥深くに眠る子宮の温もりを意識する。自らの身体で新しい命を宿し育むことの神秘と恐れ、そして一人の女として生き切ることの尊さ。内臓の奥がずっしりと重く脈打つのを感じる……。",
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
    "下腹の温もりに手を当てながら、母となる道と、一人の自立した女性として歩む自分の未来を想像した。どんな選択であれ、私の身体の尊厳は揺るがない。",
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
      "label": "伴侶となった{partner}に激しく身を委ねる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "純白のベールを脱ぎ捨て、伴侶となった{partner}に激しく身を委ねる。",
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
          "純白のベールを脱ぎ捨て、伴侶となった{partner}に激しく身を委ねる",
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
        "ドレスを脱がされ、素肌を晒したときの恥じらいと高揚感。伴侶となった{partner}の逞しい腕に抱かれ、奥深くまで貫かれた瞬間の痺れるような快感は、生涯忘れられない夜になった。",
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
  "text": "静かな朝の光の中で、隣でまだ温かい寝息を立てる{partner}の寝顔。誰かと肌を寄せ合って生きる確かな安心感に包まれながら、これからの二人の暮らしに想いを馳せる。",
  "variants": [
    {
      "subTitle": "二人の朝",
      "text": "静かな朝の光の中で、隣でまだ温かい寝息を立てる{partner}の寝顔。誰かと肌を寄せ合って生きる確かな安心感に包まれながら、これからの二人の暮らしに想いを馳せる。"
    },
    {
      "subTitle": "ひとりの朝",
      "text": "静かな朝の光の中で、一人で立つ台所。淹れたてのコーヒーの香りと心地よい静けさの中で、これからの自分の暮らしに想いを馳せる。"
    }
  ],
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
  "requires": function (s) {
    return !!(s.flags?.hasChildren && s.flags?.child_born && s.flags?.childBirthAge && (s.age - s.flags.childBirthAge) >= 18);
  },
  "weight": 22,
  "once": true,
  "is_major": true,
  "text": "自立の時を迎え、子供が家を出ていく日。積み込まれた引っ越し荷物、すっきりと片付いた部屋。親としての大きな務めを一段落終えた寂しさと誇り。",
  "variants": [
    {
      "subTitle": "一人暮らしへの旅立ち",
      "text": "大学への進学と一人暮らしを機に、子供が家を出ていく日。積み込まれた引っ越し荷物、すっきりと片付いた部屋。親としての大きな務めを一段落終えた寂しさと誇り。"
    },
    {
      "subTitle": "社会人としての自立",
      "text": "社会人への就職を機に、子供が家を出ていく日。積み込まれた引っ越し荷物、すっきりと片付いた部屋。立派に社会へ羽ばたいていく背中を見送る寂しさと誇り。"
    },
    {
      "subTitle": "結婚と新しい家庭",
      "text": "結婚して新しい家庭を築くことを機に、子供が家を出ていく日。積み込まれた引っ越し荷物、すっきりと片付いた部屋。我が子の幸せを心から祈りながら送り出す寂しさと誇り。"
    }
  ],
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

window.defineEvent({
  "id": "story_marriage_third_anniversary",
  "title": "結婚3年目・落ち着いた日常と深まる愛",
  "age": [
    20,
    60
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "presets": [
    "partnered"
  ],
  "requires": function (s) {
    const sp = s.bonds.find(b => b.status === 'spouse');
    return !!(sp && (s.age - (sp.marriedAge || s.age)) >= 3 && !s.flags?.marriage_3rd_anniversary_done && isScenarioActive('marriage_life', null, s));
  },
  "text": "結婚してから3年の月日が流れた記念日の夜。新婚当初のどこか落ち着かない緊張感や甘ったるい興奮は、日々の暮らしの中で、当たり前のように隣にいる穏やかで深い信頼へと形を変えていた。テーブルには少し贅沢な料理とワイン。{partner}が愛おしそうに私の手を取り、左手薬指の指輪をそっと撫でる。「もう3年か……毎日一緒にいてくれて本当にありがとう。これからもずっとよろしくね」。肌に染み付いた相手の匂いと温もりに包まれ、二人の歴史が確かに積み重なっている喜びに胸が満たされた。",
  "choices": [
    {
      "id": "choice_anniversary_passion",
      "label": "新婚の頃の甘い熱情を思い出し、互いの素肌を貪るように激しく求め合う",
      "effects": {
        "happiness": 6,
        "passion": 4,
        "sexualEffects": {
          "intimacy": 15,
          "libido": 12,
          "desire": 5
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "ベッドへと雪崩れ込み、溢れる想いをぶつけるように熱く唇を重ねた。慣れ親しんだはずの身体が、指先が触れ合うたびに激しく疼き、蜜を溢れさせていく。奥深くまで貫かれ、シーツを握りしめて激しく喘ぎながら、変わらない熱い愛を身体の芯まで刻みつけられた。",
          "diary": "結婚3年目の記念日、{partner}と新婚の頃のように激しく肌を重ねて愛を確かめ合った。年数を重ねるごとに、相手への愛しさと身体の結びつきが深まっているのを感じる。"
        }
      ]
    },
    {
      "id": "choice_anniversary_warmth",
      "label": "寄り添ってグラスを傾け、これからの二人三脚の人生を語り合う",
      "effects": {
        "happiness": 5,
        "stress": -3,
        "morality": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "ソファに深く身を沈め、{partner}の胸に頭を預けてこれまでの3年間を振り返った。喧嘩やすれ違いも乗り越えてきたからこそ、今の強い絆がある。二人でこれからの暮らしの夢を語り合い、穏やかで幸福な夜が更けていった。",
          "diary": "結婚3年目を迎え、{partner}と二人でゆっくりと語り合った。新婚の初々しさを経て、何にも代え難い人生の伴侶としての絆がしっかりと結ばれていることを実感した。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_pregnancy_discovery",
  "title": "微熱の朝と膨らむ乳房・宿った新しい命",
  "age": [
    20,
    45
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "married",
    "male_partner"
  ],
  "requires": function (s) {
    return hasSpouse(s) && hasMalePartner(s) && !s.flags?.hasChildren && !s.flags?.pregnant && !s.flags?.childfree_chosen;
  },
  "text": "ここ最近、身体の奥がずっと微熱を帯びているようにぽかぽかと熱く、朝起きると胃の腑が微かにムカムカと波打っていた。お風呂上がりに鏡を見ると、普段よりも明らかにふっくらと張り詰めた乳房。下着のレースが擦れるだけでツンと尖り、痛痒い熱を放つ乳頭。予定日を二週間も過ぎた月経。洗面所の戸を閉め、震える指先で検査薬を握りしめると、窓にはくっきりと鮮やかな二本の赤紫色のラインが浮かび上がっていた。息を呑み、下腹にそっと手のひらを重ねる。私の子宮の中に、{partner}と愛し合った証である小さな小さな命が宿っている……！ リビングでくつろぐ{partner}に駆け寄り、涙で潤んだ瞳で検査薬を差し出した。",
  "choices": [
    {
      "id": "choice_pregnancy_joy_tears",
      "label": "「私たち、お父さんとお母さんになるんだね」と抱きついて涙を流す",
      "effects": {
        "happiness": 8,
        "stress": -3,
        "morality": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "{partner}は目を見開いて検査薬を見つめた後、叫び声をあげて私をきつく抱きしめてくれた。「ありがとう……！ 本当にありがとう！」。二人で抱き合って涙を流し、新しい命を迎える喜びに胸を震わせた。",
          "diary": "妊娠が判明した。{partner}に伝えると、涙を流して全身で喜んでくれた。私のお腹の中に、二人のかけがえのない命が息づいている。"
        }
      ]
    },
    {
      "id": "choice_pregnancy_caress_bliss",
      "label": "母となる身体の変化を愛おしむように、張った胸とお腹を夫の手で優しく撫でてもらう",
      "effects": {
        "happiness": 7,
        "intimacyNeed": 5,
        "sexualEffects": {
          "intimacy": 12,
          "libido": 8
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "ソファに並んで腰掛け、{partner}の大きく温かい手が私のパジャマの下へと滑り込んできた。熱く張った乳房を慈しむように手のひらで包まれ、下腹を撫でられると、身体の芯から甘い疼きと母性の歓喜が溢れ出した。「絶対に二人で大切に守ろうね」と交わしたキスの甘さに、うっとりと身を委ねた。",
          "diary": "妊娠を打ち明けると、{partner}は愛おしそうに私の胸とお腹を優しく撫でてくれた。母になる身体の神秘と幸福な温もりに包まれ、一生忘れられない夜になった。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_childbirth_miracle",
  "title": "陣痛の嵐と最初の産声・ふたりの愛の結晶",
  "age": [
    20,
    46
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "partnered"
  ],
  "requires": function (s) {
    return !!s.flags?.pregnant;
  },
  "text": "深夜、下腹部を締め上げるような鋭い激痛と破水。病院の分娩台の上で、私は全身に玉の汗をびっしりと浮かべ、呼吸を荒げていた。「息を吸って、長く吐いて！」。助産師の声に合わせ、陣痛の大きな波が押し寄せるたびに、奥歯を噛みしめて下腹に渾身の力を込める。隣で私の右手を両手できつく握りしめる{partner}の手は、痛ましいほどに震え、汗と涙で濡れていた。「頑張れ、もうすぐ頭が見えてるぞ！ 頑張れ……！」。激痛で引き裂かれそうな骨盤の奥から、熱くぬめりけのある大きな塊が滑り出していく感覚。その瞬間——「オギャァ！ オギャァ！」と、張り詰めた静寂を破って高らかな産声が分娩室いっぱいに響き渡った……！",
  "choices": [
    {
      "id": "choice_childbirth_hold_baby",
      "label": "胸の上に置かれた赤ちゃんの柔らかな体温と匂いに、涙を流して感謝を告げる",
      "effects": {
        "happiness": 10,
        "stress": -5,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "助産師の手によって、臍の緒を切られたばかりの我が子が私の胸元へと抱き上げられた。湿り気を帯びた柔らかな産毛、ミルクのような甘い匂い、小さな身体から放たれる熱い命の鼓動。極限の疲労が歓喜の涙となって溢れ、「生まれてきてくれてありがとう……」と掠れた声で囁いた。",
          "diary": "元気な赤ちゃんを出産した。胸の上に置かれた小さな体温を感じた瞬間、涙が止まらなかった。命がけでこの世に送り出した我が子。私の宝物。"
        }
      ]
    },
    {
      "id": "choice_childbirth_husband_hand",
      "label": "泣き崩れる{partner}と額を合わせ、愛の結晶の誕生をふたりで分かち合う",
      "effects": {
        "happiness": 9,
        "passion": 3,
        "morality": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "{partner}は分娩台の脇で子供の顔を見つめ、大粒の涙をボロボロとこぼしながら私の額に優しく唇を落とした。「本当によく頑張ってくれた……二人とも、世界で一番愛してる」。二人の愛が形になった奇跡に、これ以上ない至福が満ちていた。",
          "diary": "夫に手を握られながら我が子を産み落とした。泣きじゃくりながら感謝を伝えてくれた{partner}の顔を見て、この人と夫婦になれて本当に良かったと心から実感した。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_tender_days",
  "title": "深夜の授乳と寄り添う寝息・母としての目覚め",
  "age": [
    20,
    50
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    return !!(s.flags?.hasChildren && s.flags?.child_born && !s.flags?.seen_parenting_story);
  },
  "text": "夜中の二時。暗い寝室に響く赤ちゃんの泣き声で目を覚ます。まだ重い身体を起こし、薄暗いリビングのソファに腰掛けてパジャマの前ボタンを外す。母乳でパンパンに張った乳房を露わにし、ぐずる我が子の小さな口へと乳頭を含ませる。ちゅく……ちゅく……と夢中で吸い付かれるたび、乳腺の奥からツーんと痛痒い快感が全身を駆け抜け、下腹部がじわりと熱く潤んでいく。母性としての深い安らぎと、身体の奥が疼くような生々しい感覚が混ざり合う、甘く切ないひととき。「起きてたの？ 代わろうか」。寝室から起きてきた{partner}が、背中から私を包み込むようにそっと抱き寄せてくれた……。",
  "choices": [
    {
      "id": "choice_parenting_nurse_bliss",
      "label": "我が子の吸い付くぬくもりに身を委ね、母としての幸福な繋がりに胸を満たす",
      "effects": {
        "happiness": 6,
        "stress": -3,
        "selfKnowledge": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "小さな手でおっぱいをぎゅっと握りしめながら、夢中で母乳を飲む我が子の頭を優しく撫でた。やがて満腹になって満足そうに吐息を漏らす寝顔に、寝不足の疲労も一瞬で吹き飛んでいった。",
          "diary": "深夜の授乳。静まり返った部屋で我が子におっぱいを吸わせていると、何ものにも代え難い愛おしさと生命の繋がりを感じる。母になれた喜びを噛み締める毎日。"
        }
      ]
    },
    {
      "id": "choice_parenting_husband_embrace",
      "label": "{partner}の胸に背中を預け、育児の合間に夫の体温と愛撫で温められる",
      "effects": {
        "happiness": 7,
        "intimacyNeed": 4,
        "sexualEffects": {
          "intimacy": 10,
          "libido": 6
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "赤ちゃんが眠りについた後、{partner}が授乳で火照った私の胸元にそっと優しく唇を落としてくれた。「毎日お疲れ様。すごく綺麗なお母さんになったね」。父親と母親になりながらも、男と女として求め合える愛の深さに、甘やかな吐息が漏れた。",
          "diary": "授乳の後、{partner}が優しく抱きしめて労ってくれた。親としての責任を共に背負いながら、夫婦としての愛もますます深まっている。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_first_steps",
  "title": "初めての一歩と家族の温もり・小さな成長の奇跡",
  "age": [
    21,
    52
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 1 && childAge <= 3);
  },
  "weight": 35,
  "once": true,
  "text": "リビングの柔らかな日差しの中、畳に手をついて立ち上がった我が子。小さくぷくぷくとした両手を広げ、ふらつきながらも前へと小さな足を一歩、また一歩と踏み出す。向かい側で両手を広げてしゃがむ{partner}と、息を呑んで見守る私。「おいで、上手だよ！」。満面の笑顔でバランスを崩しながら私の腕の中へと倒れ込んできた我が子の、甘いミルクと汗の混ざった匂い。小さな背中をきつく抱きしめると、成長の眩しさに胸の奥が熱く潤んだ。",
  "choices": [
    {
      "id": "choice_parenting_first_steps_hug",
      "label": "我が子を高く抱き上げ、{partner}と顔を見合わせて歓喜の涙を零す",
      "effects": {
        "happiness": 7,
        "stress": -3,
        "morality": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "我が子を高く抱き上げると、鈴を転がすような笑い声をあげて喜んだ。隣に並んだ{partner}が二人ごと包み込むように大きな腕を回してくれ、家族がひとつになった確かな幸福に包まれた。",
          "diary": "我が子が初めて自分の足で歩いた！ よちよち歩きで胸に飛び込んできたときの温もりと重み。家族みんなで大はしゃぎした、一生の思い出の一日。"
        }
      ]
    },
    {
      "id": "choice_parenting_first_steps_bath",
      "label": "お風呂上がり、バスタオルに包んだ我が子を慈しみながら夫と成長を語り合う",
      "effects": {
        "happiness": 6,
        "intimacyNeed": 3,
        "selfKnowledge": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "お風呂上がりの温かな湯気の中、パウダーの香る柔らかな肌を丁寧に拭いて服を着せる。すやすやと寝息を立て始めた後、{partner}と並んで温かいお茶を飲み、「大きくなったね」と微笑み合った。",
          "diary": "子どもの成長は本当にあっという間。一歩一歩進んでいく小さな背中を見つめながら、母親としての愛情と誇りが日増しに深まっている。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_nursery_morning",
  "title": "初めての登園と小さな背中・離れる寂しさと母の誇り",
  "age": [
    23,
    55
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 3 && childAge <= 5);
  },
  "weight": 32,
  "once": true,
  "text": "桜のつぼみがほころぶ春の朝。身体よりも少し大きな通園リュックを背負い、真新しい名札をつけた我が子。園の玄関前まで来ると、急に不安になったのか私のスカートの裾をぎゅっと握りしめて離さず、大きな瞳に涙をいっぱいためた。「ママ、いかないで……」。しゃがんで小さな両手を包み込み、優しく涙を拭う。いつまでも胸に抱きとめておきたい愛おしさと、外の世界へと羽ばたいていく背中を見守る親の覚悟が交錯する。",
  "choices": [
    {
      "id": "choice_parenting_nursery_encourage",
      "label": "膝をついてぎゅっと抱きしめ、「夕方一番に迎えに来るね」と笑顔で送り出す",
      "effects": {
        "happiness": 6,
        "selfEfficacy": 3,
        "stress": -2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「今日はいっぱいお友達と遊んでおいでね」。優しく頭を撫でて送り出すと、我が子は涙を拭って小さく手を振って園舎へと入っていった。夕方、門をくぐると満面の笑みで走って抱きついてきた我が子の温かさに、目頭が熱くなった。",
          "diary": "初めての集団生活への第一歩。涙をこらえて園へと入っていく我が子の後ろ姿に、胸が締めつけられるような愛おしさと誇らしさを覚えた。"
        }
      ]
    },
    {
      "id": "choice_parenting_nursery_couple_walk",
      "label": "{partner}と手を繋いで帰り道を歩き、少しずつ手が離れていく切なさを分かち合う",
      "effects": {
        "happiness": 5,
        "passion": 2,
        "morality": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "園からの帰り道、久しぶりに{partner}と二人きりで並んで歩いた。「あんなに小さかったのにな」と呟く夫の手が私の指をそっと握りしめる。子育ての節目を共に越えてきた夫婦の絆が、じんわりと胸に染み渡った。",
          "diary": "子どもの登園を見届けた後、{partner}と二人でしみじみと語り合った。親としての役割が増えても、こうして寄り添い合えるパートナーがいることの尊さを実感する。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_fever_midnight",
  "title": "真夜中の急な高熱と冷たい氷枕・夫婦で祈り明かす夜",
  "age": [
    22,
    58
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 1 && childAge <= 8);
  },
  "weight": 30,
  "once": true,
  "text": "深夜、荒い呼吸とぐずる声で跳ね起きる。寝室の布団に横たわる我が子の額に手を当てると、火のように熱く、首筋には冷たい汗がびっしりと滲んでいた。体温計の数字は39度を超えている。夜間救急の案内を調べ、氷枕や冷たいタオルを用意する私の手は、心配のあまり小刻みに震えていた。「大丈夫、僕がタオルを替えるよ。君は身体を冷やしてあげて」。起きてきた{partner}が落ち着いた声で声をかけ、素早く看病の体制を整えてくれた……。",
  "choices": [
    {
      "id": "choice_parenting_fever_hold_hand",
      "label": "朝まで小さな手を握り締め、母としての深い祈りを込めて看病を続ける",
      "effects": {
        "happiness": 4,
        "stress": -2,
        "morality": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "冷たいタオルをこまめに替え、枕元で子守唄を小さく口ずさみながら手を握り続けた。明け方、ようやく熱が下がって穏やかな呼吸に戻った我が子の寝顔を見て、全身の力が抜けて涙がこぼれ落ちた。",
          "diary": "急な高熱に慌てた夜だったけれど、無事に平熱に戻ってホッとした。代わってあげられない苦しさを思うと胸が張り裂けそうだった。健康のありがたさを痛感。"
        }
      ]
    },
    {
      "id": "choice_parenting_fever_couple_support",
      "label": "{partner}と交代で看病し合い、支え合える家族の強さを噛み締める",
      "effects": {
        "happiness": 5,
        "passion": 3,
        "selfEfficacy": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "{partner}が温かい飲み物を淹れて私の肩にブランケットを掛けてくれた。二人で手を取り合い、夜明けの光が部屋に差し込むまで寄り添いながら我が子を守り抜いた。この人と一緒だからこそ乗り越えられると強く確信した。",
          "diary": "夜通しの看病で疲れたけれど、{partner}の頼もしさと優しさに心から救われた。家族全員で助け合って生きていく実感がある。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_elementary_sports_day",
  "title": "砂埃の運動会とお弁当・トラックを駆け抜ける小さな背中",
  "age": [
    26,
    60
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 6 && childAge <= 10);
  },
  "weight": 30,
  "once": true,
  "text": "青空に万国旗がたなびく秋の小学校の校庭。早朝から唐揚げや甘い卵焼きを重箱に詰め、家族みんなで出かけた運動会。トラックの白線の前、体操着のゼッケンをつけた我が子が、緊張で唇を引き結びながらスタートの合図を待っている。ピストルの号音とともに、砂埃を上げて力いっぱい地面を蹴る我が子。「行けーっ！ 頑張れ！」。隣の{partner}と声を揃えて叫び、無我夢中で手を振り続ける。",
  "choices": [
    {
      "id": "choice_parenting_sports_day_cheer",
      "label": "ゴールまで走り抜いた我が子に駆け寄り、抱きしめて健闘を称える",
      "effects": {
        "happiness": 8,
        "stress": -3,
        "selfEfficacy": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "汗びっしょりで走り切った我が子が、満面の笑みで胸に飛び込んできた。「見ててくれた！？」。誇らしげに胸を張る我が子の頭を両手で撫で、目頭を熱くさせながら最高の一日を分かち合った。",
          "diary": "小学校の運動会。転んでも諦めずに最後まで走り切った我が子の姿に、思わず涙が出そうになった。お弁当を美味しそうに平らげる笑顔が眩しい。"
        }
      ]
    },
    {
      "id": "choice_parenting_sports_day_lunch",
      "label": "{partner}とレジャーシートで肩を並べ、家族で囲むお昼の団らんを満喫する",
      "effects": {
        "happiness": 7,
        "passion": 2,
        "morality": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "木陰のレジャーシートで家族三人車座になってお弁当を広げた。我が子の頑張りを笑顔で褒め称え合う{partner}の瞳の優しさに、かけがえのない温かな日常の幸福を噛み締めた。",
          "diary": "晴天の運動会、家族みんなでお弁当を囲んだひとときは宝物。子どもがもたらしてくれる彩りと笑顔の多さに、感謝が尽きない。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_couple_reconnect",
  "title": "子供が眠りについた寝室と・母から女へと戻る密やかな夜",
  "age": [
    24,
    50
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children",
    "partnered"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 2 && childAge <= 12);
  },
  "weight": 28,
  "text": "一日中走り回り、絵本を読み聞かせてようやく安らかな寝息を立てた子供部屋。明かりを消してそっと引き戸を閉め、薄暗いリビングへと戻ると、{partner}がソファに腰掛けて待っていた。「お疲れ様、今日も一日頑張ったね」。背後からそっと抱き寄せられ、首筋に触れる熱い吐息と唇。昼間の「お母さん」としての気を張り詰めた日常から、一人の愛される「女」へと解き放たれていく甘美な弛緩。子供の気配がすぐ近くにある背徳感と、飢えていた素肌の熱情が下腹の奥をじわりと濡らし始める……。",
  "choices": [
    {
      "id": "choice_parenting_couple_secret_passion",
      "label": "声を押し殺しながら{partner}に身を委ね、濃密な愛撫と熱情に溺れる",
      "effects": {
        "happiness": 7,
        "intimacyNeed": 5,
        "sexualEffects": {
          "intimacy": 12,
          "libido": 8
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "隣の部屋に声が漏れないよう、{partner}の肩に口唇を押し当てて激しい快感を呑み込んだ。奥深くまで愛液で満たされ、夫婦として、そして男と女として求め合える悦びに、爪先まで甘く痺れる絶頂を迎えた。",
          "diary": "子供が眠った後の密やかな逢瀬。母としての責任を忘れ、女として夫に愛される時間の濃厚な甘さに、身体の芯まで満たされた。"
        }
      ]
    },
    {
      "id": "choice_parenting_couple_quiet_wine",
      "label": "二人で静かにワインを傾け、親としての労いと夫婦の愛を確かめ合う",
      "effects": {
        "happiness": 6,
        "stress": -4,
        "morality": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "グラスを小さく合わせ、今日あった子供の可愛い仕草を語り合いながら笑い合った。優しく手を握り合い、肌の温もりを分かち合いながら眠りにつく時間は、何ものにも代え難い安らぎだった。",
          "diary": "夜の静寂の中で{partner}と二人でゆっくり晩酌。忙しい育児の日々の中でも、お互いを思いやり慈しむ時間を大切にしていきたい。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_puberty_conflict",
  "title": "閉ざされた部屋のドアと背丈比べ・思春期の葛藤を見守る祈り",
  "age": [
    32,
    65
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 12 && childAge <= 16);
  },
  "weight": 30,
  "once": true,
  "text": "いつの間にか私の背丈を追い越し、見上げるほどに大きくなった我が子。かつてのように甘えてくることはなくなり、「うるさいな、ノックくらいしてよ！」と乱暴に部屋のドアを閉められることが増えた。リビングに残された静けさの中、柱に残る幼い頃の背比べの傷跡をそっと撫でる。親の手を振りほどいて自立しようともがく我が子の痛みと、手を離していかなければならない母としての寂しさに、胸の奥がきゅっと疼く。",
  "choices": [
    {
      "id": "choice_parenting_puberty_snack",
      "label": "無理に踏み込まず、好物の夜食を作ってドアの前にそっと届ける",
      "effects": {
        "happiness": 5,
        "morality": 4,
        "selfEfficacy": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "温かいおにぎりとスープをお盆に乗せ、部屋の前に静かに置いた。翌朝、綺麗に空になったお皿と「ごちそうさま」の小さなメモを見つけ、言葉には出せない不器用な優しさに涙が滲んだ。",
          "diary": "思春期真っ只中の我が子。ぶつかることも多いけれど、距離を保ちながら信じて見守ることが今の私の役目なのだと言い聞かせている。"
        }
      ]
    },
    {
      "id": "choice_parenting_puberty_couple_talk",
      "label": "{partner}と夜遅くまで相談し、子供の自立を夫婦で支える覚悟を固める",
      "effects": {
        "happiness": 5,
        "passion": 3,
        "stress": -2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "リビングで{partner}が温かい紅茶を淹れてくれ、夫婦で向き合って話をした。「あいつも自分と戦ってるんだよ。焦らず見守ろう」。頼もしい夫の言葉に、張り詰めていた心がすっと軽くなった。",
          "diary": "我が子の反抗期に戸惑う日々だが、{partner}がしっかりと話を聞いて支えてくれる。夫婦でチームとして子供の成長を支えている実感がある。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_exam_gratitude",
  "title": "春の旅立ちと卒業証書・食卓に置かれた『ありがとう』",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 17 && childAge <= 19);
  },
  "weight": 32,
  "once": true,
  "text": "長かった受験や進路の試練を乗り越え、満開の桜の下で迎えた卒業式。大人びた表情で式服を着こなし、晴れやかな笑顔で帰宅した我が子。家族で囲む祝いの食卓の片隅で、少し照れくさそうに一通の封筒を差し出された。「これ……お父さんとお母さんに」。震える手で開いた便箋には、幼い頃の思い出と、反抗してしまった日の謝罪、そして『今まで育ててくれて、本当にありがとう』の文字。これまでの長い年月、眠れぬ夜や数々の苦労が、温かな涙となって一気に洗い流されていく。",
  "choices": [
    {
      "id": "choice_parenting_exam_gratitude_embrace",
      "label": "溢れ出る涙を拭いながら我が子を抱きしめ、旅立つ未来を心から祝福する",
      "effects": {
        "happiness": 10,
        "stress": -5,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「立派に育ってくれてありがとう……」。手紙を胸に抱きしめ、涙を流しながら我が子の肩を抱いた。あんなに小さかった手のひらが、今は逞しく温かく、親としての役目を果たした歓喜に満たされた。",
          "diary": "我が子の卒業と進路決定。感謝の手紙を受け取った瞬間、涙が止まらなかった。命をかけて育ててきた時間は、私の人生の何よりの宝物。"
        }
      ]
    },
    {
      "id": "choice_parenting_exam_gratitude_toast",
      "label": "{partner}と肩を寄せ合って祝杯をあげ、二人で紡いできた子育ての軌跡を称え合う",
      "effects": {
        "happiness": 9,
        "passion": 4,
        "morality": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "我が子が眠りについた後、{partner}と二人で特別なワインを開けた。「本当によくやってくれたね、お疲れ様」とグラスを合わせ、寄り添い合う夫婦の絆は、誰よりも深く固いものになっていた。",
          "diary": "我が子の巣立ちを前に、{partner}と二人で祝杯を交わした。二人で手を取り合って駆け抜けた子育ての歳月。この人と家族になれて本当に良かった。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_first_words",
  "title": "初めて呼んでくれた日・「ママ」の甘い響きと胸の震え",
  "age": [
    21,
    52
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 1 && childAge <= 2);
  },
  "weight": 32,
  "once": true,
  "text": "ぽかぽかと暖かい日差しが差し込むリビング。おもちゃで遊んでいた我が子が、ふと私のスカートを引っ張り、見上げてきた。小さく湿った唇を一生懸命に尖らせ、たどたどしく放たれた声——「ま……まま！」。その瞬間、全身に電流が走ったように心臓が跳ね上がり、胸の奥から熱いものがこみ上げて涙で視界が滲んだ。世界でたった一つの、私を母親と呼ぶ愛おしい声。",
  "choices": [
    {
      "id": "choice_parenting_first_words_embrace",
      "label": "我が子を胸にかき抱き、「そうだよ、ママだよ」と涙ぐみながら応える",
      "effects": {
        "happiness": 8,
        "stress": -4,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "小さな身体を抱きしめると、我が子は嬉しそうに「まま！ まま！」と何度も繰り返して私の首に小さな腕を回してくれた。命を懸けて産んだ我が子と心が完全に結ばれた喜びに、いつまでも涙が止まらなかった。",
          "diary": "我が子が初めて「ママ」と呼んでくれた！ 澄んだ小さな声で呼ばれた瞬間、胸が震えて涙が溢れた。母親になれた幸せを全身で噛み締めた。"
        }
      ]
    },
    {
      "id": "choice_parenting_first_words_husband_share",
      "label": "{partner}を慌てて呼び、「パパも呼んでみて！」と家族みんなで大はしゃぎする",
      "effects": {
        "happiness": 7,
        "passion": 3,
        "morality": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "仕事部屋から飛んできた{partner}が「パパは！？ パパって言える！？」と必死でアピールし、我が子が不思議そうに首を傾げて笑い声がリビングに響き渡った。家族のあたたかい絆が満ちていた。",
          "diary": "我が子の初めてのおしゃべりに、夫婦二人で大興奮した一日。家族三人で笑い転げたこの時間を、生涯ずっと忘れたくない。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_weaning_night",
  "title": "卒乳の夜と張る乳房・赤ちゃんを卒業する寂しさと夫の労い",
  "age": [
    21,
    53
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children",
    "partnered"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 1 && childAge <= 2);
  },
  "weight": 30,
  "once": true,
  "text": "我が子の卒乳を決意した夜。おっぱいを欲しがって泣き叫ぶ我が子を抱きしめ、トントンと背中を叩き続けてようやく寝かしつけた。だが私の身体はまだ母乳を作り続け、乳房はカチカチに張って熱を持ち、下着が擦れるだけでズキズキと痛む。赤ちゃんを卒業していく我が子の成長への誇らしさと、もう二度とおっぱいを吸ってもらえない猛烈な寂しさ。暗い寝室で一人涙をこぼしていると、{partner}が冷たいタオルを持って静かに寄り添ってくれた……。",
  "choices": [
    {
      "id": "choice_parenting_weaning_husband_care",
      "label": "{partner}の大きな手で熱く張る胸を冷やしてもらい、労いの抱擁に身を預ける",
      "effects": {
        "happiness": 7,
        "intimacyNeed": 4,
        "stress": -3,
        "sexualEffects": {
          "intimacy": 8
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "{partner}が冷たいタオルを優しく私の張った胸に当て、痛む身体を慈しむように包み込んでくれた。「本当によく頑張ったね、ありがとう」。夫の逞しい胸元で泣きじゃくるうちに、母としての激闘を称えられた充足感が胸に広がった。",
          "diary": "卒乳の夜。張って痛む胸を{partner}が優しく冷やして抱きしめてくれた。授乳の日々が終わる寂しさと、支えてくれた夫への感謝が入り混じる忘れられない夜。"
        }
      ]
    },
    {
      "id": "choice_parenting_weaning_watch_sleeping",
      "label": "涙を拭ってすやすや眠る我が子の額を撫で、健やかな自立を祝福する",
      "effects": {
        "happiness": 6,
        "selfKnowledge": 3,
        "morality": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "泣き疲れて満足そうに息を吐く我が子の小さな寝顔を見つめた。私の母乳でここまで大きくなってくれた小さな身体。母としての役割が一つ次のステージへ進んだ誇らしさに、静かに手を合わせた。",
          "diary": "卒乳という親子の大きな節目。自分の身体から命を育てる時期を終え、一歩ずつ自立していく我が子の背中を頼もしく思う。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_terrible_twos",
  "title": "床に突っ伏すイヤイヤ期・途方に暮れる夕暮れと夫婦の連携",
  "age": [
    22,
    54
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 2 && childAge <= 3);
  },
  "weight": 28,
  "once": true,
  "text": "「いや！ いやっ！ ぜんぶだめ！」。スーパーの買い物帰り、歩道で突然始まったイヤイヤの嵐。靴を脱ぎ捨てて地面に突っ伏し、何を言っても泣き喚いて手足をバタつかせる我が子。周囲の通行人の視線が突き刺さり、抱き上げようとしてもエビ反りになって抵抗される。心身ともに疲弊し、路上で思わず立ち尽くして泣きそうになったその時、駆けつけてくれた{partner}が我が子を軽々と抱き上げてくれた……。",
  "choices": [
    {
      "id": "choice_parenting_terrible_twos_husband_support",
      "label": "{partner}に我が子を任せて深呼吸し、一人で抱え込まない大切さを学ぶ",
      "effects": {
        "happiness": 6,
        "stress": -4,
        "selfEfficacy": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "{partner}が「お母さん疲れちゃったぞ、今日はパパが抱っこマンだ」とおどけて我が子をあやすと、子供も拍子抜けしたように泣き止んだ。「大丈夫、君は十分頑張ってるよ」という夫の言葉に、肩の荷がふっと軽くなった。",
          "diary": "激しいイヤイヤ期に心が折れかけたけれど、{partner}が救ってくれた。完璧な親になろうと焦らず、二人で支え合って乗り越えていけばいいと思えた。"
        }
      ]
    },
    {
      "id": "choice_parenting_terrible_twos_patient_hug",
      "label": "しゃがんで子どもの目線に立ち、気持ちを受け止めてぎゅっと抱きしめる",
      "effects": {
        "happiness": 5,
        "morality": 4,
        "selfKnowledge": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "地面にしゃがみ、「思い通りにならなくて悔しかったね」と優しく抱きしめ続けた。やがて落ち着いてしがみついてきた我が子の温もりに、自分の自我を主張できるようになった成長の証なのだと愛おしさが湧いた。",
          "diary": "感情をぶつけてくる我が子に根気強く寄り添った。思い通りにならない苦しさと向き合うことも、親子の尊い成長の過程なのだと実感。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_shichigosan",
  "title": "七五三の晴れ着と千歳飴・健やかな成長を祈る神社の杜",
  "age": [
    24,
    57
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && (childAge === 3 || childAge === 5 || childAge === 7));
  },
  "weight": 30,
  "once": true,
  "text": "秋晴れの澄んだ青空の下、神社の境内を彩る鮮やかな紅葉。慣れない着物や袴を身にまとい、少し緊張した面持ちで砂利道を歩く我が子。小さな手には長細い千歳飴の袋。朱塗りの鳥居をくぐり、手を清めて拝殿へと進む。生まれた日の小さかった我が子の姿が脳裏をよぎり、こうして晴れ着を着て元気に歩いている奇跡に胸が熱くなる。",
  "choices": [
    {
      "id": "choice_parenting_shichigosan_photo_pray",
      "label": "{partner}と並んで柏手を打ち、我が子の無病息災と幸福を心から祈願する",
      "effects": {
        "happiness": 8,
        "stress": -3,
        "morality": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「元気に大きくなってくれてありがとう」。{partner}と二人で深く頭を下げ、神前に感謝を捧げた。境内での家族写真には、千歳飴を掲げて満面の笑顔を浮かべる我が子と、幸せそうに寄り添う私たちの姿が鮮やかに残った。",
          "diary": "七五三の参拝。晴れ着姿の我が子の眩しさに涙が出そうになった。ここまで大きな病気もなく育ってくれたことに心から感謝した。"
        }
      ]
    },
    {
      "id": "choice_parenting_shichigosan_praise_kimono",
      "label": "着物の乱れを優しく直しながら、「世界で一番似合ってるよ」と褒めちぎる",
      "effects": {
        "happiness": 7,
        "selfEfficacy": 3,
        "intimacyNeed": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "我が子の帯を整えて髪飾りを直してあげると、照れくさそうに「お姫様（お殿様）みたい？」と微笑んだ。その誇らしげな笑顔に、家族みんなの心が温かい光で満たされた。",
          "diary": "晴れ着を着ておすまし顔の我が子が本当に愛らしかった。伝統の節目を迎えるたびに、家族の絆が一段と深まっていくのを感じる。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_bedtime_story",
  "title": "薄明かりの絵本の時間・小さな指先が握る手のひらのぬくもり",
  "age": [
    23,
    58
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 3 && childAge <= 7);
  },
  "weight": 26,
  "text": "間接照明の温かいオレンジ色の光が照らす寝室。布団に並んで横たわり、広げた絵本を穏やかな声で読み聞かせる。物語が進むにつれて我が子のまぶたが次第にとろりと重くなり、小さな指先が私のパジャマの袖や指をぎゅっと握りしめてくる。やがて本を閉じると、規則正しいすやすやという寝息。小さな胸の上下を見つめながら、この無防備な命を全身全霊で守り抜く誓いを新たにする。",
  "choices": [
    {
      "id": "choice_parenting_bedtime_kiss",
      "label": "我が子の額にそっと唇を寄せ、優しい夢を見るよう祈って寝かしつける",
      "effects": {
        "happiness": 6,
        "stress": -4,
        "selfKnowledge": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "柔らかな髪に優しく口づけを落とし、布団を肩まで掛け直した。小さな温もりが手のひらに残る静寂の夜、母としての穏やかで揺るぎない幸福に心が洗われた。",
          "diary": "絵本を読み聞かせながら寝かしつけた夜。私の手をぎゅっと握ったまま眠る我が子のぬくもりに、日中の疲れがすべて溶けていくようだった。"
        }
      ]
    },
    {
      "id": "choice_parenting_bedtime_whisper_couple",
      "label": "寝室をそっと抜け出し、リビングで待つ{partner}と今日の子どもの可愛い仕草を語り合う",
      "effects": {
        "happiness": 7,
        "passion": 3,
        "intimacyNeed": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "明かりを落としたリビングへ行くと、{partner}が温かいハーブティーを差し出してくれた。「寝た？」「うん、ぐっすり」。二人で声を潜めながら子供の愛らしい姿を語り合い、肩を寄せて心を通わせた。",
          "diary": "子供が寝静まった後の静かなリビングで{partner}とお茶を飲んだ。日々の小さな成長を二人で喜び合えるパートナーがいる幸せを噛み締める。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_summer_sea",
  "title": "初めての海と寄せる白波・波打ち際の笑い声と夏の記憶",
  "age": [
    25,
    60
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 4 && childAge <= 10);
  },
  "weight": 28,
  "once": true,
  "text": "どこまでも広がる真っ青な海と白い雲。浮き輪を大事そうに抱え、寄せる白波に恐る恐る小さな足を浸す我が子。「つめたい！ でも気持ちいい！」。波が引くたびに砂に足を取られて大笑いし、{partner}の逞しい肩の上に担ぎ上げられて水しぶきを浴びてはしゃぐ。潮風の匂い、肌にじんわりと残る心地よい日焼けの熱、家族みんなの弾けるような笑顔が、夏の光の中にきらきらと輝いていた。",
  "choices": [
    {
      "id": "choice_parenting_summer_sea_play",
      "label": "家族三人で手を繋いで波打ち際を駆け回り、水しぶきをかけ合って遊ぶ",
      "effects": {
        "happiness": 8,
        "stress": -5,
        "morality": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "三人で手を繋いで大きな波をジャンプして飛び越えた。帰りの車の中、後部座席で貝殻を握りしめたまま泥のように眠る我が子の寝顔を見て、最高の家族の夏休みに胸が満たされた。",
          "diary": "家族みんなで行った夏の海。波と戯れる我が子の輝く笑顔が忘れられない。家族で作る思い出の一つ一つが、人生のかけがえのない宝物。"
        }
      ]
    },
    {
      "id": "choice_parenting_summer_sea_shade_rest",
      "label": "パラソルの下で{partner}と冷たい飲み物を分け合い、我が子の遊ぶ姿を見守る",
      "effects": {
        "happiness": 7,
        "passion": 3,
        "selfEfficacy": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "砂浜のパラソルの下、{partner}と肩を並べて冷たいサイダーを飲んだ。砂のお城作りに熱中する我が子を見守りながら、「いつかこの子も大きくなって海に来るのかな」としみじみ語り合った。",
          "diary": "青い海と砂浜で過ごした穏やかな休日。波音を聴きながら家族の温もりに包まれ、日々の忙しさを忘れて心身ともに深く癒やされた。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_recital_stage",
  "title": "舞台のスポットライトと胸の鼓動・我が子の晴れ舞台を見守る客席",
  "age": [
    26,
    62
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 5 && childAge <= 12);
  },
  "weight": 28,
  "once": true,
  "text": "市民ホールの薄暗い客席。スポットライトが照らすステージの上、少し大きめの衣装に身を包み、緊張で顔を強張らせて立つ我が子。毎日のように家で練習し、時には泣きながら鍵盤に向かっていた日々。客席で膝の上で祈るように指を組む私の手を、隣の{partner}がそっと包み込んでくれた。深呼吸の後、我が子の小さな指先が音を奏で始める——。",
  "choices": [
    {
      "id": "choice_parenting_recital_applause",
      "label": "演奏が終わった瞬間、客席から身を乗り出して割れんばかりの拍手を送る",
      "effects": {
        "happiness": 8,
        "selfEfficacy": 4,
        "stress": -3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "最後の音がホールに響き渡り、我が子が客席に向かって深々とお辞儀をした。万雷の拍手の中、客席の私たちを見つけてパッと笑顔を咲かせた我が子の姿に、涙が頬を伝って止まらなかった。",
          "diary": "子どもの発表会。緊張に打ち勝って堂々とやり遂げた我が子の勇姿に感動した。努力が実を結ぶ瞬間に立ち会えたことは、親として無上の喜び。"
        }
      ]
    },
    {
      "id": "choice_parenting_recital_bouquet_hug",
      "label": "ロビーで駆け寄ってきた我が子に小さな花束を手渡し、誇らしく抱きしめる",
      "effects": {
        "happiness": 7,
        "morality": 3,
        "passion": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「すっごく緊張した！」と飛び込んできた我が子を力いっぱい抱きしめ、花束を手渡した。{partner}も頭をくしゃくしゃに撫で回し、家族みんなで努力の成果を讃え合った。",
          "diary": "発表会を終えた我が子の誇らしげな笑顔。ひとつの壁を乗り越えて自信をつけた小さな背中が、また一回り大きく見えた。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_school_visit",
  "title": "教室の後ろからの授業参観・何度も振り返る照れくさそうな瞳",
  "age": [
    27,
    63
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 7 && childAge <= 11);
  },
  "weight": 26,
  "text": "小学校の廊下に漂うワックスとチョークの懐かしい匂い。教室の後ろに保護者が並ぶ授業参観日。先生の問いかけに、我が子は周りを伺いながら恐る恐る手を挙げる。黒板を向きながらも、こちらが来ているか気になってチラチラと振り返る我が子。目が合うとパッと照れくさそうに前を向き直して背筋を伸ばす姿に、家庭とはまた違う社会の中で頑張っている愛おしさがこみ上げる。",
  "choices": [
    {
      "id": "choice_parenting_school_visit_nod",
      "label": "目が合った瞬間に優しく微笑んで小さく頷き、安心感とエールを送る",
      "effects": {
        "happiness": 6,
        "stress": -2,
        "selfKnowledge": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "私が小さく手を振ると、我が子は嬉しそうに口元を緩め、次の質問では元気よく手を挙げて発表した。外の世界で一生懸命自分の場所を作っている我が子の頼もしさに、胸がじんわり温かくなった。",
          "diary": "授業参観へ行ってきた。教室で友達と並んで学ぶ我が子の姿に、親の目の届かないところでも着実に成長している姿を実感できて嬉しかった。"
        }
      ]
    },
    {
      "id": "choice_parenting_school_visit_parents_talk",
      "label": "参観の後、廊下で他の保護者たちと子育ての悩みや情報を共有し合う",
      "effects": {
        "happiness": 5,
        "selfEfficacy": 3,
        "morality": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "クラスの保護者たちと挨拶を交わし、「最近反抗して大変ですよね」などと笑い合いながら共感し合った。同じ年頃の子を持つ親同士の温かなコミュニティに勇気をもらった。",
          "diary": "参観日を通じて他の保護者の方々とも親交を深めた。みんな同じように悩みながら子育てに向き合っているのだと分かり、とても心強かった。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_child_away_night",
  "title": "子供の林間学校と静まり返った家・新婚の夜のように貪り合うふたり",
  "age": [
    28,
    64
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children",
    "partnered"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 8 && childAge <= 15);
  },
  "weight": 28,
  "text": "子供が林間学校に出かけ、数日ぶりに夫婦二人きりになった夜。いつもは賑やかな足音やお喋りで満ちている家の中が、信じられないほど静まり返っている。夕食を終え、ソファで隣り合うと、{partner}が私の腰を引き寄せ、熱い吐息とともに首筋に唇を這わせてきた。「ずっと、こうして二人きりになりたかった……」。普段は子供の目を気にして押し殺していた情熱が堰を切ったように溢れ出し、昼間の「お母さん」の殻を脱ぎ捨てた素肌が激しく疼き始める……。",
  "choices": [
    {
      "id": "choice_parenting_child_away_passion",
      "label": "声も憚らず{partner}に身を委ね、新婚の頃のように激しく貪り合う",
      "effects": {
        "happiness": 8,
        "intimacyNeed": 6,
        "stress": -4,
        "sexualEffects": {
          "intimacy": 15,
          "libido": 10
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "静まり返ったリビングから寝室へと押し倒され、服を引き裂くような激しさで素肌を重ね合った。子供の気配のない解放感の中、名前を呼び合いながら声を限りに啼き、互いの熱い愛液と汗にまみれて幾度も絶頂に達した。",
          "diary": "子供が泊まりがけの行事で不在の夜。{partner}と新婚時代に戻ったように激しく愛し合った。親である前に、私たちは今も深く求め合う男と女なのだと肌で実感した。"
        }
      ]
    },
    {
      "id": "choice_parenting_child_away_date_night",
      "label": "久しぶりに少しお洒落をして夜の街へ二人で食事に出かけ、恋人気分を味わう",
      "effects": {
        "happiness": 7,
        "passion": 4,
        "morality": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "お気に入りのワンピースを着て{partner}と手を繋ぎ、静かなレストランでワインを飲んだ。子供のいない夜の街を並んで歩く時間は、まるで付き合い始めた頃のような甘いときめきに満ちていた。",
          "diary": "子供が不在の夜、{partner}と久しぶりのディナーデート。手を繋いで夜風に吹かれながら、二人の原点にある愛しさを再確認した素敵な夜。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_future_dreams",
  "title": "夜更けの進路相談とマグカップ・大人の階段を登る我が子との対話",
  "age": [
    34,
    66
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 14 && childAge <= 17);
  },
  "weight": 28,
  "once": true,
  "text": "深夜一時。試験勉強を続ける我が子の部屋のドアをノックし、温かいココアのマグカップを差し入れた。机に向かっていた我が子がふとペンを置き、「ねえ、お母さん……私、将来進みたい道があるんだ」と真剣な眼差しで切り出してきた。自分の将来への不安、挑戦したい夢、親に心配をかけたくないという葛藤。いつの間にか一人の独立した大人として物事を深く考えるようになった我が子の横顔を見つめ、胸が熱くなる。",
  "choices": [
    {
      "id": "choice_parenting_future_dreams_support",
      "label": "「あなたの選ぶ道を全力で応援するよ」と優しく微笑んで背中を押す",
      "effects": {
        "happiness": 7,
        "morality": 4,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "我が子の手を両手で包み、「どんな道を選んでも、お母さんはあなたの味方だから」と伝えた。我が子はホッとしたように瞳を潤ませて笑顔を見せ、親子の深い信頼が固く結ばれた。",
          "diary": "夜更けに我が子と将来の夢についてじっくり語り合った。自分の頭で考え、未来を切り拓こうとする我が子の姿に、親としての大きな誇りを感じた。"
        }
      ]
    },
    {
      "id": "choice_parenting_future_dreams_family_counsel",
      "label": "{partner}も呼んでリビングで語り合い、家族みんなで未来へのステップを話し合う",
      "effects": {
        "happiness": 6,
        "selfEfficacy": 3,
        "passion": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "{partner}も交えて三人で食卓を囲み、現実的な進路や学費、夢への道筋を真摯に語り合った。「家族みんなで支えるから心配するな」という夫の言葉に、我が子も力強く頷いていた。",
          "diary": "我が子の進路について家族三人で膝を突き合わせて話し合った。大人の階段を一歩ずつ登っていく我が子を、夫婦でしっかりと支えていきたい。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_kitchen_embrace",
  "title": "夕暮れの台所とエプロンの紐・すぐ傍に我が子がいる甘い緊張感",
  "age": [
    23,
    50
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children",
    "partnered"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 2 && childAge <= 12);
  },
  "weight": 28,
  "text": "夕暮れのキッチン。リビングでは子供がテレビのアニメに夢中になり、楽しげな笑い声をあげている。煮物の湯気が立ち上るコンロの前、エプロン姿で包丁を握る私の背後に、すっと気配が忍び寄ってきた。腰に回されたたくましい両腕。耳元に吹きかけられる熱い吐息とともに、{partner}の指先がエプロンのリボンを音もなく解いていく。「だめ……すぐそこにいるのよ」と声を潜めて身悶えるが、スカートを捲り上げられ、ショーツの隙間から滑り込んできた熱い指先が濡れた秘唇を直に割り開く。換気扇の低い唸り音にかき消される水音と、下腹からとろりと溢れ出す蜜の熱さに、膝がガクガクと震え出す……。",
  "choices": [
    {
      "id": "choice_parenting_kitchen_surrender",
      "label": "換気扇の音に紛れて息を殺し、台所カウンターに手をついて夫の指先に乱される",
      "effects": {
        "happiness": 7,
        "intimacyNeed": 5,
        "stress": -3,
        "sexualEffects": {
          "intimacy": 14,
          "libido": 10
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "流し台の縁をぎゅっと握りしめ、声が出ないよう唇を噛み締めて夫の激しい指使いを受け止めた。執拗にクリトリスを弾かれ、奥深くまで指を沈められるたび、すぐ向こうに子供がいる背徳の興奮で膣肉がきゅうきゅうと痙攣し、エプロンを濡らすほど潮を吹いて絶頂した。",
          "diary": "夕飯の支度中、台所で{partner}に悪戯された。子供の笑い声が聞こえるすぐ傍で愛撫される極限の緊張感に、我を忘れるほど激しく感じてしまった。"
        }
      ]
    },
    {
      "id": "choice_parenting_kitchen_whisper_promise",
      "label": "頬を紅潮させて振り返り、「子供が寝たらね」と耳元で甘く約束して焦らす",
      "effects": {
        "happiness": 6,
        "passion": 4,
        "selfKnowledge": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "熱く火照った顔で夫の首に手を回し、濡れた瞳で唇を重ねた。「あとで、たっぷりね」。耳元で甘く囁くと、{partner}は苦笑しながら名残惜しそうに手を引き、夜への期待に下腹がじんじんと疼き続けた。",
          "diary": "夕方の台所での密やかなスキンシップ。子供の前では見せない夫の男の顔にドキドキさせられ、夜が待ち遠しくてたまらなくなった。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_late_bath_whisper",
  "title": "深夜のバスルームと白い湯気・疲れた身体を癒やす濃密な素肌",
  "age": [
    23,
    50
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children",
    "partnered"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 1 && childAge <= 14);
  },
  "weight": 28,
  "text": "子供たちを寝かしつけ、深夜一時を回った静まり返る浴室。白く立ち込める温かい湯気の中、一人で湯船に浸かって育児の疲れた足を伸ばしていると、すりガラスの扉が静かに開いた。「お疲れ様。背中、流そうか」。脱衣所から入ってきた{partner}が、石鹸の豊かな泡を手にとり、私の肩から首筋、そして張りのある豊かな乳房へと滑らせていく。ぬめりを帯びた大きな手のひらが肌を這うたび、疲労感がとろけるような快楽へと変貌し、狭いバスタブの中で二人、濡れた素肌を密着させて湯を波打たせる……。",
  "choices": [
    {
      "id": "choice_parenting_bath_intimacy",
      "label": "狭い湯船の中で夫の逞しい太ももの上に跨がり、湯気の奥で深く結ばれる",
      "effects": {
        "happiness": 8,
        "intimacyNeed": 6,
        "stress": -4,
        "sexualEffects": {
          "intimacy": 15,
          "libido": 12
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "温かいお湯の中で絡み合う二人の肉体。濡れそぼる秘肉を押し広げ、{partner}の太い熱塊が奥深くまで滑り込んでくる。湯の浮力とお互いの汗が混ざり合い、声が外に漏れないよう夫の肩に歯を立てながら、身体の芯が溶け崩れるような深い絶頂に二人で沈んでいった。",
          "diary": "深夜のお風呂場で{partner}と二人きりで重なり合った。白く煙る湯気の中、育児の疲れも日常の喧騒もすべて洗い流されるような至福のひととき。"
        }
      ]
    },
    {
      "id": "choice_parenting_bath_wash_care",
      "label": "お互いの身体を隅々まで優しく洗い合い、温もりを確かめ合って抱き合う",
      "effects": {
        "happiness": 7,
        "passion": 3,
        "morality": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "夫の広い背中を流し、私の疲れた腰や肩を優しく揉みほぐしてもらった。湯船から上がった後、バスタオルでお互いを包み込み、日々の奮闘を心から称え合う温かな愛に満たされた。",
          "diary": "夜遅くのバスタイムで{partner}とゆっくりスキンシップ。優しく肌を触れ合わせるだけで、親として戦う毎日に温かいエネルギーが湧いてくる。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_morning_quick_intimacy",
  "title": "幼子の寝息が聞こえる早朝・掛け布団の下で貪り合う肌の熱",
  "age": [
    24,
    50
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children",
    "partnered"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 2 && childAge <= 10);
  },
  "weight": 26,
  "text": "休日のまだ薄暗い早朝。隣の子供用ベッドからは、すやすやと小さな寝息が聞こえている。冷え込んだ朝の空気の中、温かい羽毛布団の中でふと目を覚ますと、背後から{partner}がぴったりと腰を押し当ててきていた。パジャマ越しでも分かる朝の硬く熱い存在。パジャマのズボンの中に滑り込んできた手が、寝起きの無防備な秘所をまさぐり始める。「まだ起きないよ……少しだけ……」。耳元で甘くねだる夫の荒い息遣いに、私の身体も抗えず、じっとりと愛液を滲ませてしまう……。",
  "choices": [
    {
      "id": "choice_parenting_morning_quick_passion",
      "label": "掛け布団を頭まで被り、声を押さえ込んで朝の熱い結合に溺れる",
      "effects": {
        "happiness": 8,
        "intimacyNeed": 5,
        "stress": -3,
        "sexualEffects": {
          "intimacy": 14,
          "libido": 10
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "布団の中でショーツを下ろされ、背後から音もなく熱い塊がぬちりと肉腔へと沈められた。隣で眠る子供が寝返りを打つたびにヒヤリと心臓が跳ね上がり、その極限の恐怖と快感に膣肉が激しく吸い付き、枕に顔を埋めて喘ぎ声を呑みながら何度も達した。",
          "diary": "子供が起きる前の早朝、布団の中で{partner}と息を潜めて愛し合った。背徳的なスリルと朝の熱い素肌の温もりに、目が覚めるほど満たされた。"
        }
      ]
    },
    {
      "id": "choice_parenting_morning_snuggle_sleep",
      "label": "パジャマの上から抱きしめ合い、二度寝のまどろみの中で温もりを分かち合う",
      "effects": {
        "happiness": 6,
        "stress": -4,
        "passion": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「起きたら困るでしょ」と笑いながら夫の胸元に顔を埋め、固くなった存在を手で優しく宥めた。朝陽がカーテンを白く染めるまで、素肌をぴったりと重ねてまどろむ時間は至福だった。",
          "diary": "早朝の布団の中で{partner}と抱き合って過ごした。何気ない朝のスキンシップが、慌ただしい育児の日々の中で一番の心のオアシスになっている。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_living_room_floor",
  "title": "子供のお昼寝とレースのカーテン・陽だまりのリビングに落ちる衣服",
  "age": [
    22,
    48
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children",
    "partnered"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 1 && childAge <= 5);
  },
  "weight": 28,
  "text": "日曜日の午後。隣の和室で、遊び疲れた子供が安らかな寝息を立ててお昼寝に落ちた。レースのカーテン越しに柔らかな陽光が注ぐリビング。洗濯物を畳んでいた私の手首を、休日で家にいた{partner}がふと握りしめて引き倒した。ふかふかの絨毯の上に倒れ込む私。「ずっと我慢してた……少しだけ、僕だけの時間にして」。普段の優しい父親の顔から、飢えた男の目へと変わった夫の視線。いつ起き出すか分からない昼下がりの家の中、衣服が次々と絨毯の上へと脱ぎ捨てられていく……。",
  "choices": [
    {
      "id": "choice_parenting_living_floor_surrender",
      "label": "陽だまりの絨毯の上で{partner}を迎え入れ、昼下がりの背徳に身を焦がす",
      "effects": {
        "happiness": 8,
        "intimacyNeed": 5,
        "stress": -4,
        "sexualEffects": {
          "intimacy": 15,
          "libido": 12
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "明るい部屋の中で素肌を晒す恥じらいと、いつ子供が襖を開けるか分からないスリル。剥き出しの太ももを割られ、ぐちゅりと濡れた最奥まで貫かれた瞬間、あまりの快感に背筋が弓なりになった。時計の秒針の音を聴きながら、声を押し殺して濃厚に貪り合った。",
          "diary": "子供がお昼寝中のリビングで、{partner}と絨毯の上で愛し合った。明るい昼の光の中で肌を重ねる背徳感と熱狂は、忘れられない記憶になった。"
        }
      ]
    },
    {
      "id": "choice_parenting_living_floor_gentle_kiss",
      "label": "服の上から優しく抱きしめ合い、畳んだ洗濯物の香りに包まれてキスを交わす",
      "effects": {
        "happiness": 6,
        "passion": 3,
        "selfKnowledge": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「起きたら大変だから」と笑って夫の頬を両手で包み、幾度も深い口づけを交わした。陽だまりの中で息を整えながら寄り添う時間は、平穏で温かな幸福に満ちていた。",
          "diary": "午後の静寂の中で{partner}と二人きりの甘いスキンシップ。忙しい日常の隙間に見つける二人だけの時間が、夫婦の愛をいつも新鮮に保ってくれる。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_car_backseat_stolen",
  "title": "ドライブの帰り道と雨宿り・後部座席で眠る我が子と密やかな手遊び",
  "age": [
    25,
    50
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children",
    "partnered"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 3 && childAge <= 10);
  },
  "weight": 26,
  "text": "家族ドライブの帰り道、急な夕立に降られて立ち寄った高速道路のパーキングエリア。スモークガラス越しに雨粒が流れる薄暗い車内。後部座席のチャイルドシートでは、遊び疲れた子供がすっかり熟睡して規則正しい寝息を立てている。エンジンを切り、静まり返った車内。運転席の{partner}が助手席の私のシートを倒し、自分の上着を私の膝掛け代わりに被せると、その下から大きな手が太ももの内側へと滑り込んできた。「誰も見てないよ……触らせて……」。すぐ背後に我が子がいる異常な状況に、下腹の奥がじわりと熱く湿り出す……。",
  "choices": [
    {
      "id": "choice_parenting_car_stolen_pleasure",
      "label": "上着の下でショーツをずらされ、雨音に紛れて夫の指先に震えて啼く",
      "effects": {
        "happiness": 7,
        "intimacyNeed": 5,
        "stress": -3,
        "sexualEffects": {
          "intimacy": 14,
          "libido": 12
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "ガラスを叩く雨音にかき消される、ぬちぬちとした湿った水音。上着で手元を隠しながら、{partner}の指先が敏感な突起を執拗に転がし、奥を掻き回す。すぐ後ろに我が子がいる恐怖と倒錯の興奮で、シートの革を握りしめながら声も出せずに絶頂を迎えた。",
          "diary": "雨のパーキングエリアの車内。子供が後ろで眠る中、{partner}に上着の下で密かにまさぐられた。非日常のスリルに身体の奥が激しく疼いた。"
        }
      ]
    },
    {
      "id": "choice_parenting_car_stolen_stop_tease",
      "label": "夫の手を上着の上からぎゅっと握って止め、「家に着くまでお預け」と微笑む",
      "effects": {
        "happiness": 6,
        "passion": 3,
        "selfEfficacy": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "夫の悪戯な手を握りしめ、人差し指を唇に当てて「しーっ」と窘めた。残念そうに笑う夫の瞳に宿る情熱に、帰宅後の夜への期待が胸いっぱいに膨らんだ。",
          "diary": "車内での夫からの不意の誘惑を甘く焦らした。親としての立場と、惹かれ合う男女としての熱い視線が交差する甘酸っぱい帰り道。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_hotel_stay_together",
  "title": "家族旅行の温泉宿・襖一枚隔てて眠る我が子と布団の上の忍び声",
  "age": [
    24,
    50
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children",
    "partnered"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 3 && childAge <= 14);
  },
  "weight": 28,
  "text": "家族旅行で訪れた山あいの温泉旅館。ご馳走と温泉を満喫し、隣の次の間の布団で子供はすっかり泥のように眠りについている。深夜、かすかに硫黄の匂いと虫の音が漂う和室。敷かれた布団の上、浴衣の帯を解き合う{partner}と私。襖一枚隔てたすぐ向こうに我が子がいるという極限の緊張感。浴衣の胸元を押し広げられ、温泉の湯上がりで火照った乳房に熱い舌先が這わされた瞬間、喉の奥から甘い吐息が零れそうになり、慌てて夫の肩口に顔を埋めた……。",
  "choices": [
    {
      "id": "choice_parenting_hotel_tatami_passion",
      "label": "浴衣を乱して畳の上で絡み合い、息を殺して夜明け前まで貪り合う",
      "effects": {
        "happiness": 9,
        "intimacyNeed": 6,
        "stress": -5,
        "sexualEffects": {
          "intimacy": 16,
          "libido": 12
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "浴衣の裾を大きく捲り上げられ、畳の上で腰を密着させた。襖の向こうに物音がしないか耳を澄ませながら、{partner}の逞しい腰の突き上げを受け止める。声を出せない苦しさと温泉の熱気が淫乱な興奮を高め、互いの体液でシーツを汚しながら激しくイッてしまった。",
          "diary": "温泉旅館の夜、子供が眠る隣の部屋で{partner}と激しく肌を重ねた。旅先の解放感と密やかな背徳が混ざり合う、甘く濃密な一夜。"
        }
      ]
    },
    {
      "id": "choice_parenting_hotel_moonlight_whisper",
      "label": "縁側に出て夜風に当たりながら、肩を抱き合って家族の幸せを噛み締める",
      "effects": {
        "happiness": 7,
        "passion": 3,
        "morality": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "火照った身体を浴衣で整え、縁側で月を見上げながら{partner}の肩に寄り添った。「子供もすごく喜んでたね」「連れてきて良かったよ」。寄り添い合う夫婦の深い絆に心が洗われた。",
          "diary": "温泉宿の静かな夜、{partner}と縁側で語り合った。家族の笑顔と夫の深い愛情に包まれて、これ以上の幸せはないと思える旅になった。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_rare_child_brings_lover",
  "title": "閉ざされた子供部屋と見知らぬ靴・思春期の生々しい気配",
  "age": [
    35,
    65
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 14 && childAge <= 19);
  },
  "weight": 10,
  "once": true,
  "text": "夕暮れ、スーパーの買い物袋を提げて玄関を開けた瞬間、たたきに見慣れない異性のスニーカーが脱ぎ捨てられているのが目に留まった。静まり返る廊下。忍び足で階段を上がると、子供部屋のドアは固く閉ざされ、鍵がかけられている。薄いドアの隙間から漏れ聞こえてくる、ヒソヒソとした甘い話し声、微かな衣擦れの音、そしてギシ……と鈍く軋むベッドのスプリング。「ちょっと、音出るってば……っ」。息を呑み、ドアの前で立ち尽くす私。あんなに無垢だった我が子が、部屋に異性を連れ込み、身体を求め合っているという強烈な衝撃。動揺とともに、自分自身の若い日の衝動がフラッシュバックし、下腹の奥が熱く疼いてしまう……。",
  "choices": [
    {
      "id": "choice_parenting_child_lover_knock",
      "label": "動揺を押し隠してドアをノックし、「お茶入ったわよ」と声をかけて牽制する",
      "effects": {
        "happiness": 5,
        "morality": 5,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「お茶持ってきたわよ」。声をかけると、部屋の中からガタガタと慌てて衣服を整える物音が響き、真っ赤な顔をした我が子が気まずそうにドアを少しだけ開けた。親としての大人の節度を保ちながらも、確実に大人の階段を登り始めた我が子の現実に胸がざわめいた。",
          "diary": "我が子が部屋に異性を連れ込んでいる気配に遭遇した。慌てる二人の様子に親としての威厳を保ったものの、あの子も一人前に愛欲を知る年頃になったのだと知って複雑な動悸が止まらなかった。"
        }
      ]
    },
    {
      "id": "choice_parenting_child_lover_pretend_ignore",
      "label": "気づかないふりをしてそっと階段を降り、我が子の性に激しく乱される",
      "effects": {
        "happiness": 4,
        "stress": 3,
        "sexualEffects": {
          "libido": 12
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "息を殺してそっと階下へと戻り、キッチンのカウンターに手をついて荒い呼吸を整えた。あの閉ざされた扉の奥で繰り広げられているであろう若い二人の情交を想像してしまい、恥ずかしさと罪悪感で下腹がキュンと甘く疼いて、ショーツをじんわりと湿らせてしまった。",
          "diary": "子供部屋から漏れてきた甘い吐息と衣擦れの音。見てはいけないものに触れてしまった後ろめたさと、我が子の生々しい性への目覚めに、自分自身の身体まで熱く火照ってしまった。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_rare_caught_intimacy_glance",
  "title": "わずかに開いた寝室のドア・夜の情交と覗かれた影の予感",
  "age": [
    25,
    52
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children",
    "partnered"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 5 && childAge <= 16);
  },
  "weight": 10,
  "once": true,
  "text": "深夜二時。寝室で{partner}に背後から組み敷かれ、シーツを掻きむしりながら激しく腰を揺らされていた。熱く太い塊が奥深くまで抉り込むたび、快感に耐えかねて喉から啼き声が零れかける。その時——ふと視界の端、数センチだけ隙間が開いていた寝室の引き戸の暗がりに、小さな影が佇み、息を潜めてこちらを見つめていたような気配が走った。全身の血が凍りつくような戦慄。「どうしたの？」と腰を動かし続ける夫の背にしがみつき、慌てて戸を見るが、そこにはもう誰もいない。見られたのか、それとも幻だったのか……親としての恐怖と罪悪感、そして覗かれていたかもしれないという狂おしいほどの背徳感が、身体の芯を雷のように貫く……。",
  "choices": [
    {
      "id": "choice_parenting_caught_perverse_climax",
      "label": "見られたかもしれない恐怖と背徳の倒錯に激しく締めつけ、狂ったように絶頂する",
      "effects": {
        "happiness": 6,
        "stress": 4,
        "intimacyNeed": 5,
        "sexualEffects": {
          "intimacy": 15,
          "libido": 15
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "覗かれていたかもしれないという異常な興奮に我を忘れ、膣肉が狂ったように夫の剛直を締め上げた。夫の首筋に必死で歯を立てて絶叫を呑み込みながら、下腹の奥が激しく痙攣して潮を吹き、かつてないほど強烈な背徳の快楽に沈んで果ててしまった。",
          "diary": "夜の営みの最中、子供に見られたような気がした。恐怖と罪悪感に震えながらも、その倒錯的な背徳感にかつてないほど激しく感じて絶頂してしまった。恐ろしくも忘れられない夜。"
        }
      ]
    },
    {
      "id": "choice_parenting_caught_panic_check",
      "label": "慌てて夫の動きを制止して衣服を整え、子供部屋の様子を青ざめて確かめに行く",
      "effects": {
        "happiness": 5,
        "stress": -2,
        "morality": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「待って、誰かいた！」と夫を突き飛ばすように押し留め、浴衣をかき集めて子供部屋へと走った。子供は布団の中で静かに寝息を立てていたが、掛け布団の位置が少しずれていたような気がして、胸の動悸がおさまるまで枕元で立ち尽くした。",
          "diary": "夫婦の行為を子供に見られた気がして血の気が引いた。部屋を見に行くと眠っていたが、本当に気づかれなかったのか……親としての迂闊さを深く反省した。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_secret_date",
  "title": "ほのかに香るコロンと上気した頬・娘の背中に蘇るかつての自分",
  "age": [
    35,
    65
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 14 && childAge <= 19);
  },
  "weight": 26,
  "once": true,
  "text": "休日の昼下がり、「友達とカフェに行ってくるね」と出かけていく娘。だが、普段着けない淡い色のリップ、念入りにアイロンをあてたプリーツスカート、そして玄関先にふわりと漂う甘いコロンの香り。明らかに同性の女友達相手ではない特別な気合に、母親としての直感が走る。夕暮れ時、「ただいま」と帰宅した娘の横顔。耳たぶまでほんのりと上気した紅潮、わずかに乱れた襟元と、どこか放心したように潤んだ瞳。誰かに熱い視線を注がれ、初めて素肌を触れ合われた時にしか宿らないあの甘美な匂いと体温。かつて自分が同じように親に嘘をつき、恋人と身体を重ねて火照った身体で帰宅した遠い日の記憶が鮮烈にフラッシュバックし、下腹の奥がきゅうと甘く疼いてしまう……。",
  "choices": [
    {
      "id": "choice_parenting_daughter_date_warm_smile",
      "label": "「楽しかった？」と優しく微笑んで迎え、娘の小さな秘密を胸にしまって見守る",
      "effects": {
        "happiness": 6,
        "morality": 4,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「楽しかった？」と優しく声をかけると、娘はハッと我に返ったように頬を真っ赤に染め、「うん……すっごく美味しかった！」とぎこちなく笑って部屋へと駆け上がっていった。階段を見上げる私の胸に、娘が自分の人生を歩み始めた切なさと誇らしさが温かく満ちていた。",
          "diary": "友達と遊ぶと言っておめかしして出かけた娘。帰ってきたときの紅潮した横顔と潤んだ瞳に、大人の女性としての目覚めを感じた。詮索はせず、あの子の輝く季節をそっと見守りたい。"
        }
      ]
    },
    {
      "id": "choice_parenting_daughter_date_past_echo",
      "label": "娘の去った玄関で一人立ち尽くし、かつて男に乱された自らの青春の疼きに息を呑む",
      "effects": {
        "happiness": 5,
        "stress": 2,
        "sexualEffects": {
          "intimacy": 8,
          "libido": 12
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "娘が通り過ぎた後の廊下に残る、甘酸っぱい熱情の残り香。かつて誰かに無我夢中で愛され、唇を奪われ、身体の芯まで熱く痺れていた若い日の記憶が胸を突き上げ、キッチンの壁に手をついて荒い吐息を漏らした。母親としての仮面の下で、抑えきれない女としての疼きが下腹を満たしていった。",
          "diary": "恋をして帰ってきた娘の姿に、昔の自分自身を強烈に重ねてしまった。誰かに熱く求められることの甘美な記憶が蘇り、身体の奥が疼いて胸の鼓動がおさまらなかった。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_morning_return",
  "title": "朝帰りの足音と微かな煙草の残り香・大人の女へ変わっていく娘",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 16 && childAge <= 21);
  },
  "weight": 24,
  "once": true,
  "text": "「友達の家でテスト勉強してお泊まりするから」と昨夜出ていった娘。朝露が草木を濡らす日曜の早朝六時、静かに鍵が回り、忍び足で玄関ドアが開く音が響いた。リビングのドアの隙間から伺うと、昨日の服のまま、少し足取りをふらつかせながらそっと部屋へ上がろうとする娘の姿。すれ違いざま、微かに鼻腔を掠めた見知らぬ男の香水と煙草の匂い、そして肌の奥から立ち上る、男と一晩中激しく素肌を重ね合った後の生々しい熱と愛液の残り香。首筋には、髪で必死に隠そうとした赤紫色の鬱血の痕——キスマーク。一線を越え、子供から完全に「女」へと変貌してしまった娘の現実に心臓が激しく早鐘を打つ。咎めるべき母親としての理性と、女としてすべてを悟ってしまうやるせなさが交錯する……。",
  "choices": [
    {
      "id": "choice_parenting_daughter_morning_breakfast",
      "label": "咎めずに温かいお味噌汁を差し出し、「身体は大切にしなさいね」と母として静かに諭す",
      "effects": {
        "happiness": 6,
        "morality": 5,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "台所から温かいお椀を差し出すと、娘はびくっと肩を跳ねさせ、首筋を手で隠しながら視線を泳がせた。「お母さん……」「温かいもの飲んで、少し寝なさい。自分の身体は、誰よりも自分が大切にするのよ」。母の静かな眼差しに、娘は泣きそうな顔でこくりと頷いた。",
          "diary": "友達の家に泊まると言って朝帰りした娘。首筋のキスマークと大人の匂いに動揺したけれど、怒鳴るのではなく静かに諭した。一人の大人の女性として、自分の身体と命の重みを知ってほしい。"
        }
      ]
    },
    {
      "id": "choice_parenting_daughter_morning_secret_turmoil",
      "label": "首筋の痕を見て見ぬふりをしながら、かつて自分も同じ熱狂の中にいた記憶に激しく乱される",
      "effects": {
        "happiness": 4,
        "stress": 4,
        "sexualEffects": {
          "intimacy": 10,
          "libido": 14
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「お帰り」とだけ声をかけ、娘の首筋に刻まれた生々しい愛の痕跡から目をそらした。部屋へ消えていく娘の背中を見送りながら、自分自身もかつて愛欲に狂い、朝帰りした日のシーツの匂いや男の重みを鮮烈に思い起こしてしまい、下腹の奥がきゅうきゅうと痙攣して膝が震えた。",
          "diary": "朝帰りした娘の首筋にキスマークを見つけてしまった。親としてのショックとともに、自分も通ってきた激しい愛欲の記憶が生々しくフラッシュバックし、胸の動悸と身体の火照りが抑えられなかった。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_rare_aftermath_child_gaze",
  "title": "朝食の食卓と我が子の視線・見られたかもしれない秘密の残り香",
  "age": [
    25,
    53
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children",
    "partnered"
  ],
  "requires": function (s) {
    return !!s.flags?.caught_perverse_climax_experienced;
  },
  "weight": 20,
  "once": true,
  "text": "あの深夜、覗かれたかもしれない恐怖と倒錯の絶頂に溺れてから数日が過ぎた。休日の朝食の食卓。いつもなら「お母さん！」と屈託なく笑いかけてくるはずの我が子が、なぜか一度も私と目を合わせようとせず、俯きがちにトーストを齧っている。そして、ふとした瞬間に首筋や胸元へと注がれる、好奇心と怯えが入り混じった湿った視線。夫が立ち上がり私の肩にぽんと手を置いた瞬間、我が子はビクッと敏感に肩を跳ねさせ、気まずそうに目を逸らした。——あの子は、あの夜の光景を確かに目撃していたのだ。「お母さん……昨日の夜、痛そうだった……？」。台所で食器を洗う私の背後に立ち、ぽつりと落とされた小さな一言。全身の血が凍りつき、心臓が早鐘のように破裂しそうになる。母親としての仮面が粉々に砕け散る猛烈な恥辱。だが、その極限の羞恥の中で、あの夜覗かれながら狂ったようにイッてしまった子宮の奥が甘く熱く疼き出し、下腹の奥から蜜が溢れてショーツを濡らしてしまう……。",
  "choices": [
    {
      "id": "choice_parenting_aftermath_cover_up",
      "label": "「悪い夢でも見たのよ」と顔を赤らめて言い繕い、母親の威厳を必死で保つ",
      "effects": {
        "happiness": 4,
        "stress": 3,
        "morality": 5,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "震える指先で蛇口を止め、振り返って無理に笑顔を作った。「何でもないのよ、お父さんと少しお話ししてただけ。心配いらないわ」。我が子は何か言いたげな瞳でじっと私を見つめた後、小さく頷いてリビングへと戻っていった。母親としての体面を辛うじて守り抜いた安堵と、嘘をついてしまった罪悪感で、冷や汗が背筋を伝った。",
          "diary": "あの夜の行為について、子供から核心を突くような質問をされて頭が真っ白になった。必死で誤魔化したものの、子供の鋭い視線に母親としての体面が激しく揺らいだ。もう二度とあんな隙を見せてはいけないと心に誓った。"
        }
      ]
    },
    {
      "id": "choice_parenting_aftermath_surrender_shame",
      "label": "全てを見られた羞恥と背徳の熱に身体を震わせ、女としての罪深い疼きに屈服する",
      "effects": {
        "happiness": 6,
        "stress": 5,
        "sexualEffects": {
          "intimacy": 16,
          "libido": 18
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「痛くなかったの……大人になるとね、あんな風に仲良くすることもあるのよ」。声をかすれさせ、火照る耳たぶを手で隠しながら、自白のような言葉を漏らしてしまった。我が子の動揺した瞳に見つめられながら、母である自分が女として暴かれてしまった背徳感に下腹がきゅうきゅうと痙攣し、恥辱と快楽の倒錯に身体が甘く痺れて立っていられなくなった。",
          "diary": "あの夜の情交を確かに見られていた。母親としての仮面が剥ぎ取られた恥辱の中で、あろうことか身体の奥が激しく疼き、快楽に屈してしまう自分自身の業の深さに戦慄した。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_laundry_secrets",
  "title": "洗濯カゴの奥のレースの下着・娘の引き出しに潜む大人の秘密",
  "age": [
    35,
    66
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 15 && childAge <= 20);
  },
  "weight": 24,
  "once": true,
  "text": "休日の朝、溜まった洗濯物を仕分けていた時のこと。娘の洗濯ネットの奥から、普段の清楚な綿の下着とはまるで違う、黒い繊細な総レースのランジェリーが零れ落ちた。母親に隠れて買ったのであろう、艶やかな透け感と細いサイドの紐。そして手洗いのために広げた瞬間、クロッチ部分に微かに残る、男と激しく愛し合った後にしか生じない特有の粘り気のある乾いた愛液のシミ。誰かの前で脱ぐために身に着け、誰かの指先で剥ぎ取られた証拠。娘の身体の聖域に触れてしまった後ろめたさと、一人の成熟した雌として男を受け入れているという生々しい事実に、指先が微かに震え、下腹の奥が熱く疼き出す……。",
  "choices": [
    {
      "id": "choice_parenting_daughter_laundry_protect",
      "label": "見なかったふりをして丁寧に手洗いし、大人の女性への脱皮を静かに見守る",
      "effects": {
        "happiness": 6,
        "morality": 4,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "レースを傷めないよう優しく泡立てて洗い、乾いた後に娘の引き出しの奥へとそっと戻した。あの子もまた、誰かを愛し、身体を許す年頃になったのだという感慨が、胸にじんわりと広がっていった。",
          "diary": "洗濯物の中から娘の大人のレース下着を見つけてしまった。親には見せない秘密の世界を大切に守ってあげようと思う。無垢な子供から大人の女性へと育っていく眩しさを噛み締めた。"
        }
      ]
    },
    {
      "id": "choice_parenting_daughter_laundry_past_longing",
      "label": "レースの手触りと蜜の痕跡に息を呑み、かつて勝負下着で逢瀬を重ねた過去に身を焦がす",
      "effects": {
        "happiness": 5,
        "stress": 3,
        "sexualEffects": {
          "intimacy": 10,
          "libido": 14
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "透けるレースを指先でなぞりながら、かつて自分が同じように男のために特別な下着を選び、シーツの上で貪り合われた若い日の記憶が生々しく蘇った。洗面所の鏡に映る自分の成熟した顔を見つめながら、母親としての理性の下で、抑えがたい女の疼きに身体を熱く濡らしてしまった。",
          "diary": "娘の下着に残された愛欲の痕跡に、自分自身の若き日の情熱が生々しくフラッシュバックした。誰かに狂おしく求められていたあの頃の感覚が蘇り、身体の芯が切なく疼いて止まらなかった。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_curfew_rain",
  "title": "門限破りのヘッドライトと傘・見知らぬ車の中で交わされる別れの口づけ",
  "age": [
    35,
    65
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 15 && childAge <= 20);
  },
  "weight": 24,
  "once": true,
  "text": "激しい雨がアスファルトを叩く夜十時。門限をとっくに過ぎても帰らない娘を案じ、傘を手に玄関先に立った私。そこへ水しぶきをあげて路肩に静かに停まった、見知らぬセダン。ワイパーが往復するフロントガラス越し、助手席のシートベルトを外した娘の姿が見える。運転席の男が娘の引き寄せ、二人は傘の死角で名残惜しそうに長い口づけを交わしていた。やがてドアが開き、小走りで玄関ポーチへと駆け込んできた娘。激しく上下する胸、熱く上気した耳たぶ、そして口紅が赤く滲み、ぽってりと腫れ上がった濡れた唇。男の荒い愛撫をたっぷりと受け取ってきた直後の生々しい熱気に、息が詰まる……。",
  "choices": [
    {
      "id": "choice_parenting_curfew_rain_towel",
      "label": "何も言わずにタオルを手渡し、「風邪引かないようにね」と温かく包み込む",
      "effects": {
        "happiness": 6,
        "morality": 5,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「お母さん……待っててくれたの？」。バツの悪そうに唇を手で隠す娘の肩にタオルをかけ、優しく髪を拭ってやった。「雨に濡れて寒かったでしょ、すぐお風呂に入りなさい」。娘は安心したように瞳を潤ませ、小さく頷いた。",
          "diary": "雨の夜、見知らぬ車で送られてきた娘。腫れた唇と濡れた瞳がすべてを物語っていたけれど、厳しく叱るのではなく優しく迎えた。恋を知り、大人になっていく娘の背中に母としての慈愛を注ぎたい。"
        }
      ]
    },
    {
      "id": "choice_parenting_curfew_rain_sensual_echo",
      "label": "滲んだ口紅と荒い息遣いを間近で見つめ、かつて雨宿りの車内で乱れた記憶に溺れる",
      "effects": {
        "happiness": 5,
        "stress": 3,
        "sexualEffects": {
          "intimacy": 10,
          "libido": 15
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "すれ違いざまに鼻をかすめた、雨の匂いと男のコロン、そして娘の肌から放たれる淫靡な愛の熱気。かつて自分も同じように密閉された車内で服を乱され、口唇を塞がれて啼いていた記憶が雷のように脳裏を貫き、玄関で一人立ち尽くしたまま下腹がきゅうと収縮して蜜を垂らしてしまった。",
          "diary": "車内で別れのキスをして帰ってきた娘の姿に、激しい動悸が襲った。男の熱を受け止めて帰ってきた女の匂いが漂い、自分の中の眠っていた淫らな記憶が呼び覚まされてしまった。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_phone_call_night",
  "title": "深夜二時の微かな話し声・壁一枚隔てた娘の甘美な吐息",
  "age": [
    34,
    64
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 14 && childAge <= 18);
  },
  "weight": 26,
  "once": true,
  "text": "喉の渇きを覚えて目を覚ました深夜二時。静まり返った薄暗い廊下を歩いていると、娘の部屋のドアの隙間から、かすかに漏れる話し声に足が止まった。布団の中に潜り込んでスマホを耳に当てている娘。「……もう、恥ずかしいから言わないでよ……そんなとこ、見たいの？」。普段のぶっきらぼうな態度とは別人のような、蕩けるように甘ったるい囁き声。衣擦れの音とともに漏れる「んっ……あっ……」という熱い吐息。親の前では決して見せない、愛する男にだけ見せるあられもない雌の顔。壁一枚隔てた先の生々しい熱気に、廊下で立ち尽くした私の下腹の奥がじわりと熱く潤んでいく……。",
  "choices": [
    {
      "id": "choice_parenting_phone_call_sneak_away",
      "label": "ノックはせず静かに足音を消して寝室へ戻り、娘の熱い青春に微笑む",
      "effects": {
        "happiness": 6,
        "morality": 4,
        "selfKnowledge": 2
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "そっと廊下を後にし、寝室へ戻って布団に入った。誰かを狂おしいほど好きになり、夜通し声を聴いていたいと願う娘の無我夢中な恋心に、母としての切なくも温かな愛おしさがこみ上げた。",
          "diary": "夜中に娘が恋人と甘く電話している声を偶然聞いてしまった。普段は見せないあんなに蕩けた声。恋の熱病に浮かされる娘の姿に、懐かしい青春の眩しさを感じた。"
        }
      ]
    },
    {
      "id": "choice_parenting_phone_call_flushed_bedroom",
      "label": "漏れ聞こえる甘い喘ぎ声に身体を火照らせ、寝室で待つ夫の胸に顔を埋める",
      "effects": {
        "happiness": 7,
        "intimacyNeed": 5,
        "sexualEffects": {
          "intimacy": 14,
          "libido": 16
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "寝室へ戻ると、眠っていた{partner}の腕の中に滑り込んだ。娘の生々しい吐息に当てられ、熱く火照った太ももを夫の足に絡ませる。「起きてたの？」と眠たげに抱き寄せてくれる夫の首筋に唇を吸い付け、愛液でぐっしょりと濡れた身体を密着させて夜明けまで求め合った。",
          "diary": "壁の向こうから漏れてきた娘の恋の熱気に、自分自身の身体までどうしようもなく疼いてしまった。寝室で夫に抱きつき、濃密な愛撫に身を委ねて火照りを鎮めた。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_contraception_talk",
  "title": "ドレッサーから落ちた小さな四角い小袋・母と娘の覚悟と真実の対話",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 16 && childAge <= 21);
  },
  "weight": 22,
  "once": true,
  "text": "娘の留守中、乾いた洗濯物を畳んで部屋のドレッサーに置こうとした瞬間。ポーチの金具が引っかかり、床へと転がり落ちた手のひら大の四角い銀色の小袋——コンドーム。静まり返る部屋に、パサリと落ちた小さな音。ちょうどそこへ「ただいまー」と帰宅した娘が部屋に入ってきた。床の小袋と私を見比べ、瞬時に顔面蒼白になって震え出す娘。「お母さん……ち、違うの、これは……」。恥辱と恐怖で泣き出しそうな瞳。母親として、そして同じ女性として、この小さなゴムの袋が意味する重みをどう受け止めるべきか……。",
  "choices": [
    {
      "id": "choice_parenting_contraception_reassure_talk",
      "label": "震える娘の手を両手で包み、「自分の身体を守ることは正しいのよ」と真摯に諭す",
      "effects": {
        "happiness": 7,
        "morality": 5,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "ベッドに並んで座り、震える娘の手をぎゅっと握った。「怒ってないわ。自分の身体と未来を守るために用意したんでしょう？ それはとても立派で大切なことよ」。母の温かい言葉に、娘は緊張が解けたように私の胸に顔を埋めてポロポロと涙を流した。",
          "diary": "娘の持ち物から避妊具を見つけ、二人でじっくりと話し合った。叱るのではなく、女性として身体を守る責任と愛の尊さを伝えられた。娘との信頼関係がより深いものになった。"
        }
      ]
    },
    {
      "id": "choice_parenting_contraception_past_weight",
      "label": "小袋をそっとポーチに戻しながら、かつて男と結ばれた日の自分の記憶に胸を焦がす",
      "effects": {
        "happiness": 5,
        "stress": 3,
        "sexualEffects": {
          "intimacy": 8,
          "libido": 12
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「何も言わなくていいわ」と小袋を拾い、ポーチの奥へと戻してチャックを閉めた。かつて自分も同じように小さな小袋を胸の奥に忍ばせ、激しい愛欲と恐怖に身を震わせながら男に処女を捧げた日の記憶が胸に迫り、母と女の狭間で激しく動揺した。",
          "diary": "娘の避妊具を見て、かつて自分が初めて男性を受け入れた日の生々しい記憶が蘇った。一人の自立した女性としての一歩を踏み出している娘の姿に、胸の鼓動がおさまらなかった。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_after_party_hangover",
  "title": "始発電車と崩れたメイク・夜の熱狂をまとう娘の生々しい気怠さ",
  "age": [
    38,
    70
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 18 && childAge <= 22);
  },
  "weight": 24,
  "once": true,
  "text": "日曜日の早朝、始発電車の走る音が遠くに響くリビング。玄関のドアが開き、靴を脱ぎ散らかしてへたり込む娘。大学のサークルやバイトの打ち上げから朝帰りした姿。わずかに浮いたファンデーション、滲んだマスカラ、衣服から漂う煙草と強いアルコールの混ざった匂い。シャワーを浴びてバスローブ一枚でリビングのソファに倒れ込み、「お母さん……お水……頭ガンガンする……」と気怠そうに手足を投げ出す娘。濡れた黒髪から立ち上る生々しい熱気と、大人の夜の熱狂を肌にまとった無防備な色香に、昔の自分の無茶な若さが鮮烈に重なる……。",
  "choices": [
    {
      "id": "choice_parenting_hangover_water_care",
      "label": "冷たい水と胃薬を差し出し、「無茶しすぎよ」と苦笑しながら濡れ髪を拭いてやる",
      "effects": {
        "happiness": 6,
        "stress": -2,
        "morality": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "氷水を手渡し、ソファでぐったりする娘の濡れた髪を乾いたタオルで優しく拭ってやった。「もう若くないんだから……って、まだ若いか」。苦笑する私に、娘は「お母さん、ありがと……」と甘えるように頭を預けてきた。",
          "diary": "お酒の席から始発で朝帰りした娘の介抱をした。気怠そうに甘えてくる姿に幼い頃の面影を感じつつ、大人の世界へ羽ばたいた娘の成長を眩しく思う。"
        }
      ]
    },
    {
      "id": "choice_parenting_hangover_reminisce_youth",
      "label": "脱ぎ捨てられた服の残り香に息を呑み、かつて夜の街で奔放に溺れた自らの熱狂を回想する",
      "effects": {
        "happiness": 5,
        "stress": 2,
        "sexualEffects": {
          "intimacy": 8,
          "libido": 14
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "脱衣所に脱ぎ捨てられた娘の衣服から立ち上る、夜の男たちの煙草と汗、そして強い香水の混ざった生々しい残り香。かつて自分も夜の街で男たちに囲まれ、奔放に身体を熱く焦がしていた狂乱の記憶が呼び覚まされ、洗濯機の前で一人、下腹の奥に甘い痺れを覚えてしまった。",
          "diary": "夜遊びから帰った娘の衣服に残る大人の匂い。かつて自分も同じように夜の街で熱狂に身を任せていたことを思い出し、身体の奥底が懐かしい火照りに包まれた。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_oversized_hoodie",
  "title": "借り物のぶかぶかなパーカーと濡れた髪・男の匂いに包まれて帰る娘",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 16 && childAge <= 21);
  },
  "weight": 24,
  "once": true,
  "text": "日曜日の早朝七時。玄関の鍵が開き、そろそろと忍び足で入ってきた娘の姿に息を呑む。昨夜出かけた時の可愛らしいブラウスではなく、膝上まで届く見慣れないグレーのダボダボなメンズパーカー。裾から伸びる細い生足、洗いたての濡れた髪から漂うホテルや男の部屋の甘いシャンプーの匂い。ファスナーを鎖骨の下まで下げた胸元には、昨夜の激しい情交を物語る赤紫色のキスマークが覗いている。明らかに男の服を身にまとい、所有され愛された証を隠すこともなく帰ってきた娘の生々しい現実に、全身の血がざわめき立つ……。",
  "choices": [
    {
      "id": "choice_parenting_hoodie_warm_tea",
      "label": "「彼の服？」と微笑んで温かいお茶を差し出し、大人の恋を包み込む",
      "effects": {
        "happiness": 6,
        "morality": 4,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "温かいマグカップを差し出しながら、「素敵なパーカーね」と優しく声をかけた。娘はビクッと肩を跳ねさせて顔を真っ赤に染め、「……うん、借りちゃった」と照れくさそうに微笑んだ。誰かに心も身体も愛されている娘の柔らかな表情に、母としての温かな安堵が広がった。",
          "diary": "男物の大きなパーカーを着て朝帰りした娘。昨夜の甘い時間が伝わってくるような姿に動揺しつつも、温かく受け止めた。恋をして綺麗になっていく我が子の成長を見守りたい。"
        }
      ]
    },
    {
      "id": "choice_parenting_hoodie_past_sweet_shame",
      "label": "男物の服に包まれた娘の無防備な色香を見つめ、かつて恋人の服を借りて帰った甘美な記憶に疼く",
      "effects": {
        "happiness": 5,
        "stress": 3,
        "sexualEffects": {
          "intimacy": 10,
          "libido": 15
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "ダボダボのパーカーから漂う見知らぬ男の体温と残り香に、かつて自分も同じように恋人の部屋で朝を迎え、彼のシャツを羽織って火照った身体で帰宅した若き日の記憶が生々しくフラッシュバックした。愛欲の余韻をまとった娘の艶めかしさに当てられ、下腹の奥がきゅうと甘く疼いて熱を帯びてしまった。",
          "diary": "彼の服を着て朝帰りした娘の姿に、昔の自分の甘美な記憶が重なった。男に愛され、その温もりに包まれて帰る時のあの独特の誇らしさと気怠さを思い出し、身体の芯が切なく熱くなった。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_broken_stockings",
  "title": "伝線した黒タイツと歩きにくそうな素足・ホテル街の残り香をまとう朝",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 17 && childAge <= 21);
  },
  "weight": 22,
  "once": true,
  "text": "日曜の朝六時半、そっと開いた玄関ドア。靴擦れで足が痛むのか、高いヒールを脱いで手に持ち、裸足に近いおぼつかない足取りで上がってきた娘。その太ももを包む薄い黒ストッキングは無残に大きく裂け、指先で引き裂かれたような生々しい伝線が白肌を晒している。バッグの隙間からは、ホテル特有の小さな使い捨て歯ブラシの小袋が覗いていた。洗面台へ向かい、うがいをして鏡を見つめる娘の放心したような横顔。愛欲の嵐に巻き込まれ、身体の奥深くまで貪り尽くされて戻ってきた娘の痛々しくも生々しい色香に、胸が締めつけられる……。",
  "choices": [
    {
      "id": "choice_parenting_stockings_first_aid",
      "label": "絆創膏とスリッパを差し出し、「無理しちゃダメよ」と痛む身体を労る",
      "effects": {
        "happiness": 6,
        "morality": 5,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "洗面所に駆け寄り、靴擦れで皮の剥けたかかとに優しく絆創膏を貼ってやった。「お母さん……」「靴擦れ、痛かったでしょ。お風呂沸いてるから、ゆっくり浸かりなさい」。娘は泣きそうな瞳で私の肩に顔を埋め、親の無言の慈愛に救われたように吐息を漏らした。",
          "diary": "伝線したタイツと靴擦れの足で朝帰りした娘。身体を投げ出して恋に溺れた後の疲弊した姿を優しく介抱した。傷つきながらも大人の階段を一歩ずつ登っていく娘を守ってあげたい。"
        }
      ]
    },
    {
      "id": "choice_parenting_stockings_perverse_sympathy",
      "label": "引き裂かれた黒レースの隙間から覗く白肌に息を呑み、激しい情交の残滓に身を震わせる",
      "effects": {
        "happiness": 4,
        "stress": 4,
        "sexualEffects": {
          "intimacy": 8,
          "libido": 16
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "伝線したタイツの内側に微かに滲む赤い肌の擦れ跡と、ホテル街の生々しい残り香。かつて自分も男に衣服を引き裂かれるほどの激情で貪られ、足腰をガタガタと震わせながら朝帰りの道を歩いた記憶が鮮烈に脳裏を焼き、激しい羞恥と興奮でショーツを蜜で濡らしてしまった。",
          "diary": "激しい逢瀬の痕跡を生々しく残して朝帰りした娘。女としての性を激しく暴かれて戻ってきた我が子の姿に、自分自身の過去の淫らな熱狂が呼び覚まされ、動悸と身体の火照りが止まらなかった。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_morning_bath_washing",
  "title": "朝帰りの足音と直行するシャワー・扉の向こうから立ち上る愛欲の湯気",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 16 && childAge <= 21);
  },
  "weight": 24,
  "once": true,
  "text": "早朝、玄関の鍵が開いたと思ったら、足音はリビングへ向かわず脱衣所へと一直線に消え、カチャリと内鍵が閉められた。すぐに勢いよく響き渡るシャワーの水音。着替えのバスタオルを届けようと脱衣所の前を通った時、脱ぎ散らかされたカゴの衣服から、濃厚に蒸れた愛液と男の生々しい匂いが鼻腔を突いた。浴室のすりガラスの向こう、身体の奥深くまで念入りに洗い流すような水音と、かすかに漏れる「はぁ……」という深い吐息。男のすべてを受け止め、その汚れを洗い落とそうとする娘の生々しい気配に、胸の鼓動が激しく早鐘を打つ……。",
  "choices": [
    {
      "id": "choice_parenting_bath_towel_care",
      "label": "脱衣所のドアノブに清潔なバスタオルと着替えを掛け、静かに立ち去る",
      "effects": {
        "happiness": 6,
        "morality": 4,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "ふかふかの清潔なバスタオルとパジャマをドアノブにそっと掛け、「お風呂から上がったら温かいお茶あるからね」と小さく声をかけて立ち去った。お風呂から出てきた娘は、清潔なタオルを胸に抱きしめ、母親の細やかな気遣いに感謝するように微笑んだ。",
          "diary": "朝帰りしてすぐお風呂場へ駆け込んだ娘。何も言わずに温かいタオルと着替えを用意してあげた。全てを洗い流して自分を取り戻そうとする娘のプライドを大切にしてあげたい。"
        }
      ]
    },
    {
      "id": "choice_parenting_bath_steamy_scent_turmoil",
      "label": "脱ぎ捨てられた下着から立ち上る淫臭に息を呑み、男に汚された日の記憶に下腹を濡らす",
      "effects": {
        "happiness": 5,
        "stress": 3,
        "sexualEffects": {
          "intimacy": 12,
          "libido": 16
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "脱衣所に漂う生々しい男女の交わりの残り香と、シャワーの湯気の熱気。かつて自分も一晩中激しく注ぎ込まれた男の痕跡を、朝のシャワーで洗い流しながら身体の痺れを噛み締めていた記憶が全身を駆け抜け、脱衣所の前で膝を震わせながらショーツを熱く湿らせてしまった。",
          "diary": "朝帰りの娘が浴びるシャワーの音と、脱ぎ捨てられた衣服から香る愛欲の匂いに、自分自身の淫らな過去が蘇ってしまった。女として身体の奥が激しく疼き、抗えない動悸に苛まれた。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_morning_tears_embrace",
  "title": "朝露の玄関に崩れ落ちる娘の涙・早すぎた一線と母の抱擁",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 15 && childAge <= 19);
  },
  "weight": 22,
  "once": true,
  "text": "早朝、玄関ドアが開く音とともに、バタンと崩れ落ちるような重い物音が響いた。慌てて玄関へ駆けつけると、靴を脱ぎかけたままの娘がたたきにしゃがみ込み、両手で顔を覆ってボロボロと大粒の涙を流していた。「お母さん……私、どうしよう……バカなことしちゃった……」。乱れた髪、首筋に赤く残る噛み跡、身体の痛みに震える我が子。愛された喜びよりも、早すぎた一線への恐怖と、流されてしまった後悔に打ちひしがれている。目の前で震える我が子を見つめ、母としての全身全霊の愛が激しく湧き上がる……。",
  "choices": [
    {
      "id": "choice_parenting_tears_tight_hug",
      "label": "たたきに膝をついて娘を力いっぱい抱きしめ、「大丈夫、お母さんがいるよ」と涙を拭う",
      "effects": {
        "happiness": 7,
        "stress": -4,
        "morality": 5,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "冷たい床に膝をつき、震える娘を全身で抱きしめた。「大丈夫よ、何も心配いらない。お母さんが全部受け止めてあげる」。私の胸で声を上げて泣きじゃくる娘の背中を、落ち着くまで何度も優しくさすり続けた。母娘の絆がかつてなく強く結ばれた朝。",
          "diary": "朝帰りした娘が玄関で泣き崩れた。後悔と痛みに震える我が子を力いっぱい抱きしめた。どんな過ちがあっても、世界中が敵になっても、私はこの子の母として絶対に味方であり続ける。"
        }
      ]
    },
    {
      "id": "choice_parenting_tears_painful_reminisce",
      "label": "娘を抱きしめながら、かつて自分も若気の至りで傷つき泣いた朝の痛みに胸を締めつける",
      "effects": {
        "happiness": 5,
        "stress": 2,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "娘を抱き寄せながら、かつて自分も男の都合のいい言葉に流され、身体を許した後に一人で泣きながら帰宅した遠い日の傷が生々しく疼いた。「泣かないで、あなたの価値は何も減ったりしないわ」。自分自身の過去を癒やすように、娘の涙を優しく拭ってやった。",
          "diary": "傷ついて朝帰りした娘を抱きしめた。自分も通ってきた若さゆえの過ちと痛みが胸に刺さり、涙が止まらなかった。この痛みを乗り越えて、どうか強い女性になってほしい。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_confident_woman",
  "title": "朝陽の中で淹れる二人分の珈琲・一人の女として向き合う娘の瞳",
  "age": [
    37,
    70
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 18 && childAge <= 22);
  },
  "weight": 24,
  "once": true,
  "text": "日曜日の朝陽が燦々と差し込むキッチン。カチャリと玄関の鍵が開き、「お母さん、おはよう」と落ち着いた声が響いた。朝帰りでありながら、俯くこともなく晴れやかな笑顔で入ってきた娘。昨夜の服を綺麗に着こなし、髪を整え、その瞳にはどこか大人の女としての深い艶と自信が宿っている。娘はエプロンを手に取り、慣れた手つきで二人分の珈琲を淹れ始めた。「お母さん、珈琲飲むでしょ？ ……私ね、大好きな人ができたの。昨日の夜、ちゃんとお互いの気持ちを確かめ合ってきたんだ」。一人の自立した女性として、まっすぐに母を見つめる娘の瞳に、眩しい世代交代の瞬間を見る……。",
  "choices": [
    {
      "id": "choice_parenting_confident_toast_coffee",
      "label": "珈琲を受け取って微笑み、「今度、彼を家に連れてきなさいね」と大人の祝福を贈る",
      "effects": {
        "happiness": 8,
        "morality": 4,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "温かいマグカップを合わせ、「おめでとう。今度、その素敵な彼を家に連れてらっしゃい」と微笑んだ。娘は嬉しそうに瞳を輝かせ、「うん、絶対に連れてくる！」と笑った。親子の枠を超え、一人の自立した女性同士として認め合えた至福の朝。",
          "diary": "朝帰りした娘が、堂々と愛する人との絆を報告してくれた。少女から完全に大人の女性へと脱皮した娘の眩しい瞳に、親としての最高の達成感と幸福感を覚えた。"
        }
      ]
    },
    {
      "id": "choice_parenting_confident_reminisce_bloom",
      "label": "女として美しく開花した娘の輝きに息を呑み、恋に満たされていた自らの黄金期を懐かしむ",
      "effects": {
        "happiness": 7,
        "passion": 4,
        "sexualEffects": {
          "intimacy": 10,
          "libido": 12
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "珈琲を飲みながら娘の艶やかな肌と潤んだ瞳を見つめた。本気で愛し合い、愛された女だけが放つ圧倒的な輝き。かつて自分も男と深く愛し合って全身が幸福に満たされていた黄金の季節を思い起こし、母としても女としても誇らしく胸が満たされた。",
          "diary": "恋をして美しく花開いた娘の姿。誰かと深く結ばれた女の誇らしげな輝きに、自分自身の若き日の愛の軌跡が重なり、温かい幸福感に包まれた。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_pill_sheet",
  "title": "ポーチの底の銀色のピルシート・自分の身体を自ら守る娘の決意",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 16 && childAge <= 22);
  },
  "weight": 24,
  "once": true,
  "text": "娘から頼まれてバッグからハンドクリームを取り出そうとした際、小分けポケットの奥から銀色の小さなブリスターパックが指先に触れた。取り出すと、曜日と数字が丁寧に印刷された28錠の低用量ピルのシート。毎日決まった時間にきちんと飲まれている丸い錠剤の列。男任せにせず、自らの意志で産婦人科を受診し、自分の未来と身体をコントロールしようとする娘の成熟した責任感。かつて男性側の都合に流され、怯えながら過ごした若き日の自分を思い返し、娘の確かな自立に胸が打たれる……。",
  "choices": [
    {
      "id": "choice_parenting_pill_sheet_praise",
      "label": "娘の自立心と身体への責任感を誇らしく思い、定期検診のサポートを約束する",
      "effects": {
        "happiness": 7,
        "morality": 5,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "シートをそっと戻し、後でお茶を飲みながら「ピル飲んでるのね。副作用はない？ 病院代、お母さんも出してあげるからね」と優しく伝えた。娘は驚いて赤面した後、「ありがとう……自分でちゃんと決めたんだ」と誇らしげに微笑んだ。母娘の深い信頼が結ばれた瞬間。",
          "diary": "娘の持ち物から低用量ピルのシートを見つけた。男任せにせず自分の身体を自分で守る娘の自立心を誇りに思う。母として身体のケアを全面的に支えてあげたい。"
        }
      ]
    },
    {
      "id": "choice_parenting_pill_sheet_reminisce_helpless",
      "label": "ピルを飲む娘の強さに感銘を受けつつ、かつて無防備に男に翻弄されていた自分を省みる",
      "effects": {
        "happiness": 5,
        "stress": 2,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "規則正しく飲まれているピルを見つめながら、かつて自分が避妊の知識も乏しいまま男の情欲に身を委ね、毎月生理が来るか冷や汗を流して祈っていた過去を思い起こした。時代の変化とともに、強く賢く生きる娘の姿に胸を打たれた。",
          "diary": "自らピルを服用して身体をコントロールしている娘の姿。かつて男性に主導権を握られて怯えていた昔の自分と比べ、娘のたくましさと聡明さに深い感慨を覚えた。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_pregnancy_test_scare",
  "title": "洗面所のゴミ箱に沈む白いスティック・青ざめる娘と祈るような陰性",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 16 && childAge <= 21);
  },
  "weight": 22,
  "once": true,
  "text": "深夜、洗面所のゴミ箱のゴミ袋を替えようとした時のこと。ティッシュで何重にも厳重に包まれた細長い塊。不審に思って開くと、現れたのは使用済みの妊娠検査薬。判定窓には、くっきりと一本の青い線——陰性。そこへ青ざめた顔で忍び足でやってきた娘。ゴミ箱の前で立ち尽くす私と目が合った瞬間、娘は膝から崩れ落ちて震え出した。「お母さん……生理が二週間も来なくて……本当に怖かった……っ」。生きた心地のしなかった娘の恐怖と、陰性の安堵。避妊に絶対はないという現実を前に、震える我が子を前にして母としての胸が締めつけられる……。",
  "choices": [
    {
      "id": "choice_parenting_pregnancy_scare_embrace",
      "label": "床に座り込んで娘をぎゅっと抱きしめ、「怖かったね、一人で抱えなくていいの」と涙を拭う",
      "effects": {
        "happiness": 7,
        "stress": -4,
        "morality": 5,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "震える娘を抱き寄せ、冷たくなった背中を力いっぱい温めた。「陰性でよかった……本当に怖かったわね。でも次は絶対に一人で悩まないで。お母さんがいつでも味方だから」。娘は私の胸で声を押し殺して泣きじゃくり、心の底から救われたように息を吐いた。",
          "diary": "洗面所のゴミ箱から娘の妊娠検査薬を見つけた。陰性の結果に安堵しつつ、一人で恐怖に耐えていた娘を強く抱きしめた。避妊の責任と身体の重みを二人でしっかりと噛み締めた夜。"
        }
      ]
    },
    {
      "id": "choice_parenting_pregnancy_scare_past_terror",
      "label": "陰性のスティックを見つめ、かつて自分も冷や汗を流して検査薬を握りしめた記憶に動悸する",
      "effects": {
        "happiness": 5,
        "stress": 3,
        "sexualEffects": {
          "intimacy": 8,
          "libido": 12
        }
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "娘の肩を抱きながら、かつて自分も激しい愛欲の果てに生理が遅れ、震える指先で検査薬の結果を待っていた若き日の恐怖と生々しい記憶がフラッシュバックした。女性として避けて通れない性の重圧と熱情の代償に、母と女の両面で心が激しく揺さぶられた。",
          "diary": "娘の妊娠の不安に直面し、かつて自分も同じように震えていた若い日の恐怖が鮮烈に蘇った。快楽の裏にある命の重みと責任を、母娘で痛感した。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_morning_after_pill",
  "title": "破れたゴムと日曜日・娘の手を引いて駆け込む産婦人科クリニック",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 16 && childAge <= 21);
  },
  "weight": 20,
  "once": true,
  "text": "日曜日の早朝、真っ青な顔をした娘が私の寝室のドアをノックした。「お母さん……どうしよう……昨日の夜、避妊具が破れちゃって……」。72時間以内の緊急避妊薬（アフターピル）のタイムリミット。休日に開いているレディースクリニックを即座にスマホで検索し、「着替えて、すぐ行くわよ！」と娘の手を引いて車に飛び乗った。クリニックの待合室、恥ずかしさと不安で震える娘の氷のような手を強く握りしめる。「大丈夫。お母さんが全部ついてるから」。男の無責任さに胸の奥で怒りを燃やしながら、娘の身体と人生を守るため、母として全力で盾となる……。",
  "choices": [
    {
      "id": "choice_parenting_after_pill_protect",
      "label": "診察室で娘の手を握り締め、薬の服用を見届けて母として全力で守り抜く",
      "effects": {
        "happiness": 7,
        "morality": 5,
        "selfEfficacy": 4,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "女医さんの前で娘に寄り添い、処方された緊急避妊薬をクリニックのウォーターサーバーですぐに飲ませた。「よくすぐにお母さんに話してくれたわね」と医師に褒められ、娘は安堵の涙を零した。帰りの車の中、娘の未来を確実に守り切った母としての達成感に胸が震えた。",
          "diary": "避妊失敗でパニックになった娘を連れて休日のクリニックへ駆け込み、アフターピルを処方してもらった。娘が隠さず頼ってくれたこと、迅速に守れたことに母としての誇りを感じた。"
        }
      ]
    },
    {
      "id": "choice_parenting_after_pill_bitter_past",
      "label": "待合室の空気と内診台に、かつて男の快楽のツケを背負わされそうになった苦い過去を噛み締める",
      "effects": {
        "happiness": 5,
        "stress": 3,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "待合室の独特の消毒液の匂いの中、かつて自分も男の「大丈夫だから」という無責任な言葉を信じて傷つき、一人で産婦人科の門をくぐった過去の痛みが疼いた。女だけが身体のリスクを背負わされる理不尽さを娘と共有し、より賢く強い女性へと導く決意を固めた。",
          "diary": "娘のアフターピル受診に付き添い、女として生きることの身体的責任と理不尽さを改めて痛感した。苦い経験を乗り越え、娘には自分の尊厳を何よりも大切にしてほしい。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_gynecology_first_visit",
  "title": "初めてのレディースクリニック・母から娘へと手渡す身体のお守り",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 16 && childAge <= 22);
  },
  "weight": 24,
  "once": true,
  "text": "性経験を始めた娘のために、「一度、ちゃんとした婦人科検診に行っておこうか」と提案し、二人で訪れた信頼できるレディースクリニック。清潔なアロマの香る待合室。子宮頸がん検診や生理痛の相談、性感染症の検査。緊張で唇を引き結ぶ娘の背中を優しくさすり、「恥ずかしいことなんて何もないのよ。自分の身体を大切にするための健診なんだから」。検査を終え、医師から「どこも異常ありませんよ」と告げられた娘のホッとした笑顔。母から娘へと手渡す、一生モノの身体への慈しみと知識のバトン。",
  "choices": [
    {
      "id": "choice_parenting_gynecology_cafe_toast",
      "label": "検診の後、お気に入りのカフェでケーキを食べながら女性の身体について語り合う",
      "effects": {
        "happiness": 8,
        "morality": 4,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "クリニックの帰り道、おしゃれなカフェで二人で紅茶とタルトを囲んだ。「検診、思ったより怖くなかった！ 連れてきてくれてありがとう」。笑顔で話す娘と、生理や避妊、将来の身体のことをざっくばらんに語り合い、大人の女性同士の温かな絆を深めた。",
          "diary": "娘と一緒に初めての婦人科検診へ。自分の身体を慈しみ、定期的にメンテナンスする大切さを伝えられた。カフェで笑い合った時間は、母娘のかけがえのない思い出。"
        }
      ]
    },
    {
      "id": "choice_parenting_gynecology_mature_pride",
      "label": "真摯に自分の身体と向き合う娘の横顔に、一人の成熟した女性として頼もしさを覚える",
      "effects": {
        "happiness": 7,
        "selfEfficacy": 4,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "医師の問診にしっかりと受け答えする娘の横顔を見つめた。かつて手を引いて歩いていた幼子が、今は立派に自分の肉体と健康に責任を持つ一人の女性として立っている。母としての役目を一つ果たしたような、誇らしい充足感に包まれた。",
          "diary": "婦人科の問診に堂々と答える娘の姿を見て、確かな成長を感じた。無知ゆえに傷つくことなく、自分の身体の主権者として歩んでいく娘を心から誇らしく思う。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_condom_talk_with_boyfriend",
  "title": "「彼が生で着けたくないって言うの」・愛と自尊心の境界線を教える母の言葉",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 15 && childAge <= 20);
  },
  "weight": 22,
  "once": true,
  "text": "夕食後、リビングで二人きりになった時、娘が伏し目がちにぽつりと相談してきた。「お母さん……相談があるの。彼がね、生の方が気持ちいいからゴムを着けたくないって言ってくるの。断ると不機嫌になるし、嫌われたくなくて……」。娘の唇の震えを見た瞬間、胸の奥で激しい怒りと痛烈な悲しみが渦巻いた。娘の両手をしっかりと握り、その瞳をまっすぐに見つめる。「いい、よく聞いて。あなたの身体と命を天秤にかけてまで自分の快楽を優先する男なんて、本当の愛じゃないのよ」。母として、女として、決して譲ってはならない尊厳の境界線を伝える……。",
  "choices": [
    {
      "id": "choice_parenting_condom_talk_dignity",
      "label": "「NOと言えない関係は愛じゃないわ」と毅然と導き、自分を安売りしない自尊心を叩き込む",
      "effects": {
        "happiness": 7,
        "morality": 5,
        "selfKnowledge": 5
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「避妊を拒否されたら、その場ですぐ服を着て帰りなさい。あなたを大切にできない男に、あなたの美しい身体を触る資格なんてないの」。母の凛とした眼差しと魂の言葉に、娘はハッと目を覚ましたように涙を拭い、「うん……私、ちゃんと断る！」と力強く頷いた。",
          "diary": "避妊を嫌がる彼氏に悩む娘に、毅然として自尊心の大切さを教えた。愛されるために自分を犠牲にしてはいけない。強い女性として自分の尊厳を守る勇気を持ってくれた。"
        }
      ]
    },
    {
      "id": "choice_parenting_condom_talk_past_regret",
      "label": "かつて自分も男の甘い言葉に流されそうになった苦い経験を打ち明け、後悔のない選択を促す",
      "effects": {
        "happiness": 6,
        "morality": 4,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「実はお母さんもね、昔同じようなことを言われて泣いたことがあるのよ」。自分の若き日の失敗と傷を正直に打ち明けると、娘は驚きながらも真剣に耳を傾けてくれた。「同じ痛みをあなたには味わってほしくないの」。母の生々しい告白が、娘の心に深く刻まれた。",
          "diary": "昔の自分の過ちを娘に打ち明け、避妊を拒む男の身勝手さを諭した。綺麗事ではなく一人の女としての真実を話したことで、娘も深く納得してくれた。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_first_time_gait_and_scent",
  "title": "ぎこちない歩調と甘い体熱・娘が初めてを捧げた日の帰宅",
  "age": [
    35,
    65
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 15 && childAge <= 20);
  },
  "weight": 22,
  "once": true,
  "text": "日曜の夕暮れ、デートから帰ってきた娘を出迎えた玄関先。靴を脱ぐ動作に、内股を庇うようなごく僅かなぎこちなさがあった。廊下ですれ違った瞬間、いつもの柑橘系の香水とは違う、男のムスクの残り香と、蒸れた皮膚から立ち上る生々しく甘い体熱の匂いが鼻腔をかすめた。頬は朱に染まり、目を合わせようとせずうつむく娘。女の直感が電撃のように確信させた——今日、この子は処女を失い、大人の階段を一歩踏み出したのだ……。",
  "choices": [
    {
      "id": "choice_parenting_first_time_warm_bath",
      "label": "何も詮索せず「お風呂沸いてるから、ゆっくり温まってきなさい」と優しく背中を押す",
      "effects": {
        "happiness": 7,
        "stress": -3,
        "morality": 5,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "余計な言葉は呑み込み、疲れて強張った娘の肩をそっと撫でて湯船を勧めた。娘はほっと息を吐き、「うん、ありがとう……」と脱衣所へ急いだ。多くを語らずとも受け止めてあげる優しさが、親子の信頼を深めた。",
          "diary": "ぎこちない足取りと男の匂いで帰宅した娘。処女を失ったのだと直感したが、あえて何も言わず温かいお風呂を勧めた。大人の女への第一歩を静かに見守りたい。"
        }
      ]
    },
    {
      "id": "choice_parenting_first_time_reminisce_innocence_lost",
      "label": "初体験の痛痒と陶酔に揺れる娘の背中を見送り、かつての自分の「あの瞬間」に胸を疼かせる",
      "effects": {
        "happiness": 5,
        "stress": 2,
        "tabooAwareness": 4,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "おぼつかない足取りで自室へ向かう娘の後ろ姿を見つめながら、かつて自分が初めて男の肉体を受け入れた日の痛快と、下腹部に残る甘い痺れを昨日のことのように思い出した。少女の殻を破った娘の官能的な気配に、自らの肌の奥までもがじんわりと熱を帯びるのを感じた。",
          "diary": "初めて男を知って帰ってきた娘の姿に、遠い昔の自分の初体験の生々しい感触が重なった。女としての感覚に目覚めた我が子に、複雑で甘美な共鳴を覚えた。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_first_time_laundry_blood_faint",
  "title": "洗濯カゴのショーツ・下着の奥に滲むわずかな純潔の証",
  "age": [
    35,
    65
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 15 && childAge <= 20);
  },
  "weight": 22,
  "once": true,
  "text": "休日の朝、洗濯物を仕分けていた脱衣所でのこと。娘の脱衣カゴに入っていた綿のショーツを取り上げたとき、クロッチの布地に目を奪われた。洗面所で慌てて水洗いしたのか湿り気を帯びており、念入りに擦り洗いされた繊維の奥に、うっすらと指先ほどの淡い薄紅色の染みが残っていた。生理の経血とは明らかに違う、初めて裂かれた粘膜が流した純潔の血痕。娘の密やかな秘密が手の中で湿っぽく伝わり、息が止まるような動悸に襲われた……。",
  "choices": [
    {
      "id": "choice_parenting_laundry_blood_clean_silently",
      "label": "娘の恥じらいを思い、漂白剤で丁寧に染みを落として何事もなかったように干す",
      "effects": {
        "happiness": 6,
        "stress": -2,
        "morality": 4,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "娘が必死に隠そうとして落としきれなかった秘密。気づかないふりをして専用の洗剤で綺麗に洗い流し、真っ白に戻して風の通るベランダに干した。母として娘の恥じらいとプライバシーを静かに守り抜いた。",
          "diary": "洗濯カゴのショーツに残された微かな処女喪失の染み。娘の必死の隠蔽を察し、何も言わずに綺麗に洗い落として干した。母にできる無言の庇護だった。"
        }
      ]
    },
    {
      "id": "choice_parenting_laundry_blood_sweet_pain_resonance",
      "label": "染みの残る布地を掌でそっと包み、無垢な少女から女へと生まれ変わった奇跡に胸を詰まらせる",
      "effects": {
        "happiness": 5,
        "stress": 1,
        "tabooAwareness": 3,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "手のひらの中の冷たい布地を見つめながら、あの小さかった赤ん坊が、いまや一人の男を受け入れる成熟した肉体を持ち、痛みを伴いながら女になった事実に目眩がした。神聖でありながらどこか生々しい背徳の気配に、胸の奥が熱く疼いた。",
          "diary": "娘のショーツに残るわずかな血痕を見つめ、娘が一人の女として結ばれた現実を噛み締めた。身体の成熟と神秘に深い感慨と熱い疼きを覚えた。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_first_time_bath_hickey_glance",
  "title": "湯上がりのうなじ・鎖骨に残された紅い鬱血痕と潤んだ眼差し",
  "age": [
    35,
    65
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 15 && childAge <= 20);
  },
  "weight": 22,
  "once": true,
  "text": "帰宅後すぐさま一時間近くシャワーを浴びていた娘。濡れた髪をタオルで拭きながらリビングに現れた娘に、ドライヤーをかけてあげようと背後に回った。襟足をかき上げた瞬間、目に飛び込んできたのは、うなじから鎖骨のくぼみにかけて刻まれた、いくつもの鮮やかな紅いキスマーク。鏡越しに目が合うと、娘の瞳はこれまでの少女の無垢な光ではなく、情欲を貪られ男の熱に溺れた女特有の、濡れたような艶を湛えていた……。",
  "choices": [
    {
      "id": "choice_parenting_bath_hickey_gentle_whisper",
      "label": "髪を梳かしながら「首筋、髪でちゃんと隠しなさいね」と悪戯っぽく耳元で囁く",
      "effects": {
        "happiness": 8,
        "morality": 3,
        "selfKnowledge": 5
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "ドライヤーの風を当てながら耳元で優しく囁くと、娘は顔中を真っ赤にして両手で首元を押さえた。「お母さん、気づいてたの……っ」「当たり前でしょ、私も女なんだから」。恥ずかしそうに身をよじる娘の頭を撫でると、秘密を共有した共犯者のような微笑みがこぼれた。",
          "diary": "湯上がりの娘の首筋に残された生々しいキスマーク。からかい半分に髪で隠すよう囁くと、娘は真っ赤になって照れていた。母娘でありながら同じ女同士の親密な時間が流れた。"
        }
      ]
    },
    {
      "id": "choice_parenting_bath_hickey_protect_health",
      "label": "身体の痛みや違和感がないかさりげなく尋ね、女性特有の体調変化を気遣う",
      "effects": {
        "happiness": 6,
        "stress": -3,
        "morality": 5,
        "selfKnowledge": 3
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「下腹部とか、痛いところはない？ 大丈夫？」と温かいココアを渡しながら小声で尋ねると、娘は小さく驚きながらも「うん……ちょっと重いけど平気。心配してくれてありがとう」と素直に頷いた。無防備になりがちな身体の変化をしっかりケアできた。",
          "diary": "キスマークをつけた娘の身体を気遣い、下腹部の痛みや違和感がないか尋ねた。初めての行為による肉体の負担に寄り添い、安心感を与えることができた。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_first_time_bed_afternoon_daze",
  "title": "休日の自室のベッド・下腹部を抱えて恍惚の余韻を反芻する娘",
  "age": [
    35,
    65
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 15 && childAge <= 20);
  },
  "weight": 22,
  "once": true,
  "text": "洗濯物を取り込もうと娘の部屋のドアを軽くノックしたが返事がない。隙間からそっと覗くと、娘はベッドの上で丸くなり、毛布を下半身に引き寄せて天井をぼんやり見つめていた。ノックの音にも気づかないほど深い放心。その指先は無意識のように自分の唇をなぞり、首筋、そして胸元へと滑り落ちていく。男に激しく愛撫され貫かれた肉体の疼きを、一人で反芻しているかのような濃密な色香が部屋中に充満していた……。",
  "choices": [
    {
      "id": "choice_parenting_bed_daze_leave_quietly",
      "label": "邪魔をしないようそっと扉を閉じ、娘だけの甘美な余韻の時間を守ってあげる",
      "effects": {
        "happiness": 6,
        "stress": -2,
        "morality": 4,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "音を立てないようにゆっくりとドアを引いた。初めて誰かに全身を委ね、心も身体も塗り替えられた直後のあのみずみずしい時間は、誰にも奪われてはならない宝物だ。娘の成長を遠くから見守り、静かにリビングへと戻った。",
          "diary": "自室のベッドでぼんやりと愛の余韻に浸る娘の姿。初めて男を知った日のあの陶酔を守るため、声をかけずにそっと部屋を離れた。"
        }
      ]
    },
    {
      "id": "choice_parenting_bed_daze_intoxicated_mother",
      "label": "艶めかしい娘の姿に、自らの子宮が甘くうずくような熱い目眩を覚える",
      "effects": {
        "happiness": 5,
        "stress": 1,
        "tabooAwareness": 4,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "ベッドで甘く乱れた娘の横顔を見つめているうちに、自分自身の奥底にも熱い波が押し寄せ、下腹がキュッと疼いた。男の感触を噛み締める娘の生々しい色気に当てられ、母親である前に一人の雌としての本能が刺激されるような、禁断の昂ぶりを覚えた。",
          "diary": "初体験の甘い余韻に沈む娘の姿から漂う生々しい色香に、自分自身の身体の奥までもが疼くような錯覚を覚えた。女の性を継承した娘の姿に圧倒された。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_first_time_confession_late_night",
  "title": "深夜の台所・「お母さん、痛かった？」と小さく問いかける娘",
  "age": [
    35,
    65
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 15 && childAge <= 20);
  },
  "weight": 22,
  "once": true,
  "text": "真夜中の一時過ぎ、喉の渇きを覚えて台所に降りると、間接照明の下で娘がマグカップを両手で抱えてうずくまっていた。足音に驚いて振り返った娘の瞳は潤んで赤く、どこか切なげだった。「眠れないの？」と隣に腰掛けると、娘は膝を抱え、消え入りそうな声でぽつりと呟いた。「お母さん……初めてのときって、やっぱり痛かった？……私、痛くて怖くて……でも、嬉しかったの……」。打ち明けられた小さな告白に、胸が熱く震えた……。",
  "choices": [
    {
      "id": "choice_parenting_confession_warm_tea_guidance",
      "label": "温かいハーブティーを淹れて隣に座り、「痛かったけど、大切な思い出よ」と優しく抱きしめる",
      "effects": {
        "happiness": 8,
        "stress": -4,
        "morality": 5,
        "selfKnowledge": 5
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "湯気立つカモミールティーを娘の前に置き、その華奢な肩を抱き寄せた。「お母さんも痛くて泣きそうだったわ。でも好きな人と結ばれる痛みは、怖がらなくていいの。よく話してくれたね」。娘は私の肩に顔を埋めて静かに涙を流し、心の強張りを溶かしていった。",
          "diary": "深夜の台所で、初体験の痛みと喜びを打ち明けてくれた娘。温かいお茶を飲みながら母娘で女の身体と心の痛みを分かち合い、かけがえのない絆を結んだ。"
        }
      ]
    },
    {
      "id": "choice_parenting_confession_adult_sensual_secret",
      "label": "「痛みの先にある本当の快感」について、母から娘への大人の手解きを静かに語る",
      "effects": {
        "happiness": 6,
        "stress": -1,
        "tabooAwareness": 3,
        "selfKnowledge": 5
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「身体が慣れてくるとね、痛みは全部とろけるような快感に変わっていくのよ」。一人の大人の女性として、身体が感じていく仕組みと愛される悦びについて優しく解き明かした。娘は赤面しながらも真剣に瞳を輝かせ、未知の世界へ進む勇気を得たようだった。",
          "diary": "初めてを終えた娘に、痛みがいずれ愛と快感に変わっていく女性の身体の神秘を教えた。少し照れくさかったが、娘にとって大切な導きとなったはずだ。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_late_night_orgasm_doubt",
  "title": "深夜の台所・「女の人がイクってどういう感じ？」と悩む娘",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 16 && childAge <= 23);
  },
  "weight": 22,
  "once": true,
  "text": "丑三つ時、冷水を飲みに台所に降りると、カウンターで娘が頬杖をついてぼんやりしていた。氷をグラスに入れる私に、娘は爪先を見つめながらぽつりと呟いた。「ねえ、お母さん……女の人がイクって、本当はどういう感じなの？ 彼はいっぱい気持ちよくなってくれるけど……私は気持ちいいのかよく分からなくて。私がおかしいのかな」。真面目な子だからこそ、快感に達せない自分に劣等感を抱えている。深夜の静寂の中、女の性の本質を打ち明けられる……。",
  "choices": [
    {
      "id": "choice_parenting_orgasm_doubt_gentle_advice",
      "label": "「頭で考えず身体を預けるのよ」と教え、女性の快感のグラデーションを優しく解き明かす",
      "effects": {
        "happiness": 7,
        "stress": -4,
        "morality": 4,
        "selfKnowledge": 5
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「男性みたいに分かりやすいゴールじゃないの。全身が波に包まれるようにじわじわ溶けていくのも立派な絶頂なのよ。演技なんてしなくていいの」。肩の力を抜いてあげる母の言葉に、娘は胸を撫で下ろし、「なんだ、私がおかしいわけじゃないんだ……」と微かな笑みを浮かべた。",
          "diary": "オーガズムに達せないと悩む娘に、女性の快感の奥深さと心の解放を教えた。男性の都合に合わせたプレッシャーから解き放ち、安心感を与えることができた。"
        }
      ]
    },
    {
      "id": "choice_parenting_orgasm_doubt_sensual_resonance",
      "label": "自らが快感に溺れ、潮を吹くほどの痙攣を覚えた時の記憶がよみがえり肌を熱くする",
      "effects": {
        "happiness": 5,
        "stress": 1,
        "tabooAwareness": 4,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "娘の切実な疑問に答えながら、かつて自分が快楽の深淵に呑まれ、息も絶え絶えに腰を跳ねさせて絶頂に達した時の生々しい痺れが脳裏をよぎった。身体の芯がじんわりと疼き、娘に大人の女の秘め事を受け継ぐ背徳的な悦びに酔った。",
          "diary": "娘に快感の真髄を教えながら、自分自身の情欲と絶頂の記憶が生々しく疼いた。母と娘でありながら、同じ快楽を求める雌としての血の連なりを実感した。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_late_night_fetish_shame",
  "title": "深夜の台所・「乱暴にされると濡れちゃうの」・背徳の快感に怯える娘",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 17 && childAge <= 23);
  },
  "weight": 22,
  "once": true,
  "text": "夜更けのキッチン、暗がりの中で娘が背中を丸めて震えていた。心配して声をかけると、娘は顔を両手で覆い、恥辱に涙を滲ませながら絞り出すように打ち明けてきた。「お母さん、軽蔑しないで……。彼にきつく抱きすくめられたり、ちょっと意地悪に命令されたりすると……怖いはずなのに、下着がぐしょぐしょに濡れちゃうの。私、頭がおかしいのかな……変態なのかな……っ」。自らの肉体が示す歪んだ淫靡な反応に怯える娘の姿に、胸が締めつけられる……。",
  "choices": [
    {
      "id": "choice_parenting_fetish_shame_accept",
      "label": "娘の手を包み込み「変なんかじゃないわ。支配される悦びも女の肉体の一部よ」と肯定する",
      "effects": {
        "happiness": 8,
        "stress": -5,
        "morality": 3,
        "selfKnowledge": 5
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「恥じることなんて一つもないわ。無防備に屈服させられる快感は、多くの女性が心の奥に隠し持っている本能なのよ」。娘の涙を優しく拭い、肉体の反応を受け入れて抱きしめると、娘は激しい安堵に嗚咽を漏らして私の胸にすがりついた。",
          "diary": "被虐的な快感に目覚めて自責の念に怯えていた娘。それは女性の深層にある自然な官能だと教え、自己嫌悪から救い出してあげることができた。"
        }
      ]
    },
    {
      "id": "choice_parenting_fetish_shame_safety_warning",
      "label": "快感を否定せず受け止めつつも、本当の暴力や危険には絶対にNOと言うよう釘を刺す",
      "effects": {
        "happiness": 7,
        "morality": 5,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「感じるのは自由だけど、本当に嫌なことや痛いだけの暴力には絶対にNOと言いなさい。プレイと虐待の境界線は見失わないこと」。母としての厳しい眼差しで釘を刺すと、娘はハッと表情を引き締め、「うん……ちゃんと自分の身を守る」と誓った。",
          "diary": "背徳的なプレイを求める娘の感覚を肯定しつつ、合意なき暴力や支配に呑まれないための安全な境界線を教え込んだ。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_late_night_sex_frequency_gap",
  "title": "深夜の台所・「身体目的なのかな」・求められすぎる重圧と愛の不安",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 16 && childAge <= 23);
  },
  "weight": 22,
  "once": true,
  "text": "真夜中、リビングのソファで膝を抱えていた娘。淹れたての温かいミルクティーを差し出すと、娘はカップの温もりを確かめながら消え入りそうな声で呟いた。「会うとね、デートらしいデートもあんまりしないで、すぐ部屋に行って服を脱がされるの。痛くても疲れてても求められて……断ったら嫌われちゃうんじゃないかって。私のこと、身体目的でしか見てないのかな……」。若い男の激しすぎる情欲と、断れない娘の葛藤が胸を締めつける……。",
  "choices": [
    {
      "id": "choice_parenting_sex_frequency_encourage_refusal",
      "label": "「疲れているときはハッキリ断りなさい。それで去る男ならそこまでよ」と毅然と励ます",
      "effects": {
        "happiness": 7,
        "stress": -3,
        "morality": 5,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「身体を差し出すことが愛情表現じゃないの。あなたがつらいなら『今日は寝かせて』って言えなきゃダメ。それで怒るような男なら、こっちから捨ててやりなさい」。母のきっぱりとした言葉に、娘はふっと肩の荷が下りたように涙ぐみ、頷いた。",
          "diary": "彼氏の過剰な情欲に怯え身体目的を疑っていた娘に、毅然と拒絶する権利と尊厳を教えた。都合のいい女にならないための強い意志を授けた。"
        }
      ]
    },
    {
      "id": "choice_parenting_sex_frequency_men_nature_talk",
      "label": "若い男の盛んな性欲の仕組みを解説し、愛され方のコントロールを大人の知恵として伝授する",
      "effects": {
        "happiness": 6,
        "selfKnowledge": 5
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「あの年代の男の子はね、あなたが好きすぎて理性が追いつかない部分もあるのよ。でもだからこそ、女側が手綱を引いて焦らす技を覚えなさい」。男の情欲の操り方を少し悪戯っぽく伝授すると、娘はクスリと笑い、自信を取り戻した眼差しになった。",
          "diary": "男の性欲の衝動とコントロール法を娘に伝授した。ただ怯えるのではなく、男を手玉に取る大人の女の知恵を教えることができた。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_late_night_masturbation_guilt",
  "title": "深夜の台所・「自分でお風呂で触っちゃう」・秘められた自慰と罪悪感の告白",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 16 && childAge <= 23);
  },
  "weight": 22,
  "once": true,
  "text": "深夜、長風呂から上がってきた娘が、濡れ髪のまま台所でうつむいていた。氷を浮かべた水を渡すと、娘は喉を鳴らして飲み干し、赤く火照った首筋を隠すように縮こまった。「お母さん……私、自分が汚いんじゃないかって落ち込んでて。一人でお風呂に入ってるときとか……下腹がうずいて、指で触っちゃうの。イクとすごくみじめで罪悪感があって……」。成熟した肉体が求める自然な自慰の衝動に、一人で苦しんでいたのだ……。",
  "choices": [
    {
      "id": "choice_parenting_masturbation_healthy_affirmation",
      "label": "「身体が健康に育っている証拠よ」と微笑み、セルフプレジャーの自然さを肯定する",
      "effects": {
        "happiness": 8,
        "stress": -5,
        "morality": 4,
        "selfKnowledge": 5
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「汚いことなんて何一つないわ。自分の身体がどこをどう触られると気持ちいいか知るのは、女性にとってとても自然で大切なことよ」。母の柔らかな肯定に、娘は目を見開き、張り詰めていた心の棘がぽろぽろと涙になってこぼれ落ちた。",
          "diary": "自慰への罪悪感に苛まれていた娘に、女性の身体にとって自然で健やかな行為だと教えた。深い羞恥の呪縛を解き、自分を慈しむ感覚を肯定できた。"
        }
      ]
    },
    {
      "id": "choice_parenting_masturbation_sensual_empathy",
      "label": "自らも夜の湯船で指を這わせ、甘い痙攣に身を震わせる女の性を思って静かに頷く",
      "effects": {
        "happiness": 5,
        "stress": 1,
        "tabooAwareness": 4,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "娘の火照った肌を見つめながら、自分自身もまた一人寝の夜にシーツの中で秘唇を擦り合わせ、快楽の波に溺れる生身の女であることを強く意識した。同じ肉体の業を抱えた娘の背中を、言葉少なに温かく撫でてやった。",
          "diary": "一人で身体を慰める娘の告白を聞き、同じ女としての情欲の疼きを共有した。女が避けて通れない肉体の衝動を静かに認め合った。"
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "story_parenting_daughter_late_night_body_complex_intimacy",
  "title": "深夜の台所・「胸やあそこの形が嫌で脱げない」・裸への恐怖とコンプレックス",
  "age": [
    36,
    68
  ],
  "trigger": "normal",
  "classification": "major",
  "is_major": true,
  "content_rating": "adult",
  "presets": [
    "has_children"
  ],
  "requires": function (s) {
    const childAge = s.flags?.childBirthAge ? (s.age - s.flags.childBirthAge) : null;
    return !!(s.flags?.hasChildren && s.flags?.child_born && childAge !== null && childAge >= 16 && childAge <= 23);
  },
  "weight": 22,
  "once": true,
  "text": "深夜のキッチンでアイスをすくっていた娘。スプーンを止めて、伏し目がちに呟いた。「ねえお母さん……部屋を真っ暗にしないと服を脱げないの。胸も小さいし、それに……あそこの形とか色も、変なんじゃないかってすごく怖くて。彼にじっと見られたら幻滅されるんじゃないかって……」。ネットの過剰な情報や男性目線の偏見に傷つき、自分の神聖な肉体にコンプレックスを抱き縮こまる娘。女として最も脆く繊細な痛みが吐露される……。",
  "choices": [
    {
      "id": "choice_parenting_body_complex_praise_beauty",
      "label": "「あなたの身体はみずみずしくて本当に綺麗よ」と抱きしめ、唯一無二の美しさを吹き込む",
      "effects": {
        "happiness": 8,
        "stress": -4,
        "morality": 5,
        "selfKnowledge": 5
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「誰一人として同じ形の人なんていないの。ネットの不自然な画像なんかと比べちゃダメ。本当にあなたを愛している男性なら、そのすべてを宝物のように愛おしんでくれるわ」。母の温かい眼差しに、娘は胸を撫で下ろし、涙ぐみながら強く抱きついてきた。",
          "diary": "胸や性器の形にコンプレックスを抱き裸を怖がっていた娘に、唯一無二の女性の美しさと尊さを伝えた。深い劣等感を和らげ、自信を取り戻させることができた。"
        }
      ]
    },
    {
      "id": "choice_parenting_body_complex_mother_own_insecurity",
      "label": "かつて自分も同じように悩み、愛されることで克服してきた体験談を打ち明ける",
      "effects": {
        "happiness": 7,
        "morality": 4,
        "selfKnowledge": 4
      },
      "outcomes": [
        {
          "weight": 1,
          "narrative": "「実はお母さんも昔、胸の形が気になって電気を消してばかりいたのよ」。笑いながら若き日の劣等感を打ち明けると、娘は安心したように瞳を丸くして聞き入った。「愛し合うことで、自然と恥ずかしさは消えていくものよ」。母の生きた実感が娘の心を解きほぐした。",
          "diary": "かつて自分も抱えていた肉体へのコンプレックスを娘に話し、共感を示した。母も同じ道を歩んだと知ることで、娘の恐怖心はすっかり晴れたようだった。"
        }
      ]
    }
  ]
});











