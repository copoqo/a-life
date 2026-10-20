(window.eventDefs = window.eventDefs || []).push({
  "id": "stretched_night_club_bass",
  "title": "深夜のフロア・身体の芯を震わせる重低音とレーザーの光芒",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 240
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 299
      }
    ]
  },
  "weights": {
    "base": 45
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "stretched_night_club_bass"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "フロアの熱気とビートに身を任せ、リズムに合わせて夢中で踊る",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "social": 4,
            "confidence": 3,
            "stress": -3,
            "sexualEffects": {
              "libido": 2
            },
            "bond": {
              "role": "friend",
              "status": "acquaintance"
            }
          },
          "narrative": "地下への階段を降り、分厚い防音ドアを開けた瞬間に身体を直撃する大音量のキックベース。スモークが焚かれた暗闇の中、緑や青のレーザー光線が交錯する。プラスチックカップのジントニックを飲み干し、押し寄せる人々の波に混ざって音の洪水に身を浸す。骨まで震わせる重低音が理性のリミッターを解除し、日常のしがらみを全て脱ぎ捨てたような爆発的な快感に酔い痴れた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ラウンジスペースでグラスを傾けながら、熱気あふれるフロアを眺める",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "selfKnowledge": 3,
            "social": 2,
            "stress": -1
          },
          "narrative": "踊る人々の熱気に少し圧倒されつつ、フロアから一段上がったVIPラウンジ付近で音楽に身を揺らした。日常とは完全に切り離された非日常の空間で、夜を遊び尽くす大人たちのエネルギーを肌で感じた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 20,
  "max": 24,
  "p": 0.5,
  "once": true,
  "text": "友人に誘われて初めて訪れた渋谷の大型ナイトクラブ。エントランスでIDチェックを受け、リストバンドを巻かれて地下へと潜り込む。そこには昼の街とはまったく異なる、夜のエネルギーが渦巻いていた。",
  "diary": [
    "初めてクラブに行ってみた。地響きみたいな音楽と光がすごくて、朝まで踊ってストレスが全部吹き飛んだ。",
    "夜のクラブの熱気はすごかった。ちょっと非日常の世界を覗き見したみたいでスリリングだった。"
  ],
  "classification": "daily"
});
