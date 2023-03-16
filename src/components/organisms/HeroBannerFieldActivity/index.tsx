import React, { useState } from 'react';
import Slider from 'react-slick';

import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Carousel from 'components/organisms/Carousel';
import mapModifiers from 'utils/functions';

export interface HeroBannerFieldActivityData {
  imageDesktop: string;
  imageMobile?: string;
  imageTablet?: string;
  link?: string;
  title?: string;
  logo: string;
  target?: string;
}

export interface HeroBannerFieldActivityProps {
  list?: HeroBannerFieldActivityData[];
}

const HeroBannerFieldActivity: React.FC<HeroBannerFieldActivityProps> = ({ list }) => {
  const [nav, setNav] = useState<Slider | null>();

  const settingDefault = {
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
    <div className="o-heroBannerFieldActivity">
      <Carousel settings={settingDefault} asNavFor={nav as Slider} ref={(slider) => setNav(slider)}>
        {list?.map((item, idx) => (
          <div
            className={mapModifiers('o-heroBannerFieldActivity_slider', item.title ? 'titleHas' : 'untitled')}
            key={`slider-${idx.toString()}`}
          >
            <Link href={item?.link || ''} target={item?.target}>
              <div className="o-heroBannerFieldActivity_thumbnail">
                <Image
                  alt={`slider-${idx.toString()}`}
                  srcMobile={item.imageMobile}
                  srcTablet={item.imageTablet}
                  src={item.imageDesktop}
                  ratio="1366x640"
                  size="cover"
                />
              </div>
              {item.title
                && (
                  <div className="o-heroBannerFieldActivity_content">
                    <div className="o-heroBannerFieldActivity_title">
                      <Text modifiers={['400', 'white', '24x32']} content={item?.title} />
                    </div>
                  </div>
                )}
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
HeroBannerFieldActivity.defaultProps = {
  list: undefined,
};

export default HeroBannerFieldActivity;
