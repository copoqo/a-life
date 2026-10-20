(window.eventDefs = window.eventDefs || []).push({
  "id": "outing_art_museum",
  "title": "美術館の静けさ・美の迷宮",
  "description": "外の喧騒が嘘のように遮断された、静寂に包まれる美術館の館内。薄暗い照明の下、壁に掲げられた名画や彫刻の前に佇む。日常の雑音から解き放たれ、研ぎ澄まされた美の気配に五感が敏感になり、自らの内面と深く向き合う時間が流れる……。",
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
          180,
          1031
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
    "unique_key": "outing_art_museum"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "色彩と造形の奥深さに耽溺する",
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
          "description": "一枚の絵画の前にじっくりと立ち止まり、色彩と造形の奥深さに耽溺する。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "人の少ない奥の展示室へ足を進める",
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
          "description": "静けさと薄暗がりが感覚を鋭く研ぎ澄まし、人の少ない奥の展示室へ足を進める。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "rare_outing_secret_quickie",
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
      "label": "鑑賞の余韻に浸りながらお茶を飲む",
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
          "description": "ミュージアムカフェで図録をめくり、鑑賞の余韻に浸りながらお茶を飲む。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.mood",
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
    }
  ],
  "min": 15,
  "max": 85,
  "p": 0.16,
  "text": "外の喧騒が嘘のように遮断された、静寂に包まれる美術館の館内。薄暗い照明の下、壁に掲げられた名画や彫刻の前に佇む。日常の雑音から解き放たれ、研ぎ澄まされた美の気配に五感が敏感になり、自らの内面と深く向き合う時間が流れる……。",
  "diary": [
    "静かな展示室で名画と対峙した。画家の情熱と美しさに圧倒され、自分自身の美意識が深く刺激されるのを感じた。",
    "人影のまばらな薄暗い展示室の奥へ進んだ。足音すら響く静けさの中、張り詰めた空気に肌が粟立ち、不思議な背徳のざわめきを覚えた。",
    "カフェの窓から庭園を眺めながら、心穏やかな時間を過ごした。美しいものに触れて心が洗われたような一日だった。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
