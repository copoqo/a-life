(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_cooking_class_challenge",
  "title": "週末の料理教室・スパイスから作る手作りカレー",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 288
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 540
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
    "unique_key": "adult_cooking_class_challenge"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "ホールスパイスの香りを引き出し、本格的なチキンカレーをマスターする",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 3,
            "happiness": 4,
            "aesthetics": 2,
            "bond": {
              "role": "club_mate",
              "status": "acquaintance"
            }
          },
          "narrative": "油でクミンやカルダモンをじっくり炒め、香りを立たせる手際を教わる。玉ねぎが飴色になるまで根気よく炒め、出来上がった奥深い味わいのカレー。自宅でも再現して友人を招いて振る舞い、「お店の味みたい！」と大絶賛された。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "基本の出汁の取り方と和食の煮物を丁寧に学び直す",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 3,
            "knowledge": 3,
            "happiness": 3
          },
          "narrative": "昆布と鰹節から取る澄んだ黄金色のお出汁。素材の味を活かした筑前煮や出汁巻き卵を丁寧に作り、毎日の食卓が格段に豊かになった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 24,
  "max": 45,
  "p": 0.36,
  "once": true,
  "text": "日々の食生活をもっと充実させたいと通い始めた週末のクッキングスクール。清潔なキッチンスタジオに広がる香辛料や焼き立てパンの芳醇な香り。新しいレシピを学ぶ楽しさに心が弾む。",
  "diary": [
    "料理教室で作った本格スパイスカレー、我ながら絶品だった！ 調味料の組み合わせでこんなに味が変わるなんて面白い。料理がもっと好きになった。",
    "丁寧に出汁を取る料理を学んだ。日々の食事を大切にすることが、自分を大切にすることに繋がっている気がする。"
  ],
  "classification": "daily"
});
