import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import PartnerList from '.';

import { imgLink } from 'assets/dataDummy/media';

export default {
  title: 'Components/templates/PartnerList',
  component: PartnerList,
  argTypes: {},
} as Meta;

const dataList = [imgLink, imgLink, imgLink, imgLink, imgLink, imgLink, imgLink, imgLink];

export const normal: Story = () => (
  <Router>
    <PartnerList
      title="Đối tác"
      desc="Trên hành trình 29 năm qua, bằng niềm đam mê, sự tập trung và kiên định với mục tiêu, Novaland trở thành Nhà Đầu tư - Phát triển bất động sản uy tín với danh mục sản phẩm đa dạng bao gồm căn hộ, biệt thự, nhà phố, trung tâm thương mại, văn phòng, bất động sản nghỉ dưỡng tại các vị trí chiến lược "
      dataList={dataList}
    />
  </Router>
);
