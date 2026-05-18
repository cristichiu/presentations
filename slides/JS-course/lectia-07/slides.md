---
title: 'JavaScript — DOM'
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
## DOM — de la HTML la arbore de obiecte

<div class="text-xl mt-4 opacity-70">Lectia 7 · Modul 3 — DOM si interactivitate</div>

---
layout: section
color: emerald-light
---

# Ce se intampla cand deschizi o pagina web?
Sub capota browserului

---

## Pasii pe care ii face browserul

Cand introduci un URL si apesi Enter:

<v-clicks>

1. **Descarca** fisierul HTML de pe server — text brut
2. **Citeste** (parseaza) acel text linie cu linie
3. **Construieste** in memorie o structura numita **DOM**
4. **Descarca** si aplica CSS — calculeaza stilurile
5. **Ruleaza** JavaScript-ul
6. **Afiseaza** rezultatul final pe ecran

</v-clicks>

<v-click>

```
Fisier HTML (text brut)  →  Parser HTML  →  DOM (in memorie)  →  Ecran
```

> JavaScript nu lucreaza cu textul HTML — lucreaza cu **DOM-ul** construit din el.

</v-click>

---

## HTML este doar text

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Pagina mea</title>
  </head>
  <body>
    <h1>Salut!</h1>
    <p>Acesta este un paragraf.</p>
    <ul>
      <li>Mere</li>
      <li>Pere</li>
    </ul>
  </body>
</html>
```

<v-click>

HTML **nu este cod**. Este un document text cu etichete (tags).  
Browserul trebuie sa il transforme in ceva cu care JavaScript poate interactiona.  
Acel "ceva" este **DOM-ul**.

</v-click>

---
layout: section
color: emerald-light
---

# Ce este DOM-ul?
Document Object Model

---

## DOM = arbore de obiecte JavaScript

DOM-ul este reprezentarea HTML-ului ca un **arbore de obiecte**.  
Fiecare eticheta HTML devine un **nod** in acest arbore.

```
document
└── html
    ├── head
    │   └── title → "Pagina mea"
    └── body
        ├── h1   → "Salut!"
        ├── p    → "Acesta este un paragraf."
        └── ul
            ├── li → "Mere"
            └── li → "Pere"
```

<v-click>

Fiecare nod este un **obiect JavaScript** cu:
- **proprietati** — `textContent`, `id`, `className`, `tagName`
- **metode** — `remove()`, `setAttribute()`, `appendChild()`

</v-click>

---

## De ce structura de arbore?

Elementele HTML sunt **imbricate** — unele contin altele — deci structura ierarhica e naturala:

<v-clicks>

- `<body>` contine `<h1>`, `<p>`, `<ul>` — le numim **copii (children)**
- `<ul>` este **parintele (parent)** al elementelor `<li>`
- Cele doua `<li>` sunt **frati (siblings)** intre ele
- `<html>` este **radacina (root)** intregului arbore

</v-clicks>

<v-click>

```js
// DOM-ul expune aceasta structura ca obiecte accesibile in JavaScript:
document.body              // obiectul <body>
document.body.children     // colectia de copii ai lui <body>
document.body.parentElement // obiectul <html>
```

</v-click>

---

## Tipuri de noduri

DOM-ul are mai multe tipuri de noduri. Cele mai importante:

| Tip | Exemplu | Valoare |
|-----|---------|---------|
| **Element Node** | `<p>`, `<div>`, `<h1>` | `nodeType = 1` |
| **Text Node** | continutul textual | `nodeType = 3` |
| **Document Node** | intregul document | `nodeType = 9` |

<v-click>

```js
let p = document.querySelector("p")

console.log(p.nodeType)              // 1  — Element
console.log(p.firstChild.nodeType)   // 3  — Text (continutul paragrafului)
```

> Spatiile goale si newline-urile din HTML devin si ele **Text Nodes**.  
> De aceea folosim `.children` (doar elemente) nu `.childNodes` (toate nodurile inclusiv text).

</v-click>

---
layout: section
color: emerald-light
---

# Obiectul `document`
Punctul de intrare in DOM

---

## Ce este `document`

`document` este **obiectul radacina** al DOM-ului.  
Este disponibil global in orice fisier JavaScript care ruleaza in browser.

```js
console.log(document)           // intregul document HTML
console.log(document.title)     // titlul paginii
console.log(document.URL)       // URL-ul curent
console.log(document.body)      // elementul <body>
console.log(document.head)      // elementul <head>
```

<v-click>

> `document` este ca un **depozit central** — de aici accesam orice element din pagina.  
> Orice operatie pe DOM incepe cu `document`.

</v-click>

---
layout: section
color: emerald-light
---

# Selectarea elementelor
Cum gasim noduri in DOM

---

## `querySelector` — selecteaza primul element

```js
// Dupa tag
document.querySelector("h1")

// Dupa clasa CSS (prefix .)
document.querySelector(".card")

// Dupa id (prefix #)
document.querySelector("#titlu")

// Selector CSS compus
document.querySelector("ul li")          // primul <li> dintr-un <ul>
document.querySelector(".nav a.activ")   // <a class="activ"> din .nav
```

<v-click>

- Returneaza **primul element** care se potriveste cu selectorul
- Daca nu gaseste nimic, returneaza `null`
- Foloseste **sintaxa CSS** — daca stii CSS, stii deja selectoarele

</v-click>

---

## `querySelectorAll` — selecteaza toate elementele

```js
// Returneaza un NodeList cu TOATE elementele care se potrivesc
let toateLiurile = document.querySelectorAll("li")
let toateCardurile = document.querySelectorAll(".card")
let toateLinkurile = document.querySelectorAll("nav a")

console.log(toateLiurile.length)   // numarul de <li>-uri din pagina
```

<v-click>

**NodeList — asemanator cu un array, dar nu identic:**

```js
let liuri = document.querySelectorAll("li")

// Are forEach — merge
liuri.forEach(function(li) {
  console.log(li.textContent)
})

// Nu are map, filter — nu merg direct
// liuri.map(...)    → eroare!

// Conversie la array daca ai nevoie de toate metodele
let liuriArray = Array.from(liuri)
liuriArray.map(...)   // acum merge
```

</v-click>

---

## `querySelector` vs `querySelectorAll`

```js
let lista = document.querySelector("ul")   // un singur element sau null

let iteme = document.querySelectorAll("li") // NodeList (poate fi gol)

// querySelector — verificam null inainte sa folosim
if (lista !== null) {
  console.log(lista.textContent)
}

// querySelectorAll — verificam lungimea
if (iteme.length > 0) {
  console.log(`Avem ${iteme.length} iteme`)
}
```

<v-click>

**Metode mai vechi — inca intalnite in cod legacy:**

```js
document.getElementById("titlu")           // dupa id (fara #)
document.getElementsByClassName("card")    // dupa clasa (fara .)
document.getElementsByTagName("p")         // dupa tag
// Toate returneaza HTMLCollection, nu NodeList — diferente minore
```

</v-click>

---
layout: section
color: emerald-light
---

# Navigarea in DOM
Relatii intre noduri

---

## Relatii parinte — copil — frat

```js
let ul = document.querySelector("ul")

// Copii — doar elemente (ignoram text nodes)
console.log(ul.children)           // HTMLCollection cu <li>-urile
console.log(ul.firstElementChild)  // primul <li>
console.log(ul.lastElementChild)   // ultimul <li>
console.log(ul.childElementCount)  // numarul de copii elemente

// Parinte
console.log(ul.parentElement)      // elementul care contine <ul>

// Frati
console.log(ul.previousElementSibling)  // elementul de dinaintea lui <ul>
console.log(ul.nextElementSibling)      // elementul de dupa <ul>
```

---

## `closest()` — urcam in arbore

`closest()` gaseste cel mai apropiat **stramos** care se potriveste unui selector:

```js
let li = document.querySelector("li")

li.closest("ul")          // gaseste <ul>-ul parinte
li.closest("body")        // gaseste <body>
li.closest(".container")  // gaseste primul stramos cu clasa .container
```

<v-click>

**Utilitate practica — identificam parintele la un click:**

```js
// Cand dam click pe un buton de stergere din interiorul unui card:
document.addEventListener("click", function(event) {
  let card = event.target.closest(".card")
  if (card) {
    console.log("Am dat click pe un card sau ceva din interiorul lui")
  }
})
```

</v-click>

---
layout: section
color: emerald-light
---

# Proprietatile unui element DOM
Ce informatii putem citi

---

## Proprietatile de baza

```js
let h1 = document.querySelector("h1")

console.log(h1.tagName)       // "H1" — intotdeauna majuscule
console.log(h1.textContent)   // textul din interior, fara HTML
console.log(h1.innerHTML)     // continutul HTML din interior
console.log(h1.id)            // valoarea atributului id
console.log(h1.className)     // valoarea atributului class

// Dimensiuni si pozitie
console.log(h1.offsetWidth)   // latimea in pixeli
console.log(h1.offsetHeight)  // inaltimea in pixeli
```

<v-click>

```js
// textContent vs innerHTML
let p = document.querySelector("p")

// Daca HTML-ul e: <p>Text cu <strong>bold</strong></p>
console.log(p.textContent)   // "Text cu bold" — fara taguri
console.log(p.innerHTML)     // "Text cu <strong>bold</strong>" — cu taguri
```

</v-click>

---

## Atributele elementelor

```js
let link = document.querySelector("a")

// Citim atribute
console.log(link.getAttribute("href"))     // "https://google.com"
console.log(link.getAttribute("target"))   // "_blank"

// Setam atribute
link.setAttribute("href", "https://youtube.com")
link.setAttribute("target", "_blank")

// Verificam daca exista un atribut
console.log(link.hasAttribute("href"))    // true
console.log(link.hasAttribute("class"))   // false (daca nu are)

// Stergem un atribut
link.removeAttribute("target")
```

<v-click>

**Proprietati directe — shortcut pentru atribute comune:**

```js
link.href    = "https://youtube.com"   // echivalent cu setAttribute
link.id      = "link-principal"
img.src      = "imagine.jpg"
input.value  = "text default"
```

</v-click>

---
layout: section
color: emerald-light
---

# Exercitii

---

## Setup HTML pentru exercitii

Foloseste acest HTML pentru exercitiile de mai jos:

```html
<!DOCTYPE html>
<html>
<body>
  <h1 id="titlu">Lista mea de cumparaturi</h1>
  <ul class="lista">
    <li>Mere</li>
    <li>Lapte</li>
    <li>Paine</li>
    <li>Oua</li>
  </ul>
  <p class="descriere">O lista simpla.</p>
  <a href="https://google.com">Link</a>
</body>
</html>
```

---

## Exercitiu 1 — selectare si inspectie

In consola browserului, raspunde la urmatoarele fara sa modifici nimic:

1. Selecteaza `<h1>` si afiseaza `textContent` si `id`-ul sau
2. Selecteaza toate `<li>`-urile si afiseaza cate sunt
3. Itereaza prin ele cu `forEach` si afiseaza textul fiecaruia
4. Selecteaza `<ul>` si afiseaza `firstElementChild.textContent`
5. De la un `<li>`, ajunge la `<ul>`-ul parinte folosind `.parentElement`

<v-click>

**Rezolvare:**

```js
let h1 = document.querySelector("#titlu")
console.log(h1.textContent, h1.id)   // "Lista mea de cumparaturi", "titlu"

let liuri = document.querySelectorAll("li")
console.log(liuri.length)   // 4

liuri.forEach(function(li) { console.log(li.textContent) })

let ul = document.querySelector("ul")
console.log(ul.firstElementChild.textContent)   // "Mere"

let primuLi = document.querySelector("li")
console.log(primuLi.parentElement.className)   // "lista"
```

</v-click>

---

## Exercitiu 2 — navigare in DOM

Pornind de la `<ul>`, raspunde la:
1. Care este al treilea copil al listei?
2. Care este fratele urmator al `<ul>` (nextElementSibling)?
3. Care este parintele parintelui `<ul>`?

Apoi: selecteaza `<a>` si afiseaza valoarea atributului `href`.  
Verifica daca are atributul `target`.

<v-click>

**Rezolvare:**

```js
let ul = document.querySelector("ul")

console.log(ul.children[2].textContent)          // "Paine" (index 2 = al 3-lea)
console.log(ul.nextElementSibling.textContent)    // "O lista simpla."
console.log(ul.parentElement.parentElement.tagName) // "HTML"

let link = document.querySelector("a")
console.log(link.getAttribute("href"))    // "https://google.com"
console.log(link.hasAttribute("target"))  // false
```

</v-click>

---
layout: section
color: emerald-light
---

# DOMContentLoaded
Cand rulam JavaScript-ul

---

## Problema ordinii de executie

```html
<head>
  <script src="main.js"></script>  <!-- ⚠️ HTML-ul de sub nu exista inca! -->
</head>
<body>
  <h1>Salut</h1>
</body>
```

```js
// In main.js:
let h1 = document.querySelector("h1")
console.log(h1)   // null! <h1> nu e in DOM inca cand ruleaza scriptul
```

<v-click>

**Solutii:**

```html
<!-- 1. Script la finalul lui body — clasic si simplu -->
<body>
  <h1>Salut</h1>
  <script src="main.js"></script>
</body>

<!-- 2. Atribut defer — modern si recomandat -->
<head>
  <script src="main.js" defer></script>
</head>
```

</v-click>

---

## `DOMContentLoaded`

```js
// Alternativa: ascultam evenimentul care semnaleaza ca DOM-ul e gata
document.addEventListener("DOMContentLoaded", function() {
  // Tot codul de initializare sta AICI
  let h1 = document.querySelector("h1")
  console.log(h1)   // functioneaza
})
```

<v-click>

**Diferenta dintre `DOMContentLoaded` si `load`:**

| | `DOMContentLoaded` | `load` |
|--|--|--|
| Cand se declanseaza | HTML parsat, DOM gata | Totul incarcat (imagini, CSS, fonturi) |
| Viteza | Rapid | Mai lent |
| Util pentru | Manipulare DOM | Lucrul cu imagini, dimensiuni |

> In practica, `defer` pe script este suficient si mai simplu.  
> `DOMContentLoaded` este util cand ai script inline in `<head>`.

</v-click>

---
layout: section
color: emerald-light
---

# Recapitulare

---

## Ce am invatat azi

<v-clicks>

- **DOM** — arborele de obiecte JavaScript construit din HTML de catre browser
- **Nodul** — fiecare element HTML devine un obiect cu proprietati si metode
- **`document`** — obiectul radacina, punctul de intrare in DOM
- **`querySelector`** — primul element care se potriveste unui selector CSS
- **`querySelectorAll`** — NodeList cu toate elementele potrivite
- **Navigare** — `children`, `parentElement`, `nextElementSibling`, `closest()`
- **Proprietati** — `tagName`, `textContent`, `innerHTML`, `id`, `className`
- **Atribute** — `getAttribute`, `setAttribute`, `hasAttribute`, `removeAttribute`
- **`defer`** / **`DOMContentLoaded`** — garanteaza ca DOM-ul e gata inainte de executie

</v-clicks>

---

## Tema pentru acasa

Creeaza un fisier HTML cu urmatoarea structura si un fisier `script.js`:
- Un `<h1>` cu un id
- O lista `<ul>` cu cel putin 5 `<li>`-uri
- Doua `<p>` cu clase diferite
- Un `<a>` cu un `href`

In `script.js` (cu `defer`), scrie cod care:
1. Afiseaza in consola numarul de `<li>`-uri
2. Afiseaza textul primului si ultimului `<li>`
3. Afiseaza `tagName`-ul parintelui primului `<li>`
4. Verifica daca `<a>` are atribut `target`
5. **Bonus**: Itereaza prin toate `<li>`-urile si afiseaza indexul si textul fiecaruia

---
layout: cover
color: emerald-light
---

# Intrebari?

<div class="text-xl mt-6 opacity-80">
  Lectia 8: Modificarea DOM — cum schimbam continut, stiluri si cream elemente noi
</div>

<div class="text-sm mt-4 opacity-50">JS Basics · Lectia 7 din 12</div>
