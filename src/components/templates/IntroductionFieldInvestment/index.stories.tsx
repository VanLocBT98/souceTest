import { Story, Meta } from '@storybook/react';
import React from 'react';

import IntroductionFieldInvestment from '.';

export default {
  title: 'Components/templates/IntroductionFieldInvestment',
  component: IntroductionFieldInvestment,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <IntroductionFieldInvestment
    tag="Bán lẻ"
    title="Hệ thống nhà hàng - cà phê - giải trí"
    content="Nova FnB xây dựng mô hình kinh doanh, quản lý và vận hành các thương hiệu đẳng cấp quốc tế trong lĩnh vực dịch vụ nhà hàng, chuỗi cà phê và mô hình giải trí.
    <br />
    <br />
    Hợp tác với các đối tác chiến lược, các thương hiệu nổi tiếng thế giới để cung cấp những dịch vụ trọn gói tốt nhất cho khách hàng."
    imgSrc="https://source.unsplash.com/random"
  />
);
