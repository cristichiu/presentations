---
title: 'HTML Forms - Fundamente'
theme: geist
transition: slide-left
layout: cover
info: 'HTML & CSS Course · AlterSchool · 2026'
lineNumbers: true
draw:
  enabled: true
---

# HTML Forms: Interacțiunea cu Utilizatorul

<div class="mt-4 opacity-80">
Curs creat pentru <strong>AlterSchool</strong>
</div>

---
layout: default
---

# De ce avem nevoie de Formulare?

Până acum, am învățat cum să **afișăm** informație. Dar cum **primim** informație de la utilizator?

<div class="grid grid-cols-2 gap-4 mt-8">
<InfoCard icon="👤" title="Identificare">
Autentificare și Înregistrare.
</InfoCard>

<InfoCard icon="🔍" title="Căutare">
Căutarea produselor online.
</InfoCard>
</div>

<AdmonitionType type="tip" class="mt-6">
Formularul este puntea de legătură dintre utilizator și server.
</AdmonitionType>

---
layout: default
---

# Alte Utilizări ale Formularelor

<div class="grid grid-cols-2 gap-4 mt-8">
<InfoCard icon="🛒" title="Comenzi">
Adrese de livrare și plăți.
</InfoCard>

<InfoCard icon="💬" title="Feedback">
Comentarii și formulare de contact.
</InfoCard>
</div>

<AdmonitionType type="note" class="mt-6">
Fiecare interacțiune unde utilizatorul scrie ceva folosește un formular.
</AdmonitionType>

---
layout: default
---

# Structura de bază: Elementul <code>&lt;form&gt;</code>

Orice formular începe și se termină cu tag-ul <code>&lt;form&gt;</code>.

```html
<form action="/trimite-date" method="POST">
  <!-- Aici punem input-urile -->
</form>
```

- **<code>action</code>**: Unde trimitem datele.
- **<code>method</code>**: Cum le trimitem (<code>GET</code> sau <code>POST</code>).

<AdmonitionType type="important" class="mt-4">
Fără tag-ul <code>&lt;form&gt;</code>, browserul nu știe că elementele din interior aparțin aceluiași set de date.
</AdmonitionType>

---
layout: default
---

# Anatomia unui Formular

Un formular are o structură logică esențială:

<div class="grid grid-cols-3 gap-4 mt-8">
<InfoCard title="1. Container">
Tag-ul <code>&lt;form&gt;</code> care grupează totul.
</InfoCard>

<InfoCard title="2. Câmpuri (Inputs)">
Unde utilizatorul introduce datele.
</InfoCard>

<InfoCard title="3. Acțiune (Button)">
Butonul care "trimite" datele către server.
</InfoCard>
</div>

<AdmonitionType type="note" class="mt-6">
Fiecare câmp are nevoie de o "etichetă" (Label) pentru claritate.
</AdmonitionType>

---
layout: default
html: |
  <form>
    <label for='nume'>Nume Complet:</label>
    <input type='text' id='nume' name='nume' placeholder='Ex: Ion Popescu'>

    <label for='email'>Adresa Email:</label>
    <input type='email' id='email' name='email' required>

    <button type='submit'>Trimite</button>
  </form>
---

# Input-ul Text și Label-ul

Este esențial să folosim un <code>&lt;label&gt;</code> pentru fiecare câmp.

```html
<label for="email">Email</label>
<input type="email" id="email">
```

<LiveWeb :html="$frontmatter.html" />

---
layout: default
---

# Tipuri Esențiale de Input

HTML ne oferă tipuri specifice pentru validare automată.

<div class="grid grid-cols-2 gap-4">
<InfoCard title="Parolă">
<code>type="password"</code> - Ascunde textul.
</InfoCard>

<InfoCard title="Număr">
<code>type="number"</code> - Doar cifre permise.
</InfoCard>

<InfoCard title="Dată">
<code>type="date"</code> - Calendar nativ.
</InfoCard>

<InfoCard title="Opțiuni">
<code>type="radio"</code> - Selecție unică.
</InfoCard>
</div>

---
layout: default
html: |
  <h3>Care este limbajul tău preferat?</h3>
  <br>
  <form>
    <input type='radio' id='html' name='fav_language' value='HTML'>
    <label for='html'>HTML</label>
    <br>
    <input type='radio' id='css' name='fav_language' value='CSS'>
    <label for='css'>CSS</label>
    <br>
    <button type='submit'>Votează</button>
  </form>
---

# Exemplu: Radio Buttons (Selecție Unică)

<LiveWeb :html="$frontmatter.html" />

---
layout: default
html: |
  <form>
    <label>Scrie ceva:</label>
    <input type='text' value='Text de probă...'>
    <div style='margin-top: 10px; display: flex; gap: 10px;'>
      <button type='submit'>Submit</button>
      <button type='reset' style='background: #6c757d'>Reset</button>
    </div>
  </form>
---

# Butoanele în Formulare

Butoanele declanșează acțiuni diferite în funcție de <code>type</code>:
(<code>submit</code>, <code>reset</code> sau <code>button</code>)

<LiveWeb :html="$frontmatter.html" />

---
layout: default
html: |
  <form>
    <label>Nume (minim 3 caractere):</label>
    <input type='text' required minlength='3' placeholder='Scrie aici...'>
    <br>
    <button type='submit'>Testează</button>
  </form>














  <style>
    input:invalid { border: 2px solid #dc3545; }
    input:valid { border: 2px solid #28a745; }
  </style>
---

# Validarea Datelor

Folosim atribute ca <code>required</code> sau <code>minlength</code> pentru a valida datele.

<LiveWeb :html="$frontmatter.html" />

---
layout: section
---

# Exercițiu Practic 🛠️

Creează un formular de contact care să conțină:
1. Un câmp pentru **Nume** (obligatoriu).
2. Un câmp pentru **Email** (obligatoriu).
3. Un buton de **Submit**.

---
layout: default
---

# Exercițiu Practic: Rezolvă aici

<LiveWeb />

---
layout: default
---

# Recapitulare

1. Folosește mereu <code>&lt;label&gt;</code> pentru fiecare input.
2. Grupează totul în <code>&lt;form&gt;</code>.
3. Alege <code>type</code>-ul corect pentru o experiență mai bună.
4. Nu uita de butonul de Submit!

---
layout: center
---

# Mulțumesc pentru atenție! 🚀

### Aveți întrebări?

<div class="mt-10 opacity-60">
Curs HTML & CSS · AlterSchool · 2026
</div>
