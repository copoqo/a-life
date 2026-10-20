(window.eventDefs = window.eventDefs || []).push({
  "id": "district_deprived_rooftop_drying",
  "title": "老朽アパートの共用屋上・物干しシーツの陰の逢瀬",
  "description": "錆びた鉄骨と雑多な洗濯物がはためく古いアパートの共用屋上。風に揺れる湿ったシーツの迷路の奥。近所の男に背後から抱きすくめられ、ノーパンの薄いワンピースをたくし上げられる。見下ろせば雑多な下町の路地。白昼の風に素肌を晒しながら、逃げ場のない快楽に身体を預ける……。",
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
          "value": "deprived"
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
    "unique_key": "district_deprived_rooftop_drying"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "風にシーツを揺らされながら立ちバックで貫かれる",
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
          "description": "物干し竿に手をつき、風にシーツを揺らされながら立ちバックで貫かれる。",
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
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "指先で愛液を掻き回されて膝を震わせる",
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
          "description": "干されたシーツの陰に座り込み、指先で愛液を掻き回されて膝を震わせる。",
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
      "label": "大急ぎでワンピースの裾を下ろす",
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
          "description": "下の階段から誰かのサンダルの音が響き、大急ぎでワンピースの裾を下ろす。",
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
  "min": 18,
  "max": 55,
  "p": 0.04,
  "text": "錆びた鉄骨と雑多な洗濯物がはためく古いアパートの共用屋上。風に揺れる湿ったシーツの迷路の奥。近所の男に背後から抱きすくめられ、ノーパンの薄いワンピースをたくし上げられる。見下ろせば雑多な下町の路地。白昼の風に素肌を晒しながら、逃げ場のない快楽に身体を預ける……。",
  "publicSex": true,
  "diary": [
    "共同屋上の物干し竿に手をつかされ、シーツが風に揺れる陰で後ろから貫かれた。白昼の青空の下で剥き出しの臀部に激しく腰を打ち付けられ、下町を見下ろしながら声を殺して絶頂した。",
    "干されたシーツの隙間に座り込み、ノーパンのワンピースをまくられてまさぐられた。風が素肌を撫でる開放感と淫靡さに、下腹から熱い蜜がとめどなく溢れた。",
    "サンダルのペタペタという音が階段から聞こえて、慌ててワンピースを整えた。日常の雑踏のすぐ上で抱き合っていた心臓の早鐘が、いつまでも止まらなかった。"
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
