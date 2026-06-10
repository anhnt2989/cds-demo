import { writeFileSync } from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync } from 'fs';

const data = readFileSync('C:/Users/Jason/.claude/projects/C--Users-Jason-Documents-demo/0a144fdb-ee8b-41e8-9b82-dd4690ed4edf/tool-results/webfetch-1781063856501-9ukmok.pdf');
const uint8 = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
const pdfDoc = await pdfjsLib.getDocument({ data: uint8 }).promise;

// Analyze x positions of page 1 to determine column boundaries
const page1 = await pdfDoc.getPage(1);
const c1 = await page1.getTextContent();

// Print all items with their x coordinates
const items1 = c1.items.map(i => ({ x: Math.round(i.transform[4]), y: Math.round(i.transform[5]), t: i.str }));

// Group by y to see rows
const byY = {};
items1.forEach(i => {
  const y = Math.round(i.y / 3) * 3;
  if (!byY[y]) byY[y] = [];
  byY[y].push(i);
});

// Print first 5 rows that have content
const rows = Object.entries(byY).sort((a,b) => b[0]-a[0]).filter(([,items]) => items.some(i => i.t.trim())).slice(0,10);
rows.forEach(([y, items]) => {
  const sorted = items.filter(i => i.t.trim()).sort((a,b) => a.x-b.x);
  console.log('Y=' + y + ':');
  sorted.forEach(i => console.log(`  x=${i.x}: "${i.t}"`));
});
