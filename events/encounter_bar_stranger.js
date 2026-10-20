(window.eventDefs = window.eventDefs || []).push({
  "id": "encounter_bar_stranger",
  "title": "薄暗いバーのカウンター、触れ合う膝と深夜のホテル",
  "description": "仕事帰りや休日の夜、ふらりと入った薄暗い隠れ家バー。隣の席に居合わせた人とカクテルを傾けながら会話が弾む。アルコールで火照った身体に、カウンターの下で触れ合う相手の膝の感触。目が合うたびに、今夜限りの情熱を求める視線が突き刺さる。",
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
    "base": 15,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "encounter_bar_stranger"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "朝まで貪るように愛し合う",
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
          "description": "バーを出てそのまま夜のホテルへとなだれ込み、朝まで貪るように愛し合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "sexual_desire_fluctuation",
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
      "label": "笑顔で手を振って一人タクシーに乗る",
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
          "description": "グラスを空けて大人の余韻を楽しみ、笑顔で手を振って一人タクシーに乗る。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
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
  "min": 20,
  "max": 65,
  "p": 0.15,
  "text": "仕事帰りや休日の夜、ふらりと入った薄暗い隠れ家バー。隣の席に居合わせた人とカクテルを傾けながら会話が弾む。アルコールで火照った身体に、カウンターの下で触れ合う相手の膝の感触。目が合うたびに、今夜限りの情熱を求める視線が突き刺さる。",
  "alcohol": true,
  "diary": [
    "見知らぬ相手とホテルのベッドへ倒れ込み、名前も素性も知らぬまま肌を貪り合った。しがらみのない純粋な肉欲に溺れ、奥まで激しく貫かれて何度も果てた。",
    "バーでの行きずりの出会い。触れ合った膝の温もりと、大人の甘い駆け引きに胸をときめかせた心地よい夜だった。"
  ],
  "outcomes": [
    "meeting_bar_encounter",
    "meeting_bar_encounter"
  ],
  "classification": "random"
});
