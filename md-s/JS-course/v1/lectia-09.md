---
title: 'JavaScript — Evenimente si Formulare'
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
## Evenimente si Formulare

<div class="text-xl mt-4 opacity-70">Lectia 9 · Modul 3 — DOM si interactivitate</div>

---
layout: section
color: emerald-light
---

# Ce sunt evenimentele?
Cum reactioneaza pagina la actiunile utilizatorului

---

## Evenimentele sunt lucruri care se intampla

<v-clicks>

- Utilizatorul **da click** pe un buton
- Utilizatorul **tasteaza** ceva intr-un input
- Mouse-ul **trece peste** un element
- Pagina s-a **incarcat complet**
- Utilizatorul **trimite** un formular

</v-clicks>

<v-click>

JavaScript poate **asculta** aceste evenimente si **reactiona** la ele printr-o functie.

```js
// Structura generala
element.addEventListener("numeEveniment", functieDeRaspuns)
```

> `addEventListener` este metoda prin care spunem browserului:  
> "Cand se intampla *acest eveniment* pe *acest element*, apeleaza *aceasta functie*."

</v-click>

---
layout: section
color: emerald-light
---

# `addEventListener`
Cum ascultam evenimente

---

## Sintaxa de baza

```js
let buton = document.querySelector("button")

// Varianta 1 — functie declarata separat
function laClick() {
  console.log("Butonul a fost apasat!")
}
buton.addEventListener("click", laClick)

// Varianta 2 — functie anonima direct
buton.addEventListener("click", function() {
  console.log("Click!")
})
```

<v-click>

**Observatie importanta — fara paranteze la functie:**

```js
buton.addEventListener("click", laClick)    // corect — trimitem referinta
buton.addEventListener("click", laClick())  // gresit — apelam imediat si trimitem rezultatul
```

> Stii deja de la callback-uri: fara paranteze = trimitem functia, cu paranteze = o executam imediat.

</v-click>

---

## Eliminarea unui listener

```js
function laClick() {
  console.log("Click!")
}

let buton = document.querySelector("button")

// Adaugam listener-ul
buton.addEventListener("click", laClick)

// Eliminam listener-ul — merge DOAR daca functia e declarata separat
buton.removeEventListener("click", laClick)

// Nu putem elimina o functie anonima
buton.addEventListener("click", function() {
  console.log("Acest listener nu poate fi eliminat")
})
```

<v-click>

> Eliminarea listener-ilor este importanta in aplicatii complexe pentru a evita  
> comportamente repetate nedorite sau scurgeri de memorie.

</v-click>

---
layout: section
color: emerald-light
---

# Obiectul `event`
Informatii despre evenimentul produs

---

## Ce este obiectul `event`

Cand un eveniment se produce, browserul apeleaza callback-ul nostru  
si ii trimite automat un argument — **obiectul `event`**.

```js
buton.addEventListener("click", function(event) {
  console.log(event)           // tot obiectul event
  console.log(event.type)      // "click" — tipul evenimentului
  console.log(event.target)    // elementul pe care s-a dat click
  console.log(event.timeStamp) // momentul in timp al evenimentului
})
```

<v-click>

**`event.target` — elementul care a generat evenimentul:**

```js
buton.addEventListener("click", function(event) {
  console.log(event.target)              // elementul <button>
  console.log(event.target.textContent)  // textul butonului
  console.log(event.target.id)           // id-ul butonului
  console.log(event.target.className)    // clasele butonului
})
```

</v-click>

---

## Coordonatele mouse-ului

```js
document.addEventListener("mousemove", function(event) {
  console.log(event.clientX, event.clientY)  // pozitie relativa la fereastra
  console.log(event.pageX, event.pageY)      // pozitie relativa la document
})

document.addEventListener("click", function(event) {
  console.log(`Click la x:${event.clientX}, y:${event.clientY}`)
})
```

<v-click>

**Evenimente de tastatura:**

```js
document.addEventListener("keydown", function(event) {
  console.log(event.key)     // "a", "Enter", "ArrowLeft", "Escape"
  console.log(event.code)    // "KeyA", "Enter", "ArrowLeft"
  console.log(event.ctrlKey) // true daca Ctrl era apasat
  console.log(event.shiftKey) // true daca Shift era apasat
})
```

</v-click>

---
layout: section
color: emerald-light
---

# Event Bubbling
Cum se propaga evenimentele

---

## Evenimentele urca in arbore

Cand dai click pe un element, evenimentul se **propaga in sus** prin arbore:

```html
<div class="container">
  <ul>
    <li><button>Click</button></li>
  </ul>
</div>
```

```
click pe <button>
  → urca la <li>
    → urca la <ul>
      → urca la <div>
        → urca la <body>
          → urca la <html>
            → urca la document
```

<v-click>

Daca ai un listener pe `<div>` si dai click pe `<button>`, listener-ul de pe `<div>` **se va declansa** — pentru ca evenimentul a urcat pana la el.

</v-click>

---

## `stopPropagation` — oprim propagarea

```js
let butonSterge = document.querySelector(".btn-sterge")
let card = document.querySelector(".card")

card.addEventListener("click", function() {
  console.log("Click pe card!")
})

butonSterge.addEventListener("click", function(event) {
  event.stopPropagation()   // evenimentul nu mai urca la .card
  console.log("Sterg cardul...")
  card.remove()
})
```

<v-click>

**Fara `stopPropagation`:** click pe `.btn-sterge` → "Click pe card!" + "Sterg cardul..."  
**Cu `stopPropagation`:** click pe `.btn-sterge` → doar "Sterg cardul..."

</v-click>

---

## `preventDefault` — oprim comportamentul implicit

Unele elemente au comportament implicit al browserului:

```js
// Un link navigheza implicit la href
let link = document.querySelector("a")
link.addEventListener("click", function(event) {
  event.preventDefault()   // oprim navigarea
  console.log("Link apasat, dar nu navigam")
})

// Un formular trimite date la server si reincarca pagina
let form = document.querySelector("form")
form.addEventListener("submit", function(event) {
  event.preventDefault()   // oprim trimiterea si reincarcarea
  console.log("Procesam datele din formular cu JavaScript")
})
```

<v-click>

```
stopPropagation   → opreste urcarea evenimentului in arbore
preventDefault    → opreste comportamentul implicit al browserului
```

</v-click>

---

## Event Delegation — un pattern important

In loc sa adaugam listener pe fiecare element, adaugam **unul singur pe parinte**:

```js
// Fara delegation — un listener per element (ineficient)
let liuri = document.querySelectorAll("li")
liuri.forEach(function(li) {
  li.addEventListener("click", function() {
    li.classList.toggle("completat")
  })
})

// Cu delegation — un singur listener pe parinte (recomandat)
let ul = document.querySelector("ul")
ul.addEventListener("click", function(event) {
  let li = event.target.closest("li")
  if (li) {
    li.classList.toggle("completat")
  }
})
```

<v-click>

> **Avantaj major**: functioneaza si pentru elementele adaugate **dinamic** dupa ce listener-ul a fost setat.  
> Cu abordarea clasica, elementele noi nu ar fi avute in vedere.

</v-click>

---
layout: section
color: emerald-light
---

# Evenimente comune
Referinta practica

---

## Mouse si tastatura

```js
// Mouse
element.addEventListener("click", handler)          // click simplu
element.addEventListener("dblclick", handler)       // dublu click
element.addEventListener("mouseenter", handler)     // mouse intra pe element
element.addEventListener("mouseleave", handler)     // mouse iese de pe element
element.addEventListener("mousemove", handler)      // mouse se misca pe element

// Tastatura — de obicei pe document
document.addEventListener("keydown", handler)       // tasta apasata
document.addEventListener("keyup", handler)         // tasta eliberata

// Pagina
window.addEventListener("load", handler)            // totul incarcat
document.addEventListener("DOMContentLoaded", handler) // DOM gata
window.addEventListener("resize", handler)          // fereastra redimensionata
window.addEventListener("scroll", handler)          // scroll
```

---
layout: section
color: emerald-light
---

# Formulare si input-uri
Citim ce introduce utilizatorul

---

## Citirea valorii dintr-un input

```js
let input = document.querySelector("input")

// .value — valoarea curenta din input
console.log(input.value)   // ce a scris utilizatorul
```

<v-click>

**Evenimente pe input:**

```js
// "input" — se declanseaza la FIECARE schimbare (tastare, stergere, lipire)
input.addEventListener("input", function(event) {
  console.log(event.target.value)   // valoarea curenta dupa fiecare tasta
})

// "change" — se declanseaza cand inputul pierde focusul si valoarea s-a schimbat
input.addEventListener("change", function(event) {
  console.log("Valoare finala:", event.target.value)
})

// "focus" — cand inputul primeste focus (utilizatorul da click pe el)
// "blur"  — cand inputul pierde focus
input.addEventListener("focus", function() { console.log("Activ") })
input.addEventListener("blur",  function() { console.log("Inactiv") })
```

</v-click>

---

## Tipuri de input si valorile lor

```js
// Text
let text = document.querySelector('input[type="text"]')
console.log(text.value)             // "Ion Ionescu"

// Checkbox
let checkbox = document.querySelector('input[type="checkbox"]')
console.log(checkbox.checked)      // true / false — NU .value!

// Radio
let radio = document.querySelector('input[type="radio"]:checked')
console.log(radio ? radio.value : "nimic selectat")

// Select (dropdown)
let select = document.querySelector("select")
console.log(select.value)          // valoarea optiunii selectate

// Textarea
let textarea = document.querySelector("textarea")
console.log(textarea.value)        // textul introdus
```

---

## Evenimentul `submit` pe formular

```js
let form = document.querySelector("form")

form.addEventListener("submit", function(event) {
  event.preventDefault()   // opreste reincarcarea paginii — mereu necesar!

  // Citim valorile din campuri
  let nume = document.querySelector("#input-nume").value
  let email = document.querySelector("#input-email").value

  // Validam
  if (nume.trim() === "") {
    console.log("Numele este obligatoriu!")
    return   // iesim din functie daca e invalid
  }

  // Procesam datele
  console.log(`Trimitem: ${nume}, ${email}`)
})
```

<v-click>

> **`event.preventDefault()`** este **obligatoriu** pe `submit`.  
> Fara el, pagina se reincarca si pierzi toate datele din JavaScript.

</v-click>

---

## Validarea simpla a unui formular

```js
form.addEventListener("submit", function(event) {
  event.preventDefault()

  let numeInput = document.querySelector("#nume")
  let emailInput = document.querySelector("#email")
  let erori = []

  // Verificam fiecare camp
  if (numeInput.value.trim() === "") {
    erori.push("Numele este obligatoriu")
    numeInput.classList.add("invalid")
  } else {
    numeInput.classList.remove("invalid")
  }

  if (!emailInput.value.includes("@")) {
    erori.push("Emailul nu este valid")
    emailInput.classList.add("invalid")
  } else {
    emailInput.classList.remove("invalid")
  }

  if (erori.length === 0) {
    console.log("Formular valid! Trimitem...")
  } else {
    erori.forEach(function(eroare) { console.log(eroare) })
  }
})
```

---
layout: section
color: emerald-light
---

# Exercitii

---

## Exercitiu 1 — butoane interactive

**HTML:**
```html
<h2 id="contor">0</h2>
<button id="plus">+</button>
<button id="minus">−</button>
<button id="reset">Reset</button>
```

Implementeaza un contor: `+` incrementeaza, `−` decrementeaza (minim 0), `Reset` revine la 0.  
Daca valoarea > 10, textul devine rosu. Daca e 0, revine la negru.

<v-click>

```js
let valoare = 0
let afisaj = document.querySelector("#contor")

function actualizeaza() {
  afisaj.textContent = valoare
  afisaj.style.color = valoare > 10 ? "red" : "black"
}

document.querySelector("#plus").addEventListener("click", function() {
  valoare++; actualizeaza()
})
document.querySelector("#minus").addEventListener("click", function() {
  if (valoare > 0) valoare--; actualizeaza()
})
document.querySelector("#reset").addEventListener("click", function() {
  valoare = 0; actualizeaza()
})
```

</v-click>

---

## Exercitiu 2 — filtrare in timp real

**HTML:**
```html
<input type="text" id="cautare" placeholder="Cauta un oras...">
<ul id="lista-orase"></ul>
```

```js
let orase = ["Bucuresti", "Cluj-Napoca", "Iasi", "Timisoara",
             "Constanta", "Craiova", "Brasov", "Galati"]
```

La fiecare tasta, afiseaza doar orasele care contin textul din input (case-insensitive).

<v-click>

```js
let ul = document.querySelector("#lista-orase")
let input = document.querySelector("#cautare")

function afiseazaOrase(lista) {
  ul.innerHTML = ""
  lista.forEach(function(oras) {
    let li = document.createElement("li")
    li.textContent = oras
    ul.appendChild(li)
  })
}

afiseazaOrase(orase)

input.addEventListener("input", function(event) {
  let termen = event.target.value.toLowerCase()
  let filtrate = orase.filter(function(oras) {
    return oras.toLowerCase().includes(termen)
  })
  afiseazaOrase(filtrate)
})
```

</v-click>

---

## Exercitiu 3 — to-do list complet

**HTML:**
```html
<input type="text" id="input-sarcina" placeholder="Sarcina noua...">
<button id="btn-adauga">Adauga</button>
<ul id="lista-sarcini"></ul>
```

Implementeaza:
1. Click pe "Adauga" (sau Enter) → adauga sarcina in lista
2. Click pe o sarcina → marcheaz-o ca finalizata (clasa `"finalizata"`)
3. Buton "✕" pe fiecare sarcina → sterge acea sarcina
4. Nu adauga sarcini goale

<v-click>

```js
let input = document.querySelector("#input-sarcina")
let btnAdauga = document.querySelector("#btn-adauga")
let lista = document.querySelector("#lista-sarcini")

function adaugaSarcina() {
  let text = input.value.trim()
  if (text === "") return

  let li = document.createElement("li")
  li.textContent = text

  let btn = document.createElement("button")
  btn.textContent = "✕"
  btn.addEventListener("click", function(e) {
    e.stopPropagation()
    li.remove()
  })

  li.addEventListener("click", function() { li.classList.toggle("finalizata") })
  li.appendChild(btn)
  lista.appendChild(li)
  input.value = ""
  input.focus()
}

btnAdauga.addEventListener("click", adaugaSarcina)
input.addEventListener("keydown", function(e) { if (e.key === "Enter") adaugaSarcina() })
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

- **`addEventListener(tip, callback)`** — asculta un eveniment pe un element
- **Obiectul `event`** — contine informatii despre eveniment: `type`, `target`, `key`, `clientX/Y`
- **`event.target`** — elementul care a generat evenimentul
- **Event Bubbling** — evenimentele urca in arborele DOM
- **`stopPropagation()`** — opreste propagarea in sus
- **`preventDefault()`** — opreste comportamentul implicit al browserului
- **Event Delegation** — un listener pe parinte pentru toti copiii, inclusiv cei dinamici
- **`input.value`** — valoarea curenta dintr-un input text
- **`checkbox.checked`** — starea unui checkbox (`true`/`false`)
- **Evenimentul `submit`** — interceptam trimiterea unui formular (mereu cu `preventDefault`)

</v-clicks>

---

## Tema pentru acasa

Construieste o pagina cu un formular de inregistrare care contine:
- Input pentru nume (minim 3 caractere)
- Input pentru email (trebuie sa contina `@`)
- Input pentru parola (minim 6 caractere)
- Checkbox pentru "Sunt de acord cu termenii"
- Buton Submit

La submit:
1. Valideaza fiecare camp si afiseaza mesaje de eroare clare sub fiecare input invalid
2. Daca totul e valid, afiseaza un mesaj de succes si goleste formularul
3. **Bonus**: Valideaza si in timp real (la evenimentul `blur` pe fiecare input) si coloreaza bordul in rosu/verde

---
layout: cover
color: emerald-light
---

# Intrebari?

<div class="text-xl mt-6 opacity-80">
  Lectia 10: JavaScript modern — arrow functions, destructuring, map si filter
</div>

<div class="text-sm mt-4 opacity-50">JS Basics · Lectia 9 din 12</div>
