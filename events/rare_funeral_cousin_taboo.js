(window.eventDefs = window.eventDefs || []).push({
  "id": "rare_funeral_cousin_taboo",
  "title": "親戚の通夜でいとこと・線香の匂いと喪服の裏",
  "description": "親戚の通夜。線香の煙が白く漂う中、親族が寝静まった深夜の古い日本家屋。喪服の黒サテンと黒ストッキングに身を包んだまま、奥の物置部屋で幼い頃から知るいとこの男と二人きりになる。「お前、昔と違って……すげえ女の身体になったな」と低い掠れ声で囁かれ、背後から抱きすくめられる。喪服のスカートの上からふくよかな臀部と秘唇を力強くまさぐられ、死の陰で生々しく昂ぶる男の硬い肉塊が押し付けられる。不謹慎極まりない背徳感に下腹がきゅうと甘く疼き、ショーツがじっとりと愛液を滲ませる……。",
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
          731
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
    "base": 18,
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
    "unique_key": "rare_funeral_cousin_taboo"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "ストッキングを破かれて奥まで貫かれるのを許す",
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
          "description": "【一線を越える】喪服のスカートを捲られ、ストッキングを破かれて奥まで貫かれるのを許す。",
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
      "label": "濡れた秘唇を指先で掻き回される快感に耐える",
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
          "description": "【手前で留まる】口を塞がれたまま、濡れた秘唇を指先で掻き回される快感に耐える。",
          "effects": [
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
      "label": "いとこの手を強く払いのけて広間へ戻る",
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
          "description": "【毅然と拒絶する】故人の前での過ちを恥じ、いとこの手を強く払いのけて広間へ戻る。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 60,
  "p": 0.03,
  "text": "親戚の通夜。線香の煙が白く漂う中、親族が寝静まった深夜の古い日本家屋。喪服の黒サテンと黒ストッキングに身を包んだまま、奥の物置部屋で幼い頃から知るいとこの男と二人きりになる。「お前、昔と違って……すげえ女の身体になったな」と低い掠れ声で囁かれ、背後から抱きすくめられる。喪服のスカートの上からふくよかな臀部と秘唇を力強くまさぐられ、死の陰で生々しく昂ぶる男の硬い肉塊が押し付けられる。不謹慎極まりない背徳感に下腹がきゅうと甘く疼き、ショーツがじっとりと愛液を滲ませる……。",
  "publicSex": true,
  "diary": [
    "線香の灰の匂いの中、喪服のスカートをたくし上げられ、黒ストッキングの股布を引き裂かれた。濡れそぼる肉穴に、いとこの太い肉棒を一気に子宮口まで突き入れられ、口を塞がれながら声を殺して啼き狂った。死の気配の隣で繰り広げられた乱暴なピストンに、頭が真っ白になるほど絶頂を重ねた。",
    "挿入だけは拒んだものの、口を塞がれて畳の上に押し倒され、ショーツの中に手を差し入れられた。ぐちゅぐちゅと音を立てるクリトリスといびつな秘唇を弄り倒され、親戚の寝息が聞こえる中で太ももを痙攣させて果ててしまった。",
    "故人の前でこんな背徳に流されてはならないと心に強く念じ、いとこの腕を振りほどいた。涙を拭って線香のあがる広間へ戻ったとき、自分の身体の危うい疼きに震えた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "reflection",
    "boundary"
  ],
  "once": true,
  "classification": "major",
  "is_major": true
});
