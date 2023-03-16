import React from 'react';

import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

interface RelatedNewsProps {
  imageSrc: string;
  title: string;
  createDate: string;
  href: string;
}

const RelatedNews: React.FC<RelatedNewsProps> = ({
  imageSrc, title, createDate, href,
}) => (
  <div className="m-relatednews">
    <Link href={href}>
      <div className="m-relatednews_wrap">
        <div className="m-relatednews_image">
          <Image
            ratio="66x37"
            src={imageSrc}
            alt={title}
          />
        </div>
        <div className="m-relatednews_content">
          <Text
            modifiers={['14x22', '400', 'arsenic']}
          >
            {title}
          </Text>
          <Text
            modifiers={['14x22', '400', 'davysGrey']}
          >
            {createDate}

          </Text>
        </div>
      </div>
    </Link>
  </div>
);

RelatedNews.defaultProps = {
};

export default RelatedNews;
