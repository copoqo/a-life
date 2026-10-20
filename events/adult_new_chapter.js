(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_new_chapter",
  "title": "親密な関係の新たな門出",
  "description": "長く寄り添ってきたパートナーとの関係について、これからの長い人生をどう共に歩んでいくか。二人の絆が次のステージへと昇華する瞬間を迎える。",
  "content_rating": "adult",
  "enabled": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
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
          216,
          1091
        ]
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 7,
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
    "unique_key": "adult_new_chapter"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "二人の未来を約束する",
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
          "description": "生涯を共に歩む覚悟を伝え、二人の未来を約束する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "心地よいパートナーシップを続ける",
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
          "description": "お互いの自立を尊重しつつ、心地よいパートナーシップを続ける。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "日々を重ねる",
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
          "description": "今の満ち足りた関係を大切に守り、日々を重ねる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "trait.sexual_interest.current",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 90,
  "p": 0.07,
  "text": "長く寄り添ってきたパートナーとの関係について、これからの長い人生をどう共に歩んでいくか。二人の絆が次のステージへと昇華する瞬間を迎える。",
  "diary": [
    "「これからもずっと一緒にいよう」と言葉を交わした。重ねてきた素肌と時間の重みが、確かな未来の約束に変わった。",
    "形に囚われず、お互いを尊重し合う生き方を選んだ。自由で豊かな大人の愛の形を見つけた。",
    "変わらない日常の尊さを噛み締めた。隣にこの人がいてくれる奇跡に、静かな感謝の想いが込み上げた。"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 3
    },
    {
      "selfAcceptance": 2
    },
    {
      "intimacyNeed": 1
    }
  ],
  "outcomes": [
    "mutual_talk",
    "reflection",
    "mutual_talk"
  ],
  "classification": "daily"
});
