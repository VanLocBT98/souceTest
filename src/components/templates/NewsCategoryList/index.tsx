import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Pagination from 'components/molecules/Pagination';
import Container from 'components/organisms/Container';

export interface NewsCategoryItemProps {
  imgSrc: string;
  imgAlt?: string;
  title?: string;
  description?: string;
  href?: string;
  target?: string;
  useNewsCategoryBottom?: boolean;
  onlyTitle?: boolean;
}

export interface NewsCategoryListProps {
  newsCategoryTop?: NewsCategoryItemProps[];
  newsCategoryBottom?: NewsCategoryItemProps[];
  title?: string;
  totalPage?: number;
  page?: number;
  isLoading?: boolean;
  handleChangePage?: (page: number) => void;
}

const NewsCategoryTitle: React.FC<
  Pick<NewsCategoryItemProps, 'href' | 'target' | 'title'>
> = ({ title }) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {title}
  </>
);

const NewsCategoryItem: React.FC<NewsCategoryItemProps> = ({
  imgSrc,
  imgAlt,
  title,
  href,
  target,
  description,
  useNewsCategoryBottom,
  onlyTitle,
}) => (
  <div className="t-newsCategoryList_item">
    <div
      className={`t-newsCategoryList_image ${useNewsCategoryBottom && 'isHorizontal'
        }`}
    >
      <Link href={href} target={target}>
        <Image
          alt={imgAlt || ''}
          src={imgSrc}
          ratio={useNewsCategoryBottom ? '321x180' : '547x308'}
        />
      </Link>
    </div>
    <div className="t-newsCategoryList_content">
      <Link href={href} target={target}>
        {title && !onlyTitle && (
          <div
            className={`t-newsCategoryList_title ${useNewsCategoryBottom ? 'isHorizontal' : ''
              }`}
          >
            <Heading
              type="h3"
              modifiers={[
                'davysGrey5a',
                useNewsCategoryBottom ? '600' : '700',
                useNewsCategoryBottom ? '24x32' : '20x30',
              ]}
            >
              <NewsCategoryTitle title={title} href={href} target={target} />
            </Heading>
          </div>
        )}
        {onlyTitle && (
          <div className="t-newsCategoryList_description">
            <Text
              modifiers={[
                '700',
                useNewsCategoryBottom ? 'onyx' : 'davysGrey5a',
              ]}
              content={title}
            />
          </div>
        )}
        {description && !onlyTitle && (
          <div className="t-newsCategoryList_description">
            <Text
              modifiers={[
                '400',
                useNewsCategoryBottom ? 'onyx' : 'davysGrey5a',
              ]}
              content={description}
            />
          </div>
        )}
      </Link>
    </div>
  </div>
);

const NewsCategoryList: React.FC<NewsCategoryListProps> = ({
  newsCategoryTop,
  newsCategoryBottom,
  title,
  isLoading,
  page,
  totalPage,
  handleChangePage,
}) => (
  <div className="t-newsCategoryList">
    <Container>
      <Heading modifiers={['32x48', '700', 'raisinBlack', 'center']} type="h1">
        {title}
      </Heading>
      <div className="t-newsCategoryList_top">
        {newsCategoryTop?.map((item, index) => (
          <NewsCategoryItem
            key={`newsCategoryTop-item-${index.toString()}`}
            title={item.title}
            imgAlt={item.imgAlt}
            href={item.href}
            target={item.target}
            imgSrc={item.imgSrc}
            description={item.description}
            onlyTitle={!!(index !== 0)}
          />
        ))}
      </div>
      {isLoading ? (
        <div className="t-newsCategoryList_loading">
          <Loading isShow />
        </div>
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {newsCategoryBottom && newsCategoryBottom.length > 0 && (
            <div className="t-newsCategoryList_bottom">
              {newsCategoryBottom?.map((item, idx) => (
                <NewsCategoryItem
                  useNewsCategoryBottom
                  key={`newsCategoryOther-item-${idx.toString()}`}
                  {...item}
                />
              ))}
            </div>
          )}
        </>
      )}
      {totalPage && totalPage > 1 && (
        <div className="t-newsCategoryList_pagination">
          <Pagination
            totalPage={totalPage}
            handleChangePage={
              (pageStt: number) => handleChangePage && handleChangePage(pageStt)
            }
            pageCurrent={page}
          />
        </div>
      )}
    </Container>
  </div>
);

NewsCategoryItem.defaultProps = {
  imgAlt: undefined,
  title: undefined,
  href: undefined,
  target: undefined,
  description: undefined,
  useNewsCategoryBottom: undefined,
};

export default NewsCategoryList;
