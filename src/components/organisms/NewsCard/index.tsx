import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

export interface NewsCardProps {
  imgSrc?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  date?: string;
  title: string;
  desc: string;
  href?: string;
  target?: string;
  idFileDownload?: number;
  handleDownloadFile?: (id: number) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({
  imgSrc,
  title,
  desc,
  href,
  target,
  idFileDownload,
  handleDownloadFile,
}) => (
  <div className="o-newsCard">
    {href && (
      <>
        {imgSrc && (
          <div className="o-newsCard-img">
            <Link href={href} target={target}>
              <Image
                src={imgSrc}
                alt={title}
                ratio="354x199"
              />
            </Link>
          </div>
        )}
        <div className="o-newsCard_content">
          <div className="o-newsCard_content_title">
            <Link href={href} target={target}>
              <Heading modifiers={['arsenic', '500', '20x30']} content={title} />
            </Link>
          </div>
          <div className="o-newsCard_content_desc">
            <Text modifiers={['arsenic', '400']} content={desc} />
          </div>
        </div>
      </>
    )}
    {idFileDownload && (
      <div
        className="o-newsCard_content o-newsCard_fileDown"
        onClick={() => handleDownloadFile && handleDownloadFile(idFileDownload)}
      >
        <div className="o-newsCard_content_title">
          <Heading modifiers={['arsenic', '500', '20x30']} content={title} />
        </div>
        <div className="o-newsCard_content_desc">
          <Text modifiers={['arsenic', '400']} content={desc} />
        </div>
      </div>
    )}
  </div>
);

export default NewsCard;
