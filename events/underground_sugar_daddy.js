(window.eventDefs = window.eventDefs || []).push({
  "id": "underground_sugar_daddy",
  "title": "パパ活と愛人契約・タワマンの夜景と富裕層の飼い犬",
  "description": "高級ホテルのラウンジで出会った富裕層の男。生活費やブランド品を全て面倒見てもらう代わりに、月に何度もタワーマンションの最上階へ呼び出される愛人関係。夜景を見下ろすキングサイズベッドで、高価なランジェリーを引き裂かれ、金主の太い欲望を受け止める。飼い慣らされた贅沢と、肉体をお金で買い叩かれる屈辱が混ざり合い、下腹が甘く疼く……。",
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
          216,
          587
        ]
      }
    ]
  },
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "underground_sugar_daddy"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "愛人としての悦びに溺れる",
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
          "description": "【男の言いなりになって夜通し奉仕する】夜景の窓ガラスに手をつかされ、愛人としての悦びに溺れる。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 200000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -7
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "より過激なプレイを受け入れる",
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
          "description": "【お手当の増額を交渉して肉体を差し出す】したたかに計算しながら、より過激なプレイを受け入れる。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 250000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "買い与えられたバッグを売って手切れ金にする",
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
          "description": "【男の執着に恐怖を覚え関係を清算する】鍵を返却し、買い与えられたバッグを売って手切れ金にする。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 100000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 48,
  "p": 0.04,
  "text": "高級ホテルのラウンジで出会った富裕層の男。生活費やブランド品を全て面倒見てもらう代わりに、月に何度もタワーマンションの最上階へ呼び出される愛人関係。夜景を見下ろすキングサイズベッドで、高価なランジェリーを引き裂かれ、金主の太い欲望を受け止める。飼い慣らされた贅沢と、肉体をお金で買い叩かれる屈辱が混ざり合い、下腹が甘く疼く……。",
  "diary": [
    "タワマンのガラス窓に額を押し当てられ、きらめく夜景を見下ろしながら後ろから貫かれた。愛人としての屈辱と、贅沢な部屋で飼われている優越感が混ざり合い、熱い愛液を垂れ流して果てた。",
    "お手当の札束と引き換えに、男の異常な性癖に付き合った。お金さえ手に入れば身体などどうでもいいと冷酷に割り切る自分が、どこか恐ろしかった。",
    "男の歪んだ執着から逃れるため、マンションの合鍵を置いて逃げ出した。売却した貴金属の現金を手にして、ようやく息を吹き返した。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "once": true,
  "classification": "daily"
});
