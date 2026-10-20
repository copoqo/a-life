(window.eventDefs = window.eventDefs || []).push({
  "id": "youth_first_paycheck_parents",
  "title": "初任給の恩返し・両親に贈った手紙とディナー",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 252
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 300
      }
    ]
  },
  "weights": {
    "base": 24
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "youth_first_paycheck_parents"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "少し奮発したレストランを予約し、両親に食事をご馳走する",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 5,
            "morality": 3,
            "money": -3,
            "communication": 2
          },
          "narrative": "社会人として初めて受け取った初任給。普段は行かない少し高級な和食店を予約し、両親を招待した。「こんな贅沢しなくていいのに」と照れくさそうに笑いながら、嬉しそうに箸を進める二人の姿を見て、胸がいっぱいになった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "感謝の手紙を添えて、長く使える上質な日用品をプレゼントする",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "morality": 4,
            "money": -2,
            "selfKnowledge": 2
          },
          "narrative": "お母さんには上質なお財布、お父さんにはネクタイを選び、手紙を添えて手渡した。手紙を読んだ母の目に涙が浮かび、「立派になったね」と頭を撫でられた温もりを噛み締めた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 21,
  "max": 25,
  "p": 0.4,
  "once": true,
  "text": "社会人になって初めて迎えた給料日。口座に振り込まれた給与を手に、これまで自分を育て、支えてくれた両親への感謝を形にして伝えたいという温かい思いが湧き上がる。",
  "diary": [
    "初任給で両親にご飯をご馳走した。照れくさかったけれど、『ご馳走様、美味しかったよ』って言われた時、親孝行ができて本当に嬉しかった。",
    "自分で働いたお金で両親にプレゼントを贈った。ここまで無事に育ててくれた感謝を改めて伝えることができて、社会人としての自覚が芽生えた。"
  ],
  "classification": "daily"
});
