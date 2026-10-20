(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_relationship_growth",
  "title": "深まりゆく絆と熟成する夜",
  "description": "年月を重ねるにつれ、最初の激しい興奮から、互いの身体の隅々まで知り尽くした深い安心感と濃厚な快楽へと変化していく。阿吽の呼吸で肌を寄せ合う幸福。",
  "content_rating": "general",
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
          216,
          1031
        ]
      }
    ]
  },
  "weight": {
    "base": 14,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_relationship_growth"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "ゆっくりと時間をかけて交わる",
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
          "description": "互いの身体を慈しむように、ゆっくりと時間をかけて交わる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "たまには新しい刺激やシチュエーションを二人で試してみる",
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
          "description": "たまには新しい刺激やシチュエーションを二人で試してみる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "穏やかな会話とスキンシップだけで満ち足りた夜を過ごす",
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
          "id": "outcome_2",
          "weight": 1,
          "description": "穏やかな会話とスキンシップだけで満ち足りた夜を過ごす。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 85,
  "p": 0.14,
  "text": "年月を重ねるにつれ、最初の激しい興奮から、互いの身体の隅々まで知り尽くした深い安心感と濃厚な快楽へと変化していく。阿吽の呼吸で肌を寄せ合う幸福。",
  "diary": [
    "言葉がなくても、どこをどう愛撫されたいのか手が勝手に知っている。熟成されたワインのように濃密な夜を堪能した。",
    "いつもと違う場所や香りを試してみた。照れ笑いしながらも、新鮮な興奮に下腹が熱く濡れた。",
    "ただ寄り添ってテレビを見ているだけで幸せだった。性愛を超えた深い絆が、二人を優しく包んでいた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_activity",
    "mutual_talk"
  ],
  "classification": "daily"
});
