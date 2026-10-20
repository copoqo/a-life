(window.eventDefs = window.eventDefs || []).push({
  "id": "mild_sexuality_physical_exam_blush",
  "title": "春の身体測定・カーテンの奥の聴診器とひんやりした金属",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 120
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 155
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
    "unique_key": "mild_sexuality_physical_exam_blush"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "体操服の胸元をめくられ、冷たい聴診器が素肌に触れる瞬間に息を呑む",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 3,
            "selfKnowledge": 2,
            "sexualEffects": {
              "libido": 1
            }
          },
          "narrative": "仕切りカーテンの奥、白衣を着た校医の先生の前に立つ。上着を少し持ち上げられ、冷たい金属の聴診器が胸のすぐ下にペタリと当てられた瞬間、ひやりとした刺激に小さく肩が跳ねた。「はい、息を吸って……吐いて」。先生の指示に従いながら、自分の激しい鼓動が金属を通して聞こえているのではないかと、恥ずかしさで首筋まで真っ赤に染まった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "身長計のバーが頭に当たる音に耳を澄ませ、伸びた背丈に小さく微笑む",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 3,
            "happiness": 3
          },
          "narrative": "背筋をぴんと伸ばして身長測定。昨年より3センチも伸びていて嬉しくなった。健康手帳に押されたスタンプを見つめ、自分が健やかに育っていることを実感した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 10,
  "max": 12,
  "p": 0.5,
  "once": true,
  "text": "新学期の恒例行事である身体測定と内科検診。体操服姿で並ぶ廊下。カーテンで仕切られた検診ブースから漏れ聞こえる先生の声。薄い布一枚を隔てて自分の素肌を診察される緊張感に、かすかな恥じらいが胸をよぎる。",
  "diary": [
    "内科検診。聴診器がひんやり当たった時、心臓がバクバク音を立てて先生に聞こえそうで恥ずかしかった。無事に異常なしでよかった。",
    "春の身体測定。身長が伸びていて嬉しい！ 友達と『何センチ伸びた？』って見せ合いっこした。"
  ],
  "classification": "daily"
});
