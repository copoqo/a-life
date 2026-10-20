(window.eventDefs = window.eventDefs || []).push({
  "id": "career_burnout",
  "title": "働きすぎの兆し",
  "description": "最近、仕事の疲れが抜けにくくなった。",
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
          288,
          755
        ]
      }
    ]
  },
  "weight": {
    "base": 9,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "career_burnout"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "働き方を調整する",
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
          "description": "働き方を調整する。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -6
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "休暇を取る",
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
          "description": "休暇を取る。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -30000
            }
          ]
        }
      ]
    }
  ],
  "min": 24,
  "max": 62,
  "p": 0.09,
  "text": "最近、仕事の疲れが抜けにくくなった。",
  "diary": [
    "無理を重ねるのをやめ、仕事のペースを落とした。心身の健やかさが何よりの資本だと痛感した。",
    "温泉に出かけて思い切り羽を伸ばした。凝り固まった肩と心がすっかり解けた。"
  ],
  "classification": "daily"
});
