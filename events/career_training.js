(window.eventDefs = window.eventDefs || []).push({
  "id": "career_training",
  "title": "学び直し",
  "description": "仕事に役立つ新しい知識を身につける機会があった。",
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
          240,
          707
        ]
      }
    ]
  },
  "weight": {
    "base": 11,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "career_training"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "講座に通う",
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
          "description": "講座に通う。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 8
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -40000
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
      "label": "独学で取り組む",
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
          "description": "独学で取り組む。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 20,
  "max": 58,
  "p": 0.11,
  "text": "仕事に役立つ新しい知識を身につける機会があった。",
  "diary": [
    "新しい知識を学ぶ高揚感。世界が広がっていくのを感じた。",
    "自分の力で理解を深めていった。地道な積み重ねが誇らしかった。"
  ],
  "classification": "daily"
});
