(window.eventDefs = window.eventDefs || []).push({
  "id": "life_friend_marriage",
  "title": "友人の薬指の指輪と揺れる胸中",
  "description": "久しぶりに会った友人の左手薬指に輝く指輪。幸せそうに笑う横顔を祝福しながらも、自分の選んできた人生やこれからの愛の形を思い、胸の奥に淡いざわめきを覚える。",
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
          264,
          587
        ]
      }
    ]
  },
  "weight": {
    "base": 8,
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
    "unique_key": "life_friend_marriage"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "共に喜びの涙を流す",
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
          "description": "友人の門出を心から祝福し、共に喜びの涙を流す。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 5
            },
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
      "id": "choice_1",
      "label": "静かに思いを巡らせる",
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
          "description": "自分の人生の選択肢について、静かに思いを巡らせる。",
          "effects": [
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
  "min": 22,
  "max": 48,
  "p": 0.08,
  "text": "久しぶりに会った友人の左手薬指に輝く指輪。幸せそうに笑う横顔を祝福しながらも、自分の選んできた人生やこれからの愛の形を思い、胸の奥に淡いざわめきを覚える。",
  "diary": [
    "「おめでとう」と抱きしめ合った。友人の輝く笑顔を見て、心から幸せを願った。",
    "帰り道、夜風に吹かれながら自分の歩んできた道を振り返った。私には私の生きるリズムがあるのだと、深く息を吸い込んだ。"
  ],
  "classification": "daily"
});
