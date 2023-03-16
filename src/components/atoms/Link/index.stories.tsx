import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Text from '../Text';

import Link from '.';

export default {
  title: 'Components/atoms/Link',
  component: Link,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <Link href="/home">
      <Text type="span" modifiers={['arsenic']}>Home</Text>
    </Link>
    &nbsp;
    <Link href="/about">
      <Text type="span" modifiers={['arsenic']}>About</Text>
    </Link>
  </Router>

);

export const useExternal: Story = () => (
  <Router>
    <Link
      useExternal
      target="_blank"
      href="https://google.com.vn"
    >
      <Text type="span" modifiers={['arsenic']}>Google</Text>
    </Link>
  </Router>
);
