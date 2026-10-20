(window.eventDefs = window.eventDefs || []).push({
  "id": "elem_bicycle_excursion",
  "title": "友達と自転車で遠出",
  "description": "自転車に乗れるようになってから数か月。友達と一緒にペダルを漕ぎ、心地よい風を浴びながら隣町の大きな公園まで遠出した。どこまでも自分の力で行けるような、誇らしさと冒険心に胸が高鳴った。",
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
    "unique_key": "elem_bicycle_excursion"
  },
  "choices": [],
  "effects": [
    {
      "path": "state.mood",
      "op": "add",
      "value": 3
    },
    {
      "path": "skill.communication_skill",
      "op": "add",
      "value": 2
    },
    {
      "path": "trait.constitution.current",
      "op": "add",
      "value": 2
    }
  ],
  "diary": "補助輪を外して練習した日々が懐かしい。友達と並んで走る帰り道、夕焼け空がとても綺麗で、少しだけ世界が広がった気がした。"
});
