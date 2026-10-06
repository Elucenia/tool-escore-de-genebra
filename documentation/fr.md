<!-- ELUCENIA technical documentation · escore-de-genebra · fr · no clinical/professional/rights approval -->

# Score de Genève révisé

[conditions, sources et autorisations](https://elucenia.org/fr/outils/escore-de-genebra)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Âge \> 65 ans

`idade65`

### Antécédent de TVP ou d’EP

`tev`

### Chirurgie (anesthésie générale) ou fracture d’un membre inférieur datant de ≤ 1 mois

`cirurgia`

### Cancer actif (ou guéri depuis moins de 1 an)

`cancer`

### Douleur unilatérale du membre inférieur

`dor`

### Hémoptysie

`hemoptise`

### Fréquence cardiaque

`fc`

- `0` — \< 75 bpm
- `1` — 75 à 94 bpm
- `2` — ≥ 95 bpm

### Douleur à la palpation veineuse profonde et œdème unilatéral du membre inférieur

`palpacao`

## Édition de la méthode

Genève révisé/Le Gal 2006 et révisé simplifié/Klok 2008 ; pondérations distinctes

## Formule documentée

Révisé (Le Gal 2006) : âge \>65 = 1 ; TVP/EP antérieure = 3 ; chirurgie/fracture ≤1 mois = 2 ; cancer actif = 2 ; douleur unilatérale jambe = 3 ; hémoptysie = 2 ; FC 75–94 = 3 ou ≥95 = 5 ; douleur veineuse et œdème unilatéral = 4.

Simplifié (Klok 2008) : 1 par item ; FC ≥95 vaut 2 (75–94 vaut 1).

## Limites et population

Le Genève révisé de 2006 a été étudié chez des personnes présentant une suspicion clinique d’embolie pulmonaire aux urgences. La cotation exige les définitions de l’édition, dont chirurgie ou fracture au cours du mois précédent et catégories précises de fréquence cardiaque ; la version simplifiée a ses propres pondérations. Une faible probabilité ne signifie pas l’absence d’embolie et doit être intégrée au protocole diagnostique.

## Références

- [Le Gal G et al. Prediction of pulmonary embolism in the emergency department: the revised Geneva score. Ann Intern Med, 2006.](https://doi.org/10.7326/0003-4819-144-3-200602070-00004)

- [Klok FA et al. Simplification of the revised Geneva score for assessing clinical probability of pulmonary embolism. Arch Intern Med, 2008.](https://doi.org/10.1001/archinte.168.19.2131)

- [Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J, 2020.](https://doi.org/10.1093/eurheartj/ehz405)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Probabilité clinique faible (prévalence d’EP de 8%)

| Détails du résultat | |
| --- | --- |
| Modèle à 2 niveaux | EP improbable (0 à 5) |
| Genève simplifié | 0 (probabilité faible ; EP improbable) |

EP improbable : un D-dimère normal exclut une EP sans examen d’imagerie.


### 2

Probabilité clinique intermédiaire (prévalence d’EP de 28%)

| Détails du résultat | |
| --- | --- |
| Modèle à 2 niveaux | EP improbable (0 à 5) |
| Genève simplifié | 2 (probabilité intermédiaire ; EP improbable) |

EP improbable : un D-dimère normal exclut une EP sans examen d’imagerie.


### 3

Probabilité clinique intermédiaire (prévalence d’EP de 28%)

| Détails du résultat | |
| --- | --- |
| Modèle à 2 niveaux | EP probable (≥ 6) |
| Genève simplifié | 3 (probabilité intermédiaire ; EP probable) |

EP probable : angioscanner thoracique.


### 4

Probabilité clinique élevée (prévalence d’EP de 74%)

| Détails du résultat | |
| --- | --- |
| Modèle à 2 niveaux | EP probable (≥ 6) |
| Genève simplifié | 5 (probabilité élevée ; EP probable) |

Forte probabilité : aller directement à l’angioscanner ; le D-dimère ne doit pas être utilisé pour exclure.

