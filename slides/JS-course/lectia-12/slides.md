---
title: 'JavaScript — Proiect Final'
theme: neversink
transition: slide-left
layout: cover
color: coral-light
info: 'JS Basics · 2026'
lineNumbers: true
draw:
  enabled: true
---

# JavaScript
## Proiect Final — Aplicatie Completa

<div class="text-xl mt-4 opacity-70">Lectia 12 · Modul 4 — JavaScript modern si async</div>

---
layout: section
color: coral-light
---

# Ce construim azi
O aplicatie de tip catalog de filme

---

## Descrierea proiectului

Construim o aplicatie completa de **catalog de filme** care foloseste tot ce am invatat:

<v-clicks>

- **Array de obiecte** — datele filmelor
- **Functii si arrow functions** — logica modulara
- **DOM** — afisare dinamica a cardurilor
- **Evenimente** — filtrare, sortare, favorite
- **`localStorage`** — persistenta filmelor favorite
- **Fetch** — incarcarea unor date suplimentare dintr-un API
- **`map`, `filter`** — procesarea datelor

</v-clicks>

<v-click>

> Aceasta lectie este diferita — nu invatam concepte noi.  
> Aplicam tot ce stim pentru a construi ceva real, pas cu pas, impreuna.

</v-click>

---

## Structura HTML de start

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <title>Catalog Filme</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Catalog Filme</h1>
    <input type="text" id="cautare" placeholder="Cauta un film...">
    <select id="filtru-gen">
      <option value="">Toate genurile</option>
    </select>
    <select id="sortare">
      <option value="titlu">Sorteaza dupa titlu</option>
      <option value="an">Sorteaza dupa an</option>
      <option value="rating">Sorteaza dupa rating</option>
    </select>
  </header>
  <main>
    <div id="grid-filme"></div>
  </main>
  <script src="app.js" defer></script>
</body>
</html>
```

---
layout: section
color: coral-light
---

# Pasul 1
Datele si structura de baza

---

## Datele filmelor

```js
// app.js

const filme = [
  { id: 1, titlu: "Inception", an: 2010, gen: "Sci-Fi", rating: 8.8, durata: 148 },
  { id: 2, titlu: "The Dark Knight", an: 2008, gen: "Action", rating: 9.0, durata: 152 },
  { id: 3, titlu: "Interstellar", an: 2014, gen: "Sci-Fi", rating: 8.6, durata: 169 },
  { id: 4, titlu: "Pulp Fiction", an: 1994, gen: "Crime", rating: 8.9, durata: 154 },
  { id: 5, titlu: "The Godfather", an: 1972, gen: "Crime", rating: 9.2, durata: 175 },
  { id: 6, titlu: "Forrest Gump", an: 1994, gen: "Drama", rating: 8.8, durata: 142 },
  { id: 7, titlu: "The Matrix", an: 1999, gen: "Sci-Fi", rating: 8.7, durata: 136 },
  { id: 8, titlu: "Goodfellas", an: 1990, gen: "Crime", rating: 8.7, durata: 146 }
]

// Starea aplicatiei — un singur obiect cu tot ce se poate schimba
let stare = {
  cautare: "",
  gen: "",
  sortare: "titlu",
  favorite: []
}
```

---

## Incarcarea favoritelor din localStorage

```js
// Incarcam favoritele salvate la pornirea aplicatiei
function incarcaFavorite() {
  const salvate = localStorage.getItem("filme-favorite")
  return salvate ? JSON.parse(salvate) : []
}

function salveazaFavorite() {
  localStorage.setItem("filme-favorite", JSON.stringify(stare.favorite))
}

// Initializam starea cu favoritele salvate
stare.favorite = incarcaFavorite()
```

<v-click>

```js
// Verificam daca un film e favorit
function esteFavorit(id) {
  return stare.favorite.includes(id)
}

// Adaugam sau eliminam din favorite
function toggleFavorit(id) {
  if (esteFavorit(id)) {
    stare.favorite = stare.favorite.filter(fav => fav !== id)
  } else {
    stare.favorite.push(id)
  }
  salveazaFavorite()
}
```

</v-click>

---
layout: section
color: coral-light
---

# Pasul 2
Filtrare si sortare

---

## Functia de procesare a datelor

```js
function getFilmeProcesate() {
  let rezultat = [...filme]   // copie — nu modificam originalul

  // 1. Filtram dupa cautare
  if (stare.cautare) {
    let termen = stare.cautare.toLowerCase()
    rezultat = rezultat.filter(f =>
      f.titlu.toLowerCase().includes(termen)
    )
  }

  // 2. Filtram dupa gen
  if (stare.gen) {
    rezultat = rezultat.filter(f => f.gen === stare.gen)
  }

  // 3. Sortam
  rezultat.sort((a, b) => {
    if (stare.sortare === "titlu") return a.titlu.localeCompare(b.titlu)
    if (stare.sortare === "an")    return b.an - a.an        // descrescator
    if (stare.sortare === "rating") return b.rating - a.rating // descrescator
    return 0
  })

  return rezultat
}
```

---

## Popularea filtrului de gen

```js
function populeazaFiltruGen() {
  let select = document.querySelector("#filtru-gen")

  // Extragem genurile unice din array
  let genuri = [...new Set(filme.map(f => f.gen))].sort()

  genuri.forEach(gen => {
    let option = document.createElement("option")
    option.value = gen
    option.textContent = gen
    select.appendChild(option)
  })
}
```

<v-click>

**`new Set()`** — o structura de date care retine doar valori **unice**:

```js
let genuri = filme.map(f => f.gen)
// ["Sci-Fi", "Action", "Sci-Fi", "Crime", "Crime", "Drama", "Sci-Fi", "Crime"]

let unice = [...new Set(genuri)]
// ["Sci-Fi", "Action", "Crime", "Drama"]   — fara duplicate
```

</v-click>

---
layout: section
color: coral-light
---

# Pasul 3
Generarea interfetei

---

## Functia de randare a unui card

```js
function creeazaCard(film) {
  let card = document.createElement("div")
  card.classList.add("card")
  if (esteFavorit(film.id)) card.classList.add("favorit")

  let header = document.createElement("div")
  header.classList.add("card-header")

  let titlu = document.createElement("h2")
  titlu.textContent = film.titlu

  let btnFavorit = document.createElement("button")
  btnFavorit.classList.add("btn-favorit")
  btnFavorit.textContent = esteFavorit(film.id) ? "★" : "☆"
  btnFavorit.addEventListener("click", function(e) {
    e.stopPropagation()
    toggleFavorit(film.id)
    randeaza()   // re-randam tot dupa modificare
  })

  header.appendChild(titlu)
  header.appendChild(btnFavorit)

  let detalii = document.createElement("div")
  detalii.classList.add("detalii")
  detalii.innerHTML = `
    <span class="gen">${film.gen}</span>
    <span class="an">${film.an}</span>
    <span class="rating">⭐ ${film.rating}</span>
    <span class="durata">${film.durata} min</span>
  `

  card.appendChild(header)
  card.appendChild(detalii)
  return card
}
```

---

## Functia principala de randare

```js
function randeaza() {
  let grid = document.querySelector("#grid-filme")
  grid.innerHTML = ""

  let filmeProcesate = getFilmeProcesate()

  if (filmeProcesate.length === 0) {
    grid.innerHTML = "<p class='gol'>Nu am gasit niciun film.</p>"
    return
  }

  filmeProcesate.forEach(film => {
    let card = creeazaCard(film)
    grid.appendChild(card)
  })
}
```

<v-click>

> **Pattern arhitectural**: starea aplicatiei (`stare`) este sursa de adevar.  
> Orice modificare → actualizam `stare` → apelam `randeaza()` care citeste din `stare`.  
> Niciodata nu modificam DOM-ul direct — mereu prin `randeaza()`.

</v-click>

---
layout: section
color: coral-light
---

# Pasul 4
Evenimente si initializare

---

## Conectarea evenimentelor

```js
function initEvents() {
  // Cautare — filtram la fiecare tasta
  document.querySelector("#cautare").addEventListener("input", function(e) {
    stare.cautare = e.target.value
    randeaza()
  })

  // Filtru gen
  document.querySelector("#filtru-gen").addEventListener("change", function(e) {
    stare.gen = e.target.value
    randeaza()
  })

  // Sortare
  document.querySelector("#sortare").addEventListener("change", function(e) {
    stare.sortare = e.target.value
    randeaza()
  })
}
```

---

## Functia de initializare

```js
function init() {
  stare.favorite = incarcaFavorite()   // incarcam din localStorage
  populeazaFiltruGen()                 // populam dropdown-ul cu genuri
  initEvents()                         // atasam listener-ii
  randeaza()                           // prima randare
}

// Pornim aplicatia
init()
```

<v-click>

**Fluxul complet al aplicatiei:**

```
init()
  ├── incarcaFavorite()      → stare.favorite = [...]
  ├── populeazaFiltruGen()   → adauga <option> in <select>
  ├── initEvents()           → atasam addEventListener pe controale
  └── randeaza()             → prima afisare a filmelor

Utilizator filtreaza / sorteaza
  ├── eveniment → actualizam stare
  └── randeaza() → reconstruim grid-ul din stare actualizata
```

</v-click>

---
layout: section
color: coral-light
---

# Pasul 5
Adaugam date dintr-un API real

---

## Imbogatim datele cu un API extern

```js
// Open Library API — informatii despre carti, gratuit, fara cheie API
// Vom folosi OMDb sau un API similar pentru filme
// Demo cu jsonplaceholder pentru structura:

async function incarcaDetaliiSuplimentare(filmId) {
  let panel = document.querySelector("#detalii-panel")
  panel.innerHTML = "Se incarca..."
  panel.style.display = "block"

  try {
    // In productie: un API real de filme (ex: OMDb cu cheie gratuita)
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${filmId}`
    )
    let date = await response.json()

    panel.innerHTML = `
      <h3>Detalii suplimentare</h3>
      <p>${date.body}</p>
      <button id="btn-inchide">Inchide</button>
    `
    document.querySelector("#btn-inchide").addEventListener("click", () => {
      panel.style.display = "none"
    })
  } catch(e) {
    panel.innerHTML = "Nu s-au putut incarca detaliile."
  }
}
```

---

## Click pe card — detalii la cerere

```js
// Modificam creeazaCard() pentru a adauga click pe intregul card
function creeazaCard(film) {
  // ... codul de mai sus ...

  // Adaugam click pe card pentru detalii
  card.style.cursor = "pointer"
  card.addEventListener("click", function() {
    incarcaDetaliiSuplimentare(film.id)
  })

  return card
}
```

<v-click>

**Pattern important — lazy loading:**  
Nu incarcam toate detaliile de la inceput (ar fi prea lent pentru 100 de filme).  
Incarcam **doar cand utilizatorul cere** — la click pe un card specific.

</v-click>

---
layout: section
color: coral-light
---

# Debugging
Cum gasim si rezolvam probleme

---

## Instrumentele esentiale

```js
// console.log — afiseaza o valoare
console.log(stare)

// console.table — afiseaza un array de obiecte ca tabel (foarte util!)
console.table(filme)

// console.error — afiseaza o eroare rosie
console.error("Ceva a mers gresit:", eroare)

// console.warn — afiseaza un avertisment galben
console.warn("Atentie: lista e goala")

// console.group — grupeaza mai multe log-uri
console.group("Starea aplicatiei")
console.log("cautare:", stare.cautare)
console.log("gen:", stare.gen)
console.groupEnd()
```

---

## Erori comune si cum le rezolvam

```js
// 1. Cannot read properties of null
let element = document.querySelector(".inexistent")
element.textContent = "ceva"   // EROARE — element e null

// Fix: verifica inainte
if (element) element.textContent = "ceva"

// 2. element.addEventListener is not a function
let elemente = document.querySelectorAll("li")  // NodeList
elemente.addEventListener("click", ...)  // EROARE — NodeList nu are addEventListener

// Fix: itereaza
elemente.forEach(el => el.addEventListener("click", ...))

// 3. fetch e undefined / CORS error
// — verifici URL-ul, verifici ca esti online
// — CORS inseamna ca serverul nu permite cereri din browser-ul tau

// 4. Infinite loop in randeaza()
// — o functie apelata dintr-un eveniment care la randul ei declanseaza evenimentul
// — solutie: separa logica de date de logica de UI
```

---

## Tehnica de debugging pas cu pas

```js
async function incarcaDate() {
  console.log("1. Incepem fetch-ul")

  let response = await fetch(url)
  console.log("2. Am primit raspunsul:", response.status)

  let date = await response.json()
  console.log("3. Am parsat JSON-ul:", date)

  randeaza(date)
  console.log("4. Am randat", date.length, "elemente")
}
```

<v-click>

> **Regula de aur**: adauga `console.log` la fiecare pas important  
> pana cand gasesti unde se rupe fluxul.  
> Sterge log-urile dupa ce ai rezolvat problema.

</v-click>

---
layout: section
color: coral-light
---

# Recapitulare finala
Tot ce am invatat in cele 12 lectii

---

## Modul 1 — Fundamentele limbajului

<v-clicks>

- **Variabile** — `let`, `const`; tipuri: `string`, `number`, `boolean`, `null`, `undefined`
- **Operatori** — aritmetici, comparatie (`===`), logici (`&&`, `||`, `!`), modulo (`%`)
- **Conditii** — `if / else if / else`, operatorul ternar
- **Bucle** — `for`, `while`, `break`, `continue`, acumulatorul

</v-clicks>

---

## Modul 2 — Functii si structuri de date

<v-clicks>

- **Functii** — declarare, parametri, argumente, `return`, scope, compunere
- **Array-uri** — indexare, `length`, `push/pop/shift/unshift`, `indexOf/includes`
- **Metode si callback-uri** — sintaxa cu punct, functii ca valori, `forEach`
- **Obiecte** — `{}`, dot/bracket notation, `Object.keys/values/entries`
- **Array de obiecte** — structura centrala in aplicatii reale

</v-clicks>

---

## Modul 3 — DOM si interactivitate

<v-clicks>

- **DOM** — arborele de obiecte construit din HTML; `document` ca punct de intrare
- **Selectare** — `querySelector`, `querySelectorAll`; navigare cu `closest`, `parentElement`
- **Modificare** — `textContent`, `classList`, `createElement`, `appendChild`, `remove`
- **Evenimente** — `addEventListener`, obiectul `event`, bubbling, delegation
- **Formulare** — `input.value`, `checkbox.checked`, evenimentul `submit`, validare

</v-clicks>

---

## Modul 4 — JavaScript modern si async

<v-clicks>

- **Arrow functions** — `x => x * 2`; parametri default; shorthand proprietati
- **Destructuring** — `let { nume, varsta } = obiect`; `let [a, ...rest] = arr`
- **Spread / Rest** — `[...arr1, ...arr2]`; `function f(...args)`
- **`.map()`** — transforma fiecare element, returneaza array nou
- **`.filter()`** — pastreaza elementele care trec testul
- **`.find()`, `.some()`, `.every()`** — cautare si verificare
- **Promises** — model asincron; `pending`, `fulfilled`, `rejected`
- **`async/await`** — sintaxa clara pentru cod asincron; `try/catch`
- **`fetch()`** — cereri HTTP catre servere si API-uri
- **`localStorage`** — persistenta datelor in browser

</v-clicks>

---
layout: section
color: coral-light
---

# Ce urmeaza?
Pasii urmatori dupa acest curs

---

## Directii de continuare

<v-clicks>

- **CSS avansat** — Flexbox, Grid, animatii, responsive design — pentru a stiliza ceea ce construiesti
- **Git si GitHub** — versionarea codului, colaborare, portofoliu public
- **Node.js** — JavaScript pe server; construiesti API-uri proprii
- **React** — librarie pentru interfete complexe; componente, stare, props
- **TypeScript** — JavaScript cu tipuri statice; mai putine erori, cod mai robust
- **Baze de date** — SQL (PostgreSQL) sau NoSQL (MongoDB) — stocarea datelor permanent

</v-clicks>

<v-click>

> Nu trebuie sa le inveti pe toate. Alege o directie si aprofundeaz-o.  
> Un junior developer bun stie JavaScript vanilla bine + un framework (React sau Vue) + Git.

</v-click>

---

## Proiectul final — tema pentru portofoliu

Construieste **una** din urmatoarele aplicatii complete, de la zero:

<v-clicks>

- **Weather App** — cauta orasul, afiseaza vremea curenta si prognoza pe 5 zile (API: OpenWeatherMap, cheie gratuita)
- **GitHub Explorer** — cauta un utilizator GitHub, afiseaza profilul si repository-urile lui (API: api.github.com, fara cheie)
- **Quiz App** — 10 intrebari, timer, scor, leaderboard in `localStorage`
- **Expense Tracker** — adauga cheltuieli cu categorie si suma, grafic simplu, total pe categorii, persistenta in `localStorage`

</v-clicks>

<v-click>

> Alege proiectul care te motiveaza cel mai mult.  
> Un proiect real, finalizat, valoreaza mai mult decat 10 tutoriale urmarite.

</v-click>

---
layout: cover
color: coral-light
---

# Felicitari!

<div class="text-2xl mt-6 opacity-90">
  Ai parcurs toate cele 12 lectii de JavaScript.
</div>

<div class="text-xl mt-4 opacity-70">
  Acum stii sa construiesti aplicatii web interactive, complete, cu date reale.
</div>

<div class="text-sm mt-8 opacity-50">JS Basics · Lectia 12 din 12 · Sfarsit</div>
