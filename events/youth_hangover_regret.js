(window.eventDefs = window.eventDefs || []).push({
  "id": "youth_hangover_regret",
  "title": "若気の至りと向き合う朝",
  "description": "かつて流されて酒を煽り、我を忘れて醜態を晒しかけた記憶が、苦い後悔として蘇る。あの危うい経験を経て、自制心と自分の守り方について深く考えさせられた。",
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
          192,
          275
        ]
      },
      {
        "path": "history.flags.choice_underage_drinking_2",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 30,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "youth_hangover_regret"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "自分の意志を貫く強さを持つ",
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
          "description": "過ちを反省し、自分の意志を貫く強さを持つ。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "慎重に振る舞う",
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
          "description": "後悔を胸にしまい、慎重に振る舞う。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "min": 16,
  "max": 22,
  "p": 0.3,
  "once": true,
  "text": "かつて流されて酒を煽り、我を忘れて醜態を晒しかけた記憶が、苦い後悔として蘇る。あの危うい経験を経て、自制心と自分の守り方について深く考えさせられた。",
  "alcohol": true,
  "allowUnderage": true,
  "classification": "daily"
});
