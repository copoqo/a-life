(window.eventDefs = window.eventDefs || []).push({
  "id": "student_partner_study_session",
  "title": "学生時代の秘め事・テスト勉強と散らばる教科書",
  "description": "定期試験直前、「一緒に勉強しよう」という名目で訪れた相手の部屋。机に向かってノートを開いていたはずが、不意にペンを取り上げられ、膝の上に抱き上げられる。耳元に囁かれる甘い吐息と、スカートの裾から忍び寄る指先。勉強どころではなくなった頭が、快感で白く痺れていく……。",
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
          180,
          275
        ]
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
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
    "unique_key": "student_partner_study_session"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "シーツの上で貪欲に身体を重ねる",
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
          "description": "【教科書を払いのけてベッドへ】勉強を投げ出し、シーツの上で貪欲に身体を重ねる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ノートを愛液で濡らしながら貫かれる",
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
          "description": "【勉強机の上でそのまま】机に両手をつかされ、ノートを愛液で濡らしながら貫かれる。",
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
      "label": "問題集へ視線を戻す",
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
          "description": "【「試験が終わるまで我慢」と制す】熱いキスだけで我慢させ、問題集へ視線を戻す。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
            },
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
  "min": 15,
  "max": 22,
  "p": 0.28,
  "text": "定期試験直前、「一緒に勉強しよう」という名目で訪れた相手の部屋。机に向かってノートを開いていたはずが、不意にペンを取り上げられ、膝の上に抱き上げられる。耳元に囁かれる甘い吐息と、スカートの裾から忍び寄る指先。勉強どころではなくなった頭が、快感で白く痺れていく……。",
  "targetGender": "both",
  "femaleVariant": {
    "text": "定期試験直前、「一緒に勉強しよう」という名目で訪れた彼女の部屋。机に向かってノートを開いていたはずが、不意にペンを取り上げられ、背後から抱きすくめられる。首筋に落ちる甘い吐息と、スカートの裾から忍び寄る細い指先。勉強どころではなくなった頭が、快感で白く痺れていく……。",
    "choices": [
      [
        "【教科書を払いのけてベッドへ】勉強を投げ出し、シーツの上で貪欲に素肌と蜜を重ね合う",
        {
          "happiness": 5,
          "knowledge": -2,
          "sexualEffects": {
            "desire": 9,
            "shyness": 6
          }
        }
      ],
      [
        "【勉強机の上でそのまま愛撫される】机に両手をつかされ、ノートを愛液で濡らしながら指で奥を掻き回される",
        {
          "happiness": 4,
          "secrecy": 7,
          "sexualEffects": {
            "desire": 8,
            "shyness": 8
          }
        }
      ],
      [
        "【「試験が終わるまで我慢」と制す】熱いキスだけで我慢させ、問題集へ視線を戻す",
        {
          "knowledge": 4,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 6
          }
        }
      ]
    ],
    "diary": [
      "テスト勉強のノートを放り出してベッドに倒れ込んだ。若さゆえの抑えきれない情欲で互いの秘所を擦り合わせ、汗だくになってシーツを濡らしながら朝まで抱き合った。",
      "勉強机の上でスカートを捲られ、ノートの上に愛液を散らしながら後ろから奥を指で解された。真面目な教科書の隣で繰り広げられる淫らな水音に、頭が痺れるほど興奮した。",
      "「今は勉強しなきゃダメ」と彼女の肩を押し返した。名残惜しそうに唇を尖らせる彼女を見て、愛おしさと少しの優越感を覚えた。"
    ]
  },
  "diary": [
    "テスト勉強のノートを放り出してベッドに倒れ込んだ。若さゆえの抑えきれない情欲で何度も奥を突かれ、汗だくになってシーツを濡らしながら朝まで抱き合った。",
    "勉強机の上でスカートを捲られ、ノートの上に愛液を散らしながら後ろから貫かれた。真面目な教科書の隣で繰り広げられる下品なピストンに、頭が痺れるほど興奮した。",
    "「今は勉強しなきゃダメ」と相手の胸を押し返した。名残惜しそうに唇を尖らせる相手を見て、愛おしさと少しの優越感を覚えた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "classification": "daily"
});
