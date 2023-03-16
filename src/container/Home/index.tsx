import React from 'react';

import FieldActivityContainer from './fieldActivityContainer';
import HeroBannerContainer from './heroBanner';
import IntroductionMemberCompaniesContainer from './introductionMemberCompanies';

import {
  blockInVestmentDummy,
  investmentSectorsListDataDummy, heroBannerHomeDummy, dataIntroducingMemberCompaniesList
} from 'assets/dataDummy/home';

interface HomeDataBlock {
  image: string;
  fieldTitle: string;
  fieldDescription: string;
  memberCompaniesTitle: string;
  memberCompaniesDescription: string;
}

export type HomeBlock = HomeDataBlock;

const HomeContainer: React.FC = () => {
  const blockInVestment = blockInVestmentDummy;
  const investmentSectorsListData = investmentSectorsListDataDummy;
  const businessUnitsListData = dataIntroducingMemberCompaniesList;

  return (
    <>
      <HeroBannerContainer banners={heroBannerHomeDummy} />
      {blockInVestment && (
        <section className="p-home_fieldActivity">
          <FieldActivityContainer
            title={blockInVestment?.fieldTitle}
            desc={blockInVestment?.fieldDescription}
            list={investmentSectorsListData || []}
          />
        </section>
      )}

      <IntroductionMemberCompaniesContainer
        bgImageSrc={blockInVestment?.image}
        title={blockInVestment?.memberCompaniesTitle}
        desc={blockInVestment?.memberCompaniesDescription}
        list={businessUnitsListData || []}
      />
    </>
  );
};
export default HomeContainer;
