(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_intimacy",
  "title": "シーツの上の本音・夜の対話",
  "description": "肌を重ね合って息を整える寝室。汗ばんだ互いの身体を寄せ合いながら、夜の営みで感じていた快感や、実は痛かったこと、もっと乱暴に求められたいといった赤裸々な希望を囁き合う。",
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
          1031
        ]
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 12,
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
    "unique_key": "adult_intimacy"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "恥じらいを捨てて自らが本当にイキたい方法を耳元でねだる",
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
          "description": "恥じらいを捨てて自らが本当にイキたい方法を耳元でねだる。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "優しく尋ねてみる",
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
          "description": "相手がどんな感覚で抱いているのか、優しく尋ねてみる。",
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
      "label": "相手の胸に顔を埋めて眠る",
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
          "description": "これ以上の会話は照れ臭くて、相手の胸に顔を埋めて眠る。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 85,
  "p": 0.12,
  "text": "肌を重ね合って息を整える寝室。汗ばんだ互いの身体を寄せ合いながら、夜の営みで感じていた快感や、実は痛かったこと、もっと乱暴に求められたいといった赤裸々な希望を囁き合う。",
  "diary": [
    "自分が一番濡れる愛撫の仕方を耳元で打ち明けた。相手が嬉しそうに頷いてくれたとき、心も身体も完全に委ねられた気がした。",
    "相手の身体の反応や気持ちをじっくり聞いた。愛し合うことの奥深さに触れ、お互いの絆がより強固なものになった。",
    "裸のまま抱きしめ合って眠りについた。言葉にしなくても伝わる素肌の温もりが、心地よい微睡みを運んでくれた。"
  ],
  "outcomes": [
    "mutual_talk",
    "mutual_talk",
    "boundary"
  ],
  "classification": "daily"
});
