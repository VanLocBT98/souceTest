import React from 'react';

import DevelopmentHistory, { DevelopmentHistoryTypes } from 'components/templates/DevelopmentHistory';

export interface DevelopmentHistoryContainerProps {
  title: string;
  descMain: string;
  developmentHistoryList: DevelopmentHistoryTypes[];
}

const DevelopmentHistoryContainer: React.FC<DevelopmentHistoryContainerProps> = (props) => (
  <div className="p-aboutUs_developmentHistory">
    <DevelopmentHistory
      {...props}
    />
  </div>
);

export default DevelopmentHistoryContainer;
