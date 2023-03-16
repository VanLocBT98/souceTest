import React from 'react';

import FieldActivity, { FieldActivityItemProps } from 'components/templates/FieldActivity';

interface FieldActivityContainerProps {
  title?: string,
  description?: string,
  list: FieldActivityItemProps[],
}

const FieldActivityContainer: React.FC<FieldActivityContainerProps> = ({
  title,
  description,
  list,
}) => (
  <div className="p-investmentDetail_fieldActivity">
    <FieldActivity
      title={title}
      desc={description}
      list={list}
      isSmall
    />
  </div>
);

FieldActivityContainer.defaultProps = {
  title: '',
  description: '',
};

export default FieldActivityContainer;
