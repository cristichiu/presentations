# Multi-Domain Slidev Presentation System

This system is designed to create high-quality, interactive slides across multiple domains (React, Python, Data Science, History, etc.).

## 📚 Table of Contents

1.  **[Architecture Overview](./docs/ARCHITECTURE.md)** - How the project is structured.
2.  **[Component Library](./docs/COMPONENTS.md)** - Available components and how to use them.
3.  **[Workflow Guide](./docs/WORKFLOW.md)** - How to create and manage slide modules.
4.  **[Theme Guide](./docs/THEMES.md)** - Choosing the best theme for your domain.
5.  **[Slide Templates](./docs/TEMPLATES.md)** - Ready-to-use patterns for common slide types.

## 🚀 Quick Start

To create a new module (e.g., `06-python-basics`):

1.  Run the creation script with your preferred theme and title:
    ```bash
    node scripts/create-module.mjs <folder> [theme] [title]
    # Example:
    node scripts/create-module.mjs 06-python-basics dracula "Python Course"
    ```
2.  Install dependencies to link the new workspace:
    ```bash
    pnpm install
    ```
3.  Start development:
    ```bash
    npm run dev:hooks
    ```

## 🛠️ Project Stack

*   **Framework**: [Slidev](https://sli.dev/)
*   **Theme**: [neversink](https://github.com/onivoro/slidev-theme-neversink)
*   **Icons**: [Iconify](https://iconify.design/)
*   **Styling**: [UnoCSS](https://uno.antfu.me/)
*   **Interactive Demos**: [Sandpack](https://sandpack.codesandbox.io/) (via `sandpack-vue3`)
