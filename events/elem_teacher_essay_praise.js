(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_teacher_essay_praise",
  "title": "国語の時間の朗読と先生の丸つけ",
  "description": "家族や友達について書いた作文を、先生が「すごく心に響く文章だから、みんなの前で読んでほしい」と教壇に呼んでくれた。",
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
    "unique_key": "elem_teacher_essay_praise"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "胸を張って自分の言葉で読み上げ、教室中から拍手をもらう",
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
          "description": "胸を張って自分の言葉で読み上げ、教室中から拍手をもらう",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "恥ずかしくて顔を真っ赤にしながらも、一言一言丁寧に読み切る",
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
          "description": "恥ずかしくて顔を真っ赤にしながらも、一言一言丁寧に読み切る",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
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
  "min": 8,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "家族や友達について書いた作文を、先生が「すごく心に響く文章だから、みんなの前で読んでほしい」と教壇に呼んでくれた。",
  "diary": [
    "教壇の前に立って作文を読んだ。最初は足が震えたけど、読み進めるうちにみんなが真剣に聞いてくれてるのがわかった。拍手をもらったとき、誇らしくて胸がいっぱいになった。",
    "顔から火が出るくらい恥ずかしかったけど、最後まで読んだ。席に戻ったら隣の男子まで「お前の作文、なんか良かったよ」って言ってくれて、嬉しさを噛みしめた。"
  ],
  "classification": "daily"
});
