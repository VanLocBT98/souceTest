import React, {
  useEffect, useMemo, useRef, useState
} from 'react';

import Icon, { IconName } from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import { checkUrlVideoYoutube } from 'utils/functions';

interface PlayerProps {
  videoSrc: string;
  videoThumbnail?: string;
  thumbnailMobile?: string;
  thumbnailSrcTablet?: string;
  isLoop?: boolean;
  isMuted?: boolean;
  autoplay?: boolean;
  hasControls?: boolean;
  thumbnailRatio?: Ratio;
  onPlay?: () => void,
  onPause?: () => void,
  iconPlayer?: IconName,
  handleClickPlayBtn?: () => void
}

const Player: React.FC<PlayerProps> = (
  {
    videoSrc,
    autoplay,
    isLoop,
    isMuted,
    hasControls = true,
    videoThumbnail,
    thumbnailMobile,
    thumbnailSrcTablet,
    thumbnailRatio,
    onPlay,
    onPause,
    iconPlayer,
    handleClickPlayBtn
  },
) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setPlay] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlay) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlay]);

  const isYoutube = useMemo(() => {
    if (videoSrc.includes('youtube.com')) { return true; }
    return false;
  }, [videoSrc]);

  useEffect(() => {
    setPlay(false);
  }, [videoSrc]);

  return (
    <div className="o-player">
      <div className="o-player_video">
        {
          (videoSrc && isYoutube) && (
            <iframe
              id="iframe-player"
              src={isPlay
                ? `${checkUrlVideoYoutube(videoSrc)}?autoplay=1&mute=1`
                : checkUrlVideoYoutube(videoSrc)}
              title="title"
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
              onPlay={onPlay}
              onPause={onPause}
            />
          )
        }
        {
          (videoSrc && !isYoutube) && (
            <video
              ref={videoRef}
              controls={hasControls}
              playsInline
              loop={isLoop}
              muted={isMuted}
              autoPlay={autoplay}
              onPlay={onPlay}
              onPause={onPause}
            >
              <source
                src={videoSrc}
                type="video/mp4"
              />
              <track kind="captions" />
              Trình duyệt của bạn không hỗ trợ phát video.
              Vui lòng sử dụng trình duyệt khác. Xin cảm ơn.
            </video>
          )
        }
      </div>
      {
        !isPlay && (
          <>
            {
              videoThumbnail && (
                <div
                  className="o-player_thumbnail"
                >
                  <Image
                    src={videoThumbnail}
                    srcMobile={thumbnailMobile}
                    srcTablet={thumbnailSrcTablet}
                    alt="video thumbnail"
                    ratio={thumbnailRatio}
                  />
                </div>
              )
            }
            {
              !iconPlayer && (
                <div
                  className="o-player_button"
                  onClick={() => setPlay(true)}
                />
              )
            }
            {
              iconPlayer && (
                <div
                  className="o-player_icon"
                  onClick={() => {
                    setPlay(true);
                    if (handleClickPlayBtn) handleClickPlayBtn();
                  }}
                >
                  <Icon
                    iconName={iconPlayer}
                    size="40x40"
                  />
                </div>
              )
            }
          </>
        )
      }
    </div>
  );
};

Player.defaultProps = {
  thumbnailRatio: '644x362',
  iconPlayer: undefined
};

export default Player;
