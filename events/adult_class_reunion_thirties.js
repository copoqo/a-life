(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_class_reunion_thirties",
  "title": "三十歳の節目同窓会・それぞれの道を歩む旧友たち",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 360
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 480
      }
    ]
  },
  "weights": {
    "base": 22
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "adult_class_reunion_thirties"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "近況を語り合い、互いの人生の歩みを認め合って親交を温め直す",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 3,
            "happiness": 4,
            "selfKnowledge": 3
          },
          "narrative": "ホテルの宴会場に集まった同級生たち。結婚した人、バリバリ働いている人、子育てに奮闘する人。十代の頃の面影を残しながらも、それぞれが大人の顔つきで自分の人生を歩んでいる。飾らない昔話に花を咲かせ、旧友たちとの変わらない絆に心が温まった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "昔好きだった人や親友と静かに語り、懐かしい思い出に浸る",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "selfKnowledge": 3,
            "happiness": 3,
            "intimacyNeed": 1
          },
          "narrative": "二次会の落ち着いたバーで、昔の淡い恋心や部活の思い出を懐かしく語り合った。大人になった今だからこそ話せる笑い話に、青春時代のすべてが愛おしく感じられた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 30,
  "max": 40,
  "p": 0.36,
  "once": true,
  "text": "三十歳という節目の年に開催された中学校・高校の学年同窓会。案内状を手に集まったかつての仲間たち。学生時代の面影と、社会人として重ねてきた歳月の深みが交錯する会場。",
  "diary": [
    "三十歳の同窓会。みんなすっかり立派な大人になっていたけれど、話すと一瞬で昔の空気に戻れた。自分の人生も悪くないなって前向きになれた。",
    "懐かしい同級生たちとの再会。みんなそれぞれ悩みながら頑張っている姿に勇気をもらった。また集まろうねって約束した。"
  ],
  "classification": "daily"
});
