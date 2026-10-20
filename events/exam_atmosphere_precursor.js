(window.eventDefs = window.eventDefs || []).push({
  "id": "exam_atmosphere_precursor",
  "title": "受験シーズンの足音",
  "description": "教室の黒板の隅に『共通テストまであと〇日』の文字が書かれ、休み時間も参考書を開く生徒が増えてきた。ピンと張り詰めた空気の中、自分の未来について深く考えさせられる。",
  "content_rating": "general",
  "classification": "daily",
  "enabled": true,
  "is_narrative": true,
  "narrative_type": "precursor",
  "conditions": {
    "all": [
      {
        "path": "person.alive",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 0,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "exam_atmosphere_precursor"
  },
  "choices": [],
  "effects": [
    {
      "path": "skill.knowledge",
      "op": "add",
      "value": 2
    },
    {
      "path": "state.stress",
      "op": "add",
      "value": 2
    }
  ],
  "diary": "周りの空気が一変して、いよいよ本番が近づいてきた実感。不安もあるけれど、逃げずにやり抜きたい。"
});
