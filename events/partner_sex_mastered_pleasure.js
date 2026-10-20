(window.eventDefs = window.eventDefs || []).push({
  "id": "partner_sex_mastered_pleasure",
  "title": "言わずとも伝わる性感帯 〜手の内を知り尽くしたあうんの熟練セックス〜",
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
        "value": 264
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
        "factor": 1.5
      }
    ]
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 6,
    "max_occurrences": 30,
    "unique_key": "partner_sex_mastered_pleasure"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "一番弱いツボを正確に突かれ、抵抗する間もなくトロトロに蕩けて啼き乱れる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 6,
            "desire": 4,
            "stress": -5,
            "sexualEffects": {
              "intimacy": 18,
              "libido": 6,
              "passion": 12
            }
          },
          "narrative": "何年も肌を重ねてきた相手だからこそ、私の身体のどこが一番敏感で、どう突かれれば理性が吹き飛ぶのかを完全に知り尽くされている。布団の上、太ももを持ち上げられた角度から、太い肉茎が寸分の狂いもなく子宮の手前にある一番奥のヒダをぐにゅりと擦り上げた。『あっ、そこ……っ、ダメ……！』と声を上げる間もなく、一番感じてしまう角度とストロークで容赦なく責め立てられる。相手の手のひらがクリトリスを的確に転がし、内と外からの同時攻撃に身体の芯が激しく痙攣した。ぬちぬち、ぐちゅぐちゅと溢れる愛液を撒き散らしながら、熟練の快楽に抗う術もなく、あっという間に激しいオーガズムへと突き落とされた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手の弱点も知り尽くした腰使いで迎え撃ち、二人で同時に絶頂へ駆け上がる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 5,
            "desire": 5,
            "initiative": 3,
            "stress": -4,
            "sexualEffects": {
              "intimacy": 16,
              "libido": 7,
              "passion": 13
            }
          },
          "narrative": "やられっぱなしではいられない。相手がどこで一番喘ぐかも完全に把握している。肉壁の奥で相手のカリ首をぎゅっと締め付け、腰をひねりながら締め上げると、相手もたまらず呻き声を漏らして激しく腰を動かした。お互いの手の内を知り尽くした者同士の熱狂的な交わり。阿吽の呼吸で腰をぶつけ合い、完全に同時に歓喜の果てへと昇りつめた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 22,
  "max": 75,
  "p": 0.5,
  "once": false,
  "text": "何年もの歳月を共に過ごし、お互いの身体の隅々まで熟知した二人。言葉を交わさずとも、手が伸びる場所、腰の角度、触れ方ひとつで相手の快感が手にとるように分かる。恥じらいを超えた深い信頼と、円熟したテクニックに身を委ねる極上の交わり。",
  "diary": [
    "長年一緒にいるから、どこをどう触れば私が一番感じてしまうか、相手には全部お見通し。一番弱いツボを的確に責められて、あっという間にトロトロにされて啼かされてしまった。",
    "お互いの身体を知り尽くしたあうんのセックス。言葉がなくても呼吸がぴったり合って、二人で同時に果てた瞬間の快感は格別だった。"
  ],
  "classification": "daily"
});
