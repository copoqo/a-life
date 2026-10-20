(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_mismatched_desire",
  "title": "性欲の熱量差・求めと拒絶の痛み",
  "description": "今夜も激しく抱かれたくて愛液を滴らせている自分と、疲れて背中を向ける相手。あるいは相手の度重なる求めに身体が痛くて濡れず、応じられない苦痛。性欲の温度差が心を蝕む。",
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
    "base": 9,
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
    "unique_key": "adult_mismatched_desire"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "お互いの性欲の波やペースを優しくすり合わせる対話をする",
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
          "description": "お互いの性欲の波やペースを優しくすり合わせる対話をする。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "抱きしめ合うだけのスキンシップで満足する",
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
          "description": "無理に行為をせず、抱きしめ合うだけのスキンシップで満足する。",
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
      "label": "今後の関係のあり方を見直す",
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
          "description": "根本的な欲望の不一致を痛感し、今後の関係のあり方を見直す。",
          "effects": []
        }
      ]
    }
  ],
  "min": 18,
  "max": 85,
  "p": 0.09,
  "text": "今夜も激しく抱かれたくて愛液を滴らせている自分と、疲れて背中を向ける相手。あるいは相手の度重なる求めに身体が痛くて濡れず、応じられない苦痛。性欲の温度差が心を蝕む。",
  "diary": [
    "求められること、求めることのプレッシャーについて話し合った。性欲の違いを責め合わずに受け止める努力を始めた。",
    "挿入するだけが愛ではないと互いに納得し、素肌を寄せて温もりを確かめ合った。穏やかな安らぎに心が満たされた。",
    "どうしても埋まらない欲望の溝に、ため息が零れた。身体の飢えをどこへ向けるべきか、暗闇の中で天井を見つめた。"
  ],
  "outcomes": [
    "mutual_talk",
    "boundary",
    "reflection"
  ],
  "classification": "daily"
});
