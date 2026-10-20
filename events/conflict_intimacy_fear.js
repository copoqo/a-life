(window.eventDefs = window.eventDefs || []).push({
  "id": "conflict_intimacy_fear",
  "title": "抱かれたいのに受け入れられない、肉体の拒絶",
  "description": "相手への愛情はあるのに、いざ衣服を脱がされ、肉棒が秘唇に宛がわれると、身体が恐怖でカチカチに強張ってしまう。乾いた粘膜が悲鳴を上げ、奥へと押し入ろうとする硬い熱塊を頑なに拒絶して締め出してしまう。「痛い、入らない……」と涙をこぼし、相手を失望させてしまった申し訳なさと、女としての機能不全のような惨めさに打ちのめされる……。",
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
          431
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
    "base": 16,
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
    "unique_key": "conflict_intimacy_fear"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "愛撫やスキンシップでゆっくり身体をほぐす時間を求める",
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
          "description": "無理に挿入せず、愛撫やスキンシップでゆっくり身体をほぐす時間を求める。",
          "effects": [
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
      "id": "choice_1",
      "label": "心をすり減らす",
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
          "description": "痛みを我慢して相手のために受け入れようと無理をして、心をすり減らす。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 4
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "二人でじっくり向き合おうと提案する",
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
          "description": "性交痛や挿入障害について調べ、二人でじっくり向き合おうと提案する。",
          "effects": [
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
  "min": 18,
  "max": 35,
  "p": 0.16,
  "text": "相手への愛情はあるのに、いざ衣服を脱がされ、肉棒が秘唇に宛がわれると、身体が恐怖でカチカチに強張ってしまう。乾いた粘膜が悲鳴を上げ、奥へと押し入ろうとする硬い熱塊を頑なに拒絶して締め出してしまう。「痛い、入らない……」と涙をこぼし、相手を失望させてしまった申し訳なさと、女としての機能不全のような惨めさに打ちのめされる……。",
  "phase": "any",
  "diary": [
    "「痛いから、もっと優しくしてほしい」と泣きながら伝えた。相手は焦らずに胸を愛撫し、秘唇を舌でゆっくりと解してくれた。潤いを取り戻したことで、恐怖が少しずつ和らいだ。",
    "痛みに耐えて奥まで受け入れたものの、引き裂かれるような苦痛に声も出なかった。相手の快感の陰でシーツを握りしめ、自分を犠牲にした悲しさに涙が溢れた。",
    "身体が強張ってしまう理由を二人で真剣に話し合った。挿入だけが愛し合う形ではないとお互いに確認でき、張り詰めていた心の緊張がほどけていった。"
  ],
  "outcomes": [
    "mutual_talk",
    "shared_intimacy",
    "mutual_talk"
  ],
  "classification": "major",
  "is_major": true
});
