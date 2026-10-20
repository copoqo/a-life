(window.eventDefs = window.eventDefs || []).push({
  "id": "encounter_parent_friend",
  "title": "送迎の帰り道、コインパーキングの車内で",
  "description": "子供の習い事や学校行事の帰り道。子供の友達の親（パパ友・ママ友）と偶然二人になり、車で送ってもらうことに。人目のつかないコインパーキングに車が停まった瞬間、家庭の悩みを聞いてくれていた相手の手が、そっとこちらの太ももに重なった。",
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
          336,
          671
        ]
      },
      {
        "path": "derived.has_children",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 13,
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
    "unique_key": "encounter_parent_friend"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "服を乱して貪り合うように肌を重ねる",
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
          "description": "スモークガラスの車内でシートを倒し、服を乱して貪り合うように肌を重ねる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "encounter_parent_friend_secret_hotel",
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
      "label": "優しく手を払って車を降りる",
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
          "description": "親としての分別を保ち、優しく手を払って車を降りる。",
          "effects": [
            {
              "path": "skill.morality",
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
    }
  ],
  "min": 28,
  "max": 55,
  "p": 0.13,
  "text": "子供の習い事や学校行事の帰り道。子供の友達の親（パパ友・ママ友）と偶然二人になり、車で送ってもらうことに。人目のつかないコインパーキングに車が停まった瞬間、家庭の悩みを聞いてくれていた相手の手が、そっとこちらの太ももに重なった。",
  "diary": [
    "子供たちの親同士という立場を忘れ、車内で夢中になって求め合った。狭い座席で下着をずらされ、奥深く突き上げられた快感は、家庭の日常を吹き飛ばすほど強烈だった。",
    "あやうく道を踏み外しかけた瞬間。家庭を持つ身としての重みと、女として求められた甘美な誘惑に胸が激しく乱れた。"
  ],
  "outcomes": [
    "meeting_parent_friend",
    "none"
  ],
  "classification": "daily"
});
