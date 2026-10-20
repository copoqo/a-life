(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_career_promotion_responsibility",
  "title": "プロジェクトリーダー就任・後輩の指導と責任の重み",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 312
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 600
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
    "unique_key": "adult_career_promotion_responsibility"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "チームの意見を丁寧に聞き、信頼されるリーダーとして舵を取る",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "leadership": 4,
            "communication": 3,
            "money": 6,
            "stress": 2
          },
          "narrative": "重要な新プロジェクトのリーダーを任された。指示を出すだけでなく、悩む後輩の話に耳を傾け、チーム一丸となって納期を達成。上司からの高い評価とともに役職手当がつき、キャリアの確かな前進を実感した。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "効率的な業務フローを構築し、残業削減と成果の両立を果たす",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 4,
            "independence": 3,
            "money": 5,
            "stress": -1
          },
          "narrative": "無駄な会議を削減し、タスク管理をデジタル化。メンバーが定時で帰れる環境を作りながら業績を伸ばし、社内アワードを受賞した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 26,
  "max": 50,
  "p": 0.38,
  "once": true,
  "text": "社内での経験を重ね、後輩も増えてきた中堅社員としての節目。重要なプロジェクトの取りまとめやチーフとしての役職への抜擢。プレイヤーからマネジメントへと求められる視座が変わる。",
  "diary": [
    "リーダーとしての大きな案件が無事に終了！ プレッシャーで胃が痛い時期もあったけれど、後輩たちから『ついてきて良かったです』って言われて涙が出た。",
    "仕事で役職がついた。責任は重くなったけれど、自分の裁量で動かせる面白さがある。もっと成長していきたい。"
  ],
  "classification": "daily"
});
