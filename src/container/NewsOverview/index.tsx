import React from 'react';

import NewsListContainer from './newsListContainer';
import VideoListContainer from './videoListContainer';

import { newsOverviewBlock } from 'assets/dataDummy/news';

export type NewsOverviewBlock = {
  titleNews: string;
  titleVideo: string;
};

const NewsOverviewContainer: React.FC = () => {
  const blockIntroduction = newsOverviewBlock;

  return blockIntroduction ? (
    <>
      <section className="p-newsoverview_newsList">
        <NewsListContainer
          titleMain={blockIntroduction?.titleNews}
        />
      </section>
      <section className="p-newsoverview_videoList">
        <VideoListContainer
          title={blockIntroduction?.titleVideo}
        />
      </section>
    </>
  ) : null;
};

export default NewsOverviewContainer;
