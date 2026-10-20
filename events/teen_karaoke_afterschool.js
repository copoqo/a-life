(window.eventDefs = window.eventDefs || []).push({
  "id": "teen_karaoke_afterschool",
  "title": "放課後ポテトとカラオケ・大声で歌うヒット曲",
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
        "value": 216
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
    "unique_key": "teen_karaoke_afterschool"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "タンバリンを叩いて最新のアニメソングやJ-POPを熱唱し、ストレスを発散する",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 4,
            "stress": -4,
            "communication": 2,
            "bond": {
              "role": "friend",
              "status": "acquaintance"
            }
          },
          "narrative": "テスト終わりの放課後、友達と駆け込んだ駅前のカラオケボックス。山盛りのフライドポテトをつまみながら、マイクを握って大熱唱。タンバリンを激しく打ち鳴らして大笑いし、日頃のストレスが綺麗さっぱり吹き飛んだ。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "静かなバラードを心を込めて歌い上げ、友達から拍手を浴びる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 3,
            "aesthetics": 2,
            "selfKnowledge": 2
          },
          "narrative": "照明を少し落として、大好きなバラードをしっとり歌った。曲が終わった瞬間の友達の「鳥肌立った！」という歓声が嬉しくて、温かい気持ちになった。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 14,
  "max": 18,
  "p": 0.36,
  "once": true,
  "text": "学校帰りの夕暮れ時。テスト明けや休みの前日、仲良しグループで寄り道するカラオケ店。薄暗い個室の中で響く大音量の音楽と、分け合うポテトの塩気。",
  "diary": [
    "放課後カラオケ！ 喉が痛くなるまで歌って笑った。テスト勉強の疲れが一気に吹き飛んで、明日からまた頑張れそう。",
    "みんなで大合唱したヒット曲。何気ない日常のこういう時間が、大人になってもずっと懐かしくなるんだろうな。"
  ],
  "classification": "daily"
});
