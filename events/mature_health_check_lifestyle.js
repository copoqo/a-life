(window.eventDefs = window.eventDefs || []).push({
  "id": "mature_health_check_lifestyle",
  "title": "人間ドックの結果通知・ウォーキングと減塩の誓い",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 480
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 780
      }
    ]
  },
  "weights": {
    "base": 22
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "mature_health_check_lifestyle"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "数値を真摯に受け止め、毎日のウォーキングと食生活の改善を徹底する",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 5,
            "independence": 2,
            "knowledge": 2,
            "stress": -2
          },
          "narrative": "郵送されてきた人間ドックの判定。コレステロールや血圧に並ぶ少し気になる数値を見て、生活改善を決意。毎朝の早起きウォーキングと、野菜中心の減塩料理を始めた。数ヶ月後、身体が軽くなり、肌のツヤも良くなって健康のありがたさを実感した。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "無理のない範囲でヨガやストレッチを取り入れ、柔軟な身体を保つ",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 4,
            "aesthetics": 2,
            "stress": -3
          },
          "narrative": "朝晩のストレッチと深呼吸を習慣化。凝り固まった肩や腰がほぐれ、年齢を重ねてもしなやかで元気な身体を維持する自信がついた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 40,
  "max": 65,
  "p": 0.38,
  "once": true,
  "text": "40代、50代を迎えて受診した定期健康診断や人間ドック。若い頃とは違う身体の変化や検査数値の推移。これからの人生を長く元気に楽しむために、日々の健康管理と向き合う。",
  "diary": [
    "健康診断の結果を見て一念発起、毎朝ウォーキングを始めた。朝日を浴びながら歩くと頭もスッキリして、健康第一の大切さを痛感している。",
    "年齢に応じた身体のケア。無理をせず、自分の身体の声を聞きながら丁寧に暮らしていこうと決めた。"
  ],
  "classification": "daily"
});
