(window.eventDefs = window.eventDefs || []).push({
  "id": "yearning_unknown_pleasure",
  "title": "未知の快楽への焦燥と下腹の熱",
  "description": "同世代の噂話やネットの体験談を目にするたび、まだ誰にも貫かれたことのない身体の奥がじんわりと疼く。男の人に触れられるとはどういう感覚なのか、なぜあんなにも甘く乱れた声が出てしまうのか。薄いショーツの上から秘所をぎゅっと押し当てると、下腹に経験したことのない重だるい熱が広がり、言い知れぬ焦燥と憧れに息が乱れる……。",
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
          180,
          275
        ]
      },
      {
        "path": "person.experience.has_sexual_experience",
        "op": "eq",
        "value": false
      }
    ]
  },
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "yearning_unknown_pleasure"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "未知の快楽を夢想しながら秘唇をまさぐる",
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
          "description": "ショーツの中に指を忍ばせ、未知の快楽を夢想しながら秘唇をまさぐる。",
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
                "eventId": "yearning_solitary_awakening",
                "delay": 1,
                "prob": 0.9
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "全てを奪われる日を夢見て胸を焦がす",
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
          "description": "いつか熱く愛され、全てを奪われる日を夢見て胸を焦がす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "冷たい水で顔を洗って気を鎮める",
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
          "description": "淫らな妄想に火照る頬を押さえ、冷たい水で顔を洗って気を鎮める。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
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
  "min": 15,
  "max": 22,
  "p": 0.22,
  "text": "同世代の噂話やネットの体験談を目にするたび、まだ誰にも貫かれたことのない身体の奥がじんわりと疼く。男の人に触れられるとはどういう感覚なのか、なぜあんなにも甘く乱れた声が出てしまうのか。薄いショーツの上から秘所をぎゅっと押し当てると、下腹に経験したことのない重だるい熱が広がり、言い知れぬ焦燥と憧れに息が乱れる……。",
  "phase": "virgin",
  "diary": [
    "薄暗い部屋で一人、湿り始めた秘唇に恐る恐る指先を触れさせた。自分のものでありながら知らない女の熱がそこにあり、いつか誰かに激しく暴かれたいという背徳的な憧れに身悶えた。",
    "誰かに激しく求められ、奥深くまで貫かれる自分を想像して下腹がきゅうと収縮した。まだ見ぬ相手の体温と吐息を想うだけで、シーツを太ももで強く挟み込んでしまった。",
    "頭に浮かんだ破廉恥な妄想を必死に振り払った。けれど、冷水で冷やした首筋とは裏腹に、下腹の奥底に灯った小さな火種は消えそうになかった。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
