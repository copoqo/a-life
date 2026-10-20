(window.eventDefs = window.eventDefs || []).push({
  "id": "career_unemployment",
  "title": "仕事を失う不安",
  "description": "職場の事情で働き方を見直す必要が生じた。",
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
          264,
          755
        ]
      }
    ]
  },
  "weight": {
    "base": 5,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "career_unemployment"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "突然のことに呆然とし、しばらく部屋で現実逃避する",
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
          "description": "突然のことに呆然とし、しばらく部屋で現実逃避する。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "公的な支援制度や失業手当の手続きを冷静に調べる",
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
          "description": "公的な支援制度や失業手当の手続きを冷静に調べる。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "career_unemployment_followup",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "転職サイトや求人票をチェックし、次の仕事を探し始める",
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
          "description": "転職サイトや求人票をチェックし、次の仕事を探し始める。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "career_unemployment_followup",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_3",
      "label": "信頼できる同僚や先輩に連絡を取り、人脈を頼って情報を集める",
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
          "description": "信頼できる同僚や先輩に連絡を取り、人脈を頼って情報を集める。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "career_unemployment_followup",
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
      "label": "これを好機と捉え、大学での学び直しや独立起業の準備を始める",
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
          "description": "これを好機と捉え、大学での学び直しや独立起業の準備を始める。",
          "effects": [
            {
              "path": "history.flags.aspires_higher_education",
              "op": "set",
              "value": true
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 5
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "career_unemployment_followup",
                "delay": 1,
                "prob": 1
              }
            }
          ]
        }
      ]
    }
  ],
  "min": 22,
  "max": 62,
  "p": 0.045,
  "text": "職場の事情で働き方を見直す必要が生じた。",
  "diary": [
    "不安で押しつぶされそうになりながらも、履歴書を書いた。私の道は一つだけではないはずだ。",
    "公的な制度を調べて相談窓口へ向かった。社会のセーフティネットに心強さを覚えた。"
  ],
  "classification": "major",
  "is_major": true
});
