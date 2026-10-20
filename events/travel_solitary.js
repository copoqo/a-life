(window.eventDefs = window.eventDefs || []).push({
  "id": "travel_solitary",
  "title": "気ままな一人旅・知らない街のホテル",
  "description": "誰の気兼ねもなく、思いつきで切符を取った一人旅。見知らぬ街の路地や海辺を散策し、ご当地の美味しい料理とお酒を堪能する。ビジネスホテルの静かな部屋に戻り、一人きりのベッドに身を投げ出すと、旅先特有の孤独と甘美な解放感が素肌を撫でる……。",
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
          911
        ]
      }
    ]
  },
  "weight": {
    "base": 16,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "travel_solitary"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "読書や気ままな夜を満喫する",
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
          "description": "ホテルでゆっくり手足を伸ばし、読書や気ままな夜を満喫する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
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
      "label": "駅前の薄暗い居酒屋やバーへ繰り出す",
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
          "description": "夜風と酒の酔いに誘われ、駅前の薄暗い居酒屋やバーへ繰り出す。",
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
                "eventId": "rare_travel_stranger_or_gang",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "知らない街の夜景を窓から眺める",
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
          "description": "翌朝の計画を立てながら、知らない街の夜景を窓から眺める。",
          "effects": [
            {
              "path": "skill.knowledge",
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
  "min": 19,
  "max": 75,
  "p": 0.16,
  "text": "誰の気兼ねもなく、思いつきで切符を取った一人旅。見知らぬ街の路地や海辺を散策し、ご当地の美味しい料理とお酒を堪能する。ビジネスホテルの静かな部屋に戻り、一人きりのベッドに身を投げ出すと、旅先特有の孤独と甘美な解放感が素肌を撫でる……。",
  "diary": [
    "誰にも邪魔されないホテルの一夜。広いベッドでシーツの感触を素肌に味わいながら、自由であることの贅沢を噛み締めた。",
    "ほろ酔い加減で夜のネオン街を歩いた。見知らぬ土地の空気と、通りすがる男性たちの視線に、下腹が甘く疼くような背徳の高揚感を覚えた。",
    "窓の外に広がる見知らぬ街の灯りを見つめた。日常から遠く離れた場所で、これまでの自分とこれからの人生に静かに想いを馳せた。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
