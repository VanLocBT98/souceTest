import { Story, Meta } from '@storybook/react';
import React from 'react';

import DevelopmentHistory from '.';

import dataDevelopmentHistory from 'assets/dataDummy/developmentHistory';

export default {
  title: 'Components/templates/DevelopmentHistory',
  component: DevelopmentHistory,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <DevelopmentHistory
    title="Lịch sử phát triển"
    descMain="Trên hành trình 29 năm qua, bằng niềm đam mê, sự tập trung và kiên định với
    mục tiêu, Novaland trở thành Nhà Đầu tư - Phát triển bất động sản uy tín với danh mục
    sản phẩm đa dạng bao gồm căn hộ, biệt thự, nhà phố, trung tâm thương mại, văn phòng,
    bất động sản nghỉ dưỡng tại các vị trí chiến lược "
    developmentHistoryList={dataDevelopmentHistory}
  />
);
