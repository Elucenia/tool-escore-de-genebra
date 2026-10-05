<!-- ELUCENIA technical documentation · escore-de-genebra · zh · no clinical/professional/rights approval -->

# 修订 Geneva 评分

[条件、来源与许可](https://elucenia.org/zh/tools/escore-de-genebra)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 年龄 \> 65 岁

`idade65`

### 既往深静脉血栓或肺栓塞

`tev`

### ≤ 1 个月内全身麻醉手术或下肢骨折

`cirurgia`

### 活动性恶性肿瘤（或治愈不足 1 年）

`cancer`

### 单侧下肢疼痛

`dor`

### 咯血

`hemoptise`

### 心率

`fc`

- `0` — \< 75 次心搏/分钟
- `1` — 75至94次/min
- `2` — ≥ 95 次心搏/分钟

### 深静脉压痛及单侧下肢水肿

`palpacao`

## 方法版本

修订Geneva/Le Gal 2006及简化修订/Klok 2008；不同权重

## 已记录的公式

修订版（Le Gal 2006）：年龄\>65 = 1；既往DVT/PE = 3；手术/骨折≤1个月 = 2；活动性癌症 = 2；单侧下肢痛 = 3；咯血 = 2；心率75–94 = 3或≥95 = 5；静脉压痛及单侧水肿 = 4。

简化版（Klok 2008）：各1分；心率≥95为2（75–94为1）。

## 限制与适用人群

2006年的修订版Geneva评分在急诊临床疑似肺栓塞者中研究。评分需要遵循该版本的定义，包括前一个月内的手术或骨折及特定心率类别；简化版有其自己的权重。低概率不意味着不存在肺栓塞，应与诊断方案结合使用。

## 参考文献

- [Le Gal G et al. Prediction of pulmonary embolism in the emergency department: the revised Geneva score. Ann Intern Med, 2006.](https://doi.org/10.7326/0003-4819-144-3-200602070-00004)

- [Klok FA et al. Simplification of the revised Geneva score for assessing clinical probability of pulmonary embolism. Arch Intern Med, 2008.](https://doi.org/10.1001/archinte.168.19.2131)

- [Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J, 2020.](https://doi.org/10.1093/eurheartj/ehz405)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
