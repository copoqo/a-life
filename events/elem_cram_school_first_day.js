(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_cram_school_first_day",
  "title": "駅前の進学塾と新しいノートの匂い",
  "description": "放課後、駅前の進学塾に通い始めた。学校とは違う少しピリッとした空気、黒板の大きな文字、新しいテキストの紙の匂い。",
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
          108,
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
    "unique_key": "elem_cram_school_first_day"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "一番前の席に座り、先生の解説を一言も漏らさずメモする",
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
          "description": "一番前の席に座り、先生の解説を一言も漏らさずメモする",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "隣の席の他校の女の子に「よろしくね」と声をかける",
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
          "description": "隣の席の他校の女の子に「よろしくね」と声をかける",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 9,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "放課後、駅前の進学塾に通い始めた。学校とは違う少しピリッとした空気、黒板の大きな文字、新しいテキストの紙の匂い。",
  "diary": [
    "今日から塾に通い始めた。学校よりも進みが早くて難しいけど、先生の教え方がすごくわかりやすい。ノートを色ペンで綺麗にまとめて、帰りの電車でも眺めちゃった。",
    "隣の席の〇〇ちゃんとお友達になった。隣の小学校の子で、すごく勉強ができる子。お互いにわからないところを教え合おうって約束した。"
  ],
  "classification": "daily"
});
