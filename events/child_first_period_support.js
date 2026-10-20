(window.eventDefs = window.eventDefs || []).push({
  "id": "child_first_period_support",
  "title": "初めての赤い印と下着の重み",
  "description": "トイレで下着を下ろした瞬間、クロッチに滲んだ赤黒い染み。自分の中から生々しい血が流れ出ている現実に息を呑み、母から渡された分厚いナプキンを当てる。下腹が重だるく痛み、歩くたびにカサカサと鳴る違和感に、女の業のようなものを覚える……。",
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
          215
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
    "unique_key": "child_first_period_support"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "自らの身体の命のサイクルを理解する",
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
          "description": "月経の仕組みを調べ、自らの身体の命のサイクルを理解する。",
          "effects": [
            {
              "path": "skill.knowledge",
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
    },
    {
      "id": "choice_1",
      "label": "母親や友人に体調を相談する",
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
          "description": "お腹にカイロを当てて温まり、母親や友人に体調を相談する。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 11,
  "max": 17,
  "p": 0.08,
  "text": "トイレで下着を下ろした瞬間、クロッチに滲んだ赤黒い染み。自分の中から生々しい血が流れ出ている現実に息を呑み、母から渡された分厚いナプキンを当てる。下腹が重だるく痛み、歩くたびにカサカサと鳴る違和感に、女の業のようなものを覚える……。",
  "diary": [
    "ナプキンを当てた下着のずっしりとした重み。下腹の奥が痛むたびに、私は本当に子供を産める大人の雌の身体になったのだと痛感した。",
    "温かいココアを飲みながらベッドで丸くなった。痛みに耐えながら、母が寄り添ってくれた手の温もりが嬉しかった。"
  ],
  "classification": "daily"
});
