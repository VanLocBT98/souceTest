import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BranchList from '.';

import { branchListInfoData } from 'assets/dataDummy/investmentDetail';

export default {
  title: 'Components/templates/BranchList',
  component: BranchList,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <div style={{ margin: '50px 0' }}>
      <BranchList
        title="Thương hiệu"
        description="Trên hành trình 29 năm qua, bằng niềm đam mê, sự tập trung và kiên định với mục tiêu, Novaland trở thành Nhà Đầu tư - Phát triển bất động sản uy tín với danh mục sản phẩm đa dạng bao gồm căn hộ, biệt thự, nhà phố, trung tâm thương mại, văn phòng, bất động sản nghỉ dưỡng tại các vị trí chiến lược"
        branchListInfo={branchListInfoData}
      />
    </div>
  </BrowserRouter>
);
