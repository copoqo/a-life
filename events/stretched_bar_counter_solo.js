(window.eventDefs = window.eventDefs || []).push({
  "id": "stretched_bar_counter_solo",
  "title": "雑居ビルの地下・重厚な木のカウンターで傾ける琥珀色のグラス",
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
        "value": 299
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
    "unique_key": "stretched_bar_counter_solo"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "バーテンダーに好みを伝え、静かにカクテルを味わう大人の時間を満喫する",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "independence": 4,
            "aesthetics": 3,
            "confidence": 3,
            "stress": -2,
            "bond": {
              "role": "bar_encounter",
              "status": "acquaintance",
              "gender": "male"
            }
          },
          "narrative": "一枚板の重厚なカウンターに腰掛け、「柑橘系でさっぱりしたショートカクテルを」と静かに注文。シェイカーを振るリズミカルな氷の音、薄張りのカクテルグラスに注がれる淡いエメラルドグリーンの液体。冷たいグラスに唇を触れ、アルコールの刺激が喉を通り抜ける時、居酒屋の喧騒とは違う、洗練された静寂をひとりで嗜む大人の贅沢に心が満たされた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "アルコール度数の高さに喉がカッと熱くなり、チェイサーを交互に飲む",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "selfKnowledge": 3,
            "happiness": 2,
            "stress": -1
          },
          "narrative": "思っていた以上に強いお酒に胃がポカポカと温まり、少し身体が軽くなる。バーテンダーの気遣いある柔らかな会話に癒やされ、一人で過ごす夜の居場所をひとつ見つけたような安らぎを覚えた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 20,
  "max": 24,
  "p": 0.5,
  "once": true,
  "text": "ずっと憧れていた、大人だけが集うオーセンティックなバーの扉。重い木製のドアを押し開けると、間接照明に照らされた無数のウイスキーボトルと静謐なジャズが迎えてくれた。",
  "diary": [
    "初めてひとりでバーに行った。薄暗い店内でカクテルを飲む時間、すごく落ち着いていて大人になった実感があった。",
    "バーのカウンターで美味しいお酒を飲んだ。背筋がスッと伸びるような、素敵な大人の空間だった。"
  ],
  "classification": "daily"
});
