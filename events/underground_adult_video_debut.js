(window.eventDefs = window.eventDefs || []).push({
  "id": "underground_adult_video_debut",
  "title": "照明の下で晒される素肌・アダルトビデオの初撮影",
  "description": "雑居ビルの無機質なスタジオ。強烈な照明が照らす中、何台ものカメラと大勢の男性スタッフの前で服を脱ぎ去り、一糸まとわぬ姿になる。現れたプロの男優の逞しい肉体。監督の指示のもと、指先で濡れそぼる秘唇をアップで撮影され、逞しい肉棒を奥深くまでねじ込まれる。レンズの向こうの無数の他者の視線を意識した瞬間、異常な露出快感が背筋を駆け抜け、愛液が音を立てて噴き出す……。",
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
          491
        ]
      }
    ]
  },
  "weight": {
    "base": 20,
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
    "unique_key": "underground_adult_video_debut"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "奥を突き上げられる歓喜を晒す",
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
          "description": "【カメラ目線で喘ぎ声をあげ絶頂する】レンズに向かって潮を吹き、奥を突き上げられる歓喜を晒す。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 200000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "underground_adult_video_gang",
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
      "label": "中出しされて震える",
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
          "description": "【台本通りに必死で男優のピストンを受け止める】スタッフの視線に晒されながら、中出しされて震える。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 180000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -6
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "ギャラの一部だけを受け取る",
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
          "description": "【羞恥のあまり途中で撮影を中断させる】レンズの視線に耐えかねて泣き崩れ、ギャラの一部だけを受け取る。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 60000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 40,
  "p": 0.04,
  "text": "雑居ビルの無機質なスタジオ。強烈な照明が照らす中、何台ものカメラと大勢の男性スタッフの前で服を脱ぎ去り、一糸まとわぬ姿になる。現れたプロの男優の逞しい肉体。監督の指示のもと、指先で濡れそぼる秘唇をアップで撮影され、逞しい肉棒を奥深くまでねじ込まれる。レンズの向こうの無数の他者の視線を意識した瞬間、異常な露出快感が背筋を駆け抜け、愛液が音を立てて噴き出す……。",
  "diary": [
    "カメラのレンズの前で、プロの男優に激しく肉穴を突き上げられた。「もっと中を見せて」と監督に指示され、愛液を飛び散らせながら絶頂の嬌声を張り上げた。大勢のスタッフに見つめられながら果てる倒錯の快感に、脳が焼き切れるかと思った。",
    "無機質なスタジオのベッドで男優に貫かれ、撮影台本通りに最後まで交わった。膣内に注がれる熱い感触をカメラに撮られながら、これが世界中に配信されるのだと実感して下腹が甘く痺れた。",
    "カメラの前で素肌を晒す恐怖に耐えきれず、途中で毛布を被って泣いてしまった。スタッフの舌打ちと申し訳なさを抱え、重い足取りでスタジオを出た。"
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
