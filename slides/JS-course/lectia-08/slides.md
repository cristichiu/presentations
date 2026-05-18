---
title: 'JavaScript — Modificarea DOM'
theme: neversink
transition: slide-left
layout: cover
color: emerald-light
info: 'JS Basics · 2026'
lineNumbers: true
draw:
  enabled: true
---

# JavaScript
## Modificarea DOM — continut, stiluri, creare dinamica

<div class="text-xl mt-4 opacity-70">Lectia 8 · Modul 3 — DOM si interactivitate</div>

---
layout: section
color: emerald-light
---

# Modificarea continutului
`textContent` si `innerHTML`

---

## `textContent` — text simplu

```js
let h1 = document.querySelector("h1")

// Citim continutul
console.log(h1.textContent)   // "Titlul paginii"

// Scriem — inlocuieste tot continutul cu text
h1.textContent = "Titlu nou!"
```

<v-click>

**`textContent` trateaza tot ca text simplu:**

```js
let p = document.querySelector("p")

p.textContent = "Text cu <strong>bold</strong>"
// Afiseaza LITERAL: Text cu <strong>bold</strong>
// Nu interpreteaza HTML — il trateaza ca text
```

> Foloseste `textContent` ori de cate ori vrei sa schimbi text simplu.  
> Este sigur si eficient.

</v-click>

---

## `innerHTML` — continut HTML

```js
let div = document.querySelector(".container")

// Citim HTML-ul interior
console.log(div.innerHTML)
// "<h2>Titlu</h2><p>Paragraf</p>"

// Scriem HTML — browserul il parseaza si construieste noduri noi
div.innerHTML = "<h2>Titlu nou</h2><p>Paragraf nou</p>"
```

<v-click>

**Atentie importanta — securitate:**

```js
// NU face asta cu date de la utilizator
let numeUtilizator = // ... primit dintr-un input
div.innerHTML = "<p>Salut, " + numeUtilizator + "</p>"

// Daca utilizatorul scrie: <script>cod_malitios()</script>
// Acel cod va fi executat — atac XSS (Cross-Site Scripting)

// Varianta sigura — foloseste textContent pentru datele utilizatorului
let p = document.createElement("p")
p.textContent = "Salut, " + numeUtilizator   // text, nu HTML
div.appendChild(p)
```

</v-click>

---
layout: section
color: emerald-light
---

# Modificarea stilurilor
`style` si `classList`

---

## Stiluri inline cu `.style`

```js
let h1 = document.querySelector("h1")

// Setam proprietati CSS direct pe element (inline style)
h1.style.color = "red"
h1.style.fontSize = "48px"
h1.style.backgroundColor = "#f0f0f0"
h1.style.marginTop = "20px"
h1.style.display = "none"      // ascunde elementul
h1.style.display = ""          // sterge stilul inline — revine la CSS
```

<v-click>

**Proprietatile CSS cu `-` devin `camelCase` in JavaScript:**

```
color              → color
font-size          → fontSize
background-color   → backgroundColor
border-radius      → borderRadius
margin-top         → marginTop
z-index            → zIndex
```

</v-click>

---

## `classList` — lucrul cu clase CSS

Abordarea recomandata: JavaScript manipuleaza **clasele**, CSS se ocupa de **stiluri**.

```js
let card = document.querySelector(".card")

// Adauga o clasa
card.classList.add("activ")

// Elimina o clasa
card.classList.remove("inactiv")

// Toggle — adauga daca nu exista, elimina daca exista
card.classList.toggle("vizibil")

// Verifica daca are o clasa
console.log(card.classList.contains("activ"))   // true / false

// Adauga mai multe clase odata
card.classList.add("mare", "albastru", "umbra")
```

---

## De ce `classList` in loc de `.style`?

```js
// Abordare cu .style — logica de prezentare in JavaScript (evita)
element.style.backgroundColor = "green"
element.style.color = "white"
element.style.padding = "10px"
element.style.borderRadius = "5px"

// Abordare cu classList — separare clara a responsabilitatilor (recomandat)
element.classList.add("succes")
```

```css
/* In fisierul CSS */
.succes {
  background-color: green;
  color: white;
  padding: 10px;
  border-radius: 5px;
}
```

<v-click>

> Cu `classList`: JavaScript decide **ce clasa** se aplica.  
> CSS decide **cum arata** acea clasa.  
> Mult mai usor de modificat, de inteles si de depanat.

</v-click>

---
layout: section
color: emerald-light
---

# Crearea elementelor noi
Cum adaugam noduri in DOM

---

## Pasii pentru a crea un element

```js
// PASUL 1 — cream elementul (nu e inca in pagina!)
let li = document.createElement("li")

// PASUL 2 — ii setam continutul si proprietatile
li.textContent = "Element nou"
li.classList.add("item")
li.id = "item-special"

// PASUL 3 — il INSEREM in DOM
let ul = document.querySelector("ul")
ul.appendChild(li)   // adaugat la sfarsitul listei
```

<v-click>

> Elementul **nu apare in pagina** pana cand nu il inseram cu `appendChild` sau alta metoda.  
> `createElement` il creeaza doar in memorie.

</v-click>

---

## Metode de insertie

```js
let ul = document.querySelector("ul")
let liNou = document.createElement("li")
liNou.textContent = "Element nou"

// La sfarsit
ul.appendChild(liNou)

// La inceput
ul.prepend(liNou)

// Inainte de un element specific
let liExistent = document.querySelector("li:nth-child(2)")
ul.insertBefore(liNou, liExistent)

// Inainte sau dupa orice element (metode moderne)
liExistent.before(liNou)    // insereaza inainte de liExistent
liExistent.after(liNou)     // insereaza dupa liExistent
```

---

## Stergerea elementelor

```js
let li = document.querySelector("li")

// Metoda moderna — directa
li.remove()

// Metoda veche — prin parinte (inca intalnita in cod legacy)
li.parentNode.removeChild(li)
```

<v-click>

**Golirea unui element — stergem toti copiii:**

```js
let ul = document.querySelector("ul")

// Metoda 1 — innerHTML la string gol
ul.innerHTML = ""

// Metoda 2 — stergem copiii unul cate unul
while (ul.firstChild) {
  ul.removeChild(ul.firstChild)
}
```

</v-click>

---

## Clonarea elementelor

```js
let liOriginal = document.querySelector("li")

// cloneNode(true) — cloneaza si copiii (deep clone)
let liClona = liOriginal.cloneNode(true)

// cloneNode(false) — cloneaza doar elementul, fara copii (shallow clone)
let liClonaGoala = liOriginal.cloneNode(false)

// Clona trebuie insertata si ea in DOM
document.querySelector("ul").appendChild(liClona)
```

<v-click>

**Cand e utila clonarea:**

```js
// Avem un template HTML ascuns in pagina
let template = document.querySelector(".card-template")

// Pentru fiecare produs, cream o clona si o personalizam
produse.forEach(function(produs) {
  let card = template.cloneNode(true)
  card.querySelector(".titlu").textContent = produs.nume
  card.querySelector(".pret").textContent = produs.pret + " lei"
  card.classList.remove("card-template")
  document.querySelector(".grid").appendChild(card)
})
```

</v-click>

---
layout: section
color: emerald-light
---

# Exercitiu 1
Manipulare continut si stiluri

---

## Exercitiu 1

**HTML de start:**
```html
<h1 id="titlu">Titlu initial</h1>
<p class="descriere">Text initial</p>
<div class="box"></div>
```

**Sarcini:**
1. Schimba textul `<h1>` in "JavaScript e tare!"
2. Schimba culoarea textului `<h1>` in albastru, folosind `classList`
3. Adauga clasa `"vizibil"` pe `.box` si seteaza un text in interior
4. Comuta clasa `"activa"` pe `.descriere` de 3 ori si observa rezultatul

<v-click>

```js
document.querySelector("#titlu").textContent = "JavaScript e tare!"
document.querySelector("#titlu").classList.add("text-albastru")

let box = document.querySelector(".box")
box.classList.add("vizibil")
box.textContent = "Sunt in box!"

let descriere = document.querySelector(".descriere")
descriere.classList.toggle("activa")   // add
descriere.classList.toggle("activa")   // remove
descriere.classList.toggle("activa")   // add din nou
```

</v-click>

---
layout: section
color: emerald-light
---

# Generarea dinamica a continutului
Cel mai important pattern in DOM

---

## Pattern-ul fundamental

Avem date in JavaScript si vrem sa le afisam in pagina:

```js
let fructe = ["Mere", "Banane", "Kiwi", "Pere"]

let ul = document.querySelector("ul")
ul.innerHTML = ""   // golim lista existenta

fructe.forEach(function(fruct) {
  let li = document.createElement("li")
  li.textContent = fruct
  ul.appendChild(li)
})
```

<v-click>

Aceasta este structura pe care o vei folosi **ori de cate ori** afisezi date din JavaScript in HTML.  
Date (array/obiect) → iteratie → createElement → setam proprietati → appendChild.

</v-click>

---

## Generare din array de obiecte

```js
let produse = [
  { nume: "Laptop", pret: 3500 },
  { nume: "Mouse", pret: 120 },
  { nume: "Monitor", pret: 1200 }
]

let container = document.querySelector(".produse")

produse.forEach(function(produs) {
  // Cream un div pentru fiecare produs
  let card = document.createElement("div")
  card.classList.add("card")

  // Cream elementele interioare
  let titlu = document.createElement("h3")
  titlu.textContent = produs.nume

  let pret = document.createElement("p")
  pret.textContent = produs.pret + " lei"
  pret.classList.add("pret")

  // Asamblam structura
  card.appendChild(titlu)
  card.appendChild(pret)
  container.appendChild(card)
})
```

---

## Alternativa cu `innerHTML` — mai rapid, dar cu atentie

```js
let produse = [
  { nume: "Laptop", pret: 3500 },
  { nume: "Mouse", pret: 120 }
]

let container = document.querySelector(".produse")
let html = ""

produse.forEach(function(produs) {
  html += `
    <div class="card">
      <h3>${produs.nume}</h3>
      <p class="pret">${produs.pret} lei</p>
    </div>
  `
})

container.innerHTML = html
```

<v-click>

> **Cand e ok**: cand datele vin din sursa ta (nu de la utilizator)  
> **Evita**: cand inserezi date introduse de utilizator — risc XSS  
> **Preferat in productie**: `createElement` + `textContent` pentru siguranta maxima

</v-click>

---
layout: section
color: emerald-light
---

# Exercitii

---

## Exercitiu 2 — lista dinamica

Pornind de la un array de sarcini, genereaza dinamic o lista HTML.  
Fiecare sarcina sa aiba un `<li>` cu textul sarcinii.

```js
let sarcini = [
  "Cumpara paine",
  "Trimite emailul",
  "Citeste 30 de minute",
  "Fa sport",
  "Suna parintii"
]
// HTML de start: <ul id="lista-sarcini"></ul>
```

<v-click>

**Rezolvare:**

```js
let ul = document.querySelector("#lista-sarcini")

sarcini.forEach(function(sarcina) {
  let li = document.createElement("li")
  li.textContent = sarcina
  ul.appendChild(li)
})
```

</v-click>

---

## Exercitiu 3 — carduri de produse

Genereaza carduri HTML pentru fiecare produs din array.  
Fiecare card trebuie sa contina: titlu, pret, si o clasa `"epuizat"` daca `stoc === 0`.

```js
let produse = [
  { nume: "Laptop", pret: 3500, stoc: 3 },
  { nume: "Mouse", pret: 120, stoc: 0 },
  { nume: "Monitor", pret: 1200, stoc: 5 },
  { nume: "Tastatura", pret: 200, stoc: 0 }
]
// HTML de start: <div class="grid"></div>
```

<v-click>

```js
let grid = document.querySelector(".grid")

produse.forEach(function(produs) {
  let card = document.createElement("div")
  card.classList.add("card")
  if (produs.stoc === 0) card.classList.add("epuizat")

  let h3 = document.createElement("h3")
  h3.textContent = produs.nume

  let p = document.createElement("p")
  p.textContent = produs.stoc === 0 ? "Epuizat" : `${produs.pret} lei`

  card.appendChild(h3)
  card.appendChild(p)
  grid.appendChild(card)
})
```

</v-click>

---

## Exercitiu 4 — manipulare completa

Scrie urmatoarele functii care lucreaza pe un `<ul>` cu id `"lista"`:

1. `adaugaElement(text)` — creeaza un `<li>` nou cu textul dat si il adauga la sfarsit
2. `stergeUltimul()` — sterge ultimul `<li>` din lista
3. `golistaLista()` — sterge toate elementele listei
4. `numaraElemente()` — returneaza numarul de `<li>`-uri

<v-click>

```js
let lista = document.querySelector("#lista")

function adaugaElement(text) {
  let li = document.createElement("li")
  li.textContent = text
  lista.appendChild(li)
}
function stergeUltimul() {
  if (lista.lastElementChild) lista.lastElementChild.remove()
}
function golesteLista() { lista.innerHTML = "" }
function numaraElemente() { return lista.children.length }

adaugaElement("Primul")
adaugaElement("Al doilea")
console.log(numaraElemente())   // 2
stergeUltimul()
console.log(numaraElemente())   // 1
```

</v-click>

---
layout: section
color: emerald-light
---

# Recapitulare

---

## Ce am invatat azi

<v-clicks>

- **`textContent`** — citeste/scrie text simplu, sigur, fara interpretare HTML
- **`innerHTML`** — citeste/scrie HTML; evita cu date de la utilizator (XSS)
- **`style.proprietate`** — stiluri inline in camelCase; pentru modificari rapide
- **`classList.add/remove/toggle/contains`** — lucrul cu clase CSS; abordarea recomandata
- **`createElement(tag)`** — creeaza un element in memorie
- **`appendChild`** — adauga la sfarsitul unui parinte
- **`prepend`, `before`, `after`** — insertie in pozitii specifice
- **`remove()`** — sterge elementul din DOM
- **Pattern fundamental**: array de date → `forEach` → `createElement` → `appendChild`

</v-clicks>

---

## Tema pentru acasa

Construieste o pagina HTML cu un script care:
1. Are un array de cel putin 6 studenti cu `{ nume, nota, grupa }`
2. Genereaza dinamic un `<table>` HTML cu cate un rand per student
3. Coloreaza randul in verde daca nota >= 5, in rosu daca nota < 5 (folosind `classList`)
4. Adauga un rand final cu media clasei
5. **Bonus**: Adauga o functie `sorteazaDupaNota(studenti)` care sorteaza array-ul si regenereaza tabelul; apeleaz-o dupa generarea initiala

---
layout: cover
color: emerald-light
---

# Intrebari?

<div class="text-xl mt-6 opacity-80">
  Lectia 9: Evenimente si formulare — cum raspunde pagina la actiunile utilizatorului
</div>

<div class="text-sm mt-4 opacity-50">JS Basics · Lectia 8 din 12</div>
