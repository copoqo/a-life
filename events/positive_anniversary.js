(window.eventDefs = window.eventDefs || []).push({
  "id": "positive_anniversary",
  "title": "二人の記念日",
  "description": "交際相手との時間を振り返り、嬉しかった出来事を思い出した。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
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
          1091
        ]
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 14,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "positive_anniversary"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "一緒にお祝いする",
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
          "description": "一緒にお祝いする。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "思い出を語り合う",
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
          "description": "思い出を語り合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 1
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "普段どおりの時間を大切にする",
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
          "description": "普段どおりの時間を大切にする。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 90,
  "p": 0.14,
  "text": "交際相手との時間を振り返り、嬉しかった出来事を思い出した。",
  "outcomes": [
    "shared_activity",
    "mutual_talk",
    "shared_activity"
  ],
  "classification": "daily"
});
