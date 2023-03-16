import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Breadcrumb, { BreadcrumbPropsType } from '.';

export default {
  title: 'Components/molecules/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    prefix: {
      control: {
        type: 'select',
        options: [
          '/',
          '>',
        ],
      },
      defaultValue: '/',
    },
  },
} as Meta;

const breadcrumbList: BreadcrumbPropsType[] = [
  {
    pathName: '/',
    text: 'Home',
  },
  {
    pathName: '/',
    text: 'Application Center',
  },
  {
    pathName: '/',
    text: 'An Application 1',
  },
  {
    pathName: '/',
    text: 'An Application 2',
  },
  {
    pathName: '/',
    text: 'An Application 3',
  },
  {
    pathName: '/',
    text: 'An Application 4',
  },
];

export const normal: Story = ({ prefix }) => (
  <Router>
    <Breadcrumb breadcrumbs={breadcrumbList} prefix={prefix} />
  </Router>
);
