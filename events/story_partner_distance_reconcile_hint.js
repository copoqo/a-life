(window.eventDefs = window.eventDefs || []).push({
  "id": "story_partner_distance_reconcile_hint",
  "title": "少し冷たいシーツと、二人のすれ違いの予兆",
  "description": "断りや遠慮が続いたことで、寝室のシーツの間に微かな距離が生まれていた。背中を向け合って眠る夜の静けさの中、決して嫌いになったわけではないのに縮まらない距離に、胸の奥がきゅっと痛む……。",
  "is_narrative": true,
  "narrative_type": "precursor",
  "content_rating": "general",
  "effects": [
    {
      "path": "state.mood",
      "op": "add",
      "value": -3
    },
    {
      "path": "state.stress",
      "op": "add",
      "value": 3
    }
  ],
  "diary": "最近、彼との間に少しすれ違いがある気がする。素直になれない自分がもどかしくて、夜のシーツが少し冷たく感じた。"
});
