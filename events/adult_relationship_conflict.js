(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_relationship_conflict",
  "title": "夜の営みの不一致と心のすれ違い",
  "description": "自分はもっと激しく乱暴に抱かれたいのに相手は淡白だったり、逆に身体だけの関係に疲弊したり。肌を合わせるたびに生じる感覚のズレが、次第に二人の間に冷たい溝を作っていく。",
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
    "base": 8,
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
    "unique_key": "adult_relationship_conflict"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "寝室での不満と自らの本当の欲望を涙ながらにぶつけ合う",
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
          "description": "寝室での不満と自らの本当の欲望を涙ながらにぶつけ合う。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "少し距離を置いて冷却期間を置く",
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
          "description": "身体の相性の不一致を受け止め、少し距離を置いて冷却期間を置く。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "関係を解消する",
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
          "description": "肉体と心が満たされない苦痛に耐えかね、関係を解消する。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 85,
  "p": 0.075,
  "text": "自分はもっと激しく乱暴に抱かれたいのに相手は淡白だったり、逆に身体だけの関係に疲弊したり。肌を合わせるたびに生じる感覚のズレが、次第に二人の間に冷たい溝を作っていく。",
  "diary": [
    "ベッドの上でお互いの性的な不満を本音で話し合った。気まずかったけれど、触れ合いのあり方を見直す大きな契機になった。",
    "無理に身体を重ねるのをやめ、一人で過ごす時間を作った。身体の疼きと心の距離を冷静に見つめ直した。",
    "愛していても身体の相性が合わない苦しさに耐えきれず、別れを選んだ。女として生きる上で、性の一致は譲れないのだと痛感した。"
  ],
  "outcomes": [
    "mutual_talk",
    "distance",
    "breakup"
  ],
  "classification": "daily"
});
