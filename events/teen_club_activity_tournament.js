(window.eventDefs = window.eventDefs || []).push({
  "id": "teen_club_activity_tournament",
  "title": "汗と涙の夏・部活動の最後の地区総体",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 156
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 180
      }
    ]
  },
  "weights": {
    "base": 25
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "teen_club_activity_tournament"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "仲間と声を掛け合い、最後まで全力でコートを走り抜く",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 3,
            "happiness": 4,
            "communication": 2,
            "stress": -2,
            "bond": {
              "role": "club_mate",
              "status": "close"
            }
          },
          "narrative": "体育館の床に滴る汗と、メガホンの大歓声。苦しい練習を共にしてきた仲間と円陣を組み、最後の一秒まで全力でボールを追いかけた。試合が終わった瞬間、勝敗を超えて全員で抱き合い、熱い涙が頬を濡らした。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ベンチから喉が枯れるまで声援を送り、チームを支える",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 3,
            "morality": 2,
            "happiness": 3
          },
          "narrative": "選手たちにタオルと冷たいドリンクを手渡し、声をからして応援した。自分が支えたチームが粘り強く戦う姿に胸が熱くなり、チームの一員としての誇りを深く実感した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 13,
  "max": 15,
  "p": 0.45,
  "once": true,
  "text": "中学最後の夏。部活動の集大成となる地区総合体育大会。日焼けした肌に染み込む汗の熱気、鳴り響くホイッスル。仲間たちと共に過ごした日々のすべてをぶつける熱い一日が始まる。",
  "diary": [
    "総体が終わった。悔しさもあったけれど、みんなとここまで全力で駆け抜けられたことが本当に誇らしい。一生忘れられない熱い夏になった。",
    "最後の大会、みんなの応援に全力を尽くした。泣きながら笑い合ったミーティングの後、部室で撮った集合写真は私の宝物だ。"
  ],
  "classification": "daily"
});
