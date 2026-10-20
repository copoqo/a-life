(window.eventDefs = window.eventDefs || []).push({
  "id": "life_parenthood_question",
  "title": "自らの子宮の重みと未来へのまなざし",
  "description": "下腹にそっと手を当て、奥深くに眠る子宮の温もりを意識する。自らの身体で新しい命を宿し育むことの神秘と恐れ、あるいは一人の女として生き切ることの選択肢。内臓の奥がずっしりと重く脈打つのを感じる……。",
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
          264,
          587
        ]
      }
    ]
  },
  "weight": {
    "base": 8,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "life_parenthood_question"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "未来の家族像を考える",
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
          "description": "自らの身体と心の声に耳を澄まし、未来の家族像を考える。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "目の前にある自分の人生を精一杯生きる",
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
          "description": "今は結論を急がず、目の前にある自分の人生を精一杯生きる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 22,
  "max": 48,
  "p": 0.075,
  "text": "下腹にそっと手を当て、奥深くに眠る子宮の温もりを意識する。自らの身体で新しい命を宿し育むことの神秘と恐れ、あるいは一人の女として生き切ることの選択肢。内臓の奥がずっしりと重く脈打つのを感じる……。",
  "diary": [
    "下腹の温もりに手を当てながら、母となること、あるいは母とならない自分の未来を想像した。どんな選択であれ、私の身体の尊厳は揺るがない。",
    "周囲の期待やプレッシャーに流されず、自分の人生を生きようと心に決めた。胸の奥がすっきりと晴れ渡った。"
  ],
  "classification": "major",
  "is_major": true
});
