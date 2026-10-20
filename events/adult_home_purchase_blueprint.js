(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_home_purchase_blueprint",
  "title": "夢のマイホーム計画・並べた間取り図と新しい家具",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 336
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 660
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
    "unique_key": "adult_home_purchase_blueprint"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "住宅ローンの資金計画を綿密に立て、納得のいく理想の住まいを契約する",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "independence": 5,
            "money": -10,
            "happiness": 5,
            "knowledge": 3
          },
          "narrative": "モデルルームや住宅展示場に何度も足を運び、耐震性や生活動線を徹底比較。人生最大の買い物となる住宅購入の契約書にサインした。鍵を受け取り、真新しいフローリングを踏みしめた時の誇らしさと安らぎは格別だった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "間取りや壁紙、キッチンの設備を自分好みにこだわり抜く",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 4,
            "happiness": 5,
            "money": -8
          },
          "narrative": "使い勝手の良い対面式キッチン、陽当たりの良いリビング、お気に入りのアクセントクロス。これからの長い人生を紡ぐ拠点を丁寧に創り上げた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 28,
  "max": 55,
  "p": 0.35,
  "once": true,
  "text": "これからの人生を腰を据えて過ごすための拠点。マンションや一戸建ての購入計画。テーブルの上に広げられた間取り図や住宅ローンの試算表を見つめ、これからの未来に胸を膨らませる。",
  "diary": [
    "マイホームを手に入れた！ 自分の城を持てるなんて、大人になったんだなと実感する。ローン返済も頑張りつつ、この家でたくさんの思い出を作りたい。",
    "新しい住まいの引き渡し。新しい木の香りがするリビングで深呼吸した時、心からホッとする居場所ができたと感じた。"
  ],
  "classification": "daily"
});
