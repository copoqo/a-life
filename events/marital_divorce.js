(window.eventDefs = window.eventDefs || []).push({
  "id": "marital_divorce",
  "title": "夫婦の破綻・離婚届",
  "description": "重なり合ったすれ違いや信頼の喪失。かつて誓い合った配偶者との関係に、終止符を打つ決断を迫られる。",
  "content_rating": "general",
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
          300,
          971
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
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "marital_divorce"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "それぞれの道を歩む",
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
          "description": "離婚届に判を押し、それぞれの道を歩む。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 6
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "夫婦で徹底的に話し合う",
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
          "description": "もう一度やり直すため、夫婦で徹底的に話し合う。",
          "effects": [
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
  "min": 25,
  "max": 80,
  "p": 0.08,
  "text": "重なり合ったすれ違いや信頼の喪失。かつて誓い合った配偶者との関係に、終止符を打つ決断を迫られる。",
  "diary": [
    "離婚届に署名と捺印をした。左手から指輪を外した瞬間、寂しさと同時に、どこか肩の荷が下りたような風が吹き抜けた。",
    "壊れかけた関係を修復するため、お互いの本音を涙ながらにぶつけ合った。ここからまた少しずつ歩み寄りたい。"
  ],
  "outcomes": [
    "divorce",
    "mutual_talk"
  ],
  "classification": "major",
  "is_major": true
});
