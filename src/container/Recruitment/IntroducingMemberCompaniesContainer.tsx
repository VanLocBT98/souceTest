import React from 'react';

import { RecruitmentBlock } from './types';

import { businessUnitsListDataDummy } from 'assets/dataDummy/recruitmentList';
import IntroducingMemberCompanies from 'components/templates/IntroducingMemberCompanies';

const IntroducingMemberCompaniesContainer: React.FC<RecruitmentBlock> = ({
  title,
  descriptoion,
}) => {
  const businessUnitsListData = businessUnitsListDataDummy;

  return (
    <div className="p-recruitment_introCompany">
      <IntroducingMemberCompanies
        title={title}
        desc={descriptoion}
        data={businessUnitsListData}
      />
    </div>
  );
};

export default IntroducingMemberCompaniesContainer;
