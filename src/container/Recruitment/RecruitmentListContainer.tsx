/* eslint-disable no-console */
import React, { useState, } from 'react';
import { useTranslation } from 'react-i18next';

import { RecruitmentBlock } from './types';

import {
  dataCareerOpportunityListDummy,
  dataDepartmentOptionsDummy,
  dataLocationOptionsDummy,
  dataPositionOptionsDummy
} from 'assets/dataDummy/recruitmentList';
import { OptionType } from 'components/molecules/PullDown';
import RecruitmentList, { RecruitmentListHeader } from 'components/templates/RecruitmentList';

const RecruitmentListContainer: React.FC<RecruitmentBlock> = ({
  title,
  ...props
}) => {
  const { t } = useTranslation();

  const [loadingCareerOpportunityList] = useState(false);
  const [loadingShowMore] = useState(false);

  const allOption: OptionType[] = [
    {
      value: 'all',
      label: t('recruitment.filter_all')
    },
  ];

  const recruitmentListHeader: RecruitmentListHeader[] = [
    {
      id: 1,
      value: t('recruitment.position'),
    },
    {
      id: 2,
      value: t('recruitment.application_code'),
    },
    {
      id: 7,
      value: t('recruitment.quantity'),
      align: 'center',
    },
    {
      id: 3,
      value: t('contact.cf_unit_placeholder'),
    },
    {
      id: 4,
      value: t('recruitment.occupation'),
    },
    {
      id: 5,
      value: t('recruitment.location'),
    },
    {
      id: 6,
      value: t('recruitment.expire_date'),
    },
  ];

  const dataPositionOptions = dataPositionOptionsDummy;

  const dataDepartmentOptions = dataDepartmentOptionsDummy;

  const dataLocationOptions = dataLocationOptionsDummy;

  const dataCareerOpportunityList = dataCareerOpportunityListDummy;

  const handleShowMore = async (): Promise<void> => {
    console.log(1232);
  };

  const handleClickFilter = (
    poValue?: OptionType,
    deValue?: OptionType,
    loValue?: OptionType,
  ) => {
    console.log('poValue', poValue);
    console.log('deValue :>> ', deValue);
    console.log('loValue :>> ', loValue);
  };

  return (
    <div className="p-recruitment_listJob">
      <RecruitmentList
        title={title}
        positionOptions={allOption.concat(dataPositionOptions)}
        departmentOptions={allOption.concat(dataDepartmentOptions)}
        locationOptions={allOption.concat(dataLocationOptions)}
        dataRecruitmentList={dataCareerOpportunityList}
        dataRecruitmentListHeader={recruitmentListHeader}
        handleClickFilter={handleClickFilter}
        handleShowMore={handleShowMore}
        page={1}
        totalPage={10}
        loadingShowMore={loadingShowMore}
        loadingCareerOpportunityList={loadingCareerOpportunityList}
        placeholderCareerOpportunities={props}
      />
    </div>
  );
};

export default RecruitmentListContainer;
