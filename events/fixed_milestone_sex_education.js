(window.eventDefs = window.eventDefs || []).push({
  "id": "fixed_milestone_sex_education",
  "is_fixed": true,
  "title": "保健室の扉と秘密の授業・知らなかった私のからだ",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 132
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 143
      }
    ]
  },
  "weights": {
    "base": 100
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "fixed_milestone_sex_education"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "真剣に耳を傾け、自分の身体に訪れつつある変化を受け止める",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 3,
            "morality": 1,
            "selfKnowledge": 3
          },
          "narrative": "助産師の先生が語る言葉を、一言も聞き漏らさないようにノートに取った。少しずつ膨らみ始めた胸の痛みや、時折下腹部に走る重い熱さ。それは恥ずかしい病気ではなく、女の身体として成長している証拠なのだと知り、背筋がすっと伸びる気がした。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "恥ずかしさに顔を赤らめながらも、配られた冊子をそっと胸に抱く",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 3,
            "desire": 1,
            "selfKnowledge": 2
          },
          "narrative": "生々しい模型や赤ちゃんの誕生の図解を見るたび、耳の付け根まで真っ赤になって俯いてしまった。男子には見せられない秘密の冊子。ランドセルの奥に大事にしまいながら、自分の秘所を意識してしまい、心臓がトクトクと高鳴った。",
          "id": "outcome_1"
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "放課後、仲の良い友達と小声で身体の悩みを打ち明け合う",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 2,
            "intimacyNeed": 2,
            "happiness": 2
          },
          "narrative": "「ねえ、胸のところ、チクチク痛くなったりしない？」「うん、私も……！」誰もいない渡り廊下の隅で、友達と小声でささやき合った。自分だけじゃないんだという安堵と、大人の身体へと歩き出す秘密を共有した絆が温かかった。",
          "id": "outcome_2"
        }
      ]
    }
  ],
  "min": 11,
  "max": 11,
  "p": 1,
  "once": true,
  "text": "11歳の初夏、女子生徒だけが視聴覚室に集められた。保健の先生と助産師の先生による『身体の成長と命の誕生』の特別授業。男子には内緒で配られたピンク色の小さな冊子。無自覚だった身体の奥が、急に熱を帯びたように意識され、胸の膨らみや下腹部の違和感に初めて『性』という自覚が芽生え始めた。",
  "diary": [
    "今日は女子だけで性教育の授業があった。生理のこと、身体の仕組みのこと……。自分の身体に起きている変化が全部繋がって、これからはちゃんと女の身体として大切にしていかなきゃって思った。",
    "男子には秘密の授業。なんだかすごく恥ずかしくて、先生の説明を聞きながら顔から火が出そうだった。でも、もらった冊子は誰にも見つからないように机の奥に大切にしまってある。",
    "授業の後、〇〇ちゃんと『大人になるのってちょっと怖いね』って話した。自分だけの秘密だと思っていた身体の変化を共有できて、すごくホッとした。"
  ],
  "classification": "daily"
});
