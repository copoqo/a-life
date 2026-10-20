(window.eventDefs = window.eventDefs || []).push({
  "id": "mild_sexuality_pool_changing_room",
  "title": "初夏のプール開きと更衣室・友達の身体と自分の身体のちがい",
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
    "unique_key": "mild_sexuality_pool_changing_room"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "友達の丸みを帯びた体つきに思わず見とれ、自分の身体と見比べて微熱を覚える",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "curiosity": 3,
            "shyness": 2,
            "selfKnowledge": 2,
            "sexualEffects": {
              "libido": 2
            }
          },
          "narrative": "塩素の匂いが立ち込める蒸し暑い女子更衣室。濡れた紺色のスクール水着を脱ぎ捨てるクラスメイトたち。ふと隣を見ると、背の高い友達の胸が綺麗に膨らみ、くびれが大人びているのが目に入った。ジロジロ見てはいけないと思いつつ、白い肌の眩しさと自分との違いに胸がトクンと跳ね、下腹部にかすかな熱が走るのを自覚して慌ててタオルで前を隠した。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "手早くバスタオルを巻いて着替えを済ませ、友達と冷たいシャワーの寒さを笑い合う",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 2,
            "happiness": 3,
            "communication": 2
          },
          "narrative": "水着から体操服へ素早く着替え、友達と「今日の地獄のシャワー、冷たすぎたよね！」と笑い合った。夏の太陽の下で泳いだ爽快感に浸りながら、教室へと戻った。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 10,
  "max": 12,
  "p": 0.5,
  "once": true,
  "text": "梅雨明けのプール開き。湿気と塩素の匂いが充満する女子更衣室。紺色のスクール水着に着替える際、同級生たちの身体つきに少しずつ個人差が現れ始めていることに気づく。子供のままでいたい気持ちと、大人の身体へと移り変わる眩しさが交錯する空間。",
  "diary": [
    "水泳の後の更衣室。〇〇ちゃんの身体がすごく大人っぽくなっていて、思わず見ちゃった。同じ年なのに、女の子の身体って人によって全然違うんだなってドキドキした。",
    "プール上がりの着替え。タオルに包まりながら友達とふざけ合った。夏の水泳の授業はやっぱり楽しい。"
  ],
  "classification": "daily"
});
