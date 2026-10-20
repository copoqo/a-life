(window.eventDefs = window.eventDefs || []).push({
  "id": "senior_grandchild_summer_visit",
  "title": "孫たちの夏休み・縁側のスイカと賑やかな笑い声",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 696
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 1020
      }
    ]
  },
  "weights": {
    "base": 24
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "senior_grandchild_summer_visit"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "冷たいスイカを切り分け、庭でプール遊びをする孫たちに目を細める",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 6,
            "stress": -4,
            "morality": 3
          },
          "narrative": "「おばあちゃん！」と元気に玄関から飛び込んできた小さな孫たち。リビングに散らかるおもちゃ、縁側で頬張る甘いスイカ。賑やかな笑い声に包まれながら、命がこうして次の世代へと受け継がれていく奇跡に胸が熱くなった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "昔ながらのお手玉や折り紙を教え、温かい世代間の交流を楽しむ",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 5,
            "communication": 3,
            "selfKnowledge": 2
          },
          "narrative": "小さな指先に折り紙の折り方を教えてあげると、目を輝かせて喜んでくれた。抱きつかれた時の小さくて柔らかな体温に、生きている喜びを深く噛み締めた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 58,
  "max": 85,
  "p": 0.38,
  "once": true,
  "text": "夏休み、久しぶりに実家へ遊びにやってきた孫たち。静かだった家の中に響き渡る元気な足音と明るい声。縁側に差し込む夏の光の中で、世代を超えた家族の絆が輝く。",
  "diary": [
    "孫たちが遊びに来てくれた！ 家の中が一気にお祭りみたいに賑やかになって、本当に可愛くて幸せだった。元気に育ってほしい。",
    "孫の寝顔を見ながら、命の繋がりって本当に尊いものだなと思った。長生きしてよかったと心から思えた一日。"
  ],
  "classification": "daily"
});
