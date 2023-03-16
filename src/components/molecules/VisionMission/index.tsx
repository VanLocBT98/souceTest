import React from 'react';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';

export interface VisionMissionProps {
  title?: string;
  content?: string;
  imgSrc?: string;
}

const VisionMission: React.FC<VisionMissionProps> = ({ title, content, imgSrc }) => (
  <div className="m-visionmission">
    <div className="m-visionmission_image">
      <Image
        src={imgSrc || ''}
        alt=""
        ratio="1x1"
      />
    </div>
    <div className="m-visionmission_title">
      <Text
        modifiers={['20x30', '500', 'raisinBlack']}
      >
        {title}

      </Text>
    </div>
    <div className="m-visionmission_content">
      <Text
        modifiers={['16x24', '400', 'davysGrey', 'justify']}
        content={content}
      />
    </div>
  </div>
);

export default VisionMission;
