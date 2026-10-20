(window.eventDefs = window.eventDefs || []).push({
  "id": "daily_morning_trash_gaze",
  "title": "朝のゴミ出しと気になる視線",
  "description": "まだ人通りのまばらな早朝、部屋着のままゴミ集積所へ向かった。カラス除けネットを直していると、向かいの道を行く出勤前の男性から、薄着の胸元をじっと見つめられるような、熱っぽい視線を感じた。",
  "content_rating": "general",
  "classification": "daily",
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
        "op": "gte",
        "value": 216
      }
    ]
  },
  "weight": {
    "base": 20,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "daily_morning_trash_gaze"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "気にせず普段通りゴミを出してさっと戻る",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "気にせず普段通りゴミを出してさっと戻る。",
          "effects": [
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 5
            },
            {
              "path": "history.flags.trash_gaze_ignored_or_thrill",
              "op": "set",
              "value": true
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "district_residential_morning_trash",
                "delay": 1,
                "prob": 0.9
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "誰かに相談したり、防犯への警戒を強める",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "家族や友人に相談し、防犯の意識を高める。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "history.flags.trash_gaze_reported",
              "op": "set",
              "value": true
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "次からはきちんと上着を着て身だしなみを整える",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "無防備だったことを反省し、上着を羽織るようにする。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
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
      "id": "choice_3",
      "label": "見られている視線を意識して、少し胸を張って足早に立ち去る",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_3",
          "weight": 1,
          "description": "見られている視線に微かな刺激を覚え、胸を張って立ち去る。",
          "effects": [
            {
              "path": "state.current_libido",
              "op": "add",
              "value": 25
            },
            {
              "path": "state.current_embarrassment",
              "op": "add",
              "value": 15
            },
            {
              "path": "history.flags.trash_gaze_ignored_or_thrill",
              "op": "set",
              "value": true
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "district_residential_morning_trash",
                "delay": 1,
                "prob": 0.95
              }
            }
          ]
        }
      ]
    }
  ]
});
