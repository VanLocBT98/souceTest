import React from 'react';

import BranchList, { BranchItemProps } from 'components/templates/BranchList';

interface BranchListContainerProps {
  title: string;
  description?: string;
  branchList: BranchItemProps[];
  isTooltip?: boolean;
}

const BranchListContainer: React.FC<BranchListContainerProps> = ({
  title,
  description,
  branchList,
  isTooltip,
}) => (
  <div className="p-busDetails_branchList">
    <BranchList
      title={title}
      description={description}
      branchListInfo={branchList}
      hasSectionInfoBus
      isTooltip={isTooltip}
    />
  </div>
);

BranchListContainer.defaultProps = {
  description: '',
  isTooltip: false,
};

export default BranchListContainer;
