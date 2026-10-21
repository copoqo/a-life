// ============================================================================
// Pack: 11_mature_senior_life — 円熟期・中高年・シニア期・老後の振り返り (8 events)
// ============================================================================
window.defineEvent({
  "id": "mature_health_check_lifestyle",
  "title": "人間ドックの結果通知・ウォーキングと減塩の誓い",
  "age": [
    40,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "once": true,
  "text": "40代、50代を迎えて受診した定期健康診断や人間ドック。若い頃とは違う身体の変化や検査数値の推移。これからの人生を長く元気に楽しむために、日々の健康管理と向き合う。",
  "choices": [
    {
      "id": "choice_0",
      "label": "数値を真摯に受け止め、毎日のウォーキングと食生活の改善を徹底する",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 5,
            "independence": 2,
            "knowledge": 2,
            "stress": -2
          },
          "narrative": "郵送されてきた人間ドックの判定。コレステロールや血圧に並ぶ少し気になる数値を見て、生活改善を決意。毎朝の早起きウォーキングと、野菜中心の減塩料理を始めた。数ヶ月後、身体が軽くなり、肌のツヤも良くなって健康のありがたさを実感した。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "無理のない範囲でヨガやストレッチを取り入れ、柔軟な身体を保つ",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "health": 4,
            "aesthetics": 2,
            "stress": -3
          },
          "narrative": "朝晩のストレッチと深呼吸を習慣化。凝り固まった肩や腰がほぐれ、年齢を重ねてもしなやかで元気な身体を維持する自信がついた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "健康診断の結果を見て一念発起、毎朝ウォーキングを始めた。朝日を浴びながら歩くと頭もスッキリして、健康第一の大切さを痛感している。",
    "年齢に応じた身体のケア。無理をせず、自分の身体の声を聞きながら丁寧に暮らしていこうと決めた。"
  ]
});

window.defineEvent({
  "id": "mature_pottery_wheel_focus",
  "title": "静かな陶芸教室・無心になって回すろくろと土の冷たさ",
  "age": [
    45,
    70
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 20,
  "once": true,
  "text": "仕事や生活が落ち着いた年代になり、新しく始めた陶芸教室。木漏れ日が差し込む工房、水と土の匂い。電動ろくろを回しながら、無心になって形を生み出す豊かなひととき。",
  "choices": [
    {
      "id": "choice_0",
      "label": "電動ろくろに向かい、指先の感覚を研ぎ澄ませて端正な湯呑みを形作る",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "aesthetics": 4,
            "stress": -5,
            "happiness": 3,
            "bond": {
              "role": "mentor",
              "status": "acquaintance",
              "metContext": "陶芸教室の先生・仲間"
            }
          },
          "narrative": "ひんやりとした粘土の感触。回転する台の上で、掌の力を微妙にコントロールしながら器の形を整えていく。雑念が消え去り、土と向き合う静かな時間。窯で焼き上がった自分だけの器でお茶を飲むひとときは格別の味わいだった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "手びねりで味のある大皿を作り、手作りの料理を盛り付ける",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "curiosity": 3,
            "happiness": 4,
            "aesthetics": 3
          },
          "narrative": "土をこね、釉薬の色合いを選ぶ楽しさ。少し歪だけれど温かみのある自作の大皿。日々の食卓に自分の手作りの器が並ぶ誇らしさを感じた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "陶芸教室で初めてろくろを回した。土の冷たい感触に集中していると、頭の中のモヤモヤが全部消えていく。焼き上がりが待ち遠しい。",
    "自分で作った湯呑みでお茶を飲んだ。不格好だけど手に馴染んで、何倍も美味しく感じる。素敵な趣味に出会えた。"
  ]
});

window.defineEvent({
  "id": "mature_parent_care_gratitude",
  "title": "親の手を引く通院の道・小さくなった背中と感謝",
  "age": [
    48,
    70
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 22,
  "once": true,
  "text": "年老いた両親の介護や通院の付き添い。かつて自分を慈しみ育ててくれた親の老いを受け止め、寄り添い支える人生の円熟期。手をつないで歩く並木道に、これまでの家族の絆が静かに甦る。",
  "choices": [
    {
      "id": "choice_0",
      "label": "歩調を合わせてゆっくり手を引き、季節の草花を眺めながら歩く",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "morality": 5,
            "communication": 3,
            "selfKnowledge": 3
          },
          "narrative": "高齢になった親の定期通院の付き添い。昔はあんなに大きく見えた親の背中が、今は小さく丸くなっている。しっかりと握り返してくれる骨張った手のひら。子供の頃に手を引いてもらった記憶が重なり、今度は私が支える番なのだと温かい感謝とともに歩いた。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "介護保険や行政サービスを上手に活用し、共倒れにならない環境を整える",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "knowledge": 4,
            "independence": 3,
            "stress": -2
          },
          "narrative": "ケアマネージャーと相談し、デイサービスや福祉用具を導入。無理をしすぎず、お互いに笑顔でいられるバランスを見つけ、心にゆとりを持って介護に向き合えた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "親の手を引いて病院へ行った。小さくなった手を握りながら、昔のことを思い出して涙が出そうになった。ここまで生きていてくれてありがとう。",
    "親の介護。大変なこともあるけれど、今こうして恩返しができる時間があることに感謝したい。"
  ]
});

window.defineEvent({
  "id": "senior_grandchild_summer_visit",
  "title": "孫たちの夏休み・縁側のスイカと賑やかな笑い声",
  "age": [
    58,
    85
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [
    "has_children"
  ],
  "weight": 24,
  "once": true,
  "text": "夏休み、久しぶりに実家へ遊びにやってきた孫たち。静かだった家の中に響き渡る元気な足音と明るい声。縁側に差し込む夏の光の中で、世代を超えた家族の絆が輝く。",
  "choices": [
    {
      "id": "choice_0",
      "label": "冷たいスイカを切り分け、庭でプール遊びをする孫たちに目を細める",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 6,
            "stress": -4,
            "morality": 3
          },
          "narrative": "「おばあちゃん！」と元気に玄関から飛び込んできた小さな孫たち。リビングに散らかるおもちゃ、縁側で頬張る甘いスイカ。賑やかな笑い声に包まれながら、命がこうして次の世代へと受け継がれていく奇跡に胸が熱くなった。",
          "id": "outcome_0"
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "昔ながらのお手玉や折り紙を教え、温かい世代間の交流を楽しむ",
      "outcomes": [
        {
          "weight": 1,
          "effects": {
            "happiness": 5,
            "communication": 3,
            "selfKnowledge": 2
          },
          "narrative": "小さな指先に折り紙の折り方を教えてあげると、目を輝かせて喜んでくれた。抱きつかれた時の小さくて柔らかな体温に、生きている喜びを深く噛み締めた。",
          "id": "outcome_1"
        }
      ]
    }
  ],
  "diary": [
    "孫たちが遊びに来てくれた！ 家の中が一気にお祭りみたいに賑やかになって、本当に可愛くて幸せだった。元気に育ってほしい。",
    "孫の寝顔を見ながら、命の繋がりって本当に尊いものだなと思った。長生きしてよかったと心から思えた一日。"
  ]
});

window.defineEvent({
  "id": "older_new_hobby",
  "title": "新しい学びの喜び",
  "age": [
    60,
    105
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 14,
  "text": "年齢を重ねた今だからこそ、始めたいことが見つかった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "学び始める",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "学び始める。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "仲間を探す",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "仲間を探す。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.mood",
              "op": "add",
              "value": 3
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "club_mate",
                "status": "close",
                "metContext": "シニア期の学びを通じて出会った仲間"
              }
            }
          ]
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "retirement",
  "title": "老後の暮らし",
  "age": [
    65,
    65
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 100,
  "once": true,
  "text": "これからの時間の使い方を考える節目になった。",
  "choices": [
    {
      "id": "choice_0",
      "label": "地域や趣味の活動を始める",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "地域や趣味の活動を始める。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 7
            },
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 5
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "neighbor",
                "status": "close",
                "metContext": "退職後の地域・趣味活動の仲間"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "静かな暮らしを楽しむ",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "静かな暮らしを楽しむ。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -5
            }
          ]
        }
      ]
    }
  ]
});

window.defineEvent({
  "id": "older_life_review",
  "title": "昔の日記を読み返す",
  "age": [
    65,
    110
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 12,
  "text": "若い頃の自分が書いた言葉を読み返した。",
  "choices": [
    {
      "id": "choice_0",
      "label": "変わったことを考える",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "変わったことを考える。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "変わらない思いを大切にする",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "変わらない思いを大切にする。",
          "effects": [
            {
              "path": "state.mood",
              "op": "add",
              "value": 4
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
  "id": "older_support_network",
  "title": "頼れる人とのつながり",
  "age": [
    65,
    110
  ],
  "trigger": "normal",
  "classification": "daily",
  "content_rating": "general",
  "presets": [],
  "weight": 10,
  "text": "困ったときに頼れる人や制度を整理した。",
  "choices": [
    {
      "id": "choice_0",
      "label": "周囲とのつながりを深める",
      "outcomes": [
        {
          "id": "outcome_0",
          "weight": 1,
          "description": "周囲とのつながりを深める。",
          "effects": [
            {
              "path": "skill.communication_skill",
              "op": "add",
              "value": 5
            },
            {
              "path": "state.stress",
              "op": "add",
              "value": -2
            },
            {
              "path": "bond",
              "op": "set",
              "value": {
                "role": "neighbor",
                "status": "close",
                "metContext": "老後に支え合う地域の友人"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "公的な支援を調べる",
      "outcomes": [
        {
          "id": "outcome_1",
          "weight": 1,
          "description": "公的な支援を調べる。",
          "effects": [
            {
              "path": "skill.knowledge",
              "op": "add",
              "value": 4
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
