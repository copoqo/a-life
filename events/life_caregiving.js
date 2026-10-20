(window.eventDefs = window.eventDefs || []).push({
  "id": "life_caregiving",
  "title": "老いゆく家族の手と命のぬくもり",
  "description": "かつて大きく頼もしかった家族の、小さく皺の刻まれた手を握り締める。命を支え、介護に向き合う日々の重みの中で、自らの人生とのバランスに深く悩む。",
  "content_rating": "general",
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
          456,
          947
        ]
      }
    ]
  },
  "weight": {
    "base": 7,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "life_caregiving"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "負担を分担する",
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
          "description": "公的な支援や介護サービスを積極的に調べ、負担を分担する。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "支え合いの役割を決める",
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
          "description": "家族で集まって本音を話し合い、支え合いの役割を決める。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 38,
  "max": 78,
  "p": 0.07,
  "text": "かつて大きく頼もしかった家族の、小さく皺の刻まれた手を握り締める。命を支え、介護に向き合う日々の重みの中で、自らの人生とのバランスに深く悩む。",
  "diary": [
    "一人で抱え込まず、外部の専門家に相談した。適切な支援を受けることで、穏やかな気持ちで家族の手を握り返せた。",
    "家族で涙を流しながら話し合った。弱さを認め合うことで、家族の絆がもう一度結び直された気がした。"
  ],
  "classification": "daily"
});
