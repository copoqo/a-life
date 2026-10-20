# 女性の人生シミュレータ — パラメータ・イベント連携実装仕様書

- 仕様バージョン: 1.2
- 作成日: 2026-10-18
- 状態: 実装用ベースライン（未確定事項は末尾に明記）
- 対象: オフラインのイベント駆動型人生シミュレータ

## 1. 目的と確定事項

本仕様は、プレイヤーがイベントの選択肢を選ぶ場合と、人物が自律的に選ぶ場合の両方で利用するパラメータ系を定義する。人格の精密な再現より、イベント発生・選択肢の可否・自動選択・結果の違いを優先する。

確定事項:
1. 表示パラメータは **健康、経済力、知性、社交性、魅力、自信、幸福度、性的欲求** の8つ。
2. 表示値は整数 `[-50, 50]`、`0` は標準的な基準点。正負は良し悪しではなく、その指標の大小を表す（健康・経済力などは高いほど有利な場面が多い）。
3. 内部人格・先天素質の各値には出生時に固定する幅100の可動域を設ける。例: `[-40, 60]`、`[-70, 30]`。幅は全員共通、位置は人物ごとに異なる。
4. 表示値は内部値・生活属性から再計算する。表示値自体をイベントから直接書き換えない。
5. イベントの手動選択は内部値・状態・属性を更新し、自動選択はそれらを使って選択肢を確率的に選ぶ。
6. 名前、年齢、居住地（街区分類）、職業、パートナー、子供、資産、性的指向、性経験は独立した生活属性として保持する。
7. 街区は6分類（住宅地、商業地域、繁華街、農漁村、高所得地域、低所得地域）で管理する。
8. 性的な長期特性は基礎性欲・性への関心・被虐志向・嗜虐志向・基礎羞恥心を独立に保持する。

**設計上の仮定**: 以下の重み、初期分布、イベント補正値はゲームバランスの初期値であり、実証的な心理学モデルを意味しない。データ定義に切り出し、調整可能にする。

## 2. 値の型・正規化・丸め

| 種類 | 範囲 | 備考 |
|---|---|---|
| 表示値 | 整数 `[-50,50]` | UI専用の派生値 |
| 先天的特性（現在値） | 整数 `[-100,100]` | 個人ごとの可動域でさらに制限 |
| 後天的能力 | 整数 `[-100,100]` | 0はゲーム上の年齢別基準。年齢補正を加える場合も最終値を制限 |
| 心理・満足状態 | 整数 `[-100,100]` | 0は基準状態 |
| 疲労、疾病負荷、ストレス、対人不安 | 整数 `[0,100]` | 0は負荷なし、50を中程度の負荷とする |
| 金銭 | 整数（円） | 非負の資産・負債を個別保持。収支は符号付き |
| 確率 | 実数 `[0,1]` | 判定時のみ使用 |

共通関数:

```text
clamp(x, lo, hi) = min(hi, max(lo, x))
roundHalfAwayFromZero(x) = sign(x) * floor(abs(x) + 0.5)
S(x) = clamp(x, -100, 100)
D(x) = clamp(roundHalfAwayFromZero(x), -50, 50)
N(x) = clamp(x / 100, -1, 1)
```

表示値の標準変換は、`[-100,100]` の加重合成値を半分に縮小する。**非負の負荷値は `-負荷` として合成に投入する**。この場合、負荷が0でも加点はなく、負荷が増えるほど減点される。全ての表示式で同じ規約を使う。

`0=平均` はUI上の基準であり、実際の全キャラクターの平均値が厳密に0になる保証ではない。初期生成分布と年齢別基準はバランステストで調整する。

## 3. 先天的特性と出生時生成

先天的特性の内部値 `trait.current` には次の属性を持つ。

```json
{
  "center": 10,
  "min": -40,
  "max": 60,
  "current": 10
}
```

不変条件:

```text
center ∈ [-50,50]
min = center - 50
max = center + 50
max - min = 100
current ∈ [min,max]
```

出生時の標準生成（調整可能）:
- `center = clamp(roundHalfAwayFromZero(normal(0, 20)), -50, 50)`。
- `current = center`。出生後の年齢補正は、先天的特性ではなく派生能力や状態に適用する。
- 乱数は保存可能なシード付きPRNGを使う。シードが同じなら初期生成結果は同じ。
- 先天的中心・上下限は生涯不変。ゲーム内イベントは `current` のみ変える。
- 先天的制限はゲーム上の抽象化であり、実際の生物学的な絶対限界を主張するものではない。

イベントによる先天特性更新:

```text
newCurrent = clamp(oldCurrent + delta, trait.min, trait.max)
```

可塑性や限界付近での減衰は初版では実装しない。必要になった時点で追加する。

## 4. 内部パラメータ辞書

IDは保存データ・イベント定義に用いる安定キー。表の「先天」は上記の幅100制限を適用する。

### 4.1 先天特性（13個）

| ID | 日本語名 | 高値の意味 | 主な用途 |
|---|---|---|---|
| `constitution` | 基礎体力 | 体力の素質が高い | 健康、活動 |
| `cognitive_potential` | 認知能力 | 思考・学習の素質が高い | 知性、学習 |
| `learning_drive` | 学習意欲 | 学習を好む | 知性、進学 |
| `extraversion` | 外向性 | 交流を好む | 社交性、出会い |
| `social_initiative` | 対人積極性 | 自分から話しかける | 社交性、交友 |
| `appearance_potential` | 容姿の素質 | 一般的評価上の容姿が高い | 魅力（好みは別） |
| `self_worth_disposition` | 自己肯定の素質 | 自己評価が安定しやすい | 自信 |
| `baseline_libido` | 基礎性欲 | 基礎的な性的欲求が強い | 性的欲求 |
| `sexual_interest` | 性への関心 | 性への関心が強い | 性的欲求、選択傾向 |
| `masochistic_preference` | 被虐志向 | 同意に基づく受け身の役割への嗜好が強い | 成人向けイベントの選好（非表示） |
| `sadistic_preference` | 嗜虐志向 | 同意に基づく主導的な役割への嗜好が強い | 成人向けイベントの選好（非表示） |
| `baseline_modesty` | 基礎羞恥心 | 性的な話題・自己開示に羞恥を感じやすい | 状況的羞恥の基準（非表示） |
| `risk_tolerance` | リスク許容 | 不確実な行動を受け入れやすい | 自動選択（非表示） |

### 4.2 後天的能力・習慣（6個）

| ID | 日本語名 | 範囲 | 用途 |
|---|---|---|---|
| `healthy_habits` | 生活習慣 | `[-100,100]` | 健康 |
| `knowledge` | 知識・教養 | `[-100,100]` | 知性 |
| `problem_solving` | 問題解決経験 | `[-100,100]` | 知性 |
| `communication_skill` | 会話能力 | `[-100,100]` | 社交性 |
| `grooming` | 身だしなみ | `[-100,100]` | 魅力 |
| `interpersonal_charm` | 対人魅力 | `[-100,100]` | 魅力 |

### 4.3 状態・欲求（13個）

| ID | 日本語名 | 範囲 | 用途 |
|---|---|---|---|
| `illness_burden` | 疾病負荷 | `[0,100]` | 健康 |
| `fatigue` | 疲労 | `[0,100]` | 健康、行動制限 |
| `social_anxiety` | 対人不安 | `[0,100]` | 社交性、自動選択 |
| `self_efficacy` | 自己効力感 | `[-100,100]` | 自信 |
| `social_confidence` | 対人自信 | `[-100,100]` | 自信 |
| `success_memory` | 成功体験の蓄積 | `[-100,100]` | 自信 |
| `life_satisfaction` | 生活満足度 | `[-100,100]` | 幸福度 |
| `relationship_satisfaction` | 人間関係満足度 | `[-100,100]` | 幸福度 |
| `stress` | ストレス | `[0,100]` | 幸福度、欲求 |
| `achievement` | 達成感 | `[-100,100]` | 幸福度 |
| `current_libido` | 現在の性的欲求 | `[-100,100]` | 性的欲求 |
| `current_embarrassment` | 現在の羞恥度 | `[0,100]` | 成人向けイベントの自動選択（非表示） |
| `mood` | 気分 | `[-100,100]` | 自動選択（非表示） |

合計32個。各指標の表示に直接寄与しない `risk_tolerance` と `mood` も、イベントの自動選択を区別するため保持する。

## 5. 8つの表示指標の厳密な計算式

以下では `t.*`=先天特性、`a.*`=後天的能力、`s.*`=状態、`d.*`=算出済み表示値を表す。すべての式は最後に `D(...)` を適用する。健康・経済力を先に計算し、その後に魅力・幸福度を計算する。循環参照は禁止。

### 5.1 健康 `health`

```text
health = D((2*t.constitution + a.healthy_habits
            - 2*s.illness_burden - s.fatigue) / 12)
```

疾病負荷・疲労が0なら減点なし。年齢・疾病・睡眠イベントは内部状態に作用する。

### 5.2 経済力 `finances`

内部の金銭属性（円）:

```text
cash, investments, other_assets, debt >= 0
monthly_income, monthly_expenses >= 0
net_worth = cash + investments + other_assets - debt
monthly_surplus = monthly_income - monthly_expenses
```

経済力は**流動性と収支の余裕**を重視する。住宅等の換金しにくい資産は純資産には含めるが、短期の支払能力とは分離する。

```text
monthly_cost = max(monthly_expenses, 100000)    # 0除算・極小支出の保護（設定値）
liquid_months = (cash + investments * 0.8) / monthly_cost
reserve_score = clamp(20 * log2((liquid_months + 1) / 4), -100, 100)
cashflow_score = clamp(100 * monthly_surplus / monthly_cost, -100, 100)
wealth_score = clamp(15 * log2(max(0, net_worth) / (12 * monthly_cost) + 1), 0, 100)
finances = D((2*reserve_score + 2*cashflow_score + wealth_score) / 10)
```

金額は円単位。`log2` は2を底とする対数。初版の係数は仮値であり、経済イベントの頻度に合わせて調整する。資産が負でも式は定義される。経済力表示は金銭属性から算出し、直接加算しない。

### 5.3 知性 `intellect`

```text
intellect = D((2*t.cognitive_potential + t.learning_drive
               + 2*a.knowledge + a.problem_solving) / 12)
```

学歴は別属性。幼少期の `knowledge` などは年齢別の初期値を使用する。

### 5.4 社交性 `sociability`

```text
sociability = D((2*t.extraversion + t.social_initiative
                 + a.communication_skill - s.social_anxiety) / 10)
```

対人不安は非負の負荷。対人関係の親密度・信頼は人物ごとに別管理。

### 5.5 魅力 `attractiveness`

```text
attractiveness = D((2*t.appearance_potential + a.grooming
                    + 2*a.interpersonal_charm + 2*d.health) / 12)
```

`2*d.health` は健康表示値 `[-50,50]` を内部スケール `[-100,100]` に戻す処理。特定相手への魅力度は別途相性・関係データで補正し、表示値だけで好意を決めない。

### 5.6 自信 `confidence`

```text
confidence = D((t.self_worth_disposition + 2*s.self_efficacy
                + s.social_confidence + s.success_memory) / 10)
```

### 5.7 幸福度 `happiness`

```text
happiness = D((2*s.life_satisfaction + 2*s.relationship_satisfaction
               - 2*s.stress + s.achievement + 2*d.health) / 16)
```

幸福度は本人の満足を表す。経済力から機械的に幸福度へ加点しない。経済イベントは生活満足度・ストレスを通じて影響させる。

### 5.8 性的欲求 `sexual_desire`

```text
sexual_desire = D((2*t.baseline_libido + 2*s.current_libido
                   + t.sexual_interest - s.stress) / 12)
```

ストレスの係数は初版のゲーム上の仮定。欲求と行動・同意・恋愛感情は独立して扱う。年齢に応じた `current_libido` の変化は個人差のあるゲーム上の緩やかな補正とし、固定的な女性像を前提にしない。

### 5.8.1 性的嗜好・羞恥度（非表示）

`masochistic_preference` と `sadistic_preference` は**独立した2軸**とする。両方が高い／低い人物を許容し、互いを反転値として扱わない。いずれも表示の `sexual_desire` 計算式には加えない。

`baseline_modesty` は先天的な長期特性（幅100制限）。`current_embarrassment` は `[0,100]` の短期状態で、現在のイベント文脈に応じて次の式で**イベント判定時に導出**する。保存時はキャッシュとして保持してもよいが、イベント開始時に必ず再計算する。

```text
current_embarrassment = clamp(
    roundHalfAwayFromZero(50 + 0.5 * t.baseline_modesty
      + context.public_exposure_modifier
      - context.trust_modifier),
    0, 100)
```

- `public_exposure_modifier` と `trust_modifier` はイベント定義に含む整数 `[0,30]`、未指定時は0。信頼補正は相手が存在し、本人が信頼している場合にのみ適用する。
- 上記はゲーム用の仮式。羞恥心は欲求・性的指向・同意と同義ではない。羞恥度だけで同意の有無を推定しない。
- 性的嗜好の判定は成人（`age_months >= 216`）の合意に基づくイベントに限定する。相手が関わる選択肢では、相手の成人確認、明示的同意、イベントごとの許容条件を必須とする。
- `current_libido` は月次処理やイベント結果で変化するが、被虐志向・嗜虐志向・羞恥度を自動的に上昇させない。

### 5.9 表示計算の実装順序

```pseudo
function computeDisplay(person):
    health = computeHealth(person)
    finances = computeFinances(person)
    intellect = computeIntellect(person)
    sociability = computeSociability(person)
    confidence = computeConfidence(person)
    sexual_desire = computeSexualDesire(person)
    attractiveness = computeAttractiveness(person, health)
    happiness = computeHappiness(person, health)
    return {health, finances, intellect, sociability,
            attractiveness, confidence, happiness, sexual_desire}
```

## 6. 生活属性・関係モデル

### 6.1 属性一覧と正規データ

| 属性 | 正規フィールド | 型・制約 | 更新契機 |
|---|---|---|---|
| 名前 | `identity.name` | UTF-8文字列、1〜80文字、空白のみ不可 | 名前変更イベント |
| 年齢 | `age_months` | 非負整数、月単位。`age_years=floor(age_months/12)` は派生値 | 月次経過 |
| 居住地 | `residence.district_id` | 有効な街区ID。未設定を許す場合は明示的 `null` | 転居イベント |
| 職業 | `career.employment_status`, `career.occupation_id` | 下記enum・職業マスタ参照 | 入学、就職、転職、退職 |
| パートナー | `family.partner_id`, `family.relationship_status`, `family.marital_status` | ID参照＋状態enum | 交際、同棲、結婚、離別、死別 |
| 子供 | `family.children_ids` | 人物IDの重複なし配列。子供なしは `[]` | 出産、養子縁組など |
| 資産 | `economy` | 金額は整数円、残高・負債は非負 | 収支・売買・借入イベント |
| 性的指向 | `identity.sexual_orientation` | enum、未設定・不明を区別 | 初期生成・本人の自己認識を扱う場合のみ |
| 性経験 | `experience.has_sexual_experience` | boolean。経験の定義はイベントマスタで一元化 | 対応する経験イベント |

`alive`、`education_level`、`school_enrollment`、`housing_cost`、`household_ids`、イベント履歴は、上記9分類に含まれなくても実行基盤に必要な補助属性として維持する。`age_years`、`has_children`、`net_worth`、表示経済力は保存せず派生値とする。名前はIDの代わりに使用しない。

### 6.2 居住地と街区分類

居住地は街区マスタIDを保持する。初版は架空の街区とし、街区特性を6種類の**単一分類**で表現する。所得分類と土地利用分類は現実には重なり得るが、ゲーム上の簡略化として初版では同時指定しない。

```json
{
  "district_id": "district_central_01",
  "name": "中央住宅街",
  "area_type": "residential"
}
```

| `area_type` | 日本語名 | イベント設計上の主な特徴 |
|---|---|---|
| `residential` | 住宅地 | 近隣交流、家族、日常生活 |
| `commercial` | 商業地域 | 買い物、接客、仕事、日中の出会い |
| `entertainment` | 繁華街 | 娯楽、夜間交流、偶発的な出会い |
| `rural_fishing` | 農漁村 | 地域共同体、自然、農漁業 |
| `high_income` | 高所得地域 | 高額消費、富裕層との交流 |
| `low_income` | 低所得地域 | 経済的制約、生活支援、地域交流 |

- `district_id` は街区マスタに存在し、`area_type` は上記enumのいずれかでなければならない。
- 街区分類は人格・道徳性・性的傾向を直接変化させない。街区による違いはイベントの発生重み、選択肢、家計補正で表現する。
- 街区別の補正は**イベントごとの明示的な設定**とする。居住者全員に一律の属性補正を適用しない。
- 生活費係数の初期値（ゲーム調整用）: `residential=1.00`, `commercial=1.10`, `entertainment=1.15`, `rural_fishing=0.85`, `high_income=1.40`, `low_income=0.80`。`effectiveMonthlyExpenses = roundHalfAwayFromZero(baseMonthlyExpenses * districtExpenseMultiplier)`。基準支出への二重適用は禁止。
- イベント発生倍率の例: `entertainment` における娯楽イベント `1.5`、`rural_fishing` における農漁業イベント `1.8`。未指定のイベント・街区組合せは `1.0`。確率そのものではなく抽選重みへの倍率とする。
- 転居時はIDの存在確認を行い、翌月から支出補正を切り替える。転居費用はイベントで一度だけ処理する。
- 将来、複合的な街区特性が必要になった場合のみ `area_type` と `income_level` の分離を検討する。初版では実装しない。

### 6.3 職業・パートナー・子供

```text
employment_status = preschool | student | unemployed | employed | self_employed | homemaker | retired
occupation_id = null | <occupation-master-id>
relationship_status = single | dating | cohabiting | partnered
marital_status = never_married | married | divorced | widowed
```

- `employment_status` と `occupation_id` は別管理。`student` かつ就労する等の複合状態が必要になれば、初版では主たる状態を保持し、副業は拡張項目とする。
- `partner_id` は現在のパートナーを指すIDで、いなければ `null`。`relationship_status=single` と `partner_id=null` は同時に成立すること。`dating/cohabiting/partnered` なら有効なIDが必要。
- `marital_status` は法的婚姻状態で、`relationship_status` と独立。既婚の場合、配偶者の参照は `spouse_id` として追加し、現在の `partner_id` と一致しないケースも許す。初版で扱わない複雑なケースはイベント側で制限する。
- `children_ids` は人物ID配列。子供の年齢は子供本人の `age_months` を参照する。人数・有無は配列から算出。親子関係の種類が必要な場合は `parent_child_relations` へ拡張する。
- 参照IDの存在・自己参照禁止・重複禁止をロード時と更新時に検証する。相手の存在が必要なイベントは参照整合性を前提条件に含める。

### 6.4 資産・経済状況

```text
cash, investments, other_assets, debt: integer >= 0  (JPY)
monthly_income, monthly_expenses: integer >= 0  (JPY/month, 街区補正前)
net_worth = cash + investments + other_assets - debt
```

- 金銭の変更は経済処理関数に集約する。資産から経済力表示値を再計算し、表示値を直接更新しない。
- 支出時に現金不足が生じた場合は既存の月次経済ルールに従い不足額を負債へ移す。負債が増えるだけで現金を負にしない。
- 初版では単一通貨JPY、名目額を用いる。物価変動・税金・資産評価損益は将来拡張とする。

### 6.5 性的指向・性経験

```text
sexual_orientation = heterosexual | homosexual | bisexual | asexual | other | questioning | unknown
has_sexual_experience = true | false
```

- 性的指向は本人の属性であり、性的欲求の強さ、恋愛志向、行動経験とは独立。`unknown` は情報未確定、`questioning` は本人が探索中の状態として区別する。
- 女性主人公の初版では上記enumで対象候補の基本判定を行う。ただし、対象人物の性別属性・個別の好意・相互同意・年齢条件を別途検証する。性的指向だけでイベント成立や行動を強制しない。
- `has_sexual_experience` は一度 `true` になれば `false` に戻さない履歴フラグ。性的な出来事の定義はゲームのイベント分類に一元化し、同意のない出来事を通常の選択型経験イベントと混同しない。
- 性的指向をプレイヤーの行動選択への報酬・罰で機械的に変動させない。初期生成で確定するか、本人の自己認識に関するイベントで**記録上のラベル**を更新する。

### 6.6 人間関係

人間関係は `relationships[otherPersonId]` で保持する。

```text
acquaintance_level: 0..100
trust: -100..100
affection: -100..100
intimacy: 0..100
relationship_type: friend | acquaintance | partner | family | colleague | other
```

「パートナーと相談する」等は、`partner_id != null`、参照人物が存在し、関係が有効な場合のみ表示する。恋愛・結婚・出産・就業などは、表示パラメータの閾値だけで決めず、生活属性・年齢・関係・イベント履歴・街区特性を組み合わせる。

### 6.7 属性更新APIと整合性

```text
setName(person, name)
advanceMonth(person)
moveResidence(person, districtId, movingCost)
setEmployment(person, employmentStatus, occupationId)
setPartner(person, partnerId, relationshipStatus)
setMaritalStatus(person, maritalStatus, spouseId)
addChild(person, childId)
applyMoneyDelta(person, delta, reason)
setSexualOrientation(person, orientation)
markSexualExperience(person)
```

すべての更新は、イベントのトランザクション内で事前条件を検証してから確定する。更新後は必要な派生値・イベント候補を再評価する。手動選択・自動選択とも同じ更新APIを使う。

## 7. イベント仕様と処理順

イベントは次の4段階で内部データを参照する。

1. **発生候補判定**: 年齢、状態、属性、過去イベント、関係の有無などのハード条件を満たすか。
2. **発生確率・重み**: 表示値または内部値に応じた重み付けを行う。
3. **選択肢フィルタと選択**: 選択可能な選択肢だけを提示。手動ならプレイヤー入力、自動なら効用スコアから抽選。
4. **結果処理**: 条件付き成功判定、属性・内部値・関係・履歴を一括更新し、表示値を再計算。

### 7.1 イベント定義の例（JSON風）

```json
{
  "id": "invite_to_dinner",
  "title": "食事に誘われる",
  "min_age": 18,
  "max_age": 70,
  "prerequisites": [
    {"path": "context.inviter_id", "op": "exists"},
    {"path": "person.alive", "op": "eq", "value": true}
  ],
  "base_weight": 10,
  "weight_modifiers": [
    {"path": "display.sociability", "coefficient": 0.01}
  ],
  "choices": [
    {
      "id": "accept",
      "label": "誘いに応じる",
      "requirements": [],
      "utility": {
        "base": 0.2,
        "terms": [
          {"path": "display.sociability", "coefficient": 0.02},
          {"path": "display.confidence", "coefficient": 0.01},
          {"path": "state.social_anxiety", "coefficient": -0.01}
        ]
      },
      "effects": [
        {"path": "state.social_confidence", "op": "add", "value": 1},
        {"path": "state.stress", "op": "add", "value": -1}
      ]
    },
    {
      "id": "decline",
      "label": "丁寧に断る",
      "requirements": [],
      "utility": {"base": 0.0, "terms": []},
      "effects": []
    }
  ]
}
```

上記は構造例。実装時はイベントDSLのパスをホワイトリストで検証し、任意コード実行を許可しない。

### 7.2 イベント重み

```text
weight = max(0, base_weight * max(0, 1 + Σ(coefficient_i * value_i)))
```

ハード条件を満たさないイベントは重み0。候補からの抽選は重み比例。`weight_modifiers` に参照できる値は登録済みパスのみ。

### 7.3 自動選択

選択可能な選択肢 `i` の効用:

```text
U_i = base_i + Σ(coefficient_ij * value_j)
P(i) = exp((U_i - Umax)/T) / Σ_k exp((U_k - Umax)/T)
```

- 初期温度 `T=1.0`。`T>0`。
- 安定計算のため `Umax` を引く。
- 乱数シードは保存・再現可能とする。
- 選択肢が1個なら確率1。
- 選択肢が0個ならイベントをスキップし、警告ログを残す。
- 手動モードでもハード条件は適用する。人格の違いによって選択肢を強制的に隠すのは、明示的な `requirements` がある場合だけ。

### 7.4 効果の適用

```pseudo
function applyChoice(person, choice, rng):
    assert allRequirementsMet(choice.requirements, person)
    changes = evaluateEffects(choice.effects, person, rng)
    nextPerson = deepCopy(person)
    for change in changes:
        applyTypedChange(nextPerson, change)
    clampInnateTraits(nextPerson)
    clampSkillsAndStates(nextPerson)
    validateRelationshipsAndAttributes(nextPerson)
    nextPerson.display = computeDisplay(nextPerson)
    appendEventHistory(nextPerson, choice.id, changes)
    commitAtomically(nextPerson)
```

原則として効果は更新前スナップショットに対して評価し、同一フィールドへの複数の `add` は合算する。`set` と `add` の同時指定はスキーマエラーとする。失敗時は全体をロールバック。

## 8. 時間経過と年齢補正

- 基本単位は1か月。イベント処理後に月次更新を行う。
- 年齢は `age_months` を正とし、`age_years = floor(age_months/12)` で算出する。
- 毎月の収入・支出を現金に反映。現金不足時は負債増加等の経済ルールへ移行する（初版では不足分を負債へ加算）。
- 疲労、ストレス、気分、現在の性的欲求は基準状態に向けて徐々に回復・変化する。
- 知識・能力の年齢補正は独立した設定テーブルで扱う。先天的中心・上下限は年齢によって変更しない。
- 年齢だけで結婚願望・性格・幸福度などを一方向に強制変化させない。

初版の月次状態更新例（すべて調整可能）:

```text
fatigue = clamp(round(0.85 * fatigue), 0, 100)
stress = clamp(round(0.90 * stress), 0, 100)
mood = clamp(round(0.80 * mood), -100, 100)
current_libido = clamp(round(0.90 * current_libido + 0.10 * baseline_libido), -100, 100)
```

これらはイベント後に1回のみ適用。病気や生活環境による持続的な負荷は別途イベント・月次効果で付与する。

## 9. 保存データの例

```json
{
  "schema_version": 2,
  "seed": 123456,
  "rng_state": "implementation-defined",
  "person": {
    "id": "p001",
    "identity": {"name": "美咲", "sexual_orientation": "heterosexual"},
    "residence": {"district_id": "district_central_01"},
    "experience": {"has_sexual_experience": false},
    "age_months": 216,
    "alive": true,
    "traits": {
      "extraversion": {"center": 10, "min": -40, "max": 60, "current": 12},
      "masochistic_preference": {"center": 0, "min": -50, "max": 50, "current": 0},
      "sadistic_preference": {"center": 0, "min": -50, "max": 50, "current": 0},
      "baseline_modesty": {"center": 10, "min": -40, "max": 60, "current": 10}
    },
    "abilities": {"communication_skill": 5},
    "states": {"social_anxiety": 20, "stress": 10, "current_embarrassment": 55},
    "economy": {
      "cash": 300000,
      "investments": 0,
      "other_assets": 0,
      "debt": 0,
      "monthly_income": 180000,
      "monthly_expenses": 150000
    },
    "attributes": {
      "education_level": "high_school",
      "school_enrollment": false,
      "career": {"employment_status": "employed", "occupation_id": "office_worker", "tenure_months": 6},
      "family": {"relationship_status": "single", "partner_id": null, "marital_status": "never_married", "spouse_id": null, "children_ids": [], "household_ids": []}
    },
    "relationships": {},
    "event_history": []
  }
}
```

これは**構造例であり完全な保存データではない**。実際の新規生成時には、辞書で定義した全ての内部値・必須生活属性を必ず埋める。`display` は保存せず、読み込み時・更新後に再計算する。初版では旧セーブデータの移行は実装せず、スキーマ不一致なら新規生成を求める（黙って既存ファイルを破壊しない）。

## 10. 実装モジュール境界

```text
parameterRegistry     内部キー、型、範囲、表示計算の依存関係
personFactory         出生時生成、シード処理、年齢別初期値
parameterEngine       値の変更、範囲制限、表示値の再計算
lifeState             経済・職業・学歴・婚姻・家族・関係の管理
eventValidator        イベントJSON検証、参照パス検証
eventScheduler        発生条件、重み、候補抽選
choiceEngine          手動選択・自動選択（softmax）
effectEngine          効果評価、原子的適用、履歴
monthlyUpdater        月次更新、年齢進行
saveManager           保存、読み込み、スキーマ検証、乱数状態
```

UIは `computeDisplay(person)` の8値を読むだけとし、内部値の直接変更を許さない。デバッグ画面は別途内部値・可動域・選択確率を確認できるようにする。

## 11. 必須テスト・受け入れ条件

1. 全ての表示値が常に整数 `[-50,50]` に収まる。
2. 全ての先天特性について `max-min==100`、`current` は範囲内。イベントで越えようとしても制限される。
3. 同じシード・同じ入力イベント列なら、初期人物・自動選択・結果が一致する。
4. 表示値は内部値・属性を更新した直後に再計算され、直接代入はできない。
5. パートナー不在時にパートナー必須イベント・選択肢が出ない。
6. 選択肢の効用確率は非負で、選択可能なものの合計が許容誤差 `1e-9` 以内で1。
7. 条件を満たさない選択肢を手動・自動ともに選べない。
8. 負債があっても経済力計算はNaN/Infinityにならない。
9. イベントの途中で効果適用が失敗しても状態は部分更新されない。
10. 名前・年齢・居住地・学歴・職業・資産・関係・子供・性的指向・性経験の属性変更が、対応するイベントの発生条件に反映される。
11. 高い性的欲求だけを理由に性的行動が必ず選択されることはない（他の条件・効用・本人の意思を独立評価）。
12. 表示式に循環依存がない。
13. 街区IDが無効な転居は失敗し、状態が変更されない。6種の `area_type` 以外は拒否する。街区変更は翌月の支出と対象イベント重みに反映される。
14. 子供ID重複、存在しないパートナーID、自己参照を拒否する。子供の有無は `children_ids.length > 0` から算出する。
15. 性経験フラグは単調（false→trueのみ）。性的指向の値はenum検証され、性的欲求と独立に保持される。
16. `age_years` は `age_months` から算出し、保存値と二重管理しない。
17. 被虐志向・嗜虐志向は独立に生成・更新され、性的欲求の表示計算には寄与しない。
18. 基礎羞恥心には先天的幅100を適用し、現在の羞恥度はイベント文脈で `[0,100]` に再計算する。
19. 成人向けイベントは成人・明示的同意の条件を満たさなければ候補にも選択肢にも現れない。

### 代表的な単体テスト

```pseudo
trait = {center:-20, min:-70, max:30, current:25}
applyTraitDelta(trait, +20)
assert trait.current == 30

assert computeDisplay(zeroBaselinePerson).keys ==
  {health, finances, intellect, sociability,
   attractiveness, confidence, happiness, sexual_desire}

assert all(-50 <= v <= 50 for v in computeDisplay(person).values())

assert choiceProbabilities(person, event).sum() ~= 1.0
```

`zeroBaselinePerson` は全人格・能力・符号付き状態が0、非負負荷が0、経済属性が基準的な値のテストフィクスチャとする。経済力は必ずしも0にならないため、全8値が0になることを要求しない。

## 12. 実装優先順位

**フェーズ1（最小実装）**: パラメータ辞書、先天生成、8表示式、生活属性、値更新、単体テスト。

**フェーズ2**: イベント定義、発生条件、選択肢フィルタ、手動選択、効果適用。

**フェーズ3**: 自動選択、確率抽選、シード再現、月次更新、セーブ・ロード。

**フェーズ4**: 年齢別初期値、イベントバランス調整、UI、デバッグ可視化。

## 13. 今後の調整事項（初版の実装を妨げない）

- 先天特性の中心分布（現在は正規分布、標準偏差20）。
- 生活属性と年齢別の初期値テーブル、街区マスタの初期構成。
- 経済力の換算係数・生活費基準・住宅資産の扱い。
- 表示指標の重みと、イベントの効用係数。
- 健康・魅力・性的欲求の年齢による変化の程度。
- 性的欲求へのストレス影響の個人差。
- 成人向けイベントの嗜好・羞恥補正係数、相手との合意条件のイベント定義。
- 可塑性、長期記憶、心理状態の回復速度。
- 恋愛・妊娠・出産・育児・老化などの詳細ルール。

本仕様で確定していない数値は、コードへ散在させず設定ファイルに集約すること。
