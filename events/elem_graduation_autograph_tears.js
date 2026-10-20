(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_graduation_autograph_tears",
  "title": "卒業式の足音とランドセルの寄せ書き",
  "description": "3月の卒業式が近づく教室。サイン帳や卒業アルバムの空白ページに、仲の良かった友達やいつも喧嘩していた男子たちがメッセージを書き合う。",
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
          140,
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
    "unique_key": "elem_graduation_autograph_tears"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "いつも喧嘩していた男子からの「お前強かったな、中学でも元気で」の文字に微笑む",
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
          "description": "いつも喧嘩していた男子からの「お前強かったな、中学でも元気で」の文字に微笑む",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "「中学校が離れてもずっと親友だよ」と抱き合って涙をこぼす",
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
          "description": "「中学校が離れてもずっと親友だよ」と抱き合って涙をこぼす",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    }
  ],
  "min": 11,
  "max": 12,
  "p": 0.7,
  "once": true,
  "text": "3月の卒業式が近づく教室。サイン帳や卒業アルバムの空白ページに、仲の良かった友達やいつも喧嘩していた男子たちがメッセージを書き合う。",
  "diary": [
    "いつも掃除当番で喧嘩してた男子が、サイン帳に「ケンカばっかだったけどお前が一番頼りになった」って書いてくれた。照れくさそうに笑う顔を見て、なんだか胸がツンとした。",
    "別の私立に行く〇〇ちゃんと抱き合って泣いた。「毎週土曜日遊ぼうね」「絶対手紙書くからね」って泣き笑い。小学校の思い出、全部全部忘れたくない。"
  ],
  "classification": "daily"
});
