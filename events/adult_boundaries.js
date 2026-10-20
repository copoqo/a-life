(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_boundaries",
  "title": "求められる素肌と心のブレーキ",
  "description": "相手の荒い吐息とともに、服の下へと這い上がってくる強引な指先。皮膚が擦れる熱さに身体は愛液を滲ませつつも、心の奥が冷たく警鐘を鳴らす。快楽に流されそうな自分を押しとどめ、自らの尊厳を守る一線を意識する。",
  "content_rating": "adult",
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
          216,
          1031
        ]
      }
    ]
  },
  "weight": {
    "base": 8,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "state.current_libido",
          "op": "gte",
          "value": 30
        },
        "factor": 1.5
      }
    ]
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_boundaries"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "自らの境界線を毅然と伝える",
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
          "description": "這う手をしっかりと掴んで制止し、自らの境界線を毅然と伝える。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "違和感を抱えたまま身を委ねてしまう",
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
          "description": "その場の空気に気圧され、違和感を抱えたまま身を委ねてしまう。",
          "effects": [
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
  "min": 18,
  "max": 85,
  "p": 0.075,
  "text": "相手の荒い吐息とともに、服の下へと這い上がってくる強引な指先。皮膚が擦れる熱さに身体は愛液を滲ませつつも、心の奥が冷たく警鐘を鳴らす。快楽に流されそうな自分を押しとどめ、自らの尊厳を守る一線を意識する。",
  "diary": [
    "相手の胸に手を当てて「今はこれ以上はやめて」と言葉にした。空気が凍りついたけれど、自分の身体を守れた確かな手応えがあった。",
    "断りきれずに流されてしまった後、シャワーを浴びながら胸の奥がチクチクと痛んだ。自分の身体の主は自分なのだと、痛みを伴って痛感した。"
  ],
  "classification": "daily"
});
