(window.eventDefs = window.eventDefs || []).push({
  "id": "travel_family",
  "title": "家族旅行・懐かしい団らん",
  "description": "日常の慌ただしさを離れ、家族揃って出かけた温泉地や観光名所。懐かしい思い出話に花を咲かせ、名物の料理を囲んで笑顔を交わす。家族の変わらぬ温もりと、流れる歳月の尊さをしみじみと噛み締めるひととき。",
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
          144,
          971
        ]
      }
    ]
  },
  "weight": {
    "base": 16,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "travel_family"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "思い出話をしながら団らんを楽しむ",
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
          "description": "家族の笑顔を写真に収め、思い出話をしながら団らんを楽しむ。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "家族みんなに喜んでもらう",
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
          "description": "観光名所を精力的に案内し、家族みんなに喜んでもらう。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "家族それぞれの健康と幸せを願う",
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
          "description": "静かな散策路を歩き、家族それぞれの健康と幸せを願う。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    }
  ],
  "min": 12,
  "max": 80,
  "p": 0.16,
  "text": "日常の慌ただしさを離れ、家族揃って出かけた温泉地や観光名所。懐かしい思い出話に花を咲かせ、名物の料理を囲んで笑顔を交わす。家族の変わらぬ温もりと、流れる歳月の尊さをしみじみと噛み締めるひととき。",
  "diary": [
    "久しぶりに家族みんなでゆっくり過ごした。他愛ない冗談に笑い合い、変わらない家族の温もりに心の底から癒された。",
    "旅程を調べたり食事の手配をしたりと活躍した。喜んでくれる家族の顔を見て、大人になった自分の成長を実感できた。",
    "日常では照れくさくて言えない感謝の気持ちを、旅の空気の中で素直に伝えることができた温かな一日だった。"
  ],
  "outcomes": [
    "shared_activity",
    "shared_activity",
    "reflection"
  ],
  "classification": "daily"
});
