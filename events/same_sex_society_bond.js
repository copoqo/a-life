(window.eventDefs = window.eventDefs || []).push({
  "id": "same_sex_society_bond",
  "title": "世間の視線と、二人だけの誓い",
  "description": "現代の日本において、同性同士で寄り添い生きることへの周囲の視線や制度の壁。それでも、手を取り合い、誰よりも互いの心と身体を深く愛し抜くことを誓い合う。二人だけの小さな部屋で、薬指に揃いの指輪を通し、静かに素肌を重ね合わせた。",
  "content_rating": "adult",
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
          671
        ]
      }
    ]
  },
  "weight": {
    "base": 12,
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
    "unique_key": "same_sex_society_bond"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "パートナーシップ制度や公正証書を結んで二人で歩む",
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
          "description": "世間に胸を張り、パートナーシップ制度や公正証書を結んで二人で歩む。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "二人だけの深い絆と蜜月を永遠に慈しみ合う",
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
          "description": "世間には秘密のまま、二人だけの深い絆と蜜月を永遠に慈しみ合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "min": 22,
  "max": 55,
  "p": 0.12,
  "text": "現代の日本において、同性同士で寄り添い生きることへの周囲の視線や制度の壁。それでも、手を取り合い、誰よりも互いの心と身体を深く愛し抜くことを誓い合う。二人だけの小さな部屋で、薬指に揃いの指輪を通し、静かに素肌を重ね合わせた。",
  "diary": [
    "誰に認められなくとも、この愛は本物。指輪を交わし、彼女の温かい身体を抱きしめた夜、涙が止まらなかった。",
    "世間の常識に囚われず、私たちだけの愛の形を選んだ。抱き合って互いの肌の温もりを確かめる時間が、何よりも尊い。"
  ],
  "classification": "daily"
});
