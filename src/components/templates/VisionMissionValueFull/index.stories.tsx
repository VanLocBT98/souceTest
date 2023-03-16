import { Story, Meta } from '@storybook/react';
import React from 'react';

import VisionMissionValueFull from '.';

export default {
  title: 'Components/templates/VisionMissionValueFull',
  component: VisionMissionValueFull,
  argTypes: {},
} as Meta;

const dataList = [
  {
    imgSrc: 'https://source.unsplash.com/random',
    title: 'Tầm nhìn',
    content: 'NovaGroup trở thành Tập đoàn đầu tư và phát triển kinh tế hàng đầu Việt Nam hoạt động chính trong 3 lĩnh vực: Dịch vụ - Công nghệ - Công nghiệp.',
  },
  {
    imgSrc: 'https://source.unsplash.com/random',
    title: 'Sứ mệnh',
    content: 'NovaGroup trở thành Tập đoàn đầu tư và phát triển kinh tế hàng đầu Việt Nam hoạt động chính trong 3 lĩnh vực: Dịch vụ - Công nghệ - Công nghiệp.',
  },
  {
    imgSrc: 'https://source.unsplash.com/random',
    title: 'Giá trị cốt lõi',
    content: 'NovaGroup trở thành Tập đoàn đầu tư và phát triển kinh tế hàng đầu Việt Nam hoạt động chính trong 3 lĩnh vực: Dịch vụ - Công nghệ - Công nghiệp.',
  },
];

export const normal: Story = () => (
  <VisionMissionValueFull
    dataList={dataList}
  />
);
