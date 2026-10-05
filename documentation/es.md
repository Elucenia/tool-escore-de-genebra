<!-- ELUCENIA technical documentation · escore-de-genebra · es · no clinical/professional/rights approval -->

# Puntuación de Ginebra revisada

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/escore-de-genebra)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Edad \> 65 años

`idade65`

### TVP o EP previa

`tev`

### Cirugía (anestesia general) o fractura de miembro inferior hace ≤ 1 mes

`cirurgia`

### Neoplasia activa (o curada hace menos de 1 año)

`cancer`

### Dolor unilateral de miembro inferior

`dor`

### Hemoptisis

`hemoptise`

### Frecuencia cardíaca

`fc`

- `0` — \< 75 bpm
- `1` — 75 a 94 bpm
- `2` — ≥ 95 bpm

### Dolor a la palpación venosa profunda y edema unilateral de miembro inferior

`palpacao`

## Edición del método

Genebra revisado/Le Gal 2006 y revisado simplificado/Klok 2008; pesos separados

## Fórmula documentada

Revisado (Le Gal 2006): edad \>65 = 1; TVP/TEP previo = 3; cirugía/fractura ≤1 mes = 2; cáncer activo = 2; dolor unilateral pierna = 3; hemoptisis = 2; FC 75–94 = 3 o ≥95 = 5; dolor venoso y edema unilateral = 4.

Simplificado (Klok 2008): 1 por ítem; FC ≥95 vale 2 (75–94 vale 1).

## Límites y población

El Ginebra revisado de 2006 se estudió en personas con sospecha clínica de embolia pulmonar en urgencias. La puntuación exige las definiciones de la edición, incluidas cirugía/fractura en el mes anterior y categorías específicas de frecuencia cardíaca; la versión simplificada tiene sus propios pesos. La probabilidad baja no significa ausencia de embolia y debe integrarse en el protocolo diagnóstico.

## Referencias

- [Le Gal G et al. Prediction of pulmonary embolism in the emergency department: the revised Geneva score. Ann Intern Med, 2006.](https://doi.org/10.7326/0003-4819-144-3-200602070-00004)

- [Klok FA et al. Simplification of the revised Geneva score for assessing clinical probability of pulmonary embolism. Arch Intern Med, 2008.](https://doi.org/10.1001/archinte.168.19.2131)

- [Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J, 2020.](https://doi.org/10.1093/eurheartj/ehz405)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
