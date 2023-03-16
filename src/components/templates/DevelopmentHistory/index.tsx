import React, { useState } from 'react';
import Slider from 'react-slick';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';
import mapModifiers from 'utils/functions';

export type DevelopmentHistoryTypes = {
  year: string;
  description?: string;
  image?: string;
};

interface DevelopmentHistoryProps {
  title: string;
  descMain?: string;
  developmentHistoryList: DevelopmentHistoryTypes[];
}

const DevelopmentHistory: React.FC<DevelopmentHistoryProps> = ({
  title,
  descMain,
  developmentHistoryList,
}) => {
  const [nav1, setNav1] = useState<Slider | null>();
  const [nav2, setNav2] = useState<Slider | null>();
  const [indexActive, setIndexActive] = useState<number>(0);

  const timelineSettings = {
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 8,
    accessibility: false,
    infinite: false,
    focusOnSelect: developmentHistoryList.length > 1,
    draggable: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const contentSettings = {
    infinite: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    prevArrow: <PrevArrow customArrow="defaultArrow" typeArrow="default" />,
    nextArrow: <NextArrow customArrow="defaultArrow" typeArrow="default" />,
    afterChange: (current: number) => {
      setIndexActive(current);
    },
  };

  return (
    <div className="t-developmentHistory">
      <Container>
        <Heading
          modifiers={['32x48', '700', 'arsenic', 'center']}
          content={title}
        />
        <div className="t-developmentHistory_descMain">
          <Text
            type="div"
            modifiers={['davysGrey', '400', 'center', '16x24']}
            content={descMain}
          />
        </div>
        <div className="t-developmentHistory_wrapper">
          <div className="t-developmentHistory_timeline">
            <Carousel
              asNavFor={nav2 as Slider}
              ref={(slider) => setNav1(slider)}
              settings={timelineSettings}
            >
              {
                developmentHistoryList.length
                && developmentHistoryList.map((item, index) => (
                  <div
                    className={
                      mapModifiers(
                        't-developmentHistory_timeline_item',
                        indexActive >= index && 'active',

                        index === 0 && 'first'
                      )
                    }
                    key={`timeline-${index.toString()}`}
                    onClick={() => setIndexActive(index)}
                  >
                    <div className="t-developmentHistory_timeline_content">
                      <Text
                        modifiers={['16x24', '400', 'center', 'black45']}
                        content={item.year}
                      />
                    </div>
                    <div className="t-developmentHistory_timeline_point">
                      <div />
                    </div>
                  </div>
                ))
              }
            </Carousel>
          </div>
          <div className="t-developmentHistory_content">
            <Carousel
              settings={contentSettings}
              asNavFor={nav1 as Slider}
              ref={(slider) => setNav2(slider)}
            >
              {
                developmentHistoryList.length
                && developmentHistoryList.map((val, idx) => (
                  <div
                    className="t-developmentHistory_content_wrapper"
                    key={`content-${idx.toString()}`}
                  >
                    <div className="t-developmentHistory_content_left">
                      <div className="t-developmentHistory_content_title">
                        <Text
                          modifiers={['24x32', '600', 'mayGreen']}
                          content={val.year}
                        />
                      </div>
                      <div className="t-developmentHistory_content_desc">
                        <Text
                          modifiers={['16x24', '400', 'arsenic']}
                          content={val.description}
                        />
                      </div>
                    </div>
                    <div className="t-developmentHistory_content_right">
                      <Image
                        src={val.image || ''}
                        ratio="225x133"
                        alt="DevelopmentHistory-Thumbnail"
                      />
                    </div>
                  </div>
                ))
              }
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

DevelopmentHistory.defaultProps = {
  descMain: '',
};

export default DevelopmentHistory;
