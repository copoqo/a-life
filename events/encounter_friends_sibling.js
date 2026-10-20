(window.eventDefs = window.eventDefs || []).push({
  "id": "encounter_friends_sibling",
  "title": "友達の家の隣室、息を殺した背徳の密会",
  "description": "友人の家に遊びに行った放課後。友人がおやつを取りに部屋を出た隙に、隣の部屋から友人のきょうだいが声をかけてきた。扉の陰に引き込まれ、壁に押し付けられた瞬間、すぐ隣に友人がいる背徳感で下腹が甘く痙攣する……。",
  "content_rating": "general",
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
          180,
          299
        ]
      }
    ]
  },
  "weight": {
    "base": 15,
    "additive": [
      {
        "path": "display.sociability",
        "coefficient": 0.01
      }
    ],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "encounter_friends_sibling"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "スカートの中に手を滑り込ませるのを許す",
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
          "description": "友達に聞こえないよう唇を塞がれ、スカートの中に手を滑り込ませるのを許す。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "encounter_colleague",
                "delay": 1,
                "prob": 0.75
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "胸の鼓動を抑えながら友達の部屋へ戻る",
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
          "description": "秘密の目配せを交わし、胸の鼓動を抑えながら友達の部屋へ戻る。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 15,
  "max": 24,
  "p": 0.15,
  "text": "友人の家に遊びに行った放課後。友人がおやつを取りに部屋を出た隙に、隣の部屋から友人のきょうだいが声をかけてきた。扉の陰に引き込まれ、壁に押し付けられた瞬間、すぐ隣に友人がいる背徳感で下腹が甘く痙攣する……。",
  "diary": [
    "友達がすぐ隣の廊下にいるのに、部屋の隅で口を塞がれ、下着をずらされて濡れた秘所を指で弄られた。見つかる恐怖と快感で頭がおかしくなりそうだった。",
    "友達のきょうだいと交わした秘密の視線。禁断の扉に手をかけたような高揚感に、太ももが熱く火照った。"
  ],
  "outcomes": [
    "meeting_friends_sibling",
    "meeting_friends_sibling"
  ],
  "classification": "daily"
});
