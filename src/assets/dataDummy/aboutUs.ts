import awardList from './awardList';
import { imgLink } from './media';

const dummyDataTabsLeadership = [
  {
    label: 'HỘI ĐỒNG QUẢN TRỊ',
    content: [
      {
        id: 1,
        imageSrc: imgLink,
        name: 'Ông Nguyễn Thái Phiên',
        position: 'Tổng giám đốc',
        role: 1,
      },
      {
        imageSrc: imgLink,
        id: 2,
        name: 'Ông Nguyễn Thái Phiên',
        position: 'Phó Tổng Giám đốc Truyền Thông',
        role: 0,
      },
      {
        imageSrc: imgLink,
        name: 'Ông Nguyễn Thái Phiên',
        position: 'Phó Tổng Giám đốc Đầu tư và Tài chính',
        role: 0,
        id: 3,
      },
      {
        imageSrc: imgLink,
        id: 4,
        name: 'Ông Nguyễn Thái Phiên',
        position: 'Phó Tổng Giám đốc Vận hành',
        role: 0,
      },
    ],
    role: 'director',
  },
  {
    label: 'BAN TỔNG GIÁM ĐỐC',
    content: [],
  },
  {
    label: 'GIÁM ĐỐC CÁC BAN CHUYÊN MÔN',
    content: [],
  },
];

const dataListLeaderShipModal = [
  {
    title: 'Giới thiệu',
    desc: 'Hơn 20 năm kinh nghiệm trong công tác quản lý và làm việc trong lĩnh vực sản xuất thuốc thú y.',
  },
  {
    title: 'Trình độ chuyên môn',
    desc: 'Hơn 20 năm kinh nghiệm trong công tác quản lý và làm việc trong lĩnh vực sản xuất thuốc thú y.',
  },
  {
    title: 'Kinh nghiệm',
    desc: 'Hơn 20 năm kinh nghiệm trong công tác quản lý và làm việc trong lĩnh vực sản xuất thuốc thú y. ',
  },
  {
    title: 'Chức vụ tại các tổ chức khác',
    desc: 'Hơn 20 năm kinh nghiệm trong công tác quản lý và làm việc trong lĩnh vực sản xuất thuốc thú y. ',
  },
  {
    title: 'Giới thiệu',
    desc: 'Hơn 20 năm kinh nghiệm trong công tác quản lý và làm việc trong lĩnh vực sản xuất thuốc thú y.',
  },
  {
    title: 'Trình độ chuyên môn',
    desc: 'Hơn 20 năm kinh nghiệm trong công tác quản lý và làm việc trong lĩnh vực sản xuất thuốc thú y.',
  },
];

const introDataBlock = {
  title: 'GIỚI THIỆU VỀ CÔNG TY CHÚNG TÔI',
  image1: imgLink,
  image2: imgLink,
  description: 'Nova Service là Tổng công ty thuộc NovaGroup, hoạt động trong lĩnh vực Thương mại - Dịch vụ. Chúng tôi cung cấp các sản phẩm và dịch vụ theo tiêu chuẩn quốc tế, đem lại sự tiện nghi cho cư dân, khách hàng của NovaGroup và gia tăng giá trị tại các điểm đến do NovaGroup đầu tư và phát triển.'
};

const visionMissionValueDataBlock = {
  image: imgLink,
  item1: {
    image: imgLink,
    title: 'Tầm nhìn',
    descriptoion: 'Nova Service định hướng phát triển thành công ty hàng đầu Việt Nam trong lĩnh vực dịch vụ và thương mại.',
  },
  item2: {
    image: imgLink,
    title: 'Sứ mệnh',
    descriptoion: 'Cung cấp các sản phẩm và dịch vụ chuẩn quốc tế, mang lại nhiều tiện ích cho khách hàng và gia tăng giá trị cho các điểm đến du lịch của Nova Group.',
  },
  item3: {
    image: imgLink,
    title: 'Giá trị cốt lõi',
    descriptoion: 'Hiệu quả - Chính trực - Chuyên nghiệp',
  },
};

const leaderDataBlock = {
  title: 'BAN LÃNH ĐẠO',
  descriptoion: 'descriptoion description description',
};

const corporateCultureBlock = {
  title: 'VĂN HÓA DOANH NGHIỆP',
  descriptoion: 'Tại Nova Service và tập đoàn NovaGroup, Hiệu quả - Chính trực - Chuyên nghiệp là nét văn hóa đặc thù, trở thành giá trị cốt lõi của mỗi con người Nova. Điều này được thể hiện qua Bộ Quy tắc ứng xử đã được áp dụng nhiều năm qua tại Tập đoàn. Bất kỳ nhân viên nào cũng phải đọc, hiểu và thực hiện Bộ Quy tắc ứng xử, từ đó có hành vi ứng xử đúng chuẩn mực, góp phần gìn giữ Giá trị cốt lõi của NovaGroup.',
  image: imgLink,
  link: {
    url: '/',
    text: 'Xem thêm',
    target: '_self',
  },
};

const sustainableDevelopmentBlock = {
  title: 'THÔNG ĐIỆP PHÁT TRIỂN BỀN VỮNG',
  descriptoion: 'Mỗi một quốc gia đều có những thương hiệu biểu tượng cho sự hùng mạnh của quốc gia đó. NovaGroup với khát vọng trở thành Tập đoàn Đầu tư và Phát triển kinh tế hàng đầu Việt Nam hoạt động chính trong 3 lĩnh vực: Dịch Vụ, Công nghệ và Công nghiệp. Trong đó, Nova Service là một trong những tổng công ty trụ cột, giúp tập đoàn đóng vai trò là điểm kết nối chung của cộng đồng doanh nghiệp Việt Nam cùng hoài bão vươn ra thế giới.',
};

const partnerBlock = {
  title: 'CÁC ĐỐI TÁC CỦA CHÚNG TÔI',
  images: [imgLink, imgLink, imgLink, imgLink, imgLink, imgLink, imgLink, imgLink, imgLink],
  descriptoion: 'Nova Service đang từng bước xây dựng mạng lưới hợp tác vững mạnh nhằm cộng hưởng để phát triển bền vững, tăng sức mạnh nội lực; cùng cộng đồng doanh nghiệp xây dựng nên hệ sinh thái đa dạng, với hoài bão vươn ra thế giới.'
};

const awardBlock = {
  title: 'title',
  images: [imgLink, imgLink, imgLink],
  items: [
    {
      prizeLogo: imgLink,
      prizeName: 'prizeName 1',
      logoCompany: imgLink,
    },
    {
      prizeLogo: imgLink,
      prizeName: 'prizeName 2',
      logoCompany: imgLink,
    }
  ],
};

const historyBlock = {
  description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng. ',
  title: 'LỊCH SỬ PHÁT TRIỂN',
  items: [
    {
      description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
      image: imgLink,
      year: '2022',
    },
    {
      description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
      image: imgLink,
      year: '2022',
    },
    {
      description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
      image: imgLink,
      year: '2022',
    },
    {
      description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
      image: imgLink,
      year: '2022',
    },
    {
      description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
      image: imgLink,
      year: '2022',
    },
    {
      description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
      image: imgLink,
      year: '2022',
    },
    {
      description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
      image: imgLink,
      year: '2022',
    },
    {
      description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
      image: imgLink,
      year: '2022',
    },
    {
      description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
      image: imgLink,
      year: '2022',
    },
    {
      description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
      image: imgLink,
      year: '2022',
    },
  ]
};

const leadersList = [
  {
    id: 1,
    label: 'label',
    content: [
      {
        name: 'Nguyễn Văn A',
        position: 'Nhà sáng lập - Chủ tịch Hội đồng Quản trị',
        imageSrc: imgLink,
        isLeader: 1,
        gender: 'Ông',
        description: '<p><strong>Trình độ chuyên môn:</strong></p><ul><li>Cử nhân Kế toán</li> <li>Thạc sỹ Quản trị Kinh doanh (DAS/EMBA), Đại học North-Western Thụy Sỹ phối hợp với FSB</li></ul>'
      },
      {
        name: 'Nguyễn Văn A',
        position: 'Nhà sáng lập',
        imageSrc: imgLink,
        isLeader: 0,
        gender: 'Ông',
        description: '<p><strong>Trình độ chuyên môn:</strong></p><ul><li>Cử nhân Kế toán</li> <li>Thạc sỹ Quản trị Kinh doanh (DAS/EMBA), Đại học North-Western Thụy Sỹ phối hợp với FSB</li></ul>'
      },
      {
        name: 'Nguyễn Văn A',
        position: 'Nhà sáng lập',
        imageSrc: imgLink,
        isLeader: 0,
        gender: 'Ông',
        description: '<p><strong>Trình độ chuyên môn:</strong></p><ul><li>Cử nhân Kế toán</li> <li>Thạc sỹ Quản trị Kinh doanh (DAS/EMBA), Đại học North-Western Thụy Sỹ phối hợp với FSB</li></ul>'
      },
      {
        name: 'Nguyễn Văn A',
        position: 'Nhà sáng lập',
        imageSrc: imgLink,
        isLeader: 0,
        gender: 'Ông',
        description: '<p><strong>Trình độ chuyên môn:</strong></p><ul><li>Cử nhân Kế toán</li> <li>Thạc sỹ Quản trị Kinh doanh (DAS/EMBA), Đại học North-Western Thụy Sỹ phối hợp với FSB</li></ul>'
      }
    ]
  }
];

const placeholder = '';

const imagesPartnerData = [imgLink,
  imgLink,
  imgLink,
  imgLink,
  imgLink,
  imgLink,
  imgLink,
  imgLink,
  imgLink,
  imgLink,
  imgLink,
  imgLink
];

const historyData = [
  {
    description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
    image: imgLink,
    year: '2022',
  },
  {
    description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
    image: imgLink,
    year: '2022',
  },
  {
    description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
    image: imgLink,
    year: '2022',
  },
  {
    description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
    image: imgLink,
    year: '2022',
  },
  {
    description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
    image: imgLink,
    year: '2022',
  },
  {
    description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
    image: imgLink,
    year: '2022',
  },
  {
    description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
    image: imgLink,
    year: '2022',
  },
  {
    description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
    image: imgLink,
    year: '2022',
  },
  {
    description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
    image: imgLink,
    year: '2022',
  },
  {
    description: 'Năm 2020 đánh dấu cột mốc tái cấu trúc lần thứ 2 của NovaGroup. Tổng Công ty Nova Service chính thức ra đời với sứ mệnh cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích và gia tăng giá trị cho các sản phẩm bất động sản cũng như điểm đến của NovaGroup. Trong năm 2021, Nova Service từng bước hoàn thiện hệ sinh thái tiện ích dịch vụ, với 12 công ty trực thuộc, hoạt động trong 3 lĩnh vực: Bán lẻ, Dịch vụ và Cộng đồng.',
    image: imgLink,
    year: '2022',
  },
];

const awardListData = {
  title: 'Giải thưởng',
  list: awardList
};

export {
  dummyDataTabsLeadership,
  dataListLeaderShipModal,
  introDataBlock,
  visionMissionValueDataBlock,
  leaderDataBlock,
  corporateCultureBlock,
  sustainableDevelopmentBlock,
  partnerBlock,
  awardBlock,
  historyBlock,
  leadersList,
  placeholder,
  imagesPartnerData,
  historyData,
  awardListData
};
