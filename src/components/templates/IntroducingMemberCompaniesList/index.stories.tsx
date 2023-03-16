import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import IntroducingMemberCompaniesList from '.';

import { dataIntroducingMemberCompaniesList } from 'assets/dataDummy/home';

export default {
  title: 'Components/templates/IntroducingMemberCompaniesList',
  component: IntroducingMemberCompaniesList,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <IntroducingMemberCompaniesList
      title="Giới thiệu công ty thành viên"
      desc="Nova Service đang tập trung vào 5 lĩnh vực mũi nhọn bao gồm: Y tế, Giáo dục, Du lịch-Lưu trú, Vui chơi giải trí và Bán lẻ, với những công ty thành viên cốt lõi như: Nova Education Group; Nova Healthcare Group; Nova FnB, Nova Hospitality; NovaDreams…"
      list={dataIntroducingMemberCompaniesList}
    />

  </BrowserRouter>
);
