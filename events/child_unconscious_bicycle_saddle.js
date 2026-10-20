(window.eventDefs = window.eventDefs || []).push({
  "id": "child_unconscious_bicycle_saddle",
  "title": "幼い日の無意識・自転車のサドルと謎の痺れ",
  "description": "夕暮れの公園。少しサドルの高い自転車にまたがり、ペダルを力強く踏み込む。段差を乗り越えるたび、硬い革サドルの先端が、まだ毛も生えていないショーツ越しの割れ目に強く押し当てられる。下腹の奥にツンと走る甘い痺れ。悪いことのような恥ずかしさを覚えつつも、なぜか足をとめられず、サドルに体重を預けて何度も腰を擦りつけてしまう……。",
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
          84,
          143
        ]
      }
    ]
  },
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "child_unconscious_bicycle_saddle"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "下腹に走る甘い痺れに身を委ねる",
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
          "description": "息を弾ませながらペダルを漕ぎ続け、下腹に走る甘い痺れに身を委ねる。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "立ち止まって震える吐息を漏らす",
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
          "description": "サドルの先端に体重をギュッと押し当て、立ち止まって震える吐息を漏らす。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "慌てて自転車を降りて家へ走る",
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
          "description": "お母さんの呼ぶ声にハッと我に返り、慌てて自転車を降りて家へ走る。",
          "effects": [
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
  "min": 7,
  "max": 11,
  "p": 0.22,
  "text": "夕暮れの公園。少しサドルの高い自転車にまたがり、ペダルを力強く踏み込む。段差を乗り越えるたび、硬い革サドルの先端が、まだ毛も生えていないショーツ越しの割れ目に強く押し当てられる。下腹の奥にツンと走る甘い痺れ。悪いことのような恥ずかしさを覚えつつも、なぜか足をとめられず、サドルに体重を預けて何度も腰を擦りつけてしまう……。",
  "diary": [
    "自転車を漕ぎながら、お尻の真ん中がキュンと痛痒いような変な気持ちになった。息が苦しいのに、ペダルを回す足が止まらなかった。",
    "サドルに身体を押し付けたまま、夕暮れの道でじっと立ち止まった。お腹の奥がジーンと痺れて、太ももの内側が汗でしっとり濡れていた。",
    "夕焼けの空の下でお母さんの声が聞こえて急に恥ずかしくなった。自転車を置いて走って帰ったけれど、パンツが少し温かかった。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
