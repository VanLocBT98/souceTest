import React from 'react';

import IntroductionFieldInvestment from 'components/templates/IntroductionFieldInvestment';

interface IntroductionFieldInvestmentContainerProps {
  tag: string,
  title: string,
  content: string,
  imgSrc: string,
}

const IntroductionFieldInvestmentContainer: React.FC<IntroductionFieldInvestmentContainerProps> = ({
  tag,
  title,
  content,
  imgSrc,
}) => (
  <div className="p-investmentDetail_introductionFieldInvestment">
    <IntroductionFieldInvestment
      tag={tag}
      title={title}
      content={content}
      imgSrc={imgSrc}
    />
  </div>
);

export default IntroductionFieldInvestmentContainer;
