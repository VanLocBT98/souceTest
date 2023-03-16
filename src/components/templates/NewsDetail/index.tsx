import React from 'react';
import { FacebookShareButton } from 'react-share';

import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Tag from 'components/atoms/Tag';
import Text from 'components/atoms/Text';
import RelatedNews from 'components/molecules/RelatedNews';
import Container, {
  CustomCol,
  CustomRow,
} from 'components/organisms/Container';

export interface NewsType {
  id: string;
  title: string;
  content: string;
  showDate: string;
  imageNews: string;
  href: string;
  newsTypes: Array<string>;
}
interface NewsDetailProps {
  newsDetail?: NewsType;
  relatedNews?: Array<NewsType>;
  handleTagClick?: (value: string) => void;
}

const NewsDetail: React.FC<NewsDetailProps> = ({
  newsDetail,
  relatedNews,
  handleTagClick,
}) => (
  <div className="t-newsdetail">
    <Container>
      <div className="t-newsdetail_createdate">
        <Text modifiers={['16x24', '400', 'davysGrey']}>
          {newsDetail?.showDate}
        </Text>
      </div>
      <CustomRow>
        <CustomCol
          sm="12"
          md="12"
          lg={relatedNews && relatedNews?.length > 0 ? '8' : '12'}
        >
          <div className="t-newsdetail_title">
            <Heading type="h1" modifiers={['24x32', '600', 'raisinBlack']}>
              {newsDetail?.title}
            </Heading>
          </div>
          <div className="t-newsdetail_social">
            <div className="t-newsdetail_social_text">
              <Text modifiers={['18x28', 'raisinBlack']}>
                {/* {t("general.share")}: */}
                Chia sẻ:
              </Text>
            </div>
            <div className="t-newsdetail_social_itemGroup">
              <div className="t-newsdetail_social_item">
                <FacebookShareButton url={window.location.href}>
                  <Icon iconName="facebookOrigin" size="24x24" />
                </FacebookShareButton>
              </div>
              <div className="t-newsdetail_social_item">
                <div
                  className="zalo-share-button"
                  data-oaid="579745863508352884"
                  data-layout="icon-text"
                  data-customize="true"
                  data-href={window.location.href}
                >
                  <Icon iconName="zaloOrigin" size="24x24" />
                </div>
              </div>
            </div>
          </div>
          <div className="t-newsdetail_content">
            <Text
              type="div"
              modifiers={['16x24', 'davysGrey']}
              content={newsDetail?.content}
            />
            {newsDetail && newsDetail?.newsTypes.length > 0 && (
              <div className="t-newsdetail_typesnews">
                <Text modifiers={['16x24', 'raisinBlack']}>
                  {/* {t("general.topic")}: */}
                  Chủ đề:
                </Text>
                <div className="t-newsdetail_typesnews-list">
                  {newsDetail.newsTypes.map((item, idx) => (
                    <Tag
                      key={`type-${idx.toString()}`}
                      onClickTag={handleTagClick}
                      text={item}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </CustomCol>
        {relatedNews && relatedNews.length > 0 && (
          <CustomCol sm="12" md="12" lg="4">
            <Heading type="h3" modifiers={['24x32', '600', 'raisinBlack']}>
              {/* {t("news.related_news")} */}
              Các bài viết liên quan
            </Heading>
            <div className="t-newsdetail_relatednews">
              {relatedNews.map((item) => (
                <RelatedNews
                  key={`news-${item.id}`}
                  imageSrc={item.imageNews}
                  title={item.title}
                  createDate={item.showDate}
                  href={item.href}
                />
              ))}
            </div>
          </CustomCol>
        )}
      </CustomRow>
    </Container>
  </div>
);
NewsDetail.defaultProps = {};

export default NewsDetail;
