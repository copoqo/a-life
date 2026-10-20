(window.eventDefs = window.eventDefs || []).push({
  "id": "sweet_lingering_passion",
  "title": "日常に蘇る肌の記憶",
  "description": "情熱的な逢瀬を重ねてから数か月。仕事や買い物のふとした瞬間に、あのときの濡れた吐息や肌を擦り合わせた熱狂の記憶が不意に蘇り、身体の奥が甘く疼いて熱を帯びた。",
  "content_rating": "adult",
  "classification": "daily",
  "enabled": true,
  "is_narrative": true,
  "narrative_type": "followup",
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
    "unique_key": "sweet_lingering_passion"
  },
  "choices": [],
  "effects": [
    {
      "path": "state.current_libido",
      "op": "add",
      "value": 30
    },
    {
      "path": "state.current_embarrassment",
      "op": "add",
      "value": 10
    }
  ],
  "diary": "昼間の街を歩きながら、ふと昨夜の湿った肌の感触が蘇って顔が火照った。私の中に、まだ消えない熱が残っている。"
});
