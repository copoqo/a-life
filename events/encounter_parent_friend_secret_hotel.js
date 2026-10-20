(window.eventDefs = window.eventDefs || []).push({
  "id": "encounter_parent_friend_secret_hotel",
  "title": "学校行事の合間、隣町のラブホテルでの逢瀬",
  "description": "子供の学校行事が終わった昼下がり。「少しだけ話せませんか」と誘われ、隣町の目立たないホテル街へ。部屋のドアがロックされた瞬間、お互いの家庭の重圧から解き放たれるように唇を貪り合う。母親・父親という仮面を脱ぎ捨て、濡れそぼる秘唇に相手の逞しい熱塊を根元まで迎え入れた時、日常の全てが吹き飛ぶほどの狂乱の悦楽が腰を突き抜ける……。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "friend": {
      "source": "friend",
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
          336,
          671
        ]
      },
      {
        "path": "derived.has_children",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 13,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "encounter_parent_friend_secret_hotel"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "親であることを忘れて獣のように激しく突き上げられる",
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
          "description": "シーツを握りしめ、親であることを忘れて獣のように激しく突き上げられる。",
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
      "label": "甘い愛撫に屈して腰を浮かす",
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
          "description": "子供の顔が脳裏をよぎる罪悪感に苛まれながらも、甘い愛撫に屈して腰を浮かす。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "最後の熱い交わりを交わす",
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
          "description": "この一度きりで終わりにしようと涙ながらに約束し、最後の熱い交わりを交わす。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 28,
  "max": 55,
  "p": 0.13,
  "text": "子供の学校行事が終わった昼下がり。「少しだけ話せませんか」と誘われ、隣町の目立たないホテル街へ。部屋のドアがロックされた瞬間、お互いの家庭の重圧から解き放たれるように唇を貪り合う。母親・父親という仮面を脱ぎ捨て、濡れそぼる秘唇に相手の逞しい熱塊を根元まで迎え入れた時、日常の全てが吹き飛ぶほどの狂乱の悦楽が腰を突き抜ける……。",
  "diary": [
    "学校の近くでは見せられないような痴態を晒し、ベッドの上で激しく犯された。子供の友達の親という禁断の相手に奥深くまで満たされる背徳感に、声も枯れるほど啼き果てた。",
    "罪悪感で胸が押しつぶされそうなのに、肉体は飢えたように相手の腰を締めつけていた。家庭の平穏とは引き換えの熱い蜜の味に、抜け出せない泥沼を感じた。",
    "これが最後だと互いに言い聞かせながら、互いの肌を貪り合った。シャワーで汗を流し、何食わぬ顔で家庭へ戻る道中、下腹の奥に重たい熱が残り続けた。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "shared_intimacy"
  ],
  "classification": "major",
  "is_major": true
});
