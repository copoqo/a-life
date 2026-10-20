(window.eventDefs = window.eventDefs || []).push({
  "id": "adult_private_relationship",
  "title": "蜜月の秘め事・公言するか否か",
  "description": "濃厚な素肌の交わりを重ねる相手との関係。周囲に恋人として公表して公認の仲になるか、それとも誰にも知られぬ秘密の情事として甘美な背徳感を味わい続けるか。",
  "content_rating": "general",
  "enabled": true,
  "actors": {
    "partner": {
      "source": "current_partner",
      "required": true
    }
  },
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
          216,
          971
        ]
      },
      {
        "path": "derived.has_partner",
        "op": "eq",
        "value": true
      }
    ]
  },
  "weight": {
    "base": 7,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "adult_private_relationship"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "胸を張って周囲に二人の親密な関係を公表する",
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
          "description": "胸を張って周囲に二人の親密な関係を公表する。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "外部には一切漏らさず隠し通す",
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
          "description": "二人だけの秘密として、外部には一切漏らさず隠し通す。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "秘密の甘い時間をもう少し楽しむ",
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
          "id": "outcome_2",
          "weight": 1,
          "description": "まだ結論を急がず、秘密の甘い時間をもう少し楽しむ。",
          "effects": [
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
  "min": 18,
  "max": 80,
  "p": 0.07,
  "text": "濃厚な素肌の交わりを重ねる相手との関係。周囲に恋人として公表して公認の仲になるか、それとも誰にも知られぬ秘密の情事として甘美な背徳感を味わい続けるか。",
  "diary": [
    "友人たちに関係を報告した。祝福の言葉に照れながらも、堂々と手をつなげる喜びを噛み締めた。",
    "二人きりの秘密にすることを選んだ。周囲に隠れて視線を交わし、夜に密会する背徳の甘さが、情交の熱気をさらに濃密にした。",
    "誰にも言わない曖昧な関係のまま、甘い毒のような時間を貪った。いつか終わるかもしれないという儚さが、快感を増幅させた。"
  ],
  "outcomes": [
    "disclose_relationship",
    "private_relationship",
    "mutual_talk"
  ],
  "classification": "daily"
});
