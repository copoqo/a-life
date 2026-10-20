(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_lunch_seconds_duel",
  "title": "給食の揚げパンと仁義なきおかわりジャンケン",
  "description": "大人気のきな粉揚げパンがひとつだけ余った。男子たちが押し寄せる中、「私だって食べたい！」とジャンケンの輪に飛び込んだ。",
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
    "unique_key": "elem_lunch_seconds_duel"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "気迫を込めてチョキを出し、勝ちをもぎ取る",
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
          "description": "気迫を込めてチョキを出し、勝ちをもぎ取る",
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
    },
    {
      "id": "choice_1",
      "label": "勝ったあと、応援してくれた友達と半分こにする",
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
          "description": "勝ったあと、応援してくれた友達と半分こにする",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
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
  "min": 7,
  "max": 11,
  "p": 0.7,
  "once": true,
  "text": "大人気のきな粉揚げパンがひとつだけ余った。男子たちが押し寄せる中、「私だって食べたい！」とジャンケンの輪に飛び込んだ。",
  "diary": [
    "最後に男子と一騎打ちになって、心臓がバクバクしたけど勝った！ 勝ち取った揚げパンはいつもより何倍も甘くて美味しかった。男子の悔しそうな顔が忘れられない。",
    "ジャンケンで勝ってゲットした揚げパンを、応援してくれた〇〇ちゃんと半分こにした。ふたりで口の周りをきな粉だらけにして大笑いした。"
  ],
  "classification": "daily"
});
