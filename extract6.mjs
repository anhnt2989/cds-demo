import { writeFileSync } from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync } from 'fs';

const data = readFileSync('C:/Users/Jason/.claude/projects/C--Users-Jason-Documents-demo/0a144fdb-ee8b-41e8-9b82-dd4690ed4edf/tool-results/webfetch-1781063856501-9ukmok.pdf');
const uint8 = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
const pdfDoc = await pdfjsLib.getDocument({ data: uint8 }).promise;

const products = new Map();

for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
  const page = await pdfDoc.getPage(pageNum);
  const content = await page.getTextContent();
  const rowMap = new Map();
  for (const item of content.items) {
    if (!item.str.trim()) continue;
    const y = Math.round(item.transform[5] / 3) * 3;
    if (!rowMap.has(y)) rowMap.set(y, []);
    rowMap.get(y).push({ x: item.transform[4], text: item.str });
  }
  const sortedRows = Array.from(rowMap.entries()).sort((a, b) => b[0] - a[0]);
  let currentNum = null;
  for (const [y, items] of sortedRows) {
    const stt = items.filter(i => i.x < 90 && /^\d{1,3}$/.test(i.text.trim()));
    if (stt.length > 0) {
      const num = parseInt(stt[0].text.trim());
      if (num >= 1 && num <= 600) {
        currentNum = num;
        if (!products.has(num)) products.set(num, { num, nameL: [], descL: [], devL: [], usersL: [], problemL: [] });
      }
    }
    if (currentNum !== null) {
      const p = products.get(currentNum);
      if (!p) continue;
      const col = (lo, hi) => items.filter(i => i.x >= lo && i.x < hi).sort((a,b)=>a.x-b.x).map(i=>i.text).join(' ').trim();
      const nameT    = col(90, 190);
      const descT    = col(190, 319);
      const devT     = col(319, 426);
      const problemT = col(426, 554);
      const usersT   = col(554, 661);
      if (nameT)    p.nameL.push(nameT);
      if (descT)    p.descL.push(descT);
      if (devT)     p.devL.push(devT);
      if (problemT) p.problemL.push(problemT);
      if (usersT)   p.usersL.push(usersT);
    }
  }
}

function join(lines) { return lines.join(' ').replace(/\s+/g, ' ').trim(); }
function cleanDev(t) {
  return t.replace(/^(Đơn vị phát triển:|Đơn vị cung cấp thông tin:)\s*/g,'')
          .replace(/\s*(Đơn vị cung cấp thông tin:.*)/s,'').trim();
}
function categorize(name, desc) {
  const t = (name+' '+desc).toLowerCase();
  if (/\bai\b|chatbot|nlp|agent|trí tuệ|nhận dạng|học máy/.test(t)) return 'ai';
  if (/bệnh viện|y tế|sức khỏe|khám chữa|dược|bác sĩ|emr/.test(t)) return 'healthcare';
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
  const name    = join(p.nameL).substring(0, 120);
  const desc    = join(p.descL).substring(0, 500);   // longer desc
  const dev     = cleanDev(join(p.devL)).substring(0, 120);
  const problem = join(p.problemL).substring(0, 400);
  const users   = join(p.usersL).substring(0, 300);
  return { id: p.num, name, desc, dev, problem, users, cat: categorize(name, desc) };
});

console.log('Extracted:', final.length);
console.log('Sample #3:', JSON.stringify(final[2], null, 2));

writeFileSync('products_data.js', 'const PRODUCTS = ' + JSON.stringify(final, null, 2) + ';');
console.log('Saved products_data.js');
