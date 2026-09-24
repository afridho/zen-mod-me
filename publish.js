#!/usr/bin/env node

/**
 * publish.js — Automatically bump version and push to GitHub
 *
 * Usage:
 *   node publish.js
 *   npx publish.js
 *
 * Version scheme:
 *   - Bumps minor version: 1.0 → 1.1 → 1.2 ... → 1.99 → 1.100
 *   - When minor reaches 100, bumps major: 1.100 → 2.0
 *   - Repeats forever
 *
 * What it does:
 *   1. Reads current version from theme.json
 *   2. Bumps version (minor up to 100, then major resets minor to 0)
 *   3. Updates theme.json and updatedAt
 *   4. Commits with message "release: v<VERSION>"
 *   5. Pushes commit to origin/main
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const THEME_FILE = path.join(__dirname, "theme.json");

function run(command) {
  try {
    const result = execSync(command, { encoding: "utf-8", stdio: "pipe" });
    return result.trim();
  } catch (error) {
    console.error(`❌ Command failed: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

function bumpVersion(current) {
  const parts = current.split(".").map(Number);
  let major = parts[0] || 0;
  let minor = parts[1] || 0;

  minor++;

  // When minor reaches 100, bump major and reset minor to 0
  if (minor >= 100) {
    major++;
    minor = 0;
  }

  return `${major}.${minor}`;
}

function main() {
  try {
    // Step 1: Read current theme.json
    console.log("📖 Reading theme.json...");
    const themeData = JSON.parse(fs.readFileSync(THEME_FILE, "utf-8"));
    const currentVersion = themeData.version;

    // Step 2: Bump version
    const newVersion = bumpVersion(currentVersion);
    console.log(`📦 Bumping version: ${currentVersion} → ${newVersion}`);

    // Step 3: Update theme.json
    themeData.version = newVersion;
    themeData.updatedAt = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    fs.writeFileSync(THEME_FILE, JSON.stringify(themeData, null, 2) + "\n");
    console.log(`✏️  Updated theme.json (updatedAt: ${themeData.updatedAt})`);

    // Step 4: Stage all changes
    console.log("📝 Staging all changes...");
    run("git add .");

    // Step 5: Commit
    console.log("📝 Committing to git...");
    run(`git commit -m "release: v${newVersion}"`);

    // Step 6: Push to GitHub
    console.log("🚀 Pushing to GitHub...");
    run("git push origin main");

    console.log("\n✅ Release v" + newVersion + " complete!");
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

main();
