(window.eventDefs = window.eventDefs || []).push({
  "id": "teen_friend_fallout",
  "title": "冷え切った放課後とすれ違う心",
  "description": "昨日まで笑い合っていた親友との、些細なすれ違いや嫉妬。教室で目が合ってもすぐに逸らされ、胸の奥を鋭い刃物で裂かれるような冷たい痛みに、唇を噛みしめる。",
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
          156,
          239
        ]
      }
    ]
  },
  "weight": {
    "base": 8,
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
    "unique_key": "teen_friend_fallout"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "意地を捨てて放課後の教室で本音で話し合う",
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
          "description": "意地を捨てて放課後の教室で本音で話し合う。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
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
      "label": "しばらく静かに距離を置く",
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
          "description": "傷ついた心を落ち着かせるため、しばらく静かに距離を置く。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "min": 13,
  "max": 19,
  "p": 0.08,
  "text": "昨日まで笑い合っていた親友との、些細なすれ違いや嫉妬。教室で目が合ってもすぐに逸らされ、胸の奥を鋭い刃物で裂かれるような冷たい痛みに、唇を噛みしめる。",
  "diary": [
    "夕暮れの教室で涙を流しながら本音をぶつけ合った。雨降って地固まるように、二人の絆がより深いものになった。",
    "無理に歩み寄らず、一人の時間を過ごした。痛みを経験したことで、他人の心に寄り添う優しさを学んだ気がする。"
  ],
  "classification": "daily"
});
