(window.eventDefs = window.eventDefs || []).push({
  "id": "first_romance_holding_hands",
  "title": "夕暮れの帰り道と温もり",
  "description": "想いが通じ合ってから数か月。夕暮れの帰り道、どちらからともなく指先が触れ合い、ぎゅっと手をつないだ。手のひらから伝わる確かな温もりに、胸の鼓動が高鳴った。",
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
    "unique_key": "first_romance_holding_hands"
  },
  "choices": [],
  "effects": [
    {
      "path": "state.mood",
      "op": "add",
      "value": 4
    },
    {
      "path": "state.current_libido",
      "op": "add",
      "value": 15
    }
  ],
  "diary": "ただ手をつないで歩くだけなのに、胸が締めつけられるようにドキドキした。相手のぬくもりがずっと残っている。"
});
