(window.eventDefs = window.eventDefs || []).push({
  "id": "body_complex_cherished",
  "title": "愛おしまれる秘所、劣等感の融解",
  "description": "明かりを落とした寝室。ずっとコンプレックスだった秘唇の黒ずみや形、肌の匂い。パートナーは恥じらって太ももを閉じようとするこちらの膝を優しく割り、熱い吐息とともに秘所へと顔を埋める。舌先で尖ったクリトリスを包み込み、奥から溢れる愛液を丁寧に掬い取りながら、「こんなに愛しくて綺麗だ」と囁く。劣等感が甘い悦びへと溶け崩れてゆく……。",
  "content_rating": "adult",
  "enabled": true,
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.alive",
        "op": "eq",
        "value": true
      },
      {
        "path": "person.age_months",
        "op": "between",
        "value": [
          216,
          431
        ]
      }
    ]
  },
  "weight": {
    "base": 15,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "state.current_libido",
          "op": "gte",
          "value": 30
        },
        "factor": 1.5
      }
    ]
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "body_complex_cherished"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "優しく舐めしゃぶられる快感に腰を浮かせて啼く",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": [
          {
            "path": "display.confidence",
            "coefficient": 0.01
          }
        ]
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "羞恥に顔を覆いながらも、優しく舐めしゃぶられる快感に腰を浮かせて啼く。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手の頭を抱き寄せて涙を流す",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": [
          {
            "path": "display.confidence",
            "coefficient": 0.01
          }
        ]
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "ありのままの自分を受け止めてくれた喜びに、相手の頭を抱き寄せて涙を流す。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "奥まで貫かれる歓びをねだる",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": [
          {
            "path": "display.confidence",
            "coefficient": 0.01
          }
        ]
      },
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "照れくささに耐えかねて相手の肩を叩きつつ、奥まで貫かれる歓びをねだる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 35,
  "p": 0.15,
  "text": "明かりを落とした寝室。ずっとコンプレックスだった秘唇の黒ずみや形、肌の匂い。パートナーは恥じらって太ももを閉じようとするこちらの膝を優しく割り、熱い吐息とともに秘所へと顔を埋める。舌先で尖ったクリトリスを包み込み、奥から溢れる愛液を丁寧に掬い取りながら、「こんなに愛しくて綺麗だ」と囁く。劣等感が甘い悦びへと溶け崩れてゆく……。",
  "diary": [
    "一番見られたくなかった場所を、あんなにも熱く丁寧に舐め清められるなんて。溢れ出る蜜をすべて吸い尽くされ、恥ずかしさの涙がやがて激しい絶頂の悦びへと変わっていった。",
    "「恥ずかしがらなくていい」と抱きしめられ、自分の身体を初めて心から愛せると感じた。コンプレックスの呪縛が解け、素肌がじんわりと温かい安心感に包まれた。",
    "相手の腕の中で、ありのままの裸を晒して交わった。受け入れてもらえた自信が、女としての快感を何倍にも深くしてくれた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "shared_intimacy"
  ],
  "classification": "daily"
});
