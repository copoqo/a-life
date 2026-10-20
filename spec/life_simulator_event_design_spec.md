# 女性の人生シミュレータ — イベント設計・判定エンジン実装仕様書

- 文書バージョン: 1.0
- 対象: オフライン、月次進行、手動／自動選択対応の人生シミュレータ
- 依存文書: `life_simulator_parameter_spec.md` v1.2（既存の人物・属性・表示指標・内部パラメータを正とする）
- ステータス: 実装用基本仕様。明記した初期係数はゲームバランス調整対象

## 1. 目的と原則

イベントを大量にデータ追加できるよう、イベント内容を示す**カテゴリ**と、発生を判定する**条件**を区別する。`飲酒` はカテゴリ、`学生` は就業状態、`性経験なし` は履歴属性、`パートナーあり` は関係条件、`モラルが低い` は将来追加する内部特性の条件であり、同一の「イベント属性タグ」として判定しない。

1. イベントは「発生条件 → 重み計算 → 抽選 → 登場人物の束縛 → 選択肢の可否 → 手動／自動選択 → 結果分岐 → 原子的更新」の順で処理する。
2. 発生条件は**絶対に必要な条件**に限定する。好みや社交性などの程度は原則として発生重み／自動選択の効用に用いる。
3. 表示指標8個は読み取り専用の派生値。イベント効果で直接書き換えない。
4. 選択肢が選べることと、人物が選びやすいことを区別する。手動モードで性格による不必要な選択肢隠しを行わない。
5. データDSLはホワイトリスト型とし、任意の式評価・スクリプト実行・動的パス指定を禁止する。
6. イベント抽選・結果抽選は保存された乱数状態で再現できる。
7. 成人向けの性的嗜好を使うイベントは関係者全員18歳以上かつ相互同意を満たす。未成年のイベントでは性的嗜好・成人向け行為を扱わない。未成年飲酒のような非性的な違反行為は別のイベントとして扱える。

## 2. イベントデータの階層

| 項目 | 役割 | 判定に使用するか |
|---|---|---|
| `id`, `title`, `description` | 識別子と表示文 | IDのみ履歴で参照 |
| `categories` | 編集・検索・イベント密度調整 | カテゴリ別出現枠のみ |
| `actors` | 登場人物の役割と候補選出 | はい |
| `conditions` | 発生のハード条件 | はい |
| `weight` | 条件成立後の相対的な出現頻度 | はい |
| `availability` | 再発制御、クールダウン | はい |
| `choices` | 選択肢ごとの表示条件、効用、結果 | はい |
| `outcomes` | 条件・確率で分かれる結果 | はい |
| `effects` | 人物・属性・関係・履歴の更新 | はい |

イベントの「タグ」は検索・作者向けの補助情報として `tags` に自由文字列で保持できるが、発生条件に**暗黙に変換しない**。条件の意味は必ず `conditions` で明示する。

## 3. カテゴリ辞書（初版）

`social` 交友、`romance` 恋愛、`family` 家族、`education` 学業、`career` 仕事、`finance` 経済、`health` 健康、`daily_life` 日常、`alcohol` 飲酒、`leisure` 娯楽、`sexuality` 性と親密性（成人向けは別条件）、`community` 地域、`random` 偶発事象。

- `categories` は1〜3個の配列。`primary_category` はその先頭とする。
- カテゴリだけでは年齢、合法性、職業、性経験、相手の有無を制限しない。
- カテゴリ別出現枠はゲーム設定で変更可能。例: パートナー不在で49歳頃までは `romance` の候補重みを上げる。ただし発生条件を満たさないイベントは復活させない。
- `sexuality` カテゴリであっても、単なる性教育・自己理解イベントと成人向けの行為イベントは `content_rating` で区別する。

## 4. 参照パスと型

既存仕様の正規データを参照する。イベントDSLで使用する代表パスは以下。全パスは型付きレジストリに登録する。

| パス | 型 | 備考 |
|---|---|---|
| `person.age_months` | integer | 正規値。年齢比較は月単位 |
| `person.alive` | boolean | 生存状態 |
| `person.identity.sexual_orientation` | enum | `heterosexual`, `homosexual`, `bisexual`, `asexual`, `other`, `questioning`, `unknown` |
| `person.experience.has_sexual_experience` | boolean | 性経験履歴 |
| `person.career.employment_status` | enum | `preschool`, `student`, `unemployed`, `employed`, `self_employed`, `homemaker`, `retired` |
| `person.career.occupation_id` | string/null | 職業マスタID |
| `person.family.partner_id` | string/null | 現在のパートナー |
| `person.family.relationship_status` | enum | `single`, `dating`, `cohabiting`, `partnered` |
| `person.family.marital_status` | enum | `never_married`, `married`, `divorced`, `widowed` |
| `person.family.children_ids` | array | 子供のID配列 |
| `person.economy.cash` | integer | 円 |
| `person.economy.monthly_income` | integer | 円／月 |
| `person.residence.district_id` | string/null | 街区マスタ参照 |
| `derived.residence.area_type` | enum | 街区マスタから導出 |
| `derived.age_years` | integer | 表示・簡易条件用 |
| `derived.has_partner` | boolean | ID有効かつ関係有効 |
| `derived.has_children` | boolean | 子供配列が空でない |
| `derived.partner_gender_relation` | enum | `same`, `different`, `other`, `unknown`, `none` |
| `derived.friend_count` | integer | 関係データから算出 |
| `derived.net_worth` | integer | 円 |
| `display.health`, `display.finances`, `display.intellect`, `display.sociability` | integer | `[-50,50]` |
| `display.attractiveness`, `display.confidence`, `display.happiness`, `display.sexual_desire` | integer | `[-50,50]` |
| `trait.<registered_id>` | integer | 既存仕様の先天特性。例 `baseline_libido`, `sexual_interest`, `baseline_modesty`, `masochistic_preference`, `sadistic_preference` |
| `skill.<registered_id>` | integer | 既存仕様の後天能力 |
| `state.<registered_id>` | integer | 既存仕様の状態。例 `stress`, `current_libido`, `current_embarrassment` |
| `history.event_counts.<event_id>` | integer | 過去の発生回数 |
| `history.choice_counts.<event_id>.<choice_id>` | integer | 過去の選択回数 |
| `context.<declared_role>.<registered_field>` | typed | 束縛済み登場人物の値 |

`person` は主人公を指す。`context.partner` のようなロール参照は `actors` で宣言された場合のみ有効。パス中の `*`、添字式、任意キーアクセスは禁止。配列は `count`、`contains` 等の型付き演算で参照する。

### 4.1 性別とパートナーの関係

「異性のパートナーあり／同性のパートナーあり」は保存フラグにしない。本人・相手の性別属性から `derived.partner_gender_relation` を導出する。性別属性は人物マスタに別途必要なため、既存パラメータ仕様への**追加依存**として `identity.gender` を定義する（初版: `female | male | nonbinary | unknown`）。

- `same`: 双方が `female` または双方が `male`、もしくは双方が `nonbinary` と明示される場合。
- `different`: 双方が `female/male` の組み合わせで異なる場合。
- `other`: 双方が既知だが上記以外の組み合わせ。
- `unknown`: いずれかの性別が不明。
- `none`: 有効なパートナーがいない。

性的指向はパートナーの性別比較には使わない。性的指向のみから特定人物への好意や同意を推定しない。

### 4.2 「モラル低」の扱い

既存の32個の内部パラメータには一般的な道徳性・規範遵守を直接表す値がない。**初版では未定義の `morality` を勝手に参照しない**。飲酒の違法性を扱う場合は年齢と選択肢の効用・結果で実装できる。規範遵守傾向が多数のイベントで必要になった段階で、別途 `trait.norm_compliance` を追加し、パラメータ仕様・初期生成・保存形式を同時改訂する。

## 5. 条件DSL

```json
{"all":[
  {"path":"person.age_months","op":"between","value":[180,360]},
  {"any":[
    {"path":"person.career.employment_status","op":"eq","value":"student"},
    {"path":"person.career.employment_status","op":"eq","value":"unemployed"}
  ]},
  {"not":{"path":"derived.has_partner","op":"eq","value":true}}
]}
```

構文は `all: Condition[]`、`any: Condition[]`、`not: Condition`、または葉 `{path, op, value?}`。`all` の空配列は真、`any` の空配列は偽とする。ただし作者の誤りを避けるため、定義ファイルでは空 `all/any` を警告する。

| 演算子 | 適用型 | 意味 |
|---|---|---|
| `eq`, `ne` | スカラー、enum、boolean | 等価／非等価 |
| `gt`, `gte`, `lt`, `lte` | 数値 | 大小比較 |
| `between` | 数値 | `[min,max]` 両端含む |
| `in`, `not_in` | スカラー、enum | 候補値集合への包含 |
| `exists`, `not_exists` | nullable、role | 有効な値／登場人物の有無 |
| `contains` | 配列 | 指定値を含む |
| `count_gte`, `count_lte` | 配列 | 要素数の比較 |

- パス未登録、型不一致、無効なenum、`between` の上下逆転はロード時エラー。
- `null` は明示的な値。`exists` は `null` を偽とする。欠損した登録済み必須フィールドは**ロードエラー**であり `null` と同一視しない。
- 条件評価は副作用なし。条件内で乱数を使わない。
- すべての比較は保存前のイベント開始時スナップショットに対して行う。
- パートナー等の存在はIDだけでなく参照整合性と関係状態を検証する。参照先が消滅した場合はイベント候補にしない。

## 6. 登場人物（actors）

```json
"actors": {
  "partner": {"source":"current_partner","required":true},
  "friend": {"source":"friend","required":false,"filters":{"all":[{"path":"actor.alive","op":"eq","value":true}]}}
}
```

初版の `source`: `current_partner`, `friend`, `coworker`, `acquaintance`, `random_adult`。登場人物候補はID昇順で列挙し、適格者から保存済み乱数で1人選ぶ。`required=true` で候補なしならイベント不適格。`required=false` で候補なしなら `null` に束縛し、参照時は `exists` でガードする。`actor.*` は候補フィルタ内だけの予約名前空間。

同じ人物を2ロールに束縛することは初版では禁止。本文には `{partner.name}` のような宣言済みロールの限定プレースホルダだけを許可し、未束縛ロールを参照する本文・選択肢はロード時エラーにする。

## 7. 発生重みとイベント抽選

### 7.1 重み定義

```json
"weight": {
  "base": 10,
  "additive": [{"path":"display.sociability","coefficient":0.01}],
  "multipliers": [
    {"when":{"path":"derived.residence.area_type","op":"eq","value":"entertainment"},"factor":1.3}
  ]
}
```

`W = max(0, base * max(0, 1 + Σ coefficient_i × value_i) * Π factor_j)`。`base >= 0`、`factor >= 0`、係数は有限数。倍率は条件成立時のみ適用。カテゴリ別密度補正は最後に乗算する。抽選に使うのは確率ではなく**相対重み**。

### 7.2 1か月の抽選手順

1. 月初の更新済みスナップショットから全イベントを列挙。
2. `enabled`、`conditions`、`availability`、必須 `actors` を判定。
3. 各イベントの重みを計算し、重み0を除外。
4. `max_events_per_month`（初期値1）枠ごとに重み比例抽選する。何も起こらない可能性を設けるため、仮想候補 `no_event` を重み `no_event_weight`（初期値10）で加える。
5. 選ばれたイベントの登場人物を束縛し、選択肢をフィルタする。選択可能な選択肢が0なら警告を記録し、**その枠は `no_event` として消費**する（再抽選による偏りを防ぐ）。
6. 手動／自動で選択し、結果・効果を確定。次枠があれば**更新後のスナップショット**で候補を再構築する。
7. 同じイベントは同月内に二度発生させない。月次定期処理との順序は既存仕様に合わせ、二重更新しない。

`no_event_weight` は難易度・イベント密度設定に置く。`max_events_per_month` は1以上の整数。候補0件なら何も起こらない。ランダム選択は重み合計に対する一様乱数1回を用い、ID昇順の累積区間で決定する。

### 7.3 再発制御

```json
"availability": {
  "once_per_life": false,
  "cooldown_months": 12,
  "max_occurrences": 3,
  "unique_key": "social_drinking_invitation"
}
```

- `once_per_life=true` は1回のみ。`max_occurrences` と併用する場合は実効上限1。
- `cooldown_months=12` は前回発生月から12か月経過するまで不適格（前回月 `m` なら次回最短 `m+12`）。
- `unique_key` は相互排他イベント群に利用。省略時はイベントID。履歴は発生時点で記録し、選択肢や結果は別に記録する。
- イベント発生と選択結果は異なる履歴キー。失敗結果でも発生回数は増える。

## 8. 選択肢と自動選択

各選択肢は `id`, `label`, `requirements`, `utility`, `outcomes` を持つ。`requirements` は表示・選択の**ハード条件**。`utility` は自動選択の確率にだけ使う。

```json
"utility": {
  "base": 0.0,
  "terms": [
    {"path":"display.confidence","coefficient":0.02},
    {"path":"state.stress","coefficient":-0.01}
  ],
  "conditional_terms": [
    {"when":{"path":"derived.has_partner","op":"eq","value":true},"bonus":0.5}
  ]
}
```

`U_i = base_i + Σ(coefficient × value) + Σ(成立時bonus)`。適格な選択肢について `P(i)=exp((U_i-Umax)/T)/Σexp((U_j-Umax)/T)`、初期 `T=1.0`。`T>0`。1択なら必ずその選択肢。手動モードは `utility` を無視する。

- プレイヤーが無効な選択肢IDを送信した場合は拒否し、状態は変更しない。
- 選択肢は少なくとも1個定義する。イベントが発生し得る条件の下で常に0択になる設計は静的検査またはシミュレーションで検出する。
- 行動と人格変化を直結しすぎない。先天特性への効果は小さく、状態・経験・関係への効果を主とする。

## 9. 結果分岐と効果

```json
"outcomes": [
  {"id":"success","weight":3,"effects":[{"path":"state.stress","op":"add","value":-2}]},
  {"id":"awkward","weight":1,"effects":[{"path":"state.stress","op":"add","value":2}]}
]
```

- `outcomes` は最低1個。適格結果の `weight` は0以上、合計は正。結果は選択後に重み比例抽選。
- 結果ごとの `conditions` を任意で設定可能。条件は選択直前の同一スナップショットで判定する。結果が0件ならトランザクションを開始せずエラー。
- 効果は型付きレジストリで許可したパスのみ。初版の操作は `add`（数値）、`set`（enum・boolean・数値・文字列）、`append_unique`（ID配列）、`remove`（ID配列）、`relationship_delta`（関係スコア）、`record_flag`（履歴）とする。
- `display.*`、`derived.*`、先天特性の `center/min/max`、`age_years` は書き込み禁止。
- `trait.*.current` の更新は先天範囲 `[center-50,center+50]` にクランプ。状態は既存仕様の型別範囲にクランプ。
- 経済効果は `economy.cash` 等への直接 `set` を禁止し、`money_transfer` / `adjust_income` 等の経済API経由で適用する。現金不足は既存の負債ルールに従う。
- パートナー・婚姻・子供・居住地・性経験などは専用の属性更新APIを使用。ID整合性と不可逆フラグを検証する。
- 全効果は**更新前スナップショット**で計算し、同一パスの `add` は合算。`set` と `add` の同時指定、同一パスの異なる `set` は定義エラー。
- 効果適用 → 検証 → 表示値再計算 → 履歴追加 → RNG状態保存を**1トランザクション**としてコミット。途中失敗は全ロールバック。

## 10. 性・恋愛イベントの追加ルール

- `content_rating`: `general` または `adult`。`adult` は主人公と関係する全登場人物が18歳以上の場合のみ発生可能。判定は `age_months >= 216`。
- 成人向けの行為選択肢は、関係者の明示的同意・拒否可能性・イベント固有の許容条件を満たすこと。パラメータ値が高いだけで同意したものとみなさない。
- `trait.baseline_libido`, `trait.sexual_interest` は動機・頻度の補正に使える。`trait.masochistic_preference`, `trait.sadistic_preference`, `trait.baseline_modesty`, `state.current_embarrassment` は成人向けの選好・反応にのみ使用する。
- `person.experience.has_sexual_experience=false` は「未経験」を意味し、価値評価ではない。経験後にtrueにする効果は専用APIのみ。trueからfalseへの変更は禁止。
- `derived.partner_gender_relation` は同性・異性等の関係イベントの条件に使えるが、性的指向や同意の代用にしない。
- 未成年に対しては、交際、告白、境界線、性教育等の非露骨なイベントは別定義で扱う。成人向けの嗜好判定を適用しない。

## 11. 具体的なイベント定義例

### 11.1 友人から飲酒に誘われる（年齢による結果差）

```json
{
  "schema_version": 1,
  "id": "friend_drink_invitation",
  "title": "友人から飲酒に誘われる",
  "description": "友人から飲み会に誘われた。",
  "categories": ["social", "alcohol"],
  "content_rating": "general",
  "enabled": true,
  "actors": {"friend": {"source": "friend", "required": true}},
  "conditions": {"all": [
    {"path": "person.alive", "op": "eq", "value": true},
    {"path": "person.age_months", "op": "between", "value": [180, 480]}
  ]},
  "weight": {
    "base": 10,
    "additive": [{"path": "display.sociability", "coefficient": 0.01}],
    "multipliers": [{"when": {"path": "derived.residence.area_type", "op": "eq", "value": "entertainment"}, "factor": 1.3}]
  },
  "availability": {"once_per_life": false, "cooldown_months": 12, "max_occurrences": 99},
  "choices": [
    {
      "id": "drink",
      "label": "お酒を飲む",
      "requirements": {"all": []},
      "utility": {"base": -0.2, "terms": [{"path": "display.sociability", "coefficient": 0.015}]},
      "outcomes": [
        {"id": "adult_drink", "conditions": {"path": "person.age_months", "op": "gte", "value": 240}, "weight": 1, "effects": [{"path": "state.stress", "op": "add", "value": -1}]},
        {"id": "underage_drink", "conditions": {"path": "person.age_months", "op": "lt", "value": 240}, "weight": 1, "effects": [{"path": "state.stress", "op": "add", "value": 2}, {"path": "history.flags.underage_drinking_experience", "op": "record_flag", "value": true}]}
      ]
    },
    {
      "id": "decline",
      "label": "断る",
      "requirements": {"all": []},
      "utility": {"base": 0.2, "terms": []},
      "outcomes": [{"id": "declined", "weight": 1, "effects": []}]
    },
    {
      "id": "soft_drink",
      "label": "飲み会には参加してソフトドリンクを頼む",
      "requirements": {"all": []},
      "utility": {"base": 0.3, "terms": [{"path": "display.sociability", "coefficient": 0.01}]},
      "outcomes": [{"id": "socialized", "weight": 1, "effects": [{"path": "state.stress", "op": "add", "value": -1}]}]
    }
  ]
}
```

注: 日本の飲酒可能年齢20歳をゲームの地域設定として仮定した例。法律・舞台が異なる場合は年齢閾値を設定データ化する。上の `history.flags.*` はイベント専用に登録された書込先とする。未成年飲酒を推奨する意図ではなく、選択と結果を扱う例である。

### 11.2 パートナーと将来を話す

```json
{
  "schema_version": 1,
  "id": "partner_future_talk",
  "title": "パートナーと将来について話す",
  "description": "{partner.name}から将来の暮らしについて話を切り出された。",
  "categories": ["romance", "family"],
  "content_rating": "general",
  "enabled": true,
  "actors": {"partner": {"source": "current_partner", "required": true}},
  "conditions": {"all": [
    {"path": "person.alive", "op": "eq", "value": true},
    {"path": "derived.has_partner", "op": "eq", "value": true},
    {"path": "person.age_months", "op": "gte", "value": 216}
  ]},
  "weight": {"base": 8, "additive": [], "multipliers": []},
  "availability": {"once_per_life": false, "cooldown_months": 24, "max_occurrences": 99},
  "choices": [
    {"id": "discuss", "label": "じっくり話し合う", "requirements": {"all": []}, "utility": {"base": 0.5, "terms": [{"path": "display.confidence", "coefficient": 0.01}]}, "outcomes": [{"id": "talked", "weight": 1, "effects": [{"path": "state.stress", "op": "add", "value": -1}]}]},
    {"id": "postpone", "label": "今は話を先延ばしにする", "requirements": {"all": []}, "utility": {"base": 0, "terms": [{"path": "state.stress", "coefficient": 0.02}]}, "outcomes": [{"id": "postponed", "weight": 1, "effects": []}]}
  ]
}
```

### 11.3 条件の追加パターン（抜粋）

| 用途 | `conditions` の葉 |
|---|---|
| 学生のみ | `person.career.employment_status eq student` |
| 無職のみ | `person.career.employment_status eq unemployed` |
| 性経験なし | `person.experience.has_sexual_experience eq false` |
| パートナーあり | `derived.has_partner eq true` |
| 同性のパートナーあり | `derived.partner_gender_relation eq same` |
| 異性のパートナーあり | `derived.partner_gender_relation eq different` |
| 子供なし | `derived.has_children eq false` |
| 繁華街 | `derived.residence.area_type eq entertainment` |
| 経済力が低い | `display.finances lte -20`（原則は重み補正も検討） |
| 羞恥心が高い | `trait.baseline_modesty gte 30`（成人向け選好用途に限定） |

## 12. スキーマと検証

### 12.1 トップレベル必須フィールド

`schema_version` (integer=1), `id` (ASCII snake_case、一意), `title` (1〜100文字), `description` (文字列), `categories` (1〜3個), `content_rating` (`general|adult`), `enabled` (boolean), `actors` (object、空可), `conditions` (Condition), `weight` (object), `availability` (object), `choices` (非空配列)。`tags` は任意。

### 12.2 ロード時バリデーション

- JSON構文・型・必須項目・重複ID・カテゴリ辞書・enumを検証。
- すべてのパスと演算子の組み合わせを型レジストリに照合。
- `context` 参照は宣言済みロールだけ。`adult` イベントは成人条件が構造的に保証されていること（年齢条件と必須登場人物の成人条件）を検証。
- 結果の重み合計が成立し得ること、全選択肢の結果定義が非空であることを検証。
- 効果対象の可変性・許可操作・相互矛盾を検証。
- 未知フィールドは黙って無視せずエラー。拡張は `schema_version` を上げる。

### 12.3 実行時の不変条件

- 不適格イベントは発生しない。条件に合わない選択肢は提示しない。
- 自動選択確率は非負で総和1（浮動小数誤差許容）。
- 登場人物が必要なイベントは実在する人物にのみ束縛する。
- 更新失敗時、人物・履歴・乱数状態のいずれも変更されない。
- 同じセーブ状態・同じ入力・同じ乱数状態なら同じ結果になる。

## 13. 実装APIと擬似コード

```text
validateEventDefinition(definition, registry) -> ValidationResult
resolveActors(event, world, rng) -> ActorBindings | NotEligible
evaluateCondition(condition, snapshot, bindings) -> boolean
computeEventWeight(event, snapshot, bindings, config) -> float
listEligibleEvents(world, config) -> WeightedEvent[]
drawEvent(eligible, noEventWeight, rng) -> Event | null
listAvailableChoices(event, snapshot, bindings) -> Choice[]
selectChoiceManual(choiceId, availableChoices) -> Choice | Error
selectChoiceAuto(availableChoices, snapshot, config.temperature, rng) -> Choice
selectOutcome(choice, snapshot, rng) -> Outcome
applyEventTransaction(world, event, bindings, choice, outcome, rngState) -> World
```

```pseudo
function runEventSlot(world, mode, manualChoiceId?, rng):
    snapshot = immutableSnapshot(world)
    candidates = listEligibleEvents(snapshot, config)
    event = drawEvent(candidates, config.no_event_weight, rng)
    if event == null: return commitNoEvent(world, rng)
    bindings = resolveActors(event, snapshot, rng)
    if bindings == NotEligible: return logAndConsumeSlot(world, rng)
    choices = listAvailableChoices(event, snapshot, bindings)
    if choices.empty: return logAndConsumeSlot(world, rng)
    if mode == MANUAL:
        return PendingChoice(event.id, bindings, choices, snapshot.version, rng.state)
    choice = selectChoiceAuto(choices, snapshot, config.temperature, rng)
    outcome = selectOutcome(choice, snapshot, rng)
    return applyEventTransaction(world, event, bindings, choice, outcome, rng.state)

function submitManualChoice(pending, choiceId, world):
    assert world.version == pending.snapshotVersion
    assert choiceId in pending.availableChoiceIds
    rng = restore(pending.rngState)
    outcome = selectOutcome(choiceId, immutableSnapshot(world), rng)
    return applyEventTransaction(world, pending.eventId, pending.bindings,
                                 choiceId, outcome, rng.state)
```

手動モードでは抽選したイベントと選択可能IDを保留状態として保存する。途中でゲームをロードしても同じ選択肢が提示される。二重送信は `pending_id` と `world.version` で拒否する。

## 14. テスト計画（最低限）

| ID | テスト | 期待結果 |
|---|---|---|
| E01 | 学生限定イベントに無職人物 | 不適格 |
| E02 | 学生または無職のOR条件 | どちらも適格 |
| E03 | パートナー不在で `partner_future_talk` | 不適格 |
| E04 | 同性／異性パートナーの導出 | 人物の性別と関係状態から正しく算出 |
| E05 | 性的指向だけ異なる2人 | パートナー性別比較の結果は変わらない |
| E06 | 性経験なし条件 | falseのみ適格、trueは不適格 |
| E07 | 発生条件真、重み0 | 抽選候補から除外 |
| E08 | 魅力が低い人物でもハード条件を満たす出会いイベント | 重みが正なら発生可能 |
| E09 | クールダウン12か月 | 11か月後は不可、12か月後は可 |
| E10 | `once_per_life` | 2回目は不適格 |
| E11 | 0択イベント | スキップ・警告・再抽選なし |
| E12 | 1択イベント | 自動選択確率1 |
| E13 | 自動選択の乱数再現 | 同じシードで同じ結果 |
| E14 | 手動選択で効用が低い選択肢を選ぶ | 条件が真なら選択可能 |
| E15 | 先天特性の上限を超える効果 | 個人上限にクランプ |
| E16 | 表示指標への直接 `add` | ロード時エラー |
| E17 | 更新途中で不正な相手ID | 全ロールバック |
| E18 | `adult` イベントで未成年が含まれる | 発生不可 |
| E19 | 性的嗜好が高くても相互同意がない | 対応する行為選択肢は不可 |
| E20 | 街区が `entertainment` | 指定イベントのみ倍率適用 |
| E21 | 手動保留中のセーブ・ロード | 同じイベント・選択肢・乱数状態 |
| E22 | 重みの相対頻度テスト（大量試行） | 設定した比率に統計的に近づく |
| E23 | 未登録パス `trait.morality` | ロード時エラー |
| E24 | 月内2イベント | 1件目の結果を2件目の条件に反映 |

## 15. 実装順序

1. **辞書と型付きパスレジストリ**: 既存仕様の人物・街区・関係データを読み込む。
2. **条件DSLとバリデータ**: AND/OR/NOT、型検証、欠損エラー。
3. **イベント候補と重み抽選**: `no_event`、再発制御、カテゴリ倍率。
4. **登場人物の束縛**: パートナー、友人、関係IDの検証。
5. **選択肢フィルタ・手動保留・自動Softmax**。
6. **結果抽選と原子的効果更新**: 表示値再計算、履歴、RNG保存。
7. **サンプルイベントと自動テスト**。
8. **バランス調整**: 年齢・関係・街区別の発生密度と選択率を検証。

## 16. 未確定・拡張候補

- `identity.gender` は本仕様で新規に要求する属性。既存人物データに存在しなければ、人物モデルに追加する。
- 「モラル低」を人格条件にするなら `norm_compliance` の新設が必要。初版には含めない。
- 地域ごとの飲酒可能年齢・婚姻制度などは将来 `world_rules` に外出しする。初版のサンプルは日本設定。
- 恋愛関心、結婚願望、個別の好意、信頼、同意状態は表示8指標と独立した関係・状態モデルで保持する。現行人物仕様にない値を参照するイベントは、該当モデルの追加後に有効化する。
- 特定カテゴリの年齢別発生密度、季節、職業別のイベント枠は調整データで実装する。イベントの発生条件にハードコードしない。
- 旧セーブとの互換・移行は現段階では要求しない。スキーマ更新時は開発中の旧データを破棄できる。

---

**実装上の判断基準**: 新しいイベントを追加するとき、まず既存の条件DSLと型付きパスだけで表現する。表現できない場合に限り、汎用演算子または人物属性を追加する。イベントごとの専用フラグやハードコードを増やさない。
