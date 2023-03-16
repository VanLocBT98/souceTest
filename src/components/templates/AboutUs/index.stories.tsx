import { Story, Meta } from '@storybook/react';
import React from 'react';

import AboutUs from '.';

import { imgLink } from 'assets/dataDummy/media';

export default {
  title: 'Components/templates/AboutUs',
  component: AboutUs,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <AboutUs
    title="Giới thiệu<br>về công ty chúng tôi"
    desc="Nova Service đang tập trung vào 5 lĩnh vực mũi nhọn bao gồm: Y tế, Giáo dục, Du lịch-Lưu trú, Vui chơi giải trí và Bán lẻ, với những công ty thành viên cốt lõi như: Nova Education Group; Nova Healthcare Group; Nova FnB, Nova Hospitality; NovaDreams…<br /><br />Hợp tác với các đối tác chiến lược, các thương hiệu nổi tiếng thế giới để cung cấp những dịch vụ trọn gói tốt nhất cho khách hàng."
    imageSrcMain={imgLink}
    imageSrcSub={imgLink}
  />
);
