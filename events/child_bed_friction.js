(window.eventDefs = window.eventDefs || []).push({
  "id": "child_bed_friction",
  "title": "真夜中のシーツと太ももの挟み込み",
  "description": "寝苦しい夏の夜、パジャマの下の素肌が汗ばんでシーツに吸い付く。下腹の奥がじくじくと疼いて眠れず、抱き枕や布団を太ももの間にぎゅっと挟み込み、腰を小さく押し付ける。擦れる布地の摩擦と熱気に、喉から細い吐息が零れ落ちる……。",
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
          144,
          203
        ]
      }
    ]
  },
  "weight": {
    "base": 26,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "child_bed_friction"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "シーツの摩擦で熱い絶頂へ登りつめる",
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
          "description": "太ももを固く締め付け、シーツの摩擦で熱い絶頂へ登りつめる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "愛液で濡れた秘所を直接指で弄る",
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
          "description": "手をパジャマの中に滑り込ませ、愛液で濡れた秘所を直接指で弄る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "冷たい水を飲みに起き上がる",
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
          "description": "いけないことをしていると我に返り、冷たい水を飲みに起き上がる。",
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
  "min": 12,
  "max": 16,
  "p": 0.26,
  "text": "寝苦しい夏の夜、パジャマの下の素肌が汗ばんでシーツに吸い付く。下腹の奥がじくじくと疼いて眠れず、抱き枕や布団を太ももの間にぎゅっと挟み込み、腰を小さく押し付ける。擦れる布地の摩擦と熱気に、喉から細い吐息が零れ落ちる……。",
  "diary": [
    "布団を強く太ももで挟み、腰を擦りつけるたびに下腹から甘い痺れが突き上げた。シーツをぎゅっと掴み、吐息を漏らしながら小さな絶頂を迎えた。",
    "指先が愛液でぐちゅぐちゅと音を立てるのが恥ずかしくて、枕に顔を埋めた。自分の身体がこんなにも快感を欲していることに震えた。",
    "火照った身体を冷ますため、暗い台所で水を飲んだ。静まり返った夜の闇の中で、下腹の奥の余韻だけが熱く疼いていた。"
  ],
  "classification": "daily"
});
