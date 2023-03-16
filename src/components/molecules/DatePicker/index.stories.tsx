import { Story, Meta } from '@storybook/react';
import React from 'react';

import DatePicker from '.';

export default {
  title: 'Components/molecules/DatePicker',
  component: DatePicker,
  argTypes: {
  },
} as Meta;

export const normal: Story = () => (
  <DatePicker
    id="date-picker"
    handleChangeDate={(val) => val}
  />
);
