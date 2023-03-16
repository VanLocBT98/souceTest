import React from 'react';

import { newsDetailData } from 'assets/dataDummy/newsDetailData';
import NewsDetail from 'components/templates/NewsDetail';
import useScript from 'hooks/useScript';

// export interface PageDataTypes {
//   breadcrumbs: BreadcrumbsData[],
//   detail: NewsType,
//   listRelated: NewsType[],
//   seoData?: SEOData,
//   ogData?: OpenGraph;
// }

// interface NewsDetailContainerProps {
//   pageData?: PageDataTypes,
// }

const NewsDetailContainer: React.FC = () => {
  // const navigate = useNavigate();
  // const { i18n } = useTranslation();
  // const staticSlug = useAppSelector((state) => state.system.staticPages);

  // const handleTagClick = (tag: string) => {
  //   navigate(`${getLangURL(i18n.language)}/${getSlugByTemplateCode
  // ('SEARCH_RESULTS', staticSlug)}?keyword=${tag}`);
  // };

  useScript('https://sp.zalo.me/plugins/sdk.js');

  return (
    <div className="p-newsDetail_content">
      {/* <HelmetContainer
        seoData={pageData?.seoData}
        ogData={pageData?.ogData}
      /> */}
      <NewsDetail
        // newsDetail={pageData?.detail}
        // relatedNews={pageData?.listRelated}
        // handleTagClick={handleTagClick}
        newsDetail={newsDetailData.newsDetail}
        relatedNews={newsDetailData.relatedNews}
      />
    </div>
  );
};

export default NewsDetailContainer;
