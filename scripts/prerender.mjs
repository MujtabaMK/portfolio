// Runs after `vite build`: renders the page sections to HTML and puts it
// inside <div id="root"> in dist/index.html.
import { build } from 'vite';
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const outDir = resolve(root, 'node_modules/.prerender');

await build({
  root,
  logLevel: 'warn',
  build: { ssr: 'src/entry-prerender.tsx', outDir, emptyOutDir: true },
});

const { render } = await import(pathToFileURL(resolve(outDir, 'entry-prerender.js')).href);
const html = render();

const indexPath = resolve(root, 'dist/index.html');
const index = readFileSync(indexPath, 'utf8');
const placeholder = '<div id="root"></div>';
if (!index.includes(placeholder)) throw new Error('Could not find empty #root in dist/index.html');
writeFileSync(indexPath, index.replace(placeholder, `<div id="root">${html}</div>`));
rmSync(outDir, { recursive: true, force: true });
console.log(`Prerendered ${Math.round(html.length / 1024)} KB of HTML into dist/index.html`);
