---
theme: seriph
background: https://picsum.photos/seed/database1/1920/1080
title: Rolul Implementării Bazelor de Date
info: |
  ## Rolul Implementării Bazelor de Date în Sistemele Informatice
  O prezentare despre importanța structurării datelor și transformarea lor în informație utilă.
class: text-center
transition: slide-left
mdc: true
---

# Rolul Implementării Bazelor de Date <br> în Sistemele Informatice

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Apasă Spațiu pentru a începe <carbon:arrow-right />
</div>

<div class="abs-br m-6 flex gap-2">
  Grajdian Cristian
</div>

---
layout: intro
---

# Ce este un Sistem Informatic?

Un ansamblu organizat de resurse (hardware, software, date și oameni) destinat colectării, stocării și procesării datelor pentru a furniza informații necesare procesului de decizie.

<v-clicks>

- **Componenta Centrală**: Baza de date.
- **Scopul**: Transformarea fluxurilor de date brute în cunoaștere.
- **Eficiența**: Rapiditatea cu care putem accesa ceea ce avem nevoie.

</v-clicks>

---
layout: two-cols
---

# Date vs. Informație

Diferența fundamentală care stă la baza informaticii.

::left::

<div class="bg-blue-100 p-4 m-2 rounded-lg shadow dark:bg-blue-900">
<h3 class="font-bold border-b-2 border-blue-500 mb-2">Date (Materie Primă)</h3>
<ul class="list-disc list-inside">
  <li v-click>Fapte brute, neprelucrate.</li>
  <li v-click>Exemple: 150, "Ion", 12.05.2023.</li>
  <li v-click>Nu au un înțeles implicit fără context.</li>
  <li v-click>Sunt greu de utilizat pentru decizii.</li>
</ul>
</div>

::right::

<div class="bg-green-100 p-4 m-2 rounded-lg shadow dark:bg-green-900">
<h3 class="font-bold border-b-2 border-green-500 mb-2">Informație (Produs Finit)</h3>
<ul class="list-disc list-inside">
  <li v-click>Date procesate și organizate.</li>
  <li v-click>Exemple: "Stocul este de 150 unități", "Ion s-a angajat pe 12.05.2023".</li>
  <li v-click>Are context și relevanță.</li>
  <li v-click>Ajută direct în luarea deciziilor.</li>
</ul>
</div>

---
layout: center
class: text-center
---

# De la Haos la Ordine

Cum ne ajută baza de date să traducem datele în informație?

<div class="grid grid-cols-3 gap-4 mt-10">
  <div v-click class="p-4 border rounded shadow">
    <carbon:assembly-cluster class="text-4xl mb-2 mx-auto text-blue-500" />
    <h3 class="font-bold">Structură</h3>
    <p class="text-sm">Definește formatul și tipul datelor (nume, număr, dată).</p>
  </div>
  <div v-click class="p-4 border rounded shadow">
    <carbon:connect class="text-4xl mb-2 mx-auto text-green-500" />
    <h3 class="font-bold">Relații</h3>
    <p class="text-sm">Leagă entitățile între ele (ex: Clientul X a cumpărat Produsul Y).</p>
  </div>
  <div v-click class="p-4 border rounded shadow">
    <carbon:search class="text-4xl mb-2 mx-auto text-orange-500" />
    <h3 class="font-bold">Interogare</h3>
    <p class="text-sm">Permite extragerea rapidă a răspunsurilor prin limbaje precum SQL.</p>
  </div>
</div>

---
layout: image-right
image: https://picsum.photos/seed/coding/800/1200
---

# Putem lucra fără o bază de date?

**Teoretic, DA.** Putem folosi fișiere text sau binare.

<v-clicks>

- **Fișiere CSV**: Simple, dar limitate.
- **Logica în Aplicație**: Tu scrii tot codul de citire/scriere.
- **Stocare locală**: Greu de partajat între mai mulți utilizatori.

</v-clicks>

<div v-click class="mt-10 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
  <strong>Dar...</strong> este o cale plină de capcane tehnice care pot distruge un proiect serios.
</div>

---

# Provocarea 1: Căutare și Eficiență

Într-un sistem manual, căutarea seamănă cu răsfoirea unei biblioteci fără catalog.

<div class="grid grid-cols-2 gap-10 mt-10">
  <div>
    <h3 class="text-red-500 font-bold mb-2">Fără DB</h3>
    <ul class="text-sm list-disc">
      <li>Trebuie să citești tot fișierul de la început la sfârșit (Linear Scan).</li>
      <li>Performanța scade dramatic pe măsură ce datele cresc.</li>
      <li>Sortarea manuală consumă memorie și timp.</li>
    </ul>
  </div>
  <div v-click>
    <h3 class="text-green-500 font-bold mb-2">Cu DB</h3>
    <ul class="text-sm list-disc">
      <li><strong>Indexare</strong>: Ca un index la sfârșitul unei cărți.</li>
      <li>Căutări instantanee prin structuri de tip B-Tree sau Hash.</li>
      <li>Optimizatorul de interogări alege cea mai rapidă cale.</li>
    </ul>
  </div>
</div>

---

# Provocarea 2: Concurență și Integritate

Ce se întâmplă când doi utilizatori vor să modifice același lucru în același timp?

<div class="mt-10 space-y-4">
  <div v-click class="flex items-start gap-4">
    <carbon:warning class="text-red-500 text-2xl flex-shrink-0" />
    <div>
      <strong>Conflictul de Scriere:</strong> Fără un mecanism de "locking", ultima salvare o suprascrie pe prima, ducând la pierderi de date.
    </div>
  </div>
  
  <div v-click class="flex items-start gap-4">
    <carbon:data-error class="text-orange-500 text-2xl flex-shrink-0" />
    <div>
      <strong>Inconsistența:</strong> O eroare la jumătatea procesului poate lăsa datele "rupte" (ex: banii au plecat dintr-un cont, dar n-au ajuns în celălalt).
    </div>
  </div>

  <div v-click class="p-4 bg-blue-50 rounded border border-blue-200 dark:bg-blue-900/30">
    <strong>Soluția DB: Proprietățile ACID</strong> (Atomicitate, Consistență, Izolare, Durabilitate) garantează că tranzacțiile sunt sigure și complete.
  </div>
</div>

---
layout: two-cols
---

# Provocarea 3: Securitate și Redundanță

::left::

### Securitate
- Într-un sistem de fișiere, dacă ai acces la fișier, vezi tot.
- Bazele de date permit **Control Granular**:
  - Utilizatorul A poate doar citi.
  - Utilizatorul B poate modifica doar coloana "Preț".
  - Utilizatorul C nu vede datele medicale.

::right::

<div class="ml-4">
<h3>Redundanță și Backup</h3>
<ul class="list-disc">
  <li>Copiile manuale se învechesc repede.</li>
  <li>Bazele de date oferă:
    <ul class="list-circle ml-6">
      <li>Replicare în timp real.</li>
      <li>Point-in-time recovery.</li>
      <li>Eliminarea duplicatelor inutile (Normalizare).</li>
    </ul>
  </li>
</ul>
</div>

---
layout: center
---

# Arhitectura unui SGBD (DBMS)

Sistemul de Gestiune a Bazelor de Date este "scutul" și "creierul" datelor tale.

```mermaid
graph TD
    App[Aplicație Utilizator] --> SQL[Limbaj SQL / Interfață]
    SQL --> DBMS[SGBD - Motorul DB]
    subgraph DBMS_Functions [Funcționalități Nucleu]
        DBMS --> Sec[Securitate & Autorizare]
        DBMS --> Con[Controlul Concurenței]
        DBMS --> Rec[Recuperare & Backup]
        DBMS --> Opt[Optimizator de Interogări]
    end
    DBMS_Functions --> Data[(Fișiere de Date Fizice)]
```

---

# Concluzii

Implementarea unei baze de date nu este doar o alegere tehnică, ci o necesitate strategică.

<v-clicks>

1.  **Scalabilitate**: Sistemul tău poate crește de la 100 la 100 de milioane de înregistrări.
2.  **Încredere**: Datele sunt protejate împotriva erorilor umane și tehnice.
3.  **Inteligență**: Transformi datele brute în informații care generează valoare.
4.  **Standardizare**: Folosești limbaje universale (precum SQL) înțelese de orice specialist.

</v-clicks>

<div v-click class="mt-10 text-center text-2xl font-serif italic">
  "O aplicație este la fel de bună ca datele pe care se bazează."
</div>

---
layout: end
---

# Mulțumesc!

Întrebări?

[Link către documentație](https://sli.dev)
