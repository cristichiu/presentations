---
title: 'JavaScript — Variabile, Tipuri de Date si Operatori'
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
## Variabile, Tipuri de Date si Operatori

<div class="text-xl mt-4 opacity-70">Lectia 1 · Modul 1 — Fundamentele limbajului</div>

---
layout: section
color: sky-light
---

# Ce este JavaScript?

---

## Cele trei straturi ale unui site web

Orice pagina web este construita din trei tehnologii separate:

<v-clicks>

- **HTML** — structura documentului: titluri, paragrafe, butoane, formulare
- **CSS** — aspectul vizual: culori, fonturi, dimensiuni, layout
- **JavaScript** — comportamentul: ce se intampla cand utilizatorul interactioneaza cu pagina

</v-clicks>

<v-click>

```
HTML  →  scheletul
CSS   →  hainele
JS    →  muschii si creierul
```

> Fara JavaScript, o pagina nu poate reactiona, nu poate calcula,  
> nu poate comunica cu un server. Este un document static.

</v-click>

---

## Unde scriem si rulam JavaScript?

Cel mai simplu loc pentru inceput: **consola browserului**.

<v-clicks>

1. Deschide Chrome
2. Apasa `F12` (sau click dreapta → Inspect)
3. Click pe tab-ul **Console**
4. Scrie cod si apasa `Enter`

</v-clicks>

<v-click>

```js
console.log("Salut!")
```

`console.log()` este cea mai folosita comanda in JavaScript.  
Afiseaza orice valoare in consola — o vei folosi constant pentru a intelege ce face codul tau.

</v-click>

---
layout: section
color: sky-light
---

# Variabile
Cum stocam informatii in memorie

---

## Ce este o variabila?

O variabila este un **spatiu cu un nume** in memoria calculatorului.

```js
let varsta = 20
```

<v-clicks>

- `let` — cuvantul cheie care **declara** variabila
- `varsta` — **numele** pe care il alegem noi
- `=` — operatorul de **atribuire** (nu inseamna "egal matematic", ci "primeste valoarea")
- `20` — **valoarea** stocata

</v-clicks>

<v-click>

> Gandeste-te la o variabila ca la o cutie cu o eticheta.  
> Eticheta este numele, continutul cutiei este valoarea.

</v-click>

---

## `let`, `const` si `var`

```js
let scor = 0
scor = 10          // OK — let permite modificarea ulterioara

const PI = 3.14
PI = 3             // EROARE — const nu permite reasignarea

var vechi = "evita-l"
```

<v-clicks>

- `let` — pentru valori care **se vor schimba**: contoare, stari, rezultate intermediare
- `const` — pentru valori **fixe**: configurari, date care nu se modifica
- `var` — varianta veche, **nu o folosi** — are comportamente confuze legate de scope

</v-clicks>

<v-click>

> **Regula practica**: incepe cu `const` pentru orice variabila.  
> Schimba la `let` doar daca stii ca valoarea se va modifica mai tarziu.

</v-click>

---

## Reguli pentru numele variabilelor

```js
// Valide
let varsta = 20
let numeleComplet = "Ion Ionescu"   // camelCase — conventia JS
let esteActiv = true
let suma2 = 100

// Invalide — produc erori
let 2lucruri = "eroare"    // nu poate incepe cu cifra
let nume complet = "..."   // nu poate contine spatii
let let = "eroare"         // nu poate fi un cuvant rezervat
```

<v-click>

**Conventia `camelCase` in JavaScript:**
- Prima litera mica, fiecare cuvant urmator incepe cu majuscula
- `varstaUtilizatorului`, `pretTotal`, `esteLogat`
- Alege nume **descriptive**: `varsta` nu `v`, `pretTotal` nu `x`

</v-click>

---
layout: section
color: sky-light
---

# Tipuri de date
Ce fel de valori putem stoca

---

## Cele trei tipuri principale

```js
// Number — numere intregi sau zecimale
let varsta = 20
let pret = 19.99
let temperatura = -5

// String — text intre ghilimele
let prenume = "Ion"
let mesaj = 'Salut!'        // ghilimele simple sunt echivalente cu cele duble
let gol = ""                // string gol — valid

// Boolean — exact doua valori posibile
let esteActiv = true
let esteAdmin = false
```

<v-click>

In JavaScript **nu declaram explicit tipul** variabilei — el este detectat automat din valoare.  
Spre deosebire de Java sau C unde scriem `int varsta = 20`, aici scriem direct `let varsta = 20`.

</v-click>

---

## `typeof` — verificam tipul unei valori

```js
let varsta = 20
let nume = "Ana"
let activ = true

console.log(typeof varsta)    // "number"
console.log(typeof nume)      // "string"
console.log(typeof activ)     // "boolean"
```

<v-click>

**O capcana frecventa:**

```js
let numar = 42
let text = "42"

console.log(typeof numar)    // "number"
console.log(typeof text)     // "string" ← nu e acelasi lucru!

console.log(numar + 1)       // 43       ← adunare matematica
console.log(text + 1)        // "421"    ← concatenare de text!
```

> `"42"` si `42` sunt valori **complet diferite**.  
> Ghilimelele fac toata diferenta.

</v-click>

---

## `null` si `undefined`

```js
// null — absenta intentionata a unei valori
// Il folosim cand vrem sa spunem explicit "nu exista valoare"
let utilizatorCurent = null

// undefined — variabila declarata, dar fara valoare atribuita
let ceva
console.log(ceva)              // undefined

// Atentie — typeof null are un comportament ciudat, e un bug istoric in JS:
console.log(typeof null)       // "object"  ← ar trebui sa fie "null", dar nu e
console.log(typeof undefined)  // "undefined"
```

<v-click>

**Diferenta practica:**
- `undefined` = "nu am setat inca nimic" — JavaScript il atribuie automat
- `null` = "am decis explicit ca nu exista valoare" — tu il setezi

</v-click>

---
layout: section
color: sky-light
---

# Operatori
Cum lucram cu valorile

---

## Operatori aritmetici

```js
let a = 10
let b = 3

console.log(a + b)    // 13    — adunare
console.log(a - b)    // 7     — scadere
console.log(a * b)    // 30    — inmultire
console.log(a / b)    // 3.333 — impartire
console.log(a % b)    // 1     — restul impartirii (modulo)
console.log(a ** b)   // 1000  — ridicare la putere (10³)
```

<v-click>

**Operatorul `%` — modulo** este mai important decat pare:

```js
10 % 2   // 0 → par (nu are rest la impartirea cu 2)
11 % 2   // 1 → impar
15 % 5   // 0 → divizibil cu 5
17 % 5   // 2 → rest 2
```

Il vei folosi des pentru a verifica daca un numar este par, impar sau divizibil cu ceva.

</v-click>

---

## Scurtatori utile

```js
let x = 10

x++          // x devine 11  (x = x + 1)
x--          // x devine 10  (x = x - 1)

x += 5       // x devine 15  (x = x + 5)
x -= 3       // x devine 12  (x = x - 3)
x *= 2       // x devine 24  (x = x * 2)
x /= 4       // x devine 6   (x = x / 4)
```

<v-click>

**Ordinea operatiunilor** — identica cu matematica:

```js
console.log(2 + 3 * 4)      // 14 — inmultirea se face prima
console.log((2 + 3) * 4)    // 20 — parantezele schimba ordinea
```

</v-click>

---

## Concatenarea stringurilor

```js
let prenume = "Ion"
let varsta = 25

// Varianta clasica — cu operatorul +
console.log("Salut, " + prenume + "! Ai " + varsta + " ani.")

// Template literal — varianta moderna, recomandata
console.log(`Salut, ${prenume}! Ai ${varsta} ani.`)
```

<v-click>

**Template literals** folosesc **backtick** `` ` `` — tasta din stanga cifrei `1`, nu apostrof.

In interior, `${ }` poate contine **orice expresie JavaScript**:

```js
let a = 5
let b = 3
console.log(`${a} plus ${b} este ${a + b}`)
// "5 plus 3 este 8"
```

</v-click>

---

## Cateva proprietati si metode pe stringuri

Stringurile au functionalitate incorporata pe care o vom intelege mai bine la lectia 5. Deocamdata, cateva exemple utile:

```js
let text = "Salut, lume!"

console.log(text.length)                        // 13
console.log(text.toUpperCase())                 // "SALUT, LUME!"
console.log(text.toLowerCase())                 // "salut, lume!"
console.log(text.includes("lume"))              // true
console.log(text.replace("lume", "JavaScript")) // "Salut, JavaScript!"
console.log(text.slice(0, 5))                   // "Salut"
```

<v-click>

> Nu le memora acum — important e sa stii ca **stringurile au metode**.  
> Le vom explica in detaliu la lectia despre metode si callback-uri.

</v-click>

---
layout: section
color: sky-light
---

# Exercitii

---

## Exercitiu 1 — variabile si template literals

Declara variabile pentru a descrie un produs dintr-un magazin online.  
Calculeaza valoarea totala a stocului si afiseaza totul formatat.

```js
// Produsul are: nume, pret (lei), cantitate in stoc, daca e disponibil
// Calculeaza: valoarea totala = pret * cantitate
// Afiseaza toate informatiile cu template literals
```

<v-click>

**Rezolvare:**

```js
const numeProdus = "Laptop"
const pret = 3500
const cantitate = 12
const esteDisponibil = true

const valoareStoc = pret * cantitate

console.log(`Produs: ${numeProdus}`)
console.log(`Pret unitar: ${pret} lei`)
console.log(`In stoc: ${cantitate} bucati`)
console.log(`Disponibil: ${esteDisponibil}`)
console.log(`Valoare totala stoc: ${valoareStoc} lei`)
```

</v-click>

---

## Exercitiu 2 — typeof si capcane

Ce va afisa urmatorul cod? Raspunde **inainte** sa il rulezi.

```js
let a = "10"
let b = 5

console.log(a + b)
console.log(typeof a)
console.log(typeof b)
console.log(a.length)

const c = 7
const d = 3
console.log(`${c} impartit la ${d} are restul ${c % d}`)
```

<v-click>

**Raspuns:**

```
"105"                              ← string + number = concatenare, nu adunare!
"string"
"number"
2                                  ← "10" are 2 caractere
"7 impartit la 3 are restul 1"
```

</v-click>

---

## Exercitiu 3 — mini calculator

Pornind de la doua numere, calculeaza si afiseaza toate operatiile aritmetice.  
Verifica si daca primul numar este par sau impar folosind `%`.

```js
let x = 17
let y = 5
// scrie codul tau
```

<v-click>

**Rezolvare:**

```js
let x = 17
let y = 5

console.log(`Suma: ${x + y}`)
console.log(`Diferenta: ${x - y}`)
console.log(`Produsul: ${x * y}`)
console.log(`Catul: ${x / y}`)
console.log(`Restul impartirii: ${x % y}`)
console.log(`${x} este ${x % 2 === 0 ? "par" : "impar"}`)
```

</v-click>

---
layout: section
color: sky-light
---

# Recapitulare

---

## Ce am invatat azi

<v-clicks>

- **JavaScript** — limbajul comportamentului pe web, ruleaza in browser si pe server
- **`console.log()`** — afiseaza valori in consola, prietenul tau constant
- **`let`** — variabila modificabila; **`const`** — constanta; **`var`** — evita-l
- **Tipuri primitive**: `number`, `string`, `boolean`, `null`, `undefined`
- **`typeof`** — verifica tipul unei valori la runtime
- **Operatori aritmetici**: `+`, `-`, `*`, `/`, `%`, `**`
- **Scurtatori**: `++`, `--`, `+=`, `-=`, `*=`, `/=`
- **Template literals** — `` `text ${expresie}` `` — varianta moderna de concatenare

</v-clicks>

---

## Tema pentru acasa

1. Creeaza un fisier `.html` cu un `<script>` si scrie urmatorul program:
2. Declara variabile pentru o persoana: `nume`, `varsta`, `oras`, `esteStudent`
3. Calculeaza in cati ani implineste 100 de ani
4. Afiseaza un paragraf complet cu toate informatiile, folosind template literals
5. **Bonus**: Deschide consola si experimenteaza cu `typeof` — incearca `typeof null`, `typeof []`, `typeof {}` si noteaza rezultatele surprinzatoare

---
layout: cover
color: sky-light
---

# Intrebari?

<div class="text-xl mt-6 opacity-80">
  Lectia 2: Conditii si bucle — cum ia JavaScript decizii si cum repeta actiuni
</div>

<div class="text-sm mt-4 opacity-50">JS Basics · Lectia 1 din 12</div>
