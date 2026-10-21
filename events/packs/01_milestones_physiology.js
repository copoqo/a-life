// ============================================================================
// Pack: 01_milestones_physiology — 固定マイルストーン・初経・更年期・身体的節目 (7 events)
// ============================================================================
window.defineEvent({
  "id": "fixed_milestone_sex_education",
  "title": "保健室の扉と秘密の授業・知らなかった私のからだ",
  "age": [
    11,
    11
  ],
  "trigger": "fixed",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 100,
  "once": true,
  "is_fixed": true,
  "text": "11歳の初夏、女子生徒だけが視聴覚室に集められた。保健の先生と助産師の先生による『身体の成長と命の誕生』の特別授業。男子には内緒で配られたピンク色の小さな冊子。無自覚だった身体の奥が、急に熱を帯びたように意識され、胸の膨らみや下腹部の違和感に初めて『性』という自覚が芽生え始めた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "真剣に耳を傾け、自分の身体に訪れつつある変化を受け止める",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 3,
            "morality": 1,
            "selfKnowledge": 3
          },
          "narrative": "助産師の先生が語る言葉を、一言も聞き漏らさないようにノートに取った。少しずつ膨らみ始めた胸の痛みや、時折下腹部に走る重い熱さ。それは恥ずかしい病気ではなく、女の身体として成長している証拠なのだと知り、背筋がすっと伸びる気がした。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "恥ずかしさに顔を赤らめながらも、配られた冊子をそっと胸に抱く",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "shyness": 3,
            "desire": 1,
            "selfKnowledge": 2
          },
          "narrative": "生々しい模型や赤ちゃんの誕生の図解を見るたび、耳の付け根まで真っ赤になって俯いてしまった。男子には見せられない秘密の冊子。ランドセルの奥に大事にしまいながら、自分の秘所を意識してしまい、心臓がトクトクと高鳴った。",
          "id": "outcome_1"
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "放課後、仲の良い友達と小声で身体の悩みを打ち明け合う",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 2,
            "intimacyNeed": 2,
            "happiness": 2,
            "bond": {
              "role": "classmate",
              "status": "close",
              "gender": "female",
              "metContext": "保健の授業後に語り合った友達"
            }
          },
          "narrative": "「ねえ、胸のところ、チクチク痛くなったりしない？」「うん、私も……！」誰もいない渡り廊下の隅で、友達と小声でささやき合った。自分だけじゃないんだという安堵と、大人の身体へと歩き出す秘密を共有した絆が温かかった。",
          "id": "outcome_2"
        }
      ]
    }
  ],
  "diary": [
    "今日は女子だけで性教育の授業があった。生理のこと、身体の仕組みのこと……。自分の身体に起きている変化が全部繋がって、これからはちゃんと女の身体として大切にしていかなきゃって思った。",
    "男子には秘密の授業。なんだかすごく恥ずかしくて、先生の説明を聞きながら顔から火が出そうだった。でも、もらった冊子は誰にも見つからないように机の奥に大切にしまってある。",
    "授業の後、〇〇ちゃんと『大人になるのってちょっと怖いね』って話した。自分だけの秘密だと思っていた身体の変化を共有できて、すごくホッとした。"
  ]
});

window.defineEvent({
  "id": "fixed_milestone_coming_of_age_18",
  "title": "十八歳の門出・大人への宣誓と振袖の重み",
  "age": [
    18,
    18
  ],
  "trigger": "fixed",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 100,
  "once": true,
  "is_fixed": true,
  "text": "18歳を迎え、法律上の成年となった日。成人式の会場には、晴れ着やスーツに身を包んだ新成人たちが集う。鏡に映る大人びた自分の姿に、保護されるだけの子供時代が終わり、自らの意思と選択で人生を紡いでいく時が来たのだと実感する。",
  "choices": [
    {
      "id": "choice_0",
      "label": "晴れ着姿で式典に臨み、大人としての責任と自立を胸に誓う",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "morality": 3,
            "boundaryVoice": 2,
            "selfKnowledge": 2
          },
          "narrative": "色鮮やかな振袖の帯をきゅっと締められ、背筋を伸ばして鏡の前に立つ。18歳、法律上も大人として扱われる節目。家族への感謝と、これから自分の足で人生を歩んでいく誇りが胸に満ちた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "久しぶりに再会した同級生たちと、懐かしい思い出と近況を語り合う",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "communication": 3,
            "happiness": 3,
            "intimacyNeed": 1,
            "bond": {
              "role": "classmate",
              "status": "close",
              "metContext": "成人式で再会した同級生"
            }
          },
          "narrative": "式典会場のあちこちで響く歓声。すっかり大人びた旧友たちと写真を撮り合い、学生時代の思い出話に花を咲かせた。「みんな大人になったね」と笑い合いながら、温かい絆を再確認した。",
          "id": "outcome_1"
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "式典の喧騒を離れ、これからの自分の人生の青写真に静かに思いを馳せる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 2,
            "selfKnowledge": 3,
            "stress": -2
          },
          "narrative": "華やかな人混みから少し離れたベンチで、冬の澄んだ空を見上げた。子供時代が完全に終わり、自由と自己責任の世界へ足を踏み入れる。どんな困難があっても自分らしく生きようと静かに決意した。",
          "id": "outcome_2"
        }
      ]
    }
  ],
  "diary": [
    "18歳の成人式。きつく結ばれた帯が、大人になる責任の重さみたいだった。お父さんもお母さんも目を細めて喜んでくれて、ここまで育ててくれた感謝で胸がいっぱいになった。",
    "成人式で昔の友達と大集合！ スーツや振袖でみんな見違えるほど綺麗でカッコよくなっていて、時間が経ったんだなって実感した。すごく楽しかった！",
    "18歳。もう子供じゃないんだ。これからは自分の選択に自分で責任を持つ。不安もあるけれど、それ以上にどんな大人になれるかワクワクしている。"
  ]
});

window.defineEvent({
  "id": "life_menstrual_health",
  "title": "月経と体調の変化",
  "age": [
    18,
    50
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 8,
  "text": "月経に伴う体調の変化が、日々の過ごし方に影響した。",
  "choices": [
    {
      "id": "choice_0",
      "label": "無理せず休む",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "無理せず休む。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "医療機関で相談する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "医療機関で相談する。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 4
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "fixed_milestone_age_20_birthday",
  "title": "二十歳の誕生日・大人の嗜みと解禁された夜",
  "age": [
    20,
    20
  ],
  "trigger": "fixed",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 100,
  "once": true,
  "is_fixed": true,
  "text": "二十歳の誕生日。日付が変わると同時に、法律上のお酒とタバコが正式に解禁される。グラスに注がれた琥珀色の液体。ほんのひと口喉を潤すと、熱い刺激とほろ苦さが胸に染み渡り、法律的にも社会通念的にも『完全な大人』となった自分を実感する。",
  "choices": [
    {
      "id": "choice_0",
      "label": "大切な人とグラスを合わせ、初めてのお酒の味にほんのり頬を染める",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 3,
            "intimacyNeed": 2,
            "communication": 2,
            "bond": {
              "role": "friend",
              "status": "close",
              "metContext": "20歳の誕生日に乾杯した大切な人"
            }
          },
          "narrative": "「20歳のお誕生日おめでとう」と掲げられたグラス。カチンと鳴る澄んだ音とともに、甘いカクテルをひと口含む。喉を滑り落ちる心地よい熱と、じんわりと温まる身体。大人たちの仲間入りをした実感が嬉しかった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "少し背伸びしてバーのカウンターに座り、大人の夜の雰囲気を味わう",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "curiosity": 2,
            "initiative": 2,
            "selfKnowledge": 2,
            "bond": {
              "role": "bar_encounter",
              "status": "acquaintance",
              "metContext": "20歳の夜にバーで出会った人"
            }
          },
          "narrative": "間接照明が灯る落ち着いたバー。マスターに勧められたお酒をゆっくり味わう。タバコの煙の香りや静かなジャズ、グラスを傾ける大人たちの世界に足を踏み入れたスリルに胸が躍った。",
          "id": "outcome_1"
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "お酒や嗜好品に流されず、健康で自立した20代を過ごす誓いを立てる",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 3,
            "morality": 2,
            "boundaryVoice": 2
          },
          "narrative": "20歳になって何でもできる自由を手に入れたからこそ、自制心と健康を大切にしたい。乾杯の一杯を上品に味わった後は、これからの将来に向けた計画をじっくりと考え直した。",
          "id": "outcome_2"
        }
      ]
    }
  ],
  "diary": [
    "今日で20歳！ 初めて飲んだカクテルは、少し苦くて甘くて、喉の奥がぽかぽかした。乾杯してくれた人の笑顔が嬉しくて、忘れられない誕生日になった。",
    "20歳解禁！ バーで頼んだお酒、ちょっと大人になった気分でドキドキした。お酒の席の大人の会話って、学生の頃とは全然違う世界に見える。",
    "二十歳。お酒もタバコも自分の判断で選べる年齢になった。自由には責任が伴うからこそ、自分の身体も心も大事にして、素敵な女性になりたい。"
  ]
});

window.defineEvent({
  "id": "life_menopause_care",
  "title": "更年期の体調",
  "age": [
    42,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 10,
  "text": "睡眠や気分、身体の調子に変化を感じた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "医療機関で相談する",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "医療機関で相談する。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 4
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -3
            },
            {
              "path": "economy.cash",
              "op": "add",
              "value": -20000
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "生活リズムを整える",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "生活リズムを整える。",
          "effects": [
            {
              "path": "trait.constitution.current",
              "op": "add",
              "value": 3
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            }
          ]
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "sexual_menopause",
  "title": "更年期と親密さ",
  "age": [
    42,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [],
  "weight": {
    "base": 15,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "state.current_libido",
          "op": "gte",
          "value": 30
        },
        "factor": 1.5
      }
    ]
  },
  "text": "身体の変化によって、親密さの感じ方にも違いが出てきた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "身体の状態を知る",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "身体の状態を知る。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手と希望を共有する",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "相手と希望を共有する。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "無理せず休む",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "無理せず休む。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "reflection",
    "mutual_talk",
    "boundary"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});

window.defineEvent({
  "id": "sexual_aging",
  "title": "年齢と親密さ",
  "age": [
    45,
    100
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "adult",
  "presets": [
    "partnered"
  ],
  "weight": {
    "base": 16,
    "additive": [],
    "multipliers": [
      {
        "when": {
          "path": "state.current_libido",
          "op": "gte",
          "value": 30
        },
        "factor": 1.5
      }
    ]
  },
  "text": "年齢を重ね、身体や気持ちの変化と親密さについて考えた。",
  "choices": [
    {
      "id": "choice_0",
      "label": "新しい心地よさを探す",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "新しい心地よさを探す。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 3
            },
            {
              "path": "skill.problem_solving",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "相手と話し合う",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "相手と話し合う。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "state.self_efficacy",
              "op": "add",
              "value": 3
            }
          ]
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "今の自分を受け入れる",
      "outcomes": [
        {
          "id": "outcome_2",
          "weight": 1,
          "description": "今の自分を受け入れる。",
          "effects": [
            {
              "path": "state.stress",
              "op": "add",
              "value": -1
            },
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "outcomes": [
    "reflection",
    "mutual_talk",
    "reflection"
  ],
  "sexualEffects": [
    {
      "selfKnowledge": 3,
      "boundaryVoice": 2
    },
    {
      "selfAcceptance": 3
    },
    {
      "selfKnowledge": 2
    }
  ]
});
