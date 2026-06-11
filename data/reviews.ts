export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number; // 1–5
  text: string;
  date: string; // display string
  helpful: number;
}

export interface ProductRating {
  average: number; // 1.0–5.0, 1 decimal
  count: number;
  distribution: [number, number, number, number, number]; // [1★…5★] counts
  reviews: Review[];
}

/* ── deterministic pseudo-random helpers ── */
function hash(n: number): number {
  let x = ((n >>> 16) ^ n) * 0x45d9f3b;
  x = ((x >>> 16) ^ x) * 0x45d9f3b;
  return ((x >>> 16) ^ x) >>> 0;
}
function rng(seed: number, max: number) {
  return hash(seed) % max;
}
function pick<T>(arr: T[], seed: number): T {
  return arr[rng(seed, arr.length)];
}

/* ── mock data pools ── */
const NAMES = [
  'Nguyễn Văn An',
  'Trần Thị Bình',
  'Lê Văn Cường',
  'Phạm Thị Dung',
  'Hoàng Minh Em',
  'Đặng Thị Phương',
  'Bùi Văn Giang',
  'Vũ Thị Hoa',
  'Đỗ Quang Inh',
  'Ngô Thị Kim',
  'Dương Văn Long',
  'Mai Thị My',
  'Phan Văn Nam',
  'Tô Thị Oanh',
  'Lý Văn Phúc',
  'Hồ Thị Quỳnh',
];

const ROLES = [
  'Cán bộ nhà nước',
  'Chuyên viên IT',
  'Giám đốc doanh nghiệp',
  'Nhân viên y tế',
  'Giáo viên',
  'Kỹ sư phần mềm',
  'Chuyên gia tư vấn',
  'Quản lý dự án',
  'Nhà nghiên cứu',
  'Sinh viên đại học',
];

const TEXTS_5 = [
  'Giải pháp xuất sắc, triển khai thành công và mang lại hiệu quả rõ rệt trong công việc hàng ngày.',
  'Chúng tôi rất hài lòng với sản phẩm này. Giao diện thân thiện, hiệu suất cao và hỗ trợ kỹ thuật tuyệt vời.',
  'Đây là một trong những sản phẩm công nghệ tốt nhất mà đơn vị chúng tôi đã triển khai. Rất đáng tin cậy.',
  'Sản phẩm đáp ứng đầy đủ yêu cầu nghiệp vụ. Đội ngũ phát triển hỗ trợ nhiệt tình và chuyên nghiệp.',
  'Ứng dụng hoạt động ổn định, tốc độ xử lý nhanh. Rất hài lòng với chất lượng sản phẩm.',
];
const TEXTS_4 = [
  'Sản phẩm tốt, đáp ứng được hầu hết yêu cầu. Một số tính năng cần cải thiện thêm nhưng nhìn chung rất khả dụng.',
  'Giải pháp hiệu quả, tiết kiệm thời gian đáng kể. Giao diện cần tối ưu hơn cho thiết bị di động.',
  'Chất lượng tốt, giá trị phù hợp. Mong sẽ có thêm tính năng báo cáo thống kê chi tiết hơn.',
  'Hỗ trợ kỹ thuật nhanh chóng, sản phẩm ổn định. Tuy nhiên tài liệu hướng dẫn còn hơi sơ sài.',
  'Triển khai thành công tại đơn vị, nhân viên sử dụng dễ dàng sau khi được đào tạo ngắn.',
];
const TEXTS_3 = [
  'Sản phẩm đáp ứng cơ bản yêu cầu. Cần cải thiện thêm về tốc độ xử lý và giao diện người dùng.',
  'Ổn, nhưng còn một số lỗi nhỏ cần vá. Kỳ vọng phiên bản tiếp theo sẽ hoàn thiện hơn.',
  'Chức năng chính hoạt động tốt, phần tích hợp với hệ thống cũ còn gặp khó khăn.',
  'Cần thêm thời gian để đánh giá đầy đủ, ban đầu có một số vướng mắc khi cấu hình.',
];

const MONTHS = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12',
];

function makeRating(productId: number): ProductRating {
  const h = hash(productId * 31);

  // Average in range 3.2–5.0
  const raw = 3.2 + (h % 180) / 100;
  const average = Math.round(raw * 10) / 10;

  // Review count 15–250
  const count = 15 + (hash(productId * 13) % 236);

  // Distribution (rough, sums to count)
  const w5 = Math.round(count * (0.35 + (h % 25) / 100));
  const w4 = Math.round(count * (0.3 + (hash(h) % 15) / 100));
  const w3 = Math.round(count * 0.18);
  const w2 = Math.round(count * 0.09);
  const w1 = count - w5 - w4 - w3 - w2;
  const dist: [number, number, number, number, number] = [
    Math.max(0, w1),
    Math.max(0, w2),
    Math.max(0, w3),
    Math.max(0, w4),
    Math.max(0, w5),
  ];

  // Generate 4 reviews
  const numReviews = 3 + (productId % 3); // 3–5
  const reviews: Review[] = Array.from({ length: numReviews }, (_, i) => {
    const s = productId * 100 + i * 17;
    const rating = i === 0 ? 5 : i === 1 ? 4 + rng(s, 2) : 3 + rng(s + 1, 3);
    const texts = rating === 5 ? TEXTS_5 : rating >= 4 ? TEXTS_4 : TEXTS_3;
    const month = MONTHS[rng(s + 3, 12)];
    const year = 2024 + rng(s + 4, 2);
    const day = 1 + rng(s + 5, 28);
    return {
      id: `${productId}-${i}`,
      author: pick(NAMES, s + 6),
      role: pick(ROLES, s + 7),
      rating,
      text: pick(texts, s + 8),
      date: `${day} ${month}, ${year}`,
      helpful: rng(s + 9, 40),
    };
  });

  return { average, count, distribution: dist, reviews };
}

// Cache so we only generate once per product
const cache = new Map<number, ProductRating>();

export function getRating(productId: number): ProductRating {
  if (!cache.has(productId)) cache.set(productId, makeRating(productId));
  return cache.get(productId)!;
}
