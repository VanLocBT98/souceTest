import { Story, Meta } from '@storybook/react';
import React from 'react';

import ContactInfoHr from '.';

export default {
  title: 'Components/templates/ContactInfoHr',
  component: ContactInfoHr,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <ContactInfoHr
    titleQA="Bạn cần trợ giúp?"
    titleEmail="Email HR:"
    titlePhone="Điện thoại HR:"
    contentQA="Liên hệ bộ phận nhân sự"
    contentEmail="hr@novaservice.com.vn"
    contentPhone="0944.888.888"
  />
);
