(window.eventDefs = window.eventDefs || []).push({
  "id": "district_residential_morning_trash",
  "title": "朝の住宅街・ノーブラのゴミ出しと路地裏の衝動",
  "description": "まだ人気のまばらな早朝の住宅街。パジャマの上に薄手のカーディガンを羽織り、ノーブラのままゴミ集積所へ。カラス除けネットを直した瞬間、出勤前の近所の男に腕を掴まれ、人通りのない路地裏の電柱の影へ。カーディガンの胸元をはだけさせられ、早朝の澄んだ空気の中で尖った乳頭とショーツの中をまさぐられる……。",
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
          671
        ]
      },
      {
        "path": "skill.morality",
        "op": "lte",
        "value": 0
      },
      {
        "path": "history.flags.trash_gaze_ignored_or_thrill",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 22,
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
          "value": "residential"
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
    "unique_key": "district_residential_morning_trash"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "立ったままショーツをずらして奥まで受け入れる",
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
          "description": "電柱に背中を押し当てられ、立ったままショーツをずらして奥まで受け入れる。",
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
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "濡れた秘唇を指で転がされて声を殺す",
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
          "description": "朝の冷気に素肌を晒しながら、濡れた秘唇を指で転がされて声を殺す。",
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
      "label": "ゴミ袋を置いて逃げ帰る",
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
          "description": "「誰かに見られます！」と小声で拒絶し、ゴミ袋を置いて逃げ帰る。",
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
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 55,
  "p": 0.04,
  "text": "まだ人気のまばらな早朝の住宅街。パジャマの上に薄手のカーディガンを羽織り、ノーブラのままゴミ集積所へ。カラス除けネットを直した瞬間、出勤前の近所の男に腕を掴まれ、人通りのない路地裏の電柱の影へ。カーディガンの胸元をはだけさせられ、早朝の澄んだ空気の中で尖った乳頭とショーツの中をまさぐられる……。",
  "publicSex": true,
  "diary": [
    "冷たい電柱に背中を押しつけられ、朝の住宅街で下着をずらされて激しく貫かれた。出勤する人の靴音が遠くに聞こえる中、声を出せない極限の羞恥に愛液が溢れ、太ももを痙攣させて絶頂した。",
    "カーディガンの隙間から冷たい朝風が吹き込む中、露わになった胸と下腹をまさぐられた。朝露の匂いと男の熱い吐息に包まれ、路地の物陰で息を詰まらせて果てた。",
    "近所の視線が怖くて必死で男の手を払い、足早に自宅へ駆け戻った。玄関で息を切らしながら、自分の無防備さを恥じた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "once": true,
  "classification": "major",
  "is_major": true,
  "requires_flag": "trash_gaze_ignored_or_thrill"
});
