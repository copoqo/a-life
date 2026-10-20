(window.eventDefs = window.eventDefs || []).push({
  "id": "crowded_train_culmination",
  "title": "終点のホーム、誰もいない踊り場での逢瀬",
  "description": "電車を降りた人波の中、腕を強く引かれて駅の非常階段の薄暗い踊り場へと引きずり込まれる。拒むはずの唇を荒々しく塞がれ、壁に押し付けられたままスカートを捲り上げられる。「電車の中で、あんなに濡らしてただろ……」と囁かれ、下着を引き裂くようにずらされた秘唇に、硬く充血した熱い肉塊が直にあてがわれる。逃げ場のない密室で、下腹が狂おしく疼く……。",
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
          455
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
    "base": 12,
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
    "unique_key": "crowded_train_culmination"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "壁に手をついて奥深くまで突き上げられる",
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
          "description": "名前も知らない男の熱い腰を受け入れ、壁に手をついて奥深くまで突き上げられる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "声を押し殺しながら何度も絶頂を迎える",
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
          "description": "狂ったような背徳の逢瀬に身を震わせ、声を押し殺しながら何度も絶頂を迎える。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "相手のすねを蹴り上げて外の明かりへ逃げ延びる",
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
          "description": "寸前のところで正気を取り戻し、相手のすねを蹴り上げて外の明かりへ逃げ延びる。",
          "effects": [
            {
              "path": "state.self_efficacy",
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
    }
  ],
  "min": 18,
  "max": 37,
  "p": 0.12,
  "text": "電車を降りた人波の中、腕を強く引かれて駅の非常階段の薄暗い踊り場へと引きずり込まれる。拒むはずの唇を荒々しく塞がれ、壁に押し付けられたままスカートを捲り上げられる。「電車の中で、あんなに濡らしてただろ……」と囁かれ、下着を引き裂くようにずらされた秘唇に、硬く充血した熱い肉塊が直にあてがわれる。逃げ場のない密室で、下腹が狂おしく疼く……。",
  "publicSex": true,
  "diary": [
    "薄暗い踊り場で壁に押し付けられ、見知らぬ男に奥深くまで乱暴に貫かれた。コンクリートの冷たさと肉腔の焼けるような熱さ、ぐちゃぐちゃと響く卑猥な水音に、理性が完全に崩壊して啼き狂った。",
    "電車で身体を弄ってきた男の肉塊を、貪るように受け入れた。名も知らぬ相手にただ雌として犯される快楽に腰が勝手に動き、下腹から突き上げる激痛のような快感に何度も果てた。",
    "間一髪で相手を突き放し、人通りのある改札へ逃げ込んだ。破れかけた下着と股間に残る生暖かい体温に、死ぬほどの恐怖と背徳の昂ぶりを感じて身震いした。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "boundary"
  ],
  "classification": "major",
  "is_major": true
});
