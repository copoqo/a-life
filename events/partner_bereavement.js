(window.eventDefs = window.eventDefs || []).push({
  "id": "partner_bereavement",
  "title": "伴侶の旅立ち・永遠の別れ",
  "description": "長年連れ添い、人生の酸いも甘いも分かち合ってきた最愛の伴侶が、病や老衰により人生の終着点を迎える。",
  "content_rating": "general",
  "enabled": true,
  "actors": {},
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
          696,
          1271
        ]
      }
    ]
  },
  "weight": {
    "base": 6,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "partner_bereavement"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "安らかな旅立ちを見送る",
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
          "description": "感謝の涙とともに手を握り締め、安らかな旅立ちを見送る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": -5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "二人で過ごした年月を反芻する",
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
          "description": "深い悲しみに暮れながら、二人で過ごした年月を反芻する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": -6
            }
          ]
        }
      ]
    }
  ],
  "min": 58,
  "max": 105,
  "p": 0.06,
  "once": true,
  "text": "長年連れ添い、人生の酸いも甘いも分かち合ってきた最愛の伴侶が、病や老衰により人生の終着点を迎える。",
  "diary": [
    "冷たくなっていく夫の手を握りながら、何度も「ありがとう」と繰り返した。あなたがいたから、私はここまで生きてこられた。安らかに眠ってください。",
    "静まり返った部屋で、遺影を見つめながら一人涙を流した。半身をもぎ取られたような喪失感の中、二人で生きた軌跡だけが胸に熱く残っている。"
  ],
  "outcomes": [
    "bereavement",
    "bereavement"
  ],
  "classification": "daily"
});
