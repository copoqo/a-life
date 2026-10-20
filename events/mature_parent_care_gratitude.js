(window.eventDefs = window.eventDefs || []).push({
  "id": "mature_parent_care_gratitude",
  "title": "親の手を引く通院の道・小さくなった背中と感謝",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 576
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 840
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
    "unique_key": "mature_parent_care_gratitude"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "歩調を合わせてゆっくり手を引き、季節の草花を眺めながら歩く",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "morality": 5,
            "communication": 3,
            "selfKnowledge": 3
          },
          "narrative": "高齢になった親の定期通院の付き添い。昔はあんなに大きく見えた親の背中が、今は小さく丸くなっている。しっかりと握り返してくれる骨張った手のひら。子供の頃に手を引いてもらった記憶が重なり、今度は私が支える番なのだと温かい感謝とともに歩いた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "介護保険や行政サービスを上手に活用し、共倒れにならない環境を整える",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 4,
            "independence": 3,
            "stress": -2
          },
          "narrative": "ケアマネージャーと相談し、デイサービスや福祉用具を導入。無理をしすぎず、お互いに笑顔でいられるバランスを見つけ、心にゆとりを持って介護に向き合えた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 48,
  "max": 70,
  "p": 0.36,
  "once": true,
  "text": "年老いた両親の介護や通院の付き添い。かつて自分を慈しみ育ててくれた親の老いを受け止め、寄り添い支える人生の円熟期。手をつないで歩く並木道に、これまでの家族の絆が静かに甦る。",
  "diary": [
    "親の手を引いて病院へ行った。小さくなった手を握りながら、昔のことを思い出して涙が出そうになった。ここまで生きていてくれてありがとう。",
    "親の介護。大変なこともあるけれど、今こうして恩返しができる時間があることに感謝したい。"
  ],
  "classification": "daily"
});
