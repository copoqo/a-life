(window.eventDefs = window.eventDefs || []).push({
  "id": "yearning_daydream_distraction",
  "title": "日常に侵食する甘い痺れと、濡れる下着",
  "description": "昼下がりの授業中、あるいはオフィスのデスク。何気ない日常の最中に、ふと昨夜の自慰の感覚が脳裏をよぎる。指先で掻き回された肉腔の熱さ、クリトリスを弾かれた時の快感がフラッシュバックした瞬間、下腹がきゅうと収縮し、ショーツの中にじわりと愛液が滲み出す。椅子に座っているだけで濡れたクロッチが秘唇に擦れ、太ももを固く閉じずにはいられなくなる……。",
  "content_rating": "general",
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
          192,
          323
        ]
      }
    ]
  },
  "weight": {
    "base": 14,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "yearning_daydream_distraction"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "ショーツをずらして火照った秘所を息を殺して愛撫する",
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
          "description": "トイレの個室に駆け込み、ショーツをずらして火照った秘所を息を殺して愛撫する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "周囲に隠れて甘い痺れを噛み締める",
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
          "description": "座席の上で密かに太ももを擦り合わせ、周囲に隠れて甘い痺れを噛み締める。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "必死に目の前の作業に集中する",
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
          "description": "下腹の疼きを冷たいお茶で流し込み、必死に目の前の作業に集中する。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "min": 16,
  "max": 26,
  "p": 0.14,
  "text": "昼下がりの授業中、あるいはオフィスのデスク。何気ない日常の最中に、ふと昨夜の自慰の感覚が脳裏をよぎる。指先で掻き回された肉腔の熱さ、クリトリスを弾かれた時の快感がフラッシュバックした瞬間、下腹がきゅうと収縮し、ショーツの中にじわりと愛液が滲み出す。椅子に座っているだけで濡れたクロッチが秘唇に擦れ、太ももを固く閉じずにはいられなくなる……。",
  "diary": [
    "個室の鍵を閉め、乱れた息を整えながらスカートを捲り上げた。じっとりと湿ったショーツをずらし、指先で充血したクリトリスを擦ると、一瞬で頭が痺れるような絶頂が訪れた。",
    "誰にも気付かれないよう、デスクの下で足を組み替え、太ももの内側をぎゅっと擦り合わせた。下着を濡らす生暖かい愛液の感触に、恥ずかしさで首筋まで真っ赤になった。",
    "頭の中を埋め尽くす淫らな衝動を必死で追い払った。それでも、立ち上がった瞬間に太ももの間を滑り落ちた愛液の重みが、生々しく皮膚に残っていた。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
