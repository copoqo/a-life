(window.eventDefs = window.eventDefs || []).push({
  "id": "partner_passion_lifestyle",
  "title_template": "パートナーとの情事 〜{variation_title}〜",
  "classification": "daily",
  "content_rating": "adult",
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "conditions": {
    "all": [
      {
        "path": "person.alive",
        "op": "eq",
        "value": true
      },
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 216
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      },
      {
        "path": "person.experience.has_sexual_experience",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 85,
    "additive": [],
    "multipliers": []
  },
  "min": 18,
  "max": 65,
  "p": 0.35,
  "choices": [
    {
      "id": "choice_passionate",
      "stance": "passionate",
      "label": "自ら腰を浮かせて求め、相手を強く抱きしめる",
      "stat_effects": {
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
      "stat_effects": {
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
      "stat_effects": {
        "desire": 5,
        "boundaryVoice": 3,
        "mood": 2
      }
    },
    {
      "id": "choice_reluctant",
      "stance": "reluctant",
      "label": "少し気乗りしない風を装い、溜め息まじりに受け入れる",
      "stat_effects": {
        "stress": 2,
        "boundaryVoice": -2,
        "mood": 1
      }
    },
    {
      "id": "choice_refuse",
      "stance": "refuse",
      "label": "「明日は早いから…」とそっと手を押しとどめる",
      "stat_effects": {
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
