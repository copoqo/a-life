(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_dagashi_store_coins",
  "title": "100円玉を握りしめた放課後の駄菓子屋",
  "description": "放課後、ポケットの中の100円玉を握りしめて近所の古びた駄菓子屋へ。ブタメン、うまい棒、きなこ棒、コーラ味のグミ。",
  "content_rating": "general",
  "enabled": true,
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
          84,
          143
        ]
      }
    ]
  },
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "弱"
          ]
        },
        "factor": 2.2
      }
    ]
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "elem_dagashi_store_coins"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "10円単位で計算し尽くし、ピッタリ100円の最強の組み合わせを買う",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "10円単位で計算し尽くし、ピッタリ100円の最強の組み合わせを買う",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "店先の赤いベンチに友達と座って、分け合って食べる",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0.5,
        "terms": []
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "店先の赤いベンチに友達と座って、分け合って食べる",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
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
  "min": 7,
  "max": 11,
  "p": 0.7,
  "once": true,
  "text": "放課後、ポケットの中の100円玉を握りしめて近所の古びた駄菓子屋へ。ブタメン、うまい棒、きなこ棒、コーラ味のグミ。",
  "diary": [
    "10円玉を数えながら、うまい棒2本とチロルチョコときなこ棒でピッタリ100円！ 店先でおばちゃんに褒められて得意顔になった。",
    "駄菓子屋の前のベンチでブタメンにお湯を入れてもらった。友達と汁まですすって、「美味しいね」って笑った夕暮れの空がすごく綺麗だった。"
  ],
  "classification": "daily"
});
