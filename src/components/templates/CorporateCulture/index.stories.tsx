import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import CorporateCulture from '.';

import { imgLink } from 'assets/dataDummy/media';

export default {
  title: 'Components/templates/CorporateCulture',
  component: CorporateCulture,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <CorporateCulture
      title="Văn hóa doanh nghiệp"
      imgSrc={imgLink}
      desc="Tại NovaGroup, Hiệu quả - Chính trực - Chuyên nghiệp là nét văn hóa đặc thù, trở thành giá trị cốt lõi của mỗi con người Nova. Điều này được thể hiện qua Bộ Quy tắc ứng xử đã được áp dụng nhiều năm qua tại Tập đoàn. Bất kỳ nhân viên nào cũng phải đọc, hiểu và thực hiện Bộ Quy tắc ứng xử, từ đó có hành vi ứng xử đúng chuẩn mực, góp phần gìn giữ Giá trị cốt lõi của NovaGroup. "
      btnText="Xem Thêm"
      href="/"
      target="_self"
    />
  </Router>
);
