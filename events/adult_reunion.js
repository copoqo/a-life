(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_reunion",
  "title": "忘れえぬ肌の記憶・元恋人との再会",
  "description": "街角で偶然すれ違った、かつて肌を重ね合った元交際相手。互いに大人びた姿を見つめ合ううちに、かつて分かち合った熱い吐息とシーツの記憶がフラッシュバックする。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
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
          216,
          947
        ]
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 10,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_reunion"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "懐かしい温もりに触れる",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": [
          {
            "path": "display.confidence",
            "coefficient": 0.01
          }
        ]
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "近くのカフェで近況を語り合い、懐かしい温もりに触れる。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "大切な思い出として胸に留める",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": [
          {
            "path": "display.confidence",
            "coefficient": 0.01
          }
        ]
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "軽く会釈だけを交わし、大切な思い出として胸に留める。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 78,
  "p": 0.1,
  "text": "街角で偶然すれ違った、かつて肌を重ね合った元交際相手。互いに大人びた姿を見つめ合ううちに、かつて分かち合った熱い吐息とシーツの記憶がフラッシュバックする。",
  "diary": [
    "懐かしい声を聞いた瞬間、昔の情熱的な夜が蘇って胸が締め付けられた。大人になったお互いを祝福し合い、穏やかに別れた。",
    "振り返りたい衝動を抑え、背筋を伸ばして歩き去った。過去の恋があったからこそ今の自分があるのだと、誇らしく思えた。"
  ],
  "outcomes": [
    "reunion",
    "reflection"
  ],
  "classification": "daily"
});
