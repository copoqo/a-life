(window.eventDefs = window.eventDefs || []).push({
  "id": "district_commercial_underground_parking",
  "title": "商業ビルの地下駐車場・スモークガラス越しの密会",
  "description": "大型商業施設の巨大な地下駐車場。タイヤの軋む音と薄暗い蛍光灯の下、待ち合わせた車内へ滑り込む。スモークガラスで遮断された密室空間で、リクライニングシートを倒される。買い物客がすぐ外を歩く気配を感じながら、服をはだけさせられて激しいピストンを受け止める……。",
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
          240,
          731
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
          "value": "commercial"
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
    "unique_key": "district_commercial_underground_parking"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "天井に頭をぶつけそうになりながら貪り合う",
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
          "description": "車のシートの上で跨がり、天井に頭をぶつけそうになりながら貪り合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -6
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
      "label": "車の揺れを外に悟られぬよう必死で声を殺す",
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
          "description": "助手席で太ももを広げられ、車の揺れを外に悟られぬよう必死で声を殺す。",
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
      "label": "大急ぎでシートを起こして身だしなみを直す",
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
          "description": "警備員の巡回ライトが車内をかすめ、大急ぎでシートを起こして身だしなみを直す。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
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
  "min": 20,
  "max": 60,
  "p": 0.04,
  "text": "大型商業施設の巨大な地下駐車場。タイヤの軋む音と薄暗い蛍光灯の下、待ち合わせた車内へ滑り込む。スモークガラスで遮断された密室空間で、リクライニングシートを倒される。買い物客がすぐ外を歩く気配を感じながら、服をはだけさせられて激しいピストンを受け止める……。",
  "publicSex": true,
  "diary": [
    "地下駐車場の車内でシートを倒し、男の上に跨がった。車のサスペンションがきしむ音に怯えながら、奥深くまで硬いモノを飲み込み、愛液でシートを汚しながら絶頂した。",
    "スモークガラス一枚隔てた外を歩く買い物客の足音を聞きながら、助手席で貫かれた。声を出せないもどかしさと背徳のスリルに、爪先を丸めて何度もイッた。",
    "警備員が近づいてくる気配に大急ぎで服を着直した。何事もなかったかのように車を出したものの、下腹の奥はいつまでもジンジンと痺れていた。"
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
