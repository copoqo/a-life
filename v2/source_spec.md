# 人生シミュレータ 統合実装仕様書 v1.0

**対象:** オフライン・ローカルJavaScriptの人生シミュレータ  
**目的:** ランダムな単発イベントの羅列を、選択が将来に影響する因果的な人生体験へ改修する。  
**文書状態:** 実装用ドラフト。`[決定]`は本書で採用する初期仕様、`[調整可]`はバランス値。  
**既存仕様:** 本書の第I部に既存の統合仕様（26章）を収録。第II部が今回の実装詳細であり、重複・競合時は第II部を優先する。

---

# 第I部：既存のストーリー・シナリオ・イベント統合仕様

# 人生シミュレータ：ストーリー・シナリオ・イベント設計方針

## 1. 目的と基本方針

- 現状の「条件付きランダムイベントの羅列」を、因果関係と連続性のある人生体験へ発展させる。
- 基本構造は **ストーリー → シナリオ → イベント → バリエーション** とし、文章生成には共有可能な**テンプレート**を用いる。
- 固定的な親子ツリーではなく、分岐・合流・並行・再開が可能なグラフ構造を採用する。
- ランダム性を残し、あらかじめ決められた一本道の物語にはしない。
- ストーリーは主にテーマを束ね、実際の進行管理はシナリオが担う。

## 2. 用語と責務

| 概念 | 定義 | 例 |
| --- | --- | --- |
| ストーリー | 人生のテーマや局面を束ねる上位概念 | 就学前、小学校、性のめざめ、恋人、就職失敗 |
| シナリオ | 開始・進行・中断・終了を管理する具体的な状況・展開 | アルバイト、家事手伝い、起業、入院、炎上、バズ |
| イベント | 個別の出来事と選択・結果の単位 | 過労、バイトテロ、告白、SNS投稿 |
| バリエーション | 同じイベントの状況・条件・選択肢・結果の差分 | 同級生からの告白、職場の同僚からの告白 |
| テンプレート | 人物・場所・履歴などを差し込む文章・台詞等の生成部品 | `{相手の名前}から{場所}で告白された` |

**重要：** これらは厳密な単一親子関係ではない。シナリオは複数のストーリーから参照可能で、テンプレートは複数のイベント・バリエーションで共有できる。

## 3. ストーリー

- 複数のストーリーが同時に存在・進行できる。
- ストーリー自体には細かなイベント順序を持たせず、関連するシナリオを束ねる。
- ストーリーは性質に応じて次のように分類できる。
  - **ライフステージ型：** 就学前、小学校（前半）、中学校、高校、大学、就活など。
  - **テーマ型：** 性のめざめ、運動部、文化部、恋人など。
  - **状況型：** 就職失敗、失恋、病気など。
- 開始・終了の条件は種類によって異なる。たとえば中学校は卒業、恋人は関係の変化を基準とする。
- シナリオとの関係は多対多とする。

## 4. シナリオ

- 具体的な状況と、その状況で起こりやすいイベント・展開を定義する。
- 開始条件、終了条件、進行状態、関連イベント、他シナリオへの遷移条件を持つ。
- 進行状態は少なくとも **進行中・一時停止・終了** を扱う。
- 複数のシナリオを同時進行できる。
- イベント結果により新しいシナリオが始まっても、元のシナリオは必ずしも終了しない。
- 分岐・合流・中断・再開を許容する。
- 直接の遷移関係に加え、キャラクターの共通状態の変化を介した間接的な連携を可能にする。

### 例：就職失敗からの展開

```text
就職失敗ストーリー
  ├─ アルバイトシナリオ
  │    ├─ 過労イベント ──→ 入院シナリオ
  │    └─ バイトテロイベント ──→ 炎上シナリオ
  ├─ 家事手伝いシナリオ
  │    └─ 家族との衝突イベント ──→ 自立関連シナリオ
  └─ 起業シナリオ
       └─ SNS投稿イベント ──→ バズシナリオ
```

- 上記は代表経路であり、実際には別のストーリーからも入院・炎上・バズなどに合流できる。
- 例：部活中の怪我からも入院シナリオが始まり得る。
- 遷移は確定とは限らず、条件・確率・状態の蓄積で判定する。

## 5. イベント

- 個別の出来事として、発生条件、発生重み、選択肢、結果を持つ。
- 発生条件には年齢、属性、職業、居住地、パラメータ、経験、関係性、進行中シナリオなどを使用する。
- 選択結果はキャラクターの共通状態、履歴、人間関係、シナリオ進行に反映する。
- 一つのイベントが複数のシナリオで再利用されてもよい。
- 異なるシナリオに属する出来事が、共通状態を通じて相互に影響する。

## 6. イベント抽選

イベントの候補は以下の3系統を組み合わせる。

1. **シナリオ由来イベント：** 進行中シナリオに関連するイベント。連続性を優先する。
2. **通常の条件付きイベント：** 従来型の、状態に適合するランダムイベント。
3. **偶発的な新展開イベント：** 新しいシナリオや意外な変化の契機となるイベント。

- 3系統の比率は調整可能とする。例としてシナリオ由来65%、通常25%、偶発10%を考えられるが、これは確定値ではない。
- 各候補は発生条件を満たすものだけを抽選対象とする。
- 年齢・状態・経験・シナリオ進行などに応じて重みを調整する。
- 過労の蓄積による入院リスク上昇のように、履歴や状態が確率に影響する。

## 7. キャラクター状態・履歴・関係性

- 年齢、職業、健康、資産、パートナー、性格、経験などは共通状態として一元管理する。
- ストーリーやシナリオごとに同じ属性を重複管理しない。
- 過去のイベント、選択、経験、出会った人物、関係性の変化を履歴として保存する。
- 履歴は将来の発生条件・テンプレート内容・再会などに利用する。
- 例：アルバイト先で出会った相手と数年後に再会し、恋愛シナリオにつながる。
- 例：過労によりデートを断ることで、恋人との関係が悪化する。

## 8. イベント内のバリエーション

- 一つのイベント定義に複数のバリエーションを持たせる。
- バリエーションごとに個別の発生条件と抽選重みを設定できる。
- イベント本体の共通定義を継承し、必要な項目だけ上書きできる。
- 文章だけでなく、状況、選択肢、結果、シナリオへの影響まで変更可能とする。

### バリエーションの3つの水準

- **表現差分：** 放課後の教室で告白される／帰り道で告白される。
- **状況差分：** 同級生から告白される／職場の同僚から告白される。
- **展開差分：** 初めて告白される／以前断った相手から再び告白される。

## 9. テンプレート

- イベントタイトル、本文、台詞、選択肢、結果文にテンプレートを使用する。
- 人物、場所、関係性、属性、過去の経験などを変数として参照する。
- 条件付き表現や、複数の言い回しからの抽選を可能にする。
- テンプレートはイベントやバリエーションをまたいで共有可能とする。
- イベント発生時に差し込み値を確定し、選択肢・結果表示・履歴で一貫した値を使用する。

例：

```text
{相手の名前}から、{場所}で突然気持ちを打ち明けられた。
```

## 10. イベント生成・実行の流れ

1. キャラクター状態、履歴、進行中シナリオを取得する。
2. シナリオ由来・通常・偶発の各イベント候補を抽出する。
3. 発生条件と抽選重みに基づいてイベントを選択する。
4. そのイベントで有効なバリエーションを抽選する。
5. 登場人物・場所・状況などのテンプレート変数を確定する。
6. 本文と選択肢を生成し、表示する。
7. 選択結果をキャラクター状態・履歴・人間関係に反映する。
8. シナリオの開始・進行・中断・終了・再開を評価する。
9. 更新された状態を次回のイベント抽選に反映する。

## 11. 実装原則

- ストーリー、シナリオ、イベント、バリエーション、テンプレートはデータとして定義する。
- イベント抽選、文章生成、状態更新、シナリオ進行管理は処理を分離する。
- シナリオの所属は多対多、遷移はグラフ構造で管理する。
- 同一イベントを複数シナリオから再利用できるようにする。
- 既存の条件付きイベントを活かし、段階的に移行する。
- 定義を増やす際に既存エンジンの大幅な変更を不要にする。

## 12. 目指すゲーム体験

- 出来事が孤立せず、過去の経験が未来の出来事につながる。
- 学業、仕事、恋愛、健康など複数の人生テーマが同時に展開し、相互作用する。
- ランダムな偶然と、選択の積み重ねによる必然が共存する。
- 同じイベントでも状況・文章・選択肢・結果が変化し、繰り返し感を抑える。
- **物語を固定的に再生するのではなく、プレイの結果として一人の人生のストーリーが形成される。**


---

# 第II部：イベント頻度・進行エンジン・UI詳細仕様

> ステータス：実装に向けた設計案。数値は初期調整値であり、シミュレーションテストで変更可能とする。

## 13. 時間管理

- 内部時間は月単位。表示は年齢を中心とし、イベント記録は年月・同月内順序を持つ。
- 月次処理順：①年月・状態確認 → ②確定イベント → ③シナリオ開始・終了・再開判定 → ④通常イベント抽選 → ⑤イベント選択・効果反映 → ⑥派生イベント予約・遷移 → ⑦履歴確定。
- イベント実行直前に条件を再判定する。選択結果を反映する前に次のイベントを確定しない。
- 同月に複数イベントを許す。入学・卒業などの確定イベントは通常抽選枠の外で発生する。
- UIの年齢表示と内部年月は分離し、途中停止から同月内の未処理イベントを再開できる。

## 14. 年齢別イベント密度

次表は**表示候補となる通常抽選イベント**の年間目標初期値。内部状態更新、確定イベント、直接連鎖は別扱い。

| 年齢 | 年間目標件数 | 月平均（目安） |
|---|---:|---:|
| 0–5歳 | 1 | 0.08 |
| 6–11歳 | 3 | 0.25 |
| 12–14歳 | 5 | 0.42 |
| 15–19歳 | 7 | 0.58 |
| 20–29歳 | 8 | 0.67 |
| 30–39歳 | 6 | 0.50 |
| 40–49歳 | 5 | 0.42 |
| 50–64歳 | 4 | 0.33 |
| 65歳以降 | 3 | 0.25 |

- 通常抽選は月0–2件を原則とし、年内で厳密な件数固定はしない。
- シナリオが複数あっても各シナリオごとに枠を増やさず、共通枠を競合させる。
- 10代半ば〜30代は高密度。49歳程度まではパートナー不在の場合に出会い関連の重みを上げる。
- 重要イベントが集中した場合は無関係な重要イベントを抑制するが、因果関係のある連鎖は優先する。
- **内部進行／イベント生成／プレイヤーへの表示**を分離し、内部の出来事すべてを表示しない。

## 15. 抽選方式

| 系統 | 初期重み | 内容 |
|---|---:|---|
| シナリオ由来 | 65 | 進行中のシナリオに紐づくイベント |
| 一般 | 25 | 従来の条件付きランダムイベント |
| 新展開 | 10 | 新しいシナリオの契機になる偶発イベント |

1. その月に通常抽選枠があるか判定する。
2. 各系統の候補を条件でフィルタする。
3. 候補が存在する系統だけで系統重みを再正規化する。
4. 系統を抽選し、その中でイベントの最終重みに従って抽選する。
5. イベントの有効なバリエーションを抽選し、人物・場所・文章を確定する。

重みの概念式：

`W = W_base × F_scenario × F_state × F_history × F_cooldown`

- `F_scenario`：シナリオとの関連性、進行段階、勢い。
- `F_state`：年齢・職業・居住地・パラメータ・人間関係。
- `F_history`：過去の経験、既出イベント、人物との経緯。
- `F_cooldown`：重複抑制。条件不成立の場合は重み0ではなく候補から除外。
- シナリオは開始直後に高頻度、安定期に低頻度、危機に再び高頻度といった段階別の重みを持てる。

## 16. シナリオ実行状態

| フィールド | 意味 |
|---|---|
| `scenarioId` | 定義ID |
| `instanceId` | 実行インスタンスの一意ID |
| `status` | `active` / `paused` / `completed` / `failed` |
| `startedAt` | 開始年月 |
| `lastEventAt` | 最終関連イベント年月 |
| `phase` | 進行段階 |
| `participants` | 関係人物のID |
| `context` | シナリオ固有の変数 |
| `pauseReason` | 中断理由 |
| `parentEventId` | 開始契機となった履歴ID |

- 同一シナリオ定義の複数インスタンスを許容する（相手別、再入院など）。
- 複数のストーリーから参照できる。ストーリーはテーマを束ね、細かな進行制御はシナリオが担う。
- 新シナリオ開始時、元のシナリオを必ず終了させない。並行・一時停止・再開・失敗を明示的に管理する。
- イベントが起きない月にも内部経過時間は進み、自然終了・再活性化・段階遷移を判定する。
- シナリオごとの状態をキャラクターの共通属性のコピーとして持たない。

## 17. イベント結果・連鎖

イベント結果の作用は①状態変化、②直接連鎖の予約、③シナリオ操作、④状態変化を介した間接連鎖の4種。

```json
{
  "eventId": "work_overload",
  "outcomes": {
    "endure": {
      "effects": {"health": -5, "stress": 8},
      "followUps": [
        {"eventId": "health_breakdown", "probability": 0.35, "delayMonths": [0, 2]}
      ]
    }
  }
}
```

- 直接連鎖は通常の年間イベント枠を消費しないが、月次実行上限を持つ。
- 起点イベントからの直接連鎖は原則3段階まで。上限超過分は延期または破棄する。
- 連鎖ID・訪問履歴・イベント固有の重複キーで無限ループと二重実行を防ぐ。
- 予約イベントは実行時に条件を再評価し、無効なら安全に取り消す。
- 新しいシナリオ内で発生するイベントは、新たな進行として扱い、元の直接連鎖の深さとは区別する。
- 例：アルバイト過労 → 入院開始・勤務休止。同時に恋人シナリオではデート中止や見舞いイベントの候補が変化する。

## 18. イベント重要度と介入

| 重要度 | 種類 | 自動進行中の扱い |
|---:|---|---|
| 0 | 軽微 | 自動処理、履歴省略可能 |
| 1 | 通常 | 自動処理、履歴記録 |
| 2 | 重要 | 原則プレイヤー選択待ち |
| 3 | 転機 | 必ず選択待ち、結果を強調 |

- 重要度は定義値を基本に状況補正する。疎遠な親友からの連絡などは昇格し得る。
- 選択肢のない確定イベントは重要度が高くても自動記録可能。
- 通常イベントでも設定により介入できる。
- 選択肢は表示条件・文章・効果・分岐確率・シナリオ操作・後続イベント・結果テンプレートを持つ。
- 選択による変化は原則プラスとマイナスの両面を検討するが、数値を機械的に相殺しない。
- 自由入力は定義済みの選択肢への解釈、または制約付きの結果決定として処理する。

## 19. 自動進行ステートマシン

| 状態 | 意味 |
|---|---|
| `idle` | 待機 |
| `running` | 自動進行 |
| `awaitingChoice` | 選択待ち |
| `awaitingResult` | 結果確認待ち |
| `paused` | 手動停止 |
| `completed` | 人生終了 |

1. `running`で月次イベントを処理する。
2. 介入イベントで`awaitingChoice`へ移り、進行位置・キューを保持する。
3. 選択後は効果を一度だけ適用して`awaitingResult`へ移る。
4. 結果確認後に`running`へ戻し、**同年・同月の未処理イベントから**再開する。
5. 同年に重要イベントが複数あれば、その都度停止する。

- イベントキューには確定・期限到来予約・通常抽選・直接連鎖を格納する。
- 同一時点の実行順序は期限・優先度・因果関係で安定的に決める。
- 状態更新と履歴記録は一括確定し、UIの再描画で二重適用しない。
- セーブ時には年月・キュー・待機状態・乱数状態を保持する。旧版セーブ互換は当面不要（旧データは黙って破棄する方針）。

## 20. バリエーションとテンプレートの実行

- イベント定義は複数バリエーションを持ち、各バリエーションに条件・重み・本文・選択肢・結果を設定する。
- バリエーションは共通定義を継承し、必要部分だけ上書きできる。
- テンプレートはタイトル・本文・台詞・選択肢・結果に使用する。
- 変数置換に加え、条件付き文節と複数表現の抽選を許容する。
- 人物ID、場所、文面の抽選結果はイベント生成時に確定し、選択後にも維持する。
- 履歴には表示済み文章と確定変数を保存し、将来のテンプレート修正で過去の記録が変わらないようにする。
- 文章だけの変化、状況の変化、分岐・結果の変化を区別して定義する。

## 21. 一画面UI

上から以下の順に配置する。

1. **キャラクター情報**：名前・年齢・居住地（街区特性）・職業・パートナー・子供・資産など。
2. **パラメータ**：既存の表示用8指標（−50〜+50を基本とする）。
3. **進行中の人生**：主要ストーリー・シナリオ3〜5件を自然な名称で表示。残りは折りたたみ。
4. **現在のイベント**：年月・タイトル・本文・登場人物・選択肢・自由入力。
5. **結果表示**：結果文章・主要な状態変化・因果関係。確認後に次へ進む。
6. **進行操作**：次へ・自動進行・停止・速度調整。
7. **最近の出来事**：時系列履歴。関連履歴を参照可能にする。
8. **詳細**：日記・経験・居住地変更などを折りたたみ表示。

UI方針：

- 内部ID・フェーズ番号・遷移ログをそのまま見せない。「恋人との関係がぎくしゃくしている」のような自然な表現にする。
- イベント本文で原因を自然に示す（例：「残業が続いた影響で、ついに体調を崩した」）。
- 重要なシナリオの開始・終了は必要に応じて通知するが、内部操作を逐一通知しない。
- 選択後の結果を見せてから次のイベントに進む。
- 年齢相応の文体で、心が動いたイベントを中心に日記を生成する。
- 進行中シナリオの詳細・性的経験など既存の折りたたみ方針を維持する。

## 22. データ構造・責務分離

| データ | 責務 |
|---|---|
| `CharacterState` | キャラクターの属性・共通状態・経験 |
| `RelationshipState` | 人物間の関係 |
| `StoryDefinition` | テーマと関連シナリオ |
| `ScenarioDefinition` | 開始・進行・終了条件 |
| `ScenarioInstance` | 実行中のシナリオ状態 |
| `EventDefinition` | イベント条件・基本重み・効果 |
| `EventVariant` | バリエーション固有の条件・文章・分岐 |
| `EventTemplate` | 共有可能な文章部品 |
| `EventQueue` | 予約・実行待ちイベント |
| `EventHistory` | 発生済みイベント・結果・原因ID |

- 宣言的な定義（JSON等）とエンジンの実行ロジックを分離する。
- イベント抽選、テンプレート解決、状態更新、シナリオ管理、UIを独立モジュールとする。
- 履歴に原因イベントID・関連シナリオIDを保存し、後続イベントの条件と日記に利用する。

## 23. 整合性制約

- 共通状態を唯一の正とし、シナリオ間でキャラクター属性を重複保持しない。
- 入院中は通常勤務イベントを抑制する一方、見舞いや職場からの連絡は許可するなど、排他的状態を明示する。
- 実行直前に人物・状態・時間・場所・シナリオ条件を再評価する。
- イベント実行を原子的に扱い、同じ選択を二度適用しない。
- 予約イベントが無効になった場合はキャンセルし、進行不能なシナリオを放置しない。
- 乱数シードを固定した再現テストを可能にする。

## 24. テスト・チューニング

1,000〜10,000人生の自動実行で以下を計測する。

- 年齢別の年間表示イベント数と重要イベント数。
- シナリオ関連イベント・因果関係のあるイベントの割合。
- 同一イベント／バリエーションの繰り返し率。
- シナリオの未終了・停止放置率、同時進行数。
- 人物ID・人間関係・状態の矛盾件数。
- 連鎖の深さ・過剰発生・無限ループの有無。
- 同一シードでの結果再現性。
- UIの選択待ち・結果待ち・再開でイベントが欠落・重複しないこと。

## 25. 段階的な実装順序

1. 月次進行・イベントキュー・選択待ち／結果待ちの修正。
2. シナリオ実行インスタンスと複数並行管理。
3. 3系統のイベント抽選と頻度調整。
4. 直接連鎖・予約・シナリオ遷移。
5. バリエーション・テンプレートの統合。
6. 進行中の人生・因果履歴を含むUI改修。
7. 大量自動実行による分布と整合性の検証。

## 26. 追加設計で決める項目

- 年齢別の目標値を「表示イベント数」としてどこまで厳密に扱うか。
- 月ごとの表示上限、連鎖延期の最大期間、重要イベントの集中抑制係数。
- シナリオの自然終了・再開の具体的な閾値。
- 自由入力の解釈規則と、想定外入力のフォールバック。
- UIに表示するシナリオの優先順位と履歴の折りたたみ基準。

---

**設計の中心原則：** 内部では状態と関係性が継続的に変化し、イベントが因果的に連鎖する。一方、プレイヤーには重要で意味のある出来事を適切な密度で提示し、プレイ結果として人生の物語が形成される。

---

# 第II部：選択・因果関係・人生分岐の実装詳細

## 27. 機能要件と非機能要件

### 27.1 機能要件

- FR-01: 選択結果を数値・状態・人間関係・シナリオ・将来影響の5種類の効果として処理する。
- FR-02: 選択直後に**実際に確定した差分**と自然文の結果を表示する。
- FR-03: 選択によりイベント候補集合・抽選重み・シナリオ状態が変化する。
- FR-04: 選択から数か月〜数年後の派生候補を予約できる。
- FR-05: 後続イベントから過去の原因となった選択を辿れる。
- FR-06: 同一月に複数イベントがあり、途中で選択待ちになっても残りを飛ばさない。
- FR-07: 結果確認前には時間進行しない。
- FR-08: 既存の条件付きランダムイベントは、シナリオ非依存の一般イベントとして動作する。
- FR-09: 選択前・結果・履歴の文章は同じ確定済み人物ID・テンプレート変数を参照する。
- FR-10: 選択しなかった進路も、条件が整えば後年に再び開くことができる。

### 27.2 非機能要件

- 完全オフライン、ブラウザ内実行。サーバー・外部API必須としない。
- 乱数生成器の状態をセーブに含め、同一状態・同一入力で再現可能とする。
- すべての定義に安定した文字列IDを付け、表示文言をキーに使用しない。
- 旧版セーブ互換は不要。既存方針に従い新形式に非対応の旧データは読み込まず、新規開始扱いとする（ただしユーザーの意図しない最新セーブ破損に備え、形式不一致と破損は区別する）。
- 主要なゲームロジックはUIと分離し、単体テスト可能な純粋関数とする。

## 28. データモデル（確定案）

以下はTypeScriptによる契約表現。実装はJavaScriptでもよいが、JSDocまたはJSON Schemaによる同等の検証を必須とする。

```ts
type Id = string;
type Month = number; // 出生月を0とする通算月。年齢=floor(month/12)
type Status = 'active'|'paused'|'completed'|'failed';
type EngineMode = 'idle'|'running'|'awaitingChoice'|'awaitingResult'|'paused'|'completed';

type Condition =
  | {op:'all'|'any'; items:Condition[]}
  | {op:'not'; item:Condition}
  | {op:'compare'; key:string; cmp:'eq'|'ne'|'gt'|'gte'|'lt'|'lte'; value:string|number|boolean|null}
  | {op:'hasHistory'; eventId?:Id; choiceId?:Id; withinMonths?:number}
  | {op:'scenarioStatus'; scenarioId:Id; status:Status}
  | {op:'relationship'; personRef:string; key:string; cmp:'gte'|'lte'|'eq'; value:number|string};

type Effect =
  | {type:'parameter'; key:string; op:'add'; value:number}
  | {type:'state'; key:string; op:'set'; value:string|number|boolean|null}
  | {type:'relationship'; personRef:string; key:string; op:'add'|'set'; value:number|string}
  | {type:'scenario'; op:'start'|'pause'|'resume'|'complete'|'fail'|'advance'|'setContext'; scenarioId:Id; instanceRef?:string; key?:string; value?:unknown}
  | {type:'influence'; targetType:'event'|'scenario'|'variant'; targetId:Id; multiplier:number; durationMonths:number; maxApplications?:number};

interface OutcomeDef {
  id:Id;
  weight:number; // 同じ選択内の結果分岐の相対重み。非負
  when?:Condition;
  effects:Effect[];
  consequences?:ConsequenceDef[];
  resultTemplateId:Id;
}
interface ChoiceDef {id:Id; textTemplateId:Id; descriptionTemplateId?:Id; when?:Condition; outcomes:OutcomeDef[];}
interface EventVariantDef {id:Id; weight:number; when?:Condition; titleTemplateId:Id; bodyTemplateId:Id; choices:ChoiceDef[];}
interface EventDef {id:Id; category:'scenario'|'general'|'discovery'|'fixed'; baseWeight:number; importance:0|1|2|3; when:Condition; cooldownMonths:number; variants:EventVariantDef[]; tags:string[];}
interface ScenarioDef {id:Id; storyIds:Id[]; startWhen:Condition; endWhen?:Condition; exclusiveGroup?:string; phases:string[]; eventWeights:Record<Id,number>;}
interface ScenarioInstance {id:Id; definitionId:Id; status:Status; phase:string; startedAt:Month; lastEventAt?:Month; context:Record<string,unknown>; participants:Record<string,Id>; pauseReason?:string; sourceHistoryId?:Id;}
interface ConsequenceDef {eventId:Id; earliestDelayMonths:number; latestDelayMonths:number; policy:'once'|'monthly'; probability:number; when?:Condition;}
interface PendingConsequence {id:Id; sourceHistoryId:Id; sourceChoiceId:Id; definition:ConsequenceDef; earliestMonth:Month; latestMonth:Month; lastCheckedMonth?:Month; status:'pending'|'triggered'|'expired'|'cancelled';}
interface InfluenceInstance {id:Id; sourceHistoryId:Id; sourceChoiceId:Id; targetType:'event'|'scenario'|'variant'; targetId:Id; multiplier:number; startMonth:Month; endMonth:Month; remainingApplications:number|null;}
interface CauseLink {historyId:Id; kind:'direct'|'consequence'|'influence'|'scenario'; strength:'primary'|'contributing';}
interface HistoryRecord {id:Id; month:Month; sequence:number; eventId:Id; variantId:Id; scenarioInstanceIds:Id[]; choiceId?:Id; outcomeId?:Id; participantIds:Id[]; resolvedVariables:Record<string,string|number|boolean>; titleText:string; bodyText:string; resultText?:string; changes:ChangeRecord[]; causes:CauseLink[]; importance:0|1|2|3;}
interface ChangeRecord {kind:'parameter'|'state'|'relationship'|'scenario'|'influence'|'consequence'; key:string; before:unknown; after:unknown; actualDelta?:number; visible:boolean;}
interface EventInstance {id:Id; eventId:Id; variantId:Id; month:Month; scenarioInstanceIds:Id[]; participantIds:Id[]; resolvedVariables:Record<string,string|number|boolean>; causeLinks:CauseLink[]; status:'pending'|'awaitingChoice'|'resolved'|'cancelled';}
interface GameState {
  schemaVersion:1; month:Month; rngState:number; nextId:number; mode:EngineMode;
  character:CharacterState; relationships:Record<Id,RelationshipState>;
  scenarios:ScenarioInstance[]; influences:InfluenceInstance[];
  consequences:PendingConsequence[]; eventQueue:QueuedEvent[];
  history:HistoryRecord[]; currentEvent?:EventInstance;
  lastResult?:ChoiceExecutionResult; processedActionIds:string[];
  scheduler:SchedulerState;
}
```

**型の補足:** `CharacterState` は既存の8表示パラメータ、内部人格・性的パラメータ、年齢、居住地、職業、資産、経験などを保持する。既存キーをそのまま使い、例示用の `responsibility` や `stress` を未定義のまま追加しない。`RelationshipState` は人物IDをキーとし、関係種別・親密度・履歴などを持つ。`QueuedEvent` と `SchedulerState` は第31章で定義する。

### 28.1 状態変更可能キーの登録

```js
const MUTABLE_KEYS = {
  'employment.type': {type:'enum', values:['none','parttime','fulltime','selfemployed']},
  'employment.income': {type:'number', min:0},
  'living.region': {type:'enum', values:['hokkaido','tohoku','kanto','chubu','kansai','chugoku','shikoku','kyushu','okinawa']}
  // 実際には既存の状態定義に合わせて追加
};
```

- `state` 効果は任意パスに書き込まない。登録済みキーに限定する。
- パラメータは資質ごとの上下限でクランプし、表示・履歴には要求値ではなく**実際の変化量**を記録する。
- `personRef` はイベント生成時に確定した参加者参照（例 `target`）から人物IDに解決する。
- 数値は `NaN`、`Infinity`、文字列への暗黙変換を禁止する。

## 29. イベント・選択定義の具体例

```json
{
  "id":"offer_fulltime",
  "category":"scenario",
  "baseWeight":10,
  "importance":2,
  "cooldownMonths":120,
  "tags":["work","turning_point"],
  "when":{"op":"all","items":[
    {"op":"compare","key":"employment.type","cmp":"eq","value":"parttime"},
    {"op":"compare","key":"ageYears","cmp":"gte","value":18}
  ]},
  "variants":[{
    "id":"manager_offer", "weight":1,
    "titleTemplateId":"offer_fulltime.title",
    "bodyTemplateId":"offer_fulltime.body",
    "choices":[{
      "id":"accept", "textTemplateId":"offer_fulltime.accept",
      "outcomes":[{
        "id":"accepted", "weight":1,
        "resultTemplateId":"offer_fulltime.accepted",
        "effects":[
          {"type":"state","key":"employment.type","op":"set","value":"fulltime"},
          {"type":"scenario","op":"complete","scenarioId":"parttime_work"},
          {"type":"scenario","op":"start","scenarioId":"fulltime_work"},
          {"type":"influence","targetType":"event","targetId":"promotion_offer","multiplier":1.8,"durationMonths":36}
        ],
        "consequences":[{
          "eventId":"promotion_offer", "earliestDelayMonths":12,
          "latestDelayMonths":36, "policy":"once", "probability":0.35
        }]
      }]
    },{
      "id":"decline", "textTemplateId":"offer_fulltime.decline",
      "outcomes":[{
        "id":"declined", "weight":1,
        "resultTemplateId":"offer_fulltime.declined",
        "effects":[{"type":"influence","targetType":"event","targetId":"job_search","multiplier":1.4,"durationMonths":12}]
      }]
    }]
  }]
}
```

**定義整合性:** すべての参照先IDが存在すること、各選択に少なくとも1つの有効な結果があること、全結果の重み合計が正であることを起動時に検証する。選択が表示されるにもかかわらず結果条件を満たす候補が0件になる定義はエラーとする。

## 30. 選択実行の厳密な手順

```js
function executeChoice(state, {eventInstanceId, choiceId, actionId}, definitions) {
  if (state.processedActionIds.includes(actionId)) return {state, duplicate:true};
  if (state.mode !== 'awaitingChoice') throw new Error('NOT_AWAITING_CHOICE');
  if (state.currentEvent?.id !== eventInstanceId) throw new Error('STALE_EVENT');
  const draft = structuredClone(state);
  const event = resolveEventDefinition(draft.currentEvent, definitions);
  const choice = resolveEligibleChoice(event, choiceId, draft);
  const outcome = weightedPick(eligibleOutcomes(choice, draft), draft); // RNG状態もdraftで更新
  const before = snapshotTrackedState(draft);
  applyValidatedEffects(draft, outcome.effects, draft.currentEvent);
  validateInvariants(draft);
  const history = appendHistoryWithCauseLinks(draft, choice, outcome, before);
  registerConsequences(draft, outcome.consequences ?? [], history.id);
  const changes = diffTrackedState(before, draft);
  const result = renderResultFromCommittedValues(draft, history, changes);
  draft.currentEvent.status = 'resolved';
  draft.mode = 'awaitingResult';
  draft.lastResult = result;
  draft.processedActionIds.push(actionId);
  return {state:draft, result};
}
```

- **単一コミット:** 検証に失敗した場合、元の `state` は一切変更しない。
- `actionId` はUI操作単位の一意ID。二重クリック・再描画時の再実行を防ぐ。
- 結果画面に進む前にセーブしても、`awaitingResult` と `lastResult` を復元できる。
- 結果確認 (`acknowledgeResult`) は効果を再適用せず、`lastResult` を表示済みとしてマークしてキュー処理を再開する。
- 実行時に選択肢が無効になった場合は、イベントを安全に再構築するかキャンセルし、古い選択を強行しない。
- `structuredClone` が使えない対象環境なら、専用の不変更新ユーティリティを使用する。

## 31. 月次スケジューラ・イベントキュー

```ts
interface QueuedEvent {
  id:Id; eventId:Id; dueMonth:Month;
  source:'fixed'|'consequence'|'direct'|'random';
  priority:number; insertionOrder:number;
  causeHistoryId?:Id; chainRootId?:Id; chainDepth:number;
  scenarioInstanceId?:Id; status:'pending'|'consumed'|'cancelled';
}
interface SchedulerState {
  monthInitialized:boolean;
  monthlyRandomDraws:number;
  monthlyVisibleEvents:number;
  monthlyChainExecutions:number;
  sequenceInMonth:number;
}
```

### 31.1 月次進行順序

1. 月初初期化（1回だけ）: 時間経過に伴う状態更新、期限切れInfluence/Consequenceの失効、シナリオ状態評価。
2. 確定イベントをキューに追加。
3. 期限到来のConsequenceを評価。`once` は期間中最初の適格月で1回抽選、失敗したら終了。`monthly` は適格な各月に抽選（毎月の確率を使用）。
4. 年齢別目標頻度から通常イベント数を抽選し、候補カテゴリ65:25:10を基準に選ぶ。
5. キューから1件ずつ取り出し、**実行直前**に発生条件を再評価。
6. 重要な選択イベントなら `awaitingChoice` にして中断。選択確定後は `awaitingResult` にして中断。
7. 結果確認後、**同じ月の残キュー**に復帰。キューが空になって初めて次月へ。

### 31.2 イベント件数と表示

- 年齢別の目標値は「プレイヤーに提示する通常抽選イベント」の目安とする。
- 内部状態の月次変化はイベント件数に数えない。
- 確定・連鎖・Consequenceは通常抽選枠外。ただし可視イベントが月4件を超えた場合、非緊急のものを次月へ延期する `[調整可]`。
- 通常抽選は月0〜2件を原則とし、期待値 `λ = 年間目標/12` のポアソン抽選を0〜2に切り詰める。切り詰めによる年間実績の下振れは統計テストで補正する。
- 固定・期限付き・直接連鎖の優先順位は `fixed > consequence > direct > random` を基本とし、同優先度は `dueMonth, priority, insertionOrder` の安定ソート。
- 連鎖の深さは起点から最大3、月の直接連鎖実行は最大3件 `[調整可]`。同一連鎖内の同一イベントID再訪は禁止。
- 結果確定で新たにキューへ追加した連鎖は、未処理イベントと優先度順で統合する。既に処理済みの月次処理を再初期化しない。

### 31.3 抽選の重み

```text
候補重み = 基本重み × シナリオ補正 × 状態補正 × 履歴補正 × Influence倍率 × 再発抑制
```

- 発生条件不成立なら重み0。
- Influence倍率の合成値は0.2〜5.0に制限 `[調整可]`。
- 重み0の候補は選ばない。候補なしのカテゴリは除外してカテゴリ重みを再正規化。
- 予約されたConsequenceが失敗しても、同名イベントが一般抽選から独立に発生する場合がある。二重発生防止のクールダウンを適用する。

## 32. Influence / Consequenceの寿命と因果性

### 32.1 Influence

- `startMonth = 現在月`、`endMonth = startMonth + durationMonths` とし、有効期間は `[startMonth, endMonth)`。
- 適用先は `event`、`scenario`、`variant`。未登録の対象IDは定義検証エラー。
- `maxApplications` 未指定なら有効期間中無制限。指定時は対象の抽選評価で**実際に採用された時**のみ1消費。
- 同一候補に複数Influenceがあれば倍率を掛け合わせて最後にクランプ。
- Influenceによって候補になったことと、Influenceが唯一の原因だったことを混同しない。

### 32.2 Consequence

- `earliestMonth = 発生月 + earliestDelayMonths`、`latestMonth = 発生月 + latestDelayMonths`（両端含む）。
- `once`: 最初に条件を満たした月に1回抽選。外れれば `expired`。期間内に条件を満たさなければ最終月の後で `expired`。
- `monthly`: 各月1回まで抽選。成功で `triggered`、期限後は `expired`。
- 発生時に予約元履歴への `consequence` 原因リンクを必ず付ける。
- 予約の発生条件が後に不成立となっても、期限までは保留できる。
- 一般イベント抽選と予約イベントが同じ月に重複した場合は、先に実行された1件を採用し、後者を重複キャンセルする。

### 32.3 因果関係の文章化

- `direct` / `consequence`: 「あのときの選択がきっかけで」など、明確な原因として言及可能。
- `scenario`: 「仕事を続けるうちに」など、状況・経過として言及可能。
- `influence`: 「以前の経験も影響しているかもしれない」など、寄与として控えめに表現。
- 原因履歴が削除・不整合なら、原因参照なしの汎用テンプレートにフォールバック。
- 文章化する原因は最大2件 `[調整可]`。内部履歴にはすべて保持。

## 33. UIの画面状態と操作契約

### 33.1 メイン画面（上から）

1. キャラクター情報（名前、年齢、居住地・街区特性、職業、パートナー、子供、資産）。
2. 表示パラメータ8項目（-50〜50の通常表示。資質による可動範囲は内部で維持）。
3. 「最近の人生」: 主要な進行中シナリオ最大3〜5件と折りたたみ詳細。
4. 現在のイベント: 年月、タイトル、本文、選択肢、任意の自由入力。
5. 選択結果: 結果本文、差分、生活の変化、過去の選択との関連。
6. 進行操作: 1イベント進行、自動進行、停止、速度。
7. 履歴・人生の転機・日記・経験・居住地変更（折りたたみ）。

### 33.2 状態別操作

| `mode` | 表示 | 許可する主操作 | 禁止する操作 |
|---|---|---|---|
| idle | 通常画面 | 進行開始 | 未表示イベントの選択 |
| running | 進行状況 | 停止 | 重複進行開始 |
| awaitingChoice | イベントと選択肢 | 選択確定、任意の自由入力 | 次月進行 |
| awaitingResult | 結果と差分 | 「次へ」 | 同じ選択の再確定 |
| paused | 停止画面 | 再開、保存 | 自動的な月更新 |
| completed | 人生のまとめ | 履歴参照、新規開始 | 進行継続 |

### 33.3 結果表示ルール

- 選択直後に結果文章と**実際に変化した項目のみ**を表示。
- パラメータは `変更前 → 変更後 (実増減)`。上限で変化0なら変化ありとして誤表示しない。
- シナリオ操作は自然文（例「正社員として働き始めた」）に変換。内部IDは見せない。
- `influence` は「仕事の経験を積む機会が増えそうだ」等の方向性のみ表示し、確率や将来結果は確約しない。
- `consequence` の予約も原則非公開。物語として不自然な未来予告を避ける。
- 結果表示中はキュー・時間を停止し、「次へ」で同月の次イベントへ進む。
- UIが再描画されても結果は再抽選しない。

### 33.4 転機の履歴

- `importance=3`、または職業・進学・恋人・結婚・居住地など主要状態の変化を記録対象とする。
- 各転機に「選んだこと」「直後の結果」「後年に生じた影響」を表示。
- 後続イベント発生時に原因リンクから転機へ影響を追記する。
- 同じ原因に対する複数の後続イベントを時系列で閲覧できる。

## 34. テンプレート仕様

- テンプレートは `title`、`body`、`choiceText`、`result` に共通利用できる。
- 許可変数は `character.*`、`participants.<role>.*`、`location.*`、`scenario.*`、`cause.*`、`changes.*` など登録済みパスのみ。
- 条件分岐は宣言的な条件構造と複数候補テンプレートで表す。任意のJavaScriptコード文字列を評価しない。
- イベント生成時に登場人物・場所・初期文章の変数を固定。選択後の結果文では、その固定値に加えて確定した差分を使用。
- 履歴には表示済み文章を保存し、テンプレート改修後も過去の履歴が変わらないようにする。
- 未解決変数がある場合は検証エラーとし、実行時には安全な汎用文へフォールバックする。

## 35. シナリオの競合・多重実行

- シナリオは `ScenarioDefinition`（設計）と `ScenarioInstance`（実行）を分離する。
- 同じ定義の複数インスタンスを許容するかは `singleton` / `perParticipant` / `multiple` で宣言する（`ScenarioDef` に実装時追加）。
- `exclusiveGroup` が同じアクティブなシナリオの同時存在は原則禁止。開始時に明示的な終了・中断がない場合は検証エラー。
- 例: `parttime_work` から `fulltime_work` へ切替時、旧シナリオを `complete` してから新シナリオを `start`。
- 入院は職業状態を勝手に変更せず、仕事シナリオを `pause` する。退院時に再開条件を再評価する。
- 人間関係は人物IDで管理し、同じ「友人」という役割だけで別人を取り違えない。

## 36. セーブ形式と復元

```json
{
  "schemaVersion":1,
  "savedAt":"2026-10-21T00:00:00.000Z",
  "game": {
    "month":276,
    "rngState":123456789,
    "nextId":250,
    "mode":"awaitingResult",
    "character":{},
    "relationships":{},
    "scenarios":[],
    "influences":[],
    "consequences":[],
    "eventQueue":[],
    "history":[],
    "currentEvent":null,
    "lastResult":{},
    "processedActionIds":[],
    "scheduler":{"monthInitialized":true,"monthlyRandomDraws":1,"monthlyVisibleEvents":1,"monthlyChainExecutions":0,"sequenceInMonth":2}
  }
}
```

上記は形状例であり、空の `{}` は実際には対応する必須型の値で埋める。セーブ前後で `mode`、イベントキュー、現在のイベント、確定済みテンプレート変数、乱数状態、結果画面の内容を保存する。セーブ読み込み時はスキーマ検証し、破損時はゲーム状態を変更しない。`localStorage` で容量不足が懸念される場合はIndexedDBへ切り替え可能な保存アダプタを設ける。

## 37. テスト仕様（実装可能な受け入れ条件）

| ID | 前提・操作 | 期待結果 |
|---|---|---|
| T01 | `parttime` で正社員登用を承諾 | 雇用状態が `fulltime`、旧シナリオ終了、新シナリオ開始 |
| T02 | 同じ `actionId` で2回確定 | 効果・履歴・予約が1回のみ |
| T03 | `awaitingResult` 中に進行操作 | 月・キュー位置が変化しない |
| T04 | 同じ月に重要イベント2件 | 1件目の結果確認後に2件目でも停止 |
| T05 | パラメータが上限で+3 | 実増分0。UIに+3と表示しない |
| T06 | Influence倍率1.8 | 対象イベントの有効重みが1.8倍（合成上限内） |
| T07 | Influence有効期限超過 | 抽選補正が適用されない |
| T08 | Consequence `once` が不成立の月 | 条件成立まで保留、期限超過で失効 |
| T09 | Consequence `once` が抽選失敗 | 同じ予約から再抽選しない |
| T10 | 同一乱数状態・同一選択 | 同一結果・履歴・後続予約 |
| T11 | 予約後に発生条件が失効 | 不適切なイベントを表示しない |
| T12 | 入院で仕事一時停止、退院 | 条件が満たされれば仕事を再開 |
| T13 | 過去の選択から派生イベント | 原因履歴IDが記録され、自然文で参照可能 |
| T14 | `influence` のみの寄与 | 唯一の直接原因と断定しない |
| T15 | イベント途中でセーブ・ロード | 二重抽選なし、同じ選択・結果画面に復帰 |
| T16 | 選択肢の結果重み合計0 | 定義検証で検出しゲーム開始前に通知 |
| T17 | 無効な状態キーへの書込み | コミット拒否、元状態維持 |
| T18 | 直接連鎖が循環 | 深さ・訪問履歴制限で停止 |
| T19 | 同一人物の再登場 | 同一人物IDと関係性を維持 |
| T20 | 異なる選択で1000試行 | 将来の状態・イベント分布に説明可能な差が出る |

### 37.1 統計検証

- 年齢帯別の年間表示イベント数、重要イベント数、シナリオ由来率、同一イベント繰り返し率、予約失効率を集計する。
- 1,000〜10,000人生を固定シード群で自動実行する。
- 「選択の効果がない」選択肢を静的検査で検出する。少なくとも即時状態変更、シナリオ操作、Influence、Consequenceのいずれかを持つことを原則とする（意図的な現状維持は明示フラグで例外化）。
- 異なる選択を比較する際、乱数系列の消費差に注意し、複数シードでの集計により差を評価する。

## 38. モジュール分割とAPI

```text
src/
  core/
    game-state.js          # 状態の生成・整合性
    rng.js                 # シード付き乱数
    conditions.js          # 宣言的条件の評価
    effects.js             # 効果の検証・適用・差分
    choices.js             # 選択・結果分岐・トランザクション
    scenarios.js           # シナリオインスタンス管理
    scheduler.js           # 月次進行・イベントキュー
    influences.js          # 重み補正
    consequences.js        # 長期予約
    history.js             # 因果リンク・転機
    templates.js           # テンプレートの確定・描画
    definitions.js         # JSON定義のロード・検証
  ui/
    main-view.js
    event-view.js
    result-view.js
    history-view.js
  storage/
    save-store.js
  data/
    events/*.json
    scenarios/*.json
    templates/*.json
  tests/
    choice.test.js
    scheduler.test.js
    scenario.test.js
    causality.test.js
    save-restore.test.js
```

```ts
function getEligibleEvents(state:GameState, defs:Definitions):WeightedCandidate[];
function selectNextEvent(state:GameState, defs:Definitions):{state:GameState; event?:EventInstance};
function executeChoice(state:GameState, input:{eventInstanceId:Id; choiceId:Id; actionId:Id}, defs:Definitions):ChoiceCommit;
function acknowledgeResult(state:GameState):GameState;
function advanceUntilIntervention(state:GameState, defs:Definitions, maxSteps:number):GameState;
function saveGame(state:GameState):string;
function loadGame(serialized:string):GameState;
```

`advanceUntilIntervention` は1回の呼び出しで最大 `maxSteps` 件だけ処理し、UIを固めないように呼び出し元が小刻みに実行する。ブラウザタイマーはUI層で扱い、core側に依存させない。

## 39. 実装順序と完了条件

### Phase 0: 基盤（必須）
- データ定義のID整合性・型検証、シード付き乱数、セーブスキーマを整備。
- **完了条件:** T10、T16、T17、T15が通る。

### Phase 1: 選択の手応え（最優先）
- 効果の共通適用、実差分生成、選択結果UI、二重実行防止。
- **完了条件:** T01、T02、T03、T05が通る。結果画面で何が変わったかがわかる。

### Phase 2: 人生分岐
- シナリオ開始・終了・一時停止・再開と、月次キューの選択待ち再開を実装。
- **完了条件:** T04、T12が通る。選択ごとに後続候補が異なる。

### Phase 3: 長期影響
- Influence、Consequence、因果リンク、履歴参照テンプレートを実装。
- **完了条件:** T06〜T09、T11、T13、T14が通る。

### Phase 4: コンテンツと調整
- 就職失敗→アルバイト→正社員／起業、恋人との関係、過労→入院→復職の3系統で試験実装。
- 大量自動実行と転機UIを追加。
- **完了条件:** T18〜T20が通り、重要な選択が将来の展開に影響することを確認できる。

## 40. 実装時に変更してよい値と変更してはいけない契約

**調整可:** 年齢別イベント目標値、カテゴリ比率65:25:10、Influence倍率上限0.2〜5.0、可視イベント月4件、直接連鎖3段階、履歴に表示する原因数、各イベントの重み・クールダウン。

**契約として固定:** 実行前条件の再検証、状態更新の原子性、イベントIDと人物IDの一意性、確定結果の再抽選禁止、選択→結果→確認の停止状態、過去の表示文保存、原因リンクの種別、同月残キューの保持、シード再現性。

## 41. 開発者向けチェックリスト

- [ ] すべての選択肢に少なくとも一つの実効的な変化または明示的な現状維持がある
- [ ] 選択結果の数値は要求差分ではなく確定後の実差分で表示する
- [ ] 状態変更と履歴記録が一括でコミットされる
- [ ] 結果確認まで自動進行が停止する
- [ ] 同年・同月の残イベントを飛ばさない
- [ ] InfluenceとConsequenceの重複・期限・発生条件を検証する
- [ ] 過去の選択への因果リンクが記録される
- [ ] 重要な選択は将来のイベント候補・重み・シナリオのいずれかを変える
- [ ] 人物・場所・テンプレート変数がイベント内で固定される
- [ ] セーブ・ロードで同じ選択画面または結果画面に戻れる
- [ ] 大量自動実行でイベント密度と分岐の有効性を確認する

---

**設計の最終原則:** 選択は望む結果を保証しない。しかし、選択によって未来の可能性は確実に変わり、その変化をプレイヤーが後から理解できるようにする。
