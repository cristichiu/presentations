---
title: 'JavaScript - Funcții și Array-uri'
theme: neversink
transition: slide-left
layout: cover
color: sky-light
info: 'JS Basics · 2026'
lineNumbers: true
draw:
  enabled: true
---

# JavaScript 🧩
## Funcții și Array-uri

<div class="mt-4 opacity-80">
Teorie + Practică (50/50)
</div>

---
layout: default
---

# 🤔 De ce avem nevoie de funcții?

Imaginează-ți că trebuie să afișezi același mesaj de 10 ori:

```js
console.log("Salut!");
console.log("Salut!");
console.log("Salut!");
// ... de 10 ori
```

<v-click>
<div class="mt-4 p-2 bg-gray-100 dark:bg-gray-800 rounded">
😬 Cod repetitiv = greu de întreținut
</div>
</v-click>

---
layout: default
---

# ❌ Problema codului duplicat

Ce se întâmplă dacă vrei să schimbi mesajul?

👉 Trebuie să modifici în **10 locuri diferite**

<v-clicks>

- Consumă timp
- Crește riscul de greșeli
- Cod greu de citit

</v-clicks>

---
layout: default
---

# 💡 Soluția: Funcțiile

Scriem codul o singură dată și îl refolosim:

```js
function salut() {
  console.log("Salut!");
}

salut();
salut();
salut();
```

<v-click>

✔️ Mai curat
✔️ Mai ușor de modificat
✔️ Reutilizabil

</v-click>

---
layout: default
---

# 🤔 De ce avem nevoie de array-uri?

Imaginează-ți că ai mai multe valori:

```js
let nume1 = "Ana";
let nume2 = "Ion";
let nume3 = "Maria";
```

<v-click>
<div class="mt-4 p-2 bg-gray-100 dark:bg-gray-800 rounded">
😬 Devine haotic foarte repede...
</div>
</v-click>

---
layout: default
---

# ❌ Problema variabilelor multiple

Dacă ai 100 de nume?

<v-clicks>

- Creezi 100 de variabile? ❌
- Greu de parcurs
- Greu de gestionat

</v-clicks>

---
layout: default
---

# 💡 Soluția: Array

```js
let nume = ["Ana", "Ion", "Maria"];
```

<v-clicks>

- Toate valorile într-un singur loc
- Ușor de parcurs cu un loop
- Cod mai organizat

</v-clicks>

---
layout: default
---

# 🔗 Problema reală (combinate)

Vrem să facem asta:

👉 Să afișăm un mesaj pentru fiecare persoană

Fără funcții și array-uri:

```js
console.log("Salut Ana");
console.log("Salut Ion");
console.log("Salut Maria");
```

<v-click>
<div class="mt-4 p-2 bg-gray-100 dark:bg-gray-800 rounded">
😬 Nu este scalabil
</div>
</v-click>

---
layout: default
---

# 🚀 Direcția lecției

Vom învăța:

<v-clicks>

- Funcții → ca să reutilizăm codul
- Array-uri → ca să gestionăm mai multe date
- Combinate → pentru a scrie cod real și eficient

</v-clicks>

<v-click>
<div class="mt-6 text-green-600 font-bold">
👉 Hai să vedem cum rezolvăm problema corect!
</div>
</v-click>

---
layout: default
---

# Ce sunt funcțiile? 🔧

Funcțiile sunt blocuri de cod reutilizabile.

```js
function salut() {
  console.log("Salut!");
}
```

<v-clicks>

- Scrii o dată, folosești de mai multe ori
- Cod mai organizat
- Evită duplicarea

</v-clicks>

---
layout: default
---

# Apelarea funcției 📞

```js
function salut() {
  console.log("Salut!");
}

salut();
```

<v-click>
Funcția rulează doar când este apelată!
</v-click>

---
layout: default
---

# Parametri 🎯

```js
function salut(nume) {
  console.log("Salut " + nume);
}

salut("Ana");
```

- **Parametru** → `nume`
- **Argument** → `"Ana"`

---
layout: default
---

# Return 🔙

```js
function aduna(a, b) {
  return a + b;
}

let rezultat = aduna(2, 3);
```

- `return` dă rezultatul înapoi în locul apelului.

---
layout: default
---

# Array 📚

```js
let fructe = ["măr", "banană", "kiwi"];
```

- Listă ordonată de valori
- Indexul începe de la **0**

---
layout: default
---

# Acces și modificare 🔍

```js
let fructe = ["măr", "banană"];

console.log(fructe[0]); // "măr"

fructe.push("kiwi"); // Adaugă la final
```

---
layout: default
---

# Parcurgere 🔄

```js
let numere = [1, 2, 3];

for (let i = 0; i < numere.length; i++) {
  console.log(numere[i]);
}
```

---
layout: default
---

# ✍️ Exercițiul 1 (ușor)

👉 Creează o funcție care afișează:
"Salut, X!" unde X este un nume primit ca parametru.

---
layout: default
---

# ✔️ Soluție Exercițiul 1

```js
function salut(nume) {
  console.log("Salut, " + nume);
}

salut("Ion");
```

---
layout: default
---

# ✍️ Exercițiul 2 (ușor)

👉 Creează o funcție care dublează un număr primit ca parametru.

Exemplu: `dubleaza(5)` → `10`

---
layout: default
---

# ✔️ Soluție Exercițiul 2

```js
function dubleaza(x) {
  return x * 2;
}

console.log(dubleaza(5));
```

---
layout: default
---

# ✍️ Exercițiul 3 (ușor)

👉 Creează un array cu 5 numere și afișează-le pe rând folosind o buclă.

---
layout: default
---

# ✔️ Soluție Exercițiul 3

```js
let numere = [1, 2, 3, 4, 5];

for (let i = 0; i < numere.length; i++) {
  console.log(numere[i]);
}
```

---
layout: default
---

# ✍️ Exercițiul 4 (mediu)

👉 Afișează doar numerele pare dintr-un array.

---
layout: default
---

# ✔️ Soluție Exercițiul 4

```js
let numere = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numere.length; i++) {
  if (numere[i] % 2 === 0) {
    console.log(numere[i]);
  }
}
```

---
layout: default
---

# ✍️ Exercițiul 5 (mediu)

👉 Creează o funcție care primește un array ca parametru și afișează toate valorile acestuia.

---
layout: default
---

# ✔️ Soluție Exercițiul 5

```js
function afiseaza(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}

afiseaza([10, 20, 30]);
```

---
layout: default
---

# ✍️ Exercițiul 6 (mediu+)

👉 Creează o funcție care calculează suma elementelor dintr-un array.

Exemplu: `[1, 2, 3]` → `6`

---
layout: default
---

# ✔️ Soluție Exercițiul 6

```js
function suma(lista) {
  let total = 0;
  for (let i = 0; i < lista.length; i++) {
    total += lista[i];
  }
  return total;
}

console.log(suma([1, 2, 3]));
```

---
layout: default
---

# 🚀 Mini Proiect

Creează un program care:
1. Are un array cu mai multe nume.
2. Are o funcție care primește un nume și afișează "Salut, [nume]".
3. Parcurge array-ul și apelează funcția pentru fiecare element.

---
layout: default
---

# ✔️ Soluție Mini Proiect

```js
let nume = ["Ana", "Ion", "Maria"];

function saluta(numePersoana) {
  console.log("Salut, " + numePersoana);
}

for (let i = 0; i < nume.length; i++) {
  saluta(nume[i]);
}
```

---
layout: default
---

# 🏁 Recapitulare

<v-clicks>

- **Funcții** = Reutilizare de cod.
- **Parametri și Return** = Esențiale pentru flexibilitate.
- **Array** = Colecție de date.
- **Loop + Array** = Combinația cea mai puternică în JS.

</v-clicks>

---
layout: center
class: text-center
---

# Întrebări? 🤔

Next: Obiecte și DOM 🚀
