(window.eventDefs = window.eventDefs || []).push({
  "id": "student_partner_graduation_memory",
  "title": "学生時代の秘め事・卒業の日の最後の制服",
  "description": "卒業証書を手にした卒業式の午後。もう二度と着ることのない制服姿のまま、二人の思い出の場所へ。これから始まるそれぞれの進路への不安と、学生時代が終わってしまう喪失感。お互いの存在を肉体に刻みつけるように、制服のボタンを一つずつ外していく……。",
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
          216,
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
    "unique_key": "student_partner_graduation_memory"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "生涯の記憶を刻み込む",
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
          "description": "【制服を愛液と精液で汚しながら】最後の制服姿で激しく交わり、生涯の記憶を刻み込む。",
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
      "label": "粘膜の温もりで包み込む",
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
          "description": "【涙を流しながら静かに身体を重ねる】別れと旅立ちの切なさを、粘膜の温もりで包み込む。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "夕暮れの教室で固く誓いを交わす",
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
          "description": "【制服の第二ボタンを握りしめて抱き合う】身体は重ねず、夕暮れの教室で固く誓いを交わす。",
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
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 22,
  "p": 0.28,
  "text": "卒業証書を手にした卒業式の午後。もう二度と着ることのない制服姿のまま、二人の思い出の場所へ。これから始まるそれぞれの進路への不安と、学生時代が終わってしまう喪失感。お互いの存在を肉体に刻みつけるように、制服のボタンを一つずつ外していく……。",
  "targetGender": "both",
  "femaleVariant": {
    "text": "卒業証書を手にした卒業式の午後。もう二度と着ることのない制服姿のまま、二人の思い出の場所へ。これから始まるそれぞれの進路への不安と、学生時代が終わってしまう喪失感。お互いの存在を肉体に刻みつけるように、制服のボタンを一つずつ外していく……。",
    "choices": [
      [
        "【制服を互いの愛液で汚しながら】最後の制服姿で激しく蜜を擦り合わせ、生涯の記憶を刻み込む",
        {
          "happiness": 6,
          "secrecy": 7,
          "sexualEffects": {
            "desire": 10,
            "intimacyNeed": 10
          }
        }
      ],
      [
        "【涙を流しながら静かに身体を重ねる】別れと旅立ちの切なさを、粘膜の温もりで包み込む",
        {
          "happiness": 5,
          "stress": -2,
          "sexualEffects": {
            "intimacyNeed": 9
          }
        }
      ],
      [
        "【夕暮れの教室で固く誓いを交わす】身体は重ねず、夕暮れの教室で抱き合って想いを誓う",
        {
          "morality": 4,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "卒業証書を床に投げ出し、最後の制服のスカートを捲り上げて激しく交わった。涙と汗と愛液が混ざり合い、女同士の熱い蜜壺を何度も擦り合わせながら、この熱さだけは一生忘れないと胸に誓った。",
      "学生生活の終わりを惜しむように、静かに身体を重ね合った。肌が触れ合うたびに愛おしさが胸に溢れ、温かな結合の中で静かに涙を流した。",
      "夕焼けの中で固く抱き合った。身体を重ねる以上の絆を感じ、これからの未来へ前を向くことができた。"
    ]
  },
  "diary": [
    "卒業証書を床に投げ出し、最後の制服のスカートを捲り上げられて激しく交わった。涙と汗と愛液が混ざり合い、奥深くまで何度も突き上げられながら、この熱さだけは一生忘れないと胸に誓った。",
    "学生生活の終わりを惜しむように、静かに身体を重ね合った。肌が触れ合うたびに愛おしさが胸に溢れ、温かな結合の中で静かに涙を流した。",
    "制服のボタンを握りしめ、夕焼けの中で抱き合った。身体を重ねる以上の絆を感じ、これからの未来へ前を向くことができた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "reflection"
  ],
  "classification": "daily"
});
