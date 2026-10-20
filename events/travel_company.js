(window.eventDefs = window.eventDefs || []).push({
  "id": "travel_company",
  "title": "社員旅行・温泉ホテルでの大宴会",
  "description": "職場の慰安を兼ねた一泊二日の社員旅行。温泉ホテルの大広間で開かれた大宴会では、瓶ビールが飛び交い、上司や同僚たちが浴衣姿で無礼講の酒を酌み交わす。普段のオフィスとは違う開放的な空気の中、お酒の勢いも手伝って意外な一面が見え隠れする……。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "coworker": {
      "source": "coworker",
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
          240,
          791
        ]
      },
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 240
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
    "unique_key": "travel_company"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "社内の親睦を深める",
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
          "description": "上司や同僚に愛想よくお酌をして回り、社内の親睦を深める。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.knowledge",
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
      "label": "宴席を抜け出して暗い非常階段へ向かう",
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
          "description": "お酒の熱気に息苦しさを感じ、宴席を抜け出して暗い非常階段へ向かう。",
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
                "eventId": "rare_outing_secret_quickie",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "職場の上手な愚痴を言い合って笑う",
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
          "description": "気の合う同僚たちと端の席で固まり、職場の上手な愚痴を言い合って笑う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    }
  ],
  "min": 20,
  "max": 65,
  "p": 0.14,
  "text": "職場の慰安を兼ねた一泊二日の社員旅行。温泉ホテルの大広間で開かれた大宴会では、瓶ビールが飛び交い、上司や同僚たちが浴衣姿で無礼講の酒を酌み交わす。普段のオフィスとは違う開放的な空気の中、お酒の勢いも手伝って意外な一面が見え隠れする……。",
  "alcohol": true,
  "diary": [
    "職場の宴会で笑顔を振りまいて立ち回った。普段見られない上司の砕けた姿を見て、仕事上の付き合いが少し滑らかになった気がする。",
    "騒がしい宴会場をこっそり抜け出し、薄暗い廊下で夜風を浴びた。浴衣の胸元から立ち上る酒の匂いと、誰かに見つかりそうなスリルに胸がざわついた。",
    "同期や親しい同僚と浴衣姿で愚痴を言い合い、大笑いした。気兼ねない仲間と過ごす夜は、日頃のストレスを綺麗に吹き飛ばしてくれた。"
  ],
  "outcomes": [
    "shared_activity",
    "reflection",
    "shared_activity"
  ],
  "classification": "daily"
});
