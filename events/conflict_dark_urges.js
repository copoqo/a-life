(window.eventDefs = window.eventDefs || []).push({
  "id": "conflict_dark_urges",
  "title": "愛のない性欲と、誰かに乱暴に犯されたい衝動",
  "description": "穏やかで優しい愛撫では満たされない、心の底に澱のように沈む暗い渇望。髪を乱暴に引っ張られ、力尽くで組み伏せられて、抵抗も虚しく奥深くまで容赦なく突き上げられたい――。そんな被虐的で倒錯した欲望を抱えていることに戦慄しながらも、想像するだけで秘部からは愛液がだらしなく滴り、クリトリスが猛烈に熱く疼いてしまう……。",
  "content_rating": "adult",
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
          240,
          491
        ]
      }
    ]
  },
  "weight": {
    "base": 15,
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
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "conflict_dark_urges"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "指先で奥を激しく掻き回して果てる",
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
          "description": "倒錯した被虐妄想に身を浸しながら、指先で奥を激しく掻き回して果てる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "dark_urges_liberation",
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
      "label": "健全な日常に留まるよう強く自制する",
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
          "description": "危険な嗜好に惹かれる自分を恐れ、健全な日常に留まるよう強く自制する。",
          "effects": [
            {
              "path": "skill.morality",
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
    },
    {
      "id": "choice_2",
      "label": "少し強引で支配的なプレイを恐る恐る提案してみる",
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
          "description": "信頼できるパートナーに、少し強引で支配的なプレイを恐る恐る提案してみる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "dark_urges_liberation",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    }
  ],
  "min": 20,
  "max": 40,
  "p": 0.15,
  "text": "穏やかで優しい愛撫では満たされない、心の底に澱のように沈む暗い渇望。髪を乱暴に引っ張られ、力尽くで組み伏せられて、抵抗も虚しく奥深くまで容赦なく突き上げられたい――。そんな被虐的で倒錯した欲望を抱えていることに戦慄しながらも、想像するだけで秘部からは愛液がだらしなく滴り、クリトリスが猛烈に熱く疼いてしまう……。",
  "phase": "any",
  "diary": [
    "首を絞められ、力尽くで犯される光景を思い浮かべながら、指を濡れた奥深くまで突き入れた。背徳の快楽に喉を詰まらせ、涙と愛液でシーツを濡らしながら狂乱の絶頂に達した。",
    "自分の中に潜む歪んだ性癖にぞっとした。一歩間違えれば取り返しのつかない傷を負う危険な欲求を、心の檻の中に固く閉じ込め、深呼吸を繰り返した。",
    "寝室で恥じらいながら「少し乱暴に扱ってほしい」と耳元で囁いた。驚きつつも受け止めてくれた相手のいつもと違う力強い手つきに、息が止まるほどの快感を覚えた。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "mutual_talk"
  ],
  "classification": "daily"
});
