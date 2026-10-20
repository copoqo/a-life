(window.eventDefs = window.eventDefs || []).push({
  "id": "child_gym_clothes_itch",
  "title": "体操着とブラジャーの擦れ",
  "description": "初めて着けさせられたジュニアブラ。体育の授業で校庭を走るたび、薄い体操着の中で硬いゴムとカップが敏感になった乳頭を擦る。チクチクとした痛痒さがいつしか下腹の疼きに変わり、足がもつれそうになる……。",
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
          132,
          179
        ]
      }
    ]
  },
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "child_gym_clothes_itch"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "必死に走り切る",
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
          "description": "胸の擦れる甘い刺激に顔を赤らめながら、必死に走り切る。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ブラジャーのホックを緩めて熱い肌を休ませる",
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
          "description": "トイレに駆け込み、ブラジャーのホックを緩めて熱い肌を休ませる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "友達に「胸が痛くない？」と小声で相談してみる",
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
          "description": "友達に「胸が痛くない？」と小声で相談してみる。",
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
  "min": 11,
  "max": 14,
  "p": 0.22,
  "text": "初めて着けさせられたジュニアブラ。体育の授業で校庭を走るたび、薄い体操着の中で硬いゴムとカップが敏感になった乳頭を擦る。チクチクとした痛痒さがいつしか下腹の疼きに変わり、足がもつれそうになる……。",
  "diary": [
    "走るたびに揺れる胸の先端が、布地に擦れてツンと尖る。痛いのにどこか下腹が熱くなるような奇妙な感覚に、息が上がってしまった。",
    "個室で体操着をめくり、赤くなった胸の先をそっと撫でた。ブラジャーの窮屈さと、女としての身体の成長を実感した。",
    "同じように悩んでいる友達と話せて安心した。胸の痛痒さも、みんなが通る道なのだと分かって少し心が軽くなった。"
  ],
  "classification": "daily"
});
