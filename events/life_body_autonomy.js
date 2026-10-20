(window.eventDefs = window.eventDefs || []).push({
  "id": "life_body_autonomy",
  "title": "この肉体と快楽の主は私自身であること",
  "description": "誰かの都合や視線に支配されるのではなく、この柔らかな乳房も、湿り気を帯びる秘所も、すべて自分自身の誇りであり領分なのだと強く自覚する。自らの手で身体を愛し、尊厳を守る決意を抱く。",
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
          911
        ]
      }
    ]
  },
  "weight": {
    "base": 9,
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
    "unique_key": "life_body_autonomy"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "身体の主権を宣言する",
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
          "description": "自らの欲望と境界線を堂々と言葉にし、身体の主権を宣言する。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "対等な愛の快楽を分かち合う",
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
          "description": "信頼できるパートナーと素肌を重ね、対等な愛の快楽を分かち合う。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 75,
  "p": 0.09,
  "text": "誰かの都合や視線に支配されるのではなく、この柔らかな乳房も、湿り気を帯びる秘所も、すべて自分自身の誇りであり領分なのだと強く自覚する。自らの手で身体を愛し、尊厳を守る決意を抱く。",
  "diary": [
    "私の身体は私だけのもの。誰かの慰みものでも、所有物でもない。自らの意志で快楽を選び取り、生きる誇りが下腹の奥を満たした。",
    "対等に互いを慈しみ合える人と肌を合わせた。支配でも従属でもない、真の素肌の交わりがもたらす至福に涙が零れた。"
  ],
  "classification": "daily"
});
