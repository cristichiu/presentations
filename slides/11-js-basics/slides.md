---
title: 'Bazele JavaScript - Consolidare'
theme: neversink
transition: slide-left
layout: cover
color: sky-light
info: 'JS Basics · 2026'
lineNumbers: true
draw:
  enabled: true
---

# Bazele JavaScript 🧩
## Consolidare: Variabile, Condiții, Bucle

<div class="mt-4 opacity-80">
O lecție interactivă pentru începători
</div>

---
layout: default
---

# Ce este JavaScript? 🌐

JavaScript este limbajul care aduce **interactivitate** paginilor web.

<v-clicks>

- **Limbaj de programare:** Spune browserului ce să facă.
- **Rulează peste tot:** În browser (Chrome, Firefox), pe server (Node.js), chiar și pe roboți.
- **Ecosistem uriaș:** Cel mai popular limbaj din lume.

</v-clicks>

<div v-click class="mt-8 p-4 bg-blue-100 dark:bg-blue-900 rounded">
💡 Fără JavaScript, web-ul ar fi doar text și imagini statice!
</div>

---
layout: default
---

# Variabile (Recapitulare) 📦

Variabilele sunt ca niște „containere” în care stocăm date.

```js {all|1|2|all}
let nume = "Ana";    // Se poate schimba ulterior
const varsta = 20;   // Rămâne constantă (nu se schimbă)
```

<v-clicks>

- <span class="text-blue-500 font-bold">let</span> - folosim când valoarea se va schimba (ex: scorul unui joc).
- <span class="text-red-500 font-bold">const</span> - folosim implicit pentru siguranță.
- <span class="opacity-50 line-through">var</span> - stil vechi, evită-l în codul modern!

</v-clicks>

---
layout: default
---

# Tipuri de date 🧪

În JavaScript, cele mai folosite tipuri sunt:

<v-clicks>

- **Number:** `let x = 10;` sau `let pret = 19.99;`
- **String:** `let text = "Salut!";` (ghilimele simple sau duble)
- **Boolean:** `let activ = true;` (doar `true` sau `false`)

</v-clicks>

<div v-click class="mt-8">
### ❓ Întrebare rapidă
Ce tip este valoarea: `"123"`?

<v-click>
> **Răspuns:** Este un **String**, deoarece este între ghilimele!
</v-click>
</div>

---
layout: default
---

# Structuri Condiționale (if) 🚦

Permit execuția codului doar dacă o condiție este adevărată.

```js {all|3|4-6|all}
let varsta = 18;

if (varsta >= 18) {
  console.log("Ești major! ✅");
}
```

<v-clicks>

- **if (condiție):** Verifică dacă ceva e adevărat.
- **bloc de cod { ... }:** Ce se întâmplă dacă e adevărat.

</v-clicks>

---
layout: default
---

# Extinderea: if + else 🌓

Ce facem dacă condiția este falsă?

```js {all|5-7|all}
let varsta = 16;

if (varsta >= 18) {
  console.log("Major");
} else {
  console.log("Minor");
}
```

<v-click>
Codul din `else` se execută **doar** dacă condiția din `if` a fost falsă.
</v-click>

---
layout: default
---

# Mai multe opțiuni: else if 🌈

```js {all|3-4|5-6|7-8|all}
let nota = 8;

if (nota >= 9) {
  console.log("Excelent 🌟");
} else if (nota >= 7) {
  console.log("Bine 👍");
} else {
  console.log("Mai încearcă 📚");
}
```

---
layout: default
---

# ✍️ Exercițiu Practic

👉 Scrie un program care verifică dacă un număr este **pozitiv** sau **negativ**.

**Hint:**
```js
let numar = -5;

if (numar > 0) {
  // cod aici
} else {
  // cod aici
}
```

<v-click>

**Soluție probabilă:**
```js
if (numar >= 0) {
  console.log("Numărul este pozitiv");
} else {
  console.log("Numărul este negativ");
}
```

</v-click>

---
layout: default
---

# Bucle (For Loop) 🔄

Repetă o acțiune de mai multe ori.

```js {all|1|2|all}
for (let i = 0; i < 5; i++) {
  console.log("Pasul: " + i);
}
```

<v-clicks>

1. **Inițializare:** `let i = 0` (de unde începem?)
2. **Condiție:** `i < 5` (până când continuăm?)
3. **Incrementare:** `i++` (ce facem după fiecare pas?)

</v-clicks>

---
layout: default
---

# Vizualizare pas cu pas 👀

`for (let i = 0; i < 3; i++)`

<v-clicks>

- 🏁 **Start:** `i = 0`. Este `0 < 3`? DA. Afișează `0`. `i++` (i devine 1).
- 🔄 **Pas 2:** `i = 1`. Este `1 < 3`? DA. Afișează `1`. `i++` (i devine 2).
- 🔄 **Pas 3:** `i = 2`. Este `2 < 3`? DA. Afișează `2`. `i++` (i devine 3).
- 🛑 **Stop:** `i = 3`. Este `3 < 3`? NU. Ieșim din buclă.

</v-clicks>

---
layout: default
---

# Exemple de bucle 💡

Afișarea numerelor de la 1 la 10:

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

---
layout: default
---

# ✍️ Exercițiu Practic

👉 Modifică bucla anterioară pentru a afișa **doar numerele pare** între 1 și 10.

*Hint: Poți folosi `i = i + 2` în loc de `i++` sau o condiție `if` în interior.*

<v-click>

**Soluție (cu if):**
```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

</v-click>

---
layout: default
---

# Combinarea Conceptelor: if + for 🧩

Putem pune orice în interiorul unei bucle, inclusiv condiții complexe.

```js {all|2|3|all}
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i + " este divizibil cu 3");
  }
}
```

<v-click>

### Operatorul Modulo (%)
Returnează restul împărțirii.
- `10 % 2` este `0` (par)
- `10 % 3` este `1`

</v-click>

---
layout: default
---

# ✍️ Exercițiu Practic

👉 Afișează toate numerele de la 1 la 20, dar pentru cele divizibile cu 5, afișează "Magic!".

<v-click>

**Soluție:**
```js
for (let i = 1; i <= 20; i++) {
  if (i % 5 === 0) {
    console.log("Magic!");
  } else {
    console.log(i);
  }
}
```

</v-click>

---
layout: default
---

# 🚀 Mini Proiect (5-10 min)

**Provocare:** Creează un program care "evaluează" numerele de la 1 la 10.

Cerințe:
1. Folosește o buclă `for` pentru numerele 1 -> 10.
2. Pentru fiecare număr, verifică dacă este par sau impar.
3. Afișează în consolă: `"Numărul X este par"` sau `"Numărul X este impar"`.

---
layout: default
---

# 🏁 Recapitulare Finală

Ce am învățat astăzi?

<v-clicks>

- **Variabile:** `let` și `const` pentru a salva date.
- **Tipuri:** String, Number, Boolean.
- **Condiții:** `if`, `else if`, `else` pentru a lua decizii.
- **Bucle:** `for` pentru a repeta codul eficient.

</v-clicks>

<v-motion
  :initial="{ opacity: 0, y: 100 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 1000 } }"
  class="mt-10 text-center text-2xl font-bold text-green-600"
>
  Felicitări! Ai făcut un pas mare în JavaScript! 🎉
</v-motion>

---
layout: center
class: text-center
---

# Întrebări? 🤔

Găsești resurse suplimentare pe [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).
