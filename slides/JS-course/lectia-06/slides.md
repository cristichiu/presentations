---
title: 'JavaScript — Obiecte si Array de Obiecte'
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
## Obiecte si Array de Obiecte

<div class="text-xl mt-4 opacity-70">Lectia 6 · Modul 2 — Functii si structuri de date</div>

---
layout: section
color: teal-light
---

# De ce avem nevoie de obiecte?
Problema datelor legate intre ele

---

## Fara obiecte — date dispersate

Vrem sa stocam informatii despre un utilizator:

```js
let nume = "Ion"
let varsta = 25
let oras = "Cluj"
let esteAdmin = false
```

<v-clicks>

- Variabilele nu au nicio legatura intre ele
- Daca avem 10 utilizatori, avem 40 de variabile separate
- Nu putem trimite "un utilizator" la o functie — trebuie sa trimitem 4 argumente

</v-clicks>

<v-click>

```js
// Cu un obiect — toate datele unui utilizator intr-un singur loc
let utilizator = {
  nume: "Ion",
  varsta: 25,
  oras: "Cluj",
  esteAdmin: false
}
```

</v-click>

---
layout: section
color: teal-light
---

# Structura unui obiect
Perechi cheie — valoare

---

## Ce este un obiect

Un obiect este o **colectie de perechi cheie-valoare** intre acolade.

```js
let masina = {
  marca: "Dacia",
  model: "Logan",
  an: 2021,
  esteElectrica: false
}
```

<v-clicks>

- `marca`, `model`, `an`, `esteElectrica` — **cheile** (proprietatile)
- `"Dacia"`, `"Logan"`, `2021`, `false` — **valorile**
- Fiecare pereche este separata prin virgula
- Valorile pot fi orice tip: string, number, boolean, array, alt obiect, functie

</v-clicks>

<v-click>

> Gandeste-te la un obiect ca la un **formular completat**:  
> fiecare camp (cheie) are o valoare completata.

</v-click>

---

## Accesarea proprietatilor — dot notation

```js
let utilizator = {
  nume: "Ion",
  varsta: 25,
  oras: "Cluj"
}

// Dot notation — cel mai comun mod
console.log(utilizator.nume)     // "Ion"
console.log(utilizator.varsta)   // 25
console.log(utilizator.oras)     // "Cluj"

// Proprietate care nu exista
console.log(utilizator.email)    // undefined — nu e eroare
```

<v-click>

```js
// Folosim proprietatile in expresii
console.log(`${utilizator.nume} are ${utilizator.varsta} ani si locuieste in ${utilizator.oras}.`)
// "Ion are 25 ani si locuieste in Cluj."
```

</v-click>

---

## Accesarea proprietatilor — bracket notation

```js
let utilizator = {
  nume: "Ion",
  varsta: 25,
  "oras natal": "Cluj"    // cheie cu spatiu — posibil, dar evita-l
}

// Bracket notation — folosim un string cu numele proprietatii
console.log(utilizator["nume"])      // "Ion"
console.log(utilizator["varsta"])    // 25
console.log(utilizator["oras natal"]) // "Cluj"
```

<v-click>

**Cand este utila bracket notation:**

```js
// Cand cheia e stocata intr-o variabila
let proprietate = "nume"
console.log(utilizator[proprietate])   // "Ion" — merge!
console.log(utilizator.proprietate)    // undefined — cauta cheia "proprietate", nu exista!

// Cand cheia este dinamica
let campuri = ["nume", "varsta", "oras"]
campuri.forEach(function(camp) {
  console.log(utilizator[camp])  // acceseaza fiecare proprietate pe rand
})
```

</v-click>

---

## Modificarea si adaugarea proprietatilor

```js
let utilizator = {
  nume: "Ion",
  varsta: 25
}

// Modificam o proprietate existenta
utilizator.varsta = 26
console.log(utilizator.varsta)   // 26

// Adaugam o proprietate noua
utilizator.email = "ion@example.com"
console.log(utilizator.email)    // "ion@example.com"

// Stergem o proprietate
delete utilizator.email
console.log(utilizator.email)    // undefined
```

<v-click>

```js
// Obiect declarat cu const — proprietatile se pot modifica, obiectul nu se poate inlocui
const masina = { marca: "Dacia", an: 2021 }

masina.an = 2022        // OK — modificam o proprietate
masina.culoare = "alb"  // OK — adaugam o proprietate
masina = { marca: "BMW" }  // EROARE — nu putem reasigna const
```

</v-click>

---

## Verificarea existentei unei proprietati

```js
let utilizator = {
  nume: "Ion",
  varsta: 25
}

// Operatorul in
console.log("nume" in utilizator)    // true
console.log("email" in utilizator)   // false

// Comparatie cu undefined
console.log(utilizator.email !== undefined)   // false — nu exista
```

<v-click>

**`Object.keys()`, `Object.values()`, `Object.entries()`:**

```js
let masina = { marca: "Dacia", model: "Logan", an: 2021 }

console.log(Object.keys(masina))
// ["marca", "model", "an"]

console.log(Object.values(masina))
// ["Dacia", "Logan", 2021]

console.log(Object.entries(masina))
// [["marca", "Dacia"], ["model", "Logan"], ["an", 2021]]
```

</v-click>

---

## Parcurgerea unui obiect

```js
let masina = { marca: "Dacia", model: "Logan", an: 2021 }

// Cu Object.keys() si forEach
Object.keys(masina).forEach(function(cheie) {
  console.log(`${cheie}: ${masina[cheie]}`)
})
// "marca: Dacia"
// "model: Logan"
// "an: 2021"
```

<v-click>

```js
// Cu for...in (bucla speciala pentru obiecte)
for (let cheie in masina) {
  console.log(`${cheie}: ${masina[cheie]}`)
}
// acelasi rezultat
```

> `Object.keys().forEach` este mai modern si mai predictibil.  
> `for...in` este mai vechi — ambele sunt valide.

</v-click>

---

## Obiecte imbricate

Valorile unui obiect pot fi la randul lor obiecte:

```js
let utilizator = {
  nume: "Ana",
  varsta: 28,
  adresa: {
    strada: "Mihai Eminescu",
    numar: 10,
    oras: "Iasi"
  },
  hobby: ["lectura", "calatorii", "fotografie"]
}

// Accesam niveluri multiple
console.log(utilizator.adresa.oras)       // "Iasi"
console.log(utilizator.adresa.numar)      // 10
console.log(utilizator.hobby[0])          // "lectura"
console.log(utilizator.hobby.length)      // 3
```

---
layout: section
color: teal-light
---

# Exercitiu 1

---

## Exercitiu 1 — creare si manipulare obiect

Creeaza un obiect `carte` cu proprietatile: `titlu`, `autor`, `an`, `pagini`, `esteDisponibila`.

1. Afiseaza toate proprietatile cu un template literal
2. Marcheaza cartea ca indisponibila
3. Adauga o proprietate `rating` cu valoarea 4.5
4. Afiseaza toate cheile obiectului cu `Object.keys()`

<v-click>

**Rezolvare:**

```js
const carte = { titlu: "Morometii", autor: "Marin Preda", an: 1955, pagini: 492, esteDisponibila: true }

console.log(`"${carte.titlu}" de ${carte.autor} (${carte.an}), ${carte.pagini} pag.`)

carte.esteDisponibila = false
carte.rating = 4.5

console.log(Object.keys(carte))
// ["titlu", "autor", "an", "pagini", "esteDisponibila", "rating"]
```

</v-click>

---
layout: section
color: teal-light
---

# Array de obiecte
Combinarea celor doua structuri

---

## De ce combinam array cu obiecte?

Un array de obiecte este cea mai folosita structura de date in JavaScript real:

```js
// O lista de utilizatori — fiecare e un obiect
let utilizatori = [
  { nume: "Ana", varsta: 28, oras: "Iasi" },
  { nume: "Ion", varsta: 35, oras: "Cluj" },
  { nume: "Maria", varsta: 22, oras: "Bucuresti" },
  { nume: "Mihai", varsta: 30, oras: "Cluj" }
]
```

<v-click>

Aceasta structura apare **peste tot** in aplicatii reale:
- Lista de produse dintr-un magazin
- Postari pe o retea sociala
- Rezultate din baza de date
- Raspunsuri de la un API web

</v-click>

---

## Accesarea datelor

```js
let utilizatori = [
  { nume: "Ana", varsta: 28, oras: "Iasi" },
  { nume: "Ion", varsta: 35, oras: "Cluj" },
  { nume: "Maria", varsta: 22, oras: "Bucuresti" }
]

// Accesam un element din array, apoi o proprietate a obiectului
console.log(utilizatori[0].nume)      // "Ana"
console.log(utilizatori[1].varsta)    // 35
console.log(utilizatori[2].oras)      // "Bucuresti"

// Lungimea array-ului
console.log(utilizatori.length)       // 3
```

---

## Parcurgerea cu `forEach`

```js
let utilizatori = [
  { nume: "Ana", varsta: 28, oras: "Iasi" },
  { nume: "Ion", varsta: 35, oras: "Cluj" },
  { nume: "Maria", varsta: 22, oras: "Bucuresti" }
]

utilizatori.forEach(function(utilizator) {
  console.log(`${utilizator.nume}, ${utilizator.varsta} ani, din ${utilizator.oras}`)
})
// "Ana, 28 ani, din Iasi"
// "Ion, 35 ani, din Cluj"
// "Maria, 22 ani, din Bucuresti"
```

<v-click>

**Parametrul callback-ului este fiecare obiect din array, rand pe rand.**

```js
// Putem face orice inauntru
utilizatori.forEach(function(u) {
  if (u.varsta >= 30) {
    console.log(`${u.nume} are peste 30 de ani`)
  }
})
// "Ion are peste 30 de ani"
```

</v-click>

---

## Functii care lucreaza cu array de obiecte

```js
let produse = [
  { nume: "Laptop", pret: 3500, stoc: 5 },
  { nume: "Mouse", pret: 120, stoc: 30 },
  { nume: "Monitor", pret: 1200, stoc: 8 },
  { nume: "Tastatura", pret: 200, stoc: 15 }
]

// Functie care afiseaza toate produsele
function afiseazaProduse(lista) {
  lista.forEach(function(produs) {
    console.log(`${produs.nume}: ${produs.pret} lei (stoc: ${produs.stoc})`)
  })
}

// Functie care calculeaza valoarea totala a stocului
function valoareTotala(lista) {
  let total = 0
  lista.forEach(function(produs) {
    total += produs.pret * produs.stoc
  })
  return total
}

afiseazaProduse(produse)
console.log(`Valoare totala stoc: ${valoareTotala(produse)} lei`)
```

---

## Cautarea intr-un array de obiecte

```js
let utilizatori = [
  { id: 1, nume: "Ana", oras: "Iasi" },
  { id: 2, nume: "Ion", oras: "Cluj" },
  { id: 3, nume: "Maria", oras: "Cluj" }
]

// Gaseste primul utilizator cu un anumit criteriu
function gasesteUtilizator(lista, numeCartat) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].nume === numeCartat) {
      return lista[i]   // returneaza OBIECTUL gasit
    }
  }
  return null   // nu a gasit nimic
}

let rezultat = gasesteUtilizator(utilizatori, "Ion")
console.log(rezultat)          // { id: 2, nume: "Ion", oras: "Cluj" }
console.log(rezultat.oras)     // "Cluj"

let inexistent = gasesteUtilizator(utilizatori, "Mihai")
console.log(inexistent)        // null
```

---

## Adaugarea si stergerea din array de obiecte

```js
let studenti = [
  { id: 1, nume: "Ana", nota: 9 },
  { id: 2, nume: "Ion", nota: 7 }
]

// Adaugam un student nou
studenti.push({ id: 3, nume: "Maria", nota: 8 })
console.log(studenti.length)   // 3

// Stergem un student dupa id
function stergeStudent(lista, idCautat) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === idCautat) {
      lista.splice(i, 1)   // elimina 1 element de la pozitia i
      return true
    }
  }
  return false
}

stergeStudent(studenti, 2)
console.log(studenti)
// [{ id:1, nume:"Ana", nota:9 }, { id:3, nume:"Maria", nota:8 }]
```

---
layout: section
color: teal-light
---

# Exercitii

---

## Exercitiu 2 — analiza array de obiecte

```js
let angajati = [
  { nume: "Ana", departament: "IT", salariu: 5000 },
  { nume: "Ion", departament: "HR", salariu: 3500 },
  { nume: "Maria", departament: "IT", salariu: 6000 },
  { nume: "Mihai", departament: "HR", salariu: 4000 },
  { nume: "Elena", departament: "IT", salariu: 5500 }
]
```

Scrie functii care:
1. Afiseaza toti angajatii din departamentul `"IT"`
2. Calculeaza salariul mediu al tuturor angajatilor
3. Gaseste angajatul cu salariul cel mai mare

<v-click>

```js
function angajatiIT(lista) {
  lista.forEach(function(a) { if (a.departament === "IT") console.log(a.nume) })
}
function salariuMediu(lista) {
  let total = 0
  lista.forEach(function(a) { total += a.salariu })
  return total / lista.length
}
function celMaiBinePlatit(lista) {
  let maxim = lista[0]
  lista.forEach(function(a) { if (a.salariu > maxim.salariu) maxim = a })
  return maxim
}
```

</v-click>

---

## Exercitiu 3 — proiect combinat: gestiunea unui catalog

Construieste un mic sistem de gestiune a unui catalog de carti:

```js
let catalog = [
  { id: 1, titlu: "Morometii", autor: "Marin Preda", disponibila: true },
  { id: 2, titlu: "Ion", autor: "Liviu Rebreanu", disponibila: false },
  { id: 3, titlu: "Enigma Otiliei", autor: "G. Calinescu", disponibila: true }
]
```

Implementeaza:
1. `listeazaDisponibile(catalog)` — afiseaza cartile disponibile
2. `imprumuta(catalog, id)` — marcheaza o carte ca indisponibila (gaseste dupa id)
3. `returneaza(catalog, id)` — marcheaza o carte ca disponibila
4. `adaugaCarte(catalog, titlu, autor)` — adauga o carte noua cu id auto-incrementat

---

## Rezolvare exercitiu 3

```js
function listeazaDisponibile(catalog) {
  catalog.forEach(function(carte) {
    if (carte.disponibila) {
      console.log(`[${carte.id}] "${carte.titlu}" - ${carte.autor}`)
    }
  })
}

function imprumuta(catalog, id) {
  catalog.forEach(function(carte) {
    if (carte.id === id) carte.disponibila = false
  })
}

function returneaza(catalog, id) {
  catalog.forEach(function(carte) {
    if (carte.id === id) carte.disponibila = true
  })
}

function adaugaCarte(catalog, titlu, autor) {
  let idNou = catalog.length + 1
  catalog.push({ id: idNou, titlu: titlu, autor: autor, disponibila: true })
}

listeazaDisponibile(catalog)   // Morometii, Enigma Otiliei
imprumuta(catalog, 1)
listeazaDisponibile(catalog)   // doar Enigma Otiliei
```

---
layout: section
color: teal-light
---

# Recapitulare

---

## Ce am invatat azi

<v-clicks>

- **Obiect** — colectie de perechi cheie-valoare intre acolade `{}`
- **Dot notation** — `obiect.proprietate` — cel mai comun mod de acces
- **Bracket notation** — `obiect["proprietate"]` — util cand cheia e dinamica
- **Adaugare** — `obiect.cheieNoua = valoare`
- **Stergere** — `delete obiect.cheie`
- **`Object.keys/values/entries()`** — obtine cheile, valorile sau ambele
- **Array de obiecte** — cea mai folosita structura de date in aplicatii reale
- **Parcurgere** cu `forEach` — parametrul callback-ului este fiecare obiect
- **Cautarea** dupa un criteriu — parcurgere cu `for` si `return` la gasire
- **Combinarea** functiilor cu array de obiecte — pattern central in JS

</v-clicks>

---

## Tema pentru acasa

1. Creeaza un array de cel putin 5 produse (`{ id, nume, pret, categorie, stoc }`). Scrie functii pentru:
   - Afisarea tuturor produselor dintr-o categorie data
   - Calcularea valorii totale a stocului (`pret * stoc`) pentru fiecare categorie
   - Gasirea produsului cu cel mai mic pret
2. Adauga o functie `aplicaDiscount(produse, categorie, procent)` care reduce pretul tuturor produselor dintr-o categorie cu procentul dat.
3. **Bonus**: Scrie o functie `grupeazaDupaCategorie(produse)` care returneaza un obiect unde fiecare cheie este o categorie si valoarea este un array cu produsele din acea categorie.

---
layout: cover
color: teal-light
---

# Intrebari?

<div class="text-xl mt-6 opacity-80">
  Lectia 7: DOM — cum browserul transforma HTML intr-un arbore de obiecte
</div>

<div class="text-sm mt-4 opacity-50">JS Basics · Lectia 6 din 12</div>
