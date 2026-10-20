(window.eventDefs = window.eventDefs || []).push({
  "id": "teen_cultural_festival_haunted",
  "title": "文化祭のお化け屋敷・段ボールと黒幕の教室",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 168
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 204
      }
    ]
  },
  "weights": {
    "base": 24
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "teen_cultural_festival_haunted"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "本格的な小道具と血糊メイクで、来場者を本気で驚かせる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "curiosity": 2,
            "happiness": 4,
            "communication": 2,
            "bond": {
              "role": "classmate",
              "status": "close"
            }
          },
          "narrative": "絵の具とティッシュで作ったリアルな傷メイクに、暗闇から飛び出すタイミングの猛特訓。扉が開いて入ってきた他校の生徒や後輩が「ギャーッ！」と本気で悲鳴を上げた瞬間、物陰で友達とハイタッチして笑い転げた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "受付と行列の整理を担当し、笑顔でクラスの企画を盛り上げる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 3,
            "happiness": 3,
            "leadership": 1
          },
          "narrative": "廊下にできた大行列をテキパキと案内し、待ち時間の間もお客さんを楽しませた。教室の外まで響く悲鳴と笑い声。クラス全員で一つのものを作り上げた達成感に包まれた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 14,
  "max": 17,
  "p": 0.42,
  "once": true,
  "text": "秋の学校全体が浮き足立つ文化祭。私たちのクラスは教室全体を使った手作りのお化け屋敷を企画。段ボールを集めて迷路を作り、黒幕を張り巡らせ、連日放課後遅くまで残って準備を重ねた。",
  "diary": [
    "文化祭のお化け屋敷は大盛況！ 準備は本当に大変だったけれど、みんなの驚く顔とお客さんの行列を見て疲れも吹き飛んだ。最高のお祭りだった。",
    "放課後に残って段ボールに色を塗ったり、買い出しに行ったりした時間がすごく楽しかった。学生時代の最高の思い出。"
  ],
  "classification": "daily"
});
