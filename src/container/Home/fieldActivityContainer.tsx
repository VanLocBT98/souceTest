import React from 'react';

import FieldActivity, { FieldActivityItemProps } from 'components/templates/FieldActivity';

export interface FieldActivityContainerProps {
  title?: string;
  desc?: string;
  list: FieldActivityItemProps[];
}

const FieldActivityContainer: React.FC<FieldActivityContainerProps> = (props) => (
  <FieldActivity {...props} />
);

export default FieldActivityContainer;
