import React from 'react';

import Text from 'components/atoms/Text';

export interface InfoLeaderProps {
  imageSrc: string;
  name: string;
  position: string;
  handleClick?: () => void;
  gender: string;
  // eslint-disable-next-line react/no-unused-prop-types
  isLeader?: number; // used in T-Leadership
  // eslint-disable-next-line react/no-unused-prop-types
  description?: string; // used in LeaderShipContainer
}

const InfoLeader: React.FC<InfoLeaderProps> = ({
  imageSrc, name, position, handleClick, gender,
}) => (
  <div className="m-infoleader">
    <div
      className="m-infoleader_wrapper"
      onClick={handleClick}
    >
      <div
        className="m-infoleader_avatar"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
    </div>
    <div className="m-infoleader_name">
      <Text
        modifiers={['24x32', '600', 'mayGreen', 'center']}
      >
        {`${gender} ${name}`}

      </Text>
    </div>
    <div
      className="m-infoleader_position"
    >
      <Text
        modifiers={['16x24', '400', 'davysGrey', 'center']}
      >
        {position}

      </Text>
    </div>
  </div>
);

InfoLeader.defaultProps = {
};

export default InfoLeader;
