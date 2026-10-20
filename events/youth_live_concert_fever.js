(window.eventDefs = window.eventDefs || []).push({
  "id": "youth_live_concert_fever",
  "title": "大好きなアーティストのライブ・銀テープと熱狂",
  "content_rating": "general",
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.age_months",
        "op": "gte",
        "value": 216
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
    "unique_key": "youth_live_concert_fever"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "ペンライトを激しく振り、アリーナ全体と一体になってコールを送る",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 5,
            "stress": -5,
            "passion": 3,
            "bond": {
              "role": "club_mate",
              "status": "acquaintance"
            }
          },
          "narrative": "暗転したアリーナに響く重低音、一斉に灯る数万の光の海。大好きな曲のイントロが流れた瞬間に鳥肌が立ち、全力で腕を突き上げた。天井から舞い散るキラキラ光る銀テープを掴み取り、生きている歓喜に満たされた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "グッズのタオルを首に巻き、音の波に身を委ねて感動の涙を流す",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "aesthetics": 3,
            "stress": -4
          },
          "narrative": "心に寄り添ってくれたバラード曲の生演奏。胸に直接響いてくる歌声に涙が止まらなくなった。明日からまた現実を前を向いて生きていく勇気をもらった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 18,
  "max": 30,
  "p": 0.38,
  "once": true,
  "text": "何ヶ月も前から当選を祈っていた大好きなアーティストのドームツアー。会場を埋め尽くす同じ熱量を持った観客たち。照明と大音響が織りなす非日常の熱狂の渦へと飛び込む。",
  "diary": [
    "ライブ最高だった！ 生の歌声の迫力がすごくて、何回も鳥肌が立った。銀テープもしっかりキャッチできて、明日からの生きるエネルギーをもらった！",
    "大好きな曲を生で聴けて涙が止まらなかった。音楽の力って本当にすごい。また絶対来よう。"
  ],
  "classification": "daily"
});
