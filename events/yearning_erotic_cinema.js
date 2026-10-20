(window.eventDefs = window.eventDefs || []).push({
  "id": "yearning_erotic_cinema",
  "title": "官能の情景と、息を呑む指先",
  "description": "画面の中で絡み合う二つの肉体。滴る汗、互いの唾液を吸い合う濡れた水音、快楽に歪む女の顔と狂おしい喘ぎ声――。映画の濃厚な濡れ場を見つめるうち、心臓が早鐘のように高鳴り、喉が渇いてゆく。ただの映像だと割り切ろうとしても、画面から匂い立つような生々しい情欲の熱気が肌を撫で、知らず知らずのうちに太ももを固く擦り合わせていた……。",
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
          192,
          395
        ]
      }
    ]
  },
  "weight": {
    "base": 19,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "yearning_erotic_cinema"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "自らの手で濡れた秘部をまさぐり快感を追体験する",
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
          "description": "映像の熱気に身を委ね、自らの手で濡れた秘部をまさぐり快感を追体験する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "chain",
              "op": "set",
              "value": {
                "eventId": "conflict_excessive_desire",
                "delay": 1,
                "prob": 0.85
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "こんな風に理性を失うほど貪欲に求め合ってみたいと激しく焦がれる",
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
          "description": "こんな風に理性を失うほど貪欲に求め合ってみたいと激しく焦がれる。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "胸元のボタンを固く留め直す",
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
          "description": "あまりの生々しさに視線を伏せ、胸元のボタンを固く留め直す。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            }
          ]
        }
      ]
    }
  ],
  "min": 16,
  "max": 32,
  "p": 0.19,
  "text": "画面の中で絡み合う二つの肉体。滴る汗、互いの唾液を吸い合う濡れた水音、快楽に歪む女の顔と狂おしい喘ぎ声――。映画の濃厚な濡れ場を見つめるうち、心臓が早鐘のように高鳴り、喉が渇いてゆく。ただの映像だと割り切ろうとしても、画面から匂い立つような生々しい情欲の熱気が肌を撫で、知らず知らずのうちに太ももを固く擦り合わせていた……。",
  "phase": "any",
  "diary": [
    "画面から漏れる激しい水音に煽られるように、ショーツ越しにクリトリスを擦り上げた。奥から溢れ出る蜜が指をぬらりと滑らせ、画面の女と同じように口元を押さえて熱い絶頂へと上り詰めた。",
    "激しく抱き合って果てる男女の姿が瞼に焼き付いて離れなかった。あんな風に全てを曝け出して快楽に溺れられたなら、どんなに幸せだろうと胸が狂おしく締めつけられた。",
    "刺激が強すぎる場面に耐えかねて目を逸らした。けれど、耳に届く湿った息遣いと肉のぶつかる音は容赦なく下腹の奥を震わせ、しばらく動悸が収まらなかった。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
