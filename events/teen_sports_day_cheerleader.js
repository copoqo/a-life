(window.eventDefs = window.eventDefs || []).push({
  "id": "teen_sports_day_cheerleader",
  "title": "青空の体育祭・手作りのメガホンと応援合戦",
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
        "value": 216
      }
    ]
  },
  "weights": {
    "base": 22
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "teen_sports_day_cheerleader"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "応援団に入り、放課後練習を重ねたダンスとエールを披露する",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 3,
            "health": 2,
            "happiness": 3,
            "leadership": 1
          },
          "narrative": "お揃いのハチマキを締め、全校生徒の前で息の合った応援パフォーマンスを披露。スタンドから湧き起こる手拍子と歓声に包まれ、チーム全体が一つになった鳥肌の立つような高揚感を味わった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "シールやモールでデコレーションしたメガホンで、クラスの友達を熱烈に応援する",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "communication": 2,
            "aesthetics": 1
          },
          "narrative": "友達とお揃いで作った可愛いデコメガホン。競技に出ているクラスメイトに向かって夢中で名前を叫び、トラックサイドで写真を撮りまくって青春を満喫した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 13,
  "max": 18,
  "p": 0.38,
  "once": true,
  "text": "抜けるような青空の下で開かれる体育祭。クラスカラーのハチマキ、グラウンドに響く応援歌。勝ち負けに一喜一憂し、全員で声をからして応援する青春の熱狂。",
  "diary": [
    "体育祭、最高に盛り上がった！ 声が枯れるまで応援して、最後のリレーでみんなで抱き合って喜んだ。クラスの団結がぐっと深まった一日。",
    "友達と作ったメガホンを持ってたくさん写真を撮った。日焼けした鼻の頭も、全部ひっくるめていい思い出！"
  ],
  "classification": "daily"
});
