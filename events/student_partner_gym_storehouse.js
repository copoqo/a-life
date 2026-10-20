(window.eventDefs = window.eventDefs || []).push({
  "id": "student_partner_gym_storehouse",
  "title": "学生時代の秘め事・体育館の用具倉庫",
  "description": "埃と汗、古いウレタンマットの匂いが立ち込める体育倉庫の奥。放課後の部活の掛け声が遠く聞こえる中、パートナーの手を引いて暗がりへ滑り込む。積み上げられた跳び箱とマットの山に押し倒され、体操服の裾から滑り込んできた熱い手が、汗ばんだ柔肌と秘唇をまさぐり始める……。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
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
          168,
          275
        ]
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      },
      {
        "path": "skill.morality",
        "op": "lte",
        "value": 0
      },
      {
        "path": "person.career.employment_status",
        "op": "eq",
        "value": "student"
      }
    ]
  },
  "weight": {
    "base": 28,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "student_partner_gym_storehouse"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "肉棒を奥底まで迎え入れる",
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
          "description": "【マットの上に倒れ込んで】汗まみれの身体を重ね合わせ、肉棒を奥底まで迎え入れる。",
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
      "id": "choice_1",
      "label": "指先で濡れた割れ目をぐちゃぐちゃに掻き回される",
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
          "description": "【跳び箱に寄りかかって】体操着を乱し、指先で濡れた割れ目をぐちゃぐちゃに掻き回される。",
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
      "id": "choice_2",
      "label": "服を直して息を殺す",
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
          "description": "【部員の気配に慌てる】倉庫の扉がガタリと鳴り、服を直して息を殺す。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 14,
  "max": 22,
  "p": 0.28,
  "text": "埃と汗、古いウレタンマットの匂いが立ち込める体育倉庫の奥。放課後の部活の掛け声が遠く聞こえる中、パートナーの手を引いて暗がりへ滑り込む。積み上げられた跳び箱とマットの山に押し倒され、体操服の裾から滑り込んできた熱い手が、汗ばんだ柔肌と秘唇をまさぐり始める……。",
  "publicSex": true,
  "targetGender": "both",
  "femaleVariant": {
    "text": "埃と汗、古いウレタンマットの匂いが立ち込める体育倉庫の奥。放課後の部活の掛け声が遠く聞こえる中、彼女の手を引いて暗がりへ滑り込む。積み上げられた跳び箱とマットの山に押し倒され、体操服の裾から滑り込んできた彼女の熱い手が、汗ばんだ柔肌と秘唇をまさぐり始める……。",
    "choices": [
      [
        "【マットの上に倒れ込んで】汗まみれの身体を密着させ、互いの濡れた秘唇を狂おしく擦り合わせる",
        {
          "happiness": 5,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 9,
            "shyness": 8
          }
        }
      ],
      [
        "【跳び箱に寄りかかって】体操着を乱し、繊細な指先で濡れた割れ目をぐちゃぐちゃに掻き回される",
        {
          "happiness": 4,
          "secrecy": 7,
          "sexualEffects": {
            "desire": 7,
            "shyness": 7
          }
        }
      ],
      [
        "【部員の気配に慌てる】倉庫の扉がガタリと鳴り、服を直して息を殺す",
        {
          "secrecy": 8,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "体育倉庫の埃っぽいマットの上に倒れ込み、汗で張り付いた下着を脱がされた。部活の掛け声が聞こえるすぐそばで、女同士の濡れた蜜壺をぬちぬちと激しく擦り合わせる水音が反響して、恥ずかしさで頭がおかしくなりそうだった。",
      "跳び箱に背中を押し当てられ、体操服の胸元から指をねじ込まれた。汗の匂いと愛液の淫臭が混ざり合い、彼女の指先が奥の天井を擦り上げるたびに何度も絶頂した。",
      "誰かが倉庫の外を通る気配に、二人で固まって息を潜めた。彼女の甘い吐息が耳元にかかるたび、下腹がきゅうと甘く疼いて困った。"
    ]
  },
  "diary": [
    "体育倉庫の埃っぽいマットの上に倒れ込み、汗で張り付いた下着を脱がされた。部活の掛け声が聞こえるすぐそばで、激しく肉穴を突き上げられる水音が倉庫に反響して、恥ずかしさで頭がおかしくなりそうだった。",
    "跳び箱に背中を押し当てられ、体操服の胸元から指をねじ込まれた。汗の匂いと愛液の淫臭が混ざり合い、息を殺しながら何度も太ももを痙攣させて絶頂した。",
    "誰かが倉庫の外を通る気配に、二人で固まって息を潜めた。相手の熱い吐息が耳元にかかるたび、下腹がきゅうと甘く疼いて困った。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "classification": "daily"
});
