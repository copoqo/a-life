(window.eventDefs = window.eventDefs || []).push({
  "id": "career_downsizing_rumor",
  "title": "人員整理のうわさ",
  "description": "給湯室や休憩スペースで、同僚たちが声を潜めて深刻そうに話し込んでいる。『事業部の一部が統合されるらしい』『希望退職の募集があるかもしれない』。社内に不穏な噂が漂い、これからの働き方に胸騒ぎを覚えた。",
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
    "unique_key": "career_downsizing_rumor"
  },
  "choices": [],
  "effects": [
    {
      "path": "state.stress",
      "op": "add",
      "value": 3
    },
    {
      "path": "state.mood",
      "op": "add",
      "value": -2
    }
  ],
  "diary": "社内に不穏な噂が広がり、同僚たちの表情もどこか硬い。何があっても対応できるように、自分の足元を見つめ直さなくては。"
});
