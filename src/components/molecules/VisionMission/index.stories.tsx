import { Story, Meta } from '@storybook/react';
import React from 'react';

import VisionMission from '.';

import { imgLink } from 'assets/dataDummy/media';

export default {
  title: 'Components/molecules/VisionMission',
  component: VisionMission,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <VisionMission
    imgSrc={imgLink}
    title="Tầm nhìn"
    content="NovaGroup trở thành Tập đoàn đầu tư và phát triển kinh tế hàng đầu Việt Nam hoạt động chính trong 3 lĩnh vực: Dịch vụ - Công nghệ - Công nghiệp."
  />
);
