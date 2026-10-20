(window.eventDefs = window.eventDefs || []).push({
  "id": "encounter_colleague",
  "title": "バイト上がりの深夜、薄暗い休憩室の逢瀬",
  "description": "深夜のシフトが終わり、閉店後の静まり返った店内。着替えのために一人でいた休憩室に、職場の同僚が入ってきた。ロッカーの扉を閉めた瞬間、背後から抱きすくめられ、首筋に熱い吐息を吹きかけられる。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "coworker": {
      "source": "coworker",
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
          204,
          371
        ]
      }
    ]
  },
  "weight": {
    "base": 16,
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
    "unique_key": "encounter_colleague"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "制服を崩したまま下腹をまさぐり合う",
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
          "description": "ロッカーに身体を押し付けられ、制服を崩したまま下腹をまさぐり合う。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "encounter_colleague_after_hours",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "休憩室を出て夜風で火照りを冷ます",
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
          "description": "冗談めかして身体をすり抜け、休憩室を出て夜風で火照りを冷ます。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "min": 17,
  "max": 30,
  "p": 0.16,
  "text": "深夜のシフトが終わり、閉店後の静まり返った店内。着替えのために一人でいた休憩室に、職場の同僚が入ってきた。ロッカーの扉を閉めた瞬間、背後から抱きすくめられ、首筋に熱い吐息を吹きかけられる。",
  "diary": [
    "深夜のスタッフルームで制服をめくられ、壁に押し付けられたまま指を奥深くまでねじ込まれた。仕事場という日常の中での淫らな行為に、激しく興奮してしまった。",
    "同僚のたくましい腕に抱きしめられた瞬間の胸の高鳴り。危うく流されそうになった身体の熱さを、夜風で冷ましながら帰路についた。"
  ],
  "outcomes": [
    "meeting_colleague",
    "meeting_colleague"
  ],
  "classification": "major",
  "is_major": true
});
