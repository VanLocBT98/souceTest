/* eslint-disable react/require-default-props */
import React from 'react';
import { Settings } from 'react-slick';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

interface MemberCompaniesCardProps {
  logo: string;
  title: string;
  imgSrc: string;
  href?: string;
  target?: string;
}

const MemberCompaniesCard: React.FC<MemberCompaniesCardProps> = ({
  logo,
  title,
  imgSrc,
  href,
  target,
}) => (
  <Link href={href} target={target}>
    <div className="t-introducingMemberCompanies_card">
      <div className="t-introducingMemberCompanies_card-logo">
        <Image
          src={logo}
          alt="member_companies_logo"
          ratio="logo"
          size="contain"
        />
      </div>
      <div className="t-introducingMemberCompanies_card-title">
        <Heading
          modifiers={['20x30', '400', 'raisinBlack', 'center']}
          content={title}
        />
      </div>
      <div className="t-introducingMemberCompanies_card-thumbnail">
        <Image
          src={imgSrc || ''}
          alt="member_companies_thumbnail"
          ratio="233x146"
        />
      </div>
    </div>
  </Link>
);

interface IntroducingMemberCompaniesProps {
  title: string;
  desc: string;
  data: MemberCompaniesCardProps[];
}

const setting: Settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  prevArrow: <PrevArrow
    customArrow="castletonArrow"
    typeArrow="memberCompanies"
  />,
  nextArrow: <NextArrow
    customArrow="castletonArrow"
    typeArrow="memberCompanies"
  />,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const IntroducingMemberCompanies: React.FC<IntroducingMemberCompaniesProps> = ({
  title,
  desc,
  data,
}) => (
  <div className="t-introducingMemberCompanies">
    <Container>
      <div className="t-introducingMemberCompanies_title">
        <Heading
          modifiers={['32x48', '700', 'raisinBlack', 'center']}
          content={title}
        />
      </div>
      <div className="t-introducingMemberCompanies_desc">
        <Text type="div" modifiers={['16x24', '400', 'center', 'davysGrey']} content={desc} />
      </div>
      <div className="t-introducingMemberCompanies_list">
        <Carousel settings={setting}>
          {data?.map((item, index) => (
            <div
              className="t-introducingMemberCompanies_item"
              key={`_introducingMemberCompaniesList_${index.toString()}`}
            >
              <MemberCompaniesCard
                {...item}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  </div>
);

IntroducingMemberCompanies.defaultProps = {
};

MemberCompaniesCard.defaultProps = {
  href: undefined,
  target: undefined,
};

export default IntroducingMemberCompanies;
