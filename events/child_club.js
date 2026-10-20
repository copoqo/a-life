(window.eventDefs = window.eventDefs || []).push({
  "id": "child_club",
  "title": "夕暮れの部活と汗ばむジャージ",
  "description": "放課後のグラウンドや体育館。汗で肌に張り付く体操着の冷たさと、仲間と声を掛け合ってボールを追いかける熱気。青春の汗の匂いの中で、身体を動かす充実感に浸る。",
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
          227
        ]
      }
    ]
  },
  "weight": {
    "base": 14,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "child_club"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "泥だらけになりながら部活動に打ち込む",
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
          "description": "泥だらけになりながら部活動に打ち込む。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 5
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
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
      "label": "趣味として楽しむ",
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
          "description": "自分のペースを崩さず、趣味として楽しむ。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
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
  "min": 12,
  "max": 18,
  "p": 0.14,
  "once": true,
  "text": "放課後のグラウンドや体育館。汗で肌に張り付く体操着の冷たさと、仲間と声を掛け合ってボールを追いかける熱気。青春の汗の匂いの中で、身体を動かす充実感に浸る。",
  "diary": [
    "仲間と声を枯らして夕暮れまでボールを追った。ジャージに染みた汗の匂いと、みんなで笑い合った時間が愛おしい。",
    "部活に縛られすぎず、自分の時間を大切にした。図書室で読書したり寄り道したりする放課後が心地よかった。"
  ],
  "classification": "daily"
});
