(window.eventDefs = window.eventDefs || []).push({
  "id": "student_partner_rain_umbrella",
  "title": "学生時代の秘め事・濡れ透ける制服と相手の部屋",
  "description": "土砂降りの雨の下校路。相合傘でも防ぎきれず、制服のブラウスもスカートもびしょ濡れになって相手の自室へ駆け込んだ。透けた下着と白く浮き出る素肌。タオルで拭き合ううちに互いの体温が触れ合い、雨音に包まれた密室で抗えない熱情が爆発する……。",
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
    "unique_key": "student_partner_rain_umbrella"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "畳の上で果てしなく絶頂する",
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
          "description": "【濡れた制服を脱ぎ捨てて】雨音に紛れて激しく求め合い、畳の上で果てしなく絶頂する。",
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
      "label": "優しい愛撫に身体を溶かす",
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
          "description": "【冷えた肌を温め合うように】タオルにくるまりながら、優しい愛撫に身体を溶かす。",
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
      "label": "まずは温かいお茶で身体を温める",
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
          "description": "【着替えを借りてお茶を飲む】高鳴る胸を抑え、まずは温かいお茶で身体を温める。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
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
  "min": 14,
  "max": 22,
  "p": 0.28,
  "text": "土砂降りの雨の下校路。相合傘でも防ぎきれず、制服のブラウスもスカートもびしょ濡れになって相手の自室へ駆け込んだ。透けた下着と白く浮き出る素肌。タオルで拭き合ううちに互いの体温が触れ合い、雨音に包まれた密室で抗えない熱情が爆発する……。",
  "targetGender": "both",
  "femaleVariant": {
    "text": "土砂降りの雨の下校路。相合傘でも防ぎきれず、制服のブラウスもスカートもびしょ濡れになって彼女の自室へ駆け込んだ。透けた下着と白く浮き出る素肌。バスタオルで互いの濡れた身体を拭き合ううちに、触れ合う指先の熱と雨音に包まれた密室で抗えない熱情が爆発する……。",
    "choices": [
      [
        "【濡れた制服を脱ぎ捨てて】雨音に紛れて素肌を重ね合い、畳の上でお互いの蜜を激しく擦り合わせる",
        {
          "happiness": 5,
          "secrecy": 6,
          "sexualEffects": {
            "desire": 9,
            "intimacyNeed": 8
          }
        }
      ],
      [
        "【冷えた肌を温め合うように】タオルにくるまりながら、優しい指先と舌の愛撫に身体を溶かす",
        {
          "happiness": 4,
          "secrecy": 5,
          "sexualEffects": {
            "desire": 7,
            "intimacyNeed": 7
          }
        }
      ],
      [
        "【着替えを借りてお茶を飲む】高鳴る胸を抑え、まずは温かいお茶で身体を温める",
        {
          "health": 3,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 4
          }
        }
      ]
    ],
    "diary": [
      "雨で透けた制服を脱ぎ合い、濡れた柔肌を直に重ね合わせた。外の激しい雨音に紛れるように荒い息を吐き出し、互いの蜜壺を強く擦り合わせながら、畳を爪で掻きむしって絶頂した。",
      "冷え切った身体を温めるように、首筋から太ももまでゆっくりと彼女の舌と指で這われた。温かな体温と愛液が混ざり合い、身体の芯からとろけるような快感に包まれた。",
      "彼女の部屋着を借りて温かいお茶を飲んだ。雨音を聞きながら肩を寄せ合う時間が、切ないほど愛おしかった。"
    ]
  },
  "diary": [
    "雨で透けた制服を脱がされ、濡れた素肌を直に重ね合わせた。外の激しい雨音に紛れるように荒い息を吐き出し、奥深くまで何度も突き上げられて、畳を爪で掻きむしりながら絶頂した。",
    "冷え切った身体を温めるように、首筋から太ももまでゆっくりと舌と指で這われた。温かな体温と愛液が混ざり合い、身体の芯からとろけるような快感に包まれた。",
    "相手のジャージを借りて温かいお茶を飲んだ。雨音を聞きながら肩を寄せ合う時間が、切ないほど愛おしかった。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "reflection"
  ],
  "classification": "daily"
});
