// ============================================================================
// Pack: 07_partner_relationship_intimacy — 交際パートナーとの日常・対話・情交・関係の変化 (42 events)
// ============================================================================
window.defineEvent({
  "id": "partner_loving_passion_after_date",
  "title": "夜景デートの後の二人だけの部屋 〜愛を確かめ合う甘美な交わり〜",
  "age": [
    18,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "rel_stage_intimate"
  ],
  "weight": 40,
  "availability": {
    "once_per_life": false,
    "cooldown_months": 6,
    "max_occurrences": 30,
    "unique_key": "partner_loving_passion_after_date"
  },
  "partner_intimacy_boost": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "夜景の見えるレストランでのロマンチックなデートの帰り道。二人の部屋のドアが閉まり、静寂に包まれた瞬間、抑えきれない熱情とともに抱き寄せられる。唇を重ねるごとに理性が溶け出し、愛し合う身体が貪り合うようにシーツの上へと倒れ込んだ。",
  "choices": [
    {
      "id": "choice_0",
      "label": "相手の首に腕を回して抱きつき、熱い口づけを受け入れながら身体を預ける",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 5,
            "desire": 3,
            "intimacyNeed": 3,
            "stress": -4,
            "sexualEffects": {
              "intimacy": 15,
              "libido": 5,
              "passion": 10
            }
          },
          "narrative": "部屋の鍵が閉まった途端、引き寄せられた身体。脱がされるコートの下で、ブラウス越しに胸の先端が強くつまみ上げられ、甘い痺れが腰へと走った。ベッドに押し倒され、濡れて熱を帯びた下着を優しく脱がされると、すでに溢れ出ていた愛液が太ももの内側を滑り落ちる。『ずっと君に触れたかった』と囁かれ、露わになった蜜口をじっくりと指と舌で舐め解きほぐされる。敏感なクリトリスを吸い上げられるたびに下腹部がきゅうんと収縮し、待ちきれないように秘肉を震わせた。互いの鼓動が重なる中、太い熱情がねっとりと湿った肉腔の奥深くまで沈み込んでくる。満たされる歓喜に背中を反らせ、相手の首筋に爪を立てながら、愛の言葉とともに何度も激しい絶頂へと昇りつめた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "恥ずかしがりながらも相手の服のボタンを外し、自ら求めて肌を重ねる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "desire": 4,
            "initiative": 2,
            "stress": -3,
            "sexualEffects": {
              "intimacy": 12,
              "libido": 6,
              "passion": 8
            }
          },
          "narrative": "火照った顔を相手の胸元に埋めながら、震える指先で相手のシャツのボタンをひとつずつ外していく。晒された温かい肌に唇を寄せると、相手の呼吸が荒くなり、下腹部に硬い熱情が押し当てられた。求め合っている実感が愛液をさらにあふれさせ、じっとりと湿った蜜壺がひくひくと疼く。シーツの上に押し広げられた両脚の間に相手が割り込み、濡れそぼった粘膜を掻き分けながら一気に最奥の子宮口まで突き上げられた。突き入れられるたびにぬちぬちと卑猥な水音が部屋に響き、愛おしさと快楽の波に呑まれながら熱狂的に腰を揺らした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "デートの後の二人きりの部屋。抱きしめられた瞬間から頭が真っ白になって、求められるまま身体を重ねた。相手の肌の匂いと温もりに包まれて、奥まで貫かれるたびに愛されている実感が溢れて止まらなかった。",
    "恥ずかしかったけれど、自分からも相手を求めてしまった。肌と肌が擦れ合う音と荒い吐息……。心も身体も完全に一つになれたような、甘くて濃密な最高の夜だった。"
  ],
  "femaleVariant": {
    "text": "夜景の見えるレストランでのロマンチックなデートの帰り道。二人の部屋のドアが閉まり、静寂に包まれた瞬間、抑えきれない熱情とともに彼女に抱き寄せられる。柔らかな唇を重ねるごとに理性が溶け出し、愛し合う女同士の身体が貪り合うようにシーツの上へと倒れ込んだ。",
    "choices": [
      {
        "id": "choice_0",
        "label": "彼女の首に腕を回して抱きつき、熱い口づけを受け入れながら身体を預ける",
        "outcomes": [
          {
            "id": "outcome_0",
            "weight": 1,
            "description": "彼女の首に腕を回して抱きつき、熱い口づけを受け入れながら身体を預ける。",
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
        "label": "恥ずかしがりながらも彼女のブラウスのボタンを外し、自ら求めて柔肌を重ねる",
        "outcomes": [
          {
            "id": "outcome_1",
            "weight": 1,
            "description": "恥ずかしがりながらも彼女のブラウスのボタンを外し、自ら求めて柔肌を重ねる。",
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
      "デートの余韻のままベッドに倒れ込み、彼女の柔らかな唇と指先に全身を愛撫された。甘い香りと濡れた水音に包まれて、幸せな絶頂に何度も震えた。",
      "自分から彼女の服を脱がせ、熱い素肌を密着させた。互いの蜜で濡れた肌を擦り合わせ、朝まで愛を囁き合った。"
    ]
  }
});

window.defineEvent({
  "id": "partner_passion_lifestyle",
  "title": "パートナーとの親密な時間",
  "title_template": "パートナーとの情事 〜{variation_title}〜",
  "age": [
    18,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "sex_experienced",
    "rel_stage_intimate"
  ],
  "weight": 85,
  "partner_intimacy_boost": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "choices": [
    {
      "id": "choice_passionate",
      "stance": "passionate",
      "label": "自ら腰を浮かせて求め、相手を強く抱きしめる",
      "effects": {
        "desire": 6,
        "intimacyNeed": 5,
        "mood": 4,
        "stress": -2
      }
    },
    {
      "id": "choice_surrender",
      "stance": "surrender",
      "label": "羞恥に顔を染めながらも、されるがまま身体を委ねる",
      "effects": {
        "desire": 4,
        "shyness": 3,
        "mood": 3,
        "stress": -1
      }
    },
    {
      "id": "choice_tease",
      "stance": "tease",
      "label": "深くは許さず、肌の触れ合いと焦らしに留める",
      "effects": {
        "desire": 5,
        "boundaryVoice": 3,
        "mood": 2
      }
    },
    {
      "id": "choice_reluctant",
      "stance": "reluctant",
      "label": "少し気乗りしない風を装い、溜め息まじりに受け入れる",
      "effects": {
        "stress": 2,
        "boundaryVoice": -2,
        "mood": 1
      }
    },
    {
      "id": "choice_refuse",
      "stance": "refuse",
      "label": "「明日は早いから…」とそっと手を押しとどめる",
      "effects": {
        "boundaryVoice": 4,
        "stress": -1
      }
    }
  ],
  "variations": [
    {
      "sub_id": "morning_bed",
      "title": "陽だまりの日曜の朝、二度寝のシーツの中で",
      "description": "休日の朝、カーテンから差し込む柔らかな光の中、素肌に触れる熱い手のひら。微睡みの中で下着を滑り落ち、濡れた指先が秘唇の奥へ滑り込んでくる……。",
      "tags": [
        "indoor",
        "sweet"
      ],
      "outcomes": {
        "passionate": {
          "text": "恥ずかしさよりも疼きが勝り、自ら太ももを割って奥深く貫かれる熱い喜びに声を上げて啼いた。朝の光の中で激しく重なり合い、汗ばむ皮膚が擦れ合う湿った水音が部屋に満ちていった。",
          "diary": "休日の朝、彼とベッドの中で熱く求め合った。身体の奥深くまで満たされて、シーツに沈む身体が心地いい。",
          "sexualEffects": {
            "desire": 6,
            "intimacyNeed": 6
          }
        },
        "surrender": {
          "text": "朝から火照る身体を隠すように枕に顔を埋め、されるがまま奥を突かれる快感に耐えた。耳元で愛を囁かれるたび、下腹がきゅうと収縮して蜜を滴らせてしまう。",
          "diary": "朝の微睡みの中、彼に求められるまま身体を委ねた。羞恥で顔が熱いのに、身体は正直に濡れていた。",
          "sexualEffects": {
            "desire": 4,
            "shyness": 4
          }
        },
        "tease": {
          "text": "先端だけを押し当てて奥までは許さず、切なそうに息を荒げる彼の顔を見て背徳的な快感を覚えた。「意地悪だな…」と漏らす彼の唇を奪い、寸止めで弄び合った。",
          "diary": "今朝は寸止めで彼を焦らしてしまった。困ったように欲しがる表情に、胸の奥が甘く疼いた。",
          "sexualEffects": {
            "desire": 5,
            "secrecy": 3
          }
        },
        "reluctant": {
          "text": "眠気とだるさに眉をひそめながらも、熱い身体を押し付けられると拒みきれず溜め息をついた。緩慢に揺すられる快感に、知らず知らず吐息が熱を帯びていく。",
          "diary": "まだ眠かったけれど、彼の熱情に押し切られて朝の営みを受け入れた。少し疲れたけれど悪くはなかった。",
          "sexualEffects": {
            "desire": 2,
            "stress": 1
          }
        },
        "refuse": {
          "text": "「もう、起きて朝ご飯にしよう」と胸に手を当てて優しく押し戻した。名残惜しそうに唇を尖らせる彼の髪を撫で、二人で笑い合ってベッドから抜け出した。",
          "diary": "今朝はスキンシップだけにして起き上がった。たまにはこういう穏やかな朝の始まりもいい。",
          "sexualEffects": {
            "intimacyNeed": 2
          }
        }
      }
    },
    {
      "sub_id": "steamy_bathtub",
      "title": "湯船の中の密やかな戯れ",
      "description": "湯けむりが立ち込める浴室、二人で肩を並べて湯船に浸かっていると、水中を這う手が太ももの内側へと忍び寄ってきた。温まった身体は敏感に熱を帯び、指が触れるだけで吐息が漏れる……。",
      "tags": [
        "indoor",
        "wet"
      ],
      "outcomes": {
        "passionate": {
          "text": "滑らかな素肌を擦り合わせ、湯船の縁に手をかけて自ら腰を沈めた。温かい湯の中で粘膜が密着し、浮力で押し上げられる深い結合に甘い嬌声を湯気に溶かした。",
          "diary": "湯船の中で彼と激しく結ばれた。波打つ水音と熱い吐息が浴室に反響して、夢のように淫らだった。",
          "sexualEffects": {
            "desire": 7,
            "intimacyNeed": 5
          }
        },
        "surrender": {
          "text": "湯の中で背後から抱きすくめられ、乳房と秘唇を同時にまさぐられて為す術もなくのけぞった。逃げ場のない温もりの中で、波紋を広げながら身体の芯まで蕩かされた。",
          "diary": "お風呂で後ろから抱きしめられ、されるがまま感じてしまった。湯気の向こうの自分の顔が真っ赤だった。",
          "sexualEffects": {
            "desire": 4,
            "shyness": 5
          }
        },
        "tease": {
          "text": "湯の中で太ももをきつく閉じて焦らし、指先で彼の胸元を撫で回してじらした。切なそうに息を飲む彼を見上げ、上目遣いに悪戯っぽい微笑みを浮かべた。",
          "diary": "お風呂で彼を焦らして遊んだ。触れそうで触れさせない距離感が、かえって肌を熱くさせた。",
          "sexualEffects": {
            "desire": 4,
            "secrecy": 4
          }
        },
        "reluctant": {
          "text": "のぼせそうだと小さく零しながらも、熱い胸板に背中を預けて弄ばれる感触を受け入れた。ぬるい湯の中でじわじわと込み上げる刺激に、微かな喘ぎが漏れた。",
          "diary": "湯あたりしそうだったけれど、彼の求める手に身を預けた。少しだるさが残ったけれど温まった。",
          "sexualEffects": {
            "desire": 2,
            "stress": 1
          }
        },
        "refuse": {
          "text": "「のぼせちゃうから、お風呂から上がってからね」とお湯をぱしゃりと跳ねて立ち上がった。濡れた身体をバスタオルで包み、浴室のドアを閉めて一息ついた。",
          "diary": "お風呂での悪戯は冗談めかして断った。脱衣所の涼しい風に、火照った肌が冷まされていくのが心地よかった。",
          "sexualEffects": {
            "boundaryVoice": 2
          }
        }
      }
    },
    {
      "sub_id": "night_balcony",
      "title": "夜風のベランダ、カーテン越しの背徳",
      "description": "深夜、静まり返った部屋から夜風に誘われてベランダへ出ると、背後から音もなく抱きすくめられた。隣家の灯りが薄く漏れる中、スカートの裾が静かに捲り上げられる……。",
      "tags": [
        "thrill",
        "outdoor"
      ],
      "outcomes": {
        "passionate": {
          "text": "夜風に肌を晒す背徳感に下腹が熱く疼き、自ら手すりに体重を預けて腰を突き出した。外の微かな街の音に怯えながらも、奥深くまで突き上げられる激痛のような快感に耐えかねて声を殺して啼いた。",
          "diary": "夜のベランダで、誰かに見られるかもしれないスリルに震えながら結ばれた。背徳の快感が頭から離れない。",
          "sexualEffects": {
            "desire": 8,
            "secrecy": 6
          }
        },
        "surrender": {
          "text": "薄暗い夜風の中で口を塞がれ、カーテンの陰で音を立てないように犯される恥辱に震えた。震える膝を支えられながら、身体の奥が激しく濡れそぼっていくのを止められなかった。",
          "diary": "ベランダの薄暗がりで、声を殺して抱かれた。冷たい夜風と身体の奥の熱さの落差に眩暈がした。",
          "sexualEffects": {
            "desire": 5,
            "shyness": 6
          }
        },
        "tease": {
          "text": "「誰かに見えちゃうかも…」と囁きながら、下着の上から布越しに押し当てて焦らした。夜の暗がりの中で息を荒げる彼の首筋に唇を寄せ、じらす楽しさにゾクゾクした。",
          "diary": "ベランダの闇に紛れて、布越しに彼を焦らした。見つかるかもしれない緊迫感に、胸が早鐘を打った。",
          "sexualEffects": {
            "desire": 5,
            "secrecy": 5
          }
        },
        "reluctant": {
          "text": "外の冷気に震えながら「早く部屋に戻ろう」と小声で急かしたが、強引に弄られる手の熱さに逆らえなかった。手すりを握りしめ、短く荒い息を吐きながら嵐が過ぎるのを待った。",
          "diary": "見つかったらどうするの、と冷や汗をかきながら受け入れた。心臓に悪いけれど、妙な昂ぶりがあった。",
          "sexualEffects": {
            "desire": 3,
            "stress": 3
          }
        },
        "refuse": {
          "text": "「こんなところで絶対にダメ！」と必死に身を捩って腕をすり抜け、カーテンの隙間から部屋へと逃げ込んだ。鍵をカチャリと閉め、胸を押さえて荒い息を整えた。",
          "diary": "ベランダでの誘いは全力で断って部屋に戻った。あんなスリル、とても心臓が保たない。",
          "sexualEffects": {
            "boundaryVoice": 4
          }
        }
      }
    },
    {
      "sub_id": "hot_spring_trip",
      "title": "二人きりの客室露天風呂と湯けむり",
      "description": "温泉宿の離れ、夜の静寂に包まれた客室露天風呂。立ち込める硫黄の香りと湯けむりの中、乱れた浴衣の裾から差し込まれる指が、秘唇の蜜を掬い取って淫靡な水音を立てる……。",
      "tags": [
        "travel",
        "sweet"
      ],
      "outcomes": {
        "passionate": {
          "text": "浴衣を肌蹴けて露天の岩肌に背を預け、湯上がりの火照った身体を惜しみなく晒した。旅先の開放感に背中を押され、太い熱情を芯まで貪るように腰を揺すり、夜空の月を見上げて甘く啼いた。",
          "diary": "温泉宿の露天風呂で、夜風に吹かれながら熱く交わった。心も身体も完全にほどけて、彼と一つに溶け合えた。",
          "sexualEffects": {
            "desire": 7,
            "intimacyNeed": 6
          }
        },
        "surrender": {
          "text": "畳敷きの縁側に押し倒され、湯冷ましをする間もなく熱く重ねられた身体に身を任せた。障子一枚の向こうの虫の声を聞きながら、奥まで満たされる快感に小さく喘ぎ声を漏らした。",
          "diary": "露天風呂のすぐそばで彼に抱かれた。旅先の静けさの中で、濡れた肌が擦れ合う音だけが響いていた。",
          "sexualEffects": {
            "desire": 5,
            "shyness": 4
          }
        },
        "tease": {
          "text": "浴衣の帯を緩めたまま指先で彼の胸元をくすぐり、湯気の向こうで視線を絡ませて焦らした。もどかしそうに腰を引き寄せる彼を手のひらで制し、夜風に吹かれて笑いかけた。",
          "diary": "露天風呂の湯けむりの中で彼をじらした。浴衣の乱れを気にする素振りをしながら、彼の熱い視線を楽しんだ。",
          "sexualEffects": {
            "desire": 5,
            "secrecy": 4
          }
        },
        "reluctant": {
          "text": "長湯で疲れたから休みたいと訴えたが、浴衣をめくられて首筋に吸い付かれると拒めなかった。畳の上に横たわり、微睡みの中で心地よい重みを受け止めた。",
          "diary": "温泉で身体がだるかったけれど、彼の求めに静かに応じた。そのまま二人で深い眠りに落ちた。",
          "sexualEffects": {
            "desire": 3,
            "stress": -1
          }
        },
        "refuse": {
          "text": "「お風呂上がりの美味しい地酒を飲もうよ」と浴衣の襟を正して座卓へと誘った。畳の上で乾杯し、夜風を感じながら旅の思い出を語り合った。",
          "diary": "露天風呂の後はゆっくりとお酒を味わって過ごした。身体の疲れが芯から抜けていく贅沢な夜だった。",
          "sexualEffects": {
            "intimacyNeed": 3
          }
        }
      }
    }
  ]
});

window.defineEvent({
  "id": "partner_sex_reconciliation_makeup",
  "title": "口論の後の沈黙と強引な抱擁 〜仲直りのための機嫌取りセックス〜",
  "age": [
    18,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "rel_stage_established"
  ],
  "weight": 40,
  "availability": {
    "once_per_life": false,
    "cooldown_months": 8,
    "max_occurrences": 20,
    "unique_key": "partner_sex_reconciliation_makeup"
  },
  "partner_intimacy_boost": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "生活の些細な食い違いから起きた口論。冷え切った空気のまま迎えた夜。言葉では素直に謝れない相手が、不意に寝室で強引に身体を引き寄せてくる。怒りと悔しさが残る心とは裏腹に、乱暴な愛撫と熱情に身体の芯が抗えず疼き始める。",
  "choices": [
    {
      "id": "choice_0",
      "label": "怒りで胸を押し返しながらも、乱暴なピストンに抗えず身体を濡らして屈服する",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 2,
            "desire": 4,
            "stress": -2,
            "shyness": 2,
            "sexualEffects": {
              "intimacy": 12,
              "libido": 6,
              "passion": 12
            }
          },
          "narrative": "家事の分担かすれ違いか、激しい口論の末に訪れた重苦しい沈黙。まだ許していないのに、寝室に入ってきた相手に背後から強引に腕を掴まれ、ベッドへと押し倒される。『離して！』と胸板を叩いて抵抗するけれど、無言のまま乱暴にスカートが捲られ、ショーツを引き裂かんばかりにずらされる。怒りで火照った秘裂に、容赦のない力で一気に根元まで突き立てられた。『んっ、痛……っ！』と睨みつけたはずなのに、激しく腰を打ち付けられるたび、子宮の奥に突き刺さる強烈な熱情に抗えなくなっていく。悔しいのに、腹が立っているのに、愛液がじゅぶじゅぶと音を立てて溢れ出し、相手の首筋に噛みつきながら、屈辱と激しい快楽の絶頂に呑み込まれてしまった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "「もう怒ってないから…」と相手の背中にしがみつき、仲直りのぬくもりを受け入れる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "intimacyNeed": 3,
            "stress": -3,
            "sexualEffects": {
              "intimacy": 15,
              "libido": 4,
              "passion": 9
            }
          },
          "narrative": "強引な抱擁の中に、相手の不器用な謝罪と焦りを感じて、こわばっていた身体の力がすっと抜けた。重ね合わされる唇から伝わる熱さに涙がこぼれ、身体を密着させて仲直りの交わりに身を委ねた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "喧嘩の後、まだ許してなかったのに無理やり抱かれた。最初はすごく怒っていたのに、奥を激しく突かれているうちに身体が言うことを聞かなくなって、激しく感じてしまった自分が情けない。",
    "仲直りのセックス。言葉で謝るのが下手な相手の強引さに負けてしまったけれど、身体を重ねたらわだかまりが消えて、少しホッとした。"
  ],
  "femaleVariant": {
    "text": "生活の些細な食い違いから起きた口論。冷え切った空気のまま迎えた夜。言葉では素直に謝れない彼女が、不意に寝室で強引に身体を引き寄せてくる。怒りと悔しさが残る心とは裏腹に、熱を帯びた指先の愛撫と吐息に身体の芯が抗えず疼き始める。",
    "choices": [
      {
        "id": "choice_0",
        "label": "怒りで肩を押し返しながらも、執拗な指と舌の愛撫に抗えず身体を濡らして屈服する",
        "outcomes": [
          {
            "id": "outcome_0",
            "weight": 1,
            "description": "怒りで肩を押し返しながらも、執拗な指と舌の愛撫に抗えず身体を濡らして屈服する。",
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
        "label": "「もう怒ってないから…」と彼女の背中にしがみつき、仲直りのぬくもりを受け入れる",
        "outcomes": [
          {
            "id": "outcome_1",
            "weight": 1,
            "description": "「もう怒ってないから…」と彼女の背中にしがみつき、仲直りのぬくもりを受け入れる。",
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
      "喧嘩したままだったのに、強引に抱きすくめられて敏感な場所を責められると、悔しいほどすぐに濡れてしまった。最後は涙目で彼女にしがみついて果てた。",
      "意地を張っていた心が、彼女の熱い体温に触れた瞬間にほどけた。言葉の代わりに何度も唇と肌を重ねて仲直りした。"
    ]
  }
});

window.defineEvent({
  "id": "positive_flirting",
  "title": "好意を伝える楽しさ",
  "age": [
    18,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered"
  ],
  "weight": 17,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "交際相手に、いつもより素直に好意を伝えたくなった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "言葉で伝える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "言葉で伝える。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 1
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "小さな贈り物を選ぶ",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "小さな贈り物を選ぶ。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "相手の反応を見ながら伝える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "相手の反応を見ながら伝える。",
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
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "mutual_talk",
    "shared_activity",
    "mutual_talk"
  ]
});

window.defineEvent({
  "id": "partner_intimacy_female",
  "title": "女性パートナーとの親密な夜 〜指と舌が溶け合う蜜月〜",
  "age": [
    18,
    70
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "female_partner",
    "rel_stage_intimate"
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
  "partner_intimacy_boost": true,
  "text": "寝室の明かりを落とし、女性パートナーと素肌を重ねる。ふんわりと柔らかい乳房が押し当たり、互いの太ももが絡み合う。彼女の温かい舌先が首筋から下腹へと滑り落ち、充血した秘唇をそっと吸い上げると、下腹の奥から激しい愛液が溢れ出してシーツを濡らす。",
  "choices": [
    {
      "id": "choice_0",
      "label": "奥深くまで舌を入れて蜜を吸い尽くしてもらう",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "彼女の髪に指を絡め、奥深くまで舌を入れて蜜を吸い尽くしてもらう。",
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
                "eventId": "partner_passion_lifestyle",
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
      "label": "濡れそぼった秘所同士を激しく擦り合わせながら同時に果てる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "体勢を入れ替え、濡れそぼった秘所同士を激しく擦り合わせながら同時に果てる。",
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
      "id": "choice_2",
      "label": "指先で互いの身体を愛撫しながら静かに絶頂を迎える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "優しく抱き締め合い、指先で互いの身体を愛撫しながら静かに絶頂を迎える。",
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
    "彼女の柔らかい唇と舌が秘所を這い回るたび、腰が勝手に跳ねてしまった。女同士だからこそ分かる繊細な愛撫に、身体中が愛液で満たされた。",
    "重なり合う白い柔肌、ぬちぬちと擦れ合う蜜唇の水音。互いに腰を押しつけ合って同時に絶頂を迎えた瞬間、胸が愛しさで張り裂けそうだった。",
    "激しい行為だけでなく、互いの肌の温もりを慈しむような愛撫。彼女の腕の中で眠りに落ちる幸せに包まれた。"
  ]
});

window.defineEvent({
  "id": "partner_intimacy_male",
  "title": "男性パートナーとの親密な夜 〜太い熱情に貫かれる歓喜〜",
  "age": [
    18,
    70
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "male_partner",
    "rel_stage_intimate"
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
  "partner_intimacy_boost": true,
  "is_major": true,
  "text": "薄暗い寝室で、男性パートナーの逞しい腕に抱きすくめられる。男らしい汗と石鹸の匂いが鼻腔をくすぐり、太ももを力強く押し開かれる。硬く熱く充血した肉塊が、濡れそぼった肉腔の入口を押し広げ、一気に最奥の子宮口まで突き入れられた……！",
  "choices": [
    {
      "id": "choice_0",
      "label": "子宮を激しくノックされるピストンに腰を打ち返して狂乱する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "背中に爪を立て、子宮を激しくノックされるピストンに腰を打ち返して狂乱する。",
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
                "prob": 0.8
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "奥深くまで突き入れられたままじっくりと腰を回されて蕩ける",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "胸に顔を埋め、奥深くまで突き入れられたままじっくりと腰を回されて蕩ける。",
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
      "label": "背後から深く抉られる激しい快感に声を殺して震える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "後ろから抱きすくめられ、背後から深く抉られる激しい快感に声を殺して震える。",
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
    "奥まで突かれるたびに頭が真っ白になって、みっともないほど声をあげてシーツを掴んでいた。太い熱情で掻き回される熱い感触に、身体中が痙攣して果てた。",
    "深く繋がったまま、ゆっくりと腰を揺すられる甘い痺れ。彼に抱きしめられながら、子宮の奥底まで愛で満たされていくのを感じた。",
    "背後から組み敷かれ、逃げ場のないまま奥深くを突かれた。激しいピストンの衝撃に翻弄され、愛液を飛び散らせながら絶頂を繰り返した。"
  ]
});

window.defineEvent({
  "id": "positive_romance_talk",
  "title": "恋愛観を語り合う",
  "age": [
    18,
    70
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
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
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
    }
  },
  "text": "友人と恋愛や親密さについて率直に話し、互いの違いを面白く感じた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自分の希望も話す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "自分の希望も話す。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 1
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "positive_self_discovery",
                "delay": 1,
                "prob": 0.85
              }
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
      "label": "相手の話をじっくり聞く",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "相手の話をじっくり聞く。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": -1
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
      "label": "自分だけの考えを大切にする",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "自分だけの考えを大切にする。",
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
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": -1
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 2
    },
    {
      "selfAcceptance": 2
    },
    {
      "boundaryVoice": 2
    }
  ]
});

window.defineEvent({
  "id": "adult_self_discovery",
  "title": "夜の静寂と自らの愛欲の輪郭",
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
  "text": "一人きりの寝室、薄いシーツの擦れる感触を素肌に味わいながら、自分がどのような愛撫を望み、どのような熱情で抱かれたいのかを自問する。恥じらいの奥に隠された、生々しく熱い雌としての欲求の形を静かに見つめ直す。",
  "choices": [
    {
      "id": "choice_0",
      "label": "欲求の形を整理する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "シーツに身を沈めて身体の奥の疼きを確かめ、欲求の形を整理する。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "自らの本当の好みを言葉にして伝える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "信頼できる親密な相手に、自らの本当の好みを言葉にして伝える。",
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
    "肌に触れる空気の冷たさと、下腹の奥の湿った熱さ。自分が本当に快感を感じるポイントや望むシチュエーションを反芻し、自らの性を受け入れた。",
    "恥ずかしさに頬を赤らめながらも、自分が求めている触れられ方を相手に伝えた。受け止めてもらえた安堵感に、身体の強張りが解けた。"
  ]
});

window.defineEvent({
  "id": "positive_date_idea",
  "title": "二人で楽しい時間を計画",
  "age": [
    18,
    75
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered"
  ],
  "weight": 19,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "交際相手と、二人が楽しめる休日の過ごし方を考えた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "少し特別なデートを企画する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "少し特別なデートを企画する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "二人で行き先を決める",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "二人で行き先を決める。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 1
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -10000
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
      "label": "家でゆっくり過ごす",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "家でゆっくり過ごす。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "shared_activity",
    "mutual_talk",
    "shared_activity"
  ]
});

window.defineEvent({
  "id": "positive_self_expression",
  "title": "自分らしい魅力を楽しむ",
  "age": [
    18,
    75
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 16,
  "text": "身だしなみや装いを通じて、自分らしさを表現したくなった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "好きな装いを試す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "好きな装いを試す。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
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
                "eventId": "yearning_lingerie_fantasies",
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
      "label": "誰かと好みを語り合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "誰かと好みを語り合う。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 1
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -10000
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "気負わず自然体で過ごす",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "気負わず自然体で過ごす。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
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
    }
  ]
});

window.defineEvent({
  "id": "sweet_lingering_passion",
  "title": "日常に蘇る肌の記憶",
  "age": [
    18,
    75
  ],
  "trigger": "state_narrative",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
  "weight": 0,
  "once": true,
  "auto_trigger": {
    "flag": "partner_intimacy_streak",
    "minVal": 2,
    "monthOffset": 1
  },
  "is_narrative": true,
  "narrative_type": "followup",
  "text": "情熱的な逢瀬を重ねてから数か月。仕事や買い物のふとした瞬間に、あのときの濡れた吐息や肌を擦り合わせた熱狂の記憶が不意に蘇り、身体の奥が甘く疼いて熱を帯びた。",
  "effects": [
    {
      "path": "state.current_libido",
      "op": "add",
      "value": 30
    },
    {
      "path": "state.current_embarrassment",
      "op": "add",
      "value": 10
    }
  ],
  "diary": "昼間の街を歩きながら、ふと昨夜の湿った肌の感触が蘇って顔が火照った。私の中に、まだ消えない熱が残っている。"
});

window.defineEvent({
  "id": "adult_reunion",
  "title": "忘れえぬ肌の記憶・元恋人との再会",
  "age": [
    18,
    78
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "has_ex_partner"
  ],
  "weight": 10,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "街角で偶然すれ違った、かつて肌を重ね合った元交際相手。互いに大人びた姿を見つめ合ううちに、かつて分かち合った熱い吐息とシーツの記憶がフラッシュバックする。",
  "choices": [
    {
      "id": "choice_0",
      "label": "懐かしい温もりに触れる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "近くのカフェで近況を語り合い、懐かしい温もりに触れる。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
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
      "label": "大切な思い出として胸に留める",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "軽く会釈だけを交わし、大切な思い出として胸に留める。",
          "effects": [
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
    "reunion",
    "reflection"
  ],
  "diary": [
    "懐かしい声を聞いた瞬間、昔の情熱的な夜が蘇って胸が締め付けられた。大人になったお互いを祝福し合い、穏やかに別れた。",
    "振り返りたい衝動を抑え、背筋を伸ばして歩き去った。過去の恋があったからこそ今の自分があるのだと、誇らしく思えた。"
  ]
});

window.defineEvent({
  "id": "adult_private_relationship",
  "title": "蜜月の秘め事・公言するか否か",
  "age": [
    18,
    80
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered"
  ],
  "weight": 7,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "濃厚な素肌の交わりを重ねる相手との関係。周囲に恋人として公表して公認の仲になるか、それとも誰にも知られぬ秘密の情事として甘美な背徳感を味わい続けるか。",
  "choices": [
    {
      "id": "choice_0",
      "label": "胸を張って周囲に二人の親密な関係を公表する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "胸を張って周囲に二人の親密な関係を公表する。",
          "effects": [
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
      "id": "choice_1",
      "label": "外部には一切漏らさず隠し通す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "二人だけの秘密として、外部には一切漏らさず隠し通す。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "秘密の甘い時間をもう少し楽しむ",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "まだ結論を急がず、秘密の甘い時間をもう少し楽しむ。",
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
    "disclose_relationship",
    "private_relationship",
    "mutual_talk"
  ],
  "diary": [
    "友人たちに関係を報告した。祝福の言葉に照れながらも、堂々と手をつなげる喜びを噛み締めた。",
    "二人きりの秘密にすることを選んだ。周囲に隠れて視線を交わし、夜に密会する背徳の甘さが、情交の熱気をさらに濃密にした。",
    "誰にも言わない曖昧な関係のまま、甘い毒のような時間を貪った。いつか終わるかもしれないという儚さが、快感を増幅させた。"
  ]
});

window.defineEvent({
  "id": "positive_self_discovery",
  "title": "自分の望む親密さを知る",
  "age": [
    18,
    80
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
  "text": "恋愛や親密さを楽しむうえで、自分に合う距離感が少しわかってきた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "気づきを日記に書く",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "気づきを日記に書く。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 1
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": -1
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
      "label": "友人と語り合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "友人と語り合う。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "焦らず経験を重ねる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "焦らず経験を重ねる。",
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
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": -1
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3
    },
    {
      "selfAcceptance": 2
    },
    {
      "boundaryVoice": 2
    }
  ]
});

window.defineEvent({
  "id": "story_partner_deep_bond_aftermath",
  "title": "二人の深まる絆・将来への静かな予兆",
  "age": [
    18,
    80
  ],
  "trigger": "state_narrative",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "rel_stage_established"
  ],
  "weight": 0,
  "once": true,
  "auto_trigger": {
    "flag": "partner_intimacy_streak",
    "minVal": 3,
    "monthOffset": 2
  },
  "is_narrative": true,
  "narrative_type": "followup",
  "text": "度重なる熱い逢瀬を経て、二人の間の空気は以前にも増して濃密で柔らかなものへと変わっていた。シーツの温もりの中で交わした視線の中に、言葉にしなくても伝わる深い愛情と、これからの人生を共に歩む確信が芽生えている。",
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
  ],
  "diary": "彼と肌を重ねるたびに、心まで深く繋がっていくのを感じる。この温もりを、これからもずっと守っていきたい。"
});

window.defineEvent({
  "id": "story_partner_distance_reconcile_hint",
  "title": "少し冷たいシーツと、二人のすれ違いの予兆",
  "age": [
    18,
    80
  ],
  "trigger": "state_narrative",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "rel_stage_established"
  ],
  "weight": 0,
  "once": true,
  "auto_trigger": {
    "flag": "partner_distance",
    "minVal": 2,
    "monthOffset": 2
  },
  "is_narrative": true,
  "narrative_type": "precursor",
  "text": "断りや遠慮が続いたことで、寝室のシーツの間に微かな距離が生まれていた。背中を向け合って眠る夜の静けさの中、決して嫌いになったわけではないのに縮まらない距離に、胸の奥がきゅっと痛む……。",
  "effects": [
    {
      "path": "state.mood",
      "op": "add",
      "value": -3
    },
    {
      "path": "state.stress",
      "op": "add",
      "value": 3
    }
  ],
  "diary": "最近、彼との間に少しすれ違いがある気がする。素直になれない自分がもどかしくて、夜のシーツが少し冷たく感じた。"
});

window.defineEvent({
  "id": "story_partner_frustration_tease_aftermath",
  "title": "焦らされる熱情と、募る背徳の予兆",
  "age": [
    18,
    80
  ],
  "trigger": "state_narrative",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "rel_stage_intimate"
  ],
  "weight": 0,
  "once": true,
  "auto_trigger": {
    "flag": "partner_frustrated",
    "minVal": 2,
    "monthOffset": 1
  },
  "is_narrative": true,
  "narrative_type": "precursor",
  "text": "寸止めで焦らされたあの日以来、パートナーの瞳には切なく飢えたような熱が宿っている。ふとした瞬間に触れる手のひらの強さや、耳元に落ちる吐息の熱さに、次はもう逃げられないかもしれないという甘い戦慄が走る……。",
  "effects": [
    {
      "path": "state.current_libido",
      "op": "add",
      "value": 35
    },
    {
      "path": "state.current_embarrassment",
      "op": "add",
      "value": 10
    }
  ],
  "diary": "最近、彼の視線が妙に熱い。焦らしすぎたのかもしれないけれど、その熱情に怯えながらも下腹が疼いてしまう。"
});

window.defineEvent({
  "id": "adult_boundaries",
  "title": "求められる素肌と心のブレーキ",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
  "weight": {
    "base": 8,
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
  "text": "相手の荒い吐息とともに、服の下へと這い上がってくる強引な指先。皮膚が擦れる熱さに身体は愛液を滲ませつつも、心の奥が冷たく警鐘を鳴らす。快楽に流されそうな自分を押しとどめ、自らの尊厳を守る一線を意識する。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自らの境界線を毅然と伝える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "這う手をしっかりと掴んで制止し、自らの境界線を毅然と伝える。",
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
      "label": "違和感を抱えたまま身を委ねてしまう",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "その場の空気に気圧され、違和感を抱えたまま身を委ねてしまう。",
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
  "diary": [
    "相手の胸に手を当てて「今はこれ以上はやめて」と言葉にした。空気が凍りついたけれど、自分の身体を守れた確かな手応えがあった。",
    "断りきれずに流されてしまった後、シャワーを浴びながら胸の奥がチクチクと痛んだ。自分の身体の主は自分なのだと、痛みを伴って痛感した。"
  ]
});

window.defineEvent({
  "id": "adult_consent_revisit",
  "title": "気持ちは変わるもの",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "rel_stage_intimate"
  ],
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
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "交際相手と、以前の約束や親密さへの希望が今も同じか確かめる機会があった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "改めて互いの意思を確かめる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "改めて互いの意思を確かめる。",
          "effects": [
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "今は距離を置くと伝える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "今は距離を置くと伝える。",
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
              "path": "skill.problem_solving",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "mutual_talk",
    "boundary"
  ],
  "sexualEffects": [
    {
      "boundaryVoice": 4
    },
    {
      "boundaryVoice": 4
    }
  ]
});

window.defineEvent({
  "id": "adult_desire",
  "title": "季節の移ろいと疼く肉体の飢え",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 7,
  "text": "かつての淡い憧れとは違う、身体の芯から湧き上がるような重く濃密な性への渇望。下腹の奥深くがじくじくと熱を帯び、男の逞しい腕に乱暴に組み伏せられ、激しい水音を立てて突き上げられたいという抗いがたい衝動に身悶える……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "情熱的な夜を貪るように求める",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "湧き上がる熱情をそのまま認め、情熱的な夜を貪るように求める。",
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
      "label": "疼きを鎮める",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "一人きりの部屋で静かに身体を慰め、疼きを鎮める。",
          "effects": [
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
  "diary": [
    "身体の奥から突き上げる飢餓感に身を任せ、相手の首筋にしがみついて腰を激しく絡ませた。溢れ出る蜜でシーツを汚しながら果てる悦びに狂乱した。",
    "静かな夜、指先を湿った奥に沈め、自らの欲望の強さを確かめるように絶頂を迎えた。身体の奥深くに潜む情念の熱さにため息が漏れた。"
  ]
});

window.defineEvent({
  "id": "adult_intimacy",
  "title": "シーツの上の本音・夜の対話",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "rel_stage_intimate"
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
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "肌を重ね合って息を整える寝室。汗ばんだ互いの身体を寄せ合いながら、夜の営みで感じていた快感や、実は痛かったこと、もっと乱暴に求められたいといった赤裸々な希望を囁き合う。",
  "choices": [
    {
      "id": "choice_0",
      "label": "恥じらいを捨てて自らが本当にイキたい方法を耳元でねだる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "恥じらいを捨てて自らが本当にイキたい方法を耳元でねだる。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "優しく尋ねてみる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "相手がどんな感覚で抱いているのか、優しく尋ねてみる。",
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
      "label": "相手の胸に顔を埋めて眠る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "これ以上の会話は照れ臭くて、相手の胸に顔を埋めて眠る。",
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
    "mutual_talk",
    "mutual_talk",
    "boundary"
  ],
  "diary": [
    "自分が一番濡れる愛撫の仕方を耳元で打ち明けた。相手が嬉しそうに頷いてくれたとき、心も身体も完全に委ねられた気がした。",
    "相手の身体の反応や気持ちをじっくり聞いた。愛し合うことの奥深さに触れ、お互いの絆がより強固なものになった。",
    "裸のまま抱きしめ合って眠りについた。言葉にしなくても伝わる素肌の温もりが、心地よい微睡みを運んでくれた。"
  ]
});

window.defineEvent({
  "id": "adult_mismatched_desire",
  "title": "性欲の熱量差・求めと拒絶の痛み",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "rel_stage_established"
  ],
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
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "今夜も激しく抱かれたくて愛液を滴らせている自分と、疲れて背中を向ける相手。あるいは相手の度重なる求めに身体が痛くて濡れず、応じられない苦痛。性欲の温度差が心を蝕む。",
  "choices": [
    {
      "id": "choice_0",
      "label": "お互いの性欲の波やペースを優しくすり合わせる対話をする",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "お互いの性欲の波やペースを優しくすり合わせる対話をする。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "抱きしめ合うだけのスキンシップで満足する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "無理に行為をせず、抱きしめ合うだけのスキンシップで満足する。",
          "effects": [
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
      "label": "今後の関係のあり方を見直す",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "根本的な欲望の不一致を痛感し、今後の関係のあり方を見直す。",
          "effects": []
        }
      ]
    }
  ],
  "outcomes": [
    "mutual_talk",
    "boundary",
    "reflection"
  ],
  "diary": [
    "求められること、求めることのプレッシャーについて話し合った。性欲の違いを責め合わずに受け止める努力を始めた。",
    "挿入するだけが愛ではないと互いに納得し、素肌を寄せて温もりを確かめ合った。穏やかな安らぎに心が満たされた。",
    "どうしても埋まらない欲望の溝に、ため息が零れた。身体の飢えをどこへ向けるべきか、暗闇の中で天井を見つめた。"
  ]
});

window.defineEvent({
  "id": "adult_private_values",
  "title": "常識の枠を超えた愛欲の形",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 9,
  "text": "世間が求める「正しい恋愛」や「普通の結婚」。しかし自分の身体が真に欲しているのは、もっと倒錯した快楽や、誰にも言えない秘密の交わりなのかもしれないという深い自覚。",
  "choices": [
    {
      "id": "choice_0",
      "label": "独自の官能の価値観を確立する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "世間の目から自らを解き放ち、独自の官能の価値観を確立する。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "倒錯した性癖を打ち明ける",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "理解ある親密なパートナーにだけ、倒錯した性癖を打ち明ける。",
          "effects": [
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
      "label": "秘密として墓場まで持っていく",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "危険な願望を胸の奥深くへ封印し、秘密として墓場まで持っていく。",
          "effects": []
        }
      ]
    }
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "privacy"
  ],
  "diary": [
    "他人と違っていても、これが私の肉体と魂が求める悦びなのだと確信した。世間の物差しを捨てた瞬間、深い官能の自由を手に入れた。",
    "恐る恐る自分の倒錯した嗜好を打ち明けると、相手は拒絶することなく受け止めてくれた。共犯者を得たような熱い喜びに震えた。",
    "淫らな秘密を一人きりの胸に抱えて生きる。その背徳感自体が、退屈な日常を耐えるための密かな香辛料になった。"
  ]
});

window.defineEvent({
  "id": "adult_relationship_conflict",
  "title": "夜の営みの不一致と心のすれ違い",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "rel_stage_established"
  ],
  "weight": {
    "base": 8,
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
  "text": "自分はもっと激しく乱暴に抱かれたいのに相手は淡白だったり、逆に身体だけの関係に疲弊したり。肌を合わせるたびに生じる感覚のズレが、次第に二人の間に冷たい溝を作っていく。",
  "choices": [
    {
      "id": "choice_0",
      "label": "寝室での不満と自らの本当の欲望を涙ながらにぶつけ合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "寝室での不満と自らの本当の欲望を涙ながらにぶつけ合う。",
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
      "id": "choice_1",
      "label": "少し距離を置いて冷却期間を置く",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "身体の相性の不一致を受け止め、少し距離を置いて冷却期間を置く。",
          "effects": [
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
      "label": "関係を解消する",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "肉体と心が満たされない苦痛に耐えかね、関係を解消する。",
          "effects": [
            {
              "path": "state.self_efficacy",
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
    }
  ],
  "outcomes": [
    "mutual_talk",
    "distance",
    "breakup"
  ],
  "diary": [
    "ベッドの上でお互いの性的な不満を本音で話し合った。気まずかったけれど、触れ合いのあり方を見直す大きな契機になった。",
    "無理に身体を重ねるのをやめ、一人で過ごす時間を作った。身体の疼きと心の距離を冷静に見つめ直した。",
    "愛していても身体の相性が合わない苦しさに耐えきれず、別れを選んだ。女として生きる上で、性の一致は譲れないのだと痛感した。"
  ]
});

window.defineEvent({
  "id": "adult_relationship_distance",
  "title": "冷たいシーツと二人のすれ違い",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "rel_stage_established"
  ],
  "weight": 12,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "交際相手と抱き合う頻度が減り、同じ部屋にいてもどこか遠く感じる日々。手を伸ばしても届かない距離感に、下腹の奥が切なく疼き、胸が寂しさで冷えてゆく。",
  "choices": [
    {
      "id": "choice_0",
      "label": "抱きしめてもらう",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "すれ違いの寂しさを素直に伝え、抱きしめてもらう。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "自らの趣味や仕事に没頭する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "一人の夜を受け入れ、自らの趣味や仕事に没頭する。",
          "effects": [
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
    },
    {
      "id": "choice_2",
      "label": "交際に終止符を打つ",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "心が離れてしまったことを認め、交際に終止符を打つ。",
          "effects": [
            {
              "path": "state.self_efficacy",
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
    }
  ],
  "outcomes": [
    "mutual_talk",
    "distance",
    "breakup"
  ],
  "diary": [
    "「もっと触れ合いたい」と涙ながらに伝えると、力強く抱きしめ返してくれた。二人の距離が再びゼロになった。",
    "相手に依存しすぎず、一人の時間を楽しむ強さを身につけた。自立した大人の女としての落ち着きを得た。",
    "冷え切った関係に別れを告げた。一人きりの部屋の広さに寂しさを感じつつも、新しい明日へ向かう清々しさがあった。"
  ]
});

window.defineEvent({
  "id": "adult_relationship_growth",
  "title": "深まりゆく絆と熟成する夜",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "rel_stage_established"
  ],
  "weight": 14,
  "text": "年月を重ねるにつれ、最初の激しい興奮から、互いの身体の隅々まで知り尽くした深い安心感と濃厚な快楽へと変化していく。阿吽の呼吸で肌を寄せ合う幸福。",
  "choices": [
    {
      "id": "choice_0",
      "label": "ゆっくりと時間をかけて交わる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "互いの身体を慈しむように、ゆっくりと時間をかけて交わる。",
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
      "label": "たまには新しい刺激やシチュエーションを二人で試してみる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "たまには新しい刺激やシチュエーションを二人で試してみる。",
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
      "label": "穏やかな会話とスキンシップだけで満ち足りた夜を過ごす",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "穏やかな会話とスキンシップだけで満ち足りた夜を過ごす。",
          "effects": [
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
    "shared_activity",
    "mutual_talk"
  ],
  "diary": [
    "言葉がなくても、どこをどう愛撫されたいのか手が勝手に知っている。熟成されたワインのように濃密な夜を堪能した。",
    "いつもと違う場所や香りを試してみた。照れ笑いしながらも、新鮮な興奮に下腹が熱く濡れた。",
    "ただ寄り添ってテレビを見ているだけで幸せだった。性愛を超えた深い絆が、二人を優しく包んでいた。"
  ]
});

window.defineEvent({
  "id": "adult_relationship_privacy",
  "title": "二人だけの秘密の合言葉",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 10,
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
    }
  },
  "text": "交際の生々しい詳細をどこまで友人に話すべきか。二人だけの夜の睦言や秘密の触れ合いを、誰にも侵されない聖域として守りたいという想いが募る。",
  "choices": [
    {
      "id": "choice_0",
      "label": "二人の寝室の秘密は絶対に口外しないと約束する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "二人の寝室の秘密は絶対に口外しないと約束する。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "親しい友人には幸せな惚気話として少しだけ打ち明ける",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "親しい友人には幸せな惚気話として少しだけ打ち明ける。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
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
  "outcomes": [
    "private_relationship",
    "mutual_talk"
  ],
  "diary": [
    "二人の夜のことは二人だけの秘密にした。世界中で私たちだけが知っている素肌の温もりが、関係をより特別なものにした。",
    "親友にだけ少し惚気けてしまった。照れ笑いしながらも、幸せを共有できた温かさに心が和んだ。"
  ]
});

window.defineEvent({
  "id": "adult_shared_intimacy",
  "title": "夜の逢瀬・求め合う肉体の熱情",
  "age": [
    18,
    85
  ],
  "trigger": "chain_only",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "rel_stage_intimate"
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
  "is_major": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "閉じられた寝室、互いに剥き出しの身体を擦り合わせ、吐息を絡ませる。愛液に濡れそぼった秘所と熱く硬くなった肉塊が触れ合い、身体の奥深くまで貪り合いたい欲望が臨界に達する。",
  "choices": [
    {
      "id": "choice_0",
      "label": "奥深くまで突き挿れてほしいとねだる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "乱れる吐息のまま、奥深くまで突き挿れてほしいとねだる。",
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
                "eventId": "adult_intimacy_reflection",
                "delay": 1,
                "prob": 0.85
              }
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 3
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
      "label": "敏感な肌を這う舌と指先の感触を焦らしながら楽しむ",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "敏感な肌を這う舌と指先の感触を焦らしながら楽しむ。",
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
      "label": "ただ抱き締め合って眠りたいと伝える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "今夜は身体を繋げず、ただ抱き締め合って眠りたいと伝える。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.problem_solving",
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
    "mutual_talk",
    "boundary"
  ],
  "sexualEffects": [
    {
      "boundaryVoice": 3,
      "selfKnowledge": 3
    },
    {
      "selfAcceptance": 2
    },
    {
      "boundaryVoice": 5
    }
  ],
  "femaleVariant": {
    "text": "閉じられた寝室、互いに剥き出しの柔肌を擦り合わせ、熱い吐息を絡ませる。愛液に濡れそぼった秘唇と秘唇、そしてしなやかな指先が触れ合い、身体の奥深くまで溶け合いたい欲望が臨界に達する。",
    "choices": [
      {
        "id": "choice_0",
        "label": "互いの濡れた秘所を押しつけ合い、奥深くまで指で満たしてほしいとねだる",
        "outcomes": [
          {
            "id": "outcome_0",
            "weight": 1,
            "description": "互いの濡れた秘所を押しつけ合い、奥深くまで指で満たしてほしいとねだる。",
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
        "label": "敏感な肌を這う舌と指先の感触を焦らしながら楽しむ",
        "outcomes": [
          {
            "id": "outcome_1",
            "weight": 1,
            "description": "敏感な肌を這う舌と指先の感触を焦らしながら楽しむ。",
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
        "label": "ただ抱き締め合って眠りたいと伝える",
        "outcomes": [
          {
            "id": "outcome_2",
            "weight": 1,
            "description": "ただ抱き締め合って眠りたいと伝える。",
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
    "diary": [
      "重なり合うふくよかな乳房、ぬちぬちと擦れ合う蜜唇の水音。彼女の熱い吐息と甘い匂いに包まれて、下腹の奥から突き上げる絶頂に二人で同時に果てた。",
      "じっくりと指先や舌で肌を這われ、身体の芯まで愛液で濡らされた。奥深くまで指で掻き回される快感に、何度も背筋が弓なりになった。",
      "身体を重ねるだけが答えじゃない。それでも、触れ合いたいと疼く肉体の欲求を抑えるのは少し苦しかった。"
    ]
  }
});

window.defineEvent({
  "id": "adult_trust_test",
  "title": "約束をめぐるすれ違い",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 10,
  "text": "親しい相手との約束が守られず、少し傷ついた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "理由を聞いて話し合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "理由を聞いて話し合う。",
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
      "id": "choice_1",
      "label": "自分の気持ちを整理する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "自分の気持ちを整理する。",
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
    "mutual_talk",
    "reflection"
  ]
});

window.defineEvent({
  "id": "positive_intimacy_humor",
  "title": "親密さを笑い合える",
  "age": [
    18,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "rel_stage_intimate"
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
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "交際相手と、親密な関係について気負わず話せる瞬間があった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "冗談も交えて話す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "冗談も交えて話す。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 1
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "お互いの好みを聞く",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "お互いの好みを聞く。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 1
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "照れながら気持ちを伝える",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "照れながら気持ちを伝える。",
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
              "path": "skill.communication_skill",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "mutual_talk",
    "mutual_talk",
    "mutual_talk"
  ]
});

window.defineEvent({
  "id": "adult_intimacy_reflection",
  "title": "肉体に刻まれた快楽の記憶",
  "age": [
    18,
    90
  ],
  "trigger": "chain_only",
  "classification": "major",
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
  "is_major": true,
  "text": "これまでに交わしてきた幾重もの肌の重なり、シーツを濡らした愛液、奥を激しく突かれた時の狂おしい絶頂。自らの肉体が知った性の悦びと悦楽の記憶を静かに思い返す。",
  "choices": [
    {
      "id": "choice_0",
      "label": "身体の奥を突き抜けた激しい快感を反芻する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "身体の奥を突き抜けた激しい快感を反芻する。",
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
                "eventId": "adult_relationship_growth",
                "delay": 1,
                "prob": 0.85
              }
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
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
      "label": "望まない姿勢や痛みがあったことも冷静に振り返る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "望まない姿勢や痛みがあったことも冷静に振り返る。",
          "effects": [
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "今の自分の身体が求める欲求を素直に受け止める",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "今の自分の身体が求める欲求を素直に受け止める。",
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
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 4,
      "selfAcceptance": 2
    },
    {
      "boundaryVoice": 4
    },
    {
      "selfAcceptance": 3
    }
  ]
});

window.defineEvent({
  "id": "adult_new_chapter",
  "title": "親密な関係の新たな門出",
  "age": [
    18,
    90
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "rel_stage_established"
  ],
  "weight": {
    "base": 7,
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
  "text": "長く寄り添ってきたパートナーとの関係について、これからの長い人生をどう共に歩んでいくか。二人の絆が次のステージへと昇華する瞬間を迎える。",
  "choices": [
    {
      "id": "choice_0",
      "label": "二人の未来を約束する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "生涯を共に歩む覚悟を伝え、二人の未来を約束する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "心地よいパートナーシップを続ける",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "お互いの自立を尊重しつつ、心地よいパートナーシップを続ける。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.mood",
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
    },
    {
      "id": "choice_2",
      "label": "日々を重ねる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "今の満ち足りた関係を大切に守り、日々を重ねる。",
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
            },
            {
              "path": "trait.sexual_interest.current",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "mutual_talk",
    "reflection",
    "mutual_talk"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 3
    },
    {
      "selfAcceptance": 2
    },
    {
      "intimacyNeed": 1
    }
  ],
  "diary": [
    "「これからもずっと一緒にいよう」と言葉を交わした。重ねてきた素肌と時間の重みが、確かな未来の約束に変わった。",
    "形に囚われず、お互いを尊重し合う生き方を選んだ。自由で豊かな大人の愛の形を見つけた。",
    "変わらない日常の尊さを噛み締めた。隣にこの人がいてくれる奇跡に、静かな感謝の想いが込み上げた。"
  ]
});

window.defineEvent({
  "id": "positive_anniversary",
  "title": "二人の記念日",
  "age": [
    18,
    90
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "rel_stage_established"
  ],
  "weight": 14,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "交際相手との時間を振り返り、嬉しかった出来事を思い出した。",
  "choices": [
    {
      "id": "choice_0",
      "label": "一緒にお祝いする",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "一緒にお祝いする。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "思い出を語り合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "思い出を語り合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 1
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "普段どおりの時間を大切にする",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "普段どおりの時間を大切にする。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "shared_activity",
    "mutual_talk",
    "shared_activity"
  ]
});

window.defineEvent({
  "id": "adult_social_pressure",
  "title": "周囲からの期待",
  "age": [
    20,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 8,
  "text": "恋愛や結婚について、周囲から自分の希望とは違う期待を向けられた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自分の考えを伝える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "自分の考えを伝える。",
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
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "話題を変えて距離を取る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "話題を変えて距離を取る。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "partner_sex_tired_reluctance",
  "title": "疲労困憊の夜と断れぬ求め 〜溜め息とともに受け入れる受動セックス〜",
  "age": [
    20,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "rel_stage_established"
  ],
  "weight": 40,
  "availability": {
    "once_per_life": false,
    "cooldown_months": 6,
    "max_occurrences": 25,
    "unique_key": "partner_sex_tired_reluctance"
  },
  "partner_intimacy_boost": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "へとへとに疲れて一刻も早く眠りたい夜。けれど隣のパートナーは明らかに求めてきている。断れば気まずい空気が流れるのが分かっているからこそ、小さな諦めと溜め息を飲み込んで、求めに応じるように布団の中で身体を預ける。",
  "choices": [
    {
      "id": "choice_0",
      "label": "「疲れてるから動けないよ」と横を向いたまま、相手の好きにさせながら次第に感じてしまう",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "stress": 1,
            "desire": 3,
            "happiness": 2,
            "sexualEffects": {
              "intimacy": 11,
              "libido": 4,
              "passion": 6
            }
          },
          "narrative": "残業と家事で全身が鉛のように重い夜。布団に潜り込んで目を閉じたのに、相手の手が甘えるようにパジャマのボタンを外しにかかる。断ろうとして小さく溜め息を吐いたけれど、拒絶して関係がぎくしゃくするのも面倒で、背中を向けたまま動かずに受け入れた。『早く終わらせてね』と呟いたものの、相手の唾液に濡れた指が秘肉を丹念に解きほぐし、奥を擦り上げてくると、疲労の隙間を縫うように甘い痺れが腰に広がっていく。挿入された重い熱情が一定のリズムで粘膜を擦り上げるたび、乾いていたはずの秘所からぬるりと蜜が溢れ出し、受動的な快感に身を委ねて小さく喘いでしまった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手の頭を抱き寄せ、早く満足するように優しく導いてあげる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 3,
            "intimacyNeed": 2,
            "stress": 0,
            "sexualEffects": {
              "intimacy": 13,
              "libido": 3,
              "passion": 6
            }
          },
          "narrative": "相手の甘えを受け止めて、早くイかせてあげようと腰を寄せる。こちらの気遣いに気づいているのかいないのか、夢中で腰を振る相手を抱きしめながら、大人の女性としての受容の温もりを感じた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "すっごく疲れていて早く寝たかったのに、断りきれずに相手をした。横を向いたまま勝手にさせていたけれど、じっくり突かれているうちに勝手に身体が濡れてきて、なんだか悔しかった。",
    "疲れている時のセックス。義務感半分だったけれど、相手が満足そうに腕の中で眠った顔を見たら、まあいいかって思えた。"
  ]
});

window.defineEvent({
  "id": "partner_anniversary_deep_love",
  "title": "記念日の夜 〜互いを慈しむ濃厚なラブラブセックス〜",
  "age": [
    20,
    70
  ],
  "trigger": "normal",
  "classification": "major",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "rel_stage_established"
  ],
  "weight": 40,
  "availability": {
    "once_per_life": false,
    "cooldown_months": 6,
    "max_occurrences": 30,
    "unique_key": "partner_anniversary_deep_love"
  },
  "partner_intimacy_boost": true,
  "is_major": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "二人が結ばれた記念日、あるいは誕生日。特別なディナーを終え、二人きりの甘い夜が始まる。キャンドルの灯りに照らされたベッドの上で、互いへの尽きない愛情を確かめ合うように、優しく、そして濃厚に肌と肌を重ね合わせる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "灯りを落としたベッドで、互いの愛を囁きながらゆっくりと結合を味わう",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 6,
            "intimacyNeed": 4,
            "desire": 2,
            "stress": -5,
            "sexualEffects": {
              "intimacy": 18,
              "libido": 4,
              "passion": 8
            }
          },
          "narrative": "アロマキャンドルの揺れる薄暗い寝室。記念日のプレゼントを交わし終えた後、慈しむような優しい手つきで服を脱がされていく。敏感な胸の突起をゆっくりと舌で転がされ、全身を愛撫の熱で包み込まれる。愛液が蜜壺を満たし、ベッドのシーツに濃い染みを作るほど濡れそぼった頃、相手が慈しむようにキスを落としながら、熱い怒張を奥深くへと沈めてきた。ぎちぎちと締め付ける肉壁を優しく押し広げられ、子宮を優しく撫でられるような深い結合。相手の肩に抱きつきながら「愛してる」と囁き合い、じんわりと広がる甘美な絶頂を幾度も噛み締めた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "いつもより情熱的に腰を絡ませ、溢れ出る愛液を散らして果てまで乱れる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 5,
            "desire": 5,
            "passion": 3,
            "stress": -4,
            "sexualEffects": {
              "intimacy": 15,
              "libido": 7,
              "passion": 12
            }
          },
          "narrative": "特別な夜だからこそ、普段は見せない淫らな本能が解き放たれる。相手の上に跨がり、濡れ光る秘所へと硬くそそり立つ肉茎を自ら深く呑み込んでいく。ぐちゅりと淫らな粘膜音が部屋に響き渡り、奥の最深部を抉られるような快感に背中を弓なりに反らせた。相手の腰をぎゅっと太ももで挟み込み、激しく腰を上下させながら、快楽に蕩けた喘ぎ声を部屋中に響かせる。二人の汗と愛液の淫臭が濃密に立ち込める中、一際深く突き上げられた瞬間、頭の中が真っ白になるほどの強烈なオーガズムに達した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "大切な記念日の夜。灯りを落として、お互いの愛を確かめ合うようにゆっくり抱き合った。相手の温もりで心の底まで満たされて、この人と巡り会えて本当に良かったと心から実感した。",
    "記念日の夜、いつもより情熱的になってしまった。お互いを求める気持ちが抑えられなくて、激しく求め合ってベッドの上で何度も果てた。相手の腕の中で迎えた朝は最高に幸せだった。"
  ],
  "femaleVariant": {
    "text": "二人が結ばれた記念日。特別なディナーを終え、二人きりの甘い夜が始まる。キャンドルの灯りに照らされたベッドの上で、互いへの尽きない愛情を確かめ合うように、優しく、そして濃厚に女同士の滑らかな肌と肌を重ね合わせる。",
    "choices": [
      {
        "id": "choice_0",
        "label": "灯りを落としたベッドで、互いの愛を囁きながらゆっくりと柔肌の密着を味わう",
        "outcomes": [
          {
            "id": "outcome_0",
            "weight": 1,
            "description": "灯りを落としたベッドで、互いの愛を囁きながらゆっくりと柔肌の密着を味わう。",
            "effects": [
              {
                "path": "state.mood",
                "op": "add",
                "value": 7
              }
            ]
          }
        ]
      },
      {
        "id": "choice_1",
        "label": "いつもより情熱的に太ももを絡ませ、溢れ出る愛液を散らして果てまで乱れる",
        "outcomes": [
          {
            "id": "outcome_1",
            "weight": 1,
            "description": "いつもより情熱的に太ももを絡ませ、溢れ出る愛液を散らして果てまで乱れる。",
            "effects": [
              {
                "path": "state.mood",
                "op": "add",
                "value": 7
              }
            ]
          }
        ]
      }
    ],
    "diary": [
      "記念日の夜、キャンドルの灯りの中で彼女と時間をかけて愛し合った。指先が触れるたびに愛しさが込み上げ、胸がいっぱいになった。",
      "特別な夜の高揚感に任せて、互いの秘所を熱く擦り合わせて何度も絶頂を迎えた。これからもずっと彼女と歩いていきたい。"
    ]
  }
});

window.defineEvent({
  "id": "partner_sex_fertility_timing",
  "title": "排卵日の夜と義務の営み 〜冷めた心と裏腹に濡れてしまう肉体〜",
  "age": [
    22,
    42
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "male_partner",
    "rel_stage_established"
  ],
  "weight": 40,
  "availability": {
    "once_per_life": false,
    "cooldown_months": 6,
    "max_occurrences": 20,
    "unique_key": "partner_sex_fertility_timing"
  },
  "partner_intimacy_boost": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "基礎体温計と排卵検査薬が告げるタイミング。今夜を逃せばまた来月まで待たなければならない。夫婦やパートナーの間に漂う、愛情表現というよりは『子作りという義務』の空気。プレッシャーと事務的な気まずさを抱えながら、寝室で布団を並べる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "腰の下に枕を敷いて受け入れ、作業的な行為の中で奥を突かれる生理的快楽に耐える",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "stress": 2,
            "desire": 2,
            "morality": 1,
            "sexualEffects": {
              "intimacy": 8,
              "libido": 3,
              "passion": 4
            }
          },
          "narrative": "スマートフォンの妊活アプリが示した排卵日。ロマンチックな雰囲気など何もない。『今日、タイミング取らないと』という一言で始まったベッド。腰の下に枕を差し入れられ、妊娠しやすい角度に腰を持ち上げられる。心には義務感とプレッシャーしかないはずなのに、相手の指が奥を探り、太い肉茎が子宮口へと直接打ち込まれると、肉体は生理的に愛液をじっとりと分泌させてしまう。ぐちゅりと濡れた水音に羞恥がこみ上げる中、作業のように腰を振る相手の重みを受け止め、妊娠への祈りと、それでも快感に反応してしまう女の身体の複雑な矛盾に耐えながら、奥深くに精液を受け止めた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "「赤ちゃんのためだから」と自分に言い聞かせ、相手に身を委ねる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "stress": 1,
            "intimacyNeed": 2,
            "happiness": 1,
            "sexualEffects": {
              "intimacy": 10,
              "libido": 2,
              "passion": 5
            }
          },
          "narrative": "二人の未来のための計画。義務的になりがちな営みの中でも、相手の汗ばんだ額に触れ、少しでも愛を込めようと努めた。淡々と進むピストンを受け入れながら、どうか命が宿ってほしいと静かに願った。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "今夜はタイミング法の日。ロマンチックさなんて全然なくて、お互いに『やらなきゃいけないこと』としてベッドに入った。でも、身体の奥を突かれると自然に濡れてしまう自分がなんだか悔しくて切なかった。",
    "妊活のためのセックス。プレッシャーで息が詰まりそうだったけれど、赤ちゃんが来てくれることを信じて受け入れた。"
  ]
});

window.defineEvent({
  "id": "partner_sex_mastered_pleasure",
  "title": "言わずとも伝わる性感帯 〜手の内を知り尽くしたあうんの熟練セックス〜",
  "age": [
    22,
    75
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "rel_stage_established"
  ],
  "weight": 40,
  "availability": {
    "once_per_life": false,
    "cooldown_months": 6,
    "max_occurrences": 30,
    "unique_key": "partner_sex_mastered_pleasure"
  },
  "partner_intimacy_boost": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "何年もの歳月を共に過ごし、お互いの身体の隅々まで熟知した二人。言葉を交わさずとも、手が伸びる場所、腰の角度、触れ方ひとつで相手の快感が手にとるように分かる。恥じらいを超えた深い信頼と、円熟したテクニックに身を委ねる極上の交わり。",
  "choices": [
    {
      "id": "choice_0",
      "label": "一番弱いツボを正確に突かれ、抵抗する間もなくトロトロに蕩けて啼き乱れる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 6,
            "desire": 4,
            "stress": -5,
            "sexualEffects": {
              "intimacy": 18,
              "libido": 6,
              "passion": 12
            }
          },
          "narrative": "何年も肌を重ねてきた相手だからこそ、私の身体のどこが一番敏感で、どう突かれれば理性が吹き飛ぶのかを完全に知り尽くされている。布団の上、太ももを持ち上げられた角度から、太い肉茎が寸分の狂いもなく子宮の手前にある一番奥のヒダをぐにゅりと擦り上げた。『あっ、そこ……っ、ダメ……！』と声を上げる間もなく、一番感じてしまう角度とストロークで容赦なく責め立てられる。相手の手のひらがクリトリスを的確に転がし、内と外からの同時攻撃に身体の芯が激しく痙攣した。ぬちぬち、ぐちゅぐちゅと溢れる愛液を撒き散らしながら、熟練の快楽に抗う術もなく、あっという間に激しいオーガズムへと突き落とされた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手の弱点も知り尽くした腰使いで迎え撃ち、二人で同時に絶頂へ駆け上がる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 5,
            "desire": 5,
            "initiative": 3,
            "stress": -4,
            "sexualEffects": {
              "intimacy": 16,
              "libido": 7,
              "passion": 13
            }
          },
          "narrative": "やられっぱなしではいられない。相手がどこで一番喘ぐかも完全に把握している。肉壁の奥で相手のカリ首をぎゅっと締め付け、腰をひねりながら締め上げると、相手もたまらず呻き声を漏らして激しく腰を動かした。お互いの手の内を知り尽くした者同士の熱狂的な交わり。阿吽の呼吸で腰をぶつけ合い、完全に同時に歓喜の果てへと昇りつめた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "長年一緒にいるから、どこをどう触れば私が一番感じてしまうか、相手には全部お見通し。一番弱いツボを的確に責められて、あっという間にトロトロにされて啼かされてしまった。",
    "お互いの身体を知り尽くしたあうんのセックス。言葉がなくても呼吸がぴったり合って、二人で同時に果てた瞬間の快感は格別だった。"
  ]
});

window.defineEvent({
  "id": "adult_ex_anniversary",
  "title": "過去の恋を思い出す",
  "age": [
    22,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "has_ex_partner"
  ],
  "weight": 7,
  "text": "ふとしたきっかけで、かつての交際を思い出した。",
  "choices": [
    {
      "id": "choice_0",
      "label": "今の自分の変化を考える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "今の自分の変化を考える。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "思い出を大切にする",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "思い出を大切にする。",
          "effects": [
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
  "outcomes": [
    "reflection",
    "reflection"
  ]
});

window.defineEvent({
  "id": "adult_future_together",
  "title": "一緒に暮らす未来",
  "age": [
    23,
    80
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered",
    "rel_stage_established"
  ],
  "weight": 9,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "交際相手との将来の暮らし方が話題になった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "具体的な希望を話し合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "具体的な希望を話し合う。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "adult_marriage_proposal",
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
      "label": "今の関係を大切にする",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "今の関係を大切にする。",
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
    "mutual_talk",
    "shared_activity"
  ]
});

window.defineEvent({
  "id": "partner_sex_mature_comfortable_bond",
  "title": "言葉を交わさずとも重なる呼吸 〜円熟した二人の阿吽の快楽セックス〜",
  "age": [
    25,
    80
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered",
    "rel_stage_established"
  ],
  "weight": 40,
  "availability": {
    "once_per_life": false,
    "cooldown_months": 6,
    "max_occurrences": 30,
    "unique_key": "partner_sex_mature_comfortable_bond"
  },
  "partner_intimacy_boost": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "text": "年月を重ね、お互いの存在が空気のように自然になった二人の寝室。恥じらいも気負いもなく、完全に心を許し合った者同士の営み。阿吽の呼吸で重なり合う肉体は、言葉を尽くすよりも雄弁に互いの愛と絆を証明している。",
  "choices": [
    {
      "id": "choice_0",
      "label": "完全に身体を開ききって相手を受け入れ、阿吽の呼吸で最深部の結合を貪る",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 6,
            "intimacyNeed": 5,
            "stress": -5,
            "sexualEffects": {
              "intimacy": 19,
              "libido": 5,
              "passion": 10
            }
          },
          "narrative": "若き日のようなぎこちない恥じらいはもうない。すっかり相手の身体の一部になったような安心感の中、大きく開いた脚の間に相手の腰を受け入れる。互いの呼吸が完全にシンクロし、吸う息と吐く息に合わせて、ぬるりと滑らかな結合が奥深くへと達する。子宮を優しく撫でられるような深い一体感。長年の絆で培われた贅沢な快楽に包まれ、静かに、けれど激しく打ち寄せる波のような絶頂をじっくりと噛み締めた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "交わったまま手をつなぎ、穏やかな愛の言葉とともに果てる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 6,
            "intimacyNeed": 6,
            "stress": -5,
            "sexualEffects": {
              "intimacy": 18,
              "libido": 4,
              "passion": 8
            }
          },
          "narrative": "シーツの上で指を絡め合い、結合したまま互いの顔を見つめ合う。言葉がなくても、繋がれた指先の熱と奥で疼く肉茎の拍動が全てを伝えてくれる。人生を共に歩んできた深い絆を感じながら、穏やかで濃密な愛の絶頂に満たされた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "言葉を交わさなくても、お互いの呼吸だけで全てが通じ合う。円熟した関係だからこそ味わえる、深くて穏やかで濃厚なセックスに包まれて、満ち足りた夜を過ごした。",
    "長年一緒にいる相手との営み。若い頃のドキドキとは違うけれど、お互いを完全に知り尽くした深い結合が本当に心地よかった。"
  ]
});

window.defineEvent({
  "id": "partner_bereavement",
  "title": "伴侶の旅立ち・永遠の別れ",
  "age": [
    58,
    105
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "partnered"
  ],
  "weight": 6,
  "once": true,
  "text": "長年連れ添い、人生の酸いも甘いも分かち合ってきた最愛の伴侶が、病や老衰により人生の終着点を迎える。",
  "choices": [
    {
      "id": "choice_0",
      "label": "安らかな旅立ちを見送る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "感謝の涙とともに手を握り締め、安らかな旅立ちを見送る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": -5
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
      "label": "二人で過ごした年月を反芻する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "深い悲しみに暮れながら、二人で過ごした年月を反芻する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": -6
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "bereavement",
    "bereavement"
  ],
  "diary": [
    "冷たくなっていく夫の手を握りながら、何度も「ありがとう」と繰り返した。あなたがいたから、私はここまで生きてこられた。安らかに眠ってください。",
    "静まり返った部屋で、遺影を見つめながら一人涙を流した。半身をもぎ取られたような喪失感の中、二人で生きた軌跡だけが胸に熱く残っている。"
  ]
});
