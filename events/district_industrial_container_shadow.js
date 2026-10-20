(window.eventDefs = window.eventDefs || []).push({
  "id": "district_industrial_container_shadow",
  "title": "コンビナートの夜景・資材置き場のコンテナの死角",
  "description": "海沿いに広がるコンビナートのプラント群。パイプが幾重にも交錯し、蒸気が白く吹き出す夜。積み上げられた巨大な錆びたコンテナの死角で、夜勤明けの作業着姿の男に抱きすくめられる。作業着のジッパーを下ろされ、油と鉄粉の匂いの中で剥き出しの素肌がぶつかり合う……。",
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
    "unique_key": "district_industrial_container_shadow"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "背後から無慈悲なピストンを受け止める",
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
          "description": "冷たい鉄のコンテナに手をつき、背後から無慈悲なピストンを受け止める。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -7
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
      "label": "立ったまま足を開かされる",
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
          "description": "ヘルメットを脱ぎ捨てた男に荒々しく唇を奪われ、立ったまま足を開かされる。",
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
      "label": "作業服を整えて作業通路へ駆け出す",
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
          "description": "フォークリフトの警告音が近づき、作業服を整えて作業通路へ駆け出す。",
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
  "text": "海沿いに広がるコンビナートのプラント群。パイプが幾重にも交錯し、蒸気が白く吹き出す夜。積み上げられた巨大な錆びたコンテナの死角で、夜勤明けの作業着姿の男に抱きすくめられる。作業着のジッパーを下ろされ、油と鉄粉の匂いの中で剥き出しの素肌がぶつかり合う……。",
  "publicSex": true,
  "diary": [
    "冷たい鉄のコンテナの壁に額を押しつけられ、立ったまま後ろから突かれた。機械油と汗の匂いが混ざり合う中、激しい水音を響かせて貫かれ、頭が真っ白になるほど絶頂した。",
    "作業服を脱ぎ散らかし、コンテナの影で身体を重ねた。夜勤明けの男の獰猛な欲望を受け止め、蒸気の吹き出す音に紛れて啼き悶えた。",
    "フォークリフトのライトが見えて慌てて身を離した。乱れた髪を直しながら、工場の騒音の中へと足早に戻った。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "once": true,
  "classification": "daily"
});
