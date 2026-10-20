(window.eventDefs = window.eventDefs || []).push({
  "id": "youth_job_hunting_suit",
  "title": "就職活動の黒髪スーツ・合同説明会と緊張の面接",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 240
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 276
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
    "unique_key": "youth_job_hunting_suit"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "自己分析と企業研究を徹底し、想いを込めて役員面接に挑む",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 4,
            "independence": 3,
            "communication": 3,
            "stress": 3,
            "bond": {
              "role": "colleague",
              "status": "close"
            }
          },
          "narrative": "黒のリクルートスーツに身を包み、パンプスで何社ものオフィスビルへ足を運んだ。エントリーシートの推敲を重ね、緊張で喉がカラカラになりながらも、面接官の目を見て自分の言葉で堂々とビジョンを語った。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "就活仲間と情報交換し、励まし合いながら壁を乗り越える",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 4,
            "happiness": 2,
            "morality": 1,
            "stress": -1
          },
          "narrative": "お祈りメールに落ち込む日もあったけれど、カフェで就活仲間と模擬面接を重ね、愚痴を言い合って励まし合った。一人じゃないと思えたからこそ、前を向き続けることができた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 20,
  "max": 23,
  "p": 0.45,
  "once": true,
  "text": "大学生の春から始まる就職活動。同じような黒髪とスーツに身を包んだ学生たちが街を行き交う。将来どんな社会人になりたいのか、自問自答を繰り返しながら内定を目指して奔走する日々。",
  "diary": [
    "内定の電話をもらった瞬間、駅のホームで涙がこぼれそうになった。たくさんの不採用通知に心が折れそうだったけれど、諦めずにやり抜いて本当によかった。",
    "就活を通して、自分が何を大切に生きていきたいのかを深く見つめ直すことができた。社会に出る覚悟が決まった。"
  ],
  "classification": "daily"
});
