(window.eventDefs = window.eventDefs || []).push({
  "id": "outing_cinema",
  "title": "映画館の暗がり・スクリーンの光",
  "description": "照明が落とされ、巨大なスクリーンに光が走る映画館。身体を包み込む音響と迫力ある映像に意識が吸い込まれる。暗闇のシートの中、隣に座る人の微かな息遣いや衣擦れの音が耳元を掠め、密室の中で見知らぬ他者と暗闇を共有する特有の緊張感が下腹をくすぐる……。",
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
          180,
          1031
        ]
      }
    ]
  },
  "weight": {
    "base": 17,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "outing_cinema"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "涙と感動の時間を過ごす",
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
          "description": "映画の壮大なストーリーに引き込まれ、涙と感動の時間を過ごす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "隣の気配と身体の奥の疼きに息を潜める",
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
          "description": "暗闇と大爆音のシートで、隣の気配と身体の奥の疼きに息を潜める。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "rare_outing_secret_quickie",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "映画の演出や俳優の演技に感銘を受ける",
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
          "id": "outcome_2",
          "weight": 1,
          "description": "ポップコーンをつまみながら、映画の演出や俳優の演技に感銘を受ける。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            }
          ]
        }
      ]
    }
  ],
  "min": 15,
  "max": 85,
  "p": 0.17,
  "text": "照明が落とされ、巨大なスクリーンに光が走る映画館。身体を包み込む音響と迫力ある映像に意識が吸い込まれる。暗闇のシートの中、隣に座る人の微かな息遣いや衣擦れの音が耳元を掠め、密室の中で見知らぬ他者と暗闇を共有する特有の緊張感が下腹をくすぐる……。",
  "diary": [
    "映画のクライマックスで涙が溢れた。暗闇の中で感情を解放し、物語の世界にどっぷり浸ることができた。",
    "シアターの暗がりの中、映画の爆音に紛れて自分の荒い息を殺した。隣の見知らぬ人の体温を意識するたび、太ももの内側が甘く熱を帯びた。",
    "劇場の大きなスクリーンで観る映画は格別だった。見終えた後の心地よい興奮を胸に抱いて映画館を後にした。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "shared_activity"
  ],
  "classification": "daily"
});
