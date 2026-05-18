---
title: 'JavaScript — Conditii si Bucle'
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
## Conditii si Bucle

<div class="text-xl mt-4 opacity-70">Lectia 2 · Modul 1 — Fundamentele limbajului</div>

---
layout: section
color: sky-light
---

# Conditii
Cum ia JavaScript decizii

---

## De ce avem nevoie de conditii?

```js
console.log("Bine ai venit!")
console.log("Ai acces la cont.")
```

<v-click>

Acest cod ruleaza mereu la fel, indiferent de situatie.  
Dar in realitate:

</v-click>

<v-clicks>

- Ce facem daca utilizatorul nu este logat?
- Ce facem daca varsta lui este sub 18 ani?
- Ce facem daca produsul nu mai e in stoc?

</v-clicks>

<v-click>

> Un program real trebuie sa **reactioneze diferit** in functie de date.  
> Conditiile ne permit sa scriem cod care ia decizii.

</v-click>

---

## Structura `if`

```js
let varsta = 20

if (varsta >= 18) {
  console.log("Esti major.")
}
```

<v-clicks>

- `if` — cuvantul cheie
- `(varsta >= 18)` — **conditia**: o expresie care devine `true` sau `false`
- `{ ... }` — **blocul de cod**: ruleaza doar daca conditia este `true`

</v-clicks>

<v-click>

Daca conditia este `false`, blocul este **ignorat complet**.  
Executia codului continua dupa acolada de inchidere `}`.

</v-click>

---

## `if` + `else`

```js
let varsta = 16

if (varsta >= 18) {
  console.log("Major — ai acces.")
} else {
  console.log("Minor — acces restrictionat.")
}

console.log("Aceasta linie ruleaza mereu.")
```

<v-click>

`else` ruleaza **numai daca** conditia din `if` a fost `false`.  
Unul dintre cele doua blocuri ruleaza intotdeauna — niciodata amandoua.

</v-click>

---

## `else if` — mai multe ramuri

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

JavaScript verifica conditiile **de sus in jos** si se opreste la **prima adevarata**.

```js
// Atentie la ordinea conditiilor — aceasta e gresita:
if (nota >= 5) {         // prinde ORICE nota >= 5, inclusiv 9 si 10
  console.log("Trecut")
} else if (nota >= 9) {  // nu va rula niciodata!
  console.log("Excelent")
}
```

</v-click>

---

## Operatori de comparatie

| Operator | Semnificatie | Exemplu | Rezultat |
|----------|-------------|---------|---------|
| `===` | egal strict (valoare SI tip) | `5 === 5` | `true` |
| `!==` | diferit strict | `5 !== "5"` | `true` |
| `>` | mai mare | `10 > 5` | `true` |
| `<` | mai mic | `3 < 1` | `false` |
| `>=` | mai mare sau egal | `5 >= 5` | `true` |
| `<=` | mai mic sau egal | `4 <= 3` | `false` |

<v-click>

**`===` vs `==` — o distinctie importanta:**

```js
console.log(5 === "5")   // false — tip diferit (number vs string)
console.log(5 == "5")    // true  — == face conversie automata de tip

console.log(0 === false) // false
console.log(0 == false)  // true  — comportament surprinzator
```

> Foloseste intotdeauna `===` si `!==`. Operatorii `==` si `!=` produc rezultate neasteptate.

</v-click>

---

## Operatori logici — `&&`, `||`, `!`

```js
let varsta = 20
let arePermis = true

// && — AND: ambele conditii trebuie sa fie true
if (varsta >= 18 && arePermis) {
  console.log("Poate conduce.")
}

// || — OR: cel putin una trebuie sa fie true
let esteWeekend = true
let esteLiber = false
if (esteWeekend || esteLiber) {
  console.log("Nu merge la birou.")
}

// ! — NOT: inverseaza valoarea de adevar
let ploua = false
if (!ploua) {
  console.log("Putem iesi afara.")
}
```

---

## Valori truthy si falsy

In JavaScript, orice valoare poate fi folosita intr-o conditie.  
Unele valori se comporta ca `false` — le numim **falsy**:

```js
// Valorile FALSY — se comporta ca false intr-un if
false, 0, "", null, undefined, NaN

// Tot restul este TRUTHY — se comporta ca true
// inclusiv: "0", [], {}, -1, "false"
```

<v-click>

```js
let nume = ""

if (nume) {
  console.log("Are nume")
} else {
  console.log("Numele e gol")   // ruleaza acesta — "" este falsy
}

let lista = []
if (lista) {
  console.log("Lista exista")   // ruleaza acesta — [] este truthy!
}
```

</v-click>

---

## Operatorul ternar

Prescurtare pentru `if/else` simplu:

```js
// if/else clasic
let mesaj
if (varsta >= 18) {
  mesaj = "Major"
} else {
  mesaj = "Minor"
}

// Echivalent cu operatorul ternar
let mesaj = varsta >= 18 ? "Major" : "Minor"
//          ^^^conditia^^^  ^true^   ^false^
```

<v-click>

Util in template literals:

```js
console.log(`Utilizatorul este ${varsta >= 18 ? "major" : "minor"}.`)
```

> Foloseste operatorul ternar doar pentru cazuri **simple si clare**.  
> Daca logica e complexa, `if/else` clasic e mai usor de citit.

</v-click>

---
layout: section
color: sky-light
---

# Exercitiu 1

---

## Exercitiu 1 — conditii

Scrie un program care verifica daca o persoana poate cumpara alcool.  
Conditii: trebuie sa aiba cel putin 18 ani SI sa aiba buletin.

Apoi scrie un al doilea program: un magazin ofera reduceri in functie de suma:
- Peste 500 lei → 20% reducere
- Peste 200 lei → 10% reducere
- Altfel → fara reducere

<v-click>

**Rezolvare:**

```js
let varsta = 20
let areBuletin = true

if (varsta >= 18 && areBuletin) {
  console.log("Poate cumpara.")
} else {
  console.log("Nu poate cumpara.")
}

let suma = 350
let reducere = suma > 500 ? 0.20 : suma > 200 ? 0.10 : 0
console.log(`Pret final: ${suma * (1 - reducere)} lei`)
```

</v-click>

---
layout: section
color: sky-light
---

# Bucle
Cum repetam actiuni

---

## De ce avem nevoie de bucle?

```js
// Vrem sa afisam numerele de la 1 la 5:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
```

<v-click>

Dar daca vrem numerele de la 1 la 1000?  
Sau daca nu stim dinainte cate repetitii sunt necesare?

```js
// Cu o bucla — scriem o singura data, ruleaza de ori de cate ori e nevoie
for (let i = 1; i <= 1000; i++) {
  console.log(i)
}
```

</v-click>

---

## Bucla `for` — anatomie

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

<v-clicks>

- `let i = 0` — **initializare**: ruleaza o singura data, la inceput
- `i < 5` — **conditia**: verificata inainte de fiecare iteratie; daca e `false` iesim
- `i++` — **actualizarea**: ruleaza dupa fiecare iteratie
- `{ console.log(i) }` — **corpul**: codul care se repeta

</v-clicks>

<v-click>

Pas cu pas pentru `i < 3`:

```
i=0 → 0<3? DA → log(0) → i++ → i=1
i=1 → 1<3? DA → log(1) → i++ → i=2
i=2 → 2<3? DA → log(2) → i++ → i=3
i=3 → 3<3? NU → iesim
```

</v-click>

---

## Variante comune de `for`

```js
// De la 1 la 10 inclusiv
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

// Numarare inversa
for (let i = 10; i >= 1; i--) {
  console.log(i)
}

// Din 2 in 2
for (let i = 0; i <= 20; i += 2) {
  console.log(i)   // 0, 2, 4, 6 ... 20
}
```

<v-click>

**`if` in interiorul unui `for`** — putem combina orice:

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} este par`)
  }
}
```

</v-click>

---

## Bucla `while`

```js
let i = 0

while (i < 5) {
  console.log(i)
  i++
}
```

<v-click>

**Cand folosim `while` in loc de `for`?**

`while` este potrivit cand **nu stim dinainte** cate iteratii sunt necesare:

```js
// Gasim primul numar mai mare decat 100 divizibil cu 7
let numar = 101

while (numar % 7 !== 0) {
  numar++
}

console.log(numar)   // 105
```

</v-click>

<v-click>

> **Atentie**: daca uiti sa actualizezi variabila din conditie, obtii o **bucla infinita**  
> care blocheaza browserul. Asigura-te ca conditia devine `false` la un moment dat.

</v-click>

---

## `break` si `continue`

```js
// break — iese din bucla complet
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(`Primul multiplu de 7: ${i}`)
    break   // gasit — iesim imediat
  }
}
// "Primul multiplu de 7: 7"
```

<v-click>

```js
// continue — sare peste iteratia curenta, continua cu urmatoarea
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue   // sarim 3, 6, 9
  }
  console.log(i)
}
// 1, 2, 4, 5, 7, 8, 10
```

</v-click>

<v-click>

```
break      → opreste bucla complet
continue   → sare peste restul iteratiei curente, merge la urmatoarea
```

</v-click>

---

## Pattern fundamental — acumulatorul

Un tipar pe care il vei folosi des: o variabila initializata inainte de bucla, actualizata inauntru.

```js
// Suma numerelor de la 1 la 100
let suma = 0

for (let i = 1; i <= 100; i++) {
  suma += i
}

console.log(suma)   // 5050
```

<v-click>

```js
// Acelasi pattern pentru produs, maxim, minim, etc.
let produs = 1

for (let i = 1; i <= 5; i++) {
  produs *= i
}

console.log(produs)   // 120 (5! = 1*2*3*4*5)
```

> Initializeaza acumulatorul cu **valoarea neutra** pentru operatia ta:  
> `0` pentru adunare, `1` pentru inmultire.

</v-click>

---
layout: section
color: sky-light
---

# Exercitii

---

## Exercitiu 2 — FizzBuzz

Afiseaza toate numerele de la 1 la 30 cu regulile:
- Divizibil cu 3 si 5 → `"FizzBuzz"`
- Divizibil cu 3 → `"Fizz"`
- Divizibil cu 5 → `"Buzz"`
- Altfel → numarul

```js
// Hint: verifica cazul compus (&&) PRIMUL
```

<v-click>

**Rezolvare:**

```js
for (let i = 1; i <= 30; i++) {
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

</v-click>

---

## Exercitiu 3 — acumulator si while

1. Calculeaza suma tuturor numerelor pare de la 1 la 50.
2. Folosind `while`, gaseste cel mai mic numar mai mare decat 200 care este divizibil atat cu 3 cat si cu 7.

<v-click>

**Rezolvare:**

```js
// 1. Suma numerelor pare
let suma = 0
for (let i = 2; i <= 50; i += 2) {
  suma += i
}
console.log(`Suma numerelor pare 1-50: ${suma}`)   // 650

// 2. Primul numar > 200 divizibil cu 3 si 7
let numar = 201
while (numar % 3 !== 0 || numar % 7 !== 0) {
  numar++
}
console.log(numar)   // 210
```

</v-click>

---

## Exercitiu 4 — tabla inmultirii

Afiseaza tabla inmultirii pentru un numar dat, de la 1 la 10.  
Foloseste un template literal pentru formatare clara.

```js
let numar = 7
```

<v-click>

**Rezolvare:**

```js
let numar = 7

for (let i = 1; i <= 10; i++) {
  console.log(`${numar} x ${i} = ${numar * i}`)
}
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70
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

- **`if / else if / else`** — executie conditionata, verificare de sus in jos
- **`===` si `!==`** — comparatie stricta — foloseste intotdeauna aceasta varianta
- **`&&`, `||`, `!`** — AND, OR, NOT pentru combinarea conditiilor
- **Valori falsy**: `false, 0, "", null, undefined, NaN`
- **Operatorul ternar** — `conditie ? a : b` pentru cazuri simple
- **`for`** — bucla cu numar cunoscut de iteratii
- **`while`** — bucla cu numar necunoscut de iteratii
- **`break`** — iese din bucla; **`continue`** — sare peste iteratia curenta
- **Acumulatorul** — pattern fundamental: variabila initializata inainte, actualizata inauntru

</v-clicks>

---

## Tema pentru acasa

1. Scrie un program care afiseaza toate numerele de la 1 la 100, dar:
   - multiplii de 4 → `"Patrat"`
   - multiplii de 6 → `"Hex"`
   - multiplii de ambele → `"PatratHex"`
2. Calculeaza suma patratelor numerelor de la 1 la 10 (`1² + 2² + ... + 10²`)
3. **Bonus**: Folosind `while` si `break`, gaseste primul numar mai mare decat 1000 care este simultan par si divizibil cu 13.

---
layout: cover
color: sky-light
---

# Intrebari?

<div class="text-xl mt-6 opacity-80">
  Lectia 3: Functii — cum reutilizam codul si organizam logica
</div>

<div class="text-sm mt-4 opacity-50">JS Basics · Lectia 2 din 12</div>
