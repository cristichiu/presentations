<template>
  <div class="sandbox-container" :class="{ 'console-only-mode': consoleOnly }" @keydown.stop @keyup.stop @keypress.stop :style="containerStyle">
    <SandpackProvider :template="template" :files="sandpackFiles" :custom-setup="customSetup" :theme="effectiveTheme" :options="sandpackProviderOptions">
      <SandpackLayout>
        <SandpackFileExplorer v-if="showFileExplorer && !consoleOnly" />
        <SandpackCodeEditor :extensions="extensions" :extensionsKeymap="extensionsKeymap"
          :showLineNumbers="sandpackOptions.showLineNumbers" :showInlineErrors="sandpackOptions.showInlineErrors"
          :wrapContent="sandpackOptions.wrapContent" :editorHeight="sandpackOptions.editorHeight"
          :showTabs="sandpackOptions.showTabs" :closableTabs="sandpackOptions.closableTabs" />
        <SandpackConsole v-if="consoleOnly || showConsole" :showHeader="true" :resetOnPreviewRestart="true" />
        <SandpackPreview
          :showNavigator="consoleOnly ? false : sandpackOptions.showNavigator"
          :showOpenInCodeSandbox="false"
          :showRefreshButton="consoleOnly ? true : true" />
      </SandpackLayout>
    </SandpackProvider>
  </div>
</template>

<script setup>
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview, SandpackFileExplorer, SandpackConsole } from 'sandpack-vue3';
import { autocompletion, completionKeymap } from '@codemirror/autocomplete';
import { computed } from 'vue';
import { useDarkMode } from '@slidev/client';

const { isDark } = useDarkMode();

const props = defineProps({
  code: { type: String, default: "" },
  html: { type: String, default: "" },
  files: { type: Object, default: null },
  dependencies: { type: Object, default: () => ({}) },
  theme: { type: String, default: null },
  editorHeight: { type: [String, Number], default: '350px' },
  showLineNumbers: { type: Boolean, default: true },
  showInlineErrors: { type: Boolean, default: true },
  showTabs: { type: Boolean, default: false },
  showNavigator: { type: Boolean, default: false },
  showFileExplorer: { type: Boolean, default: false },
  showConsole: { type: Boolean, default: false },
  consoleOnly: { type: Boolean, default: false },
  options: { type: Object, default: () => ({}) }
});

const template = 'static';

const effectiveTheme = computed(() => props.theme || (isDark.value ? 'dark' : 'light'));

const defaultCSS = computed(() => {
  const isLightTheme = effectiveTheme.value === 'light';
  return `body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  padding: 24px;
  background-color: ${isLightTheme ? '#f8f9fa' : '#1e1e1e'};
  color: ${isLightTheme ? '#212529' : '#e0e0e0'};
}
form {
  max-width: 400px;
  margin: 0 auto;
  background: ${isLightTheme ? '#ffffff' : '#2d2d2d'};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
h1, h2, h3, p { margin-top: 0; }
label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${isLightTheme ? '#495057' : '#adb5bd'};
}
input[type="text"], input[type="email"], input[type="number"], input[type="password"], select, textarea {
  display: block;
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 1.2rem;
  border: 1px solid ${isLightTheme ? '#dee2e6' : '#495057'};
  border-radius: 6px;
  box-sizing: border-box;
  background-color: ${isLightTheme ? '#fff' : '#3d3d3d'};
  color: inherit;
}
/* Radio & Checkbox special styling */
input[type="radio"], input[type="checkbox"] {
  display: inline-block;
  width: auto;
  margin: 0 8px 0 0;
  vertical-align: middle;
  cursor: pointer;
}
input[type="radio"] + label, input[type="checkbox"] + label {
  display: inline-block;
  margin-bottom: 1rem;
  vertical-align: middle;
  cursor: pointer;
  font-weight: 400;
}
button {
  width: 100%;
  padding: 0.8rem;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
button:hover { background-color: #0b5ed7; transform: translateY(-1px); }`;
});

const sandpackFiles = computed(() => {
  if (props.files) return props.files;

  const userHTML = props.html || '<!-- Scrie codul tău aici -->\n<form>\n  <label>Nume:</label>\n  <input type="text">\n  <button type="submit">Trimite</button>\n</form>';

  const entryHTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="root"></div>
  <script>
    async function update() {
      try {
        const res = await fetch('code.html');
        const text = await res.text();
        document.getElementById('root').innerHTML = text;
      } catch (e) {}
    }
    update(); // Run once on load
  <\/script>
</body>
</html>`;

  return {
    '/index.html': { code: entryHTML, hidden: true },
    '/code.html': { code: userHTML, active: true },
    '/styles.css': { code: defaultCSS.value, hidden: true }
  };
});

const customSetup = computed(() => ({ dependencies: { ...props.dependencies } }));

const sandpackOptions = computed(() => ({
  showLineNumbers: props.showLineNumbers,
  showInlineErrors: props.showInlineErrors,
  wrapContent: true,
  editorHeight: typeof props.editorHeight === 'number' ? `${props.editorHeight}px` : props.editorHeight,
  showTabs: props.showTabs,
  showNavigator: props.showNavigator,
  closableTabs: props.showTabs
}));

const containerStyle = computed(() => {
  const heightValue = typeof props.editorHeight === 'number' ? `${props.editorHeight}px` : props.editorHeight;
  return { height: heightValue, minHeight: heightValue };
});

const sandpackProviderOptions = computed(() => ({
  activeFile: '/code.html',
  initMode: 'immediate',
  autorun: true,
  autoReload: true,
  recompileMode: 'immediate',
  ...props.options
}));

const extensions = [autocompletion()];
const extensionsKeymap = [completionKeymap];
</script>

<style scoped>
.sandbox-container { width: 100%; }
.sandbox-container :deep(.sp-wrapper) { width: 100% !important; }
.sandbox-container :deep(.sp-layout) { width: 100% !important; }
.sandbox-container :deep(.sp-preview) { background: white !important; }
</style>
