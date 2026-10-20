(window.eventDefs = window.eventDefs || []).push({
  "id": "childhood_daily_play",
  "title_template": "子供時代の日常 〜{variation_title}〜",
  "classification": "daily",
  "content_rating": "general",
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
          72,
          131
        ]
      }
    ]
  },
  "weight": {
    "base": 70,
    "additive": [],
    "multipliers": []
  },
  "min": 6,
  "max": 10,
  "p": 0.35,
  "choices": [
    {
      "id": "choice_lead",
      "stance": "lead",
      "label": "「ここから水を流すから受け止めて！」とリーダーシップをとる",
      "stat_effects": {
        "social": 4,
        "mood": 4,
        "independence": 3
      }
    },
    {
      "id": "choice_join",
      "stance": "join",
      "label": "周りの友達に笑顔で合わせて一緒に楽しむ",
      "stat_effects": {
        "social": 3,
        "mood": 3
      }
    },
    {
      "id": "choice_focus",
      "stance": "focus",
      "label": "砂山の頂上に飾るピカピカの泥団子の作り方に集中する",
      "stat_effects": {
        "knowledge": 3,
        "mood": 2
      }
    },
    {
      "id": "choice_shy",
      "stance": "shy",
      "label": "少し恥ずかしがって遠巻きに様子を見守る",
      "stat_effects": {
        "shyness": 3,
        "stress": -1
      }
    }
  ],
  "variations": [
    {
      "sub_id": "sandcastle_dam",
      "title": "水道のホースと砂場の巨大ダム工事",
      "description": "公園の砂場で、水道からバケツで水を汲んで山を作っていると、学年も違う子たちが集まってきて「トンネル掘っていい？」「水流す係やる！」と大工事が始まった。",
      "outcomes": {
        "lead": {
          "text": "「私が合図したら水を流してね！」と声を張り上げ、見事にトンネルを貫通させた。みんなから「すごーい！」と拍手されて誇らしかった。",
          "diary": "砂場でみんなと巨大なダムを作った。私が指揮をとって水を通したとき、大歓声があがって最高の気分だった。"
        },
        "join": {
          "text": "友達と泥だらけになりながらバケツで水を運び、決壊しそうな壁をみんなでペタペタ補修して大笑いした。",
          "diary": "友達と一緒に砂場を泥んこにして遊んだ。服が汚れたけれど、みんなと笑い合えて楽しかった。"
        },
        "focus": {
          "text": "砂場の隅の細かい乾いた砂を丁寧に振りかけ、手のひらで何度も磨き上げて鏡のように光る泥団子を完成させた。",
          "diary": "ピカピカに光る泥団子を作った。周りのみんなに見せたら「宝石みたい！」って驚かれた。"
        },
        "shy": {
          "text": "輪の中に入るのは少し気後れしたけれど、端っこからスコップで砂を渡してあげると「ありがとう！」と言われて嬉しかった。",
          "diary": "みんなの輪の外からそっとお手伝いをした。ありがとうって言ってもらえて心が温かくなった。"
        }
      }
    }
  ]
});
