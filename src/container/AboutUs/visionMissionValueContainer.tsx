import React from 'react';

import VisionMissionValue, { DataVisionMissionValueType } from 'components/templates/VisionMissionValue';

export interface IntroContainerProps {
  dataItem1: DataVisionMissionValueType;
  dataItem2: DataVisionMissionValueType;
  dataItem3: DataVisionMissionValueType;
  imgRectangle: string;
}

const VisionMissionValueContainer: React.FC<IntroContainerProps> = (props) => (
  <div className="p-aboutUs_visionMissionValue">
    <VisionMissionValue {...props} />
  </div>
);

export default VisionMissionValueContainer;
