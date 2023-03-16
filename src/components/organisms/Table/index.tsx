/* eslint-disable react/require-default-props */
import React from 'react';

import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

interface TableRowProps extends React.TableHTMLAttributes<HTMLTableRowElement> {
  isHead?: boolean;
}

interface TableCellProps extends React.TableHTMLAttributes<HTMLTableCellElement> {
  isHead?: boolean;
  colSpan?: number;
  rowSpan?: number;
  customPaddingY?: 'smaller-y' | 'sm-y';
  customPaddingX?: 'sm-x';
  classModify?: string;
}

interface TableProps {
  theme?: 'light' | 'dark';
  classModifiers?: string;
  modifiers?: 'transaction' | 'primaryColor';
  header?: React.ReactNode;
  spacing?: boolean;
  children?: React.ReactNode
}

interface TableHeaderProps {
  children?: React.ReactNode
}

export const NoData: React.FC = () => (
  <tr>
    <td colSpan={12}>
      <div className="o-table_nodata">
        <Text modifiers={['center', '20x30', 'davysGrey']}>notify.no_data</Text>
      </div>
    </td>
  </tr>
);

export const TableRow: React.FC<TableRowProps> = ({ isHead, children, ...props }) => (
  <tr className={isHead ? 'o-table_header_row' : 'o-table_body_row'} {...props}>
    {children}
  </tr>
);

export const TableCell: React.FC<TableCellProps> = ({
  isHead, children, customPaddingY, customPaddingX, classModify, ...props
}) => {
  const Element = isHead ? 'th' : 'td';
  return (
    <Element
      {...props}
      className={`${mapModifiers(isHead ? 'o-table_header_cell' : 'o-table_body_cell', customPaddingY, customPaddingX, props.onClick && 'cursor')} ${classModify || ''}`}
    >
      {children}
    </Element>
  );
};

export const TableHeader: React.FC<TableHeaderProps> = ({ children }) => (
  <thead className="o-table_header">
    {children}
  </thead>
);

const Table: React.FC<TableProps> = ({
  theme,
  classModifiers,
  header,
  children,
  modifiers,
  spacing,
}) => (
  <div className={mapModifiers('o-table', theme, classModifiers, modifiers, spacing && 'spacing')}>
    <table className="o-table_wrap">
      {header}
      <tbody>
        {children}
      </tbody>
    </table>
  </div>
);

Table.defaultProps = {
  classModifiers: '',
  theme: 'light',
  header: undefined,
  modifiers: undefined,
  spacing: undefined,
};

TableRow.defaultProps = {
  isHead: undefined,
};

TableCell.defaultProps = {
  isHead: undefined,
  colSpan: undefined,
  rowSpan: undefined,
};

export default Table;
