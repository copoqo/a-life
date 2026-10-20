(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_private_values",
  "title": "常識の枠を超えた愛欲の形",
  "description": "世間が求める「正しい恋愛」や「普通の結婚」。しかし自分の身体が真に欲しているのは、もっと倒錯した快楽や、誰にも言えない秘密の交わりなのかもしれないという深い自覚。",
  "content_rating": "general",
  "enabled": true,
  "actors": {},
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
          216,
          1031
        ]
      }
    ]
  },
  "weight": {
    "base": 9,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_private_values"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "独自の官能の価値観を確立する",
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
          "description": "世間の目から自らを解き放ち、独自の官能の価値観を確立する。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "倒錯した性癖を打ち明ける",
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
          "description": "理解ある親密なパートナーにだけ、倒錯した性癖を打ち明ける。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "秘密として墓場まで持っていく",
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
          "description": "危険な願望を胸の奥深くへ封印し、秘密として墓場まで持っていく。",
          "effects": []
        }
      ]
    }
  ],
  "min": 18,
  "max": 85,
  "p": 0.085,
  "text": "世間が求める「正しい恋愛」や「普通の結婚」。しかし自分の身体が真に欲しているのは、もっと倒錯した快楽や、誰にも言えない秘密の交わりなのかもしれないという深い自覚。",
  "diary": [
    "他人と違っていても、これが私の肉体と魂が求める悦びなのだと確信した。世間の物差しを捨てた瞬間、深い官能の自由を手に入れた。",
    "恐る恐る自分の倒錯した嗜好を打ち明けると、相手は拒絶することなく受け止めてくれた。共犯者を得たような熱い喜びに震えた。",
    "淫らな秘密を一人きりの胸に抱えて生きる。その背徳感自体が、退屈な日常を耐えるための密かな香辛料になった。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "privacy"
  ],
  "classification": "daily"
});
