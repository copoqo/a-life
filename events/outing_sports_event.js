(window.eventDefs = window.eventDefs || []).push({
  "id": "outing_sports_event",
  "title": "スタジアムでのスポーツ観戦・歓声の渦",
  "description": "満員のスタジアムを揺るがす地鳴りのような歓声とメガホンの音。グラウンドの白熱したプレーに観客席全体が一喜一憂し、隣り合う見知らぬ人とも肩をぶつけ合って興奮を分かち合う。冷たいビールを喉に流し込むたび、身体中の血が熱く沸き立つ……。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "stranger": {
      "source": "random_adult",
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
          180,
          911
        ]
      }
    ]
  },
  "weight": {
    "base": 16,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "outing_sports_event"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "メガホンを打ち鳴らしてスタジアムの一体感に酔いしれる",
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
          "description": "応援歌を熱唱し、メガホンを打ち鳴らしてスタジアムの一体感に酔いしれる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -4
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "混み合うコンコースのトイレへ席を立つ",
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
          "description": "興奮とアルコールで身体が火照り、混み合うコンコースのトイレへ席を立つ。",
          "effects": [
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "rare_outing_secret_quickie",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "じっくりと試合展開を観戦する",
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
          "description": "冷たいビールとスタジアムグルメを堪能しながら、じっくりと試合展開を観戦する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    }
  ],
  "min": 15,
  "max": 75,
  "p": 0.16,
  "text": "満員のスタジアムを揺るがす地鳴りのような歓声とメガホンの音。グラウンドの白熱したプレーに観客席全体が一喜一憂し、隣り合う見知らぬ人とも肩をぶつけ合って興奮を分かち合う。冷たいビールを喉に流し込むたび、身体中の血が熱く沸き立つ……。",
  "diary": [
    "何万人もの大歓声に包まれ、声を枯らして応援した。見知らぬファンともハイタッチを交わし、全身が心地よい高揚感で満たされた。",
    "コンコースの人混みの中を歩きながら、熱狂の熱気に煽られて下腹の奥がじくじくと疼いた。歓声の裏に潜むスリルに胸が高鳴った。",
    "スタジアムの風を感じながら、ビールを片手に熱戦を見届けた。日常を忘れられる迫力満点の一日だった。"
  ],
  "outcomes": [
    "shared_activity",
    "reflection",
    "shared_activity"
  ],
  "classification": "random"
});
