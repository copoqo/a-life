(window.eventDefs = window.eventDefs || []).push({
  "id": "street_encounter_allure",
  "title_template": "街での出会い 〜{variation_title}〜",
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
          216,
          420
        ]
      },
      {
        "path": "derived.has_spouse",
        "op": "eq",
        "value": false
      }
    ]
  },
  "weight": {
    "base": 60,
    "additive": [],
    "multipliers": []
  },
  "min": 18,
  "max": 35,
  "p": 0.3,
  "choices": [
    {
      "id": "choice_leave",
      "stance": "leave",
      "label": "関わらず立ち去る",
      "stat_effects": {
        "boundaryVoice": 4,
        "stress": -1
      }
    },
    {
      "id": "choice_greet",
      "stance": "greet",
      "label": "挨拶だけして離れる",
      "stat_effects": {
        "social": 2,
        "boundaryVoice": 2
      }
    },
    {
      "id": "choice_safe_talk",
      "stance": "safe_talk",
      "label": "安全な場所で少し会話する",
      "stat_effects": {
        "social": 3,
        "mood": 2
      }
    },
    {
      "id": "choice_cafe",
      "stance": "cafe",
      "label": "近くのカフェに入って話し込む",
      "stat_effects": {
        "social": 4,
        "mood": 3,
        "desire": 2
      }
    },
    {
      "id": "choice_hotel",
      "stance": "hotel",
      "label": "ホテルや二人きりになれる場所に行く",
      "stat_effects": {
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
