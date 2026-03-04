# Slidev Theme Selection Guide

This guide helps you choose the right theme based on the domain, audience, and content of your presentation.

## 🎨 Curated Theme List

| Theme Name | Style | Best For... | Custom Features |
| :--- | :--- | :--- | :--- |
| **neversink** | Academic / Clean | Lectures, deep-dives, documentation | Admonitions, sticky notes, QR codes |
| **geist** | Vercel / Minimalist | SaaS, modern web dev, clean design | High whitespace, professional feel |
| **dracula** | Developer / Dark | Code-heavy talks, hackers, tech events | High contrast, classic syntax highlighting |
| **scholarly** | Research / Formal | Academic papers, formal presentations | Structured layouts, clean typography |
| **joyful** | Vibrant / Energetic | Creative talks, marketing, advocacy | High energy, bold colors |
| **seriph** | Classic / Serif | Literature, history, storytelling | Beautiful serif fonts, elegant feel |
| **apple-basic** | Presentation / Sleek | General business, design, pitch decks | Smooth transitions, simple layout |
| **the-unnamed** | VS Code Style | Developer tutorials, tool intros | Customizable accent colors |

---

## 🛠️ How to Switch Themes

1.  Open `slides.md` of your module.
2.  Change the `theme` field in the frontmatter:
    ```markdown
    ---
    theme: geist
    ---
    ```
3.  If the theme is not installed, Slidev will ask you to install it when you run `npm run dev`.

---

## 🧠 Smart Selection Logic

When creating a new presentation, consider these factors:

### 1. The Domain
*   **Web Development**: `geist`, `dracula`, `the-unnamed`.
*   **Academic / Science**: `neversink`, `scholarly`.
*   **Design / UX**: `joyful`, `geist`.
*   **Business / Sales**: `apple-basic`.

### 2. The Environment
*   **Large Screens (Projectors)**: High-contrast themes like `dracula` or `neversink` (light mode).
*   **Webinars / Online**: Minimalist themes like `geist` work best for screen sharing.

### 3. The Content
*   **Code-Heavy**: Themes with great syntax highlighting (`dracula`, `penguin`).
*   **Diagram-Heavy**: Themes with plenty of space (`neversink`, `scholarly`).
