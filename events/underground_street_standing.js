(window.eventDefs = window.eventDefs || []).push({
  "id": "underground_street_standing",
  "title": "夜の大久保公園・街角に立つ女と冷たい札束",
  "description": "ネオンが毒々しく瞬く歌舞伎町の外れ、大久保公園の鉄柵沿い。露出度の高いミニスカートと網タイツを身にまとい、スマホをいじるふりをして立ち止まる。品定めするように行き交う男たちの視線。声をかけてきた男と値段を交渉し、薄暗い路地裏の雑居ホテルへ。名前も知らない相手にベッドに押し倒され、剥き出しの肉欲で荒々しく貫かれる……。",
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
      },
      {
        "path": "skill.morality",
        "op": "lte",
        "value": 0
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
    "unique_key": "underground_street_standing"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "乱暴なピストンに声を殺してイく",
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
          "description": "【値上げを条件に激しい交わりを許す】見知らぬ男の体重を受け止め、乱暴なピストンに声を殺してイく。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 100000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -7
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "underground_adult_video_debut",
                "delay": 1,
                "prob": 0.8
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "冷たい札束を懐に詰め込む",
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
          "description": "【複数の客を立て続けに相手にする】一晩で何人もの男たちに肉体を差し出し、冷たい札束を懐に詰め込む。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 180000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -9
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "自室へ逃げ帰る",
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
          "description": "【パトカーのサイレンに肝を冷やして逃げる】警察の摘発の気配に路地を駆け抜け、自室へ逃げ帰る。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 4
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
  "text": "ネオンが毒々しく瞬く歌舞伎町の外れ、大久保公園の鉄柵沿い。露出度の高いミニスカートと網タイツを身にまとい、スマホをいじるふりをして立ち止まる。品定めするように行き交う男たちの視線。声をかけてきた男と値段を交渉し、薄暗い路地裏の雑居ホテルへ。名前も知らない相手にベッドに押し倒され、剥き出しの肉欲で荒々しく貫かれる……。",
  "publicSex": true,
  "diary": [
    "路上で声をかけてきた見知らぬ男と連れ込みホテルへ入った。名前も知らない相手に四つん這いにさせられ、後ろから乱暴に肉穴を突かれた。お金を握りしめながら、下品な快楽に身体を震わせて絶頂した。",
    "一晩の間に三人の男を部屋に招き入れた。ゴムが擦れる異様な匂いと体液にまみれ、最後には愛液すら涸れ果てた肉穴を突き上げられて、虚ろな頭で天井の染みを見つめていた。",
    "パトカーの赤色灯が見えて、ヒールを脱ぎ捨てて路地裏を全力で走った。暗がりで息を切らしながら、自分の生き方の危うさに震えが止まらなかった。"
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
