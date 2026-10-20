(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_cleaning_duty_fight",
  "title": "放課後の教室掃除と男子のチャンバラ",
  "description": "放課後の教室掃除。男子たちがホウキを刀にしてチャンバラを始め、集めたゴミを散らかした。「ちょっと！ ちゃんと掃除しなさいよ！」と怒鳴りつける。",
  "content_rating": "general",
  "enabled": true,
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
          84,
          143
        ]
      }
    ]
  },
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "elem_cleaning_duty_fight"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "ホウキを奪い取って厳しく叱りつけ、やり直させる",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "ホウキを奪い取って厳しく叱りつけ、やり直させる",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "職員室の先生に言いに行って注意してもらう",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "職員室の先生に言いに行って注意してもらう",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "呆れて無視し、仲の良い友達と手早く終わらせる",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "呆れて無視し、仲の良い友達と手早く終わらせる",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "skill.healthy_habits",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "min": 7,
  "max": 11,
  "p": 0.7,
  "once": true,
  "text": "放課後の教室掃除。男子たちがホウキを刀にしてチャンバラを始め、集めたゴミを散らかした。「ちょっと！ ちゃんと掃除しなさいよ！」と怒鳴りつける。",
  "diary": [
    "男子がホウキでチャンバラしてゴミを散らかすから、本気で怒鳴ってホウキを取り上げた。「うるさい女！」って言われたけど、最後はちゃんと謝らせて掃除させた。私、意外と強いかも。",
    "先生を呼んできたら、男子たちが一瞬で青ざめて正座させられていた。「言いつけ魔」って小声で睨まれたけど、悪いのはあっちだし、ルールは守るべきだ。",
    "男子を相手にするのもバカバカしいから、〇〇ちゃんと二人でサッサと終わらせた。「男子ってなんであんなに幼稚なんだろうね」って笑い合いながら帰った夕暮れが楽しかった。"
  ],
  "classification": "daily"
});
