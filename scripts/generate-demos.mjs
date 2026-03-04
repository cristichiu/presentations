#!/usr/bin/env node


import { watch } from 'fs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const SLIDES_DIR = path.join(ROOT, 'slides');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bright: '\x1b[1m'
};

function log(message, color = 'reset') {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${colors[color]}[${timestamp}] ${message}${colors.reset}`);
}

/**
 * Recursively get all files in a directory
 */
function getAllFiles(dirPath, rootDir) {
  const files = fs.readdirSync(dirPath);
  let fileMap = {};

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    const relativePath = '/' + path.relative(rootDir, filePath).replace(/\\/g, '/');

    if (stat.isDirectory()) {
      fileMap = { ...fileMap, ...getAllFiles(filePath, rootDir) };
    } else {
      fileMap[relativePath] = fs.readFileSync(filePath, 'utf-8');
    }
  }

  return fileMap;
}

/**
 * Generate Vue wrapper component from a directory of files
 */
function generateVueWrapperForFolder(dirPath, modulePath) {
  const componentName = path.basename(dirPath);
  const vueComponentPath = path.join(
    modulePath,
    'components',
    `${componentName}.vue`
  );

  const files = getAllFiles(dirPath, dirPath);

  const filesString = JSON.stringify(files);
  const escapedFilesString = filesString
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');

  const vueTemplate = `<script setup>
import LiveReactComponent from '../../../common/components/LiveReact.vue'

const files = JSON.parse(\`${escapedFilesString}\`);
</script>

<template>
  <LiveReactComponent
    :files="files"
    :showFileExplorer="true"
    :editorHeight="700"
  />
</template>
`;

  // Ensure components directory exists
  const componentsDir = path.dirname(vueComponentPath);
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  fs.writeFileSync(vueComponentPath, vueTemplate, 'utf-8');

  return { componentName, vueComponentPath };
}


/**
 * Generate Vue wrapper component from JSX file
 */
function generateVueWrapper(jsxPath, modulePath) {
  const jsxContent = fs.readFileSync(jsxPath, 'utf-8');
  const componentName = path.basename(jsxPath, '.jsx');
  const vueComponentPath = path.join(
    modulePath,
    'components',
    `${componentName}.vue`
  );

  // Extract any dependencies from comments at the top of the JSX file
  const dependenciesMatch = jsxContent.match(/\/\*\s*dependencies:\s*({[^}]+})\s*\*\//);
  const dependencies = dependenciesMatch ? dependenciesMatch[1] : '{}';

  // Extract editor height from comments
  const heightMatch = jsxContent.match(/\/\*\s*editorHeight:\s*(\d+|'[^']*')\s*\*\//);
  const editorHeight = heightMatch ? heightMatch[1] : '500';

  // Escape backticks and ${} in the JSX code
  const escapedCode = jsxContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');

  const vueTemplate = `<script setup>
import LiveReactComponent from '../../../common/components/LiveReact.vue'

const code = \`${escapedCode}\`

const dependencies = ${dependencies}
</script>

<template>
  <LiveReactComponent
    :code="code"
    :dependencies="dependencies"
    :editorHeight="${editorHeight}"
  />
</template>
`;

  // Ensure components directory exists
  const componentsDir = path.dirname(vueComponentPath);
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  fs.writeFileSync(vueComponentPath, vueTemplate, 'utf-8');

  return { componentName, vueComponentPath };
}

/**
 * Process all JSX files in a module's demos directory
 */
function processModule(moduleName) {
  const modulePath = path.join(SLIDES_DIR, moduleName);
  const demosDir = path.join(modulePath, 'demos');

  if (!fs.existsSync(demosDir)) {
    return [];
  }

  const results = [];
  const demoEntries = fs.readdirSync(demosDir);

  for (const demoEntry of demoEntries) {
    const entryPath = path.join(demosDir, demoEntry);
    const stat = fs.statSync(entryPath);

    try {
      if (stat.isDirectory()) {
        const result = generateVueWrapperForFolder(entryPath, modulePath);
        results.push(result);
        log(`✅ Generated ${result.componentName}.vue from ${moduleName}/demos/${demoEntry}`, 'green');
      } else if (demoEntry.endsWith('.jsx')) {
        const result = generateVueWrapper(entryPath, modulePath);
        results.push(result);
        log(`✅ Generated ${result.componentName}.vue from ${moduleName}/demos/${demoEntry}`, 'green');
      }
    } catch (error) {
      log(`❌ Error processing ${demoEntry}: ${error.message}`, 'yellow');
    }
  }

  return results;
}

/**
 * Find all modules and process their demos
 */
function processAllModules() {
  if (!fs.existsSync(SLIDES_DIR)) {
    log('❌ Slides directory not found', 'yellow');
    return;
  }

  const modules = fs.readdirSync(SLIDES_DIR)
    .filter(name => {
      const modulePath = path.join(SLIDES_DIR, name);
      return fs.statSync(modulePath).isDirectory();
    });

  log(`🔍 Scanning ${modules.length} module(s) for demo files...`, 'cyan');

  let totalGenerated = 0;

  for (const moduleName of modules) {
    const results = processModule(moduleName);
    totalGenerated += results.length;
  }

  if (totalGenerated > 0) {
    log(`✨ Generated ${totalGenerated} Vue wrapper component(s)`, 'bright');
  } else {
    log('ℹ️  No .jsx demo files or demo folders found.', 'blue');
  }
}

/**
 * Watch mode - regenerate on file changes
 */
function watchMode() {
  log('👀 Watching for changes to .jsx demo files...', 'cyan');
  log('Press Ctrl+C to stop\n', 'blue');

  // Initial generation
  processAllModules();

  // Watch all modules
  const modules = fs.readdirSync(SLIDES_DIR)
    .filter(name => {
      const modulePath = path.join(SLIDES_DIR, name);
      return fs.statSync(modulePath).isDirectory();
    });

  modules.forEach(moduleName => {
    const demosDir = path.join(SLIDES_DIR, moduleName, 'demos');

    if (fs.existsSync(demosDir)) {
      watch(demosDir, { recursive: true }, (eventType, filename) => {
        if (filename) {
          log(`\n📝 Detected change in ${moduleName}/demos/${filename}`, 'yellow');
          processAllModules();
        }
      });
    }
  });
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  const isWatchMode = args.includes('--watch') || args.includes('-w');

  log('🎨 React Demo Component Generator', 'bright');
  log('', 'reset');

  if (isWatchMode) {
    watchMode();
  } else {
    processAllModules();
  }
}

main();
