import { Meta, Story } from '@storybook/react';
import React from 'react';

import VisionMissionValue from '.';

import { imgLink } from 'assets/dataDummy/media';

export default {
  title: 'Components/templates/VisionMissionValue',
  component: VisionMissionValue,
  argTypes: {},
} as Meta;

const dataItem1 = {
  imgSrc: imgLink,
  title: 'Tầm nhìn',
  content: 'NovaGroup trở thành Tập đoàn đầu tư và phát triển kinh tế hàng đầu Việt Nam hoạt động chính trong 3 lĩnh vực: Dịch vụ - Công nghệ - Công nghiệp.',
};

const dataItem2 = {
  imgSrc: imgLink,
  title: 'Sứ mệnh',
  content: 'NovaGroup trở thành Tập đoàn đầu tư và phát triển kinh tế hàng đầu Việt Nam hoạt động chính trong 3 lĩnh vực: Dịch vụ - Công nghệ - Công nghiệp.',
};

const dataItem3 = {
  imgSrc: imgLink,
  title: 'Giá trị cốt lõi',
  content: 'NovaGroup trở thành Tập đoàn đầu tư và phát triển kinh tế hàng đầu Việt Nam hoạt động chính trong 3 lĩnh vực: Dịch vụ - Công nghệ - Công nghiệp.',
};

export const normal: Story = () => (
  <div style={{ height: '100vh' }}>
    <VisionMissionValue
      imgRectangle={imgLink}
      dataItem1={dataItem1}
      dataItem2={dataItem2}
      dataItem3={dataItem3}
    />
  </div>
);
