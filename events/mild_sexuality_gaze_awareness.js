(window.eventDefs = window.eventDefs || []).push({
  "id": "mild_sexuality_gaze_awareness",
  "title": "夏の薄着と交差点・すれ違う人の視線に自覚する女の身体",
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
        "value": 360
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
    "unique_key": "mild_sexuality_gaze_awareness"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "注がれる視線に恥じらいつつも、女として見られているかすかな誇りと興奮を覚える",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 4,
            "selfKnowledge": 3,
            "desire": 2,
            "sexualEffects": {
              "libido": 3,
              "passion": 2
            }
          },
          "narrative": "真夏の休日の交差点。背中が少し開いたノースリーブのサマーワンピースを着て信号待ちをしていると、すれ違う男性たちの視線が露わになった二の腕や胸元、脚のラインに注がれているのを感じた。一瞬ぎくしゃくした恥ずかしさが走ったけれど、次の瞬間、自分が魅力的な一人の大人の女性として見られているのだという実感に、胸の奥がキュンと甘く疼いた。髪を耳にかけ、背筋を伸ばして颯爽と横断歩道を渡った。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "薄手のサマーカーディガンを羽織り、上品で控えめな着こなしを楽しむ",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "morality": 2,
            "aesthetics": 3,
            "selfKnowledge": 2
          },
          "narrative": "露出を抑えつつ、涼しげなリネン素材で上品にまとめた。過度に目立ちすぎず、自分らしい洗練された大人のファッションで街歩きを楽しんだ。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 20,
  "max": 30,
  "p": 0.5,
  "once": true,
  "text": "陽射しが眩しい真夏の街角。軽やかな素材の薄着で歩く通り。周囲のすれ違う視線を通じて、自分が紛れもなく成熟した一人の女性として社会の中に存在していることを意識する瞬間。",
  "diary": [
    "お気に入りの夏ワンピースでお出かけ。街で視線を感じて少しドキドキしたけれど、大人の女性として見られているんだなって自信になった。",
    "夏のファッション。露出のバランスを考えながら、自分に一番似合うスタイルでお出かけするのが楽しい。"
  ],
  "classification": "daily"
});
