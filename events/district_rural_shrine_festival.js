(window.eventDefs = window.eventDefs || []).push({
  "id": "district_rural_shrine_festival",
  "title": "農村の鎮守の森・秋祭りの太鼓と木立の奥の情事",
  "description": "年に一度の村の秋祭り。神社の境内に響き渡る神楽の太鼓とお囃子、提灯の赤い光。酒を酌み交わす大人たちの輪をこっそり抜け出し、社務所の裏の深い杉木立へ。祭りの高揚感で充血した男に浴衣の帯を解かれ、冷たい大木の幹に手をつかされる。太鼓の地鳴りのような響きにかき消されながら、濡れそぼる肉穴に太い熱塊を突き込まれる……。",
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
        "path": "person.age_months",
        "op": "gte",
        "value": 240
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
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.residence.area_type",
          "op": "eq",
          "value": "rural"
        },
        "factor": 3.5
      },
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
    "unique_key": "district_rural_shrine_festival"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "太鼓の爆音に合わせて奥深くまで中出しされる",
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
          "description": "大木の幹に額を擦りつけ、太鼓の爆音に合わせて奥深くまで中出しされる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 6
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -7
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -5
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "男の熱い舌で秘唇を貪り尽くされる",
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
          "description": "浴衣をはだけさせて木陰に座り込み、男の熱い舌で秘唇を貪り尽くされる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": -5
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
      "label": "涼しい顔で境内の屋台へ戻る",
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
          "description": "子供たちの駆けてくる足音に帯を締め直し、涼しい顔で境内の屋台へ戻る。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 60,
  "p": 0.04,
  "text": "年に一度の村の秋祭り。神社の境内に響き渡る神楽の太鼓とお囃子、提灯の赤い光。酒を酌み交わす大人たちの輪をこっそり抜け出し、社務所の裏の深い杉木立へ。祭りの高揚感で充血した男に浴衣の帯を解かれ、冷たい大木の幹に手をつかされる。太鼓の地鳴りのような響きにかき消されながら、濡れそぼる肉穴に太い熱塊を突き込まれる……。",
  "alcohol": true,
  "publicSex": true,
  "diary": [
    "鎮守の森の神木の幹に手をつかされ、太鼓の地鳴りのような音に合わせて後ろから激しく突かれた。熱い精液を子宮口に注ぎ込まれ、祭りの熱狂の中で自我が溶け落ちた。",
    "社務所の裏の暗がりで浴衣の襟元を緩められ、熱い舌で貪られた。杉の葉の匂いと男の汗の匂いに包まれ、声を殺しながら太ももを痙攣させて果てた。",
    "提灯を持った子供たちの声が聞こえ、慌てて帯を結び直した。何食わぬ顔で祭りの輪に戻ったものの、下腹の奥はいつまでも熱く脈打っていた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "once": true,
  "classification": "daily"
});
