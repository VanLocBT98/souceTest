import { Story, Meta } from '@storybook/react';
import React from 'react';

import Animate from '.';

export default {
  title: 'Components/organisms/Animate',
  component: Animate,
  argTypes: {
     animate: {
      control: {
        type: 'select',
        options: [
          'backInRight',
          'fadeInRight',
          'fadeInLeft',
        ],
      },
    },
  },
} as Meta;

export const normal: Story = ({ animate }) => (
  <Animate
    type={animate}
  >
    <div
      style={{
        height: '100px',
        backgroundColor: '#55aa41',
      }}
    />
  </Animate>
);
