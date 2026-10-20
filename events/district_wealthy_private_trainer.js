(window.eventDefs = window.eventDefs || []).push({
  "id": "district_wealthy_private_trainer",
  "title": "優雅な高所得地域・プライベートジムの完全個室",
  "description": "緑豊かで閑静な高級住宅街。完全会員制のパーソナルトレーニングジムの防音個室。裕福な暮らしの裏で満たされない欲求を抱える中、若く精悍な専属トレーナーと二人きりになる。ストレッチの補助という名目で、汗ばんだウェア越しに太ももの付け根を密着させられ、耳元に荒い息を吹きかけられる……。",
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
          264,
          755
        ]
      }
    ]
  },
  "weight": {
    "base": 22,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "wealthy"
        },
        "factor": 3.5
      }
    ]
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "district_wealthy_private_trainer"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "鍛え上げられた逞しい肉体で貫かれる",
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
          "description": "ストレッチマットの上に押し倒され、鍛え上げられた逞しい肉体で貫かれる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -30000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "鏡張りの壁の前で濡れた秘所をまさぐられる",
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
          "description": "トレーニングウェアを脱がされ、鏡張りの壁の前で濡れた秘所をまさぐられる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 2
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "冷たいミネラルウォーターを飲む",
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
          "description": "「今日はここまでにしましょう」と息を整え、冷たいミネラルウォーターを飲む。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 22,
  "max": 62,
  "p": 0.04,
  "text": "緑豊かで閑静な高級住宅街。完全会員制のパーソナルトレーニングジムの防音個室。裕福な暮らしの裏で満たされない欲求を抱える中、若く精悍な専属トレーナーと二人きりになる。ストレッチの補助という名目で、汗ばんだウェア越しに太ももの付け根を密着させられ、耳元に荒い息を吹きかけられる……。",
  "diary": [
    "個室ジムのマットの上で、若いトレーナーの逞しい肉体に組み敷かれた。鍛え上げられた太い肉棒で奥深くまで突き上げられ、鏡に映る乱れた自分の姿を見つめながら狂ったように果てた。",
    "鏡張りの壁に手をつかされ、ウェアをめくられて秘所をまさぐられた。指先が奥へと沈むたび、ガラス越しに赤く染まった自分の顔が見えて、恥ずかしさで腰が砕けた。",
    "トレーナーの熱い視線を受け流し、優雅にセッションを終えた。高級住宅街の並木道を歩きながら、下腹の奥の疼きを冷ますように深呼吸した。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "once": true,
  "classification": "daily"
});
