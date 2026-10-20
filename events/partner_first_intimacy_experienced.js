(window.eventDefs = window.eventDefs || []).push({
  "id": "partner_first_intimacy_experienced",
  "title": "過去の経験を秘めた、パートナーとの初夜",
  "description": "薄暗い明かりの下、パートナーの熱い手が衣服の下に滑り込み、火照った素肌をまさぐる。過去の経験で身体は既に快楽を知っており、少し触れられただけで秘唇から蜜が溢れて下着を濡らしてしまう。「もうこんなに濡れてる……」と囁かれ、経験者だと悟られる羞恥と、パートナーの熱情に身を任せたい背徳感で下腹がきゅうと疼く……。",
  "content_rating": "adult",
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
          791
        ]
      },
      {
        "path": "person.experience.has_sexual_experience",
        "op": "eq",
        "value": true
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      },
      {
        "path": "person.experience.has_sexual_experience",
        "op": "eq",
        "value": true
      },
      {
        "path": "derived.has_spouse",
        "op": "eq",
        "value": false
      }
    ]
  },
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "state.current_libido",
          "op": "gte",
          "value": 30
        },
        "factor": 1.5
      }
    ]
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "partner_first_intimacy_experienced"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "過去を忘れて奥まで受け入れる",
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
          "description": "濡れそぼる秘所を広げ、過去を忘れて奥まで受け入れる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "言葉少なに激しく求め合う",
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
          "description": "恥ずかしさに顔を覆い、言葉少なに激しく求め合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "息を整えて抱きしめ合うだけにする",
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
          "description": "胸に去来する過去の記憶に戸惑い、息を整えて抱きしめ合うだけにする。",
          "effects": [
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
  "min": 18,
  "max": 35,
  "p": 0.22,
  "once": true,
  "text": "薄暗い明かりの下、パートナーの熱い手が衣服の下に滑り込み、火照った素肌をまさぐる。過去の経験で身体は既に快楽を知っており、少し触れられただけで秘唇から蜜が溢れて下着を濡らしてしまう。「もうこんなに濡れてる……」と囁かれ、経験者だと悟られる羞恥と、パートナーの熱情に身を任せたい背徳感で下腹がきゅうと疼く……。",
  "phase": "active",
  "diary": [
    "過去に身体を許した経験があるからこそ、少し愛撫されただけで愛液が止まらなくなってしまった。経験を悟られる羞恥心に震えながらも、奥深くまで貫かれた熱い喜びに声を殺して啼いた。",
    "過去の記憶と目の前のパートナーの熱情が混ざり合い、頭が真っ白になるほど激しく身体を重ねた。濡れた肌が擦れ合うぬちりとした音が、夜の部屋にいつまでも響いていた。",
    "過去の経験が脳裏をよぎり、身体を強張らせてしまった。相手は優しく抱きしめてくれたけれど、秘所の奥の疼きが切なかった。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "mutual_talk"
  ],
  "classification": "major",
  "is_major": true
});
