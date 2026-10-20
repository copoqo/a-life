(window.eventDefs = window.eventDefs || []).push({
  "id": "student_partner_library_stacks",
  "title": "学生時代の秘め事・放課後の図書室の奥",
  "description": "古い紙と埃の匂いが静まり返る図書室。誰も来ない開架書架の最奥、背の高い本棚に挟まれた薄暗い死角に連れ込まれる。本棚に背中を押し付けられ、パートナーの熱い吐息が首筋にかかる。制服のボタンを器用に外され、静寂の中に衣擦れの擦れる音が淫らに響く……。",
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
    "base": 26,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "student_partner_library_stacks"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "静寂を破る激しいピストンに声を殺す",
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
          "description": "【本棚に手をついて立ったまま】スカートを捲られ、静寂を破る激しいピストンに声を殺す。",
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
      "label": "【書架の陰で唇を奪われ指を入れられる】静けさの中でぬちぬちと愛液を掻き回される",
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
          "description": "【書架の陰で唇を奪われ指を入れられる】静けさの中でぬちぬちと愛液を掻き回される。",
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
      "label": "乱れた制服を大急ぎで整える",
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
          "description": "【利用者の足音に我に返る】図書委員の歩く足音に、乱れた制服を大急ぎで整える。",
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
  "p": 0.26,
  "text": "古い紙と埃の匂いが静まり返る図書室。誰も来ない開架書架の最奥、背の高い本棚に挟まれた薄暗い死角に連れ込まれる。本棚に背中を押し付けられ、パートナーの熱い吐息が首筋にかかる。制服のボタンを器用に外され、静寂の中に衣擦れの擦れる音が淫らに響く……。",
  "publicSex": true,
  "targetGender": "both",
  "femaleVariant": {
    "text": "古い紙と埃の匂いが静まり返る図書室。誰も来ない開架書架の最奥、背の高い本棚に挟まれた薄暗い死角に連れ込まれる。本棚に背中を押し付けられ、彼女の甘い吐息が首筋にかかる。制服のボタンを器用に外され、静寂の中に衣擦れの音が淫らに響く……。",
    "choices": [
      [
        "【本棚に手をついて立ったまま】スカートを捲られ、後ろから濡れた割れ目に指を深く沈められて声を殺す",
        {
          "happiness": 5,
          "secrecy": 9,
          "sexualEffects": {
            "desire": 9,
            "shyness": 9
          }
        }
      ],
      [
        "【書架の陰で唇を奪われ胸を吸われる】静けさの中で制服を肌蹴け、柔らかな胸の先を転がされる",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 7,
            "shyness": 8
          }
        }
      ],
      [
        "【利用者の足音に我に返る】図書委員の歩く足音に、乱れた制服を大急ぎで整える",
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
      "誰もいない本棚の死角で、壁に押し付けられるようにして愛撫された。足音ひとつ立てられない静寂の中、彼女の指が奥を掻き回すぬちぬちとした湿った水音だけが響き、恥ずかしさで狂いそうだった。",
      "背表紙の並ぶ暗がりで口を塞がれ、ブラウスの中に手を差し入れられた。尖った胸の先を舌で転がされるたび、声を上げられない苦しさと快感で涙が溢れた。",
      "本の貸し出しカウンターの方から物音がして、慌ててブラウスのボタンを留めた。彼女と離れた後も、太ももの間がじっとりと濡れていた。"
    ]
  },
  "diary": [
    "誰もいない本棚の死角で、壁に押し付けられるようにして貫かれた。足音ひとつ立てられない静寂の中、肉と肉がぶつかるぬちぬちとした湿った音だけが響き、恥ずかしさで狂いそうだった。",
    "背表紙の並ぶ暗がりで口を塞がれ、スカートの中に手を差し入れられた。敏感な突起を指で擦られるたび、声を上げられない苦しさと快感で涙が溢れた。",
    "本の貸し出しカウンターの方から物音がして、慌ててブラウスのボタンを留めた。相手と離れた後も、太ももの間がじっとりと濡れていた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "classification": "daily"
});
