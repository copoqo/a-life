(window.eventDefs = window.eventDefs || []).push({
  "id": "marital_life_intimacy",
  "title_template": "夫婦の日常 〜{variation_title}〜",
  "classification": "daily",
  "content_rating": "general",
  "actors": {
    "spouse": {
      "source": "current_partner",
      "required": true
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
        "path": "derived.has_spouse",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 80,
    "additive": [],
    "multipliers": []
  },
  "min": 20,
  "max": 80,
  "p": 0.35,
  "choices": [
    {
      "id": "choice_sweet",
      "stance": "sweet",
      "label": "愛情を込めて素直に甘え、相手を労う",
      "stat_effects": {
        "intimacyNeed": 4,
        "mood": 4,
        "stress": -2
      }
    },
    {
      "id": "choice_calm",
      "stance": "calm",
      "label": "落ち着いた笑顔で受け止め、穏やかに寄り添う",
      "stat_effects": {
        "mood": 3,
        "stress": -1
      }
    },
    {
      "id": "choice_tease",
      "stance": "tease",
      "label": "少し照れ隠しに軽口を叩いて茶化す",
      "stat_effects": {
        "social": 3,
        "mood": 2
      }
    },
    {
      "id": "choice_tired",
      "stance": "tired",
      "label": "疲れているからと静かに一人で過ごす",
      "stat_effects": {
        "stress": -2
      }
    }
  ],
  "variations": [
    {
      "sub_id": "dinner_table_evening",
      "title": "夕餉の食卓、温かい料理と語らい",
      "description": "湯気の立つ夕餉の食卓。二人で並んで箸を動かしながら、今日あった仕事の出来事や他愛ない話題に花が咲く……。",
      "outcomes": {
        "sweet": {
          "text": "「今日もお疲れ様」と笑顔でおかずを取り分け、そっと肩を寄せ合って温かい時間を噛み締めた。",
          "diary": "夕飯を食べながら夫とたくさん話した。何気ない日常の団らんが、一番心が安らぐ。"
        },
        "calm": {
          "text": "向かい合って穏やかに微笑み、相手の愚痴に優しく相槌を打ちながら静かに夜を過ごした。",
          "diary": "食卓で穏やかに夫の話を聞いた。夫婦の落ち着いた絆を実感する。"
        },
        "tease": {
          "text": "「またそんなこと言って」と笑いながら軽く肩をつつき、食後のデザートを二人で半分こした。",
          "diary": "食卓で他愛ない冗談を言い合って笑った。気兼ねなく笑い合える関係が心地いい。"
        },
        "tired": {
          "text": "お互いに疲れていたので、多くを語らずとも静かにご飯を平らげ、早めに後片付けを済ませた。",
          "diary": "今夜は二人とも疲れていたので静かに夕飯を食べた。言葉がなくても落ち着けるのが夫婦の良さだ。"
        }
      }
    }
  ]
});
