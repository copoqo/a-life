(window.eventDefs = window.eventDefs || []).push({
  "id": "teen_fashion_makeup_debut",
  "title": "初めてのプチプラコスメ・鏡の前での研究会",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 168
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 216
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
    "unique_key": "teen_fashion_makeup_debut"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "友達とドラッグストアでリップとアイシャドウを選び、放課後に塗り合う",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "happiness": 3,
            "communication": 2
          },
          "narrative": "お小遣いを握りしめてドラッグストアのコスメコーナーへ。雑誌を広げながら、友達の部屋の鏡の前でビューラーの使い方やアイラインの引き方を練習した。「これ似合うよ！」と褒め合って、少し大人びた自分の顔に照れ笑いがこぼれた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "スキンケアを徹底し、すっぴんの素肌を磨き上げる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 3,
            "aesthetics": 2,
            "selfKnowledge": 2
          },
          "narrative": "洗顔方法や化粧水の使い方を丁寧に研究。肌荒れを防ぎ、透明感のある健康的な素肌を目指して日々のケアを習慣づけた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 14,
  "max": 18,
  "p": 0.38,
  "once": true,
  "text": "雑誌やSNSで目にする可愛いメイクやファッションへの憧れ。自分のお小遣いで買えるプチプラのコスメを手に取り、鏡の前で少しずつ自分の魅力を引き出す研究を始める。",
  "diary": [
    "初めてリップをつけてみた！ ほんのりピンク色に染まった自分の唇を見て、なんだか少し大人になれた気がして嬉しかった。",
    "友達と放課後にコスメ研究会。お互いにメイクし合って、笑いながらたくさん写真を撮った。女の子って楽しい！"
  ],
  "classification": "daily"
});
