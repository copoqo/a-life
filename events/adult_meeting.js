(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_meeting",
  "title": "気になる人との視線の交差",
  "description": "大人の社交の場、あるいは街のカフェ。ふと目が合った瞬間に走る微かな緊張と、相手の瞳に宿る男としての生々しい関心の光。心臓が跳ね、首筋がほんのりと火照るのを感じる。",
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
          216,
          947
        ]
      }
    ]
  },
  "weight": {
    "base": 14,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_meeting"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "自分から自然に声をかけてみる",
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
          "description": "艶やかな笑みを浮かべ、自分から自然に声をかけてみる。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "adult_feelings",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手からのアプローチを待つ",
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
          "description": "伏し目がちに視線を逸らし、相手からのアプローチを待つ。",
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
      "label": "何気ない顔でその場を立ち去る",
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
          "description": "危険な予感を察して、何気ない顔でその場を立ち去る。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 78,
  "p": 0.32,
  "text": "大人の社交の場、あるいは街のカフェ。ふと目が合った瞬間に走る微かな緊張と、相手の瞳に宿る男としての生々しい関心の光。心臓が跳ね、首筋がほんのりと火照るのを感じる。",
  "diary": [
    "視線が絡み合った瞬間、身体の奥が粟立つような予感を覚えた。会話を交わすうちに、相手の低い声が耳の奥を心地よくくすぐった。",
    "見つめられた瞳の強さに気圧され、恥ずかしさから胸の前でバッグを抱きしめた。大人の女として見られている実感が嬉しかった。",
    "本能が何か危ういものを察知し、そっと席を立った。日常の平穏を守るための選択だったと自分に言い聞かせた。"
  ],
  "outcomes": [
    "meeting",
    "meeting",
    "none"
  ],
  "classification": "daily"
});
