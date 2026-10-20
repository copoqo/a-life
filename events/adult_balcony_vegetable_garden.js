(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_balcony_vegetable_garden",
  "title": "ベランダの小さな家庭菜園・朝露に光るミニトマト",
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
        "value": 780
      }
    ]
  },
  "weights": {
    "base": 20
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "adult_balcony_vegetable_garden"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "毎朝の水やりと土の手入れを欠かさず、真っ赤に実った果実を収穫する",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "health": 2,
            "stress": -4
          },
          "narrative": "プランターに土を入れ、苗を植えたミニトマトとバジル。朝起きてカーテンを開け、朝露に光る小さな黄色い花を見つけた時の喜び。夏になり、真っ赤に熟した採れたてのトマトをもぎ取って朝食のサラダに入れた。みずみずしい甘みが口いっぱいに広がり、日々の何気ない幸せを噛み締めた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "ローズマリーやミントなどのハーブを育て、自家製ハーブティーを楽しむ",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 3,
            "stress": -5,
            "happiness": 3
          },
          "narrative": "摘みたてのフレッシュミントにお湯を注ぐと、キッチンいっぱいに爽やかな香りが広がった。自然の恵みに癒やされる穏やかなモーニングルーティンが定着した。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 26,
  "max": 65,
  "p": 0.36,
  "once": true,
  "text": "ベランダの小さなスペースを利用して始めた家庭菜園。ホームセンターで選んだプランターと培養土。種をまき、小さな芽が出て葉を広げていく生命の営みに触れる静かな時間。",
  "diary": [
    "ベランダのミニトマトが真っ赤に実った！ 自分で種から育てた野菜を食べるのって、こんなに美味しいんだって感動した。",
    "朝の水やりが毎日の癒やしの時間。緑がぐんぐん育っていく姿を見ていると、日々の忙しさを忘れて優しい気持ちになれる。"
  ],
  "classification": "daily"
});
