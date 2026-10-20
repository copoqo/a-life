(window.eventDefs = window.eventDefs || []).push({
  "id": "student_partner_campus_lawn_night",
  "title": "学生時代の秘め事・夜のキャンパスと芝生の暗がり",
  "description": "講義が終わり、街灯の光だけが点々と灯る深夜の大学キャンパス。サークルの飲み会を抜け出し、二人きりで迷い込んだ木立の奥の芝生広場。夜風が火照った肌を冷まし、遠くの街の喧騒が聞こえる中、芝生の上にジャケットを広げて倒れ込む……。",
  "content_rating": "adult",
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
          275
        ]
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      },
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 240
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
    "base": 28,
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
    "unique_key": "student_partner_campus_lawn_night"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "夜空を見上げながら腰を打ちつける",
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
          "description": "【夜風の下で素肌を晒して交わる】芝生の上に跨がり、夜空を見上げながら腰を打ちつける。",
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
      "label": "静かな夜の愛撫に蕩ける",
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
          "description": "【ジャケットに隠れて唇と秘唇を重ねる】草の匂いに包まれ、静かな夜の愛撫に蕩ける。",
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
      "label": "夜のキャンパスを疾走する",
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
          "description": "【警備員のライトに慌てて駆け出す】巡回のライトの光に手をつなぎ、夜のキャンパスを疾走する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 22,
  "p": 0.28,
  "text": "講義が終わり、街灯の光だけが点々と灯る深夜の大学キャンパス。サークルの飲み会を抜け出し、二人きりで迷い込んだ木立の奥の芝生広場。夜風が火照った肌を冷まし、遠くの街の喧騒が聞こえる中、芝生の上にジャケットを広げて倒れ込む……。",
  "alcohol": true,
  "publicSex": true,
  "targetGender": "both",
  "femaleVariant": {
    "text": "講義が終わり、街灯の光だけが点々と灯る深夜の大学キャンパス。飲み会を抜け出し、二人きりで迷い込んだ木立の奥の芝生広場。夜風が火照った肌を冷まし、遠くの街の喧騒が聞こえる中、芝生の上にジャケットを広げて倒れ込む……。",
    "choices": [
      [
        "【夜風の下で素肌を晒して交わる】芝生の上で絡み合い、夜空を見上げながら互いの蜜唇を激しく擦り合う",
        {
          "happiness": 5,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 9,
            "shyness": 8
          }
        }
      ],
      [
        "【ジャケットに隠れて唇と秘唇を重ねる】草の匂いに包まれ、静かな夜の愛撫に蕩ける",
        {
          "happiness": 4,
          "secrecy": 7,
          "sexualEffects": {
            "desire": 7,
            "intimacyNeed": 7
          }
        }
      ],
      [
        "【警備員のライトに慌てて駆け出す】巡回のライトの光に手をつなぎ、夜のキャンパスを疾走する",
        {
          "happiness": 4,
          "independence": 3,
          "stress": -3
        }
      ]
    ],
    "diary": [
      "夜のキャンパスの芝生の上で、夜風を素肌に浴びながら彼女と重なり合った。暗闇の中で互いの濡れそぼった秘所を押し当てて激しく腰を振り乱し、星空を見上げながら同時に絶頂した。",
      "芝生の上に広げたジャケットの上で抱き合った。夜風の冷たさと彼女の肉体の熱さのコントラストが心地よく、草の匂いの中で愛液を交わし合った。",
      "警備員の懐中電灯の光が見えて、二人で大笑いしながら夜の大学を走り抜けた。若さの奔放さに胸が躍った。"
    ]
  },
  "diary": [
    "夜のキャンパスの芝生の上で、夜風を素肌に浴びながら相手の上に跨がった。暗闇の中で太い肉棒を根元まで飲み込み、星空を見上げながら腰を振り乱して絶頂した。",
    "芝生の上に広げたジャケットの上で抱き合った。夜風の冷たさと相手の肉体の熱さのコントラストが心地よく、草の匂いの中で愛液を交わし合った。",
    "警備員の懐中電灯の光が見えて、二人で大笑いしながら夜の大学を走り抜けた。若さの奔放さに胸が躍った。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "shared_activity"
  ],
  "classification": "daily"
});
