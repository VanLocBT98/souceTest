import React from 'react';
// import { useTranslation } from 'react-i18next';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Carousel from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

export interface IntroduceSpecificBUInformationProps {
  title: string;
  description: string;
  phoneNumber?: string;
  email?: string;
  images?: Array<string>;
  urlButton?: string;
}

const IntroduceSpecificBUInformation: React.FC<IntroduceSpecificBUInformationProps> = ({
  title,
  description,
  phoneNumber,
  email,
  images,
  urlButton,
}) => {
  // const { t } = useTranslation();
  const settingCarousel = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    cssEase: 'ease-in-out',
    autoplay: true,
    autoplayTimeout: 2000,
  };

  return (
    <Container>
      {images && (
        <div className="t-introduceSpecificBUInformation">
          <div className="t-introduceSpecificBUInformation_left">
            <Animate type="fadeInLeft" extendClassName="t-introduceSpecificBUInformation_left_wrap">
              <div className="t-introduceSpecificBUInformation_left_wrapcontent">
                {title && (
                  <div className="t-introduceSpecificBUInformation_title">
                    <Heading modifiers={['32x48', '700', 'white']}>
                      {title}
                    </Heading>
                  </div>
                )}
                {
                  description && (
                    <div className="t-introduceSpecificBUInformation_desc">
                      <Text
                        modifiers={['white', '400', '16x24']}
                        content={description}
                      />
                    </div>
                  )
                }
                <div className="t-introduceSpecificBUInformation_contact">
                  {
                    phoneNumber && (
                      <div className="t-introduceSpecificBUInformation_contact-phone">
                        <Icon iconName="phoneGreen" />
                        <span>{phoneNumber}</span>
                      </div>
                    )
                  }
                  {
                    email && (
                      <>
                        <div className="t-introduceSpecificBUInformation_contact-divider" />
                        <div className="t-introduceSpecificBUInformation_contact-email">
                          <Icon iconName="emailGreen" />
                          <span>{email}</span>
                        </div>
                      </>
                    )
                  }
                </div>
                {
                  urlButton && (
                    <div className="t-introduceSpecificBUInformation_button">
                      <Link useExternal href={urlButton} target="_blank">
                        {/* <Button>{t('general.website_access')}</Button> */}
                        <Button>Truy caapj website</Button>
                      </Link>
                    </div>
                  )
                }
              </div>
            </Animate>
          </div>
          <div className="t-introduceSpecificBUInformation_right">
            <Animate type="fadeInRight">
              <div className="t-introduceSpecificBUInformation_right_wrap">
                <Carousel settings={settingCarousel}>
                  {images?.map((e, index) => (
                    <div
                      // eslint-disable-next-line react/no-array-index-key
                      key={index.toString()}
                      className="t-introduceSpecificBUInformation_item"
                    >
                      <Image
                        ratio="555x424"
                        src={e}
                        alt="introduceSpecificBUInformation"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </Animate>
          </div>
        </div>
      )}
    </Container>
  );
};

IntroduceSpecificBUInformation.defaultProps = {};

export default IntroduceSpecificBUInformation;
