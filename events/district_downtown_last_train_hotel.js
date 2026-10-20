(window.eventDefs = window.eventDefs || []).push({
  "id": "district_downtown_last_train_hotel",
  "title": "ネオン煌めく繁華街・終電後の雑踏と朝までの密室",
  "description": "終電が去った後もギラギラとしたネオンと重低音が響き渡る繁華街。酒の熱気で火照った身体を持て余し、雑踏の中を行き交う。バーで意気投合した男、あるいは声をかけてきた男に手を引かれ、雑居ビルの個室ホテルへ。深夜の街の狂乱に背中を押されるように、シーツの上で貪り合う……。",
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
          240,
          671
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
    "base": 24,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "entertainment"
        },
        "factor": 3.5
      }
    ]
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "district_downtown_last_train_hotel"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "朝陽がネオンを消すまで狂ったように腰を振る",
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
          "description": "名前も聞かぬまま跨がり、朝陽がネオンを消すまで狂ったように腰を振る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -8
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "熱い湯気の中で激しく突かれ啼き乱れる",
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
          "description": "シャワー室で壁に手をつかされ、熱い湯気の中で激しく突かれ啼き乱れる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -6
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -10000
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
      "id": "choice_2",
      "label": "タクシー代をもらって部屋を出る",
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
          "description": "部屋に入った途端に酔いが冷め、タクシー代をもらって部屋を出る。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 40000
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 5
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 20,
  "max": 55,
  "p": 0.04,
  "text": "終電が去った後もギラギラとしたネオンと重低音が響き渡る繁華街。酒の熱気で火照った身体を持て余し、雑踏の中を行き交う。バーで意気投合した男、あるいは声をかけてきた男に手を引かれ、雑居ビルの個室ホテルへ。深夜の街の狂乱に背中を押されるように、シーツの上で貪り合う……。",
  "alcohol": true,
  "diary": [
    "繁華街の匿名性の闇の中で、名前も知らない男と一晩中貪り合った。窓の外のネオンサインが点滅する部屋で、奥深くを突き上げられる激しい水音に酔い痴れて、何度も愛液を散らして果てた。",
    "ホテルの浴室の壁に手をつかされ、立ちバックで乱暴に突かれた。シャワーの水音と肉がぶつかる音が混ざり合い、熱い中出しを受け止めて腰を砕かれ啼き狂った。",
    "ホテルのドアが閉まった瞬間に我に返り、相手を宥めて部屋を出た。明け方の繁華街の冷たい空気が、火照った肌を心地よく冷ましてくれた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "once": true,
  "classification": "daily"
});
