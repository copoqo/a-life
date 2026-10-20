(window.eventDefs = window.eventDefs || []).push({
  "id": "student_partner_first_sleepover",
  "title": "学生時代の秘め事・初めてのお泊まりの夜",
  "description": "相手の両親が不在の夜、初めて許されたお泊まり。門限も視線も気にしなくていい二人きりの空間。お風呂上がりの湯気と石鹸の匂い、薄手の部屋着から透ける素肌。ベッドに並んで横たわると、互いの指先が自然と絡み合い、長い夜が静かに幕を開ける……。",
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
          192,
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
    "unique_key": "student_partner_first_sleepover"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "愛液に溺れて果てる",
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
          "description": "【朝陽が昇るまで何度も愛し合う】夜通し何度も肉棒を迎え入れ、愛液に溺れて果てる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "互いの鼓動を聞きながら眠る",
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
          "description": "【素肌を寄せ合って抱き枕のように眠る】身体を重ねた余韻の中、互いの鼓動を聞きながら眠る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "距離を保つ",
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
          "description": "【緊張でぎこちなくテレビを見る】お泊まりの特別さに気恥ずかしさを覚え、距離を保つ。",
          "effects": [
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 16,
  "max": 22,
  "p": 0.28,
  "text": "相手の両親が不在の夜、初めて許されたお泊まり。門限も視線も気にしなくていい二人きりの空間。お風呂上がりの湯気と石鹸の匂い、薄手の部屋着から透ける素肌。ベッドに並んで横たわると、互いの指先が自然と絡み合い、長い夜が静かに幕を開ける……。",
  "targetGender": "both",
  "femaleVariant": {
    "text": "彼女の両親が不在の夜、初めて許されたお泊まり。門限も視線も気にしなくていい二人きりの空間。お風呂上がりの湯気と石鹸の匂い、薄手の部屋着から透ける素肌。ベッドに並んで横たわると、互いの指先が自然と絡み合い、長い夜が静かに幕を開ける……。",
    "choices": [
      [
        "【朝陽が昇るまで何度も愛し合う】互いの柔肌を密着させて蜜壺を擦り合わせ、夜通し愛液に溺れて果てる",
        {
          "happiness": 6,
          "secrecy": 6,
          "sexualEffects": {
            "desire": 10,
            "intimacyNeed": 9
          }
        }
      ],
      [
        "【素肌を寄せ合って抱き枕のように眠る】身体を重ねた余韻の中、互いの鼓動を聞きながら眠る",
        {
          "happiness": 5,
          "stress": -4,
          "sexualEffects": {
            "intimacyNeed": 8
          }
        }
      ],
      [
        "【緊張でぎこちなくテレビを見る】お泊まりの特別さに気恥ずかしさを覚え、距離を保つ",
        {
          "shyness": 5,
          "happiness": 3
        }
      ]
    ],
    "diary": [
      "朝が来るまで、壊れたみたいに何度も身体を重ねた。重なり合う乳房と絡み合う太もも、互いの濡れそぼった蜜芽を狂おしく擦り合わせて、愛液でぐしゃぐしゃになったベッドで朝陽を迎えた。",
      "激しく愛し合ったあと、彼女の腕の中にすっぽり収まって眠った。素肌越しに伝わる一定の心音と温もりが、この上なく幸せだった。",
      "同じ部屋に泊まるというだけで胸が苦しいほど高鳴った。恥ずかしさに耐えながら手を握り合った夜の記憶が甘い。"
    ]
  },
  "diary": [
    "朝が来るまで、壊れたみたいに何度も身体を重ねた。結合したままシーツの上を転がり、奥深くまで精液を注ぎ込まれるたびに啼き叫んで、愛液でぐしゃぐしゃになったベッドで朝陽を迎えた。",
    "激しく愛し合ったあと、相手の腕の中にすっぽり収まって眠った。素肌越しに伝わる一定の心音と温もりが、この上なく幸せだった。",
    "同じ部屋に泊まるというだけで胸が苦しいほど高鳴った。恥ずかしさに耐えながら手を握り合った夜の記憶が甘い。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "reflection"
  ],
  "classification": "daily"
});
