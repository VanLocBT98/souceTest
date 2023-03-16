import React from 'react';

import { heroBannerHomeDummy } from 'assets/dataDummy/home';
import HeroBanner from 'components/organisms/HeroBanner';

interface BannerProps {
  banners: BannersDataTypes[];
}

const HeroBannerContainer: React.FC<BannerProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  banners,
}) => {
  // const logo = useAppSelector((state) => state.system.dataSystem?.header?.logo);

  // const convertBanner = () => {
  //   if (banners.length > 0) {
  //     return banners.map((item) => ({
  //       ...item,
  //       data: {
  //         ...item.data,
  //         imageDesktop: getImageURL(item.data.imageDesktop),
  //         imageMobile: getImageURL(item.data.imageMobile),
  //         imageTablet: getImageURL(item.data.imageTablet),
  //         imgSrc: getImageURL(logo),
  //       },
  //     }));
  //   }
  //   return [];
  // };

  const convertBanner = heroBannerHomeDummy;

  return (
    <section className="p-home_herobanner">
      <HeroBanner
        list={convertBanner}
      />
    </section>
  );
};

HeroBannerContainer.defaultProps = {
};

export default HeroBannerContainer;
