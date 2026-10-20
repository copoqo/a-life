(window.eventDefs = window.eventDefs || []).push({
  "id": "travel_partner",
  "title": "パートナーと巡る温泉宿・二人きりの隠れ家",
  "description": "パートナーと二人きりで訪れた山あいの隠れ家旅館。客室の専用露天風呂に浸かり、湯煙の中で素肌を密着させる。湯上がりの火照った身体に浴衣を羽織り、帯を解き合うと、温泉の熱気と愛欲が混ざり合い、濃密で甘美な夜が幕を開ける……。",
  "content_rating": "general",
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
          971
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
    "base": 18,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "travel_partner"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "シーツの上で貪り合うように愛し合う",
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
          "description": "湯上がりの火照った素肌を晒し、シーツの上で貪り合うように愛し合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "partner_bath_passion",
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
      "label": "二人だけの静かな夜を語り合う",
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
          "description": "露天風呂でお酒を酌み交わし、二人だけの静かな夜を語り合う。",
          "effects": [
            {
              "path": "state.mood",
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
    },
    {
      "id": "choice_2",
      "label": "寄り添って歩く",
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
          "description": "浴衣のまま夜の庭園を手を繋いで散歩し、寄り添って歩く。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
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
  "min": 18,
  "max": 80,
  "p": 0.18,
  "text": "パートナーと二人きりで訪れた山あいの隠れ家旅館。客室の専用露天風呂に浸かり、湯煙の中で素肌を密着させる。湯上がりの火照った身体に浴衣を羽織り、帯を解き合うと、温泉の熱気と愛欲が混ざり合い、濃密で甘美な夜が幕を開ける……。",
  "diary": [
    "客室露天風呂から上がった後、浴衣を引き剥がされてベッドに押し倒された。温泉で潤った秘所を奥深くまで貫かれ、シーツを愛液で濡らしながら果てた。",
    "湯船に浸かりながら、これまでの二人の歩みと未来について静かに語り合った。素肌の温もりを通じて、互いの心がぴったり重なるのを感じた。",
    "湯上がりの夜風に吹かれながら手をつないで歩いた。浴衣越しに伝わる相手の体温に、言葉にできない幸福感が込み上げた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "mutual_talk",
    "shared_activity"
  ],
  "classification": "daily"
});
