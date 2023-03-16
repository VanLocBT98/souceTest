import { imgLink } from './media';

const heroBannerHomeDummy = [
  {
    data: {
      imageDesktop: imgLink,
      imageMobile: imgLink,
      imageTablet: imgLink,
      link: '/',
      imgSrc: imgLink,
      title: 'Banner Slide 1',
      desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    type: 'type1'
  },
  {
    data: {
      imageDesktop: imgLink,
      imageMobile: imgLink,
      imageTablet: imgLink,
      link: '/',
      imgSrc: imgLink,
      title: 'Banner Slide 2',
      desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`,
    },
    type: 'type2'

  }
];

const dataIntroducingMemberCompaniesList = [
  {
    logo: imgLink,
    title: 'Nova FnB',
  },
  {
    logo: imgLink,
    title: 'Nova Commerce',
  },
  {
    logo: imgLink,
    title: 'Nova Education',
  },
  {
    logo: imgLink,
    title: 'Nova Travel',
  },
  {
    logo: imgLink,
    title: 'Nova Hopitality',
  },
  {
    logo: imgLink,
    title: 'Nova Retail',
  },
  {
    logo: imgLink,
    title: 'Nova Healthcare',
  },
  {
    logo: imgLink,
    title: 'Nova Golf Club',
  },
  {
    logo: imgLink,
    title: 'Football',
  },
  {
    logo: imgLink,
    title: 'Nova E&M',
  },
  {
    logo: imgLink,
    title: 'Nova Dream',
  },
  {
    logo: imgLink,
    title: 'Nova College',
  },
];

const blockInVestmentDummy = {
  image: imgLink,
  fieldTitle: 'LĨNH VỰC HOẠT ĐỘNG',
  fieldDescription: 'Nova Service hoạt động trong lĩnh vực thương mại dịch vụ, tập trung vào 03 lĩnh vực trọng tâm: Bán Lẻ, Dịch Vụ và Cộng Đồng, cung cấp các sản phẩm và dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích cho khách hàng và gia tăng giá trị cho các điểm đến mà NovaGroup phát triển.',
  memberCompaniesTitle: 'GIỚI THIỆU CÁC CÔNG TY THÀNH VIÊN',
  memberCompaniesDescription: 'Với 12 công ty thành viên, Nova Service kiến tạo nên một hệ sinh thái khép kín, bao gồm: (1) Lĩnh vực Bán lẻ với Hệ thống nhà hàng - cà phê, dịch vụ giải trí và Hệ thống bán lẻ; (2) Lĩnh vực Dịch vụ với các chuỗi khách sạn - khu nghỉ dưỡng, Vui chơi Giải trí, Điều hành tour, Hoạt động biểu diễn nghệ thuật, Vận hành sân Golf, Tổ hợp thể dục thể thao, sức khỏe và làm đẹp; (3) Lĩnh vực Phát triển cộng đồng với mảng giáo dục, y tế và quỹ vì cộng đồnggggggggg',
};

const investmentSectorsListDataDummy = new Array(12).fill({
  imgSrc: imgLink,
  title: 'Dịch vụ',
  desc: 'desciption desciption',
  href: '#',
});

const businessUnitsListData = [
  {
    logo: imgLink,
    title: 'titlea',
    href: '#'
  }
];

export {
  dataIntroducingMemberCompaniesList,
  heroBannerHomeDummy,
  blockInVestmentDummy,
  investmentSectorsListDataDummy,
  businessUnitsListData
};
