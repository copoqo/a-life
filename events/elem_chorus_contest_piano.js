(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_chorus_contest_piano",
  "title": "音楽室のピアノと合唱コンクールの練習",
  "description": "秋の音楽会に向けての合唱練習。男子がふざけて口パクばかりで、女子との間に不穏な空気が漂い始めた。",
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
          120,
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
    "unique_key": "elem_chorus_contest_piano"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "「みんなで金賞取りたいの！ ちゃんと歌って！」と涙目で真剣に訴える",
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
          "description": "「みんなで金賞取りたいの！ ちゃんと歌って！」と涙目で真剣に訴える",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ピアノの伴奏を心を込めて力強く響かせ、音色でクラスを引っ張る",
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
          "description": "ピアノの伴奏を心を込めて力強く響かせ、音色でクラスを引っ張る",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
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
  "min": 10,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "秋の音楽会に向けての合唱練習。男子がふざけて口パクばかりで、女子との間に不穏な空気が漂い始めた。",
  "diary": [
    "ふざける男子に泣きそうになりながら「ちゃんと歌ってよ！」って叫んだ。そしたら男子のリーダーが「…悪かったよ。やるか」って本気で歌い始めて、鳥肌が立った。",
    "指が痛くなるくらいピアノを力強く弾いた。メロディにつられてみんなが自然と大きな声で歌い出して、体育館中に声が響いたとき、鳥肌が立つほど感動した。"
  ],
  "classification": "daily"
});
