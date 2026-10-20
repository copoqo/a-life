(window.eventDefs = window.eventDefs || []).push({
  "id": "retirement",
  "title": "老後の暮らし",
  "description": "これからの時間の使い方を考える節目になった。",
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
          780,
          791
        ]
      }
    ]
  },
  "weight": {
    "base": 100,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "retirement"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "地域や趣味の活動を始める",
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
          "description": "地域や趣味の活動を始める。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 7
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "静かな暮らしを楽しむ",
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
          "description": "静かな暮らしを楽しむ。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -5
            }
          ]
        }
      ]
    }
  ],
  "min": 65,
  "max": 65,
  "p": 1,
  "once": true,
  "text": "これからの時間の使い方を考える節目になった。",
  "classification": "daily"
});
