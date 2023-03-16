import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';

import Header from '.';

import { menuList, socialList } from 'assets/dataDummy/header';
import imgLogo from 'assets/images/logo_nova.png';

export default {
  title: 'Components/organisms/Header',
  component: Header,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ height: '130vh' }}>
    <Route>
      <Header
        logoSrc={imgLogo}
        headerData={menuList}
        socialData={socialList}
      />
    </Route>
  </div>
);
