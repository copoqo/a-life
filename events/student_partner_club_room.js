(window.eventDefs = window.eventDefs || []).push({
  "id": "student_partner_club_room",
  "title": "学生時代の秘め事・部室の熱気と畳の上の逢瀬",
  "description": "全員が帰宅した後の文化部・運動部の部室。パイプ椅子と埃、使い古された道具の匂いがこもる狭い空間。パートナーと二人きりで鍵を閉めた瞬間、荒い息遣いとともにロッカーへ押し付けられる。部活後の汗ばんだ肌とユニフォームを脱ぎ散らかし、畳の上へと倒れ込む……。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
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
          168,
          275
        ]
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      },
      {
        "path": "skill.morality",
        "op": "lte",
        "value": 0
      },
      {
        "path": "person.career.employment_status",
        "op": "eq",
        "value": "student"
      }
    ]
  },
  "weight": {
    "base": 26,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "student_partner_club_room"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "部室中に湿った水音を響かせる",
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
          "description": "【狭い部室の畳の上で乱れ合う】火照った身体をぶつけ合い、部室中に湿った水音を響かせる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ロッカーをガタガタと鳴らす",
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
          "description": "【ロッカーに手をついて立ったまま】背後から荒々しく貫かれ、ロッカーをガタガタと鳴らす。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "慌ててユニフォームを着直す",
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
          "description": "【鍵のガチャつく音に我に返る】外の足音に驚き、慌ててユニフォームを着直す。",
          "effects": [
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
  "min": 14,
  "max": 22,
  "p": 0.26,
  "text": "全員が帰宅した後の文化部・運動部の部室。パイプ椅子と埃、使い古された道具の匂いがこもる狭い空間。パートナーと二人きりで鍵を閉めた瞬間、荒い息遣いとともにロッカーへ押し付けられる。部活後の汗ばんだ肌とユニフォームを脱ぎ散らかし、畳の上へと倒れ込む……。",
  "publicSex": true,
  "targetGender": "both",
  "femaleVariant": {
    "text": "全員が帰宅した後の部室。埃と道具の匂いがこもる狭い空間。彼女と二人きりで鍵を閉めた瞬間、荒い息遣いとともにロッカーへ押し付けられる。部活後の汗ばんだ肌と制服を脱ぎ散らかし、畳の上へと倒れ込む……。",
    "choices": [
      [
        "【狭い部室の畳の上で乱れ合う】火照った身体をぶつけ合い、互いの蜜壺を擦り合わせ湿った水音を響かせる",
        {
          "happiness": 5,
          "secrecy": 8,
          "sexualEffects": {
            "desire": 9,
            "shyness": 8
          }
        }
      ],
      [
        "【ロッカーに手をついて立ったまま】背後から太ももを開かれ、指先で奥の天井を執拗に擦り上げられる",
        {
          "happiness": 4,
          "secrecy": 9,
          "sexualEffects": {
            "desire": 8,
            "shyness": 8
          }
        }
      ],
      [
        "【鍵のガチャつく音に我に返る】外の足音に驚き、慌てて服を着直す",
        {
          "secrecy": 8,
          "independence": 3,
          "sexualEffects": {
            "boundaryVoice": 5
          }
        }
      ]
    ],
    "diary": [
      "部室の古びた畳の上で、汗の匂いに包まれながら貪り合った。互いの秘唇を強く押し当てて腰を打ちつけ合い、ぬちぬちと鳴り響く愛液の音に煽られて、何度も狂ったように絶頂した。",
      "ロッカーに手をつかされ、後ろから彼女の指で激しく弄られた。ロッカーがガタガタと音を立てるたびに恐怖と快感で腰が砕け、愛液を吹き出しながら喘ぎ啼いた。",
      "誰かが部室のドアノブを回す音に心臓が止まりそうになった。息を殺して去るのを待ち、汗を拭いながら二人で笑い合った。"
    ]
  },
  "diary": [
    "部室の古びた畳の上で、汗の匂いに包まれながら貪り合った。部活の疲れも忘れて腰を打ちつけ合い、ぬちぬちと鳴り響く愛液の音に煽られて、何度も狂ったように絶頂した。",
    "ロッカーに手をつかされ、後ろから激しく突かれた。ロッカーがガタガタと音を立てるたびに恐怖と快感で腰が砕け、中に注ぎ込まれる熱さに喘ぎ叫んだ。",
    "誰かが部室のドアノブを回す音に心臓が止まりそうになった。息を殺して去るのを待ち、汗を拭いながら二人で笑い合った。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "boundary"
  ],
  "classification": "major",
  "is_major": true
});
