(window.eventDefs = window.eventDefs || []).push({
  "id": "partner_loving_passion_after_date",
  "title": "夜景デートの後の二人だけの部屋 〜愛を確かめ合う甘美な交わり〜",
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
        "factor": 1.5
      }
    ]
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 6,
    "max_occurrences": 30,
    "unique_key": "partner_loving_passion_after_date"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "相手の首に腕を回して抱きつき、熱い口づけを受け入れながら身体を預ける",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 5,
            "desire": 3,
            "intimacyNeed": 3,
            "stress": -4,
            "sexualEffects": {
              "intimacy": 15,
              "libido": 5,
              "passion": 10
            }
          },
          "narrative": "部屋の鍵が閉まった途端、引き寄せられた身体。脱がされるコートの下で、ブラウス越しに胸の先端が強くつまみ上げられ、甘い痺れが腰へと走った。ベッドに押し倒され、濡れて熱を帯びた下着を優しく脱がされると、すでに溢れ出ていた愛液が太ももの内側を滑り落ちる。『ずっと君に触れたかった』と囁かれ、露わになった蜜口をじっくりと指と舌で舐め解きほぐされる。敏感なクリトリスを吸い上げられるたびに下腹部がきゅうんと収縮し、待ちきれないように秘肉を震わせた。互いの鼓動が重なる中、太い熱情がねっとりと湿った肉腔の奥深くまで沈み込んでくる。満たされる歓喜に背中を反らせ、相手の首筋に爪を立てながら、愛の言葉とともに何度も激しい絶頂へと昇りつめた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "恥ずかしがりながらも相手の服のボタンを外し、自ら求めて肌を重ねる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "desire": 4,
            "initiative": 2,
            "stress": -3,
            "sexualEffects": {
              "intimacy": 12,
              "libido": 6,
              "passion": 8
            }
          },
          "narrative": "火照った顔を相手の胸元に埋めながら、震える指先で相手のシャツのボタンをひとつずつ外していく。晒された温かい肌に唇を寄せると、相手の呼吸が荒くなり、下腹部に硬い熱情が押し当てられた。求め合っている実感が愛液をさらにあふれさせ、じっとりと湿った蜜壺がひくひくと疼く。シーツの上に押し広げられた両脚の間に相手が割り込み、濡れそぼった粘膜を掻き分けながら一気に最奥の子宮口まで突き上げられた。突き入れられるたびにぬちぬちと卑猥な水音が部屋に響き、愛おしさと快楽の波に呑まれながら熱狂的に腰を揺らした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 18,
  "max": 65,
  "p": 0.5,
  "once": false,
  "text": "夜景の見えるレストランでのロマンチックなデートの帰り道。二人の部屋のドアが閉まり、静寂に包まれた瞬間、抑えきれない熱情とともに抱き寄せられる。唇を重ねるごとに理性が溶け出し、愛し合う身体が貪り合うようにシーツの上へと倒れ込んだ。",
  "diary": [
    "デートの後の二人きりの部屋。抱きしめられた瞬間から頭が真っ白になって、求められるまま身体を重ねた。相手の肌の匂いと温もりに包まれて、奥まで貫かれるたびに愛されている実感が溢れて止まらなかった。",
    "恥ずかしかったけれど、自分からも相手を求めてしまった。肌と肌が擦れ合う音と荒い吐息……。心も身体も完全に一つになれたような、甘くて濃密な最高の夜だった。"
  ],
  "classification": "daily"
});
