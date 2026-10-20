(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_secret_base_shrine",
  "title": "神社の裏山とダンボールの秘密基地",
  "description": "近所の神社の裏手、生い茂る木々の隙間にダンボールと小枝を集めて、親友とふたりだけの「秘密基地」を作った。",
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
    "unique_key": "elem_secret_base_shrine"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "綺麗な小石やドングリを並べて「秘密の宝物庫」を作る",
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
          "description": "綺麗な小石やドングリを並べて「秘密の宝物庫」を作る",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "「基地の掟」を紙に書いて、指切りげんまんで秘密を誓い合う",
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
          "description": "「基地の掟」を紙に書いて、指切りげんまんで秘密を誓い合う",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
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
  "min": 8,
  "max": 11,
  "p": 0.7,
  "once": true,
  "text": "近所の神社の裏手、生い茂る木々の隙間にダンボールと小枝を集めて、親友とふたりだけの「秘密基地」を作った。",
  "diary": [
    "神社の裏に作った秘密基地。拾ってきた綺麗なガラスの破片と木の実を並べた。ここは大人の誰も知らない、私たちだけの世界。",
    "「この場所は絶対に男子にも親にも秘密にすること」。ノートの切れ端に書いて、指切りした。小指の温もりがなんだか誇らしかった。"
  ],
  "classification": "daily"
});
