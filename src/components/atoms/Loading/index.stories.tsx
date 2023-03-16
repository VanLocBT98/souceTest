import { Story, Meta } from '@storybook/react';
import React from 'react';

import Loading from '.';

export default {
  title: 'Components/atoms/Loading',
  component: Loading,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Loading isShow />
);
