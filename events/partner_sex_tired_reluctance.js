(window.eventDefs = window.eventDefs || []).push({
  "id": "partner_sex_tired_reluctance",
  "title": "疲労困憊の夜と断れぬ求め 〜溜め息とともに受け入れる受動セックス〜",
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
        "value": 240
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
        "factor": 1.2
      }
    ]
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 6,
    "max_occurrences": 25,
    "unique_key": "partner_sex_tired_reluctance"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "「疲れてるから動けないよ」と横を向いたまま、相手の好きにさせながら次第に感じてしまう",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "stress": 1,
            "desire": 3,
            "happiness": 2,
            "sexualEffects": {
              "intimacy": 11,
              "libido": 4,
              "passion": 6
            }
          },
          "narrative": "残業と家事で全身が鉛のように重い夜。布団に潜り込んで目を閉じたのに、相手の手が甘えるようにパジャマのボタンを外しにかかる。断ろうとして小さく溜め息を吐いたけれど、拒絶して関係がぎくしゃくするのも面倒で、背中を向けたまま動かずに受け入れた。『早く終わらせてね』と呟いたものの、相手の唾液に濡れた指が秘肉を丹念に解きほぐし、奥を擦り上げてくると、疲労の隙間を縫うように甘い痺れが腰に広がっていく。挿入された重い熱情が一定のリズムで粘膜を擦り上げるたび、乾いていたはずの秘所からぬるりと蜜が溢れ出し、受動的な快感に身を委ねて小さく喘いでしまった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手の頭を抱き寄せ、早く満足するように優しく導いてあげる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 3,
            "intimacyNeed": 2,
            "stress": 0,
            "sexualEffects": {
              "intimacy": 13,
              "libido": 3,
              "passion": 6
            }
          },
          "narrative": "相手の甘えを受け止めて、早くイかせてあげようと腰を寄せる。こちらの気遣いに気づいているのかいないのか、夢中で腰を振る相手を抱きしめながら、大人の女性としての受容の温もりを感じた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 20,
  "max": 65,
  "p": 0.5,
  "once": false,
  "text": "へとへとに疲れて一刻も早く眠りたい夜。けれど隣のパートナーは明らかに求めてきている。断れば気まずい空気が流れるのが分かっているからこそ、小さな諦めと溜め息を飲み込んで、求めに応じるように布団の中で身体を預ける。",
  "diary": [
    "すっごく疲れていて早く寝たかったのに、断りきれずに相手をした。横を向いたまま勝手にさせていたけれど、じっくり突かれているうちに勝手に身体が濡れてきて、なんだか悔しかった。",
    "疲れている時のセックス。義務感半分だったけれど、相手が満足そうに腕の中で眠った顔を見たら、まあいいかって思えた。"
  ],
  "classification": "daily"
});
