import React from 'react';

import { ItemBlock } from './types';

import RemunerationPolicy from 'components/templates/RemunerationPolicy';

export interface RemunerationPolicyContainerProps {
  title: string;
  remunerationList: ItemBlock[];
}

const RemunerationPolicyContainer: React.FC<RemunerationPolicyContainerProps> = (props) => (
  <div className="p-recruitment_policy">
    <RemunerationPolicy
      {...props}
    />
  </div>
);

export default RemunerationPolicyContainer;
