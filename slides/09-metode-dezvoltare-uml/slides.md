---
title: 'Metode de Dezvoltare și Limbajul UML'
theme: neversink
transition: slide-left
layout: cover
info: 'De la Analiza Structurată la Paradigma OO · 2026'
lineNumbers: true
draw:
  enabled: true
---

# Metode de Dezvoltare și Limbajul UML
## Analiză, Proiectare și Modelare Vizuală

<div class="mt-12 text-sm text-gray-800 font-bold">
Studiu de Caz: Arhitectura OO a sistemului Aquaterra
</div>

---
layout: section
---

# I. Metode de Dezvoltare
## Structurat (Funcțional) vs. Orientat pe Obiecte (OO)

---
layout: default
---

# 1. Metoda Structurată (Procedurală)

Sistemul este structurat în baza funcțiilor sale (Funcțional-Orientat).

<div class="grid grid-cols-2 gap-8 mt-6">
  <div class="p-5 bg-blue-100 border-l-8 border-blue-600 rounded-r-2xl">
    <h3 class="font-bold text-blue-900 mb-2 italic underline">Concept</h3>
    <p class="text-sm text-blue-900 font-bold leading-relaxed">Analiză funcțională: fiecare funcție se divide ierarhic în subfuncții până se ajunge la componente ușor de programat.</p>
  </div>
  <div class="p-5 bg-gray-100 border-l-8 border-gray-600 rounded-r-2xl">
    <h3 class="font-bold text-gray-900 mb-2 italic underline">Modele utilizate:</h3>
    <ul class="text-xs text-gray-900 font-bold space-y-2">
      <li>🔹 <strong>Model Funcțional:</strong> SADT, DFD (Data Flow Diagram).</li>
      <li>🔹 <strong>Model de Date:</strong> ERD (Entity-Relationship Diagram).</li>
    </ul>
  </div>
</div>

<div class="mt-8 text-center p-4 bg-yellow-50 border border-yellow-200 text-gray-900 font-bold italic">
"Algoritmi + Structuri de date = Programe" (Niklaus Wirth, 1976)
</div>

---
layout: default
---

# 2. Metoda Orientată pe Obiecte (OO)

Sistemul este perceput ca o structură de obiecte autonome care cooperează.

<div class="grid grid-cols-2 gap-8 mt-6">
  <div class="p-5 bg-emerald-100 border-l-8 border-emerald-600 rounded-r-2xl">
    <h3 class="font-bold text-emerald-900 mb-2 italic underline">Obiectul:</h3>
    <p class="text-sm text-emerald-900 font-bold leading-relaxed">Are un comportament definit prin operații (metode) și o stare definită prin date (atribute).</p>
  </div>
  <div class="p-5 bg-indigo-100 border-l-8 border-indigo-600 rounded-r-2xl">
    <h3 class="font-bold text-indigo-900 mb-2 italic underline">Modele construite:</h3>
    <ul class="text-xs text-indigo-900 font-bold space-y-2">
      <li>📐 <strong>Model Static:</strong> Structura obiectelor și claselor.</li>
      <li>🔄 <strong>Model Dinamic:</strong> Interacțiunea și schimbul de mesaje.</li>
      <li>⚙️ <strong>Model Funcțional:</strong> Transformările valorilor datelor.</li>
    </ul>
  </div>
</div>

---
layout: section
---

# II. Principiile Paradigmei OO
## Ce definește un sistem "Orientat pe Obiecte"?

---
layout: default
---

# Pilonii Programării Orientate pe Obiecte

Concepte fundamentale utilizate în modelarea sistemelor complexe.

<div class="grid grid-cols-2 gap-4 mt-4">
  <div class="p-4 bg-white border-2 border-orange-500 rounded-xl shadow-lg">
    <h4 class="font-bold text-orange-900 text-xs uppercase mb-2 tracking-widest">1. Abstractizare</h4>
    <p class="text-[10px] text-gray-900 font-bold">Evidențierea doar a caracteristicilor esențiale. (Ex: Clasa <strong>Abonament</strong> definește preț și durată).</p>
  </div>
  <div class="p-4 bg-white border-2 border-blue-500 rounded-xl shadow-lg">
    <h4 class="font-bold text-blue-900 text-xs uppercase mb-2 tracking-widest">2. Încapsulare</h4>
    <p class="text-[10px] text-gray-900 font-bold">Ascunderea detaliilor interne (private). Accesul se face doar prin metode publice (get/set).</p>
  </div>
  <div class="p-4 bg-white border-2 border-green-500 rounded-xl shadow-lg">
    <h4 class="font-bold text-green-900 text-xs uppercase mb-2 tracking-widest">3. Moștenire</h4>
    <p class="text-[10px] text-gray-900 font-bold">Reutilizarea codului: Clasa <strong>VIP</strong> moștenește tot de la <strong>Membru</strong>, dar adaugă beneficii.</p>
  </div>
  <div class="p-4 bg-white border-2 border-purple-500 rounded-xl shadow-lg">
    <h4 class="font-bold text-purple-900 text-xs uppercase mb-2 tracking-widest">4. Polimorfism</h4>
    <p class="text-[10px] text-gray-900 font-bold">Aceeași interfață, comportament diferit. (Ex: Metoda <strong>CalculeazaPret()</strong> diferă la Standard vs. Day).</p>
  </div>
</div>

---
layout: section
---

# III. Limbajul UML
## Unified Modeling Language

---
layout: default
---

# UML - Standardul Vizualizării Software

Nu este un limbaj de programare, ci unul de **modelare vizuală**.

<div class="grid grid-cols-2 gap-8 mt-6">
  <div>
    <h3 class="font-bold text-sm text-red-700 underline mb-3 italic">Clasificarea Diagramelor:</h3>
    <ul class="text-[11px] text-gray-900 font-bold space-y-2">
      <li class="p-2 bg-red-50 rounded">🏗️ <strong>Diagrame de Structură:</strong> Statică (Clase, Componente, Obiecte).</li>
      <li class="p-2 bg-blue-50 rounded">🎬 <strong>Diagrame de Comportament:</strong> Dinamică (Cazuri de Utilizare, Activitate, Secvență).</li>
    </ul>
  </div>
  <div class="p-4 bg-gray-50 border border-gray-300 rounded-xl">
    <h3 class="font-bold text-xs text-gray-900 mb-3 uppercase tracking-tighter italic">Regula Pareto (80/20) în UML:</h3>
    <p class="text-[10px] text-gray-900 font-bold leading-relaxed mb-3">80% dintre dezvoltatori folosesc doar 20% din diagramele UML (cele critice).</p>
    <div class="text-[10px] text-indigo-800 font-black p-2 bg-white border border-indigo-200 rounded">
      🌟 Cele mai folosite: Clase, Case-Use, Secvență, Activitate.
    </div>
  </div>
</div>

---
layout: section
---

# IV. Aplicabilitate Practică
## Modelarea Sistemului Aquaterra

---
layout: default
---

# Modelul Static: Diagramele de Clase

Identificarea entităților (claselor) și a relațiilor în contextul Aquaterra.

<div class="grid grid-cols-2 gap-8 mt-6">
  <div class="p-4 bg-white shadow-xl border-t-8 border-indigo-600 rounded-b-xl">
    <h4 class="font-bold text-xs text-indigo-900 mb-4 text-center italic">Structura clasei "Membru"</h4>
    <div class="font-mono text-[9px] text-gray-900 space-y-1">
      <div class="bg-gray-100 p-1 border-b"><strong>Attributes:</strong></div>
      <div class="pl-2">- idMembru: String</div>
      <div class="pl-2">- nume: String</div>
      <div class="pl-2">- soldRestant: Decimal</div>
      <div class="bg-gray-100 p-1 border-b mt-2"><strong>Methods:</strong></div>
      <div class="pl-2">+ inregistreazaVizita()</div>
      <div class="pl-2">+ achitaAbonament()</div>
      <div class="pl-2">+ verificaAcces(): Boolean</div>
    </div>
  </div>
  
  <div class="flex flex-col justify-center gap-4">
    <div class="p-3 bg-green-50 border border-green-200 rounded-lg">
      <h5 class="font-bold text-[10px] text-green-900 uppercase">Ierarhia Moștenirii:</h5>
      <p class="text-[10px] text-gray-900 font-bold">Membru ⬅️ VIP / ⬅️ Teenager / ⬅️ Day</p>
    </div>
    <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg">
      <h5 class="font-bold text-[10px] text-blue-900 uppercase">Relații:</h5>
      <p class="text-[10px] text-gray-900 font-bold">Un <strong>Membru</strong> are unul sau mai multe <strong>Abonamente</strong> (1..* Association).</p>
    </div>
  </div>
</div>

---
layout: default
---

# Modelul Comportamental: Use Case Diagram

Vizualizarea actorilor și a acțiunilor pe care aceștia le pot efectua.

<div class="flex flex-col items-center mt-6">
  <div class="grid grid-cols-3 gap-10 w-full text-center">
    <div class="p-4 bg-gray-100 rounded-full border-2 border-gray-300 font-bold text-xs text-gray-900">👤 Client</div>
    <div class="p-4 bg-gray-100 rounded-full border-2 border-gray-300 font-bold text-xs text-gray-900">👤 Recepție</div>
    <div class="p-4 bg-gray-100 rounded-full border-2 border-gray-300 font-bold text-xs text-gray-900">👤 Manager</div>
  </div>
  
  <div class="mt-8 grid grid-cols-4 gap-4 w-full text-[9px] font-black text-white text-center">
    <div class="p-3 bg-indigo-700 rounded-3xl shadow-lg border-2 border-white italic">Scanează QR</div>
    <div class="p-3 bg-indigo-700 rounded-3xl shadow-lg border-2 border-white italic">Rezervă Yoga</div>
    <div class="p-3 bg-indigo-700 rounded-3xl shadow-lg border-2 border-white italic">Emite Factură</div>
    <div class="p-3 bg-indigo-700 rounded-3xl shadow-lg border-2 border-white italic">Analizează ROI</div>
  </div>
</div>

<div class="mt-10 p-4 bg-red-50 border border-red-200 rounded-xl text-center">
  <p class="text-xs text-red-900 font-bold italic underline">Diagrama activității este esențială pentru a vedea fluxul de decizie (ex: DACĂ sold > 0 ATUNCI deschide turnichet).</p>
</div>

---
layout: center
---

# Concluzii

1. **Metoda OO** domină dezvoltarea modernă datorită **reutilizării codului** și **modelării intuitive** a realității.
2. **UML** este "limba comună" care permite analiștilor, programatorilor și managerilor Aquaterra să aibă aceeași viziune asupra sistemului.
3. Utilizarea diagramelor vizuale reduce erorile de design înainte de a începe scrierea efectivă a codului.

---
layout: center
---

# Mulțumesc pentru atenție!

### Întrebări?

<div class="mt-12 text-sm text-gray-700 font-black">
Referințe: Tema 4 (Natalia Pleșca), UML 2.5 Standards
</div>
