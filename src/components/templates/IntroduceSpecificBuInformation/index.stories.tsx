import { Story, Meta } from '@storybook/react';
import React from 'react';

import IntroduceSpecificBuInformation from '.';

export default {
  title: 'Components/templates/IntroduceSpecificBuInformation',
  component: IntroduceSpecificBuInformation,
  argTypes: {},
} as Meta;

const imagesData = ['https://source.unsplash.com/random', 'https://source.unsplash.com/random'];

export const normal: Story = () => (
  <IntroduceSpecificBuInformation
    title="NOVA  DREAM 2"
    description="Là đơn vị phát triển và vận hành các công ty giải trí như: Công viên chủ đề, công viên nước, khu vui chơi trong nhà, vườn thú,..theo tiêu chuẩn quốc tế."
    phoneNumber="19200000"
    email="contact@novaservice.com.vn"
    images={imagesData}
  />
);
