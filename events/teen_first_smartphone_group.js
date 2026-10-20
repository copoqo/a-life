(window.eventDefs = window.eventDefs || []).push({
  "id": "teen_first_smartphone_group",
  "title": "初めてのスマホと深夜のグループ通話",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 156
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 192
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
    "unique_key": "teen_first_smartphone_group"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "お気に入りのケースと壁紙を選び、仲良しグループで通話を夜更かしする",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "communication": 3,
            "curiosity": 2
          },
          "narrative": "手に入れたばかりの自分だけのスマートフォン。可愛いケースをつけ、仲の良い友達とグループを作った。ベッドの中でイヤホンを耳に入れ、深夜まで他愛のないおしゃべりで笑い転げる時間は魔法のようだった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "使いすぎに気をつけながら、情報収集や勉強アプリを使いこなす",
      "utility": 1,
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
  "min": 13,
  "max": 16,
  "p": 0.4,
  "once": true,
  "text": "約束の成績を取って、両親から買い与えられた初めてのスマートフォン。手の中に収まる小さなガラスの板から、世界中の情報と友達との繋がりが一気に広がるのを感じて胸が高鳴る。",
  "diary": [
    "念願のスマホデビュー！ 友達からの通知が鳴るたびに嬉しくて画面を見てしまう。ベッドの中での夜更かし通話、すごく楽しかった。",
    "自分だけのスマホ。新しい世界を手に入れたみたいでワクワクする。大事に使っていこう。"
  ],
  "classification": "daily"
});
