// Surse confirmate. Rulare: node tests/surse.test.mjs (static)
import fs from 'node:fs'; import path from 'node:path'; import {fileURLToPath} from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url)); const h = fs.readFileSync(path.join(HERE, '..', 'index.html'), 'utf8');
let ok = 0, bad = 0; const t = (n, c, x) => { if (c) { ok++; console.log('  ok  ', n); } else { bad++; console.log('  FAIL', n, x ?? ''); } };
const n = r => (h.match(r) || []).length;
t('NCCIH Yohimbe cu adresă în 8 limbi', n(/nccih\.nih\.gov\/health\/yohimbe, page updated May 2025/g) >= 8);
t('MMWR cu dată în 8 limbi', n(/MMWR 1995;44\(46\):853–855 \(1995-11-24\)/g) >= 8);
t('FDA SexRx cu adresă în 8 limbi', n(/public-notification-sexrx-contains-hidden-drug-ingredients\)/g) >= 8);
t('fără doze/rețete (cuvinte-cheie)', !/\b\d+ ?(mg|ml|g)\b[^<]{0,40}(cantarid|yohimb|iohimb)/i.test(h));
t('versiune 2.0.2', JSON.parse(fs.readFileSync(path.join(HERE, '..', 'app.json'), 'utf8')).version === '2.0.2');
console.log(`\n${ok} reușite, ${bad} eșuate`); process.exit(bad ? 1 : 0);
