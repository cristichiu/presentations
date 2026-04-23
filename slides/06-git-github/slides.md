---
theme: neversink
title: 'Git & GitHub pentru Începători'
transition: slide-left
layout: cover
highlighter: shiki
lineNumbers: true
draw:
  enabled: true
info: |
  ## Curs Git & GitHub
  Lecție pentru începători.
  Durată: 1.5 ore
---

# Git & GitHub
### Cum să nu-ți mai pierzi codul niciodată

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer hover:bg-white/10 opacity-50">
    Start Lecție <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <div class="text-sm opacity-50">Instructor: [Numele Tău]</div>
</div>

---
layout: section
---

# 1. Introducere
### De ce avem nevoie de GitHub?

---
layout: default
---

# Te regăsești în această situație?

Imaginează-ți că lucrezi la un proiect important:

- 📂 `proiect_final`
- 📂 `proiect_final_v2`
- 📂 `proiect_final_MODIFICAT`
- 📂 `proiect_final_ULTIMA_VERSIUNE_PROMIT`
- 📂 `proiect_final_SERIOS_GATA`

<v-click>

### Problemele:
1. **Confuzie:** Care este versiunea corectă?
2. **Frică:** "Dacă șterg ceva și nu mai pot da Undo?"
3. **Colaborare:** Cum lucrez cu un coleg? Îi trimit arhivă pe Telegram/Discord?

</v-click>

---

# Soluția: Version Control

### Ce este Git? (Analogie)
Este ca o **Mașină a Timpului** pentru fișierele tale. Poți salva un "moment" din proiect și te poți întoarce la el oricând.

### Ce este GitHub?
Este **"Facebook-ul" sau "Google Docs-ul" programatorilor**.
- Un loc unde îți ții proiectele online (în Cloud).
- Un loc unde colaborezi cu alți oameni.
- Portofoliul tău profesional.

<div class="mt-8 p-4 bg-blue-500/10 border-l-4 border-blue-500">
  <strong>Exemplu Real:</strong> În loc să-i trimiți colegului un fișier, amândoi lucrați pe același "proiect online". GitHub știe să combine munca voastră automat!
</div>

---
layout: section
---

# 2. Terminalul
### Cum controlăm calculatorul prin text

---

# Ce este Terminalul?

Majoritatea oamenilor folosesc o interfață grafică (click-uri pe iconițe).
Programatorii preferă **Terminalul (CLI)**.

- **Analogie:** Iconițele sunt ca un meniu fix la restaurant. Terminalul este ca o bucătărie unde poți cere exact ce vrei, cum vrei.
- **De ce?** Este mult mai rapid și poți automatiza lucruri complicate.

<div class="grid grid-cols-2 gap-4 mt-8">
  <div class="border p-4 rounded bg-gray-800/50">
    <h4 class="text-sm font-bold opacity-50">GUI (Normal)</h4>
    <p>Right Click -> New Folder -> Type Name</p>
  </div>
  <div class="border p-4 rounded bg-gray-800/50">
    <h4 class="text-sm font-bold opacity-50">CLI (Terminal)</h4>
    <p class="font-mono">mkdir nume_folder</p>
  </div>
</div>

---

# Structura unei comenzi

O comandă este ca o propoziție simplă:

<div class="text-2xl font-mono mt-10 bg-black p-6 rounded text-green-400">
  comanda <span class="text-blue-400">argumente</span>
</div>

<div class="mt-8">
  <p><strong>Exemplu:</strong> <code>mkdir <span class="text-blue-400">proiect_nou</span></code></p>
  <ul>
    <li><code>mkdir</code> -> "Make Directory" (Acțiunea: Creează un folder)</li>
    <li><code>proiect_nou</code> -> Numele folderului (Ținta)</li>
  </ul>
</div>

---

# Comenzi esențiale (Dosarul Fizic)

Gândește-te la fișiere ca la niște documente într-un dosar.

| Comandă | Ce face? | Traducere pe scurt |
| :--- | :--- | :--- |
| `pwd` | Print Working Directory | "Unde sunt acum?" |
| `ls` | List | "Ce fișiere am în acest folder?" |
| `cd` | Change Directory | "Intră în folderul X" |
| `mkdir` | Make Directory | "Creează un folder nou" |
| `touch` | Create File | "Creează un fișier gol" |

---
layout: section
---

# 3. Git + GitHub CLI
### Workflow-ul de bază

---

# Ce este un "Repository"?

Un **Repository** (sau "Repo") este un folder inteligent.

- Un folder normal doar stochează fișiere.
- Un **Repo Git** stochează fișierele **ȘI** istoricul lor complet.

<div class="mt-10 flex justify-center items-center gap-10">
  <div class="text-center">
    <div class="text-5xl">📁</div>
    <div class="text-xs mt-2">Folder Normal</div>
  </div>
  <div class="text-3xl">→</div>
  <div class="text-center bg-green-500/20 p-4 rounded-lg">
    <div class="text-5xl">📦</div>
    <div class="text-xs mt-2 font-bold">Git Repo</div>
    <div class="text-[10px] opacity-70">(Cu istoric & memorie)</div>
  </div>
</div>

---

# Workflow: Cei 4 Pași Magici

Imaginează-ți că faci o poză la un peisaj:

1. **`git init`** (Cumpără camera foto) - Pregătește folderul.
2. **`git add .`** (Încadrează peisajul) - Alege ce vrei să salvezi.
3. **`git commit`** (Apasă pe butonul de poză) - Salvează momentul definitiv.
4. **`git push`** (Încarcă poza pe Instagram) - Trimite pe GitHub.

---

# Detalierea pașilor

### 1. `git init`
Rulează această comandă o singură dată la începutul unui proiect.
```bash
git init
```

### 2. `git add .`
"Pregătește" fișierele. Punctul (`.`) înseamnă "toate fișierele".
```bash
git add .
```

### 3. `git commit -m "mesaj"`
Creează o versiune stabilă. Mesajul trebuie să explice ce ai schimbat.
```bash
git commit -m "Adaugă pagina de start"
```

---

# 4. `git push`

Toate comenzile de până acum au lucrat doar **pe calculatorul tău**.
Ca să le vadă și alții (sau să le ai în cloud), trebuie să le "împingi" pe server.

```bash
git push origin main
```

---
layout: section
---

# 4. Setup Cont GitHub
### Ne mutăm în Cloud

---

# Pași Setup

1. Mergi pe [github.com](https://github.com) și creează un cont.
2. **Confirmă email-ul** (foarte important!).
3. În Terminal, spune-i lui Git cine ești (doar prima dată):
   ```bash
   git config --global user.name "Numele Tau"
   git config --global user.email "email@exemplu.com"
   ```

<v-click>

### Crearea primului Repo online:
- Click pe butonul verde **New** pe GitHub.
- Pune-i numele `primul-meu-repo`.
- Lasă-l **Public**.
- Click pe **Create Repository**.

</v-click>

---
layout: section
---

# 5. Exercițiu Practic Final
### Colaborarea

---

# Misiunea: Lucrul în Echipă

Formați echipe de câte 2 (Elev A și Elev B).

### Pasul 1: Elev A (Liderul)
- Creează un repo pe GitHub numit `proiect-echipa`.
- Merge la `Settings -> Collaborators` și îl adaugă pe **Elev B**.

### Pasul 2: Elev B (Colaboratorul)
- Acceptă invitația (verifică email-ul!).
- Deschide terminalul și scrie:
  ```bash
  git clone <link-ul-de-la-repo>
  ```
- Creează un fișier `echipa.txt`, adaugă numele lui, face `add`, `commit` și `push`.

---

# Misiunea (continuare)

### Pasul 3: Elev A
- Scrie în terminal:
  ```bash
  git pull
  ```
- **Surpriză!** Fișierul creat de colegul tău a apărut pe calculatorul tău.

### Pasul 4: Invers
- Elev A modifică fișierul, face `commit` și `push`.
- Elev B face `pull`.

---
layout: fact
---

# Recapitulare: Ce am învățat?

1. **Terminalul** nu este înfricoșător (`ls`, `cd`, `mkdir`).
2. **Git** este jurnalul proiectului tău (`add`, `commit`).
3. **GitHub** este casa proiectului în cloud (`push`, `pull`, `clone`).
4. **Colaborarea** înseamnă că nu mai trimitem fișiere prin mail/Discord.

---
layout: center
---

# Întrebări?
### Felicitări! Acum ești un programator "versio-controlat".

<div class="mt-10 opacity-50 text-sm">
Resurse extra: <a href="https://git-scm.com/book/en/v2">Pro Git Book</a> | <a href="https://education.github.com/git-cheat-sheet-education.pdf">Git Cheat Sheet</a>
</div>
