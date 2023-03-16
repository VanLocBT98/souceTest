import { Story, Meta } from '@storybook/react';
import React from 'react';

import RemunerationPolicy from '.';

import { remunerationList } from 'assets/dataDummy/remunerationPolicy';

export default {
  title: 'Components/templates/RemunerationPolicy',
  component: RemunerationPolicy,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <RemunerationPolicy
    title="Chính sách đãi ngộ"
    remunerationList={remunerationList}
  />
);
