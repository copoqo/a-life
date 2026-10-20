(window.eventDefs = window.eventDefs || []).push({
  "id": "young_living_alone",
  "title": "初めての一人暮らし",
  "description": "家族と離れて暮らすことを考える機会があった。",
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
          371
        ]
      }
    ]
  },
  "weight": {
    "base": 10,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "young_living_alone"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "一人暮らしを始める",
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
          "description": "一人暮らしを始める。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 7
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -70000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            },
            {
              "path": "history.flags.living_alone",
              "op": "record_flag",
              "value": true
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "今の住まいを続ける",
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
          "description": "今の住まいを続ける。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 30000
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 30,
  "p": 0.1,
  "text": "家族と離れて暮らすことを考える機会があった。",
  "diary": [
    "鍵を開けて入った自分だけの部屋。静けさの中に、自由と責任の重みが満ちていた。",
    "家族と暮らす安心感を選んだ。慣れ親しんだ食卓の温もりがありがたかった。"
  ],
  "classification": "daily"
});
