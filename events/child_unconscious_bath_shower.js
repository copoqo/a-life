(window.eventDefs = window.eventDefs || []).push({
  "id": "child_unconscious_bath_shower",
  "title": "幼い日の無意識・お風呂場のシャワーと水圧",
  "description": "一人で入るようになったお風呂場。湯気で白く霞む中、何気なく股の間に向けたシャワーヘッド。勢いよく噴き出す熱いお湯の束が、太ももの付け根の小さな豆粒のような突起に直撃した瞬間、ビクンと背筋が跳ね上がり、身体中の力が抜けてその場にへたり込んでしまう。頭がふわふわと白くなる不思議な感覚に、胸が早鐘を打つ……。",
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
          72,
          143
        ]
      }
    ]
  },
  "weight": {
    "base": 22,
    "additive": [],
    "multipliers": []
  },
  "availability": {
    "once_per_life": false,
    "cooldown_months": 12,
    "max_occurrences": 99,
    "unique_key": "child_unconscious_bath_shower"
  },
  "choices": [
    {
      "id": "choice_0",
      "label": "小さな突起にお湯の束を当て続けて腰を浮かす",
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
          "description": "水圧の強さを上げ、小さな突起にお湯の束を当て続けて腰を浮かす。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_1",
      "label": "指先につくぬめりに戸惑う",
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
          "description": "お湯に打たれながら指先でそっと触れてみて、指先につくぬめりに戸惑う。",
          "effects": []
        }
      ]
    },
    {
      "id": "choice_2",
      "label": "急いでシャワーを止める",
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
          "description": "身体が変になってしまいそうな怖さに怯え、急いでシャワーを止める。",
          "effects": [
            {
              "path": "skill.morality",
              "op": "add",
              "value": 2
            }
          ]
        }
      ]
    }
  ],
  "min": 6,
  "max": 11,
  "p": 0.22,
  "text": "一人で入るようになったお風呂場。湯気で白く霞む中、何気なく股の間に向けたシャワーヘッド。勢いよく噴き出す熱いお湯の束が、太ももの付け根の小さな豆粒のような突起に直撃した瞬間、ビクンと背筋が跳ね上がり、身体中の力が抜けてその場にへたり込んでしまう。頭がふわふわと白くなる不思議な感覚に、胸が早鐘を打つ……。",
  "diary": [
    "お風呂でシャワーのお湯を当てたら、お腹の底から電気が走ったみたいになって立てなくなった。びっくりしたけれど、なんだか気持ちよかった。",
    "お湯があたった場所を指でさわってみると、ぬるぬるしたものがついていて不思議だった。自分の身体なのに、知らない秘密ができた気がした。",
    "急に頭が真っ白になって怖くなって、慌てて蛇口を閉めた。お湯から上がった後も、太ももの間がずっとぽかぽかして落ち着かなかった。"
  ],
  "outcomes": [
    "reflection",
    "reflection",
    "reflection"
  ],
  "classification": "daily"
});
