<template>
  <div class="sandbox-container" @keydown.stop @keyup.stop @keypress.stop :style="containerStyle">
    <SandpackProvider :template="template" :files="sandpackFiles" :custom-setup="customSetup" :theme="effectiveTheme">
      <SandpackLayout>
        <SandpackFileExplorer v-if="showFileExplorer" />
        <SandpackCodeEditor :extensions="extensions" :extensionsKeymap="extensionsKeymap"
          :showLineNumbers="sandpackOptions.showLineNumbers" :showInlineErrors="sandpackOptions.showInlineErrors"
          :wrapContent="sandpackOptions.wrapContent" :editorHeight="sandpackOptions.editorHeight"
          :showTabs="sandpackOptions.showTabs" :closableTabs="sandpackOptions.closableTabs" />
        <SandpackPreview :showNavigator="sandpackOptions.showNavigator" />
      </SandpackLayout>
    </SandpackProvider>
  </div>
</template>

<script setup>
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview, SandpackFileExplorer } from 'sandpack-vue3';
import { autocompletion, completionKeymap } from '@codemirror/autocomplete';
import { computed } from 'vue';
import { useDarkMode } from '@slidev/client';

const { isDark } = useDarkMode();

const props = defineProps({
  code: {
    type: String,
    default: `import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h4>Interactive React Demo</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
  },
  files: {
    type: Object,
    default: null
  },
  showFileExplorer: {
    type: Boolean,
    default: false
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
    default: false
  },
  showNavigator: {
    type: Boolean,
    default: false
  }
});

const template = 'react';

const sandpackFiles = computed(() => {
  if (props.files) {
    return props.files;
  }
  return {
    '/App.js': props.code,
  };
});

const customSetup = computed(() => ({
  dependencies: {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
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

const effectiveTheme = computed(() => {
  // Use explicit theme prop if provided, otherwise follow presentation theme
  return props.theme || (isDark.value ? 'dark' : 'light');
});

const extensions = [autocompletion()];
const extensionsKeymap = [completionKeymap];
</script>
