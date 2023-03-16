/* eslint-disable camelcase */
import { yupResolver } from '@hookform/resolvers/yup';
// import HelmetContainer from 'container/helmet';
import React, {
  // useEffect,
  useState,
  // useMemo,
} from 'react';
import { useForm } from 'react-hook-form';
// import { useTranslation } from 'react-i18next';
// import { useQuery } from 'react-query';
import {
  useSearchParams,
} from 'react-router-dom';

// import {
//   getInvestmentSectorsService,
//   getBusinessUnitsService,
// } from 'services/investmentDetail';
// import { postPdfByIdService, getPdfsService } from 'services/investmentRelations';
// import { PraramsPdfDownload } from 'services/investmentRelations/types';
// import { getRecruitmentListService } from 'services/recruitment';
// import { getNewsService, getCommunitySupportsService } from 'services/search';
import { imgLink } from 'assets/dataDummy/media';
import { OptionType } from 'components/molecules/PullDown';
import { NewsCardProps } from 'components/organisms/NewsCard';
import SearchResult, { SearchForm } from 'components/templates/SearchResult';
// import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import {
  // getBlockData,
  // getImageURL,
  // downloadFunc,
  // formatDateDDMMYYYY,
} from 'utils/functions';
// import { getPrefixURLCode } from 'utils/languages';
import schemaSearchForm from 'utils/schemas';

// const LIMIT = 6;
// const PAGE = 1;

interface IntroDataBlock {
  title: string;
  placeholderSearch: string;
}

export type SearchBlock =
  | IntroDataBlock;

const optionServices: OptionType[] = [
  {
    id: '1',
    // label: t('search.latest_results'),
    label: 'Kết quả mới nhất',
    value: 'latest',
  },
  {
    id: '2',
    // label: t('search.oldest_result'),
    label: 'Kết quả cũ nhất',
    value: 'oldest',
  },
];

const tabTitleData = [
  {
    id: '0',
    slug: 'news_events',
    // label: t('pages.news_events'),
    label: 'Tin tức sự kiện',
  },
  {
    id: '1',
    slug: 'news',
    // label: t('pages.news'),
    label: 'Hỗ trợ cộng đồng',

  },
  {
    id: '2',
    slug: 'investment-sectors',
    // label: t('pages.investment_sectors'),
    label: 'Lĩnh vực đầu tư',
  },
  {
    id: '3',
    slug: 'member-company',
    // label: t('pages.member_company'),
    label: 'Công ty thành viên',
  },
  {
    id: '4',
    slug: 'investment-relations',
    // label: t('pages.investment_relations'),
    label: 'Quan hệ đầu tư'
  },
  {
    id: '5',
    slug: 'recruitment-news',
    label: 'Tin tức tuyển dụng',
  },
];

const newsListSearchResults = [
  {
    imgSrc: imgLink,
    title: 'Bến du thuyền - yếu tố vàng gia tăng giá trị bất động sản',
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    href: '/'
  },
  {
    imgSrc: imgLink,
    title: 'Nova Service cùng với các đối tác hiện thực hóa mục tiêu...',
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    href: '/'
  },
  {
    imgSrc: imgLink,
    title: 'Nova Service cùng với các đối tác hiện thực hóa mục tiêu...',
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    href: '/'
  },
  {
    imgSrc: imgLink,
    title: 'Bến du thuyền - yếu tố vàng gia tăng giá trị bất động sản',
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    href: '/'
  },
];

const SearchResultsContainer: React.FC = () => {
  // const { t } = useTranslation();
  // const language = useAppSelector((state) => state.system.language);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeIndex, setIndexActive] = useState(0);
  const [searchText, setSearchText] = useState(searchParams.get('keyword') || '');
  const [listData] = useState<NewsCardProps[]>(newsListSearchResults);
  const [selectedValue, setSelectedValue] = useState<OptionType>();
  // const blockIntro = getBlockData('introduction', blocks) as IntroDataBlock;

  // const { data: fetchNewsListData, isLoading: loadingNewsList } = useQuery(
  //   // ['GetNewsListHighlight', page, searchText, activeIndex, selectedValue, language],
  //   ['GetNewsListHighlight', page, searchText, activeIndex, selectedValue],
  //   () => getNewsService({
  //     sort_published_at: selectedValue?.value === 'latest' ? 'true' : 'false',
  //     keyword: searchText,
  //     limit: LIMIT,
  //     page,
  //   }),
  //   {
  //     ...DEFAULT_QUERY_OPTION,
  //     enabled: activeIndex === 0,
  //   },
  // );

  // const dataNewsList = useMemo(() => {
  //   let dataList: NewsCardProps[] = [];
  //   let totalPage = 1;
  //   if (fetchNewsListData) {
  //     dataList = fetchNewsListData.data.map((item) => ({
  //       imgSrc: getImageURL(item.thumbnail),
  //       title: item.title,
  //       desc: item.title,
  //       href: getPrefixURLCode(language, 'NEWS_DETAILS', item.slug),
  //     }));
  //     totalPage = fetchNewsListData.meta.totalPages;
  //   }
  //   return { dataList, totalPage };
  // }, [fetchNewsListData, language]);

  // const { data: fetchCommunitySupportsListData, isLoading: loadingCommunitySupports } = useQuery(
  //   ['GetCommunitySupportsHighlight', page, searchText, activeIndex, selectedValue, language],
  //   () => getCommunitySupportsService({
  //     sort_published_at: selectedValue?.value === 'latest' ? 'true' : 'false',
  //     keyword: searchText,
  //     limit: LIMIT,
  //     page,
  //   }),
  //   {
  //     ...DEFAULT_QUERY_OPTION,
  //     enabled: activeIndex === 1,
  //   },
  // );

  // const dataCommunitySupports = useMemo(() => {
  //   let dataList: NewsCardProps[] = [];
  //   let totalPage = 1;
  //   if (fetchCommunitySupportsListData) {
  //     dataList = fetchCommunitySupportsListData.data.map((item) => ({
  //       imgSrc: getImageURL(item.thumbnail),
  //       title: item.title,
  //       desc: item.title,
  //       href: getPrefixURLCode(language, 'COMMUNITY_SUPPORT_DETAILS', item.slug),
  //     }));
  //     totalPage = fetchCommunitySupportsListData.meta.totalPages;
  //   }
  //   return { dataList, totalPage };
  // }, [fetchCommunitySupportsListData, language]);

  // const { data: fetchInvestmentSectorsListData, isLoading: loadingInvestmentSectors } = useQuery(
  //   ['GetInvestmentSectorsHighlight', page, searchText, activeIndex, selectedValue, language],
  //   () => getInvestmentSectorsService({
  //     sort: selectedValue?.value,
  //     keyword: searchText,
  //     limit: LIMIT,
  //     page,
  //   }),
  //   {
  //     ...DEFAULT_QUERY_OPTION,
  //     enabled: activeIndex === 2,
  //   },
  // );

  // const dataInvestmentSectors = useMemo(() => {
  //   let dataList: NewsCardProps[] = [];
  //   let totalPage = 1;
  //   if (fetchInvestmentSectorsListData) {
  //     dataList = fetchInvestmentSectorsListData.data.map((item) => ({
  //       imgSrc: getImageURL(item.image),
  //       title: item.title,
  //       desc: item.description,
  //       href: getPrefixURLCode(language, 'INVESTMENT_SECTORS', item.slug),
  //     }));
  //     totalPage = fetchInvestmentSectorsListData.meta.totalPages;
  //   }
  //   return { dataList, totalPage };
  // }, [language, fetchInvestmentSectorsListData]);

  // const { data: fetchBusinessUnitsListData, isLoading: loadingBusinessUnits } = useQuery(
  //   ['GetBusinessUnitsHighlight', page, searchText, activeIndex, selectedValue, language],
  //   () => getBusinessUnitsService({
  //     sort: selectedValue?.value,
  //     keyword: searchText,
  //     limit: LIMIT,
  //     page,
  //   }),
  //   {
  //     ...DEFAULT_QUERY_OPTION,
  //     enabled: activeIndex === 3,
  //   },
  // );

  // const dataBusinessUnits = useMemo(() => {
  //   let dataList: NewsCardProps[] = [];
  //   let totalPage = 1;
  //   if (fetchBusinessUnitsListData) {
  //     dataList = fetchBusinessUnitsListData.data.map((item) => ({
  //       imgSrc: getImageURL(item.image),
  //       title: item.title,
  //       desc: item.description,
  //       href: getPrefixURLCode(language, 'BUS_DETAILS', item.slug),
  //     }));
  //     totalPage = fetchBusinessUnitsListData.meta.totalPages;
  //   }
  //   return { dataList, totalPage };
  // }, [language, fetchBusinessUnitsListData]);

  // const { data: fetchPdfsListData, isLoading: loadingPdfsList } = useQuery(
  //   ['GetPdfsListHighlight', page, searchText, activeIndex, selectedValue, language],
  //   () => getPdfsService({
  //     sort: selectedValue?.value,
  //     keyword: searchText,
  //     limit: LIMIT,
  //     page,
  //   }),
  //   {
  //     ...DEFAULT_QUERY_OPTION,
  //     enabled: activeIndex === 4,
  //   },
  // );

  // const dataPdfsList = useMemo(() => {
  //   let dataList: NewsCardProps[] = [];
  //   let totalPage = 1;
  //   if (fetchPdfsListData) {
  //     dataList = fetchPdfsListData.data.map((item) => ({
  //       title: formatDateDDMMYYYY(item.publishedAt),
  //       desc: item.title,
  //       idFileDownload: item.id,
  //     }));
  //     totalPage = fetchPdfsListData.meta.totalPages;
  //   }
  //   return { dataList, totalPage };
  // }, [fetchPdfsListData]);

  // const { data: fetchRecruitmentNewsListData, isLoading: loadingRecruitmentNews } = useQuery(
  //   ['GetRecruitmentNewsHighlight', page, searchText, activeIndex, selectedValue, language],
  //   () => getRecruitmentListService({
  //     sort: selectedValue?.value,
  //     keyword: searchText,
  //     limit: LIMIT,
  //     page,
  //   }),
  //   {
  //     ...DEFAULT_QUERY_OPTION,
  //     enabled: activeIndex === 5,
  //   },
  // );

  // const dataRecruitmentNews = useMemo(() => {
  //   let dataList: NewsCardProps[] = [];
  //   let totalPage = 1;
  //   if (fetchRecruitmentNewsListData) {
  //     dataList = fetchRecruitmentNewsListData.data.map((item) => ({
  //       title: item.position.name,
  //       desc: `${item.city} - exp: ${formatDateDDMMYYYY(item.expirationDate)}`,
  //       href: getPrefixURLCode(language, 'RECRUITMENT_DETAILS', item.slug),
  //     }));
  //     totalPage = fetchRecruitmentNewsListData.meta.totalPages;
  //   }
  //   return { dataList, totalPage };
  // }, [language, fetchRecruitmentNewsListData]);

  const handleChangeTab = (id: number) => {
    setSelectedValue(undefined);
    setIndexActive(id);
  };

  // const handleDownloadFile = async (id: number) => {
  //   try {
  //     const params: PraramsPdfDownload = {
  //       id,
  //     };
  //     const res = await postPdfByIdService(params);
  //     downloadFunc(res.link);
  //   } catch (error) {
  //     // Empty
  //   }
  // };

  const method = useForm<SearchForm>({
    resolver: yupResolver(schemaSearchForm),
    mode: 'onSubmit',
    defaultValues: {
      search: searchParams.get('keyword') || '',
    },
  });

  // useEffect(() => {
  //   const keyword = searchParams.get('keyword') || '';
  //   setSearchText(keyword);
  //   method.setValue('search', keyword);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchParams, method, language]);

  // useEffect(() => {
  //   if (activeIndex === 0 && dataNewsList) {
  //     setListData(dataNewsList.dataList);
  //     setTotalPages(dataNewsList.totalPage);
  //   }
  //   if (activeIndex === 1 && dataCommunitySupports) {
  //     setListData(dataCommunitySupports.dataList);
  //     setTotalPages(dataCommunitySupports.totalPage);
  //   }
  //   if (activeIndex === 2 && dataInvestmentSectors) {
  //     setListData(dataInvestmentSectors.dataList);
  //     setTotalPages(dataInvestmentSectors.totalPage);
  //   }
  //   if (activeIndex === 3 && dataBusinessUnits) {
  //     setListData(dataBusinessUnits.dataList);
  //     setTotalPages(dataBusinessUnits.totalPage);
  //   }
  //   if (activeIndex === 4 && dataPdfsList) {
  //     setListData(dataPdfsList.dataList);
  //     setTotalPages(dataPdfsList.totalPage);
  //   }
  //   if (activeIndex === 5 && dataRecruitmentNews) {
  //     setListData(dataRecruitmentNews.dataList);
  //     setTotalPages(dataRecruitmentNews.totalPage);
  //   }
  // }, [
  //   activeIndex,
  //   dataNewsList,
  //   dataCommunitySupports,
  //   dataInvestmentSectors,
  //   dataBusinessUnits,
  //   dataPdfsList,
  //   dataRecruitmentNews,
  // ]);

  return (
    <section>
      {/* <HelmetContainer
        seoData={seoData}
        ogData={{
          ogTitle: pageData.ogTitle,
          ogDescription: pageData.ogDescription,
          ogImage: pageData.ogImage,
        }}
      /> */}

      <SearchResult
        method={method}
        submitForm={(data: SearchForm) => setSearchParams({ keyword: data.search })}
        handleChangeSearch={(e) => setSearchText(e.target.value)}
        searchText={searchText}
        filterData={tabTitleData}
        setActiveFilterIndex={handleChangeTab}
        activeFilterIndex={activeIndex}
        newsList={listData}
        title="Tìm kiếm"
        placeholderSearch="Tìm kiếm"
        optionServices={optionServices}
        isLoading={false}
        page={1}
        totalPage={10}
        handleChangeFilter={(option: OptionType) => option}
        selectedValue={selectedValue}
        handleDownloadFile={() => method}
        handleChangePage={(e: number) => e}
      />
    </section>
  );
};

export default SearchResultsContainer;
