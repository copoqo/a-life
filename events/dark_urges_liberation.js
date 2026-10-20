(window.eventDefs = window.eventDefs || []).push({
  "id": "dark_urges_liberation",
  "title": "両手首の戒めと、抗えない快楽への屈服",
  "description": "寝室のベッドの上。柔らかなネクタイで両手首をヘッドボードに括り付けられ、目隠しで視界を奪われる。完全に自由を奪われた状態で、敏感になった乳房や太ももを荒々しくまさぐられる。見えない恐怖と抗えない快感に息を呑む中、容赦なく濡れた肉穴へと熱い肉塊が深々とねじ込まれる。下腹の奥深くまで突き崩されるたび、子宮がキュウと締めつけられ、狂乱の快楽に喉が引き裂かれそうになる……。",
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
          240,
          515
        ]
      }
    ]
  },
  "weight": {
    "base": 14,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "dark_urges_liberation"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "愛液と涎を垂らしながら果てしなく絶頂を貪る",
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
          "description": "支配される無力感に身を委ね、愛液と涎を垂らしながら果てしなく絶頂を貪る。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "乱暴に突き上げられる背徳の喜びに啼き狂う",
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
          "description": "縛られた手首を擦り合わせながら、乱暴に突き上げられる背徳の喜びに啼き狂う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "抱きしめられながら極度の快感と安心感に涙をこぼす",
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
          "description": "縄を解かれた後、抱きしめられながら極度の快感と安心感に涙をこぼす。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    }
  ],
  "min": 20,
  "max": 42,
  "p": 0.14,
  "text": "寝室のベッドの上。柔らかなネクタイで両手首をヘッドボードに括り付けられ、目隠しで視界を奪われる。完全に自由を奪われた状態で、敏感になった乳房や太ももを荒々しくまさぐられる。見えない恐怖と抗えない快感に息を呑む中、容赦なく濡れた肉穴へと熱い肉塊が深々とねじ込まれる。下腹の奥深くまで突き崩されるたび、子宮がキュウと締めつけられ、狂乱の快楽に喉が引き裂かれそうになる……。",
  "diary": [
    "目隠しをされ、両手を縛られたまま奥深くまで貫かれた。視覚を奪われたことで肌の摩擦や水音が異様なほど生々しく響き、獣のように啼きながら何度も絶頂の波に溺れた。",
    "力尽くで組み伏せられ、好き放題に犯される被虐の快楽。自分の中にあった歪んだ願望がすべて満たされ、頭が真っ白になるほどの悦楽に身を震わせた。",
    "激しい行為の後、優しく拘束を解かれて抱きしめられた。激しさと温もりの落差に胸がいっぱいになり、相手の胸の中で子供のように泣きじゃくった。"
  ],
  "outcomes": [
    "shared_intimacy",
    "shared_intimacy",
    "shared_intimacy"
  ],
  "classification": "major",
  "is_major": true
});
