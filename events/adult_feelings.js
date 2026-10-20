(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_feelings",
  "title": "素肌の距離と告白への葛藤",
  "description": "肩が触れ合うほどの距離で並んで歩く夜道。相手の体温と香水の匂いが肌を撫で、手をつなぎたい、もっと奥深くまで触れ合いたいという衝動が喉まで出かかる。相手の気持ちはまだ見えない。",
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
          216,
          1031
        ]
      }
    ]
  },
  "weight": {
    "base": 11,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_feelings"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "熱い想いを打ち明ける",
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
          "description": "勇気を出して相手の袖を掴み、熱い想いを打ち明ける。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "first_date_milestone",
                "delay": 1,
                "prob": 0.9
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "少しずつ距離を縮めていく",
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
          "description": "焦らずに二人で夜風に吹かれ、少しずつ距離を縮めていく。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "言葉を飲み込む",
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
          "description": "今の居心地のいい関係を壊したくなくて、言葉を飲み込む。",
          "effects": [
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
  "min": 18,
  "max": 85,
  "p": 0.11,
  "text": "肩が触れ合うほどの距離で並んで歩く夜道。相手の体温と香水の匂いが肌を撫で、手をつなぎたい、もっと奥深くまで触れ合いたいという衝動が喉まで出かかる。相手の気持ちはまだ見えない。",
  "diary": [
    "「好きです」と口にした瞬間、心臓が口から飛び出そうだった。相手の驚いた表情と、その後に見せてくれた優しい瞳が夜闇の中で輝いていた。",
    "並んで歩きながら他愛ない話をした。触れ合いそうな指先の熱さに息を詰めながら、二人だけの夜を慈しんだ。",
    "言えなかった言葉を胸の奥にしまい込んだ。これでよかったのだと言い聞かせながら、冷えた手をポケットに深く差し入れた。"
  ],
  "outcomes": [
    "approach",
    "closer",
    "none"
  ],
  "classification": "daily"
});
