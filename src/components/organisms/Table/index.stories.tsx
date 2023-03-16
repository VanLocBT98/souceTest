import { Story, Meta } from '@storybook/react';
import React from 'react';

import Container from '../Container';

import Table, { TableRow, TableCell, TableHeader } from '.';

import { dataHeaderTable, dataTableDummy } from 'assets/dataDummy/recruitmentList';
import Text from 'components/atoms/Text';

export default {
  title: 'Components/organisms/Table',
  component: Table,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
      defaultValue: 'light',
    },
  },
} as Meta;

export const normal: Story = ({ theme }) => (
  <div style={{ backgroundColor: theme === 'light' ? 'white' : '#262626', padding: '50px' }}>
    <Container>
      <Table
        theme={theme}
        classModifiers="asdasd"
        header={(
          <TableHeader>
            <TableRow isHead>
              {dataHeaderTable.map((e, i) => (
                <TableCell isHead key={`tableCell-${i.toString()}`}>
                  <Text modifiers={['700', 'center', 'white']}>{e.value}</Text>
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
        )}
      >
        {dataTableDummy.map((item, index) => (
          <TableRow key={`tableRow-${index.toString()}`}>
            {Object.keys(item).map((ele, idx) => (
              <TableCell key={`tableRowCell-${idx.toString()}`}>
                <Text modifiers={['700', 'center', 'white']}>
                  {/*  using index to specific key object */}
                  {ele[idx]}
                </Text>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </Table>
    </Container>
  </div>
);

export const mergeTable: Story = ({ theme }) => (
  <div style={{ backgroundColor: theme === 'light' ? 'white' : '#262626', padding: '50px' }}>
    <Container>
      <Table
        theme={theme}
        spacing
        header={(
          <TableHeader>
            <TableRow isHead>
              <TableCell isHead rowSpan={2} style={{ paddingTop: 4, paddingBottom: 4 }}>
                <Text modifiers={['700', 'white', 'center']}>
                  Header 11
                </Text>
              </TableCell>
              <TableCell isHead colSpan={2} style={{ paddingTop: 4, paddingBottom: 4 }}>
                <Text modifiers={['700', 'white', 'center']}>
                  Header 12
                </Text>
              </TableCell>
              <TableCell isHead colSpan={2} style={{ paddingTop: 4, paddingBottom: 4 }}>
                <Text modifiers={['700', 'white', 'center']}>
                  Header 13
                </Text>
              </TableCell>
            </TableRow>
            <TableRow isHead>
              <TableCell isHead style={{ paddingTop: 4, paddingBottom: 4 }}>
                <Text modifiers={['700', 'white']}>
                  Header 21
                </Text>
              </TableCell>
              <TableCell isHead style={{ paddingTop: 4, paddingBottom: 4 }}>
                <Text modifiers={['700', 'white']}>
                  Header 22
                </Text>
              </TableCell>
              <TableCell isHead style={{ paddingTop: 4, paddingBottom: 4 }}>
                <Text modifiers={['700', 'white']}>
                  Header 23
                </Text>
              </TableCell>
              <TableCell isHead style={{ paddingTop: 4, paddingBottom: 4 }}>
                <Text modifiers={['700', 'white']}>
                  Header 24
                </Text>
              </TableCell>
            </TableRow>
          </TableHeader>
        )}
      >
        {/* body  */}
        {[...Array(5)].map((_, i) => (
          <TableRow key={`bodyTableRow-${i.toString()}`}>
            {Array(5).fill('test').map((e, i2) => (
              <TableCell key={`bodyTableCell-${i2.toString()}`}>
                <Text modifiers={['700', 'white']}>test</Text>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </Table>
    </Container>
  </div>
);
