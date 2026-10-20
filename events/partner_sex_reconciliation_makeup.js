(window.eventDefs = window.eventDefs || []).push({
  "id": "partner_sex_reconciliation_makeup",
  "title": "口論の後の沈黙と強引な抱擁 〜仲直りのための機嫌取りセックス〜",
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
        "value": 216
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
    "cooldown_months": 8,
    "max_occurrences": 20,
    "unique_key": "partner_sex_reconciliation_makeup"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "怒りで胸を押し返しながらも、乱暴なピストンに抗えず身体を濡らして屈服する",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 2,
            "desire": 4,
            "stress": -2,
            "shyness": 2,
            "sexualEffects": {
              "intimacy": 12,
              "libido": 6,
              "passion": 12
            }
          },
          "narrative": "家事の分担かすれ違いか、激しい口論の末に訪れた重苦しい沈黙。まだ許していないのに、寝室に入ってきた相手に背後から強引に腕を掴まれ、ベッドへと押し倒される。『離して！』と胸板を叩いて抵抗するけれど、無言のまま乱暴にスカートが捲られ、ショーツを引き裂かんばかりにずらされる。怒りで火照った秘裂に、容赦のない力で一気に根元まで突き立てられた。『んっ、痛……っ！』と睨みつけたはずなのに、激しく腰を打ち付けられるたび、子宮の奥に突き刺さる強烈な熱情に抗えなくなっていく。悔しいのに、腹が立っているのに、愛液がじゅぶじゅぶと音を立てて溢れ出し、相手の首筋に噛みつきながら、屈辱と激しい快楽の絶頂に呑み込まれてしまった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "「もう怒ってないから…」と相手の背中にしがみつき、仲直りのぬくもりを受け入れる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "intimacyNeed": 3,
            "stress": -3,
            "sexualEffects": {
              "intimacy": 15,
              "libido": 4,
              "passion": 9
            }
          },
          "narrative": "強引な抱擁の中に、相手の不器用な謝罪と焦りを感じて、こわばっていた身体の力がすっと抜けた。重ね合わされる唇から伝わる熱さに涙がこぼれ、身体を密着させて仲直りの交わりに身を委ねた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 18,
  "max": 65,
  "p": 0.5,
  "once": false,
  "text": "生活の些細な食い違いから起きた口論。冷え切った空気のまま迎えた夜。言葉では素直に謝れない相手が、不意に寝室で強引に身体を引き寄せてくる。怒りと悔しさが残る心とは裏腹に、乱暴な愛撫と熱情に身体の芯が抗えず疼き始める。",
  "diary": [
    "喧嘩の後、まだ許してなかったのに無理やり抱かれた。最初はすごく怒っていたのに、奥を激しく突かれているうちに身体が言うことを聞かなくなって、激しく感じてしまった自分が情けない。",
    "仲直りのセックス。言葉で謝るのが下手な相手の強引さに負けてしまったけれど、身体を重ねたらわだかまりが消えて、少しホッとした。"
  ],
  "classification": "daily"
});
