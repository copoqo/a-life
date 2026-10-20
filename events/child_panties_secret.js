(window.eventDefs = window.eventDefs || []).push({
  "id": "child_panties_secret",
  "title": "下着に残る甘酸っぱい湿り気",
  "description": "体育の授業の後、トイレの個室で下着を下ろした瞬間、ふわりと立ち上る生温かい匂い。ショーツのクロッチ部分にわずかに広がった透明で粘りつく染み。病気ではないかと不安になりつつも、指先で触れたぬめりの温かさに心臓が跳ねる……。",
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
          132,
          191
        ]
      }
    ]
  },
  "weight": {
    "base": 24,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "child_panties_secret"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "女の身体になったのだと胸を高鳴らせる",
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
          "description": "指先についた微かな匂いを確かめ、女の身体になったのだと胸を高鳴らせる。",
          "effects": [
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
      "label": "トイレットペーパーで念入りに拭き取る",
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
          "description": "汚れが気になり、トイレットペーパーで念入りに拭き取る。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "誰にも見つからないようポケットに隠す",
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
          "description": "こっそり下着を履き替え、誰にも見つからないようポケットに隠す。",
          "effects": []
        }
      ]
    }
  ],
  "min": 11,
  "max": 15,
  "p": 0.24,
  "text": "体育の授業の後、トイレの個室で下着を下ろした瞬間、ふわりと立ち上る生温かい匂い。ショーツのクロッチ部分にわずかに広がった透明で粘りつく染み。病気ではないかと不安になりつつも、指先で触れたぬめりの温かさに心臓が跳ねる……。",
  "diary": [
    "ショーツに残った生温かい湿り気と、甘酸っぱい匂い。自分の中からあんな淫らな体液が滲み出ている現実に、下腹がきゅんと疼いた。",
    "恥ずかしさで胸がいっぱいになり、トイレットペーパーで何度も拭いた。誰にも見られていないのに、顔が熱くてたまらなかった。",
    "汚れた下着をぎゅっと握りしめて家に持ち帰った。自分だけの秘密を抱えたような、甘美で後ろめたい気分だった。"
  ],
  "classification": "daily"
});
