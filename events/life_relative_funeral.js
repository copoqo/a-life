(window.eventDefs = window.eventDefs || []).push({
  "id": "life_relative_funeral",
  "title": "親族の不幸・通夜と葬儀",
  "description": "突然届いた親族の訃報。黒い喪服に身を包み、黒ストッキングを履いて親戚が集まる斎場へ。線香と菊の重苦しい匂いが漂う中、親族の悲しみに触れ、命の儚さと生きている肉体の重みを静かに意識させられる……。",
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
          1031
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
    "unique_key": "life_relative_funeral"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "気丈に振る舞う",
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
          "description": "遺族の手伝いや受付に奔走し、気丈に振る舞う。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.communication_skill",
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
    },
    {
      "id": "choice_1",
      "label": "線香の前で静かに涙を流す",
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
          "description": "故人との思い出を振り返り、線香の前で静かに涙を流す。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "一人離れで外の空気を吸う",
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
          "description": "喪服の締め付けと線香の匂いに息が詰まり、一人離れで外の空気を吸う。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "rare_funeral_cousin_taboo",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    }
  ],
  "min": 16,
  "max": 85,
  "p": 0.14,
  "text": "突然届いた親族の訃報。黒い喪服に身を包み、黒ストッキングを履いて親戚が集まる斎場へ。線香と菊の重苦しい匂いが漂う中、親族の悲しみに触れ、命の儚さと生きている肉体の重みを静かに意識させられる……。",
  "diary": [
    "親族の受付や弔問客への対応に追われた。悲しみの中でも自分の役割を果たすことで、少しずつ気持ちを落ち着かせることができた。",
    "遺影に手を合わせ、生前の温かな笑顔を思い出した。別れの悲しみが胸を締めつけ、涙が止まらなかった。",
    "喪服の黒ストッキングに包まれた太ももを擦り合わせながら、暗い夜風を浴びた。死の重苦しさに反比例するように、下腹の奥で生々しい体温が疼くのを感じて戸惑った。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
