import { imgLink } from './media';

import { BlocksFormTypes, SocialsType } from 'components/templates/ContactUs';

const title = 'Liên hệ';
const subTitle = 'NOVA SERVICE';
const labelCskh = 'CSKH: ';
const labelEmail = 'Email';
const address = 'Tòa nhà văn phòng Novaland, 65 Nguyễn Du, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh';
const email = 'info@novaservice.com.vn';
const phoneNumber = '1900 63 6666';

const defaultValuesForm = {
  services: undefined,
  name: '',
  email: '',
  phone: '',
  title: '',
};

const blockForm: BlocksFormTypes = {
  mainTitle: 'Liên hệ',
  placeholderName: 'Họ và tên',
  placeholderEmail: 'Email',
  placeholderPhone: 'Số điện thoại',
  placeholderTitle: 'Tiêu đề',
  placeholderContent: 'Nhập nội dung',
};

const socialsContact: SocialsType[] = [
  {
    icon: imgLink,
    link: { target: '', text: 'Icon', url: '/' }
  },
  {
    icon: imgLink,
    link: { target: '', text: 'Icon', url: '/' }
  },
  {
    icon: imgLink,
    link: { target: '', text: 'Icon', url: '/' }
  },
];

const optionServices = [
  {
    id: '15',
    value: '15',
    label: 'Nova Education'
  },
  {
    id: '14',
    value: '14',
    label: 'Citispa'
  },
  { id: '13', label: 'CITIGYM', value: '13' },
  { id: '12', label: 'Nova Golf Clubs', value: '12' },
  {
    id: '11',
    value: '11',
    label: 'Nova Football'
  },
  { id: '10', label: 'Nova Hospitality', value: '10' },
  { id: '9', label: 'Nova Fashion Retail', value: '9' },
  { id: '8', label: 'Nova Commerce', value: '8' },
  { id: '7', label: 'Nova FnB', value: '7' },
  { id: '6', label: 'Nova Healthcare', value: '6' },
  { id: '16', label: 'Big Ben Holiday', value: '16' },
  { id: '4', label: 'Nova Dreams', value: '4' },
  { id: '5', label: 'Nova Travel', value: '5' },
  { id: '2', label: 'Nova E & M', value: '2' },
  { id: '1', label: 'Nova Service', value: '1' }
];

const blockIntroductionDummy = {
  cskh: 'cskh',
  email: 'info@novaservice.com.vn',
  items: socialsContact,
  title: 'nova service',
  address,
  lableCskh: labelCskh,
  lableEmail: labelEmail,
  mainTitle: 'mainTitle',
  placeholderName: 'Họ và tên',
  placeholderEmail: 'Email',
  placeholderPhone: 'Số điện thoại',
  placeholderTitle: 'Tiêu đề',
  placeholderContent: 'Nhập nội dung',
};

const blockForm2Dummy = {
  cskh: 'cskh',
  email: 'info@novaservice.com.vn',
  items: socialsContact,
  title,
  address,
  lableCskh: labelCskh,
  lableEmail: labelEmail,
  mainTitle: 'mainTitle',
  placeholderName: 'Họ và tên',
  placeholderEmail: 'Email',
  placeholderPhone: 'Số điện thoại',
  placeholderTitle: 'Tiêu đề',
  placeholderContent: 'Nhập nội dung',
};

export {
  title,
  subTitle,
  labelCskh,
  labelEmail,
  address,
  email,
  phoneNumber,
  defaultValuesForm,
  blockForm,
  socialsContact,
  optionServices,
  blockIntroductionDummy,
  blockForm2Dummy
};
