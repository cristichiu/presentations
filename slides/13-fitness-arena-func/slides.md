---
title: 'Fitness Arena - Funcționalități SI'
theme: neversink
transition: slide-left
layout: cover
info: 'Fitness Arena Chișinău · Lucrarea nr.4'
lineNumbers: true
draw:
  enabled: true
---

# Lucrarea nr.4
## Utilizatori și funcționalități SI
### Studiu de caz: Fitness Arena Chișinău

<div class="mt-12 text-sm text-gray-500">
Analiza actorilor și a cerințelor sistemului
</div>

---
layout: default
---

# Actori și funcționalități

Sistemul deservește trei categorii principale de utilizatori, fiecare având permisiuni specifice:

<div class="grid grid-cols-3 gap-4 mt-8">
  <div class="p-4 bg-indigo-50 border border-indigo-100 rounded-xl shadow-sm">
    <div class="text-3xl mb-2">🔑</div>
    <h3 class="font-bold text-indigo-900">Administrator</h3>
    <ul class="text-[11px] text-indigo-800 mt-2 list-disc ml-4">
      <li>Gestionează utilizatorii</li>
      <li>Vizualizează rapoarte</li>
      <li>Configurare sistem</li>
    </ul>
  </div>

  <div class="p-4 bg-emerald-50 border border-emerald-100 rounded-xl shadow-sm">
    <div class="text-3xl mb-2">🏃</div>
    <h3 class="font-bold text-emerald-900">Antrenor</h3>
    <ul class="text-[11px] text-emerald-800 mt-2 list-disc ml-4">
      <li>Gestionează programări</li>
      <li>Vizualizează clienții</li>
      <li>Monitorizare progres</li>
    </ul>
  </div>

  <div class="p-4 bg-orange-50 border border-orange-100 rounded-xl shadow-sm">
    <div class="text-3xl mb-2">👤</div>
    <h3 class="font-bold text-orange-900">Client</h3>
    <ul class="text-[11px] text-orange-800 mt-2 list-disc ml-4">
      <li>Rezervă antrenamente</li>
      <li>Vizualizează abonament</li>
      <li>Istoric participări</li>
    </ul>
  </div>
</div>

---
layout: default
---

# Diagramă de context (Descriere)

Sistemul Informatic (SI) centralizează toate interacțiunile dintre entitățile externe și baza de date.

<div class="flex justify-center items-center mt-12 gap-8">
  <div class="flex flex-col gap-4">
    <div class="p-2 bg-gray-100 rounded border text-xs text-center">Clienți</div>
    <div class="p-2 bg-gray-100 rounded border text-xs text-center">Antrenori</div>
    <div class="p-2 bg-gray-100 rounded border text-xs text-center">Administrator</div>
  </div>
  <div class="text-4xl">⇄</div>
  <div class="w-32 h-32 rounded-full border-4 border-indigo-500 flex items-center justify-center text-center p-2 font-bold bg-indigo-50 shadow-lg">
    SI Fitness Arena
  </div>
</div>

**Fluxuri principale de date:**
- **Input:** Date clienți, solicitări de programare, validări acces.
- **Output:** Rapoarte manageriale, confirmări rezervări, stare abonament.

---
layout: default
---

# Use Case (Cazuri de utilizare)

Principalele procese pe care sistemul le suportă pentru a genera valoare:

<div class="grid grid-cols-2 gap-4 mt-8">
  <div class="flex items-start gap-3 p-3 bg-white border rounded-lg">
    <div class="text-blue-500">📝</div>
    <div>
      <div class="font-bold text-sm">Înregistrare client</div>
      <p class="text-[10px] text-gray-600">Crearea profilului și emiterea cardului digital.</p>
    </div>
  </div>
  <div class="flex items-start gap-3 p-3 bg-white border rounded-lg">
    <div class="text-green-500">📅</div>
    <div>
      <div class="font-bold text-sm">Programare antrenament</div>
      <p class="text-[10px] text-gray-600">Rezervarea unui loc la clasele de grup sau sesiuni private.</p>
    </div>
  </div>
  <div class="flex items-start gap-3 p-3 bg-white border rounded-lg">
    <div class="text-orange-500">💳</div>
    <div>
      <div class="font-bold text-sm">Gestionare abonament</div>
      <p class="text-[10px] text-gray-600">Prelungirea sau modificarea tipului de abonament.</p>
    </div>
  </div>
  <div class="flex items-start gap-3 p-3 bg-white border rounded-lg">
    <div class="text-red-500">📈</div>
    <div>
      <div class="font-bold text-sm">Generare rapoarte</div>
      <p class="text-[10px] text-gray-600">Analiza gradului de ocupare și a veniturilor.</p>
    </div>
  </div>
</div>

---
layout: default
---

# Cerințe funcționale

Sistemul **trebuie** să execute următoarele acțiuni:

- **Înregistrare:** Permiterea înscrierii clienților noi în baza de date.
- **Programări:** Facilitarea rezervării locurilor la antrenamente în limita capacității.
- **Rapoarte:** Generarea automată a statisticilor de activitate pentru management.
- **Autentificare:** Protejarea accesului prin credențiale unice (email/parolă sau QR code).

<div class="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-xs italic">
"Cerințele funcționale definesc CE face sistemul."
</div>

---
layout: default
---

# Cerințe nefuncționale

Proprietățile care definesc calitatea și performanța sistemului:

| Categorie | Cerință specifică |
| :--- | :--- |
| **Securitate** | Autentificare obligatorie; date criptate. |
| **Performanță** | Timp de răspuns la interogări < 2 secunde. |
| **Utilizabilitate** | Interfață simplă (max 3 click-uri pentru o acțiune). |
| **Fiabilitate** | Disponibilitate (Uptime) de minim 99.9%. |
| **Portabilitate** | Accesibil prin browser (Web) și aplicație mobilă. |

---
layout: section
---

# Concluzie

- SI Fitness Arena oferă **funcționalități clare** adaptate fiecărui tip de actor (Administrator, Antrenor, Client).
- **Cerințele sunt bine definite**, acoperind atât nevoile operaționale, cât și standardele de performanță și securitate necesare.

---
layout: center
---

# Mulțumesc pentru atenție!

### Întrebări?
