import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Carousel, { PrevArrow, NextArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

interface PartnerListProps {
  title: string;
  desc: string;
  dataList: Array<string>;
}

const PartnerList: React.FC<PartnerListProps> = ({
  title,
  desc,
  dataList,
}) => {
  const settingDefault = {
    dots: true,
    infinite: true,
    slidesToShow: dataList && dataList?.length > 3 ? 4 : dataList?.length,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplayTimeout: 1000,
    prevArrow: <PrevArrow customArrow="defaultArrow" typeArrow="default" />,
    nextArrow: <NextArrow customArrow="defaultArrow" typeArrow="default" />,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="t-partnerList">
      <Container>
        <Heading type="h2" modifiers={['arsenic', 'center', '700', '32x48']} content={title} />
        <div className="t-partnerList_desc">
          <Text type="div" modifiers={['davysGrey', 'center', '400', '16x24']} content={desc} />
        </div>
        <div className="t-partnerList_list">
          <Carousel settings={settingDefault}>
            {dataList?.map((item, idx) => (
              <div className="t-partnerList_img" key={`partner-${idx.toString()}`}>
                <Image
                  src={item}
                  alt={title}
                  size="cover"
                  ratio="257x170"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};
PartnerList.defaultProps = {};

export default PartnerList;
