(window.eventDefs = window.eventDefs || []).push({
  "id": "mature_child_leaving_nest",
  "title": "子供の独立・段ボールが片付いた後の少し広いリビング",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 528
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 744
      }
    ]
  },
  "weights": {
    "base": 22
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "mature_child_leaving_nest"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "笑顔で送り出し、空いた部屋を自分の趣味の部屋に模様替えする",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "independence": 4,
            "happiness": 4,
            "selfKnowledge": 3,
            "stress": -2
          },
          "narrative": "引っ越しトラックを見送り、少し広くなったリビングに戻る。寂しさはもちろんあるけれど、無事に育て上げた大きな安堵と達成感。空いた子供部屋に本棚や絵画を置き、これからは自分の人生の時間を満喫しようと前を向いた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "思い出のアルバムを見返しながら、子供のこれからの幸せを静かに祈る",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "morality": 3,
            "happiness": 3,
            "intimacyNeed": 2
          },
          "narrative": "小さなランドセルを背負っていた頃の写真を見つめ、あっという間だった子育ての年月を慈しんだ。いつでも帰ってこられる温かい実家であり続けようと優しく微笑んだ。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 44,
  "max": 62,
  "p": 0.36,
  "once": true,
  "text": "進学や就職、あるいは結婚を機に、子供が家を出ていく日。積み込まれた引っ越し荷物、すっきりと片付いた部屋。親としての大きな務めを一段落終えた寂しさと誇り。",
  "diary": [
    "子供が巣立っていった。寂しくないと言えば嘘になるけれど、元気に自分の道を歩み出した姿を見送れて、親として胸がいっぱい。これからは自分の人生も楽しまなきゃ。",
    "静かになった家。子育ての日々は大変だったけれど、かけがえのない宝物だった。いつでも帰っておいでね。"
  ],
  "classification": "major",
  "is_major": true
});
