---
title: 'JavaScript — Metode si Callback-uri'
theme: neversink
transition: slide-left
layout: cover
color: teal-light
info: 'JS Basics · 2026'
lineNumbers: true
draw:
  enabled: true
---

# JavaScript
## Ce sunt metodele si callback-urile

<div class="text-xl mt-4 opacity-70">Lectia 5 · Modul 2 — Functii si structuri de date</div>

---
layout: section
color: teal-light
---

# Ce sunt metodele?
Functii atasate unui obiect sau array

---

## Recapitulare — ce stim despre functii

```js
// O functie normala — o declaram noi, o apelam noi
function saluta(nume) {
  console.log("Salut, " + nume)
}

saluta("Ana")   // apelam noi functia, dupa numele ei
```

<v-click>

Pana acum am folosit deja cateva comenzi cu o sintaxa diferita:

```js
fructe.push("kiwi")
text.toUpperCase()
console.log("ceva")
```

Toate au ceva in comun: **punct** intre doua lucruri, urmat de paranteze.  
Aceasta este **sintaxa pentru metode**.

</v-click>

---

## Metoda = functie pe un obiect

O metoda este o **functie care apartine unui obiect** (sau unui array, sau unui string).  
Nu o declaram noi — vine deja definita pe acel tip de date.

```js
let text = "Salut!"

// Apelam metoda toUpperCase pe string-ul text
let majuscule = text.toUpperCase()
console.log(majuscule)   // "SALUT!"

// Apelam metoda includes pe string-ul text
let contine = text.includes("Sal")
console.log(contine)     // true
```

<v-click>

**Structura:**

```
obiect  .  numeMetoda  (  argumente  )
text    .  toUpperCase (             )
fructe  .  push        (  "kiwi"     )
console .  log         (  "ceva"     )
```

</v-click>

---

## De ce exista metode?

Metodele sunt functii care **stiu pe ce lucreaza**.

```js
// O functie normala are nevoie sa primeasca datele ca argument
function transformaMajuscule(sir) {
  // ...logica de transformare
}
transformaMajuscule(text)

// O metoda stie deja pe ce date lucreaza — textul de dinainte de punct
text.toUpperCase()
//  ^ "eu" — metoda stie ca trebuie sa transforme ACEST string
```

<v-click>

```js
let fructe = ["mar", "banana"]
let legume = ["morcov", "ceapa"]

fructe.push("kiwi")     // push stie ca adauga in fructe
legume.push("ardei")    // push stie ca adauga in legume
```

> Acelasi "push", comportament identic, dar fiecare stie **pe ce array lucreaza**.

</v-click>

---
layout: section
color: teal-light
---

# Functiile sunt valori
Un concept fundamental in JavaScript

---

## Functiile pot fi stocate in variabile

In JavaScript, functiile sunt **valori ca oricare alta**. Le poti pune intr-o variabila:

```js
// Declarare clasica
function aduna(a, b) {
  return a + b
}

// Exact acelasi lucru, scris altfel — functie stocata intr-o variabila
const aduna = function(a, b) {
  return a + b
}

// Le apelam la fel
console.log(aduna(3, 5))   // 8
```

<v-click>

```js
// Putem chiar sa le atribuim altor variabile
const operatie = aduna
console.log(operatie(10, 20))   // 30 — aceeasi functie, alt nume
```

</v-click>

---

## Functiile pot fi trimise ca argumente

Daca functiile sunt valori, le putem trimite ca argument altei functii:

```js
function executa(functie) {
  functie()   // apelam functia primita ca argument
}

function saluta() {
  console.log("Salut!")
}

executa(saluta)   // trimitem functia, fara paranteze
// "Salut!"
```

<v-click>

**Atentie la diferenta:**

```js
executa(saluta)    // trimitem REFERINTA la functie — o sa fie apelata inauntru
executa(saluta())  // apelam saluta ACUM si trimitem REZULTATUL (undefined)
//              ^^ parantezele declanseaza executia imediata
```

> Fara paranteze = "iata functia, tu decide cand o apelezi"  
> Cu paranteze = "apeleaz-o acum si trimite rezultatul"

</v-click>

---
layout: section
color: teal-light
---

# Callback-uri
Functii trimise ca argumente

---

## Ce este un callback?

Un **callback** este o functie pe care o trimiti ca argument unei alte functii,  
cu intelegerea ca aceasta din urma o va apela la momentul potrivit.

```js
function faceCeva(callback) {
  console.log("Inainte...")
  callback()              // apelam functia primita
  console.log("Dupa...")
}

function mesajulMeu() {
  console.log("Sunt callback-ul!")
}

faceCeva(mesajulMeu)
// "Inainte..."
// "Sunt callback-ul!"
// "Dupa..."
```

<v-click>

> `mesajulMeu` este callback-ul — il trimitem ca argument, `faceCeva` decide cand il apeleaza.

</v-click>

---

## Callback cu argument

Functia care primeste callback-ul poate sa ii trimita si argumente:

```js
function proceseaza(valoare, callback) {
  let rezultat = valoare * 2
  callback(rezultat)    // apelam callback-ul CU un argument
}

function afiseaza(val) {
  console.log("Rezultat: " + val)
}

proceseaza(5, afiseaza)   // "Rezultat: 10"
proceseaza(8, afiseaza)   // "Rezultat: 16"
```

<v-click>

```js
// Putem si cu o functie anonima definita direct la apel
proceseaza(7, function(val) {
  console.log("Valoarea dubla este: " + val)
})
// "Valoarea dubla este: 14"
```

</v-click>

---

## De ce sunt utile callback-urile?

```js
// Fara callback — functia e rigida, face mereu acelasi lucru
function dubleazaSiAfiseaza(numere) {
  for (let i = 0; i < numere.length; i++) {
    console.log(numere[i] * 2)
  }
}

// Cu callback — functia e flexibila, comportamentul il decizi tu
function proceseazaFiecare(numere, callback) {
  for (let i = 0; i < numere.length; i++) {
    callback(numere[i])
  }
}

let numere = [1, 2, 3, 4, 5]

proceseazaFiecare(numere, function(n) { console.log(n * 2) })
// 2, 4, 6, 8, 10

proceseazaFiecare(numere, function(n) { console.log(n + " lei") })
// "1 lei", "2 lei", "3 lei", "4 lei", "5 lei"
```

---
layout: section
color: teal-light
---

# `forEach` in detaliu
Acum putem intelege cum functioneaza

---

## Ce face `forEach` de fapt

`forEach` este exact **functia `proceseazaFiecare`** pe care am scris-o — dar incorporata in orice array.

```js
// Ce am scris noi
function proceseazaFiecare(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}

// Ce face forEach — identic, dar e metoda pe array
let fructe = ["mar", "banana", "kiwi"]
fructe.forEach(function(fruct) {
  console.log(fruct)
})
// "mar"
// "banana"
// "kiwi"
```

<v-click>

`forEach` apeleaza callback-ul tau pentru fiecare element, pasandu-i elementul curent.

</v-click>

---

## `forEach` — parametrii callback-ului

Callback-ul primit de `forEach` poate accepta pana la 3 parametri:

```js
let fructe = ["mar", "banana", "kiwi"]

fructe.forEach(function(element, index, arrayOriginal) {
  console.log(`${index}: ${element}`)
})
// "0: mar"
// "1: banana"
// "2: kiwi"
```

<v-click>

```js
// Al treilea parametru e rar folosit, dar exista
fructe.forEach(function(element, index, arr) {
  console.log(`${element} este ${index === arr.length - 1 ? "ultimul" : "nu ultimul"}`)
})
```

> Poti numi parametrii cum vrei — `element`, `fruct`, `item`, `x` — nu conteaza.  
> Ordinea conteaza: primul = elementul, al doilea = indexul, al treilea = array-ul.

</v-click>

---

## `forEach` vs `for` clasic — comparatie

```js
let numere = [10, 20, 30, 40, 50]

// for clasic — mai mult cod, dar mai flexibil
for (let i = 0; i < numere.length; i++) {
  console.log(numere[i])
}

// forEach — mai concis, intentia e mai clara
numere.forEach(function(numar) {
  console.log(numar)
})
```

<v-click>

**Cand folosim `for` clasic:**
- Avem nevoie de `break` sau `continue`
- Vrem sa parcurgem invers (`i--`)
- Vrem sa sarim pasi (`i += 2`)
- Avem nevoie de indexul exact si de control fin

**Cand folosim `forEach`:**
- Vrem pur si simplu sa facem ceva cu fiecare element
- Codul este mai clar si mai usor de citit

</v-click>

---

## Alte metode cu callback — o privire in avans

`forEach` nu e singura metoda care primeste un callback. Toate acestea functioneaza la fel:

```js
let numere = [1, 2, 3, 4, 5, 6]

// forEach — face ceva cu fiecare element (nu returneaza nimic util)
numere.forEach(function(n) { console.log(n) })

// map — transforma fiecare element, returneaza array nou
// (detalii complete la lectia 10)
let duble = numere.map(function(n) { return n * 2 })
// [2, 4, 6, 8, 10, 12]

// filter — pastreaza doar elementele pentru care callback returneaza true
// (detalii complete la lectia 10)
let pare = numere.filter(function(n) { return n % 2 === 0 })
// [2, 4, 6]
```

<v-click>

> Acum ca stii ce este un callback, toate aceste metode au sens.  
> Toate primesc o functie si o apeleaza pentru fiecare element din array.

</v-click>

---
layout: section
color: teal-light
---

# Exercitii

---

## Exercitiu 1 — intelegerea callback-urilor

Scrie o functie `aplicaPeTot(arr, functie)` care primeste un array si o functie, si apeleaza functia pe fiecare element.

Testeaz-o cu trei callback-uri diferite:
1. Afiseaza elementul
2. Afiseaza elementul la patrat
3. Afiseaza daca elementul e par sau impar

<v-click>

**Rezolvare:**

```js
function aplicaPeTot(arr, functie) {
  for (let i = 0; i < arr.length; i++) {
    functie(arr[i])
  }
}

let numere = [1, 2, 3, 4, 5]

aplicaPeTot(numere, function(n) { console.log(n) })
aplicaPeTot(numere, function(n) { console.log(n * n) })
aplicaPeTot(numere, function(n) {
  console.log(`${n} este ${n % 2 === 0 ? "par" : "impar"}`)
})
```

</v-click>

---

## Exercitiu 2 — `forEach` in practica

Ai o lista de produse cu preturi. Folosind `forEach`:
1. Afiseaza fiecare produs si pretul sau
2. Calculeaza suma totala a tuturor preturilor
3. Afiseaza doar produsele care costa peste 100 lei

```js
let produse = [
  { nume: "Carte", pret: 45 },
  { nume: "Casti", pret: 250 },
  { nume: "Pix", pret: 8 },
  { nume: "Rucsac", pret: 180 },
  { nume: "Notebook", pret: 35 }
]
```

<v-click>

**Rezolvare:**

```js
let total = 0

produse.forEach(function(produs) {
  console.log(`${produs.nume}: ${produs.pret} lei`)
  total += produs.pret
})

console.log(`Total: ${total} lei`)   // 518 lei

console.log("Peste 100 lei:")
produse.forEach(function(produs) {
  if (produs.pret > 100) {
    console.log(produs.nume)
  }
})
```

</v-click>

---

## Exercitiu 3 — construieste propriul `map`

Inainte sa invatam metoda `.map()` la lectia 10, construieste-o tu:

Scrie o functie `transforma(arr, callback)` care returneaza un **array nou** in care fiecare element este rezultatul aplicarii callback-ului pe elementul original.

```js
// Exemplu:
// transforma([1, 2, 3], function(n) { return n * 2 }) → [2, 4, 6]
// transforma(["ion", "ana"], function(s) { return s.toUpperCase() }) → ["ION", "ANA"]
```

<v-click>

**Rezolvare:**

```js
function transforma(arr, callback) {
  let rezultat = []
  for (let i = 0; i < arr.length; i++) {
    rezultat.push(callback(arr[i]))
  }
  return rezultat
}

console.log(transforma([1, 2, 3], function(n) { return n * 2 }))
// [2, 4, 6]

console.log(transforma(["ion", "ana"], function(s) { return s.toUpperCase() }))
// ["ION", "ANA"]
```

</v-click>

---
layout: section
color: teal-light
---

# Recapitulare

---

## Ce am invatat azi

<v-clicks>

- **Metoda** — o functie atasata unui obiect sau array, apelata cu sintaxa `obiect.metoda()`
- **Functiile sunt valori** — pot fi stocate in variabile si trimise ca argumente
- **Callback** — o functie trimisa ca argument altei functii, care o va apela la momentul potrivit
- **Fara paranteze** = trimitem referinta (functia in sine)
- **Cu paranteze** = executam imediat si trimitem rezultatul
- **`forEach`** — metoda array care apeleaza un callback pentru fiecare element
- Parametrii callback-ului in `forEach`: `(element, index, array)`
- **`for` vs `forEach`** — `for` pentru control fin, `forEach` pentru claritate
- Alte metode cu callback: `map`, `filter` (detalii la lectia 10)

</v-clicks>

---

## Tema pentru acasa

1. Scrie o functie `filtreaza(arr, test)` care returneaza un array nou cu elementele pentru care `test(element)` returneaza `true`. Testeaz-o cu:
   - Numere pare dintr-un array de numere
   - Stringuri cu mai mult de 4 caractere dintr-un array de cuvinte
2. Scrie o functie `reduce(arr, callback, initial)` care reduce un array la o singura valoare, aplicand callback-ul acumulativ. `callback(acumulator, element)` trebuie sa returneze noul acumulator.
3. **Bonus**: Folosind `forEach`, scrie o functie `grupeaza(arr, callback)` care imparte elementele in doua array-uri: cele pentru care callback returneaza `true` si cele pentru care returneaza `false`. Returneaza un obiect `{ da: [...], nu: [...] }`.

---
layout: cover
color: teal-light
---

# Intrebari?

<div class="text-xl mt-6 opacity-80">
  Lectia 6: Obiecte si array de obiecte — cum modelam date din lumea reala
</div>

<div class="text-sm mt-4 opacity-50">JS Basics · Lectia 5 din 12</div>
