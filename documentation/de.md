<!-- ELUCENIA technical documentation · escore-de-genebra · de · no clinical/professional/rights approval -->

# Revidierter Genfer Score

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/escore-de-genebra)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Alter \> 65 Jahre

`idade65`

### Frühere TVT oder Lungenembolie

`tev`

### Operation (Allgemeinanästhesie) oder Fraktur der unteren Extremität vor ≤ 1 Monat

`cirurgia`

### Aktive Krebserkrankung (oder Heilung vor weniger als 1 Jahr)

`cancer`

### Einseitiger Schmerz der unteren Extremität

`dor`

### Hämoptyse

`hemoptise`

### Herzfrequenz

`fc`

- `0` — \< 75 bpm
- `1` — 75 bis 94 bpm
- `2` — ≥ 95 bpm

### Druckschmerz entlang der tiefen Venen und einseitiges Beinödem

`palpacao`

## Fassung der Methode

Revidierter Genfer/Le Gal 2006 und vereinfachter revidierter Genfer/Klok 2008; getrennte Gewichtungen

## Dokumentierte Formel

Revidiert (Le Gal 2006): Alter \>65 = 1; frühere TVT/LE = 3; Operation/Fraktur ≤1 Monat = 2; aktiver Krebs = 2; einseitiger Beinschmerz = 3; Hämoptyse = 2; HF 75–94 = 3 oder ≥95 = 5; Venendruckschmerz und einseitiges Ödem = 4.

Vereinfacht (Klok 2008): 1 je Item; HF ≥95 zählt 2 (75–94 zählt 1).

## Grenzen und Population

Der revidierte Genfer Score von 2006 wurde bei Notfallpatienten mit klinischem Lungenembolieverdacht untersucht. Die Punktvergabe erfordert die Definitionen der Ausgabe, einschließlich Operation oder Fraktur im vergangenen Monat und spezifischer Herzfrequenzkategorien; die vereinfachte Version hat eigene Gewichtungen. Eine geringe Wahrscheinlichkeit bedeutet nicht das Fehlen einer Embolie und muss in das diagnostische Protokoll integriert werden.

## Referenzen

- [Le Gal G et al. Prediction of pulmonary embolism in the emergency department: the revised Geneva score. Ann Intern Med, 2006.](https://doi.org/10.7326/0003-4819-144-3-200602070-00004)

- [Klok FA et al. Simplification of the revised Geneva score for assessing clinical probability of pulmonary embolism. Arch Intern Med, 2008.](https://doi.org/10.1001/archinte.168.19.2131)

- [Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J, 2020.](https://doi.org/10.1093/eurheartj/ehz405)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Niedrige klinische Wahrscheinlichkeit (Prävalenz von LE von 8%)

| Ergebnisdetails | |
| --- | --- |
| 2-Stufen-Modell | LE unwahrscheinlich (0 bis 5) |
| Vereinfachtes Genf | 0 (niedrige Wahrscheinlichkeit; LE unwahrscheinlich) |

LE unwahrscheinlich: Ein normaler D-Dimer-Wert schließt eine LE ohne Bildgebung aus.


### 2

Intermediäre klinische Wahrscheinlichkeit (Prävalenz von LE von 28%)

| Ergebnisdetails | |
| --- | --- |
| 2-Stufen-Modell | LE unwahrscheinlich (0 bis 5) |
| Vereinfachtes Genf | 2 (intermediäre Wahrscheinlichkeit; LE unwahrscheinlich) |

LE unwahrscheinlich: Ein normaler D-Dimer-Wert schließt eine LE ohne Bildgebung aus.


### 3

Intermediäre klinische Wahrscheinlichkeit (Prävalenz von LE von 28%)

| Ergebnisdetails | |
| --- | --- |
| 2-Stufen-Modell | LE wahrscheinlich (≥ 6) |
| Vereinfachtes Genf | 3 (intermediäre Wahrscheinlichkeit; LE wahrscheinlich) |

LE wahrscheinlich: CT-Angiographie des Thorax.


### 4

Hohe klinische Wahrscheinlichkeit (Prävalenz von LE von 74%)

| Ergebnisdetails | |
| --- | --- |
| 2-Stufen-Modell | LE wahrscheinlich (≥ 6) |
| Vereinfachtes Genf | 5 (hohe Wahrscheinlichkeit; LE wahrscheinlich) |

Hohe Wahrscheinlichkeit: direkt zur CT-Angiographie; D-Dimer sollte nicht zum Ausschluss verwendet werden.

