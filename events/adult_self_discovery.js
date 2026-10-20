(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_self_discovery",
  "title": "夜の静寂と自らの愛欲の輪郭",
  "description": "一人きりの寝室、薄いシーツの擦れる感触を素肌に味わいながら、自分がどのような愛撫を望み、どのような熱情で抱かれたいのかを自問する。恥じらいの奥に隠された、生々しく熱い雌としての欲求の形を静かに見つめ直す。",
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
          216,
          911
        ]
      }
    ]
  },
  "weight": {
    "base": 9,
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
    "unique_key": "adult_self_discovery"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "欲求の形を整理する",
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
          "description": "シーツに身を沈めて身体の奥の疼きを確かめ、欲求の形を整理する。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "自らの本当の好みを言葉にして伝える",
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
          "description": "信頼できる親密な相手に、自らの本当の好みを言葉にして伝える。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 75,
  "p": 0.09,
  "text": "一人きりの寝室、薄いシーツの擦れる感触を素肌に味わいながら、自分がどのような愛撫を望み、どのような熱情で抱かれたいのかを自問する。恥じらいの奥に隠された、生々しく熱い雌としての欲求の形を静かに見つめ直す。",
  "diary": [
    "肌に触れる空気の冷たさと、下腹の奥の湿った熱さ。自分が本当に快感を感じるポイントや望むシチュエーションを反芻し、自らの性を受け入れた。",
    "恥ずかしさに頬を赤らめながらも、自分が求めている触れられ方を相手に伝えた。受け止めてもらえた安堵感に、身体の強張りが解けた。"
  ],
  "classification": "daily"
});
