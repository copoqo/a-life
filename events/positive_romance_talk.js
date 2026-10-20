(window.eventDefs = window.eventDefs || []).push({
  "id": "positive_romance_talk",
  "title": "恋愛観を語り合う",
  "description": "友人と恋愛や親密さについて率直に話し、互いの違いを面白く感じた。",
  "content_rating": "adult",
  "enabled": true,
  "actors": {
    "friend": {
      "source": "friend",
      "required": false
    }
  },
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
          851
        ]
      }
    ]
  },
  "weight": {
    "base": 17,
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
    "unique_key": "positive_romance_talk"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "自分の希望も話す",
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
          "description": "自分の希望も話す。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 1
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "positive_self_discovery",
                "delay": 1,
                "prob": 0.85
              }
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手の話をじっくり聞く",
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
          "description": "相手の話をじっくり聞く。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "自分だけの考えを大切にする",
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
          "description": "自分だけの考えを大切にする。",
          "effects": [
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": -1
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 70,
  "p": 0.17,
  "text": "友人と恋愛や親密さについて率直に話し、互いの違いを面白く感じた。",
  "sexualEffects": [
    {
      "selfKnowledge": 2
    },
    {
      "selfAcceptance": 2
    },
    {
      "boundaryVoice": 2
    }
  ],
  "classification": "daily"
});
