import { Story, Meta } from '@storybook/react';
import React from 'react';

import TextArea from '.';

export default {
  title: 'Components/atoms/TextArea',
  component: TextArea,
  argTypes: {
    rows: {
      control: {
        type: 'number',
      },
      defaultValue: 3,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    placeholder: {
      control: {
        type: 'text',
      },
      defaultValue: 'Dummy text',
    },
    error: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

export const normal: Story = ({
  disabled, placeholder, rows, error,
}) => (
  <TextArea
    placeholder={placeholder}
    disabled={disabled}
    rows={rows}
    error={error}
    id="name"
  />
);
