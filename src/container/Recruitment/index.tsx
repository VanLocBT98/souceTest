import React from 'react';
import LazyLoad from 'react-lazyload';

import ContactInfoHrContainer from './ContactInfoHr';
import IntroducingMemberCompaniesContainer from './IntroducingMemberCompaniesContainer';
import RecruitmentListContainer from './RecruitmentListContainer';
import RemunerationPolicyContainer from './RemunerationPolicyContainer';

import {
  blockCareerOpportunitiesDummy,
  blockInfoDummy,
  blockIntroductionMemberCompaniesDummy,
  blockRemunerationPolicyDummy,
  groupRecruitmentGroupDataDummy
} from 'assets/dataDummy/recruitmentList';

const RecruitmentContainer: React.FC = () => {
  // TODO: replace all below data by data from serve
  const blockCareerOpportunities = blockCareerOpportunitiesDummy;
  const blockIntroductionMemberCompanies = blockIntroductionMemberCompaniesDummy;
  const blockRemunerationPolicy = blockRemunerationPolicyDummy;
  const blockInfo = blockInfoDummy;
  const groupRecruitmentGroupData = groupRecruitmentGroupDataDummy;

  return (
    <>
      {blockCareerOpportunities && (
        <section>
          <RecruitmentListContainer {...blockCareerOpportunities} />
        </section>
      )}
      {blockIntroductionMemberCompanies && (
        <LazyLoad
          height={600}
          throttle={50}
        >
          <section>
            <IntroducingMemberCompaniesContainer
              {...blockIntroductionMemberCompanies}
            />
          </section>
        </LazyLoad>
      )}
      {blockRemunerationPolicy && (
        <LazyLoad
          height={600}
          throttle={50}
        >
          <section>
            <RemunerationPolicyContainer
              remunerationList={groupRecruitmentGroupData || {}}
              title="Chính Sách Đãi Ngộ"
            />
          </section>
        </LazyLoad>
      )}
      {blockInfo && (
        <LazyLoad
          height={250}
          throttle={50}
        >
          <section>
            <ContactInfoHrContainer {...blockInfo} />
          </section>
        </LazyLoad>
      )}
    </>
  );
};

export default RecruitmentContainer;
