import React from 'react';

import IntroductionFieldInvestmentContainer from './IntroductionFieldInvestmentContainer';
import BranchListContainer from './branchListContainer';

import { branchListInfoData, listHeroBanner } from 'assets/dataDummy/investmentDetail';
import HeroBannerFieldActivity from 'components/organisms/HeroBannerFieldActivity';

const BusDetailsContainer: React.FC = () => (
  // const { slug } = useParams<{ slug: string }>();
  // const dispatch = useAppDispatch();
  // const language = useAppSelector((state) => state.system.language);
  // const logo = useAppSelector((state) => state.system.dataSystem?.footer?.logo);

  // const {
  //   data: busDetailData, isLoading, error,
  // } = useQuery(
  //   ['getBUsDetail', slug, language], () => getBUsDetailService(slug || ''),
  //   DEFAULT_QUERY_OPTION,
  // );

  // useEffect(() => {
  //   if (busDetailData) {
  //     dispatch(setPageTranslation({
  //       trans: busDetailData.translations,
  //       type: 'BUS_DETAILS',
  //     }));
  //   }
  // }, [dispatch, busDetailData]);

  // const bannerData = useMemo(
  //   () => busDetailData?.banner.map((item) => ({
  //     imageDesktop: getImageURL(item.data.imageDesktop),
  //     imageMobile: getImageURL(item.data.imageMobile),
  //     imageTablet: getImageURL(item.data.imageTablet),
  //     link: item.data.link,
  //     logo: getImageURL(logo),
  //     title: item.data.title,
  //   })),
  //   [busDetailData, logo],
  // );

  // const branchListData = useMemo(
  //   () => busDetailData?.content.brand.items.map((item): BranchItemProps => ({
  //     imgSrc: getImageURL(item.logo),
  //     imgAlt: item.name,
  //     title: item.name,
  //     content: {
  //       brand: {
  //         items: {
  //           logoSrc: item.logo,
  //           title: item.name,
  //           description: item.description,
  //           phoneNumber: item.phone,
  //           email: item.email,
  //           urlButton: item.url,
  //           images: item?.images?.map((e) => getImageURL(e)) || [],
  //         },
  //       },
  //     },
  //   })), [busDetailData],
  // );

  // if (isLoading) return <Loading isShow variant="fullScreen" />;

  // if (error) return <RedirectError error={error} />;

  <>
    {/* <HelmetContainer ogData={busDetailData?.openGraph} seoData={busDetailData?.seoData} /> */}
    <section>
      <HeroBannerFieldActivity
        // list={bannerData}
        list={listHeroBanner}
      />
    </section>
    <section>
      <IntroductionFieldInvestmentContainer
        // title={busDetailData?.description || ''}
        // tag={busDetailData?.name || ''}
        // imgSrc={getImageURL(busDetailData?.image) || ''}
        // content={busDetailData?.longDescription || ''}
        tag="Bán lẻ"
        title="Hệ thống nhà hàng - cà phê - giải trí"
        content="Nova FnB xây dựng mô hình kinh doanh, quản lý và vận hành các thương hiệu đẳng cấp quốc tế trong lĩnh vực dịch vụ nhà hàng, chuỗi cà phê và mô hình giải trí.
    <br />
    <br />
    Hợp tác với các đối tác chiến lược, các thương hiệu nổi tiếng thế giới để cung cấp những dịch vụ trọn gói tốt nhất cho khách hàng."
        imgSrc="https://source.unsplash.com/random"
      />
    </section>
    <section>
      <BranchListContainer
        // title={busDetailData?.content?.brand.title || ''}
        // description={busDetailData?.content?.brand.description}
        // branchList={branchListData || []}
        isTooltip
        title="Thương hiệu"
        description="Trên hành trình 29 năm qua, bằng niềm đam mê, sự tập trung và kiên định với mục tiêu, Novaland trở thành Nhà Đầu tư - Phát triển bất động sản uy tín với danh mục sản phẩm đa dạng bao gồm căn hộ, biệt thự, nhà phố, trung tâm thương mại, văn phòng, bất động sản nghỉ dưỡng tại các vị trí chiến lược"
        branchList={branchListInfoData}
      />
    </section>
  </>
);
export default BusDetailsContainer;
