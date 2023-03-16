import React from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';

interface CorporateCultureProps {
  title: string;
  desc?: string;
  imgSrc: string;
  btnText?: string;
  href?: string;
  target?: string;
}

const CorporateCulture: React.FC<CorporateCultureProps> = ({
  imgSrc,
  desc,
  title,
  href,
  btnText,
  target,
}) => (
  <div className="t-corporateCulture">
    <Container>
      <div className="t-corporateCulture_flex">
        <div className="t-corporateCulture_content">
          <Heading
            type="h2"
            modifiers={['28x44', 'white', '700']}
            content={title}
          />
          {desc && (
            <div className="t-corporateCulture_desc">
              <Text
                modifiers={['white', '16x24', '400']}
                content={desc}
              />
            </div>
          )}
          {
            btnText && (
              <div className="t-corporateCulture_link">
                <Link href={href} target={target}>
                  <Button
                    modifiers="secondary"
                  >
                    {btnText}

                  </Button>
                </Link>
              </div>
            )
          }
        </div>
        <div className="t-corporateCulture_image">
          <Animate
            type="backInRight"
          >
            <Image
              src={imgSrc}
              alt="corporate"
              size="cover"
              ratio="16x9"
            />
          </Animate>
        </div>
      </div>
    </Container>
  </div>
);

CorporateCulture.defaultProps = {
  href: '/',
  desc: '',
  btnText: 'Xem Thêm',
  target: undefined,
};

export default CorporateCulture;
