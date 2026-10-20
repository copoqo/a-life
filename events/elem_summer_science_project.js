(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_summer_science_project",
  "title": "模造紙いっぱいの夏休み自由研究",
  "description": "夏休みの自由研究。模造紙とカラーペンを広げ、図書館で調べたことや近所の川で観察した生き物の記録をまとめる。",
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
    "unique_key": "elem_summer_science_project"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "植物や昆虫の精密なスケッチを描き、分類表を作る",
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
          "description": "植物や昆虫の精密なスケッチを描き、分類表を作る",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "身近な材料を使った科学実験を行い、写真を貼って考察する",
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
          "description": "身近な材料を使った科学実験を行い、写真を貼って考察する",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
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
  "min": 8,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "夏休みの自由研究。模造紙とカラーペンを広げ、図書館で調べたことや近所の川で観察した生き物の記録をまとめる。",
  "diary": [
    "何日もかけて色鉛筆で描いた植物のスケッチ。先生に「大学の研究ノートみたいだね」って褒められて地区の作品展に出品された。すごく誇らしい。",
    "紫キャベツの汁でいろんな液体の色が変わる実験をした。写真もたくさん貼って模造紙を仕上げた。実験って魔法みたいで面白い！"
  ],
  "classification": "daily"
});
