import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NewsCategoryList from '.';

import { newsCategoryBottomData, newsCategoryTopData, title } from 'assets/dataDummy/newsCategoryList';

export default {
  title: 'Components/templates/NewsCategoryList',
  component: NewsCategoryList,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <NewsCategoryList
      newsCategoryTop={newsCategoryTopData}
      newsCategoryBottom={newsCategoryBottomData}
      page={1}
      totalPage={10}
      title={title}
    />
  </Router>
);
