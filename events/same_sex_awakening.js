(window.eventDefs = window.eventDefs || []).push({
  "id": "same_sex_awakening",
  "title": "放課後の更衣室、白い素肌と甘い汗の匂い",
  "description": "部活動の後の更衣室。西日が差し込む密室で、親しい友人が汗ばんだ制服を脱ぎ捨て、薄いキャミソール一枚になった。火照った白い肩口や華奢な鎖骨、微かに浮き出た胸の膨らみに目が釘付けになり、下腹がきゅんと甘く疼き出す……。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "friend": {
      "source": "friend",
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
          168,
          239
        ]
      }
    ]
  },
  "weight": {
    "base": 18,
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
    "unique_key": "same_sex_awakening"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "熱くなった彼女の背中にそっと手を伸ばす",
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
          "description": "動悸を抑えきれず、熱くなった彼女の背中にそっと手を伸ばす。",
          "effects": [
            {
              "path": "skill.communication_skill",
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
                "eventId": "same_sex_first_kiss",
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
      "label": "太ももを固く合わせる",
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
          "description": "恥ずかしさに顔を真っ赤にして俯き、太ももを固く合わせる。",
          "effects": []
        }
      ]
    }
  ],
  "min": 14,
  "max": 19,
  "p": 0.18,
  "text": "部活動の後の更衣室。西日が差し込む密室で、親しい友人が汗ばんだ制服を脱ぎ捨て、薄いキャミソール一枚になった。火照った白い肩口や華奢な鎖骨、微かに浮き出た胸の膨らみに目が釘付けになり、下腹がきゅんと甘く疼き出す……。",
  "diary": [
    "同じ女の子の身体なのに、あんなに胸が締めつけられて下腹が熱くなるなんて。汗の匂いと透ける肌の白さが頭から離れず、夜になっても秘所がじっとりと濡れていた。",
    "女友達に欲情してしまう自分への戸惑い。恥ずかしさで身体中が火照り、太ももを擦り合わせながら胸の鼓動を鎮めるしかなかった。"
  ],
  "classification": "daily"
});
