(window.eventDefs = window.eventDefs || []).push({
  "id": "conflict_virginity_anxiety",
  "title": "処女性への執着と、取り残される焦り",
  "description": "周囲の友人たちが当たり前のように初体験を済ませ、大人の女の顔をしていく中で、まだ一度も男を知らない自分。純潔を守ってきた誇りと、「まだ処女なのか」と揶揄されることへの屈辱と焦燥が心の中で激しく衝突する。誰でもいいからこの狭い肉穴を貫いて処女膜を破ってほしいという投げやりな衝動と、本当に愛する人に捧げたいという純情の間で引き裂かれそうになる……。",
  "content_rating": "adult",
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
          216,
          323
        ]
      },
      {
        "path": "person.experience.has_sexual_experience",
        "op": "eq",
        "value": false
      }
    ]
  },
  "weight": {
    "base": 20,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": [
      {
        "when": {
          "path": "state.current_libido",
          "op": "gte",
          "value": 30
        },
        "factor": 1.5
      }
    ]
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "conflict_virginity_anxiety"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "心から信頼できる相手に出会うまで処女を守り抜くと誓う",
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
          "description": "焦って安売りせず、心から信頼できる相手に出会うまで処女を守り抜くと誓う。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "行きずりの関係で処女を捨てようかと思い詰める",
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
          "description": "取り残された孤独と疼きに耐えかね、行きずりの関係で処女を捨てようかと思い詰める。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": -1
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "first_date_milestone",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "自分の人生の歩幅を大切にしようと心を整える",
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
          "description": "処女であるかどうかに囚われず、自分の人生の歩幅を大切にしようと心を整える。",
          "effects": [
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
  "min": 18,
  "max": 26,
  "p": 0.2,
  "once": true,
  "text": "周囲の友人たちが当たり前のように初体験を済ませ、大人の女の顔をしていく中で、まだ一度も男を知らない自分。純潔を守ってきた誇りと、「まだ処女なのか」と揶揄されることへの屈辱と焦燥が心の中で激しく衝突する。誰でもいいからこの狭い肉穴を貫いて処女膜を破ってほしいという投げやりな衝動と、本当に愛する人に捧げたいという純情の間で引き裂かれそうになる……。",
  "phase": "virgin",
  "diary": [
    "周りの話に流されて焦る必要はないと心に言い聞かせた。初めての痛みと快楽を分かち合う瞬間は、たった一度きりの大切なものだからこそ、自分の信じる相手に捧げたい。",
    "「処女を捨ててしまえば楽になれるのか」という自暴自棄な思いが胸をよぎった。夜の街を歩きながら、見知らぬ誰かに連れ去られる想像をして、下腹が冷たく震えた。",
    "他人の進度と自分を比べるのをやめた。私の身体は私のもの。いつ誰と境界線を越えるかは、自分が本当に望んだ時に決めればいいのだと胸を張った。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
