import { writeFileSync } from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync } from 'fs';

const data = readFileSync('C:/Users/Jason/.claude/projects/C--Users-Jason-Documents-demo/0a144fdb-ee8b-41e8-9b82-dd4690ed4edf/tool-results/webfetch-1781063856501-9ukmok.pdf');
const uint8 = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
const pdfDoc = await pdfjsLib.getDocument({ data: uint8 }).promise;

// Column x-boundaries (verified from page-1 item analysis):
// STT:       x <  90          (62.40)
// Name:      90 <= x < 190    (94–163)
// Desc:      190 <= x < 319   (192.96)
// Developer: 319 <= x < 426   (320.64)
// Problem:   426 <= x < 554   (427.68)
// Users:     554 <= x < 661   (555.60)
// Process:   661 <= x         (662.64)

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

  for (const [, items] of sortedRows) {
    const stt = items.filter(i => i.x < 90 && /^\d{1,3}$/.test(i.text.trim()));
    if (stt.length > 0) {
      const num = parseInt(stt[0].text.trim());
      if (num >= 1 && num <= 600) {
        currentNum = num;
        if (!products.has(num))
          products.set(num, { num, nL: [], dL: [], devL: [], probL: [], usersL: [], procL: [] });
      }
    }
    if (currentNum === null) continue;
    const p = products.get(currentNum);
    if (!p) continue;

    const col = (lo, hi) =>
      items.filter(i => i.x >= lo && (hi == null || i.x < hi))
           .sort((a, b) => a.x - b.x).map(i => i.text).join(' ').trim();

    const n  = col(90,  190);
    const d  = col(190, 319);
    const dv = col(319, 426);
    const pr = col(426, 554);
    const us = col(554, 661);
    const pc = col(661, null);   // process column — no upper bound

    if (n)  p.nL.push(n);
    if (d)  p.dL.push(d);
    if (dv) p.devL.push(dv);
    if (pr) p.probL.push(pr);
    if (us) p.usersL.push(us);
    if (pc) p.procL.push(pc);
  }
}

function join(lines) { return lines.join(' ').replace(/\s+/g, ' ').trim(); }
function cleanDev(t) {
  return t.replace(/^(Đơn vị phát triển:|Đơn vị cung cấp thông tin:)\s*/g, '')
          .replace(/\s*(Đơn vị cung cấp thông tin:.*)/s, '').trim();
}
function cat(name, desc) {
  const t = (name + ' ' + desc).toLowerCase();
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

const final = Array.from(products.values()).sort((a, b) => a.num - b.num).map(p => {
  const name    = join(p.nL).substring(0, 120);
  const desc    = join(p.dL).substring(0, 500);
  const dev     = cleanDev(join(p.devL)).substring(0, 120);
  const problem = join(p.probL).substring(0, 500);
  const users   = join(p.usersL).substring(0, 400);
  const process = join(p.procL).substring(0, 500);
  return { id: p.num, name, desc, dev, problem, users, process, cat: cat(name, desc) };
});

// Show sample
console.log('Total:', final.length);
console.log('\nSample #1:');
const s = final[0];
console.log('  name:', s.name);
console.log('  desc:', s.desc.substring(0, 80));
console.log('  dev:', s.dev);
console.log('  problem:', s.problem.substring(0, 80));
console.log('  users:', s.users.substring(0, 80));
console.log('  process:', s.process.substring(0, 80));

writeFileSync('products_data.js', 'const PRODUCTS = ' + JSON.stringify(final, null, 2) + ';');
console.log('\nSaved products_data.js');
