#!/usr/bin/env node

/**
 * Build Orchestration Script for React Course Multi-Deck Architecture
 *
 * This script automates the build process for the Hub-and-Spoke Slidev architecture.
 * Each presentation is built independently with the correct base path for deployment.
 *
 * Architecture:
 * - Root Hub (00-hub or hub at slides root) → deployed at root (/)
 * - Modules & Sub-Hubs → deployed at their relative path (e.g., /JS-course/hub/)
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
 * @param {string} relativeDir - Relative directory from slides/
 * @param {string} entry - Path to slides.md
 * @param {string} base - Base path for deployment
 */
function buildDeck(relativeDir, entry, base) {
  const isRootHub = relativeDir === 'hub' || relativeDir === '00-hub';
  const folderName = isRootHub ? '' : relativeDir;
  const outDir = path.join(DIST, folderName);
  
  log(`\n📦 Building ${relativeDir || 'root'}...`, 'cyan');
  log(`   Entry: ${path.relative(ROOT, entry)}`, 'blue');
  log(`   Base:  ${base}`, 'blue');
  log(`   Output: ${path.relative(ROOT, outDir)}`, 'blue');

  // Ensure output directory exists
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Construct the Slidev build command
  const cmd = `npx slidev build "${entry}" --out "${outDir}" --base "${base}"`;

  try {
    execSync(cmd, {
      stdio: 'inherit',
      cwd: ROOT
    });
    log(`✅ Successfully built ${relativeDir || 'root'}`, 'green');
  } catch (error) {
    log(`❌ Failed to build ${relativeDir || 'root'}`, 'red');
    log(`Error: ${error.message}`, 'red');
    process.exit(1);
  }
}

/**
 * Discover all slide decks in the slides directory (including subdirectories)
 * @returns {Array<{name: string, path: string}>}
 */
function discoverDecks() {
  const decks = [];

  function scan(dir, relativePath = '') {
    const entries = fs.readdirSync(dir);

    for (const entry of entries) {
      if (entry === 'node_modules' || entry === '.git') continue;

      const fullPath = path.join(dir, entry);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        const slidesFile = path.join(fullPath, 'slides.md');
        const currentRelative = relativePath ? path.join(relativePath, entry) : entry;

        if (fs.existsSync(slidesFile)) {
          decks.push({
            name: currentRelative,
            path: slidesFile
          });
        } else if (!relativePath || relativePath.split(path.sep).length < 2) {
          // Go up to 2 levels deep
          scan(fullPath, currentRelative);
        }
      }
    }
  }

  scan(SLIDES_DIR);

  // Sort decks: root hubs first, then others
  decks.sort((a, b) => {
    const isRootA = a.name === 'hub' || a.name === '00-hub';
    const isRootB = b.name === 'hub' || b.name === '00-hub';
    if (isRootA) return -1;
    if (isRootB) return 1;
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
  const readmeContent = `# Presentation Monorepo - Build Artifacts

Built on: ${new Date().toISOString()}
`;
  fs.writeFileSync(readmePath, readmeContent, 'utf8');
  log('✅ Created README.md in dist', 'green');
}

/**
 * Main build orchestration
 */
function main() {
  const startTime = Date.now();

  logSection('🎬 Presentation Build Orchestrator');

  // Get base path prefix from environment variable
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
    const isRootHub = deck.name === 'hub' || deck.name === '00-hub';
    const deckPath = isRootHub ? '/' : `/${deck.name}/`;
    const basePath = (basePathPrefix + deckPath).replace(/\/+$/, '/');

    buildDeck(
      deck.name,
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
}

// Run the build
main();
