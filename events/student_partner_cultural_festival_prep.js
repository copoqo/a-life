(window.eventDefs = window.eventDefs || []).push({
  "id": "student_partner_cultural_festival_prep",
  "title": "学生時代の秘め事・文化祭前夜の準備室",
  "description": "文化祭の前日、薄暗くなった校舎の居残り準備。段ボールや木材が積み上げられた準備室の奥で、パートナーと二人きりになった。祭りの前の異様な高揚感と疲れ。ペンキの匂いが漂う中、相手の逞しい腕に引き寄せられ、制服越しに心臓の鼓動が重なり合う……。",
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
    "unique_key": "student_partner_cultural_festival_prep"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "息を殺して奥まで深く貫かれる",
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
          "description": "【段ボールの山に隠れて】作業着のまま求め合い、息を殺して奥まで深く貫かれる。",
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
      "label": "指先で愛液を掻き回されてイく",
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
          "description": "【薄暗がりで乱れる制服】スカートをたくし上げられ、指先で愛液を掻き回されてイく。",
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
      "label": "慌ててペンキを手に取る",
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
          "description": "【他の生徒の声に慌てて離れる】廊下を歩くクラスメイトの声に、慌ててペンキを手に取る。",
          "effects": [
            {
              "path": "skill.communication_skill",
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
  "text": "文化祭の前日、薄暗くなった校舎の居残り準備。段ボールや木材が積み上げられた準備室の奥で、パートナーと二人きりになった。祭りの前の異様な高揚感と疲れ。ペンキの匂いが漂う中、相手の逞しい腕に引き寄せられ、制服越しに心臓の鼓動が重なり合う……。",
  "publicSex": true,
  "targetGender": "both",
  "femaleVariant": {
    "text": "文化祭の前日、薄暗くなった校舎の居残り準備。段ボールや木材が積み上げられた準備室の奥で、彼女と二人きりになった。祭りの前の異様な高揚感と疲れ。ペンキの匂いが漂う中、引き寄せられた制服越しに彼女の柔らかな胸と心臓の鼓動が重なり合う……。",
    "choices": [
      [
        "【段ボールの山に隠れて】作業着のまま求め合い、息を殺して互いの秘唇を強く擦り合わせる",
        {
          "happiness": 5,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 9,
            "shyness": 7
          }
        }
      ],
      [
        "【薄暗がりで乱れる制服】スカートをたくし上げられ、繊細な指先で愛液を掻き回されてイく",
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
        "【他の生徒の声に慌てて離れる】廊下を歩くクラスメイトの声に、慌ててペンキを手に取る",
        {
          "social": 3,
          "secrecy": 5,
          "sexualEffects": {
            "boundaryVoice": 4
          }
        }
      ]
    ],
    "diary": [
      "段ボールの陰に隠れ、文化祭の準備作業の合間に身体を重ねた。誰かに見つかるかもしれないスリルの中、女同士の濡れた蜜を押し付け合い、声を押し殺して絶頂した。",
      "薄暗い準備室で制服を乱され、彼女の指先でぐちゃぐちゃになるまで愛撫された。太ももを伝う愛液を拭き取りながら、明日からの文化祭が特別なものに思えた。",
      "友達の呼ぶ声が聞こえて慌てて身体を離した。火照った頬を両手で冷ましながら、教室へ戻る足取りがふわふわと軽かった。"
    ]
  },
  "diary": [
    "段ボールの陰に隠れ、文化祭の準備作業の合間に身体を重ねた。誰かに見つかるかもしれないスリルと文化祭の熱気に背中を押され、乱暴なピストンに声を押し殺して絶頂した。",
    "薄暗い準備室で制服を乱され、指先でぐちゃぐちゃになるまで愛撫された。太ももを伝う愛液を拭き取りながら、明日からの文化祭が特別なものに思えた。",
    "友達の呼ぶ声が聞こえて慌てて身体を離した。火照った頬を両手で冷ましながら、教室へ戻る足取りがふわふわと軽かった。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "classification": "daily"
});
