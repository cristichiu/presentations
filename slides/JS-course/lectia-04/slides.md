---
title: 'JavaScript — Array-uri'
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
## Array-uri — structura, indexare, parcurgere si metode

<div class="text-xl mt-4 opacity-70">Lectia 4 · Modul 2 — Functii si structuri de date</div>

---
layout: section
color: teal-light
---

# De ce avem nevoie de array-uri?
Problema variabilelor multiple

---

## Fara array-uri

Vrem sa stocam numele a 5 studenti:

```js
let student1 = "Ana"
let student2 = "Ion"
let student3 = "Maria"
let student4 = "Mihai"
let student5 = "Elena"
```

<v-clicks>

- Cu 100 de studenti? 100 de variabile?
- Cum le parcurgem cu o bucla? Nu putem.
- Cum le trimitem toate la o functie? Imposibil elegant.

</v-clicks>

<v-click>

```js
// Cu un array — toate valorile intr-un singur loc
let studenti = ["Ana", "Ion", "Maria", "Mihai", "Elena"]
```

</v-click>

---
layout: section
color: teal-light
---

# Structura unui array
Ce este si cum functioneaza

---

## Ce este un array

Un array este o **lista ordonata de valori** stocata intr-o singura variabila.

```js
let fructe = ["mar", "banana", "kiwi"]
let numere = [1, 2, 3, 4, 5]
let mixt   = ["Ion", 25, true, 3.14]    // poate contine tipuri diferite
let gol    = []                          // array fara elemente — valid
```

<v-click>

**Fiecare element are o pozitie — indexul — care incepe de la `0`:**

```
let fructe = ["mar", "banana", "kiwi"]
//              0       1        2
```

> Indexarea de la 0 este o conventie universala in programare.  
> Primul element este intotdeauna la pozitia `0`, nu `1`.

</v-click>

---

## Accesarea elementelor

```js
let fructe = ["mar", "banana", "kiwi"]

console.log(fructe[0])   // "mar"    — primul element
console.log(fructe[1])   // "banana" — al doilea element
console.log(fructe[2])   // "kiwi"   — al treilea element
console.log(fructe[3])   // undefined — nu exista, dar nu e eroare
```

<v-click>

**Proprietatea `length` — numarul de elemente:**

```js
console.log(fructe.length)   // 3

// Ultimul element — indiferent de lungimea array-ului
console.log(fructe[fructe.length - 1])   // "kiwi"
// fructe.length = 3, deci 3 - 1 = 2 → fructe[2] = "kiwi"
```

</v-click>

---

## Modificarea elementelor

```js
let fructe = ["mar", "banana", "kiwi"]

// Modificam un element existent
fructe[1] = "portocala"
console.log(fructe)   // ["mar", "portocala", "kiwi"]

// Adaugam un element la o pozitie noua
fructe[3] = "para"
console.log(fructe)   // ["mar", "portocala", "kiwi", "para"]
```

<v-click>

> Array-urile declarate cu `const` pot fi **modificate** — nu pot fi **inlocuite**:

```js
const fructe = ["mar", "banana"]

fructe[0] = "para"         // OK — modificam continut
fructe.push("kiwi")        // OK — adaugam element

fructe = ["altceva"]       // EROARE — nu putem reasigna const
```

</v-click>

---
layout: section
color: teal-light
---

# Parcurgerea array-urilor
Cum trecem prin toate elementele

---

## Parcurgere cu `for` clasic

```js
let fructe = ["mar", "banana", "kiwi", "para"]

for (let i = 0; i < fructe.length; i++) {
  console.log(fructe[i])
}
// "mar"
// "banana"
// "kiwi"
// "para"
```

<v-click>

**De ce `i < fructe.length` si nu `i <= fructe.length`?**

```
fructe.length = 4
Indecsi valizi: 0, 1, 2, 3
Ultimul index valid = length - 1 = 3

i < 4  → i poate fi 0, 1, 2, 3  ✓
i <= 4 → i poate fi 0, 1, 2, 3, 4  → fructe[4] = undefined ✗
```

</v-click>

---

## Parcurgere cu `for` — cu conditii

```js
let numere = [3, 7, 2, 9, 4, 6, 1, 8, 5]

// Afisam doar numerele mai mari decat 5
for (let i = 0; i < numere.length; i++) {
  if (numere[i] > 5) {
    console.log(numere[i])
  }
}
// 7, 9, 6, 8
```

<v-click>

**Pattern acumulator cu array:**

```js
// Suma tuturor elementelor
let numere = [10, 20, 30, 40, 50]
let suma = 0

for (let i = 0; i < numere.length; i++) {
  suma += numere[i]
}

console.log(suma)   // 150
```

</v-click>

---

## `forEach` — alternativa moderna

`forEach` este o **metoda** a array-urilor care simplifica parcurgerea.  
Il introducem acum, il vom explica in profunzime la urmatoarea lectie.

```js
let fructe = ["mar", "banana", "kiwi"]

// for clasic
for (let i = 0; i < fructe.length; i++) {
  console.log(fructe[i])
}

// forEach — mai concis, mai clar
fructe.forEach(function(fruct) {
  console.log(fruct)
})
```

<v-click>

`forEach` primeste o **functie** si o apeleaza automat pentru fiecare element.  
Vom intelege exact cum functioneaza la lectia urmatoare.

</v-click>

---
layout: section
color: teal-light
---

# Metode pe array-uri
Operatii comune

---

## Ce este o metoda?

Inainte sa vedem metodele, o scurta introducere:

O **metoda** este o **functie atasata unui obiect (sau array)**.  
O apelam cu **punct** urmat de **numele metodei** si **paranteze**.

```js
let fructe = ["mar", "banana"]

// Apelam metoda push pe array-ul fructe
fructe.push("kiwi")
//    ^ punct  ^ nume metoda  ^ paranteze

console.log(fructe)   // ["mar", "banana", "kiwi"]
```

<v-click>

```
numeArray.numeMetoda(argumente)
```

> La lectia urmatoare vom intelege in profunzime ce sunt metodele si de ce functioneaza asa.  
> Deocamdata, retine sintaxa: **punct** + **nume** + **paranteze**.

</v-click>

---

## `push` si `pop` — sfarsitul array-ului

```js
let fructe = ["mar", "banana", "kiwi"]

// push() — adauga un element LA SFARSIT
// returneaza noua lungime a array-ului
let nouaLungime = fructe.push("portocala")
console.log(fructe)         // ["mar", "banana", "kiwi", "portocala"]
console.log(nouaLungime)    // 4

// pop() — elimina si returneaza ULTIMUL element
let eliminat = fructe.pop()
console.log(fructe)         // ["mar", "banana", "kiwi"]
console.log(eliminat)       // "portocala"
```

<v-click>

> `push` si `pop` **modifica** array-ul original — nu creeaza o copie.

</v-click>

---

## `unshift` si `shift` — inceputul array-ului

```js
let fructe = ["mar", "banana", "kiwi"]

// unshift() — adauga un element LA INCEPUT
fructe.unshift("capsuna")
console.log(fructe)   // ["capsuna", "mar", "banana", "kiwi"]

// shift() — elimina si returneaza PRIMUL element
let primul = fructe.shift()
console.log(fructe)   // ["mar", "banana", "kiwi"]
console.log(primul)   // "capsuna"
```

<v-click>

**Rezumat vizual:**

```
unshift → [nou, ...] ← push
shift   ← [..., vechi] → pop
```

- `push` / `pop` → lucreaza la **sfarsit**
- `unshift` / `shift` → lucreaza la **inceput**

</v-click>

---

## `indexOf` si `includes` — cautarea elementelor

```js
let fructe = ["mar", "banana", "kiwi", "banana"]

// indexOf() — returneaza POZITIA primului element gasit (-1 daca nu exista)
console.log(fructe.indexOf("banana"))    // 1
console.log(fructe.indexOf("para"))     // -1  — nu exista
console.log(fructe.indexOf("banana", 2)) // 3  — cauta incepand de la pozitia 2

// includes() — returneaza true/false
console.log(fructe.includes("kiwi"))    // true
console.log(fructe.includes("para"))    // false
```

<v-click>

**Utilizare practica:**

```js
if (fructe.includes("mar")) {
  console.log("Avem mere in lista!")
}

let poz = fructe.indexOf("kiwi")
if (poz !== -1) {
  console.log(`Kiwi se afla la pozitia ${poz}`)
}
```

</v-click>

---

## `join` si `reverse`

```js
let fructe = ["mar", "banana", "kiwi"]

// join() — transforma array-ul intr-un string
console.log(fructe.join(", "))    // "mar, banana, kiwi"
console.log(fructe.join(" | "))   // "mar | banana | kiwi"
console.log(fructe.join(""))      // "marbanana kiwi"

// reverse() — inverseaza ordinea ELEMENTELOR (modifica array-ul original!)
fructe.reverse()
console.log(fructe)   // ["kiwi", "banana", "mar"]
```

<v-click>

```js
// splice() — elimina, inlocuieste sau insereaza elemente
let culori = ["rosu", "verde", "albastru", "galben"]

// splice(start, numarDeEliminate)
culori.splice(1, 1)          // elimina 1 element de la pozitia 1
console.log(culori)          // ["rosu", "albastru", "galben"]

// splice(start, 0, elementNou) — insereaza fara sa stearga
culori.splice(1, 0, "mov")
console.log(culori)          // ["rosu", "mov", "albastru", "galben"]
```

</v-click>

---
layout: section
color: teal-light
---

# Exercitii

---

## Exercitiu 1 — operatii de baza

Pornind de la array-ul de mai jos, realizeaza operatiile cerute fara sa redeclari array-ul:

```js
let numere = [5, 3, 8, 1, 9, 2, 7]

// 1. Afiseaza primul si ultimul element
// 2. Adauga numarul 10 la sfarsit si 0 la inceput
// 3. Elimina primul si ultimul element
// 4. Afiseaza lungimea finala si continutul
```

<v-click>

**Rezolvare:**

```js
let numere = [5, 3, 8, 1, 9, 2, 7]

console.log(numere[0], numere[numere.length - 1])   // 5, 7

numere.push(10)
numere.unshift(0)
console.log(numere)   // [0, 5, 3, 8, 1, 9, 2, 7, 10]

numere.shift()
numere.pop()
console.log(numere.length, numere)   // 7, [5, 3, 8, 1, 9, 2, 7]
```

</v-click>

---

## Exercitiu 2 — parcurgere si acumulator

Ai un array de note. Scrie o functie `analizeazaNote` care primeste array-ul si afiseaza:
- Toate notele
- Suma lor
- Media
- Cate note sunt sub 5

```js
let note = [8, 4, 9, 6, 3, 10, 7, 5, 2, 8]
```

<v-click>

**Rezolvare:**

```js
function analizeazaNote(note) {
  let suma = 0
  let subCinci = 0

  for (let i = 0; i < note.length; i++) {
    console.log(`Nota ${i + 1}: ${note[i]}`)
    suma += note[i]
    if (note[i] < 5) subCinci++
  }

  console.log(`Suma: ${suma}`)
  console.log(`Media: ${(suma / note.length).toFixed(2)}`)
  console.log(`Note sub 5: ${subCinci}`)
}

analizeazaNote([8, 4, 9, 6, 3, 10, 7, 5, 2, 8])
```

</v-click>

---

## Exercitiu 3 — constructia unui array

Scrie o functie `genereazaPare(n)` care returneaza un array cu primele `n` numere pare.

Scrie o a doua functie `filtreazaPositive(arr)` care returneaza un array nou cu doar elementele pozitive din `arr`.

<v-click>

**Rezolvare:**

```js
function genereazaPare(n) {
  let rezultat = []
  for (let i = 1; i <= n; i++) {
    rezultat.push(i * 2)
  }
  return rezultat
}

function filtreazaPositive(arr) {
  let pozitive = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pozitive.push(arr[i])
    }
  }
  return pozitive
}

console.log(genereazaPare(5))                      // [2, 4, 6, 8, 10]
console.log(filtreazaPositive([-3, 5, -1, 8, 0]))  // [5, 8]
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

- **Array** — lista ordonata de valori intr-o singura variabila: `[]`
- **Index** — pozitia unui element, incepe de la `0`
- **`length`** — numarul de elemente din array
- **Accesare** — `arr[index]` citeste; `arr[index] = val` scrie
- **`const` si array** — continutul se poate modifica, referinta nu
- **`for` pe array** — `for (let i = 0; i < arr.length; i++)`
- **`forEach`** — varianta moderna de parcurgere, detalii la lectia urmatoare
- **`push`/`pop`** — adauga/elimina la sfarsit
- **`unshift`/`shift`** — adauga/elimina la inceput
- **`indexOf`/`includes`** — cauta elemente
- **`join`/`reverse`/`splice`** — transformare si manipulare

</v-clicks>

---

## Tema pentru acasa

1. Creeaza un array cu 6 orase din Romania. Realizeaza urmatoarele operatii pas cu pas si afiseaza array-ul dupa fiecare pas:
   - Adauga un oras nou la sfarsit
   - Adauga un oras la inceput
   - Elimina ultimul oras
   - Verifica daca "Iasi" se afla in lista si afiseaza pozitia lui
   - Transforma array-ul intr-un string cu orasele separate prin ` → `
2. Scrie o functie `celMaiMare(arr)` care returneaza cel mai mare numar dintr-un array, **fara** sa folosesti `Math.max()`.
3. **Bonus**: Scrie o functie `inverseaza(arr)` care returneaza un array nou cu elementele in ordine inversa, fara sa modifici array-ul original si fara sa folosesti `.reverse()`.

---
layout: cover
color: teal-light
---

# Intrebari?

<div class="text-xl mt-6 opacity-80">
  Lectia 5: Ce sunt metodele si callback-urile — cum functioneaza forEach, si de ce functiile pot fi argumente
</div>

<div class="text-sm mt-4 opacity-50">JS Basics · Lectia 4 din 12</div>
