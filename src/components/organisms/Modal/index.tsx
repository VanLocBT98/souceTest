import React from 'react';
import Modal from 'react-modal';

import Icon, { IconName, IconSize } from 'components/atoms/Icon';
import mapModifiers from 'utils/functions';

interface Props {
  isOpen: boolean;
  handleClose?: () => void;
  isShowDivider?: boolean;
  isShowCloseButton?: boolean;
  modifiers?: 'leader-details' | 'notify' | 'video'; // add more modifiers
  iconName?: IconName;
  ziseIconClose?: IconSize;
  children?: React.ReactNode;
}

const CustomModal: React.FC<Props> = ({
  isOpen,
  children,
  modifiers,
  iconName,
  isShowCloseButton,
  isShowDivider,
  handleClose,
  ziseIconClose,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={handleClose}
    closeTimeoutMS={250}
    className={`${mapModifiers('o-modal', modifiers)}`}
    appElement={document.getElementById('root') as HTMLElement}
    ariaHideApp={false}
    portalClassName={mapModifiers('o-modal_portal', isOpen && 'open')}
  >
    <div className="o-modal_main">
      <div className="o-modal_wrapper">
        {isShowDivider && (
          <div className="o-modal_divider" />
        )}
        {isShowCloseButton && (
          <button type="button" className="o-modal_close" onClick={handleClose}>
            <Icon iconName={iconName || 'closeGray'} size={ziseIconClose} />
          </button>
        )}
        <div className="o-modal_body">{children}</div>
      </div>
    </div>
  </Modal>
);

CustomModal.defaultProps = {
  handleClose: undefined,
  isShowDivider: false,
  isShowCloseButton: true,
  modifiers: undefined,
  iconName: 'closeGray',
  ziseIconClose: '20x20',
};

export default CustomModal;
