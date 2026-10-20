(window.eventDefs = window.eventDefs || []).push({
  "id": "partner_sex_fertility_timing",
  "title": "排卵日の夜と義務の営み 〜冷めた心と裏腹に濡れてしまう肉体〜",
  "content_rating": "adult",
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 264
      },
      {
        "path": "person.age_months",
        "op": "lte",
        "value": 504
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weights": {
    "base": 40,
    "modifiers": [
      {
        "when": {
          "path": "derived.libido_tier",
          "op": "in",
          "value": [
            "中",
            "強"
          ]
        },
        "factor": 1.2
      }
    ]
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 6,
    "max_occurrences": 20,
    "unique_key": "partner_sex_fertility_timing"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "腰の下に枕を敷いて受け入れ、作業的な行為の中で奥を突かれる生理的快楽に耐える",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "stress": 2,
            "desire": 2,
            "morality": 1,
            "sexualEffects": {
              "intimacy": 8,
              "libido": 3,
              "passion": 4
            }
          },
          "narrative": "スマートフォンの妊活アプリが示した排卵日。ロマンチックな雰囲気など何もない。『今日、タイミング取らないと』という一言で始まったベッド。腰の下に枕を差し入れられ、妊娠しやすい角度に腰を持ち上げられる。心には義務感とプレッシャーしかないはずなのに、相手の指が奥を探り、太い肉茎が子宮口へと直接打ち込まれると、肉体は生理的に愛液をじっとりと分泌させてしまう。ぐちゅりと濡れた水音に羞恥がこみ上げる中、作業のように腰を振る相手の重みを受け止め、妊娠への祈りと、それでも快感に反応してしまう女の身体の複雑な矛盾に耐えながら、奥深くに精液を受け止めた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "「赤ちゃんのためだから」と自分に言い聞かせ、相手に身を委ねる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "stress": 1,
            "intimacyNeed": 2,
            "happiness": 1,
            "sexualEffects": {
              "intimacy": 10,
              "libido": 2,
              "passion": 5
            }
          },
          "narrative": "二人の未来のための計画。義務的になりがちな営みの中でも、相手の汗ばんだ額に触れ、少しでも愛を込めようと努めた。淡々と進むピストンを受け入れながら、どうか命が宿ってほしいと静かに願った。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 22,
  "max": 42,
  "p": 0.5,
  "once": false,
  "text": "基礎体温計と排卵検査薬が告げるタイミング。今夜を逃せばまた来月まで待たなければならない。夫婦やパートナーの間に漂う、愛情表現というよりは『子作りという義務』の空気。プレッシャーと事務的な気まずさを抱えながら、寝室で布団を並べる。",
  "diary": [
    "今夜はタイミング法の日。ロマンチックさなんて全然なくて、お互いに『やらなきゃいけないこと』としてベッドに入った。でも、身体の奥を突かれると自然に濡れてしまう自分がなんだか悔しくて切なかった。",
    "妊活のためのセックス。プレッシャーで息が詰まりそうだったけれど、赤ちゃんが来てくれることを信じて受け入れた。"
  ],
  "classification": "daily"
});
