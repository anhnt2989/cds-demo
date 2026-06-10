import { writeFileSync } from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync } from 'fs';

const data = readFileSync('C:/Users/Jason/.claude/projects/C--Users-Jason-Documents-demo/0a144fdb-ee8b-41e8-9b82-dd4690ed4edf/tool-results/webfetch-1781063856501-9ukmok.pdf');
const uint8 = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
const pdfDoc = await pdfjsLib.getDocument({ data: uint8 }).promise;

// Column boundaries from analysis:
// STT:        x <  92
// Name:       x  92-190
// Desc:       x 190-320
// Developer:  x 320-428
// Problem:    x 428-556
// Users:      x 556-662

const products = new Map();

for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
  const page = await pdfDoc.getPage(pageNum);
  const content = await page.getTextContent();

  // Group items by rounded y coordinate
  const rows = new Map();
  for (const item of content.items) {
    if (!item.str.trim()) continue;
    const y = Math.round(item.transform[5] / 6) * 6;
    if (!rows.has(y)) rows.set(y, []);
    rows.get(y).push({ x: item.transform[4], text: item.str });
  }

  const sortedRows = Array.from(rows.entries()).sort((a, b) => b[0] - a[0]);

  for (const [y, items] of sortedRows) {
    // Look for rows that have a number in the STT column (x < 92)
    const sttItems = items.filter(i => i.x < 92 && /^\d{1,3}$/.test(i.text.trim()));
    if (sttItems.length === 0) continue;

    const num = parseInt(sttItems[0].text.trim());
    if (num < 1 || num > 600) continue;

    // Collect text for each column from this y-row
    const nameItems = items.filter(i => i.x >= 92 && i.x < 190).sort((a,b) => a.x - b.x);
    const descItems = items.filter(i => i.x >= 190 && i.x < 320).sort((a,b) => a.x - b.x);
    const devItems  = items.filter(i => i.x >= 320 && i.x < 428).sort((a,b) => a.x - b.x);

    if (!products.has(num)) {
      products.set(num, {
        num,
        nameLines: [],
        descLines: [],
        devLines: [],
      });
    }

    const p = products.get(num);
    if (nameItems.length) p.nameLines.push(nameItems.map(i=>i.text).join(' '));
    if (descItems.length) p.descLines.push(descItems.map(i=>i.text).join(' '));
    if (devItems.length)  p.devLines.push(devItems.map(i=>i.text).join(' '));
  }
}

// Also collect continuation rows (rows without STT that follow a product)
// Process: for each page, any row without a STT number that is between two products gets assigned to the preceding product

// Build final product list
const final = Array.from(products.values()).sort((a,b) => a.num - b.num).map(p => {
  const cleanLines = arr => arr.join(' ').replace(/\s+/g, ' ').trim();

  let name = cleanLines(p.nameLines);
  let desc = cleanLines(p.descLines);
  let dev  = cleanLines(p.devLines);

  // Clean developer - remove common leading strings
  dev = dev.replace(/^Đơn vị phát triển:\s*/,'')
           .replace(/^Đơn vị cung cấp thông tin:\s*/,'')
           .trim();

  return { id: p.num, name, desc: desc.substring(0,150), dev: dev.substring(0,100) };
});

// Assign categories
function categorize(name, desc) {
  const t = (name + ' ' + desc).toLowerCase();
  if (/\bai\b|chatbot|nlp|agent|trí tuệ|nhận dạng|học máy/.test(t)) return 'ai';
  if (/bệnh viện|y tế|sức khỏe|khám chữa|dược|bác sĩ|emr|y học/.test(t)) return 'healthcare';
  if (/giáo dục|học tập|học sinh|trường|edtech|dạy học|stem|sinh viên|đào tạo|kids/.test(t)) return 'education';
  if (/cổng.*thông tin|dịch vụ công|hành chính|tòa án|pháp luật|nhà nước|công vụ/.test(t)) return 'government';
  if (/ngân hàng|tài chính|thanh toán|tín dụng|kế toán|bảo hiểm|chứng khoán|hóa đơn/.test(t)) return 'finance';
  if (/đô thị|giao thông|smart city|hạ tầng|bản đồ|quy hoạch|urban|địa lý|twin/.test(t)) return 'smartcity';
  if (/nông nghiệp|nông sản|thực phẩm|truy xuất|phân bón|agri/.test(t)) return 'agriculture';
  if (/bảo mật|an ninh|security|firewall|ddos|waf|mã hóa|cyber|endpoint/.test(t)) return 'security';
  if (/du lịch|bảo tàng|di sản|văn hóa|tourism|heritage/.test(t)) return 'tourism';
  return 'enterprise';
}

const withCat = final.map(p => ({ ...p, cat: categorize(p.name, p.desc) }));

// Stats
const counts = {};
withCat.forEach(p => counts[p.cat] = (counts[p.cat]||0)+1);
console.log('Extracted:', withCat.length, 'products');
console.log('Categories:', counts);
withCat.slice(0,10).forEach(p => {
  console.log(`${p.id}. ${p.name.substring(0,50)}`);
  console.log(`   Dev: ${p.dev.substring(0,50)}`);
  console.log(`   Desc: ${p.desc.substring(0,50)}`);
});

const js = 'const PRODUCTS = ' + JSON.stringify(withCat, null, 2) + ';';
writeFileSync('products_data.js', js);
console.log('\nSaved products_data.js');
