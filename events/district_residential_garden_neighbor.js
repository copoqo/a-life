(window.eventDefs = window.eventDefs || []).push({
  "id": "district_residential_garden_neighbor",
  "title": "閑静な住宅街・生垣の死角と隣家の主",
  "description": "閑静な住宅街の昼下がり。庭先やベランダで洗濯物を干していると、薄手の部屋着越しに透ける胸元や腰つきに、生垣の向こうから熱い視線を感じる。隣家の妻子ある男性。回覧板を口実に敷地の隅、物置と生垣に挟まれた死角に引き込まれ、家庭的な昼の日常の裏で、スカートをたくし上げられて激しく求められる……。",
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
          240,
          791
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
          "value": "residential"
        },
        "factor": 3.5
      }
    ]
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "district_residential_garden_neighbor"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "背後から音もなく奥深くまで貫かれる",
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
          "description": "生垣に手をつき、背後から音もなく奥深くまで貫かれる。",
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
              "value": -3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "指先で愛液を掻き回される快感に耐える",
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
          "description": "洗濯物の影で口を塞がれ、指先で愛液を掻き回される快感に耐える。",
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
      "label": "手を払って家の中へ駆け込む",
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
          "description": "近所の人の足音にハッと我に返り、手を払って家の中へ駆け込む。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "min": 20,
  "max": 65,
  "p": 0.04,
  "text": "閑静な住宅街の昼下がり。庭先やベランダで洗濯物を干していると、薄手の部屋着越しに透ける胸元や腰つきに、生垣の向こうから熱い視線を感じる。隣家の妻子ある男性。回覧板を口実に敷地の隅、物置と生垣に挟まれた死角に引き込まれ、家庭的な昼の日常の裏で、スカートをたくし上げられて激しく求められる……。",
  "diary": [
    "生垣の青葉の匂いの中、隣の旦那さんにスカートをめくられ、立ったまま後ろから貫かれた。誰かが通りかかるかもしれない恐怖に震えながら、音もなく奥深くを掻き回される熱い快感に、声を殺して絶頂した。",
    "風に揺れるシーツの陰で抱きすくめられ、下着の中に手を差し入れられた。隣人の指先に濡れた肉芽を擦り上げられ、昼下がりの住宅街で膝をガクガクと震わせて果ててしまった。",
    "ご近所さんの足音に我に返り、慌てて腕を振りほどいた。家に入って鍵を閉めた後も、下腹の奥が熱く疼いて収まらなかった。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "once": true,
  "classification": "daily"
});
