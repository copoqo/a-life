(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_romantic_encounter",
  "title": "街角の偶然と芽生える好意・予感の交差点",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 216
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": false
      }
    ]
  },
  "weights": {
    "base": 15,
    "modifiers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "強"
          ]
        },
        "factor": 1.4
      }
    ]
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 24,
    "max_occurrences": 5,
    "unique_key": "adult_romantic_encounter"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "照れながらも連絡先を交換し、次の週末に会う約束をする",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "communication": 2,
            "curiosity": 2,
            "chain": {
              "eventId": "first_date_milestone",
              "delay": 1,
              "prob": 0.85
            }
          },
          "narrative": "休日のカフェの席、あるいは落とした定期券を拾ってくれた優しい手。目が合った瞬間に胸の奥がトクンと鳴った。「よかったら、今度ゆっくりお話ししませんか」と渡された連絡先。少し震える指で返信を打ちながら、新しい恋の始まりに頬が染まった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "礼儀正しくお礼を伝え、爽やかな余韻を残してその場を後にする",
      "utility": 0.8,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "morality": 1,
            "selfKnowledge": 1,
            "happiness": 1
          },
          "narrative": "「どうもありがとうございます」と丁寧に微笑んで頭を下げた。相手は少し名残惜しそうにしていたけれど、日常の中に灯った小さなときめきを胸に、心地よい足取りで歩き出した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 18,
  "max": 50,
  "p": 0.45,
  "once": false,
  "text": "街中のカフェ、あるいは通勤途中の駅のホーム。偶然の落とし物をきっかけに言葉を交わした素敵な相手。ふと重なった視線の中に、どこか惹かれ合うような温かい熱を感じて、胸の鼓動が早くなる。",
  "diary": [
    "今日、素敵な人と出会った。落とし物を拾ってくれた時の優しい笑顔が頭から離れない。思い切って連絡先を交換したから、今度の週末が待ちきれない！",
    "ちょっとした偶然の出会い。連絡先までは聞かなかったけれど、なんだか映画のワンシーンみたいで、一日中ほんのり幸せな気分で過ごせた。"
  ],
  "classification": "daily"
});
