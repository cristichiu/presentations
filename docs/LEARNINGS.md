# Experience & Learnings: Academic Presentations Workflow

This document summarizes the workflow and patterns discovered while creating academic-style presentations (e.g., Comparative Analysis of Educational Systems).

## 🚀 Optimized Workflow for Research-Based Slides

When creating a presentation based on external materials or research:

1.  **Requirement Extraction**: 
    - Use `unzip -p document.docx word/document.xml | sed 's/<[^>]*>//g'` to quickly extract text from `.docx` files if `pandoc` is unavailable.
    
2.  **Module Creation**:
    - Use `node scripts/create-module.mjs <name> neversink "<Title>"`
    - The `neversink` theme is highly recommended for academic content due to its clean typography and support for admonitions.

3.  **Content Organization (Best Practices)**:
    - **Cuprins (TOC)**: Use `ProcessFlow` with `direction="horizontal"` for a modern table of contents.
    - **Analysis/Comparison**: Use `CardContainer` with `layout="grid-2"` combined with `InfoCard` to present binary comparisons (e.g., RM vs. Other Country).
    - **Lists**: Utilize standard Markdown lists within Grid layouts for clarity.
    - **Tables**: Use standard Markdown tables for direct data comparison (e.g., Grading scales).

## 🛠️ Component Patterns discovered

### Using `ProcessFlow` for Roadmaps
The `ProcessFlow` component is excellent not just for processes, but for "Course Roadmaps" or "Summary Steps":
```markdown
<ProcessFlow :steps="[
  { title: 'Intro', description: 'Context and Goals' },
  { title: 'Analysis', description: 'Deep dive into data' }
]" direction="horizontal" />
```

### Using `InfoCard` for Data Points
Instead of bullet points, use `InfoCard` for high-impact data points:
```markdown
<InfoCard icon="📊" title="Scale 1-10">
  Details about the scale...
</InfoCard>
```

## 🌍 Localization (Romanian Context)
For presentations in Romanian:
- Ensure the `info` field in frontmatter is updated to reflect the course/discipline name.
- Use `layout: section` for major transitions.
- The `neversink` theme handles Romanian diacritics perfectly.

## 🧪 Quick Validation
After creating a module, always check:
1. `slides/<module>/setup/main.ts` - ensure it imports `sharedSetup` to have access to global components.
2. `root package.json` - ensure the `dev:<name>` script was added correctly.
