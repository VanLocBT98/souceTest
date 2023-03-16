import React, { useCallback, useState } from 'react';
import Slider from 'react-slick';

import Heading from 'components/atoms/Heading';
import Link from 'components/atoms/Link';
import Carousel from 'components/organisms/Carousel';
import useDeviceQueries from 'hooks/useDeviceQueries';
import mapModifiers from 'utils/functions';

export interface HeroBannersData {
  data: {
    imageDesktop: string;
    imageMobile?: string;
    imageTablet?: string;
    link?: string;
    title?: string;
    desc?: string;
    subTitle?: string;
    imgSrc?: string;
    target?: string;
  };
}

interface HeroBannerProps {
  list?: HeroBannersData[];
  noScrollContent?: boolean;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ list, noScrollContent }) => {
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
  const { isMobile, isTablet } = useDeviceQueries();
  const sourceImage = useCallback((
    imgSrc: string,
    srcTablet?: string,
    srcMobile?: string,
  ) => {
    if (isMobile) {
      return srcMobile || imgSrc;
    }
    if (isTablet) {
      return srcTablet || imgSrc;
    }
    return imgSrc;
  }, [isMobile, isTablet]);
  return (
    <div className="o-heroBanner">
      <Carousel settings={settingDefault} asNavFor={nav as Slider} ref={(slider) => setNav(slider)}>
        {list?.map((item, idx) => (
          <div
            className="o-heroBanner_slider"
            key={`slider-${idx.toString()}`}
          >
            <Link href={item.data.link || '/'} target={item.data.target}>
              <img
                src={sourceImage(
                  item.data.imageDesktop,
                  item.data.imageTablet,
                  item.data.imageMobile,
                )}
                className="o-heroBanner_slider-img"
                alt={item.data.title || `heroBanner${idx}`}
              />
              {item.data.title && (
                <div className="o-heroBanner_content">
                  <div className="o-heroBanner_scrollbox">
                    <div className={mapModifiers(
                      'o-heroBanner_contentGroup',
                      noScrollContent && 'noScroll'
                    )}
                    >
                      <div className="o-heroBanner_content-title">
                        <Heading type="h2" modifiers={['700', 'white', noScrollContent ? '32x48' : '38x52']} content={item.data.title} />
                      </div>
                    </div>
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
HeroBanner.defaultProps = {
  list: undefined,
  noScrollContent: undefined,
};

export default HeroBanner;
