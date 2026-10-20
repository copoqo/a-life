(window.eventDefs = window.eventDefs || []).push({
  "id": "child_unconscious_blanket_rubbing",
  "title": "幼い日の無意識・毛布とぬいぐるみの秘密の癖",
  "description": "消灯後の子供部屋。暗闇の中で眠れず、ベッドの上でうつ伏せになり、お気に入りの大きなぬいぐるみと丸めた毛布を両足の間にぎゅっと挟み込む。太ももを締めつけ、下腹を毛布の柔らかいふくらみにリズミカルに押し当てて擦り合わせる。ショーツの中がじっとりと温かく湿り気を帯びていき、心臓がトクトクと跳ねて止まらなくなる……。",
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
          72,
          131
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
    "unique_key": "child_unconscious_blanket_rubbing"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "爪先をピンと伸ばして脱力する",
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
          "description": "うつ伏せのまま腰を激しく毛布に擦りつけ、爪先をピンと伸ばして脱力する。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "秘密を知ってしまった胸のざわめきに浸る",
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
          "description": "湿り気を帯びたショーツの感触を確かめ、秘密を知ってしまった胸のざわめきに浸る。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "慌てて仰向けになって布団を被る",
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
          "description": "誰かに見られたらどうしようと急に不安になり、慌てて仰向けになって布団を被る。",
          "effects": [
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
  "min": 6,
  "max": 10,
  "p": 0.22,
  "text": "消灯後の子供部屋。暗闇の中で眠れず、ベッドの上でうつ伏せになり、お気に入りの大きなぬいぐるみと丸めた毛布を両足の間にぎゅっと挟み込む。太ももを締めつけ、下腹を毛布の柔らかいふくらみにリズミカルに押し当てて擦り合わせる。ショーツの中がじっとりと温かく湿り気を帯びていき、心臓がトクトクと跳ねて止まらなくなる……。",
  "diary": [
    "夜、ぬいぐるみをギュッとはさんで腰を動かしていたら、爪先までピーンとなって身体が震えた。胸がドキドキして、息がハァハァと弾んだ。",
    "パンツの前のところが少し湿っていて、温かい匂いがした。誰にも言えない恥ずかしいことのような気がして、ぎゅっと目を閉じた。",
    "お母さんがドアを開けたらどうしようと思って、慌てて仰向けに寝返りをうった。暗闇の中で、心臓の音だけが大きく響いていた。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
