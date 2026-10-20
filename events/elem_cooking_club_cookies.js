(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_cooking_club_cookies",
  "title": "家庭科室の甘いバターの香りと型抜きクッキー",
  "description": "クラブ活動の家庭科室。白い三角巾とエプロンをつけて、小麦粉とバターをこねて型抜きクッキーをオーブンで焼く。",
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
    "unique_key": "elem_cooking_club_cookies"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "親友とお互いの顔をかたどったクッキーを焼いて交換する",
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
          "description": "親友とお互いの顔をかたどったクッキーを焼いて交換する",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
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
      "label": "綺麗に焼き上がったクッキーをラッピングして、担任の先生に届ける",
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
          "description": "綺麗に焼き上がったクッキーをラッピングして、担任の先生に届ける",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
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
  "text": "クラブ活動の家庭科室。白い三角巾とエプロンをつけて、小麦粉とバターをこねて型抜きクッキーをオーブンで焼く。",
  "diary": [
    "家庭科室中にバターの甘い匂いが充満した。〇〇ちゃんの顔のクッキーを焼いてプレゼントしたら「食べるのもったいない！」って言ってくれた。お菓子作り大好き。",
    "職員室にクッキーを持って行ったら、先生たちが「美味しい！」って笑顔で食べてくれた。誰かを笑顔にできるってすごく嬉しいことだな。"
  ],
  "classification": "daily"
});
