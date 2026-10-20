(window.eventDefs = window.eventDefs || []).push({
  "id": "puberty_awakening",
  "title_template": "思春期の秘密 〜{variation_title}〜",
  "classification": "daily",
  "content_rating": "adult",
  "conditions": {
    "all": [
      {
        "path": "person.alive",
        "op": "eq",
        "value": true
      },
      {
        "path": "person.age_months",
        "op": "between",
        "value": [
          144,
          215
        ]
      },
      {
        "path": "person.experience.has_sexual_experience",
        "op": "eq",
        "value": false
      }
    ]
  },
  "weight": {
    "base": 75,
    "additive": [],
    "multipliers": []
  },
  "min": 12,
  "max": 17,
  "p": 0.35,
  "choices": [
    {
      "id": "choice_explore",
      "stance": "explore",
      "label": "熱い好奇心と疼きに身を任せて奥深くまで探求する",
      "stat_effects": {
        "desire": 5,
        "independence": 3,
        "stress": -2
      }
    },
    {
      "id": "choice_timid",
      "stance": "timid",
      "label": "羞恥心に震えながらも、そっと触れて感覚を確かめる",
      "stat_effects": {
        "desire": 3,
        "shyness": 4,
        "stress": -1
      }
    },
    {
      "id": "choice_distract",
      "stance": "distract",
      "label": "意識しないように必死に別のことを考えて気を紛らわせる",
      "stat_effects": {
        "stress": 2,
        "knowledge": 2
      }
    },
    {
      "id": "choice_guilt",
      "stance": "guilt",
      "label": "恥ずかしさと罪悪感に耐えかねて途中でやめる",
      "stat_effects": {
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
