(window.eventDefs = window.eventDefs || []).push({
  "id": "encounter_teacher_deep_bond",
  "title": "放課後の理科準備室、標本棚の陰での密通",
  "description": "教卓でのあの日以来、授業中に教壇の先生と視線が絡むたび、下腹が疼いて下着が湿るようになってしまった。放課後、人目を盗んで訪れた施錠された理科準備室。薬品の匂いが漂う薄暗がりの中、白衣の先生に後ろから強く抱きしめられ、耳元に「もうお前なしじゃいられない」と熱い息を吹きかけられる。スカートをめくられ、机に突っ伏した姿勢で秘唇をまさぐられ……。",
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
          192,
          323
        ]
      },
      {
        "path": "history.flags.teacher_classroom_affair",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 15,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "encounter_teacher_deep_bond"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "先生の太い肉塊に奥深くまで貫かれ腰を激しく絡ませる",
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
          "description": "白衣の胸にしがみつき、先生の太い肉塊に奥深くまで貫かれ腰を激しく絡ませる。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "与えられる快楽に啼き悶える",
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
          "description": "生徒と教師の一線を越えた背徳感に涙を流しながら、与えられる快楽に啼き悶える。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "抱きしめ合うだけで身を引く",
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
          "description": "これ以上深入りすれば先生を破滅させると自制し、抱きしめ合うだけで身を引く。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
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
  "min": 16,
  "max": 26,
  "p": 0.15,
  "text": "教卓でのあの日以来、授業中に教壇の先生と視線が絡むたび、下腹が疼いて下着が湿るようになってしまった。放課後、人目を盗んで訪れた施錠された理科準備室。薬品の匂いが漂う薄暗がりの中、白衣の先生に後ろから強く抱きしめられ、耳元に「もうお前なしじゃいられない」と熱い息を吹きかけられる。スカートをめくられ、机に突っ伏した姿勢で秘唇をまさぐられ……。",
  "diary": [
    "施錠された準備室の机の上で、先生の激しいピストンに揺さぶられた。白衣を乱した先生の荒い息遣いと、肉がぶつかり合う湿った水音が部屋に響き、背徳の喜びに頭が真っ白になった。",
    "大人である先生に無慈悲なほど奥深くまで突き上げられ、涙と愛液でシーツ代わりの白衣を汚した。許されない関係だからこそ、身体の芯を貫く快楽は狂おしいほど甘美だった。",
    "先生の熱い体温を感じながらも、最後の一線で踏みとどまった。互いの立場を思い、唇を重ねるだけで準備室を後にした帰り道、夜風が火照った頬に冷たかった。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "mutual_talk"
  ],
  "classification": "major",
  "is_major": true,
  "requires_flag": "teacher_classroom_affair"
});
