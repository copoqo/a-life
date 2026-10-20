(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_school_play_audition",
  "title": "体育館の舞台と学芸会の役決めオーディション",
  "description": "学芸会の劇の配役決め。誰もがやりたがる重要なヒロイン役に、ドキドキしながら手を挙げた。",
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
          108,
          155
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
    "unique_key": "elem_school_play_audition"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "恥ずかしさを捨て、体育館の後ろまで響く大きな声で演じる",
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
          "description": "恥ずかしさを捨て、体育館の後ろまで響く大きな声で演じる",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "個性的な脇役や大道具・照明係として劇の全体を支える",
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
          "description": "個性的な脇役や大道具・照明係として劇の全体を支える",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 9,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "学芸会の劇の配役決め。誰もがやりたがる重要なヒロイン役に、ドキドキしながら手を挙げた。",
  "diary": [
    "オーディションの台詞を声いっぱい出した。みんなが静かになって見つめてくれたとき、胸がカーッと熱くなった。主役に選ばれて本当に嬉しい。",
    "舞台の背景画を夜遅くまで塗って、照明のタイミングも完璧に合わせた。カーテンコールで全員で手をつないでお辞儀したとき、やり切った感動で胸がいっぱいになった。"
  ],
  "classification": "daily"
});
