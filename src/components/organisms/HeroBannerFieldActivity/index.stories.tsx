import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import HeroBannerFieldActivity from '.';

import imageLogo from 'assets/images/heroBannerFieldActivity/banner-image-logo.svg';
import SliderPc from 'assets/images/heroBannerFieldActivity/banner1.png';

export default {
  title: 'Components/organisms/HeroBannerFieldActivity',
  component: HeroBannerFieldActivity,
  argTypes: {},
} as Meta;

const list = [
  {
    imageDesktop: SliderPc,
    imageMobile: SliderPc,
    imageTablet: SliderPc,
    link: '/',
    logo: imageLogo,
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    imageDesktop: SliderPc,
    imageMobile: SliderPc,
    imageTablet: SliderPc,
    link: '/',
    logo: imageLogo,
    title: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`,
  },
];

export const normal: Story = () => (
  <Router>
    <HeroBannerFieldActivity list={list} />
  </Router>
);
