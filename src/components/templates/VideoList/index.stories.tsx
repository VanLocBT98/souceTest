import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import VideoList, { VideoProps } from '.';

import { listSideData, listSubData } from 'assets/dataDummy/news';

export default {
  title: 'Components/templates/VideoList',
  component: VideoList,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const [videoActive, setVideoActive] = useState(listSideData[0]);

  const handleClick = (video: VideoProps) => { setVideoActive(video); };

  return (
    <BrowserRouter>
      <VideoList
        title="Danh sách video"
        videoActive={videoActive}
        sideList={listSideData}
        subList={listSubData}
        pageSubList={1}
        totalPagesSubList={5}
        handleClick={(video) => handleClick(video)}
      />

    </BrowserRouter>
  );
};
