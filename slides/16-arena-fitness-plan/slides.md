---
theme: neversink
transition: slide-left
title: 'Planificarea Proiectului: Arena Fitness Chișinău'
info: 'Management de Proiect · Arena Fitness · 2026'
lineNumbers: true
draw:
  enabled: true
---

# Slide 1 – Obiectivele principale ale proiectului

**Proiect**: Sistem Informatic de Management - Arena Fitness Chișinău

Obiectivele SMART pentru dezvoltarea sistemului:

- **Digitalizare 100%**: Eliminarea evidenței pe suport de hârtie pentru abonamente.
- **Rezervări Online**: Modul web pentru rezervarea antrenamentelor în < 2 minute.
- **Evidența Membrilor**: Automatizarea accesului prin cod QR și monitorizare real-time.
- **Management Antrenori**: Gestionarea automată a orarului și a comisioanelor.
- **Raportare Financiară**: Generarea automată a rapoartelor de vânzări și cash-flow.
- **Eficiență**: Reducerea timpului de check-in la recepție cu 50%.
- **Lansare**: Punerea în funcțiune a versiunii v1.0 în termen de 120 de zile.

---

# Slide 2 – Date generale ale proiectului

Detaliile fundamentale pentru identificarea proiectului:

| Câmp | Detalii |
| :--- | :--- |
| **Denumirea Proiectului** | Sistem Informatic de Management "Arena Fitness" |
| **Beneficiar** | Arena Fitness Chișinău |
| **Autor** | Consultant IT / Manager Proiect |
| **Data realizării** | 28.04.2026 |
| **Domeniu** | Fitness & Sport Management |
| **Tip Proiect** | Sistem informatic web (SaaS) |
| **Durata Estimată** | 4 luni (120 zile) |

---

# Slide 3 – Graficul de activitate al echipei

Programul de lucru stabilit (Luni-Vineri):

| Activitate | Interval Orar | Detalii |
| :--- | :--- | :--- |
| **Program de lucru** | 09:00 – 18:00 | Luni – Vineri |
| **Pauză de masă** | 13:00 – 14:00 | Zilnic |
| **Weekend** | - | Liber |
| **Overtime** | 18:00 – 20:00 | La nevoie (faza de Testare) |

---

# Slide 4 – Lista activităților necesare dezvoltării SI

Etapele structurate ale proiectului:

1. **Analiza Cerințelor**: Colectarea și documentarea specificațiilor.
2. **Proiectare Sistem**: Arhitectura bazei de date și a fluxurilor.
3. **Design UI/UX**: Crearea prototipurilor vizuale (Figma).
4. **Dezvoltare Frontend**: Implementarea interfeței utilizator.
5. **Dezvoltare Backend**: Logica de business și API.
6. **Implementare Bază de Date**: Structurarea datelor Arena Fitness.
7. **Testare (QA)**: Verificarea securității și performanței.
8. **Implementare (Deployment)**: Configurarea serverelor cloud.
9. **Training Personal**: Instruirea echipei de la recepție.
10. **Lansare Oficială**: Trecerea în producție (Live).

---

# Slide 5 – Date început / sfârșit / durate

Planificarea calendaristică a etapelor:

| Activitate | Start | Final | Durata |
| :--- | :---: | :---: | :---: |
| Analiza Cerințelor | 04.05.2026 | 15.05.2026 | 12 zile |
| Proiectare & Design | 18.05.2026 | 12.06.2026 | 20 zile |
| Dezvoltare Backend & DB | 15.06.2026 | 24.07.2026 | 30 zile |
| Dezvoltare Frontend | 29.06.2026 | 07.08.2026 | 30 zile |
| Testare & QA | 10.08.2026 | 28.08.2026 | 15 zile |
| Training & Deployment | 31.08.2026 | 11.09.2026 | 10 zile |

---

# Slide 6 – Necesarul de resurse

Resurse umane, tehnice, materiale și financiare:

- **Umane**: 1 Manager Proiect, 2 Developeri Full-stack, 1 UI/UX Designer, 1 Tester.
- **Tehnice**: Stații de lucru, Hosting Cloud (AWS), Licențe Software, Internet Gbit.
- **Materiale**: Tablete recepție, Scanere QR, Turnichete acces, Birou co-working.
- **Costuri**: Buget estimativ 16.500 EUR (include salarii, licențe și hardware).

---

# Slide 7 – Alocarea resurselor pe activități

Responsabilități și resurse per etapă:

| Activitate | Responsabil | Resurse Utilizate |
| :--- | :--- | :--- |
| **Analiza & Proiectare** | Manager Proiect | Specificații, Figma |
| **Design UI/UX** | Designer | Figma, Adobe Suite |
| **Dezvoltare (Coding)** | Developeri | VS Code, Node.js, DB |
| **Testare QA** | Specialist QA | Selenium, Postman |
| **Instruire & Lansare** | Manager Proiect | Manuale, Infrastructură |

---

# Slide 8 – Bugetul proiectului (Estimativ)

Calcul realist pentru Arena Fitness Chișinău:

| Categorie | Detalii | Cost (EUR) |
| :--- | :--- | :---: |
| **Salarii Echipă** | 4 luni de dezvoltare | 12.000 |
| **Echipamente** | Tablete, Scannere QR | 1.500 |
| **Hosting & Licențe** | Servicii Cloud & Tool-uri | 800 |
| **Testare & Implementare** | QA și Deployment | 700 |
| **Rezervă Riscuri (10%)** | Neprevăzute | 1.500 |
| **TOTAL** | | **16.500 EUR** |

---

# Slide 9 – Relațiile dintre activități / Diagrama PERT

Dependențele logice între fazele proiectului:

<script setup>
const steps = [
  { title: 'START', description: 'Analiza Cerințelor' },
  { title: 'B', description: 'Proiectare & Design' },
  { title: 'C', description: 'Dezvoltare (Paralel FE/BE)' },
  { title: 'D', description: 'Testare & QA' },
  { title: 'E', description: 'Lansare (Final)' }
]
</script>

<ProcessFlow :steps="steps" />

**Flux**: Analiză → Proiectare → Dezvoltare → Testare → Implementare → Lansare.

---

# Slide 10 – Diagrama Gantt (Calendar Proiect)

Vizualizarea grafică a duratelor pe activități:

<div class="mt-8">
<div class="flex items-center gap-2 mb-2 text-xs">
  <div class="w-24">Analiza</div><div class="h-4 bg-sky-500 rounded" style="width: 10%"></div>
</div>
<div class="flex items-center gap-2 mb-2 text-xs">
  <div class="w-24">Proiectare</div><div class="h-4 bg-sky-400 rounded ml-[10%]" style="width: 15%"></div>
</div>
<div class="flex items-center gap-2 mb-2 text-xs">
  <div class="w-24">Dezvoltare</div><div class="h-4 bg-indigo-500 rounded ml-[25%]" style="width: 40%"></div>
</div>
<div class="flex items-center gap-2 mb-2 text-xs">
  <div class="w-24">Testare</div><div class="h-4 bg-rose-400 rounded ml-[65%]" style="width: 20%"></div>
</div>
<div class="flex items-center gap-2 mb-2 text-xs">
  <div class="w-24">Lansare</div><div class="h-4 bg-green-500 rounded ml-[85%]" style="width: 10%"></div>
</div>
</div>

---

# Slide 11 – Gestiunea resurselor

Monitorizarea și controlul resurselor proiectului:

- **Urmărirea progresului**: Ședințe săptămânale și utilizarea Jira.
- **Redistribuire personal**: Ajustarea task-urilor pentru evitarea blocajelor.
- **Respectarea termenelor**: Monitorizarea drumului critic și a deadline-urilor.
- **Control costuri**: Revizuirea bugetului față de cheltuielile reale.
- **Raportare periodică**: Informarea beneficiarului la finalul fiecărei etape.
- **Prevenirea suprasolicitării**: Echilibrarea volumului de muncă în echipă.
