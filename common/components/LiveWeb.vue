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
  code: {
    type: String,
    default: "console.log('Hello World!');\ndocument.body.innerHTML = '<h1>Hello from JavaScript!</h1>';"
  },
  files: {
    type: Object,
    default: null
  },
  dependencies: {
    type: Object,
    default: () => ({})
  },
  theme: {
    type: String,
    default: null
  },
  editorHeight: {
    type: [String, Number],
    default: '800px'
  },
  showLineNumbers: {
    type: Boolean,
    default: true
  },
  showInlineErrors: {
    type: Boolean,
    default: true
  },
  showTabs: {
    type: Boolean,
    default: true
  },
  showNavigator: {
    type: Boolean,
    default: false
  },
  showFileExplorer: {
    type: Boolean,
    default: true
  },
  showConsole: {
    type: Boolean,
    default: false
  },
  consoleOnly: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    default: () => ({})
  }
});

const template = 'static';

const effectiveTheme = computed(() => {
  // Use explicit theme prop if provided, otherwise follow presentation theme
  return props.theme || (isDark.value ? 'dark' : 'light');
});

const defaultCSS = computed(() => {
  const isLightTheme = effectiveTheme.value === 'light';
  return `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 20px;
  background: ${isLightTheme ? '#f5f5f5' : '#1e1e1e'};
  color: ${isLightTheme ? '#000' : '#e0e0e0'};
}

#app {
  max-width: 800px;
  margin: 0 auto;
  background: ${isLightTheme ? 'white' : '#2d2d2d'};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,${isLightTheme ? '0.1' : '0.3'});
}`;
});

const defaultHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Demo</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div id="app">
    <h1>Hello World!</h1>
  </div>
  <script src="/index.js"><` + `/script>
</body>
</html>`;

const consoleOnlyHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Console Demo</title>
</head>
<body>
  <script type="module">
    // Fetch the code and wrap in IIFE for isolation
    const scriptContent = await fetch('/index.js').then(r => r.text());
    (function() {
      eval(scriptContent);
    })();
  <` + `/script>
</body>
</html>`;

const sandpackFiles = computed(() => {
  if (props.files) {
    return props.files;
  }

  return {
    '/index.html': props.consoleOnly ? consoleOnlyHTML : defaultHTML,
    '/index.js': props.code,
    '/styles.css': {
      code: defaultCSS.value,
      hidden: true
    }
  };
});

const customSetup = computed(() => ({
  dependencies: {
    ...props.dependencies
  }
}));

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
  return {
    height: heightValue,
    minHeight: heightValue
  };
});

const sandpackProviderOptions = computed(() => ({
  activeFile: props.options.activeFile || (props.consoleOnly ? '/index.js' : '/index.html'),
  initMode: 'user-visible',
  autorun: true,
  autoReload: true,
  recompileMode: 'immediate',
  showConsole: props.consoleOnly ? true : props.showConsole,
  showConsoleButton: props.consoleOnly ? false : true,
  ...props.options
}));

const extensions = [autocompletion()];
const extensionsKeymap = [completionKeymap];
</script>

<style scoped>
.sandbox-container {
  width: 100%;
}

.sandbox-container :deep(.sp-wrapper) {
  width: 100% !important;
}

.sandbox-container :deep(.sp-layout) {
  width: 100% !important;
}

/* Console-only mode: hide preview completely off-screen */
.sandbox-container.console-only-mode :deep(.sp-preview) {
  position: absolute !important;
  left: -9999px !important;
  width: 1px !important;
  height: 1px !important;
  visibility: hidden !important;
  pointer-events: none !important;
}

.sandbox-container.console-only-mode :deep(.sp-console-wrapper) {
  height: 100% !important;
  flex: 1 1 auto !important;
  min-height: 200px !important;
}

.sandbox-container.console-only-mode :deep(.sp-console) {
  height: 100% !important;
  flex: 1 !important;
}
</style>
