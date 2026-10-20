(window.eventDefs = window.eventDefs || []).push({
  "id": "partner_intimacy_male",
  "title": "男性パートナーとの親密な夜 〜太い熱情に貫かれる歓喜〜",
  "description": "薄暗い寝室で、男性パートナーの逞しい腕に抱きすくめられる。男らしい汗と石鹸の匂いが鼻腔をくすぐり、太ももを力強く押し開かれる。硬く熱く充血した肉塊が、濡れそぼった肉腔の入口を押し広げ、一気に最奥の子宮口まで突き入れられた……！",
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
          851
        ]
      }
    ]
  },
  "weight": {
    "base": 16,
    "additive": [],
    "multipliers": [
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
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "partner_intimacy_male"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "子宮を激しくノックされるピストンに腰を打ち返して狂乱する",
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
          "description": "背中に爪を立て、子宮を激しくノックされるピストンに腰を打ち返して狂乱する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "partner_bath_passion",
                "delay": 1,
                "prob": 0.8
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "奥深くまで突き入れられたままじっくりと腰を回されて蕩ける",
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
          "description": "胸に顔を埋め、奥深くまで突き入れられたままじっくりと腰を回されて蕩ける。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "背後から深く抉られる激しい快感に声を殺して震える",
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
          "description": "後ろから抱きすくめられ、背後から深く抉られる激しい快感に声を殺して震える。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 70,
  "p": 0.16,
  "text": "薄暗い寝室で、男性パートナーの逞しい腕に抱きすくめられる。男らしい汗と石鹸の匂いが鼻腔をくすぐり、太ももを力強く押し開かれる。硬く熱く充血した肉塊が、濡れそぼった肉腔の入口を押し広げ、一気に最奥の子宮口まで突き入れられた……！",
  "diary": [
    "奥まで突かれるたびに頭が真っ白になって、みっともないほど声をあげてシーツを掴んでいた。太い熱情で掻き回される熱い感触に、身体中が痙攣して果てた。",
    "深く繋がったまま、ゆっくりと腰を揺すられる甘い痺れ。彼に抱きしめられながら、子宮の奥底まで愛で満たされていくのを感じた。",
    "背後から組み敷かれ、逃げ場のないまま奥深くを突かれた。激しいピストンの衝撃に翻弄され、愛液を飛び散らせながら絶頂を繰り返した。"
  ],
  "classification": "major",
  "is_major": true
});
