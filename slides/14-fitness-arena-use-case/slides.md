---
title: 'Fitness Arena - Modelare Use Case'
theme: neversink
transition: slide-left
layout: cover
info: 'Fitness Arena Chișinău · Lucrarea nr.5'
lineNumbers: true
draw:
  enabled: true
---

# Lucrarea nr.5
## Modelarea cazurilor de utilizare
### Studiu de caz: Fitness Arena Chișinău

<div class="mt-12 text-sm text-gray-500">
Analiza detaliată a procesului de programare
</div>

---
layout: default
---

# Specificația Cazului de Utilizare

Detalierea principalului punct de interacțiune al clientului cu sistemul.

<div class="grid grid-cols-2 gap-6 mt-8">
  <div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
    <h3 class="font-bold text-blue-900 mb-2">Informații Generale</h3>
    <p class="text-xs text-blue-800"><strong>Denumire:</strong> Programare antrenament</p>
    <p class="text-xs text-blue-800"><strong>Actor:</strong> Client</p>
    <p class="text-xs text-blue-800"><strong>Descriere:</strong> Procesul prin care un client își rezervă un loc la o sesiune de antrenament.</p>
  </div>

  <div class="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl">
    <h3 class="font-bold text-green-900 mb-2">Condiții</h3>
    <p class="text-xs text-green-800"><strong>Precondiții:</strong> Clientul trebuie să fie autentificat și să aibă un abonament activ.</p>
    <p class="text-xs text-green-800"><strong>Postcondiții:</strong> Programarea este salvată în baza de date și locul este ocupat.</p>
  </div>
</div>

---
layout: default
---

# Scenariul Principal (Succes)

Pașii ideali parcurși de utilizator pentru finalizarea programării:

<div class="mt-10">
  <div class="flex items-center gap-4 mb-4">
    <div class="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">1</div>
    <div class="text-sm">Clientul accesează sistemul și navighează la secțiunea "Programări".</div>
  </div>
  <div class="flex items-center gap-4 mb-4">
    <div class="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">2</div>
    <div class="text-sm">Selectează antrenamentul dorit din lista disponibilă (ex: Yoga, CrossFit).</div>
  </div>
  <div class="flex items-center gap-4 mb-4">
    <div class="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">3</div>
    <div class="text-sm">Confirmă rezervarea prin apăsarea butonului "Confirmă".</div>
  </div>
  <div class="flex items-center gap-4 mb-4">
    <div class="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">4</div>
    <div class="text-sm text-green-600 font-bold">Sistemul salvează datele și trimite o notificare de confirmare.</div>
  </div>
</div>

---
layout: default
---

# Scenarii Alternative (Excepții)

Gestionarea situațiilor care deviază de la scenariul principal:

<div class="grid grid-cols-1 gap-4 mt-8">
  <div class="p-4 border-2 border-dashed border-red-300 rounded-xl flex items-center gap-4">
    <div class="text-2xl">❌</div>
    <div>
      <h4 class="font-bold text-red-900 text-sm">Date Invalide</h4>
      <p class="text-[11px] text-red-800">Sistemul detectează erori (ex: abonament expirat) și afișează un mesaj de eroare.</p>
    </div>
  </div>

  <div class="p-4 border-2 border-dashed border-orange-300 rounded-xl flex items-center gap-4">
    <div class="text-2xl">🕒</div>
    <div>
      <h4 class="font-bold text-orange-900 text-sm">Slot Ocupat</h4>
      <p class="text-[11px] text-orange-800">Dacă nu mai sunt locuri libere, sistemul sugerează alegerea unei alte ore sau înscrierea pe lista de așteptare.</p>
    </div>
  </div>
</div>

---
layout: default
---

# Design Interfață Grafică

Componentele vizuale necesare pentru realizarea cazului de utilizare:

<div class="grid grid-cols-3 gap-4 mt-10">
  <div class="bg-gray-800 p-4 rounded-lg shadow-inner text-center">
    <div class="text-indigo-400 text-2xl mb-2">📑</div>
    <div class="text-white text-xs font-bold uppercase">Listă Antrenamente</div>
    <div class="text-[10px] text-gray-400 mt-2">Filtrare după tip, antrenor și oră.</div>
  </div>
  <div class="bg-gray-800 p-4 rounded-lg shadow-inner text-center">
    <div class="text-indigo-400 text-2xl mb-2">📝</div>
    <div class="text-white text-xs font-bold uppercase">Formular Programare</div>
    <div class="text-[10px] text-gray-400 mt-2">Câmpuri pentru data, ora și comentarii opționale.</div>
  </div>
  <div class="bg-gray-800 p-4 rounded-lg shadow-inner text-center">
    <div class="text-indigo-400 text-2xl mb-2">✅</div>
    <div class="text-white text-xs font-bold uppercase">Buton Confirmare</div>
    <div class="text-[10px] text-gray-400 mt-2">Acțiune finală cu feedback vizual instant.</div>
  </div>
</div>

---
layout: default
---

# Diagramă de Activități

Fluxul logic al procesului de programare:

<div class="flex justify-center items-center mt-12 overflow-hidden">
  <div class="flex items-center gap-2 text-[10px] font-bold">
    <div class="px-3 py-1 bg-gray-200 rounded-full">Start</div>
    <div>➜</div>
    <div class="px-3 py-1 bg-blue-100 border border-blue-400 rounded">Selectare</div>
    <div>➜</div>
    <div class="px-3 py-1 bg-yellow-100 border border-yellow-400 rounded">Validare</div>
    <div>➜</div>
    <div class="px-3 py-1 bg-green-100 border border-green-400 rounded">Confirmare</div>
    <div>➜</div>
    <div class="px-3 py-1 bg-blue-100 border border-blue-400 rounded">Salvare</div>
    <div>➜</div>
    <div class="px-3 py-1 bg-gray-200 rounded-full">End</div>
  </div>
</div>

<div class="mt-12 text-center italic text-xs text-gray-500">
Reprezentarea succesiunii activităților de la inițiere până la finalizarea stării.
</div>

---
layout: section
---

# Concluzie

- Cazurile de utilizare sunt esențiale pentru a **defini comportamentul sistemului** din perspectiva utilizatorului final.
- Modelarea riguroasă a scenariilor (principal și alternative) asigură o **experiență de utilizare fără erori**.

---
layout: center
---

# Mulțumesc pentru atenție!

### Întrebări?
