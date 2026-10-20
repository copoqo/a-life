(window.eventDefs = window.eventDefs || []).push({
  "id": "student_partner_rooftop_secret",
  "title": "学生時代の秘め事・屋上の踊り場と青空の下",
  "description": "普段は鍵がかけられている屋上への踊り場。こっそり持ち出した合鍵で重い扉を開けると、一面の青空と吹き抜ける風が迎えてくれた。フェンスに囲まれた屋上の片隅、誰の視線も届かない死角で抱き合わされ、風にプリーツスカートを捲り上げられる……。",
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
          180,
          275
        ]
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      },
      {
        "path": "skill.morality",
        "op": "lte",
        "value": 0
      },
      {
        "path": "person.career.employment_status",
        "op": "eq",
        "value": "student"
      }
    ]
  },
  "weight": {
    "base": 26,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "student_partner_rooftop_secret"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "背後から激しく突き上げられる",
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
          "description": "【フェンスに手をついて立ちバック】青空を仰ぎながら、背後から激しく突き上げられる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "下着を外して素肌を重ねる",
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
          "description": "【踊り場のコンクリートに座り込んで】風の音に声を隠し、下着を外して素肌を重ねる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "街の景色を見下ろす",
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
          "description": "【風の冷たさに抱き合って過ごす】風に吹かれながら手をつなぎ、街の景色を見下ろす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    }
  ],
  "min": 15,
  "max": 22,
  "p": 0.26,
  "text": "普段は鍵がかけられている屋上への踊り場。こっそり持ち出した合鍵で重い扉を開けると、一面の青空と吹き抜ける風が迎えてくれた。フェンスに囲まれた屋上の片隅、誰の視線も届かない死角で抱き合わされ、風にプリーツスカートを捲り上げられる……。",
  "publicSex": true,
  "targetGender": "both",
  "femaleVariant": {
    "text": "普段は鍵がかけられている屋上への踊り場。こっそり持ち出した合鍵で重い扉を開けると、一面の青空と吹き抜ける風が迎えてくれた。フェンスに囲まれた屋上の片隅、誰の視線も届かない死角で抱き合わされ、風にプリーツスカートを捲り上げられる……。",
    "choices": [
      [
        "【フェンスに手をついて背後から】青空を仰ぎながら、下着をずらされて濡れた奥を指先で執拗に弄られる",
        {
          "happiness": 5,
          "secrecy": 9,
          "sexualEffects": {
            "desire": 9,
            "shyness": 9
          }
        }
      ],
      [
        "【踊り場のコンクリートに座り込んで】風の音に声を隠し、下着を外して互いの蜜壺を擦り合わせる",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 8,
            "shyness": 7
          }
        }
      ],
      [
        "【風の冷たさに抱き合って過ごす】風に吹かれながら手をつなぎ、街の景色を見下ろす",
        {
          "happiness": 4,
          "aesthetics": 3,
          "stress": -2
        }
      ]
    ],
    "diary": [
      "屋上のフェンスに手をつかされ、青空の下で背後から愛撫された。風がスカートを吹き上げ、校庭の生徒たちの声が遠く聞こえる中で彼女の指に奥を弄られ、天に昇るような開放感と背徳に震えてイッた。",
      "屋上の踊り場の冷たい床に座り、制服を崩して交わった。女同士の蜜をぬちぬちと擦り合わせ、風の音に紛れて吐息を漏らし、二人きりの秘密の世界に溺れた。",
      "屋上の柵に寄りかかって二人で街を見下ろした。吹き抜ける風が心地よく、青春の眩しさを胸に刻んだ。"
    ]
  },
  "diary": [
    "屋上のフェンスに手をつかされ、青空の下で背後から突き入れられた。風がスカートを吹き上げ、校庭の生徒たちの声が遠く聞こえる中で中出しされ、天に昇るような開放感と背徳に震えた。",
    "屋上の踊り場の冷たい床に座り、制服を崩して交わった。風の音に紛れて吐息を漏らし、二人きりの秘密の世界に溺れた。",
    "屋上の柵に寄りかかって二人で街を見下ろした。吹き抜ける風が心地よく、青春の眩しさを胸に刻んだ。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "reflection"
  ],
  "classification": "daily"
});
