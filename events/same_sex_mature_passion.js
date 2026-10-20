(window.eventDefs = window.eventDefs || []).push({
  "id": "same_sex_mature_passion",
  "title": "円熟した身体、貪り合う女同士の蜜夜",
  "description": "年齢を重ね、若さという張りを越えて豊潤に熟れた大人の女の身体。どこを愛撫すれば一番敏感に濡れそぼるかを互いに知り尽くした関係で、熟成したワインのように濃厚な愛撫を交わす。しっとりと汗ばむ素肌に顔を埋め、淫らな匂いに包まれながら夜が更けていく。",
  "content_rating": "adult",
  "enabled": true,
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.alive",
        "op": "eq",
        "value": true
      },
      {
        "path": "person.age_months",
        "op": "between",
        "value": [
          420,
          791
        ]
      }
    ]
  },
  "weight": {
    "base": 13,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "state.current_libido",
          "op": "gte",
          "value": 30
        },
        "factor": 1.5
      }
    ]
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "same_sex_mature_passion"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "奥の奥まで舌を差し入れて愛液を啜る",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": [
          {
            "path": "display.confidence",
            "coefficient": 0.01
          }
        ]
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "熟れた秘唇を丹念に舌先で舐めほぐし、奥の奥まで舌を差し入れて愛液を啜る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "じっくりと時間をかけて深い絶頂を重ね合う",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": [
          {
            "path": "display.confidence",
            "coefficient": 0.01
          }
        ]
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "互いのふくよかな腰を抱き寄せ、じっくりと時間をかけて深い絶頂を重ね合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    }
  ],
  "min": 35,
  "max": 65,
  "p": 0.13,
  "text": "年齢を重ね、若さという張りを越えて豊潤に熟れた大人の女の身体。どこを愛撫すれば一番敏感に濡れそぼるかを互いに知り尽くした関係で、熟成したワインのように濃厚な愛撫を交わす。しっとりと汗ばむ素肌に顔を埋め、淫らな匂いに包まれながら夜が更けていく。",
  "diary": [
    "若い頃よりもずっと深く、濃密に身体が疼く。彼女の熟れた肌の匂いと温もりに包まれて、一晩中何度も果てた。",
    "大人の女同士だからこそ辿り着ける極上の快楽。お互いの身体を慈しみ合う時間に、心も肉体も満ち足りた。"
  ],
  "classification": "daily"
});
