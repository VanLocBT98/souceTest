import React from 'react';

import IntroducingMemberCompaniesList,
{ BusinessUnitsItemProps } from 'components/templates/IntroducingMemberCompaniesList';

export interface IntroductingMemberCompaniesListContainerProps {
  bgImageSrc?: string;
  title?: string;
  desc?: string;
  list: BusinessUnitsItemProps[];
}

const IntroductingMemberCompaniesListContainer:
  React.FC<IntroductingMemberCompaniesListContainerProps> = (props) => (
    <IntroducingMemberCompaniesList {...props} />
  );

export default IntroductingMemberCompaniesListContainer;
