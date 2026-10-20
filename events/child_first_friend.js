(window.eventDefs = window.eventDefs || []).push({
  "id": "child_first_friend",
  "title": "放課後の秘密と特別な親友",
  "description": "帰り道の夕暮れ、二人でアイスを食べながら他愛ない秘密を明かし合う。家族にも言えない胸の内を打ち明けたとき、相手がまっすぐな瞳で見つめ返してくれた。",
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
          72,
          155
        ]
      }
    ]
  },
  "weight": {
    "base": 14,
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
    "unique_key": "child_first_friend"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "何でも話せる絆を育む",
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
          "description": "一緒に過ごす時間を増やし、何でも話せる絆を育む。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 6
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "history.flags.first_friend_accepted",
              "op": "record_flag",
              "value": true
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "程よい距離を保つ",
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
          "description": "お互いの時間も大切にしながら、程よい距離を保つ。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 6,
  "max": 12,
  "p": 0.14,
  "text": "帰り道の夕暮れ、二人でアイスを食べながら他愛ない秘密を明かし合う。家族にも言えない胸の内を打ち明けたとき、相手がまっすぐな瞳で見つめ返してくれた。",
  "diary": [
    "二人で秘密を共有したあの夕暮れの風の匂いを、今も鮮明に覚えている。",
    "親友ができた喜びを胸に抱きながら、一人の時間も静かに噛み締めた。"
  ],
  "classification": "daily"
});
