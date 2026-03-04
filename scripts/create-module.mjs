#!/usr/bin/env node

/**
 * Create New Slide Module Script
 *
 * Usage:
 *   node scripts/create-module.mjs <folder-name>
 *
 * Example:
 *   node scripts/create-module.mjs 03-context
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const SLIDES_DIR = path.join(ROOT, 'slides');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function error(message) {
  log(`❌ ${message}`, 'red');
  process.exit(1);
}

// 1. Get and Validate Arguments
const moduleName = process.argv[2];
const themeName = process.argv[3] || 'neversink';
const courseTitle = process.argv[4] || 'Course';

if (!moduleName) {
  error('Usage: node scripts/create-module.mjs <folder-name> [theme] [course-title]');
}

const modulePath = path.join(SLIDES_DIR, moduleName);

if (fs.existsSync(modulePath)) {
  error(`Module directory already exists: ${moduleName}`);
}

// 2. Determine Next Port
const rootPkgPath = path.join(ROOT, 'package.json');
const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf-8'));

let maxPort = 3030;
const portRegex = /--port (\d+)/;

for (const script of Object.values(rootPkg.scripts)) {
  const match = script.match(portRegex);
  if (match) {
    const port = parseInt(match[1], 10);
    if (port > maxPort) maxPort = port;
  }
}

const newPort = maxPort + 1;
log(`Found max port ${maxPort}. Assigning new port: ${newPort}`, 'cyan');

// 3. Create Directory Structure
log(`Creating module structure for ${moduleName}...`, 'blue');

fs.mkdirSync(modulePath);
fs.mkdirSync(path.join(modulePath, 'components'));
fs.mkdirSync(path.join(modulePath, 'setup'));

// 4. Write Files

// package.json
// Extract simple name from "03-context" -> "context"
const simpleName = moduleName.replace(/^\d+-/, '');
const pkgContent = {
  name: `@react-course/${simpleName}`,
  version: "1.0.0",
  private: true,
  type: "module",
  scripts: {
    dev: `slidev slides.md --port ${newPort}`,
    build: "slidev build slides.md"
  }
};

fs.writeFileSync(
  path.join(modulePath, 'package.json'),
  JSON.stringify(pkgContent, null, 2) + '\n'
);

// vite.config.ts
const viteConfig = `import { defineConfig } from 'vite'
import { resolve } from 'path'
import { multiPublicPlugin } from '../../common/vite/multi-public-plugin'

export default defineConfig({
  plugins: [
    multiPublicPlugin([
      resolve(__dirname, '../../common/public'),
    ]),
  ],
})
`;
fs.writeFileSync(path.join(modulePath, 'vite.config.ts'), viteConfig);

// setup/main.ts
const setupMain = `import { defineAppSetup } from '@slidev/types'
import sharedSetup from '../../../common/setup/main'
import '../../../common/theme/style.css'

export default defineAppSetup(({ app }) => {
  if (sharedSetup && typeof sharedSetup === 'function') {
    sharedSetup({ app } as any)
  }
})
`;
fs.writeFileSync(path.join(modulePath, 'setup/main.ts'), setupMain);

// slides.md
// Capitalize simple name for title
const title = simpleName.charAt(0).toUpperCase() + simpleName.slice(1);
const slidesContent = `---
title: '${courseTitle}'
theme: ${themeName}
transition: slide-left
layout: cover
color: sky-light
info: '${courseTitle} · 2026'
lineNumbers: true
draw:
  enabled: true
favicon: './react.svg'
---

## ${title}

New module - ready to customize!
`;
fs.writeFileSync(path.join(modulePath, 'slides.md'), slidesContent);

log('✅ Created module files.', 'green');

// 5. Update Root package.json
log('Updating root package.json...', 'blue');

rootPkg.scripts[`dev:${simpleName}`] = `cd slides/${moduleName} && slidev slides.md --port ${newPort}`;

// Sort scripts to keep it tidy
const sortedScripts = Object.keys(rootPkg.scripts).sort().reduce((obj, key) => {
  obj[key] = rootPkg.scripts[key];
  return obj;
}, {});
rootPkg.scripts = sortedScripts;

fs.writeFileSync(rootPkgPath, JSON.stringify(rootPkg, null, 2) + '\n');
log(`✅ Added script: dev:${simpleName}`, 'green');

logSection('✨ Module Created Successfully!');
log (
`
To start working on the new module:
  1. pnpm install (to link the new workspace)
  2. npm run dev:${simpleName}
`,
 'bright');

function logSection(title) {
  console.log('\n' + '='.repeat(60));
  log(title, 'bright');
  console.log('='.repeat(60) + '\n');
}
