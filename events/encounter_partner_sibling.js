(window.eventDefs = window.eventDefs || []).push({
  "id": "encounter_partner_sibling",
  "title": "パートナーの留守中、義理のきょうだいとの背信の火遊び",
  "description": "パートナーが仕事や出張で家を空けている夜。忘れ物を届けに訪ねてきたパートナーのきょうだい。リビングでお茶を飲むうち、パートナーによく似た面影と声に不意に胸がざわめく。肩が触れ合い、気まずい沈黙の中で見つめ合ってしまう。",
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
          264,
          611
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
    "base": 12,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "encounter_partner_sibling"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "パートナーのベッドの上で身体を重ねる",
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
          "description": "罪悪感に震えながらも誘惑に屈し、パートナーのベッドの上で身体を重ねる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 4
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "encounter_partner_sibling_dinner_risk",
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
      "label": "お茶を濁して早々に玄関で見送る",
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
          "description": "家庭を壊す恐怖から強く自制し、お茶を濁して早々に玄関で見送る。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 22,
  "max": 50,
  "p": 0.12,
  "text": "パートナーが仕事や出張で家を空けている夜。忘れ物を届けに訪ねてきたパートナーのきょうだい。リビングでお茶を飲むうち、パートナーによく似た面影と声に不意に胸がざわめく。肩が触れ合い、気まずい沈黙の中で見つめ合ってしまう。",
  "diary": [
    "パートナーのベッドの上で、そのきょうだいに抱かれた。パートナーと同じ匂いがするのに違う激しい愛撫に、狂おしいほどの背徳の快楽を貪ってしまった。",
    "一線を越えそうになった危うい夜。パートナーへの罪悪感と、身体の疼きに苛まれながら一人で夜を明かした。"
  ],
  "outcomes": [
    "meeting_partner_sibling",
    "none"
  ],
  "classification": "daily"
});
