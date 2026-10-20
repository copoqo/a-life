(window.eventDefs = window.eventDefs || []).push({
  "id": "first_kiss_afterthought",
  "title": "唇に残る熱い余韻",
  "description": "唇に触れた湿り気と、微かに残る相手の唾液の味や息の匂い。ふとした瞬間に唇をなぞり、あの痺れるような感覚を思い出す。",
  "content_rating": "adult",
  "enabled": true,
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.alive",
        "op": "eq",
        "value": true
      },
      {
        "path": "person.age_months",
        "op": "between",
        "value": [
          216,
          1031
        ]
      },
      {
        "path": "history.flags.firstKiss",
        "op": "eq",
        "value": true
      },
      {
        "path": "history.flags.firstKiss",
        "op": "eq",
        "value": false
      }
    ]
  },
  "weight": {
    "base": 15,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "state.current_libido",
          "op": "gte",
          "value": 30
        },
        "factor": 1.5
      }
    ]
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "first_kiss_afterthought"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "込み上げる熱い感情を言葉にする",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": [
          {
            "path": "display.confidence",
            "coefficient": 0.01
          }
        ]
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "込み上げる熱い感情を言葉にする。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "first_intimacy_milestone",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手の気持ちも確かめる",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": [
          {
            "path": "display.confidence",
            "coefficient": 0.01
          }
        ]
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "相手の気持ちも確かめる。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "静かに痺れる余韻を反芻する",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": [
          {
            "path": "display.confidence",
            "coefficient": 0.01
          }
        ]
      },
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "静かに痺れる余韻を反芻する。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 85,
  "p": 0.15,
  "text": "唇に触れた湿り気と、微かに残る相手の唾液の味や息の匂い。ふとした瞬間に唇をなぞり、あの痺れるような感覚を思い出す。",
  "outcomes": [
    "reflection",
    "mutual_talk",
    "reflection"
  ],
  "classification": "daily"
});
