(window.eventDefs = window.eventDefs || []).push({
  "id": "mild_sexuality_first_bra_shopping",
  "title": "初めてのファーストブラ選び・母親と訪れた下着売り場のカーテン",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 120
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 155
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
    "unique_key": "mild_sexuality_first_bra_shopping"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "試着室でそっと身につけ、ふんわりと守られる安心感に胸をなでおろす",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 2,
            "selfKnowledge": 3,
            "happiness": 3,
            "sexualEffects": {
              "libido": 1,
              "intimacy": 2
            }
          },
          "narrative": "体育の授業で走ると胸が擦れて痛むようになり、お母さんに連れられてデパートのジュニア肌着売り場へ。淡いピンク色の試着室のカーテンを閉め、シャツを脱いで初めて胸元を包み込む柔らかなコットンブラをつけた。鏡に映る、少し膨らみ始めた自分の胸。走っても痛くならない優しいホールド感と、女の子から大人の階段を一段登ったような誇らしさに、胸の前で小さく手を重ねた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "「まだ恥ずかしいよ」と俯きながらも、母が選んでくれた可愛いキャミソールを受け取る",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 3,
            "selfKnowledge": 2,
            "happiness": 2,
            "sexualEffects": {
              "libido": 1
            }
          },
          "narrative": "店員さんにメジャーで胸囲を測られる時、くすぐったさと羞恥で耳まで真っ赤になってしまった。母が「最初はパッド入りのキャミソールにしようね」と優しく微笑んでくれ、リボンのついた白い肌着を胸に抱きしめながら、身体の変化を静かに受け止めた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 10,
  "max": 12,
  "p": 0.5,
  "once": true,
  "text": "10歳を過ぎた頃、体操服の上からでも胸の先端が擦れてチクチクと痛み始める。母親に打ち明けると、週末にデパートの下着売り場へ連れて行かれた。ずらりと並ぶ淡いパステルカラーのファーストブラ。子供服とは違う、自分の身体が変化していくことへの戸惑いと密やかな恥じらい。",
  "diary": [
    "今日、初めてのジュニアブラを買ってもらった。試着室の鏡で見た自分の胸、少しだけお姉さんになったみたいでドキドキした。これで体育の時間も痛くない。",
    "下着売り場で胸のサイズを測ってもらった。すっごく恥ずかしかったけれど、お母さんが『順調に大きくなってるね』って笑ってくれてホッとした。"
  ],
  "classification": "daily"
});
