import { type ComponentProps } from 'react';
import { type Feather } from '@expo/vector-icons';

export type Category =
  | 'ai' | 'government' | 'education' | 'healthcare' | 'finance'
  | 'smartcity' | 'agriculture' | 'security' | 'tourism' | 'enterprise';

export type FeatherName = ComponentProps<typeof Feather>['name'];

export interface Product {
  id: number;
  name: string;
  desc: string;
  dev: string;
  problem: string;
  users: string;
  process: string;
  cat: Category;
}

export const CATEGORY_CONFIG: Record<Category, { label: string; icon: FeatherName }> = {
  ai:          { label: 'Trí tuệ nhân tạo',  icon: 'cpu'          },
  government:  { label: 'Chính phủ số',       icon: 'shield'       },
  education:   { label: 'Giáo dục',           icon: 'book'         },
  healthcare:  { label: 'Y tế',               icon: 'heart'        },
  finance:     { label: 'Tài chính',          icon: 'dollar-sign'  },
  smartcity:   { label: 'Đô thị thông minh',  icon: 'map'          },
  agriculture: { label: 'Nông nghiệp',        icon: 'sun'          },
  security:    { label: 'An ninh mạng',       icon: 'lock'         },
  tourism:     { label: 'Du lịch & Văn hóa',  icon: 'compass'      },
  enterprise:  { label: 'Doanh nghiệp',       icon: 'briefcase'    },
};

export const FEATURED_IDS = [1,3,7,8,10,12,14,22,29,45,49,67];

export const PRODUCTS: Product[] = [
  {
    "id": 1,
    "name": "AI AgentBase - Nền tảng quản lý AI agent từ GreenNode",
    "desc": "Đơn giản hóa vận hành AI agent ở quy mô doanh nghiệp",
    "dev": "GreenNode (AI Cloud - Công ty con thuộc tập đoàn VNG)",
    "problem": "Thay vì phải tự xây dựng hạ tầng phức tạp và tốn nhiều nguồn lực kỹ thuật như các mô hình triển khai AI truyền thống, AgentBase cung cấp một nền tảng được quản lý hoàn chỉnh, bảo mật và dễ mở rộng. Nhờ đó, đội ngũ của bạn có thể đưa sản phẩm từ bản mẫu vào vận hành nhanh hơn, với ít rủi ro và tối ưu chi phí hơn",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và người dùng nội bộ",
    "process": "Giới thiệu AgentBase; AI AgentBase bao gồm sáu module dịch vụ: Runtime, Access Control, Insight, Memory, Gateway và Tool. Mỗi module có thể hoạt động độc lập hoặc phối hợp với nhau để cung cấp các chức năng cốt lõi cho hệ sinh thái AI agent của bạn",
    "cat": "ai"
  },
  {
    "id": 2,
    "name": "An ERP - Nền tảng quản trị nguồn lực doanh nghiệp toàn diện",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực hoạt động chuyên môn, khoa học và công nghệ",
    "dev": "Công ty Cổ phần Tập đoàn Nagakawa",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực hoạt động chuyên môn, khoa học và công nghệ",
    "users": "Doanh nghiệp, lãnh đạo quản lý, bộ phận tài chính - kế toán, nhân sự, kinh doanh và vận hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 3,
    "name": "Art CMS AI Hub - Hệ thống quản trị, phân phối nội dung thông minh",
    "desc": "Đây là hệ thống quản trị và phân phối nội dung gồm hệ quản trị nội dung (CMS) và nền tảng nội dung (Content Platform), được xây dựng theo định hướng Headless CMS. Giải pháp ứng dụng",
    "dev": "Công ty Cổ phần Công nghệ SAVIS",
    "problem": "Đáp ứng xu hướng truyền thông đa kênh, tiếp thị đa điểm và quản trị tập trung; Giải quyết nhu cầu cá nhân hóa nội dung và sáng tạo trên đa thiết bị của người dùng; Khắc phục nhược",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Nhập và Lưu trữ: Nội dung được lưu trữ có cấu trúc trong các kho dữ liệu (Big Data), thuận tiện cho tìm kiếm và tái sử dụng; Sản xuất thông minh: AI tự động viết kịch bản, tóm tắt",
    "cat": "ai"
  },
  {
    "id": 4,
    "name": "Axiom VinGenChip",
    "desc": "Axiom VinGenChip: Chip định kiểu gen chi phí thấp đặc trưng cho quần thể người Việt dựa trên công nghệ microarray",
    "dev": "Công ty Cổ phần Genestory",
    "problem": "Chip tính toán, hỗ trợ định vị kiểu Gen người Việt",
    "users": "Cơ sở nghiên cứu, cơ sở y tế, doanh nghiệp công nghệ sinh học và chuyên gia trong lĩnh vực di truyền, định vị kiểu gen",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 5,
    "name": "Base",
    "desc": "Quản trị đơn vị, thông tin nội bộ, giao việc",
    "dev": "Học viện Hàng không Việt Nam",
    "problem": "Quản trị đơn vị, thông tin nội bộ, giao việc",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 6,
    "name": "Bàn Làm việc số",
    "desc": "Một chỗ làm việc duy nhất cho cán bộ sở, ngành - thay cho hàng chục hệ thống rời rạc. Thay vì mỗi ngày cán bộ phải đăng nhập 3 - 4 hệ thống khác nhau, gõ tay đầu việc ra Excel, gọi điện hỏi tiến độ và ngồi tổng hợp báo cáo bằng tay - Bàn Làm Việc Số gom toàn bộ công việc điều hành về một cửa, dưới một tài khoản, có trợ lý AI luôn sẵn sàng.",
    "dev": "Trung tâm Chuyển đổi số",
    "problem": "Sáu vấn đề cụ thể 1. Văn bản về rồi… mất hút Văn bản chỉ đạo từ Trung ương, Tỉnh gửi về sở - nằm im trong thư mục văn thư. Không ai biết nó yêu cầu bao nhiêu đầu việc, chỉ tiêu gì, hạn đến khi nào. Cán bộ phải đọc từng trang, gõ lại ra Excel mới phân công được - mất 2 - 3 tiếng cho một văn bản 5 - 10 trang, và luôn có nguy cơ bỏ sót yêu",
    "users": "Cơ quan nhà nước, cán bộ xử lý nghiệp vụ, người dân và doanh nghiệp; cơ quan nội vụ, cán bộ, công chức, viên chức và cơ quan, tổ chức có liên quan",
    "process": "Quy trình nghiệp vụ - Bàn Làm Việc Số 1. Văn bản về sở Hệ thống tự đồng bộ văn bản đến từ Tỉnh về kho nội bộ - ghi nhận số hiệu, trích yếu, cơ quan phát hành và phân biệt rõ file chính, file đính kèm, file liên quan. Ở bước này văn bản mới là dữ liệu thô, chưa đi vào điều hành. 2. AI đọc hiểu - chạy nền tự động",
    "cat": "ai"
  },
  {
    "id": 7,
    "name": "Bản sao số đô thị vUDT",
    "desc": "Nền tảng Bản sao số đô thị (Viettel Urban Digital Twin - vUDT) là nền tảng hạ tầng số dùng chung, cho phép số hóa, tích hợp, quản trị, mô hình hoá, phân tích và mô phỏng toàn diện trạng thái đô thị trong không gian số, nhằm phục vụ quản lý, điều hành và ra quyết định theo hướng đa ngành, liên thông và bền vững",
    "dev": "VTS",
    "problem": "Số hóa toàn diện hiện trạng đô thị để quản trị, phân tích và mô phỏng các kịch bản phát triển, phục vụ ra quyết định chính xác trong quản lý hạ tầng, quy hoạch và giao thông",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Nền tảng Bản sao số đô thị (Viettel Urban Digital Twin - vUDT) là nền tảng hạ tầng số dùng chung, cho phép số hóa, tích hợp, quản trị, mô hình hoá, phân tích và mô phỏng toàn diện trạng thái đô thị trong không gian số, nhằm phục vụ quản lý, điều hành và ra quyết định theo hướng đa ngành, liên thông và bền vững",
    "cat": "smartcity"
  },
  {
    "id": 8,
    "name": "Bản đồ số 3D di sản văn hoá - du lịch",
    "desc": "Số hóa 3D di sản văn hóa và tài nguyên du lịch trên bản đồ số, tích hợp chỉ đường và hướng dẫn du lịch thông minh",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Số hóa 3D di sản văn hóa và tài nguyên du lịch trên bản đồ số, tích hợp chỉ đường và hướng dẫn du lịch thông minh",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Bản đồ số 3D di sản văn hoá - du lịch: Hệ thống bản đồ số du lịch số hóa 3D toàn bộ tài nguyên du lịch, định vị trên nền bản đồ số: Layer hóa từng lớp, phân loại điểm đến, loại hình du lịch; Tích hợp chỉ đường, hướng dẫn du lịch",
    "cat": "smartcity"
  },
  {
    "id": 9,
    "name": "Bảo hiểm xã hội điện tử",
    "desc": "Thực hiện các nghiệp vụ bảo hiểm xã hội",
    "dev": "Cục Tiền lương và Bảo hiễm xã hội",
    "problem": "Thực hiện các nghiệp vụ bảo hiểm xã hội",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 10,
    "name": "Bảo tàng số 3D",
    "desc": "Hệ thống bảo tàng số 3D: Bảo tàng số tương tác 3D giúp người xem thông qua các thiết bị máy tính, máy tính bảng, thiết bị di động thông minh có thể tham quan, di chuyển, tìm hiểu thông tin trưng bày, hiện vật của bảo tàng một cách chi tiết nhất. Bao gồm cá c tính năng chính: Không gian trưng bày 3D; Hiện vật trưng bày 3D; Tham quan ảo; Tương tác 3D; Sơ đồ 3D không gian trưng bày; Hướng dẫn viên ảo; Video thuyết minh.",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Xây dựng bảo tàng số 3D tương tác, cho phép tham quan, xem hiện vật và tìm hiểu nội dung trưng bày từ xa",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Hệ thống bảo tàng số 3D: Bảo tàng số tương tác 3D giúp người xem thông qua các thiết bị máy tính, máy tính bảng, thiết bị di động thông minh có thể tham quan, di chuyển, tìm hiểu thông tin trưng bày, hiện vật của bảo tàng một cách chi tiết nhất. Bao gồm cá c tính năng chính: Không gian trưng bày 3D; Hiện vật trưng bày 3D; Tham quan ảo; Tương tác 3D; Sơ đồ 3D không gian trưng bày; Hướng dẫn viên ảo; Video thuyết minh.",
    "cat": "tourism"
  },
  {
    "id": 11,
    "name": "BeeKids - Nền tảng kết nối học tập và phát triển tư duy cho Trẻ từ 4 - 10 tuổi",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty cổ phần giáo dục Công nghệ Dragold",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 12,
    "name": "Bệnh viện thông minh",
    "desc": "Bộ sản phẩm giúp thông minh hóa các hoạt động của bệnh viện bao gồm hệ thống quản lý nghiệp vụ khám chữa bệnh (tiếp đón, khám chữa bệnh nội/ngoại trú, dược, tài chính, bảo hiểm y tế…) và hệ thống bệnh án điện tử (số hóa toàn bộ hồ sơ bệnh án điện tử, tích hợp SNOMED",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Bộ sản phẩm giúp thông minh hóa các hoạt động của bệnh viện bao gồm hệ thống quản lý nghiệp vụ khám chữa bệnh (tiếp đón, khám chữa bệnh nội/ngoại trú, dược, tài chính, bảo hiểm y tế…) và hệ thống bệnh án điện tử (số hóa toàn bộ hồ sơ bệnh án điện tử, tích hợp SNOMED",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Bộ sản phẩm giúp thông minh hóa các hoạt động của bệnh viện bao gồm hệ thống quản lý nghiệp vụ khám chữa bệnh (tiếp đón, khám chữa bệnh nội/ngoại trú, dược, tài chính, bảo hiểm y tế…) và hệ thống bệnh án điện tử (số hóa toàn bộ hồ sơ bệnh án điện tử, tích hợp SNOMED",
    "cat": "healthcare"
  },
  {
    "id": 13,
    "name": "Biên bản điện tử AI",
    "desc": "Tự động ghi lại biên bản phiên tòa",
    "dev": "TAND TP Hồ Chí Minh",
    "problem": "Tự động ghi lại biên bản phiên tòa",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin và quản trị hệ thống",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "ai"
  },
  {
    "id": 14,
    "name": "BnK IDP",
    "desc": "BnK IDP là nền tảng trí tuệ nhân tạo nhận thức đầu tiên được nghiên cứu, thiết kế và phát triển hoàn toàn bởi đội ngũ kỹ sư Việt Nam, mang đến bước đột phá trong cách máy hiểu và trích xuất thông tin từ tài liệu",
    "dev": "BnK Solution",
    "problem": "BnK IDP đóng góp trực tiếp cho kinh tế xanh thông qua việc giảm in ấn, loại bỏ giấy tờ và giảm tiêu thụ năng lượng trong xử lý thủ công",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "BnK IDP cho phép \"hướng dẫn AI bằng ngôn ngữ tự nhiên\" - chỉ cần mô tả thông tin cần trích xuất, AI sẽ tự động đọc hiểu và xử lý chính xác ngay cả với mẫu tài liệu mới",
    "cat": "ai"
  },
  {
    "id": 15,
    "name": "Bộ CMS dùng để thực hiện viết bài, biên tập trên báo điện tử và báo giấy",
    "desc": "Phục vụ cả toàn soạn",
    "dev": "Trung ương Đoàn TNCS Hồ Chí Minh",
    "problem": "Phục vụ cả toàn soạn",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 16,
    "name": "Bộ công cụ robot giáo dục học tập và lập trình STEM robotic - G - Robot creator",
    "desc": "Bộ công cụ robot giáo dục học tập và lập trình STEM robotic - G - Robot creator",
    "dev": "Công ty Cổ phần Công nghệ giáo dục Garastem",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 17,
    "name": "Bộ giải pháp EdTech giúp dạy và học cá nhân hoá, tối ưu hoá: TAK12,",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo",
    "dev": "Công ty Cổ phần Phần Mềm CTH",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "education"
  },
  {
    "id": 18,
    "name": "Bộ hình thức thể hiện nhân vật Anh Hai Cà Mau",
    "desc": "Trợ lý ảo về lĩnh vực phân bón",
    "dev": "Công ty Cổ phần Phân Bón Dầu Khí Cà Mau",
    "problem": "Hỗ trợ người dùng tra cứu, hỏi đáp và tiếp cận thông tin liên quan đến phân bón thông qua trợ lý ảo",
    "users": "Người dân, nông dân, đại lý, cán bộ kỹ thuật hoặc đơn vị liên quan đến lĩnh vực phân bón",
    "process": "Người dùng đặt câu hỏi hoặc lựa chọn nội dung cần tra cứu; trợ lý ảo tiếp nhận, xử lý và phản hồi thông tin theo kịch bản/dữ liệu đã được cấu hình",
    "cat": "agriculture"
  },
  {
    "id": 19,
    "name": "Cấp mã số trực tuyến",
    "desc": "Hệ thống cấp mã số ĐVQHNS trực tuyến mức độ 4 (Front end): Là hệ thống cho phép người đại diện (NĐD) tham gia vào hệ thống để thực hiện đăng ký xin cấp mã ĐVQHNS cho 6 loại dịch vụ khác nhau, ngoài ra NĐD còn có thể theo dõi tra cứu các hồ sơ xin cấp mã củ a cá nhân, theo dõi trạng thái hồ sơ đã được nhập, hồ sơ chờ duyệt, hồ sơ đã cấp mã, ngoài ra còn cho phép NĐD có thể in GCN trực tiếp (Có hỗ trợ in mã vạch)",
    "dev": "Cục Công nghệ thống tin và chuyển đổi số",
    "problem": "Hệ thống cấp mã số ĐVQHNS trực tuyến mức độ 4 (Front end): Là hệ thống cho phép người đại diện (NĐD) tham gia vào hệ thống để thực hiện đăng ký xin cấp mã ĐVQHNS cho 6 loại dịch vụ khác nhau, ngoài ra NĐD còn có thể theo dõi tra cứu các hồ sơ xin cấp mã củ a cá nhân, theo dõi trạng thái hồ sơ đã được nhập, hồ sơ chờ duyệt, hồ sơ đã cấp mã, ngoài ra còn cho phép NĐD có thể in GCN trực tiếp (Có hỗ trợ in mã vạch)",
    "users": "Cơ quan nhà nước, cán bộ xử lý nghiệp vụ, người dân và doanh nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 20,
    "name": "Cấp mã số đơn vị có quan hệ ngân sách (backend)",
    "desc": "Hỗ trợ cấp mã số cho các đơn vị sử dụng ngân sách trung ương theo Quyết định số 90/2007/QĐ - BTC ngày 26/10/2007 của Bộ Tài chính về việc ban hành Quy định mã số các đơn vị có quan hệ với ngân sách và Quyết định số",
    "dev": "Cục Công nghệ thống tin và chuyển đổi số",
    "problem": "Hỗ trợ cấp mã số cho các đơn vị sử dụng ngân sách trung ương theo Quyết định số 90/2007/QĐ - BTC ngày 26/10/2007 của Bộ Tài chính về việc ban hành Quy định mã số các đơn vị có quan hệ với ngân sách và Quyết định số",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 21,
    "name": "Cấp thị thực ngoại giao",
    "desc": "Quản lý hồ sơ cấp thị thực cho các đối tượng thuộc diện do BNG cấp thị thực",
    "dev": "Cục Lãnh sự",
    "problem": "Quản lý hồ sơ cấp thị thực cho các đối tượng thuộc diện do BNG cấp thị thực",
    "users": "Cơ quan nhà nước, cán bộ xử lý nghiệp vụ, người dân và doanh nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 22,
    "name": "Cắt file chương trình",
    "desc": "Tách chương trình phát thanh thành các phần nhỏ (bản tin, chuyên mục, ca nhạc, phỏng vấn)",
    "dev": "Trung tâm R&D",
    "problem": "Tách chương trình phát thanh thành các phần nhỏ (bản tin, chuyên mục, ca nhạc, phỏng vấn)",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 23,
    "name": "CES EDUAI - giải pháp ứng dụng AI cho giáo viên trong thời đại số",
    "desc": "CES EDUAI - giải pháp ứng dụng AI cho giáo viên trong thời đại số",
    "dev": "Công ty Cổ phần Công nghệ Trí tuệ nhân tạo Ces Golban",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "ai"
  },
  {
    "id": 24,
    "name": "Chatbot AI Roboki",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực khoa học và Công nghệ; Hoạt động chuyên môn, khoa học và công nghệ",
    "dev": "Công ty TNHH Tư vấn và Phát triển Giáo dục Innedu",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực khoa học và Công nghệ; Hoạt động chuyên môn, khoa học và công nghệ",
    "users": "Người dùng cuối, cơ quan, tổ chức, doanh nghiệp và bộ phận hỗ trợ khách hàng có nhu cầu hỏi đáp, tra cứu thông tin",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "ai"
  },
  {
    "id": 25,
    "name": "Chatbot AI trên Cổng thông tin điện tử và kênh Zalo/Messenger",
    "desc": "Điểm nổi bật của mô hình là không yêu cầu cài đặt thêm ứng dụng, không phát sinh chi phí, giao diện thân",
    "dev": "UBND phường An Phong",
    "problem": "Khi tiện ích này đi vào hoạt động sẽ giúp giảm áp lực cho cán bộ tiếp dân. Giúp người dân chủ động tra cứu",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp",
    "process": "Khi sử dụng tiện ích này là người dùng đang làm việc với phần mềm trí tuệ nhân tạo AI. AI sẽ trả lời tự động",
    "cat": "ai"
  },
  {
    "id": 26,
    "name": "Chatbot AI trên Cổng thông tin điện tử và kênh Zalo/Messenger",
    "desc": "1. Chatbot AI trên Cổng thông tin điện tử (Website) Đây là \"trợ lý ảo\" trực tiếp ngay tại trang chủ, giúp người dân định hướng nhanh chóng trong biển thông tin hành chính. Tra cứu thủ tục hành chính (TTHC): Tự động hướng dẫn các thành phần hồ sơ, quy trình thực hiện, lệ phí và thời gian trả kết quả cho từng lĩnh vực (tư pháp, hộ tịch, đất đai…)",
    "dev": "VNPT Hải Phòng",
    "problem": "1. Chatbot AI trên Cổng thông tin điện tử (Website) Đây là \"trợ lý ảo\" trực tiếp ngay tại trang chủ, giúp người dân định hướng nhanh chóng trong biển thông tin hành chính. Tra cứu thủ tục hành chính (TTHC): Tự động hướng dẫn các thành phần hồ sơ, quy trình thực hiện, lệ phí và thời gian trả kết quả cho từng lĩnh vực (tư pháp, hộ tịch, đất đai…)",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Cán bộ, công chức, doanh nghiệp, nhân dân đặt câu hỏi sẽ được trợ lý ảo AI tìm kiếm một cách nhanh nhất và trả lời",
    "cat": "ai"
  },
  {
    "id": 27,
    "name": "Chấm điểm tín nhiệm",
    "desc": "Từ các dữ liệu tín dụng của khách hàng, trả về điểm tín nhiệm để cho các hệ thống thẩm định ngân hàng sử dụng",
    "dev": "KCI",
    "problem": "Phê duyệt linh hoạt, mở thẻ với KH ít thông tin",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Phân tích dữ liệu, thiết lập mô hình dự đoán, giám sát và hiệu chỉnh, triển khai dịch vụ qua api",
    "cat": "finance"
  },
  {
    "id": 28,
    "name": "CHECKEE - Giải pháp số hóa, quản lý",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực nông",
    "dev": "Công ty Cổ phần Công nghệ Checkee",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh,",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý,",
    "cat": "enterprise"
  },
  {
    "id": 29,
    "name": "Chuyển đổi giọng nói thành văn bản - Voice to text",
    "desc": "Cung cấp công cụ chuyển đổi nhanh giọng nói thành văn bản phục vụ biên tập, lưu trữ, tìm kiếm",
    "dev": "Trung tâm R&D",
    "problem": "Cung cấp công cụ chuyển đổi nhanh giọng nói thành văn bản phục vụ biên tập, lưu trữ, tìm kiếm",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 30,
    "name": "Chuyển đổi văn bản thành giọng nói - Text to Speech",
    "desc": "Hỗ trợ số hoá và tự động hoá giọng đọc từ văn bản",
    "dev": "Trung tâm R&D",
    "problem": "Hỗ trợ số hoá và tự động hoá giọng đọc từ văn bản",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 31,
    "name": "Chương trình bổ trợ Tiếng Anh tích hợp STEM Robotics",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực khoa học và Công nghệ; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Công nghệ Bình Minh",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực khoa học và Công nghệ; Giáo dục và Đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 32,
    "name": "Chương trình giáo dục MAKESTEAM Robotics",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty cổ phần Giáo dục QG",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 33,
    "name": "Chương trình Quản lý văn bản điều hành tập trung trong hệ thống Kho bạc Nhà nước",
    "desc": "Hệ thống Quản lý văn bản điều hành được xây dựng theo mô hình tập trung, triển khai cho các đơn vị trong hệ thống KBNN đáp ứng được các quy định tại: Quyết định số",
    "dev": "Kho bạc Nhà nước",
    "problem": "Hệ thống Quản lý văn bản điều hành được xây dựng theo mô hình tập trung, triển khai cho các đơn vị trong hệ thống KBNN đáp ứng được các quy định tại: Quyết định số",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 34,
    "name": "Chương trình quản lý văn bản điện tử Bộ Tài chính",
    "desc": "Cung cấp các quy trình xử lý văn bản điện tử bao gồm: Quản lý văn bản đến, quản lý văn bản đi, quản lý hồ sơ trình Lãnh đạo, quản lý văn bản nội bộ, quản lý các chỉ đạo của Lãnh đạo, quản lý hồ sơ công việc, quản lý các thư viện văn bản dùng chung, lịch làm việc của Lãnh đạo Bộ và Lãnh đạo đơn vị; Cung cấp các quy trình đăng ký sử dụng và quản lý các dịch vụ đăng ký phòng họp cơ quan Bộ và xe ô tô của Bộ",
    "dev": "Cục Công nghệ thống tin và chuyển đổi số",
    "problem": "Cung cấp các quy trình xử lý văn bản điện tử bao gồm: Quản lý văn bản đến, quản lý văn bản đi, quản lý hồ sơ trình Lãnh đạo, quản lý văn bản nội bộ, quản lý các chỉ đạo của Lãnh đạo, quản lý hồ sơ công việc, quản lý các thư viện văn bản dùng chung, lịch là m việc của Lãnh đạo Bộ và Lãnh đạo đơn vị; Cung cấp các quy trình đăng ký sử dụng và quản lý các dịch vụ đăng ký phòng họp cơ quan Bộ và xe ô tô của Bộ",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 35,
    "name": "Chương trình Talkshow chuyên biệt về Chuyển đổi số - Vietnam On",
    "desc": "Chương trình Talkshow chuyên biệt về Chuyển đổi số - \"Vietnam On",
    "dev": "Kênh VTC1 - Đài Truyền hình Kỹ thuật số VTC",
    "problem": "Hỗ trợ số hóa, tối ưu hóa hoạt động trong lĩnh vực chuyển đổi số",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "",
    "cat": "enterprise"
  },
  {
    "id": 36,
    "name": "Chương trình tổng hợp báo cáo chi đầu tư (THBC - LAN)",
    "desc": "Do hệ thống TABMIS chưa đáp ứng được yêu cầu quản lý riêng về tình hình thực hiện và thanh toán vốn đầu tư công (như báo cáo",
    "dev": "Kho bạc Nhà nước",
    "problem": "Do hệ thống TABMIS chưa đáp ứng được yêu cầu quản lý riêng về tình hình thực hiện và thanh toán vốn đầu tư công (như báo cáo",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "finance"
  },
  {
    "id": 37,
    "name": "Chương trình Đào tạo STEM/Robotics toàn diện cho học sinh Mầm non - THCS",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần Giáo dục Việt Robot",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 38,
    "name": "Chữ ký số",
    "desc": "Ký số văn bản, quyết định",
    "dev": "Trung tâm R&D",
    "problem": "Ký số văn bản, quyết định",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 39,
    "name": "Chữ ký số từ xa MobiFone CA",
    "desc": "Giải pháp chữ ký số MobiFone CA là dịch vụ chứng thực chữ ký số công cộng được xây dựng trên hạ tầng khóa công khai (PKI), cho phép cá nhân, doanh nghiệp và tổ chức thực hiện ký số trên các tài",
    "dev": "Trung tâm Công nghệ thống tin MobiFone",
    "problem": "Thực tế tại Việt Nam cho thấy số lượng doanh nghiệp, hộ kinh doanh và cá nhân tham gia giao dịch điện tử ngày càng tăng, đặc biệt dưới tác động của các quy định bắt buộc như sử dụng hóa đơn điện tử và kê",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Ký số truyền thống sử dụng USB Token, SIM PKI và mô hình chữ ký số từ xa (Remote Signing), trong đó khóa bí mật được lưu trữ tập trung trong thiết bị HSM đạt chuẩn bảo mật",
    "cat": "smartcity"
  },
  {
    "id": 40,
    "name": "CityWork - Quản lý khách hàng",
    "desc": "Dự án/phần mềm: CityWork - Quản lý khách hàng (áp dụng cho các Trạm Cấp nước Long Thành, Trạm Hưng Nguyên, Diễn Yên)",
    "dev": "CÔNG TY CỔ PHẦN CÔNG NGHỆ THÔNG TIN ĐỊA LÝ EK",
    "problem": "Việc sử dụng phần mềm đã giảm tải được khối lượng công việc lớn, mang lại nhiều kết quả tích cực, thể hiện tính chuyên nghiệp, hướng đến công nghệ số… đáp ứng được nhu cầu cần thiết hiện tại; Hạn chế: Vẫn còn một số lỗi, một số chức năng chưa phù hợp với t hực tế, đã góp ý và có chỉnh sửa hàng năm bởi nhà cung cấp dịch vụ",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Bên cung cấp phần mềm cung ứng các dịch vụ nền tảng sổ, phần mềm quản lý giúp đơn vị thực hiện quản lý các công việc chuyên môn, lĩnh vực hoạt động của đơn vị trên môi trường điện tử",
    "cat": "enterprise"
  },
  {
    "id": 41,
    "name": "Cloud Infrastructure as a Service (IaaS)",
    "desc": "Cung cấp hạ tầng điện toán đám mây (máy chủ ảo, lưu trữ, mạng) theo mô hình IaaS linh hoạt, thanh toán theo dùng",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Cung cấp hạ tầng điện toán đám mây (máy chủ ảo, lưu trữ, mạng) theo mô hình IaaS linh hoạt, thanh toán theo dùng",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Dịch vụ hạ tầng Public Cloud của Viettel Cloud cung cấp nền tảng hạ tầng điện toán đám mây linh hoạt và mở rộng theo nhu cầu, bao gồm máy chủ ảo hóa, lưu trữ, mạng và các thành phần hạ tầng thiết yếu khác. Khách hàng có thể chủ động triển khai, quản lý và vận hành tài nguyên mà không cần đầu",
    "cat": "finance"
  },
  {
    "id": 42,
    "name": "Cloud Managed Services",
    "desc": "Vận hành, quản trị và tối ưu hóa toàn bộ môi trường cloud của khách hàng bởi đội ngũ chuyên gia Viettel",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Vận hành, quản trị và tối ưu hóa toàn bộ môi trường cloud của khách hàng bởi đội ngũ chuyên gia Viettel",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Dịch vụ quản trị hạ tầng Cloud là các dịch vụ CNTT cung cấp cho khách hàng năng lực quản lý, vận hành và tối ưu môi trường điện toán đám mây của doanh nghiệp. Nhà cung cấp dịch vụ quản trị đám mây sẽ chịu trách nhiệm thực hiện các công việc như: Giám sát v à quản lý hạ tầng đám mây hàng ngày; Hỗ trợ vận hành, bảo trì, cập nhật, vá lỗi, sao lưu và phục hồi dữ liệu; Đảm bảo an toàn, bảo mật và tuân thủ các tiêu chuẩn liên quan.",
    "cat": "education"
  },
  {
    "id": 43,
    "name": "Cloud Platform",
    "desc": "Cấp phép nền tảng Cloud Platform để tổ chức tự xây dựng và vận hành hạ tầng Private Cloud tại trung tâm dữ liệu riêng",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Cấp phép nền tảng Cloud Platform để tổ chức tự xây dựng và vận hành hạ tầng Private Cloud tại trung tâm dữ liệu riêng",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Cung cấp license nền tảng Cloud Platform để triển khai hạ tầng Private Cloud tại trung tâm dữ liệu của khách hàng",
    "cat": "smartcity"
  },
  {
    "id": 44,
    "name": "Cloud Platform as a Service (PaaS)",
    "desc": "Cung cấp nền tảng đám mây PaaS (Kubernetes, Container Registry, Database - as - a - Service) để phát triển và vận hành ứng dụng",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Cung cấp nền tảng đám mây PaaS (Kubernetes, Container Registry, Database - as - a - Service) để phát triển và vận hành ứng dụng",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Bao gồm các sản phẩm lớp P: Viettel Kubernetes Engine; Viettel Container Registry; Viettel Cloud Database - as - a - service (vDBaaS); Viettel Cloud Firewall (hợp tác).",
    "cat": "enterprise"
  },
  {
    "id": 45,
    "name": "Cloud Security",
    "desc": "Bảo vệ toàn diện dữ liệu, ứng dụng và hạ tầng trên môi trường đám mây trước các mối đe dọa an ninh mạng",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Bảo vệ toàn diện dữ liệu, ứng dụng và hạ tầng trên môi trường đám mây trước các mối đe dọa an ninh mạng",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và bộ phận công nghệ thông tin",
    "process": "Bao gồm các dịch vụ, giải pháp và công nghệ được thiết kế để bảo vệ dữ liệu, ứng dụng và hạ tầng trong môi trường điện toán đám mây khỏi các mối đe dọa an ninh mạng, truy cập trái phép, rò rỉ dữ liệu và các rủi ro khác. Các dịch vụ này bao gồm việc áp dụng các chính sách, quy trình, biện pháp kiểm soát và công cụ bảo mật nhằm đảm bảo tính bảo mật, toàn vẹn và sẵn sàng của dữ liệu và hệ thống trên đám mây",
    "cat": "education"
  },
  {
    "id": 46,
    "name": "CLOUDGO - Giải pháp chuyển đổi số tinh gọn",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực hoạt động viễn thông; lập trình máy tính, tư vấn, cơ sở hạ tầng máy tính và các dịch vụ thông tin khác",
    "dev": "Công ty TNHH Công nghệ CloudGo",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực hoạt động viễn thông; lập trình máy tính, tư vấn, cơ sở hạ tầng máy tính và các dịch vụ thông tin khác",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "smartcity"
  },
  {
    "id": 47,
    "name": "CMC AntiVirus (CMC AV)",
    "desc": "Giải pháp diệt virus cho người dùng cá nhân, giúp phát hiện và ngăn chặn mã độc, bảo vệ thiết bị trước các nguy cơ an ninh mạng phổ biến",
    "dev": "CMC Cyber Security",
    "problem": "Người dung cá nhân Việt Nam liên tục nằm trong top quốc gia có tỷ lệ lây nhiễm mã độc cao tại châu Á; hàng triệu thiết bị bị tấn công mỗi năm gây thiệt hại hàng nghìn tỷ đồng. CMC AV sẽ là lá chắn số giúp bảo vệ mỗi người dân khỏi",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và người dùng nội bộ",
    "process": "Cài đặt phần mềm trên máy người dùng; Quét file/ứng dụng theo thời gian thực; Phát hiện mã độc (signature + AI); Cảnh báo và xử lý (xóa/cách ly).",
    "cat": "security"
  },
  {
    "id": 48,
    "name": "CMC Endpoint Detection and Response (CMC EDR)",
    "desc": "Giải pháp giám sát và phản ứng sự cố nâng cao, giúp phát hiện sớm tấn công, điều tra và xử lý các mối đe dọa trên endpoint",
    "dev": "CMC Cyber Security",
    "problem": "Tấn công APT do nhóm hacker nhà nước bảo trợ nhắm hạ tầng quan trọng Việt Nam (điện lực, viễn thông, tài chính, quốc phòng) ngày càng tinh vi. Thời gian phát hiện xâm nhập trung bình tại VN kéo dài hàng tháng đến hàng năm, gây thiệt hại kép. CMC EDR rút ng ắn MTTD & MTTR, hỗ trợ điều tra số (Digital Forensics) phục vụ xử lý sự cố",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và bộ phận công nghệ thông tin",
    "process": "Thu thập dữ liệu hành vi từ endpoint; Phân tích và phát hiện bất thường; Sinh cảnh báo và điều tra sự cố; Thực hiện phản ứng (cô lập, xử lý).",
    "cat": "security"
  },
  {
    "id": 49,
    "name": "CMC Endpoint Protection Platform (CMC EPP)",
    "desc": "Nền tảng bảo mật đầu cuối tập trung cho doanh nghiệp, cung cấp khả năng quản lý, giám sát và phòng chống mã độc trên toàn bộ hệ thống endpoint",
    "dev": "CMC Cyber Security",
    "problem": "Các thiết bị đầu cuối trong cơ quan, tổ chức và doanh nghiệp là mục tiêu tấn công hàng đầu của mã độc, Ransomware và APT, do đặc tính phân tán trên nhiều vùng mạng và yếu tố rủi ro từ người dùng. CMC EPP cung cấp giải pháp bảo vệ đầu cuối toàn diện với khả năng quản lý tập trung, giám sát thời gian thực, chủ động phát hiện và ngăn chặn các mối đe dọa an ninh mạng, bảo vệ lượng dữ liệu nhạy cảm khổng lồ được sinh ra và lưu chuyển qua hệ thống mỗi",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và bộ phận công nghệ thông tin",
    "process": "Triển khai agent lên các endpoint; Thiết lập chính sách bảo mật tập trung; Giám sát và quét định kỳ/toàn hệ thống; Phát hiện, chặn và quản lý sự cố từ console.",
    "cat": "security"
  },
  {
    "id": 50,
    "name": "CMC Mobile Security (CMC MS)",
    "desc": "Giải pháp bảo mật thiết bị di động, giúp phát hiện ứng dụng độc hại, chống lừa đảo qua SMS/call và bảo vệ quyền riêng tư người dùng",
    "dev": "CMC Cyber Security",
    "problem": "Với hơn 72 triệu người dùng smartphone (~73% dân số), Việt Nam là thị trường di động lớn với tỷ lệ tấn công qua app di động ngày càng tăng. Cán bộ, công chức, nhân viên xử lý thông tin liên quan đến doanh nghiệp, cơ quan nhà nước trên smartphone, trong khi ứng dụng giả mạo, spyware, smishing ngày càng tinh vi",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và bộ phận công nghệ thông tin",
    "process": "Cài app bảo mật trên thiết bị di động; Quét ứng dụng và hành vi hệ thống; Phát hiện app độc hại, phishing, spam; Cảnh báo và ngăn chặn rủi ro.",
    "cat": "security"
  },
  {
    "id": 51,
    "name": "CMC Security information & event management (CMC SIEM)",
    "desc": "Hệ thống giám sát an ninh tập trung, thu thập và phân tích log để phát hiện sớm các sự kiện bất thường và hỗ trợ vận hành SOC",
    "dev": "CMC Cyber Security",
    "problem": "Luật ANM 2018 & TT 20/2017/TT - BTTTT bắt buộc cơ quan nhà nước và tổ chức hạ tầng quan trọng phải có hệ thống giám sát ATTT; phần lớn tổ chức chưa đáp ứng. Thiếu giám sát tập trung khiến tấn công mạng không phát hiện trong thời gian dài, gây tổn thất kép. C MC SIEM hỗ trợ xây dựng SOC hiệu quả, đáp ứng yêu cầu báo cáo sự cố theo quy định",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và bộ phận công nghệ thông tin",
    "process": "Thu thập log từ nhiều hệ thống; Chuẩn hóa và lưu trữ dữ liệu; Tương quan sự kiện, phát hiện bất thường; Sinh cảnh báo và báo cáo.",
    "cat": "security"
  },
  {
    "id": 52,
    "name": "CMC Shield (C - Shield)",
    "desc": "Giải pháp bảo vệ ứng dụng và dữ liệu quan trọng, giúp chống giả mạo, ngăn rò rỉ dữ liệu và đảm bảo an toàn cho môi trường làm việc số",
    "dev": "CMC Cyber Security",
    "problem": "Tình trạng giả mạo ứng dụng dịch vụ công, ngân hàng và tài chính ngày càng gia tăng với các thủ đoạn tinh vi, khó phát hiện. Song song đó, các phần mềm gián điệp tiên tiến",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Tạo môi trường bảo vệ ứng dụng (container); Kiểm tra tính toàn vẹn ứng dụng; Giám sát truy cập và dữ liệu; Ngăn chặn rò rỉ và tấn công vào app.",
    "cat": "education"
  },
  {
    "id": 53,
    "name": "CMC Smart Firewall (CMC SF)",
    "desc": "Tường lửa thế hệ mới, giúp kiểm soát truy cập mạng, ngăn chặn tấn công và bảo vệ hệ thống trước các mối đe dọa từ bên ngoài",
    "dev": "CMC Cyber Security",
    "problem": "Hạ tầng mạng của cơ quan nhà nước và doanh nghiệp Việt Nam thường xuyên đối mặt với các nguy cơ tấn công DDoS, xâm nhập trái phép và di chuyển ngang trong hệ thống (lateral movement). CMC Smart Firewall là giải pháp tường lửa gọn nhẹ, được thiết kế chuyên biệt cho các cơ quan, tổ chức có yêu cầu bảo mật cấp độ 1 - 2, với khả năng triển khai nhanh chóng, vận hành đơn giản và đáp ứng đầy đủ các tiêu chuẩn an toàn thông tin theo quy định hiện hành",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và bộ phận công nghệ thông tin",
    "process": "Thiết lập chính sách truy cập mạng; Giám sát lưu lượng vào/ra; Phát hiện và chặn tấn công (IDS/IPS); Ghi log và cảnh báo sự kiện.",
    "cat": "security"
  },
  {
    "id": 54,
    "name": "CMC Threat Intelligence platform (CMC TIP)",
    "desc": "Nền tảng cung cấp thông tin tình báo mối đe dọa, giúp tổ chức chủ động nhận diện và phòng chống các chiến dịch tấn công mạng",
    "dev": "CMC Cyber Security",
    "problem": "Việt Nam thiếu một hệ sinh thái chia sẻ thông tin tình báo mối đe dọa (CTI) nội địa; phần lớn tổ chức vẫn ứng phó bị động. Các nhóm APT nhắm VN (APT32/OceanLotus, APT41) liên tục thay đổi TTP, đòi hỏi thông tin tình báo chuyên biệt cập nhật",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Thu thập dữ liệu threat từ nhiều nguồn; Phân tích, chuẩn hóa IoC/TTP; Cung cấp intelligence cho hệ thống khác; Cập nhật cảnh báo và rule bảo mật.",
    "cat": "enterprise"
  },
  {
    "id": 55,
    "name": "CMC Web Application Firewall (CMC WAF)",
    "desc": "Giải pháp bảo vệ website và ứng dụng web khỏi các lỗ hổng và tấn công phổ biến như OWASP và DDoS tầng ứng dụng",
    "dev": "CMC Cyber Security",
    "problem": "Bảo vệ website và hệ thống ứng dụng web khỏi các cuộc tấn công mạng hiện đại",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và bộ phận công nghệ thông tin",
    "process": "Tiếp nhận request đến web/app; Phân tích và kiểm tra payload; Phát hiện tấn công (SQLi, XSS, bot…); Chặn hoặc cho phép request hợp lệ.",
    "cat": "security"
  },
  {
    "id": 56,
    "name": "Cole AI - first learning system",
    "desc": "Hệ thống học tập AI - first, ứng dụng trí tuệ nhân tạo để hỗ trợ cá nhân hóa hoạt động dạy và học",
    "dev": "Công ty TNHH Edtech Cole",
    "problem": "Hỗ trợ số hóa, tối ưu hóa hoạt động dạy và học thông qua hệ thống học tập ứng dụng trí tuệ nhân tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh và cơ sở giáo dục có nhu cầu sử dụng hệ thống học tập AI - first",
    "process": "Người học và giáo viên sử dụng hệ thống để tổ chức nội dung học tập; hệ thống ứng dụng AI để hỗ trợ học tập, gợi ý nội dung và theo dõi tiến độ",
    "cat": "ai"
  },
  {
    "id": 57,
    "name": "Colocation",
    "desc": "Cung cấp không gian vật lý tại Data Center chuẩn Tier cho tổ chức đặt máy chủ riêng, không tự xây dựng hạ tầng",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Cung cấp không gian vật lý tại Data Center chuẩn Tier cho tổ chức đặt máy chủ riêng, không tự xây dựng hạ tầng",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Dịch vụ Colocation (thuê chỗ đặt máy chủ) là dịch vụ cho phép doanh nghiệp hoặc cá nhân thuê không gian vật lý tại trung tâm dữ liệu (data center) để đặt máy chủ hoặc các thiết bị mạng mà họ sở hữu. Khách hàng sẽ tự trang bị và quản lý máy chủ của mình, cò n nhà cung cấp dịch vụ chịu trách nhiệm cung cấp hạ tầng như nguồn điện ổn định, hệ thống làm mát, bảo mật vật lý, kết nối",
    "cat": "smartcity"
  },
  {
    "id": 58,
    "name": "Công bố bản án",
    "desc": "Cho phép công bố bản án có hiệu lực pháp luật đã được mã hóa",
    "dev": "Tòa án nhân dân tối cao",
    "problem": "Cho phép công bố bản án có hiệu lực pháp luật đã được mã hóa",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 59,
    "name": "Công chức viên chức",
    "desc": "Phần mềm Quản lý Cán bộ, Công chức, Viên chức - VNPT - CCVC là hệ thống quản lý đội ngũ nhân lực hưởng lương từ ngân sách nhà nước trong các đơn vị hành chính, sự nghiệp, hội, đoàn thể, tổ chức Đảng, tổ chức chính trị - xã hội,",
    "dev": "VNPT - IT",
    "problem": "Quản lý CCVC giải quyết; Quản lý hồ sơ dùng; Quản lý CCVC; Quản lý quá trình lao động; Quản lý bảo hiểm, đào tạo, thi tuyển xét tuyển cán bộ.",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Đáp ứng quy trình nghiệp vụ gửi nhận văn bản điện tử",
    "cat": "government"
  },
  {
    "id": 60,
    "name": "Công dân thông minh",
    "desc": "Cung cấp siêu ứng dụng (super app) để người dân và doanh nghiệp tương tác với chính quyền, truy cập dịch vụ công số",
    "dev": "Tổng công ty giải pháp doanh nghiệp Viettel",
    "problem": "Cung cấp siêu ứng dụng (super app) để người dân và doanh nghiệp tương tác với chính quyền, truy cập dịch vụ công số",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Ứng dụng Công Dân Số hướng tới là 1 siêu ứng dụng, là kênh tương tác số thu hẹp khoảng cách giữa người dân, doanh nghiệp với chính quyền. Với mục tiêu lấy người dân, doanh nghiệp làm trung tâm, ứng dụng cung cấp thông tin toàn diện, tạo kênh kết nối, tương tác với chính quyền một cách hiệu quả",
    "cat": "government"
  },
  {
    "id": 61,
    "name": "Công tác lễ tân đối ngoại",
    "desc": "Quản lý dữ liệu về ưu đãi, miễn trừ và nghi lễ đối ngoại",
    "dev": "Cục LTPD",
    "problem": "Quản lý dữ liệu về ưu đãi, miễn trừ và nghi lễ đối ngoại",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "enterprise"
  },
  {
    "id": 62,
    "name": "Cổng công khai ngân sách",
    "desc": "cung cấp dữ liệu minh bạch về dự toán, quyết toán, tình hình thực hiện ngân sách trung ương, địa phương và báo cáo ngân sách dành cho công dân, nhằm tăng cường giám sát xã hội",
    "dev": "Cục Công nghệ thống tin và chuyển đổi số",
    "problem": "cung cấp dữ liệu minh bạch về dự toán, quyết toán, tình hình thực hiện ngân sách trung ương, địa phương và báo cáo ngân sách dành cho công dân, nhằm tăng cường giám sát xã hội",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 63,
    "name": "Cổng công khai y tế",
    "desc": "Cổng kê khai giá trang thiết bị y tế",
    "dev": "Vụ TTB&CTYT",
    "problem": "Cổng kê khai giá trang thiết bị y tế",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "healthcare"
  },
  {
    "id": 64,
    "name": "Cổng Dịch vụ công Bộ Công an",
    "desc": "Cung cấp dịch vụ công trực tuyến ngành Công an",
    "dev": "V01",
    "problem": "Cung cấp dịch vụ công trực tuyến ngành Công an",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 65,
    "name": "Cổng dịch vụ công Bộ Công Thương",
    "desc": "Phục vụ công việc",
    "dev": "Cục Thương mại điện tử và Kinh tế số",
    "problem": "Phục vụ công việc",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 66,
    "name": "Cổng dịch vụ công Bộ Y tế",
    "desc": "Hệ thống thông tin giải quyết thủ tục hành chính Bộ Y tế",
    "dev": "Văn phòng Bộ",
    "problem": "Hệ thống thông tin giải quyết thủ tục hành chính Bộ Y tế",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "healthcare"
  },
  {
    "id": 67,
    "name": "Cổng dịch vụ công quốc gia",
    "desc": "Triển khai dịch vụ công trực tuyến trên toàn quốc",
    "dev": "C12",
    "problem": "Triển khai dịch vụ công trực tuyến trên toàn quốc",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 68,
    "name": "Cổng Dịch vụ công và Hệ thống thông tin một cửa điện tử Bộ Tài chính",
    "desc": "Tiếp nhận, tích hợp, kết nối, chia sẻ các dịch vụ công trực tuyến của BTC với cổng dịch vụ công quốc gia",
    "dev": "Cục Công nghệ thống tin và chuyển đổi số",
    "problem": "Tiếp nhận, tích hợp, kết nối, chia sẻ các dịch vụ công trực tuyến của BTC với cổng dịch vụ công quốc gia",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 69,
    "name": "Cổng dữ liệu mở",
    "desc": "(1) Hệ thống tổng hợp, kết nối với Kho dữ liệu dùng chung tỉnh Sơn La để cung cấp dữ liệu phục vụ lãnh đạo, điều hành của UBND tỉnh; (2) Hệ thống tổng hợp, kết nối với Kho dữ liệu dùng chung tỉnh Sơn La để cung cấp dữ liệu mở của các cơ quan, doanh nghiệp cho người dân, doanh nghiệp, các tổ chức khai thác, tái sử dụng miễn phí",
    "dev": "(1), (3) Tập đoàn Bưu chính Viễn thông Việt Nam; (2) Công ty Cổ phần Công nghệ tin học Tâm Việt",
    "problem": "(1) khai thác dữ liệu từ Kho, xử lý dữ liệu và hỗ trợ lãnh đạo chỉ đạo, điều hành, xử lý tình huống một cách nhanh chóng và hiệu quả hơn; (2) công bố, chia sẻ và cung cấp dữ liệu mở miễn phí cho người dân, doanh nghiệp và cộng đồng tái sử dụng phục vụ nghi ên cứu, học tập, sáng tạo sản phẩm và cải thiện dịch vụ công nghiên cứu",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "(1) Các đối tượng muốn khai thác sử dụng truy cập https://ioc.sonla.gov.vn để khai thác sử dụng; (2) Các đối tượng muốn khai thác sử dụng truy cập https://data.sonla.gov.vn để khai thác sử dụng; (3) Các đối tượng muốn khai thác sử dụng truy cập https://dul ieu.sonla.gov.vn để khai thác sử dụng.",
    "cat": "enterprise"
  },
  {
    "id": 70,
    "name": "Cổng dữ liệu quốc gia",
    "desc": "Nền tảng số quốc gia/nền tảng số dùng chung thuộc danh mục chính thức; phục vụ triển khai các dịch vụ, nghiệp vụ số dùng chung trong ngành, lĩnh vực hoặc phạm vi toàn quốc",
    "dev": "Bộ Công an",
    "problem": "Hỗ trợ số hóa, chuẩn hóa và dùng chung các nghiệp vụ trong ngành, lĩnh vực",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "enterprise"
  },
  {
    "id": 71,
    "name": "Cổng kết nối dịch vụ chứng thực chữ ký số công cộng",
    "desc": "Phục vụ kết nối dịch vụ chứng thực chữ ký số công cộng với các hệ thống thông tin phục vụ giao dịch điện tử sử dụng chữ ký số để bảo đảm tính xác thực, tính toàn vẹn và tính chống chối bỏ của thông điệp dữ liệu",
    "dev": "Trung tâm Chứng thực điện tử quốc gia",
    "problem": "Phục vụ kết nối dịch vụ chứng thực chữ ký số công cộng với các hệ thống thông tin phục vụ giao dịch điện tử sử dụng chữ ký số để bảo đảm tính xác thực, tính toàn vẹn và tính chống chối bỏ của thông điệp dữ liệu",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 72,
    "name": "Cổng kết nối số Phường Lê Ích Mộc",
    "desc": "Là địa chỉ kết nối tất cả các thông tin về chính trị, kinh tế, văn hóa xã hội trên địa bàn Phường Lê Ích Mộc. Cổng kết nối số được tích hợp với Dịch vụ công quốc gia, Cổng thông tin điện tử phường và bản đồ số Phường Lê Ích Mộc, các thông báo của địa phươn g, các thủ tục hành chính",
    "dev": "Công ty Cổ phần BlockX",
    "problem": "là 1 phần mềm dc ứng dụng trên Smart phone và wedside",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Mọi công dân nhấn vào đường link hoặc quét mã QR để truy cập và khai thác dữ liệu trên Cổng kết nối số Phường Lê Ích Mộc",
    "cat": "government"
  },
  {
    "id": 73,
    "name": "Cổng liên thông văn bản quốc gia",
    "desc": "Kết nối, gửi nhận văn bản và phản hồi trạng thái xử lý văn bản với trục liên thông văn bản quốc gia",
    "dev": "Thông tấn xã Việt Nam",
    "problem": "Kết nối, gửi nhận văn bản và phản hồi trạng thái xử lý văn bản với trục liên thông văn bản quốc gia",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 74,
    "name": "Cổng lưu trữ số quốc gia",
    "desc": "Phục vụ khai thác thông tin, tài liệu lưu trữ",
    "dev": "Cục Văn thư và Lưu trữ nhà nước",
    "problem": "Phục vụ khai thác thông tin, tài liệu lưu trữ",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 75,
    "name": "Cổng Pháp luật quốc gia",
    "desc": "Nền tảng số quốc gia/nền tảng số dùng chung thuộc danh mục chính thức; phục vụ triển khai các dịch vụ, nghiệp vụ số dùng chung trong ngành, lĩnh vực hoặc phạm vi toàn quốc",
    "dev": "Bộ Tư pháp",
    "problem": "Hỗ trợ số hóa, chuẩn hóa và dùng chung các nghiệp vụ trong ngành, lĩnh vực",
    "users": "Cơ quan tư pháp, cán bộ xử lý nghiệp vụ, người dân, doanh nghiệp và tổ chức có liên quan",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 76,
    "name": "Cổng Sáng kiến khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
    "desc": "Cổng sáng kiến tập chung tiếp nhận, tổng hợp và kết nối các sáng kiến đột phá (Trang chủ; Quyết định số 2266/QĐ - TTg của Thủ tướng Chính phủ: Ban hành Quy trình xét chọn sáng kiến đột phá theo Kế hoạch hành động chiến lược triển khai Nghị quyết số 57 - NQ/TW) , sáng kiến, giải pháp, đề xuất cải tiến trong lĩnh vực khoa học và công nghệ của cá nhân, tổ chức, doanh nghiệp và đội ngũ chuyên gia trong và ngoài nước",
    "dev": "Quỹ Phát triển khoa học và công nghệ Quốc gia",
    "problem": "Cổng Sáng kiến được định vị là nền tảng số mở, kết nối ba chủ thể: Người đề xuất sáng kiến - Chuyên gia đánh giá - Tổ chức tiếp nhận và khai thác; là công cụ quan trọng hiện thực hóa tinh thần của Luật 2025 về khuyến khích ĐMST toàn dân. Cổng hướng tới tiếp nhận sán g kiến từ mọi đối tượng trong xã hội; hỗ trợ đánh giá khách quan, minh bạch; gắn sáng kiến với nhu cầu thực tiễn của doanh nghiệp, địa phương và cơ quan quản lý.",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Đề xuất sáng kiến: Tổ chức cá nhân đăng ký tài khoản và nộp hồ sơ sáng kiến trực tuyến (mô tả giải pháp, video/hình ảnh minh họa, báo cáo hiệu quả). Tiếp nhận: Cổng Sáng kiến kiểm tra tính hợp lệ và phân loại sáng kiến theo lĩnh vực. Chấm điểm & Đánh giá: Hội đồng chuyên gia thực hiện chấm điểm trực tuyến dựa trên các tiêu chí: Tính mới, tính sáng tạo, khả năng áp dụng và hiệu quả kinh tế - xã hội",
    "cat": "enterprise"
  },
  {
    "id": 77,
    "name": "Cổng thông tin các ứng dụng",
    "desc": "công thông tin",
    "dev": "Cục CĐSCY",
    "problem": "công thông tin",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 78,
    "name": "Cổng thông tin công bố quy hoạch xây",
    "desc": "Hệ thống trực tuyến dùng để công khai và cung cấp thông tin về các đồ án quy",
    "dev": "Trung tâm Công nghệ thống tin",
    "problem": "Hệ thống trực tuyến dùng để công khai và cung cấp thông tin về các đồ án quy",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý,",
    "cat": "government"
  },
  {
    "id": 79,
    "name": "Cổng thông tin Cục Báo chí",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Cục Báo chí",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 80,
    "name": "Cổng thông tin du lịch thông minh",
    "desc": "Hệ thống Cổng thông tin du lịch thông minh: Là giải pháp du lịch thông minh được xây dựng với mục đích quảng bá hình ảnh du lịch của địa phương, cung cấp thông tin nhằm hỗ trợ du khách trong quá trình khám phá các địa điểm du lịch, trải nghiệm các điểm du lịch thông qua tương tác 3D, công nghệ thực tế ảo",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Quảng bá và cung cấp thông tin du lịch địa phương qua cổng thông tin thông minh, hỗ trợ du khách tra cứu dịch vụ",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Hệ thống Cổng thông tin du lịch thông minh: Là giải pháp du lịch thông minh được xây dựng với mục đích quảng bá hình ảnh du lịch của địa phương, cung cấp thông tin nhằm hỗ trợ du khách trong quá trình khám phá các địa điểm du lịch, trải nghiệm các điểm du lịch thông qua tương tác 3D, công nghệ thực tế ảo",
    "cat": "government"
  },
  {
    "id": 81,
    "name": "Cổng thông tin Học viện Tư pháp",
    "desc": "Cổng thông tin điện tử nội bộ Học viện Tư pháp duy trì thực hiện nhiệm vụ khai thác các ứng dụng công nghệ trong điều kiện cho phép về mặt kỹ thuật để đảm bảo là kênh thông tin quảng bá hình ảnh, trao đổi và cung cấp tin tức về hoạt động của Học viện Tư ph áp, thông tin phục vụ hoạt động đào tạo, bồi dưỡng",
    "dev": "Bộ Tư pháp",
    "problem": "Cổng thông tin điện tử nội bộ Học viện Tư pháp duy trì thực hiện nhiệm vụ khai thác các ứng dụng công nghệ trong điều kiện cho phép về mặt kỹ thuật để đảm bảo là kênh thông tin quảng bá hình ảnh, trao đổi và cung cấp tin tức về hoạt động của Học viện Tư ph áp, thông tin phục vụ hoạt động đào tạo, bồi dưỡng",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 82,
    "name": "Cổng thông tin không gian địa lý Việt Nam",
    "desc": "Cổng thông tin Hạ tầng dữ liệu không gian địa lý quốc gia (VNSDI) được tích hợp, được xây dựng nhằm thu thập, quản lý, chia sẻ và khai thác dữ liệu không gian địa lý quốc gia trên phạm vi toàn quốc. Hệ thống cung cấp môi trường trực tuyến để các cơ quan nh à nước, tổ chức và doanh nghiệp kết nối và sử dụng dữ liệu không gian địa lý quốc gia thông qua các dịch vụ bản đồ và dịch vụ dữ liệu, góp phần thúc đẩy liên thông dữ liệu, hỗ trợ ra quyết",
    "dev": "Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam",
    "problem": "Hiện nay, dữ liệu không gian địa lý tại Việt Nam còn phân tán ở nhiều bộ, ngành và địa phương, thiếu tính liên thông, chia sẻ và đồng bộ; tình trạng trùng lặp thu thập, thiếu cập nhật và không thống nhất về tiêu chuẩn kỹ thuật vẫn còn phổ biến. Điều này dẫ n đến khó khăn trong khai thác, sử dụng dữ liệu phục vụ công tác quản lý nhà nước, quy hoạch, phát triển kinh tế - xã hội và chuyển đổi số",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Quy trình nghiệp vụ của Cổng thông tin không gian địa lý Việt Nam được thực hiện theo chu trình khép kín từ thu thập, chuẩn hóa, công bố đến khai thác dữ liệu, cụ thể như sau: - Thu thập và tích hợp dữ liệu: Dữ liệu không gian địa lý được thu thập từ các b ộ, ngành, địa phương và các nguồn dữ liệu chuyên ngành; thực hiện tích hợp vào hệ thống trên cơ sở tuân thủ các quy chuẩn, tiêu chuẩn kỹ thuật thống nhất",
    "cat": "education"
  },
  {
    "id": 83,
    "name": "Cổng thông tin một cửa quốc gia",
    "desc": "Nền tảng số quốc gia/nền tảng số dùng chung thuộc danh mục chính thức; phục vụ triển khai các dịch vụ, nghiệp vụ số dùng chung trong ngành, lĩnh vực hoặc phạm vi toàn quốc",
    "dev": "Bộ Tài chính",
    "problem": "Hỗ trợ giải quyết thủ tục hành chính, tương tác với người dân, doanh nghiệp và chuẩn hóa kênh cung cấp dịch vụ số",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 84,
    "name": "Cổng thông tin ngành giáo dục đào tạo Hải Phòng",
    "desc": "Cổng thông tin điện tử (Portal) là điểm truy cập duy nhất của cơ quan quản lý giáo dục, cơ sở giáo dục trên môi trường mạng, liên kết, tích hợp các kênh thông tin, các dịch vụ và các ứng dụng mà qua đó",
    "dev": "Công ty cổ phần tập đoàn công nghệ Quảng Ích",
    "problem": "Hệ thống giúp các nhà quản lý (Sở giáo dục, xã phường, cơ sở giáo dục) quản lý thông tin, đăng tải chia sẻ dữ liệu một cách nhanh chóng. Giúp các đơn vị trường học truyền tải thông tin hữu ích đến với",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Quản trị cấp Sở đăng tải chia sẻ dữ liệu xuống cấp cơ sở và tiếp nhận thông tin từ cấp cơ sở gửi lên",
    "cat": "education"
  },
  {
    "id": 85,
    "name": "Cổng thông tin Nhà xuất bản",
    "desc": "Cung cấp thông tin hoạt động của NXB, truyền thông thiệu các xuất bản phẩm",
    "dev": "Nhà xuất bản Khoa học - Công nghệ - Truyền thông",
    "problem": "Cung cấp thông tin hoạt động của NXB, truyền thông thiệu các xuất bản phẩm",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 86,
    "name": "Cổng thông tin pháp điển",
    "desc": "Hệ thống hóa các quy phạm pháp luật QPPL đang còn hiệu lực do các cơ quan nhà nước ở Trung ương ban hành (trừ Hiến pháp), nhằm tạo điều kiện thuận lợi cho việc tra cứu, áp dụng pháp luật",
    "dev": "Bộ Tư pháp",
    "problem": "Hệ thống hóa các quy phạm pháp luật QPPL đang còn hiệu lực do các cơ quan nhà nước ở Trung ương ban hành (trừ Hiến pháp), nhằm tạo điều kiện thuận lợi cho việc tra cứu, áp dụng pháp luật",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 87,
    "name": "Cổng thông tin quản lý hoạt động thương mại điện tử",
    "desc": "Phục vụ công việc",
    "dev": "Cục Thương mại điện tử và Kinh tế số",
    "problem": "Phục vụ công việc",
    "users": "Doanh nghiệp bán buôn, bán lẻ, nhà cung cấp, bộ phận kinh doanh và khách hàng mua sắm, tiêu dùng",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 88,
    "name": "Cổng thông tin Sức khỏe Việt Nam",
    "desc": "Trang thông tin Sức khỏe Việt",
    "dev": "Trung tâm Thông tin y tế Quốc gia",
    "problem": "Trang thông tin Sức khỏe Việt",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "healthcare"
  },
  {
    "id": 89,
    "name": "Cổng thông tin THADS",
    "desc": "Là kênh cung cấp thông tin chính thống, là điểm truy cập của Tổng cục Thi hành án dân sự trên môi trường mạng",
    "dev": "Bộ Tư pháp",
    "problem": "Là kênh cung cấp thông tin chính thống, là điểm truy cập của Tổng cục Thi hành án dân sự trên môi trường mạng",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 90,
    "name": "Cổng thông tin tòa án",
    "desc": "Cho phép đăng tải thông tin của Tòa án nhân dân tới người dân",
    "dev": "Tòa án nhân dân tối cao",
    "problem": "Cho phép đăng tải thông tin của Tòa án nhân dân tới người dân",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 91,
    "name": "Cổng thông tin điện tử",
    "desc": "Quản lý văn bản và chỉ đạo điều hành",
    "dev": "C09",
    "problem": "Quản lý văn bản và chỉ đạo điều hành",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 92,
    "name": "Cổng thông tin điện tử",
    "desc": "Bao gồm 2 hệ thống: Portal Giáo dục, Portal Y tế; Cổng thông tin điện tử để thực hiện công tác thông tin, tuyên truyền cho khách hàng nhằm mục tiêu: Điều hành theo mô hình tập trung, có khả năng liên thông và đồng bộ cơ sở dữ liệu từ trên xuống dưới. Từ đó đưa ra các chỉ đạo kịp thời từ việc nắm bắt và khai thác các dữ liệu tập trung; Tích hợp với các hệ thống thông tin quản lý trực tuyến khác.",
    "dev": "Tổng Công ty Giải pháp Doanh nghiệp Viettel",
    "problem": "Cung cấp cổng thông tin điện tử ngành y tế và giáo dục, phục vụ thông tin, tuyên truyền và điều hành theo mô hình tập trung",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Bao gồm 2 hệ thống: Portal Giáo dục, Portal Y tế; Cổng thông tin điện tử để thực hiện công tác thông tin, tuyên truyền cho khách hàng nhằm mục tiêu: Điều hành theo mô hình tập trung, có khả năng liên thông và đồng bộ cơ sở dữ liệu từ trên xuống dưới. Từ đó đưa ra các chỉ đạo kịp thời từ việc nắm bắt và khai thác các dữ liệu tập trung; Tích hợp với các hệ thống thông tin quản lý trực tuyến khác.",
    "cat": "healthcare"
  },
  {
    "id": 93,
    "name": "Cổng Thông tin điện tử (Internet)",
    "desc": "Cung cấp các văn bản chỉ đạo, điều hành của Bộ; giới thiệu về chức năng, nhiệm vụ, tổ chức bộ máy của Bộ Tài chính; thông tin về hoạt động hàng ngày của Bộ Tài",
    "dev": "Cục Công nghệ thống tin và chuyển đổi số",
    "problem": "Cung cấp các văn bản chỉ đạo, điều hành của Bộ; giới thiệu về chức năng, nhiệm vụ, tổ chức bộ máy của Bộ Tài chính; thông tin về hoạt động hàng ngày của Bộ Tài",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 94,
    "name": "Cổng thông tin điện tử Bảo tàng Lịch sử quốc gia",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Bảo tàng Lịch sử quốc gia",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 95,
    "name": "Cổng Thông tin điện tử Bộ Công an",
    "desc": "Cung cấp thông tin về an ninh, trật tự và xây dựng lực lượng Công an nhân dân",
    "dev": "V01",
    "problem": "Cung cấp thông tin về an ninh, trật tự và xây dựng lực lượng Công an nhân dân",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 96,
    "name": "Cổng thông tin điện tử Bộ Công Thương",
    "desc": "Truyền thông",
    "dev": "Cục Thương mại điện tử và Kinh tế số",
    "problem": "Truyền thông",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 97,
    "name": "Cổng thông tin điện tử Bộ KH&CN",
    "desc": "Cổng thông tin điện tử của Bộ Khoa học và Công nghệ là kênh thông tin chính thức, cung cấp thông tin, dịch vụ công trực tuyến và",
    "dev": "Trung tâm Công nghệ thống tin",
    "problem": "Cổng thông tin điện tử của Bộ Khoa học và Công nghệ là kênh thông tin chính thức, cung cấp thông tin, dịch vụ công trực tuyến và",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 98,
    "name": "Cổng thông tin điện tử Bộ Tư pháp",
    "desc": "Cổng Thông tin điện tử Bộ Tư pháp là kênh cung cấp thông tin chính thống, là điểm truy cập của Bộ Tư pháp trên môi trường mạng; liên kết, tích hợp với kênh thông tin, các dịch vụ và ứng dụng mà qua đó người dùng có thể khai thác, sử dụng và cá nhân hóa hiể n thị",
    "dev": "Bộ Tư pháp",
    "problem": "Cổng Thông tin điện tử Bộ Tư pháp là kênh cung cấp thông tin chính thống, là điểm truy cập của Bộ Tư pháp trên môi trường mạng; liên kết, tích hợp với kênh thông tin, các dịch vụ và ứng dụng mà qua đó người dùng có thể khai thác, sử dụng và cá nhân hóa hiể n thị",
    "users": "Cơ quan tư pháp, cán bộ xử lý nghiệp vụ, người dân, doanh nghiệp và tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 99,
    "name": "Cổng thông tin điện tử Bộ Xây dựng",
    "desc": "Cung cấp thông tin cho người dùng",
    "dev": "Trung tâm Công nghệ thống tin",
    "problem": "Cung cấp thông tin cho người dùng",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 100,
    "name": "Cổng thông tin điện tử Bộ Y tế",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực y tế",
    "dev": "Văn phòng Bộ",
    "problem": "Cổng Thông tin điện tử Bộ Y tế",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "healthcare"
  },
  {
    "id": 101,
    "name": "Cổng thông tin điện tử CDC Việt Nam",
    "desc": "Website Cục Y tế dự phòng",
    "dev": "Cục An toàn thực phẩm",
    "problem": "Website Cục Y tế dự phòng",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "healthcare"
  },
  {
    "id": 102,
    "name": "Cổng thông tin điện tử cho Cơ quan Nhà nước (Portal HCC)",
    "desc": "Cung cấp cổng thông tin điện tử chính thức cho cơ quan nhà nước, tích hợp",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Cung cấp cổng thông tin điện tử chính thức cho cơ quan nhà nước, tích hợp",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp",
    "process": "Cổng thông tin điện tử cho cơ quan nhà nước là điểm truy cập chính thức trên",
    "cat": "government"
  },
  {
    "id": 103,
    "name": "Cổng thông tin điện tử của Bộ",
    "desc": "Đăng tải chủ trương, chính sách, văn bản pháp luật, thông báo, tin tức hoạt động của Bộ; Giúp người dân và tổ chức tiếp cận thông tin minh bạch, chính xác",
    "dev": "Bộ Giáo dục và Đào tạo",
    "problem": "Đăng tải chủ trương, chính sách, văn bản pháp luật, thông báo, tin tức hoạt động của Bộ; Giúp người dân và tổ chức tiếp cận thông tin minh bạch, chính xác",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 104,
    "name": "Cổng thông tin điện tử của Cục",
    "desc": "Cung cấp thông tin chính thức về Cục Sở hữu trí tuệ và các hoạt động trong lĩnh vực sở hữu trí tuệ",
    "dev": "Cục Sở hữu trí tuệ",
    "problem": "Cung cấp thông tin chính thức về Cục Sở hữu trí tuệ và các hoạt động trong lĩnh vực sở hữu trí tuệ",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "ai"
  },
  {
    "id": 105,
    "name": "Cổng thông tin điện tử Cục An toàn thực phẩm",
    "desc": "Website Cục An toàn thực phẩm",
    "dev": "Cục An toàn thực phẩm",
    "problem": "Website Cục An toàn thực phẩm",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 106,
    "name": "Cổng thông tin điện tử Cục Dự trữ Nhà nước",
    "desc": "Cổng Thông tin điện tử Cục Dự trữ Nhà nước nhằm cung cấp, tuyên truyền thông tin về hoạt động của Cục và ngành Dự trữ Nhà nước, phục vụ công tác quản lý, điều hành",
    "dev": "Cục Dự trữ Nhà nước",
    "problem": "Cổng Thông tin điện tử Cục Dự trữ Nhà nước nhằm cung cấp, tuyên truyền thông tin về hoạt động của Cục và ngành Dự trữ Nhà nước, phục vụ công tác quản lý, điều hành",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 107,
    "name": "Cổng thông tin điện tử Cục Khoa học công nghệ và Đào tạo",
    "desc": "Phần mềm quản lý thông tin KHCN và đào tạo nhân lực y tế",
    "dev": "Cục Khoa học công nghệ và Đào tạo",
    "problem": "Phần mềm quản lý thông tin KHCN và đào tạo nhân lực y tế",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "healthcare"
  },
  {
    "id": 108,
    "name": "Cổng thông tin điện tử Cục Môi trường y tế",
    "desc": "Hệ thống quản lý môi trường cơ sở y tế",
    "dev": "Cục Môi Trường Y Tế",
    "problem": "Hệ thống quản lý môi trường cơ sở y tế",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "healthcare"
  },
  {
    "id": 109,
    "name": "Cổng thông tin điện tử Cục Nghệ thuật biểu diễn",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Cục Nghệ thuật biểu diễn",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 110,
    "name": "Cổng thông tin điện tử Cục Phòng, chống HIV/AIDS",
    "desc": "Website Cục Phòng, chống HIV/AIDS",
    "dev": "Cục Phòng, chống HIV/AIDS",
    "problem": "Website Cục Phòng, chống HIV/AIDS",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 111,
    "name": "Cổng thông tin điện tử Cục Quản lý Dược",
    "desc": "Website Cục Quản lý Dược",
    "dev": "Cục Quản lý Dược",
    "problem": "Website Cục Quản lý Dược",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "healthcare"
  },
  {
    "id": 112,
    "name": "Cổng thông tin điện tử Cục Quản lý Y, Dược cổ truyền",
    "desc": "Website Cục Quản lý Y, Dược cổ truyền",
    "dev": "Cục Quản lý Y, Dược cổ truyền",
    "problem": "Website Cục Quản lý Y, Dược cổ truyền",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "healthcare"
  },
  {
    "id": 113,
    "name": "Cổng thông tin điện tử Cục TTTN",
    "desc": "Truyền thông",
    "dev": "Cục Quản lý và phát triển thị trường trong nước",
    "problem": "Truyền thông",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 114,
    "name": "Cổng Thông tin điện tử Hội LHPN Việt Nam",
    "desc": "Cổng là kênh thông tin chính thức của Hội cung cấp thông tin tuyên truyền hoạt động Hội và thông tin dành cho cán bộ, hội viên, phụ nữ. Cổng bao gồm hệ thống quản lý đăng nhập trung các phần mềm nội bộ của Hội",
    "dev": "Trung ương Hội LHPN Việt Nam",
    "problem": "Cổng là kênh thông tin chính thức của Hội cung cấp thông tin tuyên truyền hoạt động Hội và thông tin dành cho cán bộ, hội viên, phụ nữ. Cổng bao gồm hệ thống quản lý đăng nhập trung các phần mềm nội bộ của Hội",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 115,
    "name": "Cổng thông tin điện tử Lễ hội",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Cục Văn hóa cơ sở, Gia đình và Thư viện",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 116,
    "name": "Cổng thông tin điện tử Ngân hàng Nhà nước Việt Nam",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Cục Phòng, chống rửa tiền",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 117,
    "name": "Cổng thông tin điện tử nhà trường",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Trường Cao đẳng Du lịch Hà Nội",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 118,
    "name": "Cổng thông tin điện tử nội bộ (Intranet)",
    "desc": "Cung cấp các văn bản chỉ đạo, điều hành của Bộ; giới thiệu về chức năng, nhiệm vụ, tổ chức bộ máy của Bộ Tài chính; thông tin về hoạt động hàng ngày của Bộ Tài chính về các lĩnh vực thuộc chức năng, nhiệm vụ của Bộ Tài chính và các thông tin tham khảo liên quan.",
    "dev": "Cục Công nghệ thống tin và chuyển đổi số",
    "problem": "Cung cấp các văn bản chỉ đạo, điều hành của Bộ; giới thiệu về chức năng, nhiệm vụ, tổ chức bộ máy của Bộ Tài chính; thông tin về hoạt động hàng ngày của Bộ Tài chính về các lĩnh vực thuộc chức năng, nhiệm vụ của Bộ Tài chính và các thông tin tham khảo liên quan.",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 119,
    "name": "Cổng thông tin điện tử phổ biến, giáo dục pháp luật quốc gia",
    "desc": "Tạo nền tảng số thống nhất, hiện đại để triển khai công tác phổ biến, giáo dục pháp luật (PBGDPL) trên phạm vi toàn quốc",
    "dev": "Bộ Tư pháp",
    "problem": "Tạo nền tảng số thống nhất, hiện đại để triển khai công tác phổ biến, giáo dục pháp luật (PBGDPL) trên phạm vi toàn quốc",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 120,
    "name": "Cổng Thông tin điện tử Thông tin cơ sở",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Cục Thông tin cơ sở và Thông tin đối ngoại",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 121,
    "name": "Cổng thông tin điện tử Tòa án nhân dân khu vực 11 - Lâm Đồng",
    "desc": "Theo dõi tiến độ giải quyết án, phân công án, báo cáo tình hình giải quyết án",
    "dev": "Tòa án nhân dân khu vực 11 - Lâm Đồng",
    "problem": "Theo dõi tiến độ giải quyết án, phân công án, báo cáo tình hình giải quyết án",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 122,
    "name": "Cổng thông tin điện tử Tòa án nhân dân khu vực 12 - Lâm Đồng",
    "desc": "Theo dõi tiến độ giải quyết án, phân công án, báo cáo tình hình giải quyết án",
    "dev": "Tòa án nhân dân khu vực 12 - Lâm Đồng",
    "problem": "Theo dõi tiến độ giải quyết án, phân công án, báo cáo tình hình giải quyết án",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 123,
    "name": "Cổng thông tin điện tử Trung tâm Thông tin y tế Quốc gia",
    "desc": "Trang thông tin điện tử Trung tâm TTYQG",
    "dev": "Trung tâm Thông tin y tế Quốc gia",
    "problem": "Trang thông tin điện tử Trung tâm TTYQG",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "healthcare"
  },
  {
    "id": 124,
    "name": "Cổng thông tin điện tử và website",
    "desc": "Cung cấp thông tin, dịch vụ trực tuyến",
    "dev": "Học viện Tài chính",
    "problem": "Cung cấp thông tin, dịch vụ trực tuyến",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 125,
    "name": "Cổng thông tin điện tử Viện Hàn lâm",
    "desc": "Phục vụ hoạt động hành chính, tin bài trên cổng thông tin điện tử",
    "dev": "Văn phòng Viện Hàn lâm",
    "problem": "Phục vụ hoạt động hành chính, tin bài trên cổng thông tin điện tử",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 126,
    "name": "Cổng thông tin điện tử Vụ Hợp tác quốc tế Bộ Y tế",
    "desc": "Website Vụ Hợp tác quốc tế",
    "dev": "Vụ Hợp tác quốc tế",
    "problem": "Website Vụ Hợp tác quốc tế",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "healthcare"
  },
  {
    "id": 127,
    "name": "Cổng thông tin điện tử Vụ Pháp chế Bộ Y tế",
    "desc": "Website Vụ Pháp chế",
    "dev": "Vụ pháp chế",
    "problem": "Website Vụ Pháp chế",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế,",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "healthcare"
  },
  {
    "id": 128,
    "name": "Cổng thông tin điện tử Vụ Sức khỏe Bà mẹ - Trẻ em",
    "desc": "Website Vụ Sức khỏe Bà mẹ - Trẻ em",
    "dev": "Vụ Sức khỏe Bà mẹ - Trẻ em",
    "problem": "Website Vụ Sức khỏe Bà mẹ - Trẻ em",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "healthcare"
  },
  {
    "id": 129,
    "name": "Cổng Thông tin Đô thị Thông minh Quốc gia",
    "desc": "Công khai thông tin, tiếp nhận phản ánh kiến nghị, cung cấp thông tin chuyên ngành",
    "dev": "Cục Phát triển đô thị",
    "problem": "Công khai thông tin, tiếp nhận phản ánh kiến nghị, cung cấp thông tin chuyên ngành",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 130,
    "name": "Cổng thông tin, các web thành viên",
    "desc": "cung cấp thông tin ứng dụng hoạt động của trường dành cho giáo viên và sinh viên",
    "dev": "Trường Đại học Thủy lợi",
    "problem": "cung cấp thông tin ứng dụng hoạt động của trường dành cho giáo viên và sinh viên",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 131,
    "name": "Cổng thông tin/Portal Y tế số Nghệ An",
    "desc": "Cổng thông tin điện tử cung cấp thông tin ngành y tế, tích hợp các dịch vụ số, hỗ trợ tra cứu và kết nối giữa cơ quan quản lý, đơn vị y tế và người dân",
    "dev": "VNPT",
    "problem": "Công khai, minh bạch thông tin ngành y tế; Cung cấp kênh tra cứu thông tin cho người dân; Kết nối thông tin giữa Sở Y tế và các đơn vị trực thuộc; Hỗ trợ triển khai các dịch vụ y tế trực tuyến.",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Input: dữ liệu thông tin ngành y tế, văn bản, tin tức, dữ liệu dịch vụ; Xử lý: tổng hợp, kiểm duyệt, cập nhật nội dung; Output: thông tin công khai, dữ liệu tra cứu, dịch vụ trực tuyến.",
    "cat": "healthcare"
  },
  {
    "id": 132,
    "name": "Cổng tiếp nhận dữ liệu",
    "desc": "Cổng thông tin tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để kết nối, tiếp nhận toàn bộ thông tin về chi phí khám, chữa bệnh BHYT và",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Cổng thông tin tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để kết nối, tiếp nhận toàn bộ thông tin về chi phí khám, chữa bệnh BHYT và",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 133,
    "name": "Cổng tra cứu dữ liệu chứng nhận trực tuyến",
    "desc": "Hệ thống tra cứu Giấy chứng nhận hợp quy bằng mã QR",
    "dev": "Cục Viễn thông",
    "problem": "Hệ thống tra cứu Giấy chứng nhận hợp quy bằng mã QR",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 134,
    "name": "Cổng tra cứu dữ liệu kiểm định trực tuyến",
    "desc": "Ứng dụng tra cứu dữ liệu cấp giấy chứng nhận kiểm định",
    "dev": "Cục Viễn thông",
    "problem": "Ứng dụng tra cứu dữ liệu cấp giấy chứng nhận kiểm định",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 135,
    "name": "Cổng trang thông tin điện tử của Bộ Tư lệnh CSCĐ",
    "desc": "Gửi nhận văn bản điện tử nội bộ các đơn vị trong Bộ Tư lệnh CSCĐ",
    "dev": "K02",
    "problem": "Gửi nhận văn bản điện tử nội bộ các đơn vị trong Bộ Tư lệnh CSCĐ",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 136,
    "name": "Cổng đào tạo bồi dưỡng cho cán bộ, công chức, viên chức (E - learning Portal)",
    "desc": "Kiến thức Quản lý nhà nước; nâng cao kỹ năng số và chuyển đổi số; nâng cao kỹ năng mềm và thực thi công vụ; xử lý chuyên ngành.",
    "dev": "Đang đề xuất xây dựng",
    "problem": "Chuẩn hóa, hiện đại hóa trong đào tạo, nâng cao năng lực cho cán bộ công chức; Kiến thức Quản lý nhà nước; nâng cao kỹ năng số và chuyển đổi số; nâng cao kỹ năng mềm và thực thi công vụ; xử lý chuyên ngành.",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Có kho học liệu số dùng chung; dữ liệu liên thông; tiết kiệm ngân sách; tăng chỉ số cải cách hành chính; thành thạo kỹ năng công nghệ, am hiểu quy trình số.",
    "cat": "education"
  },
  {
    "id": 137,
    "name": "Cơ sở dữ liệu cán bộ, công chức, viên chức",
    "desc": "Dùng để gửi và nhận văn bản, xử lý văn bản trên môi trường mạng; Dùng để nhập dữ liệu viên chức,",
    "dev": "Ban Quản lý Đầu tư và Xây dựng Thủy lợi 10",
    "problem": "Dùng để gửi và nhận văn bản, xử lý văn bản trên môi trường mạng; Dùng để nhập dữ liệu viên chức,",
    "users": "Cơ quan quản lý tài nguyên và môi trường, đơn vị phòng chống thiên tai, chính quyền",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "education"
  },
  {
    "id": 138,
    "name": "Cơ sở dữ liệu cấp nước sạch và thoát nước đô thị",
    "desc": "CSDL lĩnh vực cấp thoát nước",
    "dev": "Cục Kết cấu hạ tầng xây dựng",
    "problem": "CSDL lĩnh vực cấp thoát nước",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "smartcity"
  },
  {
    "id": 139,
    "name": "Cơ sở dữ liệu CBCCVC",
    "desc": "Xử lý HSCV, quản lý đào tạo",
    "dev": "Trường Cao đẳng Cơ điện và Nông lâm Phú Thọ",
    "problem": "Xử lý HSCV, quản lý đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 140,
    "name": "Cơ sở dữ liệu chuyên gia tư vấn và đơn vị cung cấp dịch vụ tư vấn công nghiệp hỗ trợ",
    "desc": "Cung cấp dữ liệu về DN SX hoàn chỉnh và CNHT",
    "dev": "Cục Công nghiệp",
    "problem": "Cung cấp dữ liệu về DN SX hoàn chỉnh và CNHT",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 141,
    "name": "Cơ sở dữ liệu công chức, viên chức của Bộ Nội vụ",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Viện Khoa học Tổ chức nhà nước và Lao động",
    "dev": "Viện Khoa học Tổ chức nhà nước và Lao động",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực nội vụ",
    "users": "Cơ quan nội vụ, cán bộ, công chức, viên chức và cơ quan, tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 142,
    "name": "Cơ sở dữ liệu cơ khí, chế tạo - CNHT",
    "desc": "Cung cấp thông tin, hoạt động chế tạo - CNHT",
    "dev": "Cục Công nghiệp",
    "problem": "Cung cấp thông tin, hoạt động chế tạo - CNHT",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào;",
    "cat": "enterprise"
  },
  {
    "id": 143,
    "name": "Cơ sở dữ liệu cơ quan, doanh nghiệp bưu chính",
    "desc": "1. Quản lý thông tin cấp phép doanh nghiệp bưu chính; 2. Quản lý thông tin Tem bưu chính",
    "dev": "Vụ Bưu chính",
    "problem": "1. Quản lý thông tin cấp phép doanh nghiệp bưu chính; 2. Quản lý thông tin Tem bưu chính",
    "users": "Cơ quan nhà nước, cán bộ xử lý nghiệp vụ, người dân và doanh nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 144,
    "name": "Cơ sở dữ liệu da dày - CNHT",
    "desc": "Cung cấp thông tin dữ liệu da dày - CNHT",
    "dev": "Cục Công nghiệp",
    "problem": "Cung cấp thông tin dữ liệu da dày - CNHT",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 145,
    "name": "Cơ sở dữ liệu danh mục điện tử dùng chung ngành Tài chính",
    "desc": "Tập hợp các danh mục được phân loại, kiểm tra, đánh giá, xử lý, tích hợp, số hóa, chuẩn hóa và sắp xếp, lưu trữ một cách hệ thống để cập nhật, khai thác và sử dụng trong lĩnh vực Tài chính thông qua phương tiện điện tử",
    "dev": "Cục Công nghệ thống tin và chuyển đổi số",
    "problem": "Tập hợp các danh mục được phân loại, kiểm tra, đánh giá, xử lý, tích hợp, số hóa, chuẩn hóa và sắp xếp, lưu trữ một cách hệ thống để cập nhật, khai thác và sử dụng trong lĩnh vực Tài chính thông qua phương tiện điện tử",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 146,
    "name": "Cơ sở dữ liệu danh tính điện tử",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Công an",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 147,
    "name": "Cơ sở dữ liệu doanh nghiệp sản xuất sản phẩm hoàn chỉnh và",
    "desc": "Cung cấp thông tin sản xuất sản phẩm hooàn chỉnh",
    "dev": "Cục Công nghiệp",
    "problem": "Cung cấp thông tin sản xuất sản phẩm hooàn chỉnh",
    "users": "Doanh nghiệp sản xuất, nhà máy, bộ phận vận hành, kỹ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý,",
    "cat": "enterprise"
  },
  {
    "id": 148,
    "name": "Cơ sở dữ liệu doanh trại dùng chung",
    "desc": "Phục vụ tra cứu hồ sơ chuyên môn",
    "dev": "H02",
    "problem": "Phục vụ tra cứu hồ sơ chuyên môn",
    "users": "Cơ quan nhà nước, cán bộ xử lý nghiệp vụ, người dân và doanh nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 149,
    "name": "Cơ sở dữ liệu hồ chứa thủy điện Cục ATMT",
    "desc": "Hàng ngày, chủ đập, hồ chứa cập nhật thông tin dữ liệu hồ chứa, phục vụ theo dõi, quản lý công tác vận hành hồ chứa thủy điện trên toàn quốc",
    "dev": "Cục Kỹ thuật an toàn và Môi trường công nghiệp",
    "problem": "Hàng ngày, chủ đập, hồ chứa cập nhật thông tin dữ liệu hồ chứa, phục vụ theo dõi, quản lý công tác vận hành hồ chứa thủy điện trên toàn quốc",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 150,
    "name": "Cơ sở dữ liệu Khoa học công nghệ",
    "desc": "Cập nhật các thông tin, dữ liệu về đề tài, dự án khoa học của Bộ Nội vụ",
    "dev": "Viện Khoa học Tổ chức nhà nước và Lao động",
    "problem": "Cập nhật các thông tin, dữ liệu về đề tài, dự án khoa học của Bộ Nội vụ",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin và quản trị hệ thống",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 151,
    "name": "Cơ sở dữ liệu khu cụm CN, cụm liên kết ngành trong lĩnh vực CN",
    "desc": "Cung cấp thông tin cụm công nghiệp, cụm liên kết trong lĩnh vực công nghiệp",
    "dev": "Cục Công nghiệp",
    "problem": "Cung cấp thông tin cụm công nghiệp, cụm liên kết trong lĩnh vực công nghiệp",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 152,
    "name": "Cơ sở dữ liệu lớn về nhập, xuất cảnh của người nước ngoài",
    "desc": "Phục vụ công tác báo cáo thống kê, tra cứu thông tin xuất nhập cảnh, cư trú của NNN",
    "dev": "A08",
    "problem": "Phục vụ công tác báo cáo thống kê, tra cứu thông tin xuất nhập cảnh, cư trú của NNN",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 153,
    "name": "Cơ sở dữ liệu môi trường ngành Công Thương",
    "desc": "khai báo công tác bảo vệ môi trường định kỳ hằng năm",
    "dev": "Cục Kỹ thuật an toàn và Môi trường công nghiệp",
    "problem": "khai báo công tác bảo vệ môi trường định kỳ hằng năm",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 154,
    "name": "Cơ sở dữ liệu năng lực hoạt động xây dựng",
    "desc": "Lưu trữ và quản lý thông tin về năng lực của tổ chức và cá nhân tham gia hoạt động xây dựng trên toàn quốc",
    "dev": "Trung tâm Công nghệ thống tin",
    "problem": "Lưu trữ và quản lý thông tin về năng lực của tổ chức và cá nhân tham gia hoạt động xây dựng trên toàn quốc",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 155,
    "name": "Cơ sở dữ liệu Nền tảng dùng chung",
    "desc": "Là các thành phần hạ tầng dữ liệu quan trọng trong hệ thống chuyển đổi số và quản lý nhà nước",
    "dev": "Trung tâm Công nghệ thống tin",
    "problem": "Là các thành phần hạ tầng dữ liệu quan trọng trong hệ thống chuyển đổi số và quản lý nhà nước",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 156,
    "name": "Cơ sở dữ liệu Nền tảng về kết cấu hạ tầng giao thông",
    "desc": "Hệ thống thông tin dùng để thu thập, quản lý và khai thác dữ liệu về hạ tầng giao thông như đường bộ, cầu, cảng, bến… phục vụ quản lý nhà nước và quy hoạch phát triển giao thông",
    "dev": "Trung tâm Công nghệ thống tin",
    "problem": "Hệ thống thông tin dùng để thu thập, quản lý và khai thác dữ liệu về hạ tầng giao thông như đường bộ, cầu, cảng, bến… phục vụ quản lý nhà nước và quy hoạch phát triển giao thông",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 157,
    "name": "Cơ sở dữ liệu ngành dệt may - CNHT",
    "desc": "Cung cấp thông tin ngành dệt may",
    "dev": "Cục Công nghiệp",
    "problem": "Cung cấp thông tin ngành dệt may",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 158,
    "name": "Cơ sở dữ liệu ngành giáo dục",
    "desc": "Sản phẩm được xây dựng dựa trên hệ thống CSDL của Bộ GDĐT và phát triển",
    "dev": "Tập đoàn Công nghệ Quảng Ích",
    "problem": "Quản lý tập trung hồ sơ nhà trường, cán bộ quản lý, học sinh cũng như phân công",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế,",
    "process": "Cán bộ quản lý phân công nhiệm vụ cho cán bộ giáo viên, tùy theo từng chức",
    "cat": "education"
  },
  {
    "id": 159,
    "name": "Cơ sở dữ liệu ngành giáo dục",
    "desc": "Phần mềm Cơ Sở Dữ liệu Ngành được xây dựng nhằm tạo ra công cụ khai thác Dữ liệu tập trung, hỗ trợ công tác báo cáo, điều hành Ngành của các Sở giáo dục và Đào tạo",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Xây dựng kho dữ liệu ngành giáo dục tập trung, hỗ trợ thống kê, báo cáo và điều hành ngành của Sở GD&ĐT",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Phần mềm Cơ Sở Dữ liệu Ngành được xây dựng nhằm tạo ra công cụ khai thác Dữ liệu tập trung, hỗ trợ công tác báo cáo, điều hành Ngành của các Sở giáo dục và Đào tạo",
    "cat": "education"
  },
  {
    "id": 160,
    "name": "Cơ sở dữ liệu nghiệp vụ",
    "desc": "Báo cáo nghiệp vụ",
    "dev": "A04",
    "problem": "Báo cáo nghiệp vụ",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 161,
    "name": "Cơ sở dữ liệu nợ chính quyền địa phương",
    "desc": "Lập kế hoạch, phân khai/điều chỉnh kế hoạch vốn (KHV); Huy động vốn và kiểm soát KHV; Theo dõi giải ngân của dự án, GTGC, nhận nợ; Trả nợ; Báo cáo, đối chiếu số liệu.",
    "dev": "Cục Quản lý nợ",
    "problem": "Lập kế hoạch, phân khai/điều chỉnh kế hoạch vốn (KHV); Huy động vốn và kiểm soát KHV; Theo dõi giải ngân của dự án, GTGC, nhận nợ; Trả nợ; Báo cáo, đối chiếu số liệu.",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 162,
    "name": "Cơ sở dữ liệu phát hành kho quỹ (CMO)",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Cục Phát hành và Kho quỹ",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 163,
    "name": "Cơ sở dữ liệu quản lý ngành, nghề kinh doanh có điều kiên và quản lý con dấu",
    "desc": "Giải quyết TTHC và thực hiện công tác quản lý nhà nước",
    "dev": "C06",
    "problem": "Giải quyết TTHC và thực hiện công tác quản lý nhà nước",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "government"
  },
  {
    "id": 164,
    "name": "Cơ sở dữ liệu quốc gia về an sinh xã hội",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Nội vụ",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Cơ quan nội vụ, cán bộ, công chức, viên chức và cơ quan, tổ chức có liên quan",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 165,
    "name": "Cơ sở dữ liệu quốc gia về bảo hiểm",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Tài chính",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Doanh nghiệp bảo hiểm, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đại lý bảo hiểm",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 166,
    "name": "Cơ sở dữ liệu quốc gia về biến đổi khí hậu",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Nông nghiệp và Môi trường",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 167,
    "name": "Cơ sở dữ liệu quốc gia về cán bộ, công chức, viên chức",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Nội vụ",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Cơ quan nội vụ, cán bộ, công chức, viên chức và cơ quan, tổ chức có liên quan",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 168,
    "name": "Cơ sở dữ liệu Quốc gia về chăn nuôi",
    "desc": "Là hệ thống thông tin liên quan đến chăn nuôi, được xây dựng thống nhất từ trung ương đến địa phương, được chuẩn hóa để cập nhật và quản lý bằng công nghệ thông tin",
    "dev": "Tập đoàn VNPT",
    "problem": "Hệ thống Cơ sở dữ liệu quốc gia về chăn nuôi (sau đây gọi tắt là Hệ thống) do Cục Chăn nuôi và Thú y - Bộ Nông nghiệp và Môi trường xây dựng, triển khai và vận hành. Hệ thống là nền tảng dữ liệu số tập",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Đối với doanh nghiệp và người dân: kê khai hoạt động chăn nuôi. Đối với cơ quan quản lý (cấp xã, tỉnh, trung ương): quản lý, khai thác, sử dụng dữ liệu",
    "cat": "enterprise"
  },
  {
    "id": 169,
    "name": "Cơ sở dữ liệu quốc gia về dân cư",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Công an",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 170,
    "name": "Cơ sở dữ liệu quốc gia về giá",
    "desc": "Phần mềm phục vụ thu thập, xử lý các dữ liệu về giá hàng hóa, dịch vụ; dữ liệu về thẩm định giá; thông tin quản lý Nhà nước về giá.",
    "dev": "Cục Công nghệ thống tin và chuyển đổi số",
    "problem": "Phần mềm phục vụ thu thập, xử lý các dữ liệu về giá hàng hóa, dịch vụ; dữ liệu về thẩm định giá; thông tin quản lý Nhà nước về giá.",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 171,
    "name": "Cơ sở dữ liệu quốc gia về giáo dục và đào tạo",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Giáo dục và Đào tạo",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "education"
  },
  {
    "id": 172,
    "name": "Cơ sở dữ liệu quốc gia về hoạt động xây dựng",
    "desc": "Hệ thống thông tin dùng để thu thập, lưu trữ, quản lý và chia sẻ dữ liệu về các hoạt động xây dựng trên phạm vi toàn quốc",
    "dev": "Trung tâm Công nghệ thống tin",
    "problem": "Hệ thống thông tin dùng để thu thập, lưu trữ, quản lý và chia sẻ dữ liệu về các hoạt động xây dựng trên phạm vi toàn quốc",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 173,
    "name": "Cơ sở dữ liệu quốc gia về kiểm soát tài sản, thu nhập",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Thanh tra Chính phủ",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 174,
    "name": "Cơ sở dữ liệu Quốc gia về pháp luật",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Bộ Tư pháp",
    "dev": "Bộ Tư pháp",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tư pháp",
    "users": "Cơ quan tư pháp, cán bộ xử lý nghiệp vụ, người dân, doanh nghiệp và tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 175,
    "name": "Cơ sở dữ liệu quốc gia về tài chính",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Tài chính",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Ngân hàng, tổ chức tài chính, doanh nghiệp và khách hàng cá nhân",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 176,
    "name": "Cơ sở dữ liệu quốc gia về thủ tục hành chính",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Tư pháp",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 177,
    "name": "Cơ sở dữ liệu quốc gia về trí tuệ nhân tạo",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Công an",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "ai"
  },
  {
    "id": 178,
    "name": "Cơ sở dữ liệu quốc gia về xuất nhập cảnh",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và",
    "dev": "Bộ Công an",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước,",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ",
    "cat": "government"
  },
  {
    "id": 179,
    "name": "Cơ sở dữ liệu quốc gia về xử lý vi phạm hành chính",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Công an",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 180,
    "name": "Cơ sở dữ liệu quốc gia về y tế",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Y tế",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "healthcare"
  },
  {
    "id": 181,
    "name": "Cơ sở dữ liệu quốc gia về đầu tư",
    "desc": "theo dõi, đánh giá và phân tích tình hình đầu tư trên toàn quốc. Mục đích chính bao gồm phục vụ công tác quản lý nhà nước, hỗ trợ nhà đầu tư trong hoạt động kinh doanh, và quản lý các chương trình mục tiêu quốc gia",
    "dev": "Cục Đầu tư nước ngoài",
    "problem": "theo dõi, đánh giá và phân tích tình hình đầu tư trên toàn quốc. Mục đích chính bao gồm phục vụ công tác quản lý nhà nước, hỗ trợ nhà đầu tư trong hoạt động kinh doanh, và quản lý các chương trình mục tiêu quốc gia",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 182,
    "name": "Cơ sở dữ liệu quốc gia về đất đai",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Nông nghiệp và Môi trường",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "ai"
  },
  {
    "id": 183,
    "name": "Cơ sở dữ liệu quốc gia về đăng ký doanh nghiệp",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và",
    "dev": "Bộ Tài chính",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà",
    "users": "Ngân hàng, tổ chức tài chính, doanh nghiệp và khách hàng cá nhân",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 184,
    "name": "Cơ sở dữ liệu sản xuất, lắp ráp ô tô",
    "desc": "Cung cấp thông tin sản xuất, lắp ráp ô tô",
    "dev": "Cục Công nghiệp",
    "problem": "Cung cấp thông tin sản xuất, lắp ráp ô tô",
    "users": "Doanh nghiệp sản xuất, nhà máy, bộ phận vận hành, kỹ thuật, quản lý chất lượng và lãnh đạo doanh nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 185,
    "name": "Cơ sở dữ liệu sinh viên, cán bộ giảng viên",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Viện Kiểm sát nhân dân tối cao",
    "dev": "Viện Kiểm sát nhân dân tối cao",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 186,
    "name": "Cơ sở dữ liệu tài liệu lưu trữ Phông lưu trữ Nhà nước Việt Nam",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Nội vụ",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 187,
    "name": "Cơ sở dữ liệu Tem bưu chính",
    "desc": "1. Quản lý thông tin cấp phép doanh nghiệp bưu chính; 2. Quản lý thông tin Tem bưu chính",
    "dev": "Vụ Bưu chính",
    "problem": "1. Quản lý thông tin cấp phép doanh nghiệp bưu chính; 2. Quản lý thông tin Tem bưu chính",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 188,
    "name": "Cơ sở dữ liệu Thông tin tư liệu",
    "desc": "Cập nhật các thông tin, dữ liệu (sách, báo, tạp chí, kỷ yếu…) phục vụ nghiên cứu khoa học của viện",
    "dev": "Viện Khoa học Tổ chức nhà nước và Lao động",
    "problem": "Cập nhật các thông tin, dữ liệu (sách, báo, tạp chí, kỷ yếu…) phục vụ nghiên cứu khoa học của viện",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 189,
    "name": "Cơ sở dữ liệu tiền giả",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Cục Phát hành và Kho quỹ",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 190,
    "name": "Cơ sở dữ liệu Tổ chức giám định",
    "desc": "Sử dụng để quản lý dữ liệu về Tổ chức giám định và quản lý dữ liệu về giám định máy móc, thiết bị, dây chuyền công nghệ đã qua sử dụng",
    "dev": "Vụ Đánh giá và Thẩm định công nghệ",
    "problem": "Sử dụng để quản lý dữ liệu về Tổ chức giám định và quản lý dữ liệu về giám định máy móc, thiết bị, dây chuyền công nghệ đã qua sử dụng",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 191,
    "name": "Cơ sở dữ liệu tổng hợp quốc gia",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Công an",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 192,
    "name": "Cơ sở dữ liệu Tổng hợp về tài chính",
    "desc": "Hiện đại hóa quản lý nhà nước, cải cách thủ tục hành chính, phục vụ xây dựng Chính phủ số và kinh tế số. CSDL này tổng hợp thông tin từ thuế, hải quan, bảo hiểm và các nguồn khác để phục vụ điều hành, dự báo và ra quyết định tài chính",
    "dev": "Cục Công nghệ thống tin và chuyển đổi số",
    "problem": "Hiện đại hóa quản lý nhà nước, cải cách thủ tục hành chính, phục vụ xây dựng Chính phủ số và kinh tế số. CSDL này tổng hợp thông tin từ thuế, hải quan, bảo hiểm và các nguồn khác để phục vụ điều hành, dự báo và ra quyết định tài chính",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 193,
    "name": "Cơ sở dữ liệu văn bản QPPL Bộ Công an",
    "desc": "Quản trị, khai thác CSDL văn bản QPPL Bộ Công an",
    "dev": "V03",
    "problem": "Quản trị, khai thác CSDL văn bản QPPL Bộ Công an",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 194,
    "name": "Cơ sở dữ liệu văn bản quy phạm pháp luật ngành tài chính",
    "desc": "Cung cấp khả năng tra cứu, tìm kiếm dưới dạng điện tử các loại văn bản sau: Văn bản quy phạm pháp luật do Bộ Tài chính ban hành; Văn bản hợp nhất; Văn bản điều hành; Văn bản quy phạm pháp luật thu thập từ nguồn Công báo Chính phủ.",
    "dev": "Cục Công nghệ thống tin và chuyển đổi số",
    "problem": "Cung cấp khả năng tra cứu, tìm kiếm dưới dạng điện tử các loại văn bản sau: Văn bản quy phạm pháp luật do Bộ Tài chính ban hành; Văn bản hợp nhất; Văn bản điều hành; Văn bản quy phạm pháp luật thu thập từ nguồn Công báo Chính phủ.",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 195,
    "name": "Cơ sở dữ liệu về bảo vệ người tiêu dùng (Bitrix24)",
    "desc": "1. Sử dung cho việc xử lý phản ành khiếu nại của người tiêu dùng 2. hỗ trợ nghe gọi cho tổng đài viên 3. Sử dụng để quản lý máy chủ và hệ thống mạng nội bộ của cơ quan. Hỗ trợ quản lý tài khoản, phân quyền truy cập và chia sẻ dữ liệu",
    "dev": "Ủy ban Cạnh tranh Quốc gia",
    "problem": "1. Sử dung cho việc xử lý phản ành khiếu nại của người tiêu dùng 2. hỗ trợ nghe gọi cho tổng đài viên 3. Sử dụng để quản lý máy chủ và hệ thống mạng nội bộ của cơ quan. Hỗ trợ quản lý tài khoản, phân quyền truy cập và chia sẻ dữ liệu",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 196,
    "name": "Cơ sở dữ liệu về dịch vụ chứng thực chữ ký số",
    "desc": "Trung tâm lưu trữ và khai thác thông tin dữ liệu tập trung, nền tảng cho việc số hóa quy trình làm việc, nâng cao tính minh bạch, hiệu quả và bảo mật trong công tác quản lý dịch vụ chứng thực chữ ký số",
    "dev": "NEAC",
    "problem": "Trung tâm lưu trữ và khai thác thông tin dữ liệu tập trung, nền tảng cho việc số hóa quy trình làm việc, nâng cao tính minh bạch, hiệu quả và bảo mật trong công tác quản lý dịch vụ chứng thực chữ ký số",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Cán bộ chuyên môn nhập dữ liệu lên hệ thống. Hệ thống lưu trữ, phân tích, phân loại dữ liệu. Hệ thống xây dựng các bảng biểu, biểu đồ báo cáo chi tiết phù hợp nhu cầu trích xuất thông tin",
    "cat": "security"
  },
  {
    "id": 197,
    "name": "Cơ sở dữ liệu về giá trên địa bàn tỉnh Nghệ An",
    "desc": "Tổng hợp các số liệu về giá như: báo cáo giá thị trường, giá hàng hóa dịch vụ do nhà nước định giá, giá kê khai, giá hội đồng thẩm định giá, tình hình thanh tra",
    "dev": "Sở Tài chính Nghệ An",
    "problem": "Tổng hợp các dữ liệu về giá phục vụ cho quá trình tổng hợp, phân tích, báo cáo, truy xuất dữ liệu",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Các cơ quan, đơn vị liên quan nhập số liệu lên phần mềm cơ sở dữ liệu giá",
    "cat": "education"
  },
  {
    "id": 198,
    "name": "Cơ sở dữ liệu về Phát triển đô thị",
    "desc": "Quản lý hồ sơ, dữ liệu và quy trình nghiệp vụ chuyên ngành của đơn vị",
    "dev": "Cục Phát triển đô thị",
    "problem": "Quản lý hồ sơ, dữ liệu và quy trình nghiệp vụ chuyên ngành của đơn vị",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "smartcity"
  },
  {
    "id": 199,
    "name": "Cơ sở dữ liệu về thông tin người phải thi hành án chưa có điều kiện thi hành",
    "desc": "Công khai danh sách người phải thi hành án chưa có điều kiện thi hành án, đảm bảo quyền tiếp cận thông tin của cá nhân, tổ chức theo quy định pháp luật",
    "dev": "Bộ Tư pháp",
    "problem": "Công khai danh sách người phải thi hành án chưa có điều kiện thi hành án, đảm bảo quyền tiếp cận thông tin của cá nhân, tổ chức theo quy định pháp luật",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 200,
    "name": "Cơ sở dữ liệu về xử lý vi phạm hành chính trong CAND",
    "desc": "Quản trị, khai thác CSDL xử lý vi phạm hành chính trong CAND",
    "dev": "V03",
    "problem": "Quản trị, khai thác CSDL xử lý vi phạm hành chính trong CAND",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 201,
    "name": "Cơ sở dữ liệu về định mức xây dựng, giá xây dựng, công trình xây dựng",
    "desc": "Hệ thống thông tin dùng để lưu trữ, quản lý và cung cấp dữ liệu liên quan đến chi phí và tiêu chuẩn trong hoạt động xây dựng",
    "dev": "Trung tâm Công nghệ thống tin",
    "problem": "Hệ thống thông tin dùng để lưu trữ, quản lý và cung cấp dữ liệu liên quan đến chi phí và tiêu chuẩn trong hoạt động xây dựng",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 202,
    "name": "Cơ sở dữ liệu đất phục vụ quản lý nội bộ",
    "desc": "Hệ thống số hóa phục vụ lưu trữ, quản lý và khai thác dữ liệu đất trong nội bộ đơn vị",
    "dev": "Viện Thổ nhưỡng Nông hóa",
    "problem": "Khắc phục tình trạng dữ liệu đất phân tán, thiếu đồng bộ, khó tra cứu và khai thác trong công tác nghiên cứu và quản lý",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Thực hiện thu thập, tổng hợp dữ liệu; số hóa và chuẩn hóa thông tin; lưu trữ trên hệ thống; phục vụ khai thác, tra cứu và sử dụng trong công tác chuyên môn.",
    "cat": "enterprise"
  },
  {
    "id": 203,
    "name": "Cơ sở dữ liệu định danh địa điểm",
    "desc": "Cơ sở dữ liệu quốc gia thuộc danh mục chính thức; phục vụ quản lý nhà nước, kết nối, chia sẻ và khai thác dữ liệu theo phân công của cơ quan chủ quản",
    "dev": "Bộ Công an",
    "problem": "Khắc phục phân tán dữ liệu, hình thành nguồn dữ liệu dùng chung, thống nhất phục vụ quản lý nhà nước và cung cấp dịch vụ số",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "government"
  },
  {
    "id": 204,
    "name": "CyStack Endpoint",
    "desc": "Giải pháp bảo mật thiết bị đầu cuối toàn diện, giúp doanh nghiệp bảo vệ dữ liệu, chống rò rỉ thông tin (DLP), giám sát hành vi người dùng và kiểm soát thiết bị làm việc. Sản phẩm tích hợp quản lý thiết bị tập trung, theo dõi tuân thủ chính sách bảo mật nội bộ và sao lưu dữ liệu tự động",
    "dev": "Công ty Cổ phần CyStack Việt Nam",
    "problem": "Theo thống kê, 83% vi phạm bảo mật trong doanh nghiệp liên quan đến yếu tố con người. Nhân viên có thể vô tình hoặc cố ý rò rỉ dữ liệu qua USB, email cá nhân, dịch vụ lưu trữ đám mây, hoặc ứng dụng nhắn tin. Doanh nghiệp thiếu công cụ giám sát hành vi trên thiết bị làm việc, không kiểm soát được luồng dữ liệu ra ngoài tổ chức, và gặp khó khăn trong việc đảm bảo tuân thủ các quy định bảo mật nội bộ cũng như pháp luật về an toàn thông tin",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và bộ phận công nghệ thông tin",
    "process": "Quy trình triển khai gồm 5 bước: (1) Khảo sát và đánh giá hiện trạng bảo mật thiết bị đầu cuối của doanh nghiệp. (2) Thiết kế chính sách bảo mật phù hợp với quy mô và ngành nghề. (3) Cài đặt agent lên toàn bộ thiết bị đầu cuối cần bảo vệ. (4) Cấu hình chín h sách DLP, kiểm soát USB, giám sát hoạt động và kiểm thử vận hành",
    "cat": "security"
  },
  {
    "id": 205,
    "name": "CyStack Platform",
    "desc": "CyStack Platform là nền tảng bảo mật tổng hợp dành cho doanh nghiệp, cung cấp dịch vụ kiểm thử xâm nhập (Pentest), đánh giá lỗ hổng bảo mật, tư vấn tuân thủ tiêu chuẩn an toàn thông tin (ISO 27001, PCI DSS, Nghị định 13/2023), và dịch vụ bảo mật được",
    "dev": "Công ty Cổ phần CyStack Việt Nam",
    "problem": "Doanh nghiệp Việt Nam đối mặt với nhiều thách thức về an toàn thông tin trong quá trình chuyển đổi số: tấn công mạng gia tăng, lỗ hổng bảo mật trên ứng dụng web và di động ngày càng phức tạp, yêu cầu tuân thủ pháp luật (Luật An ninh mạng, Nghị định",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và bộ phận công nghệ thông tin",
    "process": "Quy trình sử dụng CyStack Platform gồm các bước chính: (1) Doanh nghiệp đăng ký và xác định phạm vi tài sản số cần bảo vệ (ứng dụng web, mobile, API, hạ tầng mạng, hệ thống đám mây). (2) Đội ngũ chuyên gia CyStack thực hiện kiểm thử xâm",
    "cat": "security"
  },
  {
    "id": 206,
    "name": "DIGIFACTORY: Giải pháp quản lý vận hành sản xuất và kiểm soát chất lượng sản phẩm",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực công Thương; Khoa học và Công nghệ",
    "dev": "Công ty CP Thành Thành Công Biên Hòa",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực công Thương; Khoa học và Công nghệ",
    "users": "Doanh nghiệp sản xuất, nhà máy, bộ phận vận hành, kỹ thuật, quản lý chất lượng và lãnh đạo doanh nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 207,
    "name": "DigiO: Giải pháp quản trị Vận hành Doanh nghiệp",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực nông nghiệp và Môi trường; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Thành Thành Công Biên Hòa",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực nông nghiệp và Môi trường; Giáo dục và Đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 208,
    "name": "DigiRetails: Giải pháp bán hàng đa kênh chung nền tảng",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực công Thương; Hoạt động viễn thông; lập trình máy tính, tư vấn, cơ sở hạ tầng máy tính và các dịch vụ thông tin khác.",
    "dev": "Công ty Cổ phần Thành Thành Công - Biên Hòa",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực công Thương; Hoạt động viễn thông; lập trình máy tính, tư vấn, cơ sở hạ tầng máy tính và các dịch vụ thông tin khác.",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "smartcity"
  },
  {
    "id": 209,
    "name": "Dịch vụ chứng thực chữ ký số công cộng",
    "desc": "Là dịch vụ chứng thực chữ ký số công cộng, cho phép xác thực tổ chức, cá nhân trong các giao dịch điện tử",
    "dev": "VNPT - IT",
    "problem": "Hạn chế tối đa làm giả, khai khống; Ký số mọi lúc mọi nơi 24/7; Chống chối bỏ trách nhiệm, yên tâm giao dịch.",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Quy trình cấp chứng thư số: KH nộp hồ sơ trực tiếp - > Giao dịch viên lập hợp đồng, upload tài liệu - > RA tạo yêu cầu cấp mới Chứng",
    "cat": "enterprise"
  },
  {
    "id": 210,
    "name": "Dịch vụ công kho bạc",
    "desc": "Thực hiện các nghiệp vụ ngân sách",
    "dev": "Cục Tiền lương và Bảo hiễm xã hội",
    "problem": "Thực hiện các nghiệp vụ ngân sách",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 211,
    "name": "Dịch vụ công trực tuyến 1 chạm",
    "desc": "Hướng đến 100% các thủ thục liên quan Công an xã làm online",
    "dev": "Công an xã",
    "problem": "Rút ngắn thời gian thực hiện các thủ tục hành chính của công dân cần thực hiện",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Đẩy mạnh tuyên truyền, hướng dẫn tới người dân trên địa bàn (nhóm đối tượng ưu tiên chính trước mắt là Thanh niên, người thao tác tốt trên điện thoại thông minh) các bước thực hiện các thủ tục hành chính liên quan",
    "cat": "government"
  },
  {
    "id": 212,
    "name": "Dịch vụ công và Một cửa điện tử",
    "desc": "Một cửa điện tử & Dịch vụ Công trực tuyến\" được xây dựng nhằm tạo điều kiện thuận lợi cho các cá nhân tổ chức có nhu cầu giải quyết các thủ tục hành chính một cách nhanh chóng tại một địa chỉ truy cập duy nhất, cung cấp thông tin một cách tự động và trực t uyến về tình trạng giải quyết hồ sơ, cấp phép",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Cung cấp cổng dịch vụ công trực tuyến và cơ chế một cửa điện tử, giúp cá nhân và tổ chức giải quyết thủ tục hành chính online",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Một cửa điện tử & Dịch vụ Công trực tuyến\" được xây dựng nhằm tạo điều kiện thuận lợi cho các cá nhân tổ chức có nhu cầu giải quyết các thủ tục hành chính một cách nhanh chóng tại một địa chỉ truy cập duy nhất, cung cấp thông tin một cách tự động và trực t uyến về tình trạng giải quyết hồ sơ, cấp phép",
    "cat": "government"
  },
  {
    "id": 213,
    "name": "Dịch vụ kê khai bảo hiểm xã hội vBHXH",
    "desc": "Tin học hoá và tự động hoá quy trình kê khai, nộp hồ sơ và xử lý thủ tục bảo hiểm xã hội cho doanh nghiệp",
    "dev": "VTT - Tập đoàn VIettel",
    "problem": "Tin học hoá và tự động hoá quy trình kê khai, nộp hồ sơ và xử lý thủ tục bảo hiểm xã hội cho doanh nghiệp",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Kê khai hồ sơ BHXH điện tử; Lập và nộp tờ khai (tăng/giảm lao động, điều chỉnh); Ký số hồ sơ và gửi cơ quan BHXH; Tra cứu trạng thái xử lý hồ sơ; Nhận và quản lý kết quả phản hồi từ cơ quan BHXH; Quản lý dữ liệu lao động tham gia BHXH.",
    "cat": "finance"
  },
  {
    "id": 214,
    "name": "Dịch vụ ký số từ xa",
    "desc": "Là dịch vụ chứng thực chữ ký số công cộng theo mô hình ký số từ xa do VNPT tự nghiên cứu và phát triển, đáp ứng tiêu chuẩn an toàn bảo mật eIDAS của Châu Âu và các tiêu chuẩn của Bộ Thông tin và Truyền thông",
    "dev": "VNPT - IT",
    "problem": "Cho phép người dùng ký tài liệu điện tử mọi lúc, mọi nơi mà không cần USB token; Quản lý thuận tiện: Người dùng truy cập lịch sử giao dịch đầy đủ, tức thời; Tích hợp dễ dàng.",
    "users": "Cơ quan tư pháp, cán bộ xử lý nghiệp vụ, người dân, doanh nghiệp và tổ chức có liên quan",
    "process": "1. Quy trình Đăng ký chứng thư số; Mô tả chung: Cho phép khách hàng đăng ký chứng thư số mới; Quy trình đăng ký chứng thư số cá nhân toàn trình: Chọn chứng thư số - > Thực hiện eKYC - > Xác nhận thông tin - > Thanh toán - > Ký hợp đồng - > Kích hoạt chứng thư s ố - > Xác nhận nghiệm thu; 2. Quy trình Ký số; Mô tả chung: Cho phép khách hàng thực hiện ký số tài liệu.",
    "cat": "security"
  },
  {
    "id": 215,
    "name": "Dịch vụ Lending/Credit Scoring",
    "desc": "sản phẩm dịch vụ dữ liệu",
    "dev": "VNPT Media",
    "problem": "dựa trên tập thông tin khách hàng chuẩn hóa cung cấp xác thực thông tin khách hàng; chấm điểm tín dụng khách hàng dựa trên thông tin của khách hàng; cung cấp tệp khách hàng tiềm năng.",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "đối tác yêu cầu các",
    "cat": "enterprise"
  },
  {
    "id": 216,
    "name": "Dịch vụ Lending/Credit Scoring cho khách hàng doanh nghiệp",
    "desc": "sản phẩm: cung cấp dịch vụ xác thực nhà mạng; cung cấp dịch vụ đánh điểm tín dụng; cung cấp dịch vụ tìm kiếm khách hàng tiềm năng; giải pháp: dựa trên dữ liệu viễn thông đã xác thực với C06; dựa trên dữ liệu viễn thông của người dùng.",
    "dev": "VNPT - Media",
    "problem": "kiểm tra tính đúng đắn của thông tin khách hàng trên các ứng dụng bên thứ 3 dựa trên dữ liệu viễn thông đã xác thực với C06; đánh giá và xếp hạng khách hàng cho các ngân hàng/tổ chức tín dụng dựa trên dữ liệu viễn thông của người dùng",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "ngân hàng/tổ chức tín dụng thực hiện onboarding khách hàng; KH điền thông tin và đồng ý đăng ký/sử dụng dịch vụ; ngân hàng/tổ chức tín dụng gọi sang VNPT Media để xác thực thông tin/truy vấn đánh giá/tập KH tiềm năng; VNPT Media gửi lại thông tin để ngân h àng/tổ chức tín dụng tiếp tục.",
    "cat": "finance"
  },
  {
    "id": 217,
    "name": "Dịch vụ logistics",
    "desc": "Khai thác cảng; dịch vụ logistics; vận tải và dịch vụ biển.",
    "dev": "Công ty TNHH MTV Tổng Công ty Tân Cảng Sài Gòn",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực nông nghiệp và Môi trường; Xây dựng",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 218,
    "name": "Dịch vụ MobiFone Cloud",
    "desc": "MobiFone Cloud là nền tảng điện toán đám mây đạt chuẩn quốc tế với hệ thống Trung tâm dữ liệu Tier III đặt tại Việt Nam, đảm bảo an toàn thông tin và chủ quyền dữ liệu quốc gia. Dịch vụ cung cấp hệ sinh thái hạ tầng linh hoạt (IaaS, PaaS, SaaS) giúp doanh nghiệp tối ưu chi phí vận hành và dễ dàng mở rộng tài nguyên theo nhu cầu thực tế",
    "dev": "Trung tâm Công nghệ thống tin MobiFone",
    "problem": "Chi phí đầu tư lớn: Loại bỏ gánh nặng chi phí mua sắm, bảo trì phần cứng và vận hành trung tâm dữ liệu vật lý cho doanh nghiệp; Thiếu linh hoạt trong mở rộng: Khắc phục tình trạng quá tải hoặc lãng phí tài nguyên nhờ khả năng tăng/giảm quy mô hạ tầng tức t hì theo nhu cầu thực tế",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Cung cấp giải pháp hạ tầng cloud",
    "cat": "smartcity"
  },
  {
    "id": 219,
    "name": "Dịch vụ nhắn tin thông báo qua Zalo",
    "desc": "Nhắn tin thông báo tiếp nhận xử lý văn bản, cảnh",
    "dev": "Thông tấn xã Việt Nam",
    "problem": "Nhắn tin thông báo tiếp nhận xử lý văn bản, cảnh",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào;",
    "cat": "enterprise"
  },
  {
    "id": 220,
    "name": "Dịch vụ phát triển Blockchain",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực khoa học và Công nghệ",
    "dev": "Công ty Cổ phần Công Nghệ Sotatek Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực khoa học và Công nghệ",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin và quản trị hệ thống",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 221,
    "name": "Dịch vụ sinh ảnh tự động (Generative AI)",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực hoạt động xuất bản, phát sóng, sản xuất và phân phối nội dung; Giáo dục và học tập",
    "dev": "Trung tâm Dịch vụ dữ liệu và Trí tuệ nhân tạo Viettel",
    "problem": "Sinh ảnh tự động theo nhu cầu người dùng",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Đầu vào: Các câu promt mô tả ảnh được tạo ra; Đầu ra: Ảnh được sinh ra tự động",
    "cat": "ai"
  },
  {
    "id": 222,
    "name": "Dịch vụ số hóa Di sản văn hóa - Du lịch tỉnh",
    "desc": "Dịch vụ số hóa Di sản văn hóa - Du lịch tỉnh: Sử dụng công nghệ số hóa 2D, 3D, Ảnh, Phim, AR/VR… để số hóa di sản văn hóa, tài nguyên du lịch trên toàn tỉnh, bao gồm: Dữ liệu di sản văn hóa tập thể, Dữ liệu di sản văn hóa phi vật thể, Các dịch vụ du lịch, địa điểm du lịch, danh thắng…; Thông tin khách tham quan, Dữ liệu văn bản, quản lý hành chính",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Số hóa 2D/3D, AR/VR toàn bộ di sản văn hóa và tài nguyên du lịch tỉnh, xây dựng kho dữ liệu di sản số toàn diện",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Dịch vụ số hóa Di sản văn hóa - Du lịch tỉnh: Sử dụng công nghệ số hóa 2D, 3D, Ảnh, Phim, AR/VR… để số hóa di sản văn hóa, tài nguyên du lịch trên toàn tỉnh, bao gồm: Dữ liệu di sản văn hóa tập thể, Dữ liệu di sản văn hóa phi vật thể, Các dịch vụ du lịch, địa điểm du lịch, danh thắng…; Thông tin khách tham quan, Dữ liệu văn bản, quản lý hành chính",
    "cat": "government"
  },
  {
    "id": 223,
    "name": "Dịch vụ xác thực CCCD gắn chíp - IDCheck ekyc",
    "desc": "Dịch vụ xác thực CCCD gắn chíp - IDCheck",
    "dev": "Trung tâm Dịch vụ dữ liệu và Trí tuệ nhân tạo Viettel",
    "problem": "Các đơn vị/doanh nghiệp cần xác thực CCCD gắn chíp của khách hàng",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước,",
    "process": "Đầu vào: 1 số thông tin trong CCCD gắn chip của người dùng; Đầu ra: kết quả xác thực thẻ CCCD",
    "cat": "enterprise"
  },
  {
    "id": 224,
    "name": "Dịch vụ Điện toán đám mây (VNPT SmartCloud)",
    "desc": "VNPT Cloud Server, hay máy chủ đám mây là một máy chủ ảo được xây dựng trên nền tảng công nghệ ảo hóa điện toán đám mây (Cloud computing). Khác với máy chủ vật lý truyền thống, VNPT Cloud Server hoạt động bằng cách sử dụng tài nguyên từ nhiều máy chủ vật l ý kết nối với nhau, tạo thành một hệ thống phân tán",
    "dev": "VNPT - IT",
    "problem": "Cung cấp tài nguyên tính toán (RAM, vCPU, Storage, IP, OS) như server vật lý một cách linh hoạt, theo nhu cầu sử dụng, đảm bảo an toàn, hiệu quả cho các ứng dụng CNTT",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Khách hàng đăng ký sử dụng (qua kênh bán hàng trực tiếp/hoặc trực tuyến tại cloud. VNPT.vn); > Cấp phát tài nguyên (vCPU/RAM/SSD/IP và băng thông) -- > Khởi tạo vào sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 225,
    "name": "Dịch vụ đường truyền mạng Cáp quang FTTH",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Bảo tàng Văn hoá các dân tộc Việt Nam",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 226,
    "name": "Dlib - Giải pháp Thư Viện Số dành cho các Trường TH - THCS - THPT - ĐHCĐ - TV Tỉnh",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực văn hóa, Thể thao và Du lịch; Giáo dục và Đào tạo",
    "dev": "Công ty TNHH Tài liệu Trực tuyến Vi Na",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực văn hóa, Thể thao và Du lịch; Giáo dục và Đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 227,
    "name": "DMS - Giải pháp sản phẩm B2B kết nối từ nhà cung cấp tới đại lý thông qua ứng dụng Retailer",
    "desc": "Cung cấp Nền tảng bán hàng B2B kết nối từ doanh nghiệp tới đại lý trực tiếp, cho phép Đối tượng người dùng đại lý (retailer)",
    "dev": "Tổng công ty giải pháp doanh nghiệp Viettel",
    "problem": "Cung cấp Nền tảng bán hàng B2B kết nối từ doanh nghiệp tới đại lý trực tiếp, cho phép Đối tượng người dùng đại lý (retailer)",
    "users": "Doanh nghiệp bán buôn, bán lẻ, nhà cung cấp, bộ phận kinh doanh và khách hàng mua sắm, tiêu dùng",
    "process": "Nền tảng bán hàng B2B kết nối từ doanh nghiệp tới đại lý trực tiếp, cho phép Đối tượng người dùng đại lý (retailer), với các tính năng chính; Cho phép tự lập đơn hàng trực tiếp tới Nhà cung",
    "cat": "enterprise"
  },
  {
    "id": 228,
    "name": "DMS - Hệ thống Quản lý kênh bán - kênh phân phối toàn quốc",
    "desc": "Quản lý toàn bộ kênh phân phối từ nhà sản xuất đến nhà phân phối và đại lý, tự động hóa và tối ưu hóa bán hàng thị trường",
    "dev": "Tổng công ty giải pháp doanh nghiệp Viettel",
    "problem": "Quản lý toàn bộ kênh phân phối từ nhà sản xuất đến nhà phân phối và đại lý, tự động hóa và tối ưu hóa bán hàng thị trường",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "DMS là phần mềm quản lý doanh nghiệp do VTS sản xuất giúp quản lý các hoạt động phân phối hàng hóa ra thị trường, diễn biến tại các kênh phân phối, bao gồm quản lý nhân viên bán hàng ngoài thị trường, tự động hóa bán hàng, kiểm soát hàng tồn và các biến độ ng ngoài thị trường, quản lý công nợ,",
    "cat": "education"
  },
  {
    "id": 229,
    "name": "DMS - Ứng dụng xử lý ảnh và chấm ảnh trưng bày tự động với (AI)",
    "desc": "Tự động đánh giá và chấm điểm trưng bày sản phẩm tại điểm bán bằng AI xử lý hình ảnh thay thế kiểm tra thủ công",
    "dev": "Tổng công ty giải pháp doanh nghiệp Viettel",
    "problem": "Tự động đánh giá và chấm điểm trưng bày sản phẩm tại điểm bán bằng AI xử lý hình ảnh thay thế kiểm tra thủ công",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Hệ thống nền tảng thực hiện tác vụ phân loại - xử lý hình ảnh tự động thông qua AI. Áp dụng vào mô hình DMS ở bài toán đánh giá xử lý ảnh trưng bày (sản phẩm) với AI; Thực hiện lập chương trình trưng bày (sản phẩm); Đánh nhãn, gợi ý đánh giá sản phẩm phục vụ traiing huấn luyện nhận dạng hình ảnh (thương hiệu, nhãn hiệu…); Tự động nhận dạng, đếm số lượng theo nhãn hiệu sản phẩm; Báo cáo kết quả thực hiện.",
    "cat": "ai"
  },
  {
    "id": 230,
    "name": "DMS - Ứng dụng xử lý và phân tích báo cáo thông minh DMS - Insight",
    "desc": "Cung cấp công cụ phân tích dữ liệu DMS và báo cáo thông minh (BI), hỗ trợ ra quyết định kinh doanh dựa trên dữ liệu",
    "dev": "Tổng công ty giải pháp doanh nghiệp Viettle",
    "problem": "Cung cấp công cụ phân tích dữ liệu DMS và báo cáo thông minh (BI), hỗ trợ ra quyết định kinh doanh dựa trên dữ liệu",
    "users": "Doanh nghiệp bán buôn, bán lẻ, nhà cung cấp, bộ phận kinh doanh và khách hàng mua sắm, tiêu dùng",
    "process": "Hệ thống xử lý - phân tích báo cáo (BI), hỗ trợ doanh nghiệp thực hiện; Cho phép tự thiết lập - xây dựng báo cáo phân tích theo nhu cầu dựa trên dữ liệu sẵn có hoặc thêm mới từ nguồn bên ngoài; Tích hợp các model - AI cho phép gợi ý phân tích thông tin từ bá o cáo.",
    "cat": "enterprise"
  },
  {
    "id": 231,
    "name": "Du lịch thông minh - VNPT Smart Tourism",
    "desc": "Cổng Du lịch Thông minh là giải pháp công nghệ số toàn diện trong lĩnh vực du lịch, đóng vai trò nền tảng kết nối thông tin và trải nghiệm, nhằm quảng bá hình ảnh điểm đến hiện đại, đồng bộ và hấp dẫn",
    "dev": "VNPT - IT",
    "problem": "Hệ thống hỗ trợ du khách xuyên suốt hành trình khám phá - từ tìm hiểu, lập kế hoạch đến trải nghiệm và chia sẻ - qua đó nâng cao chất lượng trải nghiệm và gia tăng mức độ hài lòng của du khách thông qua ứng dụng các công nghệ",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Nhóm khách là những cá nhân sử dụng các dịch vụ do tỉnh cung cấp như: Đọc, tra cứu thông tin trên cổng; sử dụng các dịch vụ khác mà tỉnh cung cấp cho du khách; Nhóm doanh nghiệp: Sử dụng các chức năng mà tỉnh cung cấp để thực hiện quảng cáo thông tin doanh nghiệp và các sản phẩm mà doanh nghiệp cung cấp; Cơ quan quản lý du lịch: Thực hiện quản trị các thông tin trên cổng.",
    "cat": "government"
  },
  {
    "id": 232,
    "name": "Dự toán G8",
    "desc": "phục vụ công tác chuyên môn",
    "dev": "H07",
    "problem": "phục vụ công tác chuyên môn",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 233,
    "name": "E - Learning Platform: COMPA CLASS",
    "desc": "Nền tảng học trực tuyến phục vụ lĩnh vực giáo dục",
    "dev": "Công ty Cổ phần Compa",
    "problem": "Hỗ trợ số hóa, tối ưu hóa hoạt động dạy học, quản lý lớp học và triển khai học tập trực tuyến trong lĩnh vực giáo dục",
    "users": "Học sinh, sinh viên, giáo viên, cơ sở giáo dục và đơn vị đào tạo trong lĩnh vực giáo dục",
    "process": "Cơ sở giáo dục thiết lập lớp học, học liệu và người dùng; giáo viên tổ chức giảng dạy, giao bài và theo dõi kết quả học tập trên nền tảng",
    "cat": "education"
  },
  {
    "id": 234,
    "name": "Edoc",
    "desc": "Hệ thống quản lý văn bản và hồ sơ điện tử trong nhà trường để tạo lập, lưu trữ và trao đổi văn bản dưới môi trường số",
    "dev": "Tập đoàn viễn thông Viettel",
    "problem": "Tạo lập và lưu trữ toàn bộ hồ sơ toàn trường",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Cá nhân trình ký đưa lên hệ thống, ký xác nhận của các đối tượng liên quan xong ban hành đến các thành viên. Lãnh đạo kiểm tra, xác nhận hoàn thành nhiệm vụ",
    "cat": "education"
  },
  {
    "id": 235,
    "name": "EDR",
    "desc": "1. SIEM: NCS SIEM là hệ thống quản lý sự kiện và thông tin an ninh mạng thế hệ mới, thực hiện thu thập, lưu trữ và phân tích dữ liệu về các sự kiện xảy ra trong toàn bộ hạ tầng CNTT của tổ chức. Giải pháp ứng dụng trí tuệ nhân tạo (AI) và máy học (ML) để p hân tích hạ tầng, giúp phát hiện chính xác các mối đe dọa, hành vi bất thường và các cuộc tấn công có chủ đích (APT) theo thời gian thực; 2",
    "dev": "Công ty Cổ phần Công nghệ An ninh mạng Quốc Gia Việt Nam (NCS)",
    "problem": "1. SIEM: Giải pháp giải quyết bài toán thiếu tầm nhìn toàn diện về an ninh hạ tầng và sự quá tải dữ liệu log khiến các chuyên gia không thể xử lý thủ công. SIEM giúp loại bỏ các \"điểm mù\" bằng cách tổng hợp dữ liệu từ nhiều nguồn khác nhau, giảm thiểu tỷ l ệ cảnh báo sai (false positive) thông qua các kịch bản tương quan thông minh",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và bộ phận công nghệ thông tin",
    "process": "1. SIEM: Quy trình nghiệp vụ của SIEM bao gồm các giai đoạn tuần tự: Thu thập dữ liệu: Các Collector quét hạ tầng và thu thập log/sự kiện từ mọi thiết bị, ứng dụng và luồng mạng. Chuẩn hóa và Tích hợp: Dữ liệu thô được chuyển đổi về định dạng thống nhất (N ormalization), sau đó được làm giàu (Enrichment) bằng các thông tin tài sản và danh sách uy tín",
    "cat": "ai"
  },
  {
    "id": 236,
    "name": "Edu Digital",
    "desc": "Giải pháp số phục vụ lĩnh vực giáo dục",
    "dev": "Viện Phát triển Công nghệ và Giáo dục Edusoft",
    "problem": "Hỗ trợ số hóa, tối ưu hóa hoạt động quản lý, dạy và học trong lĩnh vực giáo dục",
    "users": "Học sinh, sinh viên, giáo viên, cơ sở giáo dục và đơn vị đào tạo trong lĩnh vực giáo dục",
    "process": "Người dùng khai báo thông tin, truy cập học liệu hoặc chức năng quản lý; hệ thống xử lý, lưu trữ và",
    "cat": "education"
  },
  {
    "id": 237,
    "name": "EduQuiz - Nền tảng thi trắc nghiệm online",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần Thương mại Dịch vụ và Công nghệ Ptcorp",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 238,
    "name": "EDUSOFT",
    "desc": "Quản lý học tập sinh viên, lịch giảng dạy giáo viên",
    "dev": "Học viện Công nghệ Bưu chính Viễn thông",
    "problem": "Quản lý học tập sinh viên, lịch giảng dạy giáo viên",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 239,
    "name": "EKYC",
    "desc": "Giải pháp nhận diện, so sánh khuôn mặt và trích xuất thông tin giấy tờ tùy thân, giúp phát hiện tức thời các trường hợp giả mạo hoặc không đạt yêu cầu",
    "dev": "VNPT",
    "problem": "Giải pháp định danh và xác thực điện tử",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Giải pháp định danh và xác thực điện tử",
    "cat": "education"
  },
  {
    "id": 240,
    "name": "Email 365",
    "desc": "Hệ thống email domain vnexpress. net dành cho CBNV của Báo VnExpress",
    "dev": "Báo VnExpress",
    "problem": "Hệ thống email domain vnexpress. net dành cho CBNV của Báo VnExpress",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 241,
    "name": "Email công vụ",
    "desc": "gửi, nhận thông tin",
    "dev": "Viện Khoa học xã hội vùng Nam Bộ",
    "problem": "gửi, nhận thông tin",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 242,
    "name": "EzCloudhotel - Hệ thống quản lý khách sạn trên nền điện toán đám mây",
    "desc": "ezCloudhotel là phần mềm quản lý khách sạn (PMS - Property Management System) được phát triển trên nền điện toán đám mây theo mô hình SaaS, phục vụ toàn bộ nghiệp vụ vận hành của cơ sở lưu trú: đặt phòng, nhận/trả phòng, buồng phòng, thu ngân, báo cáo quản trị, đồng bộ kênh bán online (OTA). Sản phẩm do doanh nghiệp Việt Nam 100% phát triển, đã được triển khai rộng rãi trên cả nước và mở rộng sang thị trường Đông Nam Á",
    "dev": "CÔNG TY TNHH CÔNG NGHỆ EZCLOUD TOÀN CẦU",
    "problem": "Trước đây, phần lớn cơ sở lưu trú vừa và nhỏ tại Việt Nam (khách sạn 1 - 3 sao, homestay, nhà nghỉ) quản lý vận hành thủ công bằng sổ sách hoặc Excel, dẫn đến: (i) thất thoát doanh thu do trùng phòng, sai giá; (ii) không đồng bộ được với các kênh OTA (Bookin g, Agoda, Expedia, Traveloka…); (iii) không có dữ liệu khách hàng để phân tích, chăm sóc; (iv) khó kê khai thuế điện tử, hóa đơn điện tử theo quy định.",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Các nghiệp vụ chính được số hóa: Quản lý đặt phòng (nhận booking từ nhiều kênh, tự động phân phòng); Nhận phòng (check - in), trả phòng (check - out), quản lý khách đang lưu trú; Quản lý buồng phòng, tình trạng dọn dẹp, bảo trì; Quản lý thu ngân, công nợ, xuất hóa đơn điện tử; Đồng bộ tồn kho phòng và giá bán với các kênh OTA theo thời gian thực; Khai báo tạm trú trực tuyến với Cục Quản lý Xuất nhập cảnh - Bộ Công an.",
    "cat": "education"
  },
  {
    "id": 243,
    "name": "EZCLOUDHOTEL - Phần mềm quản lý khách sạn vừa và nhỏ",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực hoạt động viễn thông; lập trình máy tính, tư vấn, cơ sở hạ tầng máy tính và các dịch vụ thông tin khác",
    "dev": "Công ty TNHH Công nghệ ezCloud Toàn Cầu",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực hoạt động viễn thông; lập trình máy tính, tư vấn, cơ sở hạ tầng máy tính và các dịch vụ thông tin khác",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "smartcity"
  },
  {
    "id": 244,
    "name": "EzCrs - Hệ thống đặt phòng tập trung cho khách sạn/chuỗi khách sạn",
    "desc": "ezCrs là hệ thống đặt phòng tập trung (Centralized Reservation System - CRS) do Công ty TNHH Công nghệ ezCloud Toàn cầu phát triển, giúp khách sạn và chuỗi khách sạn quản lý toàn bộ thông",
    "dev": "CÔNG TY TNHH CÔNG NGHỆ EZCLOUD TOÀN CẦU",
    "problem": "Các khách sạn và chuỗi khách sạn tại Việt Nam, đặc biệt các chuỗi khi mở rộng quy mô, gặp bài toán phân phối và quản lý đặt phòng phức tạp mà một phần mềm quản lý đơn lẻ không đáp ứng được: (i)",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Các nghiệp vụ chính được số hóa: - Quản lý và đồng bộ hóa đặt phòng: đồng bộ ngay lập tức toàn bộ đặt phòng từ tất cả các kênh bán (website, OTA, GDS, mobile, call center, đại lý) về một hệ thống duy nhất -",
    "cat": "education"
  },
  {
    "id": 245,
    "name": "EzFolio - Hệ thống quản lý khách sạn chuyên sâu cho phân khúc cao cấp và chuỗi khách sạn",
    "desc": "ezFolio là phần mềm quản lý khách sạn (PMS - Property Management System) chuyên biệt cho phân khúc khách sạn 4 - 5 sao, khu nghỉ dưỡng và chuỗi khách sạn đa cơ sở. Sản phẩm cung cấp đầy đủ các module chuyên sâu: quản lý doanh thu (Revenue Management), quản l ý chuỗi đa cơ sở (Multi - Property), tích hợp nhà hàng - bar - spa - hội nghị (F&B, Spa, MICE), báo cáo quản trị đa chiều",
    "dev": "CÔNG TY TNHH CÔNG NGHỆ EZCLOUD TOÀN CẦU",
    "problem": "Các khách sạn 4 - 5 sao, khu nghỉ dưỡng và chuỗi khách sạn tại Việt Nam gặp bài toán vận hành phức tạp mà các PMS phổ thông không đáp ứng được: (i) vận hành đồng thời 100 - 1000+ phòng với nhiều hạng phòng, nhiều loại giá, nhiều phân khúc khách; (ii) quản lý t ập trung chuỗi 5 - 50 cơ sở ở nhiều tỉnh/thành; (iii) tích hợp chặt chẽ với nhiều dịch vụ bổ trợ (nhà hàng, bar, spa, hội nghị, sân golf, tour).",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Các module và nghiệp vụ chuyên sâu được số hóa: - Front Office: đặt phòng (reservation), check - in/check - out, quản lý phòng, quản lý khách VIP, nhóm khách đoàn - Revenue Management: định giá động theo công suất/mùa vụ, dự báo công suất, phân tích đối thủ, t ối ưu doanh thu trên phòng khả dụng (RevPAR) - Multi - Property: quản lý tập trung chuỗi nhiều cơ sở, đồng bộ danh mục, báo cáo hợp nhất",
    "cat": "education"
  },
  {
    "id": 246,
    "name": "F - CIM - Phần mềm quản lý toàn trình quá trình sản xuất tại nhà máy",
    "desc": "f - CIM - Phần mềm quản lý toàn trình quá trình sản xuất tại nhà máy",
    "dev": "Công ty Cổ phần Công Nghệ Cao Và Dịch Vụ Phần Mềm Facenet",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực công Thương; Giáo dục và Đào tạo",
    "users": "Doanh nghiệp sản xuất, nhà máy, bộ phận vận hành, kỹ thuật, quản lý chất lượng và lãnh đạo doanh nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 247,
    "name": "FiinScore+",
    "desc": "Chấm điểm các doanh nghiệp và SME Việt Nam,",
    "dev": "FiinGroup Đơn vị cung cấp thông",
    "problem": "Nhu cầu đánh giá đối tác, khách hàng, đơn vị vay là doanh nghiệp và SME",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng",
    "process": "Sẽ bổ sung sau",
    "cat": "enterprise"
  },
  {
    "id": 248,
    "name": "FLYER LMS - R: Giải pháp LMS tích hợp AI hỗ trợ đào tạo tiếng anh",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần Công nghệ Flyer",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "ai"
  },
  {
    "id": 249,
    "name": "FRM - Giải pháp quản lý Đầu tư Vùng nguyên liệu mía",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực nông nghiệp và Môi trường; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Thành Thành Công - Biên Hòa",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực nông nghiệp và Môi trường; Giáo dục và Đào tạo",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 250,
    "name": "Gen Alpha AI trong việc giảng dạy môn tiếng Anh",
    "desc": "Dự án Gen Alpha AI trong việc giảng dạy môn tiếng Anh",
    "dev": "Trường THCS & THPT Phạm Văn Đồng",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực khoa học và Công nghệ; Giáo dục và Đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "ai"
  },
  {
    "id": 251,
    "name": "Giám sát an ninh, an toàn thông tin - SOC",
    "desc": "Giám sát ATTT cho các hệ thống do Văn phòng Bộ triển khai",
    "dev": "V01",
    "problem": "Giám sát ATTT cho các hệ thống do Văn phòng Bộ triển khai",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và bộ phận công nghệ thông tin",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "security"
  },
  {
    "id": 252,
    "name": "Giải pháp AISTEM+ - Tích hợp chương trình AI và STEM kiến tạo công dân toàn cầu",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần Robot Công Nghệ Cao Steam Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "ai"
  },
  {
    "id": 253,
    "name": "Giải pháp bảo mật tích hợp Cloud WAF & Anti - DDoS - VNIS",
    "desc": "Giải pháp bảo mật tích hợp Cloud WAF & Anti - DDoS - VNIS",
    "dev": "Công ty Cổ phần Vnetwork",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực hoạt động viễn thông; lập trình máy tính, tư vấn, cơ sở hạ tầng máy tính và các dịch vụ thông tin khác",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và bộ phận công nghệ thông tin",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "security"
  },
  {
    "id": 254,
    "name": "Giải pháp Camera AI đeo người - Bodyworn Camera",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và đào tạo",
    "dev": "Công ty Cổ phần MK Vision",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "ai"
  },
  {
    "id": 255,
    "name": "Giải pháp Camera giao thông",
    "desc": "Tự động nhận diện biển số xe cung cấp dịch vụ cho các trường hợp: Các hệ thống thu phí không dừng; Quản lý các bãi giữ ô tô, xe máy; Quản lý phương tiện ra vào kho hàng, trụ sở cơ quan.",
    "dev": "Trung tâm Dịch vụ dữ liệu và Trí tuệ nhân tạo Viettel",
    "problem": "Tự động nhận diện biển số xe cung cấp dịch vụ cho các trường hợp: Các hệ thống thu phí không dừng; Quản lý các bãi giữ ô tô, xe máy; Quản lý phương tiện ra vào kho hàng, trụ sở cơ quan.",
    "users": "Doanh nghiệp vận tải, logistics, đơn vị quản lý kho bãi/cảng, lái xe, nhân viên vận hành và khách hàng sử dụng dịch vụ",
    "process": "Đầu vào: Ảnh/video biển số xe; Đầu ra: Các ký tự nhận diện biển số xe cung cấp dịch vụ cho các trường hợp: Các hệ thống thu phí không dừng; Quản lý các bãi giữ ô tô, xe máy; Quản lý phương tiện ra vào kho hàng, trụ sở cơ quan.",
    "cat": "education"
  },
  {
    "id": 256,
    "name": "Giải pháp chuyển đổi số giáo dục ứng dụng AI",
    "desc": "Giải pháp Giáo dục Đào tạo Công nghệ và Ứng dụng AI chuyển đổi số các đơn vị Giáo dục và Doanh nghiệp",
    "dev": "Công ty Cổ phần Trường học Công nghệ Mindx",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "ai"
  },
  {
    "id": 257,
    "name": "Giải pháp chuyển đổi số toàn diện cho trường học",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần Zodiac Clarity",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "education"
  },
  {
    "id": 258,
    "name": "Giải pháp CMC Warehouse Management",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Tập đoàn Công nghệ CMC",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 259,
    "name": "Giải pháp công nghệ toàn diện cho trường học thông minh",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty CP Dịch vụ và Giải pháp công nghệ giáo dục PHX",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 260,
    "name": "Giải pháp công nghệ đại học số",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty CP Dịch Vụ Và Giải Pháp Công Nghệ Giáo Dục PHX",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 261,
    "name": "Giải pháp giáo dục STEAM qua Hệ thống DigiSTEM",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần Giáo Dục KDI",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 262,
    "name": "Giải pháp Giáo dục STEM qua không gian sáng chế và giải pháp học liệu STEM số (DigiSTEM)",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần Giáo dục KDI",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 263,
    "name": "Giải pháp Giáo dục thông minh Promethean",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty TNHH Sản xuất và Dịch vụ CMC",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 264,
    "name": "Giải pháp Giáo dục Trí tuệ nhân tạo (AI) và Công nghệ Robotics - STEM AI LAB",
    "desc": "Giải pháp \"Giáo dục Trí tuệ nhân tạo (AI) và Công nghệ Robotics - STEM AI LAB",
    "dev": "Công ty cổ phần Công nghệ Giáo dục Learn To Leap",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "ai"
  },
  {
    "id": 265,
    "name": "Giải pháp hệ thống nền tảng khuyến mại dịch vụ số tại MobiFone",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực tài chính; Công Thương",
    "dev": "Tổng Công ty Viễn thông Mobifone",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tài chính; Công Thương",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 266,
    "name": "Giải pháp hỗ trợ người dân sử dụng dịch vụ công trực tuyến và VNeID tại cấp xã",
    "desc": "Giải pháp hỗ trợ người dân sử dụng dịch vụ công trực tuyến và VNeID tại cấp xã nhằm nâng cao khả năng tiếp cận, sử dụng các nền tảng số thiết yếu của người dân. Thông qua hoạt động hướng dẫn trực tiếp của Tổ công nghệ số cộng đồng theo phương châm \"cầm tay chỉ việc\", người dân được hỗ trợ đăng ký, kích hoạt và sử dụng tài khoản VNeID; thực hiện nộp hồ sơ, tra cứu kết quả thủ tục",
    "dev": "UBND xã Cát Thành (chủ trì), phối hợp các đơn vị liên quan",
    "problem": "Giải pháp \"Hỗ trợ người dân sử dụng dịch vụ công trực tuyến và VNeID tại cấp xã\" được xây dựng nhằm giải quyết một số khó khăn, vướng mắc phổ biến tại cơ sở hiện nay, cụ thể: - Người dân, đặc biệt là người cao tuổi, lao động phổ thông còn hạn chế về kỹ năn g số, chưa quen với việc sử dụng điện thoại thông minh, ứng dụng VNeID và dịch vụ công trực tuyến. - Tỷ lệ hồ sơ thực hiện trực tuyến tuy có",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Bước 1: Tiếp cận và tuyên truyền - Tổ công nghệ số cộng đồng và cán bộ xã tổ chức tuyên truyền trực tiếp tại thôn hoặc qua các kênh truyền thông (loa truyền thanh, Zalo, Facebook…) để hướng dẫn người dân về lợi ích của dịch vụ công trực tuyến và ứng dụng V NeID",
    "cat": "government"
  },
  {
    "id": 267,
    "name": "Giải pháp học tập kết hợp OMO",
    "desc": "Giải pháp học tập kết hợp OMO (online - Merge - offline)",
    "dev": "Công ty TNHH Eeo Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 268,
    "name": "Giải pháp KIDSEnglish",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Đầu tư Phát triển và Chuyển giao Công nghệ Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 269,
    "name": "Giải pháp kiểm duyệt nội dung",
    "desc": "Dịch vụ kiểm duyệt tự động nội dung Video dựa trên việc phân tích Hình ảnh/Âm thanh của Video bằng các thuật toán \"học máy\" (machine learning). Hỗ trợ khách hàng thực hiện kiểm tra video có các nội dung vi phạm: Vi phạm ngôn từ chính trị, ngôn từ nhạy cảm, hình ảnh chính trị, hình ảnh nhạy cảm, hình ảnh đồ cấm quảng cáo, hình ảnh ảnh bạo lực, hình ảnh lãnh đạo cấp cao, hình ảnh quân đội chế độ Việt Nam Cộng Hòa, hình ảnh tôn giáo nhạy cảm, hình",
    "dev": "Trung tâm Dịch vụ dữ liệu và Trí tuệ nhân tạo Viettel",
    "problem": "Tự động hóa việc kiểm duyệt nội dung để giảm thiểu công việc của quản trị viên nội dung, gia tăng trải nghiệm người dùng; Nội dung lành mạnh được phát hành sớm nhất có thể và đồng thời giúp ngăn chặn kịp thời nội dung xấu theo các quy định hiện hành của ph áp luật Việt Nam",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Đầu vào: Video cần kiểm duyệt; Đầu ra: Phân loại video có các nội dung vi phạm: Vi phạm ngôn từ chính trị, ngôn từ nhạy cảm, hình ảnh chính trị, hình ảnh nhạy cảm, hình ảnh đồ cấm quảng cáo, hình ảnh ảnh bạo lực, hình ảnh lãnh đạo cấp cao, hình ảnh quân độ i chế độ Việt Nam Cộng Hòa, hình ảnh tôn giáo nhạy cảm, hình ảnh xâm hại trẻ em hay không?",
    "cat": "ai"
  },
  {
    "id": 270,
    "name": "Giải pháp Language Hub",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Đầu tư Phát triển và Chuyển giao Công nghệ Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 271,
    "name": "Giải pháp lớp học thông minh",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần Thiết bị và Khoa học Kỹ thuật Đại Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 272,
    "name": "Giải pháp nhà máy thông minh 3S Ifactory",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Công nghệ ITG",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "users": "Doanh nghiệp sản xuất, nhà máy, bộ phận vận hành, kỹ thuật, quản lý chất lượng và lãnh đạo doanh nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 273,
    "name": "Giải pháp phát hiện và ứng cứu sự cố điểm cuối - VNPT Smart IR",
    "desc": "Giải pháp VNPT Smart IR là sự kết hợp giữa phần mềm Anti Virus truyền thống và giải pháp EDR (Endpoint Detection & Response) ra đời nhằm giải quyết các vấn đề trên, một giải pháp toàn diện nhằm phát hiện các mối đe dọa bảo mật cũng như các loại mã độc và c ung cấp các phương thức hiệu quả để nhanh chóng ứng phó, xử lý các mối đe dọa, sự cố",
    "dev": "VNPT - IT",
    "problem": "Phát hiện những bất thường trong mạng; Nhanh chóng cô lập, xử lý sự cố; Hỗ trợ quá trình điều tra truy vết; Quản lý chính sách, phần mềm bản quyền.",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Phát hiện bất thường trong mạng; Xử lý sự cố; Điều tra truy vết.",
    "cat": "security"
  },
  {
    "id": 274,
    "name": "Giải pháp phần mềm quản lý dân cư 4. 0 - DC4. 0",
    "desc": "DC 4. 0 là nền tảng phần mềm quản lý dân cư cấp phường/xã, được xây dựng theo mô hình chuyển đổi số hành chính cấp cơ sở. Hệ thống số hóa toàn bộ dữ liệu hộ khẩu, nhân khẩu, hộ nghèo, hộ cận nghèo và thông tin liên quan tại địa phương; đồng thời cung cấp ứ ng dụng di động cho người dân tra cứu thông tin, nhận thông báo và phản ánh kiến nghị trực tuyến",
    "dev": "VNPT TSC",
    "problem": "Dữ liệu dân cư cấp phường/xã bị phân tán, lưu trên giấy tờ hoặc bảng tính Excel rời rạc, khó tra cứu và báo cáo. - Không có công cụ thống kê nhanh: số hộ nghèo, người trong độ tuổi lao động, đối tượng chính sách - mỗi báo cáo tốn hàng ngày công tổng hợp th ủ công. - Khu phố/tổ dân phố không có kênh thông báo chính thức đến người dân; thông tin truyền đạt qua miệng hoặc tờ rơi dễ thất lạc",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Quy trình chính: - Bước 1 - Khởi tạo: Nhập dữ liệu cư dân ban đầu (từ sổ hộ khẩu giấy, file Excel) qua công cụ import chuẩn hóa. Validate, kiểm tra trùng lặp, loại bỏ sai số. - Bước 2 - Vận hành thường xuyên: Cán bộ/tổ trưởng cập nhật phát sinh: chuyển đi, chuyển đến, sinh, tử, thay đổi nhân khẩu. Hệ thống ghi log thay đổi, lưu vết audit",
    "cat": "government"
  },
  {
    "id": 275,
    "name": "Giải pháp Phòng học ngoại ngữ thông minh",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần Giải Pháp Thiết Bị Sao Mai",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 276,
    "name": "Giải pháp Phòng học thông minh",
    "desc": "Xác định và đề xuất cấp độ an toàn hệ thống thông tin (theo quy định hiện hành) cho các hệ thống thông tin đang vận hành tại xã/phường, bệnh viện, trường học Hoàn thiện bộ hồ sơ đề xuất cấp độ làm cơ sở phê duyệt, triển khai biện pháp bảo đảm ATTT và phục vụ thanh/kiểm tra",
    "dev": "Mobi fone, VNPT",
    "problem": "Hiện nay, cấp xã/phường còn thiếu đồng bộ trong chuyển đổi số, hệ thống CNTT chưa được phân cấp an toàn, tiềm ẩn rủi ro bảo mật và khó khăn trong quản lý, vận hành; Hoạt động giáo dục, thông tin tuyên truyền và cung cấp dịch vụ công còn hạn chế về ứng dụng công nghệ , thiếu tính tương tác và kịp",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Bước 1. Khảo sát - đánh giá hiện trạng Rà soát hạ tầng CNTT, nhu cầu sử dụng tại xã/phường (giáo dục, truyền thanh, an ninh), xác định phạm vi hệ thống và mức độ yêu cầu an toàn thông tin. Bước 2. Xây dựng hồ sơ và phê duyệt Lập hồ sơ đề xuất cấp độ hệ thố ng thông tin, phương án triển khai các giải pháp",
    "cat": "healthcare"
  },
  {
    "id": 277,
    "name": "Giải pháp Phòng học Thông minh SIIM EDU 4. 0",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực chuyển đổi số",
    "dev": "Công ty Cổ phần Đầu tư & Thương mại Đại Phát",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực chuyển đổi số",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 278,
    "name": "Giải pháp phòng học thông minh SmartClass",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần Giải pháp Thiết bị Sao Mai",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 279,
    "name": "Giải pháp phòng học thông minh đa năng",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần đầu tư Công nghệ Hoàng Minh",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 280,
    "name": "Giải pháp quản lý giải thi đấu và đội thi đấu MYLEAGUE",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Hoạt động viễn thông; lập trình máy tính, tư vấn, cơ sở hạ tầng máy tính và các dịch vụ thông tin khác.",
    "dev": "Công ty Cổ phần MyLeague",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Hoạt động viễn thông; lập trình máy tính, tư vấn, cơ sở hạ tầng máy tính và các dịch vụ thông tin khác.",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 281,
    "name": "Giải pháp quản lý ra/vào tòa nhà",
    "desc": "Là hệ thống quản lý vào ra và chấm công sử dụng AI nhận diện khuôn mặt để xác định danh tính và ghi nhận thời gian ra, vào của người lao động",
    "dev": "Trung tâm Dịch vụ dữ liệu và Trí tuệ nhân tạo Viettel",
    "problem": "Quản lý vào ra và chấm công sử dụng AI nhận diện khuôn mặt để xác định danh tính và ghi nhận thời gian ra, vào của người lao động",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Đầu vào: Luồng video từ camera; Đầu ra: Bản ghi thời gian (log), cảnh báo an ninh, báo cáo nhân sự",
    "cat": "ai"
  },
  {
    "id": 282,
    "name": "Giải pháp Quản lý và Vận hành Trường học thông minh LittleLives",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty TNHH Littlelives Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 283,
    "name": "Giải pháp quản lý đào tạo VnResource EBM Pro",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần Tài Nguyên Tri Thức Việt Năng",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 284,
    "name": "Giải pháp quản trị thẻ doanh nghiệp tích hợp toàn diện trên nền tảng số BIZ MBBank",
    "desc": "MB đã phát triển giải pháp quản trị chi tiêu doanh nghiệp toàn diện thông qua thẻ doanh nghiệp được tích hợp trực tiếp trên nền tảng BIZ MBBank. Quản lý toàn diện: - Phát hành thẻ cho nhân sự - Thiết lập hạn mức chi tiêu",
    "dev": "MBBank",
    "problem": "Giao dịch doanh nghiệp phát sinh phân tán, thiếu tập trung, khó kiểm soát; Tổng hợp chi phí lẻ tẻ, nhỏ của doanh nghiệp còn thủ công; Chưa có phương án tín dụng dự phòng, tiết kiệm chi phí vốn.",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Khách hàng đăng nhập Biz MBBank \u0000 Truy cập module \"phát hành thẻ online\" \u0000 Hệ thống kiểm tra thông tin khách hàng có nằm trong danh sách hạn chế không, có phải chủ doanh nghiệp không \u0000 Ký CA Cloud \u0000 Thực hiện mở thẻ online",
    "cat": "enterprise"
  },
  {
    "id": 285,
    "name": "Giải pháp Quản trị toàn diện doanh nghiệp ERP Fast Business Online",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực sản phẩm, giải pháp dùng chung",
    "dev": "Công ty Cổ phần Phần Mềm Quản Lý Doanh Nghiệp Fast",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực sản phẩm, giải pháp dùng chung",
    "users": "Doanh nghiệp, lãnh đạo quản lý, bộ phận tài chính - kế toán, nhân sự, kinh doanh và vận hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 286,
    "name": "Giải pháp S. Touch - Trạm sạc xe điện",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực chuyển đổi số",
    "dev": "Công ty Cổ phần Đầu Tư Kỹ Thuật Và Thương Mại Thành Long",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực chuyển đổi số",
    "users": "Doanh nghiệp vận tải, logistics, đơn vị quản lý kho bãi/cảng, lái xe, nhân viên vận hành và khách hàng sử dụng dịch vụ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 287,
    "name": "Giải pháp sản phẩm công nghệ số dành cho học sinh các cấp",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần Trường học Công nghệ Mindx",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 288,
    "name": "Giải pháp Smartedu 5. 0",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực chuyển đổi số",
    "dev": "Công ty Cổ phần VCCorp",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực chuyển đổi số",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 289,
    "name": "Giải pháp Smartos - One - stop Platform for Rental Real Estate Industry",
    "desc": "Giải pháp Smartos - One - stop Platform for Rental Real Estate Industry",
    "dev": "Công ty Cổ phần Smartos",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 290,
    "name": "Giải pháp số hóa 3D các điểm du lịch",
    "desc": "Giải pháp Số hóa 3D các điểm du lịch: Hệ thống bản đồ số du lịch số hóa 3D toàn bộ tài nguyên du lịch, định vị trên nền bản đồ số. Layer hóa từng lớp, phân loại điểm đến, loại hình du lịch. Tích hợp chỉ đường, hướng dẫn du lịch",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Số hóa 3D toàn bộ tài nguyên du lịch trên bản đồ số, phân loại điểm đến và tích hợp chỉ đường, hướng dẫn tham quan",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Giải pháp Số hóa 3D các điểm du lịch: Hệ thống bản đồ số du lịch số hóa 3D toàn bộ tài nguyên du lịch, định vị trên nền bản đồ số. Layer hóa từng lớp, phân loại điểm đến, loại hình du lịch. Tích hợp chỉ đường, hướng dẫn du lịch",
    "cat": "smartcity"
  },
  {
    "id": 291,
    "name": "Giải pháp số hóa quy trình nghiệp vụ tín dụng HPT SAALEM",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực ngân hàng; Hoạt động tài chính, ngân hàng và bảo hiểm",
    "dev": "Công ty CP Dịch vụ Công nghệ tin học HPT",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực ngân hàng; Hoạt động tài chính, ngân hàng và bảo hiểm",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 292,
    "name": "Giải pháp số hóa và quản lý quy trình phê duyệt tín dụng vượt thẩm quyền",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực ngân hàng; Hoạt động tài chính, ngân hàng và bảo hiểm",
    "dev": "Ngân Hàng Nông Nghiệp Và Phát Triển Nông Thôn Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực ngân hàng; Hoạt động tài chính, ngân hàng và bảo hiểm",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 293,
    "name": "Giải pháp Tasken eOffice - Văn Phòng Điện Tử",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực sản phẩm, giải pháp dùng chung",
    "dev": "Công ty TNHH Opus Solution",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực sản phẩm, giải pháp dùng chung",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 294,
    "name": "Giải pháp thanh toán mobiPOS",
    "desc": "Dịch vụ Giải pháp thanh toán mobiPOS là thiết bị/giải pháp giúp các merchant (cửa hàng, doanh nghiệp), các cơ quan hành chính, đơn vị cung cấp dịch vụ công và điểm thu phí, lệ phí, xử phạt vi phạm hành chính chấp nhận nhiều phương thức thanh toán không dùn g tiền mặt như QR, thẻ ghi nợ, thẻ tín dụng, Apple Pay, Samsung Pay",
    "dev": "Trung tâm dịch vụ số MobiFone",
    "problem": "Giải pháp giải quyết nhu cầu chấp nhận thanh toán không tiền mặt và số hóa hoạt động thu - chi tại điểm bán và dịch vụ công, giúp các đơn vị kinh doanh và cơ quan nhà nước triển khai thu phí, bán hàng, thanh toán đa phương thức một cách thuận tiện, minh bạ ch và dễ quản lý",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Thanh toán (Thẻ Chip, QR, Contactless, Apple Pay, Samsung Pay…); Loa phát âm báo giao dịch (QR Sound)",
    "cat": "government"
  },
  {
    "id": 295,
    "name": "Giải pháp thanh toán số, hóa đơn điện tử",
    "desc": "Triển khai các phương thức thanh toán không dùng tiền mặt: QR Code, ví điện tử, mobile banking",
    "dev": "Doanh nghiệp, hộ kinh doanh",
    "problem": "Giảm chi phí giao dịch, minh bạch dòng tiền, thúc đẩy kinh tế số và tiêu dùng số",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Minh bạch tài chính, giảm gian lận thuế, tiết kiệm chi phí in ấn và lưu trữ",
    "cat": "finance"
  },
  {
    "id": 296,
    "name": "Giải pháp thanh toán Thẻ/Vé cho giao thông thông minh",
    "desc": "Nghiên cứu và xây dựng giải pháp hệ thống thu soát vé tự động (AFC) thông qua đề tài nghiên cứu khoa học theo mô hình open - loop, chấp nhận thanh toán bằng thẻ ngân hàng EMV không tiếp xúc bên cạnh đó hỗ trợ cả QR - code. Đảm bảo giao dịch nhanh (<500 ms), tỷ lệ thành công ≥ 95%. Hệ thống hoạt động ổn định, tự đồng bộ khi mất kết nối. Hỗ trợ đa dạng loại vé (lượt, chặng, tích lũy), điều chỉnh linh hoạt theo khung giờ. Tra cứu dễ dàng qua ứng dụng",
    "dev": "VNPT Media",
    "problem": "Phụ thuộc tiền mặt do phần lớn giao thông công cộng, du lịch, bãi đỗ xe vẫn thu tiền mặt gây ra tình trạng chậm, thiếu minh bạch trong vận hành; Chưa tận dụng hạ tầng thanh toán sẵn có như thẻ ngân hàng đã phổ biến nhưng chưa được sử dụng trực tiếp để đi lại, gây bất tiện cho người dân và khách du lịch quốc tế - vốn là tập khách đã có thói quen sử dụng thẻ",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "1. Chạm thẻ/quét mã (Tap & Go) - Người dùng sử dụng thẻ ngân hàng EMV/QR/Mobile App để thanh toán khi lên/xuống phương tiện hoặc vào điểm dịch vụ. 2. Xác thực & ghi nhận giao dịch - Thiết bị (validator/gate) kiểm tra hợp lệ - > gửi dữ liệu về hệ thống AFC đ ể xử lý realtime",
    "cat": "finance"
  },
  {
    "id": 297,
    "name": "Giải pháp thực tại ảo hoặc tăng cường hỗ trợ giảng dạy khoa học thiên văn trong đào tạo STEM",
    "desc": "Xây dựng giải pháp thực tại ảo AR hỗ trợ giảng dạy khoa học thiên văn trong đào tạo STEM",
    "dev": "Khoa Khoa học Liên ngành, Trường Đại học Khoa học tự nhiên, Đại học Quốc gia Hồ Chí Minh",
    "problem": "Áp dụng hỗ trợ giảng dạy trong trường lớp cũng như dùng để minh hoạ trong các hoạt động của workshop hay demo liên quan",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Hiển thị mô hình 3D các hành tinh và hệ mặt trời bằng công nghệ AR; Mô phỏng chuyển động quỹ đạo, lực hấp dẫn giữa các thiên thể; Cho phép nhiều người dùng cùng tương tác trong một không gian học tập; Tổ chức trò chơi hóa",
    "cat": "education"
  },
  {
    "id": 298,
    "name": "Giải pháp tích hợp chương trình đào tạo vào trong phòng Lab STEM",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty cổ phần Robot Công nghệ cao Steam Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 299,
    "name": "Giải pháp toàn diện quản lý trường mầm non SanAn kids",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần Sa Edutech",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 300,
    "name": "Giải pháp Tổng đài ảo",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Mắt Bão One",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "users": "Doanh nghiệp, trung tâm chăm sóc khách hàng, bộ phận kinh doanh, bộ phận hỗ trợ và khách hàng sử dụng dịch vụ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 301,
    "name": "Giải pháp Tổng đài số VNPT ICC",
    "desc": "VNPT ICC là hệ thống tổng đài chăm sóc khách hàng đa kênh trên nền tảng IP, giúp agents hỗ trợ khách hàng qua tổng đài, email, SMS, voice, livechat và các ứng dụng như Facebook, Zalo, Telegram… trên một giao diện duy nhất. Hệ thống",
    "dev": "Trung tâm Công nghệ và Giải pháp - Tổng công ty Truyền thông (VNPT - Media)",
    "problem": "Sản phẩm tổng đài VNPT ICC giải quyết trực tiếp các vấn đề vận hành CSKH mà nhiều cơ quan/đơn vị đang gặp phải: - Tình trạng phân mảnh kênh giao tiếp (điện thoại, email, web, mạng xã hội) khiến thông tin bị rời rạc, khó theo dõi lịch sử tương tác. - Quá tả i tổng",
    "users": "Doanh nghiệp, trung tâm chăm sóc khách hàng, bộ phận kinh doanh, bộ phận hỗ trợ và khách hàng sử dụng dịch vụ",
    "process": "Tích hợp AI Callbot, Chatbot chăm sóc khách hàng tự động - Chăm sóc khách hàng đa kênh: tích hợp hỗ trợ đa kênh: live chat, telegram, facebook, zalo, Instagram trên cùng một giao diện. - Các chức năng thoại: tổng đài chăm sóc, hỗ trợ khách hàng với",
    "cat": "ai"
  },
  {
    "id": 302,
    "name": "Giải pháp tường lửa thông minh đảm bảo ATTT VNPT S - GATE",
    "desc": "Giải pháp VNPT S - Gate được triển khai dạng thiết bị On - premise được thiết kế theo mô hình bảo mật nhiều lớp, bao gồm các thành phần chính: lớp bảo vệ kết nối mạng, tường lửa UTM, vùng DMZ (Demilitarized Zone), và lớp bảo vệ mạng nội bộ (VLAN). Mỗi thành ph ần đóng vai trò quan trọng trong việc kiểm soát truy cập, bảo vệ dữ liệu, ngăn chặn tấn công và đảm bảo tuân thủ chính sách an toàn thông tin",
    "dev": "VNPT - IT",
    "problem": "Đảm bảo an toàn thông tin (ATTT) cho hệ thống cấp độ 2; Kiểm soát ứng dụng để ngăn chặn nội dung xấu, độc",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Kiểm soát truy cập, bảo vệ dữ liệu, ngăn chặn tấn công và đảm bảo tuân thủ chính sách an toàn thông tin",
    "cat": "security"
  },
  {
    "id": 303,
    "name": "Giải pháp tưởng lửa Cloud ứng dụng web",
    "desc": "Dịch vụ VNPT Cloud Web Application Firewall (VNPT Cloud WAF) theo mô hình Reverse Proxy. VNPT Cloud WAF giám sát tất cả các lưu lượng đi đến ứng dụng web nhằm đảm bảo an toàn cho các",
    "dev": "VNPT - IT",
    "problem": "Bảo Vệ Hiệu Suất Ứng Dụng; Ngăn Chặn Các Mối Đe Dọa An Ninh; Phát Hiện và Ngăn Chặn Các Hành Vi Xâm Nhập; Bảo Vệ Dữ Liệu Nhạy Cảm.",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và bộ phận công nghệ thông tin",
    "process": "Bảo Vệ Hiệu Suất Ứng Dụng; Ngăn Chặn Các Mối Đe Dọa An Ninh; Phát Hiện và Ngăn Chặn Các Hành Vi Xâm Nhập; Bảo Vệ Dữ Liệu Nhạy Cảm.",
    "cat": "security"
  },
  {
    "id": 304,
    "name": "Giải pháp xác thực xuất xứ TRUEORIGIN",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực nông nghiệp và Môi trường; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Onyx Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực nông nghiệp và Môi trường; Giáo dục và Đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 305,
    "name": "Giải pháp Zalopay POD (Payment on Delivery)",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Zion",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 306,
    "name": "Giải pháp Đào tạo Kết hợp Thông minh iBLS",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Trường Đại học Công nghệ Thông tin và Truyền Thông, Đại học Thái Nguyên",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 307,
    "name": "Giải quyết TTHC tại Trung tâm Dịch vụ công xã Vĩnh Bảo",
    "desc": "Giúp người dân giảm thời gian trong giải quyết TTCH: Giả pháp: Hướng dẫn nhiệt tình, giải thích ngắn gọn rõ ràng của thành viên trong Trung tâm; tạo điều kiện tốt nhất về CSVT để nhân dân thực hiện TTHC của mình",
    "dev": "Tung tâm Dịch vụ công xã Vĩnh Bảo",
    "problem": "Một bộ phận nhân dân chưa tiếp cận máy tính nên khi thực hiện còn lúng túng",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Tiếp nhận hồ sơ; Giải thích, hướng dẫn; Hướng dẫn xử lý Hồ sơ trên máy tính có kết nối liên thông; m Trả kết quả.",
    "cat": "government"
  },
  {
    "id": 308,
    "name": "GPU AI Cloud",
    "desc": "Cung cấp hạ tầng và nền tảng GPU H200 hiệu năng cao, phục vụ các tác vụ huấn luyện (training) và suy luận (inference) mô hình AI quy mô lớn cho khách hàng",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Cung cấp hạ tầng và nền tảng GPU H200 hiệu năng cao, phục vụ các tác vụ huấn luyện (training) và suy luận (inference) mô hình AI quy mô lớn cho khách hàng",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "GPU AI Cloud là dịch vụ cung cấp hạ tầng và nền tảng điện toán GPU hiệu năng cao, bao gồm các lớp từ hạ tầng đến nền tảng triển khai ứng dụng AI. Dịch vụ đáp ứng toàn bộ vòng đời phát triển AI, từ chuẩn bị dữ liệu, huấn luyện mô hình đến triển khai và vận hành ứng dụng AI trong thực tế",
    "cat": "ai"
  },
  {
    "id": 309,
    "name": "Gương điện tử AI ADAS UTOUR C3 Series",
    "desc": "Thiết bị hỗ trợ lái xe ứng dụng AI và công nghệ ADAS",
    "dev": "Công ty TNHH Thương Mại Và Xuất Nhập Khẩu Thiên Minh",
    "problem": "Hỗ trợ người lái xe quan sát, cảnh báo và nâng cao an toàn trong quá trình điều khiển phương tiện",
    "users": "Người lái xe, doanh nghiệp vận tải, đơn vị quản lý đội xe và người dùng có nhu cầu hỗ trợ lái xe an toàn",
    "process": "Thiết bị thu nhận dữ liệu từ quá trình vận hành phương tiện; hệ thống phân tích, cảnh báo và hỗ trợ người lái trong các tình huống giao thông",
    "cat": "ai"
  },
  {
    "id": 310,
    "name": "Hành chính công Cục Quản lý Dược",
    "desc": "Hệ thống dịch vụ công trực tuyến Cục Quản lý Dược được xây dựng, ứng dụng công nghệ thông tin vào các hoạt động quản lý, xử lý nghiệp vụ và tích hợp dịch vụ công trực tuyến cấp độ 4 cho nghiệp vụ của các phòng ban tại các cơ quan quản lý của ngành Dược nhằ m nâng cao chất lượng, hiệu quả trong hoạt động nội bộ và dịch vụ cung cấp cho các tổ chức và cá nhân khác; hỗ trợ đẩy mạnh cải",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Ứng dụng CNTT vào quy trình quản lý hành chính và cung cấp dịch vụ công trực tuyến cấp độ 4 của Cục Quản lý Dược",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Hệ thống dịch vụ công trực tuyến Cục Quản lý Dược được xây dựng, ứng dụng công nghệ thông tin vào các hoạt động quản lý, xử lý nghiệp vụ và tích hợp dịch vụ công trực tuyến cấp độ 4 cho nghiệp vụ của các phòng ban tại các cơ quan quản lý của ngành Dược nhằ m nâng cao chất lượng, hiệu quả trong hoạt động nội bộ và dịch vụ cung cấp cho các tổ chức và cá nhân khác; hỗ trợ đẩy mạnh cải",
    "cat": "healthcare"
  },
  {
    "id": 311,
    "name": "Hê thống Quản lý văn bản và chỉ đạo điều hành",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Cục Đăng kiểm Việt Nam",
    "dev": "Cục Đăng kiểm Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực sản phẩm, giải pháp dùng chung",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 312,
    "name": "Hề thống cơ sở dữ liệu chuyên ngành XTTM",
    "desc": "Cung cấp thông tin doanh nghiệp, phục vụ chuyên ngành XTTM",
    "dev": "Cục Xúc tiến thương mại",
    "problem": "Cung cấp thông tin doanh nghiệp, phục vụ chuyên ngành XTTM",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 313,
    "name": "Hệ sản xuất thông tin đa phương tiện NPS",
    "desc": "Quản lý việc sản xuất tin, ảnh của TTXVN",
    "dev": "Thông tấn xã Việt Nam",
    "problem": "Quản lý việc sản xuất tin, ảnh của TTXVN",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 314,
    "name": "Hệ sinh thái - LMS & Chứng chỉ CNTT",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty Cổ phần Công nghệ Sotatek Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 315,
    "name": "Hệ Sinh Thái Bản sao số (Digital Twin) Tương Tác Thông Minh 3D/360, tích hợp Trợ lý ảo AI",
    "desc": "Hệ sinh thái \"Bản sao số (Digital Twin) Tương Tác Thông Minh 3D/360 tích hợp Trợ lý ảo AI\" là giải pháp công nghệ cho phép người dùng có thể thực hiện việc tham quan từ xa đến bất cứ địa điểm nào",
    "dev": "CÔNG TY CỔ PHẦN GIẢI PHÁP CHUYÊN GIA STAR GLOBAL",
    "problem": "Hệ sinh thái \"Bản sao số (Digital Twin) Tương tác thông minh 3D/360 tích hợp Trợ lý ảo AI\" của Star Global được phát triển nhằm giải quyết một cách toàn diện các hạn chế cốt lõi của thế giới thực, đồng",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Để hiện thực hóa tầm nhìn biến thế giới thực thành Bản sao số (Digital Twin) tương tác, thông minh và chân thực nhất, Star Global đã thiết lập một quy trình chuyển đổi số toàn diện, hiện đại, đảm bảo mang lại",
    "cat": "ai"
  },
  {
    "id": 316,
    "name": "Hệ sinh thái Công nghệ - Tài chính Bất động sản",
    "desc": "Hệ sinh thái công nghệ hỗ trợ hoạt động tài chính và bất động sản",
    "dev": "Công ty Cổ phần Tập đoàn Meey Land",
    "problem": "Hỗ trợ số hóa, tối ưu hóa hoạt động trong lĩnh vực tài chính, bất động sản",
    "users": "Doanh nghiệp bất động sản, tổ chức tài chính, nhà đầu tư, khách hàng và đơn vị môi giới bất động sản",
    "process": "Người dùng cập nhật, tra cứu và khai thác dữ liệu; hệ thống hỗ trợ xử lý thông tin, kết nối giao dịch và quản lý hoạt động tài chính, bất động sản",
    "cat": "finance"
  },
  {
    "id": 317,
    "name": "Hệ sinh thái Công nghệ - Tài chính bất động sản phát triển bởi Meey Group",
    "desc": "Hệ sinh thái công nghệ hỗ trợ hoạt động tài chính và bất động sản",
    "dev": "Công ty Cổ phần Tập đoàn Meey Land",
    "problem": "Hỗ trợ số hóa, tối ưu hóa hoạt động trong lĩnh vực tài chính, bất động sản",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng cập nhật, tra cứu và khai thác dữ liệu; hệ thống hỗ trợ xử lý thông tin, kết nối giao dịch và quản lý hoạt động tài chính, bất động sản",
    "cat": "finance"
  },
  {
    "id": 318,
    "name": "Hệ Sinh Thái Công Nghệ Idea & startup",
    "desc": "Mạng Xã Hội Vdiarybook, Onechat, thương mại điện tử tiepthiso. org, phần mềm dòng lịch sử, phần mềm cứu hộ cứu nạn SOS, phần mềm thiết kế đồ họa Canvanex, phần mềm gia phả, phần mềm kỷ yếu số, vv",
    "dev": "Công ty cổ phần tập đoàn công nghệ Idea & startup",
    "problem": "Môi trường công nghệ. thông minh, bảo mật, an toàn, minh bạch",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Quán lý trên công nghệ Blockchain, thông minh, minh bạch và bảo mật",
    "cat": "enterprise"
  },
  {
    "id": 319,
    "name": "Hệ sinh thái giáo dục sớm KIDS UP",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo",
    "dev": "Công ty cổ phần Công nghệ Kids Up Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh,",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý,",
    "cat": "education"
  },
  {
    "id": 320,
    "name": "Hệ sinh thái giải pháp Chuyển đổi số Bản đồ số hóa tương tác thông minh 3D/360",
    "desc": "Hệ sinh thái giải pháp Chuyển đổi số \"Bản đồ số hóa tương tác thông minh 3D/360",
    "dev": "Công ty Cổ phần Giải Pháp Chuyên Gia Star Global",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực nông nghiệp và Môi trường; Giáo dục và Đào tạo",
    "users": "Doanh nghiệp vận tải, logistics, đơn vị quản lý kho bãi/cảng, lái xe, nhân viên vận hành và khách hàng sử dụng dịch vụ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "smartcity"
  },
  {
    "id": 321,
    "name": "Hệ sinh thái giải pháp Logistics Smartlog",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Giải Pháp Chuỗi Cung Ứng Smartlog",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tài chính; Giáo dục và Đào tạo",
    "users": "Doanh nghiệp vận tải, logistics, đơn vị quản lý kho bãi/cảng, lái xe, nhân viên vận hành và khách hàng sử dụng dịch vụ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 322,
    "name": "Hệ sinh thái KidsUP Pro",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực khoa học và Công nghệ; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Công nghệ Kids Up Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực khoa học và Công nghệ; Giáo dục và Đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 323,
    "name": "Hệ sinh thái số quản lý dự án đầu tư công PABMIS Ecosystem",
    "desc": "(a) PABMIS Ecosystem là gì? - PABMIS Ecosystem là nền tảng công nghệ số quản lý công tác quản lý dự án đầu tư sử dụng vốn ngân sách Nhà nước. PABMIS chuyển đổi số mọi hoạt động của dự án trên môi trường số từ giai đoạn chuẩn bị đầu tư, thực hiện đầu tư đến kết thúc đầu tư bao gồm các công tác: chỉ đạo điều hành; lập kế",
    "dev": "Công ty TNHH SmartBooks",
    "problem": "PABMIS là nền tảng công nghệ số chuyển đổi số mọi hoạt động của dự án đầu tư trên môi trường số từ giai đoạn chuẩn bị đầu tư, thực hiện đầu tư đến kết thúc đầu tư và được thiết kế để xử lý một loạt các \"điểm nghẽn\" đang tồn tại trong công tác quản lý dự án đầu tư công sử dụng vốn ngân sách Nhà nước, cụ thể: + Hệ thống CNTT rời rạc,",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "PABMIS Ecoystem gồm 12 phân hệ (modules) chính đáp ứng đầy đủ các nghiệp vụ về quản lý dự án đầu tư từ giai đoạn chuẩn bị dự án đến thực hiện dự án và kết thúc dự án, bao gồm: (1). Quản lý Kế hoạch vốn; (2). Quản lý Giải phóng mặt bằng; (3). Quản lý Tiến đ ộ dự án; (4). Quản lý Giám sát dự án; (5). Quản lý Kế toán dự án;",
    "cat": "education"
  },
  {
    "id": 324,
    "name": "Hệ sinh thái ứng dụng học tập OVI",
    "desc": "Hệ sinh thái ứng dụng học tập OVI Kids, OVI Teens, OVI IELTS và ứng dụng quản lý học tập OVI Parents",
    "dev": "Công ty Cổ phần Quốc tế Anh văn Hội Việt Mỹ",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 325,
    "name": "Hệ sinh thái đấu thầu",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực khoa học và Công nghệ; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần phát triển nguồn mở Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực khoa học và Công nghệ; Giáo dục và Đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 326,
    "name": "Hệ sinh thái đấu thầu",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực khoa học và Công nghệ; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Hệ sinh thái đấu thầu",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực khoa học và Công nghệ; Giáo dục và Đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 327,
    "name": "Hệ thống AOM/CSD",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Cục Công nghệ thống tin",
    "dev": "Cục Công nghệ thống tin",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực khoa học và Công nghệ",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 328,
    "name": "Hệ thống AVP (Tờ khai trị giá thấp) - hàng thương mại điện tử",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "enterprise"
  },
  {
    "id": 329,
    "name": "Hệ thống Bài giảng số iDIGI",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty cổ phần Giáo dục iSMART",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 330,
    "name": "Hệ thống bán vé xem phim",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Trung tâm Chiếu phim Quốc gia",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 331,
    "name": "Hệ thống báo cáo",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Vụ Dự báo, thống kê - Ổn định tiền tệ, tài chính",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 332,
    "name": "Hệ thống báo cáo chỉ tiêu Kinh tế xã hội",
    "desc": "Hệ thống giúp chuẩn hóa và đơn giản hóa các chế độ báo cáo, số hóa các biểu mẫu báo cáo đang được thực hiện tại đơn vị; Hệ thống hỗ trợ tự động tính toán dữ liệu theo các công thức được xây dựng trên biểu mẫu báo cáo; Hình thành kho dữ liệu thông tin, số l iệu báo cáo kinh tế, văn hóa, xã hội của địa phương, phục vụ sự chỉ đạo điều hành của lãnh đạo theo các",
    "dev": "Công ty Cổ phần Tin học Tân Dân",
    "problem": "Giúp giảm thời gian thực hiện báo cáo qua các tính năng tự động tổng hợp dữ liệu theo các kỳ báo cáo; Tăng tính năng chính xác của số liệu báo cáo bằng các kiểm tra về kiểu dữ liệu, kiểm tra về ràng buộc dữ liệu, hỗ trợ liên kết dữ liệu giữa các báo cáo",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Cán bộ nhập dữ liệu các chỉ tiêu cần báo cáo định kỳ, đột xuất gửi lãnh đạo phòng ban thẩm định sau đó gửi đến lãnh đạo đơn vị. Lãnh đạo đơn vị phê duyệt, dữ liệu sẽ được lưu trữ vào CSDL của đơn vị, sinh ra các biểu đồ dashboard phục vụ công tác chỉ đạo, điều hành của lãnh đạo và báo cáo, chia sẻ cho các đơn vị khác",
    "cat": "tourism"
  },
  {
    "id": 333,
    "name": "Hệ thống báo cáo chỉ đạo điều hành",
    "desc": "Phục vụ công việc",
    "dev": "Cục Thương mại điện tử và Kinh tế số",
    "problem": "Phục vụ công việc",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 334,
    "name": "Hệ thống báo cáo FATCA",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Cục Phòng, chống rửa tiền",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 335,
    "name": "Hệ thống báo cáo NHNN SG4",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "NHNN Khu vực 1",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 336,
    "name": "Hệ thống báo cáo thống kê tập trung",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Vụ Tín dụng các ngành kinh tế",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 337,
    "name": "Hệ thống báo cáo trực tuyến",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Cục Phát thanh, truyền hình và thông tin điện tử",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 338,
    "name": "Hệ thống báo cáo, điều hành tài chính Cục Viễn thông",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Cục Viễn thông",
    "dev": "Cục Viễn thông",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tài chính",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 339,
    "name": "Hệ thống Bản đồ số ngành Giáo dục",
    "desc": "Tích hợp thông tin quản lý, thông tin thống kê ngành Giáo dục trên bản đồ số",
    "dev": "Bộ Giáo dục và Đào tạo",
    "problem": "Tích hợp thông tin quản lý, thông tin thống kê ngành Giáo dục trên bản đồ số",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 340,
    "name": "Hệ thống Callbot",
    "desc": "Hệ thống tổng đài tự động",
    "dev": "Trung tâm Dịch vụ dữ liệu và Trí tuệ nhân tạo Viettel",
    "problem": "Tổng đài tự động gọi cho khách hàng; Đầu vào: Danh sách sđt và kịch bản gọi; Đầu ra: Hệ thống tổng đài tự động gọi điện đến người dùng theo kịch bản tương ứng.",
    "users": "Doanh nghiệp, trung tâm chăm sóc khách hàng, bộ phận kinh doanh, bộ phận hỗ trợ và khách hàng sử dụng dịch vụ",
    "process": "Đầu vào: Danh sách sđt và kịch bản gọi; Đầu ra: Hệ thống tổng đài tự động gọi điện đến người dùng theo kịch bản tương ứng",
    "cat": "enterprise"
  },
  {
    "id": 341,
    "name": "Hệ thống Camera AI an ninh trên địa bàn xã An Trường, thành phố Hải Phòng",
    "desc": "Hệ thống Camera AI an ninh được lắp đặt tại các điểm trọng yếu, nút giao thông quan trọng trên địa bàn, để đảm bảo an toàn giao thông, an ninh trật tự trên địa bàn xã An Trường với tổng giá trị dự án là 2, 4 tỷ đồng",
    "dev": "Mobifone Hải Phòng",
    "problem": "Lắp đặt hệ thống Camera AI an ninh trên địa bàn xã để đảm bảo an toàn giao thông, phục vụ an ninh trật tự, xử lý vi phạm hành chính trên địa bàn xã",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Trung tâm quản lý tại trụ sở công an xã. Công an xã sẽ quản lý và điều hành hệ thống. Khi có vụ việc xảy ra thì đồng chí công an quản lý sẽ báo cho các các đồng chí công an phục trách xuống thực hiện nhiệm vụ giải quyết vụ việc, một cách nhanh chóng và chí nh xác",
    "cat": "ai"
  },
  {
    "id": 342,
    "name": "Hệ thống các sản phẩm nông thôn thông minh",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực nông",
    "dev": "Công ty Cổ phần Công nghệ Neosol",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực nông",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "enterprise"
  },
  {
    "id": 343,
    "name": "Hệ thống cấp chứng chỉ nghiệp vụ chuyên môn về đấu thầu",
    "desc": "cấp chứng chỉ nghiệp vụ chuyên môn về đấu thầu",
    "dev": "Cục Quản lý đấu thầu",
    "problem": "cấp chứng chỉ nghiệp vụ chuyên môn về đấu thầu",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 344,
    "name": "Hệ thống cấp giấy tiếp nhận bản công bố hợp quy an toàn thực phẩm",
    "desc": "Hệ thống Dịch vụ Công Bố sản phẩm",
    "dev": "Cục An toàn thực phẩm",
    "problem": "Hệ thống Dịch vụ Công Bố sản phẩm",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 345,
    "name": "Hệ thống cấp mã số BHXH và quản lý BHYT hộ gia đình",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để quản lý mã số BHXH của toàn bộ người dân và hộ gia đình tham gia BHYT",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để quản lý mã số BHXH của toàn bộ người dân và hộ gia đình tham gia BHYT",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 346,
    "name": "Hệ thống cấp số đơn sở hữu công nghiệp",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực công Thương; Công nghiệp chế biến, chế tạo",
    "dev": "Cục Sở hữu trí tuệ",
    "problem": "Hệ thống cấp số đơn sở hữu công nghiệp",
    "users": "Doanh nghiệp sản xuất, nhà máy, bộ phận vận hành, kỹ thuật, quản lý chất lượng và lãnh đạo doanh nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 347,
    "name": "Hệ thống cảnh báo cháy rừng sớm (Smart Fire Alert)",
    "desc": "Hệ thống cảnh báo cháy rừng sớm (Smart Fire Alert) là giải pháp ứng dụng công nghệ số nhằm phát hiện, cảnh báo và hỗ trợ xử lý cháy rừng ngay từ giai đoạn ban đầu. Hệ thống tích hợp dữ liệu từ vệ",
    "dev": "các doanh nghiệp công nghệ thống tin, viễn thông và công ty giải pháp AI/IoT phát triển",
    "problem": "Giải pháp nhằm khắc phục tình trạng phát hiện cháy rừng chậm, thiếu thông tin kịp thời, khó dự báo nguy cơ cháy và hạn chế trong công tác chỉ huy, điều hành; từ đó giúp phát hiện sớm, cảnh báo nhanh và",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "thu thập dữ liệu → phân tích, phát hiện nguy cơ → cảnh báo sớm → xác minh hiện trường → chỉ huy xử lý → cập nhật, báo cáo",
    "cat": "enterprise"
  },
  {
    "id": 348,
    "name": "Hệ thống CBP",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Cục Công nghệ thống tin",
    "dev": "Cục Công nghệ thống tin",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực khoa học và Công nghệ",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin và quản trị hệ thống",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 349,
    "name": "Hệ thống CDP",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Cục Công nghệ thống tin",
    "dev": "Cục Công nghệ thống tin",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực khoa học và Công nghệ",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin và quản trị hệ thống",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 350,
    "name": "Hệ thống Chăm sóc khách hàng",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để cung cấp dịch vụ tổng đài hỗ trợ khách hàng (Call Center)",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để cung cấp dịch vụ tổng đài hỗ trợ khách hàng (Call Center)",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 351,
    "name": "Hệ thống chiếu sáng IoT Interact",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực nông nghiệp và Môi trường; Giáo dục và Đào tạo",
    "dev": "Công ty TNHH Signify Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực nông nghiệp và Môi trường; Giáo dục và Đào tạo",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 352,
    "name": "Hệ thống chống úng ngập cục bộ trong thành phố và tuyến",
    "desc": "Đây là giải pháp hữu ích nhằm dùng bơm hướng trục đặt trong lòng cống tại các ga cống để tiêu thoát",
    "dev": "Viện NC phát triển doanh nghiệp và cộng đồng IECOD TRỰC",
    "problem": "Vấn đề thực tiễn là giúp thoát nước đô thị trong vùng phố cổ phố cổ có mật độ cao khó thay đổi thoát",
    "users": "Doanh nghiệp vận tải, logistics, đơn vị quản lý kho bãi/cảng, lái xe, nhân viên vận hành và",
    "process": "Giải pháp hữu ích này dùng trong hệ thống thủy lợi bằng các định luật bernully, hiệu ứng COANDA, hiệu",
    "cat": "enterprise"
  },
  {
    "id": 353,
    "name": "Hệ thống Chuyển mạng giữ nguyên số thuê bao MNP",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Cục Viễn thông",
    "dev": "Cục Viễn thông",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tài chính; Hoạt động viễn thông; lập trình máy tính, tư vấn, cơ sở hạ tầng máy tính và các dịch vụ thông tin khác.",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 354,
    "name": "Hệ thống chuyển đổi văn bản thành giọng nói",
    "desc": "Chuyển đổi tin text sang audio tiếng Việt, tiếng Anh",
    "dev": "Thông tấn xã Việt Nam",
    "problem": "Chuyển đổi tin text sang audio tiếng Việt, tiếng Anh",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 355,
    "name": "Hệ thống Chữ ký số chuyên dùng ngành BHXH (PKI)",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để cung cấp dịch vụ chứng thực chữ ký số chuyên dùng cho",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để cung cấp dịch vụ chứng thực chữ ký số chuyên dùng cho",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "enterprise"
  },
  {
    "id": 356,
    "name": "Hệ thống Chữ ký số Viettel - CA/MySign",
    "desc": "Tin học hoá và tự động hoá quy trình ký duyệt văn bản, hồ sơ điện tử; đảm bảo tính xác thực, toàn vẹn và chống chối bỏ trong giao dịch điện tử",
    "dev": "VTT - Tập đoàn Viettel",
    "problem": "Tin học hoá và tự động hoá quy trình ký duyệt văn bản, hồ sơ điện tử; đảm bảo tính xác thực, toàn vẹn và chống chối bỏ trong giao dịch điện tử",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Ký số văn bản, hồ sơ điện tử; Trình ký và phê duyệt điện tử; Xác thực chữ ký số.",
    "cat": "enterprise"
  },
  {
    "id": 357,
    "name": "Hệ thống CNTT thực hiện Hải quan số",
    "desc": "Nền tảng số quốc gia/nền tảng số dùng chung thuộc danh mục chính thức; phục vụ triển khai các dịch vụ, nghiệp vụ số dùng chung trong ngành, lĩnh vực hoặc phạm vi toàn quốc",
    "dev": "Bộ Tài chính",
    "problem": "Hỗ trợ số hóa, chuẩn hóa và dùng chung các nghiệp vụ trong ngành, lĩnh vực",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "enterprise"
  },
  {
    "id": 358,
    "name": "Hệ thống Công bố thông tin của UBCKNN (IDS)",
    "desc": "Hệ thống để thực hiện báo cáo và công bố thông tin bằng hình thức điện tử theo quy định của pháp luật về công bố thông tin trên thị trường chứng khoán",
    "dev": "Ủy ban Chứng khoán Nhà nước",
    "problem": "Hệ thống để thực hiện báo cáo và công bố thông tin bằng hình thức điện tử theo quy định của pháp luật về công bố thông tin trên thị trường chứng khoán",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 359,
    "name": "Hệ thống công chức, viên chức",
    "desc": "Quản lý cơ sở dữ liệu về cán bộ, công chức, viên chức của Đài TNVN, phục vụ công tác quản lý nhân sự, theo dõi thông tin và thực hiện các nghiệp vụ liên quan trong hệ thống",
    "dev": "Trung tâm R&D",
    "problem": "Quản lý cơ sở dữ liệu về cán bộ, công chức, viên chức của Đài TNVN, phục vụ công tác quản lý nhân sự, theo dõi thông tin và thực hiện các nghiệp vụ liên quan trong hệ thống",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 360,
    "name": "Hệ thống công nghệ thống tin kết nối với",
    "desc": "Xử lý hồ sơ giải quyết thủ tục hành chính xuất khẩu,",
    "dev": "Cục An toàn bức xạ và hạt nhân",
    "problem": "Xử lý hồ sơ giải quyết thủ tục hành chính xuất khẩu,",
    "users": "Người dân, doanh nghiệp, cơ quan nhà",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào;",
    "cat": "government"
  },
  {
    "id": 361,
    "name": "Hệ thống Cổng thanh toán điện tử",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 362,
    "name": "Hệ thống Cổng thông tin một cửa quốc gia",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 363,
    "name": "Hệ thống cổng thông tin nội bộ",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Cục Báo chí",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 364,
    "name": "Hệ thống Cổng thông tin điện tử BHXH Việt Nam",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, tạo lập kênh cung cấp và trao đổi thông tin, dịch vụ công trực tuyến của Ngành; hỗ trợ tích cực cho việc thực hiện cải cách hành chính, tạo thuận tiện cho người dân và đơn vị sử dụng lao động trong gia o dịch với cơ quan BHXH",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, tạo lập kênh cung cấp và trao đổi thông tin, dịch vụ công trực tuyến của Ngành; hỗ trợ tích cực cho việc thực hiện cải cách hành chính, tạo thuận tiện cho người dân và đơn vị sử dụng lao động trong gia o dịch với cơ quan BHXH",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 365,
    "name": "Hệ thống Cổng Thông tin điện tử Chính phủ, Hệ thống thử điện tử Công vụ",
    "desc": "cung cấp thông tin phục vụ hoạt động điều hành của Chính phủ, Thủ tướng Chính phủ, Cung cấp thư điện tử công vụ cho cán bộ VPCP",
    "dev": "Cổng Thông tin Điện tử Chính phủ",
    "problem": "cung cấp thông tin phục vụ hoạt động điều hành của Chính phủ, Thủ tướng Chính phủ, Cung cấp thư điện tử công vụ cho cán bộ VPCP",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 366,
    "name": "Hệ thống cơ sở dữ liệu Danh mục Dùng chung DMDC",
    "desc": "Hệ thống CSDL Danh mục Dùng chung thực hiện quản lý, lưu trữ và cập nhật Danh mục điện tử Dùng chung trong toàn Hệ thống KBNN và tại một số đơn vị trong và ngoài ngành Tài chính. Hệ thống CSDL Danh mục Dùng chung nhằm định nghĩa các Danh mục dữ liệu thống nhất của KBNN mà bất kỳ Hệ thống nào khi xây dựng đều phải sử dụng tạo thuận tiện trong việc thống kê, báo cáo và quản lý dữ liệu,",
    "dev": "Kho bạc Nhà nước",
    "problem": "Hệ thống CSDL Danh mục Dùng chung thực hiện quản lý, lưu trữ và cập nhật Danh mục điện tử Dùng chung trong toàn Hệ thống KBNN và tại một số đơn vị trong và ngoài ngành Tài chính. Hệ thống CSDL Danh mục Dùng chung nhằm định nghĩa các Danh mục dữ liệu thống nhất của KBNN mà bất kỳ Hệ thống nào khi xây dựng đều phải sử dụng tạo thuận tiện trong việc thống kê, báo cáo và quản lý dữ liệu,",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 367,
    "name": "Hệ thống cơ sở dữ liệu Datalake",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Cục Phòng, chống rửa tiền",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 368,
    "name": "Hệ thống Cơ sở dữ liệu Quản lý công ty chứng khoán (SCMS)",
    "desc": "Quản lý, giám sát về hoạt động của công ty chứng khoán; trên thị trường chứng khoán Việt Nam",
    "dev": "Ủy ban Chứng khoán Nhà nước",
    "problem": "Quản lý, giám sát về hoạt động của công ty chứng khoán; trên thị trường chứng khoán Việt Nam",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 369,
    "name": "Hệ thống Cơ sở dữ liệu Quản lý người hành nghề chứng khoán",
    "desc": "Quản lý, giám sát quá trình hoạt động của người hành nghề chứng khoán trên thị trường chứng khoán Việt Nam",
    "dev": "Ủy ban Chứng khoán Nhà nước",
    "problem": "Quản lý, giám sát quá trình hoạt động của người hành nghề chứng khoán trên thị trường chứng khoán Việt Nam",
    "users": "Ngân hàng, tổ chức tài chính, doanh nghiệp và khách hàng cá nhân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 370,
    "name": "Hệ thống Cơ sở dữ liệu Quản lý nhà đầu tư nước ngoài (FIMS)",
    "desc": "Quản lý, giám sát về hoạt động của nhà đầu tư nước ngoài; trên thị trường chứng khoán Việt Nam",
    "dev": "Ủy ban Chứng khoán Nhà nước",
    "problem": "Quản lý, giám sát về hoạt động của nhà đầu tư nước ngoài; trên thị trường chứng khoán Việt Nam",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 371,
    "name": "Hệ thống Cơ sở dữ liệu về dịch vụ chứng thực chữ ký số",
    "desc": "Quản lý dữ liệu về tình hình hoạt động của Trung tâm: số liệu về chứng thư số, dữ liệu về các tổ chức cung cấp dịch vụ chứng thực số…; Quản lý cơ sở dữ liệu về văn bản, quy định pháp lý; Quản lý công tác thanh kiểm tra; Quản lý tuân thủ pháp lý: tuân thủ c hế độ báo cáo thống kê, tuân thủ chế độ cung cấp thông tin, tuân thủ chế độ thu, nộp phí.",
    "dev": "Trung tâm Chứng thực điện tử quốc gia",
    "problem": "Quản lý dữ liệu về tình hình hoạt động của Trung tâm: số liệu về chứng thư số, dữ liệu về các tổ chức cung cấp dịch vụ chứng thực số…; Quản lý cơ sở dữ liệu về văn bản, quy định pháp lý; Quản lý công tác thanh kiểm tra; Quản lý tuân thủ pháp lý: tuân thủ chế độ báo cáo thống kê, tuân thủ chế độ cung cấp thông tin, tuân thủ chế độ thu, nộp phí.",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 372,
    "name": "Hệ thống Cơ sở dữ liệu về giáo dục (hemis)",
    "desc": "Quản lý văn bản điện tử; Quản lý toàn bộ dữ liệu của các cơ sở giáo dục; Quản lý thư viện; Quản lý đào tạo; Đào tạo từ xa.",
    "dev": "Trường Đại học Nông - Lâm Bắc Giang",
    "problem": "Quản lý văn bản điện tử; Quản lý toàn bộ dữ liệu của các cơ sở giáo dục; Quản lý thư viện; Quản lý đào tạo; Đào tạo từ xa.",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 373,
    "name": "Hệ thống cung cấp thông tin tờ khai",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ,",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào;",
    "cat": "enterprise"
  },
  {
    "id": 374,
    "name": "Hệ thống CWS",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 375,
    "name": "Hệ thống danh mục điện tử dùng chung của cơ quan nhà nước",
    "desc": "Phần mềm, hệ thống phục vụ quản lý nhà nước",
    "dev": "Cục Chuyển đổi số quốc gia",
    "problem": "Phần mềm, hệ thống phục vụ quản lý nhà nước",
    "users": "Ngân hàng, tổ chức tài chính, doanh nghiệp và khách hàng cá nhân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 376,
    "name": "Hệ thống dạy và thi trực tuyến",
    "desc": "Tổ chức giảng dạy và thi trực tuyến",
    "dev": "Học viện Tài chính",
    "problem": "Tổ chức giảng dạy và thi trực tuyến",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 377,
    "name": "Hệ thống dịch vụ công của Bộ",
    "desc": "Cung cấp dịch vụ Công",
    "dev": "Cục Thông tin, thống kê",
    "problem": "Cung cấp dịch vụ Công",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 378,
    "name": "Hệ thống Dịch vụ công NHNN",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Vụ Dự báo, thống kê - Ổn định tiền tệ, tài chính",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 379,
    "name": "Hệ thống dịch vụ công tham gia cơ chế một cửa quốc gia",
    "desc": "Hệ thống dịch vụ công của các bộ/ngành được kết nối vào hệ thống trung tâm để doanh nghiệp chỉ cần nộp hồ sơ một lần khi thực hiện thủ tục liên quan đến xuất nhập khẩu, vận tải, logistics",
    "dev": "Trung tâm Công nghệ thống tin",
    "problem": "Hệ thống dịch vụ công của các bộ/ngành được kết nối vào hệ thống trung tâm để doanh nghiệp chỉ cần nộp hồ sơ một lần khi thực hiện thủ tục liên quan đến xuất nhập khẩu, vận tải, logistics",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 380,
    "name": "Hệ thống dịch vụ công trực tuyến",
    "desc": "Dịch vụ công trực tuyến xã Thái Tân, TP Hải Phòng là hệ thống số hóa các thủ tục hành chính cấp xã, cho phép người dân và doanh nghiệp thực hiện hồ sơ, tra cứu tiến độ, thanh toán phí/lệ phí và nhận kết quả trực tuyến hoặc qua bưu chính công ích. Giải pháp này giúp giảm thời gian, chi phí đi lại, nâng cao tính minh bạch và thúc đẩy thói quen sử dụng dịch vụ số trong cộng đồng",
    "dev": "Ủy ban nhân dân xã Thái Tân, TP Hải Phòng",
    "problem": "Người dân và doanh nghiệp tại xã Thái Tân thường gặp khó khăn khi thực hiện thủ tục hành chính do phải trực tiếp đến trụ sở UBND xã, mất nhiều thời gian chờ đợi, chi phí đi lại và dễ xảy ra tình trạng quá tải hồ sơ. Đồng thời, việc quản lý hồ sơ giấy truyề n thống thiếu minh bạch, khó tra cứu và dễ sai sót",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dân/Doanh nghiệp đăng nhập hệ thống; Nộp hồ sơ trực tuyến; Tiếp nhận và xử lý hồ sơ; Thanh toán phí/lệ phí; Tra cứu tiến độ xử lý; Trả kết quả; Lưu trữ và báo cáo.",
    "cat": "government"
  },
  {
    "id": 381,
    "name": "Hệ thống Dịch vụ công trực tuyến (DVCTT)",
    "desc": "Hệ thống Dịch vụ công trực tuyến (DVCTT) được KBNN bắt đầu triển khai từ năm 2016, đã cung cấp 9 thủ tục hành chính trong lĩnh vực KBNN trên môi trường trực tuyến liên quan đến lĩnh vực kiểm soát chi NSNN, đăng ký và sử dụng tài khoản theo Nghị định số 11/ 2020/NĐ - CP ngày",
    "dev": "Kho bạc Nhà nước",
    "problem": "Hệ thống Dịch vụ công trực tuyến (DVCTT) được KBNN bắt đầu triển khai từ năm 2016, đã cung cấp 9 thủ tục hành chính trong lĩnh vực KBNN trên môi trường trực tuyến liên quan đến lĩnh vực kiểm soát chi NSNN, đăng ký và sử dụng tài khoản theo Nghị định số 11/ 2020/NĐ - CP ngày",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 382,
    "name": "Hệ thống dịch vụ công trực tuyến vận tải đường bộ",
    "desc": "Cho phép doanh nghiệp và cá nhân thực hiện các thủ tục hành chính trong lĩnh vực vận tải đường bộ qua Internet",
    "dev": "Trung tâm Công nghệ thống tin",
    "problem": "Cho phép doanh nghiệp và cá nhân thực hiện các thủ tục hành chính trong lĩnh vực vận tải đường bộ qua Internet",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 383,
    "name": "Hệ thống Dịch vụ công trực tuyến, Một cửa điện tử",
    "desc": "Cung cấp dịch vụ cho người dân và doanh nghiệp",
    "dev": "Trung tâm Công nghệ thống tin",
    "problem": "Cung cấp dịch vụ cho người dân và doanh nghiệp",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 384,
    "name": "Hệ thống Email công vụ",
    "desc": "Cung cấp dịch vụ email công vụ cho cán bộ, công chức, viên chức cơ quan Bộ",
    "dev": "Bộ Giáo dục và Đào tạo",
    "problem": "Cung cấp dịch vụ email công vụ cho cán bộ, công chức, viên chức cơ quan Bộ",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 385,
    "name": "Hệ thống ERP",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Cục Công nghệ thống tin",
    "dev": "Cục Công nghệ thống tin",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực sản phẩm, giải pháp dùng chung",
    "users": "Doanh nghiệp, lãnh đạo quản lý, bộ phận tài chính - kế toán, nhân sự, kinh doanh và vận hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 386,
    "name": "Hệ thống Giao dịch BHXH điện tử",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, thay thế giấy tờ, cải cách hành chính, sử dụng chung để quản lý, lưu trữ, cập nhật các thông tin về hồ sơ giao dịch giữa cơ",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, thay thế giấy tờ, cải cách hành chính, sử dụng chung để quản lý, lưu trữ, cập nhật các thông tin về hồ sơ giao dịch giữa cơ",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 387,
    "name": "Hệ thống giao kế hoạch và chấm điểm thi đua",
    "desc": "Thông tin riêng/HTTT phục vụ hoạt động nội bộ/Quản lý hệ thống báo cáo và kết quả chấm điểm báo cáo phục vụ công tác thi đua nội bộ của CTK",
    "dev": "Cục Thống kê",
    "problem": "Thông tin riêng/HTTT phục vụ hoạt động nội bộ/Quản lý hệ thống báo cáo và kết quả chấm điểm báo cáo phục vụ công tác thi đua nội bộ của CTK",
    "users": "Cơ quan nội vụ, cán bộ, công chức, viên chức và cơ quan, tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 388,
    "name": "Hệ thống Giá tính thuế",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 389,
    "name": "Hệ thống giám sát giao dịch chứng khoán (MSS)",
    "desc": "Phần mềm giám sát giao dịch ngành chứng khoán",
    "dev": "Ủy ban Chứng khoán Nhà nước",
    "problem": "Phần mềm giám sát giao dịch ngành chứng khoán",
    "users": "Ngân hàng, tổ chức tài chính, doanh nghiệp và khách hàng cá nhân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 390,
    "name": "Hệ thống giám sát giám định BHYT",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để cung cấp các chức năng theo dõi giám sát, hiển thị bằng các bản đồ, biểu đồ trực quan, các báo cáo theo dõi tình hình về BHYT",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để cung cấp các chức năng theo dõi giám sát, hiển thị bằng các bản đồ, biểu đồ trực quan, các báo cáo theo dõi tình hình về BHYT",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "smartcity"
  },
  {
    "id": 391,
    "name": "Hệ thống giám sát và an toàn thông tin",
    "desc": "Giám sát thiết bị mạng, an ninh hệ thống",
    "dev": "Học viện Tài chính",
    "problem": "Giám sát thiết bị mạng, an ninh hệ thống",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "security"
  },
  {
    "id": 392,
    "name": "Hệ thống giám sát và cảnh báo ngập lụt",
    "desc": "Giải pháp xây dựng hệ thống giám sát và Phần mềm cảnh báo ngập lụt và khảo sát lập bản đồ cảnh báo mức nước",
    "dev": "Công ty Cổ phần Net P. LU. S",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực nông nghiệp và Môi trường; Xây dựng",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "smartcity"
  },
  {
    "id": 393,
    "name": "Hệ thống giám sát, đo lường mức độ cung cấp và sử dụng dịch vụ chính phủ số",
    "desc": "Phần mềm, hệ thống phục vụ quản lý nhà nước",
    "dev": "Cục Chuyển đổi số quốc gia",
    "problem": "Phần mềm, hệ thống phục vụ quản lý nhà nước",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin và quản trị hệ thống",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 394,
    "name": "Hệ thống giám định BHYT",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để quản lý toàn bộ thông tin về chi phí khám, chữa bệnh BHYT và các thông tin phục vụ công tác giám định chi KCB BHYT",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để quản lý toàn bộ thông tin về chi phí khám, chữa bệnh BHYT và các thông tin phục vụ công tác giám định chi KCB BHYT",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 395,
    "name": "Hệ thống giám định/xác định gỗ nhanh bằng công nghệ quang phổ khối lượng DART - TOFMS",
    "desc": "xác định nhanh loài gỗ và hỗ trợ xác minh nguồn gốc gỗ trong các hoạt động thương mại, quản lý, kiểm tra và thực thi pháp luật",
    "dev": "Viện Nghiên cứu Công nghiệp rừng - Viện Khoa học Lâm nghiệp Việt Nam",
    "problem": "xác định nhanh loài gỗ và hỗ trợ xác minh nguồn gốc gỗ trong các hoạt động thương mại, quản lý, kiểm tra và thực thi pháp luật",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Hệ thống có chức năng chính là phân tích phổ khối của mẫu gỗ để thu thập \"dấu vân tay hóa học\" đặc trưng, sau đó so sánh với cơ sở dữ liệu phổ khối tham chiếu để xác định loài. Quy trình bao gồm các bước: lấy mẫu gỗ (chỉ cần kích thước rất nhỏ); đưa mẫu và o thiết bị DART - TOFMS để thu thập",
    "cat": "government"
  },
  {
    "id": 396,
    "name": "Hệ thống giải mã và phục dựng số 3D kiến trúc điện Kính Thiên",
    "desc": "Tên sản phẩm: Hệ thống giải mã và phục dựng số 3D kiến trúc điện Kính Thiên (Hoàng thành Thăng Long). 1. Bối cảnh và Thách thức: Di sản thế giới Hoàng thành Thăng Long hiện chỉ còn tồn tại dưới dạng phế tích khảo cổ. Toà chính điện Kính Thiên - biểu tượng quyền lực cao nhất của Kinh đô Thăng Long xưa - đã bị phá hủy hoàn toàn vào năm 1886, chỉ còn lại dấu tích Thềm bậc đá chạm rồng",
    "dev": "Viện Nghiên cứu Văn minh châu Á",
    "problem": "Sản phẩm tập trung giải quyết 03 nhóm vấn đề nan giải trong quản lý và phát huy giá trị di sản hiện nay: 1. Giải quyết sự đứt gãy dữ liệu lịch sử và hình ảnh di sản: - Thực trạng: Điện Kính Thiên - biểu tượng quyền lực của quốc gia - đã bị phá hủy hoàn toà n, không còn bản vẽ hay hình ảnh kỹ thuật để đối chiếu. Công chúng và nhà quản lý thiếu một hình ảnh trực quan về quy mô và vẻ đẹp thực sự của di sản",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Quy trình nghiên cứu và tạo lập sản phẩm được thực hiện qua 05 giai đoạn liên hoàn, chặt chẽ: Giai đoạn 1: Khảo cổ học và Thu thập dữ liệu gốc - Tiến hành điều tra, nghiên cứu khảo cổ học hệ thống nền móng, chân tảng, và các di vật (ngói, cấu kiện gỗ, vật liệu trang trí) tại khu di sản Hoàng thành Thăng Long. - Phân loại, giám định niên đại và đặc điểm kỹ thuật của từng loại hình cấu kiện kiến trúc và di vật vật liệu kiến trúc",
    "cat": "tourism"
  },
  {
    "id": 397,
    "name": "Hệ thống giải quyết thủ tục hành chính",
    "desc": "Nền tảng theo dõi, tổng hợp, quản lý việc giải quyết TTHC của các cấp",
    "dev": "Doanh nghiệp cung cấp",
    "problem": "Giải quyết nhu cầu giảm tải cho cán bộ giải quyết thủ tục hành chính, cán bộ quản lý vận hành hệ thống tại cấp xã",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Cán bộ quản trị đơn vị -- > Cán bộ tiếp nhận -- > Cán bộ giải quyết (thụ lý) TTHC -- > Lãnh đạo đơn vị phê duyệt",
    "cat": "government"
  },
  {
    "id": 398,
    "name": "Hệ thống giải quyết TTHC",
    "desc": "Giúp cán bộ thực hiện tiếp nhận, xử lý và luân chuyển hồ sơ cho đến khi hồ sơ có kết quả và trả cho dân",
    "dev": "VNPT - IT",
    "problem": "Kịp thời tiếp nhận và phản hồi, chính sách, tháo gỡ và giải đáp vướng mắc cho cán bộ trong cơ quan liên quan tới các lĩnh vực quản lý. - Toàn bộ quy trình",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Đáp ứng quy trình nghiệp vụ cho công dân nộp hồ sơ trực tuyến, tra cứu hồ sơ, theo dõi quá trình xử lý hồ sơ, nhận các thông báo qua sms, email, zalo…; Cán bộ",
    "cat": "enterprise"
  },
  {
    "id": 399,
    "name": "Hệ thống giải quyết TTHC NHNN",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Trung tâm Thông tin tín dụng Quốc gia Việt Nam",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 400,
    "name": "Hệ thống gửi thư điện tử của Cục XTTM",
    "desc": "Gửi và nhận thư điện tử cho cán bộ công chức, viên chức người lao động thuộc Cục XTTM",
    "dev": "Cục Xúc tiến thương mại",
    "problem": "Gửi và nhận thư điện tử cho cán bộ công chức, viên chức người lao động thuộc Cục XTTM",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 401,
    "name": "Hệ thống Helpdesk",
    "desc": "Phần mềm hỗ trợ, hướng dẫn người dùng",
    "dev": "Bộ Giáo dục và Đào tạo",
    "problem": "Phần mềm hỗ trợ, hướng dẫn người dùng",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 402,
    "name": "Hệ thống Hiện đại hóa quy trình nộp thuế giữa các cơ quan Thuế - Kho bạc - Hải quan - Tài chính",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 403,
    "name": "Hệ thống Hoàn thuế GTGT cho người nước ngoài",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý,",
    "cat": "enterprise"
  },
  {
    "id": 404,
    "name": "Hệ thống Hồ sơ công việc",
    "desc": "Quản lý và xử lý toàn bộ nghiệp vụ kế toán; Dùng để làm bản đồ và phân tích dữ liệu theo vị trí địa lý; Quản lý, lưu trữ và theo dõi toàn bộ hồ sơ, tài liệu và quá trình xử lý công việc trong cơ quan; Quản lý thông tin nhân sự và các hoạt động liên quan đến cán bộ, công chức, viên chức hoặc nh ân viên trong cơ quan.",
    "dev": "Cục Bảo tồn thiên nhiên và Đa dạng sinh học",
    "problem": "Quản lý và xử lý toàn bộ nghiệp vụ kế toán; Dùng để làm bản đồ và phân tích dữ liệu theo vị trí địa lý; Quản lý, lưu trữ và theo dõi toàn bộ hồ sơ, tài liệu và quá trình xử lý công việc trong cơ quan; Quản lý thông tin nhân sự và các hoạt động liên quan đế n cán bộ, công chức, viên chức hoặc nhân viên trong cơ quan.",
    "users": "Doanh nghiệp, lãnh đạo quản lý, bộ phận tài chính - kế toán, nhân sự, kinh doanh và vận hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 405,
    "name": "Hệ thống Hồ sơ sức khoẻ",
    "desc": "Hồ sơ sức khỏe điện tử (EHR - Electric Health Record) là bản tin học hóa của hồ sơ sức khỏe được lập, hiển thị, cập nhật, lưu trữ và chia sẻ bằng phương tiện điện tử",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Xây dựng hồ sơ sức khỏe điện tử (EHR) cho từng người dân, lưu trữ suốt đời và chia sẻ an toàn giữa cơ sở y tế",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Hồ sơ sức khỏe điện tử (EHR - Electric Health Record) là bản tin học hóa của hồ sơ sức khỏe được lập, hiển thị, cập nhật, lưu trữ và chia sẻ bằng phương tiện điện tử. Mỗi người dân có một hồ sơ sức khỏe điện tử được theo dõi và lưu trữ suốt đời; hồ sơ sức khỏe điện tử được bảo mật, chỉ có những người có liên quan được tiếp cận thông tin; người dân có quyền quyết định chia sẻ hay không chia sẻ các thông tin cá nhân trong hồ sơ sức khỏe.",
    "cat": "healthcare"
  },
  {
    "id": 406,
    "name": "Hệ thống Hồ sơ Y tế Điện tử VizEMR",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực y tế; Y tế và hoạt động trợ giúp xã hội",
    "dev": "Công ty Cổ phần Tư Vấn Datahouse Asia",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực y tế; Y tế và hoạt động trợ giúp xã hội",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "healthcare"
  },
  {
    "id": 407,
    "name": "Hệ thống hỗ trợ ra quyết định - EUC",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 408,
    "name": "Hệ thống hỗ trợ đánh giá chuẩn đầu ra chương trình đào tạo",
    "desc": "Hệ thống hỗ trợ công tác đánh giá chuẩn đầu ra chương trình đào tạo phục vụ cải tiến, nâng cao chất lượng đào tạo",
    "dev": "Trường Đại học Trà Vinh",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 409,
    "name": "Hệ thống hỏi đáp chính sách tài chính tự động",
    "desc": "Hỏi đáp tự động về văn bản, chính sách của ngành tài chính",
    "dev": "Cục Công nghệ thống tin và chuyển đổi số",
    "problem": "Hỏi đáp tự động về văn bản, chính sách của ngành tài chính",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 410,
    "name": "Hệ thống hợp đồng điện tử",
    "desc": "Số hóa quy trình giao kết, ký kết và lưu trữ thông qua phương tiện điện tử, có giá trị pháp lý tương đương với văn bản truyền thống",
    "dev": "VTT - Tập đoàn Viettel",
    "problem": "Số hóa quy trình giao kết, ký kết và lưu trữ thông qua phương tiện điện tử, có giá trị pháp lý tương đương với văn bản truyền thống",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "' - Tạo lập hợp đồng; Quản lý và thiết lập luồng ký; Ký số điện tử; Xác thực danh tính (eKYC); Lưu trữ tập trung và bảo mật; Chứng thực thông điệp CECA.",
    "cat": "enterprise"
  },
  {
    "id": 411,
    "name": "Hệ thống học tập, bồi dưỡng lý luận chính trị trực tuyến",
    "desc": "Học tập quán triệt nghị quyết; Tổ chức thi",
    "dev": "Ban Tuyên giáo và Dân vận Trung ương",
    "problem": "Học tập quán triệt nghị quyết; Tổ chức thi",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 412,
    "name": "Hệ thống họp không giấy tờ",
    "desc": "Là giải pháp số hóa cuộc họp truyền thống, hoạt động trên các thiết bị thông minh có kết nối mạng. Trước mỗi phiên họp, chương trình và tài liệu được chuẩn bị, phê duyệt và chuyển ngay đến đại biểu để nghiên cứu, đặt câu hỏi, gửi ý kiến trước. Tại cuộc họp , các ý kiến được tổng hợp để thảo luận, giúp nâng cao chất lượng, rút ngắn thời gian và tăng hiệu quả quản lý, điều hành trong cơ quan hành chính nhà nước",
    "dev": "Công ty Cổ phần Tin học Tân Dân",
    "problem": "Nâng cao năng lực, hiệu quả quản lý, điều hành trong các cơ quan hành chính nhà nước, giúp lãnh đạo, cán bộ có thể tham gia họp và khai thác tài liệu cuộc họp mọi lúc, mọi nơi; Dễ dàng theo dõi tiến độ, kết luận, nhiệm vụ sau họp; Rút ngắn thời gian tổ chứ c và xử lý sau họp; Giảm chi phí in ấn, photocopy, lưu trữ giấy tờ, tài liệu.",
    "users": "Cơ quan nội vụ, cán bộ, công chức, viên chức và cơ quan, tổ chức có liên quan",
    "process": "Cán bộ hỗ trợ tổ chức cuộc họp chuẩn bị nội dung họp, tài liệu họp lên trên hệ thống, cập nhật thông tin lãnh đạo chủ trì, các đại biểu tham gia. Lãnh đạo chủ trì có các chức năng hỗ trợ điều hành toàn bộ cuộc họp. Hệ thống quản lý toàn bộ thông tin cuộc h ọp và kết luận cuộc họp của lãnh đạo",
    "cat": "government"
  },
  {
    "id": 413,
    "name": "Hệ thống họp trực tuyến",
    "desc": "Họp trực tuyến",
    "dev": "Cục Hải quan",
    "problem": "Họp trực tuyến",
    "users": "Ngân hàng, tổ chức tài chính, doanh nghiệp và khách hàng cá nhân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 414,
    "name": "Hệ thống họp trực tuyến VNPT GoMeet",
    "desc": "VNPT GoMeet là giải pháp họp trực tuyến trên nền tảng điện toán đám mây (Cloud) do VNPT phát triển. Hệ thống cho phép tổ",
    "dev": "VNPT AI",
    "problem": "1. Khó khăn trong quản lý và kết nối nhân sự phân tán Các tổ chức/doanh nghiệp có nhiều chi nhánh hoặc nhân sự làm việc từ xa cần",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và",
    "process": "(1) Người dùng đăng ký tài khoản và đăng nhập vào hệ thống; (2) Tạo và cấu hình cuộc họp (tiêu đề, thời gian, thành phần tham",
    "cat": "enterprise"
  },
  {
    "id": 415,
    "name": "Hệ thống họp, hội nghị trực tuyến",
    "desc": "Thông tin riêng/HTTT phục vụ hoạt động nội bộ/Thiết lập kết nối và truyền đưa, lưu trữ thông tin hình ảnh trực tuyến giữa các điểm cầu đăng nhập phục vụ các cuộc họp trực tuyến",
    "dev": "Cục Thống kê",
    "problem": "Thông tin riêng/HTTT phục vụ hoạt động nội bộ/Thiết lập kết nối và truyền đưa, lưu trữ thông tin hình ảnh trực tuyến giữa các điểm cầu đăng nhập phục vụ các cuộc họp trực tuyến",
    "users": "Cơ quan nội vụ, cán bộ, công chức, viên chức và cơ quan, tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 416,
    "name": "Hệ thống HSCV",
    "desc": "HSCV",
    "dev": "Trung tâm Xúc tiến thương mại nông nghiệp",
    "problem": "HSCV",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 417,
    "name": "Hệ thống Kế toán nội bộ",
    "desc": "Quản lý ấn chỉ hải quan, quản lý tài sản",
    "dev": "Cục Hải quan",
    "problem": "Quản lý ấn chỉ hải quan, quản lý tài sản",
    "users": "Doanh nghiệp, lãnh đạo quản lý, bộ phận tài chính - kế toán, nhân sự, kinh doanh và vận hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 418,
    "name": "Hệ thống kế toán tập trung",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH",
    "users": "Người lao động, người sử dụng lao động, cơ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào;",
    "cat": "finance"
  },
  {
    "id": 419,
    "name": "Hệ thống Kế toán thuế tập trung",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Doanh nghiệp, lãnh đạo quản lý, bộ phận tài chính - kế toán, nhân sự, kinh doanh và vận hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 420,
    "name": "Hệ thống Kế toán xuất nhập khẩu tập trung",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Doanh nghiệp, lãnh đạo quản lý, bộ phận tài chính - kế toán, nhân sự, kinh doanh và vận hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 421,
    "name": "Hệ thống kết nối chia sẻ dữ liệu với Cục Thuế",
    "desc": "Thông tin riêng/HTTT cở sở hạ tầng thông tin/Kết nối, chia sẻ dữ liệu về đối tượng nộp thuế với Cục Thuế",
    "dev": "Cục Thống kê",
    "problem": "Thông tin riêng/HTTT cở sở hạ tầng thông tin/Kết nối, chia sẻ dữ liệu về đối tượng nộp thuế với Cục Thuế",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "smartcity"
  },
  {
    "id": 422,
    "name": "Hệ thống kết nối trực tiếp đến các hệ thống của tổ chức chứng thực chữ ký số công cộng",
    "desc": "Thu thập số liệu và quản lý dịch vụ chứng thực chữ ký số công cộng đáp ứng các quy định mới tại Luật giao dịch điện tử 2023, các quy định khác về dịch vụ chứng thự chữ ký sốthu thập số liệu và quản lý dịch vụ chứng thực chữ ký số công cộng đáp ứng các quy định mới tại Luật giao dịch điện tử 2023, các quy định khác",
    "dev": "Trung tâm Chứng thực điện tử quốc gia",
    "problem": "Thu thập số liệu và quản lý dịch vụ chứng thực chữ ký số công cộng đáp ứng các quy định mới tại Luật giao dịch điện tử 2023, các quy định khác về dịch vụ chứng thự chữ ký sốthu thập số liệu và quản lý dịch vụ chứng thực chữ ký số công cộng đáp ứng các quy định mới tại Luật giao dịch điện tử 2023, các quy định khác",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 423,
    "name": "Hệ thống kết nối, chia sẻ dữ liệu số ngành Tài chính",
    "desc": "LGSP của Bộ Tài chính, phục vụ kết nối, chia sẻ dữ liệu giữa các đơn vị thuộc Bộ Tài chính",
    "dev": "Cục Công nghệ thống tin và chuyển đổi số",
    "problem": "LGSP của Bộ Tài chính, phục vụ kết nối, chia sẻ dữ liệu giữa các đơn vị thuộc Bộ Tài chính",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ; ngân hàng, tổ chức tài chính, doanh nghiệp và khách hàng cá nhân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 424,
    "name": "Hệ thống Kết nối, trao đổi thông tin giữa UBCKNN và Cục Thuế (DCST)",
    "desc": "Trao đổi, cung cấp thông tin, dữ liệu quản lý thuế và thông tin, dữ liệu quản lý trong lĩnh vực chứng khoán liên quan đến yêu cầu quân lý Nhà nước của mỗi bên",
    "dev": "Ủy ban Chứng khoán Nhà nước",
    "problem": "Trao đổi, cung cấp thông tin, dữ liệu quản lý thuế và thông tin, dữ liệu quản lý trong lĩnh vực chứng khoán liên quan đến yêu cầu quân lý Nhà nước của mỗi bên",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 425,
    "name": "Hệ thống khảo thí và ngân hàng đề thi",
    "desc": "Quản lý thi, ngân hàng câu hỏi, thi trắc nghiệm",
    "dev": "Học viện Tài chính",
    "problem": "Quản lý thi, ngân hàng câu hỏi, thi trắc nghiệm",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 426,
    "name": "Hệ thống Kho dữ liệu thống kê, phân tích hoạt động nghiệp vụ (KDL)",
    "desc": "Hệ thống Kho dữ liệu thống kê, phân tích hoạt động nghiệp vụ (KDL) là hệ thống thông tin cấp độ 3, được KBNN triển khai từ năm 2018 đã giúp tập trung dữ liệu của các hệ thống ứng dụng phục vụ hoạt động nghiệp vụ của KBNN như TABMIS, TTĐT - NH, TCS đáp ứng ch ế độ kế toán NSNN theo",
    "dev": "Kho bạc Nhà nước",
    "problem": "Hệ thống Kho dữ liệu thống kê, phân tích hoạt động nghiệp vụ (KDL) là hệ thống thông tin cấp độ 3, được KBNN triển khai từ năm 2018 đã giúp tập trung dữ liệu của các hệ thống ứng dụng phục vụ hoạt động nghiệp vụ của KBNN như TABMIS, TTĐT - NH, TCS đáp ứng ch ế độ kế toán NSNN theo",
    "users": "Ngân hàng, tổ chức tài chính, doanh nghiệp và khách hàng cá nhân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 427,
    "name": "Hệ thống Kho dữ liệu tổng hợp của BHXH Việt Nam - DWH",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng chung để khai thác, phân tích, báo cáo, thống kê tổng hợp từ CSDL các hệ thống ứng dụng nghiệp vụ chuyên ngành",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng chung để khai thác, phân tích, báo cáo, thống kê tổng hợp từ CSDL các hệ thống ứng dụng nghiệp vụ chuyên ngành",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 428,
    "name": "Hệ thống Kiểm kê tài sản",
    "desc": "Quản lý hồ sơ kiểm kê tài sản",
    "dev": "Cơ quan Ủy ban Kiểm tra Trung ương",
    "problem": "Quản lý hồ sơ kiểm kê tài sản",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 429,
    "name": "Hệ thống kiểm soát chi đầu tư qua KBNN",
    "desc": "Hệ thống kiểm soát chi đầu tư qua KBNN (ĐTKB - GD) được KBNN triển khai từ năm 2021, là hệ thống hỗ trợ cho công tác kiểm soát chi các dự án đầu tư công theo kế hoạch vốn hàng năm, tổng mức đầu tư dự án, theo hạng mục, hợp đồng (tiết mục). Hệ thống là cơ sở để KBNN lập các báo cáo đầu ra theo quy định của Thông tư 15/2021/TT - BTC và Thông tư 96/2021/TT - BTC phục vụ công tác lãnh đạo, chỉ đạo điều hành của Chính",
    "dev": "Kho bạc Nhà nước",
    "problem": "Hệ thống kiểm soát chi đầu tư qua KBNN (ĐTKB - GD) được KBNN triển khai từ năm 2021, là hệ thống hỗ trợ cho công tác kiểm soát chi các dự án đầu tư công theo kế hoạch vốn hàng năm, tổng mức đầu tư dự án, theo hạng mục, hợp đồng (tiết mục). Hệ thống là cơ sở để KBNN lập các báo cáo đầu ra theo quy định của Thông tư 15/2021/TT - BTC và Thông tư 96/2021/TT - BTC phục vụ công tác lãnh đạo, chỉ đạo điều hành của Chính",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 430,
    "name": "Hệ thống kiểm tra sau thông quan - STQ02",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 431,
    "name": "Hệ thống kiosk và Wi - Fi du lịch thông minh",
    "desc": "Đây là giải pháp cung cấp dịch vụ công nghệ thông tin bao gồm hạ tầng mạng wifi công cộng và các trạm tra cứu thông tin (Kiosk) nhằm phục vụ nhu cầu kết nối và tìm kiếm thông tin của du khách tại các địa danh du lịch nổi tiếng",
    "dev": "Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel)",
    "problem": "Giải pháp giúp số hóa hoạt động du lịch, đáp ứng nhu cầu truy cập internet tốc độ cao và tra cứu thông tin du lịch trực quan cho khách tham quan tại các khu vực rộng lớn, từ đó nâng cao trải nghiệm của du khách và thúc đẩy chuyển đổi số ngành du lịch tỉnh Ninh Bình",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Triển khai hạ tầng: Nhà thầu (Viettel) chịu trách nhiệm cung cấp và lắp đặt thiết bị để vận hành 05 điểm Kiosk và 32 điểm Wifi tại các khu du lịch đã định sẵn. - Vận hành và bảo trì: Hệ thống được vận hành liên tục trong thời gian thuê dịch vụ là 60 tháng. Nhà thầu phải đảm bảo chất lượng dịch vụ phi tư vấn, thực hiện các biện pháp khắc phục sai sót trong quá trình cung cấp dịch vụ. - Việc nghiệm thu được thực hiện định kỳ hàng năm",
    "cat": "government"
  },
  {
    "id": 432,
    "name": "Hệ thống làm việc cộng tác",
    "desc": "Theo dõi cấp số văn bản, quản trị công việc của đơn vị",
    "dev": "Tòa án nhân dân tỉnh Thanh Hóa",
    "problem": "Theo dõi cấp số văn bản, quản trị công việc của đơn vị",
    "users": "Cơ quan tư pháp, cán bộ xử lý nghiệp vụ, người dân, doanh nghiệp và tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 433,
    "name": "Hệ thống LGSP TTXVN",
    "desc": "Là nền tảng tích hợp, chia sẻ dữ liệu cấp Bộ, cơ quan ngang Bộ",
    "dev": "Thông tấn xã Việt Nam",
    "problem": "Là nền tảng tích hợp, chia sẻ dữ liệu cấp Bộ, cơ quan ngang Bộ",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 434,
    "name": "Hệ thống LMS",
    "desc": "quản lý học tập, bài giảng, thi online",
    "dev": "Trường Cao đẳng Cơ điện và Xây dựng Bắc Ninh",
    "problem": "Việc triển khai hệ thống LMS tại Trường Cao đẳng Cơ điện và Xây dựng Bắc Ninh nhằm giải quyết các tồn tại trong quản lý và tổ chức đào tạo theo phương thức truyền thống, bao gồm: phân tán dữ liệu, thiếu chuẩn hóa học liệu, hạn chế trong theo dõi đánh giá n gười học và chưa đáp ứng yêu cầu đào tạo linh hoạt gắn với nhu cầu doanh nghiệp",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Quy trình nghiệp vụ LMS được tổ chức theo chu trình khép kín từ xây dựng học liệu, tổ chức giảng dạy, theo dõi quá trình học tập đến kiểm tra, đánh giá và báo cáo trên một nền tảng số thống nhất. Hệ thống bảo đảm dữ liệu đào tạo được số hóa, liên thông và phục vụ hiệu quả công tác quản lý, kiểm định chất lượng cũng như kết nối với nhu cầu doanh nghiệp",
    "cat": "education"
  },
  {
    "id": 435,
    "name": "Hệ thống LMS tích hợp học liệu số và thực hành mô phỏng cho đào tạo nghề",
    "desc": "Giải pháp là hệ thống LMS phục vụ đào tạo nghề, tích hợp học liệu số, bài giảng tương tác (H5P), ngân hàng câu hỏi, và các mô - đun thực hành mô phỏng. Hệ thống hỗ trợ giảng dạy - học tập linh hoạt (online, blended), giúp nâng cao năng lực tự học của sinh vi ên, đồng thời hỗ trợ giảng viên xây dựng nội dung số hóa và đánh giá tự động. Phù hợp triển khai",
    "dev": "Phòng Đào tạo",
    "problem": "Hiện nay tại các cơ sở giáo dục nghề nghiệp, việc tổ chức giảng dạy còn phụ thuộc nhiều vào phương pháp truyền thống, học liệu số chưa đồng bộ, thiếu các công cụ hỗ trợ học tập tương tác và thực hành mô phỏng. Sinh viên còn hạn chế về khả năng tự học, tron g khi giảng viên gặp khó khăn trong việc xây dựng bài giảng số và đánh giá thường xuyên",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Quy trình triển khai gồm các bước: (1) Giảng viên xây dựng học liệu số (bài giảng, video, H5P, ngân hàng câu hỏi); (2) Tích hợp nội dung lên hệ thống LMS và phân quyền lớp học; (3) Sinh viên truy cập hệ thống để học tập, làm bài tập, tham gia hoạt động tươ ng tác; (4) Hệ thống tự động chấm điểm, lưu trữ dữ liệu học tập và theo dõi tiến độ; (5) Giảng viên và cán bộ",
    "cat": "education"
  },
  {
    "id": 436,
    "name": "Hệ thống loa truyền thanh thông minh",
    "desc": "Đây là hệ thống loa dùng công nghệ thống minh, được dùng để nâng cao hiệu quả hoạt động thông tin cơ sở; Từng bước quản lý tập trung công tác truyền thanh cơ sở trên địa bàn xã",
    "dev": "Mobifone Hải Phòng",
    "problem": "Nâng cao chất lượng nội dung thông tin để cung cấp, trao đổi thông tin theo hướng kịp thời, chủ động, chính xác và hiệu quả",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Hệ thống được sử dụng đơn giản. Chỉ cần 1 người điều khiển, viết bài, hẹn giờ bật tắt thời gian phát sóng",
    "cat": "enterprise"
  },
  {
    "id": 437,
    "name": "Hệ thống Lưu trữ và truyền tải hình ảnh PACS",
    "desc": "Phần mềm hệ thống lưu trữ và truyền hình ảnh (PACS - Picture Archiving and Communication Systems) là giải pháp tổng thể cung cấp nơi lưu trữ, quản lý, truy xuất, trình chiếu và phân phối hình ảnh, đồng thời cung cấp các công cụ xử lý ảnh chuyên sâu giúp hỗ trợ chẩn đoán hình ảnh y tế. PACS giúp hạn chế việc sử dụng phim nhựa, giấy tờ lưu trữ thông tin, cung cấp hình ảnh cho bệnh án điện tử (EMR), tiến tới triển khai bệnh viện không in phim",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Lưu trữ, quản lý và phân phối hình ảnh y tế chuyên dụng (DICOM), hỗ trợ chẩn đoán hình ảnh và hội chẩn từ xa",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Phần mềm hệ thống lưu trữ và truyền hình ảnh (PACS - Picture Archiving and Communication Systems) là giải pháp tổng thể cung cấp nơi lưu trữ, quản lý, truy xuất, trình chiếu và phân phối hình ảnh, đồng thời cung cấp các công cụ xử lý ảnh chuyên sâu giúp hỗ trợ chẩn đoán hình ảnh y tế. PACS giúp hạn chế việc sử dụng phim nhựa, giấy tờ lưu trữ thông tin, cung cấp hình ảnh cho bệnh án điện tử (EMR), tiến tới triển khai bệnh viện không in phim",
    "cat": "healthcare"
  },
  {
    "id": 438,
    "name": "Hệ thống lưu trữ đám mây",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Viện Kiểm sát nhân dân tối cao",
    "dev": "Viện Kiểm sát nhân dân tối cao",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực nội vụ; Hoạt động viễn thông; lập",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "enterprise"
  },
  {
    "id": 439,
    "name": "Hệ thống mail",
    "desc": "Cho phép gửi nhận email của công chức trong hệ thống Tòa án",
    "dev": "Tòa án nhân dân tối cao",
    "problem": "Cho phép gửi nhận email của công chức trong hệ thống Tòa án",
    "users": "Cơ quan tư pháp, cán bộ xử lý nghiệp vụ, người dân, doanh nghiệp và tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 440,
    "name": "Hệ thống mạng nội bộ toàn ngành Thống kê",
    "desc": "Thông tin riêng/HT cơ sở hạ tầng/Là mạng tập trung cho các dịch vụ và kho dữ liệu tại các trụ sở chính, phân tán các ứng dụng xuống cấp dưới",
    "dev": "Cục Thống kê",
    "problem": "Thông tin riêng/HT cơ sở hạ tầng/Là mạng tập trung cho các dịch vụ và kho dữ liệu tại các trụ sở chính, phân tán các ứng dụng xuống cấp dưới",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "smartcity"
  },
  {
    "id": 441,
    "name": "Hệ thống mạng đấu thầu quốc gia",
    "desc": "quản lý thông tin, đấu thầu qua mạng, đảm bảo công khai, minh bạch và hiệu quả kinh tế trong mua sắm công. Hệ thống hỗ trợ đăng tải thông tin dự án, nộp hồ sơ dự thầu, lựa chọn nhà thầu, nhà đầu tư, tra cứu kết quả và tiết kiệm chi phí",
    "dev": "Cục Quản lý đấu thầu",
    "problem": "quản lý thông tin, đấu thầu qua mạng, đảm bảo công khai, minh bạch và hiệu quả kinh tế trong mua sắm công. Hệ thống hỗ trợ đăng tải thông tin dự án, nộp hồ sơ dự thầu, lựa chọn nhà thầu, nhà đầu tư, tra cứu kết quả và tiết kiệm chi phí",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 442,
    "name": "Hệ thống Miễn giảm hoàn",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 443,
    "name": "Hệ thống một cửa và ứng dụng tra cứu dành cho sinh viên",
    "desc": "Hỗ trợ sinh viên và người học tra cứu thông tin liên quan đến thủ tục, kết quả",
    "dev": "Trường Đại học Hàng hải Việt Nam",
    "problem": "Hỗ trợ sinh viên và người học tra cứu thông tin liên quan đến thủ tục, kết quả",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "education"
  },
  {
    "id": 444,
    "name": "Hệ thống Ngân hàng lõi SG 3. 1",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Cục Quản lý ngoại hối",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 445,
    "name": "Hệ thống Ngân hàng lõi SG 3. 1",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "NHNN Khu vực 1",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 446,
    "name": "Hệ thống ngân hàng số mới cho khách hàng tổ chức tại BIDV - BIDV Direct",
    "desc": "Xây dựng hệ thống Ngân hàng số (NHS) cho Khách hàng tổ chức đáp ứng nhu cầu của các phân khúc khách hàng tổ chức với các tính năng sản phẩm đa dạng, phù hợp với xu hướng phát triển tại Việt Nam trong ngắn và trung hạn, mang lại nhiều tiện ích cho khách hàn g",
    "dev": "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam",
    "problem": "Hệ thống internet banking của BIDV trước đây đã bộc lộ nhiều hạn chế về mặt nghiệp vụ và kỹ thuật cũng như trải nghiệm của khách hàng dẫn đến khó khăn trong việc nâng cấp hoặc mở rộng hệ thống, không đáp ứng kịp thời yêu cầu thay đổi và triển khai nhanh ch óng các sản phẩm số đến cho khách hàng doanh nghiệp",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Hệ thống BIDV Direct được thiết kế theo hành trình khách hàng và các luồng giao dịch chính: Onboard doanh nghiệp lên kênh ngân hàng số; Tạo user và phân quyền cho user chi tiết đến từng dịch vụ hoặc tài khoản; Doanh nghiệp tạo giao dịch hoàn toàn trên kênh online; Phê duyệt nhiều cấp đáp ứng mọi nhu cầu tùy biên của khách hàng; Hệ thống xử lý và ghi nhận kết quả giao dịch; Báo cáo và kiểm soát nội bộ.",
    "cat": "finance"
  },
  {
    "id": 447,
    "name": "Hệ thống ngân hàng số mới cho khách hàng tổ chức tại",
    "desc": "Xây dựng hệ thống Ngân hàng số (NHS) cho Khách hàng tổ chức đáp ứng nhu",
    "dev": "Nguồn lực nội bộ của BIDV",
    "problem": "BIDV Direct khắc phục các yếu điểm của hệ thống cũ, tiên phong áp dụng các",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng",
    "process": "Hệ thống BIDV Direct được thiết kế theo vòng đời khách hàng và các luồng",
    "cat": "finance"
  },
  {
    "id": 448,
    "name": "Hệ thống Nhắc lịch tiêm chủng",
    "desc": "Hệ thống nhắc lịch tiêm chủng tự động theo phác đồ Bộ Y tế, giúp đảm bảo tiêm chủng đầy đủ, đúng lịch",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Tự động nhắc lịch tiêm chủng cho người dân theo phác đồ Bộ Y tế, đảm bảo tiêm chủng đúng hạn và đầy đủ",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Hệ thống nhắc lịch tiêm chủng tự động theo phác đồ Bộ Y tế, giúp đảm bảo tiêm chủng đầy đủ, đúng lịch",
    "cat": "healthcare"
  },
  {
    "id": 449,
    "name": "Hệ thống nuôi tôm thông minh AquaX",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực nông nghiệp và Môi trường; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Công Nghệ VN3T",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực nông nghiệp và Môi trường; Giáo dục và Đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 450,
    "name": "Hệ thống phân tích dữ liệu",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Cục Phòng, chống rửa tiền",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 451,
    "name": "Hệ thống phần mềm cấp quản lý và sản xuất CCCD",
    "desc": "Quản lý cấp mới, cấp đổi, cấp lại Căn cước",
    "dev": "C06",
    "problem": "Quản lý cấp mới, cấp đổi, cấp lại Căn cước",
    "users": "Doanh nghiệp sản xuất, nhà máy, bộ phận vận hành, kỹ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý,",
    "cat": "enterprise"
  },
  {
    "id": 452,
    "name": "Hệ thống phần mềm công chức viên chức",
    "desc": "Quản lý, cập nhật viên chức và người lao động của Viện Hàn lâm",
    "dev": "Ban Tổ chức cán bộ",
    "problem": "Quản lý, cập nhật viên chức và người lao động của Viện Hàn lâm",
    "users": "Cơ quan nội vụ, cán bộ, công chức, viên chức và cơ quan, tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 453,
    "name": "Hệ thống phần mềm Cơ sở dữ liệu dùng chung",
    "desc": "Lưu trữ và chia sẻ dữ liệu",
    "dev": "C06",
    "problem": "Lưu trữ và chia sẻ dữ liệu",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 454,
    "name": "Hệ thống phần mềm cơ sở dữ liệu quốc gia về dân cư",
    "desc": "Quản lý, khai thác dữ liệu dân cư",
    "dev": "C06",
    "problem": "Quản lý, khai thác dữ liệu dân cư",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 455,
    "name": "Hệ thống phần mềm dịch vụ công liên thông",
    "desc": "Giải quyết thủ tục hành chính trực tuyến",
    "dev": "C06",
    "problem": "Giải quyết thủ tục hành chính trực tuyến",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 456,
    "name": "Hệ thống Phần mềm DVC trực tuyến Sản xuất lăp ráp",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Cục Đăng kiểm Việt Nam",
    "dev": "Cục Đăng kiểm Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực công Thương; Hoạt động hành chính và dịch vụ hỗ trợ",
    "users": "Doanh nghiệp sản xuất, nhà máy, bộ phận vận hành, kỹ thuật, quản lý chất lượng và lãnh đạo doanh nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 457,
    "name": "Hệ thống phần mềm học và thực hành trực tuyến DLAB",
    "desc": "Thực hành Code cho sinh viên",
    "dev": "Học viện Công nghệ Bưu chính Viễn thông",
    "problem": "Thực hành Code cho sinh viên",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 458,
    "name": "Hệ thống phần mềm IOC",
    "desc": "Thống kê số liệu toàn học viện, các nhiệm vụ KHCN, báo cáo, tầm nhìn, chiến lược phát triển",
    "dev": "Học viện Công nghệ Bưu chính Viễn thông",
    "problem": "Thống kê số liệu toàn học viện, các nhiệm vụ KHCN, báo cáo, tầm nhìn, chiến lược phát triển",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 459,
    "name": "Hệ thống phần mềm Kế Toán E - ANA",
    "desc": "Phầm mềm phục vụ kế toán",
    "dev": "Học viện Công nghệ Bưu chính Viễn thông",
    "problem": "Phầm mềm phục vụ kế toán",
    "users": "Doanh nghiệp, lãnh đạo quản lý, bộ phận tài chính - kế toán, nhân sự, kinh doanh và vận hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 460,
    "name": "Hệ thống phần mềm McTest Online",
    "desc": "Thi trắc nghiệm cho sinh viên",
    "dev": "Học viện Công nghệ Bưu chính Viễn thông",
    "problem": "Thi trắc nghiệm cho sinh viên",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 461,
    "name": "Hệ thống phần mềm nghiệp vụ công tác kiểm tra, giám sát, thi hành kỷ luật đảng",
    "desc": "Phục vụ công tác kiểm tra, giám sát, thi hành kỷ luật đảng",
    "dev": "X06",
    "problem": "Phục vụ công tác kiểm tra, giám sát, thi hành kỷ luật đảng",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 462,
    "name": "Hệ thống phần mềm quản lý cơ sở dữ liệu đất đai đa mục tiêu (VBDLIS)",
    "desc": "VBDLIS là hệ thống phần mềm dùng để xây dựng, quản lý, vận hành và khai thác cơ sở dữ liệu đất đai",
    "dev": "Vietbando",
    "problem": "Dữ liệu đất đai phân tán, lưu trữ thủ công, thiếu đồng bộ; Khó khăn trong cập nhật biến động và",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế,",
    "process": "Thu thập, số hóa hồ sơ địa chính (bản đồ, sổ mục kê, hồ sơ giấy); Chuẩn hóa dữ liệu theo mô hình dữ liệu",
    "cat": "ai"
  },
  {
    "id": 463,
    "name": "Hệ thống phần mềm Quản lý học tập Khoa An toàn thông tin",
    "desc": "Quản lý học tập Khoa An toàn thông tin",
    "dev": "Học viện Công nghệ Bưu chính Viễn thông",
    "problem": "Quản lý học tập Khoa An toàn thông tin",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ an toàn thông tin, quản trị hệ thống và bộ phận công nghệ thông tin",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 464,
    "name": "Hệ thống phần mềm quản lý đào tạo",
    "desc": "Quản lý thông tin giảng viên, sinh viên, quản lý thi trắc nghiệm, ngân hàng đề thi",
    "dev": "Học viện Hàng không Việt Nam",
    "problem": "Quản lý thông tin giảng viên, sinh viên, quản lý thi trắc nghiệm, ngân hàng đề thi",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 465,
    "name": "Hệ thống Phần mềm thực hiện triển khai cơ chế một cửa quốc giá đối với xe Nhập khẩu",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Cục Đăng kiểm Việt Nam",
    "dev": "Cục Đăng kiểm Việt Nam",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực hoạt động của Đảng Cộng sản, tổ chức chính trị - xã hội, quản lý nhà nước, an ninh quốc phòng; bảo đảm xã hội bắt buộc",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp nhận, xử lý thủ tục hành chính",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 466,
    "name": "Hệ thống phần mềm tuyển sinh",
    "desc": "Trang web tuyển sinh học viện",
    "dev": "Học viện Công nghệ Bưu chính Viễn thông",
    "problem": "Trang web tuyển sinh học viện",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 467,
    "name": "Hệ thống phần mềm định danh và xác thực điện tử",
    "desc": "Quản lý định danh điện tử, xác thực công dân",
    "dev": "C06",
    "problem": "Quản lý định danh điện tử, xác thực công dân",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 468,
    "name": "Hệ thống phản ánh kiến nghị về VBQPPL",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Bộ Tư pháp",
    "dev": "Bộ Tư pháp",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tư pháp; Hoạt động của Đảng Cộng sản, tổ chức chính trị - xã hội, quản lý nhà nước, an ninh quốc phòng; bảo đảm xã hội bắt buộc.",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 469,
    "name": "Hệ thống phản ánh, kiến nghị của Bộ KH&CN",
    "desc": "Tiếp nhận, trả lời PAKN của công dân, tổ chức gửi đến Bộ KH&CN",
    "dev": "Trung tâm Công nghệ thống tin",
    "problem": "Tiếp nhận, trả lời PAKN của công dân, tổ chức gửi đến Bộ KH&CN",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 470,
    "name": "Hệ thống phòng học OMO",
    "desc": "Phần mềm hệ thống phòng học OMO",
    "dev": "Công ty Cổ phần Vietinnotech",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 471,
    "name": "Hệ thống phòng vệ mạng quốc gia",
    "desc": "Nền tảng số quốc gia/nền tảng số dùng chung thuộc danh mục chính thức; phục vụ triển khai các dịch vụ, nghiệp vụ số dùng chung trong ngành, lĩnh vực hoặc phạm vi toàn quốc",
    "dev": "Bộ Công an",
    "problem": "Hỗ trợ số hóa, chuẩn hóa và dùng chung các nghiệp vụ trong ngành, lĩnh vực",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "enterprise"
  },
  {
    "id": 472,
    "name": "Hệ thống Portal",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Cục Phòng, chống rửa tiền",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 473,
    "name": "Hệ thống QLRR",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 474,
    "name": "Hệ thống quản lý án",
    "desc": "Hệ thống cho phép quản lý tiếp nhận, thụ lý và giải quyết các vụ việc của Tòa án",
    "dev": "Tòa án nhân dân tối cao",
    "problem": "Hệ thống cho phép quản lý tiếp nhận, thụ lý và giải quyết các vụ việc của Tòa án",
    "users": "Cơ quan tư pháp, cán bộ xử lý nghiệp vụ, người dân, doanh nghiệp và tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 475,
    "name": "Hệ thống quản lý bệnh viện VNPT HIS",
    "desc": "VNPT HIS là một Hệ thống quản lý khám chữa bệnh tại các Cơ sở Y tế. Hệ thống gồm các phân hệ chức năng chính như: Tiếp đón bệnh nhân; Khám chữa bệnh; Quản lý hành chính nội trú và điều trị lâm sàng; Quản lý Cận Lâm Sàng;",
    "dev": "VNPT - IT",
    "problem": "Quản lý khám chữa bệnh còn thủ công, phân tán, thiếu liên thông dữ liệu; Khó khăn trong quản lý viện phí, BHYT và quyết toán; Thiếu dữ liệu tổng hợp phục vụ điều hành, báo cáo; Chưa đáp ứng yêu cầu chuyển đổi số và tiêu chí",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Tiếp đón bệnh nhân, đăng ký khám; Khám lâm sàng, chỉ định cận lâm sàng; Thực hiện xét nghiệm/chẩn đoán hình ảnh, trả kết quả; Bác sĩ chẩn đoán, kê đơn/điều trị; Quản lý nội trú; Thanh toán viện phí, xử lý BHYT; Tổng hợp",
    "cat": "healthcare"
  },
  {
    "id": 476,
    "name": "Hệ thống quản lý C/O điện tử",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 477,
    "name": "Hệ thống Quản lý cán bộ",
    "desc": "Quản lý hồ sơ cán bộ",
    "dev": "Cục Hải quan",
    "problem": "Quản lý hồ sơ cán bộ",
    "users": "Cơ quan nội vụ, cán bộ, công chức, viên chức và cơ quan, tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 478,
    "name": "Hệ thống quản lý cán bộ công chức viên chức tại NHNN",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Vụ Tổ chức cán bộ",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Cơ quan nội vụ, cán bộ, công chức, viên chức và cơ quan, tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 479,
    "name": "Hệ thống quản lý cầu VBMS",
    "desc": "Quản lý cầu trên quốc lộ",
    "dev": "Cục Đường bộ Việt Nam",
    "problem": "Quản lý cầu trên quốc lộ",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 480,
    "name": "Hệ thống quản lý cấp thẻ tác nghiệp",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Cục Báo chí",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào;",
    "cat": "enterprise"
  },
  {
    "id": 481,
    "name": "Hệ thống quản lý cấp đổi thẻ nhà báo",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Cục Báo chí",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 482,
    "name": "Hệ thống quản lý công chức, viên chức người lao động Cục Báo chí",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Cục Báo chí",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 483,
    "name": "Hệ thống Quản lý công việc",
    "desc": "Là công cụ hỗ trợ lãnh đạo và cán bộ đơn vị theo dõi được tiến độ và quá trình thực hiện nhiệm vụ, công việc mình đã giao và được giao; Hệ thống cho phép tổng hợp, thống kê những công việc, nhiệm vụ đã được giao, đã thực hiện đúng hạn, quá hạn đến các phòn g ban đơn vị và đến tận cá nhân từng cán bộ giúp tăng cường hiệu quả quản lý, điều hành của lãnh đạo, Chuẩn hóa và minh bạch quy trình làm việc",
    "dev": "Công ty Cổ phần Tin học Tân Dân",
    "problem": "Giúp lãnh đạo và cán bộ đơn vị theo dõi được tiến độ và quá trình thực hiện nhiệm vụ, công việc mình đã giao và được giao; Hỗ trợ lãnh đạo, cán bộ tại đơn vị giải quyết công việc hàng ngày, vấn đề phát sinh hay giải quyết, ứng phó sự cố theo quy trình, kịc h bản điều hành được xây dựng sẵn trên hệ thống",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Lãnh đạo đơn vị tạo công việc, giao việc cho các phòng ban chuyên môn hoặc trực tiếp cho các cán bộ, chuyên viên trong đơn vị theo từng nhóm công việc, hệ thống ghi nhận và theo dõi tiến độ, trạng thái công việc và thời gian hoàn thành; Lãnh đạo đơn vị kíc h hoạt các kịch bản điều hành được xây dựng sẵn, các bộ phần phòng ban và cá nhân liên quan sẽ nhận được nhiệm vụ, công việc được giao đã tạo lập sẵn theo từng kịch bản",
    "cat": "enterprise"
  },
  {
    "id": 484,
    "name": "Hệ thống quản lý công việc BASE",
    "desc": "Xử lý các công việc",
    "dev": "Cục Quản lý và phát triển thị trường trong nước",
    "problem": "Xử lý các công việc",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 485,
    "name": "Hệ thống quản lý công việc nội bộ trên nền tảng Base",
    "desc": "Quản lý, giao việc",
    "dev": "Quỹ Đổi mới công nghệ quốc gia",
    "problem": "Quản lý, giao việc",
    "users": "Cơ quan, tổ chức, doanh nghiệp, cán bộ quản trị và người dùng nội bộ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 486,
    "name": "Hệ thống quản lý cơ sở dữ liệu theo dõi nhiệm vụ Chính phủ, Thủ tướng Chính phủ giao",
    "desc": "Nền tảng số quốc gia/nền tảng số dùng chung thuộc danh mục chính thức; phục vụ triển khai các dịch vụ, nghiệp vụ số dùng chung trong ngành, lĩnh vực hoặc phạm vi toàn quốc",
    "dev": "Văn phòng Chính phủ",
    "problem": "Hỗ trợ số hóa, chuẩn hóa và dùng chung các nghiệp vụ trong ngành, lĩnh vực",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin và quản trị hệ thống",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "enterprise"
  },
  {
    "id": 487,
    "name": "Hệ thống quản lý danh mục dùng chung (IAM)",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng chung để Quản lý thông tin về người dùng, thông tin danh mục dùng chung. Phục vụ công tác giám sát, quản trị và kiểm soát truy cập của các tài khoản vào hệ thống phần mềm nghiệp vụ ngành BHXH V iệt Nam",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng chung để Quản lý thông tin về người dùng, thông tin danh mục dùng chung. Phục vụ công tác giám sát, quản trị và kiểm soát truy cập của các tài khoản vào hệ thống phần mềm nghiệp vụ ngành BHXH V iệt Nam",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 488,
    "name": "Hệ thống quản lý dòng tiền",
    "desc": "Quản lý, lưu trữ tập trung tại Trung tâm dữ liệu ngành BHXH Việt Nam để hỗ trợ cán bộ, Lãnh đạo",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý, lưu trữ tập trung tại Trung tâm dữ liệu ngành BHXH Việt Nam để hỗ trợ cán bộ, Lãnh đạo",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "enterprise"
  },
  {
    "id": 489,
    "name": "Hệ thống quản lý dữ liệu nông sản thành phố Hải Phòng",
    "desc": "Cung cấp hệ thống dữ liệu nông sản thành phố miễn phí cho: các cơ sở, tổ chức, cá nhân có hoạt động sản xuất, kinh doanh (bao gồm nông sản có nguồn gốc thực vật, nông sản có nguồn gốc động vật, thủy sản, sản phẩm thủy sản, sản phẩm OCOP…). Tích hợp dữ liệu nông sản phục vụ cơ quan quản lý nhà nước và các cơ sở sản xuất, kinh doanh trực tiếp đến ngườ i tiêu dùng",
    "dev": "Sở Nông nghiệp và Môi trường",
    "problem": "Xây dựng trang thông tin dữ liệu nông sản thành phố nhằm cung cấp miễn phí thông tin công khai về nông sản cho người dân; hỗ trợ cơ sở sản xuất, kinh doanh nông sản quảng bá, giới thiệu sản phẩm, quản lý và tra cứuthông tin sản phẩm, nhật ký sản xuất; hỗ t rợ thông tin thị trường, xúc tiến thương mại, kết nối hợp tác.",
    "users": "Nông dân, hợp tác xã, doanh nghiệp nông nghiệp, cán bộ kỹ thuật và cơ quan quản lý ngành nông nghiệp",
    "process": "Truy cập hệ thống - Xem danh sách, tìm kiếm thông tin sản phẩm, cơ sở SXKD - Xác thực thông tin - đăng nhập hệ thống - Đăng ký thành viên - Thêm, sửa, xóa sản - Phê duyệt - Thực hiện nghiệp vụ tương ứng trên hệ thống - Gửi email xác thực - Xử lý vấn đề người dùng yêu cầu - Phê duyệt yêu cầu - Thực hiện báo cáo thống kê",
    "cat": "government"
  },
  {
    "id": 490,
    "name": "Hệ thống quản lý dữ liệu nội bộ công chức viên chức",
    "desc": "Số hóa, lưu trữ và quản lý toàn diện hồ sơ, quá trình công tác, lương, thi đua khen thưởng cán bộ công chức TTXVN",
    "dev": "Thông tấn xã Việt Nam",
    "problem": "Số hóa, lưu trữ và quản lý toàn diện hồ sơ, quá trình công tác, lương, thi đua khen thưởng cán bộ công chức TTXVN",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 491,
    "name": "Hệ thống quản lý dữ liệu sản phẩm OCOP",
    "desc": "Hệ thống quản lý dữ liệu các sản phẩm OCOP của Thành phố Hải Phòng; Lưu trữ hồ sơ các sản phẩm",
    "dev": "Sở Nông nghiệp và Môi trường Hải Phòng",
    "problem": "Lưu trữ hồ sơ các sản phẩm OCOP; Đánh giá, phân hạng các sản phẩm OCOP",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Cập nhật Hồ sơ OCOP của các chủ thể lên Hệ thống quản lý dữ liệu các sản phẩm OCOP của Thành phố; Lưu trữ hồ sơ các sản",
    "cat": "enterprise"
  },
  {
    "id": 492,
    "name": "Hệ thống quản lý giáo dục EduCRM",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Công ty TNHH Công nghệ Giáo dục Educrm",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Doanh nghiệp, lãnh đạo quản lý, bộ phận tài chính - kế toán, nhân sự, kinh doanh và vận hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 493,
    "name": "Hệ thống quản lý giáo dục LMS",
    "desc": "Hệ thống quản lý giáo dục LMS (Learning Management System) là nền tảng quản lý và tổ chức đào tạo trực tuyến; LMS cho phép tạo và quản lý khóa học, phân phối tài liệu, bài giảng, kiểm tra - đánh giá, đồng thời theo dõi tiến độ học tập của học viên",
    "dev": "Công ty Cổ phần Tin học Tân Dân",
    "problem": "Việc áp dụng LMS giúp nâng cao chất lượng đào tạo, tiết kiệm chi phí, chuẩn hóa quy trình quản lý và xây dựng môi trường học tập hiện đại",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Hỗ trợ tất cả công tác quản lý, các luồng nghiệp vụ chuyên ngành trong công tác giáo dục, đào tạo tại các trường học trên địa bàn",
    "cat": "education"
  },
  {
    "id": 494,
    "name": "Hệ thống quản lý hàng hóa kinh doanh miễn thuế",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 495,
    "name": "Hệ thống Quản lý hàng hóa XNK giao dịch qua TMĐT",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 496,
    "name": "Hệ thống Quản lý hoạt động kiểm tra",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để cung cấp phục vụ hoạt động nội bộ của Ngành BHXH Việt Nam liên quan đến việc kiểm tra tiếp công dân của Ngành",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để cung cấp phục vụ hoạt động nội bộ của Ngành BHXH Việt Nam liên quan đến việc kiểm tra tiếp công dân của Ngành",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 497,
    "name": "Hệ thống quản lý hồ sơ công chức, viên chức",
    "desc": "Thông tin riêng và thông tin cá nhân/HTTT phục vụ hoạt động nội bộ/Quản lý nội bộ hồ sơ các công chức, viên chức ngành Thống kê",
    "dev": "Cục Thống kê",
    "problem": "Thông tin riêng và thông tin cá nhân/HTTT phục vụ hoạt động nội bộ/Quản lý nội bộ hồ sơ các công chức, viên chức ngành Thống kê",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 498,
    "name": "Hệ thống quản lý hồ sơ hành chính điện tử",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, hồ sơ hành chính điện tử hình thành từ kết quả thực hiện nghiệp vụ, giao dịch điện tử tại các hệ thống như: quản lý văn bản và điều hành, giao dịch điện tử, hệ thống nghiệp vụ chuyên ngành",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, hồ sơ hành chính điện tử hình thành từ kết quả thực hiện nghiệp vụ, giao dịch điện tử tại các hệ thống như: quản lý văn bản và điều hành, giao dịch điện tử, hệ thống nghiệp vụ chuyên ngành",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 499,
    "name": "Hệ thống quản lý hồ sơ khen thưởng điện tử ngành thi đua - khen thưởng (EECS)",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Ban Thi đua - Khen thưởng Trung ương",
    "dev": "Ban Thi đua - Khen thưởng Trung ương",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực nội vụ; Hoạt động của Đảng Cộng sản, tổ chức chính trị - xã hội, quản lý nhà nước, an ninh quốc phòng; bảo đảm xã hội bắt buộc.",
    "users": "Cơ quan nội vụ, cán bộ, công chức, viên chức và cơ quan, tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 500,
    "name": "Hệ thống quản lý hồ sơ số hóa",
    "desc": "Quản lý hồ sơ dự án bảo trì đường quốc lộ",
    "dev": "Cục Đường bộ Việt Nam",
    "problem": "Quản lý hồ sơ dự án bảo trì đường quốc lộ",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 501,
    "name": "Hệ thống Quản lý hồ sơ Tương trợ tư pháp về hình sự",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Viện Kiểm sát nhân dân tối cao",
    "dev": "Viện Kiểm sát nhân dân tối cao",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tư pháp; Hoạt động của Đảng Cộng sản, tổ chức chính trị - xã hội, quản lý nhà nước, an ninh quốc phòng; bảo đảm xã hội bắt buộc.",
    "users": "Cơ quan tư pháp, cán bộ xử lý nghiệp vụ, người dân, doanh nghiệp và tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 502,
    "name": "Hệ thống quản lý học tập LMS",
    "desc": "Phục vụ công việc và vận hành của Trường",
    "dev": "Trường Cao đẳng Lương thực, thực phẩm",
    "problem": "Phục vụ công việc và vận hành của Trường",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 503,
    "name": "Hệ thống quản lý kết nối Cung - Cầu",
    "desc": "Là công cụ hỗ trợ người dân, hộ kinh doanh, sản xuất trên địa bàn có các mặt hàng cần bán dễ dàng giới thiệu sản phẩm tới người có nhu cầu cần mua; Người tiêu dùng, thương lái đưa được thông tin mặt hàng đang tìm kiếm qua đó dễ dàng tiếp cận, tìm được nguồ n hàng thúc đẩy thông thương, phát triển kinh tế",
    "dev": "Công ty Cổ phần Tin học Tân Dân",
    "problem": "Kích cầu tiêu dùng, kết nối nhanh chóng giữa người cần mua và người cần bán giúp phát triển kinh tế tư nhân, kinh tế hộ gia đình tại địa phương",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dân, hộ kinh doanh giới thiệu các mặt hàng cần mua, cần bán lên hệ thống gồm thông tin mặt hàng, nhu cầu mong muốn, giá cả… vv. Cán bộ được giao nhiệm vụ tại xã/phường phê duyệt các sản phẩm để công khai trên ứng dụng và cộng đồng dân cư tại địa phươ ng",
    "cat": "enterprise"
  },
  {
    "id": 504,
    "name": "Hệ thống quản lý khai thác hồ sơ tài liệu lưu trữ",
    "desc": "Phục vụ cán bộ khai thác, tra cứu tài liệu lưu trữ đã số hóa của Cơ quan",
    "dev": "Ủy ban Trung ương MTTQ Việt Nam",
    "problem": "Phục vụ cán bộ khai thác, tra cứu tài liệu lưu trữ đã số hóa của Cơ quan",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 505,
    "name": "Hệ thống Quản lý Kỳ thi Tốt nghiệp THPT",
    "desc": "Phục vụ công tác tổ chức kỳ thi tốt nghiệp THPT",
    "dev": "Bộ Giáo dục và Đào tạo",
    "problem": "Phục vụ công tác tổ chức kỳ thi tốt nghiệp THPT",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 506,
    "name": "Hệ thống quản lý lưu trữ hồ sơ điện tử",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để quản lý lưu trữ hồ sơ hưởng các chế độ BHXH dưới dạng điện tử",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để quản lý lưu trữ hồ sơ hưởng các chế độ BHXH dưới dạng điện tử",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 507,
    "name": "Hệ thống quản lý mặt đường PMS",
    "desc": "Quản lý tình trạng mặt đường quốc lộ",
    "dev": "Cục Đường bộ Việt Nam",
    "problem": "Quản lý tình trạng mặt đường quốc lộ",
    "users": "Doanh nghiệp vận tải, logistics, đơn vị quản lý kho bãi/cảng, lái xe, nhân viên vận hành và khách hàng sử dụng dịch vụ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 508,
    "name": "Hệ thống Quản lý nghiệp vụ dự trữ quốc gia",
    "desc": "Hệ thống Quản lý nghiệp vụ DTQG đã đáp ứng một số mục tiêu như sau: Quản lý tình hình kho dự trữ; Quản lý danh mục hàng, phân bố, số lượng, giá trị hàng DTQG; Quản lý công tác nhập, xuất hàng DTQG;",
    "dev": "Cục Dự trữ Nhà nước",
    "problem": "Hệ thống Quản lý nghiệp vụ DTQG đã đáp ứng một số mục tiêu như sau: Quản lý tình hình kho dự trữ; Quản lý danh mục hàng, phân bố, số lượng, giá trị hàng DTQG; Quản lý công tác nhập, xuất hàng DTQG;",
    "users": "Ngân hàng, tổ chức tài chính, doanh nghiệp và khách hàng cá nhân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 509,
    "name": "Hệ thống Quản lý nguồn nhân lực",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 510,
    "name": "Hệ thống quản lý nguồn thu trực tuyến SSC",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực văn hóa, Thể thao và Du lịch; Giáo dục và Đào tạo",
    "dev": "Công ty Cổ phần Văn hóa Ngôi Nhà Xanh",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực văn hóa, Thể thao và Du lịch; Giáo dục và Đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 511,
    "name": "Hệ thống Quản lý nhà thuốc",
    "desc": "Giải pháp quản lý hiệu quả cho toàn bộ nhà thuốc, quầy thuốc trên toàn quốc giúp quản lý tổng thể quy trình hoạt động của nhà thuốc từ danh mục hàng hóa, xuất nhập kho, quản lý bán hàng, hóa đơn, khách hàng, đồng bộ dữ liệu tự động với Hệ thống quản lý Dượ c Quốc gia",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Quản lý tổng thể hoạt động nhà thuốc, quầy thuốc (danh mục, kho, bán hàng) và đồng bộ dữ liệu với hệ thống dược quốc gia",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Giải pháp quản lý hiệu quả cho toàn bộ nhà thuốc, quầy thuốc trên toàn quốc giúp quản lý tổng thể quy trình hoạt động của nhà thuốc từ danh mục hàng hóa, xuất nhập kho, quản lý bán hàng, hóa đơn, khách hàng, đồng bộ dữ liệu tự động với Hệ thống quản lý Dượ c Quốc gia",
    "cat": "finance"
  },
  {
    "id": 512,
    "name": "Hệ thống quản lý nhân sự",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, thay thế giấy tờ, cải cách hành chính, sử dụng chung để quản lý",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, thay thế giấy tờ, cải cách hành chính, sử dụng chung để quản lý",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "government"
  },
  {
    "id": 513,
    "name": "Hệ thống Quản lý nhân sự của Bộ",
    "desc": "Theo dõi quản lý nhân sự của Bộ",
    "dev": "Ủy ban Tiêu chuẩn Đo lường Chất lượng Quốc gia",
    "problem": "Theo dõi quản lý nhân sự của Bộ",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin và quản trị hệ thống; cơ quan nội vụ, cán bộ, công chức, viên chức và cơ quan, tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 514,
    "name": "Hệ thống quản lý nhiệm vụ đổi mới sáng tạo",
    "desc": "Quản lý các chương trình, nhiệm vụ do Quỹ hỗ trợ, tài trợ",
    "dev": "Quỹ Đổi mới công nghệ quốc gia",
    "problem": "Quản lý các chương trình, nhiệm vụ do Quỹ hỗ trợ, tài trợ",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin và quản trị hệ thống",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 515,
    "name": "Hệ thống quản lý nợ và phân tích tài chính (DMFAS)",
    "desc": "Hỗ trợ quản lý nợ công của Chính phủ, giám sát các rủi ro tài chính từ các nghĩa vụ nợ của doanh nghiệp Nhà nước; Hỗ trợ phát triển việc ghi chép nợ trong nước và quản lý rủi ro trong Chính phủ cũng như việc tổng hợp tổng thể công tác quản lý nợ thông qua giao diện với TABMIS",
    "dev": "Cục Quản lý nợ",
    "problem": "Hỗ trợ quản lý nợ công của Chính phủ, giám sát các rủi ro tài chính từ các nghĩa vụ nợ của doanh nghiệp Nhà nước; Hỗ trợ phát triển việc ghi chép nợ trong nước và quản lý rủi ro trong Chính phủ cũng như việc tổng hợp tổng thể công tác quản lý nợ thông qua giao diện với TABMIS",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 516,
    "name": "Hệ thống quản lý nội bộ Học viện",
    "desc": "Quản lý nhiệm vụ, quản lý lịch công tác, nhiệm vụ, nhân sự và đào tạo bồi dưỡng",
    "dev": "Học viện Chiến lược Khoa học và Công nghệ",
    "problem": "Quản lý nhiệm vụ, quản lý lịch công tác, nhiệm vụ, nhân sự và đào tạo bồi dưỡng",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 517,
    "name": "Hệ thống quản lý OJS cho Tạp chí Công Thương - Các kết quả nghiên cứu khoa học và Ứng dụng công nghệ",
    "desc": "Phục vụ công việc",
    "dev": "Tạp chí Công Thương",
    "problem": "Phục vụ công việc",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin và quản trị hệ thống",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 518,
    "name": "Hệ thống Quản lý Phát hành và kho quỹ (CMO)",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Cục Công nghệ thống tin",
    "dev": "Cục Công nghệ thống tin",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực công Thương",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 519,
    "name": "Hệ thống quản lý phân tích số liệu nghiệp vụ Viễn thông",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Cục Viễn thông",
    "dev": "Cục Viễn thông",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực sản phẩm, giải pháp dùng chung",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 520,
    "name": "Hệ thống Quản lý phương tiện vận tải đường bộ",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Doanh nghiệp vận tải, logistics, đơn vị quản lý kho bãi/cảng, lái xe, nhân viên vận hành và khách hàng sử dụng dịch vụ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 521,
    "name": "Hệ thống quản lý quá trình thực hiện và đánh giá luận văn, luận án bậc đào tạo",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "dev": "Đại học Kinh tế Thành phố Hồ Chí Minh",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 522,
    "name": "Hệ thống Quản lý Quỹ TDND",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Trung tâm Thông tin tín dụng Quốc gia Việt Nam",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "enterprise"
  },
  {
    "id": 523,
    "name": "Hệ thống quản lý Seal định vị",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Doanh nghiệp vận tải, logistics, đơn vị quản lý kho bãi/cảng, lái xe, nhân viên vận hành và khách hàng sử dụng dịch vụ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 524,
    "name": "Hệ thống quản lý sinh viên",
    "desc": "Quản lý hồ sơ sinh viên và dữ liệu học tập",
    "dev": "Học viện Tài chính",
    "problem": "Quản lý hồ sơ sinh viên và dữ liệu học tập",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 525,
    "name": "Hệ thống quản lý Tài chính kế toán",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Trường Cao đẳng Mỹ thuật trang trí Đồng Nai",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Doanh nghiệp, lãnh đạo quản lý, bộ phận tài chính - kế toán, nhân sự, kinh doanh và vận hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 526,
    "name": "Hệ thống quản lý tài khoản đầu tư tự động",
    "desc": "Quản lý tập trung tại BHXH Việt Nam, sử dụng để quản lý, theo dõi thông tin các tài khoản đầu tư từ quỹ BHXH, BHYT, BHTN của BHXH Việt Nam tại các ngân hàng thương mại",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung tại BHXH Việt Nam, sử dụng để quản lý, theo dõi thông tin các tài khoản đầu tư từ quỹ BHXH, BHYT, BHTN của BHXH Việt Nam tại các ngân hàng thương mại",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 527,
    "name": "Hệ thống quản lý tài sản công",
    "desc": "Là công cụ giúp chuẩn hóa và minh bạch công tác quản lý theo quy định pháp luật, đồng thời tự động hóa các nghiệp vụ từ đăng ký, theo dõi, bảo dưỡng đến điều chuyển, thanh lý. Giải",
    "dev": "Công ty Cổ phần Tin học Tân Dân",
    "problem": "Số hóa, quản lý tập trung tài sản; Kiểm soát chặt chẽ vòng đời tài sản; Chuẩn hóa quy trình nghiệp vụ; Công khai, minh bạch thông tin tài sản; Nâng cao trách nhiệm của cán bộ",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Đơn vị số hóa và cập nhật toàn bộ tài sản công cùng các thuộc tính của tài sản lên trên hệ thống. Hệ thống phần mềm sẽ hỗ trợ theo dõi, quản lý toàn bộ quá trình sử dụng từ đăng ký,",
    "cat": "government"
  },
  {
    "id": 528,
    "name": "Hệ thống quản lý tài sản tập trung",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, thay thế giấy tờ, cải cách hành chính, sử dụng chung để quản lý, lưu trữ, cập nhật các thông tin về tài sản của các đơn vị, cá nhân toàn ngành BHXH Việt Nam",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, thay thế giấy tờ, cải cách hành chính, sử dụng chung để quản lý, lưu trữ, cập nhật các thông tin về tài sản của các đơn vị, cá nhân toàn ngành BHXH Việt Nam",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 529,
    "name": "Hệ thống quản lý tài sản đường bộ",
    "desc": "Quản lý các loại tài sản đường quốc lộ",
    "dev": "Cục Đường bộ Việt Nam",
    "problem": "Quản lý các loại tài sản đường quốc lộ",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 530,
    "name": "Hệ thống quản lý theo dõi giải ngân nguồn vốn chi hoạt động kinh tế đường bộ",
    "desc": "Theo dõi tình hình giải ngân nguồn vốn chi hoạt động kinh tế đường bộ",
    "dev": "Cục Đường bộ Việt Nam",
    "problem": "Theo dõi tình hình giải ngân nguồn vốn chi hoạt động kinh tế đường bộ",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất động sản, đơn vị vận hành và người dân/cư dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 531,
    "name": "Hệ thống Quản lý thông tin Emanifest",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 532,
    "name": "Hệ thống Quản lý thông tin vi phạm",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 533,
    "name": "Hệ thống quản lý thu NSNN (TCS)",
    "desc": "Hệ thống quản lý thu NSNN (TCS) được KBNN triển khai theo mô hình tập trung từ năm 2011, đáp ứng nhu cầu quản lý thu, hoàn thu NSNN qua Kho bạc; nhận chứng từ, thông tin thu NSNN từ các Ngân hàng Thương mại; trao đổi thông tin thu, hoàn thu NSNN với cơ qua n Tài chính, Thuế, Hải quan; trao đổi thông tin thu NSNN với Cổng dịch vụ công Quốc gia. Hàng năm, hệ thống TCS xử lý trên 30 triệu chứng thừ thu, hoàn thu NSNN.",
    "dev": "Kho bạc Nhà nước",
    "problem": "Hệ thống quản lý thu NSNN (TCS) được KBNN triển khai theo mô hình tập trung từ năm 2011, đáp ứng nhu cầu quản lý thu, hoàn thu NSNN qua Kho bạc; nhận chứng từ, thông tin thu NSNN từ các Ngân hàng Thương mại; trao đổi thông tin thu, hoàn thu NSNN với cơ qua n Tài chính, Thuế, Hải quan; trao đổi thông tin thu NSNN với Cổng dịch vụ công Quốc gia. Hàng năm, hệ thống TCS xử lý trên 30 triệu chứng thừ thu, hoàn thu NSNN.",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 534,
    "name": "Hệ thống quản lý thuốc",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để quản lý, theo dõi việc sử dụng thuốc của cơ sở KCB BHYT",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để quản lý, theo dõi việc sử dụng thuốc của cơ sở KCB BHYT",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 535,
    "name": "Hệ thống Quản lý thủ tục hành chính của UBCKNN",
    "desc": "Hệ thống thông tin nhằm phục vụ giải quyết thủ tục hành chính của UBCKNN",
    "dev": "Ủy ban Chứng khoán Nhà nước",
    "problem": "Hệ thống thông tin nhằm phục vụ giải quyết thủ tục hành chính của UBCKNN",
    "users": "Người dân, doanh nghiệp, cơ quan nhà nước và cán bộ tiếp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "government"
  },
  {
    "id": 536,
    "name": "Hệ thống quản lý thư viện",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Trường Cao đẳng Du lịch Vũng Tàu",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Cơ quan văn hóa, bảo tàng, thư viện, đơn vị quản lý di sản, người dân và khách tham quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 537,
    "name": "Hệ thống quản lý thư viện điện tử",
    "desc": "Quản lý tài liệu, tài nguyên số và thư viện",
    "dev": "Học viện Tài chính",
    "problem": "Quản lý tài liệu, tài nguyên số và thư viện",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 538,
    "name": "Hệ thống quản lý tri thức và quản lý tài liệu (MIS)",
    "desc": "Quản lý đề tài, quản lý tài liệu của Viện VKIST",
    "dev": "Viện Khoa học và Công nghệ Việt Nam - Hàn Quốc",
    "problem": "Quản lý đề tài, quản lý tài liệu của Viện VKIST",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin và quản trị hệ thống",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 539,
    "name": "Hệ thống Quản lý trường học SMAS",
    "desc": "SMAS là hệ thống phần mềm quản lý nhà trường do Viettel cung cấp cho Sở/Phòng giáo dục và đào tạo, các trường trường từ cấp mầm non đến cấp phổ thông và trung tâm giáo dục thường xuyên để thực hiện các nghiệp vụ quản lý xoay quanh học sinh và giáo viên",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Quản lý toàn diện hoạt động trường học (học sinh, giáo viên, điểm số, chuyên cần) cho hệ thống giáo dục từ mầm non đến THPT",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "SMAS là hệ thống phần mềm quản lý nhà trường do Viettel cung cấp cho Sở/Phòng giáo dục và đào tạo, các trường trường từ cấp mầm non đến cấp phổ thông và trung tâm giáo dục thường xuyên để thực hiện các nghiệp vụ quản lý xoay quanh học sinh và giáo viên",
    "cat": "education"
  },
  {
    "id": 540,
    "name": "Hệ thống quản lý trực tuyến nhiệm vụ",
    "desc": "Quản lý toàn bộ vòng đời của nhiệm vụ khoa học và công nghệ",
    "dev": "Quỹ Phát triển khoa học và công nghệ Quốc gia",
    "problem": "Quản lý toàn bộ vòng đời của nhiệm vụ khoa học và công nghệ",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý,",
    "cat": "enterprise"
  },
  {
    "id": 541,
    "name": "Hệ thống quản lý trực tuyến nhiệm vụ khoa học và công nghệ (STM)",
    "desc": "Nền tảng số hóa toàn diện quy trình quản lý các nhiệm vụ KH&CN cấp Quốc gia, từ khâu đăng ký, xét duyệt, triển khai, kiểm tra tiến độ cho đến nghiệm thu và lưu trữ kết quả. Mô hình quản lý toàn quốc",
    "dev": "CÔNG TY CỔ PHẦN PHẦN MỀM REVOTECH",
    "problem": "Tập trung quản lý nhiệm vụ KH&CN toàn quốc trên cùng 1 nền tảng; Thay thế quy trình quản lý hồ sơ giấy truyền thống vốn chậm trễ và dễ thất lạc; Chuyển đổi số và nâng cao hiệu quả quản lý; Minh bạch hóa việc tuyển chọn và xét duyệt nhiệm vụ thông qua hội đồng chuyên gia; Tổng hợp dữ liệu và báo cáo thống kê tình hình nghiên cứu khoa học trên phạm vi cả nước.",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin và quản trị hệ thống",
    "process": "Thông báo & Đăng ký: Đơn vị quản lý nhiệm vụ thông báo/đặt hàng/xét tài trợ; tổ chức/cá nhân nộp hồ sơ trực tuyến. Đánh giá hồ sơ: kiểm tra tính hợp lệ, thành lập hội đồng khoa học, Thành viên Hội đồng khoa học đánh giá trực tuyến. Phê duyệt: Cập nhật kết quả phê duyệt nhiệm vụ (tài trợ/không tài trợ). Ký hợp đồng điện tử: Thực hiện ký số hợp đồng trên nền tảng",
    "cat": "enterprise"
  },
  {
    "id": 542,
    "name": "Hệ thống quản lý và cấp chứng nhận xuất xứ điện tử",
    "desc": "Nền tảng điện tử dùng để quản lý và cấp chứng nhận xuất xứ (C/O) cho hàng hóa xuất khẩu. Giúp cơ quan chức năng kiểm soát và quản lý thông tin liên quan đến xuất xứ hàng hóa dễ dàng hơn. Đồng thời giúp doanh nghiệp xuất khẩu giảm bớt thủ tục không cần thiế t để chứng nhận xuất xứ cho hàng hóa xuất khẩu",
    "dev": "Cục Xuất nhập khẩu",
    "problem": "Nền tảng điện tử dùng để quản lý và cấp chứng nhận xuất xứ (C/O) cho hàng hóa xuất khẩu. Giúp cơ quan chức năng kiểm soát và quản lý thông tin liên quan đến xuất xứ hàng hóa dễ dàng hơn. Đồng thời giúp doanh nghiệp xuất khẩu giảm bớt thủ tục không cần thiế t để chứng nhận xuất xứ cho hàng hóa xuất khẩu",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 543,
    "name": "Hệ thống Quản lý và khai thác dữ liệu số",
    "desc": "Hệ thống quản lý và khai thác dữ liệu số ngành công thương là hệ thống quản lý,",
    "dev": "VNPT - IT Đơn vị cung cấp thông",
    "problem": "Giải quyết công tác điều hành, quản lý nhà nước của ngành Công Thương trong",
    "users": "Cơ quan quản lý đô thị, chủ đầu tư, doanh nghiệp xây dựng/bất",
    "process": "Xây dựng CSDL chuyên ngành, số hóa toàn toàn diện quy trình các thủ tục",
    "cat": "enterprise"
  },
  {
    "id": 544,
    "name": "Hệ thống quản lý và điều hành tập trung CCES",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 545,
    "name": "Hệ thống quản lý và điều hành văn bản điện tử Bộ Y tế",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực y tế",
    "dev": "Văn phòng Bộ",
    "problem": "Hệ thống quản lý và điều hành văn bản điện tử Bộ Y tế",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "healthcare"
  },
  {
    "id": 546,
    "name": "Hệ thống quản lý và điều hành đồng nai - s (iOffice)",
    "desc": "Quản lý văn bản, hệ thống thanh toán kho bạc, thu học phí, xuất hóa đơn điện ử, quản lý đào tạo, quản lý tài liệu, thu nhận hồ sơ giấy phép lái xe, quản lý học tập trực tuyến",
    "dev": "Trường Cao đẳng Cơ giới và Thủy lợi",
    "problem": "Quản lý văn bản, hệ thống thanh toán kho bạc, thu học phí, xuất hóa đơn điện ử, quản lý đào tạo, quản lý tài liệu, thu nhận hồ sơ giấy phép lái xe, quản lý học tập trực tuyến",
    "users": "Doanh nghiệp, lãnh đạo quản lý, bộ phận tài chính - kế toán, nhân sự, kinh doanh và vận hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 547,
    "name": "Hệ thống Quản lý văn bản",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Cục Quản lý ngoại hối",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "enterprise"
  },
  {
    "id": 548,
    "name": "Hệ thống quản lý văn bản & điều hành",
    "desc": "Quản lý văn bản đi/đên - điều hành công việc",
    "dev": "Cục Văn thư và Lưu trữ nhà nước",
    "problem": "Quản lý văn bản đi/đên - điều hành công việc",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 549,
    "name": "Hệ thống quản lý văn bản NHNN",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Vụ Dự báo, thống kê - Ổn định tiền tệ, tài chính",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 550,
    "name": "Hệ thống quản lý văn bản và chỉ đạo điều hành (V - Office)",
    "desc": "Xử lý văn bản tác nghiệp điều hành",
    "dev": "Cục Giám định nhà nước về chất lượng công trình xây dựng",
    "problem": "Xử lý văn bản tác nghiệp điều hành",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 551,
    "name": "Hệ thống quản lý văn bản và Hồ sơ",
    "desc": "Phục vụ công tác quản lý, chỉ đạo, điều hành,; trao đổi văn bản điện tử; Phục vụ công tác quản lý, chỉ đạo, điều hành,; trao đổi văn bản điện tử; Phục vụ công tác quản lý, chỉ đạo, điều hành,; trao đổi văn bản điện tử; Kê khai Bảo hiểm xã hội trực tuyến.",
    "dev": "Ban Quản lý Đầu tư và Xây dựng Thủy lợi 3",
    "problem": "Phục vụ công tác quản lý, chỉ đạo, điều hành,; trao đổi văn bản điện tử; Phục vụ công tác quản lý, chỉ đạo, điều hành,; trao đổi văn bản điện tử; Phục vụ công tác quản lý, chỉ đạo, điều hành,; trao đổi văn bản điện tử; Kê khai Bảo hiểm xã hội trực tuyến.",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 552,
    "name": "Hệ thống quản lý văn bản và hồ sơ công việc 2. 0",
    "desc": "xử lý công việc, theo dõi các nhiệm vụ của Chính phủ, Thủ tướng Chính phủ, phục vụ hoạt động điều",
    "dev": "Cục Chuyển đổi số",
    "problem": "xử lý công việc, theo dõi các nhiệm vụ của Chính phủ, Thủ tướng Chính phủ, phục vụ hoạt động điều",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả",
    "cat": "enterprise"
  },
  {
    "id": 553,
    "name": "Hệ thống quản lý văn bản và hồ sơ điện tử",
    "desc": "QUẢN LÝ VĂN BẢN VÀ HỒ SƠ TRÊN HỆ THỐNG",
    "dev": "BỘ NÔNG NGHIỆP VÀ MÔI TRƯỜNG",
    "problem": "Môi trường kỹ thuật số, giải quyết hồ sơ nhanh",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Sử lý văn bản đến, đi giữa các phòng ban, cơ sở, bộ",
    "cat": "enterprise"
  },
  {
    "id": 554,
    "name": "Hệ thống quản lý văn bản và hồ sơ điện tử của bộ nông nghiệp và môi trường",
    "desc": "Hệ thống Quản lý văn bản và hồ sơ điện tử được xây dựng nhằm phục vụ công tác quản lý, chỉ đạo, điều hành, trao đổi văn bản điện tử thông qua các chức năng cơ bản như: quản lý văn bản đến, văn bản đi; xử lý văn bản và hồ sơ công việc; xử lý phiếu trình giải quyết công việc; gửi, nhận văn bản điện tử giữa các cơ quan, đơn vị trong Bộ Nông nghiệp và Môi trường.",
    "dev": "Bộ Nông nghiệp và Môi trường",
    "problem": "Cung cấp một số chức năng chuyên dụng cho các cấp lãnh đạo như: phân phối văn bản đến, phân công xử lý văn bản đến; phê duyệt, ký số, xác thực ký số; và cung cấp một số chức năng cơ bản khác cho mọi người dùng hệ thống như: tra cứu, tìm kiếm văn bản, lịch công tác, trao đổi trực tuyến.",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Quy trình tiếp nhận, chuyển xử lý văn bản đến; Quy trình dự thảo, phát hành văn bản đi; Quy trình xử lý Phiếu trình giải quyết công việc.",
    "cat": "education"
  },
  {
    "id": 555,
    "name": "Hệ thống quản lý văn bản và điều hành",
    "desc": "tiếp nhận, xử lý, giải quyết, lưu trữ hồ sơ công việc trên môi trường điện tử",
    "dev": "VNPT Ninh Bình",
    "problem": "chuyển công việc từ tiếp nhận, gửi nhận, lưu trữ truyền thống lên môi trường điện tử",
    "users": "Doanh nghiệp du lịch, cơ sở lưu trú, điểm đến du lịch, cơ quan quản lý du lịch và du khách",
    "process": "Văn bản đến văn thư tiếp nhận, chuyển lãnh đạo Sở giao việc cho phòng chuyên môn, phòng chuyên môn xử lý công việc, soạn thảo văn bản trên hệ thống trình kí điện tử chuyển văn thư phát hành gửi các đơn vị liên thông trên hệ thống,",
    "cat": "education"
  },
  {
    "id": 556,
    "name": "Hệ thống Quản lý văn bản và Điều hành (VNPT iOffice)",
    "desc": "Nền tảng số hóa toàn bộ quy trình xử lý văn bản hành chính, cho phép soạn thảo, ký số, phê duyệt, phát hành và lưu trữ văn bản hoàn toàn trên môi trường mạng, liên thông 4 cấp chính quyền",
    "dev": "Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT)",
    "problem": "Xóa bỏ rào cản địa lý: Lãnh đạo có thể ký duyệt văn bản mọi lúc, mọi nơi qua thiết bị di động; Tiết kiệm chi phí: Giảm thiểu tối đa chi phí in ấn, giấy tờ, bưu chính và thời gian luân chuyển văn bản vật lý; Minh bạch hóa: Theo dõi được chính xác trạng thái xử lý văn bản, biết được văn bản đang \"tắc\" ở khâu nào, cán bộ nào; Lưu trữ khoa học: Tra cứu hồ sơ, văn bản cũ chỉ trong vài giây thay vì phải tìm kiếm trong kho lưu trữ giấy.",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Quy trình được thực hiện khép kín trên môi trường số như sau: - Tiếp nhận/Soạn thảo: Văn bản đến được số hóa (scan) vào hệ thống; hoặc chuyên viên soạn thảo văn bản đi trực tiếp trên hệ thống. - Trình ký: Chuyên viên chuyển văn bản lên lãnh đạo phòng/lãnh đạo UBND xem xét. - Phê duyệt & Ký số: Lãnh đạo sử dụng chữ ký số chuyên dùng Chính phủ để phê duyệt và ký ban hành ngay trên phần mềm",
    "cat": "education"
  },
  {
    "id": 557,
    "name": "Hệ thống quản lý văn bản và điều hành - Ban QLDA Mỹ Thuận",
    "desc": "Quản lý điều hành văn; bản; Gửi nhận văn bản; liên thông.",
    "dev": "Ban Quản lý dự án Mỹ Thuận",
    "problem": "Quản lý điều hành văn; bản; Gửi nhận văn bản; liên thông.",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 558,
    "name": "Hệ thống Quản lý văn bản và điều hành Bộ KH&CN",
    "desc": "Phục vụ công tác quản lý, điều hành và trao đổi văn bản điện tử của Bộ",
    "dev": "Trung tâm Công nghệ thống tin",
    "problem": "Phục vụ công tác quản lý, điều hành và trao đổi văn bản điện tử của Bộ",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 559,
    "name": "Hệ thống quản lý văn bản và điều",
    "desc": "Ban hành, chỉ đạo và thực hiện công việc của Bộ",
    "dev": "Cục Tần số vô tuyến điện",
    "problem": "Ban hành, chỉ đạo và thực hiện công việc của Bộ",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý,",
    "cat": "enterprise"
  },
  {
    "id": 560,
    "name": "Hệ thống quản lý văn bản và điều hành của Cục Tần số vô tuyến điện",
    "desc": "Ban hành và chỉ đạo công việc của Cục",
    "dev": "Cục Tần số vô tuyến điện",
    "problem": "Ban hành và chỉ đạo công việc của Cục",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 561,
    "name": "Hệ thống quản lý văn bản và điều hành của VNPT",
    "desc": "Quản lý văn bản và điều hành",
    "dev": "Cục Văn thư và Lưu trữ nhà nước",
    "problem": "Quản lý văn bản và điều hành",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 562,
    "name": "Hệ thống Quản lý văn bản và điều hành IOC e - Office",
    "desc": "Hệ thống phần mềm phục vụ số hóa và tự động hóa quy trình xử lý văn bản, điều hành công việc, tích hợp chữ ký số và quản lý hồ sơ điện tử trong môi trường số",
    "dev": "Trường Đại Học Khoa học Sức khỏe, ĐHQG - HCM",
    "problem": "Giảm phụ thuộc vào xử lý văn bản giấy; Rút ngắn thời gian trình ký, luân chuyển hồ sơ; Tăng tính minh bạch, theo dõi và truy vết xử lý công việc; Nâng cao hiệu quả điều hành, quản trị nội bộ.",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Tiếp nhận văn bản đến (scan, nhập liệu); Phân luồng, giao xử lý theo quy trình; Soạn thảo, trình ký văn bản điện tử; Ký số và ban hành văn bản; Lưu trữ hồ sơ điện tử; Theo dõi tiến độ và tra cứu văn bản.",
    "cat": "education"
  },
  {
    "id": 563,
    "name": "Hệ thống Quản lý Văn bản điều hành (eoffice)",
    "desc": "Quản lý tập trung thống nhất toàn Ngành, thay thế giấy tờ, cải cách hành chính, sử dụng chung để quản lý các văn bản pháp lý, công văn, hồ sơ, văn bản gửi nhận và điều hành trong ngành BHXH được gửi nhận qua các đơn vị, tổ chức khác nhau được quản lý lưu l ại và tra cứu tập",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn Ngành, thay thế giấy tờ, cải cách hành chính, sử dụng chung để quản lý các văn bản pháp lý, công văn, hồ sơ, văn bản gửi nhận và điều hành trong ngành BHXH được gửi nhận qua các đơn vị, tổ chức khác nhau được quản lý lưu l ại và tra cứu tập",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 564,
    "name": "Hệ thống quản lý văn bản điều hành iOffice (VNPT iOffice)",
    "desc": "là nền tảng phần mềm văn phòng điện tử giúp cơ quan, tổ chức và doanh nghiệp số hóa toàn bộ quy trình tiếp nhận, xử lý, lưu trữ và phát hành văn bản, đồng thời hỗ trợ điều hành công việc trên môi trường mạng. Hệ thống tích hợp các chức năng quản lý văn bản đến/đi, xử lý hồ sơ, giao việc, theo dõi tiến độ, lịch công tác và trao đổi nội bộ, cho phép lãnh đạo điều hành mọi lúc, mọi nơi trên nhiều thiết bị",
    "dev": "VNPT",
    "problem": "Số hóa và tự động hóa quy trình xử lý văn bản; Theo dõi, giám sát tiến độ theo thời gian thực; Lưu trữ tập trung, tra cứu nhanh; Giảm chi phí, tăng hiệu quả điều hành; Hỗ trợ ký số, làm việc mọi lúc mọi nơi; Kết nối liên thông trong hệ sinh thái chính quyề n số.",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "1. Tiếp nhận và đăng ký văn bản Văn bản đến được tiếp nhận (bản giấy hoặc điện tử), số hóa (scan) và cập nhật vào hệ thống. Gán số, phân loại, xác định mức độ khẩn/mật và đơn vị xử lý. 2. Phân luồng và giao xử lý",
    "cat": "education"
  },
  {
    "id": 565,
    "name": "Hệ thống quản lý văn bản, điều hành và tác nghiệp",
    "desc": "Quản lý văn bản (đến, đi, nội bộ) một cách tập trung, thống nhất; Tự động hóa quy trình xử lý công việc: trình ký, phê duyệt, giao việc, theo dõi tiến độ; Tăng hiệu quả điều hành: lãnh đạo xem, duyệt văn bản mọi lúc mọi nơi; theo dõi được tình trạng công v iệc; Giảm giấy tờ, tránh thất lạc hồ sơ, nâng cao tính minh bạch và trách nhiệm của từng cá nhân.",
    "dev": "Tổng Công ty Xi măng Việt Nam (VICEM)",
    "problem": "Quản lý văn bản (đến, đi, nội bộ) một cách tập trung, thống nhất; Tự động hóa quy trình xử lý công việc: trình ký, phê duyệt, giao việc, theo dõi tiến độ; Tăng hiệu quả điều hành: lãnh đạo xem, duyệt văn bản mọi lúc mọi nơi; theo dõi được tình trạng công v iệc; Giảm giấy tờ, tránh thất lạc hồ sơ, nâng cao tính minh bạch và trách nhiệm của từng cá nhân.",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 566,
    "name": "Hệ thống Quản lý vi phạm tập trung",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 567,
    "name": "Hệ thống quản lý xăng dầu quốc gia",
    "desc": "Quản lý xăng dầu",
    "dev": "Cục Quản lý và phát triển thị trường trong nước",
    "problem": "Quản lý xăng dầu",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 568,
    "name": "Hệ thống Quản lý Y tế cơ sở",
    "desc": "VNPT HMIS là Hệ thống Thông tin Quản lý Y tế Cơ sở (Health Management Information System), hỗ trợ quản lý toàn diện hoạt động của trạm y tế xã/phường và trung tâm y tế, bao gồm quản lý khám chữa bệnh ban đầu, y tế dự phòng, tiêm chủng, quản lý hồ sơ sức kh ỏe và báo cáo thống kê",
    "dev": "VNPT - IT",
    "problem": "Quản lý y tế cơ sở còn thủ công, thiếu đồng bộ dữ liệu; Khó khăn trong quản lý hồ sơ sức khỏe người dân; Thiếu công cụ theo dõi y tế dự phòng, tiêm chủng, bệnh không lây nhiễm; Báo cáo thống kê còn chậm, thiếu chính xác; Chưa liên thông dữ liệu với tuyến t rên và Bộ Y tế.",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Tiếp nhận khám bênh - lập hồ sơ sức khỏe 831; Quản lý hồ sơ sức khỏe cá nhân; Thực hiện khám, theo dõi bệnh, cấp phát thuốc; Quản lý tiêm chủng, y tế dự phòng; Theo dõi chương trình sức khỏe cộng đồng (bà mẹ - trẻ em, bệnh không lây nhiễm…); Tổng hợp báo cáo gửi cấp trên; Quản trị danh mục và người dùng.",
    "cat": "healthcare"
  },
  {
    "id": 569,
    "name": "Hệ thống Quản lý Y tế cơ sở",
    "desc": "Hệ thống Quản lý Y tế cơ sở phục vụ công tác quản lý khám chữa bệnh và báo thống kê, sổ sách ngành y của tuyến y tế xã/phường, phòng khám, trạm y tế cơ quan và các cơ sở khám chữa bệnh có quy mô nhỏ",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Quản lý khám chữa bệnh và báo cáo thống kê y tế tuyến xã/phường, trạm y tế và phòng khám quy mô nhỏ",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân",
    "process": "Hệ thống Quản lý Y tế cơ sở phục vụ công tác quản lý khám chữa bệnh và báo thống kê, sổ sách ngành y của tuyến y tế xã/phường, phòng khám, trạm y tế cơ quan và các cơ sở khám chữa bệnh có quy mô nhỏ. Hệ thống cho phép quản lý",
    "cat": "healthcare"
  },
  {
    "id": 570,
    "name": "Hệ thống quản lý đào tạo",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Trường Đại học Thể dục Thể thao Đà Nẵng",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 571,
    "name": "Hệ thống quản lý đào tạo",
    "desc": "Phần mềm hệ thống quản lý đào tạo (Edusoft. Net)",
    "dev": "Công ty TNHH Công Nghệ Anh Quân",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực giáo dục và Đào tạo; Giáo dục và đào tạo",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 572,
    "name": "Hệ thống quản lý đào tạo theo tín chỉ",
    "desc": "Quản lý chương trình đào tạo, đăng ký học phần, kết quả học tập",
    "dev": "Học viện Tài chính",
    "problem": "Quản lý chương trình đào tạo, đăng ký học phần, kết quả học tập",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 573,
    "name": "Hệ thống quản lý đào tạo, quản lý văn bản nội bộ",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Trường Cao đẳng Du lịch Đà Nẵng",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "education"
  },
  {
    "id": 574,
    "name": "Hệ thống quản lý đầu tư quỹ",
    "desc": "Quản tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để quản lý quỹ BHXH, BHYT, BHTN",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng để quản lý quỹ BHXH, BHYT, BHTN",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 575,
    "name": "Hệ thống quản lý đấu giá tài sản",
    "desc": "Nền tảng số quốc gia/nền tảng số dùng chung thuộc danh mục chính thức; phục vụ triển khai các dịch vụ, nghiệp vụ số dùng chung trong ngành, lĩnh vực hoặc phạm vi toàn quốc",
    "dev": "Bộ Công an",
    "problem": "Hỗ trợ số hóa, chuẩn hóa và dùng chung các nghiệp vụ trong ngành, lĩnh vực",
    "users": "Lực lượng Công an, cán bộ xử lý nghiệp vụ, cơ quan nhà nước, người dân và tổ chức có liên quan",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "enterprise"
  },
  {
    "id": 576,
    "name": "Hệ thống quản lý điều hành Bộ Công Thương",
    "desc": "Phục vụ công việc",
    "dev": "Cục Thương mại điện tử và Kinh tế số",
    "problem": "Phục vụ công việc",
    "users": "Cơ quan, tổ chức, cán bộ, công chức, viên chức và người lao động tham gia xử lý hồ sơ, văn bản, điều hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 577,
    "name": "Hệ thống quản lý địa điểm kiểm tra tập trung",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 578,
    "name": "Hệ thống quản lý định danh và xác thực điện tử (AD)",
    "desc": "Thông tin cá nhân/HT cơ sở hạ tầng thông tin/Quản lý định danh, xác minh danh tính điện tử và thực hiện chữ ký số của người sử dụng; giải pháp xác thực đăng nhập, đăng xuất một lần",
    "dev": "Cục Thống kê",
    "problem": "Thông tin cá nhân/HT cơ sở hạ tầng thông tin/Quản lý định danh, xác minh danh tính điện tử và thực hiện chữ ký số của người sử dụng; giải pháp xác thực đăng nhập, đăng xuất một lần",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "smartcity"
  },
  {
    "id": 579,
    "name": "Hệ thống Quản lý, tối ưu năng lượng tập trung và Tự động hóa máy điều hòa không khí",
    "desc": "Sản phẩm, giải pháp hỗ trợ số hóa và tối ưu hóa hoạt động trong lĩnh vực công Thương; Sản xuất và phân phối điện, khí đốt, nước nóng, hơi nước và điều hòa không khí",
    "dev": "Công ty Cổ phần Benkon",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực công Thương; Sản xuất và phân phối điện, khí đốt, nước nóng, hơi nước và điều hòa không khí",
    "users": "Đơn vị điện, nước, năng lượng, cơ quan quản lý chuyên ngành, doanh nghiệp vận hành hạ tầng và khách hàng sử dụng dịch vụ",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 580,
    "name": "Hệ thống quản trị nền tảng số pháp luật Việt Nam",
    "desc": "Nền tảng/phần mềm phục vụ công việc tại Bộ Tư pháp",
    "dev": "Bộ Tư pháp",
    "problem": "Hỗ trợ chuẩn hóa quy trình, quản lý thông tin và nâng cao hiệu quả xử lý công việc trong lĩnh vực tư pháp; Nông nghiệp và Môi trường",
    "users": "Cơ quan tư pháp, cán bộ xử lý nghiệp vụ, người dân, doanh nghiệp và tổ chức có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "government"
  },
  {
    "id": 581,
    "name": "Hệ thống quản trị nội bộ toàn hàng (B. One)",
    "desc": "Sản phẩm/giải pháp mang tên B. One được xây dựng như một nền tảng tiên phong, kết tinh giữa công nghệ hiện đại và tư duy sáng tạo nhằm giải quyết những vấn đề cốt lõi trong lĩnh vực quản trị nội bộ. B. One không chỉ đơn thuần là một công cụ, mà còn là một hệ sinh thái toàn diện, nơi các thành phần được liên kết chặt chẽ để tối ưu hiệu suất, nâng cao trải nghiệm người dùng và mở ra những khả năng phát triển bền vững",
    "dev": "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam",
    "problem": "Hệ thống quản trị nội bộ toàn hàng B. One ra đời nhằm giải quyết những bất cập trong công tác điều hành và quản lý nội bộ tại Ngân hàng TMCP Đầu tư và Phát triển Việt Nam. Trước đây, các quy trình xử lý công việc còn phân tán, thiếu sự đồng bộ và phụ thuộc nhiều vào thao tác thủ công, dẫn đến hiệu suất chưa cao. B",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Quy trình nghiệp vụ trên B. One được thiết kế theo hướng số hóa toàn diện, đảm bảo tính xuyên suốt và nhất quán trong hoạt động của Ngân hàng TMCP Đầu tư và Phát triển Việt Nam. Mỗi quy trình được chuẩn hóa từ khâu khởi tạo, phê duyệt đến theo dõi và lưu t rữ, giúp giảm thiểu sự phụ thuộc vào xử lý thủ công. Hệ thống cho phép phân luồng công việc tự động theo vai trò và thẩm quyền, đảm bảo đúng người, đúng việc",
    "cat": "enterprise"
  },
  {
    "id": 582,
    "name": "Hệ thống quản trị nội dung CMS",
    "desc": "Quản lý nghiệp vụ sản xuất tin bài cho Báo điện tử",
    "dev": "Trung tâm R&D",
    "problem": "Quản lý nghiệp vụ sản xuất tin bài cho Báo điện tử",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình,",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý,",
    "cat": "enterprise"
  },
  {
    "id": 583,
    "name": "Hệ thống quản trị nội dung trang Tạp chí Cộng sản điện tử",
    "desc": "Công khai",
    "dev": "Tạp chí Cộng sản",
    "problem": "Công khai",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 584,
    "name": "Hệ thống quản trị trường đại học, cao đẳng",
    "desc": "Phần mềm quản lý trường Đại học - UMS là hệ thống các nghiệp vụ quản lý trong trường đại học: quản lý đào tạo, quản lý sinh viên, quản lý thiết bị",
    "dev": "Tổng Công ty Giải pháp doanh nghiệp Viettel",
    "problem": "Quản lý toàn bộ hoạt động đào tạo, sinh viên, học vụ và tài chính học phí cho trường đại học và cao đẳng",
    "users": "Học sinh, sinh viên, giáo viên, phụ huynh, cơ sở giáo dục và đơn vị đào tạo",
    "process": "Phần mềm quản lý trường Đại học - UMS là hệ thống các nghiệp vụ quản lý trong trường đại học: quản lý đào tạo, quản lý sinh viên, quản lý thiết bị",
    "cat": "education"
  },
  {
    "id": 585,
    "name": "Hệ thống quản trị đơn WIPO IPAS",
    "desc": "Hệ thống quản trị đơn Sở hữu công nghiệp (SHCN)",
    "dev": "Cục Sở hữu trí tuệ",
    "problem": "Hệ thống quản trị đơn Sở hữu công nghiệp (SHCN)",
    "users": "Doanh nghiệp sản xuất, nhà máy, bộ phận vận hành, kỹ thuật, quản lý chất lượng và lãnh đạo doanh nghiệp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 586,
    "name": "Hệ thống sao lưu (backup)/Phục hồi dữ liệu tại thành phố Đà Nẵng",
    "desc": "Thông tin riêng và thông tin cá nhân/HT cơ sở hạ tầng thông tin/Sao lưu dữ liệu các dự án được triển khai tại TTXL (Hà Nội), TTXL (Hồ Chí Minh), TTXL (Đà Nẵng), sao lưu hệ thống mail của CTK; Thực hiện phục hồi dữ liệu sau khi khắc phục các sự cố tại TTXL (Hà Nội)",
    "dev": "Cục Thống kê",
    "problem": "Thông tin riêng và thông tin cá nhân/HT cơ sở hạ tầng thông tin/Sao lưu dữ liệu các dự án được triển khai tại TTXL (Hà Nội), TTXL (Hồ Chí Minh), TTXL (Đà Nẵng), sao lưu hệ thống mail của CTK; Thực hiện phục hồi dữ liệu sau khi khắc phục các sự cố tại TTXL (Hà Nội)",
    "users": "Cơ quan, tổ chức, doanh nghiệp, đội ngũ công nghệ thông tin, quản trị hệ thống và nhà phát triển ứng dụng",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "smartcity"
  },
  {
    "id": 587,
    "name": "Hệ thống sản xuất và quản lý Video",
    "desc": "Sản xuất Video trực tuyến",
    "dev": "Trung tâm Nội dung số & Truyền thông",
    "problem": "Sản xuất Video trực tuyến",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào;",
    "cat": "enterprise"
  },
  {
    "id": 588,
    "name": "Hệ thống soi chiếu trước",
    "desc": "Quản lý nghiệp vụ hải quan",
    "dev": "Cục Hải quan",
    "problem": "Quản lý nghiệp vụ hải quan",
    "users": "Cơ quan tài chính, cán bộ xử lý nghiệp vụ, doanh nghiệp, tổ chức và người dân có liên quan",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 589,
    "name": "Hệ thống SSO",
    "desc": "Trang đăng nhập vào hệ thống CMS quản lý",
    "dev": "Trung tâm Công nghệ thống tin",
    "problem": "Trang đăng nhập vào hệ thống CMS quản lý",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 590,
    "name": "Hệ thống Streaming",
    "desc": "Chuyển đổi file video sang định dạng hls phục vụ streaming video",
    "dev": "Thông tấn xã Việt Nam",
    "problem": "Chuyển đổi file video sang định dạng hls phục vụ streaming video",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 591,
    "name": "Hệ thống tài chính - kế toán - hóa đơn điện tử",
    "desc": "Quản lý tài chính, hóa đơn điện tử, thanh toán",
    "dev": "Học viện Tài chính",
    "problem": "Quản lý tài chính, hóa đơn điện tử, thanh toán",
    "users": "Doanh nghiệp, lãnh đạo quản lý, bộ phận tài chính - kế toán, nhân sự, kinh doanh và vận hành",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 592,
    "name": "Hệ thống Tạp chí điện tử",
    "desc": "Xử lý nghiệp vụ của đơn vị",
    "dev": "Tạp chí Văn hóa Nghệ thuật",
    "problem": "Xử lý nghiệp vụ của đơn vị",
    "users": "Cơ quan báo chí, nhà xuất bản, đài phát thanh - truyền hình, đơn vị sản xuất nội dung và người dùng nội dung số",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 593,
    "name": "Hệ thống Thanh toán LNH",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "NHNN Khu vực 1",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 594,
    "name": "Hệ thống Thanh toán quốc tế SWIFT",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Cục Quản lý ngoại hối",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 595,
    "name": "Hệ thống thanh toán điện tử liên ngân hàng",
    "desc": "Nền tảng số quốc gia/nền tảng số dùng chung thuộc danh mục chính thức; phục vụ triển khai các dịch vụ, nghiệp vụ số dùng chung trong ngành, lĩnh vực hoặc phạm vi toàn quốc",
    "dev": "Ngân hàng Nhà nước Việt Nam",
    "problem": "Hỗ trợ số hóa, chuẩn hóa và dùng chung các nghiệp vụ trong ngành, lĩnh vực",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Theo danh mục chính thức; quy trình nghiệp vụ cụ thể do cơ quan chủ quản/chủ trì xác định khi triển khai, vận hành",
    "cat": "finance"
  },
  {
    "id": 596,
    "name": "Hệ thống Thanh toán điện tử liên ngân hàng (CITAD)",
    "desc": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "dev": "Sở Giao Dịch",
    "problem": "Thực hiện nghiệp vụ và công tác chuyên môn tại NHNN",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 597,
    "name": "Hệ thống Thanh toán điện tử với ngân hàng",
    "desc": "Hệ thống Thanh toán điện tử với ngân hàng (TTĐT - NH) là hệ thống thông tin cấp độ 3, được KBNN triển khai qua nhiều giai đoạn, bắt đầu từ năm 2013. Hệ thống TTĐT - NH đáp ứng nhu cầu thanh toán cho các đối tượng thụ hưởng cũng",
    "dev": "Kho bạc Nhà nước",
    "problem": "Hệ thống Thanh toán điện tử với ngân hàng (TTĐT - NH) là hệ thống thông tin cấp độ 3, được KBNN triển khai qua nhiều giai đoạn, bắt đầu từ năm 2013. Hệ thống TTĐT - NH đáp ứng nhu cầu thanh toán cho các đối tượng thụ hưởng cũng",
    "users": "Ngân hàng, tổ chức tài chính, khách hàng cá nhân, khách hàng doanh nghiệp và đơn vị chấp nhận thanh toán",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "finance"
  },
  {
    "id": 598,
    "name": "Hệ thống thẩm định quyết toán",
    "desc": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng hỗ trợ quản lý công tác thẩm định xét duyệt quyết toán hàng quý, năm của các cán bộ nghiệp vụ BHXH được thuận tiện, chính xác giảm thiểu các công tác thủ công do phải đối chiếu số liệu trên các phần mềm bằng việc trích xuất file Excel hoặc in ra giấy",
    "dev": "Bảo hiểm xã hội Việt Nam",
    "problem": "Quản lý tập trung thống nhất toàn ngành BHXH Việt Nam, sử dụng hỗ trợ quản lý công tác thẩm định xét duyệt quyết toán hàng quý, năm của các cán bộ nghiệp vụ BHXH được thuận tiện, chính xác giảm thiểu các công tác thủ công do phải đối chiếu số liệu trên các phần mềm bằng việc trích xuất file Excel hoặc in ra giấy",
    "users": "Người lao động, người sử dụng lao động, cơ quan bảo hiểm xã hội và cán bộ xử lý hồ sơ bảo hiểm xã hội",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 599,
    "name": "Hệ thống thăm dò dư luận xã hội trực tuyến",
    "desc": "Tạo các phiếu điều tra theo yêu cầu; Tổ chức các cuộc điều tra cho các thành phần tham gia theo mẫu phiếu trên internet qua các nền tảng trực tuyên",
    "dev": "Ban Tuyên giáo và Dân vận Trung ương",
    "problem": "Tạo các phiếu điều tra theo yêu cầu; Tổ chức các cuộc điều tra cho các thành phần tham gia theo mẫu phiếu trên internet qua các nền tảng trực tuyên",
    "users": "Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu cầu sử dụng sản phẩm, giải pháp",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ",
    "cat": "enterprise"
  },
  {
    "id": 600,
    "name": "Hệ thống theo dõi nhiệm vụ Hệ thống theo dõi nhiệm vụ của Bộ KH&CN",
    "desc": "Theo dõi tiến độ các nhiệm vụ được giao Theo dõi và báo cáo kết quả công việc",
    "dev": "Vụ Hợp tác quốc tế Cục Tần số vô tuyến điện",
    "problem": "Theo dõi tiến độ các nhiệm vụ được giao Theo dõi và báo cáo kết quả công việc",
    "users": "Cơ sở y tế, bác sĩ, nhân viên y tế, cơ quan quản lý y tế, người bệnh và người dân Cơ quan, tổ chức, doanh nghiệp và người dùng có nhu",
    "process": "Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý, lưu trữ và cung cấp kết quả phục vụ quản lý, khai thác hoặc sử dụng dịch vụ Người dùng khởi tạo yêu cầu hoặc dữ liệu đầu vào; hệ thống tiếp nhận, xử lý,",
    "cat": "enterprise"
  }
];

export function getProductsByCategory(cat: Category): Product[] {
  return PRODUCTS.filter(p => p.cat === cat);
}

export function getProductById(id: number): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function searchProducts(query: string, cat?: Category): Product[] {
  const q = query.toLowerCase();
  return PRODUCTS.filter(p => {
    const matchCat = !cat || p.cat === cat;
    const matchQ   = !q || (p.name + p.desc + p.dev + p.users).toLowerCase().includes(q);
    return matchCat && matchQ;
  });
}

export const ALL_CATEGORIES: Category[] = [
  'ai', 'government', 'education', 'healthcare', 'finance',
  'smartcity', 'agriculture', 'security', 'tourism', 'enterprise',
];
