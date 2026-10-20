(window.eventDefs = window.eventDefs || []).push({
  "id": "friends_story",
  "title": "友達の経験談",
  "description": "友達から恋愛や親密な関係の経験を聞き、自分の気持ちにも変化が生まれた。",
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
          180,
          311
        ]
      }
    ]
  },
  "weight": {
    "base": 20,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "friends_story"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "「へえ、そうなんだ」と適当に相槌を打って聞き流す",
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
          "description": "「へえ、そうなんだ」と適当に相槌を打って聞き流す。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "恥ずかしさに顔を赤らめ、慌てて別の話題に変えようとする",
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
          "description": "恥ずかしさに顔を赤らめ、慌てて別の話題に変えようとする。",
          "effects": [
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 8
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "興味津々で耳を傾け、話を聞いて自分の考えを深める",
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
          "description": "興味津々で耳を傾け、話を聞いて自分の考えを深める。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 15
            }
          ]
        }
      ]
    },
    {
      "id": "choice_3",
      "label": "「実は私も……」と自分の秘めた関心や悩みを打ち明けてみる",
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
          "description": "「実は私も……」と自分の秘めた関心や悩みを打ち明けてみる。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 20
            }
          ]
        }
      ]
    },
    {
      "id": "choice_4",
      "label": "相手の経験談をさらに深く詳しく掘り下げて聞き出してみる",
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
          "description": "相手の経験談をさらに深く詳しく掘り下げて聞き出してみる。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 30
            },
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 10
            }
          ]
        }
      ]
    }
  ],
  "min": 15,
  "max": 25,
  "p": 0.2,
  "once": true,
  "text": "友達から恋愛や親密な関係の経験を聞き、自分の気持ちにも変化が生まれた。",
  "sexualEffects": [
    {
      "desire": 10
    },
    {
      "desire": 10
    }
  ],
  "classification": "daily"
});
