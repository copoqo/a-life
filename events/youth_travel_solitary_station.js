(window.eventDefs = window.eventDefs || []).push({
  "id": "youth_travel_solitary_station",
  "title": "気ままな一人旅・ローカル線の車窓と駅前喫茶",
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
        "value": 360
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
    "unique_key": "youth_travel_solitary_station"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "あえて計画を立てず、ふらりと降りた無人駅の海を眺める",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "selfKnowledge": 4,
            "stress": -5,
            "happiness": 3
          },
          "narrative": "切符を握りしめ、ガタゴトと揺れるローカル列車に揺られる。海の見える静かな無人駅で途中下車し、潮風を吸い込みながら波の音に耳を傾けた。誰の顔色もうかがわず、自分だけのペースで流れる時間に心が深く洗われた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "レトロな駅前喫茶店に入り、名物のクリームソーダと読書を楽しむ",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "curiosity": 3,
            "happiness": 4,
            "stress": -4
          },
          "narrative": "ベルが鳴る昔ながらの純喫茶。マスターが淹れてくれたネルドリップ珈琲と厚切りトースト。旅先で読む文庫本の一行一行が心に染み渡り、贅沢な孤独の心地よさを知った。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 20,
  "max": 30,
  "p": 0.36,
  "once": true,
  "text": "週末、ふと思い立ってリュック一つで出かけた初めての一人旅。誰とも予定を合わせず、気の向くままに知らない駅で降りる自由。見知らぬ街の空気と風景が、日々の忙しさを忘れさせてくれる。",
  "diary": [
    "初めてのひとり旅。誰も知り合いのいない静かな街を歩いて、自分の好きなことだけに時間を使う贅沢を知った。心がすっきり軽くなった。",
    "旅先の古い喫茶店で過ごした静かな午後。一人で旅をすることの気楽さと深さにハマってしまいそう。"
  ],
  "classification": "daily"
});
