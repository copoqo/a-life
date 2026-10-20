(window.eventDefs = window.eventDefs || []).push({
  "id": "marital_infidelity_temptation",
  "title": "既婚者の背徳・不倫の誘い",
  "description": "左手の薬指に指輪をはめているにもかかわらず、家庭の外から危険で甘美な誘惑が忍び寄る。禁断の扉の前に立ち、心が激しく揺れる。",
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
          312,
          875
        ]
      },
      {
        "path": "derived.partner_gender_relation",
        "op": "eq",
        "value": "different"
      }
    ]
  },
  "weight": {
    "base": 14,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "marital_infidelity_temptation"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "密室で身体を許して不倫関係に堕ちる",
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
          "description": "理性の糸が切れ、密室で身体を許して不倫関係に堕ちる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
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
      "label": "相手の手を強く払いのけて拒絶する",
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
          "description": "既婚者であることを告げ、相手の手を強く払いのけて拒絶する。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "触れられた肌の熱さに息を乱して身悶える",
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
          "description": "罪悪感に怯えながらも、触れられた肌の熱さに息を乱して身悶える。",
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
  "min": 26,
  "max": 72,
  "p": 0.14,
  "text": "左手の薬指に指輪をはめているにもかかわらず、家庭の外から危険で甘美な誘惑が忍び寄る。禁断の扉の前に立ち、心が激しく揺れる。",
  "targetGender": "male",
  "variants": [
    {
      "subTitle": "職場の年下男性からの熱い吐息",
      "text": "誰もいなくなった残業後のオフィス。既婚者であることを知っているはずの同僚男性から、資料室で背後から抱きすくめられる。「旦那さんより、僕の方があなたを満たせます」と首筋に唇を這わされ、下腹がきゅんと熱く濡れてしまう……。",
      "choices": [
        [
          "理性の糸が切れ、密室で身体を許して不倫関係に堕ちる",
          {
            "happiness": 4,
            "stress": 3,
            "secrecy": 8,
            "sexualEffects": {
              "desire": 8,
              "shyness": 5
            }
          }
        ],
        [
          "既婚者であることを告げ、相手の手を強く払いのけて拒絶する",
          {
            "morality": 5,
            "trust": 3,
            "independence": 3
          }
        ],
        [
          "罪悪感に怯えながらも、触れられた肌の熱さに息を乱して身悶える",
          {
            "stress": 3,
            "secrecy": 4,
            "sexualEffects": {
              "desire": 5
            }
          }
        ]
      ],
      "outcomes": [
        "infidelity",
        "boundary",
        "reflection"
      ],
      "diary": [
        "夫を裏切る罪悪感に震えながら、資料室の机に手をついて背後から貫かれた。激しい背信の快感に愛液が溢れ出し、声を押し殺しながら狂おしい絶頂に堕ちていった。",
        "「私には夫がいる」ときっぱり告げて手を振り払った。家庭を守る誇りと、一瞬揺らいでしまった自分への戒めを胸に刻んだ。",
        "その場では拒んだけれど、首筋に残る熱い吐息の感触が頭から離れなかった。平穏な日常の底に潜む淫らな衝動に戦慄した。"
      ]
    },
    {
      "subTitle": "同窓会での元恋人との再燃",
      "text": "久しぶりの同窓会で再会したかつての恋人。お互いに大人になり、酒が進むにつれて当時の生々しい肌の感触が蘇る。「少しだけ、二人で抜け出さないか」と人混みの中で手を握られ、耳元に熱い息を吹きかけられる……。",
      "choices": [
        [
          "手を握り返し、ホテル街へと二人で姿を消す",
          {
            "happiness": 4,
            "stress": 4,
            "secrecy": 8,
            "sexualEffects": {
              "desire": 7
            }
          }
        ],
        [
          "笑顔で手を解き、夫が待つ我が家へと帰宅する",
          {
            "morality": 5,
            "trust": 4,
            "stress": -2
          }
        ],
        [
          "思い出話だけにとどめ、終電で一人静かに帰る",
          {
            "selfUnderstanding": 3,
            "happiness": 2
          }
        ]
      ],
      "outcomes": [
        "infidelity",
        "boundary",
        "reflection"
      ],
      "diary": [
        "ホテルの部屋に入った瞬間、貪るように唇を奪われた。昔と変わらない激しい腰使いで奥を抉られ、人妻になった肉体を晒して何度も果てた。",
        "誘いを断り、我が家へ戻って夫の寝顔を見たとき、安堵の涙が零れた。守るべき大切な日常を裏切らなくて本当によかった。",
        "懐かしい思い出を語り合えただけで充分だった。過去は過去のまま、胸の奥にそっとしまっておこう。"
      ]
    }
  ],
  "classification": "major",
  "is_major": true
});
