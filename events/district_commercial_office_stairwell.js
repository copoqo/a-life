(window.eventDefs = window.eventDefs || []).push({
  "id": "district_commercial_office_stairwell",
  "title": "整然とした商業地域・オフィスビルの非常階段とスーツの裏",
  "description": "高層オフィスビルが立ち並ぶ商業地域。昼休みの喧騒や残業時間、誰も使わない重い防火扉の奥の非常階段。職場の同僚や取引先の男に引きずり込まれ、タイトスカートをまくり上げられる。黒ストッキングを引き裂かれ、コンクリートの冷たさと男の逞しい肉塊の熱情に挟まれて喘ぎ悶える……。",
  "content_rating": "adult",
  "enabled": true,
  "actors": {
    "coworker": {
      "source": "coworker",
      "required": false
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
          264,
          707
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
    "unique_key": "district_commercial_office_stairwell"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "スーツの乱れも構わず奥深くまで貫かれる",
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
          "description": "コンクリートの壁に手をつき、スーツの乱れも構わず奥深くまで貫かれる。",
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
              "path": "skill.grooming",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ストッキングの上から濡れた割れ目をまさぐられる",
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
          "description": "踊り場の段差に座らされ、ストッキングの上から濡れた割れ目をまさぐられる。",
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
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "服を直して非常扉からフロアへ戻る",
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
          "description": "誰かが階段を降りてくる靴音に息を呑み、服を直して非常扉からフロアへ戻る。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 22,
  "max": 58,
  "p": 0.04,
  "text": "高層オフィスビルが立ち並ぶ商業地域。昼休みの喧騒や残業時間、誰も使わない重い防火扉の奥の非常階段。職場の同僚や取引先の男に引きずり込まれ、タイトスカートをまくり上げられる。黒ストッキングを引き裂かれ、コンクリートの冷たさと男の逞しい肉塊の熱情に挟まれて喘ぎ悶える……。",
  "publicSex": true,
  "diary": [
    "オフィスビルの非常階段で、破かれたストッキングの隙間から太い肉棒を一気に突き入れられた。ビジネス街の整然とした日常の裏で繰り広げられた乱暴なピストンに、声を殺して絶頂を重ねた。",
    "階段のステップに腰掛けさせられ、スーツのスカートの下をまさぐられた。濡れた愛液がストッキングに染み出す恥ずかしさに耐えながら、腰を浮かせて果てた。",
    "上階の扉が開く音に心臓が凍りつき、急いで乱れた髪と服を整えた。何食わぬ顔でデスクに戻った後も、太ももの内側が甘く熱を帯びていた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "once": true,
  "classification": "daily"
});
