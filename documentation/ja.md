<!-- ELUCENIA technical documentation · escore-de-genebra · ja · no clinical/professional/rights approval -->

# 改訂Genevaスコア

[条件・出典・許諾](https://elucenia.org/ja/tools/escore-de-genebra)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 年齢 \> 65 歳

`idade65`

### 深部静脈血栓症・肺塞栓症の既往

`tev`

### ≤ 1か月前の全身麻酔手術または下肢骨折

`cirurgia`

### 活動性悪性腫瘍（または治癒後1年未満）

`cancer`

### 片側下肢痛

`dor`

### 喀血

`hemoptise`

### 心拍数

`fc`

- `0` — \< 75 拍/分
- `1` — 75～94拍/min
- `2` — ≥ 95 拍/分

### 深部静脈の圧痛と片側下肢浮腫

`palpacao`

## 方法の版

改訂Geneva/Le Gal 2006と簡略改訂/Klok 2008、重み別

## 記載された計算式

改訂（Le Gal 2006）：年齢\>65 = 1、DVT/PE既往 = 3、手術/骨折≤1か月 = 2、活動性癌 = 2、片側下肢痛 = 3、喀血 = 2、心拍75–94 = 3または≥95 = 5、静脈圧痛と片側浮腫 = 4。

簡略（Klok 2008）：各1点、心拍≥95は2（75–94は1）。

## 限界・対象集団

2006年の改訂Genevaスコアは、救急で臨床的に肺塞栓症が疑われた人を対象に研究されました。採点には、その版の定義が必要で、前月の手術・骨折や特定の心拍数区分を含みます。簡略版には独自の重みがあります。低い確率は塞栓がないことを意味せず、診断プロトコルに組み込む必要があります。

## 参考文献

- [Le Gal G et al. Prediction of pulmonary embolism in the emergency department: the revised Geneva score. Ann Intern Med, 2006.](https://doi.org/10.7326/0003-4819-144-3-200602070-00004)

- [Klok FA et al. Simplification of the revised Geneva score for assessing clinical probability of pulmonary embolism. Arch Intern Med, 2008.](https://doi.org/10.1001/archinte.168.19.2131)

- [Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J, 2020.](https://doi.org/10.1093/eurheartj/ehz405)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
