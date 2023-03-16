import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NewsCard from '.';

import { imgLink } from 'assets/dataDummy/media';

export default {
  title: 'Components/organisms/NewsCard',
  component: NewsCard,
  argTypes: {
  },
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <div style={{ maxWidth: 320 }}>
      <NewsCard
        imgSrc={imgLink}
        title="Bến du thuyền - yếu tố vàng gia tăng giá trị bất động sản"
        desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
        href="/"
      />
    </div>
  </BrowserRouter>
);
