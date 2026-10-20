(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_sleepover_pajama_party",
  "title": "並べた布団と真夜中の懐中電灯",
  "description": "親の許可をもらって親友の家でお泊まり会。部屋の電気を消して豆電球にし、並んだ布団の中でヒソヒソ話が始まる。",
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
          108,
          155
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
    "unique_key": "elem_sleepover_pajama_party"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "懐中電灯を下から顔に当てて、怖い話をしてキャーキャー叫ぶ",
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
          "description": "懐中電灯を下から顔に当てて、怖い話をしてキャーキャー叫ぶ",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "普段は照れくさくて言えない家族の悩みや将来の夢を語り合う",
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
          "description": "普段は照れくさくて言えない家族の悩みや将来の夢を語り合う",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "min": 9,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "親の許可をもらって親友の家でお泊まり会。部屋の電気を消して豆電球にし、並んだ布団の中でヒソヒソ話が始まる。",
  "diary": [
    "初めて親友の家に泊まった。夜中に学校の七不思議の話をしてたら本当に怖くなって、ふたりでひとつの毛布にくるまって震えながら寝た。一生の思い出。",
    "暗闇の中で、家族のことや自分が不安に思ってることを話した。〇〇ちゃんは黙って手をつないで聞いてくれた。こんなに信頼できる友達に出会えて幸せだ。"
  ],
  "classification": "daily"
});
