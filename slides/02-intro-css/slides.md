---
theme: geist
title: 'Introducere în CSS'
transition: slide-left
layout: cover
color: sky-light
info: 'CSS Basics · 2026'
---

# Introducere în CSS
Design, Structură și Cascading

<div class="mt-10 opacity-80">
  Metode de includere | Selectori | Specificitate | Box Model
</div>

---
layout: default
---

# Obiectivele Lecției

La finalul acestei sesiuni, vei putea:

- <span class="i-carbon-chemistry inline-block" /> **Înțelege** ce este CSS și rolul său în web design.
- <span class="i-carbon-plug inline-block" /> **Identifica** cele 3 metode de includere a CSS-ului.
- <span class="i-carbon-select-to-box inline-block" /> **Folosi** corect selectorii (tag, class, id, combinații).
- <span class="i-carbon-chart-score inline-block" /> **Calcula** specificitatea pentru a evita conflictele de stil.
- <span class="i-carbon-box-plot inline-block" /> **Explica** bazele conceptului de Box Model.

---
layout: center
class: text-center
---

# 1. Ce este CSS?

<div class="text-xl opacity-80">Fundamentele stilizării web</div>

---
layout: default
---

# Ce înseamnă CSS?

**Cascading Style Sheets** (Foi de Stil în Cascadă)

- **HTML** = Structură (Oasele)
- **CSS** = Design (Pielea, haine, culori)

### De ce "Cascading"?
Regulile se aplică de sus în jos. Dacă două reguli se bat pe același element, CSS-ul decide care "câștigă" bazându-se pe:
1. Sursă
2. Specificitate
3. Ordinea în cod

<div class="p-4 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 rounded text-sm italic">
  Separarea responsabilităților: HTML se ocupă de <b>CE</b> apare pe pagină, CSS de <b>CUM</b> apare.
</div>

---
layout: default
html: |
  <h1>Titlu de test</h1>
  <p>Acesta este un paragraf simplu care va fi stilizat imediat.</p>

  <style>
  h1 {
    color: #0d6efd;
    text-align: center;
  }
  p {
    color: #6c757d;
    font-style: italic;
    border-left: 4px solid #0d6efd;
    padding-left: 10px;
  }
  /* body { background: white; color: black; } */
  </style>
---

# Demo: De la text la design

Fără CSS, web-ul ar fi doar o listă lungă de text negru pe fundal alb.

<LiveWeb :html="$frontmatter.html" editorHeight="300px" />

---
layout: center
class: text-center
---

# 2. Metode de includere

<div class="text-xl opacity-80">Cum legăm CSS-ul de HTML</div>

---
layout: default
---

# A. Inline CSS (Nerecomandat)

Stilul este scris direct în atributul `style` al elementului HTML.

```html
<p style="color: red; font-size: 20px;">Text stilizat inline</p>
```

### De ce să NU îl folosești?
- <span class="i-carbon-error inline-block text-red-500" /> **Mentenanță grea**: Trebuie să schimbi fiecare element manual.
- <span class="i-carbon-error inline-block text-red-500" /> **Repetiție**: Nu poți refolosi stilul.
- <span class="i-carbon-error inline-block text-red-500" /> **Mizerie în cod**: HTML-ul devine greu de citit.

---
layout: default
---

# B. Internal CSS

Stilul este scris în interiorul etichetei `<style>`, de obicei în `<head>`.

```html
<head>
  <style>
    p { color: blue; }
  </style>
</head>
```

### Când este util?
- Pentru pagini web de tip "One-page" (Landings).
- Când vrei să trimiți un singur fișier HTML (ex: email-uri).
- **Limitare**: Stilul este valabil DOAR pentru pagina curentă.

---
layout: default
---

# C. External CSS (Standardul Profesional)

Stilul este scris într-un fișier separat `.css` și legat în HTML prin `<link>`.

```html
<link rel="stylesheet" href="style.css">
```

### De ce este varianta câștigătoare?
- <span class="i-carbon-checkmark-filled inline-block text-green-500" /> **Reutilizare**: Un singur fișier CSS poate stiliza 100 de pagini.
- <span class="i-carbon-checkmark-filled inline-block text-green-500" /> **Performanță**: Browserul salvează fișierul în cache.
- <span class="i-carbon-checkmark-filled inline-block text-green-500" /> **Curățenie**: HTML curat, CSS organizat.

---
layout: default
---

# Comparație: Metode de includere

| Metodă | Unde se scrie | Reutilizabil? | Profesional? |
| :--- | :--- | :--- | :--- |
| **Inline** | Direct pe element (`style="..."`) | Nu | <span class="i-carbon-close-filled inline-block text-red-500" /> |
| **Internal** | În eticheta `<style>` (în head) | Doar pe pagina respectivă | <span class="i-carbon-warning-filled inline-block text-orange-500" /> |
| **External** | Fișier separat `.css` | **DA (pe tot site-ul)** | <span class="i-carbon-checkmark-filled inline-block text-green-500" /> |

---
layout: center
class: text-center
---

# 3. Selectori CSS

<div class="text-xl opacity-80">Cum "țintim" elementele</div>

---
layout: default
html: |
  <p>Paragraf 1</p>
  <p>Paragraf 2</p>
  <button>Click me</button>

  <style>
  p {
    color: coral;
  }
  button {
    background: black;
    color: white;
  }
  </style>
---

# Selector după Tag (Element)

Selectează toate elementele de un anumit tip.

<LiveWeb :html="$frontmatter.html" editorHeight="250px" />

**Risc**: Se aplică global. Dacă vrei ca doar un paragraf să fie diferit, acest selector nu te ajută.

---
layout: default
html: |
  <p class="error">Câmp obligatoriu!</p>
  <p>Un paragraf normal.</p>
  <span class="error">Altă eroare</span>

  <style>
  .error {
    color: white;
    background: red;
    padding: 5px;
    border-radius: 4px;
  }
  </style>
---

# Selector după Clasă (`.class`)

Cea mai flexibilă și folosită metodă. Poți folosi aceeași clasă pe mai multe elemente.

<LiveWeb :html="$frontmatter.html" editorHeight="250px" />

---
layout: default
html: |
  <nav id="main-nav">
    Link 1 | Link 2
  </nav>

  <style>
  #main-nav {
    color: black;
    background: #eee;
    padding: 20px;
    border-bottom: 2px solid #ccc;
  }
  </style>
---

# Selector după ID (`#id`)

Un ID trebuie să fie **unic** în pagină. Se folosește pentru elemente singulare (ex: Header, Main Content).

<LiveWeb :html="$frontmatter.html" editorHeight="250px" />

<div class="p-4 bg-orange-100 dark:bg-orange-900 border-l-4 border-orange-500 rounded text-sm italic">
  ID-urile au prioritate foarte mare, ceea ce poate face CSS-ul greu de suprascris ulterior. Folosește-le cu moderație!
</div>

---
layout: default
html: |
  <div>
    <p>Eu sunt copil direct.</p>
    <section>
      <p>Eu sunt un descendent (nepot).</p>
    </section>
  </div>

  <style>
  div > p { color: blue; font-weight: bold; }
  div p { text-decoration: underline; }
  </style>
---

# Selectori Combinați

Specificăm relația dintre elemente.

### 1. Descendent (`div p`)
Selectează toți `p` din interiorul unui `div`, indiferent cât de adânc sunt.

### 2. Child Direct (`div > p`)
Selectează doar `p` care sunt copiii direcți ai `div`.

<LiveWeb :html="$frontmatter.html" editorHeight="250px" />

---
layout: center
class: text-center
---

# 4. Specificitate

<div class="text-xl opacity-80">Când regulile intră în conflict</div>

---
layout: default
---

# Sistemul de punctaj

Dacă avem mai mulți selectori pentru același element, browserul calculează punctajul:

1.  **Inline Style**: 1000 puncte
2.  **ID (`#`)**: 100 puncte
3.  **Class (`.`)**: 10 puncte
4.  **Tag**: 1 punct

### Exemplu de conflict:
```css
p { color: blue; }           /* 1 punct */
.text { color: red; }        /* 10 puncte */
#main { color: green; }      /* 100 puncte */
```

Dacă un element are toate trei, va fi **verde**.

---
layout: default
html: |
  <p id="alert" class="warning">Cine mă colorează?</p>

  <style>
  p { color: black; }
  .warning { color: orange; }
  #alert { color: red; }
  </style>
---

# Specificitate în acțiune

Cine crezi că va câștiga aici?

<LiveWeb :html="$frontmatter.html" editorHeight="250px" />

<div class="p-4 bg-green-100 dark:bg-green-900 border-l-4 border-green-500 rounded text-sm italic">
  Dacă punctajul este egal, câștigă ultima regulă scrisă în cod.
</div>

---
layout: center
class: text-center
---

# 5. Mini Exercițiu

<div class="text-xl opacity-80">Pune în practică selectorii</div>

---
layout: default
---

# 📝 Exercițiu

Se dă următorul HTML. Scrie CSS-ul necesar pentru:
1.  Face `h1` de culoare albastră.
2.  Face doar **primul paragraf** roșu (folosind clasa).
3.  Face paragraful din interiorul `div`-ului verde.

```html
<h1>Titlu Lecție</h1>
<p class="accent">Paragraf 1 (Vreau să fiu roșu)</p>
<p>Paragraf 2 (Normal)</p>
<div class="container">
  <p>Paragraf inside div (Vreau să fiu verde)</p>
</div>
```

---
layout: default
html: |
  <h1>Titlu Lecție</h1>
  <p class="accent">Paragraf 1 (Vreau să fiu roșu)</p>
  <p>Paragraf 2 (Normal)</p>
  <div class="container">
    <p>Paragraf inside div (Vreau să fiu verde)</p>
  </div>

  <style>
  h1 { color: blue; }

  .accent { color: red; }

  .container p { color: green; }
  </style>
---

# ✅ Soluție Exercițiu

Iată cum ar trebui să arate selectorii tăi:

<LiveWeb :html="$frontmatter.html" editorHeight="300px" />

---
layout: center
class: text-center
---

# 6. Introducere Box Model

<div class="text-xl opacity-80">Fiecare element este o cutie</div>

---
layout: default
---

# Anatomia unei "Cutii" CSS

Toate elementele HTML sunt considerate dreptunghiuri formate din 4 straturi:

1.  **Content**: Textul sau imaginea propriu-zisă.
2.  **Padding**: Spațiul din interiorul cutiei (între text și bordură).
3.  **Border**: Bordura cutiei.
4.  **Margin**: Spațiul din exteriorul cutiei (între această cutie și vecini).

<div class="p-4 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 rounded text-sm italic">
  Padding-ul adaugă spațiu în interior (mărește fundalul), Margin-ul adaugă spațiu în exterior.
</div>

---
layout: default
html: |
  <div class="box">Box Model</div>
  <div class="box">Altă Cutie</div>

  <style>
  .box {
    color: black;
    background: gold;
    width: 200px;
    
    /* Spațiu la interior */
    padding: 20px;
    
    /* Marginea vizibilă */
    border: 5px solid red;
    
    /* Spațiu la exterior */
    margin: 30px;
    
    font-family: sans-serif;
    text-align: center;
  }
  </style>
---

# Box Model Demo

Vizualizează straturile:

<LiveWeb :html="$frontmatter.html" editorHeight="300px" />

---
layout: default
---

# 🏁 Recapitulare

Astăzi am învățat:
- **3 metode de includere**: Inline (Rău), Internal (Oarecum), **External (Ideal)**.
- **Selectori**: Tag, `.Class`, `#ID` și combinații.
- **Specificitate**: Ordinea de prioritate (ID > Class > Tag).
- **Box Model**: Content -> Padding -> Border -> Margin.

---
layout: default
---

# 🏠 Homework

Creează o pagină "Despre mine" care să conțină:
1.  Un **Header** (`<h1>`) cu numele tău (folosește un ID).
2.  Trei paragrafe despre hobby-urile tale.
3.  Cel puțin două paragrafe trebuie să aibă clasa `.info` care să le dea un fundal gri deschis.
4.  Un `div` numit "Card de contact" care să aibă:
    - `border: 1px solid black`
    - `padding: 20px`
    - `margin: 10px`
5.  **Bonus**: Folosește un selector combinat pentru a schimba culoarea textului dintr-un link aflat în interiorul unui paragraf.

---
layout: cover
---

# Succes la codat!
Ne vedem la cursul următor.
