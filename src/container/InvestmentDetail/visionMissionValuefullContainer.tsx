import React from 'react';

import VisionMissionValueFull, { VisionMissionValueFullBlockProps } from 'components/templates/VisionMissionValueFull';

interface VisionMissionValueContainerProps {
  dataList: VisionMissionValueFullBlockProps[],
}

const VisionMissionValueFullContainer: React.FC<VisionMissionValueContainerProps> = ({
  dataList,
}) => (
  <div className="p-investmentDetail_visionMissionValueFull">
    <VisionMissionValueFull dataList={dataList} />
  </div>
);

export default VisionMissionValueFullContainer;
