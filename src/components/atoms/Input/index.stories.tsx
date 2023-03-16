import { Meta, Story } from '@storybook/react';
import React from 'react';

import Input from '.';

export default {
  title: 'Components/atoms/Input',
  component: Input,
  argTypes: {
    modifiers: {
      control: {
        type: 'select',
        options: ['default', 'bg'],
      },
      defaultValue: 'default',
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'number', 'email', 'password'],
      },
      defaultValue: false,
    },
    sizeModify: {
      control: {
        type: 'select',
        options: ['formBg', 'default'],
      },
      defaultValue: 'default',
    },
    label: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    disabled: {
      control: {
        type: 'boolean',
        options: [false, true],
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
    isSearch: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
      defaultValue: false,
    },
  },
} as Meta;

export const normal: Story = ({
  label,
  disabled,
  placeholder,
  type,
  error,
  sizeModify,
  modifiers,
  isSearch,
}) => (
  <div style={{ background: sizeModify === 'formBg' ? '#000' : '#eee' }}>
    <Input
      id="test"
      autoComplete="off"
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      error={error}
      label={label}
      sizeModify={sizeModify}
      modifiers={modifiers}
      isSearch={isSearch}
    />
  </div>
);
