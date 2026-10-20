(window.eventDefs = window.eventDefs || []).push({
  "id": "health_warning_precursor",
  "title": "身体からの微かなシグナル",
  "description": "朝起きたときに微かなだるさが残り、鏡に映る自分の顔色もどこか冴えない。日々の忙しさに追われる中で、身体が小さな注意信号を発しているような気がした。",
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
    "unique_key": "health_warning_precursor"
  },
  "choices": [],
  "effects": [
    {
      "path": "state.fatigue",
      "op": "add",
      "value": 5
    },
    {
      "path": "state.stress",
      "op": "add",
      "value": 2
    }
  ],
  "diary": "少し無理が重なっていたのかもしれない。身体の声を無視せず、労わってあげなくては。"
});
