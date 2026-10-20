(window.eventDefs = window.eventDefs || []).push({
  "id": "yearning_crowded_train_heat",
  "title": "満員電車の密着と、背徳的な昂ぶり",
  "description": "身動きの取れない満員電車の車内。揺れるたびに、背後に立つ見知らぬ男性の硬い体躯や体温が薄い衣服越しに臀部へと押し付けられる。男性特有の熱気と微かな汗の匂いが首筋にかかり、恐怖や不快感を覚えるべきはずなのに、身体の奥が不意にぎゅっと縮こまり、下腹が甘く疼いてしまう。こんな状況に反応してしまう自分の淫らさに、羞恥と背徳の熱い汗が噴き出す……。",
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
          431
        ]
      },
      {
        "path": "skill.morality",
        "op": "lte",
        "value": 0
      }
    ]
  },
  "weight": {
    "base": 17,
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
    "unique_key": "yearning_crowded_train_heat"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "秘唇がじわりと愛液を滲ませる感覚に耐える",
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
          "description": "密着の熱気に身を固くしながら、秘唇がじわりと愛液を滲ませる感覚に耐える。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "crowded_train_escalation",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "危険な昂ぶりを必死に振り払う",
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
          "description": "少し身体をよじって距離を取り、危険な昂ぶりを必死に振り払う。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "息を潜める",
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
          "description": "見知らぬ誰かに力尽くで組み伏せられる淫靡な妄想に囚われ、息を潜める。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "crowded_train_escalation",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 35,
  "p": 0.17,
  "text": "身動きの取れない満員電車の車内。揺れるたびに、背後に立つ見知らぬ男性の硬い体躯や体温が薄い衣服越しに臀部へと押し付けられる。男性特有の熱気と微かな汗の匂いが首筋にかかり、恐怖や不快感を覚えるべきはずなのに、身体の奥が不意にぎゅっと縮こまり、下腹が甘く疼いてしまう。こんな状況に反応してしまう自分の淫らさに、羞恥と背徳の熱い汗が噴き出す……。",
  "phase": "any",
  "publicSex": true,
  "diary": [
    "逃げ場のない密着の中、背後からの熱を感じるたびにショーツが湿っていくのが分かって死ぬほど恥ずかしかった。理性に反して牝として反応してしまう自分の身体の生々しさに慄いた。",
    "揺れに合わせて少しずつ位置を変え、背後の男から離れた。外に出て冷たい外気を吸い込むと、火照っていた首筋が急速に冷えて安堵のため息が出た。",
    "もしこのまま誰の手にも届かない場所へ連れ去られたら……そんな下劣で危険な妄想が脳裏を駆け巡り、駅に着くまで下唇を噛み締めて太ももを震わせていた。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
