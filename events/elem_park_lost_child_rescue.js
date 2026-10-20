(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_park_lost_child_rescue",
  "title": "砂場で泣いていた小さな男の子と交番",
  "description": "公園の片隅で、小さな男の子が「ママがいない」としゃくりあげていた。大人は誰も気づいていない。",
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
    "unique_key": "elem_park_lost_child_rescue"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "目線を合わせて頭をなで、「お姉ちゃんと一緒に探そう」と手を引く",
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
          "description": "目線を合わせて頭をなで、「お姉ちゃんと一緒に探そう」と手を引く",
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
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "すぐ近くの交番に連れて行き、お巡りさんに説明する",
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
          "description": "すぐ近くの交番に連れて行き、お巡りさんに説明する",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 1
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 8,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "公園の片隅で、小さな男の子が「ママがいない」としゃくりあげていた。大人は誰も気づいていない。",
  "diary": [
    "泣いてる小さい子の手を引いてお母さんを探した。見つかったとき、お母さんが泣いて「ありがとう」って言ってくれて、私の胸もじんわり温かくなった。",
    "交番のお巡りさんに事情を話して保護してもらった。お巡りさんに「偉いね、お姉ちゃん」って飴ちゃんをもらって、ちょっと照れくさかった。"
  ],
  "classification": "daily"
});
