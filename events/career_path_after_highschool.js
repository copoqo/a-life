(window.eventDefs = window.eventDefs || []).push({
  "id": "career_path_after_highschool",
  "title": "高校卒業と未来への扉・私の選ぶ進路",
  "description": "卒業証書を手にし、校門を出た春の日。これまでの学生生活に別れを告げ、これから始まる大人の人生の第一歩をどう歩むか。胸に去来する期待と不安の中で、私はこれからの道を選び取る。",
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
          216,
          227
        ]
      }
    ]
  },
  "weight": {
    "base": 100,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "career_path_after_highschool"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "自由な学生生活を謳歌する",
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
          "description": "【大学・専門学校へ進学】さらに知識を深め、自由な学生生活を謳歌する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 6
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -50000
            },
            {
              "path": "history.flags.university",
              "op": "record_flag",
              "value": true
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "学生"
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "自立した生活と収入を得る",
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
          "description": "【一般企業へ就職】社会人として働き、自立した生活と収入を得る。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 60000
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
            },
            {
              "path": "history.flags.employed",
              "op": "record_flag",
              "value": true
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "一般職"
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "【専門的な技術・創作の道へ】クリエイター・専門職を目指して修行する",
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
          "description": "【専門的な技術・創作の道へ】クリエイター・専門職を目指して修行する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "専門職・クリエイター"
            }
          ]
        }
      ]
    },
    {
      "id": "choice_3",
      "label": "【アルバイトをしながら探す】フリーターとして自分のペースで生きる",
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
          "id": "outcome_3",
          "weight": 1,
          "description": "【アルバイトをしながら探す】フリーターとして自分のペースで生きる。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 20000
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "パート・アルバイト"
            }
          ]
        }
      ]
    },
    {
      "id": "choice_4",
      "label": "【進路を決めず無職】焦らず自分を見つめ直す時間を過ごす",
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
          "id": "outcome_4",
          "weight": 1,
          "description": "【進路を決めず無職】焦らず自分を見つめ直す時間を過ごす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "無職"
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 18,
  "p": 1,
  "once": true,
  "text": "卒業証書を手にし、校門を出た春の日。これまでの学生生活に別れを告げ、これから始まる大人の人生の第一歩をどう歩むか。胸に去来する期待と不安の中で、私はこれからの道を選び取る。",
  "diary": [
    "進学を選んだ。新しいキャンパスで広がる世界と学びに胸を高鳴らせている。",
    "就職して働き始める道を選んだ。自分の力で生活を切り拓いていく覚悟を決めた。",
    "決まった枠に囚われず、自分のペースで歩むことを選んだ。焦らず自分らしい道を探したい。"
  ],
  "classification": "daily"
});
