import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import { Tab, TabPanel, Tabs } from '.';

import Container from 'components/organisms/Container';

export default {
  title: 'Components/organisms/Tabs',
  component: Tabs,
  argTypes: {},
} as Meta;

const dummyData = [
  {
    label: 'HỘI ĐỒNG QUẢN TRỊ',
    content: 'Content 1',
  },
  {
    label: 'BAN TỔNG GIÁM ĐỐC',
    content: 'Content 2',
  },
  {
    label: 'GIÁM ĐỐC CÁC BAN CHUYÊN MÔN',
    content: 'Content 3',
  },
];

export const Normal: Story = () => {
  const [indexActive, setIndexActive] = useState(0);

  return (
    <div>
      <Container>
        <Tabs variableMutate={indexActive} type="search">
          {
            dummyData.map((item, index) => (
              <Tab
                type="search"
                key={`tab-${index.toString()}`}
                label={item.label}
                active={index === indexActive}
                handleClick={() => setIndexActive(index)}
              />
            ))
          }
        </Tabs>
        {
          dummyData.map((item, index) => (
            <TabPanel key={`tab-panel-${index.toString()}`} active={index === indexActive}>
              {item.content}
            </TabPanel>
          ))
        }
      </Container>
    </div>
  );
};
