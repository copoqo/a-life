(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_relay_race_baton",
  "title": "秋空の運動会とクラス対抗リレーのバトン",
  "description": "秋の運動会。クラスの代表としてリレーの選手に選ばれた。砂埃が舞う校庭、割れんばかりのメガホンの応援。",
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
          96,
          155
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
    "unique_key": "elem_relay_race_baton"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "コーナーで外側から一気に前の走者を抜き去る",
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
          "description": "コーナーで外側から一気に前の走者を抜き去る",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.healthy_habits",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "呼吸を合わせて完璧なバトンパスを次の走者に繋ぐ",
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
          "description": "呼吸を合わせて完璧なバトンパスを次の走者に繋ぐ",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "min": 8,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "秋の運動会。クラスの代表としてリレーの選手に選ばれた。砂埃が舞う校庭、割れんばかりのメガホンの応援。",
  "diary": [
    "リレーのカーブで前の人を抜いた瞬間、全校生徒の「うおおおっ！」って歓声が聞こえた。足がちぎれそうだったけど、風になったみたいで最高に気持ちよかった！",
    "「はいっ！」って声をかけて次の走者の手にバトンを叩き込んだ。みんなで力を合わせて掴んだ1位のメダル、一生の宝物にする。"
  ],
  "classification": "daily"
});
