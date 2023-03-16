import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NewsList, { NewsListCard } from '.';

import { imgLink } from 'assets/dataDummy/media';
import dataNewsList from 'assets/dataDummy/newsList';

export default {
  title: 'Components/templates/NewsList',
  component: NewsList,
  argTypes: {},
} as Meta;

export const horizontal: Story = () => (
  <div style={{ margin: '50px', maxWidth: '427px' }}>
    <Router>
      <NewsListCard
        imgSrc={imgLink}
        ratio="112x63"
        alt="Nova Service"
        title="Nova Service cùng với các đối tác hiện thực hóa mục tiêu chiến lược"
        href="/"
      />
    </Router>
  </div>
);

export const vertical: Story = () => (
  <div style={{ margin: '50px', maxWidth: '644px' }}>
    <Router>
      <NewsListCard
        imgSrc={imgLink}
        ratio="644x362"
        alt="Nova Service"
        title="Nova Service hợp tác với Nam Hương Group"
        isVertical
        href="/"
      />
    </Router>
  </div>
);

export const main: Story = () => (
  <Router>
    <NewsList
      titleMain="Tin tức"
      dataNewsList={dataNewsList}
    />
  </Router>
);
