(window.eventDefs = window.eventDefs || []).push({
  "id": "young_money",
  "title": "初めての大きな買い物",
  "description": "自分で稼いだお金の使い方を考えた。",
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
          419
        ]
      }
    ]
  },
  "weight": {
    "base": 12,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "young_money"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "将来に備えて貯める",
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
          "description": "将来に備えて貯める。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 50000
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "今の経験に使う",
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
          "description": "今の経験に使う。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": -50000
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "history.flags.first_big_purchase",
              "op": "record_flag",
              "value": true
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 34,
  "p": 0.12,
  "text": "自分で稼いだお金の使い方を考えた。",
  "diary": [
    "通帳の残高が増えていく安心感。自分の力で将来を守る基盤ができた。",
    "思い切って手に入れた経験が、私の世界を大きく広げてくれた。後悔のない選択だった。"
  ],
  "classification": "daily"
});
