(window.eventDefs = window.eventDefs || []).push({
  "id": "encounter_stranger_adult",
  "title": "夜の路地裏、知らない大人の甘い誘い",
  "description": "夜の街を歩く帰り道、洗練された身なりの見知らぬ大人に声をかけられた。普段関わることのない年上の落ち着いた雰囲気と大人の香水の匂いに、危険だと知りながらも心臓が早鐘を打ち、下腹の奥がじわりと熱くなる……。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "stranger": {
      "source": "random_adult",
      "required": false
    }
  },
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
          299
        ]
      }
    ]
  },
  "weight": {
    "base": 15,
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
    "unique_key": "encounter_stranger_adult"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "夜の車内で大人の手ほどきを受ける",
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
          "description": "誘われるまま車に乗り、夜の車内で大人の手ほどきを受ける。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "sexual_taboo_solitude",
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
      "label": "秘密のときめきを胸に抱いて立ち去る",
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
          "description": "連絡先だけを交換し、秘密のときめきを胸に抱いて立ち去る。",
          "effects": [
            {
              "path": "skill.communication_skill",
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
    },
    {
      "id": "choice_2",
      "label": "足早にその場を離れる",
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
          "description": "危険を察してきっぱりと断り、足早にその場を離れる。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    }
  ],
  "min": 16,
  "max": 24,
  "p": 0.15,
  "text": "夜の街を歩く帰り道、洗練された身なりの見知らぬ大人に声をかけられた。普段関わることのない年上の落ち着いた雰囲気と大人の香水の匂いに、危険だと知りながらも心臓が早鐘を打ち、下腹の奥がじわりと熱くなる……。",
  "diary": [
    "名前も知らない大人の車内、暗がりで下着の中に手を差し入れられた。同年代にはない強引で手慣れた愛撫に、声も出せず太ももを濡らしてしまった。",
    "見知らぬ大人との出会いに胸が高鳴った。大人の世界への憧れと、下腹の疼きを覚えた夜だった。",
    "危ない誘惑を断ち切った。でも、あの人の低い声と香水の匂いが、しばらく頭から離れなかった。"
  ],
  "outcomes": [
    "meeting_stranger",
    "meeting_stranger",
    "none"
  ],
  "classification": "random"
});
