import React from 'react';

import Modal from 'components/organisms/Modal';
import Player from 'components/organisms/Player';

interface PopupVideoProps {
  id: number;
  isOpen: boolean;
  handleClose?: () => void;
  dataLink: string;
  mediaThumb?: string;
  handlePostView?: (e: number) => void;
}

const PopupVideo: React.FC<PopupVideoProps> = ({
  id,
  isOpen,
  handleClose,
  dataLink,
  mediaThumb,
  handlePostView,
}) => (
  <Modal
    handleClose={() => {
      if (handleClose) handleClose();
    }}
    isOpen={isOpen}
    modifiers="video"
    ziseIconClose="24x24"
    iconName="closeGreen"
  >
    <div className="t-popupVideo_wrap">
      <Player
        videoThumbnail={mediaThumb}
        videoSrc={dataLink}
        hasControls
        handleClickPlayBtn={() => {
          if (handlePostView) handlePostView(id);
        }}
      />
    </div>
  </Modal>
);
PopupVideo.defaultProps = {
  handleClose: undefined,
  dataLink: undefined,
};

export default PopupVideo;
