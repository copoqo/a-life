(window.eventDefs = window.eventDefs || []).push({
  "id": "underground_raw_creampie_addict",
  "title": "裏オプと生中出し・避妊具なしの肉壁に注がれる精液の熱",
  "description": "本来は禁止されているはずの避妊具なしの本番行為。客からの追加チップの誘惑と、素肌同士が密着する快感に抗えず、一度許してしまった生中出し。ゴム越しとは比べ物にならない熱い肉塊の感触、そして膣の最奥、子宮口に直撃するドクドクと脈打つ白濁した精液の熱さに、身体が完全に依存してしまった……。",
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
          216,
          587
        ]
      }
    ]
  },
  "weight": {
    "base": 24,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "underground_raw_creampie_addict"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "【ゴムなしの熱いピストンに腰を突き出す】子宮口に何度も熱い精液を注がれる快感に身悶える",
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
          "description": "【ゴムなしの熱いピストンに腰を突き出す】子宮口に何度も熱い精液を注がれる快感に身悶える。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 220000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -10
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "愛液と精液を垂れ流して果てる",
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
          "description": "【妊娠の恐怖と快楽の狭間で啼き叫ぶ】危険なスリルに下腹を痙攣させ、愛液と精液を垂れ流して果てる。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": 200000
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -9
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
      "label": "急いで避妊薬を求めて夜の街を駆ける",
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
          "description": "【アフターピルを買いに薬局へ走る】正気に戻り、急いで避妊薬を求めて夜の街を駆ける。",
          "effects": [
            {
              "path": "economy.cash",
              "op": "add",
              "value": -30000
            },
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 48,
  "p": 0.04,
  "text": "本来は禁止されているはずの避妊具なしの本番行為。客からの追加チップの誘惑と、素肌同士が密着する快感に抗えず、一度許してしまった生中出し。ゴム越しとは比べ物にならない熱い肉塊の感触、そして膣の最奥、子宮口に直撃するドクドクと脈打つ白濁した精液の熱さに、身体が完全に依存してしまった……。",
  "diary": [
    "避妊具なしの生の肉棒を子宮口まで突き入れられた。肉と肉が直接擦れ合うぬちぬちとした摩擦と、奥深くに勢いよくドクドクと注ぎ込まれる精液の熱さに我を忘れ、シーツを噛みちぎりながら激しく中出し絶頂を繰り返した。",
    "妊娠してしまうかもしれない恐怖が、かえって下腹の感度を異常なまでに跳ね上げた。男の腰を両足で固く抱きしめ、「もっと中に出して」と泣き叫びながら果てていた。",
    "客が去った後、我に返って震える手で服を着た。深夜のドラッグストアでアフターピルを買い求め、水を飲み下しながら自分の愚かさに涙がこぼれた。"
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
