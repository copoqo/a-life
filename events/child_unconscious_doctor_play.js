(window.eventDefs = window.eventDefs || []).push({
  "id": "child_unconscious_doctor_play",
  "title": "幼い日の無意識・押し入れの秘密のお医者さんごっこ",
  "description": "雨の日の午後、幼馴染と二人きりで潜り込んだ押し入れの暗がり。「お医者さんごっこしよう」という何気ない一言から、互いにズボンとパンツを下ろすことに。自分とは違う相手の身体の形、そして相手の無垢な視線に晒される自分の小さく閉じた秘所。恐る恐る伸ばされた指先が触れ合った瞬間、言葉にできない熱いものが下腹の奥をキュンと刺し貫く……。",
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
    "base": 20,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "child_unconscious_doctor_play"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "お互いの温かい肌と指先の感触をじっと確かめ合う",
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
          "description": "息を呑んで触れ合い、お互いの温かい肌と指先の感触をじっと確かめ合う。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "じっと見つめ合って胸を高鳴らせる",
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
          "description": "恥ずかしさで太ももを閉じそうになりながらも、じっと見つめ合って胸を高鳴らせる。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "何食わぬ顔で押し入れを出る",
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
          "description": "大人の足音が近づいてきた気配に慌ててパンツを引き上げ、何食わぬ顔で押し入れを出る。",
          "effects": []
        }
      ]
    }
  ],
  "min": 6,
  "max": 10,
  "p": 0.2,
  "text": "雨の日の午後、幼馴染と二人きりで潜り込んだ押し入れの暗がり。「お医者さんごっこしよう」という何気ない一言から、互いにズボンとパンツを下ろすことに。自分とは違う相手の身体の形、そして相手の無垢な視線に晒される自分の小さく閉じた秘所。恐る恐る伸ばされた指先が触れ合った瞬間、言葉にできない熱いものが下腹の奥をキュンと刺し貫く……。",
  "diary": [
    "暗い押し入れの中で、お互いのパンツを脱ぎっこして触りっこした。指先が当たったとき、お腹の奥がツンとして、悪いことをしているドキドキで胸がいっぱいになった。",
    "見られちゃいけない場所を見られていると思うと、顔が真っ赤になった。でも、目をそらすことができなくて、じっと息を止めていた。",
    "廊下の足音が聞こえて、大急ぎでズボンを穿いた。押し入れから出たとき、二人で目を見合わせて、小さな秘密を共有した気がした。"
  ],
  "outcomes": [
    "shared_activity",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
