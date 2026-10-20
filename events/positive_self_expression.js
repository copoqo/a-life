(window.eventDefs = window.eventDefs || []).push({
  "id": "positive_self_expression",
  "title": "自分らしい魅力を楽しむ",
  "description": "身だしなみや装いを通じて、自分らしさを表現したくなった。",
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
          911
        ]
      }
    ]
  },
  "weight": {
    "base": 16,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "positive_self_expression"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "好きな装いを試す",
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
          "description": "好きな装いを試す。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 2
            },
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
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "yearning_lingerie_fantasies",
                "delay": 1,
                "prob": 0.8
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "誰かと好みを語り合う",
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
          "description": "誰かと好みを語り合う。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 1
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -10000
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
      "label": "気負わず自然体で過ごす",
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
          "description": "気負わず自然体で過ごす。",
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
              "path": "skill.grooming",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 75,
  "p": 0.16,
  "text": "身だしなみや装いを通じて、自分らしさを表現したくなった。",
  "classification": "daily"
});
