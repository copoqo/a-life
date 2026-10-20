(window.eventDefs = window.eventDefs || []).push({
  "id": "youth_first_apartment_hunt",
  "title": "初めての一人暮らし・不動産屋と日当たりの良い部屋",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 216
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 288
      }
    ]
  },
  "weights": {
    "base": 25
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "youth_first_apartment_hunt"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "予算と駅からの距離を綿密に吟味し、日当たりの良いワンルームを契約する",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "independence": 4,
            "money": -5,
            "happiness": 3,
            "knowledge": 2
          },
          "narrative": "不動産屋の担当者と何軒も内見を回り、南向きの窓から光が差し込む6畳の部屋に決めた。敷金礼金の計算をし、自分の名義で契約書に捺印した時の身の引き締まる緊張感。自由と自立の第一歩を踏み出した。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "インテリアショップを巡り、お気に入りのカーテンと照明を揃える",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "happiness": 4,
            "money": -3
          },
          "narrative": "何もない部屋に運び込まれた段ボール。お気に入りのリネンカーテンを掛け、柔らかな光の間接照明を灯した。自分だけの城が完成した瞬間の誇らしさは何物にも代えがたかった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 18,
  "max": 24,
  "p": 0.42,
  "once": true,
  "text": "進学や就職を機に決意した初めての一人暮らし。実家を離れ、自分の生活をすべて自分の手で管理する生活への憧れと不安。並べられた間取り図を見つめながら、新しい生活の扉を開く。",
  "diary": [
    "一人暮らしスタート！ 鍵を受け取って何もない部屋に入った時、ここが私の新しい拠点なんだって胸が震えた。自炊も掃除も頑張ろう。",
    "実家を出て初めての夜。静かすぎて少し寂しかったけれど、自分の好きなように過ごせる自由を噛み締めた。"
  ],
  "classification": "daily"
});
