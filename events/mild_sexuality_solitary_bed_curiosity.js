(window.eventDefs = window.eventDefs || []).push({
  "id": "mild_sexuality_solitary_bed_curiosity",
  "title": "休日の昼下がりのベッド・布団の擦れと無自覚な甘い痺れ",
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
        "value": 192
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
    "unique_key": "mild_sexuality_solitary_bed_curiosity"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "うつ伏せでクッションを挟み込み、身体の奥に走る甘い刺激に身を委ねる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "desire": 3,
            "shyness": 3,
            "selfKnowledge": 3,
            "sexualEffects": {
              "libido": 4,
              "passion": 2
            }
          },
          "narrative": "一人きりの部屋、静かな休日の午後。ベッドの上でうつ伏せになって漫画を読んでいた時、足の間に挟み込んだ毛布の結び目が、偶然ショーツ越しの秘裂の一番敏感な突起に擦れ当たった。ぞくっとする甘い刺激が背筋を駆け抜け、思わず息を呑む。何かいけないことをしているような罪悪感を覚えながらも、腰をわずかに動かしてその擦れを繰り返してしまう。下腹部の奥がじんわりと温まり、湿り気を帯びていく感触。身体が知ってしまった新しい秘密の快感に、枕に顔を埋めて小さく吐息を漏らした。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ハッとして身体を起こし、冷たい麦茶を飲んで火照りを冷ます",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "selfKnowledge": 2,
            "morality": 1,
            "health": 1
          },
          "narrative": "身体に走った説明のつかない快感に驚き、慌ててベッドから起き上がった。窓を開けて冷たい風を浴びながら、自分の身体に宿りつつある未知の衝動の正体を静かに思い巡らせた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 13,
  "max": 15,
  "p": 0.5,
  "once": true,
  "text": "誰もいない休日の昼下がりの自分の部屋。静まり返った室内で、ベッドに横たわっている時にふと感じる身体の微熱。寝返りや毛布の摩擦をきっかけに、女性特有の性感帯の存在を無自覚のうちに発見する思春期の秘め事。",
  "diary": [
    "ベッドの中で、毛布が身体に擦れた時にすごく甘い痺れが走った。なんだか恥ずかしくて誰にも言えない秘密だけど、自分の身体って不思議だなと思う。",
    "一人きりの部屋での微熱。思春期になって、身体が少しずつ大人の感覚に目覚め始めているのかもしれない。"
  ],
  "classification": "daily"
});
