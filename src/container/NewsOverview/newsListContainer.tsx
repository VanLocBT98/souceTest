import React from 'react';

import { newsPopularListDataDummy, titleMainNewList } from 'assets/dataDummy/news';
import NewsList from 'components/templates/NewsList';

export interface NewsListContainerProps {
  titleMain?: string;
}
const NewsListContainer: React.FC<NewsListContainerProps> = ({
  titleMain = titleMainNewList,
}) => (
  <NewsList dataNewsList={newsPopularListDataDummy} titleMain={titleMain} />
);

export default NewsListContainer;
