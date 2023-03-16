import React from 'react';

import Text from 'components/atoms/Text';
import InfoLeader from 'components/molecules/InfoLeader';
import Modal from 'components/organisms/Modal';

export interface LeaderDetailsModalProps {
  isOpen: boolean;
  handleClose?: () => void;
  gender: string;
  description?: string;
  imageSrc: string;
  name: string;
  position: string;
}

const LeaderDetailsModal: React.FC<LeaderDetailsModalProps> = ({
  isOpen,
  handleClose,
  imageSrc,
  name,
  position,
  description,
  gender,
}) => (
  <Modal
    isOpen={isOpen}
    modifiers="leader-details"
    handleClose={handleClose}
    isShowDivider
    ziseIconClose="24x24"
    iconName="closeGreen"
  >
    <div className="t-leaderDetailsModal">
      <div className="t-leaderDetailsModal_flex">
        <div className="t-leaderDetailsModal_left">
          <InfoLeader
            imageSrc={imageSrc}
            name={name}
            position={position}
            gender={gender}
          />
        </div>
        <div className="t-leaderDetailsModal_right">
          <div className="t-leaderDetailsModal_content">
            <Text
              content={description}
              type="div"
              modifiers={['mayGreen', '20x30']}
            />
          </div>
        </div>
      </div>
      <div className="t-leaderDetailsModal_blurContainer" />
    </div>
  </Modal>
);
LeaderDetailsModal.defaultProps = {
};

export default LeaderDetailsModal;
