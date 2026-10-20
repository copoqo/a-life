(window.eventDefs = window.eventDefs || []).push({
  "id": "child_secret_dictionary",
  "title": "隠れて開く大人の言葉・辞書と画面",
  "description": "放課後の図書室や自室のスマホで、偶然目にした「性交」「処女」「愛撫」といった生々しい単語。誰にも見られないよう息を潜めて意味を読み進めるうちに、首筋がカーッと熱くなり、太ももの間がきゅんと濡れていく……。",
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
          132,
          191
        ]
      }
    ]
  },
  "weight": {
    "base": 20,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "child_secret_dictionary"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "生々しい描写を何度も読み返して妄想に耽る",
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
          "description": "背徳感に震えながら、生々しい描写を何度も読み返して妄想に耽る。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "冷たい手で火照った頬を押さえる",
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
          "description": "画面を伏せて激しい動悸を抑え、冷たい手で火照った頬を押さえる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "知ってる？」と探りを入れてみる",
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
          "description": "親友にそれとなく「そういうこと、知ってる？」と探りを入れてみる。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    }
  ],
  "min": 11,
  "max": 15,
  "p": 0.2,
  "text": "放課後の図書室や自室のスマホで、偶然目にした「性交」「処女」「愛撫」といった生々しい単語。誰にも見られないよう息を潜めて意味を読み進めるうちに、首筋がカーッと熱くなり、太ももの間がきゅんと濡れていく……。",
  "diary": [
    "文字を目で追うだけで、太ももの間が熱く濡れていくのが分かった。大人が交わしているという生々しい行為を想像して、胸が早鐘を打った。",
    "あまりに刺激的な言葉に圧倒されて本を閉じた。それでも、頭の裏側に焼き付いた情景がなかなか消えてくれなかった。",
    "親友と顔を見合わせながらヒソヒソ声で話した。お互いに赤面しながらも、大人の秘密に一歩近づいたような共犯関係が嬉しかった。"
  ],
  "classification": "daily"
});
