# Afrodisiace fără frontiere

Compendiu cultural și botanic despre 22 de alimente și plante asociate tradițional cu dorința, cu nivelul de dovezi marcat la fiecare intrare. Un singur fișier HTML, offline.

**Ultima actualizare:** 11 octombrie 2026

**Live:** https://chiuta.github.io/Afrodisiace-fara-frontiere/

![Captura de ecran](screenshot.png)

## Ce este

Un ghid educațional și cultural: 22 de intrări (10 pentru amândoi, 6 pentru bărbați, 6 pentru femei), fiecare cu o scurtă poveste/tradiție și un sigiliu al nivelului de dovezi: „Tradiție”, „Preliminar” sau „Unele studii”. Niciun nivel nu înseamnă „dovedit eficient”. Nu este sfat medical.

## Funcții

- Listă de 22 intrări, filtrabilă pe public (Toate / Pentru amândoi / Pentru bărbați / Pentru femei).
- Filtru suplimentar după nivelul de dovezi (Tradiție / Preliminar / Unele studii), combinabil cu publicul și căutarea; buton „Resetează filtrele” când nu există rezultate; tasta `/` mută cursorul în căutare.
- Temă întunecată automată (`prefers-color-scheme: dark`) și stil de tipărire (fără comenzi și generator).
- Căutare în nume și descrieri, fără sensibilitate la diacritice sau majuscule (ex.: „sofran” găsește „Șofranul”).
- Secțiuni „Cum funcționează, de fapt?” (mecanisme invocate, cu rezerve) și „Dincolo de alimente” (somn, mișcare, stres, alcool, relație).
- „Generator de seară romantică”: alege 3 intrări aleatoriu (amestec Fisher–Yates) ca idei culinare, nu ca tratament.
- Notă de avertizare vizibilă deasupra listei și notă detaliată la final (interacțiuni cu medicamente, sarcină, cauze medicale).

## Manual de utilizare

1. Citește nota „Educațional, nu sfat medical” de deasupra listei.
2. Alege publicul cu butoanele de filtrare sau scrie în căsuța de căutare.
3. Citește sigiliul fiecărei intrări (legenda e deasupra listei) și textul ei.
4. Opțional: apasă „Surprinde-mă” pentru trei idei aleatorii.
5. Înainte de a lua orice supliment, citește „Notă importantă” și discută cu medicul sau farmacistul.

## Confidențialitate și rețea

- Nu folosește `localStorage`, `sessionStorage`, IndexedDB sau cookie-uri.
- Nu face apeluri de rețea și nu încarcă resurse externe; nu conține linkuri externe. Politica CSP din pagină interzice conexiunile externe și permite doar scriptul propriu, pe hash (fără `'unsafe-inline'` pentru script).
- Nu cere permisiuni de browser.

## Limite și avertismente

- **Conținut educațional și cultural, nu sfat medical.** Descrie tradiții și credințe; nu există dovezi științifice solide că vreun aliment sau plantă din listă tratează probleme de dorință sau de funcție sexuală.
- Nu amâna consultul medical și nu înlocui un tratament prescris. Probleme persistente sau apărute brusc pot avea cauze medicale.
- Suplimentele din plante pot interacționa cu medicamente și nu sunt controlate ca medicamentele; evită-le în sarcină/alăptare fără aviz medical.
- Textele sunt rezumate editoriale scrise de autor; afirmațiile despre studii sunt generale, fără trimiteri bibliografice, și nu au fost verificate sistematic pe surse primare în acest repository.
- Ghidul se adresează adulților.

## Rulare locală / offline

Descarcă `index.html` și deschide-l în browser; nu are nevoie de internet.

## Licență

Licența nu este încă declarată.

## Autor

Alexio — Alexandru-Ionuț Chiuță, contact: alexio@trom.tf

## English summary

A single-file, offline Romanian-language compendium of 22 foods and herbs traditionally associated with desire. Each entry carries an evidence badge (tradition / preliminary / some small studies); none is presented as proven. Search ignores diacritics, the random picker uses a Fisher–Yates shuffle, and a medical-disclaimer banner is shown above the list. No storage, no network calls, no external resources. Educational only, not medical advice. Licence not yet declared.

## Istoric / Changelog

- **11 octombrie 2026** (runda 7) — secțiune nouă „Unde verifici mai departe” cu două linkuri către pagini de informare pentru public (NCCIH — Herbs at a Glance; NIH Office of Dietary Supplements — fișe informative), existența lor confirmată prin căutare web în octombrie 2026; textul precizează că fișele nu citează studii individuale. Nu s-a adăugat conținut medical nou; aplicația rămâne într-o singură limbă (RO) pentru că traducerea textelor despre dovezi/avertismente ar introduce conținut clinic neverificat. 0 erori, axe 0 violări la 1280×800 și 360×740.
- **11 octombrie 2026** — filtru după nivelul de dovezi, „Resetează filtrele”, scurtătura `/`, temă întunecată, stil de tipărire; CSP cu hash de script în loc de `'unsafe-inline'`. Nu s-a adăugat conținut medical nou; textele intrărilor sunt neschimbate.
- **11 octombrie 2026** — ordinea titlurilor corectată (a apărut un `h2` ascuns vizual „Alimente și plante” înaintea cardurilor, iar subtitlurile „Cum funcționează, de fapt?” sunt `h3` în loc de `h4`, fără schimbare vizibilă); axe-core: 0 violări la 1280×800 și 360×740; verificat că filtrul de căutare funcționează. Conținutul (nivelurile de dovezi) nu a fost modificat; aplicația nu are număr de versiune.
