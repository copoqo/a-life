(window.eventDefs = window.eventDefs || []).push({
  "id": "stretched_hotel_lounge_tea",
  "title": "高層ホテルのティーラウンジ・銀器と三段スタンドの贅沢な午後",
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
    "unique_key": "stretched_hotel_lounge_tea"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "美しい所作でスコーンを割り、香り高い紅茶を優雅にいただく",
      "utility": 1,
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
      "utility": 1,
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
  "min": 20,
  "max": 25,
  "p": 0.5,
  "once": true,
  "text": "普段のカフェとは一線を画す、一流ホテルでのアフタヌーンティー。クローゼットから一番綺麗めなワンピースを選び、ハイヒールを履いて格式あるエントランスをくぐる。",
  "diary": [
    "ホテルのラウンジでアフタヌーンティーを楽しんだ。銀の食器や美しいスイーツに囲まれて、お姫様になったみたいな午後だった。",
    "きちんとおしゃれをして素敵な場所へ行くと、立ち居振る舞いまで自然と丁寧になる気がする。"
  ],
  "classification": "daily"
});
