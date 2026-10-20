(window.eventDefs = window.eventDefs || []).push({
  "id": "student_partner_infirmary_bed",
  "title": "学生時代の秘め事・保健室の白いカーテン",
  "description": "消毒液の匂いが漂う保健室。養護教諭が職員室へ席を外したわずかな隙に、パートナーがベッドのカーテンを開けて潜り込んできた。狭いパイプベッドに二人で横たわり、白いシーツの中で服の隙間から手が這う。先生がいつ戻るかわからない極限のスリルに、下腹の奥が熱く疼く……。",
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
    "unique_key": "student_partner_infirmary_bed"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "熱い結合に啼き乱れる",
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
          "description": "【毛布を被って音を殺し交わる】カーテンの向こうを気にしながら、熱い結合に啼き乱れる。",
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
      "label": "指先で愛液を掻き回される快感に耐える",
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
          "description": "【シーツの中で愛撫に溺れる】下着をずらされ、指先で愛液を掻き回される快感に耐える。",
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
      "label": "慌てて相手をベッドから押し出す",
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
          "description": "【足音に怯えて身を起こす】保健室の引き戸が開く気配に、慌てて相手をベッドから押し出す。",
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
  "text": "消毒液の匂いが漂う保健室。養護教諭が職員室へ席を外したわずかな隙に、パートナーがベッドのカーテンを開けて潜り込んできた。狭いパイプベッドに二人で横たわり、白いシーツの中で服の隙間から手が這う。先生がいつ戻るかわからない極限のスリルに、下腹の奥が熱く疼く……。",
  "publicSex": true,
  "targetGender": "both",
  "femaleVariant": {
    "text": "消毒液の匂いが漂う保健室。養護教諭が職員室へ席を外したわずかな隙に、彼女がベッドのカーテンを開けて潜り込んできた。狭いパイプベッドに制服のまま二人で横たわり、白いシーツの中で互いのスカートの下に手を滑り込ませる。先生がいつ戻るかわからない極限のスリルに、下腹の奥が熱く疼く……。",
    "choices": [
      [
        "【毛布を被って音を殺し交わる】カーテンの向こうを気にしながら、舌と指で敏感な突起を吸い上げられる",
        {
          "happiness": 5,
          "secrecy": 9,
          "sexualEffects": {
            "desire": 9,
            "shyness": 8
          }
        }
      ],
      [
        "【シーツの中で互いの蜜を擦り合う】下着をずらし、絡み合う太ももで秘唇を強く押し当てて愛液を交わす",
        {
          "happiness": 4,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 7,
            "shyness": 7
          }
        }
      ],
      [
        "【足音に怯えて身を起こす】保健室の引き戸が開く気配に、慌てて彼女をベッドから押し出す",
        {
          "secrecy": 7,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "保健室の白い毛布にくるまり、声を押し殺しながら肌を重ねた。先生が戻ってくるかもしれない恐怖の中、彼女の熱い舌先で敏感な豆を吸い転がされ、シーツを噛み締めながら激しい絶頂に震えた。",
      "カーテンの隙間からの光に怯えながら、シーツの中で互いの濡れた秘所を擦り合わせた。ぬちぬちと音を立てる愛液が混ざり合い、毛布に顔を埋めて同時に果てた。",
      "先生の足音が聞こえて心臓が止まるかと思った。何食わぬ顔で熱を測るふりをしたけれど、身体の奥の火照りは夕方まで治まらなかった。"
    ]
  },
  "diary": [
    "保健室の白い毛布にくるまり、声を押し殺しながら身体を重ねた。先生が戻ってくるかもしれない恐怖の中で貫かれる肉棒の熱さは格別で、シーツを噛み締めながら熱い中出しを受け止めた。",
    "カーテンの隙間からの光に怯えながら、シーツの中で秘唇をまさぐられた。ぐちゅぐちゅと音を立てる愛液を指先で擦り上げられ、毛布に顔を埋めて絶頂した。",
    "先生の足音が聞こえて心臓が止まるかと思った。何食わぬ顔で熱を測るふりをしたけれど、身体の奥の火照りは夕方まで治まらなかった。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "classification": "daily"
});
