(window.eventDefs = window.eventDefs || []).push({
  "id": "stretched_sheer_stockings",
  "title": "秋の休日デート・素肌が透ける黒ストッキングの繊細な締め付け",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 192
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 227
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
    "unique_key": "stretched_sheer_stockings"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "太ももまで引き上げ、滑らかなナイロン越しに伝わる冷気に身震いする",
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
          "narrative": "いつも履く学校指定の紺ソックスではなく、コンビニで買った20デニールの薄手黒ストッキング。つま先から慎重に爪を立てないよう、ふくらはぎ、膝、太ももへと手繰り寄せていく。肌に吸い付くようなナイロンの密着感と、脚全体がキュッと細く引き締まる感覚。秋風が脚を撫でるたび、素肌が透けた脚線美への自覚と、すれ違う人々の視線が快感に変わっていった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "伝線しないか終始気になって、スカートの裾を何度も整える",
      "utility": 1,
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
  "min": 16,
  "max": 18,
  "p": 0.5,
  "once": true,
  "text": "少し背伸びしたカフェに出かける休日。普段の制服やカジュアルなジーンズではなく、短めのスカートに薄手のストッキングを合わせてみることにした。パッケージを開けると、微かに薬品と新品のナイロンの匂いがした。",
  "diary": [
    "初めて薄い黒ストッキングを履いて街を歩いた。風が当たるとひんやりして、なんだかすごく艶っぽい気分になった。",
    "ストッキングを履くと足が綺麗に見えて感動。大人の女の人って毎日こんな風に気を遣ってるんだな。"
  ],
  "classification": "daily"
});
