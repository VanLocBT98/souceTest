import React from 'react';
import LazyLoad from 'react-lazyload';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

export interface BusinessUnitsItemProps {
  logo: string;
  title: string;
  href?: string;
}
export interface IntroducingMemberCompaniesListProps {
  title?: string;
  desc?: string;
  bgImageSrc?: string;
  list?: BusinessUnitsItemProps[];
}

const IntroducingMemberCompaniesList: React.FC<IntroducingMemberCompaniesListProps> = ({
  bgImageSrc,
  title,
  desc,
  list,
}) => (
  <div className="t-introducingMemberCompaniesList" style={{ backgroundImage: `url(${bgImageSrc})` }}>
    <div className="t-introducingMemberCompaniesList_wrapper">
      <Container>
        <Heading
          type="h2"
          content={title}
          modifiers={['center', 'white', '32x48']}
        />
      </Container>
      <div className="t-introducingMemberCompaniesList_desc">
        <Text modifiers={['whiteSmoke', 'center', '16x24']} content={desc} />
      </div>
      <Container>
        <LazyLoad height={300} once>
          <div className="t-introducingMemberCompaniesList_list">
            {list?.map((item, index) => (
              <div className="t-introducingMemberCompaniesList_list-item" key={`intro-${index.toString()}`}>
                <Link href={item.href}>
                  <div className="t-introducingMemberCompaniesList_list-img">
                    <Image src={item.logo} alt={item.title} size="cover" ratio="82x54" />
                  </div>
                  {/* <Text modifiers={['white', 'center', '20x30']} content={item.title} /> */}
                </Link>
              </div>
            ))}
          </div>
        </LazyLoad>
      </Container>
    </div>
  </div>
);

IntroducingMemberCompaniesList.defaultProps = {

};

export default IntroducingMemberCompaniesList;
