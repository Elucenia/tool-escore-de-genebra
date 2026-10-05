<!-- ELUCENIA technical documentation · escore-de-genebra · it · no clinical/professional/rights approval -->

# Punteggio di Ginevra rivisto

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/escore-de-genebra)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Età \> 65 anni

`idade65`

### TVP o EP pregressa

`tev`

### Intervento (anestesia generale) o frattura dell’arto inferiore da ≤ 1 mese

`cirurgia`

### Neoplasia attiva (o guarita da meno di 1 anno)

`cancer`

### Dolore unilaterale dell’arto inferiore

`dor`

### Emottisi

`hemoptise`

### Frequenza cardiaca

`fc`

- `0` — \< 75 bpm
- `1` — 75 a 94 bpm
- `2` — ≥ 95 bpm

### Dolorabilità venosa profonda ed edema unilaterale dell’arto inferiore

`palpacao`

## Edizione del metodo

Ginevra rivisto/Le Gal 2006 e rivisto semplificato/Klok 2008; pesi separati

## Formula documentata

Rivisto (Le Gal 2006): età \>65 = 1; TVP/EP pregressa = 3; chirurgia/frattura ≤1 mese = 2; cancro attivo = 2; dolore unilaterale gamba = 3; emottisi = 2; FC 75–94 = 3 o ≥95 = 5; dolorabilità venosa e edema unilaterale = 4.

Semplificato (Klok 2008): 1 per item; FC ≥95 vale 2 (75–94 vale 1).

## Limiti e popolazione

Il Ginevra rivisto del 2006 è stato studiato in persone con sospetta embolia polmonare in pronto soccorso. Il punteggio richiede le definizioni dell’edizione, incluse chirurgia/frattura nel mese precedente e categorie specifiche di frequenza cardiaca; la versione semplificata ha pesi propri. Una bassa probabilità non significa assenza di embolia e deve essere integrata nel protocollo diagnostico.

## Riferimenti

- [Le Gal G et al. Prediction of pulmonary embolism in the emergency department: the revised Geneva score. Ann Intern Med, 2006.](https://doi.org/10.7326/0003-4819-144-3-200602070-00004)

- [Klok FA et al. Simplification of the revised Geneva score for assessing clinical probability of pulmonary embolism. Arch Intern Med, 2008.](https://doi.org/10.1001/archinte.168.19.2131)

- [Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J, 2020.](https://doi.org/10.1093/eurheartj/ehz405)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
