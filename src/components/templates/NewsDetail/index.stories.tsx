import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NewsDetail from '.';

import { newsDetailData } from 'assets/dataDummy/newsDetailData';

export default {
  title: 'Components/templates/NewsDetail',
  component: NewsDetail,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <NewsDetail newsDetail={newsDetailData.newsDetail} relatedNews={newsDetailData.relatedNews} />
  </BrowserRouter>
);
