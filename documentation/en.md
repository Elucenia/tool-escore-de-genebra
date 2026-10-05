<!-- ELUCENIA technical documentation · escore-de-genebra · en · no clinical/professional/rights approval -->

# Revised Geneva score

[conditions, sources and permissions](https://elucenia.org/en/tools/escore-de-genebra)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Age \> 65 years

`idade65`

### Previous DVT or PE

`tev`

### Surgery (general anesthesia) or lower-limb fracture ≤ 1 month ago

`cirurgia`

### Active cancer (or cured less than 1 year ago)

`cancer`

### Unilateral lower-limb pain

`dor`

### Hemoptysis

`hemoptise`

### Heart rate

`fc`

- `0` — \< 75 bpm
- `1` — 75 to 94 bpm
- `2` — ≥ 95 bpm

### Deep venous tenderness and unilateral lower-limb edema

`palpacao`

## Method edition

Revised Geneva/Le Gal 2006 and Simplified Revised Geneva/Klok 2008; separate weights

## Documented formula

Revised (Le Gal 2006): age \>65 = 1; prior DVT/PE = 3; surgery/fracture ≤1 month = 2; active cancer = 2; unilateral leg pain = 3; hemoptysis = 2; HR 75–94 = 3 or ≥95 = 5; venous tenderness and unilateral edema = 4.

Simplified (Klok 2008): 1 per item; HR ≥95 scores 2 (75–94 scores 1).

## Limits and population

The revised Geneva from 2006 was studied in emergency patients with clinically suspected pulmonary embolism. Scoring requires the edition’s definitions, including surgery/fracture in the preceding month and specific heart-rate categories; the simplified version has its own weights. Low probability does not mean no embolism and must be integrated into the diagnostic protocol.

## References

- [Le Gal G et al. Prediction of pulmonary embolism in the emergency department: the revised Geneva score. Ann Intern Med, 2006.](https://doi.org/10.7326/0003-4819-144-3-200602070-00004)

- [Klok FA et al. Simplification of the revised Geneva score for assessing clinical probability of pulmonary embolism. Arch Intern Med, 2008.](https://doi.org/10.1001/archinte.168.19.2131)

- [Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J, 2020.](https://doi.org/10.1093/eurheartj/ehz405)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
