// ============================================================================
// Pack: 02_childhood_elementary — 幼少期・小学生の日常・遊び・友達・身体の不思議 (44 events)
// ============================================================================
window.defineEvent({
  "id": "elem_bicycle_scraped_knee",
  "title": "補助輪の外れた自転車と擦りむいた膝",
  "age": [
    6,
    9
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "初めて補助輪を外して練習した日。ふらついて何度も倒れ、膝を擦りむいて赤い血がにじんだ。",
  "choices": [
    {
      "id": "choice_0",
      "label": "痛みに耐えかねて泣きじゃくり、自転車を置いて家に帰る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "痛みに耐えかねて泣きじゃくり、自転車を置いて家に帰る。",
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
      "label": "友達に可愛い絆創膏を貼ってもらい、励まされて一緒に練習する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "友達に可愛い絆創膏を貼ってもらい、励まされて一緒に練習する。",
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
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "elem_bicycle_excursion",
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
      "label": "涙を手の甲でぬぐい、「もう一回！」とペダルを踏み込む",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "涙を手の甲でぬぐい、「もう一回！」とペダルを踏み込む。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "elem_bicycle_excursion",
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
      "label": "少し休憩して、友達の走る姿をじっと観察してコツを掴む",
      "outcomes": [
        {
          "id": "outcome_3",
          "weight": 1,
          "description": "少し休憩して、友達の走る姿をじっと観察してコツを掴む。",
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
                "eventId": "elem_bicycle_excursion",
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
      "label": "悔しさを胸に夕暮れの街灯が灯るまで一人でペダルを漕ぎ続ける",
      "outcomes": [
        {
          "id": "outcome_4",
          "weight": 1,
          "description": "悔しさを胸に夕暮れの街灯が灯るまで一人でペダルを漕ぎ続ける。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "elem_bicycle_excursion",
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
    "膝を擦りむいて痛くて泣きそうだったけど、諦めずにペダルを踏んだら、突然自転車がスーッと進んだ！ お父さんが「乗れた！」って拍手してくれて、空まで飛べそうだった。",
    "転んで泣きべそかいてたら、近所の子が可愛いキャラクターの絆創膏を貼ってくれた。「大丈夫、後ろ見ててあげる」って言われて乗れるようになった。友達の力ってすごい。"
  ]
});

window.defineEvent({
  "id": "child_unconscious_blanket_rubbing",
  "title": "幼い日の無意識・毛布とぬいぐるみの秘密の癖",
  "age": [
    6,
    10
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "text": "消灯後の子供部屋。暗闇の中で眠れず、ベッドの上でうつ伏せになり、お気に入りの大きなぬいぐるみと丸めた毛布を両足の間にぎゅっと挟み込む。太ももを締めつけ、下腹を毛布の柔らかいふくらみにリズミカルに押し当てて擦り合わせる。ショーツの中がじっとりと温かく湿り気を帯びていき、心臓がトクトクと跳ねて止まらなくなる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "爪先をピンと伸ばして脱力する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "うつ伏せのまま腰を激しく毛布に擦りつけ、爪先をピンと伸ばして脱力する。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "秘密を知ってしまった胸のざわめきに浸る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "湿り気を帯びたショーツの感触を確かめ、秘密を知ってしまった胸のざわめきに浸る。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "慌てて仰向けになって布団を被る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "誰かに見られたらどうしようと急に不安になり、慌てて仰向けになって布団を被る。",
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
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "diary": [
    "夜、ぬいぐるみをギュッとはさんで腰を動かしていたら、爪先までピーンとなって身体が震えた。胸がドキドキして、息がハァハァと弾んだ。",
    "パンツの前のところが少し湿っていて、温かい匂いがした。誰にも言えない恥ずかしいことのような気がして、ぎゅっと目を閉じた。",
    "お母さんがドアを開けたらどうしようと思って、慌てて仰向けに寝返りをうった。暗闇の中で、心臓の音だけが大きく響いていた。"
  ]
});

window.defineEvent({
  "id": "child_unconscious_doctor_play",
  "title": "幼い日の無意識・押し入れの秘密のお医者さんごっこ",
  "age": [
    6,
    10
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 20,
  "text": "雨の日の午後、幼馴染と二人きりで潜り込んだ押し入れの暗がり。「お医者さんごっこしよう」という何気ない一言から、互いにズボンとパンツを下ろすことに。自分とは違う相手の身体の形、そして相手の無垢な視線に晒される自分の小さく閉じた秘所。恐る恐る伸ばされた指先が触れ合った瞬間、言葉にできない熱いものが下腹の奥をキュンと刺し貫く……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "お互いの温かい肌と指先の感触をじっと確かめ合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "息を呑んで触れ合い、お互いの温かい肌と指先の感触をじっと確かめ合う。",
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
      "label": "じっと見つめ合って胸を高鳴らせる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "恥ずかしさで太ももを閉じそうになりながらも、じっと見つめ合って胸を高鳴らせる。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "何食わぬ顔で押し入れを出る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "大人の足音が近づいてきた気配に慌ててパンツを引き上げ、何食わぬ顔で押し入れを出る。",
          "effects": []
        }
      ]
    }
  ],
  "outcomes": [
    "shared_activity",
    "reflection",
    "reflection"
  ],
  "diary": [
    "暗い押し入れの中で、お互いのパンツを脱ぎっこして触りっこした。指先が当たったとき、お腹の奥がツンとして、悪いことをしているドキドキで胸がいっぱいになった。",
    "見られちゃいけない場所を見られていると思うと、顔が真っ赤になった。でも、目をそらすことができなくて、じっと息を止めていた。",
    "廊下の足音が聞こえて、大急ぎでズボンを穿いた。押し入れから出たとき、二人で目を見合わせて、小さな秘密を共有した気がした。"
  ]
});

window.defineEvent({
  "id": "child_unconscious_slide_friction",
  "title": "幼い日の無意識・滑り台の摩擦と秘密の火照り",
  "age": [
    6,
    10
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 20,
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
  "text": "公園の長いローラー滑り台や急なスロープ。薄手のズボンやスカート越しに、座面と股間が激しく擦れ合いながら滑り降りる。お尻から股間の割れ目へと伝わるリズミカルな振動と摩擦熱。滑り終えた瞬間、下腹がジーンと痺れて立ち上がれなくなるほどの快感が走り、お友達には言えないまま、もう一度その刺激を味わいたくて階段へ走ってしまう……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "股間を擦りつける強い刺激に夢中になる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "滑り台を何度も駆け上がり、股間を擦りつける強い刺激に夢中になる。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ベンチに座って静かに味わう",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "滑り降りたあとの下腹のジンジンとした熱さを、ベンチに座って静かに味わう。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "別の遊具へ走る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "友達に「もう一回滑ろう」と言われて恥ずかしくなり、別の遊具へ走る。",
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
    "shared_activity",
    "reflection",
    "shared_activity"
  ],
  "diary": [
    "滑り台をシューッとすべり降りたとき、お尻とお股の真ん中がガタガタと擦れて、声が出そうになった。何度もすべり台の階段を登ってしまった。",
    "すべり終わったあと、足に力が入らなくなってベンチに座り込んだ。お腹の奥が熱くて、パンツの中がじんわり温かくなっていた。",
    "友達に顔が赤いよと言われて、あわてて手で隠した。どうしてあんなに気持ちよかったのか、不思議でたまらなかった。"
  ]
});

window.defineEvent({
  "id": "childhood_daily_play",
  "title": "childhood_daily_play",
  "title_template": "子供時代の日常 〜{variation_title}〜",
  "age": [
    6,
    10
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 70,
  "choices": [
    {
      "id": "choice_lead",
      "stance": "lead",
      "label": "「ここから水を流すから受け止めて！」とリーダーシップをとる",
      "effects": {
        "social": 4,
        "mood": 4,
        "independence": 3
      }
    },
    {
      "id": "choice_join",
      "stance": "join",
      "label": "周りの友達に笑顔で合わせて一緒に楽しむ",
      "effects": {
        "social": 3,
        "mood": 3
      }
    },
    {
      "id": "choice_focus",
      "stance": "focus",
      "label": "砂山の頂上に飾るピカピカの泥団子の作り方に集中する",
      "effects": {
        "knowledge": 3,
        "mood": 2
      }
    },
    {
      "id": "choice_shy",
      "stance": "shy",
      "label": "少し恥ずかしがって遠巻きに様子を見守る",
      "effects": {
        "shyness": 3,
        "stress": -1
      }
    }
  ],
  "variations": [
    {
      "sub_id": "sandcastle_dam",
      "title": "水道のホースと砂場の巨大ダム工事",
      "description": "公園の砂場で、水道からバケツで水を汲んで山を作っていると、学年も違う子たちが集まってきて「トンネル掘っていい？」「水流す係やる！」と大工事が始まった。",
      "outcomes": {
        "lead": {
          "text": "「私が合図したら水を流してね！」と声を張り上げ、見事にトンネルを貫通させた。みんなから「すごーい！」と拍手されて誇らしかった。",
          "diary": "砂場でみんなと巨大なダムを作った。私が指揮をとって水を通したとき、大歓声があがって最高の気分だった。"
        },
        "join": {
          "text": "友達と泥だらけになりながらバケツで水を運び、決壊しそうな壁をみんなでペタペタ補修して大笑いした。",
          "diary": "友達と一緒に砂場を泥んこにして遊んだ。服が汚れたけれど、みんなと笑い合えて楽しかった。"
        },
        "focus": {
          "text": "砂場の隅の細かい乾いた砂を丁寧に振りかけ、手のひらで何度も磨き上げて鏡のように光る泥団子を完成させた。",
          "diary": "ピカピカに光る泥団子を作った。周りのみんなに見せたら「宝石みたい！」って驚かれた。"
        },
        "shy": {
          "text": "輪の中に入るのは少し気後れしたけれど、端っこからスコップで砂を渡してあげると「ありがとう！」と言われて嬉しかった。",
          "diary": "みんなの輪の外からそっとお手伝いをした。ありがとうって言ってもらえて心が温かくなった。"
        }
      }
    }
  ]
});

window.defineEvent({
  "id": "elem_park_stranger_swings",
  "title": "夕暮れ公園のブランコと知らないあの子",
  "age": [
    6,
    10
  ],
  "trigger": "normal",
  "classification": "random",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "放課後の公園。ブランコに乗っていると、隣に見知らぬ他校の女の子が座った。どちらが高く空を蹴れるか、自然と競争が始まった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "「あの夕焼け雲まで届くかな！」と思い切り漕ぐ",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "「あの夕焼け雲まで届くかな！」と思い切り漕ぐ",
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
            },
            {
              "path": "skill.healthy_habits",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ブランコを止めて、「何小学校？ 私はね…」とおしゃべりする",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "ブランコを止めて、「何小学校？ 私はね…」とおしゃべりする",
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
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "公園で隣のブランコに乗った知らない女の子と、どっちが高く漕げるか競争した。空がオレンジ色で、風が気持ちよくて、名前も知らないのにずっと笑ってた。",
    "ブランコに揺られながら、他校の子とアニメや飼ってる犬の話をした。チャイムが鳴って「じゃあね！」って手を振って別れた。また会えるといいな。"
  ]
});

window.defineEvent({
  "id": "child_unconscious_bath_shower",
  "title": "幼い日の無意識・お風呂場のシャワーと水圧",
  "age": [
    6,
    11
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "text": "一人で入るようになったお風呂場。湯気で白く霞む中、何気なく股の間に向けたシャワーヘッド。勢いよく噴き出す熱いお湯の束が、太ももの付け根の小さな豆粒のような突起に直撃した瞬間、ビクンと背筋が跳ね上がり、身体中の力が抜けてその場にへたり込んでしまう。頭がふわふわと白くなる不思議な感覚に、胸が早鐘を打つ……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "小さな突起にお湯の束を当て続けて腰を浮かす",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "水圧の強さを上げ、小さな突起にお湯の束を当て続けて腰を浮かす。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "指先につくぬめりに戸惑う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "お湯に打たれながら指先でそっと触れてみて、指先につくぬめりに戸惑う。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "急いでシャワーを止める",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "身体が変になってしまいそうな怖さに怯え、急いでシャワーを止める。",
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
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "diary": [
    "お風呂でシャワーのお湯を当てたら、お腹の底から電気が走ったみたいになって立てなくなった。びっくりしたけれど、なんだか気持ちよかった。",
    "お湯があたった場所を指でさわってみると、ぬるぬるしたものがついていて不思議だった。自分の身体なのに、知らない秘密ができた気がした。",
    "急に頭が真っ白になって怖くなって、慌てて蛇口を閉めた。お湯から上がった後も、太ももの間がずっとぽかぽかして落ち着かなかった。"
  ]
});

window.defineEvent({
  "id": "child_first_friend",
  "title": "放課後の秘密と特別な親友",
  "age": [
    6,
    12
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
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
    }
  },
  "text": "帰り道の夕暮れ、二人でアイスを食べながら他愛ない秘密を明かし合う。家族にも言えない胸の内を打ち明けたとき、相手がまっすぐな瞳で見つめ返してくれた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "何でも話せる絆を育む",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "一緒に過ごす時間を増やし、何でも話せる絆を育む。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 6
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "history.flags.first_friend_accepted",
              "op": "record_flag",
              "value": true
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "程よい距離を保つ",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "お互いの時間も大切にしながら、程よい距離を保つ。",
          "effects": [
            {
              "path": "state.self_efficacy",
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
  ],
  "diary": [
    "二人で秘密を共有したあの夕暮れの風の匂いを、今も鮮明に覚えている。",
    "親友ができた喜びを胸に抱きながら、一人の時間も静かに噛み締めた。"
  ]
});

window.defineEvent({
  "id": "elem_bicycle_excursion",
  "title": "友達と自転車で遠出",
  "age": [
    6,
    12
  ],
  "trigger": "chain_only",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 0,
  "once": true,
  "is_narrative": true,
  "narrative_type": "followup",
  "text": "自転車に乗れるようになってから数か月。友達と一緒にペダルを漕ぎ、心地よい風を浴びながら隣町の大きな公園まで遠出した。どこまでも自分の力で行けるような、誇らしさと冒険心に胸が高鳴った。",
  "effects": [
    {
      "path": "state.mood",
      "op": "add",
      "value": 3
    },
    {
      "path": "skill.communication_skill",
      "op": "add",
      "value": 2
    },
    {
      "path": "trait.constitution.current",
      "op": "add",
      "value": 2
    }
  ],
  "diary": "補助輪を外して練習した日々が懐かしい。友達と並んで走る帰り道、夕焼け空がとても綺麗で、少しだけ世界が広がった気がした。"
});

window.defineEvent({
  "id": "child_unconscious_bicycle_saddle",
  "title": "幼い日の無意識・自転車のサドルと謎の痺れ",
  "age": [
    7,
    11
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "text": "夕暮れの公園。少しサドルの高い自転車にまたがり、ペダルを力強く踏み込む。段差を乗り越えるたび、硬い革サドルの先端が、まだ毛も生えていないショーツ越しの割れ目に強く押し当てられる。下腹の奥にツンと走る甘い痺れ。悪いことのような恥ずかしさを覚えつつも、なぜか足をとめられず、サドルに体重を預けて何度も腰を擦りつけてしまう……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "下腹に走る甘い痺れに身を委ねる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "息を弾ませながらペダルを漕ぎ続け、下腹に走る甘い痺れに身を委ねる。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "立ち止まって震える吐息を漏らす",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "サドルの先端に体重をギュッと押し当て、立ち止まって震える吐息を漏らす。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "慌てて自転車を降りて家へ走る",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "お母さんの呼ぶ声にハッと我に返り、慌てて自転車を降りて家へ走る。",
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
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "diary": [
    "自転車を漕ぎながら、お尻の真ん中がキュンと痛痒いような変な気持ちになった。息が苦しいのに、ペダルを回す足が止まらなかった。",
    "サドルに身体を押し付けたまま、夕暮れの道でじっと立ち止まった。お腹の奥がジーンと痺れて、太ももの内側が汗でしっとり濡れていた。",
    "夕焼けの空の下でお母さんの声が聞こえて急に恥ずかしくなった。自転車を置いて走って帰ったけれど、パンツが少し温かかった。"
  ]
});

window.defineEvent({
  "id": "elem_cleaning_duty_fight",
  "title": "放課後の教室掃除と男子のチャンバラ",
  "age": [
    7,
    11
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "放課後の教室掃除。男子たちがホウキを刀にしてチャンバラを始め、集めたゴミを散らかした。「ちょっと！ ちゃんと掃除しなさいよ！」と怒鳴りつける。",
  "choices": [
    {
      "id": "choice_0",
      "label": "ホウキを奪い取って厳しく叱りつけ、やり直させる",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "ホウキを奪い取って厳しく叱りつけ、やり直させる",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
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
      "id": "choice_1",
      "label": "職員室の先生に言いに行って注意してもらう",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "職員室の先生に言いに行って注意してもらう",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "呆れて無視し、仲の良い友達と手早く終わらせる",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "呆れて無視し、仲の良い友達と手早く終わらせる",
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
              "path": "skill.healthy_habits",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "男子がホウキでチャンバラしてゴミを散らかすから、本気で怒鳴ってホウキを取り上げた。「うるさい女！」って言われたけど、最後はちゃんと謝らせて掃除させた。私、意外と強いかも。",
    "先生を呼んできたら、男子たちが一瞬で青ざめて正座させられていた。「言いつけ魔」って小声で睨まれたけど、悪いのはあっちだし、ルールは守るべきだ。",
    "男子を相手にするのもバカバカしいから、〇〇ちゃんと二人でサッサと終わらせた。「男子ってなんであんなに幼稚なんだろうね」って笑い合いながら帰った夕暮れが楽しかった。"
  ]
});

window.defineEvent({
  "id": "elem_dagashi_store_coins",
  "title": "100円玉を握りしめた放課後の駄菓子屋",
  "age": [
    7,
    11
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "放課後、ポケットの中の100円玉を握りしめて近所の古びた駄菓子屋へ。ブタメン、うまい棒、きなこ棒、コーラ味のグミ。",
  "choices": [
    {
      "id": "choice_0",
      "label": "10円単位で計算し尽くし、ピッタリ100円の最強の組み合わせを買う",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "10円単位で計算し尽くし、ピッタリ100円の最強の組み合わせを買う",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "店先の赤いベンチに友達と座って、分け合って食べる",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "店先の赤いベンチに友達と座って、分け合って食べる",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
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
  "diary": [
    "10円玉を数えながら、うまい棒2本とチロルチョコときなこ棒でピッタリ100円！ 店先でおばちゃんに褒められて得意顔になった。",
    "駄菓子屋の前のベンチでブタメンにお湯を入れてもらった。友達と汁まですすって、「美味しいね」って笑った夕暮れの空がすごく綺麗だった。"
  ]
});

window.defineEvent({
  "id": "elem_lunch_seconds_duel",
  "title": "給食の揚げパンと仁義なきおかわりジャンケン",
  "age": [
    7,
    11
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "大人気のきな粉揚げパンがひとつだけ余った。男子たちが押し寄せる中、「私だって食べたい！」とジャンケンの輪に飛び込んだ。",
  "choices": [
    {
      "id": "choice_0",
      "label": "気迫を込めてチョキを出し、勝ちをもぎ取る",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "気迫を込めてチョキを出し、勝ちをもぎ取る",
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
      "id": "choice_1",
      "label": "勝ったあと、応援してくれた友達と半分こにする",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "勝ったあと、応援してくれた友達と半分こにする",
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
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "最後に男子と一騎打ちになって、心臓がバクバクしたけど勝った！ 勝ち取った揚げパンはいつもより何倍も甘くて美味しかった。男子の悔しそうな顔が忘れられない。",
    "ジャンケンで勝ってゲットした揚げパンを、応援してくれた〇〇ちゃんと半分こにした。ふたりで口の周りをきな粉だらけにして大笑いした。"
  ]
});

window.defineEvent({
  "id": "child_unconscious_skirt_wind_peek",
  "title": "幼い日の無意識・風にめくれたスカートと身体測定",
  "age": [
    7,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 20,
  "text": "保健室での身体測定の順番待ち、または下校途中の突風。下着一枚や、めくれ上がったスカートによって無防備な素肌を晒してしまう瞬間。同級生の視線が太ももや白いショーツに注がれた時、恥ずかしさで顔から火が出るのと同時に、なぜか下腹の奥がきゅうと縮こまり、太ももの内側が甘く熱を帯びる奇妙な興奮を覚えてしまう……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "下腹の奥に芽生えた熱い疼きに戸惑う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "恥ずかしさに耐えながらスカートを押さえ、下腹の奥に芽生えた熱い疼きに戸惑う。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "太ももをきゅっと擦り合わせて立つ",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "誰かに見られている視線を意識しながら、太ももをきゅっと擦り合わせて立つ。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "平気な顔をして列に並び直す",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "すぐに身だしなみを正し、平気な顔をして列に並び直す。",
          "effects": [
            {
              "path": "state.self_efficacy",
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
    }
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "diary": [
    "風でスカートがフワッとめくれた瞬間、男の子と目が合った。恥ずかしくてたまらないのに、太ももの付け根がきゅっと熱くなって息が詰まった。",
    "体操服に着替えるとき、誰かに見られているような気がして身体がゾクゾクした。両足の内側をぎゅっと擦り合わせながら、急いで着替えた。",
    "見られてしまった恥ずかしさを隠すように、つんとした顔で前を向いた。胸の奥の変なざわめきを、誰にも気づかれないように必死だった。"
  ]
});

window.defineEvent({
  "id": "elem_library_nook_reading",
  "title": "陽だまりの図書室と古い物語の匂い",
  "age": [
    7,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "放課後の図書室。静かな空気と古い紙の匂い。窓際の陽だまりの席で、分厚いファンタジー小説の世界に吸い込まれるように読みふける。",
  "choices": [
    {
      "id": "choice_0",
      "label": "図書委員の友達とカードを見せ合い、一番好きな本をおすすめし合う",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "図書委員の友達とカードを見せ合い、一番好きな本をおすすめし合う",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            },
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
    },
    {
      "id": "choice_1",
      "label": "物語の世界に刺激を受け、自由帳に自分だけの小説を書き始める",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "物語の世界に刺激を受け、自由帳に自分だけの小説を書き始める",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "図書室の窓際で〇〇ちゃんに勧められた長編小説を読んだ。ふたりで登場人物の絵を描いて栞を作った。静かで、宝物みたいな放課後の時間。",
    "読書が好きすぎて、自分でもお話を書き始めた。魔法使いの女の子が旅をする物語。時間を忘れてペンを動かしているときが一番幸せ。"
  ]
});

window.defineEvent({
  "id": "elem_rainy_day_classroom",
  "title": "外は土砂降りの雨と教室のトランプ大会",
  "age": [
    7,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "校庭が使えない雨の昼休み。机を四つくっつけて、友達とトランプの「大富豪」や「スピード」で大盛り上がりする。",
  "choices": [
    {
      "id": "choice_0",
      "label": "「スピード」で白熱し、机をバシバシ叩いて大笑いする",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "「スピード」で白熱し、机をバシバシ叩いて大笑いする",
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
      "id": "choice_1",
      "label": "自由帳にオリジナル漫画や可愛いイラストを描き合って見せ合う",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "自由帳にオリジナル漫画や可愛いイラストを描き合って見せ合う",
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
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "雨で外に出られなかったから教室でトランプした。「スピード」で手がぶつかりそうになりながら大騒ぎして、お腹が痛くなるくらい笑った。",
    "〇〇ちゃんと自由帳にイラストを描き合っこした。ドレスのデザインを描いたら「すっごく上手！」って褒めてもらえて嬉しかった。将来デザイナーになろうかな。"
  ]
});

window.defineEvent({
  "id": "elem_winter_snowball_fight",
  "title": "校庭の銀世界と手袋を濡らした雪合戦",
  "age": [
    7,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "朝起きたら一面の銀世界。登校するなり、手袋を真っ白に濡らしながら男子女子入り乱れての雪合戦が始まった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "雪玉をたくさん作って要塞に立てこもり、男子の突撃を迎え撃つ",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "雪玉をたくさん作って要塞に立てこもり、男子の突撃を迎え撃つ",
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
            },
            {
              "path": "skill.healthy_habits",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "親友と力を合わせて自分の背丈より大きな雪だるまを完成させる",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "親友と力を合わせて自分の背丈より大きな雪だるまを完成させる",
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
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "雪だるまの壁の後ろから男子に向かって雪玉を連射した！ 手が冷たくて真っ赤になったけど、男子が「降参！」って逃げていくのが面白くてたまらなかった。",
    "〇〇ちゃんと雪の玉をゴロゴロ転がして、自分の背より大きい雪だるまを作った。木の枝で手をつけて、みかんの皮で鼻をつけた。解けるのがもったいなかったな。"
  ]
});

window.defineEvent({
  "id": "child_competition",
  "title": "隣のあの子の白い手足と羨望",
  "age": [
    7,
    15
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 11,
  "text": "体育の授業や更衣室で並ぶ同級生の姿。すらりと伸びた白い手足や、早くも膨らみ始めた胸。自分との違いを目の当たりにし、チクチクとした劣等感と憧れが胸を突く。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自信を取り戻す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "自分の得意な分野を磨き、自信を取り戻す。",
          "effects": [
            {
              "path": "skill.knowledge",
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
      "label": "苦手なことにも全力で挑む",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "悔しさをバネにして、苦手なことにも全力で挑む。",
          "effects": [
            {
              "path": "skill.knowledge",
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
    }
  ],
  "diary": [
    "周囲と自分を比べて落ち込む日もあるけれど、私には私の良さがあるのだと信じたい。",
    "負けたくない一心で練習に打ち込んだ。汗を流した後の心地よい疲労感が、焦りを吹き飛ばしてくれた。"
  ]
});

window.defineEvent({
  "id": "elem_name_calling_retaliation",
  "title": "男子のからかいと悔し涙をこらえた反撃",
  "age": [
    8,
    11
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "男子の集団に髪型や背の高さをからかわれた。悔し涙が滲みそうになるが、グッと奥歯を噛みしめて立ちふさがる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "真っ直ぐ睨みつけ、正論でぐうの音も出ないほど言い負かす",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "真っ直ぐ睨みつけ、正論でぐうの音も出ないほど言い負かす",
          "effects": [
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
      "id": "choice_1",
      "label": "「幼稚なこと言ってるとテストで負けるよ」と冷たくあしらう",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "「幼稚なこと言ってるとテストで負けるよ」と冷たくあしらう",
          "effects": [
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
    }
  ],
  "diary": [
    "からかわれて泣きそうになったけど、絶対に泣かないって決めて言い返した。「人の見た目を笑うなんて最低だよ！」って言ったら、男子たちが黙り込んだ。泣かなくてよかった。",
    "バカにしてきた男子に「そんなこと言ってると次のテストで負けるよ」って冷たく言ってやった。実際、算数のテストで私のほうがずっと点数が高くて、鼻が高かった。"
  ]
});

window.defineEvent({
  "id": "elem_secret_base_shrine",
  "title": "神社の裏山とダンボールの秘密基地",
  "age": [
    8,
    11
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "近所の神社の裏手、生い茂る木々の隙間にダンボールと小枝を集めて、親友とふたりだけの「秘密基地」を作った。",
  "choices": [
    {
      "id": "choice_0",
      "label": "綺麗な小石やドングリを並べて「秘密の宝物庫」を作る",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "綺麗な小石やドングリを並べて「秘密の宝物庫」を作る",
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
      "id": "choice_1",
      "label": "「基地の掟」を紙に書いて、指切りげんまんで秘密を誓い合う",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "「基地の掟」を紙に書いて、指切りげんまんで秘密を誓い合う",
          "effects": [
            {
              "path": "skill.communication_skill",
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
    }
  ],
  "diary": [
    "神社の裏に作った秘密基地。拾ってきた綺麗なガラスの破片と木の実を並べた。ここは大人の誰も知らない、私たちだけの世界。",
    "「この場所は絶対に男子にも親にも秘密にすること」。ノートの切れ端に書いて、指切りした。小指の温もりがなんだか誇らしかった。"
  ]
});

window.defineEvent({
  "id": "elem_stationery_sticker_swap",
  "title": "放課後のシール交換と秘密のプロフィール帳",
  "age": [
    8,
    11
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "放課後の教室。机いっぱいに広げたシール帳。ぷくぷくシールやタイルシールを1枚ずつ交換し、プロフィール帳を渡し合う。",
  "choices": [
    {
      "id": "choice_0",
      "label": "一番お気に入りのキラキラシールを親友にプレゼントする",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "一番お気に入りのキラキラシールを親友にプレゼントする",
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
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "プロフィール帳の「好きな人」欄に『ひみつ♡』と書いて渡す",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "プロフィール帳の「好きな人」欄に『ひみつ♡』と書いて渡す",
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
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "大切にしてたラメ入りのシールを〇〇ちゃんにあげたら、ものすごく喜んでくれて、お返しに可愛いメモ帳をくれた。物より気持ちが通じ合えたのが嬉しかった。",
    "プロフ帳の好きな人の欄、誰もいないのに思わせぶりに「ひみつ」って書いたら、放課後みんなに質問攻めに遭って大騒ぎになった。女子トークって本当に楽しい。"
  ]
});

window.defineEvent({
  "id": "elem_dodgeball_rivalry",
  "title": "昼休みの白熱ドッジボールと男子のエース",
  "age": [
    8,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "昼休みの校庭。クラス対抗のドッジボールで、男子のエースが豪速球を構えている。逃げ惑う女子の中で、最後まで内野に残った。",
  "choices": [
    {
      "id": "choice_0",
      "label": "逃げずに真正面から胸元で豪速球をキャッチする",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "逃げずに真正面から胸元で豪速球をキャッチする",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.healthy_habits",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "身軽にかわしてフェイントをかけ、男子を翻弄する",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "身軽にかわしてフェイントをかけ、男子を翻弄する",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "男子のエースが投げてきた強いボール、逃げずに胸の前でバシッと止めた！ 腕がじんじん痛かったけど、男子が目を丸くして驚いていて、すっごくスカッとした！",
    "何本飛んできてもギリギリでかわしてやった。相手がムキになって息を切らしているのを見て思わずニヤリ。すばしっこさなら負けない。"
  ]
});

window.defineEvent({
  "id": "elem_park_lost_child_rescue",
  "title": "砂場で泣いていた小さな男の子と交番",
  "age": [
    8,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "公園の片隅で、小さな男の子が「ママがいない」としゃくりあげていた。大人は誰も気づいていない。",
  "choices": [
    {
      "id": "choice_0",
      "label": "目線を合わせて頭をなで、「お姉ちゃんと一緒に探そう」と手を引く",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "目線を合わせて頭をなで、「お姉ちゃんと一緒に探そう」と手を引く",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "すぐ近くの交番に連れて行き、お巡りさんに説明する",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "すぐ近くの交番に連れて行き、お巡りさんに説明する",
          "effects": [
            {
              "path": "skill.knowledge",
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
  "diary": [
    "泣いてる小さい子の手を引いてお母さんを探した。見つかったとき、お母さんが泣いて「ありがとう」って言ってくれて、私の胸もじんわり温かくなった。",
    "交番のお巡りさんに事情を話して保護してもらった。お巡りさんに「偉いね、お姉ちゃん」って飴ちゃんをもらって、ちょっと照れくさかった。"
  ]
});

window.defineEvent({
  "id": "elem_relay_race_baton",
  "title": "秋空の運動会とクラス対抗リレーのバトン",
  "age": [
    8,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "秋の運動会。クラスの代表としてリレーの選手に選ばれた。砂埃が舞う校庭、割れんばかりのメガホンの応援。",
  "choices": [
    {
      "id": "choice_0",
      "label": "コーナーで外側から一気に前の走者を抜き去る",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "コーナーで外側から一気に前の走者を抜き去る",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.healthy_habits",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "呼吸を合わせて完璧なバトンパスを次の走者に繋ぐ",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "呼吸を合わせて完璧なバトンパスを次の走者に繋ぐ",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "リレーのカーブで前の人を抜いた瞬間、全校生徒の「うおおおっ！」って歓声が聞こえた。足がちぎれそうだったけど、風になったみたいで最高に気持ちよかった！",
    "「はいっ！」って声をかけて次の走者の手にバトンを叩き込んだ。みんなで力を合わせて掴んだ1位のメダル、一生の宝物にする。"
  ]
});

window.defineEvent({
  "id": "elem_summer_science_project",
  "title": "模造紙いっぱいの夏休み自由研究",
  "age": [
    8,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "夏休みの自由研究。模造紙とカラーペンを広げ、図書館で調べたことや近所の川で観察した生き物の記録をまとめる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "植物や昆虫の精密なスケッチを描き、分類表を作る",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "植物や昆虫の精密なスケッチを描き、分類表を作る",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "身近な材料を使った科学実験を行い、写真を貼って考察する",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "身近な材料を使った科学実験を行い、写真を貼って考察する",
          "effects": [
            {
              "path": "state.mood",
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
    }
  ],
  "diary": [
    "何日もかけて色鉛筆で描いた植物のスケッチ。先生に「大学の研究ノートみたいだね」って褒められて地区の作品展に出品された。すごく誇らしい。",
    "紫キャベツの汁でいろんな液体の色が変わる実験をした。写真もたくさん貼って模造紙を仕上げた。実験って魔法みたいで面白い！"
  ]
});

window.defineEvent({
  "id": "elem_teacher_essay_praise",
  "title": "国語の時間の朗読と先生の丸つけ",
  "age": [
    8,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "家族や友達について書いた作文を、先生が「すごく心に響く文章だから、みんなの前で読んでほしい」と教壇に呼んでくれた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "胸を張って自分の言葉で読み上げ、教室中から拍手をもらう",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "胸を張って自分の言葉で読み上げ、教室中から拍手をもらう",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
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
    },
    {
      "id": "choice_1",
      "label": "恥ずかしくて顔を真っ赤にしながらも、一言一言丁寧に読み切る",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "恥ずかしくて顔を真っ赤にしながらも、一言一言丁寧に読み切る",
          "effects": [
            {
              "path": "state.mood",
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
  "diary": [
    "教壇の前に立って作文を読んだ。最初は足が震えたけど、読み進めるうちにみんなが真剣に聞いてくれてるのがわかった。拍手をもらったとき、誇らしくて胸がいっぱいになった。",
    "顔から火が出るくらい恥ずかしかったけど、最後まで読んだ。席に戻ったら隣の男子まで「お前の作文、なんか良かったよ」って言ってくれて、嬉しさを噛みしめた。"
  ]
});

window.defineEvent({
  "id": "elem_cram_school_first_day",
  "title": "駅前の進学塾と新しいノートの匂い",
  "age": [
    9,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "放課後、駅前の進学塾に通い始めた。学校とは違う少しピリッとした空気、黒板の大きな文字、新しいテキストの紙の匂い。",
  "choices": [
    {
      "id": "choice_0",
      "label": "一番前の席に座り、先生の解説を一言も漏らさずメモする",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "一番前の席に座り、先生の解説を一言も漏らさずメモする",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "隣の席の他校の女の子に「よろしくね」と声をかける",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "隣の席の他校の女の子に「よろしくね」と声をかける",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
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
  "diary": [
    "今日から塾に通い始めた。学校よりも進みが早くて難しいけど、先生の教え方がすごくわかりやすい。ノートを色ペンで綺麗にまとめて、帰りの電車でも眺めちゃった。",
    "隣の席の〇〇ちゃんとお友達になった。隣の小学校の子で、すごく勉強ができる子。お互いにわからないところを教え合おうって約束した。"
  ]
});

window.defineEvent({
  "id": "elem_school_play_audition",
  "title": "体育館の舞台と学芸会の役決めオーディション",
  "age": [
    9,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "学芸会の劇の配役決め。誰もがやりたがる重要なヒロイン役に、ドキドキしながら手を挙げた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "恥ずかしさを捨て、体育館の後ろまで響く大きな声で演じる",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "恥ずかしさを捨て、体育館の後ろまで響く大きな声で演じる",
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
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "個性的な脇役や大道具・照明係として劇の全体を支える",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "個性的な脇役や大道具・照明係として劇の全体を支える",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
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
  "diary": [
    "オーディションの台詞を声いっぱい出した。みんなが静かになって見つめてくれたとき、胸がカーッと熱くなった。主役に選ばれて本当に嬉しい。",
    "舞台の背景画を夜遅くまで塗って、照明のタイミングも完璧に合わせた。カーテンコールで全員で手をつないでお辞儀したとき、やり切った感動で胸がいっぱいになった。"
  ]
});

window.defineEvent({
  "id": "elem_sleepover_pajama_party",
  "title": "並べた布団と真夜中の懐中電灯",
  "age": [
    9,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "親の許可をもらって親友の家でお泊まり会。部屋の電気を消して豆電球にし、並んだ布団の中でヒソヒソ話が始まる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "懐中電灯を下から顔に当てて、怖い話をしてキャーキャー叫ぶ",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "懐中電灯を下から顔に当てて、怖い話をしてキャーキャー叫ぶ",
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
      "label": "普段は照れくさくて言えない家族の悩みや将来の夢を語り合う",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "普段は照れくさくて言えない家族の悩みや将来の夢を語り合う",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "初めて親友の家に泊まった。夜中に学校の七不思議の話をしてたら本当に怖くなって、ふたりでひとつの毛布にくるまって震えながら寝た。一生の思い出。",
    "暗闇の中で、家族のことや自分が不安に思ってることを話した。〇〇ちゃんは黙って手をつないで聞いてくれた。こんなに信頼できる友達に出会えて幸せだ。"
  ]
});

window.defineEvent({
  "id": "elem_chorus_contest_piano",
  "title": "音楽室のピアノと合唱コンクールの練習",
  "age": [
    10,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "秋の音楽会に向けての合唱練習。男子がふざけて口パクばかりで、女子との間に不穏な空気が漂い始めた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "「みんなで金賞取りたいの！ ちゃんと歌って！」と涙目で真剣に訴える",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "「みんなで金賞取りたいの！ ちゃんと歌って！」と涙目で真剣に訴える",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ピアノの伴奏を心を込めて力強く響かせ、音色でクラスを引っ張る",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "ピアノの伴奏を心を込めて力強く響かせ、音色でクラスを引っ張る",
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
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "ふざける男子に泣きそうになりながら「ちゃんと歌ってよ！」って叫んだ。そしたら男子のリーダーが「…悪かったよ。やるか」って本気で歌い始めて、鳥肌が立った。",
    "指が痛くなるくらいピアノを力強く弾いた。メロディにつられてみんなが自然と大きな声で歌い出して、体育館中に声が響いたとき、鳥肌が立つほど感動した。"
  ]
});

window.defineEvent({
  "id": "elem_cooking_club_cookies",
  "title": "家庭科室の甘いバターの香りと型抜きクッキー",
  "age": [
    10,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "クラブ活動の家庭科室。白い三角巾とエプロンをつけて、小麦粉とバターをこねて型抜きクッキーをオーブンで焼く。",
  "choices": [
    {
      "id": "choice_0",
      "label": "親友とお互いの顔をかたどったクッキーを焼いて交換する",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "親友とお互いの顔をかたどったクッキーを焼いて交換する",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "綺麗に焼き上がったクッキーをラッピングして、担任の先生に届ける",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "綺麗に焼き上がったクッキーをラッピングして、担任の先生に届ける",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
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
  "diary": [
    "家庭科室中にバターの甘い匂いが充満した。〇〇ちゃんの顔のクッキーを焼いてプレゼントしたら「食べるのもったいない！」って言ってくれた。お菓子作り大好き。",
    "職員室にクッキーを持って行ったら、先生たちが「美味しい！」って笑顔で食べてくれた。誰かを笑顔にできるってすごく嬉しいことだな。"
  ]
});

window.defineEvent({
  "id": "elem_cram_school_steamed_bun",
  "title": "塾帰りの夜風と分け合った温かい肉まん",
  "age": [
    10,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "夜8時過ぎ、塾の授業が終わった。冷たい夜風が吹く駅前で、塾で仲良くなった友達と一緒にコンビニの湯気立つ肉まんを買った。",
  "choices": [
    {
      "id": "choice_0",
      "label": "肉まんを半分こにして、お互いの悩みを語り合いながら駅へ歩く",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "肉まんを半分こにして、お互いの悩みを語り合いながら駅へ歩く",
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
      "label": "「次の模試、ふたりでクラスアップしようね！」と誓い合う",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "「次の模試、ふたりでクラスアップしようね！」と誓い合う",
          "effects": [
            {
              "path": "state.stress",
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
    }
  ],
  "diary": [
    "テストの後、駅前のコンビニで肉まんを買ってふたりで半分こした。「アツッ」って言いながらハフハフ食べた。夜の街を歩くの、ちょっと大人になったみたいでドキドキした。",
    "帰り道、街灯の下で「絶対ふたりで上のクラスに行こうね」って指切りした。ライバルだけど一番の親友。あの子がいるから頑張れる。"
  ]
});

window.defineEvent({
  "id": "elem_mock_exam_results",
  "title": "週末の模擬試験と貼り出された成績上位者",
  "age": [
    10,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "週末に受けた大きな模試の結果が返ってきた。塾の廊下の掲示板に貼り出された名前と、手元の成績表の偏差値。",
  "choices": [
    {
      "id": "choice_0",
      "label": "間違えた問題をノートに赤ペンで徹底的に解き直す",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "間違えた問題をノートに赤ペンで徹底的に解き直す",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "上がった偏差値の成績表を家に持ち帰り、家族に見せる",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "上がった偏差値の成績表を家に持ち帰り、家族に見せる",
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
    }
  ],
  "diary": [
    "模試で惜しくも間違えた問題を、夜遅くまで解き直した。最初は悔しかったけど、解き方がわかった瞬間すごくスッキリした。努力は裏切らない。",
    "成績表を見せたら、お母さんが「頑張ったね！」って抱きしめてくれて、夜ご飯に大好物のハンバーグを作ってくれた。嬉しくてちょっと泣きそうだった。"
  ]
});

window.defineEvent({
  "id": "child_body_mirror",
  "title": "脱衣所の鏡とふくらみ始めた胸",
  "age": [
    10,
    14
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 24,
  "text": "入浴前、脱ぎ捨てたシャツのあと。曇った鏡を手のひらで拭うと、少し前まで平らだった胸の先端が小さく膨らみ、薄紅色の乳頭が擦れて痛痒い。指先で恐る恐る触れると、下腹の奥がきゅんと縮むような甘い痺れが走る……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "未知のくすぐったさに息を呑む",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "指先でそっと先端をなぞり、未知のくすぐったさに息を呑む。",
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
      "label": "急いでシャツに袖を通す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "恥ずかしさに胸を腕で隠し、急いでシャツに袖を通す。",
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
      "label": "静かにため息をつく",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "母親や友達の胸と自分の形を思い比べ、静かにため息をつく。",
          "effects": []
        }
      ]
    }
  ],
  "diary": [
    "鏡の中の自分の身体が、女の子から大人の女へ変わり始めている。ツンと尖った胸の先を指で撫でた瞬間の甘い痺れが、服を着た後も下腹に残っていた。",
    "ふくらみ始めた胸が気恥ずかしくて、脱衣所で思わずうつむいてしまった。大人になることへの戸惑いが胸を満たした。",
    "友達の制服姿を思い出しながら、自分の成長の早さや遅さに思いを巡らせた。少しずつ女の身体になっていく自分を静かに受け止めた。"
  ]
});

window.defineEvent({
  "id": "elem_graduation_autograph_tears",
  "title": "卒業式の足音とランドセルの寄せ書き",
  "age": [
    11,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "once": true,
  "text": "3月の卒業式が近づく教室。サイン帳や卒業アルバムの空白ページに、仲の良かった友達やいつも喧嘩していた男子たちがメッセージを書き合う。",
  "choices": [
    {
      "id": "choice_0",
      "label": "いつも喧嘩していた男子からの「お前強かったな、中学でも元気で」の文字に微笑む",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "いつも喧嘩していた男子からの「お前強かったな、中学でも元気で」の文字に微笑む",
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
              "path": "skill.morality",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "「中学校が離れてもずっと親友だよ」と抱き合って涙をこぼす",
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "「中学校が離れてもずっと親友だよ」と抱き合って涙をこぼす",
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
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "いつも掃除当番で喧嘩してた男子が、サイン帳に「ケンカばっかだったけどお前が一番頼りになった」って書いてくれた。照れくさそうに笑う顔を見て、なんだか胸がツンとした。",
    "別の私立に行く〇〇ちゃんと抱き合って泣いた。「毎週土曜日遊ぼうね」「絶対手紙書くからね」って泣き笑い。小学校の思い出、全部全部忘れたくない。"
  ]
});

window.defineEvent({
  "id": "child_fine_hair_sprout",
  "title": "柔らかな皮膚に芽生えた大人の印",
  "age": [
    11,
    14
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 20,
  "text": "お風呂上がりに自室で服を着る前、下腹の柔らかな皮膚に薄っすらと生え始めた数本の細い毛に気づく。子供の肌から大人の女の身体へと変貌していく生々しい証に、胸がどきどきと波打つ……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "大人の身体に近づいている秘密の悦びに浸る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "指先でそっと触れ、大人の身体に近づいている秘密の悦びに浸る。",
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
      "label": "恥ずかしさから毛抜きで抜いてしまおうかと迷う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "恥ずかしさから毛抜きで抜いてしまおうかと迷う。",
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
      "label": "急いで新しいショーツを履き込む",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "誰にも見られないよう、急いで新しいショーツを履き込む。",
          "effects": []
        }
      ]
    }
  ],
  "diary": [
    "下腹の柔らかな皮膚に生えた数本の毛を、指先でそっと撫でた。子供の時代が終わり、私が女になっていくのだという実感が胸に迫った。",
    "見慣れない毛が気恥ずかしくて、鏡の前でため息をついた。身体の自然な変化だと頭では分かっていても、戸惑いは隠せなかった。",
    "急いでショーツを履き、制服のスカートを下ろした。家族にも言えない大人の階段を、一人きりで登り始めた気がした。"
  ]
});

window.defineEvent({
  "id": "child_gym_clothes_itch",
  "title": "体操着とブラジャーの擦れ",
  "age": [
    11,
    14
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "text": "初めて着けさせられたジュニアブラ。体育の授業で校庭を走るたび、薄い体操着の中で硬いゴムとカップが敏感になった乳頭を擦る。チクチクとした痛痒さがいつしか下腹の疼きに変わり、足がもつれそうになる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "必死に走り切る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "胸の擦れる甘い刺激に顔を赤らめながら、必死に走り切る。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ブラジャーのホックを緩めて熱い肌を休ませる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "トイレに駆け込み、ブラジャーのホックを緩めて熱い肌を休ませる。",
          "effects": [
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
      "label": "友達に「胸が痛くない？」と小声で相談してみる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "友達に「胸が痛くない？」と小声で相談してみる。",
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
    "走るたびに揺れる胸の先端が、布地に擦れてツンと尖る。痛いのにどこか下腹が熱くなるような奇妙な感覚に、息が上がってしまった。",
    "個室で体操着をめくり、赤くなった胸の先をそっと撫でた。ブラジャーの窮屈さと、女としての身体の成長を実感した。",
    "同じように悩んでいる友達と話せて安心した。胸の痛痒さも、みんなが通る道なのだと分かって少し心が軽くなった。"
  ]
});

window.defineEvent({
  "id": "child_panties_secret",
  "title": "下着に残る甘酸っぱい湿り気",
  "age": [
    11,
    15
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 24,
  "text": "体育の授業の後、トイレの個室で下着を下ろした瞬間、ふわりと立ち上る生温かい匂い。ショーツのクロッチ部分にわずかに広がった透明で粘りつく染み。病気ではないかと不安になりつつも、指先で触れたぬめりの温かさに心臓が跳ねる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "女の身体になったのだと胸を高鳴らせる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "指先についた微かな匂いを確かめ、女の身体になったのだと胸を高鳴らせる。",
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
      "label": "トイレットペーパーで念入りに拭き取る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "汚れが気になり、トイレットペーパーで念入りに拭き取る。",
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
      "label": "誰にも見つからないようポケットに隠す",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "こっそり下着を履き替え、誰にも見つからないようポケットに隠す。",
          "effects": []
        }
      ]
    }
  ],
  "diary": [
    "ショーツに残った生温かい湿り気と、甘酸っぱい匂い。自分の中からあんな淫らな体液が滲み出ている現実に、下腹がきゅんと疼いた。",
    "恥ずかしさで胸がいっぱいになり、トイレットペーパーで何度も拭いた。誰にも見られていないのに、顔が熱くてたまらなかった。",
    "汚れた下着をぎゅっと握りしめて家に持ち帰った。自分だけの秘密を抱えたような、甘美で後ろめたい気分だった。"
  ]
});

window.defineEvent({
  "id": "child_secret_dictionary",
  "title": "隠れて開く大人の言葉・辞書と画面",
  "age": [
    11,
    15
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 20,
  "text": "放課後の図書室や自室のスマホで、偶然目にした「性交」「処女」「愛撫」といった生々しい単語。誰にも見られないよう息を潜めて意味を読み進めるうちに、首筋がカーッと熱くなり、太ももの間がきゅんと濡れていく……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "生々しい描写を何度も読み返して妄想に耽る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "背徳感に震えながら、生々しい描写を何度も読み返して妄想に耽る。",
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
      "id": "choice_1",
      "label": "冷たい手で火照った頬を押さえる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "画面を伏せて激しい動悸を抑え、冷たい手で火照った頬を押さえる。",
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
      "label": "知ってる？」と探りを入れてみる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "親友にそれとなく「そういうこと、知ってる？」と探りを入れてみる。",
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
    "文字を目で追うだけで、太ももの間が熱く濡れていくのが分かった。大人が交わしているという生々しい行為を想像して、胸が早鐘を打った。",
    "あまりに刺激的な言葉に圧倒されて本を閉じた。それでも、頭の裏側に焼き付いた情景がなかなか消えてくれなかった。",
    "親友と顔を見合わせながらヒソヒソ声で話した。お互いに赤面しながらも、大人の秘密に一歩近づいたような共犯関係が嬉しかった。"
  ]
});

window.defineEvent({
  "id": "child_first_period_support",
  "title": "初めての赤い印と下着の重み",
  "age": [
    11,
    17
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 8,
  "text": "トイレで下着を下ろした瞬間、クロッチに滲んだ赤黒い染み。自分の中から生々しい血が流れ出ている現実に息を呑み、母から渡された分厚いナプキンを当てる。下腹が重だるく痛み、歩くたびにカサカサと鳴る違和感に、女の業のようなものを覚える……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自らの身体の命のサイクルを理解する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "月経の仕組みを調べ、自らの身体の命のサイクルを理解する。",
          "effects": [
            {
              "path": "skill.knowledge",
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
      "id": "choice_1",
      "label": "母親や友人に体調を相談する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "お腹にカイロを当てて温まり、母親や友人に体調を相談する。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
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
    "ナプキンを当てた下着のずっしりとした重み。下腹の奥が痛むたびに、私は本当に子供を産める大人の雌の身体になったのだと痛感した。",
    "温かいココアを飲みながらベッドで丸くなった。痛みに耐えながら、母が寄り添ってくれた手の温もりが嬉しかった。"
  ]
});

window.defineEvent({
  "id": "child_bed_friction",
  "title": "真夜中のシーツと太ももの挟み込み",
  "age": [
    12,
    16
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 26,
  "text": "寝苦しい夏の夜、パジャマの下の素肌が汗ばんでシーツに吸い付く。下腹の奥がじくじくと疼いて眠れず、抱き枕や布団を太ももの間にぎゅっと挟み込み、腰を小さく押し付ける。擦れる布地の摩擦と熱気に、喉から細い吐息が零れ落ちる……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "シーツの摩擦で熱い絶頂へ登りつめる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "太ももを固く締め付け、シーツの摩擦で熱い絶頂へ登りつめる。",
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
      "label": "愛液で濡れた秘所を直接指で弄る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "手をパジャマの中に滑り込ませ、愛液で濡れた秘所を直接指で弄る。",
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
      "label": "冷たい水を飲みに起き上がる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "いけないことをしていると我に返り、冷たい水を飲みに起き上がる。",
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
  "diary": [
    "布団を強く太ももで挟み、腰を擦りつけるたびに下腹から甘い痺れが突き上げた。シーツをぎゅっと掴み、吐息を漏らしながら小さな絶頂を迎えた。",
    "指先が愛液でぐちゅぐちゅと音を立てるのが恥ずかしくて、枕に顔を埋めた。自分の身体がこんなにも快感を欲していることに震えた。",
    "火照った身体を冷ますため、暗い台所で水を飲んだ。静まり返った夜の闇の中で、下腹の奥の余韻だけが熱く疼いていた。"
  ]
});

window.defineEvent({
  "id": "child_body_image",
  "title": "制服の下の丸みと注がれる視線",
  "age": [
    12,
    17
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 9,
  "text": "薄手のブラウス越しに、明らかに丸みを帯びてきた胸とくびれ始めた腰のライン。すれ違う男子や大人の視線が胸元に落ちるのを感じ、肌にまとわりつくような居心地の悪さと、女の身体になったのだという生々しい自意識が交錯する。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自分自身のペースで身体の変化を受け止める",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "視線に惑わされず、自分自身のペースで身体の変化を受け止める。",
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
      "id": "choice_1",
      "label": "居心地の悪さを信頼できる大人や保健室の先生に相談する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "居心地の悪さを信頼できる大人や保健室の先生に相談する。",
          "effects": [
            {
              "path": "skill.knowledge",
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
  "diary": [
    "歩くたびに揺れる胸を隠すように猫背になって歩いた。でも、これが大人の女性へ育っていく自然な過程なのだと、自分に言い聞かせた。",
    "保健室で先生に相談すると、「素敵な大人になっている証拠だよ」と微笑んでくれた。胸のつかえがすっと取れた。"
  ]
});

window.defineEvent({
  "id": "child_club",
  "title": "夕暮れの部活と汗ばむジャージ",
  "age": [
    12,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 14,
  "once": true,
  "text": "放課後のグラウンドや体育館。汗で肌に張り付く体操着の冷たさと、仲間と声を掛け合ってボールを追いかける熱気。青春の汗の匂いの中で、身体を動かす充実感に浸る。",
  "choices": [
    {
      "id": "choice_0",
      "label": "泥だらけになりながら部活動に打ち込む",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "泥だらけになりながら部活動に打ち込む。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 5
            },
            {
              "path": "trait.constitution.current",
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
      "id": "choice_1",
      "label": "趣味として楽しむ",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "自分のペースを崩さず、趣味として楽しむ。",
          "effects": [
            {
              "path": "state.mood",
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
    }
  ],
  "diary": [
    "仲間と声を枯らして夕暮れまでボールを追った。ジャージに染みた汗の匂いと、みんなで笑い合った時間が愛おしい。",
    "部活に縛られすぎず、自分の時間を大切にした。図書室で読書したり寄り道したりする放課後が心地よかった。"
  ]
});

window.defineEvent({
  "id": "child_exam",
  "title": "夜更けの机と冷えた足先の温もり",
  "age": [
    14,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 14,
  "text": "静まり返った真夜中の勉強机。参考書を照らすスタンドの光の下、迫る将来への重圧に押しつぶされそうになる。冷え切った素足を重ね合わせながら、温かい誰かの腕に抱きしめられたい切なさが募る。",
  "choices": [
    {
      "id": "choice_0",
      "label": "計画的に勉強する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "不安を振り払うようにペンを走らせ、計画的に勉強する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 7
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
      "label": "心を落ち着ける",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "家族や信頼できる友人に不安を打ち明け、心を落ち着ける。",
          "effects": [
            {
              "path": "skill.knowledge",
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
              "value": -2
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "真夜中の静寂の中で机に向かい続けた。冷えた爪先を擦り合わせながら、いつかこの努力が実を結ぶ日を夢見た。",
    "不安で涙がこぼれそうになり、温かいお茶を入れてもらって話を聞いてもらった。誰かが支えてくれている安心感に救われた。"
  ]
});
