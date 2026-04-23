---
title: 'Fitness Arena - Modelul Domeniului'
theme: neversink
transition: slide-left
layout: cover
info: 'Fitness Arena Chișinău · Lucrarea nr.6'
lineNumbers: true
draw:
  enabled: true
---

# Lucrarea nr.6
## Modelul domeniului
### Studiu de caz: Fitness Arena Chișinău

<div class="mt-12 text-sm text-gray-500">
Structura conceptuală a obiectelor sistemului
</div>

---
layout: default
---

# Clase conceptuale

Entitățile de bază identificate în cadrul sistemului Fitness Arena:

<div class="grid grid-cols-3 gap-6 mt-12">
  <div class="p-4 bg-white border-2 border-indigo-200 rounded-xl shadow-sm text-center">
    <div class="text-3xl mb-2">👤</div>
    <div class="font-bold text-indigo-900">Client</div>
  </div>
  <div class="p-4 bg-white border-2 border-green-200 rounded-xl shadow-sm text-center">
    <div class="text-3xl mb-2">💳</div>
    <div class="font-bold text-green-900">Abonament</div>
  </div>
  <div class="p-4 bg-white border-2 border-orange-200 rounded-xl shadow-sm text-center">
    <div class="text-3xl mb-2">🏋️</div>
    <div class="font-bold text-orange-900">Antrenor</div>
  </div>
  <div class="p-4 bg-white border-2 border-blue-200 rounded-xl shadow-sm text-center">
    <div class="text-3xl mb-2">🗓️</div>
    <div class="font-bold text-blue-900">Programare</div>
  </div>
  <div class="p-4 bg-white border-2 border-red-200 rounded-xl shadow-sm text-center">
    <div class="text-3xl mb-2">🏢</div>
    <div class="font-bold text-red-900">Sală</div>
  </div>
</div>

---
layout: default
---

# Relații între Clase

Modul în care entitățile interacționează și sunt conectate logic:

<div class="mt-10 space-y-4">
  <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
    <div class="font-bold w-32 text-indigo-700">Client</div>
    <div class="text-gray-400">➜ detine ➜</div>
    <div class="font-bold text-green-700">Abonament</div>
  </div>
  <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
    <div class="font-bold w-32 text-indigo-700">Client</div>
    <div class="text-gray-400">➜ efectueaza ➜</div>
    <div class="font-bold text-blue-700">Programare</div>
  </div>
  <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
    <div class="font-bold w-32 text-orange-700">Antrenor</div>
    <div class="text-gray-400">➜ conduce ➜</div>
    <div class="font-bold text-blue-700">Programare</div>
  </div>
  <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
    <div class="font-bold w-32 text-red-700">Sală</div>
    <div class="text-gray-400">➜ gazduieste ➜</div>
    <div class="font-bold text-blue-700">Programare</div>
  </div>
</div>

---
layout: default
---

# Atributele Claselor (Exemple)

Definirea proprietăților esențiale pentru stocarea datelor:

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="bg-indigo-50 p-6 rounded-2xl border-t-4 border-indigo-500 shadow-md">
    <h3 class="font-bold text-indigo-900 mb-4 border-b border-indigo-200 pb-2">Clasa: Client</h3>
    <ul class="space-y-2 text-sm text-indigo-800">
      <li><strong>id:</strong> Identificator unic (Integer)</li>
      <li><strong>nume:</strong> Numele complet (String)</li>
      <li><strong>email:</strong> Adresa de contact (String)</li>
    </ul>
  </div>

  <div class="bg-green-50 p-6 rounded-2xl border-t-4 border-green-500 shadow-md">
    <h3 class="font-bold text-green-900 mb-4 border-b border-green-200 pb-2">Clasa: Abonament</h3>
    <ul class="space-y-2 text-sm text-green-800">
      <li><strong>tip:</strong> Standard / Premium / VIP (String)</li>
      <li><strong>preț:</strong> Costul abonamentului (Decimal)</li>
      <li><strong>valabilitate:</strong> Data expirării (Date)</li>
    </ul>
  </div>
</div>

---
layout: default
---

# Modelul Domeniului (Descriere)

Modelul domeniului reprezintă o vizualizare conceptuală a lumii reale aplicată sistemului informatic:

- **Conectivitate:** Clasele sunt interconectate prin relații de asociere care reflectă fluxurile de business de la Fitness Arena.
- **Structură:** Definește fundamentul pentru designul bazei de date.
- **Abstractizare:** Se concentrează pe obiectele de business, nu pe implementarea tehnică sau interfață.

<div class="mt-8 text-center italic text-gray-500 bg-gray-100 p-4 rounded-lg">
"Modelul domeniului oferă un limbaj comun între analiștii de business și dezvoltatori."
</div>

---
layout: section
---

# Concluzie

- Modelul domeniului oferă **baza dezvoltării aplicației**, asigurând că toate obiectele necesare sunt identificate corect.
- O structură bine definită reduce riscul de erori în fazele ulterioare de proiectare și implementare a bazei de date.

---
layout: center
---

# Mulțumesc pentru atenție!

### Întrebări?
