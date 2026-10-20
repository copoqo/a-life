(window.eventDefs = window.eventDefs || []).push({
  "id": "teen_highschool_exam_winter",
  "title": "高校受験の冬・机の上のココアと合格通知",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 174
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 186
      }
    ]
  },
  "weights": {
    "base": 26
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "teen_highschool_exam_winter"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "深夜まで過去問を解き進め、最後の追い込みをかける",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 5,
            "independence": 3,
            "stress": 2
          },
          "narrative": "寒風が吹き荒れる冬の夜。電気スタンドの明かりの下、付箋で膨らんだ過去問集と向き合う。お母さんが差し入れてくれた温かいココアをすすりながら、絶対に第一志望に受かるんだとペンを握りしめた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "睡眠と体調管理を最優先にし、万全のコンディションで本番に挑む",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 3,
            "knowledge": 3,
            "selfKnowledge": 2,
            "stress": -2
          },
          "narrative": "焦る気持ちを抑えて生活リズムを整え、当日の朝は澄み切った頭で試験会場へ。落ち着いて深呼吸し、持てる力をすべて解答用紙にぶつけた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 14,
  "max": 15,
  "p": 0.45,
  "once": true,
  "text": "中学3年生の冬。人生最初の大きな試練となる高校入試。赤いペンで引かれたチェック、模試の判定用紙。雪のちらつく窓の外を眺めながら、未来の自分を信じて机に向かう日々が続く。",
  "diary": [
    "合格通知の桜サクラサクの文字を見た瞬間、腰が抜けるほど安心して涙が出た。あの苦しい冬を乗り越えられたことが、これからの自分の自信になると思う。",
    "受験勉強を終えて、肩の荷が下りた。支えてくれた家族や先生、一緒に頑張った友達に心から感謝したい。"
  ],
  "classification": "daily"
});
