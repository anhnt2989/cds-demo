import { writeFileSync } from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync } from 'fs';

const data = readFileSync('C:/Users/Jason/.claude/projects/C--Users-Jason-Documents-demo/0a144fdb-ee8b-41e8-9b82-dd4690ed4edf/tool-results/webfetch-1781063856501-9ukmok.pdf');
const uint8 = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
const pdfDoc = await pdfjsLib.getDocument({ data: uint8 }).promise;

// Column boundaries (from analysis of page 1):
// STT:       x < 92
// Name:      92-190
// Desc:      190-320
// Developer: 320-428
// Problem:   428-556
// Users:     556-662

const products = new Map();

for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
  const page = await pdfDoc.getPage(pageNum);
  const content = await page.getTextContent();

  // Group items by y, sorted top to bottom
  const rowMap = new Map();
  for (const item of content.items) {
    if (!item.str.trim()) continue;
    const y = Math.round(item.transform[5] / 3) * 3;
    if (!rowMap.has(y)) rowMap.set(y, []);
    rowMap.get(y).push({ x: item.transform[4], text: item.str });
  }

  // Sort rows top-to-bottom (desc y = higher on page)
  const sortedRows = Array.from(rowMap.entries()).sort((a, b) => b[0] - a[0]);

  let currentNum = null;

  for (const [y, items] of sortedRows) {
    // Check if this row starts a new product
    const sttItems = items.filter(i => i.x < 92 && /^\d{1,3}$/.test(i.text.trim()));

    if (sttItems.length > 0) {
      const num = parseInt(sttItems[0].text.trim());
      if (num >= 1 && num <= 600) {
        currentNum = num;
        if (!products.has(num)) {
          products.set(num, { num, nameLines: [], descLines: [], devLines: [] });
        }
      }
    }

    // If we're in a product, collect text from all columns
    if (currentNum !== null) {
      const p = products.get(currentNum);
      if (!p) continue;

      const nameT = items.filter(i => i.x >= 92 && i.x < 190).map(i => i.text).join(' ').trim();
      const descT = items.filter(i => i.x >= 190 && i.x < 320).map(i => i.text).join(' ').trim();
      const devT  = items.filter(i => i.x >= 320 && i.x < 428).map(i => i.text).join(' ').trim();

      if (nameT) p.nameLines.push(nameT);
      if (descT) p.descLines.push(descT);
      if (devT)  p.devLines.push(devT);
    }
  }
}

// Build final products
function clean(lines) {
  return lines.join(' ').replace(/\s+/g, ' ').replace(/^pháp\s+/, '').trim();
}

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

const final = Array.from(products.values()).sort((a,b) => a.num - b.num).map(p => {
  let name = clean(p.nameLines).substring(0, 120);
  let desc = clean(p.descLines).substring(0, 180);
  let dev  = clean(p.devLines)
    .replace(/^(Đơn vị phát triển:|Đơn vị cung cấp thông tin:)\s*/g, '')
    .replace(/\s*(Đơn vị cung cấp thông tin:.*)/s, '')
    .substring(0, 100);

  return { id: p.num, name, desc, dev, cat: categorize(name, desc) };
});

// Show sample
console.log('Total:', final.length);
const counts = {};
final.forEach(p => counts[p.cat] = (counts[p.cat]||0)+1);
console.log('Categories:', JSON.stringify(counts));
final.slice(0,10).forEach(p => {
  console.log(`${p.id}. ${p.name.substring(0,55)}`);
  console.log(`   Dev: ${p.dev.substring(0,55)}`);
  console.log(`   Desc: ${p.desc.substring(0,55)}`);
});

writeFileSync('products_data.js', 'const PRODUCTS = ' + JSON.stringify(final, null, 2) + ';');
console.log('\nSaved products_data.js');
