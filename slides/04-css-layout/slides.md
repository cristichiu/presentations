---
title: 'CSS Layout: Block vs Inline'
theme: geist
transition: slide-left
layout: cover
color: sky-light
info: 'CSS Layout · 2026'
lineNumbers: true
draw:
  enabled: true
---

# CSS Layout & Proprietatea Display

<div class="mt-4 opacity-80 text-xl">
De la proprietăți de bază la structura paginii
</div>

---
layout: default
---

# 1. Recapitulare CSS

Să ne reamintim conceptele de bază:

*   **Selectori**: Alegem elementele (`h1`, `.clasa`, `#id`).
*   **Stilizare**: Schimbăm culori, fonturi, dimensiuni.
*   **Metode**: Inline, `<style>`, Fișier extern.

---
layout: default
html: |
  <style>
    h1 {
      color: red;
      background-color: yellow;
    }
  </style>
  
  <h1>Salut lume</h1>
---

# Sintaxa CSS

Structura de bază a unei reguli CSS este:
**`Selector { proprietate: valoare; }`**

*   **Selector (`h1`)**: Elementul pe care îl stilizăm.
*   **Proprietate (`color`)**: Ce vrem să schimbăm la el.
*   **Valoare (`red`)**: Cum vrem să arate schimbarea.

<LiveWeb :html="$frontmatter.html" editorHeight="250px" />

<div class="mt-4 p-2 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 text-sm">
  <strong>Notă:</strong> Fiecare proprietate CSS se scrie pe o linie, se separă cu <code>;</code> și toate proprietățile sunt cuprinse între <code>{}</code>.
</div>

---
layout: default
html: |
  <style>
  h1 {
    color: red;
  }
  p {
    color: gray;
    font-style: italic;
  }
  </style>

  <h1>Salut lume</h1>
  <p>Acesta este un paragraf recapitulativ.</p>
---

# Demo: Recapitulare CSS

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# 2. Proprietăți CSS de bază

Înainte de a așeza elementele în pagină, trebuie să știm cum să le controlăm aspectul vizual.

Proprietățile esențiale pe care le vom folosi:
*   `color` & `background-color`
*   `border`
*   `padding` & `margin`
*   `width` & `height`

---
layout: default
---

# Color & Background

*   **`color`**: Schimbă culoarea textului.
*   **`background-color`** (sau `background`): Schimbă culoarea de fundal a elementului.

Putem folosi nume de culori (`red`), coduri Hex (`#ff0000`) sau RGB (`rgb(255, 0, 0)`).

---
layout: default
html: |
  <style>
  h2 { color: darkblue; }
  p { 
    background-color: yellow; 
    color: black; 
  }
  </style>

  <h2>Titlu Colorat</h2>
  <p>Paragraf cu fundal galben.</p>
---

# Demo: Culori și Fundal

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# Border (Bordura)

Proprietatea `border` este o prescurtare pentru trei valori:
1.  **Width**: grosimea (ex: `2px`).
2.  **Style**: stilul (ex: `solid`, `dashed`, `dotted`).
3.  **Color**: culoarea (ex: `red`).

Exemplu: `border: 2px solid blue;`

---
layout: default
html: |
  <style>
  .test {
    border: 3px solid green;
    padding: 10px;
  }
  span {
    border: 1px dashed red;
  }
  </style>

  <div class="test">Un div cu bordură solidă verde</div>
  <br>
  <span>Un span cu bordură punctată roșie</span>
---

# Demo: Borduri

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# Padding & Margin

Esențiale pentru spațiere:
*   **`padding`**: Spațiul **interior** (între conținut și bordură).
*   **`margin`**: Spațiul **exterior** (între element și vecinii săi).

Ambele pot fi setate pe toate părțile (`10px`) sau individual (`margin-top`, `padding-left`, etc.).

---
layout: default
html: |
  <style>
  .box {
    background: gray;
    border: 2px solid black;
    padding: 20px; /* Spațiu înăuntru */
    margin: 30px;  /* Spațiu afară */
  }
  </style>

  <div class="box">Observă spațiul din jurul meu</div>
  <div class="box">Și distanța față de celălalt box</div>
---

# Demo: Padding & Margin

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# Width & Height

Controlăm dimensiunile elementului:
*   **`width`**: Lățimea.
*   **`height`**: Înălțimea.

Putem folosi pixeli (`px`), procente (`%`) sau alte unități.

---
layout: default
html: |
  <style>
  .rect {
    background: coral;
    width: 200px;
    height: 100px;
  }
  </style>

  <div class="rect">200px x 100px</div>
---

# Demo: Dimensiuni

<LiveWeb :html="$frontmatter.html" />

---
layout: default
html: |
  <style>
  .tot {
    color: white;
    background-color: blue;
    border: 2px solid red;
    padding: 10px;
    margin: 15px;
    width: 150px;
    height: 100px;
  }
  </style>

  <div class="tot">Box complet cu proprietăți CSS de bază</div>
---

# Recapitulare Proprietăți

Iată cum se combină toate aceste proprietăți pe un singur element:

<LiveWeb :html="$frontmatter.html" />

---
layout: center
---

# Tranziție către Layout

Acum că știm cum să schimbăm culorile, marginile și dimensiunile elementelor, să vedem cum acestea apar pe pagină și cum putem controla layout-ul lor folosind **display**.
<!-- În web design, layout-ul se referă la modul în care elementele sunt aranjate și distribuite pe o pagină. Practic, layout-ul definește structura vizuală a paginii și felul în care conținutul (texte, imagini, butoane, div-uri etc.) se aliniază, se dimensionează și se poziționează în raport unul cu celălalt. -->

---
layout: default
---

# 3. Block vs Inline (Cum apar elementele)

Fiecare element HTML are un comportament nativ pe pagină:

- **Block**: Ocupă toată lățimea (ca o cărămidă).
- **Inline**: Ocupă doar spațiul textului (ca un cuvânt într-o propoziție).

---
layout: default
---

# 4. Elemente Block

**Caracteristici principale:**

*   Încep mereu pe o **linie nouă**.
*   Ocupă **toată lățimea** disponibilă (100%).
*   Acceptă setări de **lățime (`width`)** și **înălțime (`height`)**.

**Exemple**: `<div>`, `<p>`, `<h1>`, `<ul>`, `<li>`.

---
layout: default
html: |
  <style>
  .blockBox {
    background: blue;
    margin-bottom: 10px;
    padding: 10px;
    border: 2px solid lightblue;
  }
  </style>

  <div class="blockBox">Primul div (Block)</div>
  <div class="blockBox">Al doilea div (Block)</div>
---

# Demo: Elemente Block

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# 5. Elemente Inline

**Caracteristici principale:**

*   **Nu** încep pe o linie nouă (stau unul lângă altul).
*   Ocupă doar **atât cât este nevoie** pentru conținut.
*   **Ignoră** proprietățile `width` și `height`.

**Exemple**: `<span>`, `<a>`, `<strong>`, `<em>`.

---
layout: default
html: |
  <style>
  span {
    background: blue;
    border: 1px solid lightblue;
  }
  </style>

  <p>
    Text normal cu <span>span 1</span> și <span>span 2</span> pe aceeași linie.
  </p>
---

# Demo: Elemente Inline

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# 6. Proprietatea display

Putem schimba comportamentul nativ folosind `display`:

- `display: block` -> Devine cărămidă.
- `display: inline` -> Devine parte din fluxul textului.
- `display: inline-block` -> Hibrid (linie nouă + dimensiuni).

---
layout: default
html: |
  <style>
  span {
    display: block;
    background: blue;
    margin-bottom: 5px;
  }
  </style>

  <span>Element 1 (fost inline)</span>
  <span>Element 2 (fost inline)</span>
---

# Demo: display: block

<LiveWeb :html="$frontmatter.html" />

---
layout: default
html: |
  <style>
  .divInline {
    display: inline;
    background: blue;
    margin: 5px;
  }
  </style>

  <div class="divInline">Div 1</div>
  <div class="divInline">Div 2</div>
---

# Demo: display: inline

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# 7. display: inline-block

Acest tip de afișare ne permite:
1.  Să păstrăm elementele pe **aceeași linie**.
2.  Să le controlăm **lățimea și înălțimea**.

---
layout: default
html: |
  <style>
  .box {
    display: inline-block;
    width: 80px;
    height: 80px;
    background: orange;
    margin: 5px;
  }
  </style>

  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
---

# Demo: inline-block

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# 8. display: none

`display: none` face ca elementul să **dispară complet** din pagină, ca și cum nu ar fi existat (nu mai ocupă loc în layout).

---
layout: default
html: |
  <style>
  .hidden { display: none; }
  </style>

  <p>Text vizibil</p>
  <p class="hidden">Text care a dispărut</p>
  <p>Text vizibil (urcă în locul celui ascuns)</p>
---

# Demo: display: none

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# 9. Exercițiu Practic

**Cerințe:**

1.  Pune cele 3 box-uri pe **aceeași linie**.
2.  Schimbă **culoarea** fundalului.
3.  Adaugă **spațiu** între ele.
4.  **Ascunde** al doilea box folosind o clasă.

---
layout: default
html: |
  <style>
  .box {
    width: 100px;
    height: 100px;
    background: red;
    margin: 10px;
  }
  </style>

  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
---

# Playground: Exercițiu

<LiveWeb :html="$frontmatter.html" />

---
layout: center
---

# Ce urmează?

## **Flexbox** 🚀
Metoda modernă și inteligentă de a crea layout-uri complexe.

---
layout: center
---

# Mulțumesc!

Întrebări?

<div class="mt-10 opacity-60 text-sm">
CSS Course · 2026
</div>
