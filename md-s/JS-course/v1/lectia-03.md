---
title: 'JavaScript — Functii'
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
## Functii — declarare, parametri, return, scope

<div class="text-xl mt-4 opacity-70">Lectia 3 · Modul 2 — Functii si structuri de date</div>

---
layout: section
color: teal-light
---

# De ce avem nevoie de functii?
Problema codului duplicat

---

## Codul fara functii

Vrem sa afisam un mesaj de salut pentru mai multe persoane:

```js
console.log("Buna ziua, Ana! Ai 22 de ani.")
console.log("Buna ziua, Ion! Ai 35 de ani.")
console.log("Buna ziua, Maria! Ai 18 de ani.")
```

<v-clicks>

- Daca vrem sa schimbam formatul, modificam in 3 locuri
- Cu 100 de persoane devine imposibil de gestionat
- Daca gresim intr-un loc, celelalte raman incorecte

</v-clicks>

<v-click>

> **Principiul DRY** — Don't Repeat Yourself.  
> Daca scrii acelasi cod de doua ori, ar trebui sa fie o functie.

</v-click>

---

## Solutia: functia

```js
function saluta(nume, varsta) {
  console.log(`Buna ziua, ${nume}! Ai ${varsta} de ani.`)
}

saluta("Ana", 22)
saluta("Ion", 35)
saluta("Maria", 18)
```

<v-click>

Acum daca vrem sa schimbam formatul, modificam **intr-un singur loc**.

```js
function saluta(nume, varsta) {
  console.log(`Salut, ${nume}! Varsta ta: ${varsta} ani.`)
  //           ^ schimbare unica, se reflecta in toate apelurile
}
```

</v-click>

---
layout: section
color: teal-light
---

# Anatomia unei functii

---

## Declararea si apelarea

```js
// DECLARAREA — definim ce face functia
function aduna(a, b) {
  return a + b
}

// APELAREA — executam functia
let rezultat = aduna(3, 7)
console.log(rezultat)   // 10
```

<v-clicks>

- `function` — cuvantul cheie care declara o functie
- `aduna` — **numele** functiei (il alegem noi, aceleasi reguli ca la variabile)
- `(a, b)` — **parametrii**: variabile locale disponibile in interiorul functiei
- `{ return a + b }` — **corpul**: codul care se executa la apel
- `return` — trimite o valoare inapoi in locul de unde s-a facut apelul
- `aduna(3, 7)` — **apelul** cu **argumentele** `3` si `7`

</v-clicks>

---

## Declarare vs apelare — diferenta esentiala

```js
// Aceasta linie doar DEFINESTE functia — nu se intampla nimic vizibil
function saluta(nume) {
  console.log("Salut, " + nume)
}

// Aceasta linie EXECUTA functia — abia acum ruleaza codul din interior
saluta("Ana")   // "Salut, Ana"

// Fara paranteze = referinta la functie, nu executie
console.log(saluta)         // afiseaza codul functiei, nu o ruleaza
console.log(saluta("Ion"))  // executa SI afiseaza rezultatul returnat
```

<v-click>

> **Parantezele `()` sunt cele care declanseaza executia.**  
> Fara ele, functia exista dar nu face nimic.

</v-click>

---

## Parametri vs Argumente

Termenii sunt diferiti si apar des in documentatie:

```js
// La declarare — le numim PARAMETRI
// Sunt ca niste variabile locale ale functiei
function saluta(prenume, varsta) {
  //             ^^^^^^^ ^^^^^
  //             parametri
  console.log(`${prenume} are ${varsta} ani`)
}

// La apel — le numim ARGUMENTE
// Sunt valorile concrete pe care le trimitem
saluta("Ion", 25)
//     ^^^^^ ^^
//     argumente
```

<v-click>

```js
// Daca trimitem mai putine argumente decat parametri:
saluta("Ion")            // prenume = "Ion", varsta = undefined
// "Ion are undefined ani"

// Daca trimitem mai multe argumente decat parametri:
saluta("Ion", 25, "Cluj")  // al treilea argument e ignorat
```

</v-click>

---
layout: section
color: teal-light
---

# `return`
Cum trimitem valori inapoi

---

## Ce face `return`

```js
function aduna(a, b) {
  return a + b
}

// Valoarea returnata poate fi folosita in orice expresie
let suma = aduna(5, 3)            // 8
console.log(aduna(10, 20))        // 30
console.log(aduna(1, 2) * 10)     // 30
console.log(`Total: ${aduna(4, 6)}`)  // "Total: 10"
```

<v-click>

**Fara `return` — functia returneaza `undefined` implicit:**

```js
function saluta(nume) {
  console.log("Salut, " + nume)
  // nu exista return
}

let rezultat = saluta("Ana")  // afiseaza "Salut, Ana"
console.log(rezultat)         // undefined — nu am returnat nimic
```

</v-click>

---

## `return` opreste executia functiei

```js
function verifica(numar) {
  if (numar < 0) {
    return "Negativ"     // iesim din functie AICI daca e negativ
  }
  if (numar === 0) {
    return "Zero"        // iesim AICI daca e zero
  }
  return "Pozitiv"       // ajungem aici doar daca numar > 0
}

console.log(verifica(-5))   // "Negativ"
console.log(verifica(0))    // "Zero"
console.log(verifica(10))   // "Pozitiv"
```

<v-click>

Acest pattern — **multiple return** — este foarte comun.  
In loc de `if/else if/else` imbricate, returnam devreme si simplificam structura.

</v-click>

---

## Exercitiu rapid

Scrie o functie `calculeazaReducere` care primeste `suma` si returneaza pretul final dupa reducere:
- Suma > 500 → 20% reducere
- Suma > 200 → 10% reducere
- Altfel → fara reducere

<v-click>

**Rezolvare:**

```js
function calculeazaReducere(suma) {
  if (suma > 500) {
    return suma * 0.80
  }
  if (suma > 200) {
    return suma * 0.90
  }
  return suma
}

console.log(calculeazaReducere(600))   // 480
console.log(calculeazaReducere(300))   // 270
console.log(calculeazaReducere(100))   // 100
```

</v-click>

---
layout: section
color: teal-light
---

# Scope
Unde traiesc variabilele

---

## Scope local — variabilele traiesc in functia lor

```js
function calculeaza() {
  let rezultat = 42     // variabila LOCALA — exista doar in aceasta functie
  console.log(rezultat) // 42 — OK
}

calculeaza()
console.log(rezultat)   // EROARE — rezultat nu exista in afara functiei
```

<v-click>

**De ce e bine asa?**

```js
function calculeaza1() {
  let total = 100
  // total e al acestei functii
}

function calculeaza2() {
  let total = 200
  // total e al acestei functii — nu exista conflict!
}
```

> Fiecare functie are **propriul spatiu de lucru**.  
> Variabilele locale nu "scapa" in exterior si nu intra in conflict cu alte variabile.

</v-click>

---

## Scope global — variabile accesibile de oriunde

```js
let mesajGlobal = "Buna ziua!"   // variabila GLOBALA

function saluta(nume) {
  console.log(mesajGlobal + " " + nume)  // poate accesa variabila globala
}

saluta("Ana")    // "Buna ziua! Ana"
saluta("Ion")    // "Buna ziua! Ion"
```

<v-click>

**Regula practica:**

```js
// Nu modifica variabile globale din interiorul functiilor — creeaza confuzie
let contor = 0

function incrementeaza() {
  contor++    // modifica o variabila globala — evita pe cat posibil
}

// Mai bine: primeste valoarea ca parametru si returneaza rezultatul
function incrementeaza(valoare) {
  return valoare + 1    // curat, predictibil, usor de testat
}
```

</v-click>

---
layout: section
color: teal-light
---

# Functii care apeleaza alte functii
Compunerea logicii

---

## Functii care colaboreaza

```js
function esteNumarPar(numar) {
  return numar % 2 === 0
}

function descrie(numar) {
  if (esteNumarPar(numar)) {
    return `${numar} este par`
  }
  return `${numar} este impar`
}

console.log(descrie(4))    // "4 este par"
console.log(descrie(7))    // "7 este impar"
```

<v-click>

Functiile mici, cu responsabilitati clare, pot fi **combinate** pentru a construi logica mai complexa.  
Aceasta este una din ideile fundamentale ale programarii.

</v-click>

---

## Un exemplu mai complet

```js
function calculeazaAria(latime, inaltime) {
  return latime * inaltime
}

function calculeazaPerimetru(latime, inaltime) {
  return 2 * (latime + inaltime)
}

function descrieDreptunghi(latime, inaltime) {
  const aria = calculeazaAria(latime, inaltime)
  const perimetru = calculeazaPerimetru(latime, inaltime)
  return `Dreptunghi ${latime}x${inaltime}: aria=${aria}, perimetrul=${perimetru}`
}

console.log(descrieDreptunghi(5, 3))
// "Dreptunghi 5x3: aria=15, perimetrul=16"

console.log(descrieDreptunghi(10, 4))
// "Dreptunghi 10x4: aria=40, perimetrul=28"
```

---
layout: section
color: teal-light
---

# Exercitii

---

## Exercitiu 1 — functii de baza

Scrie urmatoarele functii si testeaza-le:

1. `patrat(n)` — returneaza n²
2. `esteDivizibil(numar, divizor)` — returneaza `true` sau `false`
3. `valoareAbsoluta(n)` — returneaza valoarea absoluta fara a folosi `Math.abs()`

<v-click>

**Rezolvare:**

```js
function patrat(n) {
  return n * n
}

function esteDivizibil(numar, divizor) {
  return numar % divizor === 0
}

function valoareAbsoluta(n) {
  if (n < 0) {
    return -n
  }
  return n
}

console.log(patrat(5))                  // 25
console.log(esteDivizibil(10, 3))       // false
console.log(valoareAbsoluta(-7))        // 7
```

</v-click>

---

## Exercitiu 2 — functii cu bucle

Scrie o functie `sumaIntre(start, end)` care calculeaza suma tuturor numerelor intregi intre `start` si `end` (inclusiv).

Scrie o a doua functie `numaraPare(start, end)` care returneaza **cate** numere pare exista in intervalul `[start, end]`.

<v-click>

**Rezolvare:**

```js
function sumaIntre(start, end) {
  let suma = 0
  for (let i = start; i <= end; i++) {
    suma += i
  }
  return suma
}

function numaraPare(start, end) {
  let contor = 0
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      contor++
    }
  }
  return contor
}

console.log(sumaIntre(1, 10))      // 55
console.log(sumaIntre(5, 8))       // 26  (5+6+7+8)
console.log(numaraPare(1, 10))     // 5   (2,4,6,8,10)
```

</v-click>

---

## Exercitiu 3 — compunerea functiilor

Scrie un sistem de calcul al notei finale pentru un student:
- `medie(nota1, nota2, nota3)` — returneaza media aritmetica
- `calificativ(medie)` — returneaza "Excelent" / "Bine" / "Suficient" / "Insuficient"
- `raport(nume, nota1, nota2, nota3)` — afiseaza un raport complet

```js
// Exemplu de output:
// "Student: Ion | Medie: 8.33 | Calificativ: Bine"
```

<v-click>

**Rezolvare:**

```js
function medie(n1, n2, n3) {
  return (n1 + n2 + n3) / 3
}

function calificativ(med) {
  if (med >= 9) return "Excelent"
  if (med >= 7) return "Bine"
  if (med >= 5) return "Suficient"
  return "Insuficient"
}

function raport(nume, n1, n2, n3) {
  const med = medie(n1, n2, n3)
  const cal = calificativ(med)
  console.log(`Student: ${nume} | Medie: ${med.toFixed(2)} | Calificativ: ${cal}`)
}

raport("Ion", 8, 9, 8)      // "Student: Ion | Medie: 8.33 | Calificativ: Bine"
raport("Ana", 10, 10, 9)    // "Student: Ana | Medie: 9.67 | Calificativ: Excelent"
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

- **Functia** — bloc de cod reutilizabil, scriem o data, apelam de ori de cate ori e nevoie
- **Declarare vs apelare** — `function f() {}` declara; `f()` executa
- **Parametri** — variabilele din definitia functiei
- **Argumente** — valorile concrete trimise la apel
- **`return`** — trimite o valoare inapoi si opreste executia functiei
- **Fara return** — functia returneaza `undefined` implicit
- **Scope local** — variabilele declarate in functie nu exista in exterior
- **Scope global** — variabilele declarate in exterior sunt accesibile in orice functie
- **Compunerea functiilor** — functii mici, clare, care se apeleaza intre ele

</v-clicks>

---

## Tema pentru acasa

1. Scrie o functie `esteAnBisect(an)` care returneaza `true` daca anul este bisect.  
   Un an este bisect daca e divizibil cu 4, dar nu cu 100, exceptand cei divizibili cu 400.
2. Scrie o functie `celMaiMare(a, b, c)` care returneaza cel mai mare dintre trei numere, **fara** sa folosesti `Math.max()`.
3. **Bonus**: Scrie o functie `numara(start, end, pas)` care afiseaza numerele de la `start` la `end` din `pas` in `pas`. Daca `pas` lipseste, foloseste `1` implicit — pentru asta, seteaza valoarea default in semnatura: `function numara(start, end, pas = 1)`.

---
layout: cover
color: teal-light
---

# Intrebari?

<div class="text-xl mt-6 opacity-80">
  Lectia 4: Array-uri — cum stocam si parcurgem colectii de date
</div>

<div class="text-sm mt-4 opacity-50">JS Basics · Lectia 3 din 12</div>
