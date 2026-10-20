(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_relationship_privacy",
  "title": "二人だけの秘密の合言葉",
  "description": "交際の生々しい詳細をどこまで友人に話すべきか。二人だけの夜の睦言や秘密の触れ合いを、誰にも侵されない聖域として守りたいという想いが募る。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "friend": {
      "source": "friend",
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
          216,
          1031
        ]
      }
    ]
  },
  "weight": {
    "base": 10,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_relationship_privacy"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "二人の寝室の秘密は絶対に口外しないと約束する",
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
          "description": "二人の寝室の秘密は絶対に口外しないと約束する。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "親しい友人には幸せな惚気話として少しだけ打ち明ける",
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
          "description": "親しい友人には幸せな惚気話として少しだけ打ち明ける。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 85,
  "p": 0.1,
  "text": "交際の生々しい詳細をどこまで友人に話すべきか。二人だけの夜の睦言や秘密の触れ合いを、誰にも侵されない聖域として守りたいという想いが募る。",
  "diary": [
    "二人の夜のことは二人だけの秘密にした。世界中で私たちだけが知っている素肌の温もりが、関係をより特別なものにした。",
    "親友にだけ少し惚気けてしまった。照れ笑いしながらも、幸せを共有できた温かさに心が和んだ。"
  ],
  "outcomes": [
    "private_relationship",
    "mutual_talk"
  ],
  "classification": "daily"
});
