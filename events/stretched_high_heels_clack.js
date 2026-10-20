(window.eventDefs = window.eventDefs || []).push({
  "id": "stretched_high_heels_clack",
  "title": "休日の駅前通り・カツカツとアスファルトを鳴らす7センチヒール",
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
        "value": 227
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
    "unique_key": "stretched_high_heels_clack"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "少し痛むつま先に耐えながら、颯爽と歩く自分に自信を抱く",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "confidence": 4,
            "stress": 1
          },
          "narrative": "スニーカーを脱ぎ捨て、お小遣いを貯めて買ったエナメルのヒールパンプスで駅前の舗道を歩く。カツ、カツ、と硬質なリズムが街に響き、背筋とふくらはぎがキュッと引き締まる。目線がいつもより数センチ高く、ショーウィンドウに映る自分の歩き姿は大人の女性そのもの。足先の微かな痛みを我慢しながらも、誇らしさで胸がいっぱいになった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "靴擦れしてしまい、途中のベンチで絆創膏を貼りながら苦笑いする",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": -1,
            "selfKnowledge": 3,
            "happiness": 1
          },
          "narrative": "わずか30分歩いただけで踵が真っ赤に擦れ、公園のベンチで脱ぎ捨ててしまった。ストッキング越しにじんじんと痛む足先に絆創膏を貼りながら、大人になるのには痛みが伴うんだなと小さく呟いた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 16,
  "max": 18,
  "p": 0.5,
  "once": true,
  "text": "雑誌で見た洗練されたオフィスカジュアルに憧れ、思い切って手に入れた少し高めのヒールパンプス。履くだけで歩幅が狭くなり、腰の揺れが自然と大きくなるような不思議な緊張感がある。",
  "diary": [
    "初めてヒールのあるパンプスを履いてお出かけした。足が長く見えて嬉しかったけど、帰る頃には足が痛くて大変だった。",
    "ヒールの音ってすごく大人っぽい。歩き方を綺麗に練習して、いつか自然に履きこなせるようになりたい。"
  ],
  "classification": "daily"
});
