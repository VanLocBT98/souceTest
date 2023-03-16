import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import PullDown, { OptionType } from '.';

export default {
  title: 'Components/molecules/PullDown',
  component: PullDown,
  argTypes: {
    isRequired: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    error: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
  },
} as Meta;

const list = [
  { id: '1', value: '1', label: 'TP. Hồ Chí Minh' },
  { id: '2', value: '2', label: 'An Giang' },
  { id: '3', value: '3', label: 'Bà Rịa Vũng Tàu' },
  { id: '4', value: '4', label: 'Bạc Liêu' },
  { id: '5', value: '5', label: 'Bắc Giang' },
  { id: '6', value: '6', label: 'Bắc Kạn' },
  { id: '7', value: '7', label: 'Bắc Ninh ' },
  { id: '8', value: '8', label: 'Bến Tre' },
  { id: '9', value: '9', label: 'Bình dương' },
];

export const Normal: Story = ({
  error, isRequired,
}) => {
  const [select, setSelect] = useState<OptionType>();
  return (
    <div style={{
      padding: '50px',
      height: '300px',
    }}
    >
      <PullDown
        label="Địa điểm"
        name="test"
        error={error}
        value={select}
        handleSelect={(value) => setSelect(value)}
        optionData={list}
        isRequired={isRequired}
        placeholder="Chọn địa điểm"
      />
    </div>
  );
};
