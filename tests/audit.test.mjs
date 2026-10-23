// Teste de regresie pentru audit (1.2.7): limba salvată în localStorage trebuie să fie una dintre cele 8 suportate.
// Rulare: node tests/audit.test.mjs   (Playwright din /opt/node-tools, Chromium din /opt/pw-browsers; rețea blocată)
import {createRequire} from 'module'; import path from 'path'; import {fileURLToPath} from 'url';
const require = createRequire('/opt/node-tools/package.json'); const {chromium} = require('playwright');
const FILE = 'file://' + path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'index.html');
let ok = 0, bad = 0; const t = (n, c, x) => { if (c) { ok++; console.log('  ok  ' + n); } else { bad++; console.log('  FAIL ' + n + (x !== undefined ? ' :: ' + JSON.stringify(x) : '')); } };
const b = await chromium.launch({executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox']});
async function open(lang) {
  const ctx = await b.newContext({viewport: {width: 1000, height: 800}, locale: 'en-US'}); let net = 0; await ctx.route(/^https?:/, (r) => { net++; r.abort(); });
  if (lang) await ctx.addInitScript((l) => { try { localStorage.setItem('afrodisiace-fara-frontiere.lang', l); } catch (e) {} }, lang);
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.goto(FILE); await p.waitForTimeout(1200); return {ctx, p, errs, net: () => net};
}
for (const bad of ['constructor', 'toString', '__proto__', 'xx']) {
  const {ctx, p, errs} = await open(bad);
  t(`limba salvată „${bad}” respinsă`, await p.evaluate(() => document.documentElement.lang) === 'en' && (await p.inputValue('#lang-sel')) === 'en');
  t(`„${bad}”: 22 de carduri, 0 erori`, (await p.locator('#grid .card').count()) === 22 && errs.length === 0, errs);
  await ctx.close();
}
{ const {ctx, p, errs, net} = await open('ro');
  t('limba salvată „ro” păstrată', await p.evaluate(() => document.documentElement.lang) === 'ro');
  t('0 erori, 0 cereri de rețea', errs.length === 0 && net() === 0); await ctx.close(); }
await b.close(); console.log(`\n${ok} reușite, ${bad} eșuate`); process.exit(bad ? 1 : 0);
