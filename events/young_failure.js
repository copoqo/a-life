(window.eventDefs = window.eventDefs || []).push({
  "id": "young_failure",
  "title": "思いどおりにいかない日",
  "description": "努力してきたことが期待した結果につながらなかった。",
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
          431
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
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "young_failure"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "原因を振り返る",
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
          "description": "原因を振り返る。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "少し休む",
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
          "description": "少し休む。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 35,
  "p": 0.09,
  "once": true,
  "text": "努力してきたことが期待した結果につながらなかった。",
  "diary": [
    "悔しさに唇を噛みしめながら、敗因をノートに書き留めた。この挫折が私を強くしてくれるはずだ。",
    "温かいお風呂に入って泥のように眠った。休むことも人生の大事な知恵だと知った。"
  ],
  "classification": "daily"
});
