import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import IntroducingMemberCompanies from '.';

import { businessUnitsListDataDummy } from 'assets/dataDummy/recruitmentList';

export default {
  title: 'Components/templates/IntroducingMemberCompanies',
  component: IntroducingMemberCompanies,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <IntroducingMemberCompanies
      title="Giới thiệu công ty thành viên"
      desc="Nova Service đang tập trung vào 5 lĩnh vực mũi nhọn bao gồm: Y tế, Giáo dục, Du lịch-Lưu trú, Vui chơi giải trí và Bán lẻ, với những công ty thành viên cốt lõi như: Nova Education Group; Nova Healthcare Group; Nova FnB, Nova Hospitality; NovaDreams…"
      data={businessUnitsListDataDummy}
    />
  </BrowserRouter>
);
