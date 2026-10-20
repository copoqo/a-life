(window.eventDefs = window.eventDefs || []).push({
  "id": "career_unemployment_followup",
  "title": "見直した働き方のその後",
  "description": "働き方を見直す決断をしてから数か月。新しい環境や生活のリズムにも少しずつ慣れ、前を向いて歩き始めている自分に気づいた。",
  "content_rating": "general",
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
    "unique_key": "career_unemployment_followup"
  },
  "choices": [],
  "effects": [
    {
      "path": "state.self_efficacy",
      "op": "add",
      "value": 3
    },
    {
      "path": "state.stress",
      "op": "add",
      "value": -2
    },
    {
      "path": "state.mood",
      "op": "add",
      "value": 2
    }
  ],
  "diary": "あのときは不安で押しつぶされそうだったけれど、自分で選んだ道。少しずつ手応えを感じられるようになってきた。"
});
