(window.eventDefs = window.eventDefs || []).push({
  "id": "mild_sexuality_mirror_body_check",
  "title": "お風呂上がりの脱衣所・湯気の中で見つめる成熟した自分の身体",
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
        "value": 240
      }
    ]
  },
  "weights": {
    "base": 35
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "mild_sexuality_mirror_body_check"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "曇った鏡を手のひらで拭い、成熟した胸とくびれのラインを静かに見つめる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "selfKnowledge": 3,
            "desire": 2,
            "sexualEffects": {
              "libido": 2
            }
          },
          "narrative": "湯上がりの脱衣所。熱いシャワーを浴びてピンク色に上気した素肌。白く曇った大きな鏡を手のひらで拭うと、露わになった自分の裸身が映し出された。ふっくらと重みを増した乳房、滑らかなくびれ、豊かなヒップ。子供の頃とは完全に違う、立派な大人の女の肉体がそこにある。濡れた髪から滴る水滴を拭いながら、自分の身体に宿る確かな女性としての魅力と命の熱さに、静かな愛おしさを覚えた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ボディクリームを丁寧に塗り込み、すべすべの肌触りを慈しむ",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 2,
            "aesthetics": 4,
            "stress": -3
          },
          "narrative": "甘い香りのボディミルクを手に取り、鎖骨や腕、太ももへと優しく伸ばしていく。しっとりと吸い付くような素肌の手触りに満足し、自分を慈しむ豊かなセルフケアの時間を楽しんだ。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 16,
  "max": 20,
  "p": 0.5,
  "once": true,
  "text": "一人きりのお風呂上がり。湯気が立ち込める脱衣所の大きな鏡の前。バスタオルを取る前の無防備な素肌。完全に少女から大人の女性へと成熟を遂げた自らの肉体を、静かに見つめ直す親密なひととき。",
  "diary": [
    "お風呂上がりに鏡で自分の身体をじっくり見た。いつの間にかすっかり大人の女性の身体になっていて、不思議な誇らしさと少しの照れくささがあった。",
    "お風呂上がりのボディケア。自分の肌を丁寧に手入れする時間が、一番リラックスできて好き。"
  ],
  "classification": "daily"
});
