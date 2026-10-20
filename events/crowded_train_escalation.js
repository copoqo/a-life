(window.eventDefs = window.eventDefs || []).push({
  "id": "crowded_train_escalation",
  "title": "いつもの通勤快速、忍び寄る指先",
  "description": "朝のラッシュ時、すし詰めの満員電車。背後から密着してくるのは、以前も背後にいたあの男だ。揺れに紛れて、男の逞しい手が静かにスカートの裾を捲り上げてくる。薄いストッキング越しに臀部を揉みしだかれ、やがて指先が股間の合わせ目へと沈み込んでゆく。周囲には無数の乗客がいるのに、下腹が甘く痺れて拒絶の声が出ず、秘唇から蜜が溢れ出してストッキングを湿らせていく……。",
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
          443
        ]
      },
      {
        "path": "skill.morality",
        "op": "lte",
        "value": 0
      }
    ]
  },
  "weight": {
    "base": 14,
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
    "unique_key": "crowded_train_escalation"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "ストッキング越しに秘部をまさぐられる痴態に屈する",
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
          "description": "声も出せず身を硬くしたまま、ストッキング越しに秘部をまさぐられる痴態に屈する。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "crowded_train_culmination",
                "delay": 1,
                "prob": 0.9
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "次の停車駅で弾かれたようにドアから逃げ出す",
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
          "description": "肘で相手の腹を強く突き飛ばし、次の停車駅で弾かれたようにドアから逃げ出す。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "涙目で睨みつけてこれ以上の暴挙を止める",
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
          "description": "震える手で男の手首を必死に掴み、涙目で睨みつけてこれ以上の暴挙を止める。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 36,
  "p": 0.14,
  "text": "朝のラッシュ時、すし詰めの満員電車。背後から密着してくるのは、以前も背後にいたあの男だ。揺れに紛れて、男の逞しい手が静かにスカートの裾を捲り上げてくる。薄いストッキング越しに臀部を揉みしだかれ、やがて指先が股間の合わせ目へと沈み込んでゆく。周囲には無数の乗客がいるのに、下腹が甘く痺れて拒絶の声が出ず、秘唇から蜜が溢れ出してストッキングを湿らせていく……。",
  "publicSex": true,
  "diary": [
    "大勢の人がすぐ隣にいる中で、股間を執拗にまさぐられた。ストッキングをぐっしょりと濡らすほど愛液を垂らし、見知らぬ男の指先でクリトリスを擦られて、声を殺して絶頂に達してしまった。",
    "恐怖と羞恥に突き動かされ、男を突き飛ばして電車を飛び降りた。ホームの冷たい風に吹かれながら、まだ下腹の奥が熱く疼いていることに涙が零れた。",
    "男の手首を掴んで押し留めた。相手は舌打ちして人混みに消えていったけれど、服の下に残された指の熱気と屈辱感に、しばらく足の震えが止まらなかった。"
  ],
  "outcomes": [
    "reflection",
    "boundary",
    "boundary"
  ],
  "classification": "daily"
});
