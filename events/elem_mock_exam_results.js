(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_mock_exam_results",
  "title": "週末の模擬試験と貼り出された成績上位者",
  "description": "週末に受けた大きな模試の結果が返ってきた。塾の廊下の掲示板に貼り出された名前と、手元の成績表の偏差値。",
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
    "unique_key": "elem_mock_exam_results"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "間違えた問題をノートに赤ペンで徹底的に解き直す",
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
          "description": "間違えた問題をノートに赤ペンで徹底的に解き直す",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
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
      "label": "上がった偏差値の成績表を家に持ち帰り、家族に見せる",
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
          "description": "上がった偏差値の成績表を家に持ち帰り、家族に見せる",
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
    }
  ],
  "min": 10,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "週末に受けた大きな模試の結果が返ってきた。塾の廊下の掲示板に貼り出された名前と、手元の成績表の偏差値。",
  "diary": [
    "模試で惜しくも間違えた問題を、夜遅くまで解き直した。最初は悔しかったけど、解き方がわかった瞬間すごくスッキリした。努力は裏切らない。",
    "成績表を見せたら、お母さんが「頑張ったね！」って抱きしめてくれて、夜ご飯に大好物のハンバーグを作ってくれた。嬉しくてちょっと泣きそうだった。"
  ],
  "classification": "daily"
});
