(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_library_nook_reading",
  "title": "陽だまりの図書室と古い物語の匂い",
  "description": "放課後の図書室。静かな空気と古い紙の匂い。窓際の陽だまりの席で、分厚いファンタジー小説の世界に吸い込まれるように読みふける。",
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
          84,
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
    "unique_key": "elem_library_nook_reading"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "図書委員の友達とカードを見せ合い、一番好きな本をおすすめし合う",
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
          "description": "図書委員の友達とカードを見せ合い、一番好きな本をおすすめし合う",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "物語の世界に刺激を受け、自由帳に自分だけの小説を書き始める",
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
          "description": "物語の世界に刺激を受け、自由帳に自分だけの小説を書き始める",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "min": 7,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "放課後の図書室。静かな空気と古い紙の匂い。窓際の陽だまりの席で、分厚いファンタジー小説の世界に吸い込まれるように読みふける。",
  "diary": [
    "図書室の窓際で〇〇ちゃんに勧められた長編小説を読んだ。ふたりで登場人物の絵を描いて栞を作った。静かで、宝物みたいな放課後の時間。",
    "読書が好きすぎて、自分でもお話を書き始めた。魔法使いの女の子が旅をする物語。時間を忘れてペンを動かしているときが一番幸せ。"
  ],
  "classification": "daily"
});
