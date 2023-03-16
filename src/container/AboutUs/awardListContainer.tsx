import React from 'react';

import AwardList, { AwardListData } from 'components/templates/AwardList';

export interface AwardListContainerProps {
  title: string;
  list?: AwardListData[];
}

const AwardListContainer: React.FC<AwardListContainerProps> = (props) => (
  <div className="p-aboutUs_awardList">
    <AwardList {...props} />
  </div>
);

export default AwardListContainer;
