(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_marathon_finish_line",
  "title": "市民マラソンへの挑戦・沿道の声援と完走の涙",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 288
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 660
      }
    ]
  },
  "weights": {
    "base": 20
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "adult_marathon_finish_line"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "数ヶ月のトレーニングの成果を信じ、自分のペースを守って完走する",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 5,
            "independence": 4,
            "happiness": 4,
            "stress": -3,
            "bond": {
              "role": "club_mate",
              "status": "close"
            }
          },
          "narrative": "毎朝コツコツと走り込みを重ねて迎えたフルマラソン当日。30キロ過ぎ、足が鉛のように重くなり挫けそうになった時、沿道からの「頑張れ！」という見知らぬ人たちの温かい声援に背中を押された。ゴールゲートをくぐり抜けた瞬間、首に完走メダルをかけられ、やり抜いた達成感で大粒の涙が溢れた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "仲間とお揃いのTシャツで走り、給水所の名産グルメを楽しみながらゴールする",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 4,
            "communication": 3,
            "happiness": 4
          },
          "narrative": "ランニング仲間と励まし合いながら走ったハーフマラソン。地元の人たちが振る舞ってくれるイチゴや給水に元気をもらい、笑顔でハイタッチしてゴールテープを切った。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 24,
  "max": 55,
  "p": 0.35,
  "once": true,
  "text": "健康増進と自分への挑戦としてエントリーした市民マラソン大会。数ヶ月におよぶ朝夕のランニング習慣。色とりどりのウェアに身を包んだランナーたちとともに、号砲の合図でスタートラインを越える。",
  "diary": [
    "フルマラソン完走！ 42.195キロ、本当に長くて途中で何度も心が折れそうだったけれど、自分の足でゴールできた感動は一生忘れられない。",
    "マラソン大会を走り切った！ 筋肉痛はものすごいけれど、やり切った爽快感で心も身体も生まれ変わったような気分。"
  ],
  "classification": "daily"
});
