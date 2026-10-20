(window.eventDefs = window.eventDefs || []).push({
  "id": "travel_friends",
  "title": "女友達との温泉旅行・湯煙と浴衣",
  "description": "気の置けない女友達と連れ立って訪れた老舗の温泉旅館。湯煙が立ち込める露天風呂で素肌を晒し合い、手足を伸ばして日頃の疲れを洗い流す。夕食後は色浴衣に着替え、地酒のグラスを傾けながら、仕事や恋愛、誰にも言えない秘密の悩みを語り合う。",
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
          911
        ]
      }
    ]
  },
  "weight": {
    "base": 16,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "travel_friends"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "夜更けまで本音を語り明かす",
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
          "description": "温泉で温まった素肌を寄せ合い、夜更けまで本音を語り明かす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "夜の散策を楽しむ",
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
          "description": "浴衣姿で温泉街の射的や土産物屋を冷やかし、夜の散策を楽しむ。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "露天風呂の冷たい夜風で冷ます",
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
          "description": "地酒と温泉の熱で火照った身体を、露天風呂の冷たい夜風で冷ます。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 75,
  "p": 0.16,
  "text": "気の置けない女友達と連れ立って訪れた老舗の温泉旅館。湯煙が立ち込める露天風呂で素肌を晒し合い、手足を伸ばして日頃の疲れを洗い流す。夕食後は色浴衣に着替え、地酒のグラスを傾けながら、仕事や恋愛、誰にも言えない秘密の悩みを語り合う。",
  "diary": [
    "湯上がりの浴衣姿で畳の上に車座になり、友達と深夜まで語り合った。素肌を晒し合って打ち明けた本音が、二人の絆を一段と深いものにしてくれた。",
    "下駄の音をカランコロンと鳴らしながら夜の温泉街を散策した。浴衣の胸元を夜風に撫でられながら、笑い転げた時間が心地よかった。",
    "深夜の露天風呂に一人浸かり、湯煙の向こうの月を見上げた。温まった身体の芯から力が抜け、深い安らぎに満たされた。"
  ],
  "outcomes": [
    "shared_activity",
    "shared_activity",
    "reflection"
  ],
  "classification": "daily"
});
