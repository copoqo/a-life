(window.eventDefs = window.eventDefs || []).push({
  "id": "student_partner_afterschool_classroom",
  "title": "学生時代の秘め事・放課後の黄昏教室",
  "description": "夕日が橙色に差し込む放課後の教室。生徒たちのざわめきが校門へと遠ざかる中、パートナーと二人きりで鍵をかけた。教卓の前、カーテンを閉め切った薄暗がりで抱き寄せられる。制服のプリーツスカートをたくし上げられ、太ももを撫で上げられる手のひらの熱さに、息が苦しいほど乱れる……。",
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
    "unique_key": "student_partner_afterschool_classroom"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "ショーツをずらされて奥深くまで貪られる",
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
          "description": "【教卓に手をついて背後から】スカートを捲られ、ショーツをずらされて奥深くまで貪られる。",
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
      "label": "素肌の温もりを貪り合う",
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
          "description": "【重なる机の上で抱き合う】制服のシャツの胸元をはだけさせ、素肌の温もりを貪り合う。",
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
      "label": "互いの唇を塞いで静まり返る",
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
          "description": "【見回り足音に息を潜める】廊下の巡回に身体を強張らせ、互いの唇を塞いで静まり返る。",
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
  "text": "夕日が橙色に差し込む放課後の教室。生徒たちのざわめきが校門へと遠ざかる中、パートナーと二人きりで鍵をかけた。教卓の前、カーテンを閉め切った薄暗がりで抱き寄せられる。制服のプリーツスカートをたくし上げられ、太ももを撫で上げられる手のひらの熱さに、息が苦しいほど乱れる……。",
  "publicSex": true,
  "targetGender": "both",
  "femaleVariant": {
    "text": "夕日が橙色に差し込む放課後の教室。生徒たちのざわめきが校門へと遠ざかる中、彼女と二人きりで鍵をかけた。教卓の前、カーテンを閉め切った薄暗がりで抱き寄せられる。同じ女子生徒である彼女の細い指先が制服のプリーツスカートをたくし上げ、温かい手のひらが太ももの内側を撫で這う。甘酸っぱい吐息が耳元にかかり、息が苦しいほど乱れる……。",
    "choices": [
      [
        "【教卓に手をついて背後からまさぐられる】スカートを捲られ、ショーツをずらされて濡れた割れ目を執拗に指先で解される",
        {
          "happiness": 5,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 9,
            "shyness": 7,
            "intimacyNeed": 6
          }
        }
      ],
      [
        "【重なる机の上で抱き合う】制服のシャツの胸元をはだけさせ、ふくよかな素胸と蜜唇を擦り合わせる",
        {
          "happiness": 4,
          "secrecy": 7,
          "sexualEffects": {
            "desire": 7,
            "intimacyNeed": 7
          }
        }
      ],
      [
        "【見回り足音に息を潜める】廊下の巡回に身体を強張らせ、互いの唇を塞いで静まり返る",
        {
          "secrecy": 9,
          "independence": 3,
          "sexualEffects": {
            "shyness": 8,
            "boundaryVoice": 4
          }
        }
      ]
    ],
    "diary": [
      "夕暮れの教室で教卓に手をつかされ、彼女に制服のスカートをまくり上げられた。誰かが来るかもしれない恐怖に震えながら、ぐちゅぐちゅと音を立てる秘所を指先で奥深くまで弄られ、黒板に額を擦りつけて声を押し殺してイッてしまった。",
      "放課後の誰もいない教室で、机の上に押し倒された。制服のボタンを外し、同じ女同士の火照った柔肌と秘唇をぴったりと重ね合わせて、愛液で汚れるのも構わずに求め合った。",
      "巡回の先生の靴音が廊下に響き、息を止めて彼女の華奢な胸にしがみついた。心臓が破裂しそうな緊張感の中、太ももの内側が甘く熱を帯びていた。"
    ]
  },
  "diary": [
    "夕暮れの教室で教卓に手をつかされ、制服のスカートをまくり上げられた。誰かが来るかもしれない恐怖に震えながら、濡れそぼる肉穴を奥深くまで突き上げられ、黒板に額を擦りつけて声を殺してイッてしまった。",
    "放課後の誰もいない教室で、机の上に押し倒された。制服のボタンを外し、互いの火照った素肌をぴったりと重ね合わせて、愛液で汚れるのも構わずに求め合った。",
    "巡回の先生の靴音が廊下に響き、息を止めて相手の胸板にしがみついた。心臓が破裂しそうな緊張感の中、太ももの内側が甘く熱を帯びていた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "classification": "daily"
});
