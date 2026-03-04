# Content Creation Workflow

Follow these steps to create new lessons and presentations for the React Course.

## 🆕 1. Creating a New Module

Use the provided script to scaffold a new module. You can specify a custom theme and course title.

```bash
node scripts/create-module.mjs <module-name> [theme] [title]
# Example: node scripts/create-module.mjs 01-python-basics dracula "Python 101"
```

Common themes to consider: `neversink` (academic), `geist` (minimalist), `dracula` (dark/code).
See the **[Theme Guide](./THEMES.md)** for more options.

After creation, run:
```bash
pnpm install
```

## 🧑‍💻 2. Development

Start the development server:
```bash
npm run dev:<module-name>
# Example: npm run dev:hooks
```

The presentation will be available at a unique port (assigned automatically).

## 📝 3. Writing Slides

Each slide is separated by `---`. Use layouts and components for better visualization.

### Frontmatter
The starting slide must have a frontmatter:
```markdown
---
title: 'Lesson Title'
theme: neversink
transition: slide-left
layout: cover
color: sky-light
info: 'React Course · 2026'
---
```

### Layouts
*   `cover`: For main module titles.
*   `section`: For breaking sections.
*   `top-title`: Standard slide with a title at the top.
*   `top-title-two-cols`: Two-column layout with a title.

### Assets
*   **Images**: Place images in `common/public/` or the module's own `public/` directory. Reference them with `/image-name.png`.

## 🏗️ 4. Building & Exporting

To build a module for production:
```bash
cd slides/<module-name>
npm run build
```

The static build will be in `slides/<module-name>/dist/`.
