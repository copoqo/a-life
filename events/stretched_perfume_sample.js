(window.eventDefs = window.eventDefs || []).push({
  "id": "stretched_perfume_sample",
  "title": "母の留守中のドレッサー・手首にそっと移した香水の芳香",
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
        "value": 191
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
    "unique_key": "stretched_perfume_sample"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "耳の裏と手首に一滴つけ、立ち上る大人の香りに背筋をピンと伸ばす",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "confidence": 3,
            "sexualEffects": {
              "libido": 1
            }
          },
          "narrative": "琥珀色のガラス瓶から、ガラスの棒でほんの一滴すくい取り、手首と耳の裏へ。ふわりと立ち上ったのは、甘く重厚なジャスミンとバニラの香り。子供用のシャンプーの匂いとは別次元の、成熟した女の匂い。部屋を出て廊下を歩くだけで、自分がどこか魅惑的な女性に変身したような錯覚に酔いしれた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "香りが強すぎてバレるのが怖くなり、慌てて石鹸でゴシゴシ洗い流す",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "stress": 1,
            "selfKnowledge": 2
          },
          "narrative": "思っていた以上に濃密な香りが部屋中に漂い、お母さんに怒られるとパニックになって洗面所へ走った。石鹸で何度も擦った手首には、かすかに甘い残り香が残り、悪戯が残した余韻に胸がチクチクした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 13,
  "max": 15,
  "p": 0.5,
  "once": true,
  "text": "誰もいない休日の午後。母親の化粧台に並ぶ重厚な香水瓶たち。琥珀色や淡い紫の美しいボトルに手を伸ばし、キャップを外してみると、官能的で甘い大人の香りが鼻腔をくすぐった。",
  "diary": [
    "お母さんの香水をこっそり手首につけてみた。すごくいい匂いで、歩くたびに自分が大人になったみたいだった。",
    "香水をちょっとつけすぎて焦った。でも、あの華やかな香りはいつか自分も似合うようになりたいな。"
  ],
  "classification": "daily"
});
