(window.eventDefs = window.eventDefs || []).push({
  "id": "yearning_lingerie_fantasies",
  "title": "艶やかな下着と、剥ぎ取られる日の夢",
  "description": "ランジェリーショップの華やかなショーウインドウ。繊細な黒レースや透け感のある紅のランジェリーに視線が釘付けになる。この薄布で柔らかな胸を包み、湿りやすい秘部を覆ったとき、愛する人にどんな瞳で見つめられ、どんな荒々しい手つきで剥ぎ取られるのだろう。鏡に映る自分の無防備な身体を思い浮かべ、下腹が甘く痺れる……。",
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
          347
        ]
      }
    ]
  },
  "weight": {
    "base": 18,
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
    "unique_key": "yearning_lingerie_fantasies"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "夜に一人で身につけてみる",
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
          "description": "思い切って大胆で扇情的なレースの下着を購入し、夜に一人で身につけてみる。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -30000
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "conflict_virginity_anxiety",
                "delay": 1,
                "prob": 0.8
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "大切な相手に見せる日のシチュエーションを想像して密かに胸を高鳴らせる",
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
          "description": "大切な相手に見せる日のシチュエーションを想像して密かに胸を高鳴らせる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "普段通りの清楚な綿の下着を選ぶ",
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
          "description": "自分にはまだ不相応だと感じ、普段通りの清楚な綿の下着を選ぶ。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 28,
  "p": 0.18,
  "text": "ランジェリーショップの華やかなショーウインドウ。繊細な黒レースや透け感のある紅のランジェリーに視線が釘付けになる。この薄布で柔らかな胸を包み、湿りやすい秘部を覆ったとき、愛する人にどんな瞳で見つめられ、どんな荒々しい手つきで剥ぎ取られるのだろう。鏡に映る自分の無防備な身体を思い浮かべ、下腹が甘く痺れる……。",
  "phase": "any",
  "diary": [
    "買い求めたレースのショーツに足を通すと、薄い生地越しに秘唇の熱と湿り気が直に伝わってきた。鏡の前で指を滑らせると、いつか男の手に脱がされる光景が脳裏をよぎり、愛液が溢れそうになった。",
    "ベッドの上で乱暴に押し倒され、この下着をまさぐられる瞬間を妄想した。露わになる素肌の恥ずかしさと、貪るように見つめられる快感の予感に、息が熱く乱れてしまった。",
    "派手なレースを棚に戻し、大人しいデザインを手にとった。それでも、あの透けるような布地が肌に触れたときの官能的な感触が、しばらく指先に残り続けた。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
