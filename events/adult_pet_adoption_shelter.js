(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_pet_adoption_shelter",
  "title": "保護猫との出会い・小さな命と始める温かい暮らし",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 288
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 720
      }
    ]
  },
  "weights": {
    "base": 22
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "adult_pet_adoption_shelter"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "譲渡会で目が合った保護猫を家族に迎え、大切に育てる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 6,
            "stress": -5,
            "morality": 3,
            "money": -2,
            "bond": {
              "role": "friend",
              "status": "close"
            }
          },
          "narrative": "動物愛護センターの譲渡会。ケージの隅からじっとこちらを見つめてきたトラ猫。家に迎えた最初の日は警戒していたけれど、数日後、膝の上に乗ってゴロゴロと喉を鳴らしてくれた瞬間、愛おしさが胸に溢れた。帰宅するたびに玄関で待ってくれる小さな温もりが、日々の生活を何倍も温かくしてくれた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ペット可の住環境を整え、キャットタワーとおもちゃを揃える",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 5,
            "independence": 2,
            "aesthetics": 2,
            "money": -3
          },
          "narrative": "部屋の安全対策を施し、陽当たりの良い窓際にキャットウォークを設置。元気に部屋中を駆け回り、窓辺で日向ぼっこする姿を眺めるだけで、日々の疲れが綺麗に溶けていくようだった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 24,
  "max": 60,
  "p": 0.35,
  "once": true,
  "text": "休日に訪れた保護動物の譲渡会。様々な事情で保護された犬や猫たち。その中の一匹とふと目が合い、命を預かり共に暮らす決意が胸に宿る。",
  "diary": [
    "我が家に猫ちゃんがやってきた！ 膝の上で丸くなって眠る小さな体温が愛おしくてたまらない。家の中がパッと明るくなった。",
    "ペットのいる暮らし。ただいまを言う相手がいるだけで、こんなにも毎日の幸福感が違うなんて知らなかった。"
  ],
  "classification": "daily"
});
