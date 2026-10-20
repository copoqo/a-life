(window.eventDefs = window.eventDefs || []).push({
  "id": "district_downtown_back_alley_hookup",
  "title": "雑居ビルの隙間・飲食街の非常階段での情事",
  "description": "焼き鳥や中華の煙が漂う飲食街の裏路地。雑居ビルの隙間にある薄暗い非常階段の踊り場。酒気を帯びた男に壁際へ追い詰められ、スカートの中に冷たい夜風と熱い指先が侵入する。下を行き交う酔客たちの笑い声が聞こえるすぐ上で、声を殺しての逢瀬……。",
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
          611
        ]
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
      }
    ]
  },
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "entertainment"
        },
        "factor": 3.5
      },
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
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "district_downtown_back_alley_hookup"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "雑踏の喧騒の裏で奥深くまで貫かれる",
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
          "description": "手すりを掴んで前屈みになり、雑踏の喧騒の裏で奥深くまで貫かれる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -9
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "濡れそぼる秘唇を弄り倒されて膝を震わせる",
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
          "description": "口を手で塞がれながら、濡れそぼる秘唇を弄り倒されて膝を震わせる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -6
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "男の腕をすり抜ける",
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
          "description": "ゴミ回収のトラックが路地に入ってきて我に返り、男の腕をすり抜ける。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 50,
  "p": 0.04,
  "text": "焼き鳥や中華の煙が漂う飲食街の裏路地。雑居ビルの隙間にある薄暗い非常階段の踊り場。酒気を帯びた男に壁際へ追い詰められ、スカートの中に冷たい夜風と熱い指先が侵入する。下を行き交う酔客たちの笑い声が聞こえるすぐ上で、声を殺しての逢瀬……。",
  "alcohol": true,
  "publicSex": true,
  "diary": [
    "飲食街の裏の非常階段で手すりを掴まされ、背後から突き入れられた。すぐ下を歩く人々の声が聞こえる中、口を塞がれて激しく突かれ、頭が真っ白になるほどの背徳の絶頂に身悶えた。",
    "階段の踊り場の暗がりでスカートをまくり上げられ、指先でぐちゃぐちゃに弄られた。夜風の冷たさと粘膜の熱さの対比に、声にならない嬌声を漏らして果てた。",
    "路地裏のライトの光に驚き、身をかわして逃げ出した。夜のネオン街の人混みに紛れながら、胸の高鳴りがいつまでも止まらなかった。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "once": true,
  "classification": "major",
  "is_major": true
});
