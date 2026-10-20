(window.eventDefs = window.eventDefs || []).push({
  "id": "district_deprived_thin_walls",
  "title": "生活臭漂う公営団地・薄い壁越しに聞かせる嬌声",
  "description": "コンクリートの剥がれかけた公営団地や安アパート。隣の部屋のテレビの音や咳払いまで筒抜けの薄い壁。生活苦の重苦しさを吹き飛ばすように、湿った万年床の上で激しく求め合う。声を立てれば即座に隣人にバレてしまう極限の羞恥の中、肉と肉がぶつかり合う「ぬちぬち」とした生々しい水音だけが部屋に響き渡る……。",
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
          731
        ]
      }
    ]
  },
  "weight": {
    "base": 24,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "deprived"
        },
        "factor": 3.5
      }
    ]
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "district_deprived_thin_walls"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "壁を揺らす激しいピストンに啼き果てる",
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
          "description": "枕に顔を埋めて声を殺しながら、壁を揺らす激しいピストンに啼き果てる。",
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
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -10000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "濡れそぼる肉穴に指を奥深くまでねじ込まれる",
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
          "description": "隣の部屋の物音を聞きながら、濡れそぼる肉穴に指を奥深くまでねじ込まれる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -4
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
      "label": "慌てて身体を離して息を殺す",
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
          "description": "壁をドンドンと叩く音が響き、慌てて身体を離して息を殺す。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 60,
  "p": 0.04,
  "text": "コンクリートの剥がれかけた公営団地や安アパート。隣の部屋のテレビの音や咳払いまで筒抜けの薄い壁。生活苦の重苦しさを吹き飛ばすように、湿った万年床の上で激しく求め合う。声を立てれば即座に隣人にバレてしまう極限の羞恥の中、肉と肉がぶつかり合う「ぬちぬち」とした生々しい水音だけが部屋に響き渡る……。",
  "diary": [
    "古い団地の薄い壁のすぐそばで、万年床の上で激しく突かれた。壁の向こうに隣人の気配を感じながら、声を押し殺して枕を噛み、ぬちぬちと鳴る水音の中で狂ったように絶頂した。",
    "隣の部屋のテレビの音が聞こえる中、布団の上で愛撫された。指先が奥深くまで入るたび、恥ずかしさで下腹がきゅうきゅうと締めつけられ、愛液を吹き出して果てた。",
    "壁を叩く音に肝を冷やしてピストンを止めた。布団の中で二人で固まりながら、みじめさと可笑しさが混ざり合って小さく笑い合った。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "once": true,
  "classification": "daily"
});
