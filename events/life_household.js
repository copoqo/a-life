(window.eventDefs = window.eventDefs || []).push({
  "id": "life_household",
  "title": "夜明けの台所と二人の生活の気配",
  "description": "静かな朝の光の中で、一人で立つ台所、あるいは隣でまだ温かい寝息を立てるパートナーの存在。誰かと肌を寄せ合って生きる安心感と、一人きりの自由な空間の間で、これからの暮らしに想いを馳せる。",
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
          300,
          731
        ]
      }
    ]
  },
  "weight": {
    "base": 8,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "life_household"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "より心地よい空間を整える",
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
          "description": "住まいの希望を整理し、より心地よい空間を整える。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "日々の食卓を充実させる",
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
          "description": "今の温かな暮らしを慈しみ、日々の食卓を充実させる。",
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
            }
          ]
        }
      ]
    }
  ],
  "min": 25,
  "max": 60,
  "p": 0.08,
  "text": "静かな朝の光の中で、一人で立つ台所、あるいは隣でまだ温かい寝息を立てるパートナーの存在。誰かと肌を寄せ合って生きる安心感と、一人きりの自由な空間の間で、これからの暮らしに想いを馳せる。",
  "diary": [
    "カーテンを開けて朝の光を浴びた。自分が選んだ生活の輪郭が、少しずつ形作られていく手応えがあった。",
    "湯気を立てるお味噌汁を囲みながら、他愛ない会話を交わした。この何気ない暮らしこそが宝物なのだと思えた。"
  ],
  "classification": "daily"
});
