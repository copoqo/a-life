(window.eventDefs = window.eventDefs || []).push({
  "id": "marital_intimacy_crisis",
  "title": "夫婦の寝室・倦怠と夜の渇き",
  "description": "結婚生活が長くなるにつれ、かつての激しい情熱が落ち着き、夜の営みに微妙な変化やすれ違いが訪れる。",
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
          300,
          911
        ]
      }
    ]
  },
  "weight": {
    "base": 16,
    "additive": [],
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
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "marital_intimacy_crisis"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "背中から抱きついて誘う",
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
          "description": "夫のパジャマに手を滑り込ませ、背中から抱きついて誘う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "濡れた秘所に指を沈めて慰める",
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
          "description": "音を殺してシーツの中で一人、濡れた秘所に指を沈めて慰める。",
          "effects": [
            {
              "path": "state.mood",
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
    },
    {
      "id": "choice_2",
      "label": "背中を向けて静かに目を閉じる",
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
          "description": "寂しさを胸にしまい、背中を向けて静かに目を閉じる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "trait.sexual_interest.current",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 25,
  "max": 75,
  "p": 0.16,
  "text": "結婚生活が長くなるにつれ、かつての激しい情熱が落ち着き、夜の営みに微妙な変化やすれ違いが訪れる。",
  "variants": [
    {
      "subTitle": "冷たい背中と渇いた下腹",
      "text": "仕事の疲れからか、隣で先に寝息を立てる夫の広い背中。触れ合いたいのに言い出せず、下着越しに擦れる秘所の熱さと疼きを持て余し、暗闇の中で天井を見つめる……。",
      "choices": [
        [
          "夫のパジャマに手を滑り込ませ、背中から抱きついて誘う",
          {
            "happiness": 4,
            "trust": 2,
            "sexualEffects": {
              "initiative": 4,
              "desire": 4
            }
          }
        ],
        [
          "音を殺してシーツの中で一人、濡れた秘所に指を沈めて慰める",
          {
            "happiness": 3,
            "stress": -1,
            "sexualEffects": {
              "desire": -2,
              "selfKnowledge": 3
            }
          }
        ],
        [
          "寂しさを胸にしまい、背中を向けて静かに目を閉じる",
          {
            "stress": 2,
            "intimacyNeed": 2
          }
        ]
      ],
      "diary": [
        "夫の肌に触れて小さく甘えると、振り返って優しく抱きしめてくれた。奥を満たされる温もりに、抱えていた不安が溶けていった。",
        "夫を起こさないよう、息を潜めて一人で下腹を弄った。ぐちゅぐちゅと鳴る水音の切なさと、奥底から突き上げる快感に、涙がシーツに零れた。",
        "求めたい気持ちを飲み込んで背を向けた。夫婦だからこそ、素直に甘えられない夜の寂しさが身に染みた。"
      ]
    },
    {
      "subTitle": "倦怠期を打ち破る大胆な試み",
      "text": "マンネリを打破すべく、普段は決して着ないような透け感のある大胆なランジェリーを新調する。寝室に入ってきた夫の息を呑む気配に、胸が早鐘を打つ……。",
      "choices": [
        [
          "恥じらいながらも素肌を見せつけ、夫をベッドへ誘い込む",
          {
            "happiness": 5,
            "trust": 3,
            "aesthetics": 3,
            "sexualEffects": {
              "desire": 6,
              "initiative": 4
            }
          }
        ],
        [
          "照れ隠しに笑い合いながら、いつもと違う濃密な情交を楽しむ",
          {
            "happiness": 5,
            "trust": 4,
            "stress": -2
          }
        ],
        [
          "いざとなると気恥ずかしくなり、上着を羽織ってごまかす",
          {
            "shyness": 4,
            "happiness": 1
          }
        ]
      ],
      "diary": [
        "透けたレース越しに露わになった胸と秘所を見つめられ、夫の目が野生の色を帯びた。乱暴に押し倒されて奥深くまで貪り尽くされ、新婚の頃以上の激しい情交に狂乱した。",
        "お互いの気恥ずかしさを笑い合いながら、久しぶりにじっくりと愛撫を交わした。夫婦の絆が再び熱を帯びた気がする。",
        "やっぱり恥ずかしくてカーディガンを羽織ってしまった。でも夫は優しく笑って頭を撫でてくれた。"
      ]
    }
  ],
  "classification": "major",
  "is_major": true
});
