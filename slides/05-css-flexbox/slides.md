---
title: 'CSS Layout: De la Block la Flexbox'
theme: geist
transition: slide-left
layout: cover
color: sky-light
info: 'CSS Flexbox · 2026'
lineNumbers: true
draw:
  enabled: true
---

# De la Block la Flexbox

<div class="mt-4 opacity-80 text-xl">
Recapitulare + primul layout modern
</div>

---
layout: default
---

# 1. Recapitulare rapidă CSS

Structura de bază:

**`selector { proprietate: valoare; }`**

```css
p {
  color: red;
}
```

- `p` → elementul
- `color` → proprietatea
- `red` → valoarea

---
layout: default
---

# 2. Recap: Block vs Inline

### Block
- ocupă toată lățimea
- începe pe linie nouă

### Inline
- stă pe aceeași linie
- ocupă doar cât are nevoie

---
layout: default
html: |
  <style>
  .block {
    background: blue;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  span {
    background: orange;
  }
  </style>

  <div class="block">Block 1</div>
  <div class="block">Block 2</div>

  <p>
    Text <span>inline 1</span> și <span>inline 2</span>
  </p>
---

# Demo: Block vs Inline

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# Problema

Cu block și inline:

- greu de centrat  
- greu de pus pe aceeași linie controlat  
- greu de făcut layout-uri reale  

Avem nevoie de ceva mai puternic.

---
layout: center
---

# Soluția

## Flexbox

---
layout: default
---

# 3. Ce este Flexbox?

Flexbox este un sistem de layout modern.

Ne ajută să:
- aliniem elemente
- controlăm spațiul
- construim layout-uri ușor

---
layout: default
---

# 4. Conceptul cheie

## Flex Container vs Flex Items

Trebuie să înțelegi acest lucru foarte bine.

---
layout: default
---

# Flex Container

Este elementul părinte.

Activăm Flexbox pe el:

```css
.container {
  display: flex;
}
```

---
layout: default
---

# Flex Items

Sunt copiii containerului.

Toate elementele din interior devin automat:
**flex items**

---
layout: default
html: |
  <style>
  .container {
    display: flex;
    background: lightgray;
  }

  .box {
    background: blue;
    color: white;
    padding: 10px;
    margin: 5px;
  }
  </style>

  <div class="container">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>
---

# Demo: Container & Items

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# Regula de bază

Unde scrii CSS-ul:

- pe container → controlezi layout-ul
- pe item → controlezi elementul

---
layout: default
---

# 5. flex-direction

Schimbă direcția:

- `row` → pe linie (default)
- `column` → pe coloană

---
layout: default
html: |
  <style>
  .container {
    display: flex;
    flex-direction: column;
    background: lightgray;
  }

  .box {
    background: green;
    color: white;
    padding: 10px;
    margin: 5px;
  }
  </style>

  <div class="container">
    <div class="box">Sus</div>
    <div class="box">Mijloc</div>
    <div class="box">Jos</div>
  </div>
---

# Demo: flex-direction

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# 6. justify-content

Controlează poziția pe linie:

- `flex-start`
- `center`
- `flex-end`
- `space-between`

---
layout: default
html: |
  <style>
  .container {
    display: flex;
    justify-content: space-between;
    background: lightgray;
  }

  .box {
    background: purple;
    color: white;
    padding: 10px;
  }
  </style>

  <div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>
---

# Demo: justify-content

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# 7. align-items

Controlează poziția pe verticală:

- `flex-start`
- `center`
- `flex-end`

---
layout: default
html: |
  <style>
  .container {
    display: flex;
    align-items: center;
    height: 150px;
    background: lightgray;
  }

  .box {
    background: orange;
    padding: 10px;
  }
  </style>

  <div class="container">
    <div class="box">Box</div>
    <div class="box">Box</div>
  </div>
---

# Demo: align-items

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# 8. Centrare completă

Cel mai important caz:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---
layout: default
html: |
  <style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background: lightgray;
  }

  .box {
    background: red;
    color: white;
    padding: 20px;
  }
  </style>

  <div class="container">
    <div class="box">CENTER</div>
  </div>
---

# Demo: centrare

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# 9. flex-wrap

Ce se întâmplă când nu mai este loc pe linie?

- `nowrap` (default) → toate elementele rămân pe un rând
- `wrap` → elementele trec pe rândul următor

---
layout: default
html: |
  <style>
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    background: lightgray;
  }

  .box {
    width: 80px;
    height: 80px;
    background: green;
    margin: 5px;
  }
  </style>

  <div class="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
---

# Demo: flex-wrap

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# 10. Flex pe ITEMS

Până acum am lucrat pe container.  
Acum controlăm elementele individuale.

---
layout: default
---

# flex: 1

```css
.box {
  flex: 1;
}
```

Înseamnă:
- ocupă spațiul liber
- se adaptează automat

---
layout: default
html: |
  <style>
  .container {
    display: flex;
    background: lightgray;
  }

  .box {
    background: blue;
    color: white;
    padding: 10px;
    margin: 5px;
  }

  .grow {
    flex: 1;
  }
  </style>

  <div class="container">
    <div class="box grow">1</div>
    <div class="box">2</div>
  </div>
---

# Demo: flex: 1

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# Mai multe elemente cu flex: 1

Împart spațiul egal.

---
layout: default
html: |
  <style>
  .container {
    display: flex;
    background: lightgray;
  }

  .box {
    flex: 1;
    background: purple;
    color: white;
    margin: 5px;
    padding: 10px;
  }
  </style>

  <div class="container">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
  </div>
---

# Demo: egal

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# Diferență importantă

Fără flex:
- dimensiuni fixe

Cu `flex: 1`:
- dimensiuni dinamice
- layout adaptabil

---
layout: default
---

# 11. gap

Adaugă spațiu între elemente.

```css
.container {
  display: flex;
  gap: 10px;
}
```

- mai simplu decât `margin`  
- funcționează pe ambele direcții  

---
layout: default
html: |
  <style>
  .container {
    display: flex;
    gap: 10px;
    background: lightgray;
  }

  .box {
    width: 80px;
    height: 80px;
    background: blue;
  }
  </style>

  <div class="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
---

# Demo: gap

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# De ce nu margin?

Cu `margin`:
- trebuie setat pe fiecare element
- poate crea spațiu în plus la margini

Cu `gap`:
- un singur loc
- mai curat
- mai predictibil

---
layout: default
---

# gap + wrap

Funcționează perfect cu `flex-wrap`.

---
layout: default
html: |
  <style>
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 200px;
    background: lightgray;
  }

  .box {
    width: 80px;
    height: 80px;
    background: green;
  }
  </style>

  <div class="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
---

# Demo: gap + wrap

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# 9. Exercițiu

Cerințe:

1. Activează Flexbox  
2. Pune elementele pe aceeași linie  
3. Centrează-le  
4. Adaugă spațiu între ele  

---
layout: default
html: |
  <style>
  .container {
    background: lightgray;
  }

  .box {
    width: 80px;
    height: 80px;
    background: blue;
  }
  </style>

  <div class="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
---

# Playground

<LiveWeb :html="$frontmatter.html" />

---
layout: center
---

# Ce urmează?

## Flexbox
(practică)

---
layout: center
---

# Mulțumesc!

Întrebări?