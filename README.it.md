# Afrodisiace fără frontiere

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · **Italiano** · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versione:** 1.2.0 · **Ultimo aggiornamento:** 2026-10-19

Lingue dell'interfaccia: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Compendio culturale e botanico su 22 alimenti e piante tradizionalmente associati al desiderio, con il livello di evidenza indicato per ogni voce. Un unico file HTML, offline.

**Online:** https://chiuta.github.io/Afrodisiace-fara-frontiere/

![Schermata](screenshot.png)

## Che cos'è

Una guida educativa e culturale: 22 voci (10 per entrambi, 6 per gli uomini, 6 per le donne), ciascuna con una breve storia/tradizione e un sigillo del livello di evidenza: «Tradizione», «Preliminare» o «Alcuni studi». Nessun livello significa «efficacia dimostrata». Non è un consiglio medico.

## Funzioni

- Elenco di 22 voci, filtrabile per destinatari (Tutti / Per entrambi / Per gli uomini / Per le donne).
- Filtro aggiuntivo per livello di evidenza (Tradizione / Preliminare / Alcuni studi), combinabile con i destinatari e con la ricerca; pulsante «Reimposta i filtri» quando non ci sono risultati; il tasto `/` sposta il cursore nella ricerca.
- Tema scuro automatico (`prefers-color-scheme: dark`) e stile di stampa (senza controlli e generatore).
- Ricerca nei nomi e nelle descrizioni, senza distinzione tra diacritici e maiuscole/minuscole (ad es. «sofran» trova «Șofranul»).
- Sezioni «Come funziona, in realtà?» (meccanismi invocati, con riserve) e «Oltre gli alimenti» (sonno, movimento, stress, alcol, relazione).
- «Generatore di serata romantica»: sceglie 3 voci a caso (rimescolamento di Fisher–Yates) come idee culinarie, non come cura.
- Un avviso ben visibile sopra l'elenco e una nota dettagliata in fondo (interazioni con i farmaci, gravidanza, cause mediche).

## Guida all'uso

1. Leggi la nota «Educativo, non un consiglio medico» sopra l'elenco.
2. Scegli i destinatari con i pulsanti di filtro o scrivi nella casella di ricerca.
3. Leggi il sigillo di ciascuna voce (la legenda è sopra l'elenco) e il relativo testo.
4. Facoltativo: premi «Sorprendimi» per tre idee a caso.
5. Prima di assumere qualsiasi integratore, leggi la «Nota importante» e parlane con il medico o il farmacista.

## Privacy e rete

- Non usa `localStorage`, `sessionStorage`, IndexedDB né cookie.
- Non effettua chiamate di rete e non carica risorse esterne; non contiene link esterni. La politica CSP della pagina vieta le connessioni esterne e consente solo lo script proprio, tramite hash (senza `'unsafe-inline'` per gli script).
- Non richiede permessi al browser.

## Limiti e avvertenze

- **Contenuto educativo e culturale, non un consiglio medico.** Descrive tradizioni e credenze; non esistono prove scientifiche solide che un alimento o una pianta dell'elenco curi problemi di desiderio o di funzione sessuale.
- Non rimandare la visita medica e non sostituire una terapia prescritta. Problemi persistenti o improvvisi possono avere cause mediche.
- Gli integratori a base di erbe possono interagire con i farmaci e non sono controllati come i farmaci; evitali in gravidanza/allattamento senza parere medico.
- I testi sono sintesi editoriali scritte dall'autore; le affermazioni sugli studi sono generali, senza riferimenti bibliografici, e non sono state verificate sistematicamente su fonti primarie in questo repository.
- La guida è rivolta agli adulti.

## Uso locale / offline

Scarica `index.html` e aprilo in un browser; non serve Internet.

## Licenza

MIT — vedi il file LICENSE.

## Autore

Alexio — Alexandru-Ionuț Chiuță, contatto: alexio@trom.tf

## Riepilogo

Un compendio in lingua romena, in un unico file e offline, di 22 alimenti ed erbe tradizionalmente associati al desiderio. Ogni voce porta un badge del livello di evidenza (tradizione / preliminare / alcuni piccoli studi); nessuna è presentata come dimostrata. La ricerca ignora i diacritici, l'estrazione casuale usa un rimescolamento di Fisher–Yates e sopra l'elenco compare un banner di avvertenza medica. Nessuna memorizzazione, nessuna chiamata di rete, nessuna risorsa esterna. Solo a scopo educativo, non un consiglio medico. Licenza: MIT (vedi il file LICENSE).

## Cronologia / Changelog

- 1.1.0 — 2026-10-14: copia di sicurezza ed etichettatura dei dati (fff-kit).
- 1.0.0 — 2026-10-12: la versione e la data dell'ultimo aggiornamento sono mostrate nell'app
- **11 ottobre 2026** (round 7) — nuova sezione «Dove verificare ancora» con due link a pagine informative per il pubblico (NCCIH — Herbs at a Glance; NIH Office of Dietary Supplements — schede informative), la cui esistenza è stata confermata con una ricerca web nell'ottobre 2026; il testo precisa che le schede non citano studi singoli. Non è stato aggiunto nuovo contenuto medico; l'app resta in una sola lingua (RO) perché tradurre i testi su evidenze/avvertenze introdurrebbe contenuti clinici non verificati. 0 errori, axe 0 violazioni a 1280×800 e 360×740.
- **11 ottobre 2026** — filtro per livello di evidenza, «Reimposta i filtri», scorciatoia `/`, tema scuro, stile di stampa; CSP con hash dello script al posto di `'unsafe-inline'`. Non è stato aggiunto nuovo contenuto medico; i testi delle voci sono invariati.
- **11 ottobre 2026** — corretto l'ordine dei titoli (era comparso un `h2` nascosto visivamente «Alimenti e piante» prima delle schede, e i sottotitoli «Come funziona, in realtà?» sono `h3` invece di `h4`, senza cambiamenti visibili); axe-core: 0 violazioni a 1280×800 e 360×740; verificato che il filtro di ricerca funzioni. Il contenuto (i livelli di evidenza) non è stato modificato; l'app non ha un numero di versione.
