(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_cram_school_steamed_bun",
  "title": "塾帰りの夜風と分け合った温かい肉まん",
  "description": "夜8時過ぎ、塾の授業が終わった。冷たい夜風が吹く駅前で、塾で仲良くなった友達と一緒にコンビニの湯気立つ肉まんを買った。",
  "content_rating": "general",
  "enabled": true,
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
          120,
          155
        ]
      }
    ]
  },
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "elem_cram_school_steamed_bun"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "肉まんを半分こにして、お互いの悩みを語り合いながら駅へ歩く",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "肉まんを半分こにして、お互いの悩みを語り合いながら駅へ歩く",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
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
      "label": "「次の模試、ふたりでクラスアップしようね！」と誓い合う",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "「次の模試、ふたりでクラスアップしようね！」と誓い合う",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 10,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "夜8時過ぎ、塾の授業が終わった。冷たい夜風が吹く駅前で、塾で仲良くなった友達と一緒にコンビニの湯気立つ肉まんを買った。",
  "diary": [
    "テストの後、駅前のコンビニで肉まんを買ってふたりで半分こした。「アツッ」って言いながらハフハフ食べた。夜の街を歩くの、ちょっと大人になったみたいでドキドキした。",
    "帰り道、街灯の下で「絶対ふたりで上のクラスに行こうね」って指切りした。ライバルだけど一番の親友。あの子がいるから頑張れる。"
  ],
  "classification": "daily"
});
