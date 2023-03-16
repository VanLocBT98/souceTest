import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import FieldActivity from '.';

import { dataFieldActivityList } from 'assets/dataDummy/investmentDetail';

export default {
  title: 'Components/templates/FieldActivity',
  component: FieldActivity,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <FieldActivity
      title="Lĩnh vực hoạt động"
      desc="Trên hành trình 29 năm qua, bằng niềm đam mê, sự tập trung và kiên định với mục tiêu, Novaland trở thành Nhà Đầu tư - Phát triển bất động sản uy tín với danh mục sản phẩm đa dạng bao gồm căn hộ, biệt thự, nhà phố, trung tâm thương mại, văn phòng, bất động sản nghỉ dưỡng tại các vị trí chiến lược"
      list={dataFieldActivityList}
    />
  </BrowserRouter>
);
