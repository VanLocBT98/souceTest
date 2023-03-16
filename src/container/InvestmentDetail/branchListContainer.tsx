import React from 'react';

import BranchList, { BranchItemProps } from 'components/templates/BranchList';

export interface BranchListContainerProps {
  title: string,
  description?: string,
  branchListInfoData?: BranchItemProps[],
}

const BranchListContainer: React.FC<BranchListContainerProps> = ({
  title,
  description,
  branchListInfoData,
}) => (
  <div className="p-investmentDetail_branchList">
    <BranchList
      title={title}
      description={description}
      branchListInfo={branchListInfoData}
    />
  </div>
);

BranchListContainer.defaultProps = {
};

export default BranchListContainer;
