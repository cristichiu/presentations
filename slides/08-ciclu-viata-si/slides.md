---
title: 'Ciclul de Viață al Sistemului Informatic'
theme: neversink
transition: slide-left
layout: cover
info: 'SDLC & Agile în contextul Aquaterra · 2026'
lineNumbers: true
draw:
  enabled: true
---

# Ciclul de Viață al Sistemului Informatic
## De la Concept la Mentenanță (SDLC & Scrum)

<div class="mt-12 text-sm text-gray-500">
Studiu de Caz: Evoluția Ecosistemului Aquaterra
</div>

---
layout: section
---

# I. Concepte de Bază
## SDLC și Ingineria Sistemelor

---
layout: default
---

# Ce este Ciclul de Viață (SDLC)?

Sistemele apar, se dezvoltă, se perfecționează și, în final, sunt scoase din exploatare.

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
  <h3 class="font-bold text-blue-900 italic">Definiție</h3>
  <p class="text-sm text-blue-800 font-medium">Proces neîntrerupt care începe cu decizia de necesitate a construirii SI și se termină cu scoaterea din uz.</p>
</div>

<div class="p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl">
  <h3 class="font-bold text-indigo-900 italic">Systems Engineering</h3>
  <p class="text-sm text-indigo-800 font-medium">Domeniu interdisciplinar axat pe dezvoltarea și gestionarea sistemelor complexe (HW + SW).</p>
</div>
</div>

<div class="mt-10 p-4 bg-gray-50 rounded-xl border border-gray-200">
  <h4 class="font-bold text-gray-900 text-xs mb-2">Activități cheie:</h4>
  <div class="flex justify-between text-[10px] text-gray-800 font-bold uppercase tracking-wider">
    <span>🔍 Analiză</span>
    <span>📐 Proiectare</span>
    <span>🛠️ Construcție</span>
    <span>🧪 Testare</span>
    <span>🚀 Implementare</span>
  </div>
</div>

---
layout: default
---

# Etapele SDLC (Perspectiva Tehnică)

Procesul clasic de transformare a cerințelor în soluții funcționale.

<div class="grid grid-cols-3 gap-4 mt-8">
  <div class="p-3 bg-white shadow border-t-4 border-blue-500 rounded-lg">
    <div class="font-bold text-xs text-blue-900">1. Analiza Cerințelor</div>
    <p class="text-[10px] text-gray-700 mt-2">Formularea nevoilor beneficiarului. Rezultat: <strong>Sarcina Tehnică (ST)</strong>.</p>
  </div>
  <div class="p-3 bg-white shadow border-t-4 border-indigo-500 rounded-lg">
    <div class="font-bold text-xs text-indigo-900">2. Proiectarea</div>
    <p class="text-[10px] text-gray-700 mt-2">Crearea arhitecturii și a modelelor. Rezultat: <strong>Proiectul Tehnic</strong>.</p>
  </div>
  <div class="p-3 bg-white shadow border-t-4 border-emerald-500 rounded-lg">
    <div class="font-bold text-xs text-emerald-900">3. Realizarea</div>
    <p class="text-[10px] text-gray-700 mt-2">Codificarea algoritmilor și integrarea modulelor software.</p>
  </div>
  <div class="p-3 bg-white shadow border-t-4 border-amber-500 rounded-lg">
    <div class="font-bold text-xs text-amber-900">4. Testarea</div>
    <p class="text-[10px] text-gray-700 mt-2">Verificarea funcționalității și a calității (QA).</p>
  </div>
  <div class="p-3 bg-white shadow border-t-4 border-rose-500 rounded-lg">
    <div class="font-bold text-xs text-rose-900">5. Implementarea</div>
    <p class="text-[10px] text-gray-700 mt-2">Instalarea, configurarea și instruirea personalului.</p>
  </div>
  <div class="p-3 bg-white shadow border-t-4 border-slate-500 rounded-lg">
    <div class="font-bold text-xs text-slate-900">6. Mentenanța</div>
    <p class="text-[10px] text-gray-700 mt-2">Actualizări și suport post-lansare.</p>
  </div>
</div>

---
layout: section
---

# II. Agile & Scrum
## Flexibilitate în Dezvoltarea Software

---
layout: default
---

# De ce Agile?

Modelul tradițional "Cascadă" eșuează când cerințele se schimbă rapid.

<div class="grid grid-cols-2 gap-8 mt-6">
  <div class="space-y-4">
    <h3 class="font-bold text-sm">Manifestul Agile (2001):</h3>
    <ul class="text-xs space-y-2 text-white">
      <li>🏃 <strong>Oameni & Interacțiuni</strong> > Procese & Unelte</li>
      <li>📦 <strong>Software Funcțional</strong> > Documentație stufoasă</li>
      <li>🤝 <strong>Colaborare cu Clientul</strong> > Negociere contracte</li>
      <li>🔄 <strong>Răspuns la schimbare</strong> > Urmarea unui plan</li>
    </ul>
  </div>
  <div class="p-6 bg-amber-50 rounded-2xl border-2 border-dashed border-amber-300">
    <h4 class="font-bold text-amber-900 text-xs mb-4 uppercase">Iterativ & Incremental</h4>
    <p class="text-[10px] text-amber-800 font-medium italic">"Livrarea rapidă și continuă de software valoros pentru a asigura satisfacția clientului."</p>
    <div class="mt-4 flex gap-2">
      <div class="h-8 w-8 rounded-full bg-amber-200 border border-amber-400 flex items-center justify-center text-[8px]">V1</div>
      <div class="h-8 w-8 rounded-full bg-amber-300 border border-amber-500 flex items-center justify-center text-[8px]">V2</div>
      <div class="h-8 w-8 rounded-full bg-amber-400 border border-amber-600 flex items-center justify-center text-[8px]">V3</div>
      <div class="h-8 w-8 rounded-full bg-amber-500 border border-amber-700 flex items-center justify-center text-[8px] font-bold text-white">MVP</div>
    </div>
  </div>
</div>

---
layout: default
---

# Rolurile în Scrum

Echipa este auto-organizată și multi-funcțională (5-9 persoane).

<div class="grid grid-cols-3 gap-6 mt-10">
  <div class="flex flex-col items-center">
    <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg mb-4">👑</div>
    <div class="font-bold text-xs text-blue-900 uppercase tracking-tighter text-center">Product Owner</div>
    <p class="text-[9px] text-gray-700 text-center mt-2 px-2 italic">Setează prioritățile, decide lansările și reprezintă vocea clientului.</p>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg mb-4">🛡️</div>
    <div class="font-bold text-xs text-emerald-900 uppercase tracking-tighter text-center">Scrum Master</div>
    <p class="text-[9px] text-gray-700 text-center mt-2 px-2 italic">Facilitator, elimină obstacolele și protejează procesul Scrum.</p>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg mb-4">👨‍💻</div>
    <div class="font-bold text-xs text-indigo-900 uppercase tracking-tighter text-center">Development Team</div>
    <p class="text-[9px] text-gray-700 text-center mt-2 px-2 italic">Programatori, testeri, arhitecți. Realizează produsul propriu-zis.</p>
  </div>
</div>

---
layout: section
---

# III. Aplicabilitate Practică
## Evoluția Digitală la Aquaterra

---
layout: default
---

# Aplicarea SDLC: Modulul "Kids Club"

Evoluția unei noi funcționalități în ecosistemul Aquaterra.

<div class="mt-8">
<ProcessFlow :steps="[
  { title: 'Analiză', desc: 'Identificarea nevoii de monitorizare a copiilor în timp ce părinții sunt la antrenament.' },
  { title: 'Proiectare', desc: 'Modelarea bazei de date pentru legătura Părinte-Copil și interfața recepției.' },
  { title: 'Realizare', desc: 'Codificarea sistemului de Check-in prin brățări NFC.' },
  { title: 'Mentenanță', desc: 'Adăugarea raportării orelor de vârf pentru optimizarea personalului.' }
]" />
</div>

---
layout: default
---

# Scrum la Aquaterra: Un Sprint de 2 Săptămâni

Cum echipa IT implementează "Plățile In-App".

<div class="grid grid-cols-2 gap-8 mt-6">
  <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
    <h3 class="font-bold text-xs text-gray-900 mb-3 uppercase">Artefacte:</h3>
    <ul class="text-[10px] space-y-2 text-gray-800">
      <li>📋 <strong>Product Backlog:</strong> Toate funcțiile dorite (Istoric, Plăți, Chat).</li>
      <li>🏁 <strong>Sprint Backlog:</strong> "Implementare API Google Pay" (Selectat acum).</li>
      <li>🎯 <strong>Sprint Goal:</strong> Clienții trebuie să poată plăti abonamentul din app.</li>
      <li>📉 <strong>Burndown Chart:</strong> Monitorizarea progresului zilnic.</li>
    </ul>
  </div>
  <div class="space-y-4">
    <div class="p-3 bg-white shadow-sm border rounded-lg">
      <div class="font-bold text-[10px] text-gray-500 uppercase">Ritual: Sprint Planning</div>
      <p class="text-[10px] text-gray-800">Echipa decide <strong>CÂT</strong> poate livra în următoarele 10 zile.</p>
    </div>
    <div class="p-3 bg-white shadow-sm border rounded-lg">
      <div class="font-bold text-[10px] text-gray-500 uppercase">Ritual: Daily Standup</div>
      <p class="text-[10px] text-gray-800">15 minute zilnice: Ce am făcut? Ce voi face? Impedimente?</p>
    </div>
  </div>
</div>

---
layout: center
---

# Concluzii

1. **SDLC** oferă structura necesară pentru a nu uita etape critice (precum testarea sau mentenanța).
2. **Agile/Scrum** permite adaptarea sistemului Aquaterra la feedback-ul real al clienților în timp util.
3. Succesul nu depinde doar de cod, ci de **colaborarea** strânsă între Product Owner (Business) și Echipa de Dezvoltare.

---
layout: center
---

# Mulțumesc pentru atenție!

### Întrebări?

<div class="mt-12 text-sm text-gray-500 font-medium">
Referințe: Tema 3 (Natalia Pleșca), Agile Manifesto (2001)
</div>
