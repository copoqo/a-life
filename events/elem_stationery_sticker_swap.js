(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_stationery_sticker_swap",
  "title": "放課後のシール交換と秘密のプロフィール帳",
  "description": "放課後の教室。机いっぱいに広げたシール帳。ぷくぷくシールやタイルシールを1枚ずつ交換し、プロフィール帳を渡し合う。",
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
          96,
          143
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
    "unique_key": "elem_stationery_sticker_swap"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "一番お気に入りのキラキラシールを親友にプレゼントする",
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
          "description": "一番お気に入りのキラキラシールを親友にプレゼントする",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "プロフィール帳の「好きな人」欄に『ひみつ♡』と書いて渡す",
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
          "description": "プロフィール帳の「好きな人」欄に『ひみつ♡』と書いて渡す",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
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
  "min": 8,
  "max": 11,
  "p": 0.7,
  "once": true,
  "text": "放課後の教室。机いっぱいに広げたシール帳。ぷくぷくシールやタイルシールを1枚ずつ交換し、プロフィール帳を渡し合う。",
  "diary": [
    "大切にしてたラメ入りのシールを〇〇ちゃんにあげたら、ものすごく喜んでくれて、お返しに可愛いメモ帳をくれた。物より気持ちが通じ合えたのが嬉しかった。",
    "プロフ帳の好きな人の欄、誰もいないのに思わせぶりに「ひみつ」って書いたら、放課後みんなに質問攻めに遭って大騒ぎになった。女子トークって本当に楽しい。"
  ],
  "classification": "daily"
});
