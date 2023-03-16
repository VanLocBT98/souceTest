import React from 'react';

import PartnerList from 'components/templates/PartnerList';

export interface PartnerListContainerProps {
  title: string;
  desc: string;
  dataList: Array<string>;
}

const PartnerListContainer: React.FC<PartnerListContainerProps> = (props) => (
  <div className="p-aboutUs_partnerList">
    <PartnerList
      {...props}
    />
  </div>
);

export default PartnerListContainer;
