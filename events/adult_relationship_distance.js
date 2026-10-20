(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_relationship_distance",
  "title": "冷たいシーツと二人のすれ違い",
  "description": "交際相手と抱き合う頻度が減り、同じ部屋にいてもどこか遠く感じる日々。手を伸ばしても届かない距離感に、下腹の奥が切なく疼き、胸が寂しさで冷えてゆく。",
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
    "base": 12,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_relationship_distance"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "抱きしめてもらう",
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
          "description": "すれ違いの寂しさを素直に伝え、抱きしめてもらう。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "自らの趣味や仕事に没頭する",
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
          "description": "一人の夜を受け入れ、自らの趣味や仕事に没頭する。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
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
      "id": "choice_2",
      "label": "交際に終止符を打つ",
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
          "description": "心が離れてしまったことを認め、交際に終止符を打つ。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
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
  "p": 0.12,
  "text": "交際相手と抱き合う頻度が減り、同じ部屋にいてもどこか遠く感じる日々。手を伸ばしても届かない距離感に、下腹の奥が切なく疼き、胸が寂しさで冷えてゆく。",
  "diary": [
    "「もっと触れ合いたい」と涙ながらに伝えると、力強く抱きしめ返してくれた。二人の距離が再びゼロになった。",
    "相手に依存しすぎず、一人の時間を楽しむ強さを身につけた。自立した大人の女としての落ち着きを得た。",
    "冷え切った関係に別れを告げた。一人きりの部屋の広さに寂しさを感じつつも、新しい明日へ向かう清々しさがあった。"
  ],
  "outcomes": [
    "mutual_talk",
    "distance",
    "breakup"
  ],
  "classification": "daily"
});
