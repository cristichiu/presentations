---
title: 'JavaScript Modern — Arrow Functions, Destructuring, Map si Filter'
theme: neversink
transition: slide-left
layout: cover
color: coral-light
info: 'JS Basics · 2026'
lineNumbers: true
draw:
  enabled: true
---

# JavaScript Modern
## Arrow Functions, Destructuring, Map si Filter

<div class="text-xl mt-4 opacity-70">Lectia 10 · Modul 4 — JavaScript modern si async</div>

---
layout: section
color: coral-light
---

# Arrow Functions
Sintaxa moderna pentru functii

---

## De la `function` la arrow function

```js
// Functie clasica
function aduna(a, b) {
  return a + b
}

// Aceeasi functie — arrow function
const aduna = (a, b) => {
  return a + b
}

// Daca corpul e o singura expresie — return implicit
const aduna = (a, b) => a + b
```

<v-click>

**Cele trei forme, de la cea mai lunga la cea mai scurta:**

```js
// Forma completa
const dublu = (x) => { return x * 2 }

// Fara acolade — return implicit (doar pentru o singura expresie)
const dublu = (x) => x * 2

// Fara paranteze — daca e un singur parametru
const dublu = x => x * 2
```

</v-click>

---

## Cand folosim fiecare forma

```js
// Un singur parametru, expresie simpla — cea mai concisa
const patrat = x => x * x

// Mai multi parametri — paranteze obligatorii
const suma = (a, b) => a + b

// Fara parametri — paranteze obligatorii
const saluta = () => console.log("Salut!")

// Corp mai complex — acolade si return explicit
const verifica = (nota) => {
  if (nota >= 5) {
    return "Promovat"
  }
  return "Nepromovat"
}
```

<v-click>

> Arrow functions nu inlocuiesc complet `function` — au o diferenta tehnica importanta  
> legata de `this` (pe care o vom intalni in viitor). Deocamdata, sunt interschimbabile.

</v-click>

---

## Arrow functions cu callback-uri

Arrow functions stralucesc cel mai mult ca callback-uri — codul devine mult mai clar:

```js
let numere = [1, 2, 3, 4, 5]

// forEach cu function clasica
numere.forEach(function(n) {
  console.log(n)
})

// forEach cu arrow function
numere.forEach(n => console.log(n))

// Pe mai multe linii
numere.forEach(n => {
  let rezultat = n * n
  console.log(`${n} la patrat este ${rezultat}`)
})
```

---
layout: section
color: coral-light
---

# Parametri default
Valori de rezerva pentru argumente lipsa

---

## Problema argumentelor lipsa

```js
function saluta(nume) {
  console.log(`Salut, ${nume}!`)
}

saluta("Ana")   // "Salut, Ana!"
saluta()        // "Salut, undefined!" — urat
```

<v-click>

**Solutia clasica vs parametri default:**

```js
// Solutia veche — verificam manual
function saluta(nume) {
  if (nume === undefined) {
    nume = "Oaspete"
  }
  console.log(`Salut, ${nume}!`)
}

// Parametri default — mult mai clar
function saluta(nume = "Oaspete") {
  console.log(`Salut, ${nume}!`)
}

saluta("Ana")   // "Salut, Ana!"
saluta()        // "Salut, Oaspete!"
```

</v-click>

---

## Parametri default — exemple practice

```js
// Functie cu mai multi parametri, unii cu default
function creeazaUtilizator(nume, rol = "user", activ = true) {
  return { nume, rol, activ }
  //      ^ shorthand — daca cheia = variabila, scriem o data
}

console.log(creeazaUtilizator("Ana"))
// { nume: "Ana", rol: "user", activ: true }

console.log(creeazaUtilizator("Ion", "admin"))
// { nume: "Ion", rol: "admin", activ: true }

console.log(creeazaUtilizator("Maria", "user", false))
// { nume: "Maria", rol: "user", activ: false }
```

<v-click>

**Shorthand pentru proprietati de obiect** — cand cheia si variabila au acelasi nume:

```js
let nume = "Ana"
let varsta = 25

// Forma lunga
let obiect = { nume: nume, varsta: varsta }

// Shorthand — identic cu de sus
let obiect = { nume, varsta }
```

</v-click>

---
layout: section
color: coral-light
---

# Destructuring
Extragerea valorilor din obiecte si array-uri

---

## Destructuring din obiecte

```js
let utilizator = {
  nume: "Ion",
  varsta: 25,
  oras: "Cluj",
  email: "ion@example.com"
}

// Fara destructuring — repetitiv
let nume = utilizator.nume
let varsta = utilizator.varsta
let oras = utilizator.oras

// Cu destructuring — extras direct
let { nume, varsta, oras } = utilizator
console.log(nume)    // "Ion"
console.log(varsta)  // 25
console.log(oras)    // "Cluj"
```

<v-click>

**Redenumire la destructuring:**

```js
let { nume: prenume, varsta: ani } = utilizator
console.log(prenume)   // "Ion"
console.log(ani)       // 25
// variabila `nume` nu mai exista — am redenumit-o in `prenume`
```

</v-click>

---

## Destructuring cu valori default

```js
let produs = { nume: "Laptop", pret: 3500 }

// Daca proprietatea lipseste, folosim valoarea default
let { nume, pret, stoc = 0, disponibil = true } = produs

console.log(stoc)       // 0 — nu exista in obiect, folosim default
console.log(disponibil) // true — nu exista in obiect, folosim default
```

<v-click>

**Destructuring in parametrii functiei — foarte comun:**

```js
// Fara destructuring
function afiseazaUtilizator(utilizator) {
  console.log(`${utilizator.nume}, ${utilizator.varsta} ani`)
}

// Cu destructuring in parametru
function afiseazaUtilizator({ nume, varsta }) {
  console.log(`${nume}, ${varsta} ani`)
}

afiseazaUtilizator({ nume: "Ana", varsta: 28, oras: "Iasi" })
// "Ana, 28 ani"
```

</v-click>

---

## Destructuring din array-uri

```js
let fructe = ["mere", "banane", "kiwi", "pere"]

// Extragere dupa pozitie
let [primul, alDoilea, alTreilea] = fructe
console.log(primul)      // "mere"
console.log(alDoilea)    // "banane"
console.log(alTreilea)   // "kiwi"

// Sarim elemente cu virgula
let [, , alTreilea] = fructe
console.log(alTreilea)   // "kiwi"

// Valori default
let [a, b, c, d, e = "capsuni"] = fructe
console.log(e)   // "capsuni" — nu exista la index 4
```

<v-click>

**Swap de variabile — elegant cu destructuring:**

```js
let x = 1
let y = 2

// Clasic — ai nevoie de o variabila temporara
let temp = x; x = y; y = temp

// Cu destructuring — intr-o singura linie
[x, y] = [y, x]
console.log(x, y)   // 2, 1
```

</v-click>

---
layout: section
color: coral-light
---

# Spread si Rest
Operatorul `...`

---

## Spread — "raspandeste" elementele

```js
let fructe = ["mere", "banane"]
let legume = ["morcovi", "ceapa"]

// Combina doua array-uri
let alimente = [...fructe, ...legume]
console.log(alimente)
// ["mere", "banane", "morcovi", "ceapa"]

// Copiaza un array (fara sa modifici originalul)
let copie = [...fructe]
copie.push("kiwi")
console.log(fructe)   // ["mere", "banane"] — neatins
console.log(copie)    // ["mere", "banane", "kiwi"]
```

<v-click>

**Spread pe obiecte:**

```js
let baza = { culoare: "rosu", marime: "M" }
let extra = { brand: "Nike", pret: 200 }

// Combina doua obiecte
let produs = { ...baza, ...extra }
// { culoare: "rosu", marime: "M", brand: "Nike", pret: 200 }

// Copiaza un obiect cu modificari
let produsActualizat = { ...baza, culoare: "albastru" }
// { culoare: "albastru", marime: "M" }  — culoarea a fost suprascriasa
```

</v-click>

---

## Rest — colecteaza restul elementelor

```js
// In destructuring — colecteaza ce ramane
let [primul, ...restul] = ["a", "b", "c", "d"]
console.log(primul)   // "a"
console.log(restul)   // ["b", "c", "d"]

let { nume, ...restProprietati } = { nume: "Ana", varsta: 25, oras: "Cluj" }
console.log(nume)                // "Ana"
console.log(restProprietati)     // { varsta: 25, oras: "Cluj" }
```

<v-click>

**Rest in parametrii functiei:**

```js
// Functie care accepta oricate argumente
function sumaToate(...numere) {
  let total = 0
  numere.forEach(n => total += n)
  return total
}

console.log(sumaToate(1, 2, 3))          // 6
console.log(sumaToate(1, 2, 3, 4, 5))   // 15
```

</v-click>

---
layout: section
color: coral-light
---

# Exercitiu 1

---

## Exercitiu 1 — sintaxa moderna

Rescrie urmatoarele folosind arrow functions, destructuring si spread:

```js
// 1. Rescrie ca arrow function cu return implicit
function inmulteste(a, b) {
  return a * b
}

// 2. Extrage nume, varsta, oras din obiect cu destructuring
let persoana = { nume: "Maria", varsta: 30, oras: "Brasov", job: "dev" }

// 3. Combina cele doua array-uri intr-unul nou, adaugand "capsuni" la final
let a = ["mere", "pere"]
let b = ["kiwi", "banane"]
```

<v-click>

**Rezolvare:**

```js
const inmulteste = (a, b) => a * b

let { nume, varsta, oras } = persoana
console.log(nume, varsta, oras)   // "Maria", 30, "Brasov"

let combinat = [...a, ...b, "capsuni"]
// ["mere", "pere", "kiwi", "banane", "capsuni"]
```

</v-click>

---
layout: section
color: coral-light
---

# `.map()` si `.filter()`
Metodele functionale esentiale

---

## `.map()` — transforma fiecare element

`.map()` aplica o functie pe fiecare element si **returneaza un array nou** cu rezultatele.  
Array-ul original **nu este modificat**.

```js
let numere = [1, 2, 3, 4, 5]

// function clasica
let duble = numere.map(function(n) { return n * 2 })

// arrow function
let duble = numere.map(n => n * 2)

console.log(duble)    // [2, 4, 6, 8, 10]
console.log(numere)   // [1, 2, 3, 4, 5] — neatins
```

<v-click>

**`.map()` returneaza intotdeauna un array de aceeasi lungime.**  
Fiecare element din original are corespondent in rezultat.

</v-click>

---

## `.map()` — exemple practice

```js
let produse = [
  { nume: "Laptop", pret: 3500 },
  { nume: "Mouse", pret: 120 },
  { nume: "Monitor", pret: 1200 }
]

// Extragem doar numele
let nume = produse.map(p => p.nume)
console.log(nume)   // ["Laptop", "Mouse", "Monitor"]

// Aplicam o reducere de 10%
let cuDiscount = produse.map(p => ({
  ...p,
  pret: p.pret * 0.9
}))
// [{ nume: "Laptop", pret: 3150 }, ...]

// Transformam in stringuri pentru afisare
let etichete = produse.map(p => `${p.nume}: ${p.pret} lei`)
// ["Laptop: 3500 lei", "Mouse: 120 lei", "Monitor: 1200 lei"]
```

---

## `.filter()` — pastreaza elementele care trec testul

`.filter()` pastreaza doar elementele pentru care callback-ul returneaza `true`.  
Returneaza un **array nou**, posibil mai scurt. Array-ul original nu e modificat.

```js
let numere = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Pastreaza doar numerele pare
let pare = numere.filter(n => n % 2 === 0)
console.log(pare)   // [2, 4, 6, 8, 10]

// Pastreaza doar numerele mai mari decat 5
let mari = numere.filter(n => n > 5)
console.log(mari)   // [6, 7, 8, 9, 10]
```

<v-click>

**`.filter()` pe array de obiecte:**

```js
let produse = [
  { nume: "Laptop", pret: 3500, stoc: 0 },
  { nume: "Mouse", pret: 120, stoc: 15 },
  { nume: "Monitor", pret: 1200, stoc: 3 }
]

let disponibile = produse.filter(p => p.stoc > 0)
// [{ Mouse... }, { Monitor... }]

let ieftine = produse.filter(p => p.pret < 500)
// [{ Mouse... }]
```

</v-click>

---

## `.find()` — primul element care trece testul

```js
let utilizatori = [
  { id: 1, nume: "Ana", activ: true },
  { id: 2, nume: "Ion", activ: false },
  { id: 3, nume: "Maria", activ: true }
]

// Returneaza PRIMUL element pentru care callback = true (sau undefined)
let gasit = utilizatori.find(u => u.id === 2)
console.log(gasit)   // { id: 2, nume: "Ion", activ: false }

let inexistent = utilizatori.find(u => u.id === 99)
console.log(inexistent)   // undefined

// .some() — returneaza true daca CEL PUTIN UN element trece testul
let existaInactiv = utilizatori.some(u => !u.activ)
console.log(existaInactiv)   // true

// .every() — returneaza true daca TOTI trec testul
let totiActivi = utilizatori.every(u => u.activ)
console.log(totiActivi)   // false
```

---

## Inlantuirea metodelor — chaining

Metodele pot fi aplicate una dupa alta pe rezultatul precedent:

```js
let produse = [
  { nume: "Laptop", pret: 3500, categorie: "IT" },
  { nume: "Caiet", pret: 15, categorie: "Birotica" },
  { nume: "Mouse", pret: 120, categorie: "IT" },
  { nume: "Pix", pret: 5, categorie: "Birotica" },
  { nume: "Monitor", pret: 1200, categorie: "IT" }
]

// Gasim produsele IT, le sortam dupa pret si extragem numele
let numeIT = produse
  .filter(p => p.categorie === "IT")
  .map(p => `${p.nume} (${p.pret} lei)`)

console.log(numeIT)
// ["Laptop (3500 lei)", "Mouse (120 lei)", "Monitor (1200 lei)"]
```

<v-click>

> Fiecare metoda returneaza un array nou pe care putem aplica imediat urmatoarea metoda.  
> Citim de sus in jos: filtreaza → transforma → ...

</v-click>

---
layout: section
color: coral-light
---

# Exercitii

---

## Exercitiu 2 — map si filter

```js
let studenti = [
  { nume: "Ana", nota: 9, grupa: "A" },
  { nume: "Ion", nota: 4, grupa: "B" },
  { nume: "Maria", nota: 7, grupa: "A" },
  { nume: "Mihai", nota: 5, grupa: "B" },
  { nume: "Elena", nota: 10, grupa: "A" }
]
```

Folosind `.map()`, `.filter()`, `.find()`:
1. Extrage un array cu doar numele studentilor
2. Filtreaza studentii cu nota >= 5
3. Creeaza un array de stringuri: `"Ana — 9 (Promovat)"` sau `"Ion — 4 (Nepromovat)"`
4. Gaseste primul student din grupa `"B"`

<v-click>

```js
let nume = studenti.map(s => s.nume)
let promovati = studenti.filter(s => s.nota >= 5)
let etichete = studenti.map(s =>
  `${s.nume} — ${s.nota} (${s.nota >= 5 ? "Promovat" : "Nepromovat"})`
)
let primesteB = studenti.find(s => s.grupa === "B")
```

</v-click>

---

## Exercitiu 3 — chaining si sintaxa moderna

Pornind de la array-ul de produse de mai jos, intr-un singur lant de metode:
- Pastreaza doar produsele disponibile (`stoc > 0`)
- Aplica o reducere de 15% la pret
- Extrage un array de obiecte cu doar `{ nume, pretFinal }` (rotunjit la 2 zecimale)

```js
let produse = [
  { nume: "Laptop", pret: 3500, stoc: 2 },
  { nume: "Mouse", pret: 120, stoc: 0 },
  { nume: "Monitor", pret: 1200, stoc: 5 },
  { nume: "Tastatura", pret: 200, stoc: 0 },
  { nume: "Webcam", pret: 350, stoc: 8 }
]
```

<v-click>

```js
let rezultat = produse
  .filter(p => p.stoc > 0)
  .map(p => ({
    nume: p.nume,
    pretFinal: parseFloat((p.pret * 0.85).toFixed(2))
  }))

console.log(rezultat)
// [{ nume: "Laptop", pretFinal: 2975 },
//  { nume: "Monitor", pretFinal: 1020 },
//  { nume: "Webcam", pretFinal: 297.5 }]
```

</v-click>

---

## Exercitiu 4 — combinat cu DOM

Ai array-ul de studenti din exercitiul 2.  
Afiseaza in pagina (intr-un `<ul>`) doar studentii promovati,  
folosind `.filter()`, `.map()` pentru a pregati datele,  
si `forEach` pentru a genera elementele DOM.

<v-click>

```js
let ul = document.querySelector("#lista-promovati")

studenti
  .filter(s => s.nota >= 5)
  .forEach(s => {
    let li = document.createElement("li")
    li.textContent = `${s.nume} — ${s.nota}`
    if (s.nota >= 9) li.classList.add("excelent")
    ul.appendChild(li)
  })
```

> Observa cum combinam metodele functionale cu manipularea DOM —  
> acesta este stilul de cod JavaScript pe care il vei intalni in aplicatii reale.

</v-click>

---
layout: section
color: coral-light
---

# Recapitulare

---

## Ce am invatat azi

<v-clicks>

- **Arrow functions** — `(a, b) => a + b` — sintaxa concisa, ideale ca callback-uri
- **Return implicit** — fara acolade = return automat al expresiei
- **Parametri default** — `function f(x = 0)` — valori de rezerva pentru argumente lipsa
- **Shorthand proprietati** — `{ nume, varsta }` in loc de `{ nume: nume, varsta: varsta }`
- **Destructuring obiect** — `let { nume, varsta } = persoana`
- **Destructuring array** — `let [primul, ...restul] = arr`
- **Spread `...`** — combina sau copiaza array-uri si obiecte
- **Rest `...`** — colecteaza restul parametrilor sau elementelor
- **`.map()`** — transforma fiecare element, returneaza array nou de aceeasi lungime
- **`.filter()`** — pastreaza elementele care trec testul, returneaza array nou
- **`.find()`** — returneaza primul element care trece testul (sau `undefined`)
- **Chaining** — inlantuim metodele una dupa alta

</v-clicks>

---

## Tema pentru acasa

Pornind de la un array de cel putin 8 filme cu `{ titlu, an, gen, rating, durata }`:

1. Filtreaza filmele cu `rating >= 7`
2. Din cele filtrate, extrage un array de stringuri formatate: `"Titlu (An) — Rating/10"`
3. Gaseste primul film de gen `"thriller"`
4. Verifica daca toate filmele au durata sub 180 de minute (`.every()`)
5. **Bonus**: Afiseaza rezultatele in pagina — fiecare film intr-un card generat dinamic; foloseste destructuring in callback-ul `forEach`

---
layout: cover
color: coral-light
---

# Intrebari?

<div class="text-xl mt-6 opacity-80">
  Lectia 11: Fetch API, Promises si async/await — date de pe un server real
</div>

<div class="text-sm mt-4 opacity-50">JS Basics · Lectia 10 din 12</div>
