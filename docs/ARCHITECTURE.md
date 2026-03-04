# Project Architecture

The React Course slides are organized in a monorepo structure to share resources efficiently while keeping individual slide modules independent.

## 📂 Directory Structure

*   **`common/`**: The core of the project. Contains:
    *   `components/`: Vue components available globally.
    *   `setup/`: Shared Slidev setup (registering components).
    *   `theme/`: Global styles and theme configuration.
    *   `public/`: Shared assets like logos and images.
*   **`slides/`**: Each subdirectory is a standalone Slidev presentation.
    *   `starter/`: A boilerplate module for starting new lessons.
*   **`example/`**: Reference implementation of several course modules (e.g., introduction, state, props).
*   **`scripts/`**: Automation tools for creating modules and managing the project.
*   **`docs/`**: Documentation and templates (this system).

## 🔗 How it Works

1.  **Shared Resources**: Each module in `slides/` has its own `package.json` and `vite.config.ts`, but they all reference files in the `common/` directory via relative paths (`../../common/...`).
2.  **Shared Setup**: The `setup/main.ts` in each module imports and runs the `sharedSetup` from `common/setup/main.ts`.
3.  **Vite Plugin**: The `multi-public-plugin.ts` in `common/vite/` is used in each module's `vite.config.ts` to allow serving assets from the `common/public/` directory.

## 📦 Root Management

The root `package.json` contains scripts to start each module:
```bash
npm run dev:introduction
npm run dev:state
```
This is managed by the `create-module.mjs` script, which automatically adds these scripts to the root.
