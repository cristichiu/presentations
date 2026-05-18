---
title: 'JavaScript — Fetch API, Promises si Async/Await'
theme: neversink
transition: slide-left
layout: cover
color: coral-light
info: 'JS Basics · 2026'
lineNumbers: true
draw:
  enabled: true
---

# JavaScript
## Fetch API, Promises si Async/Await

<div class="text-xl mt-4 opacity-70">Lectia 11 · Modul 4 — JavaScript modern si async</div>

---
layout: section
color: coral-light
---

# Problema codului asincron
De ce JavaScript are nevoie de un model special

---

## Codul sincron — linie cu linie

Pana acum, tot codul pe care l-am scris a fost **sincron**:

```js
let a = 5
let b = 10
let suma = a + b
console.log(suma)   // 15
```

<v-click>

Fiecare linie asteapta ca cea anterioara sa termine.  
Simplu, predictibil, usor de urmarit.

</v-click>

<v-click>

**Dar ce se intampla cand vrem date de pe un server?**

```js
// Vrem sa luam date de pe internet
let date = cereDeServere("https://api.example.com/date")
// Serverul e in alta tara, raspunsul vine in 300ms
// In tot acest timp... ce face browserul? Asteapta?
console.log(date)   // ???
```

</v-click>

---

## Problema — blocarea browserului

Daca JavaScript ar astepta raspunsul de la server **blocat**:

<v-clicks>

- Pagina devine **inghetata** — nu mai raspunde la click-uri
- Animatiile se **opresc**
- Utilizatorul nu poate face **nimic** pana vine raspunsul
- O experienta complet inutilizabila

</v-clicks>

<v-click>

> **Solutia**: JavaScript trimite cererea si **continua** sa execute alt cod.  
> Cand raspunsul soseste, o functie speciala este apelata cu datele.  
> Acesta este modelul **asincron**.

</v-click>

---

## Modelul asincron — cum functioneaza

```
1. JS trimite cererea catre server
2. JS CONTINUA sa execute restul codului (nu asteapta)
3. ... timp trece, serverul proceseaza cererea ...
4. Raspunsul soseste
5. JS apeleaza functia noastra cu datele primite
```

<v-click>

**Un exemplu familiar — `setTimeout`:**

```js
console.log("1 — inainte")

setTimeout(function() {
  console.log("3 — dupa 2 secunde")
}, 2000)

console.log("2 — imediat dupa setTimeout")

// Output:
// "1 — inainte"
// "2 — imediat dupa setTimeout"
// (2 secunde mai tarziu...)
// "3 — dupa 2 secunde"
```

> `setTimeout` nu blocheaza — inregistreaza un callback si continua.  
> `fetch()` functioneaza la fel, dar cu raspunsul unui server.

</v-click>

---
layout: section
color: coral-light
---

# JSON
Formatul de date universal

---

## Ce este JSON?

**JSON** (JavaScript Object Notation) este formatul standard pentru schimbul de date intre browser si server.

```json
{
  "nume": "Ion",
  "varsta": 25,
  "oras": "Cluj",
  "hobby": ["lectura", "ciclism"],
  "adresa": {
    "strada": "Mihai Eminescu",
    "numar": 10
  }
}
```

<v-click>

JSON arata ca un obiect JavaScript, dar cu mici diferente:
- **Toate cheile** trebuie sa fie intre ghilimele duble
- Nu poate contine functii
- Este in esenta **text** — un string formatat special

</v-click>

---

## Conversia intre JSON si JavaScript

```js
// Obiect JavaScript → JSON string (pentru a trimite la server)
let utilizator = { nume: "Ion", varsta: 25 }
let jsonString = JSON.stringify(utilizator)
console.log(jsonString)          // '{"nume":"Ion","varsta":25}'
console.log(typeof jsonString)   // "string"

// JSON string → Obiect JavaScript (dupa ce primim de la server)
let jsonPrimit = '{"nume":"Ana","varsta":28,"activ":true}'
let obiect = JSON.parse(jsonPrimit)
console.log(obiect.nume)    // "Ana"
console.log(obiect.varsta)  // 28
console.log(typeof obiect)  // "object"
```

<v-click>

> In practica, `fetch()` face conversia JSON → obiect **automat** cu metoda `.json()`.  
> Vei folosi `JSON.stringify` cand **trimiti** date la server.

</v-click>

---
layout: section
color: coral-light
---

# Promises
Cum JavaScript gestioneaza operatiile asincrone

---

## Ce este o Promise?

O **Promise** este un obiect care reprezinta o valoare care **nu este inca disponibila**, dar va fi in viitor.

```js
// fetch() returneaza o Promise
let promise = fetch("https://api.example.com/date")
console.log(promise)   // Promise { <pending> }
// Nu avem datele inca — promise e "in asteptare"
```

<v-click>

O Promise are trei stari posibile:

```
pending   → in asteptare (cererea a fost trimisa, raspunsul nu a sosit)
fulfilled → rezolvata cu succes (am primit raspunsul)
rejected  → respinsa cu eroare (retea cazuta, server eroare, etc.)
```

</v-click>

---

## `.then()` si `.catch()` — gestionam Promise-ul

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(function(response) {
    // Acest callback ruleaza cand serverul a raspuns
    // response contine informatii despre raspuns (status, headers, etc.)
    return response.json()   // convertim body-ul din JSON in obiect JS
    // .json() returneaza si EA o Promise!
  })
  .then(function(data) {
    // Acum avem datele ca obiect JavaScript
    console.log(data.name)
    console.log(data.email)
  })
  .catch(function(eroare) {
    // Acest callback ruleaza daca ceva a mers gresit
    console.log("Eroare:", eroare)
  })
```

<v-click>

> Fiecare `.then()` primeste rezultatul celui anterior.  
> `.catch()` prinde erorile de oriunde din lant.

</v-click>

---

## De ce doua `.then()`?

```js
fetch(url)
  .then(response => response.json())   // pasul 1: convertim raspunsul
  .then(data => console.log(data))     // pasul 2: folosim datele
```

<v-click>

`fetch()` returneaza o Promise cu un obiect `Response` — informatii despre raspunsul HTTP.  
`response.json()` citeste **corpul** raspunsului si il converteste — si **aceasta** returneaza o Promise.  
De aceea avem doua `.then()` — unul pentru fiecare Promise.

```js
// Cu verificarea statusului — buna practica
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Eroare HTTP: ${response.status}`)
    }
    return response.json()
  })
  .then(data => console.log(data))
  .catch(eroare => console.log("Ceva a mers gresit:", eroare.message))
```

</v-click>

---
layout: section
color: coral-light
---

# `async` / `await`
Sintaxa moderna pentru cod asincron

---

## Problema cu `.then()` — callback hell

```js
// Cu .then() — devine greu de citit la operatii complexe
fetch(url1)
  .then(r => r.json())
  .then(data1 => {
    return fetch(url2 + data1.id)
      .then(r => r.json())
      .then(data2 => {
        return fetch(url3 + data2.id)
          // ... si tot asa
      })
  })
```

<v-click>

**`async/await`** — scriem cod asincron care **arata ca sincron**:

```js
async function incarcaDate() {
  let data1 = await fetch(url1).then(r => r.json())
  let data2 = await fetch(url2 + data1.id).then(r => r.json())
  let data3 = await fetch(url3 + data2.id).then(r => r.json())
  console.log(data3)
}
```

> Mult mai clar — citim de sus in jos ca si cand ar fi sincron.

</v-click>

---

## `async` si `await` — cum functioneaza

```js
// async — marcheaza o functie ca "asincrone"
// O functie async returneaza INTOTDEAUNA o Promise
async function incarcaUtilizator() {

  // await — "asteapta" rezolvarea unei Promise inainte sa continui
  // OPRESTE executia DOAR in interiorul functiei async, nu blocheaza browserul
  let response = await fetch("https://jsonplaceholder.typicode.com/users/1")
  let utilizator = await response.json()

  console.log(utilizator.name)    // "Leanne Graham"
  console.log(utilizator.email)   // "Sincere@april.biz"

  return utilizator   // returnat ca Promise rezolvata
}

// Apelam functia async
incarcaUtilizator()
```

---

## Gestionarea erorilor cu `try/catch`

```js
async function incarcaDate(id) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`)
    }

    let date = await response.json()
    return date

  } catch (eroare) {
    // Prinde orice eroare: retea cazuta, JSON invalid, etc.
    console.log("Eroare la incarcare:", eroare.message)
    return null
  }
}

async function main() {
  let utilizator = await incarcaDate(1)
  if (utilizator) {
    console.log(`Utilizator: ${utilizator.name}`)
  }
}

main()
```

---

## `.then()` vs `async/await` — comparatie

```js
// Aceeasi operatie — doua stiluri

// Cu .then()
function cuThen() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(r => r.json())
    .then(post => console.log(post.title))
    .catch(e => console.log("Eroare:", e))
}

// Cu async/await
async function cuAwait() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let post = await response.json()
    console.log(post.title)
  } catch(e) {
    console.log("Eroare:", e)
  }
}
```

<v-click>

> In practica moderna, **`async/await` este preferat** pentru claritate.  
> `.then()` apare in cod mai vechi sau pentru operatii paralele simple.

</v-click>

---
layout: section
color: coral-light
---

# Exercitiu 1 — primul fetch

---

## Exercitiu 1

API-ul `https://jsonplaceholder.typicode.com` ofera date de test gratuit.

Scrie o functie `async` care:
1. Incarca lista de utilizatori de la `/users`
2. Afiseaza in consola numele si emailul fiecaruia
3. Afiseaza cati utilizatori sunt in total

```js
// Endpoint: https://jsonplaceholder.typicode.com/users
// Returneaza un array de obiecte cu: id, name, email, address, company, etc.
```

<v-click>

**Rezolvare:**

```js
async function incarcaUtilizatori() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let utilizatori = await response.json()

    console.log(`Total utilizatori: ${utilizatori.length}`)

    utilizatori.forEach(u => {
      console.log(`${u.name} — ${u.email}`)
    })
  } catch (e) {
    console.log("Eroare:", e.message)
  }
}

incarcaUtilizatori()
```

</v-click>

---
layout: section
color: coral-light
---

# Afisarea datelor din API in DOM
Pattern-ul complet

---

## De la fetch la DOM — fluxul complet

```js
async function afiseazaPostari() {
  // 1. Selectam containerul din DOM
  let container = document.querySelector("#postari")
  container.innerHTML = "<p>Se incarca...</p>"

  try {
    // 2. Cerem datele
    let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    let postari = await response.json()

    // 3. Golim indicatorul de incarcare
    container.innerHTML = ""

    // 4. Generam elementele DOM
    postari.forEach(post => {
      let div = document.createElement("div")
      div.classList.add("card")

      let titlu = document.createElement("h3")
      titlu.textContent = post.title

      let corp = document.createElement("p")
      corp.textContent = post.body

      div.appendChild(titlu)
      div.appendChild(corp)
      container.appendChild(div)
    })

  } catch (e) {
    container.innerHTML = `<p class="eroare">Nu s-au putut incarca datele.</p>`
  }
}
```

---

## Declansare la eveniment — buton de incarcare

```js
let buton = document.querySelector("#btn-incarca")
let container = document.querySelector("#rezultate")

buton.addEventListener("click", async function() {
  // Dezactivam butonul cat timp se incarca
  buton.disabled = true
  buton.textContent = "Se incarca..."
  container.innerHTML = ""

  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let utilizatori = await response.json()

    utilizatori.forEach(u => {
      let p = document.createElement("p")
      p.textContent = `${u.name} — ${u.company.name}`
      container.appendChild(p)
    })

  } catch (e) {
    container.textContent = "Eroare la incarcare."
  } finally {
    // finally ruleaza INTOTDEAUNA, indiferent de succes sau eroare
    buton.disabled = false
    buton.textContent = "Incarca"
  }
})
```

---

## Trimiterea de date la server — metoda POST

Pana acum am **cerut** date (GET). Putem si **trimite** date (POST):

```js
async function creeazaPostare(titlu, continut) {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",                    // metoda HTTP
      headers: {
        "Content-Type": "application/json"  // spunem serverului ce trimitem
      },
      body: JSON.stringify({             // convertim obiectul in JSON string
        title: titlu,
        body: continut,
        userId: 1
      })
    })

    let rezultat = await response.json()
    console.log("Creat cu id:", rezultat.id)
    return rezultat

  } catch (e) {
    console.log("Eroare la creare:", e.message)
  }
}

creeazaPostare("Titlul meu", "Continutul postarii")
```

---
layout: section
color: coral-light
---

# Exercitii

---

## Exercitiu 2 — fetch cu filtrare

**HTML:**
```html
<input type="text" id="input-user" placeholder="ID utilizator (1-10)">
<button id="btn-cauta">Cauta</button>
<div id="profil"></div>
```

La click pe buton, incarca datele utilizatorului cu ID-ul din input si afiseaza:
- Numele complet
- Emailul
- Orasul
- Compania

Trateaza cazul in care ID-ul nu exista (status 404).

<v-click>

```js
document.querySelector("#btn-cauta").addEventListener("click", async function() {
  let id = document.querySelector("#input-user").value
  let profil = document.querySelector("#profil")
  profil.innerHTML = "Se incarca..."
  try {
    let r = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!r.ok) throw new Error("Utilizatorul nu exista")
    let u = await r.json()
    profil.innerHTML = `<h3>${u.name}</h3><p>${u.email}</p><p>${u.address.city}</p><p>${u.company.name}</p>`
  } catch(e) {
    profil.innerHTML = `<p class="eroare">${e.message}</p>`
  }
})
```

</v-click>

---

## Exercitiu 3 — lista de postari cu filtrare

Incarca toate postarile de la `https://jsonplaceholder.typicode.com/posts` (sunt 100).

1. Afiseaza primele 10 in pagina, fiecare cu titlu si un preview din body (primele 80 de caractere + "...")
2. Adauga un input de cautare care filtreaza postarile afisate dupa titlu in timp real
3. Afiseaza numarul de rezultate gasite

```js
// Hint: incarca datele o singura data, stocheaza-le intr-o variabila,
// si la fiecare input re-randeaza din variabila filtrata
```

<v-click>

```js
let toatePostarile = []
const container = document.querySelector("#postari")
const input = document.querySelector("#cautare")
const counter = document.querySelector("#counter")

async function init() {
  let r = await fetch("https://jsonplaceholder.typicode.com/posts")
  toatePostarile = await r.json()
  randeaza(toatePostarile.slice(0, 10))
}

function randeaza(lista) {
  container.innerHTML = ""
  counter.textContent = `${lista.length} rezultate`
  lista.forEach(p => {
    let div = document.createElement("div")
    div.innerHTML = `<h3>${p.title}</h3><p>${p.body.slice(0, 80)}...</p>`
    container.appendChild(div)
  })
}

input.addEventListener("input", e => {
  let termen = e.target.value.toLowerCase()
  randeaza(toatePostarile.filter(p => p.title.includes(termen)))
})

init()
```

</v-click>

---
layout: section
color: coral-light
---

# `localStorage`
Persistenta datelor in browser

---

## Ce este `localStorage`?

`localStorage` permite stocarea datelor **direct in browser** — persistente chiar si dupa inchiderea tab-ului.

```js
// Stocam o valoare
localStorage.setItem("tema", "dark")

// Citim o valoare
let tema = localStorage.getItem("tema")
console.log(tema)   // "dark"

// Stergem o valoare
localStorage.removeItem("tema")

// Stergem tot
localStorage.clear()
```

<v-click>

**Limitare importanta**: `localStorage` stocheaza doar **stringuri**.  
Pentru obiecte si array-uri trebuie sa convertim cu `JSON.stringify` si `JSON.parse`.

```js
let setari = { tema: "dark", limba: "ro", notificari: true }
localStorage.setItem("setari", JSON.stringify(setari))

let setariSalvate = JSON.parse(localStorage.getItem("setari"))
console.log(setariSalvate.tema)   // "dark"
```

</v-click>

---

## To-do list cu persistenta

```js
// Incarcam sarcinile salvate (sau array gol daca nu exista)
function incarcaSarcini() {
  let salvate = localStorage.getItem("sarcini")
  return salvate ? JSON.parse(salvate) : []
}

// Salvam sarcinile la fiecare modificare
function salveazaSarcini(sarcini) {
  localStorage.setItem("sarcini", JSON.stringify(sarcini))
}

let sarcini = incarcaSarcini()

function adaugaSarcina(text) {
  sarcini.push({ text, finalizata: false })
  salveazaSarcini(sarcini)
  randeaza()
}

function toggleSarcina(index) {
  sarcini[index].finalizata = !sarcini[index].finalizata
  salveazaSarcini(sarcini)
  randeaza()
}

// Acum sarcinile persista intre reincarcari ale paginii!
```

---
layout: section
color: coral-light
---

# Recapitulare

---

## Ce am invatat azi

<v-clicks>

- **Cod asincron** — JavaScript nu blocheaza, trimite cereri si continua
- **JSON** — formatul de date universal; `JSON.stringify()` si `JSON.parse()`
- **Promise** — obiect care reprezinta o valoare viitoare: `pending`, `fulfilled`, `rejected`
- **`.then()`** — callback apelat la succes; **`.catch()`** — callback apelat la eroare
- **`async`** — marcheaza o functie ca asincrone; returneaza intotdeauna o Promise
- **`await`** — asteapta o Promise in interiorul unei functii `async`
- **`try/catch`** — gestionarea erorilor cu `async/await`
- **`finally`** — ruleaza intotdeauna, indiferent de succes sau eroare
- **Fetch GET** — `fetch(url)` → `.then(r => r.json())` → date
- **Fetch POST** — `fetch(url, { method, headers, body })`
- **`localStorage`** — persistenta datelor in browser; doar stringuri

</v-clicks>

---

## Tema pentru acasa

Construieste o pagina **"Explorare API"** care:

1. La incarcare, afiseaza o lista de utilizatori din `jsonplaceholder.typicode.com/users`
2. Click pe un utilizator → incarca si afiseaza postarile lui (`/posts?userId=X`)
3. Click pe o postare → incarca si afiseaza comentariile ei (`/comments?postId=X`)
4. Adauga un buton "Inapoi" la fiecare nivel pentru a reveni la nivelul anterior
5. **Bonus**: Salveaza in `localStorage` ultimul utilizator vizualizat si la reincarcarea paginii, afiseaza direct postarile lui

---
layout: cover
color: coral-light
---

# Intrebari?

<div class="text-xl mt-6 opacity-80">
  Lectia 12: Proiect final — aplicatie completa cu toate conceptele invatate
</div>

<div class="text-sm mt-4 opacity-50">JS Basics · Lectia 11 din 12</div>
