(window.eventDefs = window.eventDefs || []).push({
  "id": "teen_first_part_time_job",
  "title": "初めてのアルバイト・ファミレスの制服と初給料",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 192
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 216
      }
    ]
  },
  "weights": {
    "base": 25
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "teen_first_part_time_job"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "笑顔での接客とオーダー取りを必死に覚え、バイト仲間と絆を深める",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "money": 4,
            "communication": 3,
            "independence": 3,
            "stress": 1,
            "bond": {
              "role": "colleague",
              "status": "acquaintance"
            }
          },
          "narrative": "ピシッとした制服に身を包み、ハンディの使い方とお辞儀の角度を必死で頭に叩き込んだ。ピークタイムの忙しさに目が回りそうになりながらも、お客様からの「ありがとう」と、月末に手渡された給与明細の重みに社会の一員となった実感が湧いた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "バックヤードでの皿洗いや調理補助を黙々とこなし、職人技を身につける",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "money": 4,
            "health": 2,
            "knowledge": 2,
            "independence": 2
          },
          "narrative": "厨房での仕込みや片付けを素早くテキパキとこなした。店長から「助かるよ」と褒められ、自分の手で稼いだお金で欲しかった靴を買いに行った時の喜びは格別だった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 16,
  "max": 18,
  "p": 0.42,
  "once": true,
  "text": "高校生になり、校則や許可を確認して始めた初めてのアルバイト。学校と家以外の新しい居場所。大人たちに混ざって働く緊張感と、自分で稼ぐことの厳しさと誇りを学ぶ。",
  "diary": [
    "初めてのお給料日！ 口座に振り込まれた数字を見て、自分で働くってこういうことなんだって感動した。少しだけ両親にお土産を買って帰った。",
    "バイトは大変だけど、学校とは違う友達や先輩ができて世界が広がった。社会勉強になることばかりだ。"
  ],
  "classification": "daily"
});
