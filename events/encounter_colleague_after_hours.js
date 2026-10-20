(window.eventDefs = window.eventDefs || []).push({
  "id": "encounter_colleague_after_hours",
  "title": "深夜のタイムカード、狭いアパートの朝帰り",
  "description": "休憩室での密会を経て、深夜シフトで一緒になるたび、目配せ一つで身体を求め合う関係になっていた。閉店作業を終えてタイムカードを押した深夜3時。どちらからともなく腕を引き合い、近くにある相手の狭いワンルームアパートへ雪崩れ込む。玄関のドアが閉まるなり衣服を脱ぎ捨て、狭い万年床の上で、もつれ合うように素肌を重ねる……。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "coworker": {
      "source": "coworker",
      "required": false
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
          204,
          395
        ]
      }
    ]
  },
  "weight": {
    "base": 16,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "encounter_colleague_after_hours"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "汗だくになりながら朝まで激しく求め合う",
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
          "description": "同僚のたくましい腰つきに合わせ、汗だくになりながら朝まで激しく求め合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
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
      "id": "choice_1",
      "label": "本当の恋人同士になりたいと耳元で甘く囁く",
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
          "description": "身体の相性だけでなく、本当の恋人同士になりたいと耳元で甘く囁く。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "割り切った関係のまま静かに部屋を出る",
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
          "description": "夜が明ける前にそっとベッドを抜け出し、割り切った関係のまま静かに部屋を出る。",
          "effects": [
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
  "min": 17,
  "max": 32,
  "p": 0.16,
  "text": "休憩室での密会を経て、深夜シフトで一緒になるたび、目配せ一つで身体を求め合う関係になっていた。閉店作業を終えてタイムカードを押した深夜3時。どちらからともなく腕を引き合い、近くにある相手の狭いワンルームアパートへ雪崩れ込む。玄関のドアが閉まるなり衣服を脱ぎ捨て、狭い万年床の上で、もつれ合うように素肌を重ねる……。",
  "diary": [
    "薄い敷布団の上で、同僚の硬い肉棒に何度も子宮口をノックされた。汗と愛液が混ざり合い、ぬちぬちと激しい水音を立てながら、夜が明けるまで貪り合うように腰を振った。",
    "身体を重ねた後の温もりに包まれながら、胸元に顔を埋めて気持ちを伝えた。相手のたくましい腕が優しく抱きしめ返してくれて、身体の奥まで幸福感で満たされた。",
    "寝息を立てる同僚の隣で服を着直し、朝焼けの街へ出た。下腹に残る重だるい痺れと愛液の匂いが、秘密の逢瀬の生々しさを刻みつけていた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "mutual_talk",
    "reflection"
  ],
  "classification": "daily"
});
