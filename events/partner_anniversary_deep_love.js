(window.eventDefs = window.eventDefs || []).push({
  "id": "partner_anniversary_deep_love",
  "title": "記念日の夜 〜互いを慈しむ濃厚なラブラブセックス〜",
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
    "cooldown_months": 6,
    "max_occurrences": 30,
    "unique_key": "partner_anniversary_deep_love"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "灯りを落としたベッドで、互いの愛を囁きながらゆっくりと結合を味わう",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 6,
            "intimacyNeed": 4,
            "desire": 2,
            "stress": -5,
            "sexualEffects": {
              "intimacy": 18,
              "libido": 4,
              "passion": 8
            }
          },
          "narrative": "アロマキャンドルの揺れる薄暗い寝室。記念日のプレゼントを交わし終えた後、慈しむような優しい手つきで服を脱がされていく。敏感な胸の突起をゆっくりと舌で転がされ、全身を愛撫の熱で包み込まれる。愛液が蜜壺を満たし、ベッドのシーツに濃い染みを作るほど濡れそぼった頃、相手が慈しむようにキスを落としながら、熱い怒張を奥深くへと沈めてきた。ぎちぎちと締め付ける肉壁を優しく押し広げられ、子宮を優しく撫でられるような深い結合。相手の肩に抱きつきながら「愛してる」と囁き合い、じんわりと広がる甘美な絶頂を幾度も噛み締めた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "いつもより情熱的に腰を絡ませ、溢れ出る愛液を散らして果てまで乱れる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 5,
            "desire": 5,
            "passion": 3,
            "stress": -4,
            "sexualEffects": {
              "intimacy": 15,
              "libido": 7,
              "passion": 12
            }
          },
          "narrative": "特別な夜だからこそ、普段は見せない淫らな本能が解き放たれる。相手の上に跨がり、濡れ光る秘所へと硬くそそり立つ肉茎を自ら深く呑み込んでいく。ぐちゅりと淫らな粘膜音が部屋に響き渡り、奥の最深部を抉られるような快感に背中を弓なりに反らせた。相手の腰をぎゅっと太ももで挟み込み、激しく腰を上下させながら、快楽に蕩けた喘ぎ声を部屋中に響かせる。二人の汗と愛液の淫臭が濃密に立ち込める中、一際深く突き上げられた瞬間、頭の中が真っ白になるほどの強烈なオーガズムに達した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 20,
  "max": 70,
  "p": 0.5,
  "once": false,
  "text": "二人が結ばれた記念日、あるいは誕生日。特別なディナーを終え、二人きりの甘い夜が始まる。キャンドルの灯りに照らされたベッドの上で、互いへの尽きない愛情を確かめ合うように、優しく、そして濃厚に肌と肌を重ね合わせる。",
  "diary": [
    "大切な記念日の夜。灯りを落として、お互いの愛を確かめ合うようにゆっくり抱き合った。相手の温もりで心の底まで満たされて、この人と巡り会えて本当に良かったと心から実感した。",
    "記念日の夜、いつもより情熱的になってしまった。お互いを求める気持ちが抑えられなくて、激しく求め合ってベッドの上で何度も果てた。相手の腕の中で迎えた朝は最高に幸せだった。"
  ],
  "classification": "major",
  "is_major": true
});
