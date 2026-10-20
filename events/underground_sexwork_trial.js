(window.eventDefs = window.eventDefs || []).push({
  "id": "underground_sexwork_trial",
  "title": "切迫する生活苦と淫らな衝動・高級ソープへの体験入店",
  "description": "借金の返済や生活費の底がつき、家賃の督促状が机に積まれた月末。ネットの「即日日払い・未経験歓迎」の広告にすがるように、歓楽街の路地裏にあるソープランドの面接へ。簡単な講習の後、通された豪華な浴槽付きの個室。バスタオル一枚を巻いて待つ中、現れた裕福そうな中年の客。豊かな泡とオイルにまみれて滑り合う素肌、そして金のために他人の肉棒を口と肉穴で受け入れる背徳の快感に、罪悪感を吹き飛ばすほど下腹が淫らに疼き出す……。",
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
          551
        ]
      }
    ]
  },
  "weight": {
    "base": 22,
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
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "underground_sexwork_trial"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "札束のために奥深くまで太い肉塊を飲み込む",
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
          "description": "【本番の快楽に屈服する】全身泡まみれで跨がり、札束のために奥深くまで太い肉塊を飲み込む。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 120000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "風俗"
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "underground_sexwork_fulltime",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ゴムなしで子宮口まで注がせる",
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
          "description": "【裏オプの生中出しを受け入れる】追加のチップに目が眩み、ゴムなしで子宮口まで注がせる。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 180000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
            },
            {
              "path": "person.career.employment_status",
              "op": "set",
              "value": "風俗"
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "underground_raw_creampie_addict",
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
      "label": "濡れた身体の震えを抱えて夜の街へ出る",
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
          "description": "【体験だけで逃げるように帰る】日払いの封筒を握りしめ、濡れた身体の震えを抱えて夜の街へ出る。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 60000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 45,
  "p": 0.04,
  "text": "借金の返済や生活費の底がつき、家賃の督促状が机に積まれた月末。ネットの「即日日払い・未経験歓迎」の広告にすがるように、歓楽街の路地裏にあるソープランドの面接へ。簡単な講習の後、通された豪華な浴槽付きの個室。バスタオル一枚を巻いて待つ中、現れた裕福そうな中年の客。豊かな泡とオイルにまみれて滑り合う素肌、そして金のために他人の肉棒を口と肉穴で受け入れる背徳の快感に、罪悪感を吹き飛ばすほど下腹が淫らに疼き出す……。",
  "diary": [
    "泡まみれのマットの上で客の太い肉棒に跨がった。生活費の札束のためだと自分に言い聞かせながらも、ぐちゃぐちゃと肉穴を掻き回される熱い快感に我を忘れ、みっともないほど声をあげて絶頂した。",
    "追加のチップを渡され、避妊具をつけない生の本番を受け入れた。子宮口に直撃する熱い精液の感触に頭が真っ白になり、お金と快感の毒に身体が侵されていくのを感じた。",
    "体験入店の日払い封筒をバッグにしまい、夜の歓楽街を逃げるように歩いた。他人の体温とオイルの匂いが肌に残っていて、下腹が冷たく痙攣していた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "once": true,
  "classification": "major",
  "is_major": true
});
