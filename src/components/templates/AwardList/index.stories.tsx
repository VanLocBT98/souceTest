import { Story, Meta } from '@storybook/react';
import React from 'react';

import AwardList from '.';

import awardList from 'assets/dataDummy/awardList';

export default {
  title: 'Components/templates/AwardList',
  component: AwardList,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <AwardList list={awardList} title="Giải thưởng" />
);
