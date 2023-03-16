import { Story, Meta } from '@storybook/react';
import React from 'react';

import InfoLeader from '.';

import { imgLink } from 'assets/dataDummy/media';

export default {
  title: 'Components/molecules/InfoLeader',
  component: InfoLeader,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <InfoLeader
    imageSrc={imgLink}
    name="Nguyễn Thái Phiên"
    position="Phó Tổng Giám đốc Đầu tư và Tài chính"
    gender="Ông"
  />
);
