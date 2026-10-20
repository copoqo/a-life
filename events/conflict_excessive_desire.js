(window.eventDefs = window.eventDefs || []).push({
  "id": "conflict_excessive_desire",
  "title": "強すぎる淫らな衝動と、拭えぬ罪悪感",
  "description": "仕事中や勉強中、何気ない日常のふとした隙間に、下腹の奥がじくじくと疼き出して止まらなくなる。下着を濡らすほどの愛液が分泌され、誰かに乱暴に抱かれたい、指先で奥深くまで掻き回されたいという淫靡な飢えが頭を支配する。人並み以上に性欲が強すぎるのではないか、自分はどこか異常なのではないかという恐れと自己嫌悪に苛まれる……。",
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
          192,
          431
        ]
      }
    ]
  },
  "weight": {
    "base": 18,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "conflict_excessive_desire"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "自慰で身体の奥の熱を鎮める",
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
          "description": "誰にも言えない欲求不満を認めて、自慰で身体の奥の熱を鎮める。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
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
      "label": "激しい運動や作業で気を紛らわせる",
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
          "description": "異常な性欲を恥じて厳しく自制し、激しい運動や作業で気を紛らわせる。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "肯定しようと努める",
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
          "description": "この抗いがたい情欲も自分の一部だと受け入れ、肯定しようと努める。",
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
  "min": 16,
  "max": 35,
  "p": 0.18,
  "text": "仕事中や勉強中、何気ない日常のふとした隙間に、下腹の奥がじくじくと疼き出して止まらなくなる。下着を濡らすほどの愛液が分泌され、誰かに乱暴に抱かれたい、指先で奥深くまで掻き回されたいという淫靡な飢えが頭を支配する。人並み以上に性欲が強すぎるのではないか、自分はどこか異常なのではないかという恐れと自己嫌悪に苛まれる……。",
  "phase": "any",
  "diary": [
    "鍵をかけた部屋で、溢れる愛液でぬちぬちと音を立てながらクリトリスと膣口を激しく擦り上げた。何度果てても芯に残る渇きに怯えつつも、痺れるような快感に身を投げ出した。",
    "頭をもたげる淫らな妄想を振り払うため、無我夢中で身体を動かした。疲労で筋肉は強張ったけれど、下腹の奥底で燻る熱い疼きは完全には消えてくれなかった。",
    "「性の衝動が強いのは生きるエネルギーが強い証拠だ」と自分に言い聞かせた。下着を汚す愛液の熱さを責めるのをやめると、すっと胸のつかえが下りた。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
