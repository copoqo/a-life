(window.eventDefs = window.eventDefs || []).push({
  "id": "child_unconscious_slide_friction",
  "title": "幼い日の無意識・滑り台の摩擦と秘密の火照り",
  "description": "公園の長いローラー滑り台や急なスロープ。薄手のズボンやスカート越しに、座面と股間が激しく擦れ合いながら滑り降りる。お尻から股間の割れ目へと伝わるリズミカルな振動と摩擦熱。滑り終えた瞬間、下腹がジーンと痺れて立ち上がれなくなるほどの快感が走り、お友達には言えないまま、もう一度その刺激を味わいたくて階段へ走ってしまう……。",
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
          72,
          131
        ]
      }
    ]
  },
  "weight": {
    "base": 20,
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
    "unique_key": "child_unconscious_slide_friction"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "股間を擦りつける強い刺激に夢中になる",
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
          "description": "滑り台を何度も駆け上がり、股間を擦りつける強い刺激に夢中になる。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ベンチに座って静かに味わう",
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
          "description": "滑り降りたあとの下腹のジンジンとした熱さを、ベンチに座って静かに味わう。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "別の遊具へ走る",
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
          "description": "友達に「もう一回滑ろう」と言われて恥ずかしくなり、別の遊具へ走る。",
          "effects": [
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
  "min": 6,
  "max": 10,
  "p": 0.2,
  "text": "公園の長いローラー滑り台や急なスロープ。薄手のズボンやスカート越しに、座面と股間が激しく擦れ合いながら滑り降りる。お尻から股間の割れ目へと伝わるリズミカルな振動と摩擦熱。滑り終えた瞬間、下腹がジーンと痺れて立ち上がれなくなるほどの快感が走り、お友達には言えないまま、もう一度その刺激を味わいたくて階段へ走ってしまう……。",
  "diary": [
    "滑り台をシューッとすべり降りたとき、お尻とお股の真ん中がガタガタと擦れて、声が出そうになった。何度もすべり台の階段を登ってしまった。",
    "すべり終わったあと、足に力が入らなくなってベンチに座り込んだ。お腹の奥が熱くて、パンツの中がじんわり温かくなっていた。",
    "友達に顔が赤いよと言われて、あわてて手で隠した。どうしてあんなに気持ちよかったのか、不思議でたまらなかった。"
  ],
  "outcomes": [
    "shared_activity",
    "reflection",
    "shared_activity"
  ],
  "classification": "daily"
});
