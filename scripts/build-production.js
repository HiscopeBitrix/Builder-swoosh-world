#!/usr/bin/env node

/**
 * Production Build Script for IT-Мечта Website
 *
 * This script performs additional optimizations for production:
 * - Cleans previous builds
 * - Runs type checking
 * - Creates optimized builds
 * - Validates build output
 */

import { execSync } from "child_process";
import { existsSync, rmSync, statSync } from "fs";
import { join } from "path";

const DIST_DIR = "dist";
const SPA_DIR = join(DIST_DIR, "spa");
const SERVER_DIR = join(DIST_DIR, "server");

console.log("🚀 Starting production build for IT-Мечта website...\n");

// Step 1: Clean previous builds
console.log("🧹 Cleaning previous builds...");
if (existsSync(DIST_DIR)) {
  rmSync(DIST_DIR, { recursive: true, force: true });
  console.log("✅ Previous builds cleaned\n");
} else {
  console.log("✅ No previous builds to clean\n");
}

// Step 2: Type checking
console.log("🔍 Running TypeScript type check...");
try {
  execSync("npm run typecheck", { stdio: "pipe" });
  console.log("✅ TypeScript type check passed\n");
} catch (error) {
  console.error("❌ TypeScript type check failed:");
  console.error(error.stdout.toString());
  process.exit(1);
}

// Step 3: Build client and server
console.log("🏗️ Building client and server...");
try {
  execSync("npm run build", { stdio: "inherit" });
  console.log("✅ Build completed successfully\n");
} catch (error) {
  console.error("❌ Build failed");
  process.exit(1);
}

// Step 4: Validate build output
console.log("🔍 Validating build output...");

const requiredFiles = [
  join(SPA_DIR, "index.html"),
  join(SERVER_DIR, "production.mjs"),
];

let validationPassed = true;

requiredFiles.forEach((file) => {
  if (existsSync(file)) {
    const stats = statSync(file);
    const sizeKB = Math.round(stats.size / 1024);
    console.log(`✅ ${file} (${sizeKB} KB)`);
  } else {
    console.log(`❌ Missing: ${file}`);
    validationPassed = false;
  }
});

// Check if assets directory exists and has files
const assetsDir = join(SPA_DIR, "assets");
if (existsSync(assetsDir)) {
  console.log(`✅ Assets directory created`);
} else {
  console.log(`❌ Missing: ${assetsDir}`);
  validationPassed = false;
}

if (!validationPassed) {
  console.error("\n❌ Build validation failed!");
  process.exit(1);
}

// Step 5: Build summary
console.log("\n📊 Build Summary:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

if (existsSync(SPA_DIR)) {
  const spaStats = statSync(SPA_DIR);
  console.log(`Client Build: dist/spa/ (Ready for static hosting)`);
}

if (existsSync(SERVER_DIR)) {
  const serverStats = statSync(SERVER_DIR);
  console.log(`Server Build: dist/server/ (Ready for Node.js hosting)`);
}

console.log("\n🎉 Production build completed successfully!");
console.log("\nNext steps:");
console.log("1. Test the build: npm start");
console.log("2. Deploy dist/spa/ to static hosting");
console.log("3. Deploy dist/server/ to Node.js hosting");
console.log("4. Configure your web server/reverse proxy");
console.log("\nFor deployment guide, see: DEPLOYMENT.md");
