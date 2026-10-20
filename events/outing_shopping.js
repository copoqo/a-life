(window.eventDefs = window.eventDefs || []).push({
  "id": "outing_shopping",
  "title": "休日のショッピング・試着室の鏡",
  "description": "休日の賑わうファッションビル。華やかなショップのラックから気になる洋服を選び、試着室へ。カーテンを閉めた狭い空間、全身鏡の前で服を脱ぎ去り、下着姿の自分の肉体と向き合う。新しい装いに胸を高鳴らせる一方、無防備な素肌を薄布一枚で隔てられた空間に晒す微かな背徳感が胸をかすめる。",
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
          180,
          971
        ]
      }
    ]
  },
  "weight": {
    "base": 17,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "outing_shopping"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "新しい自分に似合うスタイルを見つける",
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
          "description": "お気に入りの洋服を試着し、新しい自分に似合うスタイルを見つける。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -30000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "下腹に甘い疼きを覚えカーテンの隙間を意識する",
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
          "description": "下着姿で試着室の鏡を見つめるうち、下腹に甘い疼きを覚えカーテンの隙間を意識する。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "rare_outing_secret_quickie",
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
      "label": "トレンドのコスメや小物をチェックする",
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
          "description": "ウィンドーショッピングを楽しみ、トレンドのコスメや小物をチェックする。",
          "effects": [
            {
              "path": "skill.grooming",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
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
  "min": 15,
  "max": 80,
  "p": 0.17,
  "text": "休日の賑わうファッションビル。華やかなショップのラックから気になる洋服を選び、試着室へ。カーテンを閉めた狭い空間、全身鏡の前で服を脱ぎ去り、下着姿の自分の肉体と向き合う。新しい装いに胸を高鳴らせる一方、無防備な素肌を薄布一枚で隔てられた空間に晒す微かな背徳感が胸をかすめる。",
  "diary": [
    "試着した服がぴったり似合って、思わず笑顔がこぼれた。新しい服を着て出かける未来を思い浮かべ、気分が弾んだ。",
    "試着室の密室で服を脱いだ瞬間、カーテン一枚の向こうに他人がいるスリルに息を呑んだ。鏡に映る無防備な自分の素肌に、下腹がきゅうと熱くなった。",
    "街を歩きながら可愛い雑貨やコスメを見て回った。日常のささやかな買い物が、良い気分転換になった。"
  ],
  "outcomes": [
    "shared_activity",
    "reflection",
    "shared_activity"
  ],
  "classification": "daily"
});
