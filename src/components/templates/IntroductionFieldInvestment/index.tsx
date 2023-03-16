import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';

interface IntroductionFieldInvestmentProps {
  tag: string;
  title: string;
  content: string;
  imgSrc: string;
}

const IntroductionFieldInvestment: React.FC<IntroductionFieldInvestmentProps> = ({
  tag, title, content, imgSrc,
}) => (
  <div className="t-introductionFieldInvestment">
    <Container>
      <div className="t-introductionFieldInvestment_wrapper">
        <div className="t-introductionFieldInvestment_main">
          <Animate type="fadeInLeft" extendClassName="t-introductionFieldInvestment_main_wrap">
            <div className="t-introductionFieldInvestment_main_wrapContent">
              <Text
                modifiers={['16x24', '700', 'left', 'white']}
                content={tag}
              />
              <div className="t-introductionFieldInvestment_main_title">
                <Heading
                  modifiers={['32x48', '700', 'white']}
                  content={title}
                />
              </div>
              <div className="t-introductionFieldInvestment_main_content">
                <Text
                  modifiers={['16x24', '400', 'left', 'whiteSmoke']}
                  content={content}
                />
              </div>
            </div>
          </Animate>
        </div>
        <div className="t-introductionFieldInvestment_image">
          <Animate type="fadeInRight">
            <Image src={imgSrc} alt={title} ratio="555x416" />
          </Animate>
        </div>
      </div>
    </Container>
  </div>
);

IntroductionFieldInvestment.defaultProps = {
};

export default IntroductionFieldInvestment;
