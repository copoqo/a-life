(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_name_calling_retaliation",
  "title": "男子のからかいと悔し涙をこらえた反撃",
  "description": "男子の集団に髪型や背の高さをからかわれた。悔し涙が滲みそうになるが、グッと奥歯を噛みしめて立ちふさがる。",
  "content_rating": "general",
  "enabled": true,
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
          96,
          143
        ]
      }
    ]
  },
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "elem_name_calling_retaliation"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "真っ直ぐ睨みつけ、正論でぐうの音も出ないほど言い負かす",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "真っ直ぐ睨みつけ、正論でぐうの音も出ないほど言い負かす",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "「幼稚なこと言ってるとテストで負けるよ」と冷たくあしらう",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "「幼稚なこと言ってるとテストで負けるよ」と冷たくあしらう",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 8,
  "max": 11,
  "p": 0.7,
  "once": true,
  "text": "男子の集団に髪型や背の高さをからかわれた。悔し涙が滲みそうになるが、グッと奥歯を噛みしめて立ちふさがる。",
  "diary": [
    "からかわれて泣きそうになったけど、絶対に泣かないって決めて言い返した。「人の見た目を笑うなんて最低だよ！」って言ったら、男子たちが黙り込んだ。泣かなくてよかった。",
    "バカにしてきた男子に「そんなこと言ってると次のテストで負けるよ」って冷たく言ってやった。実際、算数のテストで私のほうがずっと点数が高くて、鼻が高かった。"
  ],
  "classification": "daily"
});
