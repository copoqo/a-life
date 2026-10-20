(window.eventDefs = window.eventDefs || []).push({
  "id": "stretched_bold_silk_nightwear",
  "title": "一人暮らしの夜・素肌を滑り落ちるシルクサテンのスリップドレス",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 240
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 311
      }
    ]
  },
  "weights": {
    "base": 45
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "stretched_bold_silk_nightwear"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "エアコンの微風が素肌をなでる涼しさと、とろけるような肌触りに身を委ねる",
      "utility": 1,
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
      "utility": 1,
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
  "min": 20,
  "max": 25,
  "p": 0.5,
  "once": true,
  "text": "一人暮らしの部屋。誰の目線も気にしなくていい自由な夜。いつもなら着古したTシャツで済ませるところを、ずっと気になっていたシルクサテンのランジェリーを部屋着にしてみる。",
  "diary": [
    "シルクのスリップを買って部屋着にしてみた。肌触りが信じられないくらいすべすべで、なんだか映画の主人公になったみたい。",
    "誰に見せるでもなく、自分のために綺麗な部屋着を着るって、すごく贅沢で心地いい気分転換になる。"
  ],
  "classification": "daily"
});
