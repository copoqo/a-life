(window.eventDefs = window.eventDefs || []).push({
  "id": "teen_first_love",
  "title": "隣り合う肩と制服から香る汗の匂い",
  "description": "放課後の教室や夕暮れの帰り道、ふと隣に立った気になる人の横顔。風に乗って届く男の子特有の石鹸と微かな汗の匂い、偶然肩が触れ合った瞬間の熱さに、心臓が痛いほど早鐘を打ち、太ももの付け根がきゅんと疼く……。",
  "content_rating": "general",
  "enabled": true,
  "actors": {},
  "conditions": {
    "all": [
      {
        "path": "person.alive",
        "op": "eq",
        "value": true
      },
      {
        "path": "person.age_months",
        "op": "between",
        "value": [
          180,
          239
        ]
      }
    ]
  },
  "weight": {
    "base": 9,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": true,
    "cooldown_months": 9999,
    "max_occurrences": 1,
    "unique_key": "teen_first_love"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "日記に赤裸々な恋心を綴る",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": [
          {
            "path": "display.confidence",
            "coefficient": 0.01
          }
        ]
      },
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "熱い想いを胸に秘め、日記に赤裸々な恋心を綴る。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "顔を真っ赤にして恋の悩みを打ち明ける",
      "requirements": {
        "all": []
      },
      "utility": {
        "base": 0,
        "terms": [
          {
            "path": "display.confidence",
            "coefficient": 0.01
          }
        ]
      },
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "親しい友達にだけ、顔を真っ赤にして恋の悩みを打ち明ける。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "min": 15,
  "max": 19,
  "p": 0.28,
  "once": true,
  "text": "放課後の教室や夕暮れの帰り道、ふと隣に立った気になる人の横顔。風に乗って届く男の子特有の石鹸と微かな汗の匂い、偶然肩が触れ合った瞬間の熱さに、心臓が痛いほど早鐘を打ち、太ももの付け根がきゅんと疼く……。",
  "diary": [
    "肩が触れ合った瞬間、身体中に電気が走った。あの人の匂いと横顔が頭から離れず、夜になっても下腹が甘く疼いて眠れなかった。",
    "友達に好きな人の名前を打ち明けたときの気恥ずかしさと高揚感。恋する乙女になった自分を、くすぐったく思った。"
  ],
  "classification": "daily"
});
