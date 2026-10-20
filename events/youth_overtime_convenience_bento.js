(window.eventDefs = window.eventDefs || []).push({
  "id": "youth_overtime_convenience_bento",
  "title": "残業帰りの夜風・オフィス街とコンビニの湯気",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 252
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 336
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
    "unique_key": "youth_overtime_convenience_bento"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "コンビニで好きなデザートとお弁当を買い、温かいお風呂で自分を労う",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "money": 2,
            "happiness": 2,
            "health": 1,
            "stress": -2
          },
          "narrative": "深夜の静まり返ったオフィス街を抜け、駅前のコンビニへ。温めてもらったお弁当と、少し高級なシュークリームを自分へのご褒美に買った。湯船に浸かりながら甘いものを味わい、明日も頑張ろうと静かに息を吐いた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "夜風に吹かれながら歩き、仕事で得た手応えと成長を噛み締める",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 2,
            "independence": 3,
            "stress": 1
          },
          "narrative": "夜空にそびえ立つ高層ビルの窓明かりを見上げながら歩く。大変なプロジェクトだったけれど、確実に仕事のスキルが身についている実感があり、働く社会人としての誇らしさが胸を満たした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 21,
  "max": 28,
  "p": 0.38,
  "once": true,
  "text": "締め切り前の慌ただしい時期。時計の針が午後9時を回り、誰もいなくなったオフィスを最後に出る。冷たい夜風が火照った頬を撫で、街灯が照らす帰り道を歩く。",
  "diary": [
    "今日は遅くまで残業。疲れたけれど、コンビニの肉まんと温かいスープが身体に染み渡った。一人前の社会人として戦っている実感がある。",
    "夜遅くの帰り道。静かな夜風が気持ちよかった。大変な毎日だけど、自分の足でしっかり立って生きている気がする。"
  ],
  "classification": "daily"
});
