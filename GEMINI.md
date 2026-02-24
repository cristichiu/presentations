# Project Overview

This project is a presentation created with [Slidev](https://sli.dev/). Slidev is a web-based slides maker and presenter tool designed for developers. It allows creating presentations using Markdown, integrating Vue.js components for interactivity, and styling with UnoCSS.

**Key Features & Technologies:**
*   **Content:** Written in Markdown (see `slides.md`).
*   **Theming:** Uses the `seriph` theme, configurable in `slides.md`'s frontmatter.
*   **Styling:** Leverages UnoCSS.
*   **Interactivity:** Supports embedding Vue components.
*   **Advanced Features:** Includes support for LaTeX, Mermaid diagrams, PlantUML diagrams, and Monaco Editor for live code editing.

# Building and Running

To work with this Slidev project, use the following commands:

*   **Install Dependencies:**
    ```bash
    npm install
    ```

*   **Start Development Server:**
    Runs the presentation in development mode and automatically opens it in your browser.
    ```bash
    npm run dev
    ```

*   **Build for Production:**
    Generates a static build of your presentation.
    ```bash
    npm run build
    ```

*   **Export Slides:**
    Exports the slides to various formats (e.g., PDF, PNGs).
    ```bash
    npm run export
    ```

# Development Conventions

*   **Slide Content:** All presentation content is defined in `slides.md` using Markdown syntax.
*   **Theming:** The project's visual theme is specified in the frontmatter of `slides.md`. The current theme is `seriph`.
*   **Custom Components:** Vue components can be placed in the `components/` directory and used directly within your Markdown slides.
*   **Styling:** Custom styles can be added within `<style>` tags directly in Markdown slides, affecting only that slide. Global styles or more complex styling should follow UnoCSS conventions or be handled in dedicated CSS files if configured.
*   **Diagrams and Equations:** Supports Mermaid and PlantUML for diagrams, and LaTeX for mathematical equations, all embedded within Markdown.
*   **Code Blocks:** Code blocks in `slides.md` benefit from syntax highlighting and can be made interactive with Monaco Editor integration.
