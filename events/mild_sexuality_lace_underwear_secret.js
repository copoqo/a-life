(window.eventDefs = window.eventDefs || []).push({
  "id": "mild_sexuality_lace_underwear_secret",
  "title": "背伸びして買った初めてのレースのショーツ・制服の下の秘密",
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
        "value": 228
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
    "unique_key": "mild_sexuality_lace_underwear_secret"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "繊細なレースを素肌にまとい、歩くたびに感じる密かな高揚感に背筋を伸ばす",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 4,
            "selfKnowledge": 3,
            "happiness": 3,
            "sexualEffects": {
              "libido": 3,
              "passion": 2
            }
          },
          "narrative": "アルバイトで貯めたお小遣いで、初めて駅ビルのランジェリーショップへ。これまでの綿の下着とは違う、透け感のある繊細なラベンダー色のレースの上下セットを購入した。翌朝、いつもの地味な制服の下にその下着を身につけて登校する。誰も知らない、制服の下だけの大人びた秘密。歩くたびにレースが秘肉の付け根をチクチクとくすぐり、自分が特別な女の子になったような背徳の高揚感に頬がほんのり染まった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "鏡の前で何度も角度を変えて眺め、大人びた自分のシルエットに満足する",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "selfKnowledge": 3,
            "happiness": 2
          },
          "narrative": "部屋の姿見の前で、新しい下着を着けた自分の姿をじっくり眺めた。胸の形が綺麗に整い、少し大人の女性のラインに近づいた自分を誇らしく思い、引き出しの特等席に大切にしまった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 16,
  "max": 18,
  "p": 0.5,
  "once": true,
  "text": "高校生になり、自分のお金で少し背伸びして選んだ大人びたランジェリー。花柄の繊細なレース、透ける生地、綺麗なワイヤー。地味な学生服の下に隠された、自分だけの密やかな女の誇り。",
  "diary": [
    "初めてレースの下着を買って着てみた。制服の下に大人の下着をつけていると思うだけで、なんだかドキドキして背筋がシャンと伸びた。自分だけの秘密。",
    "可愛いランジェリーを身につけるだけで、こんなにも気分が上がるなんて知らなかった。もっと自分磨きを頑張ろう。"
  ],
  "classification": "daily"
});
