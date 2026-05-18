---
title: 'JavaScript - Obiecte și DOM'
theme: neversink
transition: slide-left
layout: cover
color: emerald-light
info: 'JS Basics · 2026'
lineNumbers: true
draw:
  enabled: true
---

# JavaScript & DOM
## Cum browserul „înțelege" HTML-ul tău

<div class="text-xl mt-4 opacity-70">Lecție 4 · 2026</div>

---
layout: section
color: emerald-light
---

# Recapitulare rapidă
Ce știm până acum

---

## Ce am învățat deja

<v-clicks>

- **Variabile** — `let`, `const`, `var`
-  **Funcții** — `function`, arrow functions
- **Condiții** — `if / else`
- **Bucle** — `for`, `forEach`
- **Obiecte** — `{ cheie: valoare }`
- **Array-uri** — `[1, 2, 3]`
- **Metode** — `.push()`, `.map()`, `.filter()` etc.

</v-clicks>

<v-click>

> Astăzi facem pasul următor: **cum JavaScript interacționează cu pagina web**.

</v-click>

---
layout: section
color: emerald-light
---

# De la HTML la DOM
Sub capotă

---

## Ce este un browser, de fapt?

Când deschizi o pagină web, browserul face mai mulți pași:

<v-clicks>

1. **Descarcă** fișierul HTML de pe server
2. **Citește** (parsează) textul HTML linie cu linie
3. **Construiește** o structură internă în memorie → **DOM**
4. **Descarcă** CSS și calculează stilurile
5. **Rulează** JavaScript-ul
6. **Afișează** rezultatul pe ecran

</v-clicks>

<v-click>

```
index.html (text brut)  →  Parser HTML  →  DOM (în memorie)  →  Ecran
```

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

> HTML **nu este cod**. Este un document text cu etichete (tags).  
> Browserul trebuie să-l transforme în ceva cu care JavaScript poate lucra.

</v-click>

---

## DOM = Document Object Model

**DOM** este reprezentarea HTML-ului ca un **arbore de obiecte JavaScript**.

<v-click>

```
document
└── html
    ├── head
    │   └── title → "Pagina mea"
    └── body
        ├── h1 → "Salut!"
        ├── p  → "Acesta este un paragraf."
        └── ul
            ├── li → "Mere"
            └── li → "Pere"
```

</v-click>

<v-click>

Fiecare **etichetă HTML** devine un **nod (node)** în acest arbore.  
Fiecare nod este un **obiect JavaScript** cu proprietăți și metode!

</v-click>

---

## De ce arbore?

<v-clicks>

- Elementele HTML sunt **imbricate** (unele în altele) → structură ierarhică
- `<body>` conține `<h1>`, `<p>`, `<ul>` → **copii (children)**
- `<ul>` este **părintele (parent)** al `<li>`-urilor
- `<li>` sunt **frați (siblings)** între ei

</v-clicks>

<v-click>

```js
// DOM-ul expune această structură ca obiecte:
document.body           // obiectul <body>
document.body.children  // colecție de copii ai lui <body>
```

</v-click>

<v-click>

> 💡 **Cheia**: browserul transformă text plat → structură arborescentă de obiecte.  
> JavaScript poate **citi și modifica** aceste obiecte în timp real!

</v-click>

---
layout: section
color: emerald-light
---

# Nodul DOM
Ce se află înăuntru

---

## Un element DOM este un obiect JavaScript

Fiecare nod din DOM are **proprietăți** (ca un obiect normal):

```js
const h1 = document.querySelector('h1')

console.log(h1.tagName)       // "H1"
console.log(h1.textContent)   // "Salut!"
console.log(h1.innerHTML)     // "Salut!"
console.log(h1.id)            // ""  (dacă nu are id)
console.log(h1.className)     // ""  (dacă nu are class)
```

<v-click>

Și **metode** (ca un obiect normal):

```js
h1.remove()              // șterge elementul din pagină
h1.setAttribute('id', 'titlu-principal')
h1.getAttribute('id')    // "titlu-principal"
```

</v-click>

---

## Tipuri de noduri

DOM-ul are mai multe tipuri de noduri. Cele mai importante:

<v-clicks>

| Tip | Exemplu | Constantă |
|-----|---------|-----------|
| **Element Node** | `<p>`, `<div>`, `<h1>` | `Node.ELEMENT_NODE` (1) |
| **Text Node** | conținutul textual | `Node.TEXT_NODE` (3) |
| **Document Node** | întregul document | `Node.DOCUMENT_NODE` (9) |

</v-clicks>

<v-click>

```js
const p = document.querySelector('p')
console.log(p.nodeType)           // 1  (Element)
console.log(p.firstChild.nodeType) // 3  (Text)
```

</v-click>

<v-click>

> 💡 Spațiile goale și newline-urile din HTML devin și ele **Text Nodes**!  
> De aceea folosim `.children` (doar elemente) nu `.childNodes` (toate nodurile).

</v-click>

---
layout: section
color: emerald-light
---

# `document`
Punctul de intrare în DOM

---

## Obiectul `document`

`document` este **obiectul rădăcină** al DOM-ului.  
Este disponibil global în orice fișier JavaScript din browser.

```js
console.log(document)           // întregul document HTML
console.log(document.title)     // titlul paginii
console.log(document.URL)       // URL-ul curent
console.log(document.body)      // elementul <body>
console.log(document.head)      // elementul <head>
```

<v-click>

> `document` este ca un **depozit central** — de aici accesăm orice element din pagină.

</v-click>

---

## Selectarea elementelor

Cele mai importante metode de selecție:

```js
// Selectează PRIMUL element care se potrivește
document.querySelector('.card')        // după clasă
document.querySelector('#titlu')       // după id
document.querySelector('h1')          // după tag
document.querySelector('ul li')       // selector CSS complex

// Selectează TOATE elementele care se potrivesc
document.querySelectorAll('.card')    // returnează NodeList
document.querySelectorAll('li')       // toate <li>-urile
```

<v-click>

```js
// Metode mai vechi (dar încă folosite)
document.getElementById('titlu')        // după id
document.getElementsByClassName('card') // după clasă
document.getElementsByTagName('p')      // după tag
```

</v-click>

---

## `querySelector` vs `querySelectorAll`

```js
// querySelector → returnează UN element (sau null)
const primul = document.querySelector('li')
console.log(primul) // primul <li> din pagină

// querySelectorAll → returnează un NodeList (asemănător cu un array)
const toate = document.querySelectorAll('li')
console.log(toate.length) // câte <li>-uri există

// Putem itera cu forEach
toate.forEach(function(item) {
  console.log(item.textContent)
})
```

<v-click>

> ⚠️ **NodeList nu este un array!** Are `forEach`, dar nu are `.map()` sau `.filter()`.  
> Conversia: `const arr = Array.from(document.querySelectorAll('li'))`

</v-click>

---
layout: section
color: emerald-light
---

# 🛠️ Exercițiu practic #1
Selectare și inspecție

---

## Exercițiu #1

**Setup HTML:**

```html
<!DOCTYPE html>
<html>
<body>
  <h1 id="titlu">Lista mea</h1>
  <ul class="fructe">
    <li>Mere</li>
    <li>Pere</li>
    <li>Caise</li>
  </ul>
  <p class="descriere">Fructele mele preferate.</p>
</body>
</html>
```

**Sarcini (în consolă):**
1. Selectează `<h1>` și afișează `textContent`-ul său
2. Selectează toate `<li>`-urile și afișează câte sunt
3. Iterează prin ele și afișează fiecare text

---

## Rezolvare #1

```js
// 1. Selectează h1
const titlu = document.querySelector('#titlu')
console.log(titlu.textContent) // "Lista mea"

// 2. Selectează toate li-urile
const liuri = document.querySelectorAll('li')
console.log(liuri.length) // 3

// 3. Iterează
liuri.forEach(function(item) {
  console.log(item.textContent)
})
// "Mere"
// "Pere"
// "Caise"
```

---
layout: section
color: emerald-light
---

# Modificarea DOM-ului
Citim și scriem

---

## Modificarea conținutului

```js
const h1 = document.querySelector('h1')

// Citim
console.log(h1.textContent) // "Lista mea"

// Scriem (modifică textul)
h1.textContent = 'Lista actualizată!'

// innerHTML permite și HTML în interior
const p = document.querySelector('p')
p.innerHTML = 'Fructe <strong>proaspete</strong>.'
```

<v-click>

> ⚠️ **Atenție la `innerHTML`!**  
> Dacă introduci date de la utilizator cu `innerHTML`, riști **XSS** (cross-site scripting).  
> Folosește `textContent` când nu ai nevoie de HTML.

</v-click>

---

## Modificarea stilurilor

```js
const h1 = document.querySelector('h1')

// Stiluri directe (inline style)
h1.style.color = 'red'
h1.style.fontSize = '48px'
h1.style.backgroundColor = '#f0f0f0'

// Proprietățile CSS cu "-" devin camelCase în JS:
// font-size      → fontSize
// background-color → backgroundColor
// border-radius  → borderRadius
```

<v-click>

> 💡 Stilurile inline sunt ok pentru modificări dinamice, dar pentru schimbări  
> mai complexe e mai bine să lucrăm cu **clase CSS**.

</v-click>

---

## Lucrul cu clase CSS

```js
const card = document.querySelector('.card')

// Adaugă o clasă
card.classList.add('activ')

// Elimină o clasă
card.classList.remove('inactiv')

// Toggle (adaugă dacă nu există, elimină dacă există)
card.classList.toggle('vizibil')

// Verifică dacă are o clasă
card.classList.contains('activ') // true / false
```

<v-click>

```css
/* În CSS definim stilurile */
.activ {
  border: 2px solid green;
  background: #e8f5e9;
}
```

</v-click>

<v-click>

> 🏆 Aceasta este **abordarea recomandată**: JavaScript manipulează clasele,  
> CSS se ocupă de stiluri. Separare clară a responsabilităților.

</v-click>

---

## Modificarea atributelor

```js
const link = document.querySelector('a')

// Citim atribute
link.getAttribute('href')   // "https://google.com"
link.getAttribute('target') // "_blank"

// Setăm atribute
link.setAttribute('href', 'https://youtube.com')
link.setAttribute('target', '_blank')

// Ștergem un atribut
link.removeAttribute('target')

// Proprietăți directe (shortcut pentru atributele comune)
link.href    = 'https://youtube.com'
link.id      = 'link-principal'
link.src     // pentru imagini: <img src="...">
```

---
layout: section
color: emerald-light
---

# Crearea și ștergerea elementelor
DOM dinamic

---

## Crearea elementelor noi

```js
// 1. Creăm elementul (nu e încă în pagină!)
const liNou = document.createElement('li')

// 2. Îi setăm conținutul
liNou.textContent = 'Banane'

// 3. Opțional: adăugăm clase sau atribute
liNou.classList.add('fruct-nou')

// 4. ÎL ADĂUGĂM în DOM
const lista = document.querySelector('ul')
lista.appendChild(liNou) // adaugă LA SFÂRȘIT
```

<v-click>

```js
// Alte metode de inserare
lista.prepend(liNou)           // la ÎNCEPUT
lista.before(liNou)            // ÎNAINTE de <ul>
lista.after(liNou)             // DUPĂ <ul>

// Inserare la o poziție specifică
lista.insertBefore(liNou, lista.children[1]) // înainte de al 2-lea copil
```

</v-click>

---

## Ștergerea elementelor

```js
const primaLinie = document.querySelector('li')

// Metoda modernă (recomandată)
primaLinie.remove()

// Metoda veche (prin părinte)
primaLinie.parentNode.removeChild(primaLinie)
```

<v-click>

```js
// Clonarea unui element
const liOriginal = document.querySelector('li')
const liClona = liOriginal.cloneNode(true) // true = clonează și copiii
lista.appendChild(liClona)
```

</v-click>

---
layout: section
color: emerald-light
---

# 🛠️ Exercițiu practic #2
Manipulare DOM

---

## Exercițiu #2

**Scenariul:** Ai o listă de cumpărături și vrei să o construiești dinamic.

```js
const produse = ['Lapte', 'Pâine', 'Ouă', 'Unt', 'Brânză']
```

**Sarcini:**
1. Creează un `<ul>` în `<body>`
2. Pentru fiecare produs din array, creează un `<li>` și adaugă-l în `<ul>`
3. Stilizează fiecare al doilea `<li>` cu un fundal gri deschis (folosind `.classList`)
4. **Bonus:** adaugă un buton „Șterge primul" care elimină primul `<li>` la click

---

## Rezolvare #2

```js
const produse = ['Lapte', 'Pâine', 'Ouă', 'Unt', 'Brânză']

// 1. Creăm lista
const lista = document.createElement('ul')
document.body.appendChild(lista)

// 2. Populăm lista
produse.forEach(function(produs, index) {
  const li = document.createElement('li')
  li.textContent = produs

  // 3. Stilizăm fiecare al doilea
  if (index % 2 !== 0) {
    li.style.backgroundColor = '#f0f0f0'
  }

  lista.appendChild(li)
})

// 4. Bonus: buton de ștergere
const btn = document.createElement('button')
btn.textContent = 'Șterge primul'
btn.addEventListener('click', function() {
  const primul = lista.querySelector('li')
  if (primul) primul.remove()
})
document.body.appendChild(btn)
```

---
layout: section
color: emerald-light
---

# Evenimente
Cum răspunde pagina la acțiunile utilizatorului

---

## Ce sunt evenimentele?

Evenimentele sunt **lucruri care se întâmplă** în browser:

<v-clicks>

- 🖱️ Utilizatorul **dă click** pe un buton
- ⌨️ Utilizatorul **tastează** ceva
- 🖱️ Mouse-ul **trece peste** un element
- 📄 Pagina s-a **încărcat complet**
- 📝 Un formular a fost **trimis**

</v-clicks>

<v-click>

JavaScript poate **asculta** aceste evenimente și **reacționa** la ele.

```js
element.addEventListener('numeEveniment', functiaDeRaspuns)
```

</v-click>

---

## `addEventListener`

```js
const buton = document.querySelector('button')

// Varianta 1: funcție anonimă
buton.addEventListener('click', function() {
  console.log('Butonul a fost apăsat!')
})

// Varianta 2: arrow function
buton.addEventListener('click', () => {
  console.log('Click!')
})

// Varianta 3: funcție separată (mai ușor de refolosit și eliminat)
function laClick() {
  console.log('Click!')
}
buton.addEventListener('click', laClick)

// Eliminarea unui listener (merge doar cu varianta 3)
buton.removeEventListener('click', laClick)
```

---

## Obiectul `event`

Funcția de răspuns primește automat un parametru: **obiectul eveniment**.

```js
buton.addEventListener('click', function(event) {
  console.log(event)           // tot obiectul event
  console.log(event.type)      // "click"
  console.log(event.target)    // elementul care a generat evenimentul
  console.log(event.target.textContent) // textul butonului

  // Coordonatele mouse-ului
  console.log(event.clientX, event.clientY)
})
```

<v-click>

```js
// Pentru input-uri:
const input = document.querySelector('input')
input.addEventListener('input', function(event) {
  console.log(event.target.value) // valoarea curentă din input
})
```

</v-click>

---

## Evenimente comune

```js
// Mouse
element.addEventListener('click', handler)
element.addEventListener('dblclick', handler)
element.addEventListener('mouseover', handler)  // mouse intră pe element
element.addEventListener('mouseout', handler)   // mouse iese de pe element
element.addEventListener('mousemove', handler)

// Tastatură
document.addEventListener('keydown', handler)   // tastă apăsată
document.addEventListener('keyup', handler)     // tastă eliberată

// Input
input.addEventListener('input', handler)        // la fiecare schimbare
input.addEventListener('change', handler)       // când pierde focusul
input.addEventListener('focus', handler)        // când primește focus
input.addEventListener('blur', handler)         // când pierde focusul

// Pagină
document.addEventListener('DOMContentLoaded', handler) // DOM gata
window.addEventListener('load', handler)               // totul gata (img etc.)
```

---
layout: section
color: emerald-light
---

# Exemplu real
Construim ceva concret

---

## Un to-do list simplu

```html
<input type="text" id="task-input" placeholder="Scrie o sarcină...">
<button id="add-btn">Adaugă</button>
<ul id="task-list"></ul>
```

```js
const input = document.querySelector('#task-input')
const btn = document.querySelector('#add-btn')
const lista = document.querySelector('#task-list')

btn.addEventListener('click', function() {
  const text = input.value.trim()

  if (text === '') return // nu adăugăm dacă e gol

  const li = document.createElement('li')
  li.textContent = text

  // Click pe element → marchează ca done
  li.addEventListener('click', function() {
    li.classList.toggle('completat')
  })

  lista.appendChild(li)
  input.value = '' // golim input-ul
  input.focus()    // mutăm focusul înapoi
})
```

---

## Adăugăm ștergere

```js
btn.addEventListener('click', function() {
  const text = input.value.trim()
  if (text === '') return

  const li = document.createElement('li')

  const span = document.createElement('span')
  span.textContent = text

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = '✕'
  deleteBtn.addEventListener('click', function(event) {
    event.stopPropagation() // oprește click-ul să ajungă la <li>
    li.remove()
  })

  li.appendChild(span)
  li.appendChild(deleteBtn)
  li.addEventListener('click', () => li.classList.toggle('completat'))

  lista.appendChild(li)
  input.value = ''
  input.focus()
})
```

---

## `stopPropagation` — de ce?

Evenimentele **se propagă în sus** prin arbore (event bubbling):

```
click pe <button> → urcă la <li> → urcă la <ul> → urcă la <body> → ...
```

<v-click>

```js
// Fără stopPropagation:
// click pe ✕ → șterge LI + toggle class completat (nedorit!)

// Cu stopPropagation:
deleteBtn.addEventListener('click', function(event) {
  event.stopPropagation() // oprește bubbling-ul
  li.remove()             // doar asta se întâmplă
})
```

</v-click>

<v-click>

> 💡 `event.preventDefault()` — oprește comportamentul **default** al browserului  
> (ex: trimite form, urmează link). Diferit de `stopPropagation`!

</v-click>

---
layout: section
color: emerald-light
---

# 🛠️ Exercițiu practic #3
Aplicație completă

---

## Exercițiu #3 — Contor interactiv

**Construiește un contor cu:**
- Un `<h2>` care afișează valoarea curentă (start: 0)
- Un buton **+** care incrementează
- Un buton **−** care decrementează (minim 0)
- Un buton **Reset** care resetează la 0
- Dacă valoarea > 10, culoarea textului devine roșie
- Dacă valoarea = 0, culoarea revine la negru

**Bonus:** Adaugă și input de tip număr care să seteze valoarea direct.

<br>

> ⏱️ Timp: 15 minute

---

## Rezolvare #3

```js
let valoare = 0
const afisaj = document.querySelector('h2')
const btnPlus = document.querySelector('#plus')
const btnMinus = document.querySelector('#minus')
const btnReset = document.querySelector('#reset')

function actualizeaza() {
  afisaj.textContent = valoare
  afisaj.style.color = valoare > 10 ? 'red' : 'black'
}

btnPlus.addEventListener('click', function() {
  valoare++
  actualizeaza()
})

btnMinus.addEventListener('click', function() {
  if (valoare > 0) valoare--
  actualizeaza()
})

btnReset.addEventListener('click', function() {
  valoare = 0
  actualizeaza()
})
```

---
layout: section
color: emerald-light
---

# Navigarea în DOM
Relații între noduri

---

## Traversarea arborelui

```js
const ul = document.querySelector('ul')

// Copii
ul.children          // HTMLCollection cu elementele copil
ul.childNodes        // NodeList cu TOATE nodurile (incl. text)
ul.firstElementChild // primul copil element
ul.lastElementChild  // ultimul copil element

// Părinte
ul.parentElement     // elementul părinte
ul.parentNode        // nodul părinte

// Frați
ul.previousElementSibling // fratele anterior
ul.nextElementSibling     // fratele următor
```

<v-click>

```js
// Exemplu practic: accesează al 2-lea <li>
const alDoileaLi = document.querySelector('ul').children[1]
console.log(alDoileaLi.textContent)
```

</v-click>

---

## `closest()` — urcă în arbore

```js
// Găsește cel mai apropiat strămoș care se potrivește selectorului
const li = document.querySelector('li')
li.closest('ul')      // găsește <ul>-ul părinte
li.closest('body')    // găsește <body>
li.closest('.container') // găsește primul strămoș cu clasa .container
```

<v-click>

**Caz de utilizare real — event delegation:**

```js
// În loc să adăugăm listener pe fiecare <li>...
document.querySelector('ul').addEventListener('click', function(event) {
  // event.target = elementul pe care s-a dat click
  const li = event.target.closest('li')
  if (li) {
    li.classList.toggle('completat')
  }
})
```

</v-click>

<v-click>

> 🏆 **Event delegation**: un singur listener pe părinte, în loc de câte unul pe fiecare copil.  
> Mai eficient, funcționează și pentru elemente adăugate dinamic!

</v-click>

---
layout: section
color: emerald-light
---

# `DOMContentLoaded`
Când rulăm JavaScript-ul?

---

## Problema ordinii de execuție

```html
<head>
  <script src="main.js"></script> <!-- ⚠️ HTML-ul de sub nu există încă! -->
</head>
<body>
  <h1>Salut</h1>
</body>
```

```js
// În main.js:
const h1 = document.querySelector('h1')
console.log(h1) // null! <h1> nu există încă în DOM
```

<v-click>

**Soluții:**

```html
<!-- 1. Script la finalul body (clasic) -->
<body>
  <h1>Salut</h1>
  <script src="main.js"></script> <!-- ✅ -->
</body>

<!-- 2. Atribut defer (modern și recomandat) -->
<head>
  <script src="main.js" defer></script> <!-- ✅ -->
</head>
```

</v-click>

---

## `DOMContentLoaded`

```js
// Alternativ: ascultăm evenimentul care semnalează că DOM-ul e gata
document.addEventListener('DOMContentLoaded', function() {
  // Tot codul de inițializare stă aici
  const h1 = document.querySelector('h1')
  console.log(h1) // ✅ funcționează
})
```

<v-click>

**Diferența:**

| | `DOMContentLoaded` | `load` |
|--|--|--|
| Când | HTML parsat, DOM gata | Totul gata (img, CSS, fonturi) |
| Viteză | ⚡ Rapid | 🐢 Mai lent |
| Util pentru | Manipulare DOM | Lucrul cu imagini/resurse |

</v-click>

---
layout: section
color: emerald-light
---

# Recapitulare
Tot ce am învățat azi

---

## Rezumat lecție

<v-clicks>

- 🌳 **DOM** = arborele de obiecte JavaScript construit din HTML
- 📄 **`document`** = punctul de intrare, obiectul rădăcină
- 🔍 **Selecție**: `querySelector`, `querySelectorAll`
- ✏️ **Modificare**: `textContent`, `innerHTML`, `style`, `classList`
- ➕ **Creare**: `createElement`, `appendChild`, `prepend`, `remove`
- 👂 **Evenimente**: `addEventListener(tip, functie)`
- 📦 **`event` object**: `.target`, `.type`, `.preventDefault()`, `.stopPropagation()`
- 🧭 **Navigare**: `.children`, `.parentElement`, `.closest()`
- ⏱️ **Timing**: `defer` sau `DOMContentLoaded`

</v-clicks>

---

## Flux de lucru tipic

```js
// 1. Așteptăm DOM-ul
document.addEventListener('DOMContentLoaded', function() {

  // 2. Selectăm elementele de care avem nevoie
  const buton = document.querySelector('#buton-meu')
  const rezultat = document.querySelector('#rezultat')

  // 3. Adăugăm comportament prin evenimente
  buton.addEventListener('click', function() {

    // 4. Modificăm DOM-ul ca răspuns
    rezultat.textContent = 'Ai apăsat butonul!'
    rezultat.classList.add('vizibil')
  })
})
```

> Acesta este **pattern-ul de bază** al oricărei interactivități web.

---
layout: section
color: emerald-light
---

# 🏠 Tema pentru acasă

---

## Tema: Galerie de imagini simplă

**Construiește o pagină HTML + JS cu:**

<v-clicks>

1. Un array de obiecte cu titlu și URL imagine (poți folosi `https://picsum.photos/300/200?random=N`)
2. Generează dinamic carduri pentru fiecare imagine (img + titlu)
3. Click pe un card → afișează titlul într-un `<h2>` deasupra galeriei
4. Un buton „Amestecă" care reordonează random cardurile (hint: `.sort(() => Math.random() - 0.5)`)
5. **Bonus**: Un input de căutare care filtrează cardurile după titlu în timp real

</v-clicks>

<v-click>

> 💡 Aplică tot ce ai învățat azi: selecție, creare elemente, evenimente, classList.

</v-click>

---
layout: cover
color: emerald-light
---

# Întrebări?

<div class="text-xl mt-6 opacity-80">
  Data viitoare: Events aprofundat + Formulare + Fetch API
</div>

<div class="text-sm mt-4 opacity-50">JS Basics · 2026</div>