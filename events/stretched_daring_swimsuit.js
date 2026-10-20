(window.eventDefs = window.eventDefs || []).push({
  "id": "stretched_daring_swimsuit",
  "title": "初夏の水着売り場・鏡の前で合わせた大胆なホルターネックビキニ",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 204
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 239
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
    "unique_key": "stretched_daring_swimsuit"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "谷間とくびれが強調された姿に頬を染めつつ、思い切ってレジへ運ぶ",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 4,
            "confidence": 3,
            "sexualEffects": {
              "libido": 2
            }
          },
          "narrative": "試着室のカーテンの中で、紐を首の後ろでキュッと結び、細身のショーツを引き上げる。三面鏡に映る自分の姿は、スクール水着の面影など微塵もない、引き締まったウエストと豊かなバストライン。布地の少なさに息を呑みながらも、女として磨かれた自分の肉体に抗いがたい誇らしさを感じ、今年の夏はこの水着で海に行こうと決意した。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "「やっぱり露出が高すぎるかも」とパレオ付きの控えめなセットを選ぶ",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 2,
            "happiness": 2,
            "aesthetics": 2
          },
          "narrative": "胸元やヒップの露出にどうしても恥ずかしさが勝ってしまい、透け感のあるパレオが付いたデザインにした。それでも去年の水着よりずっと大人っぽく、夏が来るのが待ち遠しくなった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 17,
  "max": 20,
  "p": 0.5,
  "once": true,
  "text": "夏休みの旅行に向けて水着を探しにデパートへ。並んでいるのは、布面積の小さなホルターネックや大胆なカッティングのビキニ。少女から女性へと移り変わる身体をどこまで見せるか、試着室の前で迷う。",
  "diary": [
    "思い切って少し露出の多いビキニを買った。試着室で鏡を見たとき、自分の身体つきに自分でドキドキしちゃった。",
    "水着売り場に行くと、大人っぽいデザインばかりで目移りした。今年の夏は思い切り楽しみたい。"
  ],
  "classification": "daily"
});
