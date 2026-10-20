(window.eventDefs = window.eventDefs || []).push({
  "id": "stretched_lip_gloss_secret",
  "title": "放課後のドラッグストア・こっそり買った色つきリップグロス",
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
        "value": 191
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
    "unique_key": "stretched_lip_gloss_secret"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "学校のトイレの鏡で薄く塗り、艶めく唇の感触に胸をときめかせる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "confidence": 2,
            "happiness": 2,
            "sexualEffects": {
              "libido": 1
            }
          },
          "narrative": "お小遣いを握りしめてドラッグストアで買った、透き通るベリー色のリップグロス。放課後、誰もいない女子トイレの鏡の前でそっとチップを唇に乗せた。とろりとしたテクスチャーと甘いストロベリーの香り。指先で輪郭をなぞると、いつもよりぷっくりと艶めいた自分の唇がそこにあり、まるでテレビの中のモデルになったかのように頬が上気した。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "先生に見つからないかヒヤヒヤしながら、ポーチの奥に大切に忍ばせる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "selfKnowledge": 2,
            "stress": -1,
            "aesthetics": 1
          },
          "narrative": "校則違反の小さな背伸び。スクールバッグのポケットの底に隠した小さなチューブに指先で触れるだけで、自分だけの特別な秘密を持ったような甘い緊張感が胸を満たした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 13,
  "max": 15,
  "p": 0.5,
  "once": true,
  "text": "雑誌で見た人気モデルのメイク特集。どうしても試してみたくなり、放課後に友達とドラッグストアのコスメコーナーへ。きらきらと輝く小さなリップグロスを手に取ると、大人の女性への扉をほんの少し開けたような高揚感に包まれる。",
  "diary": [
    "今日、初めて色つきのリップグロスを買った。唇がぷるぷるになって、鏡を見るのがちょっと楽しかった。学校ではつけられないけど、自分だけの宝物。",
    "コスメ売り場で友達とキャーキャー言いながらリップを選んだ時間、なんだかすごくお姉さんになった気分だった。"
  ],
  "classification": "daily"
});
