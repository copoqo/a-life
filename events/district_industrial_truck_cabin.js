(window.eventDefs = window.eventDefs || []).push({
  "id": "district_industrial_truck_cabin",
  "title": "重油の匂い漂う工業地域・大型トラックの寝台カーテン",
  "description": "巨大な煙突から炎が吹き上がる工業地域の深夜。道路脇に並ぶ長距離大型トラック。運転席のステップを登り、キャビン奥のカーテンで仕切られた薄暗い寝台へ。エンジンの重低音と振動が身体の奥へと伝わる中、筋骨隆々なドライバーの男に押し倒される。工業地帯の荒々しい男の臭気と太い肉棒に、下腹が抗いようもなく濡れそぼる……。",
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
          228,
          671
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
    "base": 22,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "industrial"
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
    "unique_key": "district_industrial_truck_cabin"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "狭い寝台で荒々しく子宮口まで突き上げられる",
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
          "description": "エンジンの振動に身を任せ、狭い寝台で荒々しく子宮口まで突き上げられる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": 20000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "指先でぐちゃぐちゃに掻き回される",
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
          "description": "カーテン一枚隔てた夜景を見下ろしながら、指先でぐちゃぐちゃに掻き回される。",
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
      "label": "男と肩を叩き合ってキャビンを降りる",
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
          "description": "無線の声がスピーカーから鳴り響き、男と肩を叩き合ってキャビンを降りる。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
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
  "min": 19,
  "max": 55,
  "p": 0.04,
  "text": "巨大な煙突から炎が吹き上がる工業地域の深夜。道路脇に並ぶ長距離大型トラック。運転席のステップを登り、キャビン奥のカーテンで仕切られた薄暗い寝台へ。エンジンの重低音と振動が身体の奥へと伝わる中、筋骨隆々なドライバーの男に押し倒される。工業地帯の荒々しい男の臭気と太い肉棒に、下腹が抗いようもなく濡れそぼる……。",
  "publicSex": true,
  "diary": [
    "トラックのキャビンの寝台で、アイドリングの振動に揺られながら激しく犯された。逞しい男の腕に組み敷かれ、太い肉棒で子宮口を何度も叩かれて、シーツを噛んで啼き狂った。",
    "窓のカーテンの隙間からコンビナートの炎を見つめながら、狭い寝台で弄られた。重油の匂いと男の汗にまみれ、身体の芯から痺れるような快感に溺れた。",
    "無線機のノイズに我に返り、服を整えてステップを降りた。工業地帯の重たい潮風を浴びながら、下腹の疼きに息を漏らした。"
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
