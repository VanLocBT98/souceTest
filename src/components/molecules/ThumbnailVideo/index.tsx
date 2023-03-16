import React, { useEffect, useState } from 'react';

import Player from '../../organisms/Player';

import Heading from 'components/atoms/Heading';
import Icon, { IconSize } from 'components/atoms/Icon';
import Image from 'components/atoms/Image';

export interface ThumbnailVideoProps {
  id: number;
  urlImg: string;
  ratio?: Ratio;
  dataLink?: string;
  letControl?: boolean;
  playing?: boolean;
  muted?: boolean;
  iconPlaySize?: IconSize;
  onPlayVideo?: () => void;
  onPauseVideo?: () => void;
  name?: string;
  isImage?: boolean;
  handleIncrementView?: (e: number) => void;
}

const ThumbnailVideo: React.FC<ThumbnailVideoProps> = ({
  id,
  urlImg,
  ratio,
  dataLink,
  letControl,
  playing = false,
  muted,
  onPauseVideo,
  onPlayVideo,
  name,
  iconPlaySize,
  isImage,
  handleIncrementView = () => { },
}) => {
  const [isPlay, setPlay] = useState<boolean>(playing);

  useEffect(() => {
    setPlay(playing);
  }, [playing]);
  return (
    <div className="m-thumbnailVideo">
      <div className="m-thumbnailVideo_content">
        <Image
          src={urlImg}
          alt="video"
          ratio={ratio || '644x362'}
        />
        {
          isImage && (
            <div
              className={`m-thumbnailVideo_play ${isPlay ? ' hide' : ''}`}
              onClick={() => {
                setPlay(true);
                handleIncrementView(id);
              }}
            >
              <Icon
                iconName="playVideo"
                size={iconPlaySize || '40x40'}
              />
            </div>
          )
        }

        <div className="m-thumbnailVideo_video open">
          {
            isImage
              ? (
                <Image
                  src={urlImg}
                  alt={urlImg}
                  ratio={ratio || '644x362'}
                />
              )
              : (
                <Player
                  videoSrc={dataLink || ''}
                  videoThumbnail={urlImg}
                  hasControls={letControl}
                  isMuted={muted}
                  onPlay={onPlayVideo}
                  onPause={onPauseVideo}
                  iconPlayer="playVideo"
                />
              )
          }
        </div>
      </div>
      {
        name && (
          <div className="m-thumbnailVideo_name">
            <Heading
              type="h3"
              modifiers={['davysGrey5a', '700', 'center', '20x30']}
            >
              {name}
            </Heading>
          </div>
        )
      }
    </div>
  );
};

ThumbnailVideo.defaultProps = {
};

export default ThumbnailVideo;
