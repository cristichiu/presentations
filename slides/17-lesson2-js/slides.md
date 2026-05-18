---
title: 'JavaScript - Bazele Limbajului'
theme: neversink
transition: slide-left
layout: cover
color: sky-light
info: 'JS Basics · 2026'
lineNumbers: true
draw:
  enabled: true
---

# JavaScript
## Variabile, Conditii, Bucle, Functii si Array-uri

<div class="text-xl mt-4 opacity-70">Lectie consolidata · 2026</div>

---
layout: section
color: sky-light
---

# Ce este JavaScript?
Limbajul care aduce viata paginilor web

---

## De ce JavaScript?

<v-clicks>

- **Limbaj de programare** — spune browserului ce sa faca
- **Ruleaza in browser** — Chrome, Firefox, Safari, Edge
- **Ruleaza si pe server** — Node.js
- **Cel mai popular limbaj din lume** — ecosistem urias

</v-clicks>

<v-click>

> Fara JavaScript, web-ul ar fi doar text si imagini statice.  
> Tot ce este interactiv pe o pagina — meniuri, formulare, animatii — este JavaScript.

</v-click>

---
layout: section
color: sky-light
---

# Variabile
Cum stocam date in memorie

---

## Ce este o variabila?

O variabila este un **container cu un nume** in care stocam o valoare.

```js
let varsta = 20
const nume = "Ana"
```

<v-clicks>

- `let` — valoarea **se poate schimba** ulterior
- `const` — valoarea **nu se poate schimba** (constanta)
- `var` — varianta veche, **evita-o** in cod modern

</v-clicks>

<v-click>

```js
let scor = 0
scor = 10       // OK, let permite modificarea

const PI = 3.14
PI = 3          // EROARE! const nu permite modificarea
```

</v-click>

---

## Tipuri de date

JavaScript are mai multe tipuri de valori:

```js
// Number — numere intregi sau zecimale
let varsta = 20
let pret = 19.99

// String — text, intre ghilimele
let prenume = "Ion"
let mesaj = 'Salut!'

// Boolean — doar true sau false
let esteActiv = true
let esteAdmin = false
```

<v-click>

```js
// Putem verifica tipul cu typeof
console.log(typeof varsta)   // "number"
console.log(typeof prenume)  // "string"
console.log(typeof esteActiv) // "boolean"
```

</v-click>

---

## Concatenarea stringurilor

Combinam stringuri cu `+` sau cu **template literals** (backtick):

```js
let nume = "Maria"
let varsta = 22

// Varianta clasica (cu +)
console.log("Salut, " + nume + "! Ai " + varsta + " ani.")

// Template literal (varianta moderna, recomandata)
console.log(`Salut, ${nume}! Ai ${varsta} ani.`)
```

<v-click>

> Template literals folosesc **backtick** `` ` `` (tasta din stanga lui 1), nu ghilimele.  
> In interior, `${expresie}` insereaza orice valoare JavaScript.

</v-click>

---
layout: section
color: sky-light
---

# Conditii
Cum luam decizii in cod

---

## `if` — executie conditionata

Codul din interior ruleaza **doar daca** conditia este adevarata.

```js
let varsta = 18

if (varsta >= 18) {
  console.log("Esti major.")
}
```

<v-click>

**Operatori de comparatie:**

| Operator | Semnificatie |
|----------|-------------|
| `===` | egal (si ca tip) |
| `!==` | diferit |
| `>` | mai mare |
| `<` | mai mic |
| `>=` | mai mare sau egal |
| `<=` | mai mic sau egal |

</v-click>

---

## `if / else`

```js
let varsta = 16

if (varsta >= 18) {
  console.log("Major")
} else {
  console.log("Minor")
}
```

<v-click>

Blocul `else` ruleaza **doar daca** conditia din `if` a fost falsa.

```js
// === vs ==
console.log(5 == "5")   // true  (compara doar valoarea)
console.log(5 === "5")  // false (compara valoarea SI tipul)
```

> Foloseste intotdeauna `===`, nu `==`. Este mai sigur.

</v-click>

---

## `else if` — mai multe optiuni

```js
let nota = 8

if (nota >= 9) {
  console.log("Excelent")
} else if (nota >= 7) {
  console.log("Bine")
} else if (nota >= 5) {
  console.log("Suficient")
} else {
  console.log("Insuficient")
}
```

<v-click>

JavaScript verifica conditiile **de sus in jos** si se opreste la prima adevarata.  
Blocul `else` de la final este optional — este prinsul "orice altceva".

</v-click>

---

## Operatori logici

Combinam mai multe conditii:

```js
let varsta = 20
let arePermis = true

// && — AND: ambele trebuie sa fie adevarate
if (varsta >= 18 && arePermis) {
  console.log("Poate conduce")
}

// || — OR: cel putin una trebuie sa fie adevarata
let esteWeekend = true
let esteLiber = false

if (esteWeekend || esteLiber) {
  console.log("Nu merge la birou")
}

// ! — NOT: inverseaza valoarea
let ploua = false
if (!ploua) {
  console.log("Putem iesi afara")
}
```

---
layout: section
color: sky-light
---

# Bucle
Cum repetam actiuni

---

## `for` — structura

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

<v-clicks>

- **Initializare** `let i = 0` — de unde incepem
- **Conditie** `i < 5` — cat timp continuam
- **Incrementare** `i++` — ce facem dupa fiecare pas

</v-clicks>

<v-click>

Pas cu pas:
```
i = 0 → 0 < 5? DA → afiseaza 0 → i devine 1
i = 1 → 1 < 5? DA → afiseaza 1 → i devine 2
i = 2 → 2 < 5? DA → afiseaza 2 → i devine 3
i = 3 → 3 < 5? DA → afiseaza 3 → i devine 4
i = 4 → 4 < 5? DA → afiseaza 4 → i devine 5
i = 5 → 5 < 5? NU → iesim
```

</v-click>

---

## `for` — exemple

```js
// Numara de la 1 la 10
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

// Numara din 2 in 2 (numere pare)
for (let i = 0; i <= 10; i += 2) {
  console.log(i)
}

// Numara invers
for (let i = 10; i >= 1; i--) {
  console.log(i)
}
```

---

## `if` in interiorul unui `for`

Putem combina orice concepte in interiorul unei bucle:

```js
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " este par")
  } else {
    console.log(i + " este impar")
  }
}
```

<v-click>

**Operatorul modulo `%`** — returneaza **restul impartirii**:

```js
10 % 2  // 0  (10 impartit la 2 = 5 rest 0 → par)
11 % 2  // 1  (11 impartit la 2 = 5 rest 1 → impar)
15 % 5  // 0  (15 impartit la 5 = 3 rest 0 → divizibil)
```

</v-click>

---
layout: section
color: sky-light
---

# Exercitii practice
Variabile, conditii, bucle

---

## Exercitiu 1

Scrie un program care verifica daca un numar este pozitiv, negativ sau zero.

```js
let numar = -5

// Scrie codul tau aici
```

<v-click>

**Rezolvare:**

```js
let numar = -5

if (numar > 0) {
  console.log("Pozitiv")
} else if (numar < 0) {
  console.log("Negativ")
} else {
  console.log("Zero")
}
```

</v-click>

---

## Exercitiu 2

Afiseaza toate numerele de la 1 la 15. Pentru cele divizibile cu 3 afiseaza "Fizz", pentru cele divizibile cu 5 afiseaza "Buzz", pentru ambele afiseaza "FizzBuzz".

<v-click>

**Rezolvare:**

```js
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}
```

> Atentie la **ordinea conditiilor** — cazul cel mai specific (`&&`) trebuie verificat primul!

</v-click>

---
layout: section
color: sky-light
---

# Functii
Cum reutilizam codul

---

## De ce avem nevoie de functii?

```js
// Fara functii — cod repetat
console.log("Salut, Ana!")
console.log("Salut, Ion!")
console.log("Salut, Maria!")
```

<v-click>

Daca vrem sa schimbam formatul mesajului, trebuie modificat in 3 locuri.  
Cu 100 de nume, devine imposibil de gestionat.

</v-click>

<v-click>

```js
// Cu functii — scris o data, folosit de ori de cate ori e nevoie
function saluta(nume) {
  console.log("Salut, " + nume + "!")
}

saluta("Ana")
saluta("Ion")
saluta("Maria")
```

</v-click>

---

## Anatomia unei functii

```js
function aduna(a, b) {
  return a + b
}

let rezultat = aduna(3, 7)
console.log(rezultat) // 10
```

<v-clicks>

- `function` — cuvantul cheie care declara o functie
- `aduna` — **numele** functiei (il alegem noi)
- `(a, b)` — **parametrii**: variabile locale disponibile in interior
- `{ ... }` — **corpul** functiei: codul care se executa
- `return` — **returneaza** o valoare catre locul de apel
- `aduna(3, 7)` — **apelul** functiei cu **argumentele** 3 si 7

</v-clicks>

---

## Parametri vs Argumente

Termenii sunt diferiti si e important sa ii stim:

```js
// Parametrii sunt definiti la declarare
function saluta(prenume, varsta) {
  console.log(`${prenume} are ${varsta} ani`)
}

// Argumentele sunt valorile trimise la apel
saluta("Ion", 25)
//     "Ion" → prenume
//      25   → varsta
```

<v-click>

```js
// Functie fara parametri
function afiseazaData() {
  console.log("Astazi este o zi buna.")
}
afiseazaData() // apelam fara argumente

// Functie fara return (returneaza undefined implicit)
function salutaConsola(nume) {
  console.log("Salut, " + nume)
  // nu exista return → returneaza undefined
}
```

</v-click>

---

## `return` — de ce conteaza

```js
function aduna(a, b) {
  return a + b
}

// Valoarea returnata poate fi folosita oriunde
let suma = aduna(5, 3)          // 8
console.log(aduna(10, 20))      // 30
console.log(aduna(1, 2) * 10)   // 30
```

<v-click>

```js
// Return opreste executia functiei
function verifica(numar) {
  if (numar < 0) {
    return "Negativ"   // iesim din functie AICI daca e negativ
  }
  // codul de mai jos ruleaza DOAR daca numar >= 0
  return "Pozitiv sau zero"
}

console.log(verifica(-5))  // "Negativ"
console.log(verifica(10))  // "Pozitiv sau zero"
```

</v-click>

---

## Functia nu ruleaza singura

**Declararea** si **apelarea** sunt doua lucruri diferite:

```js
// Aceasta linie doar DEFINESTE functia — nu se intampla nimic
function saluta(nume) {
  console.log("Salut, " + nume)
}

// Aceasta linie APELEAZA functia — abia acum ruleaza codul
saluta("Ana")   // "Salut, Ana"

// Fara paranteze = referinta la functie, nu apel
console.log(saluta)        // afiseaza codul functiei, nu o ruleaza
console.log(saluta("Ion")) // ruleaza si afiseaza rezultatul
```

<v-click>

> Parantezele `()` sunt cele care **declanseaza** executia functiei.

</v-click>

---
layout: section
color: sky-light
---

# Array-uri
Cum gestionam colectii de date

---

## Ce este un array?

Un array este o **lista ordonata de valori** stocata intr-o singura variabila.

```js
// In loc de variabile separate...
let fruct1 = "mar"
let fruct2 = "banana"
let fruct3 = "kiwi"

// ...folosim un array
let fructe = ["mar", "banana", "kiwi"]
```

<v-click>

Array-urile pot contine orice tip de date:

```js
let numere = [1, 2, 3, 4, 5]
let mixt = ["Ion", 25, true, 3.14]
let gol = []                         // array fara elemente
```

</v-click>

---

## Indexul — pozitia elementelor

Elementele sunt numerotate incepand de la **0**, nu de la 1:

```js
let fructe = ["mar", "banana", "kiwi"]
//               0       1        2

console.log(fructe[0])  // "mar"
console.log(fructe[1])  // "banana"
console.log(fructe[2])  // "kiwi"
console.log(fructe[3])  // undefined (nu exista)
```

<v-click>

```js
// Modificam un element
fructe[1] = "portocala"
console.log(fructe) // ["mar", "portocala", "kiwi"]

// Aflam cate elemente are
console.log(fructe.length) // 3

// Ultimul element (indiferent de lungime)
console.log(fructe[fructe.length - 1]) // "kiwi"
```

</v-click>

---

## Parcurgerea unui array cu `for`

```js
let fructe = ["mar", "banana", "kiwi"]

for (let i = 0; i < fructe.length; i++) {
  console.log(fructe[i])
}
// "mar"
// "banana"
// "kiwi"
```

<v-click>

```js
// Folosim fructe.length, nu un numar fix
// Astfel bucla functioneaza indiferent cat de lung e array-ul

let numere = [10, 20, 30, 40, 50]
let suma = 0

for (let i = 0; i < numere.length; i++) {
  suma += numere[i]
}
console.log(suma) // 150
```

</v-click>

---
layout: section
color: sky-light
---

# Metode pe array-uri
Operatii comune — cum le apelam si ce fac

---

## Ce este o metoda?

O metoda este o **functie atasata unui obiect** (sau unui array).  
O apelam cu **punct** urmat de **numele metodei** si **paranteze**.

```js
let fructe = ["mar", "banana"]

// Sintaxa: numeArray.numeMetoda(argumente)
fructe.push("kiwi")

console.log(fructe) // ["mar", "banana", "kiwi"]
```

<v-click>

> Diferenta fata de o functie normala:
> - Functie normala: `console.log("ceva")`
> - Metoda: `fructe.push("ceva")` — apelata **pe** un array

</v-click>

---

## Metode de adaugare si eliminare

```js
let fructe = ["mar", "banana", "kiwi"]

// push() — adauga la SFARSIT, returneaza noua lungime
fructe.push("portocala")
console.log(fructe) // ["mar", "banana", "kiwi", "portocala"]

// pop() — elimina ULTIMUL element, returneaza elementul eliminat
let ultimul = fructe.pop()
console.log(ultimul) // "portocala"
console.log(fructe)  // ["mar", "banana", "kiwi"]

// unshift() — adauga la INCEPUT
fructe.unshift("capsuna")
console.log(fructe) // ["capsuna", "mar", "banana", "kiwi"]

// shift() — elimina PRIMUL element
let primul = fructe.shift()
console.log(primul) // "capsuna"
console.log(fructe) // ["mar", "banana", "kiwi"]
```

---

## `indexOf` si `includes`

```js
let fructe = ["mar", "banana", "kiwi"]

// indexOf() — returneaza pozitia elementului (-1 daca nu exista)
console.log(fructe.indexOf("banana"))  // 1
console.log(fructe.indexOf("para"))    // -1

// includes() — returneaza true/false
console.log(fructe.includes("kiwi"))   // true
console.log(fructe.includes("para"))   // false

// Utilizare practica
if (fructe.includes("mar")) {
  console.log("Avem mere in lista!")
}
```

---

## `forEach` — parcurgere moderna

O alternativa mai clara la `for` clasic:

```js
let fructe = ["mar", "banana", "kiwi"]

// Cu for clasic
for (let i = 0; i < fructe.length; i++) {
  console.log(fructe[i])
}

// Cu forEach — mai scurt si mai clar
fructe.forEach(function(fruct) {
  console.log(fruct)
})
```

<v-click>

`forEach` primeste o **functie** ca argument.  
Acea functie este apelata automat pentru **fiecare element** din array,  
primind elementul curent ca parametru.

```js
// Parametrul poate avea orice nume
fructe.forEach(function(element) {
  console.log("Am: " + element)
})
```

</v-click>

---

## `forEach` cu index

```js
let fructe = ["mar", "banana", "kiwi"]

// Al doilea parametru optional = indexul curent
fructe.forEach(function(fruct, index) {
  console.log(index + ": " + fruct)
})
// 0: mar
// 1: banana
// 2: kiwi
```

<v-click>

Comparatie `for` vs `forEach`:

| | `for` | `forEach` |
|--|--|--|
| Acces la index | `i` | parametru optional |
| `break` / `continue` | Da | Nu |
| Claritate | Mai mult cod | Mai concis |

> Foloseste `forEach` cand nu ai nevoie de `break` sau de logica complexa cu index.

</v-click>

---

## `join` si `reverse`

```js
let fructe = ["mar", "banana", "kiwi"]

// join() — transforma array-ul intr-un string
console.log(fructe.join(", "))   // "mar, banana, kiwi"
console.log(fructe.join(" | "))  // "mar | banana | kiwi"
console.log(fructe.join(""))     // "marbanana kiwi"

// reverse() — inverseaza ordinea (modifica array-ul original!)
fructe.reverse()
console.log(fructe) // ["kiwi", "banana", "mar"]
```

<v-click>

```js
// splice() — elimina sau inlocuieste elemente
let culori = ["rosu", "verde", "albastru", "galben"]

// splice(pozitie, numar_de_sters)
culori.splice(1, 1)          // elimina 1 element de la pozitia 1
console.log(culori) // ["rosu", "albastru", "galben"]

// splice(pozitie, numar_de_sters, ...elemente_noi)
culori.splice(1, 0, "mov")   // insereaza "mov" la pozitia 1
console.log(culori) // ["rosu", "mov", "albastru", "galben"]
```

</v-click>

---
layout: section
color: sky-light
---

# Exercitii practice
Functii si array-uri

---

## Exercitiu 3

Creeaza o functie care primeste un array de numere si returneaza suma lor.

```js
// Exemplu: suma([1, 2, 3, 4]) → 10
```

<v-click>

**Rezolvare:**

```js
function sumaArray(numere) {
  let total = 0
  for (let i = 0; i < numere.length; i++) {
    total += numere[i]
  }
  return total
}

console.log(sumaArray([1, 2, 3, 4]))  // 10
console.log(sumaArray([10, 20, 30]))  // 60
```

</v-click>

---

## Exercitiu 4

Creeaza o functie care primeste un array de numere si returneaza doar numerele pare dintr-un array nou.

```js
// Exemplu: filtraPare([1, 2, 3, 4, 5, 6]) → [2, 4, 6]
```

<v-click>

**Rezolvare:**

```js
function filtraPare(numere) {
  let pare = []
  for (let i = 0; i < numere.length; i++) {
    if (numere[i] % 2 === 0) {
      pare.push(numere[i])
    }
  }
  return pare
}

console.log(filtraPare([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
```

</v-click>

---

## Exercitiu 5

Creeaza o functie care primeste un array de stringuri si returneaza un string cu toate elementele separate prin virgula.

```js
// Exemplu: listeaza(["mar", "banana", "kiwi"]) → "mar, banana, kiwi"
```

<v-click>

**Rezolvare — varianta manuala:**

```js
function listeaza(arr) {
  let rezultat = ""
  for (let i = 0; i < arr.length; i++) {
    rezultat += arr[i]
    if (i < arr.length - 1) {
      rezultat += ", "
    }
  }
  return rezultat
}
```

**Varianta cu metoda `join`:**

```js
function listeaza(arr) {
  return arr.join(", ")
}

console.log(listeaza(["mar", "banana", "kiwi"])) // "mar, banana, kiwi"
```

</v-click>

---
layout: section
color: sky-light
---

# Mini Proiect
Combinam tot

---

## Gestionarea unei liste de studenti

Construim un mic program care:
1. Stocheaza un array de obiecte cu `{ nume, nota }`
2. Afiseaza fiecare student cu calificativul sau
3. Calculeaza media clasei

```js
let studenti = [
  { nume: "Ana", nota: 9 },
  { nume: "Ion", nota: 6 },
  { nume: "Maria", nota: 8 },
  { nume: "Mihai", nota: 5 },
  { nume: "Elena", nota: 10 }
]

function calificativ(nota) {
  if (nota >= 9) return "Excelent"
  if (nota >= 7) return "Bine"
  if (nota >= 5) return "Suficient"
  return "Insuficient"
}
```

---

## Continuare proiect

```js
// Afisam fiecare student
studenti.forEach(function(student) {
  let cal = calificativ(student.nota)
  console.log(`${student.nume}: ${student.nota} (${cal})`)
})

// Ana: 9 (Excelent)
// Ion: 6 (Suficient)
// Maria: 8 (Bine)
// Mihai: 5 (Suficient)
// Elena: 10 (Excelent)
```

<v-click>

```js
// Calculam media
function mediaClasa(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].nota
  }
  return total / arr.length
}

console.log("Media clasei: " + mediaClasa(studenti)) // 7.6
```

</v-click>

---

## Ce am folosit in proiect

<v-clicks>

- **Array de obiecte** — fiecare element are mai multe proprietati
- **`forEach`** — parcurgere clara, fara index manual
- **Functie cu `return` multiplu** — `calificativ(nota)`
- **Template literals** — pentru afisare formatata
- **Accesul la proprietatile obiectului** — `student.nota`, `student.nume`
- **Functie care primeste un array** — `mediaClasa(arr)`

</v-clicks>

<v-click>

> Acesta este stilul real de cod JavaScript — concepte simple combinate  
> pentru a rezolva probleme concrete.

</v-click>

---
layout: section
color: sky-light
---

# Recapitulare
Tot ce am invatat

---

## Rezumat

<v-clicks>

- **Variabile** — `let` pentru valori care se schimba, `const` pentru constante
- **Tipuri** — `string`, `number`, `boolean`
- **Template literals** — `` `text ${variabila}` `` pentru concatenare clara
- **Conditii** — `if`, `else if`, `else` pentru decizii
- **Operatori** — `===`, `!==`, `>`, `<`, `&&`, `||`, `!`, `%`
- **Bucle** — `for` cu initializare, conditie, incrementare
- **Functii** — `function`, parametri, argumente, `return`
- **Array-uri** — colectii indexate de la 0
- **Metode** — `push`, `pop`, `shift`, `unshift`, `indexOf`, `includes`, `forEach`, `join`

</v-clicks>

---

## Tema pentru acasa

Creeaza un program care:

1. Are un array de cel putin 6 numere
2. O functie `afiseazaInfo(numere)` care afiseaza:
   - Toate numerele pe rand
   - Suma lor
   - Cel mai mare numar (hint: compara cu o variabila `max`)
3. Apeleaza functia cu array-ul tau

**Bonus:** O a doua functie `inversat(arr)` care returneaza un array nou cu elementele in ordine inversa, fara a folosi `.reverse()`.

---
layout: cover
color: sky-light
---

# Intrebari?

<div class="text-xl mt-6 opacity-80">
  Data viitoare: DOM — cum JavaScript controleaza pagina web
</div>

<div class="text-sm mt-4 opacity-50">JS Basics · 2026</div>