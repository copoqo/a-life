(window.eventDefs = window.eventDefs || []).push({
  "id": "rare_travel_stranger_or_gang",
  "title": "旅先の一夜・見知らぬ男たちとの狂乱",
  "description": "旅先の温泉街。地酒の酔いと旅の解放感、そして下腹の奥で疼く激しい情欲。浴衣の襟元を緩めて夜風を浴びていたところ、声をかけてきた旅の男たち。普段の自分なら絶対に断る下品で獰猛な眼差しに、なぜか秘唇が熱く濡れそぼり、抗えない衝動に流されるままホテルの別室へと足を踏み入れてしまった……。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "stranger": {
      "source": "random_adult",
      "required": false
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
          240,
          791
        ]
      },
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 240
      }
    ]
  },
  "weight": {
    "base": 18,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "rare_travel_stranger_or_gang"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "朝まで狂ったように腰を振る",
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
          "description": "【二人きりで貪り合う】名前も知らぬ男の太い肉棒に跨がり、朝まで狂ったように腰を振る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
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
      "label": "犯される快楽に堕ちる",
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
          "description": "【複数人の男たちに身体を差し出す】入れ替わり立ち替わり前後を貫かれ、犯される快楽に堕ちる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
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
      "label": "ドアを開けて自室へ駆け戻る",
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
          "description": "【寸前で逃げ出す】男たちの異様な熱気に恐怖を覚え、ドアを開けて自室へ駆け戻る。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
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
  "min": 20,
  "max": 65,
  "p": 0.03,
  "text": "旅先の温泉街。地酒の酔いと旅の解放感、そして下腹の奥で疼く激しい情欲。浴衣の襟元を緩めて夜風を浴びていたところ、声をかけてきた旅の男たち。普段の自分なら絶対に断る下品で獰猛な眼差しに、なぜか秘唇が熱く濡れそぼり、抗えない衝動に流されるままホテルの別室へと足を踏み入れてしまった……。",
  "alcohol": true,
  "diary": [
    "旅先という匿名の闇の中で、名前も知らない男と獣のように交わった。ベッドの上で跨がり、濡れそぼる肉穴で硬い肉塊を根元まで飲み込んで腰を打ち付けた。奥深くに注ぎ込まれる熱い精液の感触に狂乱し、シーツを愛液で汚しながら朝を迎えた。",
    "複数の男たちに手足を広げられ、浴衣を裂かれて無慈悲に犯され尽くした。一人の肉棒を口で咥えさせられながら、後ろから別の男に肉穴を乱暴に突かれ、ぐちゃぐちゃと肉がぶつかる水音の中で自我が吹き飛ぶほど激しく中出しされた。",
    "男たちの獲物を見るような獰猛な眼差しに我に返り、必死で部屋のドアを蹴破るようにして逃げ出した。自室の鍵を閉めて布団に潜り込んだ後も、下腹が冷たく痙攣していた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "once": true,
  "classification": "random"
});
