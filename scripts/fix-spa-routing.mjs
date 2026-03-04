#!/usr/bin/env node

/**
 * Fix SPA Routing for GitHub Pages
 *
 * GitHub Pages doesn't natively support client-side routing (SPAs).
 * This script creates a smart 404.html redirect mechanism that:
 * 1. Detects which module was requested from the URL
 * 2. Stores the original path in sessionStorage
 * 3. Redirects to the correct module's index.html
 * 4. The module's SPA then reads from sessionStorage and navigates to the correct slide
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

// Get base path from environment variable (default to /react-course for GitHub Pages)
const BASE_PATH = process.env.BASE_PATH || '/react-course';

/**
 * Create root 404.html with smart redirect logic
 */
function createRoot404() {
  console.log('Creating root 404.html with smart redirect...');

  const html404Content = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Redirecting...</title>
<script>
  // Smart redirect for GitHub Pages SPA routing
  (function() {
    var path = window.location.pathname;

    // Store the original path in sessionStorage so the target SPA can navigate to it
    sessionStorage.setItem('spa-redirect', path);

    // Extract module from path (e.g., /react-course/01-introduction/1 → 01-introduction)
    // Pattern matches: /base/XX-modulename/...
    var modulePattern = /\\/(\\d{2}-[^\\/]+)/;
    var match = path.match(modulePattern);

    if (match && match[1]) {
      // Redirect to the module's root
      var moduleName = match[1];
      window.location.replace('${BASE_PATH}/' + moduleName + '/');
    } else {
      // No valid module found, redirect to hub
      window.location.replace('${BASE_PATH}/');
    }
  })();
</script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
`;

  const html404Path = path.join(DIST, '404.html');
  fs.writeFileSync(html404Path, html404Content, 'utf8');
  console.log(`  ✅ Created root 404.html with redirect logic`);
}

/**
 * Inject redirect handler into a module's index.html
 */
function injectRedirectHandler(indexPath, deckName) {
  if (!fs.existsSync(indexPath)) {
    console.log(`  ⚠️  index.html not found at ${indexPath}`);
    return;
  }

  let content = fs.readFileSync(indexPath, 'utf8');

  // Check if redirect handler is already injected
  if (content.includes('spa-redirect-handler')) {
    console.log(`  ℹ️  Redirect handler already present`);
    return;
  }

  // Create redirect handler script
  const redirectScript = `
  <!-- SPA Redirect Handler for GitHub Pages -->
  <script id="spa-redirect-handler">
    (function() {
      // Check if we were redirected from 404.html
      var redirectPath = sessionStorage.getItem('spa-redirect');

      if (redirectPath) {
        // Clean up immediately
        sessionStorage.removeItem('spa-redirect');

        // Change the URL synchronously BEFORE Slidev initializes
        // This way Slidev's router will read the correct URL from the start
        if (window.history && window.history.replaceState) {
          try {
            window.history.replaceState(null, '', redirectPath);
          } catch (e) {
            // If replaceState fails, use direct navigation
            window.location.href = redirectPath;
          }
        }
        // Note: We don't need to do anything else - Slidev will read
        // window.location.pathname when it initializes and show the correct slide
      }
    })();
  </script>
`;

  // Inject the script right after <head> opening tag
  content = content.replace(/<head>/i, '<head>' + redirectScript);

  fs.writeFileSync(indexPath, content, 'utf8');
  console.log(`  ✅ Injected redirect handler into index.html`);
}

/**
 * Process a module deck directory
 */
function processModuleDeck(deckPath, deckName) {
  console.log(`Processing module: ${deckName}...`);

  const indexPath = path.join(deckPath, 'index.html');
  const html404Path = path.join(deckPath, '404.html');

  if (fs.existsSync(indexPath)) {
    // 1. Inject redirect handler into index.html
    injectRedirectHandler(indexPath, deckName);

    // 2. Create 404.html as copy of index.html (for safety)
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    fs.writeFileSync(html404Path, indexContent, 'utf8');
    console.log(`  ✅ Created 404.html (copy of index.html)`);
  } else {
    console.log(`  ⚠️  index.html not found, skipping`);
  }
}

/**
 * Process hub (root)
 */
function processHub() {
  console.log('Processing hub (root)...');

  const indexPath = path.join(DIST, 'index.html');

  if (fs.existsSync(indexPath)) {
    // Hub also needs redirect handler for completeness
    injectRedirectHandler(indexPath, 'hub');
  } else {
    console.log(`  ⚠️  Hub index.html not found`);
  }
}

/**
 * Main function
 */
function main() {
  console.log('🔧 Fixing SPA routing for GitHub Pages...\n');
  console.log(`📍 Base path: ${BASE_PATH}\n`);

  // 1. Create smart root 404.html
  console.log('📂 Creating root 404.html...');
  createRoot404();

  // 2. Process hub
  console.log('\n📂 Processing hub...');
  processHub();

  // 3. Process module subdirectories
  const entries = fs.readdirSync(DIST);
  for (const entry of entries) {
    const deckPath = path.join(DIST, entry);

    // Only process module directories (XX-modulename pattern)
    if (fs.statSync(deckPath).isDirectory() && /^\d{2}-/.test(entry)) {
      console.log(`\n📂 Processing module: ${entry}...`);
      processModuleDeck(deckPath, entry);
    }
  }

  console.log('\n✨ SPA routing fix complete!');
  console.log('\n📋 Summary:');
  console.log('  • Root 404.html: Smart redirect to correct module');
  console.log('  • Module index.html: Inject redirect handler');
  console.log('  • Module 404.html: Safety copy of index.html');
}

main();
