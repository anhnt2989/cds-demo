import { type FeatherName } from '@/data/products';

export const LS = {
  green:   '#00aa55',
  greenDk: '#007a3d',
  greenLt: '#e6f7ef',
  black:   '#0A0A0A',
  surface: '#ffffff',
  bg:      '#F0FAF5',
  border:  '#C8E8D8',
  muted:   '#5A8A6A',
} as const;

const BASE = 'https://langso.dx.gov.vn';

export interface Solution {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  icon: FeatherName;
  image: string;
}

export const SOLUTIONS: Solution[] = [
  {
    id: 1,
    icon: 'home',
    title: 'Xây dựng gia đình số',
    subtitle: 'Gia đình thông minh',
    desc: 'Hướng dẫn xây dựng gia đình số với thiết bị công nghệ, kết nối internet và ứng dụng số trong sinh hoạt hằng ngày.',
    image: `${BASE}/image/color/01_Tranh%20tong%20hop_color.jpg`,
  },
  {
    id: 2,
    icon: 'heart',
    title: 'Khám chữa bệnh từ xa',
    subtitle: 'Telemedicine',
    desc: 'Tư vấn sức khỏe, đặt lịch khám và nhận kết quả qua điện thoại — tiết kiệm thời gian, không cần đến bệnh viện.',
    image: `${BASE}/image/color/02_Y%20t%E1%BA%BF%20s%E1%BB%91_color.jpg`,
  },
  {
    id: 3,
    icon: 'smartphone',
    title: 'Thanh toán di động',
    subtitle: 'Không dùng tiền mặt',
    desc: 'Sử dụng ví điện tử, QR code và ngân hàng số để thanh toán nhanh chóng, an toàn và tiện lợi.',
    image: `${BASE}/image/color/03_Thanh%20to%C3%A1n%20s%E1%BB%91_color.jpg`,
  },
  {
    id: 4,
    icon: 'sun',
    title: 'Nông nghiệp số',
    subtitle: 'Smart Farming',
    desc: 'Ứng dụng IoT, cảm biến và phần mềm quản lý trong sản xuất nông nghiệp để tăng năng suất và giảm chi phí.',
    image: `${BASE}/image/color/04_maybaykonglai_color.jpg`,
  },
  {
    id: 5,
    icon: 'trending-up',
    title: 'Tiếp thị quảng cáo số',
    subtitle: 'Digital Marketing',
    desc: 'Quảng bá sản phẩm và dịch vụ qua mạng xã hội, website và các nền tảng số để mở rộng thị trường.',
    image: `${BASE}/image/color/05_Ti%E1%BA%BFp%20th%E1%BB%8B%20qu%E1%BA%A3ng%20c%C3%A1o%20s%E1%BB%91_color.jpg`,
  },
  {
    id: 6,
    icon: 'package',
    title: 'Giao hàng tiết kiệm',
    subtitle: 'Logistics số',
    desc: 'Kết nối với dịch vụ vận chuyển số để giao hàng nhanh chóng, theo dõi đơn hàng và tiết kiệm chi phí vận chuyển.',
    image: `${BASE}/image/color/06_GHTK_color.jpg`,
  },
  {
    id: 7,
    icon: 'shopping-cart',
    title: 'Đưa nông sản lên sàn',
    subtitle: 'E-Commerce',
    desc: 'Bán nông sản qua các sàn thương mại điện tử như Shopee, Lazada, Sendo — tiếp cận hàng triệu khách hàng toàn quốc.',
    image: `${BASE}/image/color/07_TM%C4%90T%20PostMart_color.jpg`,
  },
  {
    id: 8,
    icon: 'dollar-sign',
    title: 'Tiếp cận tín dụng số',
    subtitle: 'Tài chính số',
    desc: 'Vay vốn trực tuyến, tiếp cận nguồn tín dụng số linh hoạt cho nông dân và hộ kinh doanh nhỏ.',
    image: `${BASE}/image/color/08_T%C3%A0i%20ch%C3%ADnh%20vi%20m%C3%B4_color.jpg`,
  },
  {
    id: 9,
    icon: 'tv',
    title: 'Truyền hình số di động',
    subtitle: 'Mobile TV & OTT',
    desc: 'Xem truyền hình, tin tức và nội dung giải trí chất lượng cao qua điện thoại với dịch vụ OTT.',
    image: `${BASE}/image/color/09_VTVGo_color.jpg`,
  },
  {
    id: 10,
    icon: 'book',
    title: 'Học tập trực tuyến',
    subtitle: 'E-Learning',
    desc: 'Học kỹ năng, nghề nghiệp và kiến thức thực tiễn qua các nền tảng học trực tuyến mọi lúc, mọi nơi.',
    image: `${BASE}/image/color/10_Hoctap_color.jpg`,
  },
  {
    id: 11,
    icon: 'map-pin',
    title: 'Phát triển du lịch địa phương',
    subtitle: 'Du lịch số',
    desc: 'Quảng bá điểm du lịch và kết nối với du khách qua công nghệ số, tăng thu nhập từ du lịch cộng đồng.',
    image: `${BASE}/image/color/11_ezCloud_color.jpg`,
  },
  {
    id: 12,
    icon: 'users',
    title: 'Tổ công nghệ số cộng đồng',
    subtitle: 'Cộng đồng số',
    desc: 'Nhóm tình nguyện viên hỗ trợ chuyển đổi số trong cộng đồng, hướng dẫn người dân sử dụng công nghệ hiệu quả.',
    image: `${BASE}/image/color/12_To_Cong_Nghe_So_color.jpg`,
  },
  {
    id: 13,
    icon: 'shield',
    title: 'Dịch vụ công trực tuyến',
    subtitle: 'Hành chính số',
    desc: 'Thực hiện thủ tục hành chính trực tuyến từ nhà — không cần xếp hàng, không đi lại, tiết kiệm thời gian.',
    image: `${BASE}/image/color/13_DichVuCong_color.jpg`,
  },
  {
    id: 14,
    icon: 'search',
    title: 'Truy xuất nguồn gốc nông sản',
    subtitle: 'Minh bạch chuỗi giá trị',
    desc: 'Dán tem QR và xác thực nguồn gốc sản phẩm để tăng giá trị thương hiệu và niềm tin của người tiêu dùng.',
    image: `${BASE}/image/color/14_TruyXuatNguonGoc_color.jpg`,
  },
];

export const CONTACT = {
  address: '18 Nguyễn Du, Hai Bà Trưng, Hà Nội',
  phone:   '024.39454461',
  email:   'langso@mic.gov.vn',
  org:     'Cục Kinh tế số và Xã hội số',
  url:     'https://langso.dx.gov.vn',
};

export const LOGO_URL       = `${BASE}/image/logo.png`;
export const LOGO_TITLE_URL = `${BASE}/image/logotitle.png`;

export const PILLARS = [
  {
    image: `${BASE}/image/Ellipse%204%20(1).png`,
    text: 'Mang nền tảng số đến từng hộ gia đình, từng người dân khu vực nông thôn',
  },
  {
    image: `${BASE}/image/Ellipse%204.png`,
    text: 'Người dân trong làng là động lực chính đẩy nhanh quá trình phát triển làng số',
  },
  {
    image: `${BASE}/image/Ellipse%204%20(2).png`,
    text: 'Sử dụng công nghệ số để thay đổi cách thức sản xuất, phát triển kinh tế',
  },
];
