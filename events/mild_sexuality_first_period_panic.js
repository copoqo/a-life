(window.eventDefs = window.eventDefs || []).push({
  "id": "mild_sexuality_first_period_panic",
  "title": "初めての生理の日の放課後・友達がそっと貸してくれたカーディガン",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 144
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 180
      }
    ]
  },
  "weights": {
    "base": 35
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "mild_sexuality_first_period_panic"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "友達の優しい気遣いに救われ、保健室で正しいナプキンの使い方を教わる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 4,
            "morality": 2,
            "communication": 3,
            "selfKnowledge": 3,
            "sexualEffects": {
              "libido": 1
            },
            "bond": {
              "role": "friend",
              "status": "close",
              "gender": "female"
            }
          },
          "narrative": "放課後、椅子から立ち上がった瞬間に感じた下腹部のぬるりとした重み。スカートの裏側に小さな赤い染みを見つけて血の気が引いた。パニックになりかけた私に、仲良しの友達が何も言わずに自分のカーディガンを腰に巻いてくれた。「保健室、一緒に行こ」。保健室の先生からナプキンをもらい、優しく説明を受けながら、大人の女性の身体になった重みと、女友達の温かい絆に涙がこぼれた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "家に帰って母に打ち明け、お祝いのお赤飯を照れながら食べる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "morality": 3,
            "health": 2
          },
          "narrative": "無事に帰宅し、母に報告した。母は目を細めて抱きしめてくれ、その夜は小さなケーキとお赤飯でお祝いしてくれた。少し恥ずかしかったけれど、温かく祝福されて心が満たされた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 12,
  "max": 14,
  "p": 0.5,
  "once": true,
  "text": "ある日の学校生活の中で突然訪れた初潮（初めての月経）。下腹部の重い痛みと、下着を汚してしまったことへの恐怖と混乱。大人の女性へと身体が成熟していく決定的な節目。",
  "diary": [
    "今日、初めて生理がきた。すごく焦ったけれど、友達がカーディガンを貸してくれて本当に助かった。私も大人の身体になったんだなと実感した。",
    "お母さんに生理がきたことを伝えたら、すごく喜んでくれた。体調に気をつけながら、自分の身体を大切にしていきたい。"
  ],
  "classification": "daily"
});
