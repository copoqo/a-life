(window.eventDefs = window.eventDefs || []).push({
  "id": "encounter_partner_sibling_dinner_risk",
  "title": "家族団らんの食卓、テーブルの下の秘密",
  "description": "親族が集まる食事会。目の前には笑顔で料理を運ぶ愛するパートナーがいる。しかし、垂れ下がったテーブルクロスの下、隣に座る義理のきょうだいの素足が、こちらのタイツの隙間から太ももへと這い上がってくる。指先が内腿を優しくなぞり、濡れそぼる秘唇の真上を足指でぐにゅりと押し当てられた瞬間、心臓が早鐘のように鳴り、下腹から蜜が溢れ出す……。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
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
          264,
          635
        ]
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 13,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "encounter_partner_sibling_dinner_risk"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "テーブルの下で秘唇を足指に擦りつけ啼き声を呑む",
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
          "description": "パートナーと会話を交わしながら、テーブルの下で秘唇を足指に擦りつけ啼き声を呑む。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "洗面所に駆け込んで下着の湿り気を確かめる",
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
          "description": "恐怖と罪悪感に耐えかねて席を立ち、洗面所に駆け込んで下着の湿り気を確かめる。",
          "effects": [
            {
              "path": "state.stress",
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
      "id": "choice_2",
      "label": "毅然と睨みつけて関係を拒絶する",
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
          "description": "テーブルの下できょうだいの足を強く踏みつけ、毅然と睨みつけて関係を拒絶する。",
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
    }
  ],
  "min": 22,
  "max": 52,
  "p": 0.13,
  "text": "親族が集まる食事会。目の前には笑顔で料理を運ぶ愛するパートナーがいる。しかし、垂れ下がったテーブルクロスの下、隣に座る義理のきょうだいの素足が、こちらのタイツの隙間から太ももへと這い上がってくる。指先が内腿を優しくなぞり、濡れそぼる秘唇の真上を足指でぐにゅりと押し当てられた瞬間、心臓が早鐘のように鳴り、下腹から蜜が溢れ出す……。",
  "diary": [
    "パートナーの目の前で、そのきょうだいの足指に秘所をまさぐられた。バレる恐怖で全身が粟立つ中、下腹がきゅうきゅうと痙攣して愛液が止まらなくなり、下唇を血が出るほど噛んで耐えた。",
    "耐えきれずトイレに逃げ込み、ショーツを下ろすと、すでに愛液でびっしょりと濡れていた。家族を裏切る背徳の甘さに、震える指で胸を押さえるしかなかった。",
    "これ以上の背信は破滅を招くと心に決め、きょうだいの誘惑を厳しく拒絶した。食事会を終えてパートナーと帰る道、安堵の涙が静かに溢れた。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "boundary"
  ],
  "classification": "daily"
});
