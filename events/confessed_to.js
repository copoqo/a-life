(window.eventDefs = window.eventDefs || []).push({
  "id": "confessed_to",
  "title": "告白される",
  "description": "知り合いから好意を伝えられた。自分の気持ちはどうだろう。",
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
          431
        ]
      }
    ]
  },
  "weight": {
    "base": 24,
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
    "unique_key": "confessed_to"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "「ごめんなさい」と丁寧に断り、その場を離れる",
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
          "description": "「ごめんなさい」と丁寧に断り、その場を離れる。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "「まずは友達として仲良くしよう」と答える",
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
          "description": "「まずは友達として仲良くしよう」と答える。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "驚きつつも「少し考える時間をちょうだい」と伝える",
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
          "description": "驚きつつも「少し考える時間をちょうだい」と伝える。",
          "effects": [
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_3",
      "label": "照れながらも嬉しそうに頷き、交際を承諾する",
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
          "id": "outcome_3",
          "weight": 1,
          "description": "照れながらも嬉しそうに頷き、交際を承諾する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "first_romance_holding_hands",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_4",
      "label": "その場で手を取り、二人きりの場所へ移動して唇を重ねる",
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
          "id": "outcome_4",
          "weight": 1,
          "description": "その場で手を取り、二人きりの場所へ移動して唇を重ねる。",
          "effects": [
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 40
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "first_romance_holding_hands",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    }
  ],
  "min": 15,
  "max": 35,
  "p": 0.24,
  "text": "知り合いから好意を伝えられた。自分の気持ちはどうだろう。",
  "outcomes": [
    "meeting",
    "none",
    "none"
  ],
  "classification": "daily"
});
