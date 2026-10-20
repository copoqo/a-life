(window.eventDefs = window.eventDefs || []).push({
  "id": "mild_sexuality_aroma_bath_sensual",
  "title": "アロマを浮かべた真夜中の長風呂・指先で愛でる自分の素肌",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 228
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 300
      }
    ]
  },
  "weights": {
    "base": 35
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "mild_sexuality_aroma_bath_sensual"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "湯船の中で泡立てた指先を太ももから秘所へと滑らせ、甘い吐息を漏らす",
      "utility": 1,
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
      "utility": 1,
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
  "min": 19,
  "max": 25,
  "p": 0.5,
  "once": true,
  "text": "一人暮らしのアパート、あるいは深夜の自宅の浴室。アロマの香りに包まれた温かいお湯の中で、誰の視線も気にすることなく、ゆっくりと自分の素肌と向き合う贅沢なバスタイム。",
  "diary": [
    "真夜中のアロマバス。温かいお湯の中で自分の肌に触れていると、日頃の緊張が全部ほどけて、すごく穏やかで淫らな心地よさに包まれた。",
    "キャンドルを灯したお風呂で贅沢な時間。自分を大切にするってこういうことなんだなって癒やされた。"
  ],
  "classification": "daily"
});
