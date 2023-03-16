import React, { useRef, useState, useEffect } from 'react';

import IntroduceSpecificBUInformation, { IntroduceSpecificBUInformationProps } from '../IntroduceSpecificBuInformation';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import { checkExternalUrl } from 'utils/functions';

export interface BranchItemProps {
  imgSrc: string;
  imgAlt?: string;
  title: string;
  href?: string;
  target?: string;
  handleClick?: () => void;
  // eslint-disable-next-line react/no-unused-prop-types
  content?: {
    brand: {
      items: IntroduceSpecificBUInformationProps;
    };
  };
  isTooltip?: boolean;
}

const BranchListTitle: React.FC<
  Pick<BranchItemProps, 'href' | 'target' | 'title'>
> = ({ href, target, title }) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {href ? (
      <Link href={href} target={target}>
        {title}
      </Link>
    ) : (
      title
    )}
  </>
);

export interface BranchListProps {
  title: string;
  description?: string;
  branchListInfo?: BranchItemProps[];
  classTabsActive?: string;
  hasSectionInfoBus?: boolean;
  isTooltip?: boolean;
}

const BranchItem: React.FC<BranchItemProps> = ({
  imgSrc,
  imgAlt,
  title,
  href,
  target,
  handleClick,
  isTooltip,
}) => (
  <div className="t-branchList_item">
    <div
      className={`t-branchList_inner ${href ? undefined : 'contentshow'}`}
      onClick={href ? undefined : handleClick}
    >
      {href ? (
        <>
          <div className="t-branchList_thumbnail">
            <Link
              href={href}
              target={target}
              useExternal={checkExternalUrl(href)}
            >
              <Image alt={imgAlt || ''} src={imgSrc} ratio="255x169" />
            </Link>
          </div>
          <div className="t-branchList_title">
            <Text modifiers={['400', 'arsenic', '16x24', 'center']}>
              <BranchListTitle title={title} href={href} target={target} />
            </Text>
          </div>
        </>
      ) : (
        <>
          <div className="t-branchList_thumbnail">
            <Image alt={imgAlt || ''} src={imgSrc} ratio="255x169" />
          </div>
          <div className="t-branchList_title">
            <Text modifiers={['400', 'arsenic', '16x24', 'center']}>
              {title}
            </Text>
          </div>
        </>
      )}
      {isTooltip && (
        <div className="t-branchList_inner_tooltip">
          <Text modifiers={['400', 'white', '16x24', 'center']}>
            {/* {t('general.see_more_btn')} */}
            Xem thêm
          </Text>
        </div>
      )}
    </div>
  </div>
);

const BranchList: React.FC<BranchListProps> = ({
  title,
  description,
  branchListInfo,
  hasSectionInfoBus,
  isTooltip,
}) => {
  const [locationActive, setLocationActive] = useState<BranchItemProps>();
  const introduceSpecificBUInformationRef = useRef<HTMLDivElement>(null);
  const navigationToIntroduceSpecificBUInformation = () => {
    if (
      introduceSpecificBUInformationRef
      && introduceSpecificBUInformationRef.current
    ) {
      window.scrollTo({
        behavior: 'smooth',
        top: introduceSpecificBUInformationRef.current.offsetTop - 120,
      });
    }
  };

  useEffect(() => {
    if (branchListInfo?.length) {
      setLocationActive(branchListInfo[0]);
    }
  }, [branchListInfo]);

  return (
    <div className="t-branchList">
      <Container>
        <Heading modifiers={['32x48', '700', 'arsenic', 'center']}>
          {title}
        </Heading>
        {description && (
          <div className="t-branchList_description">
            <Text modifiers={['400', 'davysGrey', 'center', '16x24']} content={description} />
          </div>
        )}
        <div
          className="t-branchList_content"
          onClick={navigationToIntroduceSpecificBUInformation}
        >
          {branchListInfo?.map((item, index) => (
            <BranchItem
              key={`branchListInfo-item-${index.toString()}`}
              {...item}
              handleClick={() => setLocationActive(item)}
              isTooltip={isTooltip}
            />
          ))}
        </div>
      </Container>
      {hasSectionInfoBus && locationActive && (
        <div
          className="t-branchList_info"
          ref={introduceSpecificBUInformationRef}
        >
          {locationActive && (
            <IntroduceSpecificBUInformation
              urlButton={locationActive.content?.brand.items.urlButton}
              title={locationActive.content?.brand.items.title || ''}
              description={
                locationActive.content?.brand.items.description || ''
              }
              phoneNumber={
                locationActive.content?.brand.items.phoneNumber || ''
              }
              email={locationActive.content?.brand.items.email || ''}
              images={
                locationActive.content?.brand?.items?.images?.map((e) => e)
                || []
              }
            />
          )}
        </div>
      )}
    </div>
  );
};

export default BranchList;
