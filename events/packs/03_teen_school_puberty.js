// ============================================================================
// Pack: 03_teen_school_puberty — 中高生の学園生活・部活・受験・思春期の芽生え・背伸び (43 events)
// ============================================================================
window.defineEvent({
  "id": "mild_sexuality_first_bra_shopping",
  "title": "初めてのファーストブラ選び・母親と訪れた下着売り場のカーテン",
  "age": [
    10,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 35,
  "once": true,
  "text": "10歳を過ぎた頃、体操服の上からでも胸の先端が擦れてチクチクと痛み始める。母親に打ち明けると、週末にデパートの下着売り場へ連れて行かれた。ずらりと並ぶ淡いパステルカラーのファーストブラ。子供服とは違う、自分の身体が変化していくことへの戸惑いと密やかな恥じらい。",
  "choices": [
    {
      "id": "choice_0",
      "label": "試着室でそっと身につけ、ふんわりと守られる安心感に胸をなでおろす",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 2,
            "selfKnowledge": 3,
            "happiness": 3,
            "sexualEffects": {
              "libido": 1,
              "intimacy": 2
            }
          },
          "narrative": "体育の授業で走ると胸が擦れて痛むようになり、お母さんに連れられてデパートのジュニア肌着売り場へ。淡いピンク色の試着室のカーテンを閉め、シャツを脱いで初めて胸元を包み込む柔らかなコットンブラをつけた。鏡に映る、少し膨らみ始めた自分の胸。走っても痛くならない優しいホールド感と、女の子から大人の階段を一段登ったような誇らしさに、胸の前で小さく手を重ねた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "「まだ恥ずかしいよ」と俯きながらも、母が選んでくれた可愛いキャミソールを受け取る",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 3,
            "selfKnowledge": 2,
            "happiness": 2,
            "sexualEffects": {
              "libido": 1
            }
          },
          "narrative": "店員さんにメジャーで胸囲を測られる時、くすぐったさと羞恥で耳まで真っ赤になってしまった。母が「最初はパッド入りのキャミソールにしようね」と優しく微笑んでくれ、リボンのついた白い肌着を胸に抱きしめながら、身体の変化を静かに受け止めた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "今日、初めてのジュニアブラを買ってもらった。試着室の鏡で見た自分の胸、少しだけお姉さんになったみたいでドキドキした。これで体育の時間も痛くない。",
    "下着売り場で胸のサイズを測ってもらった。すっごく恥ずかしかったけれど、お母さんが『順調に大きくなってるね』って笑ってくれてホッとした。"
  ]
});

window.defineEvent({
  "id": "mild_sexuality_physical_exam_blush",
  "title": "春の身体測定・カーテンの奥の聴診器とひんやりした金属",
  "age": [
    10,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 35,
  "once": true,
  "text": "新学期の恒例行事である身体測定と内科検診。体操服姿で並ぶ廊下。カーテンで仕切られた検診ブースから漏れ聞こえる先生の声。薄い布一枚を隔てて自分の素肌を診察される緊張感に、かすかな恥じらいが胸をよぎる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "体操服の胸元をめくられ、冷たい聴診器が素肌に触れる瞬間に息を呑む",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 3,
            "selfKnowledge": 2,
            "sexualEffects": {
              "libido": 1
            }
          },
          "narrative": "仕切りカーテンの奥、白衣を着た校医の先生の前に立つ。上着を少し持ち上げられ、冷たい金属の聴診器が胸のすぐ下にペタリと当てられた瞬間、ひやりとした刺激に小さく肩が跳ねた。「はい、息を吸って……吐いて」。先生の指示に従いながら、自分の激しい鼓動が金属を通して聞こえているのではないかと、恥ずかしさで首筋まで真っ赤に染まった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "身長計のバーが頭に当たる音に耳を澄ませ、伸びた背丈に小さく微笑む",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 3,
            "happiness": 3
          },
          "narrative": "背筋をぴんと伸ばして身長測定。昨年より3センチも伸びていて嬉しくなった。健康手帳に押されたスタンプを見つめ、自分が健やかに育っていることを実感した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "内科検診。聴診器がひんやり当たった時、心臓がバクバク音を立てて先生に聞こえそうで恥ずかしかった。無事に異常なしでよかった。",
    "春の身体測定。身長が伸びていて嬉しい！ 友達と『何センチ伸びた？』って見せ合いっこした。"
  ]
});

window.defineEvent({
  "id": "mild_sexuality_pool_changing_room",
  "title": "初夏のプール開きと更衣室・友達の身体と自分の身体のちがい",
  "age": [
    10,
    12
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 35,
  "once": true,
  "text": "梅雨明けのプール開き。湿気と塩素の匂いが充満する女子更衣室。紺色のスクール水着に着替える際、同級生たちの身体つきに少しずつ個人差が現れ始めていることに気づく。子供のままでいたい気持ちと、大人の身体へと移り変わる眩しさが交錯する空間。",
  "choices": [
    {
      "id": "choice_0",
      "label": "友達の丸みを帯びた体つきに思わず見とれ、自分の身体と見比べて微熱を覚える",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "curiosity": 3,
            "shyness": 2,
            "selfKnowledge": 2,
            "sexualEffects": {
              "libido": 2
            }
          },
          "narrative": "塩素の匂いが立ち込める蒸し暑い女子更衣室。濡れた紺色のスクール水着を脱ぎ捨てるクラスメイトたち。ふと隣を見ると、背の高い友達の胸が綺麗に膨らみ、くびれが大人びているのが目に入った。ジロジロ見てはいけないと思いつつ、白い肌の眩しさと自分との違いに胸がトクンと跳ね、下腹部にかすかな熱が走るのを自覚して慌ててタオルで前を隠した。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "手早くバスタオルを巻いて着替えを済ませ、友達と冷たいシャワーの寒さを笑い合う",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 2,
            "happiness": 3,
            "communication": 2
          },
          "narrative": "水着から体操服へ素早く着替え、友達と「今日の地獄のシャワー、冷たすぎたよね！」と笑い合った。夏の太陽の下で泳いだ爽快感に浸りながら、教室へと戻った。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "水泳の後の更衣室。〇〇ちゃんの身体がすごく大人っぽくなっていて、思わず見ちゃった。同じ年なのに、女の子の身体って人によって全然違うんだなってドキドキした。",
    "プール上がりの着替え。タオルに包まりながら友達とふざけ合った。夏の水泳の授業はやっぱり楽しい。"
  ]
});

window.defineEvent({
  "id": "exam_atmosphere_precursor",
  "title": "受験シーズンの足音",
  "age": [
    11,
    19
  ],
  "trigger": "precursor",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 0,
  "once": true,
  "precursor_for": [
    "child_exam",
    "teen_highschool_exam_winter",
    "career_path_after_highschool"
  ],
  "is_narrative": true,
  "narrative_type": "precursor",
  "text": "教室の黒板の隅に『共通テストまであと〇日』の文字が書かれ、休み時間も参考書を開く生徒が増えてきた。ピンと張り詰めた空気の中、自分の未来について深く考えさせられる。",
  "effects": [
    {
      "path": "skill.knowledge",
      "op": "add",
      "value": 2
    },
    {
      "path": "state.stress",
      "op": "add",
      "value": 2
    }
  ],
  "diary": "周りの空気が一変して、いよいよ本番が近づいてきた実感。不安もあるけれど、逃げずにやり抜きたい。"
});

window.defineEvent({
  "id": "mild_sexuality_first_period_panic",
  "title": "初めての生理の日の放課後・友達がそっと貸してくれたカーディガン",
  "age": [
    12,
    14
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 35,
  "once": true,
  "text": "ある日の学校生活の中で突然訪れた初潮（初めての月経）。下腹部の重い痛みと、下着を汚してしまったことへの恐怖と混乱。大人の女性へと身体が成熟していく決定的な節目。",
  "choices": [
    {
      "id": "choice_0",
      "label": "友達の優しい気遣いに救われ、保健室で正しいナプキンの使い方を教わる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 4,
            "morality": 2,
            "communication": 3,
            "selfKnowledge": 3,
            "sexualEffects": {
              "libido": 1
            },
            "bond": {
              "role": "friend",
              "status": "close",
              "gender": "female",
              "metContext": "初めての生理で助けてくれた友達"
            }
          },
          "narrative": "放課後、椅子から立ち上がった瞬間に感じた下腹部のぬるりとした重み。スカートの裏側に小さな赤い染みを見つけて血の気が引いた。パニックになりかけた私に、仲良しの友達が何も言わずに自分のカーディガンを腰に巻いてくれた。「保健室、一緒に行こ」。保健室の先生からナプキンをもらい、優しく説明を受けながら、大人の女性の身体になった重みと、女友達の温かい絆に涙がこぼれた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "家に帰って母に打ち明け、お祝いのお赤飯を照れながら食べる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "morality": 3,
            "health": 2
          },
          "narrative": "無事に帰宅し、母に報告した。母は目を細めて抱きしめてくれ、その夜は小さなケーキとお赤飯でお祝いしてくれた。少し恥ずかしかったけれど、温かく祝福されて心が満たされた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "今日、初めて生理がきた。すごく焦ったけれど、友達がカーディガンを貸してくれて本当に助かった。私も大人の身体になったんだなと実感した。",
    "お母さんに生理がきたことを伝えたら、すごく喜んでくれた。体調に気をつけながら、自分の身体を大切にしていきたい。"
  ]
});

window.defineEvent({
  "id": "puberty_awakening",
  "title": "puberty_awakening",
  "title_template": "思春期の秘密 〜{variation_title}〜",
  "age": [
    12,
    17
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "virgin"
  ],
  "weight": 75,
  "choices": [
    {
      "id": "choice_explore",
      "stance": "explore",
      "label": "熱い好奇心と疼きに身を任せて奥深くまで探求する",
      "effects": {
        "desire": 5,
        "independence": 3,
        "stress": -2
      }
    },
    {
      "id": "choice_timid",
      "stance": "timid",
      "label": "羞恥心に震えながらも、そっと触れて感覚を確かめる",
      "effects": {
        "desire": 3,
        "shyness": 4,
        "stress": -1
      }
    },
    {
      "id": "choice_distract",
      "stance": "distract",
      "label": "意識しないように必死に別のことを考えて気を紛らわせる",
      "effects": {
        "stress": 2,
        "knowledge": 2
      }
    },
    {
      "id": "choice_guilt",
      "stance": "guilt",
      "label": "恥ずかしさと罪悪感に耐えかねて途中でやめる",
      "effects": {
        "shyness": 5,
        "stress": 1
      }
    }
  ],
  "variations": [
    {
      "sub_id": "midnight_bedroom",
      "title": "静まり返った真夜中の自室、布団の中の温もり",
      "description": "家族が寝静まった真夜中。薄いパジャマの下、下腹の奥がきゅうと疼く感覚に耐えかねて、布団の中でそっと自分の太ももを割り、下着の上から指先を滑らせた……。",
      "outcomes": {
        "explore": {
          "text": "下着に指を滑り込ませると、指先が濡れた粘膜に触れて息を飲んだ。小さな突起を指の腹で弾くたび、背筋に痺れるような熱い快感が走り、布団を噛んで小さな声を殺しながら身体を震わせた。",
          "diary": "真夜中、布団の中で自分の身体に触れてしまった。初めて知る痺れるような感覚に、胸の動悸が朝まで治まらなかった。",
          "sexualEffects": {
            "desire": 6,
            "secrecy": 5
          }
        },
        "timid": {
          "text": "恥ずかしさに耳まで赤くしながら、下着の布越しにじんわりと熱を帯びた秘所をそっと撫でた。未知の感覚に下腹がきゅんと縮こまり、小さな吐息が布団の中にこもった。",
          "diary": "布団の中でそっと自分の身体を確かめてみた。恥ずかしいけれど、身体が少しずつ大人になっているのを感じた。",
          "sexualEffects": {
            "desire": 3,
            "shyness": 4
          }
        },
        "distract": {
          "text": "身体の疼きから逃げるようにぎゅっと目を閉じ、明日の学校の予定やテストの英単語を頭の中で必死に唱えた。熱が引くのをじっと待ちながら、深い溜め息をついた。",
          "diary": "夜、身体が妙に火照って眠れなかった。必死に別のことを考えて気を紛らわせた。",
          "sexualEffects": {
            "stress": 1
          }
        },
        "guilt": {
          "text": "指先に触れたぬるりとした湿り気に驚き、いけないことをしているような強い罪悪感に襲われて咄嗟に手を引っ込めた。布団を頭まで被り、胸の鼓動に怯えた。",
          "diary": "自分の身体に触れそうになって、怖くなってやめた。なんだか恥ずかしくて罪悪感でいっぱいになった。",
          "sexualEffects": {
            "shyness": 4,
            "stress": 1
          }
        }
      }
    },
    {
      "sub_id": "shower_room_drops",
      "title": "シャワーの飛沫、濡れそぼる鏡と下腹の熱",
      "description": "立ち込める湯気の中、シャワーの熱い湯が素肌を伝い落ちる。曇った鏡に映る自分の身体、ふくらみ始めた胸と、水滴を弾く太ももの付け根に視線が釘付けになる……。",
      "outcomes": {
        "explore": {
          "text": "水流を秘所の奥へと当てると、強い刺激に膝がガクガクと震えた。壁に手をついて湯を浴び続け、腰をくねらせながら未知の甘い痺れに全身を震わせて達した。",
          "diary": "シャワーを浴びながら、水流の刺激で頭が真っ白になるほどの快感を覚えてしまった。足元がおぼつかなくなるほどだった。",
          "sexualEffects": {
            "desire": 7,
            "secrecy": 4
          }
        },
        "timid": {
          "text": "泡立てた石鹸の滑らかな泡を手のひらに取り、恥じらいながら胸の突起や秘唇をそっと洗った。指が触れるたびに下腹がきゅんと疼き、鏡の中の自分から目を逸らした。",
          "diary": "お風呂で自分の身体を丁寧に洗っていると、少し触れただけで身体が熱くなって戸惑った。",
          "sexualEffects": {
            "desire": 3,
            "shyness": 3
          }
        },
        "distract": {
          "text": "シャワーの温度を少し下げ、冷たい水で火照った顔と身体を一気に冷ました。頭から湯を浴び直して泡を流し、急いで浴室から出た。",
          "diary": "お風呂で身体が妙に熱くなったので、冷水で冷まして落ち着かせた。",
          "sexualEffects": {
            "stress": 1
          }
        },
        "guilt": {
          "text": "濡れた肌に触れた自分の手の感触に急激な羞恥心が込み上げ、慌ててシャワーを止めた。バスタオルで身体をきつく包み込み、逃げるように脱衣所へ出た。",
          "diary": "鏡に映る自分の無防備な身体がなんだか直視できなくて、早々にお風呂から上がった。",
          "sexualEffects": {
            "shyness": 4
          }
        }
      }
    }
  ]
});

window.defineEvent({
  "id": "mild_sexuality_accidental_brush",
  "title": "満員電車や狭い通路・男子とのふとした身体の接触と走る電流",
  "age": [
    13,
    15
  ],
  "trigger": "normal",
  "classification": "random",
  "content_rating": "general",
  "presets": [],
  "weight": 35,
  "once": true,
  "text": "朝夕の混雑する通学電車、あるいは学校の狭い渡り廊下。不意の揺れや行き違いで、男子生徒と身体が接触してしまう瞬間。制服越しに伝わってくる男の子特有の体温と骨っぽさに、思春期ならではの予期せぬ衝動が走る。",
  "choices": [
    {
      "id": "choice_0",
      "label": "触れ合う腕の硬さと体温に意識が集中し、心臓の早鐘を抑えきれなくなる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 4,
            "desire": 2,
            "selfKnowledge": 2,
            "sexualEffects": {
              "libido": 3,
              "passion": 2
            },
            "bond": {
              "role": "classmate",
              "status": "acquaintance",
              "gender": "male",
              "romanticInterest": 68,
              "metContext": "理科室で隣り合った男子"
            }
          },
          "narrative": "雨の日の通学電車。急ブレーキで揺れた瞬間、吊り革を掴む隣の男子の二の腕が、私の肩と薄い制服の胸元にぐっと密着した。女子とは全く違う、硬い筋肉の感触と男の子特有の石鹸混じりの汗の匂い。びりりと背筋に電流が走ったように全身が硬直した。相手が「あ、ごめん」と小声で謝ったけれど、触れ合っていた場所が火照ったように熱く、下腹部の奥がきゅんと痺れて次の駅まで息を止めるように俯いた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "さりげなく身体を引いて隙間を作り、平然とした顔を取り繕う",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "boundaryVoice": 3,
            "selfKnowledge": 2
          },
          "narrative": "不自然にならないよう一歩後ろへ下がり、スクールバッグを抱え直した。何でもない風を装いながらも、ふとした瞬間に異性を意識してしまう自分の変化に気づき、少し大人の階段を登った気がした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "電車で隣の男の子の腕がずっと当たっていて、心臓が破裂しそうだった。女子とは全然違う硬くて温かい体温に、なんだか身体の奥が落ち着かなくなって困った。",
    "満員電車でふとした接触。ただの偶然なのに、思春期のせいか異性をすごく意識してしまって、顔が熱くなった。"
  ]
});

window.defineEvent({
  "id": "mild_sexuality_solitary_bed_curiosity",
  "title": "休日の昼下がりのベッド・布団の擦れと無自覚な甘い痺れ",
  "age": [
    13,
    15
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 35,
  "once": true,
  "text": "誰もいない休日の昼下がりの自分の部屋。静まり返った室内で、ベッドに横たわっている時にふと感じる身体の微熱。寝返りや毛布の摩擦をきっかけに、女性特有の性感帯の存在を無自覚のうちに発見する思春期の秘め事。",
  "choices": [
    {
      "id": "choice_0",
      "label": "うつ伏せでクッションを挟み込み、身体の奥に走る甘い刺激に身を委ねる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "desire": 3,
            "shyness": 3,
            "selfKnowledge": 3,
            "sexualEffects": {
              "libido": 4,
              "passion": 2
            }
          },
          "narrative": "一人きりの部屋、静かな休日の午後。ベッドの上でうつ伏せになって漫画を読んでいた時、足の間に挟み込んだ毛布の結び目が、偶然ショーツ越しの秘裂の一番敏感な突起に擦れ当たった。ぞくっとする甘い刺激が背筋を駆け抜け、思わず息を呑む。何かいけないことをしているような罪悪感を覚えながらも、腰をわずかに動かしてその擦れを繰り返してしまう。下腹部の奥がじんわりと温まり、湿り気を帯びていく感触。身体が知ってしまった新しい秘密の快感に、枕に顔を埋めて小さく吐息を漏らした。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ハッとして身体を起こし、冷たい麦茶を飲んで火照りを冷ます",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "selfKnowledge": 2,
            "morality": 1,
            "health": 1
          },
          "narrative": "身体に走った説明のつかない快感に驚き、慌ててベッドから起き上がった。窓を開けて冷たい風を浴びながら、自分の身体に宿りつつある未知の衝動の正体を静かに思い巡らせた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "ベッドの中で、毛布が身体に擦れた時にすごく甘い痺れが走った。なんだか恥ずかしくて誰にも言えない秘密だけど、自分の身体って不思議だなと思う。",
    "一人きりの部屋での微熱。思春期になって、身体が少しずつ大人の感覚に目覚め始めているのかもしれない。"
  ]
});

window.defineEvent({
  "id": "stretched_lip_gloss_secret",
  "title": "放課後のドラッグストア・こっそり買った色つきリップグロス",
  "age": [
    13,
    15
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 45,
  "once": true,
  "text": "雑誌で見た人気モデルのメイク特集。どうしても試してみたくなり、放課後に友達とドラッグストアのコスメコーナーへ。きらきらと輝く小さなリップグロスを手に取ると、大人の女性への扉をほんの少し開けたような高揚感に包まれる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "学校のトイレの鏡で薄く塗り、艶めく唇の感触に胸をときめかせる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "confidence": 2,
            "happiness": 2,
            "sexualEffects": {
              "libido": 1
            }
          },
          "narrative": "お小遣いを握りしめてドラッグストアで買った、透き通るベリー色のリップグロス。放課後、誰もいない女子トイレの鏡の前でそっとチップを唇に乗せた。とろりとしたテクスチャーと甘いストロベリーの香り。指先で輪郭をなぞると、いつもよりぷっくりと艶めいた自分の唇がそこにあり、まるでテレビの中のモデルになったかのように頬が上気した。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "先生に見つからないかヒヤヒヤしながら、ポーチの奥に大切に忍ばせる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "selfKnowledge": 2,
            "stress": -1,
            "aesthetics": 1
          },
          "narrative": "校則違反の小さな背伸び。スクールバッグのポケットの底に隠した小さなチューブに指先で触れるだけで、自分だけの特別な秘密を持ったような甘い緊張感が胸を満たした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "今日、初めて色つきのリップグロスを買った。唇がぷるぷるになって、鏡を見るのがちょっと楽しかった。学校ではつけられないけど、自分だけの宝物。",
    "コスメ売り場で友達とキャーキャー言いながらリップを選んだ時間、なんだかすごくお姉さんになった気分だった。"
  ]
});

window.defineEvent({
  "id": "stretched_perfume_sample",
  "title": "母の留守中のドレッサー・手首にそっと移した香水の芳香",
  "age": [
    13,
    15
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 45,
  "once": true,
  "text": "誰もいない休日の午後。母親の化粧台に並ぶ重厚な香水瓶たち。琥珀色や淡い紫の美しいボトルに手を伸ばし、キャップを外してみると、官能的で甘い大人の香りが鼻腔をくすぐった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "耳の裏と手首に一滴つけ、立ち上る大人の香りに背筋をピンと伸ばす",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "confidence": 3,
            "sexualEffects": {
              "libido": 1
            }
          },
          "narrative": "琥珀色のガラス瓶から、ガラスの棒でほんの一滴すくい取り、手首と耳の裏へ。ふわりと立ち上ったのは、甘く重厚なジャスミンとバニラの香り。子供用のシャンプーの匂いとは別次元の、成熟した女の匂い。部屋を出て廊下を歩くだけで、自分がどこか魅惑的な女性に変身したような錯覚に酔いしれた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "香りが強すぎてバレるのが怖くなり、慌てて石鹸でゴシゴシ洗い流す",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "stress": 1,
            "selfKnowledge": 2
          },
          "narrative": "思っていた以上に濃密な香りが部屋中に漂い、お母さんに怒られるとパニックになって洗面所へ走った。石鹸で何度も擦った手首には、かすかに甘い残り香が残り、悪戯が残した余韻に胸がチクチクした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "お母さんの香水をこっそり手首につけてみた。すごくいい匂いで、歩くたびに自分が大人になったみたいだった。",
    "香水をちょっとつけすぎて焦った。でも、あの華やかな香りはいつか自分も似合うようになりたいな。"
  ]
});

window.defineEvent({
  "id": "stretched_sneak_teen_magazine",
  "title": "夜更けの部屋・こっそり開いたティーン誌の袋とじとキスの作法",
  "age": [
    13,
    15
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 45,
  "once": true,
  "text": "家族が寝静まった深夜。古本屋や姉の部屋から手に入れたティーン向けファッション誌の巻末。普段は読み飛ばすはずの恋愛・セックス相談コーナーに、どうしても視線が吸い寄せられてしまう。",
  "choices": [
    {
      "id": "choice_0",
      "label": "布団をかぶって懐中電灯でじっくり読み耽り、下腹の微熱に戸惑う",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 3,
            "selfKnowledge": 3,
            "sexualEffects": {
              "libido": 2
            }
          },
          "narrative": "部屋の明かりを消し、布団を頭からかぶってスマートフォンの光で雑誌の『初めてのキスと恋人たちの夜』特集を貪るように読む。『唇を重ねる角度』『舌の触れ合い』――生々しい活字とイラストを目で追うたび、心臓の鼓動が耳元で激しく鳴り響き、太ももの内側がじんと微熱を帯びていく。未知の世界への強烈な好奇心と罪悪感に、息を詰まらせた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "恥ずかしさに耐えきれず途中で閉じ、枕に顔を埋めて足をバタつかせる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 3,
            "happiness": 2,
            "sexualEffects": {
              "libido": 1
            }
          },
          "narrative": "あまりに刺激的な内容に胸が破裂しそうになり、思わずバタンとページを閉じた。火照った顔をひんやりした枕に押し当てながら、いつか自分にもそんな夜が訪れるのだろうかと想像して身悶えした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "雑誌の恋愛特集を読んだ。大人のキスってあんな風にするんだ……頭がクラクラして、しばらく眠れなかった。",
    "ちょっと過激な恋愛の相談コーナーをこっそり読んだ。自分にはまだ早いって思うのに、気になって仕方がなかった。"
  ]
});

window.defineEvent({
  "id": "teen_club_activity_tournament",
  "title": "汗と涙の夏・部活動の最後の地区総体",
  "age": [
    13,
    15
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 25,
  "once": true,
  "text": "中学最後の夏。部活動の集大成となる地区総合体育大会。日焼けした肌に染み込む汗の熱気、鳴り響くホイッスル。仲間たちと共に過ごした日々のすべてをぶつける熱い一日が始まる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "仲間と声を掛け合い、最後まで全力でコートを走り抜く",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 3,
            "happiness": 4,
            "communication": 2,
            "stress": -2,
            "bond": {
              "role": "club_mate",
              "status": "close",
              "metContext": "最後の地区総体を共に戦った部活仲間"
            }
          },
          "narrative": "体育館の床に滴る汗と、メガホンの大歓声。苦しい練習を共にしてきた仲間と円陣を組み、最後の一秒まで全力でボールを追いかけた。試合が終わった瞬間、勝敗を超えて全員で抱き合い、熱い涙が頬を濡らした。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ベンチから喉が枯れるまで声援を送り、チームを支える",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 3,
            "morality": 2,
            "happiness": 3,
            "bond": {
              "role": "club_mate",
              "status": "close",
              "metContext": "部活の大会で支え合った仲間"
            }
          },
          "narrative": "選手たちにタオルと冷たいドリンクを手渡し、声をからして応援した。自分が支えたチームが粘り強く戦う姿に胸が熱くなり、チームの一員としての誇りを深く実感した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "総体が終わった。悔しさもあったけれど、みんなとここまで全力で駆け抜けられたことが本当に誇らしい。一生忘れられない熱い夏になった。",
    "最後の大会、みんなの応援に全力を尽くした。泣きながら笑い合ったミーティングの後、部室で撮った集合写真は私の宝物だ。"
  ]
});

window.defineEvent({
  "id": "mild_sexuality_wet_uniform_rain",
  "title": "土砂降りの雨と濡れ透ける白いブラウス・隠すように抱えたスクールバッグ",
  "age": [
    13,
    16
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 35,
  "once": true,
  "text": "放課後、突然空が暗転して降り注いだ土砂降りの夕立。傘を持たない下校途中、雨に打たれて濡れそぼった薄手の白い制服ブラウス。水滴を含んで肌に密着する布地が、隠していた女性らしい身体の凹凸を露わにしてしまう羞恥の瞬間。",
  "choices": [
    {
      "id": "choice_0",
      "label": "カバンを胸の前にぎゅっと抱え込み、恥ずかしさに顔を赤らめて急ぎ足で帰る",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 4,
            "selfKnowledge": 2,
            "sexualEffects": {
              "libido": 2
            }
          },
          "narrative": "突然のゲリラ豪雨。傘を持っておらず、駅までの道を走ったけれど全身ずぶ濡れになってしまった。水を含んだ白いセーラー服のブラウスがぺったりと胸元に張り付き、肌着のラインが透けてしまっている。通り過ぎる人たちの視線が胸元に向けられた気がして、カバンを胸の前に抱え込み、耳まで真っ赤になって早足で歩いた。肌に張り付く冷たい布の湿り気と、恥ずかしさでカッカと熱を帯びる身体のアンバランスに心臓が激しく波打った。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "友達と相合い傘に入り、びしょ濡れの姿をお互いに笑い飛ばす",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 3,
            "communication": 3,
            "stress": -2
          },
          "narrative": "「早く入って！」と友達が傘に入れてくれた。二人で肩を寄せ合い、水たまりを避けながら「すごい雨だったね！」と笑い合った。冷えた身体を温め合う友情が心強かった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "夕立で制服がびしょ濡れになってしまった。ブラウスが透けている気がして、カバンを抱えて恥ずかしくて泣きそうになりながら走って帰った。お風呂がすごく気持ちよかった。",
    "突然の雨で大変だったけれど、友達と一つの傘に入って帰ったのが青春っぽくて楽しかった。"
  ]
});

window.defineEvent({
  "id": "teen_first_smartphone_group",
  "title": "初めてのスマホと深夜のグループ通話",
  "age": [
    13,
    16
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "once": true,
  "text": "約束の成績を取って、両親から買い与えられた初めてのスマートフォン。手の中に収まる小さなガラスの板から、世界中の情報と友達との繋がりが一気に広がるのを感じて胸が高鳴る。",
  "choices": [
    {
      "id": "choice_0",
      "label": "お気に入りのケースと壁紙を選び、仲良しグループで通話を夜更かしする",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "communication": 3,
            "curiosity": 2,
            "bond": {
              "role": "classmate",
              "status": "close",
              "metContext": "深夜のグループ通話の仲間"
            }
          },
          "narrative": "手に入れたばかりの自分だけのスマートフォン。可愛いケースをつけ、仲の良い友達とグループを作った。ベッドの中でイヤホンを耳に入れ、深夜まで他愛のないおしゃべりで笑い転げる時間は魔法のようだった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "使いすぎに気をつけながら、情報収集や勉強アプリを使いこなす",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 3,
            "selfKnowledge": 2,
            "morality": 1
          },
          "narrative": "ルールを決めてスマホを上手に活用。流行りの音楽や世界中のニュースに手軽に触れられる便利さに感動し、視野が大きく広がった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "念願のスマホデビュー！ 友達からの通知が鳴るたびに嬉しくて画面を見てしまう。ベッドの中での夜更かし通話、すごく楽しかった。",
    "自分だけのスマホ。新しい世界を手に入れたみたいでワクワクする。大事に使っていこう。"
  ]
});

window.defineEvent({
  "id": "teen_friend_fallout",
  "title": "冷え切った放課後とすれ違う心",
  "age": [
    13,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "school_student"
  ],
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
  "text": "昨日まで笑い合っていた親友との、些細なすれ違いや嫉妬。教室で目が合ってもすぐに逸らされ、胸の奥を鋭い刃物で裂かれるような冷たい痛みに、唇を噛みしめる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "意地を捨てて放課後の教室で本音で話し合う",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "意地を捨てて放課後の教室で本音で話し合う。",
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
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "しばらく静かに距離を置く",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "傷ついた心を落ち着かせるため、しばらく静かに距離を置く。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "reconcile_friend",
    "distance"
  ],
  "diary": [
    "夕暮れの教室で涙を流しながら本音をぶつけ合った。雨降って地固まるように、二人の絆がより深いものになった。",
    "無理に歩み寄らず、一人の時間を過ごした。痛みを経験したことで、他人の心に寄り添う優しさを学んだ気がする。"
  ]
});

window.defineEvent({
  "id": "teen_sports_day_cheerleader",
  "title": "青空の体育祭・手作りのメガホンと応援合戦",
  "age": [
    13,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "once": true,
  "text": "抜けるような青空の下で開かれる体育祭。クラスカラーのハチマキ、グラウンドに響く応援歌。勝ち負けに一喜一憂し、全員で声をからして応援する青春の熱狂。",
  "choices": [
    {
      "id": "choice_0",
      "label": "応援団に入り、放課後練習を重ねたダンスとエールを披露する",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 3,
            "health": 2,
            "happiness": 3,
            "leadership": 1
          },
          "narrative": "お揃いのハチマキを締め、全校生徒の前で息の合った応援パフォーマンスを披露。スタンドから湧き起こる手拍子と歓声に包まれ、チーム全体が一つになった鳥肌の立つような高揚感を味わった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "シールやモールでデコレーションしたメガホンで、クラスの友達を熱烈に応援する",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "communication": 2,
            "aesthetics": 1
          },
          "narrative": "友達とお揃いで作った可愛いデコメガホン。競技に出ているクラスメイトに向かって夢中で名前を叫び、トラックサイドで写真を撮りまくって青春を満喫した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "体育祭、最高に盛り上がった！ 声が枯れるまで応援して、最後のリレーでみんなで抱き合って喜んだ。クラスの団結がぐっと深まった一日。",
    "友達と作ったメガホンを持ってたくさん写真を撮った。日焼けした鼻の頭も、全部ひっくるめていい思い出！"
  ]
});

window.defineEvent({
  "id": "teen_highschool_exam_winter",
  "title": "高校受験の冬・机の上のココアと合格通知",
  "age": [
    14,
    15
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 26,
  "once": true,
  "text": "中学3年生の冬。人生最初の大きな試練となる高校入試。赤いペンで引かれたチェック、模試の判定用紙。雪のちらつく窓の外を眺めながら、未来の自分を信じて机に向かう日々が続く。",
  "choices": [
    {
      "id": "choice_0",
      "label": "深夜まで過去問を解き進め、最後の追い込みをかける",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 5,
            "independence": 3,
            "stress": 2
          },
          "narrative": "寒風が吹き荒れる冬の夜。電気スタンドの明かりの下、付箋で膨らんだ過去問集と向き合う。お母さんが差し入れてくれた温かいココアをすすりながら、絶対に第一志望に受かるんだとペンを握りしめた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "睡眠と体調管理を最優先にし、万全のコンディションで本番に挑む",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 3,
            "knowledge": 3,
            "selfKnowledge": 2,
            "stress": -2
          },
          "narrative": "焦る気持ちを抑えて生活リズムを整え、当日の朝は澄み切った頭で試験会場へ。落ち着いて深呼吸し、持てる力をすべて解答用紙にぶつけた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "合格通知の桜サクラサクの文字を見た瞬間、腰が抜けるほど安心して涙が出た。あの苦しい冬を乗り越えられたことが、これからの自分の自信になると思う。",
    "受験勉強を終えて、肩の荷が下りた。支えてくれた家族や先生、一緒に頑張った友達に心から感謝したい。"
  ]
});

window.defineEvent({
  "id": "teen_cultural_festival_haunted",
  "title": "文化祭のお化け屋敷・段ボールと黒幕の教室",
  "age": [
    14,
    17
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 24,
  "once": true,
  "text": "秋の学校全体が浮き足立つ文化祭。私たちのクラスは教室全体を使った手作りのお化け屋敷を企画。段ボールを集めて迷路を作り、黒幕を張り巡らせ、連日放課後遅くまで残って準備を重ねた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "本格的な小道具と血糊メイクで、来場者を本気で驚かせる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "curiosity": 2,
            "happiness": 4,
            "communication": 2,
            "bond": {
              "role": "classmate",
              "status": "close",
              "metContext": "文化祭を一緒に盛り上げた同級生"
            }
          },
          "narrative": "絵の具とティッシュで作ったリアルな傷メイクに、暗闇から飛び出すタイミングの猛特訓。扉が開いて入ってきた他校の生徒や後輩が「ギャーッ！」と本気で悲鳴を上げた瞬間、物陰で友達とハイタッチして笑い転げた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "受付と行列の整理を担当し、笑顔でクラスの企画を盛り上げる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 3,
            "happiness": 3,
            "leadership": 1,
            "bond": {
              "role": "classmate",
              "status": "acquaintance",
              "metContext": "文化祭のクラスメイト"
            }
          },
          "narrative": "廊下にできた大行列をテキパキと案内し、待ち時間の間もお客さんを楽しませた。教室の外まで響く悲鳴と笑い声。クラス全員で一つのものを作り上げた達成感に包まれた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "文化祭のお化け屋敷は大盛況！ 準備は本当に大変だったけれど、みんなの驚く顔とお客さんの行列を見て疲れも吹き飛んだ。最高のお祭りだった。",
    "放課後に残って段ボールに色を塗ったり、買い出しに行ったりした時間がすごく楽しかった。学生時代の最高の思い出。"
  ]
});

window.defineEvent({
  "id": "teen_school_trip_night",
  "title": "修学旅行の消灯後・布団の中で語り合った未来",
  "age": [
    14,
    17
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 24,
  "once": true,
  "text": "待ちに待った修学旅行。新幹線やバスでの移動、見慣れない歴史ある街並み、お土産選び。そして夜の旅館の大広間、仲間たちと過ごす特別な一夜が更けていく。",
  "choices": [
    {
      "id": "choice_0",
      "label": "見回りの先生の足音に息を殺しながら、将来の夢や好きな人の話で盛り上がる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "communication": 3,
            "intimacyNeed": 2,
            "bond": {
              "role": "friend",
              "status": "close",
              "gender": "female",
              "metContext": "修学旅行の夜に恋バナした友達"
            }
          },
          "narrative": "消灯のベルが鳴った後の旅館の広い和室。並べられた敷布団の上で、廊下の見回り先生の足音が遠ざかるのを確認して一斉に起き上がった。懐中電灯の小さな光を囲み、普段は言えない将来の夢や、誰が好きかという秘密の告白で朝方まで小声で語り明かした。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "翌日の自由行動に備えて早めに休み、旅先の歴史散策を満喫する",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 2,
            "knowledge": 3,
            "happiness": 2
          },
          "narrative": "友達の寝顔を見ながら心地よい眠りにつき、翌朝はすっきり目覚めて古都の寺社や名所を巡った。歴史ある街並みを仲間と歩いた風景が心に深く刻まれた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "修学旅行の夜、先生に見つかりそうになって布団を被って息を潜めたのが最高にスリリングで面白かった。友達の意外な本音が聞けて、もっと仲良くなれた気がする。",
    "友達と過ごした修学旅行、どこを切り取っても楽しかった。ずっとこの時間が続けばいいのにって思うくらい幸せだった。"
  ]
});

window.defineEvent({
  "id": "teen_fashion_makeup_debut",
  "title": "初めてのプチプラコスメ・鏡の前での研究会",
  "age": [
    14,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "once": true,
  "text": "雑誌やSNSで目にする可愛いメイクやファッションへの憧れ。自分のお小遣いで買えるプチプラのコスメを手に取り、鏡の前で少しずつ自分の魅力を引き出す研究を始める。",
  "choices": [
    {
      "id": "choice_0",
      "label": "友達とドラッグストアでリップとアイシャドウを選び、放課後に塗り合う",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "happiness": 3,
            "communication": 2
          },
          "narrative": "お小遣いを握りしめてドラッグストアのコスメコーナーへ。雑誌を広げながら、友達の部屋の鏡の前でビューラーの使い方やアイラインの引き方を練習した。「これ似合うよ！」と褒め合って、少し大人びた自分の顔に照れ笑いがこぼれた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "スキンケアを徹底し、すっぴんの素肌を磨き上げる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 3,
            "aesthetics": 2,
            "selfKnowledge": 2
          },
          "narrative": "洗顔方法や化粧水の使い方を丁寧に研究。肌荒れを防ぎ、透明感のある健康的な素肌を目指して日々のケアを習慣づけた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "初めてリップをつけてみた！ ほんのりピンク色に染まった自分の唇を見て、なんだか少し大人になれた気がして嬉しかった。",
    "友達と放課後にコスメ研究会。お互いにメイクし合って、笑いながらたくさん写真を撮った。女の子って楽しい！"
  ]
});

window.defineEvent({
  "id": "teen_karaoke_afterschool",
  "title": "放課後ポテトとカラオケ・大声で歌うヒット曲",
  "age": [
    14,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 20,
  "once": true,
  "text": "学校帰りの夕暮れ時。テスト明けや休みの前日、仲良しグループで寄り道するカラオケ店。薄暗い個室の中で響く大音量の音楽と、分け合うポテトの塩気。",
  "choices": [
    {
      "id": "choice_0",
      "label": "タンバリンを叩いて最新のアニメソングやJ-POPを熱唱し、ストレスを発散する",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "stress": -4,
            "communication": 2,
            "bond": {
              "role": "friend",
              "status": "close",
              "metContext": "放課後カラオケで盛り上がった友達"
            }
          },
          "narrative": "テスト終わりの放課後、友達と駆け込んだ駅前のカラオケボックス。山盛りのフライドポテトをつまみながら、マイクを握って大熱唱。タンバリンを激しく打ち鳴らして大笑いし、日頃のストレスが綺麗さっぱり吹き飛んだ。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "静かなバラードを心を込めて歌い上げ、友達から拍手を浴びる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 3,
            "aesthetics": 2,
            "selfKnowledge": 2,
            "bond": {
              "role": "friend",
              "status": "acquaintance",
              "metContext": "放課後カラオケの友達"
            }
          },
          "narrative": "照明を少し落として、大好きなバラードをしっとり歌った。曲が終わった瞬間の友達の「鳥肌立った！」という歓声が嬉しくて、温かい気持ちになった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "放課後カラオケ！ 喉が痛くなるまで歌って笑った。テスト勉強の疲れが一気に吹き飛んで、明日からまた頑張れそう。",
    "みんなで大合唱したヒット曲。何気ない日常のこういう時間が、大人になってもずっと懐かしくなるんだろうな。"
  ]
});

window.defineEvent({
  "id": "mild_sexuality_whisper_earlobe",
  "title": "放課後の図書室・耳元に触れた相手の吐息と首筋の鳥肌",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 35,
  "once": true,
  "text": "夕日が差し込む放課後の静かな図書室。高い本棚の通路で、不意に至近距離まで近づいた相手。耳元にかかる微熱を帯びた吐息と、首筋を粟立たせる甘い戦慄。",
  "choices": [
    {
      "id": "choice_0",
      "label": "ぞくっと走った首筋の痺れを隠せず、赤面して本棚の陰に身を寄せる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 4,
            "desire": 3,
            "intimacyNeed": 2,
            "sexualEffects": {
              "libido": 3,
              "passion": 3
            },
            "bond": {
              "role": "senior",
              "status": "close",
              "gender": "male",
              "romanticInterest": 72,
              "metContext": "図書室で声をかけてきた先輩"
            }
          },
          "narrative": "夕暮れの図書室の奥、高い本棚に囲まれた静寂の中。背伸びして高い棚の本を取ろうとした時、背後からスッと伸びてきた腕が本を取ってくれた。その瞬間、耳元すれすれの距離で「これ探してたの？」と囁かれた熱い吐息。湿り気を帯びた息が耳たぶから首筋を撫でた途端、ぞくぞくっと鳥肌が立ち、足の力が抜けそうになった。振り向くと至近距離にある相手の瞳。心臓が跳ね上がり、声も出ないまま本を受け取って俯いた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "照れを隠して「ありがとう」とお礼を言い、本を受け取って歩き出す",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 3,
            "happiness": 2,
            "selfKnowledge": 2
          },
          "narrative": "急な近さにドギマギしながらも、笑顔でお礼を伝えた。相手も少し照れくさそうに笑っていて、放課後の夕暮れの光の中で小さな青春のときめきが胸を満たした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "図書室で耳元に囁かれた時、首筋がぞくっとして身体が硬直してしまった。吐息が当たるだけでこんなに感じてしまうなんて、自分でもびっくりした。",
    "本棚の間での思いがけない急接近。夕暮れの図書室って、どうしてあんなにドキドキするんだろう。"
  ]
});

window.defineEvent({
  "id": "teen_first_love",
  "title": "隣り合う肩と制服から香る汗の匂い",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "school_student"
  ],
  "weight": 9,
  "once": true,
  "text": "放課後の教室や夕暮れの帰り道、ふと隣に立った気になる人の横顔。風に乗って届く男の子特有の石鹸と微かな汗の匂い、偶然肩が触れ合った瞬間の熱さに、心臓が痛いほど早鐘を打ち、太ももの付け根がきゅんと疼く……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "日記に赤裸々な恋心を綴る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "熱い想いを胸に秘め、日記に赤裸々な恋心を綴る。",
          "effects": [
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "classmate",
                "status": "acquaintance",
                "romanticInterest": 78,
                "affection": 48,
                "metContext": "密かに初恋を寄せた同級生"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "顔を真っ赤にして恋の悩みを打ち明ける",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "親しい友達にだけ、顔を真っ赤にして恋の悩みを打ち明ける。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "classmate",
                "status": "close",
                "romanticInterest": 78,
                "affection": 55,
                "metContext": "初恋の相手"
              }
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "肩が触れ合った瞬間、身体中に電気が走った。あの人の匂いと横顔が頭から離れず、夜になっても下腹が甘く疼いて眠れなかった。",
    "友達に好きな人の名前を打ち明けたときの気恥ずかしさと高揚感。恋する乙女になった自分を、くすぐったく思った。"
  ]
});

window.defineEvent({
  "id": "travel_school_trip",
  "title": "修学旅行・旅館の夜",
  "age": [
    15,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": {
    "base": 35,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "once": true,
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
    }
  },
  "text": "学生時代の大きな思い出となる修学旅行。昼間の観光地巡りを終え、旅館の大広間で友達と浴衣姿で夕食を囲む。消灯時間を過ぎた後も、敷き詰められた布団の中で恋バナや将来の夢をひそひそと囁き合い、興奮で胸が高鳴る……。",
  "choices": [
    {
      "id": "choice_0",
      "label": "夜遅くまで秘密の恋バナで盛り上がる",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "友達と布団を並べ、夜遅くまで秘密の恋バナで盛り上がる。",
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
    },
    {
      "id": "choice_1",
      "label": "胸の火照りに耐えかねてこっそり部屋を抜け出してみる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "消灯後、胸の火照りに耐えかねてこっそり部屋を抜け出してみる。",
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
                "eventId": "rare_outing_secret_quickie",
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
      "label": "心地よい疲れの中で早めに眠りにつく",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "明日の観光に備えて、心地よい疲れの中で早めに眠りにつく。",
          "effects": [
            {
              "path": "trait.constitution.current",
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
    "shared_activity",
    "reflection",
    "reflection"
  ],
  "diary": [
    "薄暗い部屋で友達と掛け布団を被り、好きな人の話やキスの噂話で盛り上がった。みんなの熱っぽい息遣いに、胸が甘く締めつけられた。",
    "寝静まった旅館の薄暗い廊下へ足を踏み出した。浴衣の裾が擦れる微かな音と、誰かに見つかるかもしれない背徳感に、下腹が小さく震えた。",
    "旅館の柔らかい布団に潜り込み、友達の寝息を聞きながら眠りに落ちた。修学旅行の楽しい思い出が心に刻まれた。"
  ]
});

window.defineEvent({
  "id": "underage_drinking",
  "title": "未成年飲酒への誘い",
  "age": [
    15,
    19
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "underage_drinking_allowed"
  ],
  "weight": 10,
  "once": true,
  "alcohol": true,
  "allowUnderage": true,
  "text": "集まりで飲酒を勧められた。未成年の飲酒には健康上のリスクがあり、日本では法律で禁止されている。",
  "choices": [
    {
      "id": "choice_0",
      "label": "断って別の飲み物にする",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "断って別の飲み物にする。",
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
              "path": "skill.communication_skill",
              "op": "add",
              "value": -1
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
      "label": "場を離れる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "場を離れる。",
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
              "path": "skill.communication_skill",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "誘いに流されて飲んでしまう",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "誘いに流されて飲んでしまう。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": -10
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": -4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": -2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "youth_hangover_regret",
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
  "id": "friends_story",
  "title": "友達の経験談",
  "age": [
    15,
    25
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
  "once": true,
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
    }
  },
  "text": "友達から恋愛や親密な関係の経験を聞き、自分の気持ちにも変化が生まれた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "「へえ、そうなんだ」と適当に相槌を打って聞き流す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "「へえ、そうなんだ」と適当に相槌を打って聞き流す。",
          "effects": [
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
      "id": "choice_1",
      "label": "恥ずかしさに顔を赤らめ、慌てて別の話題に変えようとする",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "恥ずかしさに顔を赤らめ、慌てて別の話題に変えようとする。",
          "effects": [
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 8
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "興味津々で耳を傾け、話を聞いて自分の考えを深める",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "興味津々で耳を傾け、話を聞いて自分の考えを深める。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 15
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "friend",
                "status": "close",
                "gender": "female",
                "metContext": "恋や経験談を話してくれた友達"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_3",
      "label": "「実は私も……」と自分の秘めた関心や悩みを打ち明けてみる",
      "outcomes": [
        {
          "id": "outcome_3",
          "weight": 1,
          "description": "「実は私も……」と自分の秘めた関心や悩みを打ち明けてみる。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 20
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "friend",
                "status": "close",
                "gender": "female",
                "metContext": "秘密の関心を打ち明け合った親友"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_4",
      "label": "相手の経験談をさらに深く詳しく掘り下げて聞き出してみる",
      "outcomes": [
        {
          "id": "outcome_4",
          "weight": 1,
          "description": "相手の経験談をさらに深く詳しく掘り下げて聞き出してみる。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 30
            },
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 10
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "friend",
                "status": "close",
                "gender": "female",
                "metContext": "深い経験談を語り合った友達"
              }
            }
          ]
        }
      ]
    }
  ],
  "sexualEffects": [
    {
      "desire": 10
    },
    {
      "desire": 10
    }
  ]
});

window.defineEvent({
  "id": "mild_sexuality_lace_underwear_secret",
  "title": "背伸びして買った初めてのレースのショーツ・制服の下の秘密",
  "age": [
    16,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 35,
  "once": true,
  "text": "高校生になり、自分のお金で少し背伸びして選んだ大人びたランジェリー。花柄の繊細なレース、透ける生地、綺麗なワイヤー。地味な学生服の下に隠された、自分だけの密やかな女の誇り。",
  "choices": [
    {
      "id": "choice_0",
      "label": "繊細なレースを素肌にまとい、歩くたびに感じる密かな高揚感に背筋を伸ばす",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 4,
            "selfKnowledge": 3,
            "happiness": 3,
            "sexualEffects": {
              "libido": 3,
              "passion": 2
            }
          },
          "narrative": "アルバイトで貯めたお小遣いで、初めて駅ビルのランジェリーショップへ。これまでの綿の下着とは違う、透け感のある繊細なラベンダー色のレースの上下セットを購入した。翌朝、いつもの地味な制服の下にその下着を身につけて登校する。誰も知らない、制服の下だけの大人びた秘密。歩くたびにレースが秘肉の付け根をチクチクとくすぐり、自分が特別な女の子になったような背徳の高揚感に頬がほんのり染まった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "鏡の前で何度も角度を変えて眺め、大人びた自分のシルエットに満足する",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "selfKnowledge": 3,
            "happiness": 2
          },
          "narrative": "部屋の姿見の前で、新しい下着を着けた自分の姿をじっくり眺めた。胸の形が綺麗に整い、少し大人の女性のラインに近づいた自分を誇らしく思い、引き出しの特等席に大切にしまった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "初めてレースの下着を買って着てみた。制服の下に大人の下着をつけていると思うだけで、なんだかドキドキして背筋がシャンと伸びた。自分だけの秘密。",
    "可愛いランジェリーを身につけるだけで、こんなにも気分が上がるなんて知らなかった。もっと自分磨きを頑張ろう。"
  ]
});

window.defineEvent({
  "id": "stretched_high_heels_clack",
  "title": "休日の駅前通り・カツカツとアスファルトを鳴らす7センチヒール",
  "age": [
    16,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 45,
  "once": true,
  "text": "雑誌で見た洗練されたオフィスカジュアルに憧れ、思い切って手に入れた少し高めのヒールパンプス。履くだけで歩幅が狭くなり、腰の揺れが自然と大きくなるような不思議な緊張感がある。",
  "choices": [
    {
      "id": "choice_0",
      "label": "少し痛むつま先に耐えながら、颯爽と歩く自分に自信を抱く",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "confidence": 4,
            "stress": 1
          },
          "narrative": "スニーカーを脱ぎ捨て、お小遣いを貯めて買ったエナメルのヒールパンプスで駅前の舗道を歩く。カツ、カツ、と硬質なリズムが街に響き、背筋とふくらはぎがキュッと引き締まる。目線がいつもより数センチ高く、ショーウィンドウに映る自分の歩き姿は大人の女性そのもの。足先の微かな痛みを我慢しながらも、誇らしさで胸がいっぱいになった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "靴擦れしてしまい、途中のベンチで絆創膏を貼りながら苦笑いする",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": -1,
            "selfKnowledge": 3,
            "happiness": 1
          },
          "narrative": "わずか30分歩いただけで踵が真っ赤に擦れ、公園のベンチで脱ぎ捨ててしまった。ストッキング越しにじんじんと痛む足先に絆創膏を貼りながら、大人になるのには痛みが伴うんだなと小さく呟いた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "初めてヒールのあるパンプスを履いてお出かけした。足が長く見えて嬉しかったけど、帰る頃には足が痛くて大変だった。",
    "ヒールの音ってすごく大人っぽい。歩き方を綺麗に練習して、いつか自然に履きこなせるようになりたい。"
  ]
});

window.defineEvent({
  "id": "stretched_secret_piercing",
  "title": "放課後の友人宅・氷で冷やした耳たぶを貫くピアッサーの銀光",
  "age": [
    16,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 45,
  "once": true,
  "text": "校則では禁止されているピアス。けれどクラスの少し大人びた女子たちは皆、髪の隙間から透明な樹脂ピアスや小さな輝きを覗かせている。放課後、仲の良い友達とドラッグストアでピアッサーを買い込んだ。",
  "choices": [
    {
      "id": "choice_0",
      "label": "「せーの」の合図でカシャリと貫き、耳元の熱さと解放感に震える",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "independence": 4,
            "aesthetics": 3,
            "confidence": 3,
            "stress": -1,
            "bond": {
              "role": "friend",
              "status": "close",
              "gender": "female",
              "metContext": "お揃いのピアスを開けた親友"
            }
          },
          "narrative": "友達の部屋のこたつに入り、保冷剤で感覚がなくなるまで冷やした耳たぶ。位置を決めて印をつけ、互いに手を握り合ってピアッサーを押し込んだ。パチン、という乾いた音と共に走る鈍い熱と痛み。鏡を覗くと、耳元にキラリと小さなシルバースタッドが光っている。親や学校の敷いたレールから少しだけはみ出したような、甘美な自由がそこにあった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "直前で怖じ気づいてしまい、マグネットピアスで雰囲気を楽しむ",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "selfKnowledge": 2,
            "happiness": 2
          },
          "narrative": "ピアッサーの刃先を見たら急に怖くなり、「やっぱり今日はやめとく！」と叫んで笑い転げた。代わりに友達がくれたノンホールピアスを挟むと、それだけでも十分に横顔が大人びて見えて満足した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "今日、耳にピアスを開けた。パチンって音がしてすごくドキドキした。髪を耳にかけるたびにキラッと光って嬉しい。",
    "友達とピアスを開けようと盛り上がった放課後。ちょっとワルいことしてるみたいなスリルが最高だった。"
  ]
});

window.defineEvent({
  "id": "stretched_sheer_stockings",
  "title": "秋の休日デート・素肌が透ける黒ストッキングの繊細な締め付け",
  "age": [
    16,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 45,
  "once": true,
  "text": "少し背伸びしたカフェに出かける休日。普段の制服やカジュアルなジーンズではなく、短めのスカートに薄手のストッキングを合わせてみることにした。パッケージを開けると、微かに薬品と新品のナイロンの匂いがした。",
  "choices": [
    {
      "id": "choice_0",
      "label": "太ももまで引き上げ、滑らかなナイロン越しに伝わる冷気に身震いする",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "confidence": 3,
            "sexualEffects": {
              "libido": 2
            }
          },
          "narrative": "いつも履く学校指定の紺ソックスではなく、コンビニで買った20デニールの薄手黒ストッキング。つま先から慎重に爪を立てないよう、ふくらはぎ、膝、太ももへと手繰り寄せていく。肌に吸い付くようなナイロンの密着感と、脚全体がキュッと細く引き締まる感覚。秋風が脚を撫でるたび、素肌が透けた脚線美への自覚と、すれ違う人々の視線が快感に変わっていった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "伝線しないか終始気になって、スカートの裾を何度も整える",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "stress": 1,
            "selfKnowledge": 2
          },
          "narrative": "どこかに引っ掛けて電線したらどうしようと、歩くたびに気が気でない。それでもガラス窓に映る自分のほっそりした脚を見て、大人っぽく見えていることに確かな手応えを感じていた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "初めて薄い黒ストッキングを履いて街を歩いた。風が当たるとひんやりして、なんだかすごく艶っぽい気分になった。",
    "ストッキングを履くと足が綺麗に見えて感動。大人の女の人って毎日こんな風に気を遣ってるんだな。"
  ]
});

window.defineEvent({
  "id": "teen_first_part_time_job",
  "title": "初めてのアルバイト・ファミレスの制服と初給料",
  "age": [
    16,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "school_student"
  ],
  "weight": 25,
  "once": true,
  "text": "高校生になり、校則や許可を確認して始めた初めてのアルバイト。学校と家以外の新しい居場所。大人たちに混ざって働く緊張感と、自分で稼ぐことの厳しさと誇りを学ぶ。",
  "choices": [
    {
      "id": "choice_0",
      "label": "笑顔での接客とオーダー取りを必死に覚え、バイト仲間と絆を深める",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "money": 4,
            "communication": 3,
            "independence": 3,
            "stress": 1,
            "bond": {
              "role": "colleague",
              "status": "close",
              "metContext": "初バイト先の仲間"
            }
          },
          "narrative": "ピシッとした制服に身を包み、ハンディの使い方とお辞儀の角度を必死で頭に叩き込んだ。ピークタイムの忙しさに目が回りそうになりながらも、お客様からの「ありがとう」と、月末に手渡された給与明細の重みに社会の一員となった実感が湧いた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "バックヤードでの皿洗いや調理補助を黙々とこなし、職人技を身につける",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "money": 4,
            "health": 2,
            "knowledge": 2,
            "independence": 2,
            "bond": {
              "role": "colleague",
              "status": "acquaintance",
              "metContext": "初バイト先の同僚"
            }
          },
          "narrative": "厨房での仕込みや片付けを素早くテキパキとこなした。店長から「助かるよ」と褒められ、自分の手で稼いだお金で欲しかった靴を買いに行った時の喜びは格別だった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "初めてのお給料日！ 口座に振り込まれた数字を見て、自分で働くってこういうことなんだって感動した。少しだけ両親にお土産を買って帰った。",
    "バイトは大変だけど、学校とは違う友達や先輩ができて世界が広がった。社会勉強になることばかりだ。"
  ]
});

window.defineEvent({
  "id": "mild_sexuality_mirror_body_check",
  "title": "お風呂上がりの脱衣所・湯気の中で見つめる成熟した自分の身体",
  "age": [
    16,
    20
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 35,
  "once": true,
  "text": "一人きりのお風呂上がり。湯気が立ち込める脱衣所の大きな鏡の前。バスタオルを取る前の無防備な素肌。完全に少女から大人の女性へと成熟を遂げた自らの肉体を、静かに見つめ直す親密なひととき。",
  "choices": [
    {
      "id": "choice_0",
      "label": "曇った鏡を手のひらで拭い、成熟した胸とくびれのラインを静かに見つめる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "selfKnowledge": 3,
            "desire": 2,
            "sexualEffects": {
              "libido": 2
            }
          },
          "narrative": "湯上がりの脱衣所。熱いシャワーを浴びてピンク色に上気した素肌。白く曇った大きな鏡を手のひらで拭うと、露わになった自分の裸身が映し出された。ふっくらと重みを増した乳房、滑らかなくびれ、豊かなヒップ。子供の頃とは完全に違う、立派な大人の女の肉体がそこにある。濡れた髪から滴る水滴を拭いながら、自分の身体に宿る確かな女性としての魅力と命の熱さに、静かな愛おしさを覚えた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ボディクリームを丁寧に塗り込み、すべすべの肌触りを慈しむ",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 2,
            "aesthetics": 4,
            "stress": -3
          },
          "narrative": "甘い香りのボディミルクを手に取り、鎖骨や腕、太ももへと優しく伸ばしていく。しっとりと吸い付くような素肌の手触りに満足し、自分を慈しむ豊かなセルフケアの時間を楽しんだ。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "お風呂上がりに鏡で自分の身体をじっくり見た。いつの間にかすっかり大人の女性の身体になっていて、不思議な誇らしさと少しの照れくささがあった。",
    "お風呂上がりのボディケア。自分の肌を丁寧に手入れする時間が、一番リラックスできて好き。"
  ]
});

window.defineEvent({
  "id": "youth_hangover_regret",
  "title": "若気の至りと向き合う朝",
  "age": [
    16,
    22
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "underage_drinking_allowed"
  ],
  "weight": 30,
  "once": true,
  "requires_flag": "choice_underage_drinking_2",
  "boosts": [
    {
      "whenFlag": "choice_underage_drinking_2",
      "factor": 4
    }
  ],
  "alcohol": true,
  "allowUnderage": true,
  "text": "かつて流されて酒を煽り、我を忘れて醜態を晒しかけた記憶が、苦い後悔として蘇る。あの危うい経験を経て、自制心と自分の守り方について深く考えさせられた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自分の意志を貫く強さを持つ",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "過ちを反省し、自分の意志を貫く強さを持つ。",
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
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "慎重に振る舞う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "後悔を胸にしまい、慎重に振る舞う。",
          "effects": [
            {
              "path": "skill.knowledge",
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
  ]
});

window.defineEvent({
  "id": "stretched_night_drive_view",
  "title": "深夜の埠頭・流れるネオンと助手席の革シートに沈む身体",
  "age": [
    17,
    19
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 45,
  "once": true,
  "text": "夜のドライブに誘われた。電車が止まる時間帯、きらめく夜景の向こうへと滑り出す車。日常の行動範囲を一気に飛び越え、大人の夜の世界へと連れ出されるスリルに心拍数が跳ね上がる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "窓を少し開けて夜風を感じながら、大人だけの密閉された空間に浸る",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "romance": 3,
            "confidence": 3,
            "sexualEffects": {
              "libido": 2,
              "intimacy": 2
            },
            "bond": {
              "role": "senior",
              "status": "close",
              "gender": "male",
              "romanticInterest": 70,
              "metContext": "夜のドライブに誘ってくれた先輩"
            }
          },
          "narrative": "少し年上の知り合いが運転する車の助手席。重厚なドアが閉まった瞬間、街の喧騒が遮断され、革シートの独特な匂いと静かな音楽だけが車内を満たす。首都高のカーブを抜けるたび、身体に心地よい遠心力がかかり、並んで座る相手の横顔が街灯の光に照らされる。子供の頃には知らなかった夜の東京の美しさと、助手席に座る資格を得たような優越感に息を呑んだ。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "緊張で身体が強張り、シートベルトをぎゅっと握りしめて前を見つめる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 3,
            "stress": 1,
            "selfKnowledge": 2
          },
          "narrative": "ふたりきりの密室という事実に心臓が激しく脈打ち、上手く会話が続けられない。「寒くない？」とエアコンを調整してくれる仕草にすらドキマギしてしまい、大人の恋愛の入口で立ち往生する自分を意識した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "夜のドライブに連れて行ってもらった。首都高から見える街の光がすごく綺麗で、映画のワンシーンみたいだった。",
    "車の助手席って、ふたりきりの距離が近くて緊張する。大人っぽい夜の空気に少し呑まれそうになった。"
  ]
});

window.defineEvent({
  "id": "stretched_daring_swimsuit",
  "title": "初夏の水着売り場・鏡の前で合わせた大胆なホルターネックビキニ",
  "age": [
    17,
    20
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 45,
  "once": true,
  "text": "夏休みの旅行に向けて水着を探しにデパートへ。並んでいるのは、布面積の小さなホルターネックや大胆なカッティングのビキニ。少女から女性へと移り変わる身体をどこまで見せるか、試着室の前で迷う。",
  "choices": [
    {
      "id": "choice_0",
      "label": "谷間とくびれが強調された姿に頬を染めつつ、思い切ってレジへ運ぶ",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 4,
            "confidence": 3,
            "sexualEffects": {
              "libido": 2
            }
          },
          "narrative": "試着室のカーテンの中で、紐を首の後ろでキュッと結び、細身のショーツを引き上げる。三面鏡に映る自分の姿は、スクール水着の面影など微塵もない、引き締まったウエストと豊かなバストライン。布地の少なさに息を呑みながらも、女として磨かれた自分の肉体に抗いがたい誇らしさを感じ、今年の夏はこの水着で海に行こうと決意した。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "「やっぱり露出が高すぎるかも」とパレオ付きの控えめなセットを選ぶ",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 2,
            "happiness": 2,
            "aesthetics": 2
          },
          "narrative": "胸元やヒップの露出にどうしても恥ずかしさが勝ってしまい、透け感のあるパレオが付いたデザインにした。それでも去年の水着よりずっと大人っぽく、夏が来るのが待ち遠しくなった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "思い切って少し露出の多いビキニを買った。試着室で鏡を見たとき、自分の身体つきに自分でドキドキしちゃった。",
    "水着売り場に行くと、大人っぽいデザインばかりで目移りした。今年の夏は思い切り楽しみたい。"
  ]
});

window.defineEvent({
  "id": "career_path_after_highschool",
  "title": "高校卒業と未来への扉・私の選ぶ進路",
  "age": [
    18,
    18
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 100,
  "once": true,
  "text": "卒業証書を手にし、校門を出た春の日。これまでの学生生活に別れを告げ、これから始まる大人の人生の第一歩をどう歩むか。胸に去来する期待と不安の中で、私はこれからの道を選び取る。",
  "choices": [
    {
      "id": "choice_0",
      "label": "自由な学生生活を謳歌する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "【大学・専門学校へ進学】さらに知識を深め、自由な学生生活を謳歌する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 6
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -50000
            },
            {
              "path": "history.flags.university",
              "op": "record_flag",
              "value": true
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "学生"
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "自立した生活と収入を得る",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "【一般企業へ就職】社会人として働き、自立した生活と収入を得る。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 60000
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
            },
            {
              "path": "history.flags.employed",
              "op": "record_flag",
              "value": true
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "一般職"
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "【専門的な技術・創作の道へ】クリエイター・専門職を目指して修行する",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "【専門的な技術・創作の道へ】クリエイター・専門職を目指して修行する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "専門職・クリエイター"
            }
          ]
        }
      ]
    },
    {
      "id": "choice_3",
      "label": "【アルバイトをしながら探す】フリーターとして自分のペースで生きる",
      "outcomes": [
        {
          "id": "outcome_3",
          "weight": 1,
          "description": "【アルバイトをしながら探す】フリーターとして自分のペースで生きる。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 20000
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
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "パート・アルバイト"
            }
          ]
        }
      ]
    },
    {
      "id": "choice_4",
      "label": "【進路を決めず無職】焦らず自分を見つめ直す時間を過ごす",
      "outcomes": [
        {
          "id": "outcome_4",
          "weight": 1,
          "description": "【進路を決めず無職】焦らず自分を見つめ直す時間を過ごす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "無職"
            }
          ]
        }
      ]
    }
  ],
  "diary": [
    "進学を選んだ。新しいキャンパスで広がる世界と学びに胸を高鳴らせている。",
    "就職して働き始める道を選んだ。自分の力で生活を切り拓いていく覚悟を決めた。",
    "決まった枠に囚われず、自分のペースで歩むことを選んだ。焦らず自分らしい道を探したい。"
  ]
});

window.defineEvent({
  "id": "mild_sexuality_aroma_bath_sensual",
  "title": "アロマを浮かべた真夜中の長風呂・指先で愛でる自分の素肌",
  "age": [
    19,
    25
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 35,
  "once": true,
  "text": "一人暮らしのアパート、あるいは深夜の自宅の浴室。アロマの香りに包まれた温かいお湯の中で、誰の視線も気にすることなく、ゆっくりと自分の素肌と向き合う贅沢なバスタイム。",
  "choices": [
    {
      "id": "choice_0",
      "label": "湯船の中で泡立てた指先を太ももから秘所へと滑らせ、甘い吐息を漏らす",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "stress": -5,
            "desire": 3,
            "aesthetics": 3,
            "sexualEffects": {
              "libido": 4,
              "passion": 2
            }
          },
          "narrative": "ラベンダーとゼラニウムのバスソルトを入れた真夜中の湯船。照明を落とし、キャンドルの揺れる光の中でぬくもりに沈む。豊かな泡を手にとり、柔らかな胸や太ももの内側を滑らせていく。温まった身体の芯から疼くような心地よい快感が広がり、指先が自然と秘肉のヒダを優しくなぞると、お湯の中で小さく声が漏れた。誰にも見られない自分だけの聖域で、女性としての肉体を愛でる甘美なリラクゼーションに浸った。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "好きな音楽を流しながら半身浴をし、一日の疲れを完全に洗い流す",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 3,
            "stress": -6,
            "happiness": 3
          },
          "narrative": "防水スピーカーで静かなジャズを流し、汗をたっぷり流した。身体の奥からデトックスされ、心も身体も生まれ変わったような爽快感でベッドに入った。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "真夜中のアロマバス。温かいお湯の中で自分の肌に触れていると、日頃の緊張が全部ほどけて、すごく穏やかで淫らな心地よさに包まれた。",
    "キャンドルを灯したお風呂で贅沢な時間。自分を大切にするってこういうことなんだなって癒やされた。"
  ]
});

window.defineEvent({
  "id": "stretched_bar_counter_solo",
  "title": "雑居ビルの地下・重厚な木のカウンターで傾ける琥珀色のグラス",
  "age": [
    20,
    24
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 45,
  "once": true,
  "text": "ずっと憧れていた、大人だけが集うオーセンティックなバーの扉。重い木製のドアを押し開けると、間接照明に照らされた無数のウイスキーボトルと静謐なジャズが迎えてくれた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "バーテンダーに好みを伝え、静かにカクテルを味わう大人の時間を満喫する",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "independence": 4,
            "aesthetics": 3,
            "confidence": 3,
            "stress": -2,
            "bond": {
              "role": "bar_encounter",
              "status": "acquaintance",
              "gender": "male",
              "metContext": "バーのカウンターで出会った人"
            }
          },
          "narrative": "一枚板の重厚なカウンターに腰掛け、「柑橘系でさっぱりしたショートカクテルを」と静かに注文。シェイカーを振るリズミカルな氷の音、薄張りのカクテルグラスに注がれる淡いエメラルドグリーンの液体。冷たいグラスに唇を触れ、アルコールの刺激が喉を通り抜ける時、居酒屋の喧騒とは違う、洗練された静寂をひとりで嗜む大人の贅沢に心が満たされた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "アルコール度数の高さに喉がカッと熱くなり、チェイサーを交互に飲む",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "selfKnowledge": 3,
            "happiness": 2,
            "stress": -1
          },
          "narrative": "思っていた以上に強いお酒に胃がポカポカと温まり、少し身体が軽くなる。バーテンダーの気遣いある柔らかな会話に癒やされ、一人で過ごす夜の居場所をひとつ見つけたような安らぎを覚えた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "初めてひとりでバーに行った。薄暗い店内でカクテルを飲む時間、すごく落ち着いていて大人になった実感があった。",
    "バーのカウンターで美味しいお酒を飲んだ。背筋がスッと伸びるような、素敵な大人の空間だった。"
  ]
});

window.defineEvent({
  "id": "stretched_night_club_bass",
  "title": "深夜のフロア・身体の芯を震わせる重低音とレーザーの光芒",
  "age": [
    20,
    24
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 45,
  "once": true,
  "text": "友人に誘われて初めて訪れた渋谷の大型ナイトクラブ。エントランスでIDチェックを受け、リストバンドを巻かれて地下へと潜り込む。そこには昼の街とはまったく異なる、夜のエネルギーが渦巻いていた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "フロアの熱気とビートに身を任せ、リズムに合わせて夢中で踊る",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "social": 4,
            "confidence": 3,
            "stress": -3,
            "sexualEffects": {
              "libido": 2
            },
            "bond": {
              "role": "friend",
              "status": "acquaintance",
              "metContext": "ナイトクラブで意気投合した仲間"
            }
          },
          "narrative": "地下への階段を降り、分厚い防音ドアを開けた瞬間に身体を直撃する大音量のキックベース。スモークが焚かれた暗闇の中、緑や青のレーザー光線が交錯する。プラスチックカップのジントニックを飲み干し、押し寄せる人々の波に混ざって音の洪水に身を浸す。骨まで震わせる重低音が理性のリミッターを解除し、日常のしがらみを全て脱ぎ捨てたような爆発的な快感に酔い痴れた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ラウンジスペースでグラスを傾けながら、熱気あふれるフロアを眺める",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "selfKnowledge": 3,
            "social": 2,
            "stress": -1
          },
          "narrative": "踊る人々の熱気に少し圧倒されつつ、フロアから一段上がったVIPラウンジ付近で音楽に身を揺らした。日常とは完全に切り離された非日常の空間で、夜を遊び尽くす大人たちのエネルギーを肌で感じた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "初めてクラブに行ってみた。地響きみたいな音楽と光がすごくて、朝まで踊ってストレスが全部吹き飛んだ。",
    "夜のクラブの熱気はすごかった。ちょっと非日常の世界を覗き見したみたいでスリリングだった。"
  ]
});

window.defineEvent({
  "id": "stretched_bold_silk_nightwear",
  "title": "一人暮らしの夜・素肌を滑り落ちるシルクサテンのスリップドレス",
  "age": [
    20,
    25
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 45,
  "once": true,
  "text": "一人暮らしの部屋。誰の目線も気にしなくていい自由な夜。いつもなら着古したTシャツで済ませるところを、ずっと気になっていたシルクサテンのランジェリーを部屋着にしてみる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "エアコンの微風が素肌をなでる涼しさと、とろけるような肌触りに身を委ねる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "confidence": 3,
            "sexualEffects": {
              "libido": 2
            }
          },
          "narrative": "綿のスウェットを脱ぎ捨て、思い切って通販で買った深いワインレッドのシルクスリップに袖を通す。ひんやりと冷たく、まるで液体のようにつるりと素肌を滑り落ちるサテン生地。背中が大きく開き、胸元のレースが肌をかすかに覆う。誰に見せるわけでもない、自分だけの部屋。間接照明の灯りの下でワイングラスを持ち、成熟した女の身体を持つことの悦びに深く浸った。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "「風邪ひいちゃうかも」と笑いながら、上に薄いカーディガンを羽織る",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 2,
            "selfKnowledge": 2
          },
          "narrative": "露出の多さに一人なのにそわそわしてしまい、カーディガンを肩から掛けた。それでも肌に触れる滑らかな感触は格別で、贅沢な部屋着の心地よさに満たされた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "シルクのスリップを買って部屋着にしてみた。肌触りが信じられないくらいすべすべで、なんだか映画の主人公になったみたい。",
    "誰に見せるでもなく、自分のために綺麗な部屋着を着るって、すごく贅沢で心地いい気分転換になる。"
  ]
});

window.defineEvent({
  "id": "stretched_hotel_lounge_tea",
  "title": "高層ホテルのティーラウンジ・銀器と三段スタンドの贅沢な午後",
  "age": [
    20,
    25
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 45,
  "once": true,
  "text": "普段のカフェとは一線を画す、一流ホテルでのアフタヌーンティー。クローゼットから一番綺麗めなワンピースを選び、ハイヒールを履いて格式あるエントランスをくぐる。",
  "choices": [
    {
      "id": "choice_0",
      "label": "美しい所作でスコーンを割り、香り高い紅茶を優雅にいただく",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 4,
            "confidence": 3,
            "happiness": 3,
            "stress": -2
          },
          "narrative": "天井の高いラグジュアリーホテルのラウンジ。生演奏のハープが響く中、運ばれてきた三段のシルバースタンドには、宝石のようなスイーツやサンドイッチ。上質なボーンチャイナのカップから立ち上るダージリンの香り。周囲のマダムたちに気後れしないよう背筋を伸ばし、ナイフとフォークを丁寧に扱う自分に、確かなエレガンスの芽生えを感じた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ドレスコードに少し緊張しつつも、高層階からの絶景をスマホに収める",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 3,
            "social": 2,
            "stress": -1
          },
          "narrative": "少しおめかしして出かけたホテル。窓の外に広がる広大な大都市のパノラマを眺めながら、自分への最高のご褒美として優雅な時間を味わい尽くした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "ホテルのラウンジでアフタヌーンティーを楽しんだ。銀の食器や美しいスイーツに囲まれて、お姫様になったみたいな午後だった。",
    "きちんとおしゃれをして素敵な場所へ行くと、立ち居振る舞いまで自然と丁寧になる気がする。"
  ]
});

window.defineEvent({
  "id": "mild_sexuality_gaze_awareness",
  "title": "夏の薄着と交差点・すれ違う人の視線に自覚する女の身体",
  "age": [
    20,
    30
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 35,
  "once": true,
  "text": "陽射しが眩しい真夏の街角。軽やかな素材の薄着で歩く通り。周囲のすれ違う視線を通じて、自分が紛れもなく成熟した一人の女性として社会の中に存在していることを意識する瞬間。",
  "choices": [
    {
      "id": "choice_0",
      "label": "注がれる視線に恥じらいつつも、女として見られているかすかな誇りと興奮を覚える",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 4,
            "selfKnowledge": 3,
            "desire": 2,
            "sexualEffects": {
              "libido": 3,
              "passion": 2
            }
          },
          "narrative": "真夏の休日の交差点。背中が少し開いたノースリーブのサマーワンピースを着て信号待ちをしていると、すれ違う男性たちの視線が露わになった二の腕や胸元、脚のラインに注がれているのを感じた。一瞬ぎくしゃくした恥ずかしさが走ったけれど、次の瞬間、自分が魅力的な一人の大人の女性として見られているのだという実感に、胸の奥がキュンと甘く疼いた。髪を耳にかけ、背筋を伸ばして颯爽と横断歩道を渡った。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "薄手のサマーカーディガンを羽織り、上品で控えめな着こなしを楽しむ",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "morality": 2,
            "aesthetics": 3,
            "selfKnowledge": 2
          },
          "narrative": "露出を抑えつつ、涼しげなリネン素材で上品にまとめた。過度に目立ちすぎず、自分らしい洗練された大人のファッションで街歩きを楽しんだ。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "お気に入りの夏ワンピースでお出かけ。街で視線を感じて少しドキドキしたけれど、大人の女性として見られているんだなって自信になった。",
    "夏のファッション。露出のバランスを考えながら、自分に一番似合うスタイルでお出かけするのが楽しい。"
  ]
});

window.defineEvent({
  "id": "mild_sexuality_lingerie_fitting_adult",
  "title": "百貨店のランジェリーサロン・プロに測ってもらう正しいバストサイズ",
  "age": [
    20,
    30
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 35,
  "once": true,
  "text": "大人の女性として、正しい下着選びをしたいと訪れた専門店のフィッティングサロン。落ち着いた照明の試着室で、プロの手によって正確に計測され、完璧に補正される自らの身体のライン。",
  "choices": [
    {
      "id": "choice_0",
      "label": "熟練フィッターの手でバストを美しく収めてもらい、劇的な谷間に息を呑む",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 5,
            "selfKnowledge": 4,
            "money": -5,
            "happiness": 4,
            "sexualEffects": {
              "libido": 2,
              "passion": 2
            }
          },
          "narrative": "百貨店の一角にある高級ランジェリーサロン。カーテンで仕切られた個室で、ベテランのフィッターさんに正しいサイズを計測してもらう。「背中やお肉をしっかりカップに集めますね」と、温かい手で胸を優しく持ち上げられ、ぴったりのブラを装着された。鏡を見た瞬間、自分の胸とは思えないほど美しいデコルテとくっきりとした谷間ができていて息を呑んだ。上質なシルクとレースに包まれた胸元に、大人の女性としての強い自信が湧き上がった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "着け心地と補正力を両立した上品なセットを選び、姿勢を美しく整える",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 4,
            "health": 2,
            "money": -4,
            "independence": 2
          },
          "narrative": "締め付け感がなく、自然に背筋が伸びる美しいインナーを選んだ。プロに見てもらったおかげで服を着た時のシルエットが格段に綺麗になり、歩く姿まで堂々とした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "ランジェリーサロンでプロにフィッティングしてもらった！ 測り直したらサイズが上がっていてびっくり。正しい下着を着けると、こんなに綺麗に見えるんだって感動した。",
    "奮発して買った上質な下着。服を着た時のラインが全然違って、背筋がすっと伸びる。いい買い物をした！"
  ]
});
