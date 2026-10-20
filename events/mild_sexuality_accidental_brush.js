(window.eventDefs = window.eventDefs || []).push({
  "id": "mild_sexuality_accidental_brush",
  "title": "満員電車や狭い通路・男子とのふとした身体の接触と走る電流",
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
        "value": 192
      }
    ]
  },
  "weights": {
    "base": 35
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "mild_sexuality_accidental_brush"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "触れ合う腕の硬さと体温に意識が集中し、心臓の早鐘を抑えきれなくなる",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 4,
            "desire": 2,
            "selfKnowledge": 2,
            "sexualEffects": {
              "libido": 3,
              "passion": 2
            },
            "bond": {
              "role": "classmate",
              "status": "acquaintance",
              "gender": "male"
            }
          },
          "narrative": "雨の日の通学電車。急ブレーキで揺れた瞬間、吊り革を掴む隣の男子の二の腕が、私の肩と薄い制服の胸元にぐっと密着した。女子とは全く違う、硬い筋肉の感触と男の子特有の石鹸混じりの汗の匂い。びりりと背筋に電流が走ったように全身が硬直した。相手が「あ、ごめん」と小声で謝ったけれど、触れ合っていた場所が火照ったように熱く、下腹部の奥がきゅんと痺れて次の駅まで息を止めるように俯いた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "さりげなく身体を引いて隙間を作り、平然とした顔を取り繕う",
      "utility": 1,
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "boundaryVoice": 3,
            "selfKnowledge": 2
          },
          "narrative": "不自然にならないよう一歩後ろへ下がり、スクールバッグを抱え直した。何でもない風を装いながらも、ふとした瞬間に異性を意識してしまう自分の変化に気づき、少し大人の階段を登った気がした。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "min": 13,
  "max": 15,
  "p": 0.5,
  "once": true,
  "text": "朝夕の混雑する通学電車、あるいは学校の狭い渡り廊下。不意の揺れや行き違いで、男子生徒と身体が接触してしまう瞬間。制服越しに伝わってくる男の子特有の体温と骨っぽさに、思春期ならではの予期せぬ衝動が走る。",
  "diary": [
    "電車で隣の男の子の腕がずっと当たっていて、心臓が破裂しそうだった。女子とは全然違う硬くて温かい体温に、なんだか身体の奥が落ち着かなくなって困った。",
    "満員電車でふとした接触。ただの偶然なのに、思春期のせいか異性をすごく意識してしまって、顔が熱くなった。"
  ],
  "classification": "random"
});
