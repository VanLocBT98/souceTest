import React from 'react';
import { useForm } from 'react-hook-form';

import { menuList } from 'assets/dataDummy/header';
import logo from 'assets/images/footer/logo_footer.svg';
import Footer, { FormContact } from 'components/organisms/Footer';

const informations = {
  fullName: {
    label: 'Họ và Tên',
    placeholder: 'Họ và tên',
  },
  phone: {
    label: 'Số Điện Thoại',
    placeholder: 'Số điện thoại',
  },
  email: {
    label: 'Email',
    placeholder: 'Email',
  },
  buttonSubmit: {
    text: 'Đăng Ký Nhận Bảng Tin',
  },
};

const FooterContainer: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const method = useForm<FormContact>();
  return (
    <Footer
      imgSrc={logo}
      contactData={{
          address: 'Tòa nhà văn phòng Novaland, 65 Nguyễn Du, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
          email: 'info@novaservice.com.vn',
          phone: '1900 63 6666',
        }}
      footerLink={menuList}
      copyRight={{
          list: [
            {
              title: 'Chính Sách Bảo Mật',
              url: '/',
              target: '_seft',
            },
            {
              title: 'Điều Khoản Khách Hàng',
              url: '/',
              target: '_seft',
            },
          ],
          text: '© 2021. Bản quyền thuộc về Tập đoàn Novaland (Việt Nam). Tất cả các quyền được bảo hộ.',
        }}
      method={method}
      handleSubmit={() => {}}
      infoForm={informations}
    />
  );
};

export default FooterContainer;
