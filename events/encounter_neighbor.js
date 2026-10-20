(window.eventDefs = window.eventDefs || []).push({
  "id": "encounter_neighbor",
  "title": "薄い壁の向こう、深夜の訪問と隣人の熱い体温",
  "description": "マンションの自室で過ごす夜。インターホンが鳴り、ドアを開けると少し酒気を帯びた隣人が立っていた。引越しの挨拶や生活音の相談から始まったはずの会話。玄関先で不意に距離が縮まり、生活感の漂う空間に濃密な淫靡さが立ち込める。",
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
          240,
          851
        ]
      }
    ]
  },
  "weight": {
    "base": 15,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "encounter_neighbor"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "薄い壁に声を押し殺しながら汗だくになって交わる",
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
          "description": "隣人を部屋へ招き入れ、薄い壁に声を押し殺しながら汗だくになって交わる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "sexual_desire_fluctuation",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "名残惜しさを感じつつも鍵を閉める",
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
          "description": "玄関先で用件だけを聞き終え、名残惜しさを感じつつも鍵を閉める。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "min": 20,
  "max": 70,
  "p": 0.15,
  "text": "マンションの自室で過ごす夜。インターホンが鳴り、ドアを開けると少し酒気を帯びた隣人が立っていた。引越しの挨拶や生活音の相談から始まったはずの会話。玄関先で不意に距離が縮まり、生活感の漂う空間に濃密な淫靡さが立ち込める。",
  "diary": [
    "隣の部屋の人を招き入れ、床の上に倒れ込んで身体を重ねた。壁一枚向こうはいつもの日常なのに、部屋の中では獣のように求め合い、愛液を散らして絶頂した。",
    "隣人との境界線が揺らぎかけた夜。ドアを閉めた後も、相手の体温と息遣いが玄関に残っているようで下腹が疼いた。"
  ],
  "outcomes": [
    "meeting_neighbor",
    "none"
  ],
  "classification": "daily"
});
