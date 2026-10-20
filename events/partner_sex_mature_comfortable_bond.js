(window.eventDefs = window.eventDefs || []).push({
  "id": "partner_sex_mature_comfortable_bond",
  "title": "言葉を交わさずとも重なる呼吸 〜円熟した二人の阿吽の快楽セックス〜",
  "content_rating": "adult",
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 300
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weights": {
    "base": 40,
    "modifiers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "強"
          ]
        },
        "factor": 1.4
      }
    ]
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 6,
    "max_occurrences": 30,
    "unique_key": "partner_sex_mature_comfortable_bond"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "完全に身体を開ききって相手を受け入れ、阿吽の呼吸で最深部の結合を貪る",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 6,
            "intimacyNeed": 5,
            "stress": -5,
            "sexualEffects": {
              "intimacy": 19,
              "libido": 5,
              "passion": 10
            }
          },
          "narrative": "若き日のようなぎこちない恥じらいはもうない。すっかり相手の身体の一部になったような安心感の中、大きく開いた脚の間に相手の腰を受け入れる。互いの呼吸が完全にシンクロし、吸う息と吐く息に合わせて、ぬるりと滑らかな結合が奥深くへと達する。子宮を優しく撫でられるような深い一体感。長年の絆で培われた贅沢な快楽に包まれ、静かに、けれど激しく打ち寄せる波のような絶頂をじっくりと噛み締めた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "交わったまま手をつなぎ、穏やかな愛の言葉とともに果てる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 6,
            "intimacyNeed": 6,
            "stress": -5,
            "sexualEffects": {
              "intimacy": 18,
              "libido": 4,
              "passion": 8
            }
          },
          "narrative": "シーツの上で指を絡め合い、結合したまま互いの顔を見つめ合う。言葉がなくても、繋がれた指先の熱と奥で疼く肉茎の拍動が全てを伝えてくれる。人生を共に歩んできた深い絆を感じながら、穏やかで濃密な愛の絶頂に満たされた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 25,
  "max": 80,
  "p": 0.5,
  "once": false,
  "text": "年月を重ね、お互いの存在が空気のように自然になった二人の寝室。恥じらいも気負いもなく、完全に心を許し合った者同士の営み。阿吽の呼吸で重なり合う肉体は、言葉を尽くすよりも雄弁に互いの愛と絆を証明している。",
  "diary": [
    "言葉を交わさなくても、お互いの呼吸だけで全てが通じ合う。円熟した関係だからこそ味わえる、深くて穏やかで濃厚なセックスに包まれて、満ち足りた夜を過ごした。",
    "長年一緒にいる相手との営み。若い頃のドキドキとは違うけれど、お互いを完全に知り尽くした深い結合が本当に心地よかった。"
  ],
  "classification": "daily"
});
