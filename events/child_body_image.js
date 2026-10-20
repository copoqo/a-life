(window.eventDefs = window.eventDefs || []).push({
  "id": "child_body_image",
  "title": "制服の下の丸みと注がれる視線",
  "description": "薄手のブラウス越しに、明らかに丸みを帯びてきた胸とくびれ始めた腰のライン。すれ違う男子や大人の視線が胸元に落ちるのを感じ、肌にまとわりつくような居心地の悪さと、女の身体になったのだという生々しい自意識が交錯する。",
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
          144,
          215
        ]
      }
    ]
  },
  "weight": {
    "base": 9,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "child_body_image"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "自分自身のペースで身体の変化を受け止める",
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
          "description": "視線に惑わされず、自分自身のペースで身体の変化を受け止める。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "居心地の悪さを信頼できる大人や保健室の先生に相談する",
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
          "description": "居心地の悪さを信頼できる大人や保健室の先生に相談する。",
          "effects": [
            {
              "path": "skill.knowledge",
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
  "min": 12,
  "max": 17,
  "p": 0.09,
  "text": "薄手のブラウス越しに、明らかに丸みを帯びてきた胸とくびれ始めた腰のライン。すれ違う男子や大人の視線が胸元に落ちるのを感じ、肌にまとわりつくような居心地の悪さと、女の身体になったのだという生々しい自意識が交錯する。",
  "diary": [
    "歩くたびに揺れる胸を隠すように猫背になって歩いた。でも、これが大人の女性へ育っていく自然な過程なのだと、自分に言い聞かせた。",
    "保健室で先生に相談すると、「素敵な大人になっている証拠だよ」と微笑んでくれた。胸のつかえがすっと取れた。"
  ],
  "classification": "daily"
});
