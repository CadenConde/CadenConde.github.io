// Post-build: normalize TanStack Start SPA output for GitHub Pages.
// - Ensure dist/client/index.html exists (rename _shell.html if needed).
// - Copy index.html to 404.html so client-side routes work on direct visits.
// - Ensure .nojekyll exists at the deploy root.
import { existsSync, renameSync, copyFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "dist", "client");
const indexHtml = join(root, "index.html");
const shellHtml = join(root, "_shell.html");
const notFoundHtml = join(root, "404.html");
const nojekyll = join(root, ".nojekyll");

if (!existsSync(indexHtml) && existsSync(shellHtml)) {
  renameSync(shellHtml, indexHtml);
}

if (!existsSync(indexHtml)) {
  console.error("postbuild: dist/client/index.html missing — prerender likely failed.");
  process.exit(1);
}

copyFileSync(indexHtml, notFoundHtml);
if (!existsSync(nojekyll)) writeFileSync(nojekyll, "");

console.log("postbuild: dist/client ready for GitHub Pages (index.html, 404.html, .nojekyll).");
