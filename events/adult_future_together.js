(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_future_together",
  "title": "一緒に暮らす未来",
  "description": "交際相手との将来の暮らし方が話題になった。",
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
          276,
          971
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
    "base": 9,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_future_together"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "具体的な希望を話し合う",
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
          "description": "具体的な希望を話し合う。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "今の関係を大切にする",
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
          "description": "今の関係を大切にする。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 23,
  "max": 80,
  "p": 0.085,
  "text": "交際相手との将来の暮らし方が話題になった。",
  "outcomes": [
    "mutual_talk",
    "shared_activity"
  ],
  "classification": "daily"
});
