(window.eventDefs = window.eventDefs || []).push({
  "id": "marriage_ceremony",
  "title": "結婚の儀と新しい暮らし",
  "description": "夫婦となった二人の門出。誓いの儀式や新しい家庭のスタートが、人生に鮮やかな節目を刻む。",
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
          264,
          875
        ]
      },
      {
        "path": "person.family.marital_status",
        "op": "eq",
        "value": "married"
      }
    ]
  },
  "weight": {
    "base": 35,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "marriage_ceremony"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "夫となった相手に激しく身を委ねる",
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
          "description": "純白のベールを脱ぎ捨て、夫となった相手に激しく身を委ねる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "history.flags.ceremony_done",
              "op": "record_flag",
              "value": true
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "温もりを分かち合って眠る",
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
          "description": "式を無事に終えた安堵の中で、温もりを分かち合って眠る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            },
            {
              "path": "history.flags.ceremony_done",
              "op": "record_flag",
              "value": true
            }
          ]
        }
      ]
    }
  ],
  "min": 22,
  "max": 72,
  "p": 0.35,
  "once": true,
  "text": "夫婦となった二人の門出。誓いの儀式や新しい家庭のスタートが、人生に鮮やかな節目を刻む。",
  "variants": [
    {
      "subTitle": "純白のウェディングドレスと初夜",
      "text": "祝福の拍手と華やかな花びらに包まれ、純白のドレスで歩くバージンロード。披露宴を終えたホテルのスイートルームで、夫の手でドレスのファスナーをゆっくりと下ろされ、夫婦となって初めての熱い素肌を重ねる……。",
      "choices": [
        [
          "純白のベールを脱ぎ捨て、夫となった相手に激しく身を委ねる",
          {
            "happiness": 6,
            "trust": 4,
            "flag": "ceremony_done"
          }
        ],
        [
          "式を無事に終えた安堵の中で、温もりを分かち合って眠る",
          {
            "happiness": 5,
            "stress": -4,
            "flag": "ceremony_done"
          }
        ]
      ],
      "diary": [
        "ドレスを脱がされ、素肌を晒したときの恥じらいと高揚感。夫となった人の逞しい腕に抱かれ、奥深くまで貫かれた瞬間の痺れるような快感は、生涯忘れられない夜になった。",
        "たくさんの人に祝福された一日が終わった。疲れた身体を寄せ合い、同じ苗字になった実感に包まれながら穏やかに眠りについた。"
      ]
    },
    {
      "subTitle": "二人きりの婚姻届と乾杯",
      "text": "派手な式は挙げず、夜間の役所窓口へ二人で婚姻届を提出する。受理された小さな控えを手に、夜風に吹かれながら帰宅し、部屋でささやかなシャンパンを開けて夫婦の誓いを交わす……。",
      "choices": [
        [
          "グラスを合わせた後、夫婦になった実感を確かめるように濃密に交わる",
          {
            "happiness": 5,
            "trust": 5,
            "money": 4,
            "flag": "ceremony_done"
          }
        ],
        [
          "これからの家計や生活の計画を二人で語り合う",
          {
            "knowledge": 4,
            "money": 6,
            "flag": "ceremony_done"
          }
        ]
      ],
      "diary": [
        "紙切れ一枚で夫婦になる不思議さと重み。部屋に戻って二人で乾杯し、シーツの上で貪るように身体を重ねた。飾らない私たちのスタートが誇らしかった。",
        "浮いた結婚式の費用をこれからの生活資金に回し、堅実な暮らしを始めた。地に足のついた安心感が心地いい。"
      ]
    }
  ],
  "classification": "daily"
});
