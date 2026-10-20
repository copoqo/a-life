(window.eventDefs = window.eventDefs || []).push({
  "id": "mild_sexuality_wet_uniform_rain",
  "title": "土砂降りの雨と濡れ透ける白いブラウス・隠すように抱えたスクールバッグ",
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
        "value": 204
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
    "unique_key": "mild_sexuality_wet_uniform_rain"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "カバンを胸の前にぎゅっと抱え込み、恥ずかしさに顔を赤らめて急ぎ足で帰る",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 4,
            "selfKnowledge": 2,
            "sexualEffects": {
              "libido": 2
            }
          },
          "narrative": "突然のゲリラ豪雨。傘を持っておらず、駅までの道を走ったけれど全身ずぶ濡れになってしまった。水を含んだ白いセーラー服のブラウスがぺったりと胸元に張り付き、肌着のラインが透けてしまっている。通り過ぎる人たちの視線が胸元に向けられた気がして、カバンを胸の前に抱え込み、耳まで真っ赤になって早足で歩いた。肌に張り付く冷たい布の湿り気と、恥ずかしさでカッカと熱を帯びる身体のアンバランスに心臓が激しく波打った。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "友達と相合い傘に入り、びしょ濡れの姿をお互いに笑い飛ばす",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 3,
            "communication": 3,
            "stress": -2
          },
          "narrative": "「早く入って！」と友達が傘に入れてくれた。二人で肩を寄せ合い、水たまりを避けながら「すごい雨だったね！」と笑い合った。冷えた身体を温め合う友情が心強かった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 13,
  "max": 16,
  "p": 0.5,
  "once": true,
  "text": "放課後、突然空が暗転して降り注いだ土砂降りの夕立。傘を持たない下校途中、雨に打たれて濡れそぼった薄手の白い制服ブラウス。水滴を含んで肌に密着する布地が、隠していた女性らしい身体の凹凸を露わにしてしまう羞恥の瞬間。",
  "diary": [
    "夕立で制服がびしょ濡れになってしまった。ブラウスが透けている気がして、カバンを抱えて恥ずかしくて泣きそうになりながら走って帰った。お風呂がすごく気持ちよかった。",
    "突然の雨で大変だったけれど、友達と一つの傘に入って帰ったのが青春っぽくて楽しかった。"
  ],
  "classification": "daily"
});
