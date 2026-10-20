(window.eventDefs = window.eventDefs || []).push({
  "id": "child_competition",
  "title": "隣のあの子の白い手足と羨望",
  "description": "体育の授業や更衣室で並ぶ同級生の姿。すらりと伸びた白い手足や、早くも膨らみ始めた胸。自分との違いを目の当たりにし、チクチクとした劣等感と憧れが胸を突く。",
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
          84,
          191
        ]
      }
    ]
  },
  "weight": {
    "base": 11,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "child_competition"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "自信を取り戻す",
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
          "description": "自分の得意な分野を磨き、自信を取り戻す。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "苦手なことにも全力で挑む",
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
          "description": "悔しさをバネにして、苦手なことにも全力で挑む。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 7,
  "max": 15,
  "p": 0.11,
  "text": "体育の授業や更衣室で並ぶ同級生の姿。すらりと伸びた白い手足や、早くも膨らみ始めた胸。自分との違いを目の当たりにし、チクチクとした劣等感と憧れが胸を突く。",
  "diary": [
    "周囲と自分を比べて落ち込む日もあるけれど、私には私の良さがあるのだと信じたい。",
    "負けたくない一心で練習に打ち込んだ。汗を流した後の心地よい疲労感が、焦りを吹き飛ばしてくれた。"
  ],
  "classification": "daily"
});
