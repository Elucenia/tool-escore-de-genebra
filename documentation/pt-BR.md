<!-- ELUCENIA technical documentation · escore-de-genebra · pt-BR · no clinical/professional/rights approval -->

# Escore de Genebra revisado

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/escore-de-genebra)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Idade \> 65 anos

`idade65`

### TVP ou TEP prévio

`tev`

### Cirurgia (anestesia geral) ou fratura de membro inferior há ≤ 1 mês

`cirurgia`

### Neoplasia ativa (ou curada há menos de 1 ano)

`cancer`

### Dor unilateral em membro inferior

`dor`

### Hemoptise

`hemoptise`

### Frequência cardíaca

`fc`

- `0` — \< 75 bpm
- `1` — 75 a 94 bpm
- `2` — ≥ 95 bpm

### Dor à palpação venosa profunda e edema unilateral do membro inferior

`palpacao`

## Edição do método

Revised Geneva/Le Gal 2006 e Simplified Revised Geneva/Klok 2008; pesos separados

## Fórmula documentada

Revisado (Le Gal 2006): idade \> 65 = 1; TVP/TEP prévio = 3; cirurgia ou fratura ≤ 1 mês = 2; neoplasia ativa = 2; dor unilateral em membro inferior = 3; hemoptise = 2; FC 75–94 = 3 ou ≥ 95 = 5; dor à palpação venosa e edema unilateral = 4.

Simplificado (Klok 2008): 1 ponto por item, e FC ≥ 95 vale 2 (75–94 vale 1).

## Limites e população

O Genebra revisado de 2006 foi estudado em pessoas com suspeita clínica de embolia pulmonar em emergência. A pontuação exige as definições da edição, incluindo cirurgia/fratura no mês anterior e categorias específicas de frequência cardíaca; a versão simplificada possui pesos próprios. Probabilidade baixa não significa ausência de embolia e precisa ser integrada ao protocolo diagnóstico.

## Referências

- [Le Gal G et al. Prediction of pulmonary embolism in the emergency department: the revised Geneva score. Ann Intern Med, 2006.](https://doi.org/10.7326/0003-4819-144-3-200602070-00004)

- [Klok FA et al. Simplification of the revised Geneva score for assessing clinical probability of pulmonary embolism. Arch Intern Med, 2008.](https://doi.org/10.1001/archinte.168.19.2131)

- [Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J, 2020.](https://doi.org/10.1093/eurheartj/ehz405)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
