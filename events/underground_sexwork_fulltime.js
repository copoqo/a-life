(window.eventDefs = window.eventDefs || []).push({
  "id": "underground_sexwork_fulltime",
  "title": "風俗嬢としての本職・湯煙の個室と指名客の太い肉棒",
  "description": "昼の仕事に見切りをつけ、風俗店に本指名をもらう看板嬢として本格的に身を投じた。毎日のように見知らぬ男たちの欲望を全身で受け止め、マットの上で泡にまみれて腰を振り、ベッドで啼き乱れる日々。手元に入ってくる大量の万札と、他人の肉塊で執拗に掻き回される肉腔の痺れ。いつしか罪悪感は麻痺し、客の荒い鼻息と肉のぶつかる水音だけが日常を満たしていく……。",
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
          216,
          587
        ]
      }
    ]
  },
  "weight": {
    "base": 24,
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
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "underground_sexwork_fulltime"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "愛液を飛び散らせながら絶頂を貪る",
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
          "description": "【指名客の熱い求めに腰を跳ねさせる】客の太い肉棒に跨がり、愛液を飛び散らせながら絶頂を貪る。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 150000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "風俗"
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "underground_sugar_daddy",
                "delay": 1,
                "prob": 0.8
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "個人営業の立ちんぼを考える",
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
          "description": "【もっと効率よく稼ぐため路上へ目を向ける】店のバックマージンに不満を抱き、個人営業の立ちんぼを考える。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 100000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -6
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "underground_street_standing",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "貯金を増やすことだけに集中する",
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
          "description": "【客に情が移る前に割り切ってこなす】淡々と仕事をこなし、貯金を増やすことだけに集中する。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 160000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "風俗"
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 48,
  "p": 0.04,
  "text": "昼の仕事に見切りをつけ、風俗店に本指名をもらう看板嬢として本格的に身を投じた。毎日のように見知らぬ男たちの欲望を全身で受け止め、マットの上で泡にまみれて腰を振り、ベッドで啼き乱れる日々。手元に入ってくる大量の万札と、他人の肉塊で執拗に掻き回される肉腔の痺れ。いつしか罪悪感は麻痺し、客の荒い鼻息と肉のぶつかる水音だけが日常を満たしていく……。",
  "diary": [
    "本指名客との濃厚なプレイ。泡まみれの身体を密着させ、客の太いモノを奥深くまで飲み込んで狂ったように腰を振った。肉と肉がぶつかる湿ったぬちぬちとした音の中で、客と一緒に果てた。",
    "店に引かれるマージンを計算し、自分で直接客を取る立ちんぼの噂に惹かれた。肉体を売ることへの躊躇いは、もう完全に消え去っていた。",
    "笑顔で客を見送り、熱いシャワーで男たちの体液を洗い流した。通帳の数字だけが、今の自分の唯一の支えだった。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "shared_intimacy"
  ],
  "once": true,
  "classification": "major",
  "is_major": true
});
