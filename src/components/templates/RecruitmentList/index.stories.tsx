import { Story, Meta } from '@storybook/react';
import React, { useCallback } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import RecruitmentList from '.';

import recruitmentList, {
  recruitmentListHeader, positionOptions, departmentOptions, locationOptions,
} from 'assets/dataDummy/recruitmentList';
import { OptionType } from 'components/molecules/PullDown';

export default {
  title: 'Components/templates/RecruitmentList',
  component: RecruitmentList,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const handleClickFilter = useCallback((
    poValue?: OptionType,
    deValue?: OptionType,
    loValue?: OptionType,
  ) => {
    // eslint-disable-next-line no-console
    console.log(poValue, deValue, loValue);
  }, []);

  return (
    <Router>
      <RecruitmentList
        title="Cơ hội nghề nghiệp"
        positionOptions={positionOptions}
        departmentOptions={departmentOptions}
        locationOptions={locationOptions}
        dataRecruitmentList={recruitmentList}
        dataRecruitmentListHeader={recruitmentListHeader}
        handleClickFilter={handleClickFilter}
      />
    </Router>
  );
};
