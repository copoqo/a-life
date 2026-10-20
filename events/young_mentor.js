(window.eventDefs = window.eventDefs || []).push({
  "id": "young_mentor",
  "title": "頼れる先輩",
  "description": "仕事や学びの場で、助言をくれる人に出会った。",
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
          228,
          431
        ]
      }
    ]
  },
  "weight": {
    "base": 9,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "young_mentor"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "積極的に学ぶ",
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
          "description": "積極的に学ぶ。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 6
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "自分で試行錯誤する",
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
          "description": "自分で試行錯誤する。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 19,
  "max": 35,
  "p": 0.09,
  "once": true,
  "text": "仕事や学びの場で、助言をくれる人に出会った。",
  "diary": [
    "先輩の背中を見つめながら多くのことを吸収した。プロフェッショナルとしての誇りを学んだ。",
    "助言を受け止めつつも、自分の足で道を探した。試行錯誤の苦労が確かな自信になった。"
  ],
  "classification": "daily"
});
