(window.eventDefs = window.eventDefs || []).push({
  "id": "district_rural_barn_straw",
  "title": "夜陰に沈む農村集落・古びた納屋の藁の上の背徳",
  "description": "街灯もまばらな農村集落の夜。カエルの大合唱と生温かい夜風が吹き抜ける中、人目を忍んで潜り込んだ集落の外れの納屋。干し草と古い農機具の匂いが漂う暗がりで、集落の男に引き倒される。閉鎖的な村社会で誰にも言えない秘密の交わり。藁の上に広げられた柔肌を、土と汗に汚れた逞しい男の手がまさぐる……。",
  "content_rating": "adult",
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
          216,
          791
        ]
      },
      {
        "path": "skill.morality",
        "op": "lte",
        "value": 0
      }
    ]
  },
  "weight": {
    "base": 24,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "rural"
        },
        "factor": 3.5
      },
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
    "unique_key": "district_rural_barn_straw"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "集落の掟を破る激しいピストンに声を殺して啼き乱れる",
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
          "description": "干し草の上に倒れ込み、集落の掟を破る激しいピストンに声を殺して啼き乱れる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "藁の擦れる音に紛れて愛液を散らす",
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
          "description": "作業着の隙間から指をねじ込まれ、藁の擦れる音に紛れて愛液を散らす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 1
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
      "id": "choice_2",
      "label": "慌てて納屋の裏口から闇へ逃げる",
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
          "description": "軽トラのヘッドライトがあぜ道を照らし、慌てて納屋の裏口から闇へ逃げる。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 65,
  "p": 0.04,
  "text": "街灯もまばらな農村集落の夜。カエルの大合唱と生温かい夜風が吹き抜ける中、人目を忍んで潜り込んだ集落の外れの納屋。干し草と古い農機具の匂いが漂う暗がりで、集落の男に引き倒される。閉鎖的な村社会で誰にも言えない秘密の交わり。藁の上に広げられた柔肌を、土と汗に汚れた逞しい男の手がまさぐる……。",
  "publicSex": true,
  "diary": [
    "集落の外れの古い納屋で、藁の上に押し倒された。土の匂いに包まれながら逞しい男に奥深くを突き上げられ、閉鎖的な村社会のタブーを破る背徳感に啼き狂った。",
    "干し草の山に身を沈め、作業着の隙間から秘所をまさぐられた。ぐちゃぐちゃと鳴る愛液の音と夜風の音が混ざり合い、腰を浮かせて絶頂に達した。",
    "軽トラックの音が近づいてきて慌てて裏口から抜け出した。あぜ道の暗闇を駆けながら、太ももの間を伝う熱い汗を拭った。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "once": true,
  "classification": "daily"
});
