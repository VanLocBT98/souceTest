import React, { useState } from 'react';
import Slider from 'react-slick';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';
import useWindowResize from 'hooks/useWindowResize';
import mapModifiers from 'utils/functions';

export interface AwardListData {
  logo: string;
  imgSrc: string;
  link?: string;
  desc?: string;
  target?: string;
}

interface AwardListProps {
  title: string;
  list?: AwardListData[];
}

const AwardList: React.FC<AwardListProps> = ({ list, title }) => {
  const [isShowArrows, setShowArrows] = useState(true);
  const [nav, setNav] = useState<Slider | null>();
  const settingDefault = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useWindowResize(() => {
    if (
      list
      && ((window.innerWidth >= 991 && list?.length > 4)
        || (window.innerWidth >= 767
          && window.innerWidth < 991
          && list.length > 3)
        || (window.innerWidth < 767 && list.length > 2))
    ) {
      setShowArrows(true);
    } else {
      setShowArrows(false);
    }
  });

  return (
    <div className="t-awardList">
      <Container
        modifiers={['fullScreen']}
      >
        <Heading
          type="h2"
          modifiers={['arsenic', '32x48', 'center', '700']}
          content={title}
        />
        <div className="t-awardList_btnGroup">
          {isShowArrows && (
            <>
              <PrevArrow
                extendClassName="t-awardList_btnGroup-item"
                customArrow="defaultArrow"
                onClick={() => nav?.slickPrev()}
              />
              <NextArrow
                extendClassName="t-awardList_btnGroup-item"
                customArrow="defaultArrow"
                onClick={() => nav?.slickNext()}
              />
            </>
          )}
        </div>
        <div className="t-awardList_list">
          <div className="t-awardList_list-line" />
          <Carousel
            settings={settingDefault}
            asNavFor={nav as Slider}
            ref={(slider) => setNav(slider)}
          >
            {list?.map((item, idx) => (
              <div
                key={`t-awardList_item-${idx.toString()}`}
                className={mapModifiers(
                  't-awardList_item',
                  idx % 2 !== 0 && 'even',
                )}
              >
                <div className="t-awardList_item-img">
                  <img src={item.imgSrc} alt={`award-${idx.toString()}`} />
                </div>
                <div className="t-awardList_item-dot" />
                <div className="t-awardList_item-logo">
                  <img src={item.logo} alt={`logo-${idx.toString()}`} />
                  <div className="t-awardList_item-desc">
                    <Text
                      modifiers={['16x24', '400', 'center', 'arsenic']}
                      content={item.desc}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default AwardList;
