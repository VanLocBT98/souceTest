import React from 'react';

import CorporateCulture from 'components/templates/CorporateCulture';

export interface CorporateCultureContainerProps {
  title: string;
  desc?: string;
  imgSrc: string;
  btnText?: string;
  href?: string;
  target?: string;
}

const CorporateCultureContainer: React.FC<CorporateCultureContainerProps> = (props) => (
  <div className="p-aboutUs_corporateCulture">
    <CorporateCulture
      {...props}
    />
  </div>
);

export default CorporateCultureContainer;
