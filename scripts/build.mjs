#!/usr/bin/env node

/**
 * Build Orchestration Script for React Course Multi-Deck Architecture
 *
 * This script automates the build process for the Hub-and-Spoke Slidev architecture.
 * Each presentation is built independently with the correct base path for deployment.
 *
 * Architecture:
 * - Hub (00-hub) → deployed at root (/)
 * - Modules (01-*, 02-*, etc.) → deployed at /<module-name>/
 *
 * Usage:
 *   node scripts/build.mjs
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SLIDES_DIR = path.join(ROOT, 'slides');

// ANSI color codes for pretty output
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

function logSection(title) {
  console.log('\n' + '='.repeat(60));
  log(title, 'bright');
  console.log('='.repeat(60) + '\n');
}

/**
 * Clean and prepare the distribution directory
 */
function prepareDistDirectory() {
  logSection('📁 Preparing Distribution Directory');

  if (fs.existsSync(DIST)) {
    log('Removing existing dist directory...', 'yellow');
    fs.rmSync(DIST, { recursive: true, force: true });
  }

  log('Creating fresh dist directory...', 'green');
  fs.mkdirSync(DIST, { recursive: true });
}

/**
 * Build a single Slidev deck
 * @param {string} name - Deck name (e.g., 'hub', '01-fundamentals')
 * @param {string} entry - Path to slides.md
 * @param {string} base - Base path for deployment
 */
function buildDeck(name, entry, base) {
  log(`\n📦 Building ${name}...`, 'cyan');
  log(`   Entry: ${path.relative(ROOT, entry)}`, 'blue');
  log(`   Base:  ${base}`, 'blue');

  const outDir = name === 'hub' ? DIST : path.join(DIST, name);
  log(`   Output: ${path.relative(ROOT, outDir)}`, 'blue');

  // Construct the Slidev build command
  // Using absolute paths to avoid ambiguity
  const cmd = `npx slidev build "${entry}" --out "${outDir}" --base "${base}"`;

  try {
    execSync(cmd, {
      stdio: 'inherit',
      cwd: ROOT
    });
    log(`✅ Successfully built ${name}`, 'green');
  } catch (error) {
    log(`❌ Failed to build ${name}`, 'red');
    log(`Error: ${error.message}`, 'red');
    process.exit(1);
  }
}

/**
 * Discover all slide decks in the slides directory
 * @returns {Array<{name: string, path: string}>}
 */
function discoverDecks() {
  const decks = [];
  const entries = fs.readdirSync(SLIDES_DIR);

  for (const entry of entries) {
    const deckPath = path.join(SLIDES_DIR, entry);
    const slidesFile = path.join(deckPath, 'slides.md');

    // Check if this is a valid deck directory
    if (fs.statSync(deckPath).isDirectory() && fs.existsSync(slidesFile)) {
      decks.push({
        name: entry,
        path: slidesFile
      });
    }
  }

  // Sort decks: hub first, then others
  decks.sort((a, b) => {
    if (a.name.includes('hub')) return -1;
    if (b.name.includes('hub')) return 1;
    return a.name.localeCompare(b.name);
  });

  return decks;
}

/**
 * Finalize the build with deployment artifacts
 */
function finalizeDeployment() {
  logSection('🚀 Finalizing Deployment');

  // Create .nojekyll for GitHub Pages
  const nojekyllPath = path.join(DIST, '.nojekyll');
  fs.writeFileSync(nojekyllPath, '', 'utf8');
  log('✅ Created .nojekyll for GitHub Pages', 'green');

  // Create a simple README in dist
  const readmePath = path.join(DIST, 'README.md');
  const readmeContent = `# React Course - Build Artifacts

This directory contains the built static assets for the React course.

## Structure

- \`/\` - Hub (Table of Contents)
- \`/01-fundamentals/\` - Module 1: React Fundamentals
- \`/02-hooks/\` - Module 2: React Hooks
- Additional modules as they are added...

Built on: ${new Date().toISOString()}
`;
  fs.writeFileSync(readmePath, readmeContent, 'utf8');
  log('✅ Created README.md in dist', 'green');

  // Log the final structure
  log('\n📂 Final Distribution Structure:', 'bright');
  const distContents = fs.readdirSync(DIST);
  distContents.forEach(item => {
    const itemPath = path.join(DIST, item);
    const isDir = fs.statSync(itemPath).isDirectory();
    log(`   ${isDir ? '📁' : '📄'} ${item}`, isDir ? 'cyan' : 'reset');
  });
}

/**
 * Main build orchestration
 */
function main() {
  const startTime = Date.now();

  logSection('🎬 React Course Build Orchestrator');
  log('Building multi-deck Slidev courseware...', 'bright');

  // Get base path prefix from environment variable (for GitHub Pages)
  const basePathPrefix = process.env.BASE_PATH || '';
  if (basePathPrefix) {
    log(`Using base path prefix: ${basePathPrefix}`, 'yellow');
  }

  // Step 1: Prepare
  prepareDistDirectory();

  // Step 2: Discover decks
  logSection('🔍 Discovering Slide Decks');
  const decks = discoverDecks();

  if (decks.length === 0) {
    log('❌ No slide decks found in slides/ directory', 'red');
    process.exit(1);
  }

  log(`Found ${decks.length} deck(s):`, 'green');
  decks.forEach(deck => {
    log(`   • ${deck.name}`, 'blue');
  });

  // Step 3: Build each deck
  logSection('🏗️  Building Decks');

  for (const deck of decks) {
    const isHub = deck.name.includes('hub');
    const deckPath = isHub ? '/' : `/${deck.name}/`;
    const basePath = basePathPrefix + deckPath;

    buildDeck(
      isHub ? 'hub' : deck.name,
      deck.path,
      basePath
    );
  }

  // Step 4: Finalize
  finalizeDeployment();

  // Step 5: Fix SPA routing for GitHub Pages
  logSection('🔧 Fixing SPA Routing for GitHub Pages');
  try {
    const fixScript = path.join(ROOT, 'scripts', 'fix-spa-routing.mjs');
    execSync(`node "${fixScript}"`, {
      stdio: 'inherit',
      cwd: ROOT,
      env: { ...process.env, BASE_PATH: basePathPrefix }
    });
    log('✅ SPA routing fix applied', 'green');
  } catch (error) {
    log(`❌ Failed to apply SPA routing fix`, 'red');
    log(`Error: ${error.message}`, 'red');
    process.exit(1);
  }

  // Success!
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  logSection('✨ Build Complete!');
  log(`Total time: ${duration}s`, 'green');
  log(`\nYou can now deploy the 'dist' directory to your hosting provider.`, 'bright');
  log(`For GitHub Pages, push this to your gh-pages branch.`, 'cyan');
}

// Run the build
main();
