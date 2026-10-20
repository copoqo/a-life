(window.eventDefs = window.eventDefs || []).push({
  "id": "yearning_solitary_awakening",
  "title": "夜の帳と、秘密の指先の味",
  "description": "あの夜以来、一人きりの自室の静けさが下腹を甘く疼かせる。薄暗い常夜灯の下、ショーツを脱ぎ捨ててベッドに横たわり、恐る恐る自らの指先を秘唇へと這わせる。そっと触れただけで、粘膜からとろりとした透明な愛液が溢れ出し、ツンと甘酸っぱい雌の匂いが立ち上る。指先に濡れたクリトリスを挟み込み、小さな肉芽を転がすたび、背筋を鋭い痺れが駆け抜けて嬌声が漏れそうになる……。",
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
          180,
          299
        ]
      }
    ]
  },
  "weight": {
    "base": 15,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "yearning_solitary_awakening"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "未知の熱い快感に身悶える",
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
          "description": "濡れた指先を膣口の奥へと押し込み、未知の熱い快感に身悶える。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "yearning_daydream_distraction",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "自らの身体が女である生々しさに息を呑む",
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
          "description": "指についた蜜の匂いを嗅ぎ、自らの身体が女である生々しさに息を呑む。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "慌てて指を抜いてシーツで拭う",
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
          "description": "こんな淫らな行為に溺れる自分を恥じ、慌てて指を抜いてシーツで拭う。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
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
  "min": 15,
  "max": 24,
  "p": 0.15,
  "text": "あの夜以来、一人きりの自室の静けさが下腹を甘く疼かせる。薄暗い常夜灯の下、ショーツを脱ぎ捨ててベッドに横たわり、恐る恐る自らの指先を秘唇へと這わせる。そっと触れただけで、粘膜からとろりとした透明な愛液が溢れ出し、ツンと甘酸っぱい雌の匂いが立ち上る。指先に濡れたクリトリスを挟み込み、小さな肉芽を転がすたび、背筋を鋭い痺れが駆け抜けて嬌声が漏れそうになる……。",
  "diary": [
    "ぬちぬちと卑猥な水音を立てながら、自分の指を奥深くまで出し入れした。膣壁が指をきゅうきゅうと吸い付き、身体の芯から突き上げる甘い痙攣とともに、腰を跳ねさせて激しく絶頂した。",
    "指先に絡みつく生暖かい愛液。胸元に近づけると、ほんのり蒸れた甘酸っぱい匂いがして、自分が紛れもない女であることを嫌というほど自覚させられた。",
    "指を引き抜いた後も、下腹の奥で脈打つ熱い疼きは収まらなかった。汚してしまったシーツの染みを見つめ、罪悪感と快感の余韻で胸が苦しかった。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
