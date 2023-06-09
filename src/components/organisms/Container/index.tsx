import React from 'react';
import {
  Col, ColProps, Row, RowProps
} from 'react-bootstrap';

import mapModifiers from 'utils/functions';

interface ContainerProps {
  modifiers?: ('fullScreen' | 'noPaddingRight' | 'noPaddingLeft' | 'fullScreenTabletUp')[];
  children?: React.ReactNode;
}

export const CustomRow: React.FC<RowProps> = ({ children }) => (
  <Row className="o-container_row">{children}</Row>
);

export const CustomCol: React.FC<ColProps> = ({ children, ...props }) => (
  <Col className="o-container_col" {...props}>
    {children}
  </Col>
);

const Container: React.FC<ContainerProps> = ({
  modifiers, children,
}) => (
  <div className={`container ${mapModifiers('o-container', modifiers)}`}>
    {children}
  </div>
);

Container.defaultProps = {
  modifiers: undefined,
};

export default Container;
