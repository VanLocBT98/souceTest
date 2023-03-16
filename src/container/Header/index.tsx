import React from 'react';

import { menuList, socialList } from 'assets/dataDummy/header';
import imgLogo from 'assets/images/logo_nova.png';
import Header from 'components/organisms/Header';

const HeaderContainer: React.FC = () => (
  <Header
    logoSrc={imgLogo}
    headerData={menuList}
    socialData={socialList}
  />
);

export default HeaderContainer;
