(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_desire",
  "title": "季節の移ろいと疼く肉体の飢え",
  "description": "かつての淡い憧れとは違う、身体の芯から湧き上がるような重く濃密な性への渇望。下腹の奥深くがじくじくと熱を帯び、男の逞しい腕に乱暴に組み伏せられ、激しい水音を立てて突き上げられたいという抗いがたい衝動に身悶える……。",
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
    "base": 7,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_desire"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "情熱的な夜を貪るように求める",
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
          "description": "湧き上がる熱情をそのまま認め、情熱的な夜を貪るように求める。",
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
      "label": "疼きを鎮める",
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
          "description": "一人きりの部屋で静かに身体を慰め、疼きを鎮める。",
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
  "p": 0.065,
  "text": "かつての淡い憧れとは違う、身体の芯から湧き上がるような重く濃密な性への渇望。下腹の奥深くがじくじくと熱を帯び、男の逞しい腕に乱暴に組み伏せられ、激しい水音を立てて突き上げられたいという抗いがたい衝動に身悶える……。",
  "diary": [
    "身体の奥から突き上げる飢餓感に身を任せ、相手の首筋にしがみついて腰を激しく絡ませた。溢れ出る蜜でシーツを汚しながら果てる悦びに狂乱した。",
    "静かな夜、指先を湿った奥に沈め、自らの欲望の強さを確かめるように絶頂を迎えた。身体の奥深くに潜む情念の熱さにため息が漏れた。"
  ],
  "classification": "daily"
});
