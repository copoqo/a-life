(window.eventDefs = window.eventDefs || []).push({
  "id": "stretched_sneak_teen_magazine",
  "title": "夜更けの部屋・こっそり開いたティーン誌の袋とじとキスの作法",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 156
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 191
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
    "unique_key": "stretched_sneak_teen_magazine"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "布団をかぶって懐中電灯でじっくり読み耽り、下腹の微熱に戸惑う",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 3,
            "selfKnowledge": 3,
            "sexualEffects": {
              "libido": 2
            }
          },
          "narrative": "部屋の明かりを消し、布団を頭からかぶってスマートフォンの光で雑誌の『初めてのキスと恋人たちの夜』特集を貪るように読む。『唇を重ねる角度』『舌の触れ合い』――生々しい活字とイラストを目で追うたび、心臓の鼓動が耳元で激しく鳴り響き、太ももの内側がじんと微熱を帯びていく。未知の世界への強烈な好奇心と罪悪感に、息を詰まらせた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "恥ずかしさに耐えきれず途中で閉じ、枕に顔を埋めて足をバタつかせる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 3,
            "happiness": 2,
            "sexualEffects": {
              "libido": 1
            }
          },
          "narrative": "あまりに刺激的な内容に胸が破裂しそうになり、思わずバタンとページを閉じた。火照った顔をひんやりした枕に押し当てながら、いつか自分にもそんな夜が訪れるのだろうかと想像して身悶えした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 13,
  "max": 15,
  "p": 0.5,
  "once": true,
  "text": "家族が寝静まった深夜。古本屋や姉の部屋から手に入れたティーン向けファッション誌の巻末。普段は読み飛ばすはずの恋愛・セックス相談コーナーに、どうしても視線が吸い寄せられてしまう。",
  "diary": [
    "雑誌の恋愛特集を読んだ。大人のキスってあんな風にするんだ……頭がクラクラして、しばらく眠れなかった。",
    "ちょっと過激な恋愛の相談コーナーをこっそり読んだ。自分にはまだ早いって思うのに、気になって仕方がなかった。"
  ],
  "classification": "daily"
});
