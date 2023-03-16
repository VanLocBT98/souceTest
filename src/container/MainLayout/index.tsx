import React from 'react';
import { Outlet } from 'react-router-dom';

import MainLayout from 'components/templates/MainLayout';

const MainLayoutContainer: React.FC = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

export default MainLayoutContainer;
