import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';
import mapModifiers from 'utils/functions';

export interface FieldActivityItemProps {
  imgSrc: string;
  title: string;
  desc: string;
  href?: string;
}
export interface FieldActivityProps {
  title?: string;
  desc?: string;
  list: FieldActivityItemProps[];
  isSmall?: boolean;
}

const FieldActivity: React.FC<FieldActivityProps> = ({
  title,
  desc,
  list,
  isSmall,
}) => {
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow extendClassName="t-fieldActivity_btn" customArrow="defaultArrow" />,
    nextArrow: <NextArrow extendClassName="t-fieldActivity_btn" customArrow="defaultArrow" />,
    infinite: list.length > 3,
    cssEase: 'ease-in-out',
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          customPaging() {
            return (
              <span className="o-carousel_dot" />
            );
          },
        },
      },
    ],
  };
  return (
    <div className="t-fieldActivity">
      <Container>
        <Heading type="h2" modifiers={['arsenic', '700', 'center', '32x48']} content={title} />
        <div className="t-fieldActivity_desc">
          <Text modifiers={['center', '400', 'davysGrey', '16x24']} content={desc} />
        </div>
        <div className={mapModifiers('t-fieldActivity_wrapper', isSmall && 'small')}>
          {list && list.length > 0 && (
            <Carousel settings={settings}>
              {list.map((item, idx) => (
                <Link href={item.href} key={`item-${idx.toString()}`}>
                  <div className="t-fieldActivity_item">
                    <Image src={item.imgSrc} ratio="354x236" size="cover" alt={item.title} />
                    <div className="t-fieldActivity_content">
                      <div className="t-fieldActivity_content-title">
                        <Text modifiers={['white', '600', '24x32', 'center']} content={item.title} />
                      </div>
                      <div className="t-fieldActivity_content-desc">
                        <Text modifiers={['white', '400', 'center']} content={item.desc} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </Carousel>
          )}
        </div>
      </Container>
    </div>
  );
};

FieldActivity.defaultProps = {
};

export default FieldActivity;
