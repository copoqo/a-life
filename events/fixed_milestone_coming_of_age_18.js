(window.eventDefs = window.eventDefs || []).push({
  "id": "fixed_milestone_coming_of_age_18",
  "is_fixed": true,
  "title": "十八歳の門出・大人への宣誓と振袖の重み",
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
        "value": 227
      }
    ]
  },
  "weights": {
    "base": 100
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "fixed_milestone_coming_of_age_18"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "晴れ着姿で式典に臨み、大人としての責任と自立を胸に誓う",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "morality": 3,
            "boundaryVoice": 2,
            "selfKnowledge": 2
          },
          "narrative": "色鮮やかな振袖の帯をきゅっと締められ、背筋を伸ばして鏡の前に立つ。18歳、法律上も大人として扱われる節目。家族への感謝と、これから自分の足で人生を歩んでいく誇りが胸に満ちた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "久しぶりに再会した同級生たちと、懐かしい思い出と近況を語り合う",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 3,
            "happiness": 3,
            "intimacyNeed": 1
          },
          "narrative": "式典会場のあちこちで響く歓声。すっかり大人びた旧友たちと写真を撮り合い、学生時代の思い出話に花を咲かせた。「みんな大人になったね」と笑い合いながら、温かい絆を再確認した。",
          "id": "outcome_1"
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "式典の喧騒を離れ、これからの自分の人生の青写真に静かに思いを馳せる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 2,
            "selfKnowledge": 3,
            "stress": -2
          },
          "narrative": "華やかな人混みから少し離れたベンチで、冬の澄んだ空を見上げた。子供時代が完全に終わり、自由と自己責任の世界へ足を踏み入れる。どんな困難があっても自分らしく生きようと静かに決意した。",
          "id": "outcome_2"
        }
      ]
    }
  ],
  "min": 18,
  "max": 18,
  "p": 1,
  "once": true,
  "text": "18歳を迎え、法律上の成年となった日。成人式の会場には、晴れ着やスーツに身を包んだ新成人たちが集う。鏡に映る大人びた自分の姿に、保護されるだけの子供時代が終わり、自らの意思と選択で人生を紡いでいく時が来たのだと実感する。",
  "diary": [
    "18歳の成人式。きつく結ばれた帯が、大人になる責任の重さみたいだった。お父さんもお母さんも目を細めて喜んでくれて、ここまで育ててくれた感謝で胸がいっぱいになった。",
    "成人式で昔の友達と大集合！ スーツや振袖でみんな見違えるほど綺麗でカッコよくなっていて、時間が経ったんだなって実感した。すごく楽しかった！",
    "18歳。もう子供じゃないんだ。これからは自分の選択に自分で責任を持つ。不安もあるけれど、それ以上にどんな大人になれるかワクワクしている。"
  ],
  "classification": "daily"
});
