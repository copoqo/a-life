(window.eventDefs = window.eventDefs || []).push({
  "id": "child_unconscious_skirt_wind_peek",
  "title": "幼い日の無意識・風にめくれたスカートと身体測定",
  "description": "保健室での身体測定の順番待ち、または下校途中の突風。下着一枚や、めくれ上がったスカートによって無防備な素肌を晒してしまう瞬間。同級生の視線が太ももや白いショーツに注がれた時、恥ずかしさで顔から火が出るのと同時に、なぜか下腹の奥がきゅうと縮こまり、太ももの内側が甘く熱を帯びる奇妙な興奮を覚えてしまう……。",
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
          84,
          155
        ]
      }
    ]
  },
  "weight": {
    "base": 20,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "child_unconscious_skirt_wind_peek"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "下腹の奥に芽生えた熱い疼きに戸惑う",
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
          "description": "恥ずかしさに耐えながらスカートを押さえ、下腹の奥に芽生えた熱い疼きに戸惑う。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "太ももをきゅっと擦り合わせて立つ",
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
          "description": "誰かに見られている視線を意識しながら、太ももをきゅっと擦り合わせて立つ。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "平気な顔をして列に並び直す",
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
          "description": "すぐに身だしなみを正し、平気な顔をして列に並び直す。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 7,
  "max": 12,
  "p": 0.2,
  "text": "保健室での身体測定の順番待ち、または下校途中の突風。下着一枚や、めくれ上がったスカートによって無防備な素肌を晒してしまう瞬間。同級生の視線が太ももや白いショーツに注がれた時、恥ずかしさで顔から火が出るのと同時に、なぜか下腹の奥がきゅうと縮こまり、太ももの内側が甘く熱を帯びる奇妙な興奮を覚えてしまう……。",
  "diary": [
    "風でスカートがフワッとめくれた瞬間、男の子と目が合った。恥ずかしくてたまらないのに、太ももの付け根がきゅっと熱くなって息が詰まった。",
    "体操服に着替えるとき、誰かに見られているような気がして身体がゾクゾクした。両足の内側をぎゅっと擦り合わせながら、急いで着替えた。",
    "見られてしまった恥ずかしさを隠すように、つんとした顔で前を向いた。胸の奥の変なざわめきを、誰にも気づかれないように必死だった。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
