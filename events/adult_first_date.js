(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_first_date",
  "title": "二人で出かける約束",
  "description": "親しい相手と、二人で時間を過ごすことになった。",
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
    "base": 11,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_first_date"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "気持ちを伝えながら楽しむ",
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
          "description": "気持ちを伝えながら楽しむ。",
          "effects": [
            {
              "path": "state.mood",
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
    },
    {
      "id": "choice_1",
      "label": "気負わず会話を楽しむ",
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
          "description": "気負わず会話を楽しむ。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
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
  "min": 18,
  "max": 75,
  "p": 0.11,
  "text": "親しい相手と、二人で時間を過ごすことになった。",
  "outcomes": [
    "shared_activity",
    "mutual_talk"
  ],
  "classification": "daily"
});
