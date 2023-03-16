import React from 'react';

import BranchListContainer from './branchListContainer';
import FieldActivityContainer from './fieldActivityContainer';
import IntroductionFieldInvestmentContainer from './introductionFieldInvestmentContainer';
import VisionMissionValueFullContainer from './visionMissionValuefullContainer';

import {
  branchListInfoData, dataFieldActivityList, listHeroBanner, listVMV
} from 'assets/dataDummy/investmentDetail';
import HeroBannerFieldActivity from 'components/organisms/HeroBannerFieldActivity';

const InvestmentDetailContainer: React.FC = () => (
  // const { slug } = useParams<{ slug: string }>();

  // const dispatch = useAppDispatch();
  // const logo = useAppSelector((state) => state.system.dataSystem?.footer?.logo);
  // const language = useAppSelector((state) => state.system.language);

  // const { data: investmentDetailData, isLoading, error } = useQuery(
  //   ['getInvestmentDetail', slug, language],
  //   () => getInvestmentSectorsDetailService(slug || ''),
  //   DEFAULT_QUERY_OPTION,
  // );

  // const { data: businessUnitData } = useQuery(
  //   ['getBusinessUnitInvestmentDetail', slug, language],
  //   () => getBussinessUnitInvestmentSectorsService(slug || ''),
  //   DEFAULT_QUERY_OPTION,
  // );

  // const branchListData = useMemo(
  //   () => businessUnitData?.map((item) => ({
  //     imgSrc: getImageURL(item.logo),
  //     title: item.title,
  //     href: getPrefixURLCode(language, 'BUS_DETAILS', item.slug),
  //     imgAlt: item.title,
  //   })),
  //   [businessUnitData, language],
  // );

  // const visionMissionData = useMemo(() => {
  //   if (investmentDetailData && investmentDetailData.content.blockActive !== 0) {
  //     return investmentDetailData?.content.blocks.map((item) => ({
  //       imgSrc: getImageURL(item.icon),
  //       title: item.title,
  //       content: item.description,
  //     }));
  //   }
  //   return [];
  // }, [investmentDetailData]);

  // const bannerData = useMemo(
  //   () => investmentDetailData?.banner.map((item) => ({
  //     imageDesktop: getImageURL(item.data.imageDesktop),
  //     imageMobile: getImageURL(item.data.imageMobile),
  //     imageTablet: getImageURL(item.data.imageTablet),
  //     link: item.data.link,
  //     logo: getImageURL(logo),
  //     title: item.data.title,
  //   })),
  //   [investmentDetailData, logo],
  // );

  // const investmentSectorsListData = useMemo(() => (investmentDetailData?.relatedInvestmentSector
  //   ? investmentDetailData?.relatedInvestmentSector.map((val) => ({
  //     imgSrc: getImageURL(val.image),
  //     title: val.name,
  //     desc: val.homeDescription,
  //     href: getPrefixURLCode(language, 'INVESTMENT_SECTORS', val.slug),
  //   }))
  //   : []), [investmentDetailData, language]);

  // useEffect(() => {
  //   if (investmentDetailData) {
  //     dispatch(setPageTranslation({
  //       trans: investmentDetailData.translations,
  //       type: 'INVESTMENT_SECTORS',
  //     }));
  //   }
  // }, [dispatch, investmentDetailData]);

  // useEffect(() => {
  //   if (investmentDetailData) {
  //     dispatch(getInvestmentSectorsAction({
  //       except_ids: (investmentDetailData.id).toString(),
  //     }));
  //   }
  // }, [dispatch, language, investmentDetailData]);

  // if (isLoading) return <Loading isShow variant="fullScreen" />;
  // if (error) return <RedirectError error={error} />;

  <>
    {/* <HelmetContainer
      ogData={investmentDetailData?.openGraph}
      seoData={investmentDetailData?.seoData}
    /> */}
    <section>
      {/* <HeroBannerFieldActivity list={bannerData} /> */}
      <HeroBannerFieldActivity list={listHeroBanner} />
    </section>
    <section>
      <IntroductionFieldInvestmentContainer
        // tag={investmentDetailData?.name || ''}
        // title={investmentDetailData?.description || ''}
        // content={investmentDetailData?.longDescription || ''}
        // imgSrc={getImageURL(investmentDetailData?.image) || ''}
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
      <VisionMissionValueFullContainer
        // dataList={visionMissionData}
        dataList={listVMV}
      />
    </section>
    <section>
      <BranchListContainer
        // title={investmentDetailData?.content?.brand.title || ''}
        // description={investmentDetailData?.content.brand.description}
        // branchListInfoData={branchListData || []}
        title="Thương hiệu"
        description="Trên hành trình 29 năm qua, bằng niềm đam mê, sự tập trung và kiên định với mục tiêu, Novaland trở thành Nhà Đầu tư - Phát triển bất động sản uy tín với danh mục sản phẩm đa dạng bao gồm căn hộ, biệt thự, nhà phố, trung tâm thương mại, văn phòng, bất động sản nghỉ dưỡng tại các vị trí chiến lược"
        branchListInfoData={branchListInfoData}
      />
    </section>
    <section>
      <FieldActivityContainer
        // title={investmentDetailData?.content.investmentSector.title}
        // description={investmentDetailData?.content.investmentSector.description}
        // list={investmentSectorsListData || []}
        title="Lĩnh vực hoạt động"
        list={dataFieldActivityList}
        description="Trên hành trình 29 năm qua, bằng niềm đam mê, sự tập trung và kiên định với mục tiêu, Novaland trở thành Nhà Đầu tư - Phát triển bất động sản uy tín với danh mục sản phẩm đa dạng bao gồm căn hộ, biệt thự, nhà phố, trung tâm thương mại, văn phòng, bất động sản nghỉ dưỡng tại các vị trí chiến lược"
      />
    </section>

  </>
);
export default InvestmentDetailContainer;
