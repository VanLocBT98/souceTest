import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import HeroBanner from '.';

import { heroBannerHomeDummy } from 'assets/dataDummy/home';

export default {
  title: 'Components/organisms/HeroBanner',
  component: HeroBanner,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <HeroBanner list={heroBannerHomeDummy} />
  </Router>
);
