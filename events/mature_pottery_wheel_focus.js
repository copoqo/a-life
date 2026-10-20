(window.eventDefs = window.eventDefs || []).push({
  "id": "mature_pottery_wheel_focus",
  "title": "静かな陶芸教室・無心になって回すろくろと土の冷たさ",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 540
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 840
      }
    ]
  },
  "weights": {
    "base": 20
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "mature_pottery_wheel_focus"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "電動ろくろに向かい、指先の感覚を研ぎ澄ませて端正な湯呑みを形作る",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 4,
            "stress": -5,
            "happiness": 3,
            "bond": {
              "role": "mentor",
              "status": "acquaintance"
            }
          },
          "narrative": "ひんやりとした粘土の感触。回転する台の上で、掌の力を微妙にコントロールしながら器の形を整えていく。雑念が消え去り、土と向き合う静かな時間。窯で焼き上がった自分だけの器でお茶を飲むひとときは格別の味わいだった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "手びねりで味のある大皿を作り、手作りの料理を盛り付ける",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "curiosity": 3,
            "happiness": 4,
            "aesthetics": 3
          },
          "narrative": "土をこね、釉薬の色合いを選ぶ楽しさ。少し歪だけれど温かみのある自作の大皿。日々の食卓に自分の手作りの器が並ぶ誇らしさを感じた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 45,
  "max": 70,
  "p": 0.35,
  "once": true,
  "text": "仕事や生活が落ち着いた年代になり、新しく始めた陶芸教室。木漏れ日が差し込む工房、水と土の匂い。電動ろくろを回しながら、無心になって形を生み出す豊かなひととき。",
  "diary": [
    "陶芸教室で初めてろくろを回した。土の冷たい感触に集中していると、頭の中のモヤモヤが全部消えていく。焼き上がりが待ち遠しい。",
    "自分で作った湯呑みでお茶を飲んだ。不格好だけど手に馴染んで、何倍も美味しく感じる。素敵な趣味に出会えた。"
  ],
  "classification": "daily"
});
