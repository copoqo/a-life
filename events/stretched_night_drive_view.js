(window.eventDefs = window.eventDefs || []).push({
  "id": "stretched_night_drive_view",
  "title": "深夜の埠頭・流れるネオンと助手席の革シートに沈む身体",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 204
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 239
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
    "unique_key": "stretched_night_drive_view"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "窓を少し開けて夜風を感じながら、大人だけの密閉された空間に浸る",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "romance": 3,
            "confidence": 3,
            "sexualEffects": {
              "libido": 2,
              "intimacy": 2
            },
            "bond": {
              "role": "senior",
              "status": "close",
              "gender": "male"
            }
          },
          "narrative": "少し年上の知り合いが運転する車の助手席。重厚なドアが閉まった瞬間、街の喧騒が遮断され、革シートの独特な匂いと静かな音楽だけが車内を満たす。首都高のカーブを抜けるたび、身体に心地よい遠心力がかかり、並んで座る相手の横顔が街灯の光に照らされる。子供の頃には知らなかった夜の東京の美しさと、助手席に座る資格を得たような優越感に息を呑んだ。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "緊張で身体が強張り、シートベルトをぎゅっと握りしめて前を見つめる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 3,
            "stress": 1,
            "selfKnowledge": 2
          },
          "narrative": "ふたりきりの密室という事実に心臓が激しく脈打ち、上手く会話が続けられない。「寒くない？」とエアコンを調整してくれる仕草にすらドキマギしてしまい、大人の恋愛の入口で立ち往生する自分を意識した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 17,
  "max": 19,
  "p": 0.5,
  "once": true,
  "text": "夜のドライブに誘われた。電車が止まる時間帯、きらめく夜景の向こうへと滑り出す車。日常の行動範囲を一気に飛び越え、大人の夜の世界へと連れ出されるスリルに心拍数が跳ね上がる。",
  "diary": [
    "夜のドライブに連れて行ってもらった。首都高から見える街の光がすごく綺麗で、映画のワンシーンみたいだった。",
    "車の助手席って、ふたりきりの距離が近くて緊張する。大人っぽい夜の空気に少し呑まれそうになった。"
  ],
  "classification": "daily"
});
