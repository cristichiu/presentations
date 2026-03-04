# Slide Templates

Use these ready-to-copy templates for creating common slide types.

## 📖 1. Theory Slide (Top Title)

Use this for general concepts or definitions.

```markdown
---
layout: top-title
align: c
color: sky-light
---

::title::
# Concept Name

::content::

The core idea behind this concept:

- **Key Point 1**: Explanation of point 1.
- **Key Point 2**: Explanation of point 2.

<AdmonitionType type="tip">
**Pro Tip:** This is a helpful hint for students.
</AdmonitionType>
```

---

## 🏗️ 2. Comparison Slide (Two Columns)

Use this for comparing two technologies or approaches.

```markdown
---
layout: top-title-two-cols
columns: is-6
color: sky-light
align: c-lt-lt
---

:: title ::
# Comparison Title

:: left ::

### Approach A
- Pros: Fast, simple.
- Cons: Limited flexibility.

:: right ::

### Approach B
- Pros: Highly flexible.
- Cons: Complex setup.

:: default ::

<AdmonitionType type="note" class="mt-4">
Choose the approach that fits your project requirements.
</AdmonitionType>
```

---

## 💻 3. Interactive Code Sandbox

Use this to demonstrate live code that students can interact with.

```markdown
---
layout: top-title
align: c
color: sky-light
---

::title::
# Interactive Example

::content::

Experiment with the code below to see the results.

<LiveReact 
  code={`import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <h4>Counter Demo</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}`} 
  editorHeight="400px" 
/>
```

---

## 📈 4. Process Flow Slide

Use this for explaining step-by-step processes or lifecycles.

```markdown
---
layout: top-title
align: c
color: sky-light
---

::title::
# Process Lifecycle

::content::

<script setup>
const steps = [
  { title: 'Step 1', description: 'Initialize' },
  { title: 'Step 2', description: 'Update' },
  { title: 'Step 3', description: 'Destroy' }
]
</script>

<ProcessFlow :steps="steps" />
```

---

## 🌟 5. Visual Highlight (Info Cards)

Use this for showcasing a set of features or concepts visually.

```markdown
---
layout: top-title
align: c
color: sky-light
---

::title::
# Key Features

::content::

<div class="grid grid-cols-2 gap-4 h-full items-stretch">

<InfoCard icon="⚡" title="Fast">
  Optimized for speed.
</InfoCard>

<InfoCard icon="🎨" title="Styled">
  Beautiful design.
</InfoCard>

</div>
```
