(window.eventDefs = window.eventDefs || []).push({
  "id": "mild_sexuality_lingerie_fitting_adult",
  "title": "百貨店のランジェリーサロン・プロに測ってもらう正しいバストサイズ",
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
    "unique_key": "mild_sexuality_lingerie_fitting_adult"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "熟練フィッターの手でバストを美しく収めてもらい、劇的な谷間に息を呑む",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 5,
            "selfKnowledge": 4,
            "money": -5,
            "happiness": 4,
            "sexualEffects": {
              "libido": 2,
              "passion": 2
            }
          },
          "narrative": "百貨店の一角にある高級ランジェリーサロン。カーテンで仕切られた個室で、ベテランのフィッターさんに正しいサイズを計測してもらう。「背中やお肉をしっかりカップに集めますね」と、温かい手で胸を優しく持ち上げられ、ぴったりのブラを装着された。鏡を見た瞬間、自分の胸とは思えないほど美しいデコルテとくっきりとした谷間ができていて息を呑んだ。上質なシルクとレースに包まれた胸元に、大人の女性としての強い自信が湧き上がった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "着け心地と補正力を両立した上品なセットを選び、姿勢を美しく整える",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 4,
            "health": 2,
            "money": -4,
            "independence": 2
          },
          "narrative": "締め付け感がなく、自然に背筋が伸びる美しいインナーを選んだ。プロに見てもらったおかげで服を着た時のシルエットが格段に綺麗になり、歩く姿まで堂々とした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 20,
  "max": 30,
  "p": 0.5,
  "once": true,
  "text": "大人の女性として、正しい下着選びをしたいと訪れた専門店のフィッティングサロン。落ち着いた照明の試着室で、プロの手によって正確に計測され、完璧に補正される自らの身体のライン。",
  "diary": [
    "ランジェリーサロンでプロにフィッティングしてもらった！ 測り直したらサイズが上がっていてびっくり。正しい下着を着けると、こんなに綺麗に見えるんだって感動した。",
    "奮発して買った上質な下着。服を着た時のラインが全然違って、背筋がすっと伸びる。いい買い物をした！"
  ],
  "classification": "daily"
});
