(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_shared_intimacy",
  "title": "夜の逢瀬・求め合う肉体の熱情",
  "description": "閉じられた寝室、互いに剥き出しの身体を擦り合わせ、吐息を絡ませる。愛液に濡れそぼった秘所と熱く硬くなった肉塊が触れ合い、身体の奥深くまで貪り合いたい欲望が臨界に達する。",
  "content_rating": "adult",
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
          216,
          1031
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
    "base": 11,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "state.current_libido",
          "op": "gte",
          "value": 30
        },
        "factor": 1.5
      }
    ]
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_shared_intimacy"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "奥深くまで突き挿れてほしいとねだる",
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
          "description": "乱れる吐息のまま、奥深くまで突き挿れてほしいとねだる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "adult_intimacy_reflection",
                "delay": 1,
                "prob": 0.85
              }
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "敏感な肌を這う舌と指先の感触を焦らしながら楽しむ",
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
          "description": "敏感な肌を這う舌と指先の感触を焦らしながら楽しむ。",
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
      "id": "choice_2",
      "label": "ただ抱き締め合って眠りたいと伝える",
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
          "description": "今夜は身体を繋げず、ただ抱き締め合って眠りたいと伝える。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 85,
  "p": 0.11,
  "text": "閉じられた寝室、互いに剥き出しの身体を擦り合わせ、吐息を絡ませる。愛液に濡れそぼった秘所と熱く硬くなった肉塊が触れ合い、身体の奥深くまで貪り合いたい欲望が臨界に達する。",
  "sexualEffects": [
    {
      "boundaryVoice": 3,
      "selfKnowledge": 3
    },
    {
      "selfAcceptance": 2
    },
    {
      "boundaryVoice": 5
    }
  ],
  "outcomes": [
    "shared_intimacy",
    "mutual_talk",
    "boundary"
  ],
  "classification": "major",
  "is_major": true
});
