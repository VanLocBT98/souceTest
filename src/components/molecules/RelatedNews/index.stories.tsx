import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RelatedNews from '.';

import { imgLink } from 'assets/dataDummy/media';

export default {
  title: 'Components/molecules/RelatedNews',
  component: RelatedNews,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <RelatedNews
      imageSrc={imgLink}
      title="Bến du thuyền - yếu tố vàng gia tăng giá trị bất động sản"
      createDate="23/12/2021"
      href="#"
    />
  </BrowserRouter>
);
