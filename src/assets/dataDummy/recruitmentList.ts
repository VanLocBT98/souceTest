import { imgLink } from './media';
import { remunerationList } from './remunerationPolicy';

const recruitmentList = [
  {
    position: 'Máy phó',
    applicationCode: 'NDV-MP',
    affiliatedUnits: 'Nova Service Group',
    department: 'Nova Healthcare Group',
    location: 'Hồ chí Minh',
    expDate: '31/10/2021',
  },
  {
    position: 'Kỹ thuật viên chuẩn đoán hình ảnh',
    applicationCode: 'NDV-MP',
    affiliatedUnits: 'Nova Service Group',
    department: 'Nova Healthcare Group 2',
    location: 'Hà Nội',
    expDate: '31/10/2021',
  },
  {
    position: 'Kỹ thuật viên xét nghiệm',
    applicationCode: 'NDV-MP',
    affiliatedUnits: 'Nova Service Group',
    department: 'Nova Healthcare Group',
    location: 'Hồ chí Minh',
    expDate: '31/10/2021',
  },
  {
    position: 'Thư ký y khoa',
    applicationCode: 'NDV-MP',
    affiliatedUnits: 'Nova Service Group',
    department: 'Nova Healthcare Group 2',
    location: 'Hồ chí Minh',
    expDate: '31/10/2021',
  },
  {
    position: 'Máy phó',
    applicationCode: 'NDV-MP',
    affiliatedUnits: 'Nova Service Group',
    department: 'Nova Healthcare Group',
    location: 'Hà Nội',
    expDate: '31/10/2021',
  },
  {
    position: 'Kỹ thuật viên chuẩn đoán hình ảnh',
    applicationCode: 'NDV-MP',
    affiliatedUnits: 'Nova Service Group',
    department: 'Nova Healthcare Group',
    location: 'Hồ chí Minh',
    expDate: '31/10/2021',
  },
];

const recruitmentListHeader = [
  {
    id: 1,
    value: 'Chức vụ',
  },
  {
    id: 2,
    value: 'Mã ứng tuyển',
  },
  {
    id: 3,
    value: 'Đơn vị',
  },
  {
    id: 4,
    value: 'Bộ phận',
  },
  {
    id: 5,
    value: 'Địa điểm',
  },
  {
    id: 6,
    value: 'Ngày hết hạn',
  },
];

const positionOptions = [
  {
    id: '1',
    value: '1',
    label: 'Máy phó',
  },
  {
    id: '2',
    value: '2',
    label: 'Kỹ thuật viên chuẩn đoán hình ảnh',
  },
  {
    id: '3',
    value: '3',
    label: 'Kỹ thuật viên xét nghiệm',
  },
  {
    id: '4',
    value: '4',
    label: 'Thư ký y khoa',
  },
];

const departmentOptions = [
  {
    id: '1',
    value: '1',
    label: 'Nova Healthcare Group',
  },
  {
    id: '2',
    value: '2',
    label: 'Nova Healthcare Group 2',
  },
];

const locationOptions = [
  {
    id: '1',
    value: '1',
    label: 'Hồ chí Minh',
  },
  {
    id: '2',
    value: '2',
    label: 'Hà Nội',
  },
];

const dataTableDummy = [
  {
    id: 1,
    title: 'DLG',
    price: '5.790',
    priceNow: '5.880',
    percentChange: '+2.5%',
  },
  {
    id: 2,
    title: 'FLC',
    price: '5.790',
    priceNow: '5.880',
    percentChange: '+2.5%',
  },
  {
    id: 3,
    title: 'HPG',
    price: '5.790',
    priceNow: '5.880',
    percentChange: '+2.5%',
  },
  {
    id: 4,
    title: 'POW',
    price: '5.790',
    priceNow: '5.880',
    percentChange: '+2.5%',
  },
];

const dataHeaderTable = [
  {
    id: '1',
    value: 'STT',
  },
  {
    id: '2',
    value: 'Mã cổ phiếu',
  },
  {
    id: '3',
    value: 'Giá thời điểm khuyến nghị',
  },
  {
    id: '4',
    value: 'Giá thời điểm hiện tại',
  },
  {
    id: '5',
    value: '% Thay đổi',
  },
];

const businessUnitsListDataDummy = [
  {
    logo: imgLink,
    title: 'Nova Education',
    imgSrc: imgLink,
    href: '/',
  },
  {
    logo: imgLink,
    title: 'Nova Education',
    imgSrc: imgLink,
    href: '/',
  },
  {
    logo: imgLink,
    title: 'Nova Education',
    imgSrc: imgLink,
    href: '/',
  },
  {
    logo: imgLink,
    title: 'Nova Education',
    imgSrc: imgLink,
    href: '/',
  },
  {
    logo: imgLink,
    title: 'Nova Education',
    imgSrc: imgLink,
    href: '/',
  },
];

const dataPositionOptionsDummy = [
  {
    id: '1',
    value: '1',
    label: 'Nova Healthcare Group',
  },
  {
    id: '2',
    value: '2',
    label: 'Nova Healthcare Group 2',
  },
];

const dataDepartmentOptionsDummy = [
  {
    id: '1',
    value: '1',
    label: 'Nova Healthcare Group',
  },
  {
    id: '2',
    value: '2',
    label: 'Nova Healthcare Group 2',
  },
];

const dataLocationOptionsDummy = [
  {
    id: '1',
    value: '1',
    label: 'Nova Healthcare Group',
  },
  {
    id: '2',
    value: '2',
    label: 'Nova Healthcare Group 2',
  },
];

const dataCareerOpportunityListDummy = [
  {
    position: 'position',
    applicationCode: 'applicationCode',
    affiliatedUnits: 'affiliatedUnits',
    department: 'department',
    location: 'location',
    expDate: 'expDate',
    url: '#',
    quantity: 10,
  }
];

const blockCareerOpportunitiesDummy = {
  title: 'CƠ HỘI NGHỀ NGHIỆP',
  placeholderCity: 'placeholderCity',
  titleTableCity: 'titleTableCity',
  titleTableUnit: 'titleTableUnit',
  placeholderPosition: 'placeholderPosition',
  titleTablePosition: 'titleTablePosition',
  placeholderDepartment: 'placeholderDepartment',
  titleTableApplyCode: 'titleTableApplyCode',
  titleTableDepartment: 'titleTableDepartment',
  titleTableExpirationDate: 'titleTableExpirationDate',
  descriptoion: 'descriptoion',
  items: [
    {
      image: imgLink,
      title: 'title',
      descriptoion: 'descriptoion',
    },
    {
      image: imgLink,
      title: 'title',
      descriptoion: 'descriptoion',
    },
  ],
  email: 'email',
  phone: 'phone',
  subTitle: 'subTitle',
  labelEmail: 'labelEmail',
  labelPhone: 'labelPhone',
};

const blockIntroductionMemberCompaniesDummy = {
  title: 'Giới thiệu công ty thành viên',
  placeholderCity: 'placeholderCity',
  titleTableCity: 'titleTableCity',
  titleTableUnit: 'titleTableUnit',
  placeholderPosition: 'placeholderPosition',
  titleTablePosition: 'titleTablePosition',
  placeholderDepartment: 'placeholderDepartment',
  titleTableApplyCode: 'titleTableApplyCode',
  titleTableDepartment: 'titleTableDepartment',
  titleTableExpirationDate: 'titleTableExpirationDate',
  descriptoion: 'Nova Service hoạt động trong lĩnh vực thương mại dịch vụ, tập trung vào 03 lĩnh vực trọng tâm: Bán Lẻ, Dịch Vụ và Cộng Đồng, cung cấp các sản phẩm và dịch vụ theo tiêu chuẩn quốc tế, mang lại nhiều tiện ích cho khách hàng và gia tăng giá trị cho các điểm đến mà NovaGroup phát triển.',
  items: [
    {
      image: imgLink,
      title: 'title',
      descriptoion: 'descriptoion',
    },
    {
      image: imgLink,
      title: 'title',
      descriptoion: 'descriptoion',
    },
  ],
  email: 'email',
  phone: 'phone',
  subTitle: 'subTitle',
  labelEmail: 'labelEmail',
  labelPhone: 'labelPhone',
};

const blockRemunerationPolicyDummy = {
  title: 'title blockRemunerationPolicyDummy',
  placeholderCity: 'placeholderCity',
  titleTableCity: 'titleTableCity',
  titleTableUnit: 'titleTableUnit',
  placeholderPosition: 'placeholderPosition',
  titleTablePosition: 'titleTablePosition',
  placeholderDepartment: 'placeholderDepartment',
  titleTableApplyCode: 'titleTableApplyCode',
  titleTableDepartment: 'titleTableDepartment',
  titleTableExpirationDate: 'titleTableExpirationDate',
  descriptoion: 'descriptoion',
  items: [
    {
      image: imgLink,
      title: 'title',
      descriptoion: 'descriptoion descriptoion',
    },
    {
      image: imgLink,
      title: 'title',
      descriptoion: 'descriptoion',
    },
  ],
  email: 'email',
  phone: 'phone',
  subTitle: 'subTitle',
  labelEmail: 'labelEmail',
  labelPhone: 'labelPhone',
};

const blockInfoDummy = {
  title: 'Bạn cần trợ giúp?',
  placeholderCity: 'placeholderCity',
  titleTableCity: 'titleTableCity',
  titleTableUnit: 'titleTableUnit',
  placeholderPosition: 'placeholderPosition',
  titleTablePosition: 'titleTablePosition',
  placeholderDepartment: 'placeholderDepartment',
  titleTableApplyCode: 'titleTableApplyCode',
  titleTableDepartment: 'titleTableDepartment',
  titleTableExpirationDate: 'titleTableExpirationDate',
  descriptoion: 'descriptoion',
  items: [
    {
      image: imgLink,
      title: 'title',
      descriptoion: 'descriptoion',
    },
    {
      image: imgLink,
      title: 'title',
      descriptoion: 'descriptoion',
    },
  ],
  email: 'hr@novaservice.com.vn',
  phone: '0944.888.888',
  subTitle: 'Liên hệ bộ phận nhân sự',
  labelEmail: 'Email HR',
  labelPhone: 'Điện thoại HR',
};

const groupRecruitmentGroupDataDummy = remunerationList;

export {
  recruitmentListHeader,
  positionOptions,
  departmentOptions,
  locationOptions,
  dataTableDummy,
  dataHeaderTable,
  businessUnitsListDataDummy,
  dataPositionOptionsDummy,
  dataDepartmentOptionsDummy,
  dataLocationOptionsDummy,
  dataCareerOpportunityListDummy,
  blockCareerOpportunitiesDummy,
  blockIntroductionMemberCompaniesDummy,
  blockRemunerationPolicyDummy,
  blockInfoDummy,
  groupRecruitmentGroupDataDummy
};

export default recruitmentList;
