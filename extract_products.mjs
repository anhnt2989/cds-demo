import { writeFileSync } from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

const PDF_PATH = 'C:/Users/Jason/.claude/projects/C--Users-Jason-Documents-demo/0a144fdb-ee8b-41e8-9b82-dd4690ed4edf/tool-results/webfetch-1781063856501-9ukmok.pdf';

import { readFileSync } from 'fs';
const data = readFileSync(PDF_PATH);
const uint8 = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);

const pdfDoc = await pdfjsLib.getDocument({ data: uint8 }).promise;
console.log('Pages:', pdfDoc.numPages);

const products = new Map();

// Process each page - extract with x positions to reconstruct columns
for (let pageNum = 1; pageNum <= Math.min(pdfDoc.numPages, 391); pageNum++) {
  const page = await pdfDoc.getPage(pageNum);
  const content = await page.getTextContent();
  
  // Group items by approximate y position (rows)
  const rows = new Map();
  for (const item of content.items) {
    if (!item.str.trim()) continue;
    const y = Math.round(item.transform[5] / 5) * 5; // round to nearest 5
    if (!rows.has(y)) rows.set(y, []);
    rows.get(y).push({ x: item.transform[4], text: item.str, y });
  }
  
  // Sort rows by y (descending in PDF = top to bottom)
  const sortedRows = Array.from(rows.entries()).sort((a,b) => b[0]-a[0]);
  
  for (const [y, items] of sortedRows) {
    // Sort items by x position
    items.sort((a,b) => a.x - b.x);
    
    // Check if first item is a number (product STT)
    const firstText = items[0]?.text?.trim();
    const numMatch = firstText?.match(/^(\d{1,3})$/);
    if (!numMatch) continue;
    
    const num = parseInt(numMatch[1]);
    if (num < 1 || num > 600) continue;
    
    // Collect all texts in this row
    // Columns based on x position:
    // Col1 (STT): x ~< 40
    // Col2 (Name): x ~40-180
    // Col3 (Description): x ~180-320  
    // Col4 (Developer): x ~320-460
    // etc.
    
    let name = '', desc = '', developer = '';
    for (const item of items) {
      if (item.x < 40) continue; // STT column
      else if (item.x < 180) name += (name ? ' ' : '') + item.text;
      else if (item.x < 320) desc += (desc ? ' ' : '') + item.text;
      else if (item.x < 460) developer += (developer ? ' ' : '') + item.text;
    }
    
    if (!products.has(num) && name.trim()) {
      products.set(num, { num, name: name.trim(), desc: desc.trim(), developer: developer.trim() });
    }
  }
}

const sorted = Array.from(products.values()).sort((a,b) => a.num - b.num);
console.log('Products extracted:', sorted.length);
sorted.slice(0, 30).forEach(p => {
  console.log(`${p.num}. ${p.name.substring(0,60)}`);
  console.log(`   Dev: ${p.developer.substring(0,60)}`);
  console.log(`   Desc: ${p.desc.substring(0,60)}`);
});

writeFileSync('products.json', JSON.stringify(sorted, null, 2));
console.log('\nSaved products.json');
