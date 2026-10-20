(window.eventDefs = window.eventDefs || []).push({
  "id": "conflict_body_complex",
  "title": "身体のコンプレックスと、晒す恐怖",
  "description": "お風呂上がりの脱衣所、全身鏡に映る自分の裸体。胸の形、太ももの太さ、秘唇の黒ずみや形、そして身体から立ち上る特有の匂い……。誰かと肌を重ねたいという憧れを抱きながらも、この不完全な身体を白日の下に晒したとき、相手に幻滅され、汚いと拒絶されるのではないかという生々しい恐怖が足元をすくう……。",
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
          204,
          395
        ]
      }
    ]
  },
  "weight": {
    "base": 17,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "conflict_body_complex"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "少しずつ自分の身体を愛せるよう努める",
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
          "description": "素肌の手入れや保湿を念入りに行い、少しずつ自分の身体を愛せるよう努める。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "body_complex_cherished",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "親密になることへ臆病になる",
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
          "description": "暗がりの中でしか肌を合わせられないと、親密になることへ臆病になる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "愛してくれる相手ならありのままを受け止めてくれるはずだと信じる",
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
          "description": "愛してくれる相手ならありのままを受け止めてくれるはずだと信じる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "body_complex_cherished",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    }
  ],
  "min": 17,
  "max": 32,
  "p": 0.17,
  "text": "お風呂上がりの脱衣所、全身鏡に映る自分の裸体。胸の形、太ももの太さ、秘唇の黒ずみや形、そして身体から立ち上る特有の匂い……。誰かと肌を重ねたいという憧れを抱きながらも、この不完全な身体を白日の下に晒したとき、相手に幻滅され、汚いと拒絶されるのではないかという生々しい恐怖が足元をすくう……。",
  "phase": "any",
  "diary": [
    "香りのよいオイルを手に取り、胸元から太もも、下腹へと丁寧に塗り込んだ。指先に触れる柔らかな肉の感触を慈しみながら、いつかこの肌を愛してくれる誰かを待とうと思った。",
    "電気を消した暗闇でなければ裸を見せられない……そんな頑なな思い込みが心を縛った。他人の美しい肌と比べては落ち込み、深い溜息をついた。",
    "完璧な身体なんてどこにもないのだと自分を励ました。いつか互いの不完全さも含めて抱きしめ合えるような、温かな関係を築きたいと強く願った。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
