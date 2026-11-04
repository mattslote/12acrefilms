// One-time migration: download every Squarespace-hosted image the site uses,
// save it to public/img/sq/, and rewrite the references to the local copies.
//
//   node scripts/localize-squarespace-images.mjs --dry   (list what it would do)
//   node scripts/localize-squarespace-images.mjs         (download + rewrite)
//
// Safe to re-run. Images that fail to download are left pointing at Squarespace.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { createHash } from 'node:crypto';

const dry = process.argv.includes('--dry');
const OUT_DIR = 'public/img/sq';
const SRC_DIRS = ['src'];
const EXTS = new Set(['.astro', '.json', '.ts', '.js', '.mjs', '.md', '.css']);
const URL_RE = /https:\/\/images\.squarespace-cdn\.com\/[^"'\s)<>\\]+/g;
const WIDTH = '2500w'; // largest size the site displays

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : EXTS.has(extname(p)) ? [p] : [];
  });
}

const files = SRC_DIRS.flatMap(walk);
const found = new Map(); // base (no query) -> Set(full urls)
for (const f of files) {
  for (const u of readFileSync(f, 'utf8').match(URL_RE) ?? []) {
    const base = u.split('?')[0];
    if (!found.has(base)) found.set(base, new Set());
    found.get(base).add(u);
  }
}
console.log(`Found ${found.size} unique Squarespace images in ${files.length} files.`);
if (dry) { for (const b of found.keys()) console.log('  ' + decodeURIComponent(b.split('/').pop())); process.exit(0); }

mkdirSync(OUT_DIR, { recursive: true });
const extFor = (ct, fallback) =>
  ({ 'image/jpeg': '.jpg', 'image/png': '.png', 'image/webp': '.webp', 'image/gif': '.gif', 'image/avif': '.avif' }[ct?.split(';')[0]] ?? fallback);

const map = new Map(); // full url -> local path
let ok = 0, failed = [];
for (const [base, urls] of found) {
  const name = decodeURIComponent(base.split('/').pop()).replace(/\.[^.]+$/, '');
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50) || 'image';
  const hash = createHash('sha1').update(base).digest('hex').slice(0, 8);
  try {
    const res = await fetch(`${base}?format=${WIDTH}`, { headers: { 'user-agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const file = `${slug}-${hash}${extFor(res.headers.get('content-type'), extname(base) || '.jpg')}`;
    writeFileSync(join(OUT_DIR, file), buf);
    for (const u of urls) map.set(u, `/img/sq/${file}`);
    ok++;
    console.log(`  ok   ${file} (${Math.round(buf.length / 1024)} KB)`);
  } catch (e) {
    failed.push(base);
    console.log(`  FAIL ${base} (${e.message})`);
  }
}

let edited = 0;
for (const f of files) {
  let s = readFileSync(f, 'utf8'), t = s;
  for (const [u, local] of map) t = t.split(u).join(local);
  if (t !== s) { writeFileSync(f, t); edited++; }
}
console.log(`\nDownloaded ${ok}/${found.size}. Rewrote ${edited} files.`);
if (failed.length) console.log(`${failed.length} failed; those still point at Squarespace. Re-run to retry.`);
