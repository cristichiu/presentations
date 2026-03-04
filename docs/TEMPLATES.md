# Slide Templates & Best Practices

Use these patterns to create high-quality slides and avoid common technical issues.

## 🏆 Troubleshooting & Best Practices (CRITICAL)

### 1. Displaying HTML Tags in Text
**Problem:** Writing `<tag>` directly in text causes Vue compilation errors (missing end tag).
**Solution:** Use the `<code>&lt;tag&gt;</code>` pattern. This ensures the tag is displayed correctly as text and styled as code, without confusing the compiler.

```markdown
<!-- Correct way to show tags in a heading or paragraph -->
# Elementul <code>&lt;form&gt;</code>
<p>Folosește tag-ul <code>&lt;label&gt;</code> pentru accesibilitate.</p>
```

### 2. Live Interactive Demos (`LiveWeb`)
- **Focus**: The editor shows only the content of the `<body>`. The rest of the boilerplate (HTML, CSS) is hidden to keep things simple.
- **Default Height**: `350px`.
- **Prop Usage**: Use the `html` prop to provide the initial code for the user to edit.
- **Syntax**: Use double quotes for the prop and single quotes inside the HTML code to avoid parsing errors.

```markdown
<LiveWeb 
  html="<form>
  <label for='name'>Name:</label>
  <input type='text' id='name'>
</form>"
/>
```

### 3. Layout Compatibility
Always prefer the `default` layout for theory slides to ensure they look good regardless of the theme choice. Avoid theme-specific layouts like `top-title` unless you are sure they exist in the current theme.

---

## 📖 1. Theory Slide

```markdown
---
layout: default
---

# Concept Name

- **Point 1**: Description.
- **Point 2**: Description.

<AdmonitionType type="tip">
  <span>Pro Tip: Use the <code>&lt;input&gt;</code> tag correctly.</span>
</AdmonitionType>
```

---

## 💻 2. Live Code Slide

```markdown
---
layout: default
---

# Interactive Demo

<LiveWeb 
  html="<div class='container'>
  <h1>Hello!</h1>
</div>"
/>
```

---

## 🎓 3. Exercise & Final Slide

```markdown
---
layout: section
---

# Exercițiu Practic 🛠️

Creează un formular simplu cu un buton.

---
layout: default
---

# Rezolvă Exercițiul

<LiveWeb />

---
layout: center
---

# Mulțumesc! 🚀
```
