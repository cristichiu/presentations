# Component Library

This guide describes the custom components available in the `common/components/` directory and those provided by the `neversink` theme.

## 🛠️ Common Components

These components are globally registered and can be used in any slide.

### `GithubLink`
A small icon link to the GitHub repository.
```markdown
<GithubLink repo="https://github.com/cristi-usm/react-course" />
```

### `InfoCard`
A card component used to highlight information or key concepts.
```markdown
<InfoCard icon="📦" title="npm Registry">
  A huge database of code written by other programmers.
</InfoCard>
```
*   **Props**: `icon`, `title`. Supports slots for `icon`, `title`, and `default`.

### `ProcessFlow`
A step-by-step flow diagram for explaining processes.
```markdown
<script setup>
const steps = [
  { title: 'Step 1', description: 'Description 1' },
  { title: 'Step 2', description: 'Description 2' }
]
</script>
<ProcessFlow :steps="steps" />
```
*   **Props**: `steps` (Array of objects with `title` and `description`).

### `LiveReact`
An interactive React sandbox using Sandpack.
```markdown
<LiveReact 
  code="import React from 'react'; export default () => <h1>Hello!</h1>" 
  editorHeight="400px" 
/>
```
*   **Props**: `code`, `files`, `showFileExplorer`, `dependencies`, `editorHeight`, `showLineNumbers`.

### `CardContainer`
A container for grouping multiple `InfoCard` components.
```markdown
<CardContainer>
  <InfoCard title="Card 1" />
  <InfoCard title="Card 2" />
</CardContainer>
```

---

## 🎨 Theme Components (`neversink`)

### `AdmonitionType`
Used for tips, notes, warnings, and errors.
```markdown
<AdmonitionType type="tip">
  This is a helpful tip!
</AdmonitionType>
```
*   **Types**: `tip`, `note`, `warning`, `error`, `important`, `caution`.

### `SpeechBubble`
A bubble for highlighting text with optional animations.
```markdown
<SpeechBubble position="b" color="sky" shape="round" animation="float">
  # Hello!
</SpeechBubble>
```
*   **Props**: `position` (t, b, l, r), `color` (sky, rose, amber, etc.), `shape`, `animation`.

---

## 🖼️ Built-in Slidev Features

### Icons
Use any icon from Iconify:
```markdown
<carbon:logo-github />
```

### UnoCSS
Apply utility classes directly in Markdown:
```markdown
<div class="grid grid-cols-2 gap-4 mt-10 text-center">
  ...
</div>
```
