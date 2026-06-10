import { readFileSync, writeFileSync } from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

const data = readFileSync('C:/Users/Jason/.claude/projects/C--Users-Jason-Documents-demo/0a144fdb-ee8b-41e8-9b82-dd4690ed4edf/tool-results/webfetch-1781063856501-9ukmok.pdf');
const uint8Array = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);

const loadingTask = pdfjsLib.getDocument({ data: uint8Array });
const pdfDoc = await loadingTask.promise;
console.log('PDF loaded, pages:', pdfDoc.numPages);

let allText = '';
for (let i = 1; i <= pdfDoc.numPages; i++) {
  const page = await pdfDoc.getPage(i);
  const textContent = await page.getTextContent();
  const pageText = textContent.items.map(item => item.str).join(' ');
  allText += `\n--- PAGE ${i} ---\n${pageText}\n`;
}

writeFileSync('pdf_text.txt', allText);
console.log('Written to pdf_text.txt');
console.log('PREVIEW:', allText.substring(0, 8000));
