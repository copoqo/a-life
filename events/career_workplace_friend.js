(window.eventDefs = window.eventDefs || []).push({
  "id": "career_workplace_friend",
  "title": "職場の仲間",
  "description": "仕事を通じて信頼できる仲間ができた。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
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
          264,
          791
        ]
      }
    ]
  },
  "weight": {
    "base": 12,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "career_workplace_friend"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "仕事以外でも交流する",
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
          "description": "仕事以外でも交流する。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "職場での関係を大切にする",
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
          "description": "職場での関係を大切にする。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    }
  ],
  "min": 22,
  "max": 65,
  "p": 0.12,
  "text": "仕事を通じて信頼できる仲間ができた。",
  "diary": [
    "仕事帰りに飲みに行って笑い合った。苦楽を共にする仲間の存在が心強かった。",
    "適度な距離感を保ちながら、互いにプロとして尊重し合える関係を築いた。"
  ],
  "classification": "daily"
});
