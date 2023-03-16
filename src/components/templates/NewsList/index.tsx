import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import mapModifiers from 'utils/functions';

export interface NewsListCardProps {
  imgSrc: string;
  ratio?: Ratio;
  alt?: string;
  title: string;
  isVertical?: boolean;
  href: string;
}

export const NewsListCard: React.FC<NewsListCardProps> = ({
  imgSrc,
  ratio,
  alt,
  title,
  isVertical,
  href,
}) => (
  <div className={mapModifiers('t-newsListCard', isVertical && 'isVertical')}>
    <Link href={href}>
      <div className="t-newsListCard_wrapper">
        <div className="t-newsListCard_image">
          <Image
            src={imgSrc}
            ratio={ratio || '112x63'}
            alt={alt || 'NewsListCard'}
          />
        </div>
        <div className="t-newsListCard_title">
          <Text
            modifiers={
              isVertical
                ? ['20x30', 'davysGrey5a', '700']
                : ['davysGrey5a', '400']
            }
            content={title}
          />
        </div>
      </div>
    </Link>
  </div>
);

export interface NewsListProps {
  titleMain?: string;
  dataNewsList: NewsListCardProps[];
}

const NewsList: React.FC<NewsListProps> = ({ titleMain, dataNewsList }) => (
  <div className="t-newsList">
    <Container>
      <Heading
        modifiers={['32x48', 'raisinBlack', '700', 'center']}
        content={titleMain}
      />
      <div className="t-newsList_content">
        {dataNewsList.length > 0 && (
          <>
            <div className="t-newsList_content_left">
              <NewsListCard
                {...dataNewsList[0]}
                ratio="644x362"
                isVertical
              />
            </div>
            <div className="t-newsList_content_right">
              {dataNewsList.slice(1).map((item, index) => (
                <div
                  className="t-newsList_content_item"
                  key={`newsList-${index.toString()}`}
                >
                  <NewsListCard
                    {...item}
                    ratio="112x63"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </Container>
  </div>
);

export default NewsList;
