(window.eventDefs = window.eventDefs || []).push({
  "id": "teen_school_trip_night",
  "title": "修学旅行の消灯後・布団の中で語り合った未来",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 168
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 204
      }
    ]
  },
  "weights": {
    "base": 24
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "teen_school_trip_night"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "見回りの先生の足音に息を殺しながら、将来の夢や好きな人の話で盛り上がる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "communication": 3,
            "intimacyNeed": 2,
            "bond": {
              "role": "friend",
              "status": "close",
              "gender": "female"
            }
          },
          "narrative": "消灯のベルが鳴った後の旅館の広い和室。並べられた敷布団の上で、廊下の見回り先生の足音が遠ざかるのを確認して一斉に起き上がった。懐中電灯の小さな光を囲み、普段は言えない将来の夢や、誰が好きかという秘密の告白で朝方まで小声で語り明かした。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "翌日の自由行動に備えて早めに休み、旅先の歴史散策を満喫する",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 2,
            "knowledge": 3,
            "happiness": 2
          },
          "narrative": "友達の寝顔を見ながら心地よい眠りにつき、翌朝はすっきり目覚めて古都の寺社や名所を巡った。歴史ある街並みを仲間と歩いた風景が心に深く刻まれた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 14,
  "max": 17,
  "p": 0.4,
  "once": true,
  "text": "待ちに待った修学旅行。新幹線やバスでの移動、見慣れない歴史ある街並み、お土産選び。そして夜の旅館の大広間、仲間たちと過ごす特別な一夜が更けていく。",
  "diary": [
    "修学旅行の夜、先生に見つかりそうになって布団を被って息を潜めたのが最高にスリリングで面白かった。友達の意外な本音が聞けて、もっと仲良くなれた気がする。",
    "友達と過ごした修学旅行、どこを切り取っても楽しかった。ずっとこの時間が続けばいいのにって思うくらい幸せだった。"
  ],
  "classification": "daily"
});
