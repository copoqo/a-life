(window.eventDefs = window.eventDefs || []).push({
  "id": "sexual_first_conversation",
  "title": "身体の相性や性的な願望を打ち明ける",
  "description": "夜の寝室、二人きりで肌を寄せ合いながら、どんな愛撫が心地いいか、どこを触れられると濡れてしまうのか、互いの淫らな好みを言葉にする機会が訪れた。",
  "content_rating": "adult",
  "enabled": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
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
          515
        ]
      },
      {
        "path": "person.experience.has_sexual_experience",
        "op": "eq",
        "value": true
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 16,
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
    "unique_key": "sexual_first_conversation"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "恥ずかしい身体の性感帯や望みを赤裸々に話す",
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
          "description": "恥ずかしい身体の性感帯や望みを赤裸々に話す。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "adult_shared_intimacy",
                "delay": 1,
                "prob": 0.85
              }
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "赤面しながら少しずつ触れてほしい場所を伝える",
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
          "description": "赤面しながら少しずつ触れてほしい場所を伝える。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "言葉を濁して胸元に顔を埋める",
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
          "description": "恥ずかしさに耐えきれず、言葉を濁して胸元に顔を埋める。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 18,
  "max": 42,
  "p": 0.16,
  "text": "夜の寝室、二人きりで肌を寄せ合いながら、どんな愛撫が心地いいか、どこを触れられると濡れてしまうのか、互いの淫らな好みを言葉にする機会が訪れた。",
  "phase": "awakening",
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ],
  "outcomes": [
    "mutual_talk",
    "mutual_talk",
    "boundary"
  ],
  "classification": "daily"
});
