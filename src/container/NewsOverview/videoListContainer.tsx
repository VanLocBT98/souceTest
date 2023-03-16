import React, { useEffect, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { videoNewsListDataDummy, videoPopularNewListDataDummy } from 'assets/dataDummy/news';
import VideoList, { VideoProps } from 'components/templates/VideoList';
import { VideoDetailBySlugDataTypes } from 'services/news/types';

export interface VideoListContainerProps {
  title?: string;
  videoDetail?: VideoDetailBySlugDataTypes;
}

const VideoListContainer: React.FC<VideoListContainerProps> = ({
  title, videoDetail,
}) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [videoPlayer, setVideoPlayer] = useState<VideoProps>();
  const [loadingVideo, setLoadingVideo] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [isLoading, setLoading] = useState(false);

  const videoPopularNewListData = videoPopularNewListDataDummy;

  const videoNewsListData = videoNewsListDataDummy;

  const handleChangePage = async (_page: number) => {
    try {
      setLoading(true);
    } catch {
      // Empty
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line no-console
    console.log(_page);
  };

  const handleShowVideo = async (data: VideoProps) => {
    setVideoPlayer(data);
    try {
      if (!executeRecaptcha) return;
      setLoadingVideo(true);
      setIsPlay(true);
    } finally {
      setLoadingVideo(false);
    }
  };

  const handlePlayVideo = async (idVideo: number) => {
    // eslint-disable-next-line no-console
    console.log('idVideo :>> ', idVideo);
  };

  useEffect(() => {
    if (videoPopularNewListData
      && videoPopularNewListData.length > 0) {
      setVideoPlayer(videoPopularNewListData[0]);
    } else {
      setVideoPlayer(undefined);
    }
  }, [videoPopularNewListData]);

  return (
    <VideoList
      sideList={videoPopularNewListData}
      subList={videoNewsListData}
      totalPagesSubList={1}
      pageSubList={1}
      title={title}
      isLoading={isLoading}
      videoActive={videoPlayer}
      isPlay={isPlay}
      loadingVideo={loadingVideo}
      videoDetail={videoDetail}
      handleChangePage={handleChangePage}
      handleClick={handleShowVideo}
      handleIncrementView={handlePlayVideo}
    />
  );
};

export default VideoListContainer;
