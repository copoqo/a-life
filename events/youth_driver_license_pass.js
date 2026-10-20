(window.eventDefs = window.eventDefs || []).push({
  "id": "youth_driver_license_pass",
  "title": "教習所のクランク講習と手に入れた運転免許",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 216
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 300
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
    "unique_key": "youth_driver_license_pass"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "仮免試験や路上教習を真剣にこなし、ゴールド免許を目指す",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 3,
            "independence": 4,
            "money": -4,
            "happiness": 3
          },
          "narrative": "脱輪に怯えたS字クランク、緊張でハンドルを握る手が汗ばんだ路上教習。指導員の厳しいアドバイスをノートに書き留め、学科試験も一発合格。交付されたプラスチックの免許証を手にした瞬間、どこへでも行ける自由を手に入れた高揚感に包まれた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "免許取得後すぐにレンタカーを借り、友達と郊外へドライブに出かける",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "communication": 3,
            "independence": 2,
            "money": -2
          },
          "narrative": "初心者マークを前後に貼り、友達を乗せて海沿いの国道へ。音楽をかけながら海風を感じて走るドライブの楽しさに、世界が一段と広がった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 18,
  "max": 25,
  "p": 0.38,
  "once": true,
  "text": "大学生や社会人になり、時間をやりくりして通った自動車教習所。標識の暗記、学科教習、ドキドキの実技講習。自らの運転で車輪を動かす大人のライセンスを手にする。",
  "diary": [
    "運転免許証を取得！ 写真写りはちょっと微妙だったけれど、立派な身分証にもなるし、これで一人で車に乗れると思うとすごく誇らしい。",
    "教習所を無事に卒業！ 路上に出るのが最初は怖かったけれど、自分で車を運転できる自由を手に入れてワクワクしている。"
  ],
  "classification": "daily"
});
