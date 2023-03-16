import React from 'react';

import AboutUs from 'components/templates/AboutUs';

export interface IntroContainerProps {
  title?: string;
  desc?: string;
  imageSrcMain: string;
  imageSrcSub: string;
}

const IntroContainer: React.FC<IntroContainerProps> = (props) => (
  <div className="p-aboutUs_intro">
    <AboutUs
      {...props}
    />
  </div>
);

export default IntroContainer;
