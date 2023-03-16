import React from 'react';

import imageSrcRectangle from 'assets/images/rectangle.png';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

export interface AboutUsProps {
  title?: string;
  desc?: string;
  imageSrcMain: string;
  imageSrcSub: string;
}

const AboutUs: React.FC<AboutUsProps> = ({
  title,
  desc,
  imageSrcMain,
  imageSrcSub,
}) => (
  <div className="t-aboutUs">
    <Container>
      <div className="t-aboutUs_flex">
        <div className="t-aboutUs_col">
          <div className="t-aboutUs_title">
            <Heading
              modifiers={['32x48', 'raisinBlack', '700']}
              content={title}
            />
          </div>
          <div className="t-aboutUs_desc">
            <Text
              modifiers={['16x24', 'davysGrey', '400']}
              content={desc}
            />
          </div>
        </div>
        <div className="t-aboutUs_col">
          <div className="t-aboutUs_wrapImage">
            <div className="t-aboutUs_rectangle">
              <Image
                ratio="1x1"
                src={imageSrcRectangle}
                alt={title || 'Giới thiệu về công ty chúng tôi'}
              />
            </div>
            <div className="t-aboutUs_imageMain">
              <div className="animate animate-backInRight">
                <Image
                  ratio="3x4"
                  src={imageSrcMain}
                  alt={title || 'Giới thiệu về công ty chúng tôi'}
                />
              </div>
            </div>
            <div className="t-aboutUs_imageSub">
              <div className="animate animate-backInRight">
                <Image
                  ratio="3x4"
                  src={imageSrcSub}
                  alt={title || 'Giới thiệu về công ty chúng tôi'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default AboutUs;
