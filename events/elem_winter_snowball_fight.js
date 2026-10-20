(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_winter_snowball_fight",
  "title": "校庭の銀世界と手袋を濡らした雪合戦",
  "description": "朝起きたら一面の銀世界。登校するなり、手袋を真っ白に濡らしながら男子女子入り乱れての雪合戦が始まった。",
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
    "unique_key": "elem_winter_snowball_fight"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "雪玉をたくさん作って要塞に立てこもり、男子の突撃を迎え撃つ",
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
          "description": "雪玉をたくさん作って要塞に立てこもり、男子の突撃を迎え撃つ",
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
            },
            {
              "path": "skill.healthy_habits",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "親友と力を合わせて自分の背丈より大きな雪だるまを完成させる",
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
          "description": "親友と力を合わせて自分の背丈より大きな雪だるまを完成させる",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
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
  "min": 7,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "朝起きたら一面の銀世界。登校するなり、手袋を真っ白に濡らしながら男子女子入り乱れての雪合戦が始まった。",
  "diary": [
    "雪だるまの壁の後ろから男子に向かって雪玉を連射した！ 手が冷たくて真っ赤になったけど、男子が「降参！」って逃げていくのが面白くてたまらなかった。",
    "〇〇ちゃんと雪の玉をゴロゴロ転がして、自分の背より大きい雪だるまを作った。木の枝で手をつけて、みかんの皮で鼻をつけた。解けるのがもったいなかったな。"
  ],
  "classification": "daily"
});
