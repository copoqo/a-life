(window.eventDefs = window.eventDefs || []).push({
  "id": "child_body_mirror",
  "title": "脱衣所の鏡とふくらみ始めた胸",
  "description": "入浴前、脱ぎ捨てたシャツのあと。曇った鏡を手のひらで拭うと、少し前まで平らだった胸の先端が小さく膨らみ、薄紅色の乳頭が擦れて痛痒い。指先で恐る恐る触れると、下腹の奥がきゅんと縮むような甘い痺れが走る……。",
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
          120,
          179
        ]
      }
    ]
  },
  "weight": {
    "base": 24,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "child_body_mirror"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "未知のくすぐったさに息を呑む",
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
          "description": "指先でそっと先端をなぞり、未知のくすぐったさに息を呑む。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "急いでシャツに袖を通す",
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
          "description": "恥ずかしさに胸を腕で隠し、急いでシャツに袖を通す。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "静かにため息をつく",
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
          "description": "母親や友達の胸と自分の形を思い比べ、静かにため息をつく。",
          "effects": []
        }
      ]
    }
  ],
  "min": 10,
  "max": 14,
  "p": 0.24,
  "text": "入浴前、脱ぎ捨てたシャツのあと。曇った鏡を手のひらで拭うと、少し前まで平らだった胸の先端が小さく膨らみ、薄紅色の乳頭が擦れて痛痒い。指先で恐る恐る触れると、下腹の奥がきゅんと縮むような甘い痺れが走る……。",
  "diary": [
    "鏡の中の自分の身体が、女の子から大人の女へ変わり始めている。ツンと尖った胸の先を指で撫でた瞬間の甘い痺れが、服を着た後も下腹に残っていた。",
    "ふくらみ始めた胸が気恥ずかしくて、脱衣所で思わずうつむいてしまった。大人になることへの戸惑いが胸を満たした。",
    "友達の制服姿を思い出しながら、自分の成長の早さや遅さに思いを巡らせた。少しずつ女の身体になっていく自分を静かに受け止めた。"
  ],
  "classification": "daily"
});
