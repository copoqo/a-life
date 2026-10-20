(window.eventDefs = window.eventDefs || []).push({
  "id": "stretched_secret_piercing",
  "title": "放課後の友人宅・氷で冷やした耳たぶを貫くピアッサーの銀光",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 192
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 227
      }
    ]
  },
  "weights": {
    "base": 45
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "stretched_secret_piercing"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "「せーの」の合図でカシャリと貫き、耳元の熱さと解放感に震える",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "independence": 4,
            "aesthetics": 3,
            "confidence": 3,
            "stress": -1,
            "bond": {
              "role": "friend",
              "status": "close"
            }
          },
          "narrative": "友達の部屋のこたつに入り、保冷剤で感覚がなくなるまで冷やした耳たぶ。位置を決めて印をつけ、互いに手を握り合ってピアッサーを押し込んだ。パチン、という乾いた音と共に走る鈍い熱と痛み。鏡を覗くと、耳元にキラリと小さなシルバースタッドが光っている。親や学校の敷いたレールから少しだけはみ出したような、甘美な自由がそこにあった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "直前で怖じ気づいてしまい、マグネットピアスで雰囲気を楽しむ",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "selfKnowledge": 2,
            "happiness": 2
          },
          "narrative": "ピアッサーの刃先を見たら急に怖くなり、「やっぱり今日はやめとく！」と叫んで笑い転げた。代わりに友達がくれたノンホールピアスを挟むと、それだけでも十分に横顔が大人びて見えて満足した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 16,
  "max": 18,
  "p": 0.5,
  "once": true,
  "text": "校則では禁止されているピアス。けれどクラスの少し大人びた女子たちは皆、髪の隙間から透明な樹脂ピアスや小さな輝きを覗かせている。放課後、仲の良い友達とドラッグストアでピアッサーを買い込んだ。",
  "diary": [
    "今日、耳にピアスを開けた。パチンって音がしてすごくドキドキした。髪を耳にかけるたびにキラッと光って嬉しい。",
    "友達とピアスを開けようと盛り上がった放課後。ちょっとワルいことしてるみたいなスリルが最高だった。"
  ],
  "classification": "daily"
});
