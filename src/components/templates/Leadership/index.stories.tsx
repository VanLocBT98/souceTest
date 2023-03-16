import { Story, Meta } from '@storybook/react';
import React from 'react';

import Leadership from '.';

export default {
  title: 'Components/templates/Leadership',
  component: Leadership,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Leadership
    title="Ban lãnh đạo"
    dataList={[]}
  />
);
