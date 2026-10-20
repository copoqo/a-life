(window.eventDefs = window.eventDefs || []).push({
  "id": "mild_sexuality_whisper_earlobe",
  "title": "放課後の図書室・耳元に触れた相手の吐息と首筋の鳥肌",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 180
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 228
      }
    ]
  },
  "weights": {
    "base": 35
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "mild_sexuality_whisper_earlobe"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "ぞくっと走った首筋の痺れを隠せず、赤面して本棚の陰に身を寄せる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 4,
            "desire": 3,
            "intimacyNeed": 2,
            "sexualEffects": {
              "libido": 3,
              "passion": 3
            },
            "bond": {
              "role": "classmate",
              "status": "close"
            }
          },
          "narrative": "夕暮れの図書室の奥、高い本棚に囲まれた静寂の中。背伸びして高い棚の本を取ろうとした時、背後からスッと伸びてきた腕が本を取ってくれた。その瞬間、耳元すれすれの距離で「これ探してたの？」と囁かれた熱い吐息。湿り気を帯びた息が耳たぶから首筋を撫でた途端、ぞくぞくっと鳥肌が立ち、足の力が抜けそうになった。振り向くと至近距離にある相手の瞳。心臓が跳ね上がり、声も出ないまま本を受け取って俯いた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "照れを隠して「ありがとう」とお礼を言い、本を受け取って歩き出す",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 3,
            "happiness": 2,
            "selfKnowledge": 2
          },
          "narrative": "急な近さにドギマギしながらも、笑顔でお礼を伝えた。相手も少し照れくさそうに笑っていて、放課後の夕暮れの光の中で小さな青春のときめきが胸を満たした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 15,
  "max": 18,
  "p": 0.5,
  "once": true,
  "text": "夕日が差し込む放課後の静かな図書室。高い本棚の通路で、不意に至近距離まで近づいた相手。耳元にかかる微熱を帯びた吐息と、首筋を粟立たせる甘い戦慄。",
  "diary": [
    "図書室で耳元に囁かれた時、首筋がぞくっとして身体が硬直してしまった。吐息が当たるだけでこんなに感じてしまうなんて、自分でもびっくりした。",
    "本棚の間での思いがけない急接近。夕暮れの図書室って、どうしてあんなにドキドキするんだろう。"
  ],
  "classification": "daily"
});
