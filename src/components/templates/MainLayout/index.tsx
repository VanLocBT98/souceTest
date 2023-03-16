import React from 'react';
import { useLocation } from 'react-router-dom';

import FooterContainer from 'container/Footer';
import HeaderContainer from 'container/Header';
import mapModifiers from 'utils/functions';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}) => {
  const location = useLocation();
  return (
    <div className="t-mainLayout">
      <HeaderContainer />
      <main className={mapModifiers('t-mainLayout_content', location.pathname === '/' && 'home')}>{children}</main>
      <FooterContainer />
    </div>
  );
};

MainLayout.defaultProps = {
};

export default MainLayout;
