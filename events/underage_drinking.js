(window.eventDefs = window.eventDefs || []).push({
  "id": "underage_drinking",
  "title": "未成年飲酒への誘い",
  "description": "集まりで飲酒を勧められた。未成年の飲酒には健康上のリスクがあり、日本では法律で禁止されている。",
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
          180,
          239
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
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "underage_drinking"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "断って別の飲み物にする",
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
          "description": "断って別の飲み物にする。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "場を離れる",
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
          "description": "場を離れる。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "誘いに流されて飲んでしまう",
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
          "description": "誘いに流されて飲んでしまう。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": -10
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": -4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": -2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "youth_hangover_regret",
                "delay": 1,
                "prob": 0.95
              }
            }
          ]
        }
      ]
    }
  ],
  "min": 15,
  "max": 19,
  "p": 0.1,
  "once": true,
  "text": "集まりで飲酒を勧められた。未成年の飲酒には健康上のリスクがあり、日本では法律で禁止されている。",
  "alcohol": true,
  "allowUnderage": true,
  "classification": "daily"
});
