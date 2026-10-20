(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_park_stranger_swings",
  "title": "夕暮れ公園のブランコと知らないあの子",
  "description": "放課後の公園。ブランコに乗っていると、隣に見知らぬ他校の女の子が座った。どちらが高く空を蹴れるか、自然と競争が始まった。",
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
          72,
          120
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
    "unique_key": "elem_park_stranger_swings"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "「あの夕焼け雲まで届くかな！」と思い切り漕ぐ",
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
          "description": "「あの夕焼け雲まで届くかな！」と思い切り漕ぐ",
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
      "label": "ブランコを止めて、「何小学校？ 私はね…」とおしゃべりする",
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
          "description": "ブランコを止めて、「何小学校？ 私はね…」とおしゃべりする",
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
  "min": 6,
  "max": 10,
  "p": 0.7,
  "once": true,
  "text": "放課後の公園。ブランコに乗っていると、隣に見知らぬ他校の女の子が座った。どちらが高く空を蹴れるか、自然と競争が始まった。",
  "diary": [
    "公園で隣のブランコに乗った知らない女の子と、どっちが高く漕げるか競争した。空がオレンジ色で、風が気持ちよくて、名前も知らないのにずっと笑ってた。",
    "ブランコに揺られながら、他校の子とアニメや飼ってる犬の話をした。チャイムが鳴って「じゃあね！」って手を振って別れた。また会えるといいな。"
  ],
  "classification": "random"
});
